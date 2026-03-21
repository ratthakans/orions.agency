import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTypewriter from "@/components/HeroTypewriter";
import SEO from "@/components/SEO";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ØRIONS",
    url: "https://orions.agency",
    description: "ØRIONS is a creative agency in Bangkok that changes perception to unlock growth.",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="ØRIONS — Creative Agency | Bangkok"
        description="We change perception. We unlock growth. A creative agency in Bangkok that turns ideas into demand."
        path="/"
        keywords="creative agency bangkok, brand strategy, creative transformation, brand perception, campaign, film production"
        schema={homeSchema}
      />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="text-center max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-10"
          >
            Creative Agency · Bangkok
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4"
          >
            We change perception.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-display text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-[0.01em] mb-10 min-h-[1.1em]"
          >
            We <HeroTypewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-12"
          >
            A creative agency that turns ideas into demand through story-driven creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Let's Talk
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
            >
              Our Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ QUICK INTRO STRIP ═══ */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-display text-[clamp(28px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground">
              WE DON'T ADD MORE MARKETING.
            </p>
            <p className="font-display text-[clamp(28px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-accent-gradient mt-2">
              WE CHANGE HOW PEOPLE SEE YOU.
            </p>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground mt-8 max-w-lg mx-auto">
              When perception shifts — growth follows.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10">
              <Link
                to="/problem"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                Read the full story <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  <span className="text-accent-warm mr-2">✦</span> What We Do
                </p>
                <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground">SERVICES.</h2>
              </div>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mt-4 md:mt-0"
              >
                View all <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { title: "Creative Transformation", desc: "Find creative opportunities. Design new growth paths." },
              { title: "Signature Campaign", desc: "Big ideas. Campaign concepts. Stories that move people." },
              { title: "Film / Production", desc: "Hero films. Branded content. Visual storytelling." },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="service-card bg-background p-8 md:p-10 group h-full">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40 block mb-6">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[26px] md:text-[30px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS PREVIEW ═══ */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  <span className="text-accent-warm mr-2">✦</span> How We Work
                </p>
                <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground">OUR PROCESS.</h2>
              </div>
              <Link
                to="/process"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mt-4 md:mt-0"
              >
                Learn more <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { num: "I", title: "See Differently" },
              { num: "II", title: "Reframe Perception" },
              { num: "III", title: "Make It Real" },
              { num: "IV", title: "Scale Impact" },
            ].map((phase, i) => (
              <AnimatedSection key={phase.num} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent-warm/60 block mb-3">{phase.num}</span>
                  <h3 className="font-display text-[22px] md:text-[28px] tracking-[0.02em] text-foreground">{phase.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border text-center">
        <AnimatedSection>
          <p className="font-display text-[clamp(36px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground">
            READY TO BE SEEN
          </p>
          <p className="font-display text-[clamp(36px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-accent-gradient">
            DIFFERENTLY?
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
