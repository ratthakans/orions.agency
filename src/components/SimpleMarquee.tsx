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
  // quadruple to ensure a long enough track for seamless loop on wide viewports
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div
      className={`marquee group/marquee ${className ?? ""}`}
      style={{ maskImage: "none", WebkitMaskImage: "none" }}
    >
      <div
        className="flex shrink-0 items-center whitespace-nowrap"
        style={{ animation: `marquee ${duration}s linear infinite` }}
      >
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center" aria-hidden={i >= items.length}>
            <span className="inline-block px-10 md:px-14">
              <span className="font-display text-[13px] md:text-[15px] tracking-[0.14em] uppercase text-foreground/60">
                {it}
              </span>
            </span>
            <span className="text-cinnabar/70 select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleMarquee;