import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
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
  { n: "71%", label: "AI IMAGES",   th: "ฟีดเต็มไปด้วย AI" },
  { n: "20%", label: "CPM RISE",    th: "แอดแพงขึ้นทุกปี" },
  { n: "8s",  label: "TO HOOK",     th: "แปดวิ ขาย หรือ ลืม" },
];

const services = [
  {
    n: "01",
    en: "Brand.",
    tagline: "Remembered. Chosen.",
    th: "จำได้ ขายได้",
    items: ["Positioning", "Naming · Logo", "Messaging", "Launch kit"],
  },
  {
    n: "02",
    en: "Content.",
    tagline: "Looks right. Performs.",
    th: "สวย และขายได้",
    items: ["Performance creative", "Reels", "Photo · video", "Motion"],
  },
  {
    n: "03",
    en: "Ads.",
    tagline: "Built for paid. Not bolted on.",
    th: "ทำมาเพื่อยิงจริง",
    items: ["Funnel · KPI", "Meta · TikTok · Google", "Organic", "Monthly report"],
  },
];

const process = [
  { n: "01", en: "Diagnose", th: "Audit ฟรี 30 นาที" },
  { n: "02", en: "Plan",     th: "Strategy · Funnel · KPI" },
  { n: "03", en: "Build",    th: "Brand · Content · Ads" },
  { n: "04", en: "Scale",    th: "ROAS · CAC · Retention" },
];

const projects = [
  { n: "01", title: "Hongmove",             niche: "PROPTECH",   img: workHongmove, metric: "BRAND · CAMPAIGN" },
  { n: "02", title: "Democrat Party",       niche: "POLITICS",   img: workDemocrat, metric: "CAMPAIGN · DIGITAL" },
  { n: "03", title: "Royal Thai Air Force", niche: "GOVERNMENT", img: workRtaf,     metric: "FILM · IDENTITY" },
  { n: "04", title: "GCOO",                 niche: "MOBILITY",   img: workGcoo,     metric: "LAUNCH · CONTENT" },
  { n: "05", title: "Heavy Organizer",      niche: "EVENTS",     img: workHeavy,    metric: "EVENT · IDENTITY" },
];

