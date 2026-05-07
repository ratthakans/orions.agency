import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SimpleMarquee from "@/components/SimpleMarquee";
import CTA from "@/components/CTA";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://orions.agency";
const accent = "text-gradient";

const services = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that works across every touchpoint.",
    items: ["Logo + visual identity system", "Brand voice + messaging", "Guidelines + launch toolkit"],
    from: "From THB 150,000",
  },
  {
    n: "02",
    title: "Content",
    lead: "Photo, video, and design that earn the scroll.",
    items: ["Photo + video shoots", "Reels + short-form video", "Brand films + asset libraries"],
    from: "From THB 55,000",
  },
  {
    n: "03",
    title: "Social Media",
    lead: "Strategy, content, community, and ads.",
    items: ["Daily posting + content creation", "Community management", "Paid ads (Meta + TikTok)"],
    from: "From THB 45,000 / month",
  },
];

type Tier = {
  name: string;
  tagline: string;
  price: string;          // "150,000"
  unit: string;           // "/ project" or "/ month"
  timeline?: string;
  lockIn?: string;
  groups: { heading: string; items: string[] }[];
  bonuses?: string[];
  guarantees?: string[];
  addOns?: string[];
  highlight?: boolean;
};

type ServiceTable = {
  n: string;
  title: string;
  intro: string;
  tiers: Tier[];
};

const serviceTables: ServiceTable[] = [
  {
    n: "01",
    title: "Branding",
    intro:
      "Identity systems built to hold up across feed, store and packaging — strategy first, then a system your team can actually use.",
    tiers: [
      {
        name: "Essential Look",
        tagline: "New brands that need to look premium and credible from day one.",
        price: "150,000",
        unit: "/ project",
        timeline: "4–5 weeks",
        groups: [
          {
            heading: "What's included",
            items: [
              "Logo system (3 directions)",
              "Color + typography system",
              "Stationery suite (business card, letterhead, invoice template, email signature)",
              "Brand guideline (20 pages)",
              "Social media template kit (10 designs)",
            ],
          },
        ],
        bonuses: [
          "Lock-in 30% rebrand discount within 24 months",
          "30-day post-delivery support",
        ],
        addOns: [
          "PowerPoint / Keynote template — 15,000",
          "Photography style guide — 25,000",
        ],
      },
      {
        name: "Brand Plus",
        tagline: "Brands that need voice, visual system, and a campaign-ready toolkit.",
        price: "220,000",
        unit: "/ project",
        timeline: "6–7 weeks",
        groups: [
          {
            heading: "What's included",
            items: [
              "Everything in Essential Look",
              "Brand voice + key messaging framework",
              "Key visual / campaign system (1 set)",
              "Extended brand guideline (30–35 pages)",
              "Packaging direction (1 SKU)",
            ],
          },
        ],
        bonuses: [
          "60-day post-delivery support",
          "15% off Master Story video within 12 months",
          "20% off Social retainer for first 6 months",
        ],
        highlight: true,
      },
      {
        name: "Full Brand System",
        tagline: "Category leaders building a complete brand system across every touchpoint.",
        price: "320,000",
        unit: "/ project",
        timeline: "8–10 weeks",
        groups: [
          {
            heading: "What's included",
            items: [
              "Everything in Brand Plus",
              "Complete key visual / ad system (3 campaigns)",
              "Brand film script + concept",
              "Full launch plan + rollout toolkit",
            ],
          },
        ],
        bonuses: [
          "90-day post-delivery support",
          "15% off Master Story video within 12 months",
          "10% off Social retainer for first 6 months",
        ],
        addOns: [
          "Environmental design direction — 30,000",
          "Web design direction — 35,000",
          "Packaging system (3 SKU) — 50,000",
          "PR launch consultation — 25,000",
        ],
      },
    ],
  },
  {
    n: "02",
    title: "Content Production",
    intro:
      "Shot, cut and designed in-house. One team handles concept, production and post — so the work stays on-brand from brief to final cut.",
    tiers: [
      {
        name: "High-Impact Assets",
        tagline: "Photo and short-form video that stops the thumb in 1.7 seconds.",
        price: "55,000",
        unit: "/ project",
        timeline: "2–3 weeks",
        groups: [
          {
            heading: "What's included",
            items: [
              "Full-day shoot (8 hours)",
              "15–18 photos",
              "4–5 short-form videos",
              "Mood board + shot list",
              "Hashtag list per asset",
              "Asset organization in Google Drive",
              "2 rounds revision",
            ],
          },
        ],
        bonuses: [
          "Asset usage rights — lifetime",
          "20% off your second shoot within 6 months",
        ],
      },
      {
        name: "Brand Story",
        tagline: "A short-form brand video that earns trust and works across every platform.",
        price: "95,000",
        unit: "/ project",
        timeline: "3–4 weeks",
        groups: [
          {
            heading: "What's included",
            items: [
              "Brand video (60–75 seconds, 1 hero version)",
              "2 platform variants (vertical or horizontal)",
              "Photo set (10–12 shots from the same shoot)",
              "Lightweight script + storyboard",
              "Subtitles in one language (Thai or English)",
              "Color grading + sound design",
            ],
          },
        ],
        bonuses: [
          "Concept approval round before shoot day",
          "2 rounds revision",
        ],
        addOns: [
          "30-second teaser version — 12,000",
          "Subtitles in 2nd language — 8,000",
          "Both vertical + horizontal versions — 15,000",
        ],
        highlight: true,
      },
      {
        name: "Master Story",
        tagline: "A brand film built to last 18–24 months.",
        price: "165,000",
        unit: "/ project",
        timeline: "5–6 weeks",
        groups: [
          {
            heading: "What's included",
            items: [
              "Brand film (90 seconds – 2 minutes)",
              "DSLR / mirrorless production",
              "Full script + storyboard",
              "Director + DP + sound team",
              "Photo set (10–12 shots)",
              "BTS content (3–5 clips)",
              "2 edits: hero version + 30-second",
              "Subtitles in one language",
            ],
          },
        ],
        bonuses: [
          "Concept + storyboard approval rounds",
          "2 rounds revision",
        ],
        addOns: [
          "Cinema-grade equipment upgrade — 35,000",
          "Extended photo set (20–25 shots) — 25,000",
          "15-second cut — 10,000",
          "PR press kit — 25,000",
          "Founder portrait set — 25,000",
        ],
      },
    ],
  },
  {
    n: "03",
    title: "Social Media",
    intro:
      "Strategy → daily posting → community → paid ads, all under one team. Reported monthly with the numbers that matter.",
    tiers: [
      {
        name: "Foundation",
        tagline: "Steady, on-brand presence — content, community, and consistent posting.",
        price: "45,000",
        unit: "/ month",
        lockIn: "3 months minimum, then month-to-month",
        groups: [
          {
            heading: "Monthly",
            items: [
              "6–8 high-quality posts",
              "1 platform (your choice: IG or FB)",
              "Platform-specific captions",
              "Hashtag strategy",
              "Community management (response < 24 hours)",
              "DM management",
              "Monthly performance report",
            ],
          },
          {
            heading: "Quarterly",
            items: [
              "Mini-shoot (5–7 fresh assets, 2–3 hours)",
              "Trend report",
              "Strategy call",
            ],
          },
        ],
        bonuses: [
          "Lock-in price for 6 months",
          "Audit at 50% off when signing 6-month contract (7,500)",
          "Same team end-to-end",
        ],
        addOns: [
          "2nd platform — 15,000 / month",
          "Monthly trend report (vs quarterly) — 5,000 / month",
          "Monthly strategy call — 5,000 / month",
          "Half-day quarterly shoot (vs mini) — 5,000 / month",
        ],
      },
      {
        name: "Growth",
        tagline: "Foundation + paid ads engine + monthly content videos.",
        price: "75,000",
        unit: "/ month",
        lockIn: "3 months minimum, then month-to-month",
        groups: [
          {
            heading: "Strategy & reporting",
            items: [
              "1–2 strategy calls per month",
              "Monthly performance review",
              "Monthly competitor benchmark",
            ],
          },
          {
            heading: "Content creation",
            items: [
              "10–12 posts per month",
              "2 platforms (IG + FB or IG + TikTok)",
              "3–4 short-form videos per month",
              "Custom design templates",
              "Platform-specific captions",
            ],
          },
          {
            heading: "Community",
            items: [
              "Response < 8 hours",
              "DM management + lead tracking",
            ],
          },
          {
            heading: "Paid ads",
            items: [
              "Meta Ads management",
              "Audience research + persona",
              "Creative A/B testing",
              "Conversion tracking + pixel setup",
              "Bi-weekly ad optimization",
            ],
          },
          {
            heading: "Production",
            items: [
              "Quarterly half-day shoot (10–12 fresh assets)",
            ],
          },
        ],
        bonuses: [
          "Lock-in 75K price for 12 months",
          "Audit at 50% off when signing 6-month contract (7,500)",
          "First post live within 14 days",
        ],
        guarantees: [
          "Cancel anytime after first 3 months (30-day notice)",
          "Same team end-to-end",
        ],
        addOns: [
          "TikTok Ads management — 12,000 / month",
          "LINE Ads management — 12,000 / month",
          "Monthly shoot (vs quarterly) — 12,000 / month",
          "3rd platform — 12,000 / month",
          "Bi-weekly performance review — 8,000 / month",
          "2 extra videos per month — 10,000 / month",
        ],
        highlight: true,
      },
      {
        name: "Mastery",
        tagline: "Premium retainer — full content engine, multi-channel ads, and senior strategy.",
        price: "175,000",
        unit: "/ month",
        lockIn: "6 months minimum, then month-to-month",
        groups: [
          {
            heading: "Strategy",
            items: [
              "Everything in Growth",
              "Bi-weekly strategy syncs",
              "Monthly deep-dive performance review",
              "Quarterly business review with founder",
            ],
          },
          {
            heading: "Content creation",
            items: [
              "15–18 posts per month",
              "3 platforms (IG + FB + TikTok)",
              "6–8 short-form videos per month",
              "Stories strategy + templates",
            ],
          },
          {
            heading: "Community",
            items: [
              "Response < 4 hours",
              "DM + lead tracking + CRM integration",
              "UGC management + reposting",
            ],
          },
          {
            heading: "Paid ads",
            items: [
              "Meta + TikTok Ads management",
              "Audience research + persona development",
              "A/B testing",
              "Conversion tracking + landing page consultation",
            ],
          },
          {
            heading: "Production",
            items: [
              "Monthly half-day shoot (12–15 assets)",
            ],
          },
        ],
        bonuses: [
          "Lock-in 175K price for 12 months",
          "Free Brand Audit (15K value)",
          "Priority WhatsApp / LINE founder access",
          "First post live within 14 days",
        ],
        guarantees: [
          "Same team end-to-end",
          "Founder-level oversight",
          "Cancel after first 6 months (30-day notice)",
        ],
        addOns: [
          "LINE Ads management — 15,000 / month",
          "Google Ads management — 18,000 / month",
          "English content (multi-language) — 25,000 / month",
          "Monthly full-day shoot (vs half-day) — 15,000 / month",
          "Weekly strategy syncs — 15,000 / month",
        ],
      },
    ],
  },
];

