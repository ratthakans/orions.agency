import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="About | ØRIONS"
        description="We do less — with more intention. A creative agency focused on clear communication, strong art direction, and high-quality film production."
        path="/about"
        keywords="creative agency bangkok, about orions, art direction, film production team"
      />
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-end px-4 sm:px-6 md:px-12 pt-24 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto w-full">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> About
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
                WE DO LESS —<br />
                <span className="text-accent-gradient">WITH MORE INTENTION.</span>
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Body */}
        <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-3xl mx-auto space-y-10">
            <AnimatedSection>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.9] text-muted-foreground">
                In a world of constant output, we believe brands do not need more noise. They need clear direction, thoughtful communication, and work that people can actually feel.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.9] text-muted-foreground">
                Our approach brings together strategic thinking, considered art direction, and disciplined production — all within a small, focused team where every decision is deliberate.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.9] text-muted-foreground">
                We define what needs to be said, shape how it should be expressed, and bring it to life through film and visual production. The result is work that sits between strategy and execution — practical enough to solve communication problems, and crafted enough to create lasting brand value.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="font-body text-[16px] md:text-[17px] leading-[1.9] text-foreground/80 italic">
                We take on a limited number of projects each year. This is by design.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Clients */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">✦</span> Clients
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <p className="font-body text-[16px] md:text-[18px] leading-[1.9] text-muted-foreground mb-6">
                We work best with founder-led and culturally driven brands that value clarity, strong visual standards, and long-term brand building.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground/60">
                Especially suited to lifestyle, hospitality, travel, beauty, and culture-led categories.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 border-t border-border text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              START WITH<br />
              <span className="text-accent-gradient">A CONVERSATION.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              <Link to="/contact" className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                Get in Touch
              </Link>
              <Link to="/work" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                View Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default AboutPage;
