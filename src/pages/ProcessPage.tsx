import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  { num: "01", title: "Discover", desc: { en: "Understand the brand, the audience, and the problem. Deep research and interviews before any creative work begins.", th: "เข้าใจแบรนด์ กลุ่มเป้าหมาย และปัญหา วิจัยเชิงลึกและสัมภาษณ์ก่อนเริ่มงานสร้างสรรค์" }, outputs: { en: "Brand audit, audience research, competitor analysis, opportunity brief", th: "Brand audit, วิจัย audience, วิเคราะห์คู่แข่ง, opportunity brief" } },
  { num: "02", title: "Define", desc: { en: "Build the narrative and strategic direction. Define who the brand is and how it should communicate.", th: "สร้าง narrative และทิศทางเชิงกลยุทธ์ กำหนดว่าแบรนด์คือใครและควรสื่อสารอย่างไร" }, outputs: { en: "Brand narrative, creative brief, messaging architecture, strategic direction", th: "Brand narrative, creative brief, messaging architecture, ทิศทางเชิงกลยุทธ์" } },
  { num: "03", title: "Create", desc: { en: "Develop concepts, scripts, visual directions — exploring multiple territories before committing.", th: "พัฒนา concept, script, visual direction — สำรวจหลาย territory ก่อนตัดสินใจ" }, outputs: { en: "Campaign concepts, scripts, storyboards, mood boards, visual direction", th: "Campaign concept, script, storyboard, mood board, visual direction" } },
  { num: "04", title: "Produce", desc: { en: "Execute with cinematic quality. Every frame and every word considered.", th: "ผลิตด้วยคุณภาพระดับภาพยนตร์ ทุกเฟรมและทุกคำถูกพิจารณา" }, outputs: { en: "Film production, photography, post-production, final deliverables", th: "การผลิตภาพยนตร์, ถ่ายภาพ, post-production, deliverables" } },
  { num: "05", title: "Launch", desc: { en: "Help you launch, distribute, and scale the work. Ensuring it reaches the right people.", th: "ช่วยคุณ launch, distribute และ scale ผลงาน ให้ถึงมือคนที่ใช่" }, outputs: { en: "Launch strategy, distribution plan, performance tracking, optimization", th: "Launch strategy, แผน distribution, performance tracking, optimization" } },
];

const ProcessPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Process — ØRIONS Creative Agency</title>
        <meta name="description" content="Five steps: Discover, Define, Create, Produce, Launch." />
        <link rel="canonical" href="https://orions.agency/process" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={20} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">Process</p>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-3xl">
                {t(<>Five steps to<br /><span className="text-accent-gradient">clarity.</span></>, <>ห้าขั้นตอนสู่<br /><span className="text-accent-gradient">ความชัดเจน</span></>)}
              </h1>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-lg">
                {t("Every project follows the same thoughtful process. No shortcuts, no surprises.", "ทุกโปรเจกต์ผ่านกระบวนการเดียวกัน ไม่มีทางลัด ไม่มีเรื่องเหนือคาด")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-28 md:pb-40">
          <div className="max-w-7xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.05}>
                <div className="border-t border-divider py-20 md:py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 items-start">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-gradient block mb-4">{step.num}</span>
                      <h2 className="font-display text-[clamp(56px,8vw,100px)] leading-[0.85] tracking-[0.02em] text-foreground">{step.title}</h2>
                    </div>
                    <div className="space-y-6 pt-2">
                      <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-xl">{step.desc[lang]}</p>
                      <div>
                        <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">{t("Outputs", "ผลลัพธ์")}</h4>
                        <p className="font-body text-[13px] leading-[1.75] text-foreground/50">{step.outputs[lang]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ProcessPage;