const testimonials = [
  {
    sector: "F&B",
    stat: "+62%",
    statLabel: "BOOKINGS",
    quote: "Voice nailed. Bookings up 62% in 90 days.",
    name: "Cedric C.",
    handle: "Maison Lumière · @maisonlumiere",
  },
  {
    sector: "FASHION",
    stat: "11d",
    statLabel: "TO SELL OUT",
    quote: "Sold out in 11 days. Zero ads.",
    name: "Estelle S.",
    handle: "Saint Manor · @saintmanor",
  },
  {
    sector: "HOSPITALITY",
    stat: "−41%",
    statLabel: "COST/BOOKING",
    quote: "Cost per booking −41%. Volume up.",
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
  { n: "01", en: "Strategy first.",     th: "Funnel · KPI ก่อนงานสวย" },
  { n: "02", en: "Built for ads.",      th: "ทุกชิ้นรัน paid ได้จริง" },
  { n: "03", en: "We measure.",         th: "ROAS · CAC · Retention" },
  { n: "04", en: "Small team. Yours.",  th: "คุยกับคนทำจริง" },
];

/* ------------------------------------------------------------------ */
/* COMPONENT                                                           */
/* ------------------------------------------------------------------ */

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Creative agency built for growth · Bangkok"
      description="Bangkok creative agency. Brand, content, and paid media — engineered to grow boutique brands. ROAS reported monthly."
      path="/"
    />

    {/* ========================================================== */}
    {/* 01 · COVER — black                                          */}
    {/* ========================================================== */}
    <section className="relative min-h-screen flex flex-col bg-foreground text-background overflow-hidden texture-paper">
      <div className="rule-gradient absolute top-0 left-0 right-0" />
      <div className="px-6 md:px-10 pt-8 md:pt-10 flex items-center justify-between font-mono text-[10px] tracking-[0.12em] uppercase text-background/70">
        <span>EST. 2026</span>
        <span className="hidden sm:inline">CAPABILITIES — 2026</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 py-16">
        <Reveal>
          <h1 className="text-[64px] md:text-[120px] lg:text-[160px] leading-[0.88] tracking-[-0.025em] max-w-[14ch]">
            Creative that <em className="text-gemini">moves.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-10 md:mt-12 text-[12px] md:text-[13px] tracking-[0.32em] uppercase text-background/65 font-mono">
            Brand · Content · Ads — Bangkok
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 btn-label border border-background hover:gap-4 transition-all duration-300"
            >
              <span>Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 btn-label text-background/80 border-b border-background/40 pb-1 hover:text-background hover:border-background transition-colors"
            >
              Work →
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="px-6 md:px-10 pb-8 md:pb-10 flex items-end justify-between border-t border-background/15 pt-6">
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-background/70">01 / 07</span>
        <a href="mailto:hello@orions.agency" className="font-mono text-[10px] tracking-[0.18em] uppercase text-background/80 hover:text-background transition-colors">hello@orions.agency</a>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 03 · WHAT YOU'RE UP AGAINST — stats                         */}
    {/* ========================================================== */}
    <section className="px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto py-28 md:py-40">
        <PageMark index="02" />
        <Reveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.02em] max-w-[12ch]">
            Why brands <em className="text-gemini">stall.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`py-10 md:py-14 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                <div className="num-display text-[72px] md:text-[112px] leading-none tabular-nums">
                  {s.n}
                </div>
                <div className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                  {s.label}
                </div>
                <p className="mt-3 font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/80 max-w-[28ch]">
                  {s.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="rule-gradient mt-24 md:mt-32" />
      </div>
    </section>

    {/* ========================================================== */}
    {/* 04 · THREE THINGS, PROPERLY — services                      */}
    {/* ========================================================== */}
    <section className="px-6 md:px-12 border-t border-foreground">
      <div className="max-w-[1240px] mx-auto py-28 md:py-40">
        <PageMark index="03" />
        <Reveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.02em]">
            Three things. <em className="text-gemini">Properly.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.08}>
              <div className={`py-10 md:py-12 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">— {s.n}</div>
                <h3 className="mt-8 text-[40px] md:text-[56px] leading-[0.95] tracking-[-0.018em]">
                  {s.en}
                </h3>
                <p className="mt-6 text-orion text-[15px] md:text-[16px] leading-[1.4] tracking-[0.04em] uppercase font-mono">
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
    <section className="px-6 md:px-12 border-t border-foreground">
      <div className="max-w-[1240px] mx-auto py-28 md:py-40">
        <PageMark index="04" />
        <Reveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.02em] max-w-[14ch]">
            Audit → <em className="text-gemini">Scale.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.06}>
              <div className={`py-10 md:py-12 md:px-8 ${i > 0 ? "lg:border-l border-foreground border-t lg:border-t-0" : ""} ${i > 0 && i < 2 ? "sm:border-l sm:border-t-0" : ""} ${i === 2 ? "sm:border-l-0 sm:border-t lg:border-t-0 lg:border-l" : ""} ${i === 3 ? "sm:border-l sm:border-t lg:border-t-0" : ""}`}>
                <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  <span>— {p.n}</span>
                  <span className="text-orion">✦</span>
                </div>
                <h3 className="mt-8 text-[40px] md:text-[56px] leading-[0.95] tracking-[-0.018em]">
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
    <section className="px-6 md:px-12 border-t border-foreground">
      <div className="max-w-[1240px] mx-auto py-28 md:py-40">
        <PageMark index="05" />
        <Reveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.02em]">
            Selected <em className="text-gemini">work.</em>
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
                      <h3 className="text-[18px] md:text-[22px] tracking-[-0.01em] truncate">
                        {w.title}
                      </h3>
                      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground shrink-0">
                        {w.niche}
                      </span>
                    </div>
                    <div className="mt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-orion">
                      {w.metric}
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
    <section className="px-6 md:px-12 border-t border-foreground">
      <div className="max-w-[1240px] mx-auto py-28 md:py-40">
        <PageMark index="06" />
        <Reveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.02em]">
            Clients <em className="text-gemini">say.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className={`py-10 md:py-12 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.18em] text-orion">{t.sector}</div>

                <div className="mt-8 flex items-start justify-between gap-4">
                  <span className="text-orion text-[48px] leading-none -mt-2 font-serif">“</span>
                  <div className="text-right">
                    <div className="num-display text-orion text-[36px] md:text-[48px] leading-none tabular-nums">
                      {t.stat}
                    </div>
                    <div className="mt-2 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                      {t.statLabel}
                    </div>
                  </div>
                </div>

                <p className="mt-4 font-serif text-[17px] md:text-[19px] leading-[1.5]">
                  {t.quote}
                </p>

                <div className="mt-12 pt-6 border-t border-dashed border-foreground/25">
                  <div className="font-serif text-[15px] font-medium">{t.name}</div>
                  <div className="mt-1 font-thai text-[12px] text-muted-foreground">{t.handle}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 08 · TRUSTED BY                                             */}
    {/* ========================================================== */}
    <section className="px-6 md:px-12 border-t border-foreground">
      <div className="max-w-[1240px] mx-auto py-28 md:py-40">
        <PageMark index="07" />
        <Reveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.02em]">
            Trusted <em className="text-gemini">by.</em>
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
                <span className="text-[11px] md:text-[12px] tracking-[0.12em] uppercase font-mono text-muted-foreground hover:text-foreground transition-colors">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ========================================================== */}
    {/* 10 · WHY US + CTA                                           */}
    {/* ========================================================== */}
    <section className="px-6 md:px-12 border-t border-foreground bg-foreground text-background texture-paper">
      <div className="max-w-[1240px] mx-auto py-28 md:py-40">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-background/55 mb-12 md:mb-16">
          <span className="flex items-center gap-3">ORIONS <span className="text-orion">✦</span></span>
          <span>09 / 09</span>
        </div>

        <Reveal>
          <h2 className="text-[48px] md:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.02em]">
            Why <em className="text-gemini">us.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14">
          {whyUs.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.06}>
              <div className="border-t border-background/25 pt-6">
                <div className="font-mono text-[10px] tracking-[0.18em] text-background/55">— {w.n}</div>
                <h3 className="mt-4 text-[26px] md:text-[36px] leading-[0.95] tracking-[-0.015em]">
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
              ✦ NOW BOOKING — 2026
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[56px] md:text-[96px] lg:text-[120px] leading-[0.9] tracking-[-0.025em]">
              Let's <em className="text-gemini">move.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[12px] tracking-[0.32em] uppercase text-background/65 font-mono">
              30 min · Free · Reply in 24h
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="mt-10 group inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 btn-label border border-background hover:gap-4 transition-all duration-300"
            >
              <span>Start</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
