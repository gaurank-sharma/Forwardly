import PageHero from "../components/layout/PageHero";
import AgencyVsSaaS from "../sections/AgencyVsSaaS";
import WhyForwardly from "../sections/WhyForwardly";
import GlobalReach from "../sections/GlobalReach";
import CTA from "../sections/CTA";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        crumb="About"
        title={<>An agency that ships like a <span className="text-gradient">product team.</span></>}
        intro="Forwardly pairs the craft of a premium creative agency with a repeatable, systems-driven way of building. Gurgaon-based, detail-obsessed, and built for momentum."
      />
      <AgencyVsSaaS />
      <WhyForwardly />
      <GlobalReach />
      <CTA />
    </>
  );
}
