import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SimpleMarquee from "@/components/SimpleMarquee";
import PageMark from "@/components/PageMark";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import workHongmove from "@/assets/hongmove.png";
import workDemocrat from "@/assets/democrat.jpg";
import workRtaf from "@/assets/rtaf.jpg";
import workGcoo from "@/assets/gcoo.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";
import hongmoveLogo from "@/assets/logos/hongmove.png";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const stats = [
  { n: "71%", label: "OF SOCIAL IMAGES",   th: "เป็นภาพ AI — ต้องใช้คอนเทนต์จริงเพื่อโดดเด่น" },
  { n: "20%", label: "META CPM RISE, YoY", th: "แอดแพงขึ้น — ต้องใช้ creative ที่แปลงยอด" },
  { n: "8s",  label: "ATTENTION SPAN",     th: "แค่แปดวินาที — ต้องฮุกให้ติดตั้งแต่ภาพแรก" },
];

const services = [
  {
    n: "01",
    en: "Branding",
    tagline: "Identity that works across every touchpoint.",
    th: "วางตัวตนแบรนด์ให้คมและจำง่ายในทุก touchpoint",
    items: ["Naming · Logo · Marks", "Visual identity system", "Brand guidelines + book", "Launch toolkit"],
  },
  {
    n: "02",
    en: "Content",
    tagline: "Photo, video, and design that earn the scroll.",
    th: "ถ่ายทำ ตัดต่อ ออกแบบ ครบจบในทีมเดียว",
    items: ["Photo + video shoots", "Reels + short-form video", "Graphic + motion design", "Asset libraries"],
  },
  {
    n: "03",
    en: "Social media",
    tagline: "Strategy, posting, community, and paid ads.",
    th: "วางแผน โพสต์ ดูแลคอมมูฯ และยิงแอด",
    items: ["Strategy + content calendar", "Daily posting + scheduling", "Community management", "Paid ads (Meta, TikTok)"],
  },
];

const process = [
  { n: "01", en: "Listen", th: "คุย 30 นาที เช็กว่าเหมาะกันมั้ย ฟรี" },
  { n: "02", en: "Plan",   th: "เสนอแผนสั้นๆ ตัวเลขจริง ไม่ขายฝัน" },
  { n: "03", en: "Build",  th: "สร้างแบรนด์ คอนเทนต์ และแอด" },
  { n: "04", en: "Run",    th: "รันงาน รายงานทุกเดือน วัดผลจริง" },
];

const projects = [
  { n: "01", title: "Hongmove",             niche: "PROPTECH",   img: workHongmove },
  { n: "02", title: "Democrat Party",       niche: "POLITICS",   img: workDemocrat },
  { n: "03", title: "Royal Thai Air Force", niche: "GOVERNMENT", img: workRtaf },
  { n: "04", title: "GCOO",                 niche: "MOBILITY",   img: workGcoo },
  { n: "05", title: "Heavy Organizer",      niche: "EVENTS",     img: workHeavy },
];

const testimonials = [
  {
    sector: "F&B",
    stat: "+62%",
    statLabel: "BOOKINGS",
    quote: "They got our brand voice right from day one. Bookings up 62% in three months.",
    name: "Cedric C.",
    handle: "Maison Lumière · @maisonlumiere",
  },
  {
    sector: "FASHION",
    stat: "11d",
    statLabel: "TO SELL OUT",
    quote: "Sold out our first drop in eleven days. No paid ads needed.",
    name: "Estelle S.",
    handle: "Saint Manor · @saintmanor",
  },
  {
    sector: "HOSPITALITY",
    stat: "−41%",
    statLabel: "COST/BOOKING",
    quote: "Cut our cost per booking by 41%. Bookings still up.",
    name: "Shimpei M.",
    handle: "Hôtel Vergé · @hotelverge",
  },
];

type TrustedBrand = { name: string; logo?: string };
const trustedBy: TrustedBrand[] = [
  { name: "HONGMOVE", logo: hongmoveLogo },
  { name: "MAISON LUMIÈRE" }, { name: "SAINT MANOR" },
  { name: "HÔTEL VERGÉ" },    { name: "CALA / BKK" },
  { name: "NORTH MERIDIAN" }, { name: "AT.09" },
  { name: "CAFÉ ORSAY" },     { name: "STUDIO — KIN" },
  { name: "PLAYA NORTE" },    { name: "CASA · SOL" },
  { name: "MARLOW & CO." },   { name: "UNION BKK" },
  { name: "RTAF" },           { name: "DEMOCRAT" },
  { name: "GCOO" },           { name: "HEAVY ORG." },
  { name: "MYHOTEL" },
];

