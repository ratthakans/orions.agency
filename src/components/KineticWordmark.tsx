import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const LETTERS = ["Ø", "R", "I", "O", "N", "S"];

/** Hero wordmark — staggered mask-up reveal, Ø orbit rotation, parallax tilt on mouse move. */
const KineticWordmark = () => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 14 });
  const sry = useSpring(ry, { stiffness: 120, damping: 14 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const py = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    ry.set(px * 6); // ±3deg
    rx.set(-py * 6);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1000 }}
      className="cursor-default"
    >
      <motion.h1
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="font-brand h-display-xl text-foreground flex items-end justify-center leading-none"
        aria-label="ØRIONS"
      >
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
            style={{ lineHeight: 0.85 }}
          >
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.9,
                delay: 0.1 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {i === 0 && !reduced ? (
                <motion.span
                  className="inline-block"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                  style={{ transformOrigin: "50% 55%" }}
                >
                  {letter}
                </motion.span>
              ) : (
                letter
              )}
            </motion.span>
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default KineticWordmark;
