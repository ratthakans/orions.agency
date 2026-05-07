import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";
import YouTubeFacade from "@/components/YouTubeFacade";
import SimpleMarquee from "@/components/SimpleMarquee";
import TypingLoop from "@/components/TypingLoop";

import workHongmove from "@/assets/hongmove.png";
import workKhaoyai from "@/assets/golf-hero.jpg";
import workMyHotel from "@/assets/myhotel.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";
import workGcoo from "@/assets/gcoo.jpg";

const accent = "text-gradient";

type Work = {
  n: string;
  title: string;
  niche: string;
  scope: string;
  impact: string;
  body: string;
  img: string;
};

const selectedWork: Work[] = [
  { n: "01", title: "Hongmove",            niche: "PROPTECH",    scope: "Brand · Web · Content",       impact: "+312% sign-ups",        body: "End-to-end brand system, marketing site and launch content for the new rental platform.", img: workHongmove },
  { n: "02", title: "Khaoyai Country Club", niche: "HOSPITALITY", scope: "Photo · Video · Social",      impact: "+48% inquiries",        body: "Lifestyle shoot and short-form video for the club rebrand.", img: workKhaoyai },
  { n: "03", title: "MyHotel",             niche: "HOSPITALITY", scope: "Content · Paid ads",          impact: "−37% cost / booking",   body: "Monthly content and Meta ads tuned to lower cost per booking.", img: workMyHotel },
  { n: "04", title: "Royal Thai Air Force", niche: "GOVERNMENT",  scope: "Film · Production · Post",    impact: "2.1M views",            body: "Full production and post for an official RTAF film, end to end.", img: workRtaf },
  { n: "05", title: "Democrat Party",      niche: "POLITICS",    scope: "Campaign · Film · Social",    impact: "12M+ impressions",      body: "National campaign creative — fast turnaround across every platform.", img: workDemocrat },
  { n: "06", title: "Heavy Organizer",     niche: "EVENTS",      scope: "Brand · Event film · Recap",  impact: "+88% conversion",       body: "Brand films and event recaps for live productions.", img: workHeavy },
  { n: "07", title: "GCOO",                niche: "MOBILITY",    scope: "Brand · Launch campaign",     impact: "+540% downloads",       body: "Launch campaign for the e-scooter sharing app — brand, OOH and social.", img: workGcoo },
];

const services = [
  {
    n: "01",
    title: "Branding",
    lead: "Identity that works across every touchpoint.",
    body: "A working brand system — from logo, type and color to a guideline your team and partners can pick up and use right away.",
    bullets: [
      "Logo system & brand guidelines",
      "Visual identity · color · typography",
      "Naming, tone of voice, key messages",
      "Brand rollout: print, digital, packaging",
    ],
    href: "/services#svc-01",
  },
  {
    n: "02",
    title: "Content",
    lead: "Photo, video, and design that earn the scroll.",
    body: "Full in-house production — photo, video, edit and graphics, working as one team from pre to post.",
    bullets: [
      "Photo & video production",
      "Short-form (Reels, TikTok, Shorts)",
      "Brand films & commercials",
      "Design, motion, post-production",
    ],
    href: "/services#svc-02",
  },
  {
    n: "03",
    title: "Social media",
    lead: "Strategy, posting, community, and paid ads.",
    body: "Plan, post, manage community and run paid ads — with monthly reports backed by real numbers.",
    bullets: [
      "Content strategy & monthly planning",
      "Copywriting & community management",
      "Meta / TikTok / Google paid ads",
      "Monthly reporting & optimization",
    ],
    href: "/services#svc-03",
  },
];

const steps = [
  { n: "01", title: "Listen", body: "30-min call. Honest fit-check." },
  { n: "02", title: "Plan",   body: "Short proposal. Real numbers." },
  { n: "03", title: "Build",  body: "Strategy, identity, content, ads." },
  { n: "04", title: "Run",    body: "Monthly reports. Real results." },
];

