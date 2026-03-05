import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    quote: { en: "ØRIONS didn't just redesign our brand — they redefined how we think about communication. The clarity they brought changed everything.", th: "ØRIONS ไม่ได้แค่ออกแบบแบรนด์ใหม่ — พวกเขาเปลี่ยนวิธีคิดเรื่องการสื่อสารของเรา ความชัดเจนที่พวกเขานำมาเปลี่ยนทุกอย่าง" },
    name: "Natcha Wongprasert",
    title: "CEO",
    company: "Northwind Electric",
  },
  {
    quote: { en: "Working with ØRIONS felt like unlocking a part of our brand we always knew existed but could never articulate. Our engagement tripled.", th: "การทำงานกับ ØRIONS เหมือนปลดล็อกส่วนหนึ่งของแบรนด์ที่เรารู้ว่ามีอยู่แต่ไม่เคยสื่อสารออกมาได้ engagement ของเราเพิ่มขึ้น 3 เท่า" },
    name: "Prem Srisawat",
    title: "Head of Marketing",
    company: "Atlas Property Group",
  },
  {
    quote: { en: "They don't follow trends — they build systems. Six months later, our content still performs because it's built on real strategy.", th: "พวกเขาไม่ตามเทรนด์ — พวกเขาสร้างระบบ หกเดือนผ่านไป คอนเทนต์ของเรายังคงทำผลงานได้ดีเพราะสร้างบนกลยุทธ์ที่แท้จริง" },
    name: "Siriporn Klaewkla",
    title: "Founder",
    company: "Field Notes Coffee",
  },
  {
    quote: { en: "The ROI speaks for itself. But beyond numbers, ØRIONS gave our team a shared language that aligned everyone overnight.", th: "ROI พูดแทนตัวเอง แต่นอกเหนือจากตัวเลข ØRIONS ให้ภาษาร่วมแก่ทีมของเราที่ทำให้ทุกคนเข้าใจตรงกันทันที" },
    name: "Arisa Tanaka",
    title: "CMO",
    company: "Orbit Fintech",
  },
];

const TestimonialsSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                Testimonials
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                What Clients<br />
                <span className="text-accent-gradient">Say</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                {t("testimonials.desc")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider">
          {testimonials.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08}>
              <div className="bg-background p-8 md:p-12 flex flex-col justify-between h-full">
                <blockquote className="font-body text-base md:text-lg text-foreground leading-relaxed mb-8">
                  "{item.quote[lang]}"
                </blockquote>
                <div className="border-t border-divider pt-6">
                  <p className="font-display text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {item.title}, {item.company}
                  </p>
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
