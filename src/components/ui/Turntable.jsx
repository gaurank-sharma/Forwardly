import { useEffect, useRef, useState } from "react";
import { Rotate3d } from "lucide-react";

/**
 * Turntable — an interactive 360° product viewer built from a turntable video.
 * Drag horizontally to "rotate" the product (scrubs the video timeline). When
 * idle and in view it slowly auto-rotates. This makes the studio's turntable
 * renders feel like live, spinnable products.
 */
export default function Turntable({ src }) {
  const wrap = useRef(null);
  const video = useRef(null);
  const drag = useRef({ active: false, startX: 0, startT: 0 });
  const [dur, setDur] = useState(0);
  const [hintGone, setHintGone] = useState(false);

  // auto-rotate only while in view and not being dragged
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !drag.current.active) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const wrapT = (t) => {
    const d = video.current?.duration || dur || 1;
    return ((t % d) + d) % d;
  };

  const onDown = (e) => {
    const v = video.current;
    if (!v) return;
    drag.current = { active: true, startX: e.clientX, startT: v.currentTime };
    v.pause();
    setHintGone(true);
    wrap.current?.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    const v = video.current;
    if (!drag.current.active || !v) return;
    const width = wrap.current?.clientWidth || 1;
    const d = v.duration || dur || 1;
    // one full drag across the stage ≈ 1.25 full rotations
    const delta = ((e.clientX - drag.current.startX) / width) * d * 1.25;
    v.currentTime = wrapT(drag.current.startT - delta);
  };
  const onUp = (e) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    wrap.current?.releasePointerCapture?.(e.pointerId);
    // gently resume auto-rotation
    setTimeout(() => {
      if (!drag.current.active) video.current?.play().catch(() => {});
    }, 900);
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
      <video
        ref={video}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        className="max-h-full max-w-full select-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        draggable={false}
      />

      {/* drag hint */}
      <div
        className={`pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur transition-opacity duration-500 ${
          hintGone ? "opacity-0" : "opacity-100"
        }`}
      >
        <Rotate3d size={15} className="text-[#a6e635]" />
        Drag to rotate
      </div>
    </div>
  );
}
