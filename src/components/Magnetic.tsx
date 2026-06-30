import { useRef, ReactNode, MouseEvent } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  /** Max pixel offset on hover */
  strength?: number;
}

/** Magnetic hover wrapper — element drifts toward cursor when nearby. */
const Magnetic = ({ children, className, strength = 8 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const max = strength;
    x.set(Math.max(-max, Math.min(max, dx * 0.35)));
    y.set(Math.max(-max, Math.min(max, dy * 0.35)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default Magnetic;
