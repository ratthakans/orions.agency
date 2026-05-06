import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";

const SITE_URL = "https://orions.agency";

const services = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that works across every touchpoint.",
    detail:
      "ตั้งแต่ตั้งชื่อ ออกแบบ logo ระบบภาพ ไปจนถึง brand book ที่ทีมและคู่ค้าใช้งานจริงได้ — ทุกชิ้นถูกออกแบบให้ทำงานทั้งบน feed, store, และ packaging โดยไม่หลุดเสียงแบรนด์",
    items: [
      "Naming · Logo · Marks",
      "Visual identity system",
      "Brand guidelines + book",
      "Launch toolkit",
    ],
  },
  {
    n: "02",
    title: "Content",
    lead: "Photo, video, and design that earn the scroll.",
    detail:
      "ถ่ายเอง ตัดเอง ออกแบบเอง — ไม่ส่งต่อ ทีม in-house ของเราถ่าย photo, video, reels, motion graphics และจัดการ asset library ให้แบรนด์ของคุณมีคลังพร้อมใช้ตลอดทั้งปี",
    items: [
      "Photo + video shoots",
      "Reels + short-form video",
      "Graphic + motion design",
      "Asset libraries",
    ],
  },
  {
    n: "03",
    title: "Social media",
    lead: "Strategy, posting, community, and paid ads.",
    detail:
      "วางกลยุทธ์ → โพสต์รายวัน → ดูแลคอมมูนิตี้ → รัน paid ads ทั้งหมดอยู่ภายใต้ทีมเดียว — ไม่มี hand-off, ไม่มี telephone game, รายงานผลทุกเดือน",
    items: [
      "Strategy + content calendar",
      "Daily posting + scheduling",
      "Community management",
      "Paid ads (Meta, TikTok)",
    ],
  },
];

const tiers = [
  {
    eyebrow: "STARTER",
    name: "Standard",
    sub: "Start strong. Build consistency.",
    price: "THB 50k",
    body: "Strategy, content, and monthly posting for brands building their presence on social.",
    dark: false,
  },
  {
    eyebrow: "MOST POPULAR",
    name: "Pro",
    sub: "Grow with strategy, content, and paid ads.",
    price: "THB 80k",
    body: "Full strategy, content production, community management, and paid ads — managed end-to-end.",
    dark: true,
  },
  {
    eyebrow: "PREMIUM",
    name: "Exclusive",
    sub: "Full-service. Brand to bottom-funnel.",
    price: "THB 120k",
    body: "Branding, content, ads, and senior creative direction. For brands going all-in.",
    dark: false,
  },
];

const steps = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check." },
  { n: "02", title: "Plan", body: "Short proposal. Real numbers." },
  { n: "03", title: "Build", body: "Strategy, identity, content, ads." },
  { n: "04", title: "Run", body: "Monthly reports. Real results." },
];

