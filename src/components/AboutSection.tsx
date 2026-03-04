import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="py-32 md:py-44 px-6 md:px-12 bg-elevated">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
          Who we are
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-16">
          About ØRIONS
        </h2>
      </AnimatedSection>

      <div className="space-y-8 font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
        <AnimatedSection delay={0.1}>
          <p className="text-foreground font-display text-xl md:text-2xl">
            ØRIONS is a meaning-driven creative agency.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p>
            We help brands define direction and express it through campaigns, content, and digital experiences.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="border-t border-divider pt-10 mt-12">
            <p className="text-foreground font-display text-lg md:text-xl mb-6">Our approach is simple</p>
            <p className="mb-6">
              Clear thinking.<br />
              Purposeful creativity.<br />
              Disciplined execution.
            </p>
            <p className="text-foreground font-display text-lg md:text-xl">
              Less noise.<br />
              More meaning.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
