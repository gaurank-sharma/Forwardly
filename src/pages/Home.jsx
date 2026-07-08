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
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Forwardly — Global 3D, CGI & Web Agency | Your Vision. Our Execution."
        description="Forwardly is a global creative & 3D agency: photoreal CGI product visualization, 360° animation, AR/VR and high-performance web. Trusted by Michael Kors, JBL, Salomon, Bulova & Airbus."
        path="/"
      />
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
