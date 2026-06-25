import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";

/**
 * useReveal
 * Scroll-driven entrance for a container's direct `[data-reveal]` children
 * (or the container itself). Staggered, premium easing — never a basic fade.
 */
export default function useReveal({ stagger = 0.09, y = 34, start = "top 82%" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");
    const items = targets.length ? targets : [el];

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y, filter: "blur(8px)" });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: el, start },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, y, start]);

  return ref;
}
