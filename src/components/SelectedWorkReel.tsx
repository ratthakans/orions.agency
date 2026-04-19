import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export interface ReelProject {
  tag: string;
  name: string;
  body: string;
  stat?: string;
  statLabel?: string;
  img: string;
}

interface Props {
  projects: ReelProject[];
  size?: "lg" | "sm";
}

const SelectedWorkReel = ({ projects, size = "lg" }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Triplicate for seamless looping
  const loop = [...projects, ...projects, ...projects];
  const baseLen = projects.length;

  // Card width approx (vw based) — used for snap calculations
  const cardVw = size === "lg" ? 0.44 : 0.28;
  const cardVwMobile = size === "lg" ? 0.78 : 0.62;

  // On mount, jump to middle copy
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
      // Wrap: keep scrollLeft inside [baseLen*cardW, baseLen*2*cardW]
      const min = cardW * baseLen * 0.5;
      const max = cardW * baseLen * 2.5;
      if (el.scrollLeft < min) {
        el.scrollLeft += cardW * baseLen;
      } else if (el.scrollLeft > max) {
        el.scrollLeft -= cardW * baseLen;
      }
      const idx = Math.round(el.scrollLeft / cardW) % baseLen;
      setActive(((idx % baseLen) + baseLen) % baseLen);
      // Progress within current loop
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

  const titleSize = size === "lg" ? "text-[28px] md:text-[40px]" : "text-[18px] md:text-[24px]";
  const padInner = size === "lg" ? "p-4 md:p-6" : "p-3 md:p-4";
  const overlayPad = size === "lg" ? "p-5 md:p-7" : "p-4 md:p-5";
  const statSize = size === "lg" ? "text-[36px] md:text-[52px]" : "text-[24px] md:text-[34px]";
  const cardWidthCls =
    size === "lg"
      ? "w-[78vw] md:w-[58vw] lg:w-[44vw] xl:w-[38vw]"
      : "w-[62vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw]";

  return (
    <div className={size === "lg" ? "mt-10 md:mt-14" : "mt-6 md:mt-8"}>
      {/* Counter + controls */}
      <div className="flex items-center justify-between mb-5">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
          <span className="text-foreground">{String(active + 1).padStart(2, "0")}</span>
          <span className="opacity-40"> / {String(baseLen).padStart(2, "0")}</span>
          <span className="ml-4 hidden sm:inline opacity-60">DRAG · SCROLL · LOOP</span>
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

      {/* Scroll reel — within section padding */}
      <div
        ref={scrollerRef}
        className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {loop.map((p, i) => {
          const numIdx = (i % baseLen) + 1;
          return (
            <Link
              key={`${p.name}-${i}`}
              to="/work"
              className={`group relative snap-start shrink-0 ${cardWidthCls} bg-background`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-2 border border-foreground">
                <div
                  className="absolute inset-0 reveal-clip"
                  style={{ animationDelay: `${(i % baseLen) * 80}ms` }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-background mix-blend-difference">
                  ({String(numIdx).padStart(2, "0")})
                </div>

                <div className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-background mix-blend-difference">
                  {p.tag}
                </div>

                <div className={`absolute bottom-0 left-0 right-0 ${padInner} flex items-end justify-between text-background mix-blend-difference`}>
                  <h3 className={`font-display ${titleSize} leading-[0.95] tracking-[-0.03em]`}>
                    {p.name}
                  </h3>
                  <ArrowUpRight className={`${size === "lg" ? "w-5 h-5 md:w-6 md:h-6" : "w-4 h-4"} transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1`} />
                </div>

                {/* Stats overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-foreground text-background translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <div className={`${overlayPad} grid ${p.stat ? "grid-cols-[1fr_auto]" : "grid-cols-1"} gap-4 items-end border-t border-background/20`}>
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-60">{p.tag}</div>
                      <p className={`mt-2 ${size === "lg" ? "text-[13px] md:text-[14px]" : "text-[12px]"} leading-[1.55] font-thai opacity-90 max-w-md`}>
                        {p.body}
                      </p>
                    </div>
                    {p.stat && (
                      <div className="text-right">
                        <div className={`font-display ${statSize} leading-none tracking-[-0.04em] text-gradient`}>
                          {p.stat}
                        </div>
                        {p.statLabel && (
                          <div className="mt-1.5 font-mono text-[9px] tracking-[0.18em] uppercase opacity-60">
                            {p.statLabel}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Progress hairline */}
      <div className="mt-5 md:mt-6 h-px w-full bg-foreground/15 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-150"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>
    </div>
  );
};

export default SelectedWorkReel;
