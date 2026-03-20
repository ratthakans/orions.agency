import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

      {/* Demand Gap — clean 2x2 */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">The Demand Gap</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-2xl">
              The problem isn't your course. It's your demand.
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {[
              { title: "Empty Weekdays", desc: "30–50% utilization on weekdays means significant revenue left on the table." },
              { title: "No New Players", desc: "Growth is capped when you rely on the same member base year after year." },
              { title: "Aging Brand Perception", desc: "The next generation sees golf as lifestyle — but your brand still looks traditional." },
              { title: "Content Without Direction", desc: "You have posts. You have photos. But no story that makes anyone choose you." },
            ].map((g) => (
              <AnimatedChild key={g.title}>
                <div className="bg-background p-8 md:p-10 h-full">
                  <h3 className="font-display text-[20px] text-foreground mb-3">{g.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{g.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Insight + Positioning — side by side */}
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

      {/* Target Segments */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">New Audiences</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-2xl">
              These segments spend 1.5–2x more than average golfers.
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Young Professionals", tag: "Age 28–40", desc: "City-based, seeking weekend escape. They play for relaxation and social connection — not competition." },
              { title: "Lifestyle Golfers", tag: "All ages", desc: "Golf is part of their identity. They care about aesthetics, share experiences, and choose courses that look and feel premium." },
              { title: "Golf Travelers", tag: "High spenders", desc: "They travel for golf. They look for destinations with a story, curated packages, and memorable experiences." },
            ].map((seg) => (
              <AnimatedChild key={seg.title}>
                <div className="border border-border p-8 h-full">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">{seg.tag}</p>
                  <h3 className="font-display text-[24px] leading-[1] text-foreground mb-4">{seg.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{seg.desc}</p>
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

      {/* Example Campaign */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Campaign Example</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] text-foreground">
              Workday Escape Golf
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
              Instead of selling golf as sport — sell it as the best break from your work week. Target: professionals aged 30–45 looking for a midweek reset.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-secondary p-8 h-full">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Content Direction</p>
                <ul className="space-y-3">
                  {["Early morning calm on the fairway", "Golf + coffee ritual", "Slow afternoon, no meetings", "Sunset finish — recharged"].map((item) => (
                    <li key={item} className="font-body text-[15px] text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-secondary p-8 h-full">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Expected Impact</p>
                <div className="space-y-6">
                  <div>
                    <p className="font-display text-[32px] leading-[1] text-foreground">+10–20%</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-1">Weekday traffic increase</p>
                  </div>
                  <div>
                    <p className="font-display text-[32px] leading-[1] text-foreground">New segment</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-1">Young professional entry point</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Impact Flow */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Business Impact</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground">
              Creative is your demand engine.
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
            {[
              { step: "Campaign", result: "Awareness" },
              { step: "Content", result: "Desire" },
              { step: "Visit", result: "Booking" },
              { step: "Retention", result: "Revenue" },
            ].map((item, i) => (
              <AnimatedChild key={item.step} className="flex items-center gap-4 md:gap-0">
                <div className="bg-secondary px-6 py-4 text-center min-w-[140px]">
                  <p className="font-display text-[18px] text-foreground">{item.step}</p>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-warm mt-1">{item.result}</p>
                </div>
                {i < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground mx-3 hidden md:block" />}
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Investment */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
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

      {/* Why ORIONS */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Why ORIONS</p>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] text-foreground mb-6">
              We don't make content. We build demand.
            </h2>
            <div className="space-y-6 mt-8">
              {[
                "Strategy-first — content follows direction, not the other way around",
                "Full production in-house — film, photo, design, digital",
                "We understand the golf business — not just the aesthetics",
                "Measurable outcomes — not just beautiful work",
              ].map((item) => (
                <p key={item} className="font-body text-[14px] text-muted-foreground leading-[1.7] pl-4 border-l-2 border-accent-warm">{item}</p>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Our Guarantee</p>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] text-foreground mb-6">
              We don't guarantee sales numbers.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-8">
              But we guarantee that your direction will be clear, your campaign will be ready to deploy, and your marketing impact will be measurably stronger.
            </p>
            <div className="bg-secondary p-6">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">If You Do Nothing</p>
              <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">
                Weekdays stay empty. No new players. Brand gets more outdated. Eventually, you compete on price — and margins keep shrinking.
              </p>
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
