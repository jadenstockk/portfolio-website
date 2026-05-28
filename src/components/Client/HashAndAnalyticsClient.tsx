"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
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

  useEffect(() => {
    if (!analyticsInitialized) {
      ReactGA.initialize("G-J0XEB94HE2");
      analyticsInitialized = true;
    }

    const query = window.location.search.replace(/^\?/, "");
    const pathWithQuery = query ? `${pathname}?${query}` : pathname;
    ReactGA.pageview(pathWithQuery);

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-analytics-event]");
      if (!trackedElement) {
        return;
      }

      const eventName = trackedElement.dataset.analyticsEvent;
      if (!eventName) {
        return;
      }

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

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [pathname]);

  return null;
}
