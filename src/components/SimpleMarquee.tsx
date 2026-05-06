import { useState } from "react";

export interface MarqueeCategory {
  title: string;
  items: string[];
}

interface Props {
  categories: MarqueeCategory[];
  duration?: number;
  className?: string;
}

/** Infinite marquee grouped by category — title + items, with hover highlight. */
const SimpleMarquee = ({ categories, duration = 50, className }: Props) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const renderTrack = (ariaHidden: boolean) => (
    <div
      className="flex shrink-0 pr-16 items-center"
      style={{ animation: `marquee ${duration}s linear infinite`, animationPlayState: hovered !== null ? "paused" : "running" }}
      aria-hidden={ariaHidden}
    >
      {categories.map((cat, ci) => {
        const isOn = hovered === ci;
        const dim = hovered !== null && !isOn;
        return (
          <div
            key={ci}
            onMouseEnter={() => setHovered(ci)}
            onMouseLeave={() => setHovered(null)}
            className={`flex items-center gap-6 mr-16 transition-all duration-300 origin-center ${
              isOn ? "scale-[1.06]" : dim ? "opacity-35" : "opacity-100"
            }`}
          >
            <span className={`font-display text-[12px] md:text-[14px] tracking-[0.12em] uppercase transition-colors duration-300 ${
              isOn ? "text-gradient" : "text-background"
            }`}>
              {cat.title}
            </span>
            <span className="block w-8 h-px bg-background/40" />
            <div className="flex items-center gap-5">
              {cat.items.map((it, i) => (
                <span key={i} className="flex items-center gap-5">
                  <span className={`font-thai text-[12px] md:text-[14px] tracking-[0.02em] whitespace-nowrap transition-colors duration-300 ${
                    isOn ? "text-background" : "text-background/65"
                  }`}>
                    {it}
                  </span>
                  {i < cat.items.length - 1 && <span className="text-background/30">·</span>}
                </span>
              ))}
            </div>
            <span className="ml-12 text-background/40 font-display">✦</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      className={`marquee ${className ?? ""}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)",
      }}
    >
      {renderTrack(false)}
      {renderTrack(true)}
    </div>
  );
};

export default SimpleMarquee;