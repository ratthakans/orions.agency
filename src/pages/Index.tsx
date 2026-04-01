import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

import { projects } from "@/data/projects";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ØRIONS",
    url: "https://orions.agency",
    description: "A creative agency focused on clear communication, strong art direction, and high-quality film production.",
  },
];

const featuredWorks = projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  type: p.type,
  image: p.image,
}));

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

      {/* ═══ WORK PREVIEW ═══ */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Selected Work
                </p>
                <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground">WORK.</h2>
              </div>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mt-4 md:mt-0"
              >
                View all <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Featured project large */}
          <AnimatedSection>
            <Link to={`/work/${featuredWorks[0].slug}`} className="group block mb-8">
              <div className="aspect-[21/9] overflow-hidden relative border border-border hover:border-accent-warm/30 transition-colors duration-300">
                <img
                  src={featuredWorks[0].image}
                  alt={featuredWorks[0].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-2">{featuredWorks[0].type}</p>
                  <h3 className="font-display text-[32px] md:text-[48px] tracking-[0.02em] text-foreground">{featuredWorks[0].title}</h3>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Grid of remaining */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredWorks.slice(1).map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <Link to={`/work/${project.slug}`} className="group block border border-border hover:border-accent-warm/30 transition-colors duration-300">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                      width={1280}
                      height={800}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-accent-warm/60 mb-1">{project.type}</p>
                    <h3 className="font-display text-[18px] md:text-[22px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  What We Do
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

          {/* Visual service cards — horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {[
              {
                num: "01",
                title: "Strategy",
                desc: "Brand positioning, narrative, communication framework, and campaign direction.",
                icon: "◆",
              },
              {
                num: "02",
                title: "Communication Design",
                desc: "Campaign concepts, creative direction, messaging systems, and touchpoint structure.",
                icon: "◇",
              },
              {
                num: "03",
                title: "Film & Production",
                desc: "TVC, commercials, documentary film, branded content, and photo/video production.",
                icon: "▣",
              },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <Link to="/services" className="group block h-full">
                  <div className="border border-border hover:border-accent-warm/30 bg-background p-8 md:p-10 h-full transition-all duration-500 relative overflow-hidden">
                    {/* Decorative number */}
                    <span className="absolute top-4 right-4 font-display text-[80px] md:text-[100px] leading-none text-border/30 group-hover:text-accent-warm/10 transition-colors duration-500 select-none">
                      {s.num}
                    </span>

                    <div className="relative z-10">
                      <span className="text-accent-warm/60 text-[20px] block mb-6">{s.icon}</span>
                      <h3 className="font-display text-[28px] md:text-[34px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-6">
                        {s.desc}
                      </p>
                      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/40 group-hover:text-accent-warm/60 transition-colors duration-300 inline-flex items-center gap-2">
                        Learn more <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Retainer callout */}
          <AnimatedSection delay={0.3}>
            <Link to="/services" className="group block mt-6">
              <div className="border border-accent-warm/20 bg-accent-warm/[0.03] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-accent-warm/40 transition-all duration-300">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/50 mb-2">Ongoing Partnership</p>
                  <h3 className="font-display text-[26px] md:text-[32px] tracking-[0.02em] text-accent-warm">RETAINER</h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mt-2 max-w-xl">
                    Monthly creative support, campaign planning, and production oversight for brands that need a trusted long-term partner.
                  </p>
                </div>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-warm/40 group-hover:text-accent-warm transition-colors duration-300 inline-flex items-center gap-2 shrink-0">
                  Details <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          </AnimatedSection>
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