const Services = () => (
  <div>
    <SEO
      title="Services & pricing — ØRIONS"
      description="Branding, content, and paid ads — managed end-to-end. Monthly retainers from THB 50k. Quick start from THB 30k."
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

    <PageHero
      eyebrow="SERVICES · INDEX"
      verticalLabel="/ 02 · SERVICES"
      title={<>Three things, <span className="italic text-muted-foreground">properly.</span></>}
    />

    {/* SERVICES — three cards */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground">
        {services.map((s) => (
          <Reveal key={s.n}>
            <article className="group py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-b border-soft transition-colors duration-500">
              <header className="lg:col-span-4">
                <div className="num-display text-[56px] md:text-[120px] transition-transform duration-500 group-hover:translate-x-1 text-muted-foreground/40 group-hover:text-foreground">
                  {s.n}
                </div>
                <h2 className="mt-8 font-display italic h-display-xs">{s.title}</h2>
                <p className="mt-6 text-[15px] md:text-[16px] leading-[1.7] font-thai max-w-[380px]" style={{ color: "hsl(var(--accent-from))" }}>
                  {s.lead}
                </p>
              </header>

              <div className="lg:col-span-8 space-y-12">
                <p className="text-[15px] md:text-[16px] leading-[1.8] font-thai text-muted-foreground max-w-[640px]">
                  {s.detail}
                </p>
                <div>
                  <div className="border-t border-foreground pt-3">
                    <span className="index-badge">CAPABILITIES</span>
                  </div>
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-[14px] font-thai">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3 border-b border-soft pb-3">
                        <span className="text-muted-foreground">—</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* HONEST PRICING */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28">
        <Reveal>
          <p className="index-badge" style={{ color: "hsl(var(--accent-from))" }}>RETAINERS · MONTHLY</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            Honest <span className="italic" style={{ color: "hsl(var(--accent-from))" }}>pricing.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
          {tiers.map((t) => (
            <Reveal key={t.name}>
              <article className={`h-full p-7 md:p-9 flex flex-col ${t.dark ? "bg-foreground text-background" : "bg-background"}`}>
                <div className="index-badge" style={{ color: "hsl(var(--accent-from))" }}>{t.eyebrow}</div>
                <h3 className="mt-5 font-display italic text-[40px] md:text-[56px] tracking-[-0.02em] leading-none">
                  {t.name}
                </h3>
                <p className={`mt-4 text-[14px] font-thai ${t.dark ? "text-background/75" : "text-muted-foreground"}`}>{t.sub}</p>

                <div className="mt-12">
                  <div className={`font-mono text-[10px] tracking-[0.18em] uppercase ${t.dark ? "text-background/60" : "text-muted-foreground"}`}>From</div>
                  <div className="mt-2 num-display italic text-[38px] md:text-[52px] leading-none">{t.price}</div>
                  <div className={`mt-2 font-mono text-[10px] tracking-[0.18em] uppercase ${t.dark ? "text-background/60" : "text-muted-foreground"}`}>per month</div>
                </div>

                <div className={`mt-10 hairline w-8 ${t.dark ? "bg-background/40" : ""}`} />
                <p className={`mt-6 text-[14px] leading-[1.7] font-thai flex-1 ${t.dark ? "text-background/85" : ""}`}>{t.body}</p>
                <p className={`mt-8 font-mono text-[10px] tracking-[0.18em] uppercase ${t.dark ? "text-background/55" : "text-muted-foreground"}`}>
                  Custom scope on request.
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* STARTUP — get going fast */}
        <Reveal delay={0.15}>
          <div className="mt-px border border-foreground border-t-0 bg-background p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="index-badge" style={{ color: "hsl(var(--accent-from))" }}>STARTUP · GET GOING FAST</div>
              <h3 className="mt-3 font-display italic text-[24px] md:text-[32px] tracking-[-0.02em]">Quick start.</h3>
              <p className="mt-2 text-[14px] font-thai text-muted-foreground">
                Brand audit + content plan, ready to roll in 2 weeks.
              </p>
            </div>
            <div className="md:text-right">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">From</div>
              <div className="mt-1 num-display italic text-[28px] md:text-[36px]" style={{ color: "hsl(var(--accent-from))" }}>THB 30k</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* HOW IT GOES — 4 steps */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/40 py-20 md:py-28">
        <Reveal>
          <p className="index-badge opacity-70">PROCESS · 4 WEEKS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            From hello, live in <span className="italic" style={{ color: "hsl(var(--accent-from))" }}>4 weeks.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-background/30 border border-background/30">
          {steps.map((st) => (
            <Reveal key={st.n}>
              <div className="bg-foreground p-7 md:p-9 h-full flex flex-col">
                <span className="font-mono text-[11px] tracking-[0.12em] opacity-60">— {st.n}</span>
                <h3 className="mt-10 font-display italic text-[28px] md:text-[36px] tracking-[-0.02em]">{st.title}.</h3>
                <p className="mt-6 text-[14px] leading-[1.6] font-thai opacity-85">{st.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      eyebrow="✦ NOW BOOKING — Q3 2026"
      title={
        <>
          Tell us about <br />
          <span className="italic">the brand</span><span className="text-muted-foreground">.</span>
        </>
      }
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[{ label: "Start the conversation", to: "/contact" }]}
    />
  </div>
);

export default Services;
