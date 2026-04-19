import { useEffect, useState } from "react";

interface Props {
  items: string[];
  intervalMs?: number;
  className?: string;
}

const RotatingHeadline = ({ items, intervalMs = 3000, className = "" }: Props) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), intervalMs);
    return () => clearInterval(t);
  }, [items.length, intervalMs]);

  return (
    <span className={`relative inline-block overflow-hidden align-bottom ${className}`} style={{ height: "1.2em" }}>
      {items.map((item, idx) => (
        <span
          key={idx}
          className="absolute left-0 right-0 top-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap"
          style={{
            transform: `translateY(${(idx - i) * 100}%)`,
            opacity: idx === i ? 1 : 0,
          }}
        >
          {item}
        </span>
      ))}
    </span>
  );
};

export default RotatingHeadline;
