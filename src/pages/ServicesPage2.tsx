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
  badge?: string;
  desc: string;
  investment: string;
  timeline: string;
  idealFor: string;
  team: string;
  deliverables: string[];
  process: string[];
  terms: string[];
  scopeOptions?: string[];
  subCategories?: { label: string; items: string[] }[];
}

const coreServices: ServiceDetail[] = [
  {
    num: "01",
    title: "Demand Strategy",
    badge: "NEW",
    desc: "Find insights, build narrative direction, and design message frameworks — answering \"what story will create demand for your brand\" before producing anything.",
    investment: "150,000 – 300,000 THB",
    timeline: "3–4 weeks",
    idealFor: "Brands that don't yet know \"what story sells\" or want to change direction before investing in production.",
    team: "Creative Director + Strategist + Account Executive",
    deliverables: [
      "Consumer Insight Deck — insights from research, interviews, and market landscape",
      "Brand Narrative Direction — the core story that drives every piece of work",
      "Key Message Framework — primary message + supporting messages per audience",
      "Creative Brief — ready to hand off to production (ours or yours)",
      "Presentation Deck — stakeholder-ready summary of everything",
    ],
    process: [
      "Week 1: Kickoff + Research — client interviews, market study, competitor analysis",
      "Week 2: Insight Synthesis — distill insights, find tension points, draft narrative direction",
      "Week 3: Direction Development — develop narrative, message framework, creative brief",
      "Week 4: Presentation + Revision — present, receive feedback, finalize",
    ],
    terms: [
      "Price includes research, strategy, and creative direction — excludes production",
      "Research scope: desk research + up to 8 interviews (client + consumer)",
      "Revision: 2 rounds after presentation",
      "Additional rounds: 15,000 THB/round",
      "Payment: 50% upfront, 50% on delivery",
      "Deliverables: PDF deck + editable file (Keynote/Figma)",
    ],
  },
  {
    num: "02",
    title: "Creative Transformation",
    badge: "FLAGSHIP",
    desc: "Rebrand, reposition, or build a new brand from identity system to brand world — change how people perceive your brand across the entire system.",
    investment: "500,000 – 1,000,000+ THB",
    timeline: "4–8 weeks (brand system) / 8–12 weeks (full transformation)",
    idealFor: "Brands whose current identity no longer reflects who they are, or who are pivoting to a new direction.",
    team: "Creative Director + Art Director + Designer + Strategist + AE",
    deliverables: [
      "Brand Strategy Document — positioning, personality, tone of voice, brand story",
      "Visual Identity System — logo, typography, color system, graphic elements, iconography",
      "Brand Guidelines — comprehensive document any team can work from",
      "Brand World — visual direction for photography, illustration, motion",
      "Application Mockups — real-world examples across 5–10 touchpoints",
      "Brand Launch Kit — ready-to-use assets for launch",
    ],
    process: [
      "Phase 1 (Week 1–2): Discovery — audit existing brand, stakeholder interviews, competitive analysis",
      "Phase 2 (Week 2–4): Strategy — positioning, narrative, personality framework",
      "Phase 3 (Week 3–6): Design Exploration — 3 visual directions, refine to 1",
      "Phase 4 (Week 5–8): System Build — develop full identity system + guidelines",
      "Phase 5 (Week 7–10): Application — mockups + brand world + launch kit",
    ],
    terms: [
      "Price includes strategy + design + guidelines — excludes production of actual applications",
      "Visual direction: 3 directions presented, choose 1 to develop",
      "Additional direction: 50,000 THB/direction",
      "Revision: 3 rounds per phase",
      "Additional rounds: 20,000 THB/round",
      "Payment: 40% upfront, 30% after design approval, 30% on final delivery",
      "IP: 100% transferred to client after full payment",
    ],
  },
  {
    num: "03",
    title: "Signature Campaign",
    badge: "IN-HOUSE PRODUCTION",
    desc: "Design story-driven campaigns — from concept and creative direction to production and launch plan that creates demand, not just awareness.",
    investment: "200,000 – 500,000 THB",
    timeline: "3–6 weeks (concept to launch-ready)",
    idealFor: "Brands that need campaigns with clear narrative and real impact — not just burst ads.",
    team: "Creative Director + Director + Art Director + Copywriter + AE",
    deliverables: [
      "Campaign Concept Deck — big idea, narrative arc, visual direction",
      "Creative Execution Plan — full list of assets to produce + specs",
      "Key Visual + Adaptations — hero visual + 3–5 format adaptations",
      "Copy Deck — headline, body copy, tagline, CTA for every touchpoint",
      "Content Production — video/photo/motion per scope (if production included)",
      "Launch Strategy — timeline, channel plan, release sequence, KPI framework",
    ],
    process: [
      "Week 1: Brief + Insight — receive brief, dig deeper for insights, define campaign territory",
      "Week 2: Concept Development — develop 2–3 concepts, present, choose 1",
      "Week 3–4: Creative Execution — KV, copy, content plan, pre-production",
      "Week 4–6: Production + Launch Prep — produce assets, finalize launch strategy",
    ],
    terms: [
      "200K–300K = concept + creative direction + KV + copy + launch plan (excludes production)",
      "300K–500K = above + production (1 video + photo set + social adaptations)",
      "Concept: 2–3 directions presented, choose 1",
      "Revision: 2 rounds per deliverable",
      "Additional rounds: 15,000 THB/round",
      "Media buying not included",
      "Payment: 50% upfront, 50% on delivery",
      "IP: 100% transferred to client after full payment",
    ],
  },
  {
    num: "04",
    title: "Production",
    badge: "IN-HOUSE PRODUCTION",
    desc: "Produce work with real craft — film, photography, motion, social content. Every piece is built from narrative, not templates. In-house team from Director to Post.",
    investment: "100,000 – 300,000+ THB",
    timeline: "2–6 weeks",
    idealFor: "Brands that already have direction and need a production team that understands story and delivers quality.",
    team: "Director + DOP/Editor + Art Director + Post Supervisor (+ crew per scope)",
    subCategories: [
      {
        label: "Film / Video",
        items: [
          "Short-form video (15–60s) — starting at 50,000 THB/piece",
          "Long-form video (1–3 min) — starting at 100,000 THB/piece",
          "Documentary / brand film (3–10 min) — starting at 150,000 THB",
        ],
      },
      {
        label: "Photography",
        items: [
          "Product photography set (10–20 shots) — starting at 30,000 THB",
          "Lifestyle / campaign photography (half day) — starting at 50,000 THB",
          "Full day shoot — starting at 80,000 THB",
        ],
      },
      {
        label: "Motion Graphics",
        items: [
          "Social motion (15–30s) — starting at 20,000 THB/piece",
          "Explainer / brand motion (30–60s) — starting at 50,000 THB",
        ],
      },
      {
        label: "Social Content Suite",
        items: [
          "Content pack (10 pieces: static + motion + copy) — starting at 40,000 THB",
        ],
      },
    ],
    deliverables: [],
    process: [],
    terms: [
      "Prices above are starting rates — final quote depends on complexity, location, talent",
      "Location, talent, props, wardrobe, travel — billed separately at actual cost + 15% management fee",
      "Revision: 2 rounds edit/retouch per asset",
      "Additional revision: Video 10,000 THB/round, Photo 5,000 THB/round",
      "Raw footage / raw files: not included — available for 20,000 THB",
      "Payment: 50% upfront, 50% on delivery",
      "IP: 100% transferred to client after full payment",
    ],
  },
  {
    num: "05",
    title: "Event / Activation",
    badge: "IN-HOUSE PRODUCTION",
    desc: "Design real-world experiences people can touch — from concept and spatial design to production and on-ground execution, extending your campaign narrative.",
    investment: "150,000 – 500,000+ THB",
    timeline: "4–8 weeks",
    idealFor: "Brands that need memorable experiences — launch events, pop-ups, brand activations, experiential marketing.",
    team: "Creative Director + Event Producer + Art Director + Production Manager + AE",
    deliverables: [
      "Event Concept Deck — theme, narrative, experience flow, mood & tone",
      "Spatial / Experience Design — layout, stage design, installation concept",
      "Production Plan — vendor list, timeline, budget breakdown, logistics",
      "Content Plan — documentation strategy (photo/video for during + after event)",
      "On-ground Execution — ØRIONS team on-site ensuring creative direction",
      "Post-event Report — documentation, highlights, performance metrics",
    ],
    process: [
      "Week 1–2: Concept + Planning — brief, concept development, spatial design, vendor sourcing",
      "Week 3–4: Pre-production — design finalization, vendor management, rehearsal",
      "Week 5–6: Production + Event — setup, execution, documentation",
      "Week 7–8: Post-event — content edit, report, debrief",
    ],
    terms: [
      "Price includes creative concept + design + on-site creative direction",
      "Venue, vendor, construction, F&B, talent — billed separately at actual cost + 15% management fee",
      "Concept: 2 directions presented, choose 1",
      "Revision: 2 rounds per phase",
      "Payment: 40% upfront, 30% after concept approval, 30% post-event",
      "Cancellation: after concept approval, creative direction fee (40%) is non-refundable",
      "Documentation (photo/video) included — edit + delivery within 2 weeks after event",
    ],
  },
  {
    num: "06",
    title: "Digital Experience",
    desc: "Narrative websites, custom interfaces, ecommerce — every element designed to create perception shift. Not just a pretty site, but one that changes how people see your brand.",
    investment: "80,000 – 250,000 THB",
    timeline: "3–6 weeks",
    idealFor: "Brands that need a digital presence reflecting who they are — not a template site that looks like everyone else.",
    team: "Creative Director + UX/UI Designer + Developer + AE",
    scopeOptions: [
      "Landing Page / Microsite → 1–3 pages, responsive, animation — 80,000–120,000 THB",
      "Narrative Website → 5–10 pages, custom design, CMS — 120,000–200,000 THB",
      "Custom Interface / Ecommerce → Custom UI/UX, product system — 180,000–250,000+ THB",
    ],
    deliverables: [
      "UX Wireframe — structure + user flow before design",
      "UI Design — full visual design for every page (Figma)",
      "Development — responsive, optimized, SEO-ready",
      "CMS Setup — client can edit content independently",
      "Launch Support — deploy + QA + 2 weeks post-launch bug fix",
    ],
    process: [
      "Week 1: Brief + UX — sitemap, wireframe, user flow",
      "Week 2–3: UI Design — 2 design directions → choose 1 → design all pages",
      "Week 3–5: Development — build, CMS, responsive, testing",
      "Week 5–6: QA + Launch — review, fix, deploy, handover",
    ],
    terms: [
      "Price includes design + development + CMS + 2 weeks post-launch support",
      "Content (text + images): client provides, or add copywriting +20,000 THB",
      "Domain + hosting: client responsibility (ØRIONS recommends + sets up for free)",
      "Design direction: 2 directions presented, choose 1",
      "Revision: 2 rounds per phase",
      "Additional rounds: 10,000 THB/round",
      "Payment: 40% upfront, 30% after design approval, 30% on launch",
      "IP (design + code): 100% transferred to client after full payment",
    ],
  },
];

