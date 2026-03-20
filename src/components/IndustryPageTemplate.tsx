import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartProjectDialog from "@/components/StartProjectDialog";
import AnimatedSection, { AnimatedChild } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";

interface Phase {
  num: string;
  title: string;
  subtitle: string;
  items: string[];
  deliverable: string;
  deliverableDesc: string;
}

interface Tier {
  label: string;
  scope: string;
  price: string;
  detail: string;
  note: string;
  featured?: boolean;
  isMonthly?: boolean;
}

interface Stat {
  stat: string;
  label: string;
}

interface DemandGap {
  num: string;
  title: string;
  desc: string;
}

interface SystemBlock {
  num: string;
  title: string;
  desc: string;
  output: string;
}

interface Segment {
  title: string;
  tag: string;
  desc: string;
  metric: string;
}

interface InsightBlock {
  label: string;
  headline: string;
  desc: string;
}

interface ImpactItem {
  result: string;
  desc: string;
}

interface RetainerInfo {
  title: string;
  price: string;
  desc: string;
  note: string;
}

export interface IndustryPageData {
  seo: { title: string; description: string; path: string };
  hero: {
    image: string;
    imageAlt: string;
    label: string;
    headline: string;
    desc: string;
  };
  reality: {
    headline: string;
    stats: Stat[];
  };
  breakImage?: { src: string; alt: string };
  demandGap: {
    headline: string;
    items: DemandGap[];
  };
  system: {
    headline: string;
    desc: string;
    blocks: SystemBlock[];
    engineLabel: string;
  };
  insight: InsightBlock[];
  segments: {
    headline: string;
    items: Segment[];
  };
  secondBreakImage?: { src: string; alt: string };
  phases: Phase[];
  phasesHeadline: string;
  impact: {
    headline: string;
    items: ImpactItem[];
  };
  tiers: Tier[];
  retainer?: RetainerInfo;
  closing: {
    image?: string;
    headline: string;
  };
}

