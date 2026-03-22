import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import HeroTypewriter from "@/components/HeroTypewriter";
import Marquee from "@/components/Marquee";
import ManifestoSection from "@/components/ManifestoSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { works } from "@/data/works";

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
  const { lang } = useLanguage();
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

      {/* ═══ HERO WITH VIDEO ═══ */}
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

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="text-center max-w-5xl mx-auto relative z-10 px-4 sm:px-6 md:px-12">
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
            className="font-display font-bold text-[clamp(28px,5.5vw,72px)] leading-[1] tracking-[0.02em] text-foreground mb-4"
          >
            We change perception.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-display font-medium text-[clamp(22px,4vw,56px)] leading-[1] tracking-[0.02em] mb-12 whitespace-nowrap min-h-[1.1em] flex items-center justify-center"
          >
            And <HeroTypewriter />
          </motion.div>

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

      {/* ═══ MANIFESTO ═══ */}
      <ManifestoSection />
      <AnimatedSection delay={0.2}>
        <div className="text-center -mt-20 mb-24 md:mb-40 px-4">
          <Link
            to="/process"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
          >
            Read the full story <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </AnimatedSection>

      {/* ═══ MARQUEE ═══ */}
      <Marquee items={["PERCEPTION", "STRATEGY", "STORYTELLING", "CREATIVE", "GROWTH", "FILM", "CAMPAIGN", "REFRAME"]} />

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  <span className="text-accent-warm mr-2">✦</span> What We Do
                </p>
                <h2 className="font-display text-[clamp(24px,4vw,48px)] leading-[1] tracking-[0.02em] text-foreground">Services.</h2>
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
              { title: "Creative Transformation", desc: "Redefine your brand through research, story, and positioning." },
              { title: "Signature Campaign", desc: "Campaigns that generate attention, conversation, and demand." },
              { title: "Production", desc: "Hero films, campaign visuals, and content assets." },
              { title: "Event / Activation", desc: "Real-world experiences that people remember." },
              { title: "Digital Experience", desc: "Websites and digital journeys that convert attention into action." },
              { title: "Creative Communication", desc: "How your brand spreads, gets talked about, and builds trust." },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="bg-background p-8 md:p-10 group h-full relative border border-border hover:border-accent-warm/30 transition-colors duration-300">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40 block mb-6">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display font-normal text-[16px] md:text-[18px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
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
                <h2 className="font-display text-[clamp(24px,4vw,48px)] leading-[1] tracking-[0.02em] text-foreground">Our Process.</h2>
              </div>
              <Link
                to="/process"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mt-4 md:mt-0"
              >
                Learn more <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {[
              { num: "01", title: "See Differently", desc: "Audit perception. Find the gap.", icon: <svg viewBox="0 0 40 40" className="w-8 h-8"><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="20" cy="20" r="4" fill="currentColor" /></svg> },
              { num: "02", title: "Reframe", desc: "Define a new positioning angle.", icon: <svg viewBox="0 0 40 40" className="w-8 h-8"><rect x="6" y="6" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 20 20)" /></svg> },
              { num: "03", title: "Make It Real", desc: "Turn strategy into creative work.", icon: <svg viewBox="0 0 40 40" className="w-8 h-8"><polygon points="20,4 36,36 4,36" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg> },
              { num: "04", title: "Activate", desc: "Launch with precision & impact.", icon: <svg viewBox="0 0 40 40" className="w-8 h-8"><line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" /><line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" /><line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" /><line x1="32" y1="8" x2="8" y2="32" stroke="currentColor" strokeWidth="1.5" /></svg> },
              { num: "05", title: "Scale", desc: "Iterate, grow, evolve.", icon: <svg viewBox="0 0 40 40" className="w-8 h-8"><polygon points="20,2 26,15 40,15 29,24 33,38 20,30 7,38 11,24 0,15 14,15" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg> },
            ].map((phase, i) => (
              <AnimatedSection key={phase.num} delay={i * 0.08}>
                <div className="relative border-t md:border-t-0 md:border-l border-border p-6 md:p-8 group hover:bg-accent-warm/5 transition-all duration-500 h-full">
                  <div className="absolute top-0 left-0 w-full h-px md:w-px md:h-full bg-transparent group-hover:bg-accent-warm/40 transition-colors duration-500" />
                  <div className="text-accent-warm/20 group-hover:text-accent-warm/60 transition-colors duration-300 mb-5">
                    {phase.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent-warm/30 group-hover:text-accent-warm transition-colors duration-300 block mb-4">
                    {phase.num}
                  </span>
                  <h3 className="font-display font-normal text-[14px] md:text-[15px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="font-body text-[13px] leading-[1.6] text-muted-foreground/60">{phase.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED WORK — ASYMMETRIC GRID ═══ */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  <span className="text-accent-warm mr-2">✦</span> Featured Work
                </p>
                <h2 className="font-display text-[clamp(24px,4vw,48px)] leading-[1] tracking-[0.02em] text-foreground">Featured Work.</h2>
              </div>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mt-4 md:mt-0"
              >
                View all work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Row 1: Large left + Small right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {works[0] && (
              <AnimatedSection className="md:col-span-2">
                <Link to={`/work/${works[0].slug}`} className="group block border border-border h-full hover:border-accent-warm/30 transition-colors duration-300">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img src={works[0].image} alt={works[0].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60">{works[0].service}</span>
                      <span className="text-muted-foreground/30 text-[8px]">●</span>
                      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{works[0].type}</span>
                    </div>
                    <h3 className="font-display font-normal text-[18px] md:text-[22px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                      {works[0].title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-muted-foreground line-clamp-2">{works[0].brief[lang]}</p>
                    <p className="font-display text-[14px] tracking-[0.02em] text-accent-gradient mt-4">{works[0].result}</p>
                  </div>
                </Link>
              </AnimatedSection>
            )}
            {works[1] && (
              <AnimatedSection delay={0.12}>
                <Link to={`/work/${works[1].slug}`} className="group block border border-border h-full hover:border-accent-warm/30 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={works[1].image} alt={works[1].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60">{works[1].service}</span>
                    </div>
                    <h3 className="font-display font-normal text-[15px] md:text-[18px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                      {works[1].title}
                    </h3>
                    <p className="font-body text-[13px] leading-[1.6] text-muted-foreground line-clamp-2">{works[1].brief[lang]}</p>
                  </div>
                </Link>
              </AnimatedSection>
            )}
          </div>

          {/* Row 2: Small left + Large right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {works[2] && (
              <AnimatedSection delay={0.08}>
                <Link to={`/work/${works[2].slug}`} className="group block border border-border h-full hover:border-accent-warm/30 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={works[2].image} alt={works[2].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60">{works[2].service}</span>
                    </div>
                    <h3 className="font-display font-normal text-[15px] md:text-[18px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                      {works[2].title}
                    </h3>
                    <p className="font-body text-[13px] leading-[1.6] text-muted-foreground line-clamp-2">{works[2].brief[lang]}</p>
                  </div>
                </Link>
              </AnimatedSection>
            )}
            {works[3] && (
              <AnimatedSection delay={0.16} className="md:col-span-2">
                <Link to={`/work/${works[3].slug}`} className="group block border border-border h-full hover:border-accent-warm/30 transition-colors duration-300">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img src={works[3].image} alt={works[3].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60">{works[3].service}</span>
                      <span className="text-muted-foreground/30 text-[8px]">●</span>
                      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{works[3].type}</span>
                    </div>
                    <h3 className="font-display font-normal text-[18px] md:text-[22px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                      {works[3].title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-muted-foreground line-clamp-2">{works[3].brief[lang]}</p>
                    <p className="font-display text-[14px] tracking-[0.02em] text-accent-gradient mt-4">{works[3].result}</p>
                  </div>
                </Link>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border text-center">
        <AnimatedSection>
          <p className="font-display font-bold text-[clamp(24px,4.5vw,56px)] leading-[1] tracking-[0.02em] text-foreground">
            Ready to be seen
          </p>
          <p className="font-display font-bold text-[clamp(24px,4.5vw,56px)] leading-[1] tracking-[0.02em] text-accent-gradient">
            differently?
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
