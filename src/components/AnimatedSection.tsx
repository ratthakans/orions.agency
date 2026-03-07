import { motion } from "framer-motion";
import { forwardRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className = "", delay = 0 }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
