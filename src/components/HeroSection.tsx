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
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground/50 mb-8">
              Navigating brands by the stars · Bangkok
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="font-display text-[clamp(48px,7vw,110px)] leading-[0.9] tracking-[0.02em] text-foreground mb-4">
              Human Thinking.<br /><span className="text-accent-gradient italic">AI Speed.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }} className="font-mono text-[11px] tracking-[0.15em] uppercase text-foreground/40 mb-8">
              {t("Like Orion — visible, precise, unforgettable.", "เหมือนกลุ่มดาว Orion — โดดเด่น แม่นยำ จดจำไม่มีวันลืม")}
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-body text-[16px] text-muted-foreground max-w-[420px] leading-[1.75] mb-10">
              {t(
                <>We build brands that navigate through the noise — with the <strong className="text-foreground font-normal">strategic depth</strong> no AI can replicate, and the <strong className="text-foreground font-normal">production velocity</strong> no traditional agency can match.</>,
                <>เราสร้างแบรนด์ที่นำทางผ่านทุก noise — ด้วย<strong className="text-foreground font-normal">กลยุทธ์เชิงลึก</strong>ที่ AI ทำแทนไม่ได้ และ<strong className="text-foreground font-normal">ความเร็วในการผลิต</strong>ที่เอเจนซี่ทั่วไปตามไม่ทัน</>
              )}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-wrap gap-4">
              <button onClick={onStartProject} className="bg-accent-gradient text-white px-7 py-3.5 font-mono text-[11px] tracking-[0.1em] uppercase flex items-center gap-2.5 rounded-sm hover:opacity-90 transition-opacity">
                {t("Start a Project →", "เริ่ม Project →")}
              </button>
              <Link to="/services" className="text-muted-foreground font-mono text-[11px] tracking-[0.1em] uppercase py-3.5 px-4 border-b border-divider hover:text-foreground hover:border-foreground/30 transition-all duration-300">
                {t("View Services", "ดู Services")}
              </Link>
            </motion.div>
          </div>

          {/* Stats - visible on all screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex lg:flex-col gap-px bg-divider border border-divider overflow-x-auto"
          >
            <div className="bg-background p-6 lg:p-8 text-center min-w-[140px] flex-1">
              <span className="font-display text-[40px] lg:text-[56px] leading-none text-foreground block mb-1">14+</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Clients</span>
            </div>
            <div className="bg-background p-6 lg:p-8 text-center min-w-[140px] flex-1">
              <span className="font-display text-[40px] lg:text-[56px] leading-none text-foreground block mb-1">3.2×</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Avg Engagement</span>
            </div>
            <div className="bg-background p-6 lg:p-8 text-center min-w-[140px] flex-1">
              <span className="font-display text-[40px] lg:text-[56px] leading-none text-foreground block mb-1">25%</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Revenue Uplift</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute bottom-0 left-0 right-0 bg-accent-gradient overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex gap-0">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 mx-0">
              Brand Strategy <span className="opacity-45">✧</span> AI-Augmented Creative <span className="opacity-45">✧</span> Visual Identity <span className="opacity-45">✧</span> Social Media Management <span className="opacity-45">✧</span> SEO & Performance <span className="opacity-45">✧</span> Content Production <span className="opacity-45">✧</span> LINE & Email Marketing <span className="opacity-45">✧</span> Bangkok · Southeast Asia <span className="opacity-45">✧</span>&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
