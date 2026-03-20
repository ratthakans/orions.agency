import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartProjectDialog from "@/components/StartProjectDialog";
import AnimatedSection, { AnimatedChild } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";
import heroImg from "@/assets/agency-hero.jpg";

/* ── Typewriter ── */
const rotatingLines = [
  "STRONGER STORIES.",
  "BETTER CAMPAIGNS.",
  "REAL IMPACT.",
  "IDEAS THAT WORK.",
];

const Typewriter = memo(() => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const phrase = rotatingLines[idx];

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === phrase) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((p) => (p + 1) % rotatingLines.length);
    } else if (deleting) {
      t = setTimeout(() => setText(phrase.slice(0, text.length - 1)), 25);
    } else {
      t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 55);
    }
    return () => clearTimeout(t);
  }, [text, deleting, phrase]);

  return (
    <span className="text-accent-gradient block min-h-[1.1em]">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.8em] bg-accent-warm ml-1 align-baseline relative top-[0.05em]"
      />
    </span>
  );
});
Typewriter.displayName = "Typewriter";

/* ── Data ── */
const problems = [
  { num: "01", title: "No clear idea", desc: "Brands look the same." },
  { num: "02", title: "Content without impact", desc: "Looks good, but not memorable." },
  { num: "03", title: "Weak campaigns", desc: "Launch and disappear." },
  { num: "04", title: "Unclear communication", desc: "People don't understand." },
];

const process = [
  { num: "01", title: "Insight", desc: "Understand people and context." },
  { num: "02", title: "Idea", desc: "Create a strong creative concept." },
  { num: "03", title: "Campaign", desc: "Turn ideas into experiences." },
  { num: "04", title: "Content", desc: "Bring ideas to life." },
];

const services = [
  {
    title: "Creative Direction",
    desc: "Define your brand story and positioning.",
    items: ["Positioning", "Narrative", "Creative Direction"],
  },
  {
    title: "Campaign Development",
    desc: "Turn ideas into strong campaigns.",
    items: ["Campaign Concept", "Creative Idea", "Communication Structure"],
    featured: true,
  },
  {
    title: "Content Production",
    desc: "Bring ideas to life through execution.",
    items: ["Video", "Visual", "Campaign Assets"],
  },
  {
    title: "Creative Retainer",
    desc: "Keep your brand consistent and impactful.",
    items: ["Ongoing Creative Direction", "Campaign Extension", "Content Guidance"],
  },
];

const tiers = [
  {
    label: "CREATIVE DIRECTION",
    scope: "Phase 1",
    price: "60,000 – 100,000",
    detail: "Positioning, narrative strategy, and creative direction",
  },
  {
    label: "CAMPAIGN DEVELOPMENT",
    scope: "Phase 1–3",
    price: "200,000 – 400,000",
    detail: "Full campaign concept, creative idea, and communication structure",
    featured: true,
  },
  {
    label: "CREATIVE RETAINER",
    scope: "Ongoing",
    price: "80,000 – 150,000 / mo",
    detail: "Ongoing creative direction, campaign extension, and content guidance",
  },
];

const industries = [
  { name: "Tech", impact: "Product adoption" },
  { name: "Hospitality", impact: "Booking demand" },
  { name: "Golf", impact: "Lifestyle demand" },
  { name: "Concert / Music", impact: "Hype and ticket demand" },
];

const selectedWork = [
  { name: "Northwind Electric", idea: "Make clean energy feel inevitable.", execution: "Cinematic brand film + campaign system", impact: "3x brand awareness, 40% conversion lift" },
  { name: "Atlas Property Group", idea: "Luxury isn't about price. It's about perspective.", execution: "Brand documentary + narrative redesign", impact: "Premium positioning, 2x qualified leads" },
  { name: "Koha Culture Studio", idea: "Culture worth preserving, stories worth telling.", execution: "Brand story video + content system", impact: "Community growth 5x, media coverage" },
];

