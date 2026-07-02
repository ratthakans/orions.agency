import { m, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Reveal direction — kept subtle for an understated feel. */
  direction?: "up" | "left" | "right" | "fade";
}

// Small offsets on purpose: a quiet fade with a hint of movement reads more
// refined than a large slide.
const offsets = {
  up: { x: 0, y: 10 },
  left: { x: -14, y: 0 },
  right: { x: 14, y: 0 },
  fade: { x: 0, y: 0 },
};

const Reveal = ({ children, className, delay = 0, direction = "up" }: Props) => {
  const reduce = useReducedMotion();
  const offset = offsets[direction];
  return (
    <m.div
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default Reveal;
