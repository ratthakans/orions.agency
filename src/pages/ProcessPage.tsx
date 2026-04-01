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
];

const phases = [
  {
    num: "01",
    title: "Define",
    desc: "Clarify strategy and direction.",
    details: ["Brand positioning", "Key message & narrative", "Communication framework", "Campaign direction"],
    body: "Before creating anything, we clarify what the brand should say, who it should speak to, and how it should be understood. We find the real story — the one that creates clarity and connection.",
  },
  {
    num: "02",
    title: "Develop",
    desc: "Shape ideas and communication.",
    details: ["Campaign concept", "Creative direction", "Messaging system", "Content direction"],
    body: "Strategy becomes ideas. We develop campaign concepts, creative direction, and messaging systems that turn strategy into something people can connect with. Clear, focused, compelling.",
  },
  {
    num: "03",
    title: "Produce",
    desc: "Execute through film and production.",
    details: ["TVC / Commercial", "Branded content", "Documentary-style video", "Photo & video production"],
    body: "Ideas come to life through high-quality film and visual production. Our in-house team — Director, DOP, Editor, Post Supervisor — works together from concept to final cut. No handoff between teams.",
  },
];

const beliefs = [
  "Clarity over noise.",
  "Fewer, better pieces.",
  "We don't create for attention. We create for clarity.",
  "We don't follow trends. We build communication that lasts.",
];

const ProcessPage = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Our Approach — ØRIONS"
        description="Define. Develop. Produce. A simple but structured process for brand communication through strategy, creative direction, and film."
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
            <span className="text-accent-warm mr-2">✦</span> Our Approach
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground"
          >
            DEFINE. DEVELOP.
            <br />
            <span className="text-accent-gradient">PRODUCE.</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground">
              We work through a simple but structured process. In a world of constant output, we focus on clarity, direction, and work that holds attention. We combine strategic thinking, considered art direction, and disciplined production to create communication that is clear, precise, and built to last.
            </p>
          </AnimatedSection>
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
                <div className="relative md:pl-24 py-12 md:py-20 border-b border-border last:border-b-0 group">
                  {/* Dot on line */}
                  <div className="hidden md:block absolute left-[26px] top-20 w-[13px] h-[13px] border-2 border-accent-warm bg-background z-10 group-hover:bg-accent-warm transition-colors duration-300" />

                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                    <div className="shrink-0 flex flex-col items-center gap-3">
                      <div className="text-accent-warm/20 group-hover:text-accent-warm/60 transition-colors duration-300">
                        {phaseIcons[i]}
                      </div>
                      <span className="font-display text-[48px] md:text-[64px] leading-none text-accent-warm/15 group-hover:text-accent-warm/30 transition-colors duration-500">
                        {phase.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-[32px] md:text-[44px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
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

      {/* Philosophy */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">✦</span> Philosophy
            </p>
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

      <Footer />
    </main>
  );
};

export default ProcessPage;
