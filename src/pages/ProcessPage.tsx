import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const phases = [
  { num: "I", title: "See Differently", desc: "See the brand from a new angle. Audit perception, find the gap." },
  { num: "II", title: "Reframe Perception", desc: "Change how people see the brand. Define a new story angle." },
  { num: "III", title: "Make It Real", desc: "Create something people can feel. Campaigns, films, content." },
  { num: "IV", title: "Scale Impact", desc: "Expand the result into growth. Measure, iterate, scale." },
];

const ProcessPage = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start center", "end center"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Our Process — ØRIONS"
        description="See differently. Reframe perception. Make it real. Scale impact. Our 4-step creative growth process."
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

      {/* Process steps with animated connecting line */}
      <section ref={lineRef} className="py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: connecting line */}
          <div className="hidden lg:block relative mb-20">
            <div className="h-px bg-border w-full relative">
              <motion.div
                style={{ width: lineWidth }}
                className="absolute top-0 left-0 h-full bg-accent-warm"
              />
            </div>
            <div className="grid grid-cols-4 mt-[-6px]">
              {phases.map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="w-3 h-3 bg-accent-warm" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={i * 0.12}>
                <div className="text-center lg:px-4">
                  <span className="font-mono text-[12px] tracking-[0.2em] text-accent-warm/60 block mb-4">{phase.num}</span>
                  <h3 className="font-display text-[26px] md:text-[32px] tracking-[0.02em] text-foreground mb-4">{phase.title}</h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{phase.desc}</p>
                </div>
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
