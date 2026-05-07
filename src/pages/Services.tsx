import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import TypingLoop from "@/components/TypingLoop";
import SimpleMarquee from "@/components/SimpleMarquee";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const SITE_URL = "https://orions.agency";
const accent = "text-gradient";

const services = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that works across every touchpoint.",
    detail:
      "From naming to logo to a brand book your team and partners actually use — built to hold up across feed, store, and packaging.",
    items: ["Naming · Logo · Marks", "Visual identity system", "Brand guidelines + book", "Launch toolkit"],
  },
  {
    n: "02",
    title: "Content",
    lead: "Photo, video, and design that earn the scroll.",
    detail:
      "Shot, cut, and designed in-house — photo, video, reels, motion graphics, and a managed asset library that keeps your brand stocked year-round.",
    items: ["Photo + video shoots", "Reels + short-form video", "Graphic + motion design", "Asset libraries"],
  },
  {
    n: "03",
    title: "Social media",
    lead: "Strategy, posting, community, and paid ads.",
    detail:
      "Strategy → daily posting → community → paid ads, all under one team. No hand-off, no telephone game, reported every month.",
    items: ["Strategy + content calendar", "Daily posting + scheduling", "Community management", "Paid ads (Meta, TikTok)"],
  },
];

type Tier = {
  name: string;
  from: string;            // "Start from THB 150,000"
  unit?: string;           // "/ project" or "/ month"
  forWho: string;
  timeline: string;        // e.g. "3–4 weeks"
  deliverables: string;    // short phrase summary
  includes: string[];      // detailed list of what's inside
  bestFor?: string[];      // example brand types
  highlight?: boolean;     // visually highlighted tier
};

type ServiceTable = {
  n: string;
  title: string;
  lead: string;
  intro: string;
  tiers: Tier[];
};

