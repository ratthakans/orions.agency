import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const services = [
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
];

const ServicesPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Services | ØRIONS"
        description="Strategy, communication design, and film production. We define what needs to be said, shape how it should be expressed, and bring it to life."
        path="/services"
        keywords="brand strategy, communication design, film production, creative retainer, art direction bangkok"
      />
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-end px-4 sm:px-6 md:px-12 pt-24 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto w-full">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Services
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground">
                WHAT WE<br />
                <span className="text-accent-gradient">DO.</span>
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Retainer Block */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="border border-accent-warm/30 bg-accent-warm/[0.03] p-8 md:p-12">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">Ongoing Partnership</p>
                <h2 className="font-display text-[32px] md:text-[42px] tracking-[0.02em] text-accent-warm mb-6">
                  RETAINER
                </h2>
                <p className="font-body text-[15px] md:text-[16px] leading-[1.9] text-muted-foreground mb-4">
                  We work with a small number of clients on an ongoing basis — providing monthly creative support, campaign planning, creative direction, and production oversight.
                </p>
                <p className="font-body text-[14px] leading-[1.7] text-muted-foreground/70">
                  Best suited for brands that need continuity, consistency, and a trusted creative partner over the long term.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Service Stages */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            {services.map((service, i) => (
              <AnimatedSection key={service.num} delay={i * 0.08}>
                <div className="border-t border-border py-12 md:py-16 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12 items-start">
                  <span className="font-mono text-[12px] tracking-[0.2em] text-accent-warm/40">{service.num}</span>
                  <div>
                    <h3 className="font-display text-[30px] md:text-[38px] tracking-[0.02em] text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
                      {service.desc}
                    </p>
                  </div>
                  <ul className="space-y-3 md:pt-3">
                    {service.items.map((item) => (
                      <li key={item} className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/60 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-accent-warm/40 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.3}>
              <div className="border-t border-border pt-12">
                <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted-foreground/50 text-center">
                  Our process: Define → Develop → Produce
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 border-t border-border text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              READY TO<br />
              <span className="text-accent-gradient">START?</span>
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

export default ServicesPage;
