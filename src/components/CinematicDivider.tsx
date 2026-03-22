import { motion } from "framer-motion";

const CinematicDivider = ({ quote = "Perception is the only battlefield that matters." }: { quote?: string }) => (
  <section className="relative h-[40vh] flex items-center justify-center overflow-hidden border-t border-b border-border">
    {/* Dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative z-10 text-center px-4"
    >
      <p className="font-display text-[clamp(24px,4vw,56px)] leading-[1.05] tracking-[0.02em] text-foreground/80 max-w-4xl mx-auto">
        "{quote}"
      </p>
    </motion.div>
  </section>
);

export default CinematicDivider;
