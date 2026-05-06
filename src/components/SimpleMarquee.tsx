interface Props {
  items: string[];
  duration?: number;
  className?: string;
}

/**
 * Seamless infinite marquee. Items are duplicated within a single track and the
 * track translates by exactly -50%, so the loop has no visible jump.
 */
const SimpleMarquee = ({ items, duration = 35, className }: Props) => {
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee group/marquee ${className ?? ""}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <div
        className="flex shrink-0 items-center whitespace-nowrap"
        style={{ animation: `marquee ${duration}s linear infinite` }}
      >
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center" aria-hidden={i >= items.length}>
            <span className="group/item inline-block px-10 md:px-14 transition-transform duration-300 ease-out hover:scale-[1.08]">
              <span className="font-display text-[13px] md:text-[15px] tracking-[0.14em] uppercase text-background/55 transition-colors duration-300 group-hover/item:text-background">
                {it}
              </span>
            </span>
            <span className="text-background/30 select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleMarquee;