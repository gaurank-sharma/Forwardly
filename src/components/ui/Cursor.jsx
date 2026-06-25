import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

/**
 * Cursor — interactive dual-ring cursor.
 * A small dot tracks instantly; a larger ring lags with easing and grows
 * when hovering interactive elements ([data-cursor], a, button).
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-none-fine");

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const grow = () =>
      gsap.to(ring, { scale: 1.9, opacity: 0.9, duration: 0.35, ease: "power3.out" });
    const shrink = () =>
      gsap.to(ring, { scale: 1, opacity: 0.5, duration: 0.35, ease: "power3.out" });

    const interactive = "a, button, [data-cursor], input, textarea, [role='button']";
    const onOver = (e) => {
      if (e.target.closest(interactive)) grow();
    };
    const onOut = (e) => {
      if (e.target.closest(interactive)) shrink();
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("cursor-none-fine");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={ringRef}
        className="absolute -left-5 -top-5 h-10 w-10 rounded-full border border-[#c2f54b] opacity-50 mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-[#c2f54b]"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
