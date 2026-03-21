import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const phases = [
  {
    num: "01",
    title: "See Differently",
    desc: "See the brand from a new angle. Audit perception, find the gap between how you're seen and how you should be seen.",
    details: ["Brand perception audit", "Market & competitor analysis", "Audience insight mapping", "Gap identification"],
  },
  {
    num: "02",
    title: "Reframe Perception",
    desc: "Change how people see the brand. Define a new positioning, a new story angle that shifts everything.",
    details: ["Positioning strategy", "Narrative framework", "Creative direction", "Brand voice"],
  },
  {
    num: "03",
    title: "Make It Real",
    desc: "Turn strategy into something people can feel. Campaigns, films, content, experiences.",
    details: ["Campaign development", "Film & production", "Content creation", "Visual identity"],
  },
  {
    num: "04",
    title: "Launch & Activate",
    desc: "Put the work into the world. Coordinate channels, timing, and touchpoints for maximum impact.",
    details: ["Channel strategy", "Launch planning", "Campaign rollout", "Audience targeting"],
  },
  {
    num: "05",
    title: "Scale & Evolve",
    desc: "Measure what works. Iterate fast. Scale the wins and evolve the story as the brand grows.",
    details: ["Performance tracking", "Data-driven iteration", "Growth scaling", "Long-term evolution"],
  },
];

const beliefs = [
  "Growth starts when perception shifts.",
  "People don't need more content. They need something worth noticing.",
  "Story without execution is a dream. Execution without story is noise.",
  "Most brands aren't boring. They're just seen the wrong way.",
];

const manifesto = [
  "We exist because brands deserve to be seen for what they really are.",
  "We believe creativity isn't decoration — it's strategy.",
  "We don't chase trends. We set the angle.",
  "Every project starts with one question: how should people see this brand?",
  "The answer changes everything.",
];

const ProcessPage = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="How We Work — ØRIONS"
        description="See differently. Reframe perception. Make it real. Scale impact. Our creative growth process and philosophy."
        path="/process"
      />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-end px-4 sm:px-6 md:px-12 pb-16 md:pb-24 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8"
          >
            <span className="text-accent-warm mr-2">✦</span> How We Create Growth
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground"
          >
            OUR PROCESS.
          </motion.h1>
        </div>
      </section>

      {/* Vertical timeline process */}
      <section ref={lineRef} className="py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical animated line — desktop only */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent-warm origin-top"
            />
          </div>

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={i * 0.1}>
                <div className="relative md:pl-24 py-12 md:py-16 border-b border-border last:border-b-0 group">
                  {/* Dot on line */}
                  <div className="hidden md:block absolute left-[26px] top-16 w-[13px] h-[13px] border-2 border-accent-warm bg-background z-10 group-hover:bg-accent-warm transition-colors duration-300" />

                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                    <div className="shrink-0">
                      <span className="font-display text-[48px] md:text-[64px] leading-none text-accent-warm/15 group-hover:text-accent-warm/30 transition-colors duration-500">
                        {phase.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-[32px] md:text-[44px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground mb-6 max-w-xl">
                        {phase.desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {phase.details.map((d) => (
                          <span key={d} className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/50 border border-border/50 px-3 py-1.5">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe — merged from Philosophy */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">✦</span> What We Believe
            </p>
            <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4">
              IDEAS FIRST.
            </h2>
            <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.9] tracking-[0.01em] text-accent-gradient">
              EVERYTHING ELSE FOLLOWS.
            </h2>
          </AnimatedSection>

          <div className="mt-20 md:mt-32 space-y-20 md:space-y-32">
            {beliefs.map((text, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <blockquote className={`max-w-4xl ${i % 2 === 0 ? '' : 'md:ml-auto md:text-right'}`}>
                  <p className="font-display text-[clamp(28px,4.5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground/90">
                    "{text}"
                  </p>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-12">Manifesto</p>
          </AnimatedSection>
          <div className="space-y-8">
            {manifesto.map((line, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <p className="font-body text-[clamp(18px,2.5vw,28px)] leading-[1.6] text-foreground/80">
                  {line}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProcessPage;
