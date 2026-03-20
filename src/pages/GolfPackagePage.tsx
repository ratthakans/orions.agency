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

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury golf course aerial view at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28">
          <Link to="/package" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent-warm transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> All Packages
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-6"
          >
            Golf Creative Layer
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(40px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-4xl">
            YOUR COURSE IS GREAT. YOUR DEMAND ISN'T.
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[16px] text-muted-foreground max-w-[520px] leading-[1.7] mt-8"
          >
            Most golf clubs don't lack quality — they lack a reason compelling enough for new players to choose them. We build that reason through creative.
          </motion.p>
        </div>
      </section>

      {/* The Reality — Stats */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">The Reality</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-3xl">
              Revenue plateaus. Same promotions. No new players.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: "60–70%", label: "Revenue from existing members" },
              { stat: "40–60%", label: "Average weekday utilization" },
              { stat: "Rising", label: "Average golfer age — year over year" },
            ].map((s) => (
              <AnimatedChild key={s.label}>
                <p className="font-display text-[clamp(40px,5vw,64px)] leading-[1] text-accent-warm">{s.stat}</p>
                <p className="font-body text-[14px] text-muted-foreground mt-3">{s.label}</p>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Detail image */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={detailImg} alt="Golf ball on pristine green" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Demand Gap — redesigned as numbered list with accent bar */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">The Demand Gap</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-3xl">
              The problem isn't your course. It's the demand around it.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
              These are not content problems. They're demand problems — and they require a different kind of solution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              { num: "01", title: "Empty Weekdays", desc: "30–50% utilization means you're losing revenue every single week. The course is ready — the players aren't coming." },
              { num: "02", title: "Stagnant Member Base", desc: "When 60–70% of revenue comes from the same members, growth is capped. New players aren't finding a reason to start." },
              { num: "03", title: "Outdated Brand Perception", desc: "The next generation sees golf as lifestyle, networking, identity. If your brand still feels traditional, they'll go somewhere else." },
              { num: "04", title: "Marketing Without Direction", desc: "You post content. You run promotions. But without a narrative, nothing stands out — and nobody remembers you." },
            ].map((g, i) => (
              <AnimatedSection key={g.num} delay={i * 0.05}>
                <div className="py-8 border-b border-border flex gap-6">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm mt-1 shrink-0">{g.num}</span>
                  <div>
                    <h3 className="font-display text-[20px] text-foreground mb-2">{g.title}</h3>
                    <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{g.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Social Listening & Demand Maker */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Demand Maker System</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-3xl">
              We don't guess what works. We listen, then build.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
              Every campaign starts with real data — what people are saying, searching, and sharing. Then we turn those insights into creative that moves them.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Social Listening & Insight",
                desc: "We analyze what golfers actually talk about — their desires, frustrations, and trends. This gives us topics with real conversation potential.",
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
                desc: "We design how conversations start — content drop sequences, influencer seeding, launch timing. The goal: campaigns that generate talk, not just views.",
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
                <div className="bg-secondary p-8 md:p-10 h-full flex flex-col">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{item.num}</span>
                  <h3 className="font-display text-[22px] leading-[1.1] text-foreground mt-3 mb-3">{item.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7] mb-6 flex-1">{item.desc}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-warm mb-1">Output</p>
                    <p className="font-body text-[13px] text-muted-foreground">{item.output}</p>
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-10">
            <div className="bg-foreground p-8 md:p-10 text-center">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">Together, these four layers form</p>
              <h3 className="font-display text-[clamp(24px,3vw,40px)] leading-[1] text-background">
                Your Brand's Demand Engine
              </h3>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Insight + Positioning */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Insight</p>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] text-foreground mb-6">
              Golf is no longer just a sport. It's a lifestyle economy.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              Networking, identity, weekend escape — new players see golf as an experience, not a scorecard. The clubs that win are the ones that sell the feeling.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">What We Do</p>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] text-foreground mb-6">
              We're the creative layer your marketing team is missing.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              Your team runs ads, manages promotions, handles social. We add the layer that makes all of it hit harder — sharper positioning, memorable narratives, campaigns that stand out.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Target Segments — expanded */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">New Audiences</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-2xl">
              These segments spend 1.5–2x more than average golfers.
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Young Professionals", tag: "Age 28–40", desc: "City-based, seeking weekend escape. They play for relaxation and social connection — not competition.", spend: "1.5x avg spend" },
              { title: "Lifestyle Golfers", tag: "All ages", desc: "Golf is part of their identity. They care about aesthetics, share experiences, and choose courses that look and feel premium.", spend: "High UGC value" },
              { title: "Golf Travelers", tag: "High spenders", desc: "They travel for golf. They look for destinations with a story, curated packages, and memorable experiences.", spend: "2x avg spend" },
              { title: "Corporate Groups", tag: "B2B segment", desc: "Team outings, client entertainment, executive retreats. They need a venue that feels impressive and runs smooth.", spend: "High per-group revenue" },
              { title: "Women Golfers", tag: "Growing fast", desc: "One of the fastest-growing segments globally. They want inclusive, welcoming environments — not intimidating country clubs.", spend: "Underserved market" },
              { title: "Family & Next-Gen", tag: "Long-term value", desc: "Parents introducing kids to golf. They want kid-friendly programs, family packages, and a relaxed atmosphere.", spend: "Lifetime member value" },
            ].map((seg) => (
              <AnimatedChild key={seg.title}>
                <div className="border border-border p-8 h-full flex flex-col">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">{seg.tag}</p>
                  <h3 className="font-display text-[22px] leading-[1.1] text-foreground mb-3">{seg.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7] flex-1">{seg.desc}</p>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-foreground/40 mt-4 pt-4 border-t border-border">{seg.spend}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Lifestyle image */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={lifestyleImg} alt="Golfer walking on fairway at sunset" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* System — 4 Phases */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16 md:mb-24">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">The System</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-foreground">
              Four phases. One clear direction.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
              Every engagement follows a proven structure — from understanding your demand gap to building a system that keeps growth going.
            </p>
          </AnimatedSection>

          <div className="space-y-20 md:space-y-28">
            {phases.map((phase) => (
              <AnimatedSection key={phase.num} className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16" delay={0.1}>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{phase.num}</span>
                  <h3 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.95] text-foreground mt-2 mb-3">{phase.title}</h3>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-6">{phase.subtitle}</p>
                  <div className="border-t border-border pt-5">
                    <ul className="space-y-2.5">
                      {phase.items.map((item) => (
                        <li key={item} className="font-body text-[14px] text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Deliverable</p>
                    <h4 className="font-display text-[clamp(24px,3vw,36px)] leading-[0.95] text-foreground mb-4">{phase.deliverable}</h4>
                    <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{phase.deliverableDesc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact — redesigned as vertical funnel */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Business Impact</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-2xl">
              Creative is your demand engine.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {[
                { phase: "Campaign", action: "Creates", result: "Awareness", desc: "People discover your course exists — and why it's different." },
                { phase: "Content", action: "Builds", result: "Desire", desc: "They feel something. They save, share, and start paying attention." },
                { phase: "Visit", action: "Drives", result: "Booking", desc: "Desire turns into action. They book a round, buy a package." },
                { phase: "Retention", action: "Generates", result: "Revenue", desc: "One visit becomes many. Members refer. Revenue compounds." },
              ].map((item, i) => (
                <AnimatedChild key={item.phase}>
                  <div className={`p-8 h-full border-b md:border-b-0 md:border-r border-border ${i === 3 ? 'md:border-r-0' : ''}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-accent-warm/10 flex items-center justify-center font-mono text-[11px] text-accent-warm">
                        {i + 1}
                      </span>
                      <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">{item.action}</p>
                    </div>
                    <h3 className="font-display text-[28px] leading-[1] text-foreground mb-2">{item.result}</h3>
                    <p className="font-body text-[13px] text-muted-foreground leading-[1.7] mt-3">{item.desc}</p>
                  </div>
                </AnimatedChild>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Investment</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] text-foreground">
              Choose the depth that fits your goals.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <AnimatedChild key={tier.label}>
                <div className={`p-8 md:p-10 h-full flex flex-col justify-between ${tier.featured ? 'bg-foreground text-background' : 'bg-secondary'}`}>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">{tier.label}</p>
                    <h3 className={`font-display text-[24px] leading-[1] mb-2 ${tier.featured ? 'text-background' : 'text-foreground'}`}>{tier.scope}</h3>
                    <p className={`font-display text-[clamp(28px,3.5vw,40px)] leading-[1] mb-6 ${tier.featured ? 'text-background' : 'text-foreground'}`}>
                      ฿{tier.price}
                    </p>
                    <p className={`font-body text-[14px] leading-[1.7] mb-6 ${tier.featured ? 'text-background/60' : 'text-muted-foreground'}`}>{tier.detail}</p>
                  </div>
                  <p className={`font-body text-[13px] italic ${tier.featured ? 'text-background/40' : 'text-muted-foreground/60'}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          {/* Retainer */}
          <AnimatedSection className="mt-8">
            <div className="bg-secondary p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Monthly Retainer</p>
                  <h3 className="font-display text-[clamp(28px,3vw,40px)] leading-[0.95] text-foreground mb-2">Campaign Continuity</h3>
                  <p className="font-display text-[clamp(24px,3vw,36px)] leading-[1] text-accent-warm">฿80,000 – 120,000 /mo</p>
                </div>
                <div>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-4">
                    After 4–8 weeks, campaign momentum fades. The retainer keeps your creative direction alive — ongoing hero content, campaign-to-content breakdowns, and seasonal refreshes.
                  </p>
                  <p className="font-body text-[13px] text-muted-foreground/60 italic">
                    We don't manage ads, run admin, or replace your team. We make the assets you invested in keep working.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={clubhouseImg} alt="Luxury golf clubhouse at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-foreground max-w-3xl mb-4">
              Give people a reason to play at your course.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground max-w-md mb-8">
              We don't replace your team. We make your team stronger.
            </p>
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Start a Project
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default GolfPackagePage;
