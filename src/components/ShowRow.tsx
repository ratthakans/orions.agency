import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";

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
  const featured = show.episodes.find((e) => e.videoId) ?? show.episodes[0];
  const [isPlaying, setIsPlaying] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  const isOdd = index % 2 === 1;

  return (
    <article
      className={`group grid grid-cols-12 gap-4 md:gap-10 items-center py-6 md:py-8 border-t border-foreground/15 ${
        isLast ? "border-b border-foreground/15" : ""
      }`}
    >
      {/* Featured EP poster — compact */}
      <div className={`col-span-12 md:col-span-5 ${isOdd ? "md:order-2" : ""}`}>
        <div className="relative aspect-video overflow-hidden border border-foreground bg-surface-2 max-w-[460px]">
          {featured.videoId && isPlaying ? (
            <iframe
              src={buildEmbed(featured.videoId)}
              title={`${show.name} — ${featured.label}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : featured.videoId ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play ${show.name}`}
              className="absolute inset-0 w-full h-full text-left"
            >
              <img
                src={buildPoster(featured.videoId)}
                alt={`${show.name} ${featured.label}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-background/80 bg-background/10 flex items-center justify-center text-background mix-blend-difference transition-transform duration-500 group-hover:scale-110">
                  <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </div>
              </div>
            </button>
          ) : (
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-surface-2">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                Coming soon
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Show info */}
      <div className={`col-span-12 md:col-span-7 ${isOdd ? "md:order-1 md:text-right" : ""}`}>
        <div className={`flex items-center gap-3 ${isOdd ? "md:justify-end" : ""}`}>
          <span
            className="font-display leading-none tracking-[-0.04em] text-foreground/30 group-hover:text-foreground transition-colors duration-500"
            style={{ fontSize: "clamp(22px, 2vw, 32px)" }}
          >
            {num}
          </span>
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">
            {show.meta}
          </span>
        </div>

        <h3
          className="mt-3 font-display leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: "clamp(22px, 2.4vw, 38px)" }}
        >
          {show.name}
        </h3>

        <p className="mt-2 text-[12px] md:text-[13px] leading-[1.6] font-thai text-muted-foreground max-w-[44ch] md:inline-block">
          {show.body}
        </p>

        <div className={`mt-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground ${isOdd ? "md:justify-end" : ""}`}>
          <span>{String(show.episodes.length).padStart(2, "0")} EP</span>
          <span className="block w-6 h-px bg-foreground/30" />
          <span className="inline-flex items-center gap-1.5 text-foreground/70 group-hover:text-foreground transition-colors">
            Watch <ArrowUpRight className="w-3 h-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
};

export default ShowRow;
