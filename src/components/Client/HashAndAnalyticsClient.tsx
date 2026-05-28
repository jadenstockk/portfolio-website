"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReactGA from "react-ga";

type UmamiPayload = Record<string, string | number | boolean>;

type UmamiTracker = {
  track: (eventName: string, data?: UmamiPayload) => void;
};

declare global {
  interface Window {
    umami?: UmamiTracker;
  }
}

const TRACKED_SECTION_IDS = ["hero", "about", "projects", "contact", "archive", "case-study"];
const SCROLL_MILESTONES = [25, 50, 75, 90];
let analyticsInitialized = false;

function trackUmami(eventName: string, data?: UmamiPayload) {
  window.umami?.track?.(eventName, data);
}

function getReadableLabel(element: Element) {
  const explicitLabel = element.getAttribute("data-analytics-label");
  if (explicitLabel) {
    return explicitLabel;
  }

  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel) {
    return ariaLabel;
  }

  const title = element.getAttribute("title");
  if (title) {
    return title;
  }

  return element.textContent?.replace(/\s+/g, " ").trim().slice(0, 120) || "unknown";
}

export default function HashAndAnalyticsClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!analyticsInitialized) {
      ReactGA.initialize("G-J0XEB94HE2");
      analyticsInitialized = true;
    }

    const query = searchParams?.toString() ?? "";
    const pathWithQuery = query ? `${pathname}?${query}` : pathname;
    ReactGA.pageview(pathWithQuery);
    trackUmami("page_view", {
      path: pathname,
      query: query || "none",
      title: document.title,
    });

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
        trackUmami("hash_nav", { target: id, path: pathname });
      }
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const seenSections = new Set<string>();
    const seenScrollMilestones = new Set<number>();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.55) {
            return;
          }

          const sectionId = (entry.target as HTMLElement).id;
          if (seenSections.has(sectionId)) {
            return;
          }

          seenSections.add(sectionId);
          trackUmami("section_view", { section: sectionId, path: pathname });
        });
      },
      { threshold: [0.55] },
    );

    TRACKED_SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-analytics-event], a, button");
      if (!trackedElement) {
        return;
      }

      const eventName = trackedElement.dataset.analyticsEvent || "element_click";
      const href = trackedElement.getAttribute("href");
      const isExternalLink = href ? /^https?:\/\//.test(href) : false;

      trackUmami(eventName, {
        label: getReadableLabel(trackedElement),
        href: href || "none",
        path: pathname,
        section: trackedElement.closest<HTMLElement>("[id]")?.id || "none",
        external: isExternalLink,
      });
    };

    const handleDocumentSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form) {
        return;
      }

      trackUmami("form_submit", {
        form: form.dataset.analyticsForm || form.id || "unknown_form",
        path: pathname,
      });
    };

    const handleInvalid = (event: Event) => {
      const field = event.target as HTMLInputElement | HTMLTextAreaElement | null;
      if (!field) {
        return;
      }

      trackUmami("form_invalid", {
        form: field.form?.dataset.analyticsForm || field.form?.id || "unknown_form",
        field: field.name || "unknown_field",
        path: pathname,
      });
    };

    const handleScroll = () => {
      const maxScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScrollableHeight <= 0) {
        return;
      }

      const scrollDepth = Math.round((window.scrollY / maxScrollableHeight) * 100);
      SCROLL_MILESTONES.forEach((milestone) => {
        if (scrollDepth >= milestone && !seenScrollMilestones.has(milestone)) {
          seenScrollMilestones.add(milestone);
          trackUmami("scroll_depth", { milestone, path: pathname });
        }
      });
    };

    document.addEventListener("click", handleDocumentClick, true);
    document.addEventListener("submit", handleDocumentSubmit, true);
    document.addEventListener("invalid", handleInvalid, true);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      document.removeEventListener("click", handleDocumentClick, true);
      document.removeEventListener("submit", handleDocumentSubmit, true);
      document.removeEventListener("invalid", handleInvalid, true);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
