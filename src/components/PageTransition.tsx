import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => (
  <>
    <motion.div
      className="fixed inset-0 z-[9998] bg-background"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
      style={{ transformOrigin: "top" }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.08 }}
    >
      {children}
    </motion.div>
  </>
);

export default PageTransition;
