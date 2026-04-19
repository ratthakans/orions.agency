import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
}

/** Flip-digit ticker — split-flap board style. Animates on scroll into view. */
const FlipNumber = ({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
  suffixClassName,
}: Props) => {
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setVal(to);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(eased * to);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration, reduced]);

  const str = val.toFixed(decimals);
  const chars = str.split("");

  return (
    <span ref={ref} className={`inline-flex items-baseline ${className ?? ""}`}>
      {prefix && <span>{prefix}</span>}
      {chars.map((c, i) => (
        <span key={i} className="relative inline-block overflow-hidden" style={{ minWidth: c === "." ? "0.3em" : "0.6em" }}>
          <motion.span
            key={c + i + str}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="inline-block tabular-nums"
          >
            {c}
          </motion.span>
        </span>
      ))}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
};

export default FlipNumber;
