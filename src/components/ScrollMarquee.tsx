import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity, useMotionValue, useAnimationFrame, useReducedMotion } from "framer-motion";

interface Props {
  items: string[];
  baseSpeed?: number; // px/sec base
}

/** Marquee that couples to scroll velocity — speeds up while scrolling, reverses direction on scroll-up. */
const ScrollMarquee = ({ items, baseSpeed = 60 }: Props) => {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [-2000, 0, 2000], [-6, 0, 6], { clamp: false });
  const directionFactor = useRef(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const hover = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) widthRef.current = trackRef.current.scrollWidth;
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  const x = useTransform(baseX, (v) => {
    const w = widthRef.current || 1;
    return `${(((v % w) + w) % w) * -1}px`;
  });

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let moveBy = directionFactor.current * baseSpeed * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * Math.abs(vf);
    if (hover.current) moveBy *= 0.3;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
      onMouseEnter={() => (hover.current = true)}
      onMouseLeave={() => (hover.current = false)}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex gap-12 whitespace-nowrap will-change-transform">
        {[0, 1, 2].map((k) => (
          <div key={k} className="flex gap-12 shrink-0" aria-hidden={k !== 0}>
            {items.map((w, i) => (
              <span key={i} className="font-display text-[14px] md:text-[16px] leading-none tracking-[0.04em] flex items-center gap-12">
                <span>{w}</span>
                <span className="text-muted-foreground">✦</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;
