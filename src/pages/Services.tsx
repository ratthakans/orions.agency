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
      "ตั้งแต่ตั้งชื่อ ออกแบบ logo ระบบภาพ ไปจนถึง brand book ที่ทีมและคู่ค้าใช้งานจริงได้ — ทุกชิ้นถูกออกแบบให้ทำงานทั้งบน feed, store, และ packaging โดยไม่หลุดเสียงแบรนด์",
    items: ["Naming · Logo · Marks", "Visual identity system", "Brand guidelines + book", "Launch toolkit"],
  },
  {
    n: "02",
    title: "Content",
    lead: "Photo, video, and design that earn the scroll.",
    detail:
      "ถ่ายเอง ตัดเอง ออกแบบเอง — ไม่ส่งต่อ ทีม in-house ของเราถ่าย photo, video, reels, motion graphics และจัดการ asset library ให้แบรนด์ของคุณมีคลังพร้อมใช้ตลอดทั้งปี",
    items: ["Photo + video shoots", "Reels + short-form video", "Graphic + motion design", "Asset libraries"],
  },
  {
    n: "03",
    title: "Social media",
    lead: "Strategy, posting, community, and paid ads.",
    detail:
      "วางกลยุทธ์ → โพสต์รายวัน → ดูแลคอมมูนิตี้ → รัน paid ads ทั้งหมดอยู่ภายใต้ทีมเดียว — ไม่มี hand-off, ไม่มี telephone game, รายงานผลทุกเดือน",
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

    {/* HERO — dark editorial */}
    <section className="relative bg-foreground text-background overflow-hidden">
      {/* vertical edge label */}
      <span
        aria-hidden
        className="pointer-events-none hidden md:flex absolute top-1/2 left-3 -translate-y-1/2 -rotate-90 origin-center font-mono text-[10px] tracking-[0.32em] uppercase text-background/40 whitespace-nowrap"
      >
        / 02 · SERVICES
      </span>

      <div className="px-6 md:px-10 pt-28 md:pt-32 pb-12 md:pb-16 max-w-[1400px] mx-auto">
        {/* Title block */}
        <div className="border-t border-background/25 pt-12 md:pt-16 grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <Reveal delay={0.08}>
              <h1 className="font-display h-display-md text-balance">
                Three things, <span className={accent}>properly.</span>
              </h1>
            </Reveal>
          </div>
        </div>

        {/* Bottom service index */}
        <Reveal delay={0.2}>
          <ul className="mt-14 md:mt-20 border-t border-background/25 pt-5 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
            {services.map((s) => (
              <li key={s.n}>
                <a
                  href={`#svc-${s.n}`}
                  className="group flex items-baseline gap-3 hover:opacity-70 transition-opacity"
                >
                  <span className="font-mono text-[10px] tracking-[0.25em] text-background/40 tabular-nums">— {s.n}</span>
                  <span className="font-display text-[16px] md:text-[18px] tracking-[-0.01em]">{s.title}.</span>
                  <span aria-hidden className="font-mono text-[12px] text-background/40 transition-transform duration-300 group-hover:translate-x-1">↓</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* KICKSTART — Audit */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground max-w-[1200px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12">
          {/* Left: title + price block */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal delay={0.05}>
              <span aria-hidden className="block h-px w-12 bg-gradient-accent mb-8 origin-left animate-[grow_900ms_cubic-bezier(0.76,0,0.24,1)_forwards]" />
              <h2 className="font-display h-display-sm">
                ØRIONS <span className={accent}>Audit.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 border-t border-foreground pt-5 flex items-baseline gap-4">
                <div className={`font-display ${accent} text-[40px] md:text-[56px] leading-none tracking-[-0.04em] tabular-nums`}>
                  30K
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">THB · 1–2 weeks</div>
                  <div className="mt-1 font-mono text-[11px] text-muted-foreground">Credited toward the next phase</div>
                </div>
              </div>
            </Reveal>
          </div>
          {/* Right: WHAT YOU GET — emphasized */}
          <div className="lg:col-span-7 lg:border-l border-foreground lg:pl-12">
            <Reveal delay={0.2}>
              <div className="flex items-baseline justify-between">
                <div className="index-badge text-muted-foreground">WHAT YOU GET</div>
                <div className={`font-mono text-[10px] tracking-[0.2em] ${accent}`}>03 DELIVERABLES</div>
              </div>
              <ul className="mt-8 space-y-0">
                {[
                  { k: "01", t: "Brand & Spend Audit", body: "Where the budget leaks and where the brand stalls in the market." },
                  { k: "02", t: "1-Page Roadmap",      body: "A 90-day unlock plan — priorities, sequence, and expected outcomes." },
                  { k: "03", t: "Working Session",     body: "One hour with the ØRIONS team to hand off the strategy." },
                ].map((it, i) => (
                  <li key={it.k} className="group grid grid-cols-12 gap-4 items-start py-5 border-t border-soft last:border-b">
                    <span className={`col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.2em] ${accent} tabular-nums pt-1`}>— {it.k}</span>
                    <div className="col-span-10 md:col-span-11">
                      <h4 className="font-display text-[16px] md:text-[18px] tracking-[-0.01em]">{it.t}.</h4>
                      <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground">{it.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* PRICE TABLES — per service */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground max-w-[1200px] mx-auto py-20 md:py-28">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm max-w-[820px]">
            Honest pricing, <span className={accent}>start from.</span>
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-24 space-y-24 md:space-y-32">
          {serviceTables.map((svc) => (
            <article key={svc.n} id={`svc-${svc.n}`} className="scroll-mt-24">
              {/* Service header — mirrors Index three-things */}
              <Reveal>
                <header className="border-t border-foreground pt-6 pb-10 grid grid-cols-1 md:grid-cols-12 gap-y-4 items-end">
                  <div className="md:col-span-2">
                    <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">— {svc.n} / 03</div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="font-display h-display-xs">{svc.title}.</h3>
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    <p className={`font-mono text-[11px] tracking-[0.2em] uppercase ${accent}`}>{svc.lead}</p>
                  </div>
                </header>
              </Reveal>

              {/* Tiers — featured middle (or last if 2) */}
              <div className={`grid grid-cols-1 ${svc.tiers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} border-t border-foreground`}>
                {svc.tiers.map((t, i) => {
                  const featured = svc.tiers.length === 3 ? i === 1 : i === 1;
                  return (
                    <Reveal key={t.name} delay={0.08 * i}>
                      <div
                        className={`relative h-full p-7 md:p-9 flex flex-col ${i > 0 ? "md:border-l border-soft" : ""} ${featured ? "bg-foreground text-background" : "bg-background"}`}
                      >
                        <span aria-hidden className={`block h-px w-12 mb-7 origin-left ${featured ? "bg-background/30" : "bg-gradient-accent"}`} />
                        <div className="flex items-baseline justify-between">
                          <div className={`font-mono text-[10px] tracking-[0.2em] ${featured ? "text-background/50" : "text-muted-foreground"}`}>
                            — {String(i + 1).padStart(2, "0")}
                          </div>
                          {featured && (
                            <div className={`font-mono text-[10px] tracking-[0.25em] ${accent}`}>★ POPULAR</div>
                          )}
                        </div>
                        <h4 className={`mt-5 font-display text-[22px] md:text-[26px] tracking-[-0.02em] ${featured ? "" : ""}`}>{t.name}.</h4>
                        <p className={`mt-3 font-thai text-[13px] leading-[1.65] ${featured ? "text-background/65" : "text-muted-foreground"}`}>
                          {t.forWho}
                        </p>

                        {/* Price */}
                        <div className={`mt-7 pt-5 border-t ${featured ? "border-background/20" : "border-foreground"} flex items-baseline gap-3`}>
                          <div className={`font-mono text-[10px] tracking-[0.25em] ${featured ? "text-background/50" : "text-muted-foreground"}`}>FROM</div>
                          <div className={`font-display ${accent} text-[28px] md:text-[34px] leading-none tracking-[-0.03em] tabular-nums`}>
                            {t.from.replace("Start from THB ", "")}
                          </div>
                          <div className={`font-mono text-[10px] tracking-[0.2em] ${featured ? "text-background/50" : "text-muted-foreground"}`}>
                            THB {t.unit?.replace("/ ", "/")}
                          </div>
                        </div>

                        {/* Includes */}
                        <div className={`mt-8 pt-5 border-t ${featured ? "border-background/15" : "border-soft"}`}>
                          <div className={`font-mono text-[10px] tracking-[0.25em] uppercase mb-4 ${featured ? "text-background/60" : "text-muted-foreground"}`}>
                            What you get
                          </div>
                          <ul className="space-y-3">
                            {t.includes.map((it, j) => (
                              <li key={it} className="flex items-baseline gap-3 font-thai text-[13.5px] leading-[1.6]">
                                <span className={`font-mono text-[9px] tracking-[0.18em] tabular-nums ${featured ? "text-background/40" : "text-muted-foreground/60"}`}>
                                  ·{String(j + 1).padStart(2, "0")}
                                </span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS — dark, mirrors Index pattern */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            From hello, live in <span className={accent}>4 weeks.</span>
          </h2>
        </Reveal>
        <div className="mt-16 pt-10 border-t border-background/30 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((st, i) => (
            <Reveal key={st.n} delay={0.08 * i}>
              <div className="relative">
                <span aria-hidden className="block h-px w-10 bg-gradient-accent mb-6 origin-left animate-[grow_900ms_cubic-bezier(0.76,0,0.24,1)_forwards]" />
                <div className="flex items-baseline justify-between">
                  <div className={`font-mono text-[10px] tracking-[0.2em] ${accent}`}>— {st.n}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] opacity-40">0{i + 1}/04</div>
                </div>
                <h3 className="mt-6 font-display text-[22px] md:text-[26px] tracking-[-0.02em] text-background">
                  {st.title}.
                </h3>
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-background/65">
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
