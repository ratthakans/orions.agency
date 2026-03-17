const Marquee = ({ items, speed = "normal", color = "warm" }: { items: string[]; speed?: "normal" | "slow"; color?: "warm" | "blue" }) => {
  const text = items.join(" · ");
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  const hoverBorder = color === "blue" ? "hover:border-accent-blue/30" : "hover:border-accent-warm/30";
  const hoverText = color === "blue" ? "group-hover:text-accent-blue/20" : "group-hover:text-accent-warm/20";

  return (
    <div className={`overflow-hidden border-t border-b border-border/50 py-5 group ${hoverBorder} transition-colors duration-500`}>
      <div className={`flex whitespace-nowrap ${animClass} group-hover:[animation-play-state:paused]`}>
        <span className={`font-display text-[clamp(24px,3vw,48px)] tracking-[0.05em] uppercase text-foreground/10 ${hoverText} transition-colors duration-500 pr-8`}>
          {text} · {text} · {text} ·&nbsp;
        </span>
        <span className={`font-display text-[clamp(24px,3vw,48px)] tracking-[0.05em] uppercase text-foreground/10 ${hoverText} transition-colors duration-500 pr-8`}>
          {text} · {text} · {text} ·&nbsp;
        </span>
      </div>
    </div>
  );
};

export default Marquee;
