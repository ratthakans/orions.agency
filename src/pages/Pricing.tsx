import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";

const SITE_URL = "https://orions.agency";

type Package = {
  label: string;
  title: string;
  sub: string;
  price: string;
  cadence: string;
  summary: string;
  hero?: boolean;
  groups: { heading: string; items: string[] }[];
  bestFor: string[];
  delivery: string;
};

const packages: Package[] = [
  {
    label: "STARTER",
    title: "Standard",
    sub: "Start strong. Build consistency.",
    price: "THB 50k",
    cadence: "per month · 3-month minimum",
    summary:
      "วางรากฐาน social presence ให้แบรนด์ที่เพิ่งเริ่มหรือกำลังจัดระเบียบใหม่ — strategy, content, posting รายเดือน คุมโทนให้คงเส้นคงวาทั้งฟีด",
    hero: false,
    groups: [
      {
        heading: "Strategy",
        items: [
          "Brand & social audit (one-time)",
          "Monthly content calendar",
          "Tone of voice guidelines",
          "Quarterly strategy review",
        ],
      },
      {
        heading: "Content production",
        items: [
          "12 posts / month (graphic + photo)",
          "4 short-form videos / month",
          "1 half-day shoot / month (in-studio)",
          "Caption + hashtag writing",
        ],
      },
      {
        heading: "Posting & reporting",
        items: [
          "Daily scheduling on 2 channels",
          "Light community replies",
          "Monthly performance report",
        ],
      },
    ],
    bestFor: ["Early-stage brands", "Single-channel focus", "Bootstrapped budgets"],
    delivery: "Live in 2–3 weeks from kickoff.",
  },
  {
    label: "MOST POPULAR",
    title: "Pro",
    sub: "Grow with strategy, content, and paid ads.",
    price: "THB 80k",
    cadence: "per month · 6-month minimum",
    summary:
      "ครบจบที่ทีมเดียว — strategy, content production, community, และ paid ads ทำงานร่วมกันแบบ integrated เพื่อโตทั้ง awareness และ conversion",
    hero: true,
    groups: [
      {
        heading: "Strategy",
        items: [
          "Full brand & competitive audit",
          "Quarterly campaign planning",
          "Monthly content calendar + themes",
          "Funnel & creative testing roadmap",
        ],
      },
      {
        heading: "Content production",
        items: [
          "20 posts / month (graphic + photo)",
          "8 short-form videos / month",
          "2 half-day shoots / month",
          "Motion graphics + reels editing",
        ],
      },
      {
        heading: "Posting & community",
        items: [
          "Daily scheduling on 3 channels",
          "Active community management",
          "Influencer / UGC sourcing (light)",
        ],
      },
      {
        heading: "Paid ads",
        items: [
          "Meta + TikTok ads management",
          "Up to THB 200k ad spend included in mgmt",
          "Weekly creative iteration",
          "Bi-weekly performance reviews",
        ],
      },
    ],
    bestFor: ["Growing DTC brands", "Brands running paid media", "Multi-channel social"],
    delivery: "Live in 3–4 weeks from kickoff.",
  },
  {
    label: "PREMIUM",
    title: "Exclusive",
    sub: "Full-service. Brand to bottom-funnel.",
    price: "THB 120k",
    cadence: "per month · 6-month minimum",
    summary:
      "Full creative partnership — branding, content, ads, และ senior creative direction สำหรับแบรนด์ที่ลงทุนกับ brand equity แบบจริงจัง",
    hero: false,
    groups: [
      {
        heading: "Strategy & direction",
        items: [
          "Senior creative direction (dedicated)",
          "Brand evolution roadmap",
          "Quarterly campaign concepting",
          "Annual brand health review",
        ],
      },
      {
        heading: "Branding refinement",
        items: [
          "Visual identity tune-ups",
          "Brand guideline updates",
          "Launch toolkit per campaign",
        ],
      },
      {
        heading: "Content production",
        items: [
          "30+ posts / month",
          "12+ short-form videos / month",
          "4 shoot days / month (studio + on-location)",
          "Long-form video (1 hero / quarter)",
        ],
      },
      {
        heading: "Paid ads",
        items: [
          "Meta + TikTok + Google ads",
          "Up to THB 500k ad spend included in mgmt",
          "Creative testing at scale",
          "Weekly performance reviews",
        ],
      },
    ],
    bestFor: ["Established brands scaling fast", "Multi-market launches", "Premium / luxury positioning"],
    delivery: "Live in 4 weeks from kickoff.",
  },
];

const addons = [
  { name: "Quick start", price: "From THB 30k", body: "Brand audit + 30-day content plan, ready to roll in 2 weeks." },
  { name: "Brand identity", price: "From THB 80k", body: "Naming, logo, visual system, and brand book." },
  { name: "Hero campaign shoot", price: "From THB 120k", body: "Concept, production, edit — full day, multiple deliverables." },
  { name: "Influencer program", price: "From THB 40k / mo", body: "Sourcing, briefing, contracting, and reporting." },
];

const faqs = [
  { q: "Are there any hidden fees?", a: "No. Retainers cover everything listed. Ad spend, talent fees, and licensed assets are billed at cost with no markup." },
  { q: "Can we change tier later?", a: "Yes. You can upgrade or downgrade at the start of any new month with 30 days notice." },
  { q: "Who owns the content?", a: "You do. Full ownership of every asset we produce transfers on delivery." },
  { q: "What if we need something custom?", a: "Most engagements are. Tell us what you need — we'll write a custom scope and quote within 48 hours." },
];

