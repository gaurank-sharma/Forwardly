import Reveal from "./Reveal";

/**
 * SectionHeading — consistent eyebrow + title + intro block used across
 * sections. `dark` adjusts colors for dark backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal
      className={`flex max-w-3xl flex-col ${alignment} ${className}`}
      y={26}
      stagger={0.12}
    >
      {eyebrow && (
        <span
          data-reveal
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark
              ? "border-white/15 text-white/70"
              : "border-white/10 text-muted"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </span>
      )}
      <h2
        data-reveal
        className={`font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.4rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          data-reveal
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-white/65" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
