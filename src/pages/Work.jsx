import PageHero from "../components/layout/PageHero";
import WorkShowcase from "../sections/WorkShowcase";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Seo from "../components/Seo";

export default function Work() {
  return (
    <>
      <Seo
        title="Work — Photoreal CGI, 360° & AR/VR Portfolio | Forwardly"
        description="Explore Forwardly's 3D and CGI portfolio — interactive 360° product viewers, photoreal renders and AR/VR for brands like Michael Kors, JBL, Salomon, Bulova and Airbus."
        path="/work"
      />
      <PageHero
        eyebrow="Selected work"
        crumb="Work"
        title={<>Proof over <span className="text-gradient">promise.</span></>}
        intro="Photoreal CGI, 360° product animation and immersive AR/VR — a selection of our recent work. Web case studies landing soon."
      />
      <WorkShowcase heading={false} />
      <Testimonials />
      <CTA />
    </>
  );
}
