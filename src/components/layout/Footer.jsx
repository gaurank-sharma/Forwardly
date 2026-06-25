import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import Logo from "../ui/Logo";
import Aurora from "../ui/Aurora";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Web Development", to: "/services" },
      { label: "Content Writing", to: "/services" },
      { label: "3D & Product Viz", to: "/services" },
      { label: "Logo & Branding", to: "/services" },
      { label: "Video & Motion", to: "/services" },
      { label: "Marketing & Growth", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Our Work", to: "/work" },
      { label: "Why Forwardly", to: "/about" },
      { label: "Global Reach", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Start a project", to: "/contact" },
      { label: "Book a call", to: "/contact" },
      { label: "Services overview", to: "/services" },
      { label: "Case studies", to: "/work" },
    ],
  },
];

const socials = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Dribbble, label: "Dribbble" },
  { Icon: Github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-dark text-white">
      <Aurora dark className="opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-20">
        {/* top */}
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link to="/">
              <Logo dark />
            </Link>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/60">
              A digital studio — part premium creative agency, part SaaS
              platform. Your Vision. Our Execution.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  data-cursor
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 text-white/70 transition-colors hover:border-[#c2f54b] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1 text-[0.95rem] text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* giant wordmark — full-bleed, centered */}
        <div className="pointer-events-none relative left-1/2 w-screen -translate-x-1/2 select-none py-10 text-center">
          <span className="block whitespace-nowrap font-display text-[13vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]">
            FORWARDLY
          </span>
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Forwardly. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:hello@forwardly.in" className="hover:text-white">
              hello@forwardly.in
            </a>
            <button
              onClick={() => {
                const lenis = window.__lenis;
                if (lenis) lenis.scrollTo(0);
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-cursor
              className="hover:text-white"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
