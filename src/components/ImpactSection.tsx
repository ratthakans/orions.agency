import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const impacts = [
  {
    stat: "89%",
    title: "Brand Recall Increase",
    desc: { en: "Messaging becomes focused and consistent.", th: "ข้อความมีความชัดเจนและสอดคล้องกัน" },
    detail: { en: "Our brand positioning framework helps clients achieve an average 89% increase in unaided brand recall within the first 6 months. We use structured messaging audits, competitive gap analysis, and narrative alignment workshops to ensure every touchpoint reinforces a single, clear brand story.", th: "กรอบการวาง positioning แบรนด์ของเราช่วยให้ลูกค้าบรรลุการเพิ่มขึ้นเฉลี่ย 89% ในการจดจำแบรนด์โดยไม่ต้องมีตัวช่วยภายใน 6 เดือนแรก" },
    methodology: "Brand Audit → Positioning Workshop → Message Architecture → Consistency Scorecard",
  },
  {
    stat: "3.2×",
    title: "Campaign Engagement",
    desc: { en: "Creative work that stands out and converts.", th: "งานสร้างสรรค์ที่โดดเด่นและแปลงผล" },
    detail: { en: "Campaigns we produce generate 3.2× higher engagement rates compared to industry benchmarks. Our approach combines data-driven creative with culturally relevant storytelling.", th: "แคมเปญที่เราผลิตสร้างอัตราการมีส่วนร่วมสูงกว่า 3.2× เมื่อเทียบกับเกณฑ์มาตรฐานอุตสาหกรรม" },
    methodology: "Audience Research → Creative Strategy → A/B Testing → Performance Optimization",
  },
  {
    stat: "47%",
    title: "Content Efficiency",
    desc: { en: "Content that builds brand authority faster.", th: "คอนเทนต์ที่สร้างความน่าเชื่อถือของแบรนด์เร็วขึ้น" },
    detail: { en: "Our content systems reduce production time by 47% while maintaining premium quality. Through templatized workflows, editorial calendars, and modular content architectures, brands produce more with less.", th: "ระบบคอนเทนต์ของเราลดเวลาการผลิต 47% โดยยังคงคุณภาพระดับพรีเมียม ผ่านระบบเวิร์กโฟลว์และสถาปัตยกรรมคอนเทนต์แบบโมดูลาร์" },
    methodology: "Content Audit → System Design → Template Creation → Team Training",
  },
  {
    stat: "2.8×",
    title: "Digital Conversion",
    desc: { en: "Digital platforms that perform and represent.", th: "แพลตฟอร์มดิจิทัลที่ทั้งทำผลงานและเป็นตัวแทนแบรนด์" },
    detail: { en: "Digital experiences we design convert at 2.8× the rate of standard templates. We combine UX research, conversion-centered design, and performance optimization.", th: "ประสบการณ์ดิจิทัลที่เราออกแบบแปลงผลได้ 2.8× เมื่อเทียบกับเทมเพลตมาตรฐาน" },
    methodology: "UX Research → Wireframing → Visual Design → Performance Testing",
  },
  {
    stat: "156%",
    title: "Search Visibility",
    desc: { en: "Better reach through search and digital channels.", th: "เข้าถึงได้ดีขึ้นผ่านการค้นหาและช่องทางดิจิทัล" },
    detail: { en: "Clients see an average 156% increase in organic search visibility within 12 months. Our SEO strategy integrates technical optimization, content architecture, and authority building.", th: "ลูกค้าเห็นการเพิ่มขึ้นเฉลี่ย 156% ในการมองเห็นจากการค้นหาภายใน 12 เดือน" },
    methodology: "Technical Audit → Keyword Strategy → Content Architecture → Link Building",
  },
  {
    stat: "94%",
    title: "Team Alignment Score",
    desc: { en: "Teams communicate under one clear direction.", th: "ทีมสื่อสารภายใต้ทิศทางเดียวที่ชัดเจน" },
    detail: { en: "Post-engagement surveys show 94% of client teams report stronger internal alignment on brand and marketing direction.", th: "แบบสำรวจหลังการทำงานร่วมกันแสดงว่า 94% ของทีมลูกค้ารายงานว่ามีการจัดแนวภายในที่แข็งแกร่งขึ้น" },
    methodology: "Stakeholder Interviews → Brand Guidelines → Training Sessions → Alignment Review",
  },
];

const ImpactSection = () => {
  const [selectedImpact, setSelectedImpact] = useState<typeof impacts[0] | null>(null);
  const { lang, t } = useLanguage();

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 bg-elevated">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                Why It Matters
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Measurable<br />
                <span className="text-accent-gradient">Impact</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                {t("impact.desc")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider">
          {impacts.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div
                className="bg-elevated p-8 md:p-10 h-full group hover:bg-secondary transition-colors duration-500 cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedImpact(item)}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-accent-warm scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="font-display text-xs text-accent-warm mb-6 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground block mb-3">
                  {item.stat}
                </span>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                  {item.desc[lang]}
                </p>
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body group-hover:text-foreground transition-colors duration-300">
                  Learn more →
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImpact} onOpenChange={(open) => !open && setSelectedImpact(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-divider">
          {selectedImpact && (
            <>
              <DialogHeader>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {selectedImpact.stat}
                  </span>
                </div>
                <DialogTitle className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {selectedImpact.title}
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground text-sm mt-1">
                  {selectedImpact.desc[lang]}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                <div>
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    How we achieve this
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedImpact.detail[lang]}
                  </p>
                </div>

                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Methodology
                  </h4>
                  <div className="space-y-3">
                    {selectedImpact.methodology.split(" → ").map((step, i) => (
                      <div key={step} className="flex items-center gap-4">
                        <span className="font-display text-xs text-accent-warm w-6 text-right shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-divider" />
                        <span className="font-body text-sm text-foreground">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImpactSection;
