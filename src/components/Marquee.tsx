const Marquee = ({ items, speed = "normal" }: { items: string[]; speed?: "normal" | "slow" }) => {
  const text = items.join(" · ");
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div className="overflow-hidden border-t border-b border-border py-4">
      <div className={`flex whitespace-nowrap ${animClass}`}>
        <span className="font-display text-[clamp(24px,3vw,42px)] tracking-[0.05em] uppercase text-foreground/15 pr-8">
          {text} · {text} · {text} ·&nbsp;
        </span>
        <span className="font-display text-[clamp(24px,3vw,42px)] tracking-[0.05em] uppercase text-foreground/15 pr-8">
          {text} · {text} · {text} ·&nbsp;
        </span>
      </div>
    </div>
  );
};

export default Marquee;
