import { m } from "framer-motion";
import type { ReactNode } from "react";

interface MaskRevealProps {
  children: ReactNode;
  /** Stagger index — later lines start slightly later for a cascading curtain. */
  delay?: number;
  /** Extra classes on the outer clipping window. */
  className?: string;
  /** Render tag for the window (default block span). */
  as?: "span" | "div";
}

/**
 * Cinematic "curtain up" reveal (COLLINS-style). The child rises from behind an
 * overflow-hidden mask when it scrolls into view. Compose one per line for a
 * cascading headline. Respects reduced-motion via framer-motion defaults.
 */
const MaskReveal = ({ children, delay = 0, className = "", as = "span" }: MaskRevealProps) => {
  const Tag = as === "div" ? m.div : m.span;
  return (
    <span className={`block overflow-hidden ${className}`}>
      <Tag
        className="block"
        initial={{ y: "108%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </Tag>
    </span>
  );
};

export default MaskReveal;
