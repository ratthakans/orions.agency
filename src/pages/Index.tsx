import Reveal from "@/components/Reveal";
import FlipNumber from "@/components/FlipNumber";
import ScrollMarquee from "@/components/ScrollMarquee";
import SEO from "@/components/SEO";
import RotatingHeadline from "@/components/RotatingHeadline";
import ClosingCTA from "@/components/ClosingCTA";
import YouTubeFacade from "@/components/YouTubeFacade";

const pressures = [
  { stat: 71, suffix: "%", decimals: 0, label: "OF SOCIAL IMAGES", body: "AI-generated. You need real content to stand out." },
  { stat: 20, suffix: "%", decimals: 0, label: "META CPM RISE, YoY", body: "Ads cost more. You need creative that converts." },
  { stat: 8, suffix: "s", decimals: 0, label: "ATTENTION SPAN", body: "Eight seconds. You need to hook them fast." },
];

const threeThings = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that works across every touchpoint.",
    items: ["Naming · Logo · Marks", "Visual identity system", "Brand guidelines + book", "Launch toolkit"],
  },
  {
    n: "02",
    title: "Content",
    lead: "Photo, video, and design that earn the scroll.",
    items: ["Photo + video shoots", "Reels + short-form video", "Graphic + motion design", "Asset libraries"],
  },
  {
    n: "03",
    title: "Social media",
    lead: "Strategy, posting, community, and paid ads.",
    items: ["Strategy + content calendar", "Daily posting + scheduling", "Community management", "Paid ads (Meta, TikTok)"],
  },
];

const steps = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check." },
  { n: "02", title: "Plan", body: "Short proposal. Real numbers." },
  { n: "03", title: "Build", body: "Strategy, identity, content, ads." },
  { n: "04", title: "Run", body: "Monthly reports. Real results." },
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
];

const trustedBy = [
  "MAISON LUMIÈRE", "SAINT MANOR", "HÔTEL VERGÉ", "CALA / BKK",
  "NORTH MERIDIAN", "AT.09", "CAFÉ ORSAY", "STUDIO — KIN",
  "PLAYA NORTE", "CASA · SOL", "MARLOW & CO.", "UNION BKK",
];

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Boutique creative agency · F&B · Fashion · Hospitality"
      description="Branding, content, and paid ads for unique brands. From hello, live in 4 weeks. Bangkok. From THB 50k/mo."
      path="/"
    />

    {/* HERO */}
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-background">
      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-10">
        <Reveal delay={0.05}>
          <h1 className="font-brand h-display-xl">ØRIONS</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 index-badge">BOUTIQUE CREATIVE AGENCY</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-6 font-display text-[15px] md:text-[22px] tracking-[0.04em] uppercase max-w-full overflow-hidden">
            <RotatingHeadline
              items={[
                "BANGKOK · EST. 2026",
                "HELP BRANDS GROW THROUGH",
                "BRANDING · CONTENT · SOCIAL MEDIA",
              ]}
            />
          </div>
        </Reveal>
      </div>
      <div className="absolute z-10 bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="index-badge">SCROLL</span>
        <span className="block w-px h-10 bg-foreground/60 animate-pulse" />
      </div>
    </section>

    {/* MARQUEE */}
    <section className="px-6 md:px-10 overflow-hidden">
      <div className="border-y border-foreground py-3">
        <ScrollMarquee items={["BRANDING", "CONTENT", "SOCIAL MEDIA", "PAID ADS", "BANGKOK ↔ EST. 2026"]} />
      </div>
    </section>

    {/* WHAT YOU'RE UP AGAINST */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display h-display-md">
              What you&apos;re up <span className="text-muted-foreground">against.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}><div className="mt-12 hairline w-16" /></Reveal>
        </div>

        <div className="md:col-span-7 flex flex-col">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={0.2 + i * 0.1}>
              <div className={`group relative py-10 md:py-14 ${i === 0 ? "border-t" : ""} border-b border-soft cursor-default`}>
                <div className="grid grid-cols-12 gap-6 md:gap-8 items-start px-2 md:px-6">
                  <div className="col-span-12 md:col-span-5">
                    <FlipNumber
                      to={p.stat}
                      suffix={p.suffix}
                      decimals={p.decimals}
                      className="num-display text-[44px] md:text-[88px] transition-transform duration-500 group-hover:-translate-y-1"
                      suffixClassName="text-[20px] md:text-[36px] tracking-normal ml-1 align-baseline text-muted-foreground"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-7 md:pt-3">
                    <div className="index-badge text-foreground">{p.label}</div>
                    <div className="mt-3 hairline w-8" />
                    <p className="mt-4 text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[420px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* THREE THINGS, PROPERLY */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/40 py-20 md:py-28">
        <Reveal>
          <p className="index-badge opacity-70">03 — WHAT WE DO</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            Three things, <span className="italic">properly</span><span className="text-background/60">.</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-background/30 border border-background/30">
          {threeThings.map((s, i) => (
            <Reveal key={s.n} delay={0.05 * i}>
              <article className="group h-full p-7 md:p-9 bg-foreground text-background flex flex-col">
                <div className="font-mono text-[11px] tracking-[0.12em] opacity-60">— {s.n}</div>
                <h3 className="mt-12 font-display italic h-display-2xs">{s.title}</h3>
                <p className="mt-4 text-[13px] tracking-[0.02em] text-accent-from font-thai" style={{ color: "hsl(var(--accent-from))" }}>{s.lead}</p>
                <div className="mt-6 hairline w-8 bg-background/40" />
                <ul className="mt-6 space-y-2.5 text-[14px] leading-[1.6] font-thai opacity-90">
                  {s.items.map((it) => (
                    <li key={it}>— {it}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* MASTERY VIDEO 21:9 */}
    <section className="relative w-full overflow-hidden bg-foreground">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <YouTubeFacade videoId="u4r7Szy3uxI" title="Work in motion" ambient />
      </div>
    </section>

    {/* FROM HELLO, LIVE IN 4 WEEKS */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28">
        <Reveal>
          <p className="index-badge">04 — HOW IT GOES</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            From hello, live in <span className="italic text-muted-foreground">4 weeks.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-px bg-foreground border border-foreground">
          {steps.map((st) => (
            <Reveal key={st.n}>
              <div className="bg-background p-7 md:p-8 h-full flex flex-col">
                <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">— {st.n}</span>
                <h3 className="mt-10 font-display italic text-[28px] md:text-[36px] tracking-[-0.02em]">{st.title}.</h3>
                <p className="mt-6 text-[14px] leading-[1.6] font-thai text-muted-foreground">{st.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT CLIENTS SAY */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28">
        <Reveal>
          <p className="index-badge">05 — RESULTS</p>
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

    {/* TRUSTED BY */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28">
        <Reveal>
          <p className="index-badge">06 — TRUSTED BY</p>
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
      ctas={[
        { label: "Start the conversation", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default Index;
