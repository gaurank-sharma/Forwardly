import Hero from "../sections/Hero";
import AboutStatement from "../sections/AboutStatement";
import Stats from "../sections/Stats";
import TrustBar from "../sections/TrustBar";
import Services from "../sections/Services";
import WorkShowcase from "../sections/WorkShowcase";
import Pricing from "../sections/Pricing";
import ExecutionSystem from "../sections/ExecutionSystem";
import WhyForwardly from "../sections/WhyForwardly";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import LetsGetStarted from "../sections/LetsGetStarted";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStatement />
      <Stats />
      <TrustBar />
      <Services />
      <WorkShowcase viewAll />
      <Pricing />
      <ExecutionSystem />
      <WhyForwardly />
      <Testimonials />
      <CTA />
      <LetsGetStarted />
    </>
  );
}
