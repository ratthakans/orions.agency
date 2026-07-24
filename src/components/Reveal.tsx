import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Reveal direction — kept subtle for an understated feel. */
  direction?: "up" | "left" | "right" | "fade";
  /**
   * Weight of the entrance. Motion carries hierarchy, not decoration —
   *   lead    — section-opening headlines: travels a little further
   *   default — standard supporting content
   *   quiet   — stacked/staggered items: the smallest move, so a grid of six
   *             cards doesn't turn into six competing animations
   */
  emphasis?: "lead" | "default" | "quiet";
}

// Small offsets on purpose: a quiet fade with a hint of movement reads more
// refined than a large slide — and a small offset can't overlap neighbouring
// content mid-animation the way a big one can.
const travel = { lead: 16, default: 10, quiet: 6 };
const duration = { lead: 640, default: 480, quiet: 380 };

const hiddenTransform = (direction: Props["direction"], d: number) =>
  direction === "fade"
    ? "none"
    : direction === "left"
      ? `translateX(-${d}px)`
      : direction === "right"
        ? `translateX(${d}px)`
        : `translateY(${d}px)`;

/**
 * Scroll-reveal — rewritten off framer-motion's `whileInView` because that
 * mechanism could leave content stuck at opacity:0 if the viewport callback
 * never fired (fast route changes, backgrounded tabs, SSG hydration races),
 * which read across the whole site as "content missing / janky". This version:
 *   1. reveals above-the-fold content immediately on mount (no wait, no flash
 *      of an empty first screen),
 *   2. has a hard failsafe timer so nothing is EVER left invisible, and
 *   3. animates with a plain CSS transition — no per-frame JS, lighter and
 *      smoother than the framer path.
 * Same props as before, so no call site changes.
 */
const Reveal = ({ children, className = "", delay = 0, direction = "up", emphasis = "default" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Already on screen when JS runs → reveal at once (no empty first paint).
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setShown(true);
      return;
    }

    // Failsafe — content is never left invisible even if the observer misfires.
    const failsafe = window.setTimeout(() => setShown(true), 1200);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
          clearTimeout(failsafe);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const d = travel[emphasis];
  const ms = duration[emphasis];
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";
  return (
    <div
      ref={ref}
      className={`reveal-root ${className}`}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : hiddenTransform(direction, d),
        transition: `opacity ${ms}ms ${ease} ${delay * 1000}ms, transform ${ms}ms ${ease} ${delay * 1000}ms`,
        willChange: shown ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
