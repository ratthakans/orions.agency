import { useEffect, useRef, useState } from "react";

interface Props {
  items: string[];
  intervalMs?: number;
  className?: string;
}

const RotatingHeadline = ({ items, intervalMs = 3000, className = "" }: Props) => {
  const [i, setI] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), intervalMs);
    return () => clearInterval(t);
  }, [items.length, intervalMs]);

  useEffect(() => {
    if (!measureRef.current) return;
    const el = measureRef.current;
    const update = () => {
      let max = 0;
      el.querySelectorAll("span").forEach((s) => {
        max = Math.max(max, s.offsetWidth);
      });
      setWidth(max);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items]);

  return (
    <span
      className={`relative inline-block overflow-hidden align-bottom ${className}`}
      style={{ height: "1.3em", width: width || undefined }}
    >
      {/* Hidden measurer */}
      <span
        ref={measureRef}
        aria-hidden
        className="invisible absolute -z-10 whitespace-nowrap pointer-events-none"
      >
        {items.map((item, idx) => (
          <span key={idx} className="block whitespace-nowrap">
            {item}
          </span>
        ))}
      </span>

      {items.map((item, idx) => {
        const offset = idx - i;
        return (
          <span
            key={idx}
            className="absolute left-0 right-0 top-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-center"
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
