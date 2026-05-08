import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import YouTubeFacade from "@/components/YouTubeFacade";
import { Link } from "react-router-dom";

import workHongmove from "@/assets/hongmove.png";
import workKhaoyai from "@/assets/golf-hero.jpg";
import workMyHotel from "@/assets/myhotel.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";
import workGcoo from "@/assets/gcoo.jpg";
import hongmoveLogo from "@/assets/logos/hongmove.png";

const accent = "text-gradient";

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
  { n: "01", title: "Hongmove",             niche: "PROPTECH",    scope: "Brand · Web · Content",      impact: "+312% sign-ups",      body: "End-to-end brand system, marketing site and launch content for the new rental platform.", img: workHongmove },
  { n: "02", title: "Khaoyai Country Club", niche: "HOSPITALITY", scope: "Photo · Video · Social",     impact: "+48% inquiries",      body: "Lifestyle shoot and short-form video for the club rebrand.", img: workKhaoyai },
  { n: "03", title: "MyHotel",              niche: "HOSPITALITY", scope: "Content · Paid ads",         impact: "−37% cost / booking", body: "Monthly content and Meta ads tuned to lower cost per booking.", img: workMyHotel },
  { n: "04", title: "Royal Thai Air Force", niche: "GOVERNMENT",  scope: "Film · Production · Post",   impact: "2.1M views",          body: "Full production and post for an official RTAF film, end to end.", img: workRtaf },
  { n: "05", title: "Democrat Party",       niche: "POLITICS",    scope: "Campaign · Film · Social",   impact: "12M+ impressions",    body: "National campaign creative — fast turnaround across every platform.", img: workDemocrat },
  { n: "06", title: "Heavy Organizer",      niche: "EVENTS",      scope: "Brand · Event film · Recap", impact: "+88% conversion",     body: "Brand films and event recaps for live productions.", img: workHeavy },
  { n: "07", title: "GCOO",                 niche: "MOBILITY",    scope: "Brand · Launch campaign",    impact: "+540% downloads",     body: "Launch campaign for the e-scooter sharing app — brand, OOH and social.", img: workGcoo },
];

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
  {
    niche: "PROPTECH",
    stat: "+312%",
    statLabel: "SIGN-UPS",
    quote: "Launch landed exactly the way we pictured it. Sign-ups tripled in the first month.",
    name: "Pailin R.",
    handle: "Hongmove · @hongmove",
  },
  {
    niche: "EVENTS",
    stat: "+88%",
    statLabel: "CONVERSION",
    quote: "Recap films that actually sold the next show. Conversion jumped 88%.",
    name: "Tee K.",
    handle: "Heavy Organizer · @heavy.org",
  },
  {
    niche: "MOBILITY",
    stat: "+540%",
    statLabel: "DOWNLOADS",
    quote: "From zero to 540% growth in app downloads. The team made it look easy.",
    name: "Min S.",
    handle: "GCOO · @gcoo.app",
  },
];

type TrustedBrand = { name: string; logo?: string };
const trustedBy: TrustedBrand[] = [
  { name: "HONGMOVE", logo: hongmoveLogo },
  { name: "MAISON LUMIÈRE" },
  { name: "SAINT MANOR" },
  { name: "HÔTEL VERGÉ" },
  { name: "CALA / BKK" },
  { name: "NORTH MERIDIAN" },
  { name: "AT.09" },
  { name: "CAFÉ ORSAY" },
  { name: "STUDIO — KIN" },
  { name: "PLAYA NORTE" },
  { name: "CASA · SOL" },
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
    {/* PROJECT GRID — one card per client */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1280px] mx-auto">
        <Reveal>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                — SELECTED PROJECTS
              </div>
              <h2 className="font-display h-display-sm">
                {projects.length} brands. <span className={accent}>One team.</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              UPDATED · Q2 2026
            </p>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-background/95 mix-blend-difference">
                    <span>— {w.n}</span>
                    <span>{w.niche}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-foreground text-background translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-5 md:p-6">
                    <div className="font-mono text-[9px] tracking-[0.25em] text-background/55">
                      — {w.scope}
                    </div>
                    <div className={`mt-2 font-display ${accent} text-[20px] md:text-[24px] leading-[1.05] tracking-[-0.02em] tabular-nums`}>
                      {w.impact}
                    </div>
                    <h3 className="mt-3 font-display text-[13px] md:text-[14px] tracking-[-0.005em] leading-tight text-background/85">
                      {w.title}
                    </h3>
                    <p className="mt-2 font-mono text-[9px] leading-[1.6] text-background/55 line-clamp-3">
                      {w.body}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[15px] md:text-[16px] tracking-[-0.01em] truncate">
                    {w.title}
                  </h3>
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground shrink-0">
                    {w.niche}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          [ More case studies launching Q3 2026 ]
        </p>
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
          {trustedBy.map((brand, i) => (
            <div
              key={brand.name}
              className={`relative aspect-[2/1] flex items-center justify-center text-center px-4 cursor-default border-soft ${(i % 6) !== 5 ? "border-r" : ""} ${i < trustedBy.length - 6 ? "border-b" : ""}`}
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="max-h-8 md:max-h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ) : (
                <span className="font-display text-[11px] md:text-[12px] tracking-[0.04em] text-muted-foreground">{brand.name}</span>
              )}
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
