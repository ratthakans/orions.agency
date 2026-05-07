import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import YouTubeFacade from "@/components/YouTubeFacade";
import SimpleMarquee from "@/components/SimpleMarquee";
import TypingLoop from "@/components/TypingLoop";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import rtafLogo from "@/assets/rtaf-emblem.png";
import workHongmove from "@/assets/hongmove.png";
import workKhaoyai from "@/assets/golf-hero.jpg";
import workMyHotel from "@/assets/myhotel.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";

const accent = "text-gradient";

const selectedWork = [
  {
    n: "01",
    title: "Hongmove",
    niche: "PROPTECH",
    scope: "Brand identity · Web · Content",
    impact: "+312% sign-ups · 4 weeks",
    body: "Rebuilt the brand system end-to-end — logo, guidelines, marketing site and launch content for the new rental platform.",
    img: workHongmove,
  },
  {
    n: "02",
    title: "Khaoyai Country Club",
    niche: "HOSPITALITY",
    scope: "Photo · Video · Social",
    impact: "+48% member inquiries",
    body: "Lifestyle shoot and short-form video for the course rebrand — clubhouse, fairways, and member experience.",
    img: workKhaoyai,
  },
  {
    n: "03",
    title: "MyHotel",
    niche: "HOSPITALITY",
    scope: "Brand · Content · Paid ads",
    impact: "−37% cost per booking",
    body: "Monthly content pillars and Meta paid ads for the hotel chain — creative tuned to lower cost per booking.",
    img: workMyHotel,
  },
  {
    n: "04",
    title: "Royal Thai Air Force",
    niche: "GOVERNMENT",
    scope: "Film · Production · Post",
    impact: "2.1M views · national broadcast",
    body: "Full production and post for an official RTAF film — managed end-to-end from shoot to final cut.",
    img: workRtaf,
  },
  {
    n: "05",
    title: "Democrat Party",
    niche: "POLITICS",
    scope: "Campaign · Film · Social",
    impact: "12M+ impressions · 30 days",
    body: "National campaign creative — film, photo and social content built for fast turnaround across every platform.",
    img: workDemocrat,
  },
  {
    n: "06",
    title: "Heavy Organizer",
    niche: "EVENTS",
    scope: "Brand · Event film · Recap",
    impact: "+88% ticket conversion",
    body: "Brand films and event recaps for live productions — capture, edit and roll out across the full social cycle.",
    img: workHeavy,
  },
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
          <p className="mt-12 md:mt-16 font-display text-[14px] md:text-[18px] tracking-[-0.01em] max-w-[640px]">
            A boutique{" "}
            <TypingLoop
              text="creative agency"
              className={`${accent} inline-block`}
              typeSpeed={110}
              deleteSpeed={55}
              holdMs={2000}
            />
            {" "}for F&amp;B, fashion &amp; hospitality.
          </p>
        </Reveal>
      </div>

      {/* Bottom service marquee — infinite loop */}
      <div className="relative border-t border-background/15 py-5">
        <SimpleMarquee duration={32} items={["BRANDING", "CONTENT", "SOCIAL MEDIA"]} />
      </div>
    </section>

    {/* SELECTED WORK */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <h2 className="font-display h-display-sm">
              Selected <span className={accent}>work.</span>
            </h2>
            <Link
              to="/work"
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground inline-flex items-center gap-2 border-b border-foreground/30 pb-1"
            >
              All work <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {selectedWork.map((w, i) => (
            <Reveal key={w.n} delay={0.06 * i}>
              <Link to="/work" className="group block">
                <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "3 / 4" }}>
                  <img
                    src={w.img}
                    alt={`${w.title} — ${w.scope}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] text-background/90 mix-blend-difference">
                    — {w.n} · {w.niche}
                  </div>

                  {/* Slide-in detail panel from right */}
                  <div
                    className="absolute inset-y-0 right-0 w-full bg-foreground text-background translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out p-5 flex flex-col justify-end"
                  >
                    <div className="font-mono text-[9px] tracking-[0.25em] text-background/60">
                      — {w.scope}
                    </div>
                    <h3 className="mt-3 font-display text-[16px] md:text-[18px] tracking-[-0.01em] leading-tight">
                      {w.title}
                    </h3>
                    <p className="mt-3 font-thai text-[12px] leading-[1.65] text-background/75">
                      {w.body}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.25em] uppercase text-background/80 border-t border-background/20 pt-3">
                      View case <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[14px] md:text-[15px] tracking-[-0.01em]">
                    {w.title}
                  </h3>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                    {w.niche}
                  </span>
                </div>
              </Link>
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
                className={`relative h-full py-10 md:py-12 md:px-8 flex flex-col ${i > 0 ? "md:border-l border-background/20" : ""}`}
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-background/50">— {s.n}</div>
                <h3 className="mt-6 font-display text-[22px] md:text-[26px] tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-background/70 max-w-[300px]">{s.lead}</p>
                <ul className="mt-8 space-y-3 font-thai text-[13px] leading-[1.7] text-background/85 border-t border-background/20 pt-5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] opacity-40">·</span>
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
    <section className="relative w-full overflow-hidden bg-foreground border-y border-background/20">
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
                <p className="mt-3 font-thai text-[14px] leading-[1.7] text-background/70 max-w-[300px]">
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
                className={`relative aspect-[2/1] flex items-center justify-center text-center px-4 cursor-default border-soft ${(i % 6) !== 5 ? "border-r" : ""} ${i < trustedBy.length - 6 ? "border-b" : ""}`}
              >
                {logo ? (
                  <span className="flex items-center gap-2.5">
                    <img
                      src={logo}
                      alt={name}
                      className="h-7 md:h-8 w-auto object-contain opacity-70 grayscale"
                      loading="lazy"
                    />
                    <span className="font-display text-[10px] md:text-[11px] tracking-[0.04em] text-muted-foreground">
                      {name}
                    </span>
                  </span>
                ) : (
                  <span className="font-display text-[11px] md:text-[12px] tracking-[0.04em] text-muted-foreground">
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