const serviceTables: ServiceTable[] = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that ships.",
    intro:
      "Built to hold up across feed, store and packaging. Strategy first, then a system your team and partners can actually use day one.",
    tiers: [
      {
        name: "Essential Look",
        from: "Start from THB 150,000",
        unit: "/ project",
        forWho: "New brands that need to look premium and credible from day one.",
        timeline: "3–4 weeks",
        deliverables: "Core identity kit · 1 round of revision",
        includes: [
          "Discovery workshop (2 hours, founders + key team)",
          "1 logo direction, refined to final master file",
          "Primary + secondary color palette (HEX, RGB, CMYK, Pantone)",
          "Type system: display + body pair, full hierarchy",
          "Business card + email signature template",
          "12-page brand guideline PDF",
          "Source files: AI, SVG, PNG, PDF",
        ],
        bestFor: ["Café · single-location restaurant", "Indie fashion label", "Boutique stay (under 20 keys)"],
      },
      {
        name: "Full Brand System",
        from: "Start from THB 350,000",
        unit: "/ project",
        forWho: "Category leaders building a complete brand system across every touchpoint.",
        timeline: "6–8 weeks",
        deliverables: "End-to-end brand system + launch toolkit",
        includes: [
          "Everything in Essential Look",
          "Brand strategy: positioning, audience, competitive map",
          "Verbal identity: tone of voice, key messages, naming conventions",
          "3 logo directions explored, refined to final",
          "Extended palette: surfaces, semantic + accent system",
          "Iconography + illustration direction",
          "Photography art direction + 1 sample shoot brief",
          "Key visual / ad template system (3 layouts × 5 sizes)",
          "Packaging or signage design (1 application)",
          "Social launch kit: 12 templates, 5 reels covers",
          "60-page brand book + Figma library",
          "Launch plan with rollout checklist",
        ],
        bestFor: ["Hotel group · resort", "Multi-outlet F&B brand", "Fashion label scaling to retail"],
        highlight: true,
      },
    ],
  },
  {
    n: "02",
    title: "Content Production",
    lead: "Work that earns the scroll.",
    intro:
      "Shot, cut and designed in-house. One team handles concept, production and post — so the work stays on-brand from brief to final cut.",
    tiers: [
      {
        name: "High-Impact Assets",
        from: "Start from THB 60,000",
        unit: "/ project",
        forWho: "Photo and short-form video that stops the thumb in 1.7 seconds.",
        timeline: "2–3 weeks",
        deliverables: "1 shoot day · 3–5 finished assets",
        includes: [
          "Pre-pro: concept, mood, shot list, call sheet",
          "1 shoot day (up to 8 hours, 1 location)",
          "Director, DP, photographer, 1 stylist",
          "3–5 finished short-form videos (15–30s) OR 15–25 hero photos",
          "Color grade + sound design",
          "Captions burned-in (TH + EN)",
          "Platform-ready exports: Reels, TikTok, Shorts, feed, story",
        ],
        bestFor: ["Menu launch", "Seasonal campaign", "Always-on content refresh"],
      },
      {
        name: "Monthly Content",
        from: "Start from THB 90,000",
        unit: "/ month",
        forWho: "A steady stream of on-brand assets without the back-and-forth.",
        timeline: "Monthly cycle, 2-week onboarding",
        deliverables: "1 shoot/mo · 8–12 assets/mo",
        includes: [
          "Monthly content calendar tied to your campaigns",
          "1 shoot day per month (half-day for additional)",
          "8–12 short-form videos OR 20+ photos per month",
          "Graphic design: feed posts, story templates, carousels",
          "Light motion graphics for key launches",
          "Asset library managed in Drive / Frame.io",
          "Monthly review + content review meeting",
        ],
        bestFor: ["Hotels · always-on F&B", "DTC fashion", "Membership clubs"],
        highlight: true,
      },
      {
        name: "Master Story",
        from: "Start from THB 180,000",
        unit: "/ project",
        forWho: "Brand film or documentary that earns trust for the long run.",
        timeline: "6–10 weeks",
        deliverables: "1 hero film (60–180s) + cut-downs",
        includes: [
          "Story development: research, interviews, treatment",
          "Script + storyboard, locked with you before shoot",
          "2–3 shoot days, full crew (director, DP, sound, gaffer, AD)",
          "Original music or licensed score",
          "Pro color (DaVinci) + sound mix",
          "1 hero edit (60–180s) + 3 social cut-downs (15s / 30s / 9:16)",
          "Behind-the-scenes mini-doc (optional add-on)",
          "Master files + delivery on every channel spec",
        ],
        bestFor: ["Brand anniversary / repositioning", "Founder story", "New property launch"],
      },
    ],
  },
  {
    n: "03",
    title: "Social Media",
    lead: "Run monthly. Reported clearly.",
    intro:
      "Strategy → daily posting → community → paid ads, all under one team. Reported monthly with the numbers that matter to your business — not vanity metrics.",
    tiers: [
      {
        name: "Foundation",
        from: "Start from THB 50,000",
        unit: "/ month",
        forWho: "Steady, on-brand presence — consistent posting and community care.",
        timeline: "3-month minimum, monthly billing",
        deliverables: "8–10 posts/mo + 1 channel managed",
        includes: [
          "1 channel managed (IG or TikTok or Facebook)",
          "Monthly content calendar + caption writing (TH + EN)",
          "8–10 high-quality posts per month (mix of static + reel)",
          "Hashtag + posting strategy",
          "Community management: replies within 12 hours, business hours",
          "Monthly report: reach, follower growth, top posts, learnings",
          "1 strategy call per month (45 min)",
        ],
        bestFor: ["Boutique hotels", "Single-outlet F&B", "Emerging fashion labels"],
      },
      {
        name: "Growth",
        from: "Start from THB 80,000",
        unit: "/ month",
        forWho: "Expanding reach — full content engine plus performance ads.",
        timeline: "3-month minimum · 6-month recommended",
        deliverables: "Multi-channel · paid ads · bi-weekly review",
        includes: [
          "Everything in Foundation, across 2 channels",
          "12–16 posts per month including dedicated short-form video",
          "Short-form video production (4–6 reels/mo, in-house)",
          "Paid ads: strategy, setup, creative, weekly optimization",
          "Ad spend management up to THB 150,000/mo (spend not included)",
          "Pixel / conversion tracking setup",
          "Bi-weekly performance review + creative iteration",
          "Quarterly strategy reset",
        ],
        bestFor: ["Hotel groups", "Multi-outlet F&B chains", "Fashion brands scaling DTC"],
        highlight: true,
      },
      {
        name: "Mastery",
        from: "Start from THB 120,000",
        unit: "/ month",
        forWho: "End-to-end ownership — like an in-house marketing department.",
        timeline: "6-month minimum · annual partnership",
        deliverables: "Always-on team · senior direction · weekly syncs",
        includes: [
          "Everything in Growth, across 3+ channels",
          "20+ posts per month + always-on short-form pipeline",
          "Senior consultant: brand, content, paid lead",
          "Full-funnel paid media: Meta, TikTok, Google, retargeting",
          "Ad spend management up to THB 500,000/mo",
          "Influencer + creator collabs (sourcing + management)",
          "Email / CRM lifecycle support",
          "Weekly strategy syncs + monthly executive readout",
          "Priority on production days + crisis response",
        ],
        bestFor: ["Hospitality groups", "Established fashion houses", "Premium F&B operators"],
      },
    ],
  },
];

