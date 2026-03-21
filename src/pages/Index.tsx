import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ØRIONS",
    url: "https://orions.agency",
    description: "ØRIONS is a Creative Growth Partner that unlocks new growth by changing how people perceive brands.",
  },
];

const Index = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="ØRIONS — Creative Growth Partner | Bangkok"
        description="We change perception. We unlock growth. A creative agency that unlocks new growth through story-driven creativity."
        path="/"
        keywords="creative agency bangkok, creative growth partner, brand perception, brand strategy, creative transformation"
        schema={homeSchema}
      />
      <Navbar />

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="text-center max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-10"
          >
            Creative Growth Partner · Bangkok
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4"
          >
            We change perception.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-display text-[clamp(40px,8vw,120px)] leading-[0.9] tracking-[0.01em] text-accent-gradient mb-10"
          >
            We unlock growth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-12"
          >
            A creative agency that unlocks new growth through story-driven creativity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <button
              onClick={scrollToContact}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Let's Talk
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — THE PROBLEM (SCQA)
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-16">
              <span className="text-accent-warm mr-2">✦</span> The Real Problem
            </p>
          </AnimatedSection>

          <div className="space-y-24 md:space-y-32">
            <AnimatedSection>
              <p className="font-body text-[clamp(20px,3vw,32px)] leading-[1.5] text-foreground/80">
                Most brands today are doing more marketing than ever. More content. More ads. More campaigns.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p className="font-body text-[clamp(20px,3vw,32px)] leading-[1.5] text-foreground/80">
                But growth doesn't follow. People see the brand.{" "}
                <span className="text-muted-foreground">But they don't feel anything.</span>
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p className="font-body text-[clamp(20px,3vw,32px)] leading-[1.5] text-muted-foreground italic">
                Is this a marketing problem? Or is it a perception problem?
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="border-l-2 border-accent-warm pl-8 md:pl-12">
                <p className="font-body text-[clamp(20px,3vw,32px)] leading-[1.5] text-accent-gradient">
                  We don't add more marketing. We change how people see your brand.
                </p>
                <p className="font-body text-[clamp(18px,2.5vw,26px)] leading-[1.5] text-foreground/60 mt-4">
                  And when perception shifts — growth follows.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — CREATIVE TRANSFORMATION
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> What We Do
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,6vw,90px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4">
            CREATIVE TRANSFORMATION.
          </TextReveal>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-[18px] md:text-[22px] leading-[1.6] text-muted-foreground max-w-2xl mb-6">
              We don't rebrand. We reframe.
            </p>
            <p className="font-body text-[16px] leading-[1.7] text-muted-foreground/70 max-w-2xl mb-20">
              We change the perception of your brand to unlock new markets, new demand, and new positioning.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { step: "01", title: "Diagnose", desc: "Analyze current perception — how the market actually sees you." },
              { step: "02", title: "Reframe", desc: "Define a new angle — shift how people think about your brand." },
              { step: "03", title: "Opportunity", desc: "Find new markets and demand — open doors that didn't exist." },
              { step: "04", title: "Narrative", desc: "Build the story that drives growth — make it unforgettable." },
            ].map((item) => (
              <AnimatedSection key={item.step} delay={Number(item.step) * 0.1}>
                <div className="bg-background p-8 md:p-10 group hover:bg-muted/20 transition-all duration-500 h-full">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/50 block mb-6">{item.step}</span>
                  <h3 className="font-display text-[28px] md:text-[32px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — SERVICES
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> What We Offer
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,6vw,90px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
            SERVICES.
          </TextReveal>

          {/* Core Services */}
          <div className="mb-20">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-8">Core Services</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {[
                {
                  title: "Creative Transformation",
                  desc: "Open new layers for your business. We find creative opportunities and design new growth paths.",
                  tag: "120K – 250K",
                },
                {
                  title: "Signature Campaign",
                  desc: "Turn opportunity into momentum. Big ideas, campaign concepts, storytelling arcs.",
                  tag: "200K – 500K",
                },
                {
                  title: "Film / Production",
                  desc: "Make ideas feel real. Hero films, branded content, visual storytelling.",
                  tag: "150K – 500K+",
                },
                {
                  title: "Creative Communication",
                  desc: "Make impact happen. Communication strategy, channel planning, campaign rollout.",
                  tag: null,
                },
              ].map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 0.08}>
                  <div className="bg-background p-8 md:p-10 group hover:bg-muted/20 transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40">{String(i + 1).padStart(2, "0")}</span>
                      {s.tag && (
                        <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-[26px] md:text-[32px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mt-auto">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Retainer Services */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-8">Retainer Services</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {[
                {
                  title: "Creative Partner",
                  desc: "Your external creative brain. Monthly strategy sessions, idea development, direction refinement.",
                  tag: "100K – 150K / month",
                },
                {
                  title: "Content Factory",
                  desc: "High-quality content engine. Monthly content sets, platform-ready assets.",
                  tag: "80K – 120K / month",
                },
              ].map((s, i) => (
                <AnimatedSection key={s.title} delay={i * 0.08}>
                  <div className="bg-background p-8 md:p-10 group hover:bg-muted/20 transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40">{String(i + 5).padStart(2, "0")}</span>
                      <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-[26px] md:text-[32px] tracking-[0.02em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mt-auto">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — HOW WE WORK
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> How We Create Growth
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,6vw,90px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
            OUR PROCESS.
          </TextReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
              {[
                { num: "I", title: "See Differently", desc: "See the brand from a new angle" },
                { num: "II", title: "Reframe Perception", desc: "Change how people see the brand" },
                { num: "III", title: "Make It Real", desc: "Create something people can feel" },
                { num: "IV", title: "Scale Impact", desc: "Expand the result into growth" },
              ].map((phase, i) => (
                <AnimatedSection key={phase.num} delay={i * 0.12}>
                  <div className="relative text-center lg:px-6">
                    {/* Dot */}
                    <div className="hidden lg:flex w-3 h-3 bg-accent-warm mx-auto mb-8 relative z-10" />
                    <span className="font-mono text-[11px] tracking-[0.2em] text-accent-warm/60 block mb-4">{phase.num}</span>
                    <h3 className="font-display text-[24px] md:text-[28px] tracking-[0.02em] text-foreground mb-3">{phase.title}</h3>
                    <p className="font-body text-[14px] leading-[1.6] text-muted-foreground">{phase.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — PHILOSOPHY
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-16 text-center">
              <span className="text-accent-warm mr-2">✦</span> What We Believe
            </p>
          </AnimatedSection>

          <div className="space-y-20 md:space-y-28">
            <AnimatedSection>
              <blockquote className="text-center">
                <p className="font-display text-[clamp(28px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground">
                  "Growth starts when perception shifts."
                </p>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection>
              <blockquote className="text-right max-w-3xl ml-auto">
                <p className="font-display text-[clamp(24px,4vw,52px)] leading-[0.95] tracking-[0.01em] text-foreground/80">
                  "People don't need more content. They need something worth noticing."
                </p>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection>
              <blockquote className="text-left max-w-3xl">
                <p className="font-display text-[clamp(24px,4vw,52px)] leading-[0.95] tracking-[0.01em] text-foreground/80">
                  "Content without story is noise. Story with execution is impact."
                </p>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection>
              <div className="border-l-2 border-accent-warm pl-8 md:pl-12 max-w-2xl mx-auto">
                <p className="font-body text-[18px] md:text-[22px] leading-[1.6] text-accent-gradient italic">
                  "Most brands are not boring. They're just seen the wrong way."
                </p>
                <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/50 mt-4">— Founder's POV</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — WHO WE WORK WITH
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Who We Work With
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,6vw,90px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
            OUR CLIENTS.
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <AnimatedSection>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-8">Ideal Clients</p>
                <ul className="space-y-6">
                  {[
                    "Brands that want to unlock new growth",
                    "Brands that want to stand out from the market",
                    "Brands that don't want to compete on price",
                    "Teams open to creative thinking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 bg-accent-warm mt-2.5 shrink-0" />
                      <span className="font-body text-[15px] leading-[1.7] text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-8">Industry Focus</p>
                <ul className="space-y-6">
                  {[
                    "Tech / Startup",
                    "Hospitality",
                    "Lifestyle / Experience",
                    "Entertainment / Event",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 bg-muted-foreground/40 mt-2.5 shrink-0" />
                      <span className="font-body text-[15px] leading-[1.7] text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — VALUE PROPOSITION
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-16">
              <span className="text-accent-warm mr-2">✦</span> What We Actually Sell
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <p className="font-body text-[clamp(18px,3vw,28px)] leading-[1.5] text-muted-foreground/40 line-through decoration-muted-foreground/20 mb-4">
              We don't sell content. We don't sell videos.
            </p>
            <p className="font-display text-[clamp(36px,6vw,90px)] leading-[0.9] tracking-[0.01em] text-accent-gradient mb-16">
              WE SELL NEW GROWTH DIRECTION.
            </p>
          </AnimatedSection>

          {/* Value chain */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-20">
              {["New Perception", "New Story", "New Demand", "Revenue"].map((step, i) => (
                <div key={step} className="flex items-center gap-4 md:gap-6">
                  <span className="font-mono text-[12px] md:text-[14px] tracking-[0.1em] uppercase text-foreground/80 border border-border px-4 py-2.5">
                    {step}
                  </span>
                  {i < 3 && <span className="text-accent-warm text-lg">→</span>}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-display text-[clamp(28px,5vw,64px)] leading-[0.95] tracking-[0.01em] text-foreground">
              We make brands more interesting — and growth follows.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 — CONTACT
      ═══════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-48 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Let's Talk
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,6vw,90px)] leading-[0.9] tracking-[0.01em] text-foreground mb-8">
            LET'S TALK.
          </TextReveal>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground mb-16">
              If you want your brand to be seen differently, we should talk.
            </p>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection>
              <div className="py-16">
                <p className="font-display text-[32px] text-accent-gradient mb-4">THANK YOU.</p>
                <p className="font-body text-[16px] text-muted-foreground">We'll be in touch soon.</p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-lg mx-auto">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-[15px] text-foreground focus:outline-none focus:border-accent-warm transition-colors duration-300 placeholder:text-muted-foreground/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-[15px] text-foreground focus:outline-none focus:border-accent-warm transition-colors duration-300 placeholder:text-muted-foreground/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-[15px] text-foreground focus:outline-none focus:border-accent-warm transition-colors duration-300 resize-none placeholder:text-muted-foreground/30"
                    placeholder="Tell us about your project"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300 w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.4}>
            <div className="mt-16 flex items-center justify-center gap-8">
              <a
                href="mailto:hello@orions.agency"
                className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                hello@orions.agency
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6">
              {["Facebook", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40 hover:text-accent-warm transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
