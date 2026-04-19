import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

export interface MusicItem {
  videoId: string;
  title?: string;
}

interface Props {
  items: MusicItem[];
  /** Vertical offset in px applied to alternating items for visual rhythm */
  stagger?: number;
}

const buildEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playsinline=1`;

const buildPoster = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const MusicMarquee = ({ items, stagger = 24 }: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);

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
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
        {items.map((it, i) => {
          const offset = i % 2 === 1 ? stagger : 0;
          return (
            <button
              key={it.videoId}
              type="button"
              onClick={() => setOpenId(it.videoId)}
              aria-label={`Play ${it.title ?? "video"}`}
              className="group relative aspect-video overflow-hidden border border-foreground bg-surface-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:translate-y-[var(--off)]"
              style={{ ["--off" as string]: `${offset}px` }}
            >
              <img
                src={buildPoster(it.videoId)}
                alt={it.title ?? "Music video"}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-background/80 bg-background/10 flex items-center justify-center text-background mix-blend-difference transition-transform duration-500 group-hover:scale-110">
                  <Play className="w-3.5 h-3.5 md:w-4 md:h-4 ml-0.5" fill="currentColor" />
                </div>
              </div>
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
