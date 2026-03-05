import AnimatedSection from "./AnimatedSection";

const ProblemSection = () => (
  <section className="py-32 md:py-44 px-6 md:px-12 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Large background text — outlined */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] font-bold tracking-tighter whitespace-nowrap text-stroke-lg opacity-[0.04]">
          NOISE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        {/* Left column */}
        <div>
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-6">
              The Problem
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[0.95]">
              The World<br />Has Too<br />Much Noise
            </h2>
          </AnimatedSection>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <div className="space-y-10">
            <AnimatedSection delay={0.1}>
              <div className="space-y-1 font-body text-lg md:text-xl text-muted-foreground">
                <p>Everyone is publishing.</p>
                <p>Everyone is advertising.</p>
                <p>Everyone is speaking louder.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="border-l-2 border-foreground/30 pl-6">
                <p className="font-display text-xl md:text-2xl text-foreground font-semibold">
                  But meaning is disappearing.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="font-body text-lg text-muted-foreground">
                Brands are visible — but not understood.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="w-16 h-px bg-foreground/20" />
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="border-t border-divider pt-8">
                <p className="font-logo text-base md:text-lg text-foreground tracking-tight mb-3">
                  ØRIONS exists to change that.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  We reduce noise.<br />
                  We create meaningful communication that people remember.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
