import { useEffect, useRef, useState } from "react";
import { Rotate3d } from "lucide-react";

/**
 * Sequence360 — turns a set of angle renders into an interactive 360° viewer.
 * Drag horizontally to rotate through the frames (instant); when idle and in
 * view it auto-advances slowly with a soft crossfade. Frames are preloaded.
 */
export default function Sequence360({ frames = [] }) {
  const wrap = useRef(null);
  const drag = useRef({ active: false, startX: 0, startIndex: 0 });
  const inView = useRef(false);
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hintGone, setHintGone] = useState(false);

  const n = frames.length;

  // preload frames
  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  // slow idle auto-rotate while in view and not dragging
  useEffect(() => {
    const el = wrap.current;
    if (!el || n < 2) return;
    const io = new IntersectionObserver(([e]) => (inView.current = e.isIntersecting), {
      threshold: 0.4,
    });
    io.observe(el);
    const id = setInterval(() => {
      if (inView.current && !drag.current.active) setIndex((i) => (i + 1) % n);
    }, 900);
    return () => {
      io.disconnect();
      clearInterval(id);
    };
  }, [n]);

  const onDown = (e) => {
    drag.current = { active: true, startX: e.clientX, startIndex: index };
    setDragging(true);
    setHintGone(true);
    wrap.current?.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current.active) return;
    const w = wrap.current?.clientWidth || 1;
    const step = w / (n * 1.4);
    const delta = Math.round((e.clientX - drag.current.startX) / step);
    setIndex(((drag.current.startIndex - delta) % n + n) % n);
  };
  const onUp = (e) => {
    drag.current.active = false;
    setDragging(false);
    wrap.current?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={wrap}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      data-cursor
      className="group relative flex h-full w-full cursor-grab touch-pan-y items-center justify-center active:cursor-grabbing"
    >
      {frames.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          className={`absolute max-h-full max-w-full select-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${
            dragging ? "" : "transition-opacity duration-500 ease-out"
          }`}
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

      <div
        className={`pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur transition-opacity duration-500 ${
          hintGone ? "opacity-0" : "opacity-100"
        }`}
      >
        <Rotate3d size={15} className="text-[#c2f54b]" /> Drag to rotate
      </div>
    </div>
  );
}