const whyUs = [
  { n: "01", en: "Small team. Your team.", th: "คุยกับคนทำจริง ไม่มี telephone game" },
  { n: "02", en: "Strategy before pretty.", th: "วางแผนก่อนโพสต์ ไม่ทำสวยอย่างเดียว" },
  { n: "03", en: "Ads inside the plan.",    th: "แอดอยู่ในกลยุทธ์ตั้งแต่วันแรก" },
  { n: "04", en: "Built for boutique.",     th: "ทำเพื่อแบรนด์ที่แคร์เรื่องคุณภาพ" },
];

const outcomes = [
  { num: "+3.2×", label: "Reach lift",      sub: "in first 90 days" },
  { num: "40+",   label: "Brands launched", sub: "since 2019" },
  { num: "4 wk",  label: "From hello to live", sub: "average kickoff" },
];

const pricingTiers = [
  { name: "Starter", price: "29,000",  best: "เริ่มต้นบน IG / TikTok" },
  { name: "Pro",     price: "59,000",  best: "โต volume + ads", popular: true },
  { name: "Elite",   price: "119,000", best: "Launch / rebrand เต็มรูปแบบ" },
];

/* ------------------------------------------------------------------ */
/* COMPONENT                                                           */
/* ------------------------------------------------------------------ */

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Boutique creative agency · Bangkok"
      description="A boutique Bangkok agency. We help unique brands grow on social — through branding, content, and paid ads."
      path="/"
    />

    {/* ========================================================== */}
    {/* 01 · COVER — black                                          */}
    {/* ========================================================== */}
    <section className="relative min-h-screen flex flex-col bg-foreground text-background overflow-hidden">
      <div className="px-6 md:px-10 pt-8 md:pt-10 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-background/55">
        <span>EST. 2026</span>
        <span className="hidden sm:inline">CAPABILITIES — 2026</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 py-16">
        <Reveal>
          <h1 className="font-serif leading-[0.85] tracking-[-0.04em] text-[20vw] md:text-[18vw] lg:text-[16vw]">
            ORI<span className="text-orion italic">O</span>NS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 md:mt-16 font-serif text-[28px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em]">
            A <em className="text-orion italic">boutique</em> creative agency.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-6 md:mt-8 font-serif italic text-[15px] md:text-[18px] text-background/70 max-w-[640px] mx-auto leading-[1.55]">
            We help unique brands grow on social — through branding, content, and paid ads.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge border border-background hover:gap-4 transition-all duration-300"
            >
              <span>Get a free proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services#packages"
              className="group inline-flex items-center gap-2 index-badge text-background/80 border-b border-background/40 pb-1 hover:text-background hover:border-background transition-colors"
            >
              See pricing →
            </Link>
          </div>
          <p className="mt-5 font-mono text-[10px] tracking-[0.25em] uppercase text-background/55 text-center">
            ↳ Reply within 24h · Free 30-min call
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-10 pb-8 md:pb-10 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-background/55 border-t border-background/15 pt-6">
        <span>01 / 09</span>
        <span>hello@orions.agency</span>
      </div>
    </section>

    {/* marquee bridge */}
    <div className="bg-foreground text-background border-t border-background/15 py-5">
      <SimpleMarquee
        duration={42}
        items={["BRANDING", "CONTENT PRODUCTION", "SOCIAL MEDIA", "PAID ADVERTISING"]}
      />
    </div>

    {/* ========================================================== */}
    {/* 02 · WHAT YOU'RE UP AGAINST — stats                         */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="02" />
        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
            What you're up <em className="text-orion italic">against.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`py-10 md:py-14 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                <div className="font-serif text-[64px] md:text-[88px] leading-none tracking-[-0.04em] tabular-nums">
                  {s.n}
                </div>
                <div className="mt-6 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {s.label}
                </div>
                <p className="mt-3 font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/80 max-w-[28ch]">
                  {s.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 03 · APPROACH — quote                                       */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <PageMark index="03" />
        <Reveal>
          <span className="font-serif italic text-orion text-[64px] md:text-[88px] leading-none block -mb-4 md:-mb-6">“</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serif text-[40px] md:text-[80px] lg:text-[104px] leading-[1.05] tracking-[-0.03em]">
            We don't post for the sake of <em className="text-orion italic">posting.</em>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 md:mt-6 font-serif text-[40px] md:text-[80px] lg:text-[104px] leading-[1.05] tracking-[-0.03em]">
            We build for <em className="text-orion italic">results.</em>
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-16 pt-6 border-t border-dashed border-foreground/30 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            — THE ORIONS APPROACH
          </div>
        </Reveal>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 04 · THREE THINGS, PROPERLY — services                      */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="04" />
        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em]">
            Three things, <em className="text-orion italic">properly.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.08}>
              <div className={`py-10 md:py-12 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">— {s.n}</div>
                <h3 className="mt-8 font-serif italic text-[40px] md:text-[48px] leading-[1] tracking-[-0.02em]">
                  {s.en}
                </h3>
                <p className="mt-6 font-serif italic text-orion text-[16px] md:text-[17px] leading-[1.4]">
                  {s.tagline}
                </p>
                <p className="mt-3 font-thai text-[14px] leading-[1.65] text-muted-foreground">
                  {s.th}
                </p>
                <ul className="mt-8 pt-6 border-t border-dashed border-foreground/25 space-y-2 font-thai text-[14px] text-foreground/85">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-muted-foreground">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 05 · 4-WEEK PROCESS                                         */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="05" />
        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[16ch]">
            From hello, <em className="text-orion italic">live in 4 weeks.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.06}>
              <div className={`py-10 md:py-12 md:px-8 ${i > 0 ? "lg:border-l border-foreground border-t lg:border-t-0" : ""} ${i > 0 && i < 2 ? "sm:border-l sm:border-t-0" : ""} ${i === 2 ? "sm:border-l-0 sm:border-t lg:border-t-0 lg:border-l" : ""} ${i === 3 ? "sm:border-l sm:border-t lg:border-t-0" : ""}`}>
                <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  <span>— {p.n}</span>
                  <span className="text-orion">✦</span>
                </div>
                <h3 className="mt-8 font-serif italic text-[44px] md:text-[56px] leading-[1] tracking-[-0.02em]">
                  {p.en}.
                </h3>
                <p className="mt-6 font-thai text-[14px] leading-[1.65] text-muted-foreground">
                  {p.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 06 · SELECTED WORK                                          */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="06" />
        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[96px] leading-[1.0] tracking-[-0.03em]">
            Brands we've <em className="text-orion italic">built.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ align: "start", loop: false }} className="mt-16 md:mt-20">
            <CarouselContent className="ml-0">
              {projects.map((w) => (
                <CarouselItem key={w.n} className="pl-0 pr-6 md:pr-8 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                  <Link to="/work" className="group block">
                    <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
                      <img
                        src={w.img}
                        alt={w.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-3">
                      <h3 className="font-serif italic text-[20px] md:text-[22px] tracking-[-0.01em] truncate">
                        {w.title}
                      </h3>
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground shrink-0">
                        {w.niche}
                      </span>
                    </div>
                  </Link>
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

    {/* ========================================================== */}
    {/* 07 · WHAT CLIENTS SAY                                       */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="07" />
        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em]">
            What clients <em className="text-orion italic">say.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className={`py-10 md:py-12 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.3em] text-orion">{t.sector}</div>

                <div className="mt-8 flex items-start justify-between gap-4">
                  <span className="font-serif italic text-orion text-[40px] leading-none -mt-2">“</span>
                  <div className="text-right">
                    <div className="font-serif italic text-orion text-[36px] md:text-[44px] leading-none tracking-[-0.02em] tabular-nums">
                      {t.stat}
                    </div>
                    <div className="mt-2 font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">
                      {t.statLabel}
                    </div>
                  </div>
                </div>

                <p className="mt-4 font-serif italic text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.005em]">
                  {t.quote}
                </p>

                <div className="mt-12 pt-6 border-t border-dashed border-foreground/25">
                  <div className="font-serif italic text-[18px]">{t.name}</div>
                  <div className="mt-1 font-thai text-[12px] text-muted-foreground">{t.handle}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 08 · OUTCOMES — proof bar                                   */}
    {/* ========================================================== */}
    <section className="border-y border-foreground bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-20 grid grid-cols-1 md:grid-cols-3">
        {outcomes.map((o, i) => (
          <Reveal key={o.label} delay={0.05 * i}>
            <div className={`px-2 md:px-8 py-6 md:py-2 ${i > 0 ? "md:border-l border-foreground/20" : ""}`}>
              <div className="font-serif text-orion tracking-[-0.04em] leading-none text-[64px] md:text-[88px] lg:text-[104px] tabular-nums">{o.num}</div>
              <div className="mt-5 font-mono text-[10px] tracking-[0.25em] uppercase text-foreground">{o.label}</div>
              <div className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{o.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ========================================================== */}
    {/* 09 · TRUSTED BY                                             */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="09" />
        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em]">
            Trusted <em className="text-orion italic">by.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-serif italic text-muted-foreground text-[18px] md:text-[20px]">
            40+ brands across F&amp;B, fashion, and hospitality.
          </p>
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

    {/* ========================================================== */}
    {/* 10 · PRICING TEASER                                         */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="10" />
        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[18ch]">
            Pricing that <em className="text-orion italic">makes sense.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-serif italic text-[18px] md:text-[20px] text-muted-foreground max-w-[640px] leading-[1.55]">
            Monthly retainer · ทีมเดียวจบ · ยกเลิก/ปรับขนาดได้ทุกรอบสัญญา.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {pricingTiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className={`relative py-10 md:py-12 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""} ${t.popular ? "bg-foreground/[0.03]" : ""}`}>
                {t.popular && (
                  <div className="absolute top-0 left-0 bg-orion text-background px-4 py-1 font-mono text-[9px] tracking-[0.25em] uppercase">
                    ★ MOST POPULAR
                  </div>
                )}
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">— 0{i + 1}</div>
                <h3 className="mt-8 font-serif italic text-[40px] md:text-[48px] leading-[1] tracking-[-0.02em]">{t.name}</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-orion text-[36px] md:text-[44px] tracking-[-0.03em] tabular-nums">{t.price}</span>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">THB / เดือน</span>
                </div>
                <p className="mt-6 pt-5 border-t border-dashed border-foreground/25 font-thai text-[14px] leading-[1.65] text-muted-foreground">
                  Best for · {t.best}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link to="/services#packages" className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge border border-foreground hover:bg-orion hover:border-orion transition-colors">
              <span>See full breakdown</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="group inline-flex items-center gap-2 index-badge text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
              Get a free proposal →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 11 · WHY US + CTA                                           */}
    {/* ========================================================== */}
    <section className="px-6 md:px-10 border-t border-foreground bg-foreground text-background">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-background/55 mb-12 md:mb-16">
          <span className="flex items-center gap-3">ORIONS <span className="text-orion">✦</span></span>
          <span>11 / 11</span>
        </div>

        <Reveal>
          <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em]">
            Why <em className="text-orion italic">us?</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14">
          {whyUs.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.06}>
              <div className="border-t border-background/25 pt-6">
                <div className="font-mono text-[10px] tracking-[0.3em] text-background/55">— {w.n}</div>
                <h3 className="mt-4 font-serif italic text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">
                  {w.en}
                </h3>
                <p className="mt-3 font-thai text-[14px] md:text-[15px] leading-[1.65] text-background/70">
                  {w.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA inside dark */}
        <div className="mt-24 md:mt-32 border-t border-background/25 pt-16 md:pt-24 text-center">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-orion mb-8">
              ✦ NOW BOOKING — Q3 2026
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[44px] md:text-[80px] lg:text-[96px] leading-[1.0] tracking-[-0.03em]">
              Tell us about <em className="text-orion italic">the brand.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-serif italic text-[18px] md:text-[22px] text-background/75 max-w-[640px] mx-auto leading-[1.5]">
              30-min discovery call. Free. We reply within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge border border-background hover:gap-4 transition-all duration-300"
            >
              <span>เริ่มคุยกับเรา</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-[720px] mx-auto pt-10 border-t border-background/20">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-background/50">EMAIL</div>
              <div className="mt-2 font-serif italic text-[18px]">hello@orions.agency</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-background/50">PHONE</div>
              <div className="mt-2 font-serif italic text-[18px]">+66 92 390 5464</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-background/50">ONLINE</div>
              <div className="mt-2 font-serif italic text-[18px]">orions.agency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
