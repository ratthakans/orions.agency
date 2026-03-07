import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { lang, t } = useLanguage();

  const steps = [
    { num: "01", title: { en: "Discovery", th: "ค้นพบ" }, desc: { en: "Deep brand interviews, competitor mapping, and audience analysis — AI-synthesized in days, not weeks.", th: "การสัมภาษณ์แบรนด์เชิงลึก การทำแผนที่คู่แข่ง และการวิเคราะห์ผู้ชม สังเคราะห์ด้วย AI ในไม่กี่วัน" }, badge: { en: "Strategy", th: "กลยุทธ์" } },
    { num: "02", title: { en: "Strategy", th: "กลยุทธ์" }, desc: { en: "Humans set the direction. AI accelerates production. Every concept passes a craft review before you see it.", th: "มนุษย์กำหนดทิศทาง AI เร่งการผลิต ทุก concept ผ่านการตรวจสอบก่อนที่คุณจะเห็น" }, badge: { en: "Creative", th: "สร้างสรรค์" } },
    { num: "03", title: { en: "Creation", th: "สร้างสรรค์" }, desc: { en: "Design, copy, and assets built in parallel — not sequentially. AI compresses timelines without compressing quality.", th: "Design, copy และ assets สร้างพร้อมกัน AI บีบอัดระยะเวลาโดยไม่บีบอัดคุณภาพ" }, badge: { en: "Build", th: "สร้าง" } },
    { num: "04", title: { en: "Launch & Scale", th: "เปิดตัวและขยาย" }, desc: { en: "We don't hand over files. We hand over a living brand system — with the documentation and support to grow it.", th: "เราไม่ส่งแค่ไฟล์ เราส่งระบบแบรนด์ที่มีชีวิต พร้อมเอกสารและการสนับสนุนเพื่อการเติบโต" }, badge: { en: "Growth", th: "เติบโต" } },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
              {t("How We Work", "กระบวนการทำงาน")}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-12">
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>A framework<br />that <span className="text-accent-gradient">compounds.</span></>, <>กรอบการทำงาน<br />ที่<span className="text-accent-gradient">สะสมผลลัพธ์</span></>)}
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
              {t(
                "Every engagement follows the same four stages. Where we differ is the depth at each step — and how much faster AI lets us move through them.",
                "ทุกการทำงานตามสี่ขั้นตอนเดียวกัน สิ่งที่เราแตกต่างคือความลึกในแต่ละขั้นตอน และความเร็วที่ AI ช่วยให้เราผ่านขั้นตอนเหล่านั้นได้"
              )}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-divider">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="p-10 md:p-9 border-r border-b border-divider last:border-r-0 relative group hover:bg-secondary transition-colors duration-300">
                <span className="font-display text-[88px] text-stroke-dim leading-none block mb-5">{step.num}</span>
                <h3 className="font-body text-[15px] font-medium text-foreground mb-2.5">{step.title[lang]}</h3>
                <p className="font-body text-[12.5px] leading-[1.72] text-muted-foreground">{step.desc[lang]}</p>
                <span className="absolute top-5 right-5 font-mono text-[8px] tracking-[0.18em] uppercase px-2.5 py-1 bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                  {step.badge[lang]}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
