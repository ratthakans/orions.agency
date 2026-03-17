import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: { en: "We begin every project by understanding the brand, the audience, and the problem. Deep research, brand interviews, and market analysis — before any creative work begins.", th: "เราเริ่มทุกโปรเจกต์ด้วยการเข้าใจแบรนด์ กลุ่มเป้าหมาย และปัญหา การวิจัยเชิงลึก สัมภาษณ์แบรนด์ และวิเคราะห์ตลาด — ก่อนเริ่มงานสร้างสรรค์" },
    outputs: { en: "Brand audit, audience research, competitor analysis, opportunity brief.", th: "Brand audit, วิจัย audience, วิเคราะห์คู่แข่ง, opportunity brief" },
  },
  {
    num: "02",
    title: "Define",
    desc: { en: "We build the narrative and strategic direction. This is where we define who the brand is, what it stands for, and how it should communicate — clearly and confidently.", th: "เราสร้าง narrative และทิศทางเชิงกลยุทธ์ นี่คือจุดที่เรากำหนดว่าแบรนด์คือใคร ยืนหยัดเพื่ออะไร และควรสื่อสารอย่างไร — อย่างชัดเจนและมั่นใจ" },
    outputs: { en: "Brand narrative, creative brief, messaging architecture, strategic direction.", th: "Brand narrative, creative brief, messaging architecture, ทิศทางเชิงกลยุทธ์" },
  },
  {
    num: "03",
    title: "Create",
    desc: { en: "Ideas take shape. We develop concepts, scripts, visual directions, and campaign frameworks — exploring multiple creative territories before committing to one.", th: "ไอเดียเริ่มเป็นรูปร่าง เราพัฒนา concept, script, visual direction และ campaign framework — สำรวจหลาย creative territory ก่อนตัดสินใจ" },
    outputs: { en: "Campaign concepts, scripts, storyboards, mood boards, visual direction.", th: "Campaign concept, script, storyboard, mood board, visual direction" },
  },
  {
    num: "04",
    title: "Produce",
    desc: { en: "Execution with cinematic quality. Whether it's a brand film, documentary, or content series — we produce with the precision and craft that makes work unforgettable.", th: "ผลิตด้วยคุณภาพระดับภาพยนตร์ ไม่ว่าจะเป็น brand film, documentary หรือ content series — เราผลิตด้วยความแม่นยำและฝีมือที่ทำให้งานลืมไม่ลง" },
    outputs: { en: "Film production, photography, post-production, final deliverables.", th: "การผลิตภาพยนตร์, ถ่ายภาพ, post-production, deliverables สุดท้าย" },
  },
  {
    num: "05",
    title: "Launch",
    desc: { en: "We don't just hand over files. We help you launch, distribute, and scale the work — ensuring it reaches the right people at the right time.", th: "เราไม่ได้แค่ส่งไฟล์ เราช่วยคุณ launch, distribute และ scale ผลงาน — ให้ถึงมือคนที่ใช่ในเวลาที่ใช่" },
    outputs: { en: "Launch strategy, distribution plan, performance tracking, optimization.", th: "Launch strategy, แผนการ distribution, performance tracking, optimization" },
  },
];

const ProcessPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>Process — ØRIONS Creative Agency</title>
        <meta name="description" content="Our five-step process: Discover, Define, Create, Produce, Launch. Clean, visual, and designed for clarity." />
        <link rel="canonical" href="https://orions.agency/process" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={40} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-10">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">Process</span>
              </div>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-4xl">
                {t(<>Five steps<br />to <span className="text-accent-gradient">clarity.</span></>, <>ห้าขั้นตอน<br />สู่<span className="text-accent-gradient">ความชัดเจน</span></>)}
              </h1>
              <p className="font-body text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
                {t(
                  "Every project follows the same thoughtful process — from understanding to execution. No shortcuts, no surprises.",
                  "ทุกโปรเจกต์ผ่านกระบวนการเดียวกัน — ตั้งแต่ความเข้าใจถึงการลงมือทำ ไม่มีทางลัด ไม่มีเรื่องเหนือคาด"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.05}>
                <div className="border-t border-divider py-16 md:py-20 group">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-gradient block mb-3">{step.num}</span>
                      <h2 className="font-display text-[clamp(56px,7vw,96px)] leading-[0.9] tracking-[0.02em] text-foreground">{step.title}</h2>
                    </div>
                    <div className="space-y-6">
                      <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{step.desc[lang]}</p>
                      <div>
                        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-3">{t("Outputs", "ผลลัพธ์")}</h4>
                        <p className="font-body text-[14px] leading-[1.75] text-foreground/70">{step.outputs[lang]}</p>
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
