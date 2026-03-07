const ConstellationDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full py-1 ${className}`}>
      <svg viewBox="0 0 1200 20" className="w-full h-[20px]" preserveAspectRatio="xMidYMid meet">
        {/* Main line */}
        <line x1="0" y1="10" x2="1200" y2="10" stroke="hsl(var(--divider))" strokeWidth="0.5" />
        
        {/* Constellation dots along the line */}
        {[120, 280, 400, 520, 600, 680, 800, 920, 1080].map((cx, i) => (
          <circle
            key={i}
            cx={cx}
            cy={10}
            r={i === 4 ? 2.5 : i % 3 === 0 ? 1.8 : 1.2}
            fill="hsl(var(--foreground))"
            opacity={i === 4 ? 0.4 : 0.2}
            className="animate-twinkle"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
        
        {/* Short constellation line segments */}
        <line x1="280" y1="10" x2="400" y2="10" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="520" y1="10" x2="680" y2="10" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="800" y1="10" x2="920" y2="10" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeOpacity="0.15" />
      </svg>
    </div>
  );
};

export default ConstellationDivider;
