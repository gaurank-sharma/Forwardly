import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";
import MagneticButton from "../ui/MagneticButton";

const links = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // At the very top we sit over a dark hero → light text; once scrolled the
  // glass pill appears over light content → dark text.
  const onDark = !scrolled;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[1000] flex justify-center px-4 pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "glass shadow-[0_20px_50px_-30px_rgba(11, 16, 29,0.5)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo dark={onDark} />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-cursor
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#c2f54b]"
                    : onDark
                      ? "text-white/75 hover:text-white"
                      : "text-muted hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <MagneticButton to="/contact" className="px-5 py-2.5 text-sm">
            Start a project <ArrowUpRight size={16} />
          </MagneticButton>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`pointer-events-auto rounded-xl p-2 lg:hidden ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={`pointer-events-auto fixed inset-0 top-0 z-[-1] flex flex-col bg-gradient-dark px-6 pb-10 pt-28 transition-all duration-500 lg:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-white/10 py-5 font-display text-2xl font-semibold ${
                  isActive ? "text-[#c2f54b]" : "text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto">
          <MagneticButton to="/contact" onClick={() => setOpen(false)} className="w-full">
            Start a project <ArrowUpRight size={18} />
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
