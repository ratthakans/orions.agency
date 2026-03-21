import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";

const services = [
  {
    title: "Creative Transformation",
    desc: "Open new layers for your business. We find creative opportunities and design new growth paths.",
    details: ["Brand perception audit", "Market opportunity mapping", "Creative strategy", "Growth roadmap"],
    tag: "120K – 250K",
  },
  {
    title: "Signature Campaign",
    desc: "Turn opportunity into momentum. Big ideas, campaign concepts, storytelling arcs that move people.",
    details: ["Campaign concept", "Creative direction", "Storytelling arc", "Launch strategy"],
    tag: "200K – 500K",
  },
  {
    title: "Film / Production",
    desc: "Make ideas feel real. Hero films, branded content, visual storytelling that captures attention.",
    details: ["Creative treatment", "Direction & production", "Hero film & branded content", "Post-production"],
    tag: "150K – 500K+",
  },
  {
    title: "Creative Communication",
    desc: "Make impact happen. Communication strategy, channel planning, campaign rollout that delivers results.",
    details: ["Communication strategy", "Channel planning", "Content creation", "Campaign rollout"],
    tag: null,
  },
];

const retainers = [
  {
    title: "Creative Partner",
    desc: "Your external creative brain. Monthly strategy sessions, idea development, direction refinement. A long-term think tank for your brand.",
    details: ["Monthly strategy sessions", "Idea development", "Creative direction", "Brand guardian"],
    tag: "100K – 150K / month",
  },
  {
    title: "Content Factory",
    desc: "High-quality content engine. Monthly content sets, platform-ready assets that keep your brand consistent.",
    details: ["Monthly content sets", "Platform-ready assets", "Social content", "Visual consistency"],
    tag: "80K – 120K / month",
  },
];

const ServicesPage2 = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Services — ØRIONS"
        description="Creative transformation, campaigns, film production, and strategic communication. We build brands that people notice."
        path="/services"
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
            <span className="text-accent-warm mr-2">✦</span> What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground"
          >
            SERVICES.
          </motion.h1>
        </div>
      </section>

      {/* Core Services */}
      <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-12">Core Services</p>
          </AnimatedSection>
          <div className="space-y-0">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="service-card border-t border-border py-10 md:py-14 group cursor-default">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <div className="flex items-center gap-4 md:w-16 shrink-0">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/50">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="font-display text-[28px] md:text-[38px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                          {s.title}
                        </h3>
                        {s.tag && (
                          <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30 mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {s.tag}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-[15px] leading-[1.7] text-muted-foreground mb-6 max-w-2xl">{s.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        {s.details.map((d) => (
                          <span key={d} className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/50 border border-border/50 px-3 py-1.5">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer Services */}
      <section className="px-4 sm:px-6 md:px-12 pb-24 md:pb-40 border-t border-border pt-24 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-12">Retainer Services</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {retainers.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="service-card bg-background p-8 md:p-12 group h-full">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40 block mb-6">{String(i + 5).padStart(2, "0")}</span>
                  <h3 className="font-display text-[28px] md:text-[36px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.details.map((d) => (
                      <span key={d} className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/50 border border-border/50 px-3 py-1.5">
                        {d}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {s.tag}
                  </span>
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

export default ServicesPage2;
