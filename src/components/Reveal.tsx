import { m, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className, delay = 0 }: Props) => {
  const reduce = useReducedMotion();
  return (
    <m.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default Reveal;
