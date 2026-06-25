import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Aurora from "../ui/Aurora";

/**
 * PageHero — compact cinematic header used at the top of inner pages.
 * Provides a breadcrumb, oversized title and intro on a dark gradient.
 */
export default function PageHero({ eyebrow, title, intro, crumb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-dark pb-16 pt-36 text-white sm:pb-20 sm:pt-44">
      <Aurora dark className="opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050506] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 text-sm text-white/50">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-white/80">{crumb || title}</span>
        </nav>

        {eyebrow && (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            {eyebrow}
          </span>
        )}

        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          {title}
        </h1>

        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
