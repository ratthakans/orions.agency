import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { lang, t } = useLanguage();

  const problems = [
    { num: "01", title: { en: "Overcrowded Feeds", th: "ฟีดที่แออัด" }, desc: { en: "Attention is now the scarcest resource. Brands without a clear point of view disappear.", th: "ความสนใจคือทรัพยากรที่หายากที่สุด แบรนด์ที่ไม่มีจุดยืนที่ชัดเจนจะหายไป" } },
    { num: "02", title: { en: "Lost Meaning", th: "ความหมายที่สูญหาย" }, desc: { en: "Brands say too much and communicate nothing. Clarity is the new competitive advantage.", th: "แบรนด์พูดมากเกินไปแต่ไม่สื่ออะไรเลย ความชัดเจนคือข้อได้เปรียบใหม่" } },
    { num: "03", title: { en: "Template Culture", th: "วัฒนธรรมเทมเพลต" }, desc: { en: "AI-generated filler floods every platform. Real strategy is the only thing that differentiates.", th: "คอนเทนต์ที่สร้างโดย AI ท่วมทุกแพลตฟอร์ม กลยุทธ์จริงเท่านั้นที่สร้างความแตกต่าง" } },
    { num: "04", title: { en: "Short-term Thinking", th: "การคิดระยะสั้น" }, desc: { en: "Chasing virality erodes brand equity. Growth that lasts is built, not hacked.", th: "การไล่ตามความไวรัลทำลายมูลค่าแบรนด์ การเติบโตที่ยั่งยืนต้องสร้าง ไม่ใช่ hack" } },
    { num: "05", title: { en: "Fragmented Vendors", th: "ผู้ให้บริการที่กระจัดกระจาย" }, desc: { en: "Three agencies, five tools, zero consistency. Your brand voice fractures with every handoff.", th: "สามเอเจนซี่ ห้าเครื่องมือ ไม่มีความสอดคล้อง เสียงแบรนด์ของคุณแตกสลาย" } },
    { num: "06", title: { en: "Speed vs Quality", th: "ความเร็ว vs คุณภาพ" }, desc: { en: "Traditional agencies are slow. Pure AI is shallow. You deserve both — and that's what we built.", th: "เอเจนซี่ทั่วไปช้า AI ล้วนๆ ตื้น คุณสมควรได้ทั้งคู่ นั่นคือสิ่งที่เราสร้างขึ้น" } },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-card border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
              {t("Why Most Brands Fail", "ทำไมแบรนด์ส่วนใหญ่ถึงล้มเหลว")}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>The world has<br />too much <span className="text-accent-gradient">noise.</span></>, <>โลกนี้มี<br />เสียงรบกวน<span className="text-accent-gradient">มากเกินไป</span></>)}
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mt-4">
              {t(
                "Everyone is posting. Everyone is advertising. But most brands say nothing worth remembering. The problem isn't volume — it's meaning.",
                "ทุกคนกำลังโพสต์ ทุกคนกำลังโฆษณา แต่แบรนด์ส่วนใหญ่ไม่ได้พูดอะไรที่คู่ควรแก่การจดจำ ปัญหาไม่ใช่ปริมาณ แต่คือความหมาย"
              )}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider mb-16">
          {problems.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.05}>
              <div className="bg-card p-8 md:p-9 group hover:bg-secondary transition-colors duration-300">
                <span className="font-mono text-[9px] tracking-[0.2em] text-accent-violet mb-3.5 block">{p.num}</span>
                <h4 className="font-body text-[14px] font-medium text-foreground mb-2 leading-[1.35]">{p.title[lang]}</h4>
                <p className="font-body text-[12.5px] leading-[1.68] text-muted-foreground">{p.desc[lang]}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="text-center border-t border-divider pt-16">
            <p className="font-display text-[clamp(26px,3vw,48px)] tracking-[0.02em] text-muted-foreground leading-[1.1]">
              {t(
                <>We reduce noise. We create <span className="text-foreground">communication people remember.</span></>,
                <>เราลดเสียงรบกวน เราสร้าง<span className="text-foreground">การสื่อสารที่ผู้คนจดจำ</span></>
              )}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;
