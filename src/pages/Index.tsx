import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import YouTubeFacade from "@/components/YouTubeFacade";

const accent = "italic text-[hsl(var(--accent-from))]";

const pressures = [
  { stat: "71%", label: "OF SOCIAL IMAGES", body: "AI-generated. You need real content to stand out." },
  { stat: "20%", label: "META CPM RISE, YoY", body: "Ads cost more. You need creative that converts." },
  { stat: "8s",  label: "ATTENTION SPAN",   body: "Eight seconds. You need to hook them fast." },
];

const threeThings = [
  { n: "01", title: "Branding",     lead: "Identity that works across every touchpoint.", items: ["Naming · Logo · Marks","Visual identity system","Brand guidelines + book","Launch toolkit"] },
  { n: "02", title: "Content",      lead: "Photo, video, and design that earn the scroll.", items: ["Photo + video shoots","Reels + short-form video","Graphic + motion design","Asset libraries"] },
  { n: "03", title: "Social media", lead: "Strategy, posting, community, and paid ads.", items: ["Strategy + content calendar","Daily posting + scheduling","Community management","Paid ads (Meta, TikTok)"] },
];

const steps = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check.", heavy: true  },
  { n: "02", title: "Plan",   body: "Short proposal. Real numbers.",  heavy: false },
  { n: "03", title: "Build",  body: "Strategy, identity, content, ads.", heavy: true  },
  { n: "04", title: "Run",    body: "Monthly reports. Real results.", heavy: false },
];

const testimonials = [
  { niche: "F&B",         stat: "+62%", statLabel: "BOOKINGS",      quote: "They got our brand voice right from day one. Bookings up 62% in three months.", name: "Cedric C.",  handle: "Maison Lumière · @maisonlumiere" },
  { niche: "FASHION",     stat: "11d",  statLabel: "TO SELL OUT",   quote: "Sold out our first drop in eleven days. No paid ads needed.",                  name: "Estelle S.", handle: "Saint Manor · @saintmanor" },
  { niche: "HOSPITALITY", stat: "−41%", statLabel: "COST / BOOKING",quote: "Cut our cost per booking by 41%. Bookings still up.",                           name: "Shimpei M.", handle: "Hôtel Vergé · @hotelverge" },
];

const trustedBy = [
  "MAISON LUMIÈRE","SAINT MANOR","HÔTEL VERGÉ","CALA / BKK",
  "NORTH MERIDIAN","AT.09","CAFÉ ORSAY","STUDIO — KIN",
  "PLAYA NORTE","CASA · SOL","MARLOW & CO.","UNION BKK",
];

const whyUs = [
  { n: "01", title: "Small team. Your team.",   body: "You talk to who's doing the work. No telephone game." },
  { n: "02", title: "Strategy before pretty.",  body: "We plan before we post." },
  { n: "03", title: "Ads inside the plan.",     body: "Paid ads built into your strategy from day one." },
  { n: "04", title: "Built for boutique brands.", body: "We work with brands who care about quality." },
];

const teamGroups = [
  { label: "LEADERSHIP",            roles: ["Founder", "Managing Director"] },
  { label: "STRATEGY & ACCOUNT",    roles: ["Account Executive","Project Manager","Marketing Strategist"] },
  { label: "CREATIVE & PRODUCTION", roles: ["Creative Director","Creative Senior","Creative","Editor","DOP","Social Media Manager"] },
];

