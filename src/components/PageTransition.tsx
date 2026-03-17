import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => (
  <>
    {/* Wipe overlay — slides in from bottom, then out to top */}
    <motion.div
      className="fixed inset-0 z-[9998] bg-background origin-bottom"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: "top" }}
    />
    <motion.div
      className="fixed inset-0 z-[9997] bg-background origin-bottom"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      style={{ transformOrigin: "top" }}
    />

    {/* Content fades in */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      {children}
    </motion.div>
  </>
);

export default PageTransition;
