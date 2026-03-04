import AnimatedSection from "./AnimatedSection";

const impacts = [
  { title: "Clear Brand Positioning", desc: "Messaging becomes focused and consistent." },
  { title: "Memorable Campaigns", desc: "Creative work that stands out." },
  { title: "Structured Content", desc: "Content that builds brand authority." },
  { title: "Premium Digital Presence", desc: "Digital platforms that represent the brand well." },
  { title: "Stronger Visibility", desc: "Better reach through search and digital channels." },
  { title: "Aligned Marketing", desc: "Teams communicate under one clear direction." },
];

const ImpactSection = () => (
  <section className="py-32 md:py-44 px-6 md:px-12 bg-elevated">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
          When ØRIONS works with a brand
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-20">
          Impact
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider">
        {impacts.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="bg-elevated p-8 md:p-10 h-full group hover:bg-secondary transition-colors duration-500">
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