const Pricing = () => (
  <div>
    <SEO
      title="Pricing — ØRIONS"
      description="Transparent monthly retainers from THB 50k. Branding, content, paid ads. See full package details, deliverables, and FAQs."
      path="/pricing"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing` },
        ],
      }}
    />

    <PageHero
      eyebrow="PRICING · INDEX"
      verticalLabel="/ 05 · PRICING"
      title={<>Honest <span className="italic text-muted-foreground">pricing.</span></>}
    />

    {/* PACKAGES */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-24 max-w-[1400px] mx-auto">
        <Reveal>
          <p className="index-badge text-muted-foreground">01 — RETAINERS · MONTHLY</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-px bg-foreground border border-foreground">
          {packages.map((p) => (
            <Reveal key={p.title}>
              <article className={`h-full p-7 md:p-10 flex flex-col ${p.hero ? "bg-foreground text-background" : "bg-background"}`}>
                <div className={`font-mono text-[10px] tracking-[0.22em] ${p.hero ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.label}
                </div>
                <h2 className={`mt-4 font-display text-[36px] md:text-[44px] leading-none tracking-[-0.02em] ${p.hero ? "text-background" : "text-foreground"}`}>
                  {p.title}
                </h2>
                <p className={`mt-3 font-thai text-[14px] ${p.hero ? "text-background/75" : "text-muted-foreground"}`}>
                  {p.sub}
                </p>

                <div className="mt-10">
                  <div className={`font-mono text-[10px] tracking-[0.18em] uppercase ${p.hero ? "text-background/60" : "text-muted-foreground"}`}>From</div>
                  <div className={`mt-2 num-display text-[36px] md:text-[48px] leading-none ${p.hero ? "text-background" : "text-foreground"}`}>
                    {p.price}
                  </div>
                  <div className={`mt-2 font-mono text-[10px] tracking-[0.18em] uppercase ${p.hero ? "text-background/60" : "text-muted-foreground"}`}>
                    {p.cadence}
                  </div>
                </div>

                <div className={`mt-8 hairline w-8 ${p.hero ? "bg-background/40" : ""}`} />
                <p className={`mt-6 font-thai text-[14px] leading-[1.7] ${p.hero ? "text-background/85" : "text-foreground/80"}`}>
                  {p.summary}
                </p>

                <div className="mt-10 space-y-7 flex-1">
                  {p.groups.map((g) => (
                    <div key={g.heading}>
                      <div className={`font-mono text-[10px] tracking-[0.18em] uppercase ${p.hero ? "text-background/60" : "text-muted-foreground"}`}>
                        {g.heading}
                      </div>
                      <ul className={`mt-3 space-y-2 text-[13px] leading-[1.6] font-thai ${p.hero ? "text-background/90" : "text-foreground/85"}`}>
                        {g.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <span className={p.hero ? "text-background/50" : "text-muted-foreground"}>—</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className={`mt-10 pt-6 border-t ${p.hero ? "border-background/25" : "border-soft"}`}>
                  <div className={`font-mono text-[10px] tracking-[0.18em] uppercase ${p.hero ? "text-background/60" : "text-muted-foreground"}`}>
                    Best for
                  </div>
                  <p className={`mt-2 font-thai text-[13px] ${p.hero ? "text-background/85" : "text-foreground/80"}`}>
                    {p.bestFor.join(" · ")}
                  </p>
                  <p className={`mt-4 font-mono text-[10px] tracking-[0.18em] uppercase ${p.hero ? "text-background/55" : "text-muted-foreground"}`}>
                    {p.delivery}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ADD-ONS */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-24 max-w-[1400px] mx-auto">
        <Reveal>
          <p className="index-badge text-muted-foreground">02 — ONE-OFF PROJECTS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-sm">
            Need something <span className="italic" style={{ color: "hsl(var(--accent-from))" }}>specific?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/40 border border-foreground">
          {addons.map((a) => (
            <Reveal key={a.name}>
              <div className="bg-background p-6 md:p-7 h-full flex flex-col">
                <div className="font-display text-[18px] md:text-[20px] tracking-[-0.01em]">{a.name}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "hsl(var(--accent-from))" }}>
                  {a.price}
                </div>
                <p className="mt-6 font-thai text-[13px] leading-[1.6] text-foreground/75 flex-1">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* FAQS */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-24 max-w-[1400px] mx-auto">
        <Reveal>
          <p className="index-badge text-muted-foreground">03 — QUESTIONS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-sm">
            Common <span className="italic" style={{ color: "hsl(var(--accent-from))" }}>questions.</span>
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-foreground">
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 md:gap-12 py-8 border-b border-soft">
                <div className="font-display text-[18px] md:text-[22px] tracking-[-0.01em]">{f.q}</div>
                <p className="font-thai text-[14px] md:text-[15px] leading-[1.7] text-foreground/80">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      eyebrow="✦ NOW BOOKING — Q3 2026"
      title={<>Tell us about <br /><span className="italic">the brand</span><span className="text-muted-foreground">.</span></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[{ label: "Start the conversation", to: "/contact" }]}
    />
  </div>
);

export default Pricing;