import { m, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Reveal direction — kept subtle for an understated feel. */
  direction?: "up" | "left" | "right" | "fade";
  /**
   * Weight of the entrance. Motion should carry hierarchy, not decorate every
   * element equally — a page where the headline and a footnote arrive the same
   * way reads flat.
   *   lead    — section-opening headlines: further, slower, it lands
   *   default — standard supporting content
   *   quiet   — stacked/staggered items: a plain fade, so a list of six cards
   *             doesn't turn into six competing animations
   */
  emphasis?: "lead" | "default" | "quiet";
}

// Small offsets on purpose: a quiet fade with a hint of movement reads more
// refined than a large slide.
const offsets = {
  up: { x: 0, y: 10 },
  left: { x: -14, y: 0 },
  right: { x: 14, y: 0 },
  fade: { x: 0, y: 0 },
};

/** Per-emphasis travel multiplier + duration. */
const weights = {
  lead: { scale: 2.2, duration: 0.78 },
  default: { scale: 1, duration: 0.5 },
  quiet: { scale: 0, duration: 0.42 },
};

const Reveal = ({ children, className, delay = 0, direction = "up", emphasis = "default" }: Props) => {
  const reduce = useReducedMotion();
  const base = offsets[direction];
  const { scale, duration } = weights[emphasis];
  const offset = { x: base.x * scale, y: base.y * scale };
  return (
    <m.div
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduce ? { duration: 0 } : { duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default Reveal;