const Services = () => (
  <div>
    <SEO
      title="Services — ØRIONS"
      description="Branding, content, and paid ads — managed end-to-end. One team, no handoff. Live in 4 weeks."
      path="/services"
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "Service",
            position: i + 1,
            name: s.title,
            description: s.lead,
            provider: { "@type": "Organization", name: "ØRIONS" },
          })),
        },
      ]}
    />

    {/* HERO — dark, compact */}
    <section className="relative bg-foreground text-background overflow-hidden">
      <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-10 pt-32 md:pt-36 pb-16 md:pb-20">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-8 md:mb-10">
            — SERVICES · 03 PRACTICES
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display h-display-md leading-[0.95] text-balance max-w-[900px]">
            Three things, <span className={accent}>properly.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 md:mt-10 font-display text-[13px] md:text-[16px] tracking-[-0.01em] max-w-[560px]">
            Branding, content & social — built by{" "}
            <TypingLoop text="one team" className={accent} />
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-12 md:mt-14 border-t border-b border-background/20 py-3 px-6 flex items-center gap-6 md:gap-10 font-mono text-[10px] tracking-[0.3em] uppercase tabular-nums text-background/70">
            <span>03 Practices</span>
            <span className="text-background/30">·</span>
            <span>01 Studio</span>
            <span className="text-background/30">·</span>
            <span>From <span className="text-background">THB 50K</span></span>
          </div>
        </Reveal>
      </div>
      <div className="relative border-t border-background/15 py-4">
        <SimpleMarquee
          duration={42}
          items={[
            "BRANDING",
            "CONTENT PRODUCTION",
            "SOCIAL MEDIA",
            "PAID ADS",
            "ONE TEAM · NO HANDOFF",
          ]}
        />
      </div>
    </section>

    {/* WHAT WE DO — light, three services overview with anchor jumps */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-24 md:py-32">
        <Reveal delay={0.05}>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            — WHAT WE DO
          </div>
          <h2 className="font-display h-display-sm max-w-[820px]">
            Three practices, <span className={accent}>one studio.</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <a
                href={`#svc-${s.n}`}
                className={`group h-full py-12 md:py-16 md:px-8 flex flex-col ${i > 0 ? "md:border-l border-soft" : ""}`}
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">— {s.n}</div>
                <div className="mt-6 font-display text-[72px] md:text-[96px] leading-[0.9] tracking-[-0.04em] tabular-nums text-foreground/10 group-hover:text-gradient transition-colors">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-[24px] md:text-[28px] tracking-[-0.02em]">
                  {s.title}.
                </h3>
                <p className="mt-4 font-thai text-[14px] leading-[1.7] text-foreground/70 max-w-[320px]">{s.lead}</p>
                <span className="mt-auto pt-10 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/60 group-hover:text-foreground transition-colors">
                  Jump to packages <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING — dark, detailed package cards */}
    <section className="relative bg-foreground text-background px-6 md:px-10">
      <div className="border-t border-background/30 py-24 md:py-32 max-w-[1280px] mx-auto">
        <Reveal delay={0.05}>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/55 mb-4">
            — PACKAGES & PRICING
          </div>
          <h2 className="font-display h-display-sm max-w-[900px]">
            Honest pricing, <span className={accent}>start from.</span>
          </h2>
          <p className="mt-6 font-thai text-[14px] md:text-[15px] leading-[1.7] text-background/70 max-w-[640px]">
            Every engagement starts with a 30-min call. We&apos;ll tell you which package fits — or build a custom scope if none does.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 space-y-24 md:space-y-32">
          {serviceTables.map((svc) => (
            <article key={svc.n} id={`svc-${svc.n}`} className="scroll-mt-24">
              <Reveal delay={0.05}>
                <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline border-t border-background/30 pt-6 pb-10 md:pb-12">
                  <div className="md:col-span-1 font-mono text-[10px] tracking-[0.25em] text-background/45 tabular-nums">
                    — {svc.n}
                  </div>
                  <h3 className="md:col-span-5 font-display text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.05]">
                    {svc.title}.
                  </h3>
                  <p className="md:col-span-6 font-thai text-[14px] md:text-[15px] leading-[1.75] text-background/70">
                    {svc.intro}
                  </p>
                </header>
              </Reveal>

              <div className={`grid grid-cols-1 ${svc.tiers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} border-t border-background/15`}>
                {svc.tiers.map((t, i) => (
                  <Reveal key={t.name} delay={0.06 * i}>
                    <div className={`relative h-full p-8 md:p-12 flex flex-col ${i > 0 ? "md:border-l border-background/15" : ""} ${t.highlight ? "bg-background/[0.04]" : ""}`}>
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="font-display text-[22px] md:text-[24px] tracking-[-0.02em]">{t.name}.</h4>
                        {t.highlight && (
                          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-background/50">
                            — most chosen
                          </span>
                        )}
                      </div>

                      <p className="mt-3 font-thai text-[13px] leading-[1.7] text-background/65 min-h-[3.5em]">
                        {t.forWho}
                      </p>

                      <div className="mt-10">
                        <div className="flex items-baseline gap-2">
                          <div className={`font-display text-[40px] md:text-[52px] leading-none tracking-[-0.04em] tabular-nums ${t.highlight ? accent : ""}`}>
                            {t.from.replace("Start from THB ", "")}
                          </div>
                          <div className="font-mono text-[10px] tracking-[0.2em] text-background/55">
                            THB {t.unit?.replace("/ ", "/")}
                          </div>
                        </div>
                        <div className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-background/50 tabular-nums">
                          {t.timeline} · {t.deliverables}
                        </div>
                      </div>

                      <div className="mt-10">
                        <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-background/40 mb-5">
                          — what&apos;s included
                        </div>
                        <ul className="space-y-3">
                          {t.includes.map((it) => (
                            <li key={it} className="flex items-baseline gap-3 font-thai text-[13px] leading-[1.65] text-background/85">
                              <span className="font-mono text-[10px] text-background/35 shrink-0">—</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {t.bestFor && (
                        <p className="mt-10 pt-6 font-thai italic text-[12px] leading-[1.7] text-background/55">
                          Best for: {t.bestFor.join(" · ")}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-16 font-mono text-[10px] tracking-[0.25em] uppercase text-background/45 max-w-[640px]">
            * All prices in THB, exclude 7% VAT. Ad spend, third-party licensing, talent fees and travel billed at cost.
          </p>
        </Reveal>
      </div>
    </section>

    {/* AUDIT — compact promo strip, light */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-24 md:py-32">
        <div className="border-y border-foreground py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 items-center">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground mb-4">— KICKSTART</p>
            <h2 className="font-display h-display-sm">
              ØRIONS <span className={accent}>Audit.</span>
            </h2>
            <p className="mt-4 font-thai text-[14px] leading-[1.7] text-foreground/70 max-w-[360px]">
              Not ready for a full engagement? Start with a 1–2 week audit. Credited toward the next phase.
            </p>
          </div>
          <div className="md:col-span-3 flex items-baseline gap-3">
            <div className={`font-display ${accent} text-[48px] md:text-[64px] leading-none tracking-[-0.04em] tabular-nums`}>30K</div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">THB</div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-5">
            <ul className="space-y-2 font-thai text-[13px] leading-[1.7]">
              <li className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-muted-foreground/60">—</span><span>Brand &amp; spend audit</span></li>
              <li className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-muted-foreground/60">—</span><span>1-page 90-day roadmap</span></li>
              <li className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-muted-foreground/60">—</span><span>1-hour working session</span></li>
            </ul>
            <Link
              to="/contact"
              className="self-start inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground border-b border-foreground/40 hover:border-foreground pb-1 transition-colors"
            >
              Book the audit <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>Tell us about <span className={accent}>the brand.</span></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Start the conversation", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default Services;
