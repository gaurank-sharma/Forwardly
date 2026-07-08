import { Check, ArrowRight, LayoutTemplate, Settings2, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";

const plans = [
  {
    id: "basic",
    name: "Basic Website",
    icon: LayoutTemplate,
    blurb: "Ideal for startups & small businesses",
    price: 15000,
    features: [
      "5-page website",
      "Responsive design",
      "Contact form",
      "Basic SEO setup",
      "Speed optimization",
      "Social media integration",
      "1 month support",
    ],
  },
  {
    id: "admin",
    name: "Website + Admin Panel",
    icon: Settings2,
    blurb: "Edit your site yourself — admin panel for 1 user",
    price: 20000,
    features: [
      "5-page website",
      "Responsive design",
      "Admin panel (1 user) to edit content",
      "Contact & lead form",
      "Basic SEO setup",
      "Speed optimization",
      "Social media integration",
      "1 month support",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    icon: Zap,
    blurb: "Perfect for growing businesses",
    price: 35000,
    popular: true,
    features: [
      "10-page website",
      "Premium responsive design",
      "CMS for easy updates",
      "Advanced SEO setup",
      "Speed & performance optimization",
      "Lead capture forms",
      "Google Analytics integration",
      "3 months support",
    ],
  },
  {
    id: "premium",
    name: "Premium Website",
    icon: Crown,
    blurb: "Advanced solution for serious brands",
    price: 65000,
    features: [
      "20-page website",
      "Custom UI/UX design",
      "CMS for easy updates",
      "Advanced SEO + Schema setup",
      "Speed & performance optimization",
      "Lead generation system",
      "Google Analytics & Search Console",
      "6 months support",
    ],
  },
];

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-bg py-24 sm:py-32">
      <span className="pointer-events-none absolute inset-x-0 top-6 select-none text-center font-display text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.03]">
        PRICING
      </span>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center text-center" stagger={0.1}>
          <span
            data-reveal
            className="mb-6 rounded-full border border-[#c2f54b]/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#c2f54b]"
          >
            Website Packages
          </span>
          <h2
            data-reveal
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Websites priced for every <span className="text-gradient">stage.</span>
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-lg leading-relaxed text-white/55">
            One-time pricing. Transparent, no hidden costs — from a clean starter
            site to a full website with a team admin panel.
          </p>
        </Reveal>

        {/* cards */}
        <Reveal className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1} y={40}>
          {plans.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                data-reveal
                className={`relative flex flex-col rounded-3xl border p-6 ${
                  p.popular
                    ? "border-[#c2f54b]/40 bg-gradient-to-b from-[#c2f54b]/[0.08] to-transparent shadow-[0_0_80px_-30px_rgba(194,245,75,0.5)]"
                    : "border-white/8 bg-white/[0.02]"
                }`}
              >
                {p.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#c2f54b] px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-[#0a0a0b]">
                    Popular
                  </span>
                )}

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] text-[#c2f54b]">
                  <Icon size={20} />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold leading-tight text-white">{p.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/55">{p.blurb}</p>

                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-[1.9rem] font-extrabold leading-none text-white">{inr(p.price)}</span>
                  <span className="mb-0.5 text-xs text-white/45">/one-time</span>
                </div>

                <Link
                  to="/contact"
                  data-cursor
                  className={`group mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-transform hover:scale-[1.02] ${
                    p.popular ? "bg-[#c2f54b] text-[#0a0a0b]" : "bg-white text-[#0a0a0b]"
                  }`}
                >
                  Get Started
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>

                <div className="mt-6 border-t border-white/8 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Includes</p>
                  <ul className="mt-3 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[0.85rem] text-white/70">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#c2f54b]/15 text-[#c2f54b]">
                          <Check size={11} />
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

        {/* trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/55">
          <span>✓ 100% secure</span>
          <span>✓ Fast, on-time delivery</span>
          <span>✓ No hidden costs</span>
          <span>✓ Dedicated support</span>
        </div>

        <p className="mt-8 text-center text-sm text-white/45">
          Need something bigger or custom?{" "}
          <Link to="/contact" className="font-semibold text-[#c2f54b] hover:underline">Let's talk →</Link>
        </p>
      </div>
    </section>
  );
}
