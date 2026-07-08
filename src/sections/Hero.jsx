import { useEffect, useRef } from "react";
import { ArrowUpRight, Play, ShieldCheck } from "lucide-react";
import MagneticButton from "../components/ui/MagneticButton";
import SplitText from "../components/ui/SplitText";
import Aurora from "../components/ui/Aurora";
import { gsap } from "../lib/gsap";

/* Bottom "bento" cluster — modelled closely on the Scalient hero shelf:
   image + floating pill · white stat · dark (icon) · dark (chart) · white
   stat + pills + globe. Photo is a swappable placeholder (picsum). */
function HeroCards() {
  const pill = useRef(null);

  useEffect(() => {
    const el = pill.current;
    if (!el) return;
    // organic 3D drift: x, y and rotation on different cadences
    const t1 = gsap.to(el, { y: -16, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
    const t2 = gsap.to(el, { x: 12, duration: 3.1, ease: "sine.inOut", yoyo: true, repeat: -1 });
    const t3 = gsap.to(el, {
      rotateZ: 4,
      rotateY: 14,
      duration: 3.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      transformPerspective: 500,
    });
    return () => {
      t1.kill();
      t2.kill();
      t3.kill();
    };
  }, []);

  return (
    <div className="hero-cards relative z-10 mx-auto hidden w-full max-w-7xl items-start gap-5 px-6 md:flex">
      <div className="pointer-events-none absolute -bottom-16 left-0 h-56 w-[28rem] rounded-full bg-[#c2f54b]/25 blur-[110px]" />

      {/* 1 — full-bleed image card + jutting floating pill */}
      <div className="relative mt-0 h-[26rem] flex-[2.1]">
        <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/10">
          <img
            src="/image%20copy.png"
            alt="Forwardly creative agency team"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <span
          ref={pill}
          className="absolute -right-5 top-7 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-[#0a0a0b] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] will-change-transform"
        >
          <span className="h-3.5 w-3.5 rounded-[4px] bg-[#0a0a0b]" /> Creative Agency
        </span>
      </div>

      {/* 2 — white stat (offset down) */}
      <div className="mt-24 flex h-72 flex-1 flex-col justify-center rounded-[1.75rem] bg-white p-7 text-[#0a0a0b]">
        <div className="font-display text-6xl font-extrabold leading-none">100%</div>
        <div className="mt-4 text-[0.95rem] leading-snug text-black/55">
          Client-first delivery,
          <br />
          every project
        </div>
      </div>

      {/* 3 — dark, heading + shield (offset down a little) */}
      <div className="relative mt-10 flex h-64 flex-1 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-dark p-7">
        <h3 className="font-display text-2xl font-bold leading-tight text-white">
          Trusted &amp;
          <br />
          On-Time
          <br />
          Delivery
        </h3>
        <ShieldCheck size={60} className="self-end text-white/15" strokeWidth={1.1} />
      </div>

      {/* 4 — dark, heading + bar chart (offset down most) */}
      <div className="relative mt-20 flex h-64 flex-1 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-dark p-7">
        <h3 className="font-display text-2xl font-bold leading-tight text-white">
          Built to
          <br />
          Convert
        </h3>
        <div className="flex items-end gap-2.5">
          <span className="h-10 w-3.5 rounded-md bg-white/12" />
          <span className="h-16 w-3.5 rounded-md bg-white/12" />
          <span className="h-24 w-3.5 rounded-md bg-[#c2f54b]" />
          <span className="h-12 w-3.5 rounded-md bg-white/12" />
        </div>
      </div>

      {/* 5 — white stat + pills + globe */}
      <div className="relative mt-0 h-[26rem] flex-[1.15] overflow-hidden rounded-[1.75rem] bg-white p-7 text-[#0a0a0b]">
        <div className="font-display text-5xl font-extrabold leading-none">Global</div>
        <div className="mt-3 text-[0.95rem] text-black/55">Gurgaon, India · worldwide</div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#0a0a0b] px-3.5 py-1.5 text-xs font-bold text-[#c2f54b]">Async</span>
          <span className="rounded-full bg-[#0a0a0b] px-3.5 py-1.5 text-xs font-bold text-[#c2f54b]">24/7</span>
        </div>
        {/* globe peeking from bottom */}
        <div
          className="pointer-events-none absolute -bottom-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 28%, #45464a 0%, #1c1d20 55%, #050506 100%)",
            boxShadow: "inset -16px -16px 44px rgba(0,0,0,0.75)",
          }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-25"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1.6px)",
              backgroundSize: "13px 13px",
            }}
          />
          {/* latitude lines */}
          <div className="absolute inset-x-0 top-1/3 h-px bg-white/10" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
          <div className="absolute inset-x-0 top-2/3 h-px bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.8 })
        .from(
          ".split-char",
          {
            yPercent: 120,
            opacity: 0,
            rotateX: -55,
            transformOrigin: "0% 100%",
            transformPerspective: 700,
            duration: 1,
            stagger: 0.025,
          },
          "-=0.35"
        )
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from(".hero-cards > div", { y: 40, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-gradient-dark pb-10 text-white"
    >
      <Aurora dark className="opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 72%)",
        }}
      />

      {/* heading block */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pt-32 text-center">
        <span className="hero-eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c2f54b]" />
          Creative &amp; 3D Agency · Web × CGI
        </span>

        <h1 className="font-display text-[clamp(3rem,8.5vw,7rem)] font-extrabold leading-[0.98] tracking-[-0.03em] [perspective:800px]">
          <span className="block overflow-hidden pb-[0.05em]">
            <SplitText text="Your Vision." />
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <SplitText text="Our Execution." gradient />
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/60">
          We design and build premium digital experiences — high-performance
          websites, photoreal 3D product visuals, brand and growth.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <div className="hero-cta">
            <MagneticButton to="/contact">
              Start Your Project <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
          <div className="hero-cta">
            <MagneticButton variant="secondary" to="/work">
              <Play size={16} className="text-[#c2f54b]" /> Watch Demo
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* bottom card cluster */}
      <HeroCards />
    </section>
  );
}
