import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onStartProject: () => void;
}

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="h-screen flex items-end px-6 md:px-12 pb-20 md:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="font-mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground/50 mb-12">
            {t("Creative Agency · Bangkok", "Creative Agency · กรุงเทพฯ")}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4 }} className="font-display text-[clamp(44px,6.5vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10">
            {t(
              <>Creative Agency for<br />brands that need<br /><span className="text-accent-gradient">stronger stories.</span></>,
              <>Creative Agency<br />สำหรับแบรนด์ที่ต้องการ<br /><span className="text-accent-gradient">เรื่องราวที่แข็งแกร่ง</span></>
            )}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="font-body text-[14px] text-muted-foreground/60 max-w-[400px] leading-[1.9] mb-14">
            {t(
              "We help brands develop narratives, campaigns, and films with clarity and impact.",
              "เราช่วยแบรนด์พัฒนา narrative, campaign และ film ด้วยความชัดเจนและ impact"
            )}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className="flex flex-wrap gap-8 items-center">
            <Link to="/work" className="font-mono text-[9px] tracking-[0.2em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-all duration-500">
              {t("View Work", "ดูผลงาน")}
            </Link>
            <button onClick={onStartProject} className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50 hover:text-foreground transition-colors duration-500">
              {t("Start a Project", "เริ่ม Project")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
