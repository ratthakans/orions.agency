import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import hongmoveLogo from "@/assets/logos/hongmove.png";
import { caseStudies } from "@/data/caseStudies";

const SITE_URL = "https://orions.agency";

const verticals = [
  { n: "01", name: "Restaurant",              moments: "เปิดสาขา · launch menu · เปลี่ยน chef · เจาะตลาดต่างชาติ" },
  { n: "02", name: "Hospitality",             moments: "เพิ่ม occupancy off-season · rebrand หลัง renovation · MICE" },
  { n: "03", name: "Golf",                    moments: "เพิ่ม member ต่างชาติ · tournament · rebrand" },
  { n: "04", name: "Real Estate",             moments: "launch project · closeout · เจาะตลาดต่างชาติ" },
  { n: "05", name: "Wellness",                moments: "launch program · wellness tourism · membership" },
  { n: "06", name: "Premium Retail & Fashion", moments: "collection launch · flagship opening · founder story" },
];

const moments = [
  { n: "01", name: "Restaurant Opening",   desc: "ทำให้คนต่อแถวตั้งแต่วันแรก — pre-buzz, opening film, founder voice" },
  { n: "02", name: "Hotel Rebrand",        desc: "เปลี่ยน occupancy off-season ด้วย editorial story และ guest journey ใหม่" },
  { n: "03", name: "Real Estate Launch",   desc: "หนังเปิดโครงการระดับ documentary + closeout campaign สำหรับยูนิตสุดท้าย" },
  { n: "04", name: "Wellness Program",     desc: "วาง brand voice รอบความเชื่อ + content loop สำหรับ membership conversion" },
  { n: "05", name: "Premium Retail Drop",  desc: "Editorial drop คล้ายนิตยสาร — สำหรับ collection ที่ต้องการ sell-out วันแรก" },
  { n: "06", name: "Corporate Shift",      desc: "Legacy modernization — บอกเรื่องการเปลี่ยนผ่านแบบไม่ทิ้งราก" },
];

const projects = caseStudies.map((c) => ({
  n: c.n,
  slug: c.slug,
  title: c.title,
  niche: c.niche.toUpperCase(),
  scope: c.scope,
  impact: c.impact,
  body: c.summary,
  img: c.cover,
}));

const testimonials = [
  { niche: "F&B",         stat: "+62%", statLabel: "BOOKINGS",       quote: "They got our brand voice right from day one. Bookings up 62% in three months.", name: "Cedric C.",  handle: "Maison Lumière · @maisonlumiere" },
  { niche: "FASHION",     stat: "11d",  statLabel: "TO SELL OUT",    quote: "Sold out our first drop in eleven days. No paid ads needed.",                  name: "Estelle S.", handle: "Saint Manor · @saintmanor" },
  { niche: "HOSPITALITY", stat: "−41%", statLabel: "COST / BOOKING", quote: "Cut our cost per booking by 41%. Bookings still up.",                          name: "Shimpei M.", handle: "Hôtel Vergé · @hotelverge" },
  { niche: "PROPTECH",    stat: "+312%",statLabel: "SIGN-UPS",       quote: "Launch landed exactly the way we pictured it. Sign-ups tripled in the first month.", name: "Pailin R.", handle: "Hongmove · @hongmove" },
  { niche: "EVENTS",      stat: "+88%", statLabel: "CONVERSION",     quote: "Recap films that actually sold the next show. Conversion jumped 88%.",          name: "Tee K.",     handle: "Heavy Organizer · @heavy.org" },
  { niche: "MOBILITY",    stat: "+540%",statLabel: "DOWNLOADS",      quote: "From zero to 540% growth in app downloads. The team made it look easy.",        name: "Min S.",     handle: "GCOO · @gcoo.app" },
];

