import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import YouTubeFacade from "@/components/YouTubeFacade";

const accent = "text-gradient";

const SITE_URL = "https://orions.agency";

const testimonials = [
  {
    niche: "F&B",
    stat: "+62%",
    statLabel: "BOOKINGS",
    quote: "They got our brand voice right from day one. Bookings up 62% in three months.",
    name: "Cedric C.",
    handle: "Maison Lumière · @maisonlumiere",
  },
  {
    niche: "FASHION",
    stat: "11d",
    statLabel: "TO SELL OUT",
    quote: "Sold out our first drop in eleven days. No paid ads needed.",
    name: "Estelle S.",
    handle: "Saint Manor · @saintmanor",
  },
  {
    niche: "HOSPITALITY",
    stat: "−41%",
    statLabel: "COST / BOOKING",
    quote: "Cut our cost per booking by 41%. Bookings still up.",
    name: "Shimpei M.",
    handle: "Hôtel Vergé · @hotelverge",
  },
];

const trustedBy = [
  "MAISON LUMIÈRE", "SAINT MANOR", "HÔTEL VERGÉ", "CALA / BKK",
  "NORTH MERIDIAN", "AT.09", "CAFÉ ORSAY", "STUDIO — KIN",
  "PLAYA NORTE", "CASA · SOL", "MARLOW & CO.", "UNION BKK",
];

const Work = () => (
  <div>
    <SEO
      title="Work — ØRIONS"
      description="Selected results across F&B, fashion, and hospitality. Full case studies launching Q3 2026."
      path="/work"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
        ],
      }}
    />

    {/* HERO — dark, single clear message */}
    <section className="relative bg-foreground text-background">
      <div className="px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10">— WORK</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display h-display-md text-balance max-w-[900px]">
            Real brands. Real <span className={accent}>results.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-thai text-[15px] md:text-[17px] leading-[1.65] text-background/70 max-w-[560px]">
            Selected results across F&amp;B, fashion, and hospitality. Full case studies launching Q3 2026.
          </p>
        </Reveal>
      </div>
    </section>

    {/* COMING SOON BANNER */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20">
        <Reveal>
          <div className="border border-foreground bg-foreground text-background p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.2em] text-background/60">— NEW CHAPTER · 2026</div>
              <h2 className="mt-6 font-display h-display-sm">
                Full case studies <br className="hidden md:block" />launching <span className={accent}>Q3 2026.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:border-l md:border-background/20 md:pl-8 flex flex-col justify-center">
              <p className="font-thai text-[15px] leading-[1.7] text-background/70">
                เรากำลังจัด case studies ใหม่ของ F&amp;B, fashion และ hospitality ให้พร้อมเผยแพร่ — ในระหว่างนี้ ลองอ่านเสียงจากลูกค้าด้านล่าง
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WHAT CLIENTS SAY */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            What clients <span className={accent}>say.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <article className={`relative h-full py-10 md:py-12 md:px-8 flex flex-col ${i > 0 ? "md:border-l border-soft" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">— {t.niche}</div>
                <div className={`mt-8 font-display ${accent} text-[48px] md:text-[64px] leading-[1] tracking-[-0.04em] tabular-nums`}>{t.stat}</div>
                <div className="mt-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{t.statLabel}</div>
                <p className="mt-8 font-thai text-[14px] leading-[1.7] text-foreground/70 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 pt-5 border-t border-soft">
                  <div className="font-display text-[15px] tracking-[-0.01em]">{t.name}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{t.handle}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* AMBIENT 21:9 */}
    <section className="relative w-full overflow-hidden bg-foreground border-y border-background/20">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <YouTubeFacade videoId="u4r7Szy3uxI" title="Work in motion" ambient />
      </div>
    </section>

    {/* TRUSTED BY */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            40+ brands across F&amp;B, fashion, <br className="hidden md:block" />and <span className={accent}>hospitality.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-soft">
          {trustedBy.map((name, i) => (
            <div
              key={name}
              className={`relative aspect-[2/1] flex items-center justify-center text-center px-4 cursor-default border-soft ${(i % 6) !== 5 ? "border-r" : ""} ${i < trustedBy.length - 6 ? "border-b" : ""}`}
            >
              <span className="font-display text-[11px] md:text-[12px] tracking-[0.04em] text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground text-right">
          [ Selected · Q2 2026 ]
        </p>
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

export default Work;
