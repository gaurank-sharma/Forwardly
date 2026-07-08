import { Globe2, Clock, Languages, Headphones } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Marquee from "../components/ui/Marquee";

/* Lightweight CSS "globe" — gradient sphere with orbiting rings and glow. */
function Orb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[12%] rounded-full bg-[#c2f54b]/20 blur-3xl" />
      {/* sphere */}
      <div
        className="absolute inset-[18%] rounded-full border border-white/10"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #4f7dff 0%, #1b2c66 45%, #0a1430 78%)",
          boxShadow:
            "inset -28px -28px 70px rgba(0,0,0,0.6), inset 18px 18px 50px rgba(200, 230, 140,0.25), 0 0 80px rgba(194, 245, 75,0.35)",
        }}
      >
        {/* meridians */}
        <div className="absolute inset-0 overflow-hidden rounded-full opacity-40">
          {[20, 40, 60, 80].map((t) => (
            <div
              key={t}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cfef9a]/30"
              style={{ width: `${t}%`, height: "100%" }}
            />
          ))}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#cfef9a]/30" />
          <div className="absolute left-0 right-0 top-1/3 h-px bg-[#cfef9a]/20" />
          <div className="absolute left-0 right-0 top-2/3 h-px bg-[#cfef9a]/20" />
        </div>
      </div>
      {/* orbit rings */}
      <div className="absolute inset-[6%] animate-[spin_22s_linear_infinite] rounded-full border border-[#c2f54b]/30" />
      <div
        className="absolute inset-0 rounded-full border border-[#a6e635]/20"
        style={{ animation: "spin 30s linear infinite reverse" }}
      />
      {/* satellite dot */}
      <div className="absolute inset-[6%] animate-[spin_22s_linear_infinite] rounded-full">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#a6e635] shadow-[0_0_20px_rgba(166, 230, 53,0.9)]" />
      </div>
    </div>
  );
}

const facts = [
  { icon: Globe2, value: "Worldwide", label: "Clients welcome anywhere" },
  { icon: Clock, value: "24/7", label: "Async-friendly delivery" },
  { icon: Languages, value: "Gurgaon", label: "Our home base" },
  { icon: Headphones, value: "<2h", label: "Avg. response time" },
];

const regions = [
  "Gurgaon-based", "Async-friendly", "Any timezone", "Cloud-native",
  "Global ambitions", "Borderless", "Always reachable", "Built to scale",
];

export default function GlobalReach() {
  return (
    <section id="global" className="relative overflow-hidden bg-gradient-dark py-24 text-white sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* globe */}
          <div className="relative order-2 lg:order-1">
            <Orb />
          </div>

          {/* copy + stats */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              dark
              eyebrow="Borderless by design"
              title={<>Work with us from <span className="text-gradient">anywhere.</span></>}
              intro="Forwardly is based in Gurgaon and works with clients worldwide. Wherever you're based, collaborating with us feels local — clear comms, fast turnarounds, and momentum across timezones."
            />

            <Reveal className="mt-10 grid grid-cols-2 gap-4" stagger={0.1}>
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    data-reveal
                    className="rounded-2xl glass-dark p-5"
                  >
                    <Icon size={22} className="text-[#a6e635]" />
                    <div className="mt-3 font-display text-2xl font-bold sm:text-[1.6rem]">{f.value}</div>
                    <div className="mt-1 text-sm text-white/55">{f.label}</div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>

        {/* regions marquee */}
        <div className="mt-16 border-y border-white/10 py-6">
          <Marquee>
            {regions.map((r) => (
              <span key={r} className="flex items-center gap-3 text-lg font-medium text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a6e635]" />
                {r}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
