import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground">
              {t("Why Most Brands Fail", "ทำไมแบรนด์ส่วนใหญ่ถึงล้มเหลว")}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>The world has<br />too much <span className="text-accent-gradient">noise.</span></>, <>โลกนี้มี<br /><span className="text-accent-gradient">noise</span> มากเกินไป</>)}
            </h2>
            <p className="font-body text-[16px] leading-[1.8] text-muted-foreground mt-4">
              {t(
                "Everyone is posting. Everyone is advertising. But most brands say nothing worth remembering. The problem isn't volume — it's meaning.",
                "ทุกคนกำลังโพสต์ ทุกคนกำลังยิงแอด แต่แบรนด์ส่วนใหญ่ไม่ได้พูดอะไรที่คู่ควรแก่การจดจำ ปัญหาไม่ใช่ปริมาณ — แต่คือความหมาย"
              )}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center border-t border-divider pt-16">
            <p className="font-display text-[clamp(26px,3vw,48px)] tracking-[0.02em] text-muted-foreground leading-[1.1]">
              {t(
                <>We reduce noise. We create <span className="text-foreground">communication people remember.</span></>,
                <>เราลด noise เราสร้าง<span className="text-foreground">การสื่อสารที่คนจดจำ</span></>
              )}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;