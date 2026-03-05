import AnimatedSection from "./AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: { en: "Most projects range from 6–12 weeks depending on scope. Brand strategy engagements typically take 4–6 weeks, while full campaign builds run 8–12 weeks. We'll give you a clear timeline during discovery.", th: "โปรเจกต์ส่วนใหญ่ใช้เวลา 6–12 สัปดาห์ขึ้นอยู่กับขอบเขตงาน Brand strategy ใช้เวลา 4–6 สัปดาห์ ส่วนแคมเปญเต็มรูปแบบ 8–12 สัปดาห์ เราจะให้ timeline ที่ชัดเจนในขั้นตอน discovery" },
  },
  {
    q: "What's your pricing model?",
    a: { en: "We work on a project basis with transparent pricing agreed upfront. Typical engagements range from ฿300K–฿2M+ depending on scope. We don't do hourly billing — you pay for outcomes, not time.", th: "เราทำงานแบบโปรเจกต์ด้วยราคาที่โปร่งใสและตกลงกันล่วงหน้า งานโดยทั่วไปอยู่ในช่วง ฿300K–฿2M+ ขึ้นอยู่กับขอบเขต เราไม่คิดรายชั่วโมง — คุณจ่ายเพื่อผลลัพธ์ ไม่ใช่เวลา" },
  },
  {
    q: "Do you work with startups?",
    a: { en: "Yes. We work with both startups and established brands. What matters most is alignment on vision and commitment to building something meaningful. Early-stage brands often benefit most from strategic clarity.", th: "ใช่ เราทำงานกับทั้งสตาร์ทอัพและแบรนด์ที่เติบโตแล้ว สิ่งสำคัญที่สุดคือความสอดคล้องในวิสัยทัศน์และความมุ่งมั่นในการสร้างสิ่งที่มีความหมาย แบรนด์ช่วงเริ่มต้นมักได้ประโยชน์มากที่สุดจากความชัดเจนเชิงกลยุทธ์" },
  },
  {
    q: "What industries do you specialize in?",
    a: { en: "We've delivered results across EV mobility, real estate, healthcare, fintech, hospitality, fashion, F&B, and education. Our process is industry-agnostic — great strategy adapts to any market.", th: "เราสร้างผลลัพธ์ในหลายอุตสาหกรรม ทั้ง EV อสังหาริมทรัพย์ สุขภาพ fintech การบริการ แฟชั่น อาหารและเครื่องดื่ม และการศึกษา กระบวนการของเราไม่ยึดติดอุตสาหกรรม — กลยุทธ์ที่ดีปรับตัวได้กับทุกตลาด" },
  },
  {
    q: "What makes ØRIONS different from other agencies?",
    a: { en: "We don't chase trends or produce template work. Every engagement starts with strategy and meaning — then we build creative systems that compound over time. Our clients see 3.2× average ROI because we focus on long-term brand equity, not short-term noise.", th: "เราไม่ไล่ตามเทรนด์หรือผลิตงานจากเทมเพลต ทุกงานเริ่มต้นด้วยกลยุทธ์และความหมาย — จากนั้นเราสร้างระบบสร้างสรรค์ที่สะสมผลตามเวลา ลูกค้าเห็น ROI เฉลี่ย 3.2× เพราะเราโฟกัสที่ brand equity ระยะยาว ไม่ใช่เสียงรบกวนระยะสั้น" },
  },
  {
    q: "Do you offer ongoing retainers?",
    a: { en: "Yes. After the initial project, many clients transition to a monthly retainer for ongoing content, campaigns, and strategic guidance. This ensures your brand stays consistent and continues to grow.", th: "ใช่ หลังจากโปรเจกต์แรก ลูกค้าหลายรายเปลี่ยนเป็นรีเทนเนอร์รายเดือนสำหรับคอนเทนต์ แคมเปญ และคำแนะนำเชิงกลยุทธ์อย่างต่อเนื่อง เพื่อให้แบรนด์ยังคงสม่ำเสมอและเติบโตต่อไป" },
  },
];

const FAQSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                FAQ
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Common<br />
                <span className="text-accent-gradient">Questions</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                {t("faq.desc")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Accordion type="single" collapsible className="border border-divider divide-y divide-divider">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-0">
                <AccordionTrigger className="px-8 py-6 font-display text-sm md:text-base font-medium text-foreground hover:no-underline hover:bg-secondary transition-colors duration-300 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 font-body text-sm text-muted-foreground leading-relaxed">
                  {faq.a[lang]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
