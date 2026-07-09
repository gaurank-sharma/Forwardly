import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "../../lib/gsap";
import { LogoMark } from "../ui/Logo";

/**
 * PageTransition — a gradient curtain with the Forwardly mark that plays once
 * as an intro on the very first load. It intentionally does NOT replay on
 * client-side route changes, so SPA navigation stays instant.
 */
export default function PageTransition() {
  const { pathname } = useLocation();
  const panel = useRef(null);
  const mark = useRef(null);
  const played = useRef(false);

  useLayoutEffect(() => {
    if (played.current) return; // first load only — never on navigation
    played.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = gsap.timeline();
    // cover instantly (before paint) so there's no flash of the new page
    tl.set(panel.current, { yPercent: 0, autoAlpha: 1, transformOrigin: "top" })
      .set(mark.current, { autoAlpha: 0, scale: 0.7, y: 10 })
      .to(mark.current, { autoAlpha: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" })
      .to(mark.current, { autoAlpha: 0, duration: 0.25, ease: "power2.in" }, "+=0.12")
      .to(
        panel.current,
        { yPercent: -100, duration: 0.8, ease: "expo.inOut" },
        "-=0.1"
      )
      .set(panel.current, { autoAlpha: 0 });
    return () => tl.kill();
  }, [pathname]);

  return (
    <div
      ref={panel}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2000] grid place-items-center bg-gradient-dark"
      style={{ visibility: "hidden" }}
    >
      <div ref={mark} className="grid h-20 w-20 place-items-center rounded-3xl glass-dark glow-brand">
        <LogoMark className="h-10 w-10" glow />
      </div>
    </div>
  );
}
