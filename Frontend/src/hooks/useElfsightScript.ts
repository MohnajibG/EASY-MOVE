import { useEffect, useRef } from "react";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

/**
 * Elfsight's platform.js is ~1.3MB combined across widgets and runs heavy
 * work on the main thread, so it's only injected once the widget's section
 * actually approaches the viewport instead of on every page load.
 */
export const useElfsightScript = (enabled: boolean) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const node = sectionRef.current;
    if (!node) return;

    const loadScript = () => {
      if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) return;
      const script = document.createElement("script");
      script.src = ELFSIGHT_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadScript();
          observer.disconnect();
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled]);

  return sectionRef;
};
