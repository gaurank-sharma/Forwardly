import { Asterisk } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "../components/ui/Marquee";

function Row({ dark }) {
  const items = Array.from({ length: 6 }).map((_, i) => (
    <span key={i} className="flex items-center gap-10 pr-10">
      <span className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Let's Get Started
      </span>
      <Asterisk
        size={28}
        className={dark ? "text-[#c2f54b]" : "text-[#0a0a0b]/70"}
      />
    </span>
  ));
  return <Marquee reverse={dark}>{items}</Marquee>;
}

/* Two parallel bands (no crossing) scrolling opposite ways. */
export default function LetsGetStarted() {
  return (
    <Link
      to="/contact"
      aria-label="Let's get started"
      className="relative block overflow-hidden bg-bg py-12"
    >
      <div className="w-[112%] -translate-x-[6%] -rotate-[2.5deg]">
        <div className="bg-[#c2f54b] py-4 text-[#0a0a0b]">
          <Row dark={false} />
        </div>
        <div className="border-y border-white/10 bg-[#0a0a0b] py-4 text-white">
          <Row dark />
        </div>
      </div>
    </Link>
  );
}