const process = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check." },
  { n: "02", title: "Plan", body: "Short proposal. Real numbers." },
  { n: "03", title: "Build", body: "Strategy, identity, content, ads." },
  { n: "04", title: "Run", body: "Monthly reports. Real results." },
];

const faqs = [
  {
    q: "Can I customize a package?",
    a: "Yes. Pick a base package and add what you need. Every Social retainer has transparent add-ons. Branding and Content can be quoted custom.",
  },
  {
    q: "What if I don't like the first draft?",
    a: "Every package includes 2 rounds of revision. If you're unsure, start with an Audit first.",
  },
  {
    q: "Can I cancel my Social retainer?",
    a: "Foundation — after 3 months, month-to-month. Growth — after 3 months, 30-day notice. Mastery — after 6 months, 30-day notice.",
  },
  {
    q: "Will I work with junior staff?",
    a: "No. Founder oversees every project. Same team from kickoff to delivery.",
  },
  {
    q: "Do you do websites or SEO?",
    a: "Not directly. We recommend trusted partners — no markup, no commission.",
  },
  {
    q: "What if I'm not Café / D2C / Tech?",
    a: "We work with any consumer-facing brand. Best fit — brands that care about how they look and how they're talked about.",
  },
  {
    q: "How fast can we start?",
    a: "Audit — 7 days from booking. Branding — 4–10 weeks depending on tier. Social retainer — first post live within 14 days.",
  },
  {
    q: "What payment terms?",
    a: "Branding & Content — 50% deposit, 50% on delivery. Social retainer — monthly in advance. Bank transfer or credit card.",
  },
];

