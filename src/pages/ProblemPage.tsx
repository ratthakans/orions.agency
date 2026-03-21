import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ProblemPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="The Real Problem — ØRIONS"
        description="Most brands aren't broken. They're just invisible. We change how people see your brand."
        path="/problem"
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
            <span className="text-accent-warm mr-2">✦</span> The Real Problem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground"
          >
            MOST BRANDS AREN'T BROKEN.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-accent-gradient"
          >
            THEY'RE INVISIBLE.
          </motion.h1>
        </div>
      </section>

      {/* SCQA Beats — cinematic blur reveal */}
      <section ref={sectionRef} className="py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-32 md:space-y-48">
          {/* Situation */}
          <AnimatedSection>
            <div className="relative">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/40 block mb-6">Situation</span>
              <p className="font-body text-[clamp(22px,3.5vw,38px)] leading-[1.4] text-foreground/90">
                More content. More ads. More campaigns. Brands are doing <span className="text-accent-gradient">more than ever.</span>
              </p>
            </div>
          </AnimatedSection>

          {/* Complication */}
          <AnimatedSection>
            <div className="relative md:ml-16">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/40 block mb-6">Complication</span>
              <p className="font-body text-[clamp(22px,3.5vw,38px)] leading-[1.4] text-foreground/90">
                But growth doesn't follow.
              </p>
              <p className="font-body text-[clamp(22px,3.5vw,38px)] leading-[1.4] text-muted-foreground mt-2">
                People see the brand. But they don't feel anything.
              </p>
            </div>
          </AnimatedSection>

          {/* Question */}
          <AnimatedSection>
            <div className="relative md:ml-32">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/40 block mb-6">Question</span>
              <p className="font-display text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-[0.01em] text-foreground/60 italic">
                Is this a marketing problem?
              </p>
              <p className="font-display text-[clamp(32px,5vw,72px)] leading-[0.95] tracking-[0.01em] text-foreground mt-2">
                Or a <span className="text-accent-gradient">perception</span> problem?
              </p>
            </div>
          </AnimatedSection>

          {/* Answer */}
          <AnimatedSection>
            <div className="border-l-[3px] border-accent-warm pl-8 md:pl-12">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm block mb-6">Answer</span>
              <p className="font-display text-[clamp(28px,4.5vw,64px)] leading-[0.95] tracking-[0.01em] text-accent-gradient">
                We don't add more marketing.
              </p>
              <p className="font-display text-[clamp(28px,4.5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground mt-2">
                We change how people see you.
              </p>
              <p className="font-body text-[18px] md:text-[22px] leading-[1.6] text-muted-foreground mt-8">
                When perception shifts — growth follows.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border text-center">
        <AnimatedSection>
          <p className="font-display text-[clamp(28px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground mb-8">
            READY TO BE SEEN DIFFERENTLY?
          </p>
          <a
            href="/contact"
            className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
          >
            Let's Talk
          </a>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default ProblemPage;
