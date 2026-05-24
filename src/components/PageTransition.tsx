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
    const t = setTimeout(() => setActive(false), 500);
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "hsl(var(--foreground))" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-4 text-background"
              >
                <span className="font-mono text-[11px] tracking-[0.12em] opacity-60">→</span>
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
