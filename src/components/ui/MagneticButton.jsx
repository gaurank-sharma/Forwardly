import { Link } from "react-router-dom";
import useMagnetic from "../../lib/useMagnetic";

/**
 * MagneticButton — premium CTA with magnetic hover, glass reflection and
 * an animated sheen.
 * - `to`   → renders a react-router <Link> (internal navigation)
 * - `href` → renders an <a> (external / mailto)
 * - else   → renders a <button>
 *
 * variant: "primary" (gradient) | "secondary" (dark glass) | "light" | "ghost"
 */
export default function MagneticButton({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  className = "",
  strength = 0.45,
  ...props
}) {
  const ref = useMagnetic({ strength });
  const Tag = to ? Link : href ? "a" : "button";

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-7 py-3.5 text-[0.95rem] font-bold tracking-tight transition-shadow duration-300 will-change-transform";

  const variants = {
    primary:
      "bg-gradient-brand text-[#0a0a0b] shadow-[0_18px_40px_-18px_rgba(194,245,75,0.7)] hover:shadow-[0_0_60px_rgba(194,245,75,0.4)]",
    secondary:
      "bg-white/[0.06] text-white border border-white/15 hover:border-[#c2f54b]/60 hover:bg-white/10",
    light:
      "bg-white text-[#0a0a0b] hover:bg-white/90",
    ghost: "text-white/80 hover:text-white",
  };

  return (
    <Tag
      ref={ref}
      to={to}
      href={href}
      onClick={onClick}
      data-cursor
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* glass reflection / sheen sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Tag>
  );
}
