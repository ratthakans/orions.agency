import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  onStartProject: () => void;
}

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pt-20 pb-20 relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04] bg-accent-gradient blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-[10px] tracking-[0.28em] uppercase text-accent-violet mb-8"
        >
          AI-Native Creative Agency · Bangkok
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display text-[clamp(72px,11.5vw,190px)] leading-[0.88] tracking-[0.02em] text-foreground mb-0"
        >
          Human Thinking.
          <br />
          <span className="text-muted-foreground italic">
            Machine Speed.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-16 pt-10 border-t border-divider"
        >
          <p className="font-body text-base text-muted-foreground max-w-[360px] leading-[1.78]">
            {t(
              <>We build brands that cut through — with the <strong className="text-foreground font-normal">strategic depth</strong> no AI can replicate, and the <strong className="text-foreground font-normal">production velocity</strong> no traditional agency can match.</>,
              <>เราสร้างแบรนด์ที่ตัดผ่านทุก noise — ด้วย<strong className="text-foreground font-normal">กลยุทธ์เชิงลึก</strong>ที่ AI ทำแทนไม่ได้ และ<strong className="text-foreground font-normal">ความเร็วในการผลิต</strong>ที่เอเจนซี่ทั่วไปตามไม่ทัน</>
            )}
          </p>

          <div className="flex flex-col gap-3.5">
            <button
              onClick={onStartProject}
              className="group/btn bg-accent-gradient text-white px-7 py-3.5 font-mono text-[11px] tracking-[0.1em] uppercase flex items-center gap-2.5 rounded-sm hover:opacity-90 transition-opacity"
            >
              {t("Start a Project →", "เริ่ม Project →")}
            </button>
            <Link
              to="/services"
              className="text-muted-foreground font-mono text-[11px] tracking-[0.1em] uppercase py-3.5 border-b border-divider hover:text-foreground hover:border-muted-foreground transition-all duration-300"
            >
              {t("View Services", "ดู Services")}
            </Link>
          </div>

          <div className="flex flex-row md:flex-col gap-5 md:items-end">
            <div className="text-right">
              <span className="font-display text-[44px] leading-none text-foreground">14+</span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground block">Clients</span>
            </div>
            <div className="text-right">
              <span className="font-display text-[44px] leading-none text-foreground">3.2×</span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground block">Avg Engagement</span>
            </div>
            <div className="text-right">
              <span className="font-display text-[44px] leading-none text-foreground">25%</span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground block">Revenue Uplift</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-accent-gradient overflow-hidden py-3"
      >
        <div className="animate-marquee whitespace-nowrap flex gap-0">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/90 mx-0">
              Brand Strategy <span className="opacity-45">✦</span> AI-Augmented Creative <span className="opacity-45">✦</span> Visual Identity <span className="opacity-45">✦</span> Social Media Management <span className="opacity-45">✦</span> SEO & Performance <span className="opacity-45">✦</span> Content Production <span className="opacity-45">✦</span> LINE & Email Marketing <span className="opacity-45">✦</span> Bangkok · Southeast Asia <span className="opacity-45">✦</span>&nbsp;
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
