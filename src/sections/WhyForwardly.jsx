import { useEffect, useRef } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { pillars } from "../data/content";

const keywords = ["Future", "Speed", "Execution", "Innovation", "Trust", "Global"];

export default function WhyForwardly() {
  const trackRef = useRef(null);

  // animated keyword counter / progress bar on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".pillar-bar").forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 88%" },
          }
        );
      });
    }, trackRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why" ref={trackRef} className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why Forwardly"
              title={<>The standard <span className="text-gradient">we hold.</span></>}
              intro="We obsess over the details that make a product feel inevitable — speed, polish, and results that compound over time."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-white/8 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-muted"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>

          {/* pillars */}
          <Reveal className="flex flex-col gap-5" stagger={0.12} y={40}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                data-reveal
                className="group rounded-3xl glass p-7 transition-shadow duration-500 hover:shadow-[0_30px_60px_-35px_rgba(194, 245, 75,0.5)]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-4xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgba(194, 245, 75,0.45)]">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-black/5">
                  <div className="pillar-bar h-full w-full rounded-full bg-gradient-brand" />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
