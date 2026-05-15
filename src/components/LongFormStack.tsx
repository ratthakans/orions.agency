import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import type { VideoReelItem } from "./VideoReel";

interface Props {
  items: VideoReelItem[];
}

const buildEmbed = (it: VideoReelItem) =>
  `https://www.youtube.com/embed/${it.videoId}?autoplay=1&mute=1&loop=1&playlist=${it.videoId}&controls=1&modestbranding=1&rel=0&playsinline=1`;

const buildPoster = (it: VideoReelItem) =>
  it.poster ?? `https://i.ytimg.com/vi/${it.videoId}/maxresdefault.jpg`;

const LongFormStack = ({ items }: Props) => {
  const [playing, setPlaying] = useState<Record<number, boolean>>({});

  return (
    <div className="mt-8 md:mt-10 flex flex-col">
      {items.map((it, i) => {
        const isPlaying = playing[i];
        const isOdd = i % 2 === 1;
        const num = String(i + 1).padStart(2, "0");

        return (
          <article
            key={it.videoId}
            className={`group grid grid-cols-12 gap-3 md:gap-6 items-center py-4 md:py-5 border-t border-foreground/15 ${
              i === items.length - 1 ? "border-b border-foreground/15" : ""
            }`}
          >
            {/* Index + meta */}
            <div
              className={`col-span-12 md:col-span-2 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2 ${
                isOdd ? "md:order-3" : ""
              }`}
            >
              <span
                className="font-display leading-none tracking-[-0.04em] text-foreground/30 group-hover:text-foreground transition-colors duration-500"
                style={{ fontSize: "clamp(24px, 2.4vw, 38px)" }}
              >
                {num}
              </span>
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                {it.tag}
              </span>
            </div>

            {/* Video (16:9) — smaller */}
            <div className={`col-span-12 md:col-span-5 ${isOdd ? "md:order-2" : ""}`}>
              <div className="relative aspect-video overflow-hidden border border-foreground bg-surface-2 max-w-[420px]">
                {isPlaying ? (
                  <iframe
                    src={buildEmbed(it)}
                    title={it.name}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying((p) => ({ ...p, [i]: true }))}
                    aria-label={`Play ${it.name}`}
                    className="absolute inset-0 w-full h-full text-left"
                  >
                    <img
                      src={buildPoster(it)}
                      alt={it.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-background/80 bg-background/10 flex items-center justify-center text-background mix-blend-difference transition-transform duration-500 group-hover:scale-110">
                        <Play className="w-3.5 h-3.5 md:w-4 md:h-4 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Title + body */}
            <div className={`col-span-12 md:col-span-5 ${isOdd ? "md:order-1 md:text-right" : ""}`}>
              <h3
                className="font-display leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(16px, 1.4vw, 22px)" }}
              >
                {it.name}
              </h3>
              <p className="mt-1.5 text-[11px] md:text-[12px] leading-[1.55] font-thai text-muted-foreground line-clamp-2">
                {it.body}
              </p>
              <div
                className={`mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground group-hover:text-foreground transition-colors ${
                  isOdd ? "md:flex-row-reverse" : ""
                }`}
              >
                <span>WATCH</span>
                <ArrowUpRight className="w-3 h-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default LongFormStack;
