import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

const problems = [
  {
    title: "Oversaturation",
    desc: "Every brand is publishing, advertising, and competing for the same attention.",
    detail: "The digital landscape is flooded with content. Brands publish across 10+ channels daily, creating an overwhelming amount of noise. Without a clear voice, even great brands get lost in an endless scroll of sameness.",
    impact: "Audiences develop content blindness, reducing engagement rates by up to 60% across saturated channels.",
    solution: "We audit your communication landscape, identify where signal gets lost, and build a focused channel strategy that cuts through — not adds to — the noise.",
  },
  {
    title: "Lost Meaning",
    desc: "Brands are visible — but not understood. Noise replaces substance.",
    detail: "Visibility without meaning is just decoration. Many brands invest heavily in reach but forget to define what they actually stand for. The result: audiences see the brand but can't articulate what makes it different.",
    impact: "73% of consumers say they can't differentiate between brands in the same category — a direct result of meaning erosion.",
    solution: "We define your brand's core meaning through positioning workshops, competitive analysis, and narrative architecture that gives every message purpose.",
  },
  {
    title: "Scattered Messaging",
    desc: "Without clear direction, communication becomes fragmented and forgettable.",
    detail: "When there's no central message framework, every team, agency, and channel creates its own version of the brand story. The result is a fragmented identity that confuses rather than converts.",
    impact: "Inconsistent messaging costs brands an average of 23% in potential revenue due to trust erosion and audience confusion.",
    solution: "We create unified message architectures — a single source of truth that aligns every touchpoint from social posts to sales decks.",
  },
  {
    title: "Template Culture",
    desc: "Generic templates and AI-generated content flood every channel.",
    detail: "The rise of drag-and-drop tools and AI content generators has democratized creation but homogenized output. When everyone uses the same templates, no one stands out.",
    impact: "Template-based content receives 45% less engagement than custom-crafted creative, yet 80% of brands default to templates.",
    solution: "We build bespoke creative systems — not templates — that give your brand a distinctive visual and verbal identity impossible to replicate.",
  },
  {
    title: "Short-Term Thinking",
    desc: "Brands chase trends instead of building lasting communication systems.",
    detail: "The pressure for quick wins drives brands toward trend-hopping and viral chasing. But trends expire. What remains is a brand with no foundation.",
    impact: "Trend-dependent brands spend 3× more on customer acquisition because they never build lasting recognition or loyalty.",
    solution: "We design long-term communication systems that compound over time — building brand equity that makes every future campaign more effective.",
  },
  {
    title: "Disconnected Teams",
    desc: "Without alignment, every department speaks a different brand language.",
    detail: "Marketing says one thing, sales says another, and the product team has its own story. When internal teams aren't aligned, external communication becomes a contradiction.",
    impact: "Misaligned teams create 5× more off-brand content and take 40% longer to bring campaigns to market.",
    solution: "We run cross-functional alignment workshops and create brand guideline systems that ensure everyone speaks the same language.",
  },
];

const ProblemSection = () => {
  const [selectedProblem, setSelectedProblem] = useState<typeof problems[0] | null>(null);

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[20vw] font-bold tracking-tighter whitespace-nowrap text-stroke-lg opacity-[0.04]">
            NOISE
          </span>
        </div>

        <div className="relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider mb-20">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div
                  className="bg-background p-8 md:p-10 group/card cursor-pointer transition-colors duration-300 hover:bg-secondary relative overflow-hidden"
                  onClick={() => setSelectedProblem(p)}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-accent-gradient scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="font-display text-xs text-accent-warm mb-4 block transition-transform duration-300 group-hover/card:translate-x-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-base font-semibold text-foreground mb-2 transition-colors duration-300 group-hover/card:text-accent-gradient">
                    {p.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body group-hover/card:text-foreground transition-colors duration-300">
                    Learn more →
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bridge text */}
          <AnimatedSection delay={0.2}>
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-display text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                We reduce noise. We create meaningful communication that people remember.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Dialog open={!!selectedProblem} onOpenChange={(open) => !open && setSelectedProblem(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-divider">
          {selectedProblem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {selectedProblem.title}
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground text-sm mt-1">
                  {selectedProblem.desc}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                <div>
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    The Reality
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedProblem.detail}
                  </p>
                </div>
                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    The Impact
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedProblem.impact}
                  </p>
                </div>
                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    How We Solve It
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedProblem.solution}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProblemSection;
