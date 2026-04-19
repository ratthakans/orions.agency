import { useState } from "react";
import { Play } from "lucide-react";

export interface MusicItem {
  videoId: string;
  title?: string;
}

interface Props {
  items: MusicItem[];
  /** Pixels per second */
  speed?: number;
  /** Direction of scroll */
  direction?: "left" | "right";
  /** Vertical offset pattern in px (applied to alternating items) */
  stagger?: boolean;
  /** Card width in vw at md+ */
  cardClass?: string;
}

const buildEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1&rel=0&playsinline=1`;

const buildPoster = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const MusicMarquee = ({
  items,
  speed = 40,
  direction = "left",
  stagger = false,
  cardClass = "w-[260px] md:w-[320px]",
}: Props) => {
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const loop = [...items, ...items];
  // Total animation duration based on count and speed (rough: assume avg card 320px + gap 20px)
  const approxWidth = items.length * 340;
  const duration = Math.max(20, approxWidth / speed);

  return (
    <div className="relative overflow-hidden group/marquee" aria-label="Music marquee">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="flex gap-4 md:gap-5 w-max will-change-transform"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: "running",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
      >
        {loop.map((it, i) => {
          const key = `${it.videoId}-${i}`;
          const isPlaying = playing[key];
          const offset = stagger ? (i % 3 === 0 ? 0 : i % 3 === 1 ? 20 : -16) : 0;
          return (
            <div
              key={key}
              className={`shrink-0 ${cardClass}`}
              style={{ transform: `translateY(${offset}px)` }}
            >
              <div className="relative aspect-video overflow-hidden border border-foreground bg-surface-2">
                {isPlaying ? (
                  <iframe
                    src={buildEmbed(it.videoId)}
                    title={it.videoId}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying((p) => ({ ...p, [key]: true }))}
                    aria-label="Play video"
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={buildPoster(it.videoId)}
                      alt={it.title ?? "Music video"}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-background/80 bg-background/10 flex items-center justify-center text-background mix-blend-difference transition-transform duration-500 hover:scale-110">
                        <Play className="w-3.5 h-3.5 md:w-4 md:h-4 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default MusicMarquee;
