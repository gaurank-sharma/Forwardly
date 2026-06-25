import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";

/**
 * CountUp — animates an integer from 0 → `to` when scrolled into view.
 * Inherits text color/stroke from its parent (so it works inside the
 * outlined-numeral styling).
 */
export default function CountUp({ to, prefix = "", suffix = "", duration = 1.8 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.textContent = `${prefix}0${suffix}`;
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
          },
        }),
    });
    return () => st.kill();
  }, [to, prefix, suffix, duration]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}
