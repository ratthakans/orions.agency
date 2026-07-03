import { m, useReducedMotion } from "framer-motion";
import TypingCycle from "@/components/TypingCycle";

/** ØRIONS hero headline — "Stories, Refined." with a staggered mask-up reveal.
 *  Fully Newsreader (editorial serif); no cursor effects — calm by design. */
const HeroHeadline = () => {
  const reduced = useReducedMotion();

  const Word = ({ children, delay, className }: { children: string; delay: number; className?: string }) => (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ lineHeight: 1.04 }}>
      <m.span
        initial={reduced ? { y: 0 } : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${className ?? ""}`}
      >
        {children}
      </m.span>
    </span>
  );

  return (
    <h1 className="h-display-xl leading-[0.96]">
      {/* Static text for crawlers + screen readers */}
      <span className="sr-only">Stories, Refined.</span>
      {/* Animated presentation */}
      <span aria-hidden="true">
        <span className="block"><Word delay={0.1} className="font-serif">Stories,</Word></span>
        <TypingCycle
          words={["Amplified.", "Remembered.", "Refined."]}
          className="hero-refined font-medium text-cinnabar [letter-spacing:-0.02em]"
          caretClassName="bg-cinnabar"
        />
      </span>
    </h1>
  );
};

export default HeroHeadline;
