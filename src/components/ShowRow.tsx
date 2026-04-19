import { useState } from "react";
import { Play } from "lucide-react";

export interface ShowEpisode {
  videoId?: string;
  externalUrl?: string;
  label: string;
  isPlaceholder?: boolean;
}

export interface Show {
  name: string;
  meta: string;
  body: string;
  episodes: ShowEpisode[];
}

interface Props {
  show: Show;
  index: number;
  isLast?: boolean;
}

const buildEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1&rel=0&playsinline=1`;

const buildPoster = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const ShowRow = ({ show, index, isLast }: Props) => {
  const firstPlayable = show.episodes.findIndex((e) => e.videoId);
  const [activeIdx, setActiveIdx] = useState(firstPlayable >= 0 ? firstPlayable : 0);
  const [isPlaying, setIsPlaying] = useState(false);

  const active = show.episodes[activeIdx];
  const num = String(index + 1).padStart(2, "0");

  const handleSelect = (i: number) => {
    if (i !== activeIdx) {
      setActiveIdx(i);
      setIsPlaying(false);
    }
  };

  return (
    <article
      className={`group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-foreground/15 ${
        isLast ? "border-b border-foreground/15" : ""
      }`}
    >
      {/* LEFT: Show meta */}
      <div className="col-span-12 md:col-span-3 flex flex-col">
        <div className="flex items-center gap-3">
          <span
            className="font-display leading-none tracking-[-0.04em] text-foreground/30 group-hover:text-foreground transition-colors duration-500"
            style={{ fontSize: "clamp(28px, 2.6vw, 44px)" }}
          >
            {num}
          </span>
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">
            {show.meta}
          </span>
        </div>

        <h3
          className="mt-4 md:mt-6 font-display leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(22px, 2vw, 32px)" }}
        >
          {show.name}
        </h3>
        <p className="mt-3 text-[12px] md:text-[13px] leading-[1.6] font-thai text-muted-foreground max-w-[34ch]">
          {show.body}
        </p>
        <span className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
          {String(show.episodes.length).padStart(2, "0")} episodes
        </span>
      </div>

      {/* CENTER: Featured EP */}
      <div className="col-span-12 md:col-span-6">
        <div className="relative aspect-video overflow-hidden border border-foreground bg-surface-2">
          {active.videoId && isPlaying ? (
            <iframe
              key={active.videoId}
              src={buildEmbed(active.videoId)}
              title={`${show.name} — ${active.label}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : active.videoId ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play ${active.label}`}
              className="absolute inset-0 w-full h-full text-left"
            >
              <img
                src={buildPoster(active.videoId)}
                alt={`${show.name} ${active.label}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-background/80 bg-background/10 flex items-center justify-center text-background mix-blend-difference transition-transform duration-500 group-hover:scale-110">
                  <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-background/90 to-transparent">
                <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-foreground/80">
                  Now playing · {active.label}
                </span>
              </div>
            </button>
          ) : active.externalUrl ? (
            <a
              href={active.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-surface-2 hover:bg-surface-3 transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                Watch on Thai PBS
              </span>
              <span className="mt-2 font-display text-2xl md:text-3xl tracking-[-0.02em]">
                {active.label}
              </span>
            </a>
          ) : (
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-surface-2">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                Coming soon
              </span>
              <span className="mt-2 font-display text-2xl md:text-3xl tracking-[-0.02em] text-foreground/40">
                {active.label}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Episode thumbnails */}
      <div className="col-span-12 md:col-span-3">
        <div className="grid grid-cols-4 md:grid-cols-2 gap-2 max-h-[260px] md:max-h-none overflow-y-auto pr-1">
          {show.episodes.map((ep, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                className={`relative aspect-video overflow-hidden border transition-all duration-300 ${
                  isActive
                    ? "border-foreground opacity-100"
                    : "border-foreground/20 opacity-60 hover:opacity-100 hover:border-foreground/60"
                }`}
                aria-label={`Select ${ep.label}`}
              >
                {ep.videoId ? (
                  <img
                    src={buildPoster(ep.videoId)}
                    alt={ep.label}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-surface-2 flex items-center justify-center">
                    <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-muted-foreground">
                      {ep.label}
                    </span>
                  </div>
                )}
                <div className="absolute top-1 left-1 font-mono text-[8px] tracking-[0.18em] uppercase text-background mix-blend-difference">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ShowRow;
