/**
 * Marquee — infinite horizontal scroller. Duplicates children so the
 * CSS `marquee` animation loops seamlessly. `reverse` flips direction.
 */
export default function Marquee({ children, reverse = false, className = "" }) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 items-center gap-12 pr-12"
        style={{
          animation: "var(--animate-marquee)",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
