import useReveal from "../../lib/useReveal";

/**
 * Reveal — wraps content and scroll-animates any `[data-reveal]` descendants
 * (or itself) with a staggered, blurred rise. A polished alternative to fades.
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...opts }) {
  const ref = useReveal(opts);
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
