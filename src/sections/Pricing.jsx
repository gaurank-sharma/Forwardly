import { useState } from "react";
import { Check, ArrowRight, Rocket, Zap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";

const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: Rocket,
    blurb: "For founders & small brands getting their first premium assets.",
    monthly: 24999,
    yearly: 19999,
    features: [
      "1 active project at a time",
      "Web or 3D — your pick",
      "2 revisions per deliverable",
      "Email support",
      "Monthly check-in call",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    icon: Zap,
    blurb: "For scaling brands that need consistent, multi-discipline output.",
    monthly: 49999,
    yearly: 41999,
    popular: true,
    features: [
      "3 active projects",
      "Web + 3D + Branding",
      "Unlimited revisions",
      "Priority support (24h)",
      "Dedicated project manager",
      "Monthly strategy call",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    blurb: "For teams that need a full creative + engineering partner.",
    monthly: 99999,
    yearly: 84999,
    features: [
      "Unlimited projects",
      "Full-service: web, 3D, AR/VR, brand",
      "Same-day priority support",
      "Dedicated senior team",
      "Quarterly roadmap & analytics",
      "SLA & account manager",
    ],
  },
];

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function Pricing() {
  const [cycle, setCycle] = useState("monthly");

  return (
    <section id="pricing" className="relative overflow-hidden bg-bg py-24 sm:py-32">
      {/* ghost word */}
      <span className="pointer-events-none absolute inset-x-0 top-6 select-none text-center font-display text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.03]">
        PRICING
      </span>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col items-center text-center" stagger={0.1}>
          <span
            data-reveal
            className="mb-6 rounded-full border border-[#c2f54b]/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#c2f54b]"
          >
            Our Plans
          </span>
          <h2
            data-reveal
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Pricing &amp; plans <br className="hidden sm:block" />
            for every <span className="text-gradient">ambition.</span>
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-lg leading-relaxed text-white/55">
            Flexible, custom-fit engagements designed to match the needs and
            budget of your team.
          </p>

          {/* toggle */}
          <div data-reveal className="mt-9 inline-flex rounded-full bg-white/[0.06] p-1">
            {["monthly", "yearly"].map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                data-cursor
                className={`rounded-full px-6 py-2.5 text-sm font-bold capitalize transition-colors ${
                  cycle === c ? "bg-[#c2f54b] text-[#0a0a0b]" : "text-white/70 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* cards */}
        <Reveal className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.12} y={40}>
          {plans.map((p) => {
            const Icon = p.icon;
            const price = cycle === "monthly" ? p.monthly : p.yearly;
            return (
              <div
                key={p.id}
                data-reveal
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  p.popular
                    ? "border-[#c2f54b]/40 bg-gradient-to-b from-[#c2f54b]/[0.08] to-transparent shadow-[0_0_80px_-30px_rgba(194,245,75,0.5)]"
                    : "border-white/8 bg-white/[0.02]"
                }`}
              >
                {p.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#c2f54b] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#0a0a0b]">
                    Popular
                  </span>
                )}

                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.06] text-[#c2f54b]">
                  <Icon size={22} />
                </span>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold text-white">{inr(price)}</span>
                  <span className="mb-1 text-sm text-white/50">/mo</span>
                </div>
                <p className="mt-1 text-xs text-white/40">
                  {cycle === "yearly" ? "billed yearly" : "billed monthly"}
                </p>

                <h3 className="mt-5 font-display text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.blurb}</p>

                <Link
                  to="/contact"
                  data-cursor
                  className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-transform hover:scale-[1.02] ${
                    p.popular ? "bg-[#c2f54b] text-[#0a0a0b]" : "bg-white text-[#0a0a0b]"
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>

                <div className="mt-8 border-t border-white/8 pt-6">
                  <p className="text-sm font-semibold text-white">Features</p>
                  <ul className="mt-4 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/65">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#c2f54b]/15 text-[#c2f54b]">
                          <Check size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Reveal>

        <p className="mt-10 text-center text-sm text-white/45">
          Need something custom? <Link to="/contact" className="font-semibold text-[#c2f54b] hover:underline">Let's talk →</Link>
        </p>
      </div>
    </section>
  );
}