const whyPoints = [
  "Honest pricing on the website",
  "First draft within agreed timeline — or it's on us",
  "Same team from kickoff to delivery",
  "Direct founder access via LINE / WhatsApp",
  "Cancel retainers anytime after the lock-in period",
];

const Services = () => (
  <div>
    <SEO
      title="Services & Pricing — ØRIONS"
      description="Branding, content, and social media — managed end-to-end by one team. No handoff. Live in 4 weeks. Honest pricing from THB 45,000."
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

    {/* HERO */}
    <section className="relative bg-foreground text-background overflow-hidden">
      <div className="relative flex flex-col items-center justify-center text-center px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-8 md:mb-10">
            — SERVICES
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display h-display-md leading-[0.95] text-balance max-w-[900px]">
            Three things,<br /><span className={accent}>properly.</span>
          </h1>
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

    {/* SERVICE OVERVIEW — editorial big-number index */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1240px] mx-auto pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="border-y border-foreground divide-y divide-[hsl(var(--border-soft))]">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={0.05 * i}>
              <a
                href={`#svc-${s.n}`}
                className="group block py-10 md:py-14"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
                  <div className="col-span-12 md:col-span-2 font-display num-display text-[64px] md:text-[88px] text-foreground/15 group-hover:text-foreground transition-colors duration-500 leading-none tabular-nums">
                    {s.n}
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="font-display text-[34px] md:text-[52px] tracking-[-0.03em] leading-[0.95]">
                      {s.title}<span className={accent}>.</span>
                    </h3>
                  </div>
                  <p className="col-span-10 md:col-span-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-foreground/70">
                    {s.lead}
                  </p>
                  <div className="col-span-2 md:col-span-1 flex justify-end">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-foreground/40 group-hover:text-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
                <div className="mt-6 md:mt-8 flex items-center gap-6">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{s.from}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* AUDIT — START HERE (dark) */}
    <section className="bg-foreground text-background px-6 md:px-10">
      <div className="max-w-[1240px] mx-auto py-24 md:py-32">
        <div className="border-y border-background/30 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.4em] text-background/55 mb-4">— START HERE</p>
            <h2 className="font-display h-display-sm">
              ØRIONS <span className={accent}>Audit.</span>
            </h2>
            <p className="mt-5 font-thai text-[14px] leading-[1.7] text-background/70 max-w-[380px]">
              Not ready for a full engagement? Start with a 1-week audit. Credited 100% toward your next phase.
            </p>
            <div className="mt-8 flex items-baseline gap-3">
              <div className={`font-display ${accent} text-[48px] md:text-[64px] leading-none tracking-[-0.04em] tabular-nums`}>15K</div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/55">THB</div>
            </div>
          </div>

          <div className="md:col-span-7 md:border-l border-background/15 md:pl-12">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/55 mb-5">
              — what you get in 7 days
            </div>
            <ul className="space-y-3 font-thai text-[13.5px] leading-[1.7] text-background/85">
              {[
                "Brand & social audit report (5–6 pages)",
                "Top 3 problems + Top 3 opportunities",
                "30-day quick-win plan",
                "Competitor teardown (1 brand)",
                "1-hour working session with founder",
                "Action checklist (10 items)",
              ].map((it) => (
                <li key={it} className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-background/45 shrink-0">—</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-thai text-[13px] italic text-background/65">
              ✓ 100% credit-back if you continue with us within 60 days
            </p>
            <div className="mt-8">
              <CTA to="/contact" variant="invert">Book Audit</CTA>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PRICING — one section per service, 3 cards each, alternating bg */}
    <div id="pricing">
      {serviceTables.map((svc, idx) => {
        const dark = idx % 2 === 1; // svc 02 = dark, 01/03 = light
        const fg = dark ? "background" : "foreground";
        const muted = dark ? "background/60" : "muted-foreground";
        const lineSoft = dark ? "background/15" : "border-soft";
        return (
          <section
            key={svc.n}
            id={`svc-${svc.n}`}
            className={`scroll-mt-20 px-6 md:px-10 ${dark ? "bg-foreground text-background" : ""}`}
          >
            <div className="max-w-[1240px] mx-auto py-24 md:py-32">
              <Reveal>
                <div className={`flex items-baseline justify-between border-t pt-5 ${dark ? "border-background/30" : "border-foreground"}`}>
                  <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${dark ? "text-background/55" : "text-muted-foreground"}`}>
                    — {svc.n} · {svc.title.toUpperCase()}
                  </span>
                  <span className={`font-mono text-[10px] tracking-[0.3em] uppercase hidden sm:inline ${dark ? "text-background/45" : "text-muted-foreground"}`}>
                    3 PACKAGES
                  </span>
                </div>
              </Reveal>

              <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
                <Reveal delay={0.05} className="md:col-span-7">
                  <h2 className="font-display h-display-sm">
                    {svc.title.split(" ")[0]}<span className={accent}>.</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className="md:col-span-5">
                  <p className={`font-thai text-[14px] leading-[1.75] ${dark ? "text-background/70" : "text-foreground/70"}`}>
                    {svc.intro}
                  </p>
                </Reveal>
              </div>

              <div className={`mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 border-t ${dark ? "border-background/30" : "border-foreground"}`}>
                {svc.tiers.map((t, i) => (
                  <Reveal key={t.name} delay={0.06 * i}>
                    <article
                      className={`relative h-full p-7 md:p-8 flex flex-col ${
                        i > 0 ? (dark ? "md:border-l border-background/15" : "md:border-l border-soft") : ""
                      } ${t.highlight ? (dark ? "bg-background/[0.05]" : "bg-foreground/[0.04]") : ""}`}
                    >
                      {t.highlight && (
                        <div className={`absolute top-0 left-0 right-0 h-px ${dark ? "bg-background/60" : "bg-foreground"}`} />
                      )}

                      <header className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-[20px] md:text-[24px] tracking-[-0.02em]">{t.name}.</h3>
                        {t.highlight && (
                          <span className={`font-mono text-[9px] tracking-[0.3em] uppercase ${dark ? "text-background/55" : "text-muted-foreground"}`}>
                            ★ popular
                          </span>
                        )}
                      </header>

                      <p className={`mt-3 font-thai text-[13px] leading-[1.7] min-h-[3.5em] ${dark ? "text-background/65" : "text-foreground/65"}`}>
                        {t.tagline}
                      </p>

                      <div className="mt-7">
                        <div className="flex items-baseline gap-2">
                          <span className={`font-display text-[34px] md:text-[40px] leading-none tracking-[-0.04em] tabular-nums ${t.highlight ? accent : ""}`}>
                            {t.price}
                          </span>
                          <span className={`font-mono text-[10px] tracking-[0.2em] ${dark ? "text-background/55" : "text-muted-foreground"}`}>
                            THB {t.unit}
                          </span>
                        </div>
                        <div className={`mt-2 font-mono text-[10px] tracking-[0.2em] uppercase ${dark ? "text-background/50" : "text-muted-foreground"}`}>
                          {t.timeline ? `Timeline · ${t.timeline}` : t.lockIn}
                        </div>
                      </div>

                      <div className={`mt-7 pt-7 border-t ${dark ? "border-background/15" : "border-soft"} flex-1 space-y-6`}>
                        {t.groups.map((g) => (
                          <div key={g.heading}>
                            <div className={`font-mono text-[9px] tracking-[0.3em] uppercase mb-3 ${dark ? "text-background/45" : "text-muted-foreground"}`}>
                              — {g.heading}
                            </div>
                            <ul className="space-y-1.5">
                              {g.items.map((it) => (
                                <li key={it} className={`flex items-baseline gap-3 font-thai text-[13px] leading-[1.65] ${dark ? "text-background/85" : "text-foreground/85"}`}>
                                  <span className={`font-mono text-[10px] shrink-0 ${dark ? "text-background/35" : "text-muted-foreground/60"}`}>·</span>
                                  <span>{it}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {(t.bonuses || t.addOns) && (
                        <details className="mt-6 group">
                          <summary className={`cursor-pointer list-none flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase ${dark ? "text-background/65 hover:text-background" : "text-foreground/65 hover:text-foreground"} border-t ${dark ? "border-background/15" : "border-soft"} pt-5 transition-colors`}>
                            <span>More details</span>
                            <Plus className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-45" />
                          </summary>
                          <div className="mt-4 space-y-4">
                            {t.bonuses && (
                              <ul className="space-y-1.5">
                                {t.bonuses.map((b) => (
                                  <li key={b} className={`flex items-baseline gap-2.5 font-thai text-[12.5px] leading-[1.6] ${dark ? "text-background/75" : "text-foreground/75"}`}>
                                    <span className={`font-mono text-[10px] shrink-0 ${dark ? "text-background/45" : "text-muted-foreground"}`}>+</span>
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {t.addOns && (
                              <div>
                                <div className={`font-mono text-[9px] tracking-[0.3em] uppercase mb-2 ${dark ? "text-background/45" : "text-muted-foreground"}`}>
                                  — add-ons
                                </div>
                                <ul className="space-y-1">
                                  {t.addOns.map((it) => (
                                    <li key={it} className={`font-thai text-[12px] leading-[1.55] ${dark ? "text-background/60" : "text-foreground/60"}`}>
                                      {it}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </details>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>

    {/* WHY + PROCESS — combined */}
    <section className="bg-foreground text-background px-6 md:px-10">
      <div className="max-w-[1240px] mx-auto py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start border-t border-background/30 pt-10 md:pt-14">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.4em] text-background/55 mb-4">— WHY ØRIONS</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display h-display-sm">
                One team. <br /><span className={accent}>No handoff.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 font-thai text-[14px] leading-[1.8] text-background/70 max-w-[420px]">
                The team that takes your brief is the team that ships your work. Founder-led. Always.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {whyPoints.map((p) => (
                  <li key={p} className="flex items-baseline gap-3 font-thai text-[14px] leading-[1.7] text-background/85 border-b border-background/15 pb-3">
                    <span className="font-mono text-[10px] text-background/45 shrink-0">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Process strip */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="flex items-baseline justify-between border-t border-background/30 pt-5">
              <p className="font-mono text-[10px] tracking-[0.4em] text-background/55">— PROCESS</p>
              <p className="font-mono text-[10px] tracking-[0.3em] text-background/45 hidden sm:block">FROM HELLO · LIVE IN 4 WEEKS</p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={0.06 * i}>
                <div className={`md:px-6 ${i > 0 ? "md:border-l border-background/15" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-background/55">{p.n}</div>
                  <h3 className="mt-3 font-display text-[18px] md:text-[20px] tracking-[-0.02em]">{p.title}.</h3>
                  <p className="mt-2 font-thai text-[13px] leading-[1.65] text-background/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ — accordion */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground mb-4">— QUESTIONS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm max-w-[900px]">
            Things you might <br /><span className={accent}>be wondering.</span>
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="mt-14 border-t border-foreground">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-b border-soft">
              <AccordionTrigger className="group py-6 md:py-7 hover:no-underline text-left [&>svg]:hidden">
                <div className="flex items-baseline gap-6 w-full">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[17px] md:text-[20px] tracking-[-0.01em] flex-1">{f.q}</span>
                  <Plus className="w-4 h-4 text-foreground/60 transition-transform duration-300 group-data-[state=open]:rotate-45 shrink-0" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-7 pl-12 md:pl-14">
                <p className="font-thai text-[14px] md:text-[15px] leading-[1.75] text-foreground/75 max-w-[760px]">{f.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
