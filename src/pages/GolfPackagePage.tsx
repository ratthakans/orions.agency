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
import heroImg from "@/assets/golf-hero.jpg";
import detailImg from "@/assets/golf-detail.jpg";
import lifestyleImg from "@/assets/golf-lifestyle.jpg";
import clubhouseImg from "@/assets/golf-clubhouse.jpg";

const phases = [
  {
    num: "01",
    title: "Demand & Positioning Audit",
    subtitle: "Understand the gap before you spend.",
    items: ["Current audience & utilization analysis", "Content & channel performance review", "Demand gap mapping", "New segment identification", "Positioning opportunity report"],
    deliverable: "Demand Audit Report",
    deliverableDesc: "A clear picture of where demand is lost, which segments to target, and how to position differently.",
  },
  {
    num: "02",
    title: "Demand Strategy",
    subtitle: "Define the direction before you create.",
    items: ["Target segment definition", "Key message development", "Campaign architecture", "Channel-to-audience mapping", "Content framework"],
    deliverable: "Demand Strategy Deck",
    deliverableDesc: "Your target, message, and campaign direction — clearly defined and ready to execute.",
  },
  {
    num: "03",
    title: "Signature Campaign & Hero Film",
    subtitle: "Turn strategy into something people feel.",
    items: ["Hero brand film (60–90s)", "Campaign photography", "Social-first video series", "Paid media creative", "On-property content capture"],
    deliverable: "Full Campaign Suite",
    deliverableDesc: "Hero film, photography, and creative assets — ready to deploy across every channel.",
  },
  {
    num: "04",
    title: "Campaign Continuity",
    subtitle: "Keep demand alive after launch.",
    items: ["Hero content broken into sub-assets", "Brand direction maintenance", "Moment-based content drops", "Performance tracking & optimization", "Seasonal campaign refreshes"],
    deliverable: "Scalable Demand Engine",
    deliverableDesc: "A system that keeps demand from dropping — with ongoing content plans and creative direction.",
  },
];

const tiers = [
  {
    label: "DEMAND AUDIT",
    scope: "Phase 1",
    price: "50,000 – 80,000",
    detail: "Demand gap analysis, new segment identification, positioning direction",
    note: "For clubs that want clarity before committing",
  },
  {
    label: "SIGNATURE CAMPAIGN",
    scope: "Phase 1–3",
    price: "200,000 – 350,000",
    detail: "Full strategy + campaign + hero film + content set",
    note: "For clubs ready to launch a new chapter",
    featured: true,
  },
  {
    label: "DEMAND GROWTH SYSTEM",
    scope: "All Four Phases",
    price: "500,000 – 800,000+",
    detail: "Complete system — audit, campaign, and 3 months of ongoing support",
    note: "For clubs serious about long-term growth",
  },
];

const GolfPackagePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <SEO
        title="Golf Creative Layer — Creative Agency for Golf Clubs | ØRIONS"
        description="A creative layer that helps golf clubs unlock new demand — from positioning and campaigns to cinematic content that drives real revenue."
        path="/package/golf"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt="Luxury golf course aerial view at golden hour"
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
            Golf Creative Layer
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(44px,8vw,120px)] leading-[0.85] tracking-[-0.01em] text-foreground max-w-5xl">
            YOUR COURSE IS GREAT. YOUR DEMAND ISN'T.
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-[16px] text-muted-foreground max-w-[480px] leading-[1.7] mt-10"
          >
            Most golf clubs don't lack quality — they lack a reason compelling enough for new players to choose them. We build that reason through creative.
          </motion.p>
        </div>
      </section>

      {/* ── The Reality — Large Stats ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The Reality</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              Revenue plateaus. Same promotions. No new players.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-border">
            {[
              { stat: "60–70%", label: "Revenue from existing members" },
              { stat: "40–60%", label: "Average weekday utilization" },
              { stat: "Rising", label: "Average golfer age — year over year" },
            ].map((s, i) => (
              <AnimatedChild key={s.label}>
                <div className={`py-12 ${i < 2 ? 'sm:border-r border-border' : ''}`}>
                  <div className={`${i > 0 ? 'sm:pl-12' : ''}`}>
                    <p className="font-display text-[clamp(48px,6vw,80px)] leading-[0.9] text-accent-warm tracking-[-0.02em]">{s.stat}</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-4 max-w-[200px]">{s.label}</p>
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Full-bleed image ── */}
      <section className="w-full">
        <AnimatedSection>
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={detailImg} alt="Golf ball on pristine green" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Demand Gap — Bold stacked layout ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The Demand Gap</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              The problem isn't your course. It's the demand around it.
            </h2>
          </AnimatedSection>

          <div className="border-t border-border">
            {[
              { num: "01", title: "Empty Weekdays", desc: "30–50% utilization means significant revenue left on the table — every single week." },
              { num: "02", title: "Stagnant Member Base", desc: "60–70% of revenue from the same members. Growth is capped when new players can't find a reason to start." },
              { num: "03", title: "Outdated Brand Perception", desc: "The next generation sees golf as lifestyle and identity. If your brand still feels traditional, they go somewhere else." },
              { num: "04", title: "Marketing Without Direction", desc: "You post content, run promotions. But without a narrative, nothing stands out — and nobody remembers you." },
            ].map((g, i) => (
              <AnimatedSection key={g.num} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] md:grid-cols-[60px_1fr_1.2fr] gap-4 md:gap-8 py-8 md:py-10 border-b border-border items-baseline group">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{g.num}</span>
                  <h3 className="font-display text-[clamp(20px,2.5vw,32px)] leading-[1] text-foreground group-hover:text-accent-warm transition-colors duration-300">{g.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7] col-start-2 md:col-start-3">{g.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demand Maker System — Dark feature block ── */}
      <section className="bg-secondary">
        <div className="px-6 md:px-12 py-28 md:py-36">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-20">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Demand Maker System</p>
              <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
                We don't guess what works. We listen, then build.
              </h2>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
                Every campaign starts with real data — what people are saying, searching, and sharing. Then we turn those insights into creative that moves them.
              </p>
            </AnimatedSection>

            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {[
                {
                  num: "01",
                  title: "Social Listening & Insight",
                  desc: "We analyze what golfers actually talk about — desires, frustrations, and emerging trends. This gives us topics with real conversation potential.",
                  output: "Insight report with campaign-ready topics",
                },
                {
                  num: "02",
                  title: "Narrative & Campaign Design",
                  desc: "We craft stories and campaigns people want to share. Not just content — narratives that shift perception and create desire.",
                  output: "Campaign concept + narrative direction",
                },
                {
                  num: "03",
                  title: "Conversation Design",
                  desc: "We design how conversations start — content drop sequences, influencer seeding, launch timing. Campaigns that generate talk, not just views.",
                  output: "Launch strategy + conversation playbook",
                },
                {
                  num: "04",
                  title: "Search & Discovery Layer",
                  desc: "When people are interested, they search. We make sure they find you — through keyword strategy, SEO, TikTok search, and content support.",
                  output: "Discovery strategy across platforms",
                },
              ].map((item) => (
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
                <h3 className="font-display text-[clamp(22px,2.5vw,36px)] leading-[1] text-accent-warm-foreground">
                  Your Brand's Demand Engine →
                </h3>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Insight + Positioning — editorial split ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <AnimatedSection>
              <div className="md:pr-16 md:border-r border-border pb-16 md:pb-0">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-6">Insight</p>
                <h2 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.92] text-foreground mb-6">
                  Golf is no longer just a sport. It's a lifestyle economy.
                </h2>
                <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">
                  Networking, identity, weekend escape — new players see golf as an experience, not a scorecard. The clubs that win are the ones that sell the feeling.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="md:pl-16 pt-16 md:pt-0 border-t md:border-t-0 border-border">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-6">What We Do</p>
                <h2 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.92] text-foreground mb-6">
                  The creative layer your marketing team is missing.
                </h2>
                <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">
                  Your team runs ads, manages promotions, handles social. We add the layer that makes all of it hit harder — sharper positioning, memorable narratives, campaigns that stand out.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Target Segments — large grid ── */}
      <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">New Audiences</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              Segments that spend 1.5–2x more than average golfers.
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { title: "Young Professionals", tag: "Age 28–40", desc: "City-based, seeking weekend escape. They play for relaxation and social connection — not competition.", metric: "1.5x avg spend" },
              { title: "Lifestyle Golfers", tag: "All ages", desc: "Golf is identity. They care about aesthetics, share experiences, and choose courses that look and feel premium.", metric: "High UGC value" },
              { title: "Golf Travelers", tag: "High spenders", desc: "They travel for golf. They want destinations with a story, curated packages, and memorable experiences.", metric: "2x avg spend" },
              { title: "Corporate Groups", tag: "B2B segment", desc: "Team outings, client entertainment, executive retreats. They need a venue that impresses and runs smooth.", metric: "High group revenue" },
              { title: "Women Golfers", tag: "Growing fast", desc: "One of the fastest-growing segments globally. They want inclusive, welcoming environments — not intimidating country clubs.", metric: "Underserved market" },
              { title: "Family & Next-Gen", tag: "Long-term value", desc: "Parents introducing kids to golf. Kid-friendly programs, family packages, and a relaxed atmosphere.", metric: "Lifetime member value" },
            ].map((seg) => (
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

      {/* ── Full-bleed lifestyle image ── */}
      <section className="w-full">
        <AnimatedSection>
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={lifestyleImg} alt="Golfer walking on fairway at sunset" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── System — 4 Phases ── */}
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20 md:mb-28">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The System</p>
            <h2 className="font-display text-[clamp(36px,5.5vw,80px)] leading-[0.88] text-foreground">
              Four phases.<br />One clear direction.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1.2fr] gap-6 md:gap-10 py-12 md:py-16 ${i < phases.length - 1 ? 'border-b border-border' : ''}`}>
                  {/* Phase number + title */}
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm block mb-2">{phase.num}</span>
                    <h3 className="font-display text-[clamp(22px,2.5vw,32px)] leading-[1] text-foreground">{phase.title}</h3>
                  </div>
                  {/* Items */}
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
                  {/* Deliverable */}
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

      {/* ── Business Impact — horizontal metric bar ── */}
      <section className="bg-foreground">
        <div className="px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-12">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Business Impact</p>
              <h2 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.92] text-background">
                Creative is your demand engine.
              </h2>
            </AnimatedSection>

            <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { result: "Awareness", desc: "People discover your course — and why it's different." },
                { result: "Desire", desc: "They feel something. They save, share, and pay attention." },
                { result: "Booking", desc: "Desire turns into action. They book a round." },
                { result: "Revenue", desc: "One visit becomes many. Revenue compounds." },
              ].map((item, i) => (
                <AnimatedChild key={item.result}>
                  <div className={`py-8 md:py-10 ${i < 3 ? 'md:pr-8 md:border-r border-background/10' : 'md:pl-8'} ${i > 0 && i < 3 ? 'md:pl-8' : ''} ${i === 0 ? '' : 'md:pl-8'}`}>
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
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Investment</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.92] text-foreground">
              Choose the depth<br />that fits your goals.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {tiers.map((tier) => (
              <AnimatedChild key={tier.label}>
                <div className={`p-8 md:p-10 h-full flex flex-col justify-between ${tier.featured ? 'bg-accent-warm' : 'bg-background'}`}>
                  <div>
                    <p className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-6 ${tier.featured ? 'text-accent-warm-foreground/60' : 'text-accent-warm'}`}>{tier.label}</p>
                    <h3 className={`font-display text-[22px] leading-[1] mb-2 ${tier.featured ? 'text-accent-warm-foreground' : 'text-foreground'}`}>{tier.scope}</h3>
                    <p className={`font-display text-[clamp(32px,4vw,48px)] leading-[0.9] mb-8 tracking-[-0.02em] ${tier.featured ? 'text-accent-warm-foreground' : 'text-foreground'}`}>
                      ฿{tier.price}
                    </p>
                    <p className={`font-body text-[14px] leading-[1.7] mb-8 ${tier.featured ? 'text-accent-warm-foreground/70' : 'text-muted-foreground'}`}>{tier.detail}</p>
                  </div>
                  <p className={`font-body text-[13px] italic ${tier.featured ? 'text-accent-warm-foreground/40' : 'text-muted-foreground/40'}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          {/* Retainer */}
          <AnimatedSection className="mt-px">
            <div className="bg-secondary p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-start">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Monthly Retainer</p>
                  <h3 className="font-display text-[clamp(28px,3vw,40px)] leading-[0.92] text-foreground mb-3">Campaign Continuity</h3>
                  <p className="font-display text-[clamp(24px,3vw,36px)] leading-[1] text-accent-warm">฿80,000 – 120,000<span className="text-[16px] text-muted-foreground ml-1">/mo</span></p>
                </div>
                <div>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-4">
                    After 4–8 weeks, campaign momentum fades. The retainer keeps your creative direction alive — ongoing hero content, campaign-to-content breakdowns, and seasonal refreshes.
                  </p>
                  <p className="font-body text-[13px] text-muted-foreground/40 italic">
                    We don't manage ads, run admin, or replace your team — we make the assets you invested in keep working.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={clubhouseImg} alt="Luxury golf clubhouse at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-8">Let's Talk</p>
            <h2 className="font-display text-[clamp(40px,7vw,96px)] leading-[0.85] text-foreground max-w-4xl mb-10">
              Give people a reason to play at your course.
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

export default GolfPackagePage;
