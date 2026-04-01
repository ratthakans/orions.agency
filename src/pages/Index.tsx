import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ØRIONS",
    url: "https://orions.agency",
    description: "A creative agency focused on clear communication, strong art direction, and high-quality film production.",
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
        description="A creative agency focused on clear communication, strong art direction, and high-quality film production."
        path="/"
        keywords="creative agency bangkok, film production, art direction, brand communication, documentary"
        schema={homeSchema}
      />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/pT5BmAKGllg?autoplay=1&mute=1&loop=1&playlist=pT5BmAKGllg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080&start=36"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[300vh] min-w-[100vw] min-h-[100vh] pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background video"
            style={{ border: 0 }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="text-center max-w-4xl mx-auto relative z-10 px-4 sm:px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-logo text-[15px] tracking-[0.1em] uppercase text-foreground mb-12"
          >
            ØRIONS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-[clamp(44px,8vw,120px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4"
          >
            Fewer pieces.
            <br />
            <span className="text-accent-gradient">Stronger impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-2xl mx-auto mt-8"
          >
            A creative agency focused on clear communication, strong art direction, and high-quality film production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <Link
              to="/contact"
              className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Start a conversation
            </Link>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
            >
              View Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ BRIEF ABOUT PREVIEW ═══ */}
      <section className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground mb-12">
              We do less — with more intention.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground mb-8">
              In a world of constant output, we believe brands do not need more noise. They need clear direction, thoughtful communication, and work that people can actually feel.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
            >
              Learn more about us <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { num: "00", title: "Retainer", desc: "Ongoing creative support, campaign planning, and production oversight." },
              { num: "01", title: "Strategy", desc: "Define what your brand should say, who it should speak to, and how it should be understood." },
              { num: "02", title: "Communication Design", desc: "Shape strategy into clear ideas, visual direction, and systems people connect with." },
              { num: "03", title: "Film & Production", desc: "Execute with attention to detail — from concept to final delivery." },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className={`bg-background p-8 md:p-10 group h-full border border-border hover:border-accent-warm/30 transition-colors duration-300 ${i === 0 ? "md:col-span-3 border-accent-warm/20 bg-accent-warm/[0.02]" : ""}`}>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40 block mb-6">{s.num}</span>
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

      {/* ═══ CTA ═══ */}
      <section className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border text-center">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(36px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground">
            START WITH
          </h2>
          <h2 className="font-display text-[clamp(36px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-accent-gradient">
            A CONVERSATION.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
