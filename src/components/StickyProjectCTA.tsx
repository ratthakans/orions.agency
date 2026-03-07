import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

interface StickyProjectCTAProps {
  onClick: () => void;
}

const StickyProjectCTA = ({ onClick }: StickyProjectCTAProps) => {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > window.innerHeight);
  });

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 bg-accent-gradient text-white px-6 py-3 text-sm font-mono tracking-[0.1em] uppercase shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-300 flex items-center gap-2 rounded-sm"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      Start a Project
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </motion.button>
  );
};

export default StickyProjectCTA;