interface Retainer {
  num: string;
  tier: string;
  title: string;
  badge?: string;
  subtitle: string;
  investment: string;
  minCommitment: string;
  idealFor: string;
  team: string;
  communication: string;
  monthlyScope: string[];
  bonus: string[];
  terms: string[];
}

const retainers: Retainer[] = [
  {
    num: "07",
    tier: "TIER 1",
    title: "Pulse",
    subtitle: "Stay visible, stay consistent",
    investment: "40,000 – 80,000 THB / month",
    minCommitment: "3 months",
    idealFor: "Brands that already have direction and need a team to keep channels consistent and on-tone.",
    team: "Account Executive + Content Creator + Designer",
    communication: "LINE/Slack + Monthly review call (30 min)",
    monthlyScope: [
      "Social media management & scheduling (all agreed platforms)",
      "Community management & response (Mon–Fri, office hours)",
      "Monthly content calendar (draft + approval flow)",
      "4–8 content pieces / month (graphic + copy, per pricing tier)",
      "Basic performance report (reach, engagement, growth)",
      "Platform optimization (bio, highlights, link-in-bio)",
    ],
    bonus: [
      "Free content audit before starting (normally 15,000 THB)",
    ],
    terms: [
      "40K/mo = 4 pieces + basic management",
      "60K/mo = 6 pieces + active community mgmt",
      "80K/mo = 8 pieces + full management",
      "Extra content: 3,000 THB/piece (graphic) / 5,000 THB/piece (motion)",
      "Revision: 2 rounds per piece",
      "Turnaround: 3–5 business days per piece",
      "Ad budget / media buying not included — add +15% management fee on ad spend",
      "Payment: due on the 1st of each month",
      "Cancellation: 30 days notice after minimum 3 months",
    ],
  },
  {
    num: "08",
    tier: "TIER 2",
    title: "Flow",
    badge: "MOST POPULAR",
    subtitle: "Ongoing creative + production engine",
    investment: "80,000 – 150,000 THB / month",
    minCommitment: "3 months",
    idealFor: "Brands that need a dedicated creative team to think and produce — no more freelance juggling.",
    team: "Creative Director + Art Director + Content Creator + Designer + AE",
    communication: "LINE/Slack + Bi-weekly strategy calls (45 min)",
    monthlyScope: [
      "Everything in Pulse",
      "Monthly creative direction & campaign concept (mini brief each month)",
      "2–4 creative sets / month (1 set = 1 Key Visual + 3 adaptations + copy)",
      "1–2 short-form videos (30–60s, shot/edited/graded)",
      "Copywriting & caption direction for every post",
      "Bi-weekly strategy calls (45 min) — review + plan ahead",
      "Performance review + strategic recommendation",
    ],
    bonus: [
      "Free Demand Strategy mini session before starting (normally 50,000 THB)",
      "Priority turnaround 48hr for urgent requests (normally 5 days)",
    ],
    terms: [
      "80K/mo = 2 sets + 1 video",
      "120K/mo = 3 sets + 1 video",
      "150K/mo = 4 sets + 2 videos",
      "Additional creative set: 12,000 THB/set",
      "Additional video: 35,000 THB/piece (short-form)",
      "Revision: 2 rounds per creative set, 2 rounds per video",
      "Ad budget / media buying not included — add +12% management fee",
      "Payment: due on the 1st of each month",
      "Cancellation: 30 days notice after minimum 3 months",
    ],
  },
  {
    num: "09",
    tier: "TIER 3",
    title: "Orbit",
    badge: "PREMIUM",
    subtitle: "Your creative partner — full access",
    investment: "120,000 – 180,000 THB / month",
    minCommitment: "6 months",
    idealFor: "Brands that want ØRIONS as a full creative partner — like having an in-house creative team.",
    team: "Dedicated Creative Director + Art Director + Director + Editor + Designer + AE",
    communication: "LINE/Slack (direct to CD) + Weekly check-in + Monthly strategy session (90 min)",
    monthlyScope: [
      "Everything in Flow",
      "Dedicated Creative Director (single point of contact)",
      "5 creative sets / month (48hr turnaround)",
      "2 short-form + 1 long-form video / month (long-form up to 3 min)",
      "Quarterly campaign concept & narrative refresh",
      "Monthly strategy session with leadership (90 min)",
      "Media planning & buying support (media budget separate)",
      "Website updates & minor iteration (for ØRIONS-built sites)",
    ],
    bonus: [
      "Free full Demand Strategy session (normally 150,000 THB)",
      "1 free Event/Activation concept per quarter (normally 80,000 THB/concept)",
      "Priority access to ØRIONS Studio IP collaborations",
      "Extra creative sets discounted: 10,000 THB/set (normally 12,000)",
    ],
    terms: [
      "120K/mo = 5 sets + 2 short + 1 long video",
      "150K/mo = add media support",
      "180K/mo = full scope + event concepts",
      "Additional video: Short 30,000 THB, Long 60,000 THB",
      "Revision: 3 rounds per creative set, 3 rounds per video",
      "NDA: signed before starting (standard ØRIONS NDA)",
      "Cancellation: 60 days notice after minimum 6 months",
      "Early termination fee: 1 month of retainer if cancelled before 6 months",
    ],
  },
];

