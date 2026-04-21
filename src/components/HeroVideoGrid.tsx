import { useEffect, useRef, useState } from "react";

interface VideoItem {
  id: string;
  start: number;
}

const videos: VideoItem[] = [
  { id: "Oz3id2nOmDE", start: 1085 },
  { id: "vjuXICAVBSU", start: 0 },
  { id: "aD13HQnrCks", start: 8 },
  { id: "nFNVN8uE2dI", start: 6 },
];

/**
 * 4-column autoplay/muted YouTube background grid for the hero.
 * Each column crops to hide YT chrome (logo/title/controls) via scale + overflow hidden.
 */
const HeroVideoGrid = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Defer iframe mount until idle to keep LCP fast
    const t = window.setTimeout(() => setLoad(true), 300);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 bg-foreground"
    >
      {videos.map((v, i) => (
        <div key={v.id + i} className="relative overflow-hidden bg-foreground">
          {load && (
            <iframe
              title={`bg-${i}`}
              // Fill column height; width scales by 16:9 to keep video full-bleed vertically.
              // Request 4K (vq=hd2160) — YouTube serves the highest available quality for the embed size.
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[300%] md:w-[500%] pointer-events-none"
              src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&showinfo=0&start=${v.start}&vq=hd2160&hd=1`}
              allow="autoplay; encrypted-media; picture-in-picture"
              frameBorder={0}
            />
          )}
          {/* dim overlay to keep typography readable */}
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
      ))}
    </div>
  );
};

export default HeroVideoGrid;