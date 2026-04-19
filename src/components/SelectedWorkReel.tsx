import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export interface ReelProject {
  tag: string;
  name: string;
  body: string;
  stat: string;
  statLabel: string;
  img: string;
}

interface Props {
  projects: ReelProject[];
}

const SelectedWorkReel = ({ projects }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(p);
      const card = el.clientWidth * 0.78;
      const idx = Math.min(projects.length - 1, Math.round(el.scrollLeft / card));
      setActive(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [projects.length]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <div className="mt-10 md:mt-14">
      {/* Counter + controls */}
      <div className="flex items-center justify-between mb-5">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          <span className="text-foreground">{String(active + 1).padStart(2, "0")}</span>
          <span className="opacity-40"> / {String(projects.length).padStart(2, "0")}</span>
          <span className="ml-4 hidden sm:inline opacity-60">DRAG · SCROLL · ARROWS</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 -rotate-[135deg]" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="w-10 h-10 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-45" />
          </button>
        </div>
      </div>

      {/* Scroll reel */}
      <div
        ref={scrollerRef}
        className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 md:-mx-10 px-6 md:px-10 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((p, i) => (
          <Link
            key={p.name}
            to="/work"
            className="group relative snap-start shrink-0 w-[78vw] md:w-[58vw] lg:w-[44vw] xl:w-[38vw] bg-background"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-2 border border-foreground">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />

              {/* Project number — top left */}
              <div className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.18em] uppercase text-background mix-blend-difference">
                ({String(i + 1).padStart(2, "0")})
              </div>

              {/* Tag — top right */}
              <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.18em] uppercase text-background mix-blend-difference">
                {p.tag}
              </div>

              {/* Bottom name strip — always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end justify-between text-background mix-blend-difference">
                <h3 className="font-display text-[28px] md:text-[40px] leading-[0.95] tracking-[-0.03em]">
                  {p.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              {/* Stats overlay — slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 bg-foreground text-background translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                <div className="p-5 md:p-7 grid grid-cols-[1fr_auto] gap-6 items-end border-t border-background/20">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-60">{p.tag}</div>
                    <p className="mt-3 text-[13px] md:text-[14px] leading-[1.6] font-thai opacity-90 max-w-md">
                      {p.body}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-[36px] md:text-[52px] leading-none tracking-[-0.04em] text-gradient">
                      {p.stat}
                    </div>
                    <div className="mt-2 font-mono text-[9px] tracking-[0.18em] uppercase opacity-60">
                      {p.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {/* End spacer */}
        <div className="shrink-0 w-2" aria-hidden />
      </div>

      {/* Progress hairline */}
      <div className="mt-6 h-px w-full bg-foreground/15 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-150"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>
    </div>
  );
};

export default SelectedWorkReel;
