import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";

const quotes = [
  { text: "Growth starts when perception shifts.", align: "text-center" as const },
  { text: "People don't need more content. They need something worth noticing.", align: "text-right" as const },
  { text: "Story without execution is a dream. Execution without story is noise.", align: "text-left" as const },
  { text: "Most brands aren't boring. They're just seen the wrong way.", align: "text-center" as const, isFounder: true },
];

const PhilosophyPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="What We Believe — ØRIONS"
        description="Our philosophy: growth starts when perception shifts. We believe in stories that drive real results."
        path="/philosophy"
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
            <span className="text-accent-warm mr-2">✦</span> What We Believe
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground"
          >
            IDEAS FIRST.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-accent-gradient"
          >
            EVERYTHING ELSE FOLLOWS.
          </motion.h1>
        </div>
      </section>

      {/* Parallax quotes */}
      <section ref={containerRef} className="py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-32 md:space-y-48">
          {quotes.map((q, i) => (
            <ParallaxQuote key={i} quote={q} index={i} />
          ))}
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-12">Manifesto</p>
          </AnimatedSection>
          <div className="space-y-8">
            {[
              "We exist because brands deserve to be seen for what they really are.",
              "We believe creativity isn't decoration — it's strategy.",
              "We don't chase trends. We set the angle.",
              "Every project starts with one question: how should people see this brand?",
              "The answer changes everything.",
            ].map((line, i) => (
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

const ParallaxQuote = ({ quote, index }: { quote: typeof quotes[number]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div ref={ref} style={{ y }} className={quote.align}>
      <AnimatedSection>
        {quote.isFounder ? (
          <div className="border-l-[3px] border-accent-warm pl-8 md:pl-12 max-w-3xl inline-block text-left">
            <p className="font-body text-[clamp(20px,3vw,28px)] leading-[1.5] text-accent-gradient italic">
              "{quote.text}"
            </p>
            <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/50 mt-4">— Founder's POV</p>
          </div>
        ) : (
          <blockquote className="max-w-4xl inline-block">
            <p className="font-display text-[clamp(32px,5.5vw,80px)] leading-[0.95] tracking-[0.01em] text-foreground">
              "{quote.text}"
            </p>
          </blockquote>
        )}
      </AnimatedSection>
    </motion.div>
  );
};

export default PhilosophyPage;
