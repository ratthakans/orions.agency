import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

interface ServiceDetail {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

const services: ServiceDetail[] = [
  {
    num: "00",
    title: "Retainer",
    desc: "We work with a small number of clients on an ongoing basis.",
    deliverables: [
      "Monthly creative and communication support",
      "Campaign and content planning",
      "Ongoing creative direction",
      "Production oversight and execution",
    ],
  },
  {
    num: "01",
    title: "Brand & Communication Strategy",
    desc: "We define what your brand should say and how it should be understood.",
    deliverables: [
      "Brand Positioning",
      "Key Message & Narrative",
      "Campaign Direction",
      "Communication Framework",
    ],
  },
  {
    num: "02",
    title: "Communication Design",
    desc: "We shape strategy into ideas, visual direction, and communication systems.",
    deliverables: [
      "Campaign Concept",
      "Creative Direction",
      "Messaging System",
      "Content Direction",
    ],
  },
  {
    num: "03",
    title: "Film & Production",
    desc: "We produce work with attention to detail — from concept to final execution.",
    deliverables: [
      "TVC / Commercial",
      "Branded Content",
      "Documentary-style Video",
      "Photo & Video Production",
    ],
  },
];

/* ── Expandable Service Card ── */
const ServiceCard = ({ s }: { s: ServiceDetail }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-t border-border group cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-8 md:py-12">
        <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/30 shrink-0">
            {s.num}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-[clamp(24px,4vw,48px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300 mb-2">
              {s.title}
            </h3>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-2xl">
              {s.desc}
            </p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground text-xl font-light shrink-0 ml-4"
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-12 pl-[calc(10px+1rem)] md:pl-[calc(10px+2rem)]">
              <div>
                <SectionLabel>What's Included</SectionLabel>
                <ul className="space-y-2 mt-3">
                  {s.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-warm text-[8px] mt-1.5">✦</span>
                      <span className="font-body text-[13px] text-foreground/70">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Label helper ── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">
    {children}
  </p>
);

/* ══════════════════════════ PAGE ══════════════════════════ */
const ServicesPage2 = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Services — ØRIONS"
        description="Retainer, Brand & Communication Strategy, Communication Design, and Film & Production. A creative agency in Bangkok."
        path="/services"
        keywords="brand strategy, communication design, film production, creative agency bangkok, retainer"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="min-h-[55vh] flex items-end px-4 sm:px-6 md:px-12 pb-12 md:pb-20 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6"
          >
            <span className="text-accent-warm mr-2">✦</span> Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-[clamp(40px,8vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6"
          >
            SERVICES.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-body text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-lg"
          >
            Clear communication, strong art direction, and high-quality film production.
          </motion.p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.05}>
              <ServiceCard s={s} />
            </AnimatedSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* ── Why ØRIONS ── */}
      <section className="px-4 sm:px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-12">
              <span className="text-accent-warm mr-2">✦</span> Why ØRIONS
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Limited projects", desc: "We take on a limited number of projects each year to ensure focus and quality." },
              { title: "Define before we create", desc: "Every piece of work starts with clear direction and intention." },
              { title: "Work that lasts", desc: "We focus on communication that holds attention — not chases it." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border border-border p-8 md:p-10 h-full hover:border-accent-warm/30 transition-colors duration-300">
                  <h3 className="font-display text-[24px] md:text-[28px] tracking-[0.02em] text-foreground mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">✦</span> Ready?
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              LET'S CREATE<br />
              <span className="text-accent-gradient">SOMETHING MEANINGFUL.</span>
            </h2>
            <div className="flex items-center justify-center gap-8 flex-wrap mt-10">
              <Link
                to="/contact"
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Start a project
              </Link>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                View our work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage2;
