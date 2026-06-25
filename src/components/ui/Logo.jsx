/**
 * Logo — scalable Forwardly mark (forward-leaning gradient "F") plus wordmark.
 * `mark` renders the glyph only; `dark` switches wordmark color for dark bg.
 */
export function LogoMark({ className = "h-9 w-9", glow = false }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Forwardly"
      style={glow ? { filter: "drop-shadow(0 6px 22px rgba(194, 245, 75,0.55))" } : undefined}
    >
      <defs>
        <linearGradient id="fwd-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c2f54b" />
          <stop offset="100%" stopColor="#a6e635" />
        </linearGradient>
      </defs>
      {/* forward-leaning F built from skewed bars */}
      <g transform="skewX(-12)" fill="url(#fwd-grad)">
        <path d="M22 8 H52 L48 20 H26 L24 28 H44 L40 40 H22 L16 56 H6 L18 14 C18.6 10.6 19.8 8 22 8 Z" />
      </g>
      {/* accent speed slash */}
      <path
        d="M40 6 L58 6 L46 18 L34 18 Z"
        transform="skewX(-12)"
        fill="url(#fwd-grad)"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Logo({ dark = false, className = "", markClassName }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName || "h-8 w-8"} />
      <span
        className={`font-display text-[1.35rem] font-extrabold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        FORWARDLY
      </span>
    </span>
  );
}
