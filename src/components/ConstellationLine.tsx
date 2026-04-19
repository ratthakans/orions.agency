interface Props {
  className?: string;
  /** number of dots — segments = dots-1 */
  dots?: number;
}

/** Hairline SVG that draws a connecting line with dots — visualizes "drawing the line" between stars */
const ConstellationLine = ({ className, dots = 3 }: Props) => {
  const points = Array.from({ length: dots }, (_, i) => {
    const x = (i / (dots - 1)) * 100;
    // staircase pattern matching the asymmetric column offsets
    const y = i === 0 ? 80 : i === 1 ? 40 : 10;
    return { x, y };
  });

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className ?? ""}`}
      aria-hidden
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.15"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="2 2"
        opacity="0.5"
      />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="0.6" fill="currentColor" vectorEffect="non-scaling-stroke" />
          <circle
            cx={p.x}
            cy={p.y}
            r="1.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
            opacity="0.4"
          />
        </g>
      ))}
    </svg>
  );
};

export default ConstellationLine;
