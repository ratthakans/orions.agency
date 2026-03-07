import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    quote: {
      en: "ØRIONS didn't just rebrand us — they gave us a strategy that changed how we think about our market position. The speed was unreal.",
      th: "ØRIONS ไม่ได้แค่ rebrand ให้เรา — พวกเขาให้ strategy ที่เปลี่ยนวิธีคิดเรื่อง market position ความเร็วเหลือเชื่อ",
    },
    name: "Saranya K.",
    title: { en: "CEO, Northwind Electric", th: "CEO, Northwind Electric" },
    metric: "↑ 40% awareness",
  },
  {
    quote: {
      en: "They produced 3 months of content in 3 weeks. Every piece felt intentional, not mass-produced. That's the difference.",
      th: "พวกเขาผลิต content 3 เดือนใน 3 สัปดาห์ ทุกชิ้นรู้สึกตั้งใจ ไม่ใช่ผลิตแบบ mass — นั่นคือความแตกต่าง",
    },
    name: "Prem T.",
    title: { en: "Founder, Field Notes Coffee", th: "Founder, Field Notes Coffee" },
    metric: "3× content volume",
  },
  {
    quote: {
      en: "Our search visibility went from invisible to page one in 4 months. The AI-powered approach found opportunities we'd been missing for years.",
      th: "Search visibility ของเราจากมองไม่เห็นขึ้นหน้าแรกใน 4 เดือน แนวทาง AI-powered หาโอกาสที่เราพลาดมาหลายปี",
    },
    name: "Dr. Arisa M.",
    title: { en: "Co-founder, Lumen Health", th: "Co-founder, Lumen Health" },
    metric: "↑ 200% search",
  },
  {
    quote: {
      en: "Working with ØRIONS feels like having a full creative department — strategist, designer, copywriter — but faster and more aligned than any team I've managed.",
      th: "ทำงานกับ ØRIONS เหมือนมี creative department ครบ — strategist, designer, copywriter — แต่เร็วกว่าและ aligned มากกว่าทีมไหนที่เคยดูแล",
    },
    name: "Natthapong W.",
    title: { en: "Marketing Director, Atlas Property", th: "Marketing Director, Atlas Property" },
    metric: "Premium positioning",
  },
];

const TestimonialsSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">
              {t("Client Voices", "เสียงจากลูกค้า")}
            </span>
          </div>
          <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-16">
            {t(<>What they <span className="text-accent-gradient">say.</span></>, <>สิ่งที่พวกเขา<span className="text-accent-gradient">พูด</span></>)}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider">
          {testimonials.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-background p-8 md:p-10 relative group hover:bg-secondary transition-colors duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <span className="font-display text-[48px] leading-none text-accent-gradient opacity-30 block mb-4">"</span>
                <p className="font-body text-[15px] leading-[1.8] text-foreground/80 mb-8">
                  {item.quote[lang]}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-[14px] font-medium text-foreground">{item.name}</p>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">{item.title[lang]}</p>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-accent-gradient">{item.metric}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
