import { Quote } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { testimonials } from "../data/content";

/* Card themes cycled across the stack. */
const themes = [
  { card: "bg-[#101012] border border-white/10 text-white", quote: "text-[#c2f54b]", role: "text-white/50", avatar: "bg-[#c2f54b] text-[#0a0a0b]" },
  { card: "bg-white text-[#0a0a0b]", quote: "text-[#0a0a0b]", role: "text-black/50", avatar: "bg-[#0a0a0b] text-white" },
  { card: "bg-[#c2f54b] text-[#0a0a0b]", quote: "text-[#0a0a0b]", role: "text-black/55", avatar: "bg-[#0a0a0b] text-[#c2f54b]" },
];

const initials = (name) => name.split(" ").map((n) => n[0]).join("").slice(0, 2);

export default function Testimonials() {
  return (
    <section className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          dark
          align="center"
          eyebrow="In their words"
          title={<>What partners <span className="text-gradient">say.</span></>}
          intro="The teams we work with want a partner that ships like a product org — fast, polished, and accountable to results."
        />

        {/* sticky-stacked, tilted cards */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {testimonials.map((t, i) => {
            const th = themes[i % themes.length];
            const rot = i % 2 === 0 ? -2.2 : 1.8;
            return (
              <div key={i} className="sticky mb-10" style={{ top: `${110 + i * 26}px` }}>
                <figure
                  className={`rounded-[2rem] p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] sm:p-10 ${th.card}`}
                  style={{ rotate: `${rot}deg` }}
                >
                  <Quote size={40} className={th.quote} />
                  <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[1.7rem]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className={`grid h-12 w-12 place-items-center rounded-full font-display text-sm font-bold ${th.avatar}`}>
                      {initials(t.name)}
                    </span>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className={`text-sm ${th.role}`}>{t.role}</div>
                      {t.site && (
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`text-sm font-medium underline-offset-2 hover:underline ${th.quote}`}
                        >
                          {t.site} ↗
                        </a>
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
