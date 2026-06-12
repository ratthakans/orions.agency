import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import TypingCycle from "@/components/TypingCycle";

/** ØRIONS hero headline — "Stories, refined." with a staggered mask-up reveal
 *  and a subtle parallax tilt that follows the cursor. */
const HeroHeadline = () => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width / 2)) / r.width;
    const py = (e.clientY - (r.top + r.height / 2)) / r.height;
    ry.set(px * 7);
    rx.set(-py * 7);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const Word = ({ children, delay, className }: { children: string; delay: number; className?: string }) => (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ lineHeight: 1.04 }}>
      <motion.span
        initial={reduced ? { y: 0 } : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${className ?? ""}`}
      >
        {children}
      </motion.span>
    </span>
  );

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1100 }}
      className="cursor-default"
    >
      <motion.h1
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="h-display-xl leading-[0.96]"
      >
        {/* Static text for crawlers + screen readers */}
        <span className="sr-only">Stories, Refined.</span>
        {/* Animated presentation */}
        <span aria-hidden="true">
          <span className="block"><Word delay={0.1}>Stories,</Word></span>
          <TypingCycle
            words={["Amplified.", "Remembered.", "Refined."]}
            className="font-serif font-medium text-cinnabar [letter-spacing:-0.02em]"
            caretClassName="bg-cinnabar"
          />
        </span>
      </motion.h1>
    </div>
  );
};

export default HeroHeadline;
