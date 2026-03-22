import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const phaseIcons = [
  <svg viewBox="0 0 40 40" className="w-10 h-10"><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="20" cy="20" r="4" fill="currentColor" /></svg>,
  <svg viewBox="0 0 40 40" className="w-10 h-10"><rect x="6" y="6" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 20 20)" /></svg>,
  <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,4 36,36 4,36" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
  <svg viewBox="0 0 40 40" className="w-10 h-10"><line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" /><line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" /><line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" /><line x1="32" y1="8" x2="8" y2="32" stroke="currentColor" strokeWidth="1.5" /></svg>,
  <svg viewBox="0 0 40 40" className="w-10 h-10"><polygon points="20,2 26,15 40,15 29,24 33,38 20,30 7,38 11,24 0,15 14,15" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
];

const phases = [
  {
    num: "01", title: "See Differently",
    desc: "See the brand from a new angle. Audit perception, find the gap between how you're seen and how you should be seen.",
    details: ["Brand perception audit", "Market & competitor analysis", "Audience insight mapping", "Gap identification"],
    body: "We start by understanding how your brand is currently perceived — by customers, competitors, and the market. We map the gap between where you are and where you should be. This is where we find the real opportunity for growth.",
  },
  {
    num: "02", title: "Reframe Perception",
    desc: "Change how people see the brand. Define a new positioning, a new story angle that shifts everything.",
    details: ["Positioning strategy", "Narrative framework", "Creative direction", "Brand voice"],
    body: "Once we see the gap, we define a new way for people to perceive your brand. New positioning, new narrative, new creative direction. This isn't a rebrand — it's a reframe. We change the angle so people see your brand the way it deserves to be seen.",
  },
  {
    num: "03", title: "Make It Real",
    desc: "Turn strategy into something people can feel. Campaigns, films, content, experiences.",
    details: ["Campaign development", "Film & production", "Content creation", "Visual identity"],
    body: "Strategy means nothing if people can't feel it. We turn the new perception into tangible work — campaigns, films, content, brand experiences. Everything is designed to make the brand's new story impossible to ignore.",
  },
  {
    num: "04", title: "Launch & Activate",
    desc: "Put the work into the world. Coordinate channels, timing, and touchpoints for maximum impact.",
    details: ["Channel strategy", "Launch planning", "Campaign rollout", "Audience targeting"],
    body: "We plan and execute the rollout across every relevant channel and touchpoint. Timing, sequencing, platform strategy — every detail is coordinated to maximize impact from day one. We don't just publish content — we orchestrate moments.",
  },
  {
    num: "05", title: "Scale & Evolve",
    desc: "Measure what works. Iterate fast. Scale the wins and evolve the story as the brand grows.",
    details: ["Performance tracking", "Data-driven iteration", "Growth scaling", "Long-term evolution"],
    body: "After launch, we track performance, learn from data, and iterate fast. What works gets scaled. What doesn't gets refined. The story evolves as the brand grows — and we stay with you to keep pushing forward.",
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
            className="font-display font-bold text-[clamp(28px,5vw,64px)] leading-[1] tracking-[0.02em] text-foreground"
          >
            Our Process.
          </motion.h1>
        </div>
      </section>

      {/* Painpoint Section */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-16 md:mb-24">The Problem We See</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mb-20 md:mb-32">
               <p className="font-display font-medium text-[clamp(22px,4vw,48px)] leading-[1.05] tracking-[0.02em] text-foreground">
                More ads.
              </p>
              <p className="font-display font-medium text-[clamp(22px,4vw,48px)] leading-[1.05] tracking-[0.02em] text-foreground">
                More content.
              </p>
              <p className="font-display font-medium text-[clamp(22px,4vw,48px)] leading-[1.05] tracking-[0.02em] text-foreground">
                More budget.
              </p>
              <p className="font-display font-medium text-[clamp(22px,4vw,48px)] leading-[1.05] tracking-[0.02em] text-muted-foreground/30 mt-4">
                Less growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
            {[
              { num: "01", text: "Spending more but getting diminishing returns" },
              { num: "02", text: "Content that gets views but doesn't convert" },
              { num: "03", text: "Competing on price because the brand feels generic" },
              { num: "04", text: "Agencies that deliver assets but not direction" },
              { num: "05", text: "Internal teams stretched thin with no creative clarity" },
              { num: "06", text: "No story. No positioning. No reason to choose you." },
            ].map((pain, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-6 py-8 px-2 border-b border-border/50 group hover:border-accent-warm/30 transition-colors duration-300">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/30 group-hover:text-accent-warm/60 transition-colors duration-300 mt-1 shrink-0">
                    {pain.num}
                  </span>
                  <p className="font-body text-[15px] leading-[1.7] text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {pain.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-20 md:mt-32 border-l-2 border-accent-warm/40 pl-8 md:pl-12">
               <p className="font-display font-medium text-[clamp(18px,2.5vw,32px)] leading-[1.1] tracking-[0.02em] text-foreground">
                It's not a marketing problem.
              </p>
              <p className="font-display font-medium text-[clamp(18px,2.5vw,32px)] leading-[1.1] tracking-[0.02em] text-accent-gradient mt-2">
                It's a perception problem.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vertical timeline process */}
      <section ref={lineRef} className="py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent-warm origin-top"
            />
          </div>

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={i * 0.1}>
                <div className="relative md:pl-24 py-12 md:py-20 border-b border-border last:border-b-0 group">
                  <div className="hidden md:block absolute left-[26px] top-20 w-[13px] h-[13px] border-2 border-accent-warm bg-background z-10 group-hover:bg-accent-warm transition-colors duration-300" />

                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                    <div className="shrink-0 flex flex-col items-center gap-3">
                      <div className="text-accent-warm/20 group-hover:text-accent-warm/60 transition-colors duration-300">
                        {phaseIcons[i]}
                      </div>
                      <span className="font-display text-[36px] md:text-[48px] leading-none text-accent-warm/15 group-hover:text-accent-warm/30 transition-colors duration-500">
                        {phase.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-[22px] md:text-[30px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                        {phase.title}
                      </h3>
                      <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground mb-4 max-w-xl">
                        {phase.desc}
                      </p>
                      <p className="font-body text-[14px] leading-[1.8] text-muted-foreground/70 mb-6 max-w-xl">
                        {phase.body}
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

      {/* What We Believe */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">✦</span> What We Believe
            </p>
            <h2 className="font-display text-[clamp(28px,4.5vw,52px)] leading-[1] tracking-[0.02em] text-foreground mb-4">
              Ideas first.
            </h2>
            <h2 className="font-display text-[clamp(28px,4.5vw,52px)] leading-[1] tracking-[0.02em] text-accent-gradient">
              Everything else follows.
            </h2>
          </AnimatedSection>

          <div className="mt-20 md:mt-32 space-y-20 md:space-y-32">
            {beliefs.map((text, i) => (
              <AnimatedSection key={i} delay={0.1}>
                <blockquote className={`max-w-4xl ${i % 2 === 0 ? '' : 'md:ml-auto md:text-right'}`}>
                  <p className="font-display text-[clamp(20px,3.5vw,44px)] leading-[1.1] tracking-[0.02em] text-foreground/90">
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
