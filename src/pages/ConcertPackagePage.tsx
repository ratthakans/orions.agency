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
import heroImg from "@/assets/concert-hero.jpg";
import crowdImg from "@/assets/concert-crowd.jpg";
import backstageImg from "@/assets/concert-backstage.jpg";

const phases = [
  {
    num: "01",
    title: "Demand & Cultural Audit",
    subtitle: "Understand the audience before you announce.",
    items: ["Fan culture & sentiment analysis", "Competitive event landscape", "Content & channel review", "Demand potential mapping", "Audience segment identification"],
    deliverable: "Demand Audit Report",
    deliverableDesc: "A clear picture of fan sentiment, audience segments, and the cultural angle that will make this concert feel unmissable.",
  },
  {
    num: "02",
    title: "Narrative & Campaign Strategy",
    subtitle: "Define the story before you sell.",
    items: ["Concert narrative positioning", "Emotional hook development", "Campaign architecture", "Content sequence planning", "Channel strategy"],
    deliverable: "Campaign Strategy Deck",
    deliverableDesc: "The narrative, emotional hooks, and full campaign blueprint — ready to execute from announcement to show day.",
  },
  {
    num: "03",
    title: "Hero Content & Campaign Launch",
    subtitle: "Turn strategy into something people feel.",
    items: ["Cinematic teaser film (30–60s)", "Campaign visual system", "Social-first content series", "Countdown & reveal content", "Paid media creative"],
    deliverable: "Full Campaign Suite",
    deliverableDesc: "Teaser films, visual assets, and a complete content sequence designed to build hype from day one.",
  },
  {
    num: "04",
    title: "Hype Continuity System",
    subtitle: "Keep momentum building until show day.",
    items: ["Content drops on strategic beats", "Conversation & FOMO maintenance", "Peak moment amplification", "Reaction & UGC leverage", "Post-event content capture"],
    deliverable: "Hype Engine",
    deliverableDesc: "A system that prevents momentum from dropping — keeping the concert in people's feeds and conversations until tickets are gone.",
  },
];

const tiers = [
  {
    label: "NARRATIVE STARTER",
    scope: "Phase 1",
    price: "60,000 – 100,000",
    detail: "Cultural insight, concert narrative, campaign idea",
    note: "For organizers who need direction before committing",
  },
  {
    label: "DEMAND CAMPAIGN",
    scope: "Phase 1–3",
    price: "200,000 – 400,000",
    detail: "Full narrative + campaign + hero content + content system",
    note: "For concerts that need to sell out",
    featured: true,
  },
  {
    label: "DEMAND SYSTEM",
    scope: "Retainer",
    price: "100,000 – 180,000",
    detail: "Monthly content sequence, narrative evolution, conversation tracking",
    note: "For multi-show tours or ongoing event series",
    isMonthly: true,
  },
];

const ConcertPackagePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <SEO
        title="Concert Creative Layer — Creative Agency for Live Events | ØRIONS"
        description="A creative layer that helps concerts and live events sell out faster — through narrative, cultural moments, and demand-driven campaigns."
        path="/package/concert"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt="Massive concert venue with dramatic stage lighting"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
          <Link to="/package" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent-warm transition-colors mb-10">
            <ArrowLeft className="w-3 h-3" /> All Packages
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-5"
          >
            Concert Creative Layer
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(44px,8vw,120px)] leading-[0.85] tracking-[-0.01em] text-foreground max-w-5xl">
            TICKETS DON'T SELL THEMSELVES. STORIES DO.
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-[16px] text-muted-foreground max-w-[480px] leading-[1.7] mt-10"
          >
            Concerts don't fail because the artist isn't good enough. They fail because there's no reason compelling enough for people to feel they must be there.
          </motion.p>
        </div>
      </section>

      {/* ── The Reality ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The Reality</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              More concerts than ever. Harder to fill every seat.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-border">
            {[
              { stat: "High", label: "Market saturation — more events competing for the same audience" },
              { stat: "Low", label: "Attention span — people scroll past your announcement in seconds" },
              { stat: "Rising", label: "Audience expectations — they want moments, not just shows" },
            ].map((s, i) => (
              <AnimatedChild key={s.label}>
                <div className={`py-12 ${i < 2 ? 'sm:border-r border-border' : ''}`}>
                  <div className={`${i > 0 ? 'sm:pl-12' : ''}`}>
                    <p className="font-display text-[clamp(48px,6vw,80px)] leading-[0.9] text-accent-warm tracking-[-0.02em]">{s.stat}</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-4 max-w-[220px]">{s.label}</p>
                  </div>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Full-bleed crowd image ── */}
      <section className="w-full">
        <AnimatedSection>
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={crowdImg} alt="Concert crowd with phone lights" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Demand Gap ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The Demand Gap</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              The problem isn't the show. It's the demand around it.
            </h2>
          </AnimatedSection>

          <div className="border-t border-border">
            {[
              { num: "01", title: "Tickets Don't Sell Out", desc: "Demand isn't strong enough. You end up discounting, giving away, or leaving seats empty." },
              { num: "02", title: "Campaigns Don't Break Through", desc: "Every concert uses the same playbook — poster, teaser, countdown. Nothing stands out." },
              { num: "03", title: "No FOMO", desc: "People see the content but don't feel urgency. There's no emotional reason to buy now." },
              { num: "04", title: "Momentum Dies After Launch", desc: "The announcement gets attention. Then silence. By show day, the hype is gone." },
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

      {/* ── Demand Maker System ── */}
      <section className="bg-secondary">
        <div className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-20">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Demand Maker System</p>
              <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
                We turn concerts into cultural moments.
              </h2>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
                Every campaign starts with real cultural insight — what fans are feeling, what's trending, what creates urgency. Then we build creative that makes people say "I have to be there."
              </p>
            </AnimatedSection>

            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {[
                {
                  num: "01",
                  title: "Social Listening & Cultural Insight",
                  desc: "We analyze fan culture, emotional triggers, and trending conversations. This gives us the angles that will create real FOMO.",
                  output: "Cultural insight report + campaign angles",
                },
                {
                  num: "02",
                  title: "Narrative Design",
                  desc: "We define what this concert means — 'the last show,' 'once in a lifetime,' 'the night you can't miss.' A story that makes buying feel urgent.",
                  output: "Concert narrative + emotional positioning",
                },
                {
                  num: "03",
                  title: "Conversation Design",
                  desc: "We design the content sequence — teaser drops, hints, reveals, countdowns. Timed to build conversations, not just impressions.",
                  output: "Launch sequence + conversation playbook",
                },
                {
                  num: "04",
                  title: "Search & Discovery Layer",
                  desc: "When people feel the FOMO, they search. We make sure they find your concert — TikTok, YouTube, search, social.",
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
                  Your Ticket Demand Engine →
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
            <AnimatedSection>
              <div className="md:pr-16 md:border-r border-border pb-16 md:pb-0">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-6">Insight</p>
                <h2 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.92] text-foreground mb-6">
                  People don't buy tickets. They buy moments.
                </h2>
                <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">
                  People don't go to concerts just for the artist. They go for the feeling, the experience, the moment they "have to be part of." Concerts that sell out are the ones that create FOMO.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="md:pl-16 pt-16 md:pt-0 border-t md:border-t-0 border-border">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-6">What We Do</p>
                <h2 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.92] text-foreground mb-6">
                  The creative layer your organizer team is missing.
                </h2>
                <p className="font-body text-[15px] text-muted-foreground leading-[1.7]">
                  Your team handles ticketing, media buying, and PR. We add the layer that makes all of it sell harder — narrative that creates urgency, campaigns that build FOMO, content that makes people feel they can't miss it.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Target Segments ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Audience Segments</p>
            <h2 className="font-display text-[clamp(32px,4.5vw,60px)] leading-[0.92] text-foreground max-w-3xl">
              Core fans buy first. But growth comes from everyone else.
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { title: "Core Fans", tag: "Buy first", desc: "Dedicated followers who buy on announcement day. High engagement, high loyalty — but limited in number.", metric: "Guaranteed base" },
              { title: "Cultural Audience", tag: "Fear of missing out", desc: "Not die-hard fans, but culturally aware. They go because everyone's going — and they don't want to miss it.", metric: "Growth driver" },
              { title: "Social Crowd", tag: "Experience seekers", desc: "They buy for the experience, the photos, the stories. Concerts are lifestyle, not fandom.", metric: "High spend per head" },
              { title: "Group Buyers", tag: "Multiplier effect", desc: "One person convinces five. They need compelling content to share — something that makes their friends say 'I'm in.'", metric: "Revenue multiplier" },
              { title: "Late Deciders", tag: "FOMO converts", desc: "They watch from the sidelines until urgency peaks. The right content at the right time pushes them over the edge.", metric: "Fill the last seats" },
              { title: "Brand Partners", tag: "B2B opportunity", desc: "Sponsors and brands looking for cultural alignment. A stronger narrative means more attractive partnership opportunities.", metric: "Sponsorship value" },
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

      {/* ── Backstage image ── */}
      <section className="w-full">
        <AnimatedSection>
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={backstageImg} alt="Artist silhouette walking towards stage" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── System — 4 Phases ── */}
      <section className="px-4 sm:px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20 md:mb-28">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">The System</p>
            <h2 className="font-display text-[clamp(36px,5.5vw,80px)] leading-[0.88] text-foreground">
              Four phases.<br />One sell-out system.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1.2fr] gap-6 md:gap-10 py-12 md:py-16 ${i < phases.length - 1 ? 'border-b border-border' : ''}`}>
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm block mb-2">{phase.num}</span>
                    <h3 className="font-display text-[clamp(22px,2.5vw,32px)] leading-[1] text-foreground">{phase.title}</h3>
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
      <section className="border-t border-border">
        <div className="px-4 sm:px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-12">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-4">Business Impact</p>
              <h2 className="font-display text-[clamp(28px,3.5vw,48px)] leading-[0.92] text-foreground">
                Creative is your ticket demand engine.
              </h2>
            </AnimatedSection>

            <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { result: "Emotion", desc: "The narrative makes people feel something — urgency, excitement, FOMO." },
                { result: "FOMO", desc: "Conversations build. People start saying 'are you going?' — that's demand." },
                { result: "Purchase", desc: "Interest converts to ticket sales. Urgency drives faster sell-through." },
                { result: "Share", desc: "The experience gets shared. Next event sells even faster." },
              ].map((item, i) => (
                <AnimatedChild key={item.result}>
                  <div className={`py-8 md:py-10 ${i < 3 ? 'md:pr-8 md:border-r border-border' : 'md:pl-8'} ${i > 0 && i < 3 ? 'md:pl-8' : ''} ${i === 0 ? '' : 'md:pl-8'}`}>
                    <motion.div
                      className="w-10 h-[2px] bg-accent-warm mb-6"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      style={{ originX: 0 }}
                    />
                    <h3 className="font-display text-[24px] leading-[1] text-foreground mb-3">{item.result}</h3>
                    <p className="font-body text-[13px] text-muted-foreground leading-[1.6]">{item.desc}</p>
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
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.92] text-foreground">
              Choose the depth<br />that fits your event.
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
                      ฿{tier.price}{tier.isMonthly ? <span className="text-[16px] opacity-60"> /mo</span> : ''}
                    </p>
                    <p className={`font-body text-[14px] leading-[1.7] mb-8 ${tier.featured ? 'text-accent-warm-foreground/70' : 'text-muted-foreground'}`}>{tier.detail}</p>
                  </div>
                  <p className={`font-body text-[13px] italic ${tier.featured ? 'text-accent-warm-foreground/40' : 'text-muted-foreground/40'}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Concert venue atmosphere" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 py-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm mb-8">Let's Talk</p>
            <h2 className="font-display text-[clamp(40px,7vw,96px)] leading-[0.85] text-foreground max-w-4xl mb-10">
              Make people feel they have to be there.
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

export default ConcertPackagePage;
