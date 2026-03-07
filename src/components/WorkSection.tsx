import { useState, useMemo } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import StarField from "./StarField";
import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workLumen from "@/assets/work-lumen.jpg";
import workSera from "@/assets/work-sera.jpg";
import workMuse from "@/assets/work-muse.jpg";
import workOrbit from "@/assets/work-orbit.jpg";
import workField from "@/assets/work-field.jpg";
import workVela from "@/assets/work-vela.jpg";

const works = [
  { title: "Northwind Electric", industry: "EV Mobility", category: "Technology", brief: { en: "Brand repositioning and campaign launch for Southeast Asia's emerging EV market.", th: "Repositioning แบรนด์และ launch แคมเปญสำหรับตลาด EV ใน Southeast Asia" }, scope: ["Brand Strategy", "Campaign Concept", "Brand Film", "Digital Experience", "Social Content Series"], result: { en: "Repositioned Northwind as the leading sustainable EV brand in Southeast Asia with a 40% increase in brand awareness.", th: "Repositioning Northwind เป็น EV brand ชั้นนำด้าน sustainability ใน Southeast Asia — brand awareness เพิ่ม 40%" }, metric: "↑ 40% awareness", image: workNorthwind },
  { title: "Atlas Property Group", industry: "Real Estate", category: "Property", brief: { en: "Narrative website and brand platform for a luxury property developer.", th: "Narrative website และ brand platform สำหรับ luxury property developer" }, scope: ["Brand Direction", "Narrative Website", "UX/UI Direction", "Photography", "Content Strategy"], result: { en: "Delivered a premium digital presence that elevated Atlas's positioning in the luxury property market.", th: "สร้าง premium digital presence ที่ยกระดับ positioning ของ Atlas ในตลาด luxury property" }, metric: "↑ Premium positioning", image: workAtlas },
  { title: "Koha Culture Studio", industry: "Arts & Culture", category: "Culture", brief: { en: "Community storytelling and content system for a contemporary arts organization.", th: "Community storytelling และ content system สำหรับองค์กรศิลปะร่วมสมัย" }, scope: ["Editorial Content", "Social Content Series", "Community Strategy", "Brand Narrative", "Photography"], result: { en: "Built a content ecosystem that grew Koha's community engagement by 3x within six months.", th: "สร้าง content ecosystem ที่ทำให้ community engagement ของ Koha โตขึ้น 3 เท่าใน 6 เดือน" }, metric: "↑ 3× engagement", image: workKoha },
  { title: "Lumen Health", industry: "Healthcare", category: "Technology", brief: { en: "Digital experience and search visibility strategy for a digital health platform.", th: "Digital experience และ search visibility strategy สำหรับ digital health platform" }, scope: ["Digital Experience", "SEO Strategy", "Content Architecture", "Landing Pages", "Performance Analytics"], result: { en: "Increased organic search visibility by 200% and established Lumen as a thought leader in digital health.", th: "Organic search visibility เพิ่ม 200% และสร้าง Lumen ให้เป็น thought leader ด้าน digital health" }, metric: "↑ 200% search visibility", image: workLumen },
  { title: "Sera Hospitality", industry: "Hospitality", category: "Lifestyle", brief: { en: "Brand refresh and digital campaign for a luxury hospitality group.", th: "Brand refresh และ digital campaign สำหรับ luxury hospitality group" }, scope: ["Rebranding", "Campaign Concept", "Photography", "Narrative Website", "Social Content"], result: { en: "Refreshed Sera's brand identity resulting in a cohesive luxury experience across all touchpoints.", th: "Refresh brand identity ของ Sera ให้เป็น luxury experience ที่ cohesive ในทุก touchpoint" }, metric: "↑ Unified experience", image: workSera },
  { title: "Muse Education", industry: "Education", category: "Culture", brief: { en: "Campaign platform and storytelling for a modern education institution.", th: "Campaign platform และ storytelling สำหรับสถาบันการศึกษาสมัยใหม่" }, scope: ["Campaign Strategy", "Brand Film", "Editorial Content", "Digital Platform", "Founder Storytelling"], result: { en: "Created a campaign platform that resonated with modern learners and drove enrollment growth.", th: "สร้าง campaign platform ที่ตรงใจผู้เรียนยุคใหม่และเพิ่มยอดสมัคร" }, metric: "↑ Enrollment growth", image: workMuse },
  { title: "Orbit Fintech", industry: "Financial Technology", category: "Technology", brief: { en: "Authority building and content ecosystem for a fintech startup.", th: "สร้าง authority และ content ecosystem สำหรับ fintech startup" }, scope: ["Content Strategy", "Thought Leadership", "Editorial Series", "Digital Experience", "SEO"], result: { en: "Positioned Orbit as a trusted authority in the fintech space through consistent, high-quality content.", th: "วาง positioning ให้ Orbit เป็น trusted authority ในวงการ fintech ด้วย high-quality content" }, metric: "↑ Thought leadership", image: workOrbit },
  { title: "Field Notes Coffee", industry: "F&B / Lifestyle", category: "Lifestyle", brief: { en: "Editorial storytelling and creative campaigns for an artisan coffee brand.", th: "Editorial storytelling และ creative campaign สำหรับแบรนด์กาแฟ artisan" }, scope: ["Brand Narrative", "Photography", "Campaign Concept", "Social Content Series", "Editorial Content"], result: { en: "Transformed Field Notes from a local roaster into a recognized lifestyle brand across the region.", th: "เปลี่ยน Field Notes จาก local roaster เป็น lifestyle brand ที่ได้รับการยอมรับระดับภูมิภาค" }, metric: "↑ Regional recognition", image: workField },
  { title: "Vela Fashion", industry: "Fashion & E-commerce", category: "Lifestyle", brief: { en: "End-to-end brand identity and e-commerce experience for a contemporary fashion label.", th: "Brand identity และ e-commerce experience แบบ end-to-end สำหรับ fashion label ร่วมสมัย" }, scope: ["Brand Identity", "E-commerce UX", "Photography Direction", "Social Strategy", "Campaign Launch"], result: { en: "Launched Vela's DTC platform achieving 150% of first-quarter sales targets with a cohesive brand experience.", th: "Launch DTC platform ของ Vela ทำยอดขาย 150% ของเป้าหมายไตรมาสแรก" }, metric: "↑ 150% sales target", image: workVela },
];

