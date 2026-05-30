import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

const blueprint = [
  { n: "Ø1", name: "Creative Agency",     tag: "Cashflow Driver",     desc: "บริการเชิงพาณิชย์ — Boutique · Digital · Production สามยูนิตเป็นเครื่องเดียว.", to: "/pricing#boutique" },
  { n: "Ø2", name: "Creative Consulting", tag: "Predictable Revenue", desc: "Fractional CCO ระดับ C-suite สัญญา 12–36 เดือน รายได้ฐานมั่นคง.",            to: "/consulting" },
  { n: "Ø3", name: "Creative Studio",     tag: "Asset & Valuation",   desc: "in-house lab สร้าง products, IP, ventures อิสระจากลูกค้า 100%.",          to: "/studio" },
];

const capabilities = [
  { div: "Ø Boutique",   tag: "Brand & Story",
    items: ["Brand strategy & positioning", "Naming & verbal identity", "Visual identity systems", "Brand book & guidelines", "Campaign concept & art direction", "Editorial & manifesto writing"] },
  { div: "Ø Digital",    tag: "Performance",
    items: ["Paid media · Meta · TikTok · Google", "LINE OA + LINE Ads", "Content systems · short-form video", "Conversion-rate optimization", "Lead funnels · landing pages", "Looker Studio dashboards"] },
  { div: "Ø Production", tag: "Craft",
    items: ["Brand film · documentary · spot", "Photography · stills · still-life", "Multi-cam shoot days", "Color, sound, music composition", "Drone · underwater · anamorphic", "Same-day proxy delivery"] },
];

const process = [
  { n: "01", k: "Listen", weeks: "Wk 1",   d: "Discovery · interviews · brand audit." },
  { n: "02", k: "Refine", weeks: "Wk 2–3", d: "Big Idea · strategy + direction lock." },
  { n: "03", k: "Build",  weeks: "Wk 3–9", d: "Cast crew · production · post." },
  { n: "04", k: "Launch", weeks: "Wk 9+",  d: "Rollout · paid · review 30/60/90." },
];

const Services = () => (
  <div>
    <SEO
      title="Services — ØRIONS · The Creative Company"
      description="Boutique brand · Digital performance · Production craft · Fractional Consulting. One ecosystem, one Account Director, one invoice."
      path="/services"
    />

    {/* 01 — HERO + 3 axes */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
        <SectionLabel index="01" label="The Creative Company" />
        <Reveal delay={0.05}>
          <h1 className="mt-10 h-display-xl max-w-[16ch]">One company. <em className="italic text-cinnabar">Three axes.</em></h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            สามทีม · หนึ่ง Account Director · หนึ่ง invoice.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
            {blueprint.map((m, i) => (
              <Link key={m.n} to={m.to}
                className={`group block p-10 md:p-12 h-full ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""} hover:bg-cinnabar/[0.04] transition-colors`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">[ {m.tag} ]</div>
                <div className="mt-6 font-serif italic text-cinnabar text-[28px] md:text-[34px] leading-none">{m.n}</div>
                <h3 className="mt-4 text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em]">{m.name}</h3>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{m.desc}</p>
                <div className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/80 inline-flex items-center gap-2 group-hover:text-cinnabar transition-colors">
                  Read more <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — CAPABILITIES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="What we do" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[20ch]">
            Full-stack creative — <em className="italic text-cinnabar">no missing handoffs.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {capabilities.map((c, i) => (
            <Reveal key={c.div} delay={i * 0.06}>
              <div className={`p-10 md:p-12 h-full bg-background ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{c.div}</div>
                <h3 className="mt-4 font-serif italic text-[28px] md:text-[32px] tracking-[-0.02em] text-cinnabar">{c.tag}</h3>
                <ul className="mt-8 space-y-3 border-t border-foreground/15 pt-6">
                  {c.items.map((it) => (
                    <li key={it} lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.6] text-foreground/85 grid grid-cols-[12px_1fr] gap-3">
                      <span className="text-cinnabar mt-1">·</span><span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-cinnabar transition-colors">
                  See rates <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — HOW WE WORK */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="How we work" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[22ch]">
            From hello to launch in <em className="italic text-cinnabar">12 weeks.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-b border-foreground/20">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className={`py-10 md:py-12 md:px-8 h-full ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Phase {s.n}</div>
                <h3 className="mt-5 font-serif italic text-[28px] md:text-[34px] tracking-[-0.02em]">{s.k}</h3>
                <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{s.weeks}</div>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-foreground/80">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — CTA */}
    <CTABand
      eyebrow="Next step"
      title={<>Tell us about the brand. <em className="italic text-cinnabar">We'll do the rest.</em></>}
      subtitle="30-min discovery call · free · with an honest fit-check at the end."
      primary={{ label: "Book discovery call", to: "/contact" }}
      secondary={{ label: "See pricing", to: "/pricing" }}
      tone="snow"
    />
  </div>
);

export default Services;
