import { Calendar, Mail } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import { LogoMark } from "../components/ui/Logo";

/* Phone mockup showing the Forwardly "brand system" (logo + bento tiles). */
function PhoneMock() {
  return (
    <div className="relative mx-auto w-[260px] rotate-[-6deg] sm:w-[300px]">
      <div className="rounded-[2.75rem] border-[6px] border-[#0a0a0b] bg-[#0a0a0b] p-2 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.6)]">
        {/* notch */}
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0a0a0b]" />
        <div className="relative overflow-hidden rounded-[2.25rem] bg-white p-3">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="aspect-square rounded-2xl bg-[#c2f54b]" />
            <div className="aspect-square rounded-2xl bg-[#0a0a0b]" />
            <div className="aspect-square rounded-2xl bg-[#6c5cef]" />
            <div className="aspect-square rounded-2xl bg-black/5" />
          </div>
          {/* center logo lockup */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex items-center gap-2 rounded-2xl bg-white/85 px-4 py-2.5 backdrop-blur">
              <LogoMark className="h-7 w-7" />
              <span className="font-display text-lg font-extrabold tracking-tight text-[#0a0a0b]">
                FORWARDLY
              </span>
            </div>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2.5">
            <div className="aspect-square rounded-2xl bg-black/5" />
            <div className="aspect-square rounded-2xl bg-[#c2f54b]" />
            <div className="aspect-square rounded-2xl bg-[#0a0a0b]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section id="contact" className="relative bg-bg px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div
            data-reveal
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand px-6 py-16 text-[#0a0a0b] sm:px-12 sm:py-20"
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* copy */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0b] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#c2f54b]">
                  Let's talk
                </span>
                <h2 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.0] tracking-[-0.03em]">
                  Let's build something
                  <br />
                  worth a billion.
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-black/70">
                  Tell us your vision — we'll handle the execution, from first
                  pixel to launch.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@forwardly.in"
                    data-cursor
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0a0a0b] px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
                  >
                    <Calendar size={18} /> Book a discovery call
                  </a>
                  <a
                    href="mailto:hello@forwardly.in"
                    data-cursor
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/20 px-7 py-3.5 text-sm font-bold text-[#0a0a0b] transition-colors hover:bg-black/5"
                  >
                    <Mail size={16} /> hello@forwardly.in
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-black/60">
                  <span>✓ Free project scoping</span>
                  <span>✓ Fixed-scope or retainer</span>
                  <span>✓ Reply within 2 hours</span>
                </div>
              </div>

              {/* phone mockup */}
              <div className="hidden lg:block">
                <PhoneMock />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
