import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const routeLabel: Record<string, string> = {
  "/": "HOME",
  "/services": "SERVICES",
  "/work": "WORK",
  "/about": "ABOUT",
  "/contact": "CONTACT",
  "/style": "STYLE",
};

const PageTransition = () => {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    if (reduced) return;
    setLabel(routeLabel[pathname] ?? pathname.replace("/", "").toUpperCase() ?? "");
    setActive(true);
    const t = setTimeout(() => setActive(false), 900);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden>
      <AnimatePresence>
        {active && (
          <motion.div
            key="wipe"
            className="absolute inset-0"
            initial={{ x: "-110%", skewX: -15 }}
            animate={{ x: "0%", skewX: -15 }}
            exit={{ x: "110%", skewX: -15 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{ background: "hsl(var(--foreground))" }}
          >
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "skewX(15deg)" }}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-4 text-background"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] opacity-60">→</span>
                <span className="font-display tracking-[-0.02em] text-[40px] md:text-[80px] leading-none">
                  {label}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
