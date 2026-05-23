import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import workHongmove from "@/assets/hongmove.png";
import workKhaoyai from "@/assets/golf-hero.jpg";
import workMyHotel from "@/assets/myhotel.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";
import workGcoo from "@/assets/gcoo.jpg";
import hongmoveLogo from "@/assets/logos/hongmove.png";

const SITE_URL = "https://orions.agency";

type Project = {
  n: string;
  title: string;
  niche: string;
  scope: string;
  impact: string;
  body: string;
  img: string;
};

const projects: Project[] = [
  { n: "01", title: "Hongmove",             niche: "PROPTECH",    scope: "Brand · Web · Content",      impact: "+312%",     body: "End-to-end brand system, marketing site and launch content for the new rental platform.", img: workHongmove },
  { n: "02", title: "Khaoyai Country Club", niche: "HOSPITALITY", scope: "Photo · Video · Social",     impact: "+48%",      body: "Lifestyle shoot and short-form video for the club rebrand.",                                img: workKhaoyai },
  { n: "03", title: "MyHotel",              niche: "HOSPITALITY", scope: "Content · Paid ads",         impact: "−37%",      body: "Monthly content and Meta ads tuned to lower cost per booking.",                            img: workMyHotel },
  { n: "04", title: "Royal Thai Air Force", niche: "GOVERNMENT",  scope: "Film · Production · Post",   impact: "2.1M",      body: "Full production and post for an official RTAF film, end to end.",                          img: workRtaf },
  { n: "05", title: "Democrat Party",       niche: "POLITICS",    scope: "Campaign · Film · Social",   impact: "12M+",      body: "National campaign creative — fast turnaround across every platform.",                      img: workDemocrat },
  { n: "06", title: "Heavy Organizer",      niche: "EVENTS",      scope: "Brand · Event film · Recap", impact: "+88%",      body: "Brand films and event recaps for live productions.",                                       img: workHeavy },
  { n: "07", title: "GCOO",                 niche: "MOBILITY",    scope: "Brand · Launch campaign",    impact: "+540%",     body: "Launch campaign for the e-scooter sharing app — brand, OOH and social.",                   img: workGcoo },
];

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
      <div className="max-w-[1280px] mx-auto pt-32 md:pt-40 pb-20 md:pb-28">
        <PageMark index="01" total="04" />
        <Reveal>
          <h1 className="font-serif text-[52px] md:text-[88px] lg:text-[112px] leading-[1.0] tracking-[-0.03em] max-w-[18ch]">
            Real brands. Real <em className="text-gemini italic">results.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
            Selected results across F&amp;B, fashion, and hospitality. Full case studies launching Q3 2026.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 · SELECTED PROJECTS */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="02" total="04" />
        <Reveal>
          <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em]">
            {projects.length} brands. <em className="text-gemini italic">One team.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20">
          {projects.map((w, i) => (
            <Reveal key={w.n} delay={0.04 * i}>
              <Link to="/work" className="group block">
                <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
                  <img
                    src={w.img}
                    alt={`${w.title} — ${w.scope}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.04]"
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
                  <span className="font-serif italic text-orion text-[20px] md:text-[24px] tabular-nums shrink-0">
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
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="03" total="04" />
        <Reveal>
          <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em]">
            What clients <em className="text-gemini italic">say.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ align: "start", loop: false }} className="mt-16 md:mt-20 border-t border-foreground">
            <CarouselContent className="ml-0">
              {testimonials.map((t, i) => (
                <CarouselItem key={t.name} className="pl-0 basis-full md:basis-1/2 lg:basis-1/3">
                  <article className={`relative h-full py-10 md:py-12 md:px-8 flex flex-col ${i > 0 ? "md:border-l border-soft" : ""}`}>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-orion">— {t.niche}</div>
                    <div className="mt-6 font-serif italic text-orion text-[56px] md:text-[72px] leading-[1] tracking-[-0.04em] tabular-nums">
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
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="04" total="04" />
        <Reveal>
          <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em] max-w-[20ch]">
            40+ brands across F&amp;B, fashion, and <em className="text-gemini italic">hospitality.</em>
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
      title={<>Tell us about <em className="text-gemini italic">the brand.</em></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Get a free proposal", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default Work;