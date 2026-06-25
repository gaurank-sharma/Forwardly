import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "../../lib/gsap";

/**
 * Lightbox — fullscreen viewer for portfolio items (looping video or image)
 * with keyboard nav (Esc / ← / →), prev/next and a glass chrome.
 */
export default function Lightbox({ items, index, onClose, onNav }) {
  const panel = useRef(null);
  const item = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  useEffect(() => {
    gsap.fromTo(
      panel.current,
      { opacity: 0, scale: 0.96, y: 16 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "power3.out" }
    );
  }, [index]);

  if (!item) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[3000] flex items-center justify-center bg-[#050506]/90 p-4 backdrop-blur-xl sm:p-8"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={20} />
      </button>

      {/* prev / next */}
      <button
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:grid"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:grid"
      >
        <ChevronRight size={22} />
      </button>

      <div
        ref={panel}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-5xl flex-col"
      >
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-gradient-dark">
          {item.type === "video" ? (
            <video
              key={item.id}
              src={item.src}
              autoPlay
              muted
              loop
              controls
              playsInline
              className="max-h-[72vh] w-auto max-w-full"
            />
          ) : (
            <img
              key={item.id}
              src={item.src}
              alt={item.title}
              className="max-h-[72vh] w-auto max-w-full object-contain"
            />
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 text-white">
          <div>
            <h3 className="font-display text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-white/55">{item.subtitle}</p>
          </div>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70">
            {item.category}
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
}
