import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import OrionConstellation from "./OrionConstellation";
import StarField from "./StarField";

interface HeroSectionProps {
  onStartProject: () => void;
}

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="h-screen flex items-center px-6 md:px-12 pt-[62px] relative overflow-hidden">
      <StarField count={80} />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 pointer-events-none hidden lg:block">
        <OrionConstellation size="xl" opacity={0.12} animate={true} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] bg-accent-gradient blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground/50 mb-8">
            {t("Creative Agency · Bangkok", "Creative Agency · กรุงเทพฯ")}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="font-display text-[clamp(48px,7vw,110px)] leading-[0.9] tracking-[0.02em] text-foreground mb-6">
            {t(
              <>Creative Agency for brands that need <span className="text-accent-gradient italic">stronger stories.</span></>,
              <>Creative Agency สำหรับแบรนด์ที่ต้องการ<span className="text-accent-gradient italic">เรื่องราวที่แข็งแกร่ง</span></>
            )}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-body text-[16px] text-muted-foreground max-w-[480px] leading-[1.75] mb-10">
            {t(
              "ORIONS helps brands develop narratives, campaigns, and films with clarity and impact. Every dot has meaning — we just know how to connect them.",
              "ORIONS ช่วยแบรนด์พัฒนา narrative, campaign และ film ด้วยความชัดเจนและ impact ทุกจุดมีความหมาย — เราแค่รู้วิธีเชื่อมต่อมัน"
            )}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-wrap gap-4">
            <Link to="/work" className="bg-accent-gradient text-white px-7 py-3.5 font-mono text-[11px] tracking-[0.1em] uppercase flex items-center gap-2.5 rounded-sm hover:opacity-90 transition-opacity">
              {t("View Work →", "ดูผลงาน →")}
            </Link>
            <button onClick={onStartProject} className="text-muted-foreground font-mono text-[11px] tracking-[0.1em] uppercase py-3.5 px-4 border-b border-divider hover:text-foreground hover:border-foreground/30 transition-all duration-300">
              {t("Start a Project", "เริ่ม Project")}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute bottom-0 left-0 right-0 bg-accent-gradient overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex gap-0">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 mx-0">
              Narrative <span className="opacity-45">✧</span> Campaign <span className="opacity-45">✧</span> Film <span className="opacity-45">✧</span> Content <span className="opacity-45">✧</span> Storytelling <span className="opacity-45">✧</span> Brand Strategy <span className="opacity-45">✧</span> Documentary <span className="opacity-45">✧</span> Creative Direction <span className="opacity-45">✧</span>&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
