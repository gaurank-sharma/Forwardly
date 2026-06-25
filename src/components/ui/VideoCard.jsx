import { useEffect, useRef } from "react";

/**
 * VideoCard — a muted, looping product video that plays only while in view
 * (and on hover) to keep the page light and smooth. `object-contain` keeps
 * any aspect ratio framed cleanly on the dark card.
 */
export default function VideoCard({ src, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={`h-full w-full object-contain ${className}`}
    />
  );
}
