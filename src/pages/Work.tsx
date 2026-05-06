import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import YouTubeFacade from "@/components/YouTubeFacade";

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

    <PageHero
      eyebrow="WORK · INDEX"
      verticalLabel="/ 03 · WORK"
      title={<>Real brands<span className="text-muted-foreground">.</span><br />Real <span className="italic text-muted-foreground">results.</span></>}
    />

    {/* COMING SOON BANNER */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20">
        <Reveal>
          <div className="border border-foreground bg-foreground text-background p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <div className="index-badge opacity-70">✦ NEW CHAPTER · 2026</div>
              <h2 className="mt-6 font-display h-display-sm">
                Full case studies <br className="hidden md:block" />launching <span className="italic" style={{ color: "hsl(var(--accent-from))" }}>Q3 2026</span>.
              </h2>
            </div>
            <div className="md:col-span-5 md:border-l md:border-background/20 md:pl-8 flex flex-col justify-center">
              <p className="font-thai text-[15px] leading-[1.7] opacity-85">
                เรากำลังจัด case studies ใหม่ของ F&amp;B, fashion และ hospitality ให้พร้อมเผยแพร่ — ในระหว่างนี้ ลองอ่านเสียงจากลูกค้าด้านล่าง
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WHAT CLIENTS SAY */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28">
        <Reveal>
          <p className="index-badge">01 — RESULTS</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            What clients <span className="italic text-muted-foreground">say.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <article className="bg-background p-7 md:p-9 h-full flex flex-col">
                <div className="index-badge text-muted-foreground">{t.niche}</div>
                <div className="mt-12">
                  <div className="num-display text-[48px] md:text-[72px] leading-none" style={{ color: "hsl(var(--accent-from))" }}>{t.stat}</div>
                  <div className="mt-3 index-badge text-muted-foreground">{t.statLabel}</div>
                </div>
                <div className="mt-8 hairline w-8" />
                <p className="mt-6 font-thai italic text-[16px] leading-[1.65] flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 pt-5 border-t border-soft">
                  <div className="font-display text-[15px] tracking-[-0.01em]">{t.name}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">{t.handle}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* AMBIENT 21:9 */}
    <section className="relative w-full overflow-hidden bg-foreground">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <YouTubeFacade videoId="u4r7Szy3uxI" title="Work in motion" ambient />
      </div>
    </section>

    {/* TRUSTED BY */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28">
        <Reveal>
          <p className="index-badge">02 — TRUSTED BY</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            40+ brands across <br className="hidden md:block" />F&B, fashion, and <span className="italic text-muted-foreground">hospitality.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-foreground border border-foreground">
          {trustedBy.map((name) => (
            <div key={name} className="bg-background h-24 md:h-28 flex items-center justify-center px-4 text-center">
              <span className="font-display text-[12px] md:text-[14px] tracking-[0.02em] text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground text-right">
          [ Selected · Q2 2026 ]
        </p>
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

export default Work;
