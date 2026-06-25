import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Maximize2,
  Clock,
  Rotate3d,
  ImageIcon,
  Glasses,
  MoveHorizontal,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Turntable from "../components/ui/Turntable";
import Lightbox from "../components/ui/Lightbox";
import MagneticButton from "../components/ui/MagneticButton";
import { gsap } from "../lib/gsap";
import { workItems, workCategories } from "../data/work";

const deliverables = {
  "3D Animation": ["Modeling", "Shading", "Lighting", "Animation"],
  "Still Renders": ["Modeling", "Materials", "Studio Lighting", "Retouch"],
  "AR / VR": ["Realtime 3D", "Environment", "Interaction"],
  "Web Development": ["Design", "Engineering", "Launch"],
};

export default function WorkShowcase({ dark = true, heading = true, viewAll = false }) {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(0);
  const [box, setBox] = useState(null);
  const stageRef = useRef(null);

  const list = useMemo(
    () => (cat === "All" ? workItems : workItems.filter((w) => w.category === cat)),
    [cat]
  );
  const item = list[Math.min(active, list.length - 1)] || list[0];

  // crossfade the stage whenever the active product changes
  useEffect(() => {
    if (!stageRef.current) return;
    gsap.fromTo(
      stageRef.current,
      { opacity: 0, scale: 0.96, filter: "blur(8px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power3.out" }
    );
  }, [item?.id]);

  const media = useMemo(() => list.filter((w) => w.type !== "soon"), [list]);
  const openBox = () => {
    if (item.type === "soon") return;
    const i = media.findIndex((m) => m.id === item.id);
    if (i >= 0) setBox(i);
  };

  const sectionBg = dark ? "bg-gradient-dark text-white" : "bg-bg";

  return (
    <section id="work" className={`relative overflow-hidden py-24 sm:py-32 ${sectionBg}`}>
      {dark && (
        <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_80%_10%,rgba(194, 245, 75,0.4),transparent_45%)]" />
      )}
      <div className="relative mx-auto max-w-6xl px-6">
        {heading && (
          <SectionHeading
            dark={dark}
            eyebrow="Interactive showroom"
            title={<>Proof over <span className="text-gradient">promise.</span></>}
            intro="Every turntable below is live — drag to rotate the product, just like your customers will. Photoreal CGI, 360° animation and immersive AR/VR."
          />
        )}

        {/* category filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          {workCategories.map((c) => {
            const activeCat = c === cat;
            return (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  setActive(0);
                }}
                data-cursor
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCat
                    ? "bg-gradient-brand text-[#0a0a0b] shadow-[0_10px_30px_-12px_rgba(194, 245, 75,0.8)]"
                    : dark
                      ? "border border-white/12 text-white/70 hover:border-white/30 hover:text-white"
                      : "border border-white/10 text-muted hover:border-white/30 hover:text-ink"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* stage + rail */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          {/* STAGE */}
          <div className="relative h-[46vh] min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-dark lg:h-[560px]">
            {/* studio lighting */}
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_50%_35%,rgba(194, 245, 75,0.22),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 [background:radial-gradient(ellipse_at_50%_120%,rgba(166, 230, 53,0.25),transparent_70%)]" />
            {/* grid floor */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(200, 230, 140,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 230, 140,0.25) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                transform: "perspective(500px) rotateX(60deg)",
                transformOrigin: "bottom",
                maskImage: "linear-gradient(to top, black, transparent)",
              }}
            />

            {/* counter + category */}
            <div className="absolute left-5 top-5 z-10 flex items-center gap-3 text-xs">
              <span className="font-display font-bold tabular-nums text-white">
                {String(Math.min(active, list.length - 1) + 1).padStart(2, "0")}
                <span className="text-white/40"> / {String(list.length).padStart(2, "0")}</span>
              </span>
              <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 font-semibold uppercase tracking-[0.14em] text-[#d4f87e] backdrop-blur">
                {item.category}
              </span>
            </div>

            {/* expand */}
            {item.type !== "soon" && (
              <button
                onClick={openBox}
                aria-label="View fullscreen"
                className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur transition-colors hover:bg-white/15 hover:text-white"
              >
                <Maximize2 size={16} />
              </button>
            )}

            {/* media */}
            <div ref={stageRef} className="absolute inset-0 p-6 sm:p-10">
              {item.type === "video" && <Turntable key={item.id} src={item.src} />}
              {item.type === "image" && item.category === "AR / VR" && (
                <ArvrStage key={item.id} item={item} />
              )}
              {item.type === "image" && item.category !== "AR / VR" && (
                <ImageStage key={item.id} item={item} />
              )}
              {item.type === "soon" && (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white/70">
                    <Clock size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{item.subtitle}</p>
                </div>
              )}
            </div>
          </div>

          {/* INFO + RAIL */}
          <div className="flex flex-col">
            <div className="min-h-[120px]">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">{item.title}</h3>
              <p className="mt-1 text-white/55">{item.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(deliverables[item.category] || []).map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* playlist rail */}
            <div className="mt-5 max-h-[360px] space-y-1.5 overflow-y-auto pr-1 no-scrollbar lg:max-h-[420px]">
              {list.map((w, i) => {
                const on = w.id === item.id;
                const Icon =
                  w.type === "video"
                    ? Rotate3d
                    : w.category === "AR / VR"
                      ? Glasses
                      : w.type === "image"
                        ? ImageIcon
                        : Clock;
                return (
                  <button
                    key={w.id}
                    onClick={() => setActive(i)}
                    data-cursor
                    className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                      on
                        ? "border-white/20 bg-white/[0.07]"
                        : "border-transparent hover:border-white/12 hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors ${
                        on ? "bg-gradient-brand text-[#0a0a0b]" : "bg-white/8 text-white/60"
                      }`}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white">
                        {w.title}
                      </span>
                      <span className="block truncate text-xs text-white/45">{w.subtitle}</span>
                    </span>
                    {on && <span className="h-6 w-1 rounded-full bg-gradient-brand" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {viewAll && (
          <div className="mt-12 flex justify-center">
            <MagneticButton to="/work" variant={dark ? "secondary" : "light"}>
              See the full showroom <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        )}
      </div>

      {box !== null && (
        <Lightbox
          items={media}
          index={box}
          onClose={() => setBox(null)}
          onNav={(d) => setBox((p) => (p + d + media.length) % media.length)}
        />
      )}
    </section>
  );
}

/* AR/VR stage — drag to look around the environment; gently auto-pans idle. */
function ArvrStage({ item }) {
  const wrap = useRef(null);
  const img = useRef(null);
  const st = useRef({ active: false, startX: 0, startTX: 0, max: 0 });
  const idle = useRef(null);
  const [hint, setHint] = useState(true);

  const killIdle = () => {
    idle.current?.kill();
    idle.current = null;
  };
  const startIdle = () => {
    killIdle();
    const m = st.current.max * 0.5 || 60;
    idle.current = gsap.to(img.current, {
      x: -m,
      duration: 7,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  };
  const computeMax = () => {
    const w = wrap.current?.clientWidth || 0;
    const iw = img.current?.offsetWidth || 0;
    st.current.max = Math.max(0, (iw - w) / 2 + 30);
  };

  useEffect(() => {
    const el = img.current;
    const onLoad = () => {
      computeMax();
      startIdle();
    };
    if (el?.complete && el.naturalWidth) onLoad();
    else el?.addEventListener("load", onLoad);
    window.addEventListener("resize", computeMax);
    return () => {
      killIdle();
      el?.removeEventListener("load", onLoad);
      window.removeEventListener("resize", computeMax);
    };
  }, []);

  const clamp = (x) => Math.max(-st.current.max, Math.min(st.current.max, x));
  const onDown = (e) => {
    st.current.active = true;
    st.current.startX = e.clientX;
    st.current.startTX = Number(gsap.getProperty(img.current, "x")) || 0;
    killIdle();
    setHint(false);
    wrap.current?.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!st.current.active) return;
    gsap.set(img.current, { x: clamp(st.current.startTX + (e.clientX - st.current.startX)) });
  };
  const onUp = (e) => {
    if (!st.current.active) return;
    st.current.active = false;
    wrap.current?.releasePointerCapture?.(e.pointerId);
    startIdle();
  };

  return (
    <div
      ref={wrap}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      data-cursor
      className="group relative flex h-full w-full cursor-grab touch-pan-y items-center justify-center overflow-hidden rounded-2xl active:cursor-grabbing"
    >
      <img
        ref={img}
        src={item.src}
        alt={item.title}
        draggable={false}
        className="h-[132%] w-auto max-w-none select-none will-change-transform"
      />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,rgba(5, 5, 6,0.55))]" />

      <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-[#d4f87e] backdrop-blur">
        <Glasses size={14} /> Immersive AR / VR
      </span>
      <div
        className={`pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur transition-opacity duration-500 ${
          hint ? "opacity-100" : "opacity-0"
        }`}
      >
        <MoveHorizontal size={15} className="text-[#a6e635]" /> Drag to look around
      </div>
    </div>
  );
}

/* Still-render stage with a subtle parallax tilt + zoom. */
function ImageStage({ item }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(ref.current, {
      rotateY: px * 12,
      rotateX: -py * 12,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };
  const reset = () =>
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,0.5)" });

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="flex h-full w-full items-center justify-center"
    >
      <img
        ref={ref}
        src={item.src}
        alt={item.title}
        draggable={false}
        className="max-h-full max-w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] transition-transform duration-500 will-change-transform hover:scale-[1.04]"
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
}
