import AnimatedSection from "./AnimatedSection";

const problems = [
  { title: "Oversaturation", desc: "Every brand is publishing, advertising, and competing for the same attention." },
  { title: "Lost Meaning", desc: "Brands are visible — but not understood. Noise replaces substance." },
  { title: "Scattered Messaging", desc: "Without clear direction, communication becomes fragmented and forgettable." },
  { title: "Template Culture", desc: "Generic templates and AI-generated content flood every channel." },
  { title: "Short-Term Thinking", desc: "Brands chase trends instead of building lasting communication systems." },
  { title: "Disconnected Teams", desc: "Without alignment, every department speaks a different brand language." },
];

const ProblemSection = () => (
  <section className="py-32 md:py-44 px-6 md:px-12 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20vw] font-bold tracking-tighter whitespace-nowrap text-stroke-lg opacity-[0.04]">
          NOISE
        </span>
      </div>

      <div className="relative z-10">
        {/* Header — same 2-col layout as Careers */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                The Problem
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                The World Has<br />
                <span className="text-accent-gradient">Too Much Noise</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                Everyone is publishing. Everyone is advertising. Everyone is speaking louder. But meaning is disappearing.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* 6 problem cards — no icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider mb-20">
          {problems.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div className="bg-background p-8 md:p-10">
                <span className="font-display text-xs text-accent-warm mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-base font-semibold text-foreground mb-2">{p.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ØRIONS solution */}
        <AnimatedSection delay={0.4}>
          <div className="border-t border-divider pt-10 max-w-2xl">
            <p className="font-logo text-base md:text-lg text-foreground tracking-tight mb-3">
              ØRIONS exists to change that.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              We reduce noise. We create meaningful communication that people remember.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProblemSection;
