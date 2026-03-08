import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItem {
  q: { en: string; th: string };
  a: { en: string; th: string };
}

interface FAQSectionProps {
  customFaqs?: FAQItem[];
  title?: { en: React.ReactNode; th: React.ReactNode };
}

const defaultFaqs: FAQItem[] = [
  {
    q: { en: "How is ØRIONS different from other agencies?", th: "ØRIONS ต่างจากเอเจนซี่อื่นยังไง?" },
    a: { en: "We use AI across every stage of production — which means faster delivery, more iterations, and lower overhead. But every strategic decision is human-led. You get boutique-agency depth at tech-company speed.", th: "เราใช้ AI ในทุกขั้นตอนของการผลิต — ส่งงานเร็วขึ้น ทำ iteration ได้มากขึ้น overhead ต่ำลง แต่ทุกการตัดสินใจเชิงกลยุทธ์นำโดยมนุษย์ คุณจะได้ความลึกแบบ boutique agency ในความเร็วแบบ tech company" },
  },
  {
    q: { en: "Do you offer monthly retainers?", th: "มี monthly retainer ไหม?" },
    a: { en: "Yes. Retainer plans start at ฿18,000/month and include social media, content production, SEO, and email/LINE. All plans run on a 3-month minimum with flexible upgrade or pause options.", th: "มีครับ Retainer plan เริ่มที่ ฿18,000/เดือน รวม social media, content production, SEO และ email/LINE ทุกแผนขั้นต่ำ 3 เดือน ปรับหรือ pause ได้" },
  },
  {
    q: { en: "How fast do you deliver?", th: "ส่งงานเร็วแค่ไหน?" },
    a: { en: "Brand identity: 3–4 weeks. Campaign concepts: 1–2 weeks. Monthly content: delivered in the first week of each cycle. Our AI-augmented workflow moves 60% faster than a traditional agency.", th: "Brand identity: 3–4 สัปดาห์ Campaign concepts: 1–2 สัปดาห์ Monthly content: ส่งภายในสัปดาห์แรกของแต่ละรอบ AI workflow ของเราเร็วกว่าเอเจนซี่ทั่วไป 60%" },
  },
  {
    q: { en: "Do you work with international brands?", th: "ทำงานกับแบรนด์ต่างประเทศได้ไหม?" },
    a: { en: "Yes — we work with Thai brands, regional companies, and international brands entering Southeast Asia. All deliverables available in Thai and English.", th: "ได้ครับ เราทำงานกับแบรนด์ไทย บริษัทระดับภูมิภาค และแบรนด์ต่างประเทศที่เข้า Southeast Asia — deliverable ทั้งหมดมีทั้งไทยและอังกฤษ" },
  },
  {
    q: { en: "Is the work actually made by humans?", th: "งานทำโดยคนจริงๆ ไหม?" },
    a: { en: "Every strategy is human-crafted. Every concept is human-approved. AI handles production speed — research synthesis, draft generation, asset variation. But the thinking and creative direction? That's always us.", th: "ทุก strategy คนคิด ทุก concept คนอนุมัติ AI ช่วยเรื่องความเร็วในการผลิต — สังเคราะห์ research, สร้าง draft, ทำ asset variation แต่การคิดและ creative direction? นั่นคือเราเสมอ" },
  },
];

const FAQSection = ({ customFaqs, title }: FAQSectionProps) => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = customFaqs || defaultFaqs;

  const defaultTitle = {
    en: <>Everything<br />you need<br />to <span className="text-accent-gradient">know.</span></>,
    th: <>ทุกอย่าง<br />ที่คุณอยาก<br /><span className="text-accent-gradient">รู้</span></>,
  };
  const displayTitle = title || defaultTitle;

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-8 md:mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-foreground">
              FAQ
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-start">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(32px,4.5vw,68px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {lang === "en" ? displayTitle.en : displayTitle.th}
            </h2>
          </AnimatedSection>

          <div className="border-t border-divider">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-divider">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
                >
                  <span className="font-body text-[13.5px] sm:text-[14.5px] text-foreground pr-4 sm:pr-6">{faq.q[lang]}</span>
                  <div className={`w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] border border-divider flex items-center justify-center shrink-0 text-muted-foreground transition-all duration-300 text-[14px] ${openIndex === i ? "bg-accent-gradient text-white rotate-45 border-transparent" : ""}`}>
                    +
                  </div>
                </button>
                {openIndex === i && (
                  <div className="pb-4 sm:pb-5 font-body text-[13px] sm:text-[13.5px] leading-[1.82] text-muted-foreground max-w-[600px]">
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