const categories = ["All", "Technology", "Lifestyle", "Culture", "Property"];

const WorkSection = () => {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const { lang, t } = useLanguage();

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;
    return works.filter((w) => w.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <StarField count={40} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-6">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">
              Portfolio
            </span>
          </div>
          <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-6">
            {t(<>Selected <span className="text-accent-gradient">Work</span></>, <>ผลงาน<span className="text-accent-gradient">คัดสรร</span></>)}
          </h2>
          <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-lg mb-10">
            {t(
              "A selection of projects where we helped brands find clarity and create impact.",
              "ผลงานที่เราช่วยแบรนด์ค้นพบความชัดเจนและสร้าง impact"
            )}
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.05}>
          <div className="flex items-center gap-1 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-mono text-[10px] tracking-[0.14em] uppercase px-5 py-2.5 border transition-all duration-300 rounded-sm ${
                  activeFilter === cat
                    ? "bg-accent-gradient text-white border-transparent"
                    : "border-divider text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* 3×3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {filteredWorks.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.04}>
              <div
                className="bg-background group cursor-pointer relative hover:bg-secondary transition-colors duration-300"
                onClick={() => setSelectedWork(w)}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10" />
                <div className="overflow-hidden">
                  <img src={w.image} alt={w.title} className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-500" loading="lazy" />
                </div>
                <div className="p-5 md:p-6">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-1.5">{w.industry}</span>
                  <h3 className="font-body text-[15px] font-medium text-foreground mb-1">{w.title}</h3>
                  <p className="font-body text-[13px] leading-[1.72] text-muted-foreground line-clamp-2 mb-2">{w.brief[lang]}</p>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-accent-gradient">{w.metric}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-divider p-0 gap-0">
          {selectedWork && (
            <>
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img src={selectedWork.image} alt={selectedWork.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-10">
                <DialogHeader className="mb-0 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">{selectedWork.industry}</span>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-accent-gradient">{selectedWork.metric}</span>
                  </div>
                  <DialogTitle className="font-display text-[40px] tracking-[0.03em] leading-none text-foreground mb-2">
                    {selectedWork.title}
                  </DialogTitle>
                  <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{selectedWork.brief[lang]}</p>
                </DialogHeader>

                <div className="mt-8 space-y-8">
                  {/* Scope of Work */}
                  <div>
                    <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("Scope of Work", "ขอบเขตงาน")}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider border border-divider">
                      {selectedWork.scope.map((s, i) => (
                        <div key={i} className="bg-background p-4 hover:bg-secondary transition-colors duration-300">
                          <span className="font-mono text-[10px] tracking-[0.1em] text-foreground">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="border border-divider bg-card p-6">
                    <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-3">{t("Result", "ผลลัพธ์")}</h4>
                    <p className="font-body text-[14px] leading-[1.75] text-muted-foreground">{selectedWork.result[lang]}</p>
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

export default WorkSection;
