import PageHero from "../components/layout/PageHero";
import WorkShowcase from "../sections/WorkShowcase";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        crumb="Work"
        title={<>Proof over <span className="text-gradient">promise.</span></>}
        intro="Photoreal CGI, 360° product animation and immersive AR/VR — a selection of recent studio work. Web case studies landing soon."
      />
      <WorkShowcase heading={false} />
      <Testimonials />
      <CTA />
    </>
  );
}
