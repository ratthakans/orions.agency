import AnimatedSection from "./AnimatedSection";

const ProblemSection = () => (
  <section className="py-32 md:py-44 px-6 md:px-12">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-16 leading-tight">
          The World Has<br />Too Much Noise
        </h2>
      </AnimatedSection>

      <div className="space-y-8 text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
        <AnimatedSection delay={0.1}>
          <p>
            Everyone is publishing.<br />
            Everyone is advertising.<br />
            Everyone is speaking louder.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-foreground font-display text-xl md:text-2xl">
            But meaning is disappearing.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p>Brands are visible — but not understood.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="border-t border-divider pt-8 mt-12">
            <p className="text-foreground font-display text-lg md:text-xl mb-4">
              ØRIONS exists to change that.
            </p>
            <p>
              We reduce noise.<br />
              We create meaningful communication that people remember.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProblemSection;
