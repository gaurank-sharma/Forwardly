import { ShieldCheck, Zap, Clock, Gauge } from "lucide-react";
import Marquee from "../components/ui/Marquee";
import Reveal from "../components/ui/Reveal";
import { clients } from "../data/content";

const points = [
  { icon: ShieldCheck, label: "Senior-only team" },
  { icon: Zap, label: "Ship in weeks, not quarters" },
  { icon: Clock, label: "On-time, every time" },
  { icon: Gauge, label: "Performance-first builds" },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-white/5 bg-bg py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center" stagger={0.1}>
          <p
            data-reveal
            className="text-xs font-semibold uppercase tracking-[0.22em] text-muted"
          >
            Trusted to execute by ambitious teams
          </p>
        </Reveal>

        {/* logos */}
        <div className="mt-8">
          <Marquee>
            {clients.map((c) => (
              <span
                key={c}
                className="font-display text-2xl font-bold tracking-tight text-ink/25 transition-colors hover:text-ink/50"
              >
                {c}
              </span>
            ))}
          </Marquee>
        </div>

        {/* trust points */}
        <Reveal
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          stagger={0.08}
        >
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                data-reveal
                className="flex items-center gap-3 rounded-2xl glass px-4 py-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#c2f54b]/10 text-[#c2f54b]">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-ink">{p.label}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
