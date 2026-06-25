import { useEffect, useRef } from "react";
import { Compass, Layers, Rocket, LineChart } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { gsap, ScrollTrigger } from "../lib/gsap";

const stages = [
  {
    icon: Compass,
    k: "01",
    t: "Plan",
    d: "We translate your vision into a precise execution roadmap — scope, architecture and milestones.",
  },
  {
    icon: Layers,
    k: "02",
    t: "Build",
    d: "Senior engineers build in tight loops with design systems, so quality scales with speed.",
  },
  {
    icon: Rocket,
    k: "03",
    t: "Ship",
    d: "Continuous delivery to production — fast, observable and reversible. No big-bang risk.",
  },
  {
    icon: LineChart,
    k: "04",
    t: "Scale",
    d: "We measure, optimise and extend — turning launch into compounding, durable growth.",
  },
];

const stack = [
  "React", "Next.js", "Three.js", "WebGL", "Node", "TypeScript",
  "Tailwind", "GSAP", "Postgres", "Vercel", "AWS", "Figma",
];

export default function ExecutionSystem() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // draw the connecting line on scroll
      gsap.fromTo(
        ".exec-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "none",
          scrollTrigger: { trigger: ".exec-track", start: "top 70%", end: "bottom 60%", scrub: true },
        }
      );

      // depth-layered staggered entrance + per-card parallax
      gsap.utils.toArray(".exec-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.92, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
        gsap.to(card, {
          yPercent: -8 - i * 4,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-gradient-dark py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_10%,rgba(194, 245, 75,0.35),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          dark
          align="center"
          eyebrow="The execution system"
          title={<>Vision in. <span className="text-gradient">Results out.</span></>}
          intro="Forwardly runs on a repeatable execution system — the same operating model elite product teams use to ship fast without breaking quality."
        />

        {/* pipeline */}
        <div className="exec-track relative mt-20">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block">
            <div className="exec-line h-full w-full bg-gradient-brand" />
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {stages.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.k} className="exec-card relative rounded-3xl glass-dark p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-[#0a0a0b] shadow-[0_0_40px_rgba(194, 245, 75,0.5)]">
                      <Icon size={24} />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgba(166, 230, 53,0.45)]">
                      {s.k}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* tech stack */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            The stack we execute on
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:border-[#c2f54b]/60 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
