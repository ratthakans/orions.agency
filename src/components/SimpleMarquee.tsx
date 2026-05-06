interface Props {
  items: string[];
  duration?: number;
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
        className="flex gap-16 shrink-0 pr-16 whitespace-nowrap items-center"
        style={{ animation: `marquee ${duration}s linear infinite` }}
        aria-hidden={k === 1}
      >
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="font-display text-[13px] md:text-[15px] tracking-[0.12em] uppercase">{it}</span>
            <span className="text-background/40">✦</span>
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default SimpleMarquee;