import { ArrowUpRight } from "lucide-react";
import MagneticButton from "../components/ui/MagneticButton";
import Reveal from "../components/ui/Reveal";
import { services } from "../data/services";

/* Scalient-style service card: dark by default, flips white + tilts on hover. */
function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div
      data-cursor
      className="group relative flex h-72 flex-col rounded-3xl border border-white/8 bg-white/[0.03] p-7 transition-all duration-300 ease-out will-change-transform hover:-rotate-3 hover:scale-[1.03] hover:border-transparent hover:bg-white hover:shadow-[0_36px_70px_-25px_rgba(0,0,0,0.75)]"
    >
      {/* tag */}
      {(service.tag || service.soon) && (
        <span
          className={`absolute right-5 top-5 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide ${
            service.soon
              ? "border border-white/15 text-white/60 group-hover:border-black/15 group-hover:text-black/50"
              : "bg-[#c2f54b] text-[#0a0a0b]"
          }`}
        >
          {service.soon ? "Soon" : service.tag}
        </span>
      )}

      <Icon
        size={26}
        className="text-[#c2f54b] transition-colors duration-300 group-hover:text-[#0a0a0b]"
      />

      <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#0a0a0b]">
        {service.title}
      </h3>

      <p className="mt-auto text-sm leading-relaxed text-white/50 transition-colors duration-300 group-hover:text-black/60">
        {service.desc}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* header row */}
        <Reveal className="grid items-end gap-8 lg:grid-cols-2" stagger={0.12}>
          <h2 data-reveal className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Solutions tailored
            <br />
            for your <span className="text-gradient">growth.</span>
          </h2>
          <div data-reveal className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-sm text-lg leading-relaxed text-white/55 lg:text-right">
              One studio for everything digital — led by web development and
              extended across 3D, brand, motion and growth.
            </p>
            <MagneticButton to="/contact">
              Get Started <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </Reveal>

        {/* cards */}
        <Reveal
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
          y={40}
        >
          {services.map((s) => (
            <div key={s.id} data-reveal>
              <ServiceCard service={s} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
