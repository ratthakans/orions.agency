import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
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
  { title: "Northwind Electric", service: "Film & Production", type: "Campaign Film", brief: { en: "A cinematic campaign film launching Northwind's entry into the Southeast Asian EV market.", th: "Campaign film ระดับภาพยนตร์สำหรับการเปิดตัว Northwind ในตลาด EV" }, deliverables: ["Campaign Film", "Director's Cut", "Social Cutdowns", "Behind the Scenes"], image: workNorthwind },
  { title: "Atlas Property Group", service: "Film & Production", type: "Documentary", brief: { en: "A brand documentary capturing the vision behind Atlas's luxury developments.", th: "Brand documentary ถ่ายทอดวิสัยทัศน์เบื้องหลังโครงการ luxury ของ Atlas" }, deliverables: ["Documentary Film", "Interview Series", "Sizzle Reel", "Photography"], image: workAtlas },
  { title: "Koha Culture Studio", service: "Creative Communication", type: "Brand Story", brief: { en: "A brand story video series exploring contemporary art and community.", th: "ซีรีส์วิดีโอเรื่องราวแบรนด์สำรวจศิลปะร่วมสมัยและชุมชน" }, deliverables: ["Brand Video", "Artist Profiles", "Event Documentation", "Social Content"], image: workKoha },
  { title: "Lumen Health", service: "Creative Partner", type: "Content System", brief: { en: "A comprehensive content system for a digital health platform.", th: "ระบบ content ครบวงจรสำหรับแพลตฟอร์มสุขภาพดิจิทัล" }, deliverables: ["Content Strategy", "Editorial Calendar", "Video Series", "Blog System"], image: workLumen },
  { title: "Sera Hospitality", service: "Film & Production", type: "Campaign Film", brief: { en: "A campaign film capturing the essence of Sera's luxury hospitality.", th: "Campaign film ถ่ายทอดแก่นแท้ของ luxury hospitality ของ Sera" }, deliverables: ["Hero Film", "Property Films", "Social Series", "Print Campaign"], image: workSera },
  { title: "Muse Education", service: "Creative Communication", type: "Brand Story", brief: { en: "A brand story film positioning Muse as the future of creative education.", th: "Brand story film วาง positioning ให้ Muse เป็นอนาคตของ creative education" }, deliverables: ["Brand Film", "Student Stories", "Campus Tour", "Recruitment Video"], image: workMuse },
  { title: "Orbit Fintech", service: "Creative Transformation", type: "Brand Transformation", brief: { en: "Complete creative transformation for a fintech startup — from positioning to campaign.", th: "Creative transformation ครบวงจรสำหรับ fintech startup — จาก positioning สู่ campaign" }, deliverables: ["Positioning", "Narrative", "Campaign Concept", "Content Direction"], image: workOrbit },
  { title: "Field Notes Coffee", service: "Film & Production", type: "Documentary", brief: { en: "A documentary following the journey from farm to cup.", th: "สารคดีตามเส้นทางจากไร่ถึงแก้ว" }, deliverables: ["Documentary", "Origin Series", "Barista Profiles", "Social Content"], image: workField },
  { title: "Vela Fashion", service: "Creative Transformation", type: "Brand Transformation", brief: { en: "A complete brand transformation for Vela's debut collection launch.", th: "Brand transformation ครบวงจรสำหรับการเปิดตัวคอลเลกชันแรกของ Vela" }, deliverables: ["Positioning", "Campaign Film", "Lookbook", "Launch Strategy"], image: workVela },
];

const serviceFilters = ["All", "Creative Transformation", "Creative Communication", "Film & Production", "Creative Partner"];

const workSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
        { "@type": "ListItem", position: 2, name: "Work", item: "https://orions.agency/work" },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "ØRIONS Work",
      url: "https://orions.agency/work",
      description: "Selected case studies and portfolio work by ØRIONS.",
    },
  ],
};

const WorkPage = () => {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && serviceFilters.includes(serviceParam)) {
      setActiveFilter(serviceParam);
    }
  }, [searchParams]);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;
    return works.filter((w) => w.service === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Portfolio & Case Studies | ØRIONS Bangkok"
        description="Browse selected ØRIONS work across creative transformation, communication, film production, and retainer projects."
        path="/work"
        keywords="creative agency portfolio Bangkok, campaign film portfolio, creative transformation"
        schema={workSchema}
      />
      <Navbar />
      <div className="pt-20">
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">◎</span> Portfolio
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
                CREATIVE WORK
                <br />THAT <span className="text-accent-gradient">PERFORMS.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t("Quality over quantity. Every project here represents a brand we helped think, shape, and produce.", "คุณภาพเหนือปริมาณ ทุกโปรเจกต์ที่นี่คือแบรนด์ที่เราช่วยคิด สร้าง และผลิต")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-8 md:py-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.04}>
              <div className="flex items-center gap-4 md:gap-6 mb-16 flex-wrap">
                {serviceFilters.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-300 pb-0.5 ${
                      activeFilter === cat ? "text-accent-warm border-b border-accent-warm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((w, i) => (
                <AnimatedSection key={w.title} delay={i * 0.03}>
                  <div className="group cursor-pointer" onClick={() => setSelectedWork(w)}>
                    <div className="overflow-hidden mb-5 relative">
                      <img src={w.image} alt={w.title} className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm/60">{w.service}</span>
                      <span className="text-muted-foreground/30 text-[8px]">●</span>
                      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{w.type}</span>
                    </div>
                    <h2 className="font-body text-[16px] text-foreground/80 group-hover:text-accent-warm transition-colors duration-300 mb-1">{w.title}</h2>
                    <p className="font-body text-[14px] leading-[1.6] text-muted-foreground line-clamp-2">{w.brief[lang]}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {filteredWorks.length === 0 && (
              <div className="text-center py-20">
                <p className="font-mono text-[12px] tracking-[0.1em] uppercase text-muted-foreground/50">
                  {t("No projects in this category yet.", "ยังไม่มีผลงานในหมวดนี้")}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                WANT WORK LIKE THIS
                <br />FOR YOUR BRAND?
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
                {t("Tell us what you're launching, changing, or trying to grow.", "บอกเราว่าคุณกำลังเปิดตัว เปลี่ยนแปลง หรืออยากขยายอะไร")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Link to="/services" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                  Explore Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link to="/contact" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                  Start a Project Brief <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-border p-0 gap-0 relative">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-accent-warm/30 z-10" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-accent-warm/30 z-10" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-accent-warm/30 z-10" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-accent-warm/30 z-10" />
          {selectedWork && (
            <>
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img src={selectedWork.image} alt={selectedWork.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <DialogHeader className="mb-0 pb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm/60">{selectedWork.service}</span>
                    <span className="text-muted-foreground/30 text-[8px]">●</span>
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground">{selectedWork.type}</span>
                  </div>
                  <DialogTitle className="font-display text-[40px] tracking-[0.01em] leading-none text-foreground mb-4">{selectedWork.title}</DialogTitle>
                  <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{selectedWork.brief[lang]}</p>
                </DialogHeader>
                <div className="mt-12">
                  <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">{t("Deliverables", "สิ่งที่ส่งมอบ")}</h3>
                  <div className="space-y-0">
                    {selectedWork.deliverables.map((d, i) => (
                      <div key={i} className="py-3.5 border-b border-border last:border-b-0">
                        <span className="font-body text-[15px] text-foreground/70">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </main>
  );
};

export default WorkPage;
