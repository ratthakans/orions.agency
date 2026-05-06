interface Props {
  items: string[];
  duration?: number; // seconds for one full loop
  className?: string;
}

/** Pure-CSS infinite marquee — constant speed, no scroll coupling. */
const SimpleMarquee = ({ items, duration = 40, className }: Props) => (
  <div
    className={`marquee ${className ?? ""}`}
    style={{
      maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
      WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
    }}
  >
    {[0, 1].map((k) => (
      <div
        key={k}
        className="flex gap-12 shrink-0 pr-12 whitespace-nowrap"
        style={{ animation: `marquee ${duration}s linear infinite` }}
        aria-hidden={k === 1}
      >
        {items.map((it, i) => (
          <span key={i} className="font-display text-[13px] md:text-[15px] tracking-[0.04em] flex items-center gap-12">
            <span>{it}</span>
            <span className="text-background/40">✦</span>
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default SimpleMarquee;