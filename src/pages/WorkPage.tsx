import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
import workTerra from "@/assets/work-terra.jpg";

const works = [
  { title: "Northwind Electric", category: "Campaign Film", brief: { en: "A cinematic campaign film launching Northwind's entry into the Southeast Asian EV market.", th: "Campaign film ระดับภาพยนตร์สำหรับการเปิดตัว Northwind ในตลาด EV เอเชียตะวันออกเฉียงใต้" }, deliverables: ["Campaign Film", "Director's Cut", "Social Cutdowns", "Behind the Scenes"], image: workNorthwind },
  { title: "Atlas Property Group", category: "Brand Documentary", brief: { en: "A brand documentary capturing the vision and craftsmanship behind Atlas's luxury developments.", th: "Brand documentary ที่ถ่ายทอดวิสัยทัศน์และงานฝีมือเบื้องหลังโครงการ luxury ของ Atlas" }, deliverables: ["Documentary Film", "Interview Series", "Sizzle Reel", "Photography"], image: workAtlas },
  { title: "Koha Culture Studio", category: "Brand Story Video", brief: { en: "A brand story video series exploring the intersection of contemporary art and community.", th: "ซีรีส์วิดีโอเรื่องราวแบรนด์สำรวจจุดตัดของศิลปะร่วมสมัยและชุมชน" }, deliverables: ["Brand Video", "Artist Profiles", "Event Documentation", "Social Content"], image: workKoha },
  { title: "Lumen Health", category: "Content System", brief: { en: "A comprehensive content system for a digital health platform — from thought leadership to patient education.", th: "ระบบ content ครบวงจรสำหรับแพลตฟอร์มสุขภาพดิจิทัล — ตั้งแต่ thought leadership ถึง patient education" }, deliverables: ["Content Strategy", "Editorial Calendar", "Video Series", "Blog System"], image: workLumen },
  { title: "Sera Hospitality", category: "Campaign Film", brief: { en: "A campaign film capturing the essence of Sera's luxury hospitality experience across three properties.", th: "Campaign film ที่ถ่ายทอดแก่นแท้ของประสบการณ์ luxury hospitality ของ Sera ใน 3 โรงแรม" }, deliverables: ["Hero Film", "Property Films", "Social Series", "Print Campaign"], image: workSera },
  { title: "Muse Education", category: "Brand Story Video", brief: { en: "A brand story film positioning Muse as the future of creative education in Southeast Asia.", th: "Brand story film วาง positioning ให้ Muse เป็นอนาคตของ creative education ใน Southeast Asia" }, deliverables: ["Brand Film", "Student Stories", "Campus Tour", "Recruitment Video"], image: workMuse },
  { title: "Orbit Fintech", category: "Content System", brief: { en: "Building trust through content — a thought leadership system for a fintech startup.", th: "สร้างความน่าเชื่อถือผ่าน content — ระบบ thought leadership สำหรับ fintech startup" }, deliverables: ["Content Strategy", "Explainer Videos", "Blog Series", "Social Content"], image: workOrbit },
  { title: "Field Notes Coffee", category: "Brand Documentary", brief: { en: "A documentary following the journey from farm to cup — telling the story behind every bean.", th: "สารคดีตามเส้นทางจากไร่ถึงแก้ว — เล่าเรื่องเบื้องหลังทุกเมล็ดกาแฟ" }, deliverables: ["Documentary", "Origin Series", "Barista Profiles", "Social Content"], image: workField },
  { title: "Vela Fashion", category: "Campaign Film", brief: { en: "A seasonal campaign film for Vela's debut collection — where fashion meets storytelling.", th: "Campaign film สำหรับคอลเลกชันเปิดตัวของ Vela — จุดที่แฟชั่นพบการเล่าเรื่อง" }, deliverables: ["Campaign Film", "Lookbook Video", "Social Content", "E-commerce Photography"], image: workVela },
  { title: "Terra Collective", category: "Brand Story Video", brief: { en: "A brand story video exploring Terra's mission to make sustainable living accessible and desirable.", th: "Brand story video สำรวจภารกิจของ Terra ที่จะทำให้ sustainable living เข้าถึงได้และน่าปรารถนา" }, deliverables: ["Brand Video", "Founder Story", "Product Films", "Impact Report"], image: workTerra },
];

const categories = ["All", "Campaign Film", "Brand Documentary", "Brand Story Video", "Content System"];

const WorkPage = () => {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const { lang, t } = useLanguage();

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;
    return works.filter((w) => w.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>Work — ØRIONS Creative Agency Portfolio</title>
        <meta name="description" content="Selected projects: campaign films, brand documentaries, brand story videos, and content systems. Quality over quantity." />
        <link rel="canonical" href="https://orions.agency/work" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={40} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-10">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">Portfolio</span>
              </div>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-4xl">
                {t(<>Selected <span className="text-accent-gradient">Work.</span></>, <>ผลงาน<span className="text-accent-gradient">คัดสรร</span></>)}
              </h1>
              <p className="font-body text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
                {t("Quality over quantity. Every project here represents a brand we helped think, shape, and produce.", "คุณภาพเหนือปริมาณ ทุกโปรเจกต์ที่นี่คือแบรนด์ที่เราช่วยคิด หล่อหลอม และผลิต")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.05}>
              <div className="flex items-center gap-1 mb-10 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`font-mono text-[10px] tracking-[0.14em] uppercase px-5 py-2.5 border transition-all duration-300 rounded-sm ${
                      activeFilter === cat ? "bg-accent-gradient text-white border-transparent" : "border-divider text-muted-foreground hover:text-foreground hover:border-foreground/20"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredWorks.map((w, i) => (
                <AnimatedSection key={w.title} delay={i * 0.04}>
                  <div className="bg-background border border-divider group cursor-pointer relative hover:bg-secondary transition-colors duration-300 overflow-hidden" onClick={() => setSelectedWork(w)}>
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10" />
                    <div className="overflow-hidden">
                      <img src={w.image} alt={w.title} className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-500" loading="lazy" />
                    </div>
                    <div className="p-5 md:p-6">
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-1.5">{w.category}</span>
                      <h3 className="font-body text-[15px] font-medium text-foreground mb-1">{w.title}</h3>
                      <p className="font-body text-[13px] leading-[1.72] text-muted-foreground line-clamp-2">{w.brief[lang]}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-divider p-0 gap-0">
          {selectedWork && (
            <>
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img src={selectedWork.image} alt={selectedWork.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10">
                <DialogHeader className="mb-0 pb-0">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-3">{selectedWork.category}</span>
                  <DialogTitle className="font-display text-[40px] tracking-[0.03em] leading-none text-foreground mb-2">{selectedWork.title}</DialogTitle>
                  <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{selectedWork.brief[lang]}</p>
                </DialogHeader>
                <div className="mt-8">
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("Deliverables", "สิ่งที่ส่งมอบ")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider border border-divider">
                    {selectedWork.deliverables.map((d, i) => (
                      <div key={i} className="bg-background p-4 hover:bg-secondary transition-colors duration-300">
                        <span className="font-mono text-[10px] tracking-[0.1em] text-foreground">{d}</span>
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
