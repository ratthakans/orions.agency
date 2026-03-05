import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workLumen from "@/assets/work-lumen.jpg";
import workSera from "@/assets/work-sera.jpg";
import workMuse from "@/assets/work-muse.jpg";
import workOrbit from "@/assets/work-orbit.jpg";
import workField from "@/assets/work-field.jpg";

const works = [
  {
    title: "Northwind Electric",
    industry: "EV Mobility",
    brief: "Brand repositioning and campaign launch",
    scope: ["Brand Strategy", "Campaign Concept", "Brand Film", "Digital Experience", "Social Content Series"],
    result: "Repositioned Northwind as the leading sustainable EV brand in Southeast Asia with a 40% increase in brand awareness.",
    image: workNorthwind,
  },
  {
    title: "Atlas Property Group",
    industry: "Real Estate",
    brief: "Narrative website and brand platform",
    scope: ["Brand Direction", "Narrative Website", "UX/UI Direction", "Photography", "Content Strategy"],
    result: "Delivered a premium digital presence that elevated Atlas's positioning in the luxury property market.",
    image: workAtlas,
  },
  {
    title: "Koha Culture Studio",
    industry: "Arts & Culture",
    brief: "Community storytelling and content system",
    scope: ["Editorial Content", "Social Content Series", "Community Strategy", "Brand Narrative", "Photography"],
    result: "Built a content ecosystem that grew Koha's community engagement by 3x within six months.",
    image: workKoha,
  },
  {
    title: "Lumen Health",
    industry: "Healthcare",
    brief: "Digital experience and search visibility strategy",
    scope: ["Digital Experience", "SEO Strategy", "Content Architecture", "Landing Pages", "Performance Analytics"],
    result: "Increased organic search visibility by 200% and established Lumen as a thought leader in digital health.",
    image: workLumen,
  },
  {
    title: "Sera Hospitality",
    industry: "Hospitality",
    brief: "Brand refresh and digital campaign",
    scope: ["Rebranding", "Campaign Concept", "Photography", "Narrative Website", "Social Content"],
    result: "Refreshed Sera's brand identity resulting in a cohesive luxury experience across all touchpoints.",
    image: workSera,
  },
  {
    title: "Muse Education",
    industry: "Education",
    brief: "Campaign platform and storytelling",
    scope: ["Campaign Strategy", "Brand Film", "Editorial Content", "Digital Platform", "Founder Storytelling"],
    result: "Created a campaign platform that resonated with modern learners and drove enrollment growth.",
    image: workMuse,
  },
  {
    title: "Orbit Fintech",
    industry: "Financial Technology",
    brief: "Authority building and content ecosystem",
    scope: ["Content Strategy", "Thought Leadership", "Editorial Series", "Digital Experience", "SEO"],
    result: "Positioned Orbit as a trusted authority in the fintech space through consistent, high-quality content.",
    image: workOrbit,
  },
  {
    title: "Field Notes Coffee",
    industry: "F&B / Lifestyle",
    brief: "Editorial storytelling and creative campaigns",
    scope: ["Brand Narrative", "Photography", "Campaign Concept", "Social Content Series", "Editorial Content"],
    result: "Transformed Field Notes from a local roaster into a recognized lifestyle brand across the region.",
    image: workField,
  },
];

const clientLogos = [
  { name: "Meridian", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5"/><path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Voss Studio", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><polygon points="20,6 34,34 6,34" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
  { name: "Kova", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="8" y="8" width="24" height="24" stroke="currentColor" strokeWidth="1.5" rx="2"/><circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Arcline", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M6 34 Q20 4 34 34" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
  { name: "Sonder", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M8 28 C8 14 32 14 32 28" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Halcyon", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M20 6L6 20L20 34L34 20Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
  { name: "Vektor", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M8 32L20 8L32 32" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="13" y1="24" x2="27" y2="24" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Nimbus", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="16" cy="22" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="26" cy="22" r="8" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Stratos", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1.5"/><line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5"/><line x1="6" y1="26" x2="34" y2="26" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Pallor", icon: <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="1.5"/><rect x="15" y="15" width="10" height="10" stroke="currentColor" strokeWidth="1.5"/></svg> },
];

const WorkSection = () => {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section id="work" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-20">
            Selected Work
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {works.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.06}>
              <div
                className="group cursor-pointer"
                onClick={() => setSelectedWork(w)}
              >
                <div className="overflow-hidden mb-5 relative">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Accent overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-700" />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
                    {w.title}
                  </h3>
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
                    {w.industry}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-2">{w.brief}</p>
                <div className="flex flex-wrap gap-2">
                  {w.scope.slice(0, 3).map((s) => (
                    <span key={s} className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-body border border-divider px-2 py-0.5 group-hover:border-foreground/30 transition-colors duration-500">
                      {s}
                    </span>
                  ))}
                  {w.scope.length > 3 && (
                    <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-body border border-divider px-2 py-0.5">
                      +{w.scope.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-32 border-t border-divider pt-20">
          <AnimatedSection>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4 text-center">
              Trusted By
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16 text-center">
              And More
            </h3>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-divider border border-divider">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="bg-background flex flex-col items-center justify-center py-8 md:py-10 px-4 gap-3 group hover:bg-secondary transition-colors duration-300"
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {client.icon}
                  </span>
                  <span className="font-display text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Work Detail Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background border-divider p-0">
          {selectedWork && (
            <>
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <DialogHeader className="mb-8">
                  <div className="flex items-baseline justify-between mb-2">
                    <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {selectedWork.title}
                    </DialogTitle>
                    <span className="text-xs tracking-[0.2em] uppercase text-accent-warm font-body">
                      {selectedWork.industry}
                    </span>
                  </div>
                  <DialogDescription className="font-body text-base text-muted-foreground">
                    {selectedWork.brief}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      Scope of Work
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.scope.map((s) => (
                        <span key={s} className="text-xs tracking-[0.1em] uppercase font-body border border-divider px-3 py-1.5 text-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-divider pt-8">
                    <h4 className="font-display text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      Result
                    </h4>
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      {selectedWork.result}
                    </p>
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
