const Marquee = ({ items, speed = "normal" }: { items: string[]; speed?: "normal" | "slow" }) => {
  const text = items.join(" — ");
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div className="overflow-hidden border-t border-b border-divider/30 py-5">
      <div className={`flex whitespace-nowrap ${animClass}`}>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/20 pr-4">
          {text} — {text} —&nbsp;
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/20 pr-4">
          {text} — {text} —&nbsp;
        </span>
      </div>
    </div>
  );
};

export default Marquee;
