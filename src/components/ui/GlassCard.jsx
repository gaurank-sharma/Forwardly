import { useRef } from "react";
import { gsap } from "../../lib/gsap";

/**
 * GlassCard — floating glass panel with a 3D tilt + spotlight that follows
 * the cursor. Set `dark` for use on dark sections.
 */
export default function GlassCard({
  children,
  className = "",
  dark = false,
  tilt = true,
  ...props
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (!tilt || !ref.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    gsap.to(el, {
      rotateY: (px - 0.5) * 10,
      rotateX: (0.5 - py) * 10,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 900,
    });
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden rounded-3xl p-7 transition-shadow duration-500 ${
        dark ? "glass-dark" : "glass"
      } ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgba(194, 245, 75,0.16), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