const SelectedWorkRail = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = selectedWork.length;

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(p);
      const cardW = el.scrollWidth / total;
      setActiveIdx(Math.min(total - 1, Math.round(el.scrollLeft / cardW)));
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [total]);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const cardW = el.clientWidth > 768 ? 380 : 300;
    el.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };

  return (
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                — SELECTED WORK
              </div>
              <h2 className="font-display h-display-sm">
                Recent <span className={accent}>chapters.</span>
              </h2>
            </div>
            <Link
              to="/work"
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/70 hover:text-foreground inline-flex items-center gap-2 border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
            >
              All work <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </Reveal>

        <div
          ref={railRef}
          className="mt-14 -mx-6 md:-mx-10 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          <div className="flex gap-5 md:gap-6 px-6 md:px-16 pb-2">
            {selectedWork.map((w, i) => (
              <Reveal key={w.n} delay={0.04 * i}>
                <Link
                  to="/work"
                  className="group block snap-start shrink-0 w-[280px] md:w-[360px]"
                >
                  <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
                    <img
                      src={w.img}
                      alt={`${w.title} — ${w.scope}`}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Top meta — always visible */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-background/95 mix-blend-difference">
                      <span>— {w.n}</span>
                      <span>{w.niche}</span>
                    </div>

                    {/* Bottom panel — slides up on hover, ~52% height */}
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

                  {/* Title under image — minimal, only impact summary */}
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
            <div className="shrink-0 w-6 md:w-16" aria-hidden />
          </div>
        </div>

        {/* Progress bar + counter + arrows */}
        <div className="mt-10 flex items-center gap-6 md:gap-8">
          <div className="font-mono text-[10px] tracking-[0.25em] tabular-nums text-foreground/80 shrink-0">
            {String(activeIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
          <div className="relative h-px flex-1 bg-foreground/15">
            <div
              className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-150"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="w-9 h-9 inline-flex items-center justify-center border border-foreground/30 hover:bg-foreground hover:text-background transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="w-9 h-9 inline-flex items-center justify-center border border-foreground/30 hover:bg-foreground hover:text-background transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesAccordion = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mt-16 border-t border-background/30">
      {services.map((s, i) => {
        const isOpen = open === s.n;
        return (
          <Reveal key={s.n} delay={0.06 * i}>
            <div className="border-b border-background/15">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : s.n)}
                aria-expanded={isOpen}
                className="group w-full grid grid-cols-12 gap-6 items-baseline py-8 md:py-10 text-left hover:bg-background/[0.03] transition-colors px-2 -mx-2"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.25em] text-background/45">
                  {s.n}
                </div>
                <div className="col-span-9 md:col-span-5">
                  <h3 className="font-display text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.05]">
                    {s.title}
                  </h3>
                </div>
                <div className="hidden md:block col-span-5 font-thai text-[14px] md:text-[15px] leading-[1.65] text-background/70">
                  {s.lead}
                </div>
                <div className="col-span-1 flex justify-end items-center">
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-background/70" />
                  ) : (
                    <Plus className="w-5 h-5 text-background/50 group-hover:text-background transition-colors" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-12 gap-6 pb-10 md:pb-12 px-2 -mx-2">
                    <div className="hidden md:block md:col-span-1" />
                    <div className="col-span-12 md:col-span-6">
                      <p className="text-[15px] md:text-[16px] leading-[1.75] text-background/80">
                        {s.body}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                      <ul className="space-y-2 mb-6">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="font-mono text-[11px] tracking-[0.05em] text-background/70 flex gap-3"
                          >
                            <span className="text-background/40">—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={s.href}
                        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-background border-b border-background/40 hover:border-background pb-1 transition-colors"
                      >
                        View {s.title} <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Boutique creative agency · F&B · Fashion · Hospitality"
      description="Branding, content, and paid ads for unique brands. From hello, live in 4 weeks. Bangkok. From THB 50k/mo."
      path="/"
    />

    {/* HERO — DARK */}
    <section className="relative min-h-screen flex flex-col bg-foreground text-background overflow-hidden">
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10 md:mb-14">
            BANGKOK · EST. 2026
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-brand h-display-xl leading-[0.85] text-background">ØRIONS</h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-12 md:mt-16 font-display text-[14px] md:text-[18px] tracking-[-0.01em] max-w-[640px]">
            A boutique{" "}
            <TypingLoop text="creative agency" className={accent} />
          </p>
        </Reveal>

      </div>

      {/* Scroll cue — pinned to hero bottom, above marquee */}
      <div className="pointer-events-none absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="font-mono text-[9px] tracking-[0.4em] text-background/45">SCROLL</div>
        <div className="w-px h-10 bg-background/25" />
      </div>

      {/* Bottom proof marquee */}
      <div className="relative border-t border-background/15 py-5">
        <SimpleMarquee
          duration={42}
          items={[
            "07 PROJECTS LIVE",
            "05 INDUSTRIES",
            "FROM IDEA TO FINAL CUT",
            "BANGKOK — EST. 2026",
            "ONE TEAM · NO HANDOFF",
          ]}
        />
      </div>
    </section>

    {/* SELECTED WORK */}
    <SelectedWorkRail />

    {/* THREE THINGS — DARK, simplified */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/30 py-24 md:py-32 max-w-[1280px] mx-auto">
        <Reveal delay={0.05}>
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/55 mb-4">
              — WHAT WE DO
            </div>
            <h2 className="font-display h-display-sm">
              Three things, <span className={accent}>properly.</span>
            </h2>
          </div>
        </Reveal>

        <ServicesAccordion />
      </div>
    </section>

    {/* MASTERY VIDEO */}
    <section className="relative w-full overflow-hidden bg-foreground border-y border-background/20">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <YouTubeFacade videoId="u4r7Szy3uxI" title="Work in motion" ambient />
      </div>
    </section>

    {/* PROCESS — LIGHT, horizontal timeline */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
        <Reveal delay={0.05}>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            — PROCESS
          </div>
          <h2 className="font-display h-display-sm">
            From hello, live in <span className={accent}>4 weeks.</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          {/* Animated hairline — sweeps right→left on view */}
          <motion.div
            className="absolute top-[14px] left-0 right-0 h-px bg-foreground/30 origin-right"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            aria-hidden
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-8">
            {steps.map((st, i) => {
              // reverse order so animation reads right→left
              const delay = 0.15 + (steps.length - 1 - i) * 0.12;
              return (
                <motion.div
                  key={st.n}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
                  className="group relative pt-10 cursor-default"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: delay + 0.1 }}
                    className="absolute top-[8px] left-0 w-3.5 h-3.5 bg-background border border-foreground group-hover:bg-gradient-accent group-hover:border-transparent transition-colors"
                    aria-hidden
                  />
                  <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">— {st.n}</div>
                  <h3 className="mt-4 font-display text-[22px] md:text-[26px] tracking-[-0.02em] group-hover:text-gradient transition-colors">
                    {st.title}.
                  </h3>
                  <p className="mt-3 font-thai text-[14px] leading-[1.7] text-muted-foreground max-w-[260px]">
                    {st.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* TRUSTED BY — single logo marquee, clients only */}
    <section className="relative bg-foreground text-background">
      <div className="border-t border-background/20 py-20 md:py-24">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto mb-10 flex items-baseline justify-between gap-6 flex-wrap">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/55">
            — TRUSTED BY · SELECTED CLIENTS
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-background/45">
            2024 — 2026
          </div>
        </div>
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-background/15">
            {[
              ...selectedWork.map((w) => w.title),
              "Sundara",
              "Veranda",
              "North Loop",
              "Aroi & Co.",
              "Sala Studios",
            ].map((name) => (
              <li
                key={name}
                className="border-r border-b border-background/15 aspect-[5/2] flex items-center justify-center px-4 py-6 group"
              >
                <span className="font-display text-[13px] md:text-[15px] tracking-[0.08em] uppercase text-background/55 group-hover:text-gradient transition-colors text-center">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <ClosingCTA
      eyebrow="ONE TEAM · NO HANDOFF"
      title={<>From idea to <span className={accent}>final cut.</span></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Start the conversation", to: "/contact" },
        { label: "See services & pricing", to: "/services", variant: "ghost" },
      ]}
    />
  </div>
);

export default Index;
