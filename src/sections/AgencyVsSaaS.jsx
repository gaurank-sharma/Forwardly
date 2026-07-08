import { Check, Sparkles, Layers, Zap, Users, Infinity as Inf } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import Reveal from "../components/ui/Reveal";

const agency = {
  label: "The Agency",
  tagline: "Hands-on craft",
  icon: Users,
  points: [
    "Senior, dedicated project teams",
    "Bespoke design & engineering",
    "End-to-end delivery, your timeline",
    "Strategy, brand & growth in-house",
  ],
};

const saas = {
  label: "The Platform",
  tagline: "Scalable systems",
  icon: Layers,
  points: [
    "Reusable design systems & components",
    "Dashboards, analytics & automation",
    "Self-serve tools that scale with you",
    "Continuous iteration, always-on",
  ],
};

function Column({ data, dark }) {
  const Icon = data.icon;

  const inner = (
    <>
      <div className="flex items-center gap-3">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${
            dark ? "bg-white/10 text-[#a6e635]" : "bg-gradient-brand text-[#0a0a0b]"
          }`}
        >
          <Icon size={22} />
        </span>
        <div>
          <p className={`text-xs uppercase tracking-[0.18em] ${dark ? "text-white/50" : "text-muted"}`}>
            {data.tagline}
          </p>
          <h3 className={`font-display text-2xl font-bold ${dark ? "text-white" : "text-ink"}`}>
            {data.label}
          </h3>
        </div>
      </div>
      <ul className="mt-7 space-y-4">
        {data.points.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                dark ? "bg-[#c2f54b]/30 text-[#a6e635]" : "bg-[#c2f54b]/10 text-[#c2f54b]"
              }`}
            >
              <Check size={13} />
            </span>
            <span className={`text-[0.97rem] ${dark ? "text-white/80" : "text-muted"}`}>
              {p}
            </span>
          </li>
        ))}
      </ul>
    </>
  );

  // Dark column = a solid dark card so white text stays legible on the
  // light section background. Light column = frosted glass.
  if (dark) {
    return (
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-dark p-7 shadow-[0_30px_70px_-40px_rgba(11, 16, 29,0.7)]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#c2f54b]/25 blur-3xl" />
        <div className="relative">{inner}</div>
      </div>
    );
  }
  return <GlassCard className="h-full">{inner}</GlassCard>;
}

export default function AgencyVsSaaS() {
  return (
    <section id="platform" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Two engines, one agency"
          title={<>Agency craft. <span className="text-gradient">Platform scale.</span></>}
          intro="Most studios make you choose. Forwardly fuses the bespoke care of a premium agency with the leverage of a SaaS platform — so you get craft and scale at once."
        />

        <Reveal className="mt-16 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]" stagger={0.15}>
          <div data-reveal>
            <Column data={agency} dark={false} />
          </div>

          {/* center fusion badge */}
          <div data-reveal className="flex items-center justify-center">
            <div className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-brand text-[#0a0a0b] glow-brand">
              <Inf size={30} />
              <span className="absolute inset-0 animate-ping rounded-full border border-[#c2f54b]/40" />
            </div>
          </div>

          <div data-reveal>
            <Column data={saas} dark />
          </div>
        </Reveal>

        {/* fusion strip */}
        <Reveal className="mt-10">
          <div data-reveal className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl glass px-8 py-6 text-sm font-medium text-muted">
            <span className="inline-flex items-center gap-2"><Zap size={16} className="text-[#c2f54b]" /> Ship faster</span>
            <span className="inline-flex items-center gap-2"><Sparkles size={16} className="text-[#c2f54b]" /> Premium quality</span>
            <span className="inline-flex items-center gap-2"><Layers size={16} className="text-[#c2f54b]" /> Built to scale</span>
            <span className="inline-flex items-center gap-2"><Users size={16} className="text-[#c2f54b]" /> One partner</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
