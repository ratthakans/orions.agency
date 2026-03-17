import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onStartProject: () => void;
}

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-end px-6 md:px-12 pb-24 md:pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[clamp(56px,9vw,160px)] leading-[0.9] tracking-[0.01em] text-foreground mb-16"
          >
            A CREATIVE AGENCY<br />
            FOR BRANDS THAT NEED<br />
            <span className="text-accent-gradient">STRONGER STORIES.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-end max-w-6xl"
          >
            <p className="font-body text-[16px] text-muted-foreground max-w-[400px] leading-[1.7]">
              {t(
                "We help brands develop narratives, campaigns, and films with clarity and impact.",
                "เราช่วยแบรนด์พัฒนา narrative, campaign และ film ด้วยความชัดเจนและ impact"
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
