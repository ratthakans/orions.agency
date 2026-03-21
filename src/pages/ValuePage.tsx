import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ValuePage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="What We Sell — ØRIONS"
        description="We don't sell content or videos. We sell new growth direction. New perception, new story, new demand."
        path="/value"
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
            <span className="text-accent-warm mr-2">✦</span> What We Actually Sell
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-[clamp(20px,3vw,32px)] leading-[1.4] text-muted-foreground/40 line-through decoration-muted-foreground/20 mb-6">
              We don't sell content. We don't sell videos. We don't sell pretty things.
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-accent-gradient"
          >
            WE SELL NEW GROWTH DIRECTION.
          </motion.h1>
        </div>
      </section>

      {/* Value chain — large visual flow */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-16">The Growth Chain</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: "01", title: "New Perception", desc: "Change how people see you. The foundation of everything." },
              { num: "02", title: "New Story", desc: "Build a narrative worth spreading. Make people care." },
              { num: "03", title: "New Demand", desc: "Create desire that didn't exist. Open new markets." },
              { num: "04", title: "Revenue", desc: "Growth follows. Naturally." },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.12}>
                <div className="service-card border border-border p-8 md:p-10 h-full relative group">
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                      <span className="text-accent-warm text-xl">→</span>
                    </div>
                  )}
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40 block mb-8">{step.num}</span>
                  <h3 className="font-display text-[28px] md:text-[36px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{step.desc}</p>
                  {i === 3 && (
                    <div className="mt-6 w-8 h-[3px] bg-accent-warm" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Big closing statement */}
      <section className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-display text-[clamp(36px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground">
              WE MAKE BRANDS
            </p>
            <p className="font-display text-[clamp(36px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-accent-gradient">
              MORE INTERESTING.
            </p>
            <p className="font-body text-[18px] md:text-[22px] leading-[1.6] text-muted-foreground mt-8 max-w-xl mx-auto">
              And growth follows.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-12">
              <a
                href="/contact"
                className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ValuePage;
