import { useEffect, useRef } from "react";
import { gsap } from "./gsap";

/**
 * useMagnetic
 * Pulls an element toward the cursor on hover, with springy GSAP easing.
 * Returns a ref to attach to the target element.
 */
export default function useMagnetic({ strength = 0.4, scale = 1.04 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width / 2);
      const relY = e.clientY - (r.top + r.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    };
    const onEnter = () => gsap.to(el, { scale, duration: 0.4, ease: "power3.out" });
    const onLeave = () => {
      xTo(0);
      yTo(0);
      gsap.to(el, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, scale]);

  return ref;
}