type TrustedBrand = { name: string; logo?: string };
const trustedBy: TrustedBrand[] = [
  { name: "HONGMOVE", logo: hongmoveLogo },
  { name: "MAISON LUMIÈRE" }, { name: "SAINT MANOR" },
  { name: "HÔTEL VERGÉ" },    { name: "CALA / BKK" },
  { name: "NORTH MERIDIAN" }, { name: "AT.09" },
  { name: "CAFÉ ORSAY" },     { name: "STUDIO — KIN" },
  { name: "PLAYA NORTE" },    { name: "CASA · SOL" },
  { name: "MARLOW & CO." },
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

    {/* 01 · HERO */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-16 md:pb-20">
        <SectionLabel index="01" label="Selected Work" />
        <Reveal delay={0.05}>
          <h1 className="mt-10 h-display-xl max-w-[18ch]">
            Real brands. Real <em className="italic text-cinnabar">results.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 font-serif italic text-[15px] md:text-[18px] text-muted-foreground">
            Independent editorial studio. Bangkok. — Boutique Creative Agency.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
            Selected results across F&amp;B, fashion, and hospitality. Full case studies launching Q3 2026.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 · FOCUS VERTICALS */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Focus Verticals" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md max-w-[20ch]">
            หกอุตสาหกรรมที่เรา <em className="italic text-cinnabar">รู้ลึก.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {verticals.map((v, i) => (
            <Reveal key={v.n} delay={(i % 3) * 0.06}>
              <div className={`p-8 md:p-10 h-full bg-background ${i % 3 > 0 ? "md:border-l border-foreground/20" : ""} ${i >= 3 ? "md:border-t border-foreground/20" : ""} ${i > 0 && i < 3 ? "border-t md:border-t-0 border-foreground/20" : ""} ${i >= 3 ? "border-t border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {v.n}</div>
                <h3 className="mt-6 font-serif text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.02em]">{v.name}</h3>
                <p className="mt-4 font-thai text-[13px] md:text-[14px] leading-[1.65] text-muted-foreground">{v.moments}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 border-l-2 border-cinnabar pl-6 md:pl-8 max-w-[820px]">
            <p className="font-serif italic text-[18px] md:text-[22px] leading-[1.5] tracking-[-0.005em]">
              สำหรับงานวางระบบแบรนด์และกลยุทธ์ขั้นสูงในยูนิต <em className="text-cinnabar">Ø Boutique</em> เราโฟกัส 6 อุตสาหกรรมนี้เพื่อรักษาความลึกของ insight และคุณภาพ craft ขั้นสูงสุด · สำหรับธุรกิจนอกกลุ่ม เราเปิดระบบ Selective Screening เพื่อประเมินความพร้อมก่อนรับงาน.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            *เครือ ØRIONS ไม่รับ: pharmaceuticals · fast fashion mass · gambling · MLM
          </p>
        </Reveal>
      </div>
    </section>

    {/* 03 · CONTEXTUAL MOMENTS */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="Contextual Moments" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md max-w-[22ch]">
            ผลงานและสถานการณ์ที่เรา <em className="italic text-cinnabar">สร้างมาเพื่อมัน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-[680px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            พื้นที่ที่ขยับตาม context — เพื่อให้ธุรกิจเห็นภาพชัดว่าเราเข้าไปปลดล็อกช่วงเวลาสำคัญช่วงไหน.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {moments.map((m) => (
            <Reveal key={m.n}>
              <div className="bg-background p-8 md:p-10 h-full flex flex-col">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {m.n}</div>
                <h3 className="mt-6 font-serif italic text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.015em]">{m.name}</h3>
                <p className="mt-4 font-thai text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 02 · SELECTED PROJECTS */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="04" label="Projects" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md">
            {projects.length} brands. <em className="italic text-cinnabar">One team.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20">
          {projects.map((w, i) => (
            <Reveal key={w.n} delay={0.04 * i}>
              <Link to={`/work/${w.slug}`} className="group block">
                <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
                  <img
                    src={w.img}
                    alt={`${w.title} — ${w.scope}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                  />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-background/95 mix-blend-difference">
                    <span>— {w.n}</span>
                    <span>{w.niche}</span>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif italic text-[22px] md:text-[26px] tracking-[-0.01em] truncate">
                    {w.title}
                  </h3>
                  <span className="font-serif italic text-cinnabar text-[20px] md:text-[24px] tabular-nums shrink-0">
                    {w.impact}
                  </span>
                </div>
                <p className="mt-2 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  — {w.scope}
                </p>
                <p className="mt-3 font-thai text-[14px] leading-[1.65] text-foreground/70">
                  {w.body}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-16 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
          [ More case studies launching Q3 2026 ]
        </p>
      </div>
    </section>

    {/* 03 · WHAT CLIENTS SAY */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Testimonials" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md">
            What clients <em className="italic text-cinnabar">say.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ align: "start", loop: false }} className="mt-16 md:mt-20 border-t border-foreground/15">
            <CarouselContent className="ml-0">
              {testimonials.map((t, i) => (
                <CarouselItem key={t.name} className="pl-0 basis-full md:basis-1/2 lg:basis-1/3">
                  <article className={`relative h-full py-10 md:py-12 md:px-8 flex flex-col ${i > 0 ? "md:border-l border-soft" : ""}`}>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">— {t.niche}</div>
                    <div className="mt-6 font-serif italic text-cinnabar text-[56px] md:text-[72px] leading-[1] tracking-[-0.04em] tabular-nums">
                      {t.stat}
                    </div>
                    <div className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">{t.statLabel}</div>
                    <p className="mt-8 font-serif italic text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.005em] flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-8 pt-5 border-t border-dashed border-foreground/25">
                      <div className="font-serif italic text-[18px]">{t.name}</div>
                      <div className="mt-1 font-thai text-[12px] text-muted-foreground">{t.handle}</div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-end gap-3">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-none border-foreground" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-none border-foreground" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>

    {/* 04 · TRUSTED BY */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="06" label="Trusted By" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[20ch]">
            20+ brands across F&amp;B, fashion, and <em className="italic text-cinnabar">hospitality.</em>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-12 md:gap-y-16">
          {trustedBy.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center text-center cursor-default">
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="max-h-7 md:max-h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-serif italic text-[14px] md:text-[16px] text-muted-foreground hover:text-foreground transition-colors">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>Tell us about <em className="italic text-cinnabar">the brand.</em></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Get a free proposal", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default Work;