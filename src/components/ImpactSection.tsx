import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const ImpactSection = () => {
  const { lang, t } = useLanguage();

  const metrics = [
    { stat: "2.8×", desc: { en: "Digital Conversion", th: "การแปลงลูกค้าออนไลน์" }, sub: { en: "Landing pages and digital assets built to convert, not just impress.", th: "หน้า landing และ digital assets ที่สร้างมาเพื่อแปลง ไม่ใช่แค่สร้างความประทับใจ" } },
    { stat: "94%", desc: { en: "Team Alignment", th: "ความสอดคล้องของทีม" }, sub: { en: "Brand guidelines so clear that every vendor speaks the same language.", th: "Brand guidelines ที่ชัดเจนมากจนทุกเวนเดอร์พูดภาษาเดียวกัน" } },
    { stat: "25%", desc: { en: "Revenue Contribution", th: "ส่วนแบ่งรายได้" }, sub: { en: "Marketing initiatives with a direct, traceable line to revenue growth.", th: "กิจกรรมการตลาดที่มีเส้นตรงที่ติดตามได้ถึงการเติบโตของรายได้" } },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-12">
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>Every service<br />moves a <span className="text-accent-gradient">metric.</span></>, <>ทุกบริการ<br /><span className="text-accent-gradient">ขับเคลื่อนตัวเลข</span></>)}
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
              {t(
                "We don't sell creative work. We sell outcomes. Every brief we take has a number attached to it — and we don't stop until we hit it.",
                "เราไม่ขายงานครีเอทีฟ เราขายผลลัพธ์ ทุก brief ที่เรารับมีตัวเลขผูกติดอยู่ด้วย"
              )}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.stat} delay={i * 0.1}>
              <div className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors duration-300">
                <span className="font-display text-[52px] leading-none text-foreground block mb-1.5">{m.stat}</span>
                <h3 className="font-body text-[14px] font-medium text-foreground mb-2">{m.desc[lang]}</h3>
                <p className="font-body text-[12.5px] leading-[1.65] text-muted-foreground">{m.sub[lang]}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