const tiers = [
  { label: "STARTER",      title: "Standard",  sub: "Start strong. Build consistency.",                price: "THB 50k",  summary: "Strategy, content, and monthly posting for brands building their presence on social.", hero: false },
  { label: "MOST POPULAR", title: "Pro",       sub: "Grow with strategy, content, and paid ads.",      price: "THB 80k",  summary: "Full strategy, content production, community management, and paid ads — managed end-to-end.", hero: true  },
  { label: "PREMIUM",      title: "Exclusive", sub: "Full-service. Brand to bottom-funnel.",           price: "THB 120k", summary: "Branding, content, ads, and senior creative direction. For brands going all-in.", hero: false },
];

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Boutique creative agency · F&B · Fashion · Hospitality"
      description="Branding, content, and paid ads for unique brands. From hello, live in 4 weeks. Bangkok. From THB 50k/mo."
      path="/"
    />

    {/* HERO — DARK */}
    <section className="relative min-h-screen flex flex-col bg-foreground text-background overflow-hidden">
      <div className="px-6 md:px-10 pt-28 md:pt-32 font-mono text-[10px] tracking-[0.3em] text-background/60">
        EST. 2026
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10">
        <Reveal delay={0.05}>
          <h1 className="font-brand h-display-xl leading-[0.85]">
            <span>ØRI</span><span className={accent}>O</span><span>NS</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 md:mt-12 font-display h-display-xs">
            A boutique <span className={accent}>creative agency.</span>
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-5 max-w-[620px] italic font-thai text-[14px] md:text-[17px] text-background/70 leading-[1.6]">
            We help unique brands grow on social — through branding, content, and paid ads.
          </p>
        </Reveal>
      </div>
      <div className="px-6 md:px-10 py-6 border-t border-background/20 flex justify-between font-mono text-[10px] tracking-[0.3em] text-background/60">
        <span>CAPABILITIES — 2026</span>
        <a href="mailto:hello@orions.agency" className="hover:text-[hsl(var(--accent-from))] transition-colors">
          HELLO@ORIONS.AGENCY
        </a>
      </div>
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-background/60 font-mono text-[9px] tracking-[0.3em]">
        SCROLL
        <span className="block w-px h-8 bg-background/60" />
      </div>
    </section>

    {/* WHAT YOU'RE UP AGAINST */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal>
          <p className="index-badge text-muted-foreground">— 02</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            What you&apos;re <span className={accent}>up against.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={0.1 * i}>
              <div className={`py-10 md:py-12 px-0 md:px-8 h-full ${i > 0 ? "md:border-l border-soft" : ""}`}>
                <div className={`font-display ${accent} text-[64px] md:text-[96px] leading-[0.95] tracking-[-0.04em]`}>
                  {p.stat}
                </div>
                <div className="mt-6 index-badge text-muted-foreground">{p.label}</div>
                <p className="mt-5 text-[14px] md:text-[15px] leading-[1.65] text-foreground/80 font-thai max-w-[320px]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* QUOTE */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-32 md:py-44 max-w-[1320px] mx-auto">
        <Reveal>
          <div className={`font-display ${accent} text-[80px] md:text-[120px] leading-[0.4]`}>“</div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-10 font-display h-display-md max-w-[1100px]">
            We don&apos;t post for the sake of posting.<br />
            We build <span className={accent}>for results.</span>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-20 pt-6 border-t border-dashed border-soft font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
            — THE ORIONS APPROACH
          </div>
        </Reveal>
      </div>
    </section>

    {/* THREE THINGS — DARK */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal><p className="index-badge text-background/60">— 04</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            Three things, <span className={accent}>properly.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-background/30 border border-background/30">
          {threeThings.map((s) => (
            <Reveal key={s.n}>
              <article className="h-full p-7 md:p-9 bg-foreground text-background flex flex-col">
                <div className="font-mono text-[11px] tracking-[0.12em] opacity-60">— {s.n}</div>
                <h3 className={`mt-12 font-display ${accent} h-display-2xs`}>{s.title}</h3>
                <p className="mt-4 italic font-thai text-[13px] text-background/70">{s.lead}</p>
                <div className="mt-6 hairline w-8 bg-background/40" />
                <ul className="mt-6 space-y-2.5 text-[14px] leading-[1.6] font-thai opacity-90">
                  {s.items.map((it) => <li key={it}>— {it}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* MASTERY VIDEO */}
    <section className="relative w-full overflow-hidden bg-foreground">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <YouTubeFacade videoId="u4r7Szy3uxI" title="Work in motion" ambient />
      </div>
    </section>

    {/* PROCESS — DARK */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal><p className="index-badge text-background/60">— 05</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            From hello,<br />live in <span className={accent}>4 weeks.</span>
          </h2>
        </Reveal>
        <div className="mt-20 pt-10 border-t border-background/30 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          <div className="hidden md:block absolute top-[42px] left-0 right-0 border-t border-dashed border-background/30" />
          {steps.map((st) => (
            <Reveal key={st.n}>
              <div className="relative">
                <div className={`font-mono text-[10px] tracking-[0.2em] ${st.heavy ? "text-[hsl(var(--accent-from))]" : "text-background/40"}`}>— {st.n}</div>
                <div className={`mt-3 font-display italic text-[18px] ${st.heavy ? "text-[hsl(var(--accent-from))]" : "text-background/40"}`}>✦</div>
                <h3 className={`mt-7 font-display italic text-[28px] md:text-[36px] tracking-[-0.02em] ${st.heavy ? "text-background" : "text-background/45"}`}>
                  {st.title}.
                </h3>
                <p className={`mt-4 text-[13px] leading-[1.55] font-thai ${st.heavy ? "text-background/75" : "text-background/40"}`}>
                  {st.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal><p className="index-badge text-muted-foreground">— 06</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            What clients <span className={accent}>say.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          {testimonials.map((t, i) => (
            <Reveal key={t.name}>
              <article className={`p-7 md:p-8 h-full flex flex-col ${i > 0 ? "md:border-l border-soft" : ""}`}>
                <div className={`font-mono text-[10px] tracking-[0.2em] ${accent} font-bold`}>{t.niche}</div>
                <div className="mt-4 flex justify-between items-start">
                  <div className={`font-display ${accent} text-[60px] leading-[0.5]`}>“</div>
                  <div className="text-right">
                    <div className={`font-display ${accent} text-[36px] leading-none tracking-[-0.02em]`}>{t.stat}</div>
                    <div className="mt-1 font-mono text-[8px] tracking-[0.2em] text-muted-foreground">{t.statLabel}</div>
                  </div>
                </div>
                <p className="mt-7 font-display italic text-[17px] leading-[1.45] flex-1">{t.quote}</p>
                <div className="mt-7 pt-4 border-t border-dashed border-soft">
                  <div className="font-display italic font-semibold text-[15px]">{t.name}</div>
                  <div className="mt-1 italic font-thai text-[13px] text-muted-foreground">{t.handle}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* TRUSTED BY */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal><p className="index-badge text-muted-foreground">— 07</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            Trusted <span className={accent}>by.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 italic font-thai text-[15px] text-muted-foreground">
            40+ brands across F&amp;B, fashion, and hospitality.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-foreground">
          {trustedBy.map((name, i) => (
            <div key={name} className={`aspect-[2/1] flex items-center justify-center text-center px-4 border-soft ${(i % 6) !== 5 ? "border-r" : ""} ${i < trustedBy.length - 6 ? "border-b" : ""}`}>
              <span className="font-display text-[12px] md:text-[14px] tracking-[0.02em] text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
          [ Selected · Q2 2026 ]
        </p>
      </div>
    </section>

    {/* WHY US */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal><p className="index-badge text-muted-foreground">— 08</p></Reveal>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
          <Reveal>
            <h2 className="font-display h-display-md">
              Why <span className={accent}>us?</span>
            </h2>
          </Reveal>
          <div className="md:col-span-2 md:border-l border-foreground md:pl-10">
            <ul>
              {whyUs.map((w, i) => (
                <Reveal key={w.n} delay={0.05 * i}>
                  <li className={`grid grid-cols-[auto,1fr] gap-8 py-6 ${i < whyUs.length - 1 ? "border-b border-dashed border-soft" : ""}`}>
                    <div className={`font-display ${accent} text-[44px] leading-[1] tracking-[-0.02em]`}>{w.n}</div>
                    <div>
                      <div className="font-display italic text-[20px] md:text-[22px] tracking-[-0.01em]">{w.title}</div>
                      <p className="mt-2 font-thai text-[14px] leading-[1.55] text-foreground/75">{w.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* TEAM */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal><p className="index-badge text-muted-foreground">— 09</p></Reveal>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <Reveal>
              <h2 className="font-display h-display-sm">
                The <span className={accent}>team.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className={`mt-6 font-display ${accent} text-[120px] md:text-[168px] leading-[0.9] tracking-[-0.04em]`}>11</div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-3 font-display italic text-[22px]">people, in-house.</div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 italic font-thai text-[14px] text-muted-foreground max-w-[360px]">
                You&apos;ll work directly with the people building your brand.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-3 md:border-l border-foreground md:pl-10 flex flex-col gap-8">
            {teamGroups.map((g) => (
              <Reveal key={g.label}>
                <div>
                  <div className={`font-mono text-[10px] tracking-[0.2em] font-medium ${accent}`}>{g.label}</div>
                  <div className="mt-3 border-t border-dashed border-soft" />
                  <p className="mt-4 font-display italic text-[17px] md:text-[19px] leading-[1.5]">
                    {g.roles.map((r, i) => (
                      <span key={r}>
                        {r}
                        {i < g.roles.length - 1 && <span className="text-muted-foreground mx-3">·</span>}
                      </span>
                    ))}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* PRICING */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1320px] mx-auto">
        <Reveal><p className="index-badge text-muted-foreground">— 10</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display h-display-md">
            Honest <span className={accent}>pricing.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 pb-3 flex items-baseline gap-3 border-b border-foreground">
            <span className={`font-mono text-[10px] tracking-[0.2em] font-medium ${accent}`}>RETAINERS</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">(monthly)</span>
          </div>
        </Reveal>

        <div className="mt-0 grid grid-cols-1 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.title} delay={0.05 * i}>
              <div className={`p-7 md:p-8 h-full flex flex-col ${t.hero ? "bg-foreground text-background" : "border-soft"} ${!t.hero && i < 2 ? "md:border-r" : ""}`}>
                <div className={`font-mono text-[10px] tracking-[0.2em] font-medium ${t.hero ? "text-[hsl(var(--accent-from))]" : "text-[hsl(var(--accent-from))]"}`}>{t.label}</div>
                <h3 className={`mt-4 font-display italic text-[32px] tracking-[-0.02em] ${t.hero ? "text-background" : "text-foreground"}`}>{t.title}</h3>
                <p className={`mt-4 italic font-thai text-[13px] ${t.hero ? "text-background/75" : "text-muted-foreground"}`}>{t.sub}</p>
                <div className="mt-7 flex items-baseline gap-2">
                  <span className={`font-mono text-[11px] tracking-[0.15em] ${t.hero ? "text-background/60" : "text-muted-foreground"}`}>From</span>
                  <span className={`font-display italic tracking-[-0.02em] ${t.hero ? "text-background text-[44px]" : "text-foreground text-[38px]"}`}>{t.price}</span>
                </div>
                <div className={`mt-2 font-mono text-[11px] tracking-[0.15em] ${t.hero ? "text-background/60" : "text-muted-foreground"}`}>Per month</div>
                <div className={`mt-6 border-t border-dashed ${t.hero ? "border-background/30" : "border-soft"}`} />
                <p className={`mt-6 italic font-thai text-[13px] leading-[1.6] flex-1 ${t.hero ? "text-background" : "text-foreground/80"}`}>{t.summary}</p>
                <div className={`mt-8 font-mono text-[9px] tracking-[0.2em] uppercase ${t.hero ? "text-background/60" : "text-muted-foreground"}`}>
                  Custom scope on request.
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16">
            <div className="pb-3 flex items-baseline gap-3 border-b border-foreground">
              <span className={`font-mono text-[10px] tracking-[0.2em] font-medium ${accent}`}>STARTUP</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">(get going fast)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-8 py-6 items-baseline border-b border-dashed border-soft">
              <div className="font-display italic text-[22px] tracking-[-0.01em]">Quick start.</div>
              <div className="italic font-thai text-[14px] text-foreground/80">Brand audit + content plan, ready to roll in 2 weeks.</div>
              <div className={`font-display ${accent} text-[22px] tracking-[-0.01em] md:text-right`}>From THB 30k</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <ClosingCTA
      eyebrow="✦ NOW BOOKING — Q3 2026"
      title={<>Tell us about <span className={accent}>the brand.</span></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Start the conversation", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default Index;
