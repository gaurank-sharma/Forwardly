import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

/**
 * SmoothScroll
 * Wraps the app with Lenis physics-based smooth scrolling and keeps
 * GSAP ScrollTrigger in sync via the shared ticker.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    // expose for anchor navigation
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // refresh once fonts/layout settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return children;
}

/** Programmatic scroll to a selector or position, respecting Lenis. */
export function scrollTo(target, opts = {}) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset: -80, duration: 1.3, ...opts });
  } else {
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth" });
  }
}