const IndustryPageTemplate = ({ data }: { data: IndustryPageData }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <SEO title={data.seo.title} description={data.seo.description} path={data.seo.path} />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={data.hero.image}
            alt={data.hero.imageAlt}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
          <Link to="/package" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent-warm transition-colors mb-10">
            <ArrowLeft className="w-3 h-3" /> All Industries
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-5"
          >
            {data.hero.label}
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(32px,6.5vw,100px)] leading-[0.85] tracking-[-0.01em] text-foreground max-w-5xl">
            {data.hero.headline}
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-[16px] text-muted-foreground max-w-[480px] leading-[1.7] mt-10"
          >
            {data.hero.desc}
          </motion.p>
        </div>
      </section>

      {/* ── The Reality ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The Reality</p>
            <h2 className="font-display text-[clamp(28px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              {data.reality.headline}
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-border">
            {data.reality.stats.map((s, i) => (
              <AnimatedChild key={s.label}>
                <div className={`py-12 ${i < 2 ? "sm:border-r border-border" : ""}`}>
                  <div className={i > 0 ? "sm:pl-12" : ""}>
                    <p className="font-display text-[clamp(40px,6vw,72px)] leading-[0.9] text-accent-warm tracking-[-0.02em]">{s.stat}</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-4 max-w-[220px]">{s.label}</p>
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Break Image ── */}
      {data.breakImage && (
        <section className="w-full">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={data.breakImage.src} alt={data.breakImage.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* ── Demand Gap ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The Demand Gap</p>
            <h2 className="font-display text-[clamp(28px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              {data.demandGap.headline}
            </h2>
          </AnimatedSection>
          <div className="border-t border-border">
            {data.demandGap.items.map((g, i) => (
              <AnimatedSection key={g.num} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[60px_1fr_1.2fr] gap-4 md:gap-8 py-8 md:py-10 border-b border-border items-baseline group">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{g.num}</span>
                  <h3 className="font-display text-[clamp(18px,2.5vw,32px)] leading-[1] text-foreground group-hover:text-accent-warm transition-colors duration-300">{g.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7] col-start-2 md:col-start-3">{g.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demand Maker System ── */}
      <section className="bg-secondary">
        <div className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-20">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Demand Maker System</p>
              <h2 className="font-display text-[clamp(28px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
                {data.system.headline}
              </h2>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
                {data.system.desc}
              </p>
            </AnimatedSection>

            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {data.system.blocks.map((item) => (
                <AnimatedChild key={item.num}>
                  <div className="bg-background p-8 md:p-12 h-full flex flex-col group">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-[32px] leading-[1] text-accent-warm/20 group-hover:text-accent-warm transition-colors duration-500">{item.num}</span>
                      <h3 className="font-display text-[20px] leading-[1.1] text-foreground">{item.title}</h3>
                    </div>
                    <p className="font-body text-[14px] text-muted-foreground leading-[1.7] flex-1">{item.desc}</p>
                    <div className="mt-8 pt-5 border-t border-border">
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm">{item.output}</p>
                    </div>
                  </div>
                </AnimatedChild>
              ))}
            </AnimatedSection>

            <AnimatedSection className="mt-px">
              <motion.div
                className="bg-accent-warm py-6 md:py-8 px-8 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm-foreground">Together, these four layers form</p>
                <h3 className="font-display text-[clamp(20px,2.5vw,36px)] leading-[1] text-accent-warm-foreground">
                  {data.system.engineLabel} →
                </h3>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Insight + Positioning ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {data.insight.map((block, i) => (
              <AnimatedSection key={block.label} delay={i * 0.15}>
                <div className={i === 0
                  ? "md:pr-16 md:border-r border-border pb-16 md:pb-0"
                  : "md:pl-16 pt-16 md:pt-0 border-t md:border-t-0 border-border"
                }>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-6">{block.label}</p>
                  <h2 className="font-display text-[clamp(24px,3.5vw,48px)] leading-[0.92] text-foreground mb-6">
                    {block.headline}
                  </h2>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">{block.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Segments ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Target Segments</p>
            <h2 className="font-display text-[clamp(28px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              {data.segments.headline}
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {data.segments.items.map((seg) => (
              <AnimatedChild key={seg.title}>
                <div className="bg-background p-8 md:p-10 h-full flex flex-col group hover:bg-secondary transition-colors duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm">{seg.tag}</p>
                    <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-foreground/25">{seg.metric}</p>
                  </div>
                  <h3 className="font-display text-[24px] leading-[1] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-300">{seg.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7] flex-1">{seg.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Second Break Image ── */}
      {data.secondBreakImage && (
        <section className="w-full">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={data.secondBreakImage.src} alt={data.secondBreakImage.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* ── 4 Phases ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20 md:mb-28">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The System</p>
            <h2 className="font-display text-[clamp(28px,5.5vw,80px)] leading-[0.88] text-foreground">
              {data.phasesHeadline}
            </h2>
          </AnimatedSection>
          <div className="space-y-0">
            {data.phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1.2fr] gap-6 md:gap-10 py-12 md:py-16 ${i < data.phases.length - 1 ? "border-b border-border" : ""}`}>
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm block mb-2">{phase.num}</span>
                    <h3 className="font-display text-[clamp(20px,2.5vw,32px)] leading-[1] text-foreground">{phase.title}</h3>
                  </div>
                  <div>
                    <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-5">{phase.subtitle}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="font-body text-[13px] text-muted-foreground/70 flex items-start gap-2">
                          <span className="w-1 h-1 bg-accent-warm mt-[7px] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary p-6 md:p-8">
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">Deliverable</p>
                    <h4 className="font-display text-[20px] leading-[1.1] text-foreground mb-3">{phase.deliverable}</h4>
                    <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">{phase.deliverableDesc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Impact ── */}
      <section className="bg-foreground">
        <div className="px-4 sm:px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-12">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Business Impact</p>
              <h2 className="font-display text-[clamp(24px,3.5vw,48px)] leading-[0.92] text-background">
                {data.impact.headline}
              </h2>
            </AnimatedSection>
            <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {data.impact.items.map((item, i) => (
                <AnimatedChild key={item.result}>
                  <div className={`py-8 md:py-10 ${i < 3 ? "md:pr-8 md:border-r border-background/10" : ""} ${i > 0 ? "md:pl-8" : ""}`}>
                    <motion.div
                      className="w-10 h-[2px] bg-accent-warm mb-6"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      style={{ originX: 0 }}
                    />
                    <h3 className="font-display text-[24px] leading-[1] text-background mb-3">{item.result}</h3>
                    <p className="font-body text-[13px] text-background/50 leading-[1.6]">{item.desc}</p>
                  </div>
                </AnimatedChild>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Investment</p>
            <h2 className="font-display text-[clamp(28px,5vw,64px)] leading-[0.92] text-foreground">
              Choose the depth<br />that fits your goals.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {data.tiers.map((tier) => (
              <AnimatedChild key={tier.label}>
                <div className={`p-8 md:p-10 h-full flex flex-col justify-between ${tier.featured ? "bg-accent-warm" : "bg-background"}`}>
                  <div>
                    <p className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-6 ${tier.featured ? "text-accent-warm-foreground/60" : "text-accent-warm"}`}>{tier.label}</p>
                    <h3 className={`font-display text-[22px] leading-[1] mb-2 ${tier.featured ? "text-accent-warm-foreground" : "text-foreground"}`}>{tier.scope}</h3>
                    <p className={`font-display text-[clamp(28px,4vw,48px)] leading-[0.9] mb-8 tracking-[-0.02em] ${tier.featured ? "text-accent-warm-foreground" : "text-foreground"}`}>
                      ฿{tier.price}{tier.isMonthly ? <span className="text-[16px] opacity-60"> /mo</span> : ""}
                    </p>
                    <p className={`font-body text-[14px] leading-[1.7] mb-8 ${tier.featured ? "text-accent-warm-foreground/70" : "text-muted-foreground"}`}>{tier.detail}</p>
                  </div>
                  <p className={`font-body text-[13px] italic ${tier.featured ? "text-accent-warm-foreground/40" : "text-muted-foreground/40"}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          {/* Retainer */}
          {data.retainer && (
            <AnimatedSection className="mt-px">
              <div className="bg-secondary p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-start">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Monthly Retainer</p>
                    <h3 className="font-display text-[clamp(24px,3vw,40px)] leading-[0.92] text-foreground mb-3">{data.retainer.title}</h3>
                    <p className="font-display text-[clamp(20px,3vw,36px)] leading-[1] text-accent-warm">
                      ฿{data.retainer.price}<span className="text-[16px] text-muted-foreground ml-1">/mo</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-4">{data.retainer.desc}</p>
                    <p className="font-body text-[13px] text-muted-foreground/40 italic">{data.retainer.note}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {data.closing.image ? (
          <div className="absolute inset-0">
            <img src={data.closing.image} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-background/75" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-secondary" />
        )}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 py-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-8">Let's Talk</p>
            <h2 className="font-display text-[clamp(32px,6.5vw,96px)] leading-[0.85] text-foreground max-w-4xl mb-10">
              {data.closing.headline}
            </h2>
            <motion.button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[12px] tracking-[0.15em] uppercase text-accent-warm-foreground bg-accent-warm px-10 py-4 hover:brightness-110 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              Start a Project →
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default IndustryPageTemplate;
