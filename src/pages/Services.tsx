import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";

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
  from: string;        // "Start from THB 150,000"
  unit?: string;       // "/ project" or "/ month"
  forWho: string;
  includes: string[];
};

type ServiceTable = {
  n: string;
  title: string;
  lead: string;
  tiers: Tier[];
};

const serviceTables: ServiceTable[] = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that ships.",
    tiers: [
      {
        name: "Essential Look",
        from: "Start from THB 150,000",
        unit: "/ project",
        forWho: "New brands that need to look premium and credible from day one.",
        includes: [
          "Logo + marks",
          "Color + typography system",
          "Business card",
          "Basic brand guideline",
        ],
      },
      {
        name: "Full Brand System",
        from: "Start from THB 350,000",
        unit: "/ project",
        forWho: "Category leaders building a complete brand system across every touchpoint.",
        includes: [
          "Everything in Essential",
          "Brand voice + verbal system",
          "Key visual / ad system",
          "Launch plan + rollout toolkit",
        ],
      },
    ],
  },
  {
    n: "02",
    title: "Content Production",
    lead: "Work that earns the scroll.",
    tiers: [
      {
        name: "High-Impact Assets",
        from: "Start from THB 60,000",
        unit: "/ project",
        forWho: "Photo and short-form video that stops the thumb in 1.7 seconds.",
        includes: [
          "Photo or short-form video × 3–5",
          "Concept + art direction",
          "Shoot day + post-production",
          "Platform-ready exports",
        ],
      },
      {
        name: "Master Story",
        from: "Start from THB 180,000",
        unit: "/ project",
        forWho: "Brand film or documentary that earns trust for the long run.",
        includes: [
          "Brand film or documentary",
          "Script + storyboard",
          "Full production crew",
          "Color, sound, finishing",
        ],
      },
    ],
  },
  {
    n: "03",
    title: "Social Media",
    lead: "Run monthly. Reported clearly.",
    tiers: [
      {
        name: "Foundation",
        from: "Start from THB 50,000",
        unit: "/ month",
        forWho: "Steady, on-brand presence — consistent posting and community care.",
        includes: [
          "8–10 high-quality posts / month",
          "Content calendar + copy",
          "Community management (light)",
          "Monthly report",
        ],
      },
      {
        name: "Growth",
        from: "Start from THB 80,000",
        unit: "/ month",
        forWho: "Expanding reach — full content engine plus performance ads.",
        includes: [
          "Everything in Foundation",
          "Short-form video production",
          "Paid ads strategy + management",
          "Bi-weekly performance review",
        ],
      },
      {
        name: "Mastery",
        from: "Start from THB 120,000",
        unit: "/ month",
        forWho: "End-to-end ownership — like an in-house marketing department.",
        includes: [
          "Everything in Growth",
          "Senior consultant direction",
          "Full-funnel paid media",
          "Weekly strategy syncs",
        ],
      },
    ],
  },
];

const steps = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check." },
  { n: "02", title: "Plan",   body: "Short proposal. Real numbers." },
  { n: "03", title: "Build",  body: "Strategy, identity, content, ads." },
  { n: "04", title: "Run",    body: "Monthly reports. Real results." },
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

    {/* HERO — dark, single clear message */}
    <section className="relative bg-foreground text-background">
      <div className="px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10">
            — SERVICES
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display h-display-md text-balance max-w-[900px]">
            Three things, <span className={accent}>properly.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-thai text-[15px] md:text-[17px] leading-[1.65] text-background/70 max-w-[560px]">
            Branding, content, and social media — managed end-to-end by one team.
            No handoff. Live in 4 weeks.
          </p>
        </Reveal>
      </div>
    </section>

    {/* WHAT WE DO — three services overview, light */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <article className={`h-full py-10 md:py-12 md:px-8 flex flex-col ${i > 0 ? "md:border-l border-soft" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">— {s.n}</div>
                <h2 className="mt-6 font-display text-[22px] md:text-[26px] tracking-[-0.02em]">{s.title}.</h2>
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-foreground/70 max-w-[300px]">{s.lead}</p>
                <ul className="mt-8 space-y-3 font-thai text-[13px] leading-[1.7] border-t border-soft pt-5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-muted-foreground/60">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING — single clear table */}
    <section className="px-6 md:px-10 bg-surface">
      <div className="max-w-[1200px] mx-auto py-24 md:py-32">
        <Reveal delay={0.05}>
          <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground mb-6">— PRICING</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display h-display-sm max-w-[820px]">
            Honest pricing, <span className={accent}>start from.</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 space-y-16 md:space-y-20">
          {serviceTables.map((svc) => (
            <article key={svc.n} id={`svc-${svc.n}`} className="scroll-mt-24">
              <header className="flex items-baseline gap-4 border-t border-foreground pt-5 pb-8">
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground tabular-nums">— {svc.n}</span>
                <h3 className="font-display text-[22px] md:text-[28px] tracking-[-0.02em]">{svc.title}.</h3>
              </header>

              <div className={`grid grid-cols-1 ${svc.tiers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} border-t border-soft`}>
                {svc.tiers.map((t, i) => (
                  <Reveal key={t.name} delay={0.06 * i}>
                    <div className={`h-full p-8 md:p-10 flex flex-col bg-background ${i > 0 ? "md:border-l border-soft" : ""}`}>
                      <h4 className="font-display text-[18px] md:text-[20px] tracking-[-0.02em]">{t.name}.</h4>
                      <p className="mt-2 font-thai text-[13px] leading-[1.65] text-foreground/70 min-h-[3em]">
                        {t.forWho}
                      </p>

                      <div className="mt-8 pt-5 border-t border-soft flex items-baseline gap-2">
                        <div className="font-display text-[28px] md:text-[34px] leading-none tracking-[-0.03em] tabular-nums">
                          {t.from.replace("Start from THB ", "")}
                        </div>
                        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                          THB {t.unit?.replace("/ ", "/")}
                        </div>
                      </div>

                      <ul className="mt-8 space-y-2.5 font-thai">
                        {t.includes.map((it) => (
                          <li key={it} className="flex items-baseline gap-3 text-[13px] leading-[1.7]">
                            <span className="font-mono text-[10px] text-muted-foreground/60">·</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* AUDIT — compact promo strip */}
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
          <ul className="md:col-span-4 space-y-2 font-thai text-[13px] leading-[1.7]">
            <li className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-muted-foreground/60">·</span><span>Brand &amp; spend audit</span></li>
            <li className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-muted-foreground/60">·</span><span>1-page 90-day roadmap</span></li>
            <li className="flex items-baseline gap-3"><span className="font-mono text-[10px] text-muted-foreground/60">·</span><span>1-hour working session</span></li>
          </ul>
        </div>
      </div>
    </section>

    {/* PROCESS — dark, mirrors Index pattern */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-28 md:py-36 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            From hello, live in <span className={accent}>4 weeks.</span>
          </h2>
        </Reveal>
        <div className="mt-16 pt-10 border-t border-background/30 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((st, i) => (
            <Reveal key={st.n} delay={0.08 * i}>
              <div className="relative">
                <div className="font-mono text-[10px] tracking-[0.2em] text-background/50">— {st.n}</div>
                <h3 className="mt-6 font-display text-[22px] md:text-[26px] tracking-[-0.02em]">
                  {st.title}.
                </h3>
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-background/70 max-w-[300px]">
                  {st.body}
                </p>
              </div>
            </Reveal>
          ))}
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
