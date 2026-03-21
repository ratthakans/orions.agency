import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const services = [
  {
    title: "Creative Transformation",
    desc: "Open new layers for your business. We find creative opportunities and design new growth paths.",
    tag: "120K – 250K",
    details: {
      what: "A full creative strategy engagement that uncovers new positioning, new markets, and new demand for your brand.",
      includes: [
        "Brand perception audit & stakeholder interviews",
        "Market & competitor landscape analysis",
        "Audience insight mapping & segmentation",
        "Opportunity identification & creative strategy",
        "New positioning framework & narrative",
        "Growth roadmap with clear milestones",
      ],
      who: "Brands feeling stuck, entering new markets, or ready to shift from commodity to premium.",
      timeline: "4–8 weeks",
    },
  },
  {
    title: "Signature Campaign",
    desc: "Turn opportunity into momentum. Big ideas, campaign concepts, storytelling arcs that move people.",
    tag: "200K – 500K",
    details: {
      what: "A flagship creative campaign built around a powerful idea — designed to shift perception and drive demand.",
      includes: [
        "Campaign concept & big idea development",
        "Creative direction & art direction",
        "Storytelling arc & content strategy",
        "Key visual & campaign identity",
        "Launch strategy & rollout plan",
        "Performance framework & KPIs",
      ],
      who: "Brands launching something new, repositioning, or ready for a breakthrough moment.",
      timeline: "6–12 weeks",
    },
  },
  {
    title: "Film / Production",
    desc: "Make ideas feel real. Hero films, branded content, visual storytelling that captures attention.",
    tag: "150K – 500K+",
    details: {
      what: "End-to-end film and content production — from creative treatment to final delivery.",
      includes: [
        "Creative treatment & script development",
        "Direction, cinematography & production",
        "Hero film (30s–3min branded content)",
        "Social cutdowns & platform edits",
        "Post-production, color grading & sound",
        "Delivery in all required formats",
      ],
      who: "Brands that need cinematic content to tell their story at the highest level.",
      timeline: "4–10 weeks",
    },
  },
  {
    title: "Creative Communication",
    desc: "Make impact happen. Communication strategy, channel planning, campaign rollout that delivers results.",
    tag: null,
    details: {
      what: "Strategic communication planning that ensures your creative work reaches the right people at the right time.",
      includes: [
        "Communication strategy & messaging",
        "Channel planning & media mix",
        "Content calendar & editorial planning",
        "Campaign rollout & activation",
        "Influencer & partnership strategy",
        "Reporting & optimization",
      ],
      who: "Brands with strong creative but lacking strategic distribution and communication planning.",
      timeline: "Ongoing or project-based",
    },
  },
];

const retainers = [
  {
    title: "Creative Partner",
    desc: "Your external creative brain. Monthly strategy sessions, idea development, direction refinement. A long-term think tank for your brand.",
    tag: "100K – 150K / month",
    details: {
      what: "An ongoing creative partnership — we become your brand's external creative team and strategic think tank.",
      includes: [
        "Monthly creative strategy sessions",
        "Ongoing idea development & brainstorming",
        "Creative direction & brand guardianship",
        "Campaign concept refinement",
        "Trend & opportunity briefings",
        "Priority access to production slots",
      ],
      who: "Brands that want consistent creative thinking without building a full in-house creative team.",
      timeline: "3-month minimum",
    },
  },
  {
    title: "Content Factory",
    desc: "High-quality content engine. Monthly content sets, platform-ready assets that keep your brand consistent.",
    tag: "80K – 120K / month",
    details: {
      what: "A reliable content production pipeline — delivering platform-ready assets every month.",
      includes: [
        "Monthly content sets (8–16 pieces)",
        "Social media content & stories",
        "Platform-ready assets & templates",
        "Visual consistency & brand compliance",
        "Content calendar management",
        "Performance review & iteration",
      ],
      who: "Brands that need consistent, high-quality content without managing multiple freelancers.",
      timeline: "3-month minimum",
    },
  },
];

const ServiceCard = ({ service, index, prefix }: { service: typeof services[0]; index: number; prefix: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="service-card border-t border-border py-10 md:py-14 group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
        <div className="flex items-center gap-4 md:w-16 shrink-0">
          <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/50">{prefix}</span>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center gap-4">
              <h3 className="font-display text-[28px] md:text-[38px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                {service.title}
              </h3>
              <motion.span
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-accent-warm text-[18px] font-light"
              >
                +
              </motion.span>
            </div>
            {service.tag && (
              <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30 mt-2 md:mt-0">
                {service.tag}
              </span>
            )}
          </div>
          <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">{service.desc}</p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-8 pt-8 border-t border-border/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60 mb-3">What It Is</p>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{service.details.what}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60 mb-3">Best For</p>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{service.details.who}</p>
                      <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40 mt-3">
                        Timeline: {service.details.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60 mb-4">What's Included</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.includes.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="text-accent-warm text-[10px] mt-1.5">✦</span>
                          <span className="font-body text-[13px] leading-[1.6] text-foreground/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

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
                <ServiceCard service={s} index={i} prefix={String(i + 1).padStart(2, "0")} />
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
          <div className="space-y-0">
            {retainers.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <ServiceCard service={s} index={i} prefix={String(i + 5).padStart(2, "0")} />
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
