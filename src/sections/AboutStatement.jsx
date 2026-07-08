import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "../lib/gsap";

const statement =
  "At Forwardly, we believe execution beats promises. We're a creative & 3D agency that turns ambitious ideas into premium digital experiences — from photoreal product visualization to high-performance websites that actually perform.";

export default function AboutStatement() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = root.current.querySelectorAll(".rw");
      gsap.fromTo(
        words,
        { color: "#d4d4d8" },
        {
          color: "#0a0a0b",
          ease: "none",
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="bg-white py-24 text-[#0a0a0b] sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* eyebrow + scroll-darkening statement */}
        <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
          <span className="pt-2 text-sm font-medium text-black/40">About Forwardly</span>
          <p className="about-statement max-w-3xl font-display text-[clamp(1.15rem,2vw,1.7rem)] font-semibold leading-[1.45] tracking-tight">
            {statement.split(" ").map((w, i) => (
              <span key={i} className="rw">
                {w}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* team images + heading + CTA */}
        <div className="mt-16 grid items-end gap-6 lg:grid-cols-[1.1fr_1.1fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/image.png"
              alt="Forwardly team at work"
              className="aspect-[5/4] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/image%20copy.png"
              alt="Forwardly team collaborating"
              className="aspect-[5/4] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div className="pb-2">
            <h3 className="font-display text-2xl font-bold leading-tight">
              Our Bold &amp;
              <br />
              Brilliant Thinkers
            </h3>
            <Link
              to="/about"
              data-cursor
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#c2f54b] px-6 py-3 text-sm font-bold text-[#0a0a0b] transition-transform hover:scale-[1.03]"
            >
              Learn More
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
