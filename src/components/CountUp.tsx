import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  suffixClassName?: string;
  prefixClassName?: string;
}

const CountUp = ({ to, suffix = "", prefix = "", decimals = 0, duration = 1500, className, suffixClassName, prefixClassName }: Props) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(eased * to);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) run();
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {prefix && <span className={prefixClassName}>{prefix}</span>}
        {val.toFixed(decimals)}
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </span>
      {/* Screen readers get the final value, not the rapid count-up. */}
      <span className="sr-only">{prefix}{to.toFixed(decimals)}{suffix}</span>
    </span>
  );
};

export default CountUp;
