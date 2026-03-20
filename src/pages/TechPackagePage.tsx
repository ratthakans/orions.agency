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
import heroImg from "@/assets/tech-hero.jpg";

/* ── Typewriter ── */
const rotatingLines = [
  "BETTER PRODUCT CLARITY.",
  "STRONGER USER UNDERSTANDING.",
  "HIGHER CONVERSION.",
  "REAL ADOPTION.",
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
    <span className="text-accent-gradient block">
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
const phases = [
  {
    num: "01",
    title: "Insight & Problem Mapping",
    subtitle: "Find the real gap before spending.",
    items: ["User perception audit", "Competitor messaging analysis", "Conversion bottleneck mapping", "Stakeholder interviews", "Clarity opportunity report"],
    deliverable: "Clarity Audit Report",
    deliverableDesc: "A clear picture of where users drop off, what confuses them, and what to fix first.",
  },
  {
    num: "02",
    title: "Narrative Design",
    subtitle: "Define what your product means.",
    items: ["Core value proposition", "User story framework", "Messaging hierarchy", "Positioning statement", "Competitive differentiation"],
    deliverable: "Narrative Strategy Deck",
    deliverableDesc: "Your product story, messaging, and positioning — clearly defined and ready to deploy.",
  },
  {
    num: "03",
    title: "Content & Conversation",
    subtitle: "Create content that explains and convinces.",
    items: ["Hero explainer content", "Use-case storytelling", "Social-first video series", "Landing page copy & structure", "Demo & walkthrough assets"],
    deliverable: "Full Content Suite",
    deliverableDesc: "Explainers, demos, and campaigns — ready to deploy across every channel.",
  },
  {
    num: "04",
    title: "Search & Discovery",
    subtitle: "Make sure users find you.",
    items: ["SEO content strategy", "Search intent mapping", "Discovery channel optimization", "Community seeding", "Performance tracking"],
    deliverable: "Adoption Engine",
    deliverableDesc: "A system that drives continuous discovery — keeping your product visible when users need it.",
  },
];

const tiers = [
  {
    label: "CLARITY AUDIT",
    scope: "Phase 1",
    price: "60,000 – 100,000",
    detail: "Understand your product gaps — user perception, messaging, and conversion analysis",
    note: "For teams that want clarity before committing",
  },
  {
    label: "ADOPTION CAMPAIGN",
    scope: "Phase 1–3",
    price: "200,000 – 400,000",
    detail: "Narrative + content + campaign — everything needed to drive real adoption",
    note: "For products ready to grow",
    featured: true,
  },
  {
    label: "ADOPTION SYSTEM",
    scope: "Ongoing",
    price: "100,000 – 180,000 / mo",
    detail: "Continuous improvement — messaging evolution, content updates, conversion optimization",
    note: "For products serious about long-term growth",
  },
];

const problems = [
  { num: "01", title: "Product Is Too Complex", desc: "Users don't understand it. They leave before they try." },
  { num: "02", title: "Messaging Is Unclear", desc: "No differentiation. Your product sounds like everyone else." },
  { num: "03", title: "Content Doesn't Convert", desc: "Looks good, but doesn't sell. Views without action." },
  { num: "04", title: "Growth Is Slow", desc: "Because users don't 'get it'. Adoption stalls at awareness." },
];

const segments = [
  { title: "Early Adopters", desc: "Tech-savvy, willing to try", metric: "High intent" },
  { title: "Decision Makers", desc: "CTOs, VPs — need clarity fast", metric: "High value" },
  { title: "End Users", desc: "Need to understand in seconds", metric: "Volume driver" },
  { title: "Evaluators", desc: "Comparing alternatives", metric: "Conversion critical" },
  { title: "Champions", desc: "Internal advocates who sell for you", metric: "Organic growth" },
  { title: "Late Majority", desc: "Need proof and simplicity", metric: "Scale market" },
];

const systemBlocks = [
  { num: "01", title: "Insight & Problem Mapping", desc: "We identify real user pain and use cases." },
  { num: "02", title: "Narrative Design", desc: "We define what your product means and why it matters." },
  { num: "03", title: "Content & Conversation", desc: "We create content that explains, demonstrates, and convinces." },
  { num: "04", title: "Search & Discovery", desc: "We make sure users find you when they need you." },
];

const TechPackagePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <SEO
        title="Tech Creative Layer — Creative Agency for Tech Companies | ØRIONS"
        description="A creative agency that helps tech companies clarify products, build narrative, and drive real adoption through creative systems."
        path="/package/tech"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt="Dark tech workspace with screens"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
          <Link to="/package" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent-warm transition-colors mb-10">
            <ArrowLeft className="w-3 h-3" /> All Packages
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-5"
          >
            Tech Creative Layer
          </motion.p>
          <h1 className="font-display text-[clamp(44px,8vw,120px)] leading-[0.85] tracking-[-0.01em] text-foreground max-w-5xl">
            <TextReveal as="span" className="font-display text-[clamp(44px,8vw,120px)] leading-[0.85] tracking-[-0.01em] text-foreground">
              A CREATIVE AGENCY FOR TECH COMPANIES THAT NEED
            </TextReveal>
            <Typewriter />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-[16px] text-muted-foreground max-w-[480px] leading-[1.7] mt-10"
          >
            We help tech products become easier to understand, easier to use, and easier to choose.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
          >
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Work With Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Positioning ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Positioning</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl mb-8">
              WE ARE NOT YOUR TYPICAL AGENCY.
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border pt-16">
              <div className="space-y-6">
                <p className="font-body text-[16px] text-muted-foreground leading-[1.8]">
                  We are not developers.<br />
                  We are not performance marketers.
                </p>
                <p className="font-body text-[18px] text-foreground leading-[1.8] font-medium">
                  We are the layer between your product and your user.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-6">We make your product:</p>
                <div className="space-y-4">
                  {["Easier to understand", "Easier to explain", "Easier to adopt"].map((item) => (
                    <div key={item} className="flex items-center gap-4 py-3 border-b border-border group hover:border-accent-warm/40 transition-colors">
                      <span className="text-accent-warm text-[14px]">→</span>
                      <span className="font-body text-[16px] text-foreground group-hover:text-accent-warm transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Problem Section ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The Problem</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              WHY GREAT PRODUCTS DON'T GROW
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {problems.map((p, i) => (
              <AnimatedChild key={p.num}>
                <div className={`p-8 md:p-10 border-t border-border group hover:bg-background/50 transition-colors duration-500 ${i % 2 === 0 ? 'md:border-r' : ''}`}>
                  <span className="font-mono text-[11px] tracking-[0.15em] text-accent-warm">{p.num}</span>
                  <h3 className="font-display text-[clamp(20px,2.5vw,28px)] leading-[0.95] text-foreground mt-3 mb-3">{p.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{p.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Insight ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-8">Insight</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] text-foreground max-w-4xl mx-auto mb-8">
              PEOPLE DON'T ADOPT TECHNOLOGY.<br />
              <span className="text-accent-gradient">THEY ADOPT CLARITY.</span>
            </h2>
            <p className="font-body text-[16px] text-muted-foreground max-w-lg mx-auto leading-[1.8]">
              The best tech companies don't just build better products. They communicate better.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Our Solution</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl mb-4">
              WE BUILD ADOPTION THROUGH CREATIVE.
            </h2>
            <p className="font-body text-[16px] text-muted-foreground max-w-lg leading-[1.7]">
              ORIONS is a demand + adoption system powered by narrative and content.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── System (4 Blocks) ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The System</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-background max-w-3xl">
              ADOPTION MAKER SYSTEM
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10">
            {systemBlocks.map((b) => (
              <AnimatedChild key={b.num}>
                <div className="bg-foreground p-10 md:p-14 group hover:bg-foreground/90 transition-colors">
                  <span className="font-display text-[64px] leading-none text-background/10 group-hover:text-accent-warm/20 transition-colors">{b.num}</span>
                  <h3 className="font-display text-[clamp(22px,2.5vw,32px)] leading-[0.95] text-background mt-4 mb-3">{b.title}</h3>
                  <p className="font-body text-[14px] text-background/60 leading-[1.7]">{b.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
          <AnimatedSection className="mt-px bg-accent-warm p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="font-display text-[20px] md:text-[24px] text-accent-warm-foreground">All four layers = Adoption Engine</p>
              <button
                onClick={() => setDialogOpen(true)}
                className="font-mono text-[11px] tracking-[0.12em] uppercase bg-background text-foreground px-8 py-3 hover:bg-background/90 transition-all self-start md:self-auto"
              >
                Start a Project
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Target Segments ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Target Segments</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              WHO WE HELP YOU REACH
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {segments.map((s) => (
              <AnimatedChild key={s.title}>
                <div className="bg-background p-8 md:p-10 group hover:bg-secondary transition-colors duration-500">
                  <h3 className="font-display text-[18px] md:text-[22px] leading-[0.95] text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-[13px] text-muted-foreground leading-[1.6] mb-4">{s.desc}</p>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-warm">{s.metric}</span>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Example Campaign ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Example</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl mb-4">
              WHAT THIS LOOKS LIKE
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16">
                <div>
                  <h3 className="font-display text-[clamp(28px,3vw,44px)] leading-[0.92] text-foreground mb-6">
                    "YOU'LL GET IT IN <span className="text-accent-gradient">10 SECONDS</span>"
                  </h3>
                  <div className="space-y-4 mt-8">
                    {[
                      { label: "Content", value: "Problem → Solution storytelling" },
                      { label: "Format", value: "Before / After demonstrations" },
                      { label: "Approach", value: "Real use-case narratives" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4 py-3 border-b border-border">
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm min-w-[80px]">{item.label}</span>
                        <span className="font-body text-[15px] text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-background p-10 md:p-12">
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-6">Expected Outcome</p>
                  <div className="space-y-6">
                    {["Higher conversion", "Better onboarding", "Stronger product understanding"].map((o) => (
                      <div key={o} className="flex items-center gap-4">
                        <span className="text-accent-warm">✦</span>
                        <span className="font-display text-[20px] text-foreground">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Business Impact ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Business Impact</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-background max-w-3xl">
              CREATIVE = ADOPTION ENGINE
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="space-y-0">
            {[
              { from: "Narrative", to: "Clarity", width: "100%" },
              { from: "Content", to: "Understanding", width: "85%" },
              { from: "Discovery", to: "Adoption", width: "70%" },
              { from: "Adoption", to: "Revenue", width: "55%" },
            ].map((step, i) => (
              <AnimatedChild key={step.from}>
                <div className="py-8 border-b border-background/10 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-[18px] text-background">{step.from}</span>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-background/40">→</span>
                    <span className="font-display text-[18px] text-accent-warm">{step.to}</span>
                  </div>
                  <div className="w-full bg-background/10 h-1">
                    <motion.div
                      className="h-full bg-accent-warm"
                      initial={{ width: 0 }}
                      whileInView={{ width: step.width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Investment</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              THREE WAYS TO START
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {tiers.map((tier) => (
              <AnimatedChild key={tier.label}>
                <div className={`p-8 md:p-10 ${tier.featured ? 'bg-accent-warm text-accent-warm-foreground' : 'bg-background'} h-full flex flex-col`}>
                  {tier.featured && <span className="font-mono text-[10px] tracking-[0.15em] uppercase mb-4 opacity-80">⭐ Recommended</span>}
                  <h3 className={`font-display text-[clamp(20px,2vw,26px)] leading-[0.95] mb-2 ${tier.featured ? 'text-accent-warm-foreground' : 'text-foreground'}`}>{tier.label}</h3>
                  <p className={`font-mono text-[11px] tracking-[0.1em] mb-6 ${tier.featured ? 'text-accent-warm-foreground/70' : 'text-muted-foreground'}`}>{tier.scope}</p>
                  <p className={`font-display text-[clamp(28px,3vw,36px)] leading-none mb-4 ${tier.featured ? 'text-accent-warm-foreground' : 'text-foreground'}`}>
                    ฿{tier.price}
                  </p>
                  <p className={`font-body text-[14px] leading-[1.7] mb-6 ${tier.featured ? 'text-accent-warm-foreground/80' : 'text-muted-foreground'}`}>{tier.detail}</p>
                  <p className={`font-mono text-[10px] tracking-[0.1em] mt-auto ${tier.featured ? 'text-accent-warm-foreground/60' : 'text-muted-foreground/60'}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Retainer ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Retainer</p>
                <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground mb-6">
                  WHY ONGOING MATTERS
                </h2>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  {["Products evolve.", "Users change.", "Messaging must adapt."].map((line) => (
                    <p key={line} className="font-body text-[18px] text-foreground leading-[1.6]">{line}</p>
                  ))}
                </div>
                <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">
                  We help you stay clear, relevant, and effective over time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why ORIONS ── */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Why ORIONS</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              THE DIFFERENCE
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-10 md:p-14 border border-border">
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-8">Others</p>
                <div className="space-y-4">
                  {["Build product", "Run ads"].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2">
                      <span className="text-muted-foreground/40">—</span>
                      <span className="font-body text-[16px] text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-10 md:p-14 bg-foreground text-background">
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-8">ORIONS</p>
                <div className="space-y-4">
                  {["Create clarity", "Build narrative", "Drive adoption"].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-2">
                      <span className="text-accent-warm">→</span>
                      <span className="font-body text-[16px] text-background">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4-Phase System ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Phased System</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              HOW WE DELIVER
            </h2>
          </AnimatedSection>
          {phases.map((phase, i) => (
            <AnimatedSection key={phase.num}>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1.2fr] gap-6 md:gap-10 py-12 md:py-16 border-b border-border">
                <div>
                  <span className="font-mono text-[11px] tracking-[0.15em] text-accent-warm">{phase.num}</span>
                  <h3 className="font-display text-[clamp(22px,2.5vw,32px)] leading-[0.95] text-foreground mt-1">{phase.title}</h3>
                  <p className="font-body text-[13px] text-muted-foreground mt-2 leading-[1.6]">{phase.subtitle}</p>
                </div>
                <div>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="font-body text-[14px] text-muted-foreground leading-[1.7] flex items-start gap-2">
                        <span className="text-accent-warm/40 mt-1.5 text-[8px]">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary p-6 md:p-8">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-2">Deliverable</p>
                  <h4 className="font-display text-[20px] leading-[0.95] text-foreground mb-2">{phase.deliverable}</h4>
                  <p className="font-body text-[13px] text-muted-foreground leading-[1.7]">{phase.deliverableDesc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="px-6 md:px-12 py-28 md:py-36 bg-foreground text-background">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-[0.88] text-background max-w-4xl mx-auto mb-6">
              IF PEOPLE DON'T UNDERSTAND YOUR PRODUCT,
              <br />
              <span className="text-accent-warm">THEY WILL NEVER USE IT.</span>
            </h2>
            <p className="font-body text-[16px] text-background/60 mb-10">We make sure they do.</p>
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase bg-accent-warm text-accent-warm-foreground px-10 py-4 hover:bg-accent-warm/90 transition-all"
            >
              Let's Build Something People Understand
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default TechPackagePage;
