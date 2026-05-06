import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
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

    <PageHero
      eyebrow="SERVICES · INDEX"
      verticalLabel="/ 02 · SERVICES"
      title={<>Three things, <span className={accent}>properly.</span></>}
    />

    {/* OVERVIEW — three-card grid mirroring Index */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-20 md:py-28 max-w-[1200px] mx-auto">
        <Reveal><p className="index-badge text-background/60">— 01 · WHAT WE DO</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-sm">
            One team, <span className={accent}>no handoff.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-background/20 border border-background/20">
          {services.map((s) => (
            <Reveal key={s.n}>
              <article className="h-full p-7 md:p-8 bg-foreground text-background flex flex-col">
                <div className="font-mono text-[10px] tracking-[0.2em] opacity-50">— {s.n}</div>
                <h3 className={`mt-10 font-display ${accent} text-[22px] md:text-[26px] tracking-[-0.02em]`}>{s.title}</h3>
                <p className="mt-3 font-thai text-[13px] text-background/65">{s.lead}</p>
                <div className="mt-6 hairline w-8 bg-background/30" />
                <ul className="mt-6 space-y-2 text-[13px] leading-[1.6] font-thai text-background/85">
                  {s.items.map((it) => <li key={it}>— {it}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* DEEP DIVE — long-form per service */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground max-w-[1200px] mx-auto">
        <Reveal>
          <div className="pt-6 pb-3">
            <p className="index-badge text-muted-foreground">— 02 · IN DETAIL</p>
          </div>
        </Reveal>
        {services.map((s, i) => (
          <Reveal key={s.n}>
            <article className={`group py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 ${i < services.length - 1 ? "border-b border-soft" : ""}`}>
              <header className="lg:col-span-4">
                <div className="num-display text-[56px] md:text-[120px] transition-transform duration-500 group-hover:translate-x-1 text-muted-foreground/40 group-hover:text-foreground">
                  {s.n}
                </div>
                <h2 className="mt-8 font-display h-display-xs">{s.title}</h2>
                <p className={`mt-6 text-[15px] md:text-[16px] leading-[1.7] font-thai max-w-[380px] ${accent}`}>
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

    {/* PROCESS — dark, mirrors Index pattern */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-20 md:py-28 max-w-[1200px] mx-auto">
        <Reveal><p className="index-badge text-background/60">— 03 · PROCESS</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-sm">
            From hello, live in <span className={accent}>4 weeks.</span>
          </h2>
        </Reveal>
        <div className="mt-16 pt-8 border-t border-background/30 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((st) => (
            <Reveal key={st.n}>
              <div>
                <div className={`font-mono text-[10px] tracking-[0.2em] ${accent}`}>— {st.n}</div>
                <h3 className="mt-5 font-display text-[22px] md:text-[26px] tracking-[-0.02em] text-background">
                  {st.title}.
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] font-thai text-background/65">
                  {st.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING TEASER — link to /pricing */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1200px] mx-auto">
        <Reveal><p className="index-badge text-muted-foreground">— 04 · PRICING</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-sm max-w-[800px]">
            Honest <span className={accent}>pricing.</span> Three retainers, one quick start.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[640px] font-thai text-[15px] leading-[1.7] text-muted-foreground">
            From THB 50k/month. Full deliverables, ad-spend caps, and FAQs are on the pricing page.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10">
            <a
              href="/pricing"
              className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
            >
              <span>View full pricing &amp; details</span>
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    <ClosingCTA
      eyebrow="✦ NOW BOOKING — Q3 2026"
      title={<>Tell us about <span className={accent}>the brand.</span></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[{ label: "Start the conversation", to: "/contact" }]}
    />
  </div>
);

export default Services;