/* ── Feature Package ── */
interface FeaturePackage {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  packages: string;
  investment: string;
}

const featurePackages: FeaturePackage[] = [
  {
    slug: "hospitality",
    title: "Hospitality Demand System",
    subtitle: "For hotels, resorts & hospitality brands",
    desc: "We don't help hotels sell rooms. We create new reasons people want to come. From demand discovery to revenue design and ongoing demand engine.",
    packages: "3 Packages + Demand Engine Retainer",
    investment: "Starting at 600,000 THB",
  },
];

/* ── Expandable Core Service Card ── */
const CoreServiceCard = ({ s }: { s: ServiceDetail }) => {
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
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="font-display text-[clamp(24px,4vw,48px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                {s.title}
              </h3>
              {s.badge && (
                <span className="font-mono text-[9px] tracking-[0.15em] text-accent-warm border border-accent-warm/40 px-2 py-0.5">
                  {s.badge}
                </span>
              )}
            </div>
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
              {/* Row 1: Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border border-border/30 p-6">
                <div>
                  <SectionLabel>Investment</SectionLabel>
                  <p className="font-mono text-[13px] text-accent-warm mt-2">{s.investment}</p>
                </div>
                <div>
                  <SectionLabel>Timeline</SectionLabel>
                  <p className="font-mono text-[13px] text-foreground/70 mt-2">{s.timeline}</p>
                </div>
                <div className="col-span-2">
                  <SectionLabel>Team</SectionLabel>
                  <p className="font-body text-[13px] text-foreground/60 mt-2">{s.team}</p>
                </div>
              </div>

              {/* Ideal for */}
              <div className="mb-8">
                <SectionLabel>Ideal for</SectionLabel>
                <p className="font-body text-[13px] text-muted-foreground mt-3">{s.idealFor}</p>
              </div>

              {/* Scope Options (Digital Experience) */}
              {s.scopeOptions && s.scopeOptions.length > 0 && (
                <div className="mb-8">
                  <SectionLabel>Scope Options</SectionLabel>
                  <ul className="space-y-2 mt-3">
                    {s.scopeOptions.map((opt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-warm text-[8px] mt-1.5">→</span>
                        <span className="font-body text-[13px] text-foreground/70">{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sub-categories (Production) */}
              {s.subCategories && s.subCategories.length > 0 && (
                <div className="mb-8">
                  <SectionLabel>Deliverables</SectionLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {s.subCategories.map((cat) => (
                      <div key={cat.label}>
                        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-foreground/50 mb-2">{cat.label}</p>
                        <ul className="space-y-1.5">
                          {cat.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent-warm text-[8px] mt-1.5">✦</span>
                              <span className="font-body text-[13px] text-foreground/70">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables + Process */}
              {(s.deliverables.length > 0 || s.process.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {s.deliverables.length > 0 && (
                    <div>
                      <SectionLabel>Deliverables</SectionLabel>
                      <ul className="space-y-2 mt-3">
                        {s.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent-warm text-[8px] mt-1.5">✦</span>
                            <span className="font-body text-[13px] text-foreground/70">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {s.process.length > 0 && (
                    <div>
                      <SectionLabel>Process</SectionLabel>
                      <ul className="space-y-2 mt-3">
                        {s.process.map((p, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="font-mono text-[10px] text-muted-foreground/40 mt-0.5 shrink-0 w-4">{i + 1}.</span>
                            <span className="font-body text-[13px] text-foreground/70">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Terms */}
              {s.terms.length > 0 && (
                <div className="border-t border-border/30 pt-6">
                  <SectionLabel>Terms & Conditions</SectionLabel>
                  <ul className="space-y-1.5 mt-3">
                    {s.terms.map((t, i) => (
                      <li key={i} className="font-body text-[12px] text-muted-foreground/60">— {t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Retainer Card ── */
const RetainerCard = ({ r }: { r: Retainer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-t border-border group cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-8 md:py-10">
        <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/30 shrink-0">
            {r.num}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/40">{r.tier}</p>
              {r.badge && (
                <span className="font-mono text-[9px] tracking-[0.15em] text-accent-warm border border-accent-warm/40 px-2 py-0.5">
                  {r.badge}
                </span>
              )}
            </div>
            <h3 className="font-display text-[clamp(22px,3.5vw,40px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
              {r.title}
            </h3>
            <p className="font-body text-[14px] text-muted-foreground">{r.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-4">
          <span className="font-mono text-[10px] tracking-[0.08em] text-accent-warm/50 hidden md:inline">
            {r.investment}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-muted-foreground text-xl font-light"
          >
            +
          </motion.span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-[calc(10px+1rem)] md:pl-[calc(10px+2rem)]">
              {/* Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border border-border/30 p-6">
                <div>
                  <SectionLabel>Investment</SectionLabel>
                  <p className="font-mono text-[13px] text-accent-warm mt-2">{r.investment}</p>
                </div>
                <div>
                  <SectionLabel>Min. Commitment</SectionLabel>
                  <p className="font-mono text-[13px] text-foreground/70 mt-2">{r.minCommitment}</p>
                </div>
                <div className="col-span-2">
                  <SectionLabel>Team</SectionLabel>
                  <p className="font-body text-[13px] text-foreground/60 mt-2">{r.team}</p>
                </div>
              </div>

              {/* Ideal for + Communication */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <SectionLabel>Ideal for</SectionLabel>
                  <p className="font-body text-[13px] text-muted-foreground mt-3">{r.idealFor}</p>
                </div>
                <div>
                  <SectionLabel>Communication</SectionLabel>
                  <p className="font-body text-[13px] text-foreground/60 mt-3">{r.communication}</p>
                </div>
              </div>

              {/* Monthly Scope */}
              <div className="mb-8">
                <SectionLabel>Monthly Scope</SectionLabel>
                <ul className="space-y-2 mt-3">
                  {r.monthlyScope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-warm text-[8px] mt-1.5">✦</span>
                      <span className="font-body text-[13px] text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus */}
              {r.bonus.length > 0 && (
                <div className="mb-8 border-l-2 border-accent-warm/30 pl-4">
                  <SectionLabel>Bonus</SectionLabel>
                  <ul className="space-y-2 mt-3">
                    {r.bonus.map((b, i) => (
                      <li key={i} className="font-body text-[13px] text-accent-warm/80">★ {b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Terms */}
              <div className="border-t border-border/30 pt-6">
                <SectionLabel>Terms & Conditions</SectionLabel>
                <ul className="space-y-1.5 mt-3">
                  {r.terms.map((t, i) => (
                    <li key={i} className="font-body text-[12px] text-muted-foreground/60">— {t}</li>
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
        description="6 Core Services + 3 Retainer Models. Demand Strategy, Creative Transformation, Signature Campaign, Production, Event/Activation, Digital Experience."
        path="/services"
        keywords="creative agency services, brand transformation, campaign, production, event activation, digital experience, demand strategy"
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
            <span className="text-accent-warm mr-2">✦</span> Services & Retainers
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
            6 Core Services + 3 Retainer Models<br />
            Complete scope, deliverables, process, pricing, terms & conditions.
          </motion.p>
        </div>
      </section>

      {/* ── Start Here ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative border border-accent-warm/30 p-8 md:p-12 hover:border-accent-warm/50 transition-colors duration-300">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm mb-6">
                ★ Start here
              </p>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6">
                Not sure where to begin? Start with these:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <span className="font-display text-[18px] md:text-[22px] tracking-[0.02em] text-foreground">
                  Demand Strategy
                </span>
                <span className="text-muted-foreground/30 hidden sm:inline self-center">—</span>
                <span className="font-body text-[14px] text-muted-foreground self-center">find insights before investing in production</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
                <span className="font-display text-[18px] md:text-[22px] tracking-[0.02em] text-foreground">
                  Creative Transformation
                </span>
                <span className="text-muted-foreground/30 hidden sm:inline self-center">—</span>
                <span className="font-body text-[14px] text-muted-foreground self-center">rebuild your entire identity system</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">
              Core Services
            </p>
          </AnimatedSection>
          {coreServices.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.05}>
              <CoreServiceCard s={s} />
            </AnimatedSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* ── Retainer ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">
              Retainer Models
            </p>
          </AnimatedSection>
          {retainers.map((r, i) => (
            <AnimatedSection key={r.num} delay={i * 0.05}>
              <RetainerCard r={r} />
            </AnimatedSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* ── Feature Packages ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-4">
              Feature Packages
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,56px)] leading-[0.92] tracking-[0.01em] text-foreground mb-4">
              INDUSTRY-SPECIFIC<br />
              <span className="text-accent-gradient">DEMAND SYSTEMS.</span>
            </h2>
            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mb-12">
              Tailored packages designed for specific industries — combining our core services into outcome-driven systems.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-px">
            {featurePackages.map((pkg, i) => (
              <AnimatedSection key={pkg.slug} delay={i * 0.1}>
                <Link
                  to={`/package/${pkg.slug}`}
                  className="block border border-border p-8 md:p-12 group hover:border-accent-warm/40 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">
                        {pkg.subtitle}
                      </p>
                      <h3 className="font-display text-[clamp(24px,3.5vw,44px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300 mb-3">
                        {pkg.title}
                      </h3>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-xl">
                        {pkg.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                      <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/50">{pkg.packages}</span>
                      <span className="font-mono text-[13px] text-accent-warm">{pkg.investment}</span>
                      <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground group-hover:text-accent-warm transition-colors duration-300 mt-2">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── General Terms ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">
              General Terms & Conditions
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Payment",
                  items: [
                    "Currency: THB (Thai Baht) only",
                    "Prices exclude VAT 7%",
                    "Payment due within 15 days of invoice",
                    "Overdue 30+ days: ØRIONS reserves the right to pause work",
                  ],
                },
                {
                  label: "Scope & Change Request",
                  items: [
                    "Out-of-scope work billed per rate card",
                    "Change requests must be in writing (email/LINE)",
                    "ØRIONS assesses impact within 24 hours",
                  ],
                },
                {
                  label: "Revision Policy",
                  items: [
                    "All services include revision rounds as specified",
                    "\"1 round\" = consolidated feedback submitted once, not piecemeal",
                    "Feedback should be sent within 3 business days",
                  ],
                },
                {
                  label: "Intellectual Property",
                  items: [
                    "IP: 100% transferred to client after full payment",
                    "ØRIONS reserves the right to use work in portfolio",
                    "Third-party assets: client responsible for licensing",
                  ],
                },
              ].map((section) => (
                <div key={section.label} className="border border-border/30 p-6">
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-foreground/50 mb-3">{section.label}</p>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="font-body text-[12px] text-muted-foreground/60">— {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
              LET'S BUILD<br />
              <span className="text-accent-gradient">SOMETHING WORTH NOTICING.</span>
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
