import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

export interface VideoReelItem {
  tag: string;
  name: string;
  body: string;
  /** YouTube or Vimeo video ID, or full URL */
  videoId: string;
  provider?: "youtube" | "vimeo";
  /** Optional poster image override */
  poster?: string;
}

interface Props {
  items: VideoReelItem[];
}

const buildEmbed = (it: VideoReelItem) => {
  const provider = it.provider ?? "youtube";
  if (provider === "vimeo") {
    return `https://player.vimeo.com/video/${it.videoId}?autoplay=1&muted=1&loop=1&background=1&controls=1`;
  }
  return `https://www.youtube.com/embed/${it.videoId}?autoplay=1&mute=1&loop=1&playlist=${it.videoId}&controls=1&modestbranding=1&rel=0&playsinline=1`;
};

const buildPoster = (it: VideoReelItem) => {
  if (it.poster) return it.poster;
  if ((it.provider ?? "youtube") === "youtube") {
    return `https://i.ytimg.com/vi/${it.videoId}/maxresdefault.jpg`;
  }
  return "";
};

const VideoReel = ({ items }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState<Record<number, boolean>>({});

  const loop = [...items, ...items, ...items];
  const baseLen = items.length;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const setStart = () => {
      const cardW = el.scrollWidth / loop.length;
      el.scrollLeft = cardW * baseLen;
    };
    setStart();
    const onResize = () => setStart();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.scrollWidth / loop.length;
      const min = cardW * baseLen * 0.5;
      const max = cardW * baseLen * 2.5;
      if (el.scrollLeft < min) el.scrollLeft += cardW * baseLen;
      else if (el.scrollLeft > max) el.scrollLeft -= cardW * baseLen;
      const idx = Math.round(el.scrollLeft / cardW) % baseLen;
      setActive(((idx % baseLen) + baseLen) % baseLen);
      const cycle = (el.scrollLeft / cardW) % baseLen;
      setProgress(cycle / baseLen);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [loop.length, baseLen]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = el.scrollWidth / loop.length;
    el.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };

  return (
    <div className="mt-6 md:mt-8">
      <div className="flex items-center justify-between mb-5">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          <span className="text-foreground">{String(active + 1).padStart(2, "0")}</span>
          <span className="opacity-40"> / {String(baseLen).padStart(2, "0")}</span>
          <span className="ml-4 hidden sm:inline opacity-60">CLICK TO PLAY · LOOP</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="w-9 h-9 md:w-10 md:h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 -rotate-[135deg]" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="w-9 h-9 md:w-10 md:h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-45" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {loop.map((it, i) => {
          const numIdx = (i % baseLen) + 1;
          const isPlaying = playing[i];
          const poster = buildPoster(it);
          return (
            <div
              key={`${it.name}-${i}`}
              className="group relative snap-start shrink-0 w-[78vw] md:w-[58vw] lg:w-[44vw] xl:w-[38vw] bg-background"
            >
              <div className="relative aspect-video overflow-hidden bg-surface-2 border border-foreground">
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
                    className="absolute inset-0 w-full h-full text-left"
                    aria-label={`Play ${it.name}`}
                  >
                    {poster ? (
                      <img
                        src={poster}
                        alt={it.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="w-full h-full bg-foreground/10" />
                    )}

                    <div className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-background mix-blend-difference">
                      ({String(numIdx).padStart(2, "0")})
                    </div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-background mix-blend-difference">
                      {it.tag}
                    </div>

                    {/* Play badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-background/80 bg-background/10 flex items-center justify-center text-background mix-blend-difference transition-transform duration-500 group-hover:scale-110">
                        <Play className="w-6 h-6 md:w-7 md:h-7 ml-1" fill="currentColor" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end justify-between text-background mix-blend-difference">
                      <h3 className="font-display text-[24px] md:text-[34px] leading-[0.95] tracking-[-0.03em]">
                        {it.name}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </button>
                )}
              </div>

              {/* Caption strip below */}
              <div className="mt-3 flex items-start justify-between gap-4">
                <p className="text-[12px] md:text-[13px] leading-[1.55] font-thai text-muted-foreground max-w-md">
                  {it.body}
                </p>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground shrink-0">
                  {it.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 md:mt-6 h-px w-full bg-foreground/15 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-150"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>
    </div>
  );
};

export default VideoReel;