/* ── Page ── */
const AgencyPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Idea-Driven Creative Agency | ØRIONS"
        description="ØRIONS is an idea-driven creative agency. We create ideas, stories, and campaigns that make people care, remember, and act."
        path="/agency"
      />
      <Navbar />

      {/* ─── 1 · HERO ─── */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 pb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-8"
          >
            Idea-Driven Creative Agency
          </motion.p>

          <h1 className="font-display text-[clamp(40px,8vw,120px)] leading-[0.88] tracking-[0.01em] text-foreground mb-4">
            A CREATIVE AGENCY
            <br />
            <span className="text-muted-foreground">THAT TURNS IDEAS INTO</span>
            <br />
            <span className="text-accent-warm">DEMAND.</span>
          </h1>

          <div className="font-display text-[clamp(28px,5vw,64px)] leading-[0.9] tracking-[0.01em] mt-6 mb-10">
            <Typewriter />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground max-w-xl mb-12"
          >
            We create ideas, stories, and campaigns
            <br className="hidden md:block" />
            that make people care, remember, and act.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase bg-foreground text-background px-8 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Work With Us
            </button>
            <Link
              to="/work"
              className="font-mono text-[11px] tracking-[0.12em] uppercase border border-border text-foreground px-8 py-3.5 hover:border-accent-warm hover:text-accent-warm transition-all duration-300"
            >
              View Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 2 · ABOUT / WHAT WE DO ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">✦</span> What We Are
              </p>
            </AnimatedSection>
            <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-8">
              WE ARE NOT YOUR TYPICAL AGENCY.
            </TextReveal>
          </div>
          <div className="flex flex-col justify-end">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6 font-body text-[16px] leading-[1.8] text-muted-foreground">
                <p>We are not a production house.<br />We are not a social media agency.<br />We are an idea-driven creative agency.</p>
                <p>We create ideas first,<br />then turn them into campaigns that work.</p>
                <div className="pt-4 space-y-3">
                  <p className="font-body text-foreground/80">We help brands:</p>
                  {["Clarify their story", "Build strong campaigns", "Create content that matters", "Drive real impact"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-accent-warm shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 3 · PROBLEM ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">◎</span> The Problem
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20 max-w-3xl">
            WHY MOST BRANDS DON'T STAND OUT.
          </TextReveal>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {problems.map((p) => (
              <AnimatedChild key={p.num}>
                <div className="border-t border-border pt-6">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-3">{p.num}</span>
                  <h3 className="font-display text-[clamp(24px,3vw,36px)] tracking-[0.02em] text-foreground mb-2">{p.title}</h3>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">{p.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-20 border-t border-border pt-10">
              <p className="font-body text-[18px] md:text-[20px] leading-[1.6] text-foreground/80 max-w-lg">
                It's not a content problem.<br />
                <span className="text-accent-warm">It's an idea problem.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 4 · PHILOSOPHY ─── */}
      <section className="py-32 md:py-48 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <TextReveal className="font-display text-[clamp(40px,7vw,100px)] leading-[0.88] tracking-[0.01em] text-foreground mb-10">
            PEOPLE DON'T REMEMBER CONTENT.
          </TextReveal>
          <TextReveal className="font-display text-[clamp(40px,7vw,100px)] leading-[0.88] tracking-[0.01em] text-accent-warm mb-12">
            THEY REMEMBER IDEAS.
          </TextReveal>
          <AnimatedSection delay={0.3}>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground max-w-xl mx-auto">
              Great brands don't just create more content.<br />
              They create better ideas.<br /><br />
              At ØRIONS, everything starts with the idea.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 5 · PROCESS ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">△</span> How We Work
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20 max-w-3xl">
            FROM INSIGHT TO IMPACT.
          </TextReveal>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <AnimatedChild key={step.num}>
                <div className="border-t border-border pt-8 group">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-accent-warm block mb-4">{step.num}</span>
                  <h3 className="font-display text-[28px] md:text-[32px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">{step.title}</h3>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">{step.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 6 · SERVICES ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> Services
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20 max-w-3xl">
            WHAT WE DO.
          </TextReveal>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <AnimatedChild key={s.title}>
                <div className={`border ${s.featured ? "border-accent-warm/30 bg-accent-warm/[0.03]" : "border-border"} p-8 md:p-10 group hover:border-accent-warm/30 transition-colors duration-500`}>
                  {s.featured && (
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4 block">★ Most Popular</span>
                  )}
                  <h3 className="font-display text-[28px] md:text-[32px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">{s.title}</h3>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-6">{s.desc}</p>
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 mb-3">What you get</p>
                    {s.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-accent-warm shrink-0" />
                        <span className="font-body text-[14px] text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 7 · PACKAGES ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">◎</span> Pricing
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20 max-w-3xl">
            SIMPLE, CLEAR ENGAGEMENT.
          </TextReveal>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <AnimatedChild key={tier.label}>
                <div className={`border ${tier.featured ? "border-accent-warm/40 bg-accent-warm/[0.03]" : "border-border"} p-8 md:p-10 flex flex-col h-full`}>
                  {tier.featured && (
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4 block">★ Recommended</span>
                  )}
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 mb-2">{tier.scope}</p>
                  <h3 className="font-display text-[24px] md:text-[28px] tracking-[0.02em] text-foreground mb-4">{tier.label}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7] mb-8 flex-1">{tier.detail}</p>
                  <div className="border-t border-border pt-6">
                    <p className="font-display text-[20px] md:text-[24px] text-foreground">฿{tier.price}</p>
                    <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50 mt-1">THB</p>
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-body text-[14px] text-muted-foreground/60 mt-10 text-center italic">
              We focus on high-impact work, not volume.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 8 · INDUSTRIES ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">△</span> Industries
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20 max-w-3xl">
            WHERE WE CREATE IMPACT.
          </TextReveal>

          <AnimatedSection stagger className="space-y-0">
            {industries.map((ind) => (
              <AnimatedChild key={ind.name}>
                <div className="border-t border-border py-8 md:py-10 flex items-center justify-between group">
                  <h3 className="font-display text-[clamp(28px,4vw,48px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">{ind.name}</h3>
                  <span className="font-mono text-[12px] tracking-[0.1em] uppercase text-muted-foreground/50 group-hover:text-accent-warm transition-colors duration-300">→ {ind.impact}</span>
                </div>
              </AnimatedChild>
            ))}
            <div className="border-t border-border" />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 9 · SELECTED WORK ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">◎</span> Selected Work
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
            WORK THAT SPEAKS.
          </TextReveal>

          <AnimatedSection stagger className="space-y-12">
            {selectedWork.map((w, i) => (
              <AnimatedChild key={w.name}>
                <div className="border-t border-border pt-10 grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-3">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[clamp(28px,4vw,48px)] tracking-[0.02em] text-foreground mb-2">{w.name}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-2">The Idea</p>
                      <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{w.idea}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-2">Execution</p>
                      <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{w.execution}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-2">Impact</p>
                      <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{w.impact}</p>
                    </div>
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 10 · WHY ORIONS ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">✦</span> Why ØRIONS
              </p>
            </AnimatedSection>
            <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground">
              WHY ØRIONS.
            </TextReveal>
          </div>
          <div className="flex flex-col justify-end">
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">Others</p>
                  <div className="space-y-3">
                    {["Build product", "Run ads", "Create content", "Focus on execution"].map((item) => (
                      <p key={item} className="font-body text-[15px] text-muted-foreground/40 line-through">{item}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">ØRIONS</p>
                  <div className="space-y-3">
                    {["Create clarity", "Build narrative", "Drive adoption", "Focus on ideas"].map((item) => (
                      <p key={item} className="font-body text-[15px] text-foreground/80">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-border pt-8">
                <p className="font-body text-[16px] leading-[1.8] text-muted-foreground">
                  Others focus on execution.<br />
                  We focus on ideas.<br /><br />
                  Because ideas are what people remember.<br />
                  And what drives everything else.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 11 · CLOSING ─── */}
      <section className="py-40 md:py-56 px-6 md:px-12 text-center border-t border-border">
        <div className="max-w-5xl mx-auto">
          <TextReveal className="font-display text-[clamp(40px,7vw,100px)] leading-[0.88] tracking-[0.01em] text-foreground mb-4">
            IF PEOPLE DON'T REMEMBER YOU,
          </TextReveal>
          <TextReveal className="font-display text-[clamp(40px,7vw,100px)] leading-[0.88] tracking-[0.01em] text-accent-warm mb-12">
            THEY WON'T CHOOSE YOU.
          </TextReveal>
          <AnimatedSection delay={0.3}>
            <p className="font-body text-[18px] text-muted-foreground mb-12">We make sure they do.</p>
            <div className="flex gap-6 justify-center items-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="font-mono text-[11px] tracking-[0.12em] uppercase bg-foreground text-background px-8 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Work With Us
              </button>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                Start a Project <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 12 · FOOTER ─── */}
      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
};

export default AgencyPage;
