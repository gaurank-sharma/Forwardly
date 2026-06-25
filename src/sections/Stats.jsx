import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import CountUp from "../components/ui/CountUp";
import { gsap } from "../lib/gsap";

const cards = [
  {
    n: 100,
    unit: "%",
    label: "Client-first delivery on every single project.",
    cls: "bg-gradient-brand text-[#0a0a0b]",
    sub: "text-black/60",
  },
  {
    n: 7,
    unit: "+",
    label: "In-house services — web, 3D, AR/VR and brand.",
    cls: "bg-white text-[#0a0a0b]",
    sub: "text-black/55",
  },
  {
    n: 360,
    unit: "°",
    label: "Interactive, spinnable 3D product views.",
    cls: "bg-white/[0.04] text-white border border-white/10",
    sub: "text-white/55",
  },
];

const pills = [
  { t: "Creative Studio", cls: "bg-white text-[#0a0a0b]", rot: -9, mt: "mt-4" },
  { t: "3D-first", cls: "bg-[#c2f54b] text-[#0a0a0b]", rot: 8, mt: "mt-14" },
  { t: "Detail-obsessed", cls: "bg-[#f97316] text-white", rot: -6, mt: "mt-0" },
  { t: "Photoreal CGI", cls: "bg-white text-[#0a0a0b]", rot: 11, mt: "mt-12" },
  { t: "Results-driven", cls: "bg-[#1a1a1c] text-white border border-white/10", rot: -8, mt: "mt-2" },
  { t: "Premium Quality", cls: "bg-[#c2f54b] text-[#0a0a0b]", rot: 7, mt: "mt-16" },
  { t: "Studio-grade", cls: "bg-[#6c5cef] text-white", rot: -11, mt: "mt-1" },
  { t: "Pixel-perfect", cls: "bg-white text-[#0a0a0b]", rot: 6, mt: "mt-10" },
  { t: "Fast Turnaround", cls: "bg-[#c2f54b] text-[#0a0a0b]", rot: -7, mt: "mt-3" },
  { t: "Conversion-focused", cls: "bg-[#1a1a1c] text-white border border-white/10", rot: 10, mt: "mt-14" },
  { t: "Innovation-led", cls: "bg-[#f97316] text-white", rot: -5, mt: "mt-6" },
  { t: "Trusted Partner", cls: "bg-[#6c5cef] text-white", rot: 9, mt: "mt-1" },
];

export default function Stats() {
  const pillWrap = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = pillWrap.current.querySelectorAll(".pill");
      gsap.fromTo(
        els,
        { y: -160, opacity: 0, rotation: 0 },
        {
          y: 0,
          opacity: 1,
          rotation: (i, el) => +el.dataset.rot,
          duration: 1.1,
          ease: "back.out(1.5)",
          stagger: 0.08,
          scrollTrigger: { trigger: pillWrap.current, start: "top 80%" },
        }
      );
    }, pillWrap);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* header */}
        <Reveal className="grid items-start gap-8 lg:grid-cols-2" stagger={0.12}>
          <h2 data-reveal className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            The numbers
            <br />
            behind <span className="text-gradient">the work.</span>
          </h2>
          <div data-reveal className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-sm text-lg leading-relaxed text-white/55 lg:text-right">
              Strategy, craft and execution — the engine behind every Forwardly
              project.
            </p>
            <Link
              to="/contact"
              data-cursor
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#c2f54b] px-6 py-3.5 text-sm font-bold text-[#0a0a0b] transition-transform hover:scale-[1.03]"
            >
              Get Started <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* cards */}
        <Reveal className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.12} y={40}>
          {cards.map((c) => (
            <div
              key={c.unit}
              data-reveal
              className={`flex h-72 flex-col justify-between rounded-3xl p-8 ${c.cls}`}
            >
              <div className="flex items-start">
                <span className="font-display text-7xl font-extrabold leading-none">
                  <CountUp to={c.n} />
                </span>
                <span className="mt-2 font-display text-2xl font-bold">{c.unit}</span>
              </div>
              <p className={`text-[0.95rem] leading-snug ${c.sub}`}>{c.label}</p>
            </div>
          ))}
        </Reveal>

        {/* falling pills */}
        <div
          ref={pillWrap}
          className="relative mt-24 flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
        >
          {pills.map((p) => (
            <span
              key={p.t}
              data-rot={p.rot}
              className={`pill ${p.mt} inline-block rounded-full px-7 py-3.5 text-lg font-bold shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] will-change-transform ${p.cls}`}
            >
              {p.t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
