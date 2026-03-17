import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import StarField from "./StarField";

interface HeroSectionProps {
  onStartProject: () => void;
}

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="h-screen flex items-center px-6 md:px-12 pt-[62px] relative overflow-hidden">
      <StarField count={35} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-10">
            {t("Creative Agency · Bangkok", "Creative Agency · กรุงเทพฯ")}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-display text-[clamp(48px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8">
            {t(
              <>Creative Agency for<br />brands that need<br /><span className="text-accent-gradient">stronger stories.</span></>,
              <>Creative Agency<br />สำหรับแบรนด์ที่ต้องการ<br /><span className="text-accent-gradient">เรื่องราวที่แข็งแกร่ง</span></>
            )}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-body text-[15px] text-muted-foreground max-w-[440px] leading-[1.8] mb-12">
            {t(
              "We help brands develop narratives, campaigns, and films with clarity and impact.",
              "เราช่วยแบรนด์พัฒนา narrative, campaign และ film ด้วยความชัดเจนและ impact"
            )}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-5">
            <Link to="/work" className="bg-accent-gradient text-background px-8 py-3.5 font-mono text-[10px] tracking-[0.14em] uppercase hover:opacity-85 transition-opacity">
              {t("View Work", "ดูผลงาน")}
            </Link>
            <button onClick={onStartProject} className="text-foreground font-mono text-[10px] tracking-[0.14em] uppercase py-3.5 px-1 border-b border-foreground/20 hover:border-foreground/50 transition-all duration-500">
              {t("Start a Project", "เริ่ม Project")}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Minimal ticker */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="absolute bottom-0 left-0 right-0 border-t border-divider overflow-hidden py-3.5 bg-background/80 backdrop-blur-sm">
        <div className="animate-marquee whitespace-nowrap flex gap-0">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mx-0">
              Narrative <span className="opacity-30">·</span> Campaign <span className="opacity-30">·</span> Film <span className="opacity-30">·</span> Content <span className="opacity-30">·</span> Storytelling <span className="opacity-30">·</span> Strategy <span className="opacity-30">·</span> Documentary <span className="opacity-30">·</span> Direction <span className="opacity-30">·</span>&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
