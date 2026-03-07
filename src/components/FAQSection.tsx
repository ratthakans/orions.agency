import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: { en: "How is ØRIONS different from other agencies?", th: "ØRIONS แตกต่างจากเอเจนซี่อื่นอย่างไร?" },
      a: { en: "We use AI across every stage of production — which means faster delivery, more iterations, and lower overhead. But every strategic decision is human-led. You get boutique-agency depth at tech-company speed.", th: "เราใช้ AI ในทุกขั้นตอนของการผลิต ซึ่งหมายถึงการส่งงานที่เร็วขึ้น การปรับแก้มากขึ้น แต่ทุกการตัดสินใจเชิงกลยุทธ์นำโดยมนุษย์" },
    },
    {
      q: { en: "Do you offer monthly retainers?", th: "มีแพ็กเกจรายเดือนไหม?" },
      a: { en: "Yes. Retainer plans start at ฿18,000/month and include social media, content production, SEO, and email/LINE. All plans run on a 3-month minimum with flexible upgrade or pause options.", th: "มีครับ แผน retainer เริ่มที่ ฿18,000/เดือน รวมโซเชียลมีเดีย การผลิตคอนเทนต์ SEO และ email/LINE ทุกแผนมีขั้นต่ำ 3 เดือน" },
    },
    {
      q: { en: "How fast do you deliver?", th: "ส่งงานเร็วแค่ไหน?" },
      a: { en: "Brand identity: 3–4 weeks. Campaign concepts: 1–2 weeks. Monthly content: delivered in the first week of each cycle. Our AI-augmented workflow moves 60% faster than a traditional agency.", th: "Brand identity: 3–4 สัปดาห์ Campaign concept: 1–2 สัปดาห์ คอนเทนต์รายเดือน: ส่งในสัปดาห์แรก workflow ที่ขับเคลื่อนด้วย AI เราเร็วกว่าเอเจนซี่ทั่วไป 60%" },
    },
    {
      q: { en: "Do you work with international brands?", th: "ทำงานกับแบรนด์ต่างประเทศได้ไหม?" },
      a: { en: "Yes — we work with Thai brands, regional companies, and international brands entering Southeast Asia. All deliverables available in Thai and English.", th: "ได้ครับ เราทำงานกับแบรนด์ไทย บริษัทระดับภูมิภาค และแบรนด์ต่างประเทศ deliverable ทั้งหมดมีให้ทั้งภาษาไทยและอังกฤษ" },
    },
    {
      q: { en: "Is the work actually made by humans?", th: "งานทำโดยมนุษย์จริงๆ ไหม?" },
      a: { en: "Every strategy is human-crafted. Every concept is human-approved. AI handles production speed — research synthesis, draft generation, asset variation. But the thinking and creative direction? That's always us.", th: "ทุกกลยุทธ์สร้างโดยมนุษย์ ทุก concept ผ่านการอนุมัติจากมนุษย์ AI จัดการความเร็วในการผลิต แต่การคิดและทิศทางครีเอทีฟ? นั่นคือเราเสมอ" },
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-card border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
              {t("Common Questions", "คำถามที่พบบ่อย")}
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-start">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,4.5vw,68px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>Everything<br />you need<br />to <span className="text-accent-gradient">know.</span></>, <>ทุกอย่างที่คุณ<br />ต้องการ<br /><span className="text-accent-gradient">รู้</span></>)}
            </h2>
          </AnimatedSection>

          <div className="border-t border-divider">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-divider">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-body text-[14.5px] text-foreground pr-6">{faq.q[lang]}</span>
                  <div className={`w-[26px] h-[26px] border border-divider flex items-center justify-center shrink-0 text-accent-violet transition-all duration-300 ${openIndex === i ? "bg-accent-gradient text-white rotate-45 border-transparent" : ""}`}>
                    +
                  </div>
                </button>
                {openIndex === i && (
                  <div className="pb-5 font-body text-[13.5px] leading-[1.82] text-muted-foreground max-w-[600px]">
                    {faq.a[lang]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
