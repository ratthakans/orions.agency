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
    <span
      className={`relative block overflow-hidden ${className}`}
      style={{ height: "1.3em" }}
    >
      {items.map((item, idx) => {
        const offset = idx - i;
        return (
          <span
            key={idx}
            className="absolute inset-x-0 top-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-center"
            style={{
              transform: `translateY(${offset * 110}%)`,
              opacity: offset === 0 ? 1 : 0,
            }}
          >
            {item}
          </span>
        );
      })}
    </span>
  );
};

export default RotatingHeadline;
