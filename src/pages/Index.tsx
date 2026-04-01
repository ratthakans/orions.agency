import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

import workNoSignal from "@/assets/work-northwind.jpg";
import work37Below from "@/assets/work-atlas.jpg";
import workAlanMakeup from "@/assets/work-koha.jpg";
import workLongAkhom from "@/assets/work-lumen.jpg";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ØRIONS",
    url: "https://orions.agency",
    description: "A creative agency focused on clear communication, strong art direction, and high-quality film production.",
  },
];

const originals = [
  {
    title: "No Signal",
    desc: "A survival documentary exploring isolation, endurance, and instinct.",
    image: workNoSignal,
  },
  {
    title: "37 Below",
    desc: "An extreme travel documentary on harsh environments and physical limits.",
    image: work37Below,
  },
  {
    title: "Alan Makeup",
    desc: "A documentary series on identity and personal transformation through makeup.",
    image: workAlanMakeup,
  },
  {
    title: "ลงอาคม",
    desc: "A documentary exploring belief, ritual, and the unseen forces people live with.",
    image: workLongAkhom,
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

      {/* ═══ 01 — HERO ═══ */}
      <section id="hero" ref={heroRef} className="h-screen flex items-center justify-center relative overflow-hidden">
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
            className="mt-12"
          >
            <a
              href="#contact"
              className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Start a conversation
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ 02 — ABOUT ═══ */}
      <section id="about" className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> About
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground mb-12">
              We do less — with more intention.
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.15}>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
                In a world of constant output, we believe brands do not need more noise. They need clear direction, thoughtful communication, and work that people can actually feel.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
                Our approach brings together strategic thinking, considered art direction, and disciplined production — all within a small, focused team where every decision is deliberate.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
                We define what needs to be said, shape how it should be expressed, and bring it to life through film and visual production. The result is work that sits between strategy and execution — practical enough to solve communication problems, and crafted enough to create lasting brand value.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-foreground/80 italic">
                We take on a limited number of projects each year. This is by design.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ 03 — WORK ═══ */}
      <section id="work" className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Work
            </p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground mb-4">
              SELECTED WORK.
            </h2>
            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground mb-16 max-w-xl">
              Selected projects and original productions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {originals.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div className="group border border-border hover:border-accent-warm/30 transition-colors duration-300">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-[24px] md:text-[28px] tracking-[0.02em] text-foreground mb-2 group-hover:text-accent-warm transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-muted-foreground">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 mt-12 text-center">
              Additional client work available on request.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 04 — SERVICES ═══ */}
      <section id="services" className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Services
            </p>
          </AnimatedSection>

          {/* Retainer block */}
          <AnimatedSection delay={0.1}>
            <div className="border border-accent-warm/30 bg-accent-warm/[0.03] p-8 md:p-12 mb-16">
              <h3 className="font-display text-[28px] md:text-[36px] tracking-[0.02em] text-accent-warm mb-6">
                RETAINER
              </h3>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground mb-4">
                We work with a small number of clients on an ongoing basis — providing monthly creative support, campaign planning, creative direction, and production oversight.
              </p>
              <p className="font-body text-[14px] leading-[1.7] text-muted-foreground/70">
                Best suited for brands that need continuity, consistency, and a trusted creative partner over the long term.
              </p>
            </div>
          </AnimatedSection>

          {/* Three service stages */}
          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Strategy",
                desc: "Define what your brand should say, who it should speak to, and how it should be understood.",
                items: ["Brand positioning & narrative", "Communication framework", "Campaign direction"],
              },
              {
                num: "02",
                title: "Communication Design",
                desc: "Shape strategy into clear ideas, visual direction, and systems people connect with.",
                items: ["Campaign concepts & creative direction", "Messaging & content systems", "Touchpoint structure"],
              },
              {
                num: "03",
                title: "Film & Production",
                desc: "Execute with attention to detail — from concept to final delivery.",
                items: ["TVC, commercials & branded content", "Documentary-style film", "Photo & video production"],
              },
            ].map((service, i) => (
              <AnimatedSection key={service.num} delay={0.15 + i * 0.08}>
                <div className="border-t border-border py-10 md:py-14 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-12 items-start">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent-warm/40">{service.num}</span>
                  <div>
                    <h3 className="font-display text-[26px] md:text-[32px] tracking-[0.02em] text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">
                      {service.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 md:pt-2">
                    {service.items.map((item) => (
                      <li key={item} className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/60 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent-warm/40 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="border-t border-border pt-10 mt-0">
              <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted-foreground/50 text-center">
                Our process: Define → Develop → Produce
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 05 — CLIENTS ═══ */}
      <section id="clients" className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Clients
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground mb-6">
              We work best with founder-led and culturally driven brands that value clarity, strong visual standards, and long-term brand building.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground/60">
              Especially suited to lifestyle, hospitality, travel, beauty, and culture-led categories.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ 06 — CONTACT ═══ */}
      <section id="contact" className="py-32 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Contact
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground mb-12">
              Start with a conversation.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <a
                href="mailto:hello@orions.agency"
                className="font-mono text-[14px] md:text-[16px] tracking-[0.05em] text-foreground hover:text-accent-warm transition-colors duration-300 block"
              >
                hello@orions.agency
              </a>
              <a
                href="tel:+66923905464"
                className="font-mono text-[14px] md:text-[16px] tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 block"
              >
                092 390 5464
              </a>
              <p className="font-mono text-[14px] md:text-[16px] tracking-[0.05em] text-muted-foreground/60">
                orions.agency
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
