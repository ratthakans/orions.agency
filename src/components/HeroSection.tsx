import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onStartProject: () => void;
}

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-end px-6 md:px-12 pb-20 md:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
            Creative Agency · Bangkok
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4 }} className="font-display text-[clamp(52px,7.5vw,130px)] leading-[0.88] tracking-[0.02em] text-foreground mb-10">
            Creative Agency for<br />brands that need<br /><span className="text-accent-gradient">stronger stories.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="font-body text-[15px] text-muted-foreground/50 max-w-[440px] leading-[1.8] mb-14">
            {t(
              "We help brands develop narratives, campaigns, and films with clarity and impact.",
              "เราช่วยแบรนด์พัฒนา narrative, campaign และ film ด้วยความชัดเจนและ impact"
            )}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className="flex flex-wrap gap-8 items-center">
            <Link to="/work" className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-all duration-500">
              View Work
            </Link>
            <button onClick={onStartProject} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 hover:text-foreground transition-colors duration-500">
              Start a Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
