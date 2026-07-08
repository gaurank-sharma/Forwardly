import PageHero from "../components/layout/PageHero";
import ServicesSection from "../sections/Services";
import CTA from "../sections/CTA";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/Seo";

const steps = [
  { n: "01", t: "Discover", d: "We dig into your goals, users and constraints — then scope a plan with clear milestones." },
  { n: "02", t: "Design", d: "Concepts, systems and prototypes that look premium and are built to convert." },
  { n: "03", t: "Build", d: "Senior engineers ship fast, with performance and accessibility baked in." },
  { n: "04", t: "Grow", d: "We measure, iterate and optimise — turning the launch into compounding momentum." },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services — 3D Visualization, CGI, AR/VR & Web | Forwardly"
        description="Forwardly's services: 3D product visualization, photoreal CGI renders, 360° animation, AR/VR experiences, web development, branding and motion design — for brands worldwide."
        path="/services"
      />
      <PageHero
        eyebrow="What we do"
        crumb="Services"
        title={<>Everything digital, <span className="text-gradient">one agency.</span></>}
        intro="Led by world-class web development and extended across content, 3D, brand, motion and growth — all under one roof, all built to a product standard."
      />

      <ServicesSection />

      {/* process */}
      <section className="bg-gradient-dark py-24 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            dark
            align="center"
            eyebrow="How we work"
            title={<>A process built to <span className="text-gradient">ship.</span></>}
            intro="Clear, collaborative and fast. You always know what's happening and what's next."
          />
          <Reveal className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1} y={36}>
            {steps.map((s) => (
              <div key={s.n} data-reveal className="rounded-3xl glass-dark p-7">
                <div className="font-display text-4xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgba(166, 230, 53,0.5)]">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
