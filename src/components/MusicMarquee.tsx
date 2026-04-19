import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

export interface MusicItem {
  videoId: string;
  title?: string;
}

interface Props {
  items: MusicItem[];
  /** Row label shown on the left rail */
  label?: string;
  /** Visual rhythm: alternating heights / spans */
  variant?: "mosaic" | "ribbon" | "stagger";
}

const buildEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1`;

const buildPoster = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// Span / aspect patterns per variant — repeats across items
const patterns: Record<NonNullable<Props["variant"]>, { col: string; aspect: string; offset: number }[]> = {
  mosaic: [
    { col: "md:col-span-3", aspect: "aspect-[4/3]", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 32 },
    { col: "md:col-span-2", aspect: "aspect-square", offset: 0 },
    { col: "md:col-span-3", aspect: "aspect-video", offset: 24 },
    { col: "md:col-span-2", aspect: "aspect-[4/3]", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 40 },
  ],
  ribbon: [
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
  ],
  stagger: [
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-[4/3]", offset: 36 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-[4/3]", offset: 36 },
    { col: "md:col-span-2", aspect: "aspect-video", offset: 0 },
    { col: "md:col-span-2", aspect: "aspect-[4/3]", offset: 36 },
  ],
};

const MusicMarquee = ({ items, label, variant = "mosaic" }: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const pattern = patterns[variant];

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId]);

  return (
    <>
      <div className="relative grid grid-cols-12 gap-x-3 md:gap-x-4 gap-y-3 md:gap-y-0 items-end">
        {label && (
          <div className="hidden md:flex col-span-12 md:col-span-12 -mb-2 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="block w-6 h-px bg-foreground/40" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                {label}
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/60">
              {String(items.length).padStart(2, "0")} cuts
            </span>
          </div>
        )}

        {items.map((it, i) => {
          const p = pattern[i % pattern.length];
          const num = String(i + 1).padStart(2, "0");
          return (
            <button
              key={it.videoId}
              type="button"
              onClick={() => setOpenId(it.videoId)}
              aria-label={`Play ${it.title ?? "video"}`}
              className={`group relative col-span-6 ${p.col} ${p.aspect} overflow-hidden border border-foreground bg-surface-2 md:translate-y-[var(--off)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              style={{ ["--off" as string]: `${p.offset}px` }}
            >
              <img
                src={buildPoster(it.videoId)}
                alt={it.title ?? "Music video"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />

              {/* Cinematic gradient frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Index */}
              <div className="absolute top-2.5 left-3 font-mono text-[9px] tracking-[0.25em] uppercase text-background mix-blend-difference opacity-80">
                ({num})
              </div>

              {/* Hover label */}
              <div className="absolute top-2.5 right-3 font-mono text-[9px] tracking-[0.25em] uppercase text-background mix-blend-difference opacity-0 translate-y-1 group-hover:opacity-90 group-hover:translate-y-0 transition-all duration-500">
                Watch ↗
              </div>

              {/* Play badge — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex items-end justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-background/80 bg-background/10 flex items-center justify-center text-background mix-blend-difference transition-transform duration-500 group-hover:scale-110">
                    <Play className="w-3 h-3 md:w-3.5 md:h-3.5 ml-0.5" fill="currentColor" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-background mix-blend-difference opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    Play
                  </span>
                </div>
              </div>

              {/* Bottom progress bar fill on hover */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-[width] duration-[900ms] ease-out group-hover:w-full" />
            </button>
          );
        })}
      </div>

      {openId && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpenId(null)}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-11 md:h-11 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>
          <div
            className="relative w-full max-w-[1200px] aspect-video border border-foreground bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={buildEmbed(openId)}
              title="Video player"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MusicMarquee;
