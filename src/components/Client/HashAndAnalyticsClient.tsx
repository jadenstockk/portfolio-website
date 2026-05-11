"use client";

import { useEffect } from "react";
import ReactGA from "react-ga";

export default function HashAndAnalyticsClient() {
  useEffect(() => {
    ReactGA.initialize("G-J0XEB94HE2");
    ReactGA.pageview(window.location.pathname + window.location.search);

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return null;
}
