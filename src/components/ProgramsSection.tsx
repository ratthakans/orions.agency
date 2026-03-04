import AnimatedSection from "./AnimatedSection";

const programs = [
  {
    title: "Marketing & Social Systems",
    subtitle: "Consistent brand presence across digital channels.",
    scope: [
      "Content planning and editorial calendar",
      "Social media management",
      "Short-form content production",
      "Campaign rollout support",
      "Platform publishing and scheduling",
      "Community monitoring",
      "Monthly performance review",
    ],
    outcome: "Consistent digital presence and audience engagement.",
  },
  {
    title: "Creative Direction Program",
    subtitle: "Strategic thinking and creative leadership.",
    scope: [
      "Campaign ideation",
      "Creative direction for content",
      "Brand narrative development",
      "Strategic brainstorming sessions",
      "Content concept development",
      "Communication review and guidance",
    ],
    outcome: "Continuous creative clarity and stronger communication ideas.",
  },
  {
    title: "Information Intelligence",
    subtitle: "Communication insight and monitoring.",
    scope: [
      "Search visibility monitoring",
      "AI search presence",
      "Brand mention monitoring",
      "Competitor communication analysis",
      "Online sentiment observation",
      "Content performance insights",
      "Monthly intelligence report",
    ],
    outcome: "Clear understanding of brand visibility and communication performance.",
  },
];

const ProgramsSection = () => (
  <section className="py-32 md:py-44 px-6 md:px-12 bg-elevated">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
          Long-term partnerships
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Ongoing Programs
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
          These programs help brands maintain consistent communication and long-term digital presence.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-divider">
        {programs.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="bg-elevated p-8 md:p-10 h-full flex flex-col">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-8">{p.subtitle}</p>

              <div className="mb-8 flex-1">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Scope</p>
                <ul className="space-y-2">
                  {p.scope.map((item) => (
                    <li key={item} className="font-body text-sm text-secondary-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-divider pt-6">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Outcome</p>
                <p className="font-body text-sm text-secondary-foreground leading-relaxed">{p.outcome}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
