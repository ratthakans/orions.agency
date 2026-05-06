import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import YouTubeFacade from "@/components/YouTubeFacade";
import SimpleMarquee from "@/components/SimpleMarquee";
import CountUp from "@/components/CountUp";
import TypingLoop from "@/components/TypingLoop";
import rtafLogo from "@/assets/rtaf-emblem.png";

const accent = "text-gradient";

const pressures = [
  { value: 71, suffix: "%", label: "OF SOCIAL IMAGES", body: "AI-generated. You need real content to stand out." },
  { value: 20, suffix: "%", label: "META CPM RISE, YoY", body: "Ads cost more. You need creative that converts." },
  { value: 8,  suffix: "s", label: "ATTENTION SPAN",   body: "Eight seconds. You need to hook them fast." },
];

const threeThings = [
  { n: "01", title: "Branding",     lead: "Identity that works across every touchpoint.", items: ["Naming · Logo · Marks","Visual identity system","Brand guidelines + book","Launch toolkit"] },
  { n: "02", title: "Content",      lead: "Photo, video, and design that earn the scroll.", items: ["Photo + video shoots","Reels + short-form video","Graphic + motion design","Asset libraries"] },
  { n: "03", title: "Social media", lead: "Strategy, posting, community, and paid ads.", items: ["Strategy + content calendar","Daily posting + scheduling","Community management","Paid ads (Meta, TikTok)"] },
];

const steps = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check." },
  { n: "02", title: "Plan",   body: "Short proposal. Real numbers." },
  { n: "03", title: "Build",  body: "Strategy, identity, content, ads." },
  { n: "04", title: "Run",    body: "Monthly reports. Real results." },
];

const trustedBy = [
  { name: "ROYAL THAI AIR FORCE", logo: rtafLogo },
  "SAINT MANOR","HÔTEL VERGÉ","CALA / BKK",
  "NORTH MERIDIAN","AT.09","CAFÉ ORSAY","STUDIO — KIN",
  "PLAYA NORTE","CASA · SOL","MARLOW & CO.","UNION BKK",
] as Array<string | { name: string; logo: string }>;

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Boutique creative agency · F&B · Fashion · Hospitality"
      description="Branding, content, and paid ads for unique brands. From hello, live in 4 weeks. Bangkok. From THB 50k/mo."
      path="/"
    />

    {/* HERO — DARK, minimal */}
    <section className="relative min-h-screen flex flex-col bg-foreground text-background overflow-hidden">

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10 md:mb-14">
            BANGKOK · EST. 2026
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-brand h-display-xl leading-[0.85] text-background">
            ØRIONS
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-12 md:mt-16 font-display text-[14px] md:text-[18px] tracking-[-0.01em]">
            A boutique{" "}
            <TypingLoop
              text="creative agency."
              className={`${accent} inline-block`}
              typeSpeed={110}
              deleteSpeed={55}
              holdMs={2000}
            />
          </p>
        </Reveal>
      </div>

      {/* Bottom service marquee — infinite loop */}
      <div className="relative border-t border-background/15 py-5">
        <SimpleMarquee duration={32} items={["BRANDING", "CONTENT", "SOCIAL MEDIA"]} />
      </div>
    </section>

    {/* WHAT YOU'RE UP AGAINST */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            What you&apos;re <span className={accent}>up against.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-foreground">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={0.08 * i}>
              <div className={`py-10 md:py-12 md:px-8 h-full ${i > 0 ? "md:border-l border-soft" : ""}`}>
                <CountUp
                  to={p.value}
                  suffix={p.suffix}
                  duration={1600}
                  className={`font-display ${accent} text-[48px] md:text-[64px] leading-[1] tracking-[-0.04em] tabular-nums`}
                />
                <div className="mt-6 index-badge text-muted-foreground">{p.label}</div>
                <p className="mt-4 font-thai text-[14px] leading-[1.7] text-foreground/70 max-w-[300px]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* THREE THINGS — DARK */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            Three things, <span className={accent}>properly.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-background/30">
          {threeThings.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <article
                className={`group relative h-full py-10 md:py-12 md:px-8 flex flex-col transition-opacity duration-300 hover:opacity-100 md:[&:hover~*]:opacity-60 ${i > 0 ? "md:border-l border-background/20" : ""}`}
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-background/50">— {s.n}</div>
                <h3 className="mt-6 font-display text-background text-[24px] md:text-[28px] tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-background/65 max-w-[300px]">{s.lead}</p>
                <ul className="mt-8 space-y-3 font-thai text-[13px] leading-[1.7] text-background/85 border-t border-background/15 pt-5">
                  {s.items.map((it, j) => (
                    <li key={it} className="flex items-baseline gap-3">
                      <span className="font-mono text-[9px] tracking-[0.18em] opacity-40 tabular-nums">·{String(j + 1).padStart(2, "0")}</span>
                      <span>{it}</span>
                    </li>
                  ))}
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
      <div className="border-t border-background/30 py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            From hello, live in <span className={accent}>4 weeks.</span>
          </h2>
        </Reveal>
        <div className="mt-16 pt-10 border-t border-background/30 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((st, i) => (
            <Reveal key={st.n} delay={0.08 * i}>
              <div className="relative">
                <div className="font-mono text-[10px] tracking-[0.2em] text-background/50">— {st.n}</div>
                <h3 className="mt-6 font-display text-[22px] md:text-[26px] tracking-[-0.02em] text-background">
                  {st.title}.
                </h3>
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-background/65">
                  {st.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* TRUSTED BY */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm">
            Trusted <span className={accent}>by.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-soft">
          {trustedBy.map((entry, i) => {
            const name = typeof entry === "string" ? entry : entry.name;
            const logo = typeof entry === "string" ? null : entry.logo;
            return (
              <div
                key={name}
                className={`group relative aspect-[2/1] flex items-center justify-center text-center px-4 cursor-default border-soft transition-opacity duration-300 hover:opacity-100 md:[&:hover~*]:opacity-60 ${(i % 6) !== 5 ? "border-r" : ""} ${i < trustedBy.length - 6 ? "border-b" : ""}`}
              >
                {logo ? (
                  <span className="relative flex items-center gap-2.5">
                    <img
                      src={logo}
                      alt={name}
                      className="h-7 md:h-8 w-auto object-contain transition-[filter,opacity] duration-300 opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <span className="font-display text-[10px] md:text-[11px] tracking-[0.04em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {name}
                    </span>
                  </span>
                ) : (
                  <span className="relative font-display text-[11px] md:text-[12px] tracking-[0.04em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
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

export default Index;
