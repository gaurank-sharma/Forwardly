/**
 * Aurora — animated gradient mesh background (blurred, drifting blobs).
 * Pure CSS/blur, GPU-friendly. `dark` tunes the palette for dark sections.
 */
export default function Aurora({ dark = false, className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -left-[10%] top-[-15%] h-[55vmax] w-[55vmax] rounded-full blur-[100px]"
        style={{
          background: dark
            ? "radial-gradient(circle, rgba(194, 245, 75,0.45), transparent 65%)"
            : "radial-gradient(circle, rgba(194, 245, 75,0.22), transparent 65%)",
          animation: "var(--animate-aurora)",
        }}
      />
      <div
        className="absolute right-[-12%] top-[20%] h-[48vmax] w-[48vmax] rounded-full blur-[110px]"
        style={{
          background: dark
            ? "radial-gradient(circle, rgba(166, 230, 53,0.4), transparent 65%)"
            : "radial-gradient(circle, rgba(166, 230, 53,0.18), transparent 65%)",
          animation: "var(--animate-aurora)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[30%] h-[42vmax] w-[42vmax] rounded-full blur-[120px]"
        style={{
          background: dark
            ? "radial-gradient(circle, rgba(166, 230, 53,0.3), transparent 65%)"
            : "radial-gradient(circle, rgba(166, 230, 53,0.14), transparent 65%)",
          animation: "var(--animate-aurora)",
          animationDelay: "-11s",
        }}
      />
    </div>
  );
}
