import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";

import workHongmove from "@/assets/hongmove.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";

/* ---------- 3-axis blueprint ---------- */
const blueprint = [
  { n: "Ø1", name: "Creative Agency",     tag: "Cashflow Driver",     desc: "บริการเชิงพาณิชย์ — Boutique · Digital · Production สามยูนิตเป็นเครื่องเดียว.", to: "/pricing#boutique" },
  { n: "Ø2", name: "Creative Consulting", tag: "Predictable Revenue", desc: "Fractional CCO ระดับ C-suite สัญญา 12–36 เดือน รายได้ฐานมั่นคง.",            to: "/consulting" },
  { n: "Ø3", name: "Creative Studio",     tag: "Asset & Valuation",   desc: "in-house lab สร้าง products, IP, ventures อิสระจากลูกค้า 100%.",          to: "/studio" },
];

/* ---------- Capabilities (no prices) ---------- */
const capabilities = [
  {
    div: "Ø Boutique",
    tag: "Brand & Story",
    items: [
      "Brand strategy & positioning",
      "Naming & verbal identity",
      "Visual identity systems",
      "Brand book & guidelines",
      "Campaign concept & art direction",
      "Editorial & manifesto writing",
    ],
  },
  {
    div: "Ø Digital",
    tag: "Performance",
    items: [
      "Paid media · Meta · TikTok · Google",
      "LINE OA + LINE Ads",
      "Content systems · short-form video",
      "Conversion-rate optimization",
      "Lead funnels · landing pages",
      "Looker Studio dashboards",
    ],
  },
  {
    div: "Ø Production",
    tag: "Craft",
    items: [
      "Brand film · documentary · spot",
      "Photography · stills · still-life",
      "Multi-cam shoot days",
      "Color, sound, music composition",
      "Drone · underwater · anamorphic",
      "Same-day proxy delivery",
    ],
  },
];

/* ---------- How we work ---------- */
const process = [
  { n: "01", k: "Listen",  weeks: "Wk 1",   d: "Discovery · audience interviews · cultural intelligence · brand audit." },
  { n: "02", k: "Refine",  weeks: "Wk 2–3", d: "Big Idea · strategy lock · direction lock · creative tonal map." },
  { n: "03", k: "Build",   weeks: "Wk 3–9", d: "Cast director, DP, photographer. Production batched for efficiency." },
  { n: "04", k: "Launch",  weeks: "Wk 9+",  d: "Rollout calendar · paid media on · review at 30 / 60 / 90 days." },
];

/* ---------- Deliverables ---------- */
const deliverables = [
  { k: "Strategy",       v: "Positioning doc · audience map · cultural report" },
  { k: "Identity",       v: "Logo system · brand book · typography stack · color tokens" },
  { k: "Content Library", v: "Hero film + cutdowns · stills set · social pack" },
  { k: "Paid media",     v: "Ad creative pack · funnels · LINE OA + Looker dashboard" },
  { k: "Web",            v: "Landing page · brand site · CMS handoff" },
  { k: "Raw archive",    v: "Lifetime perpetual usage · raw kept 90 days" },
];

/* ---------- Industries ---------- */
const industries = [
  { name: "Restaurant",     brief: "เปิดสาขา · launch menu · เปลี่ยน chef · เจาะตลาดต่างชาติ" },
  { name: "Hospitality",    brief: "เพิ่ม occupancy off-season · rebrand หลัง renovation · MICE" },
  { name: "Golf",           brief: "เพิ่ม member ต่างชาติ · tournament · rebrand" },
  { name: "Real Estate",    brief: "launch project · closeout · เจาะตลาดต่างชาติ" },
  { name: "Wellness",       brief: "launch program · wellness tourism · membership" },
  { name: "Premium Retail", brief: "collection launch · flagship opening · founder story" },
];

/* ---------- Differentiators ---------- */
const why = [
  { n: "01", t: "One ecosystem",       d: "Creative · Strategy · Production · Paid — one Account Director, one timeline, one invoice." },
  { n: "02", t: "Senior crew only",    d: "2 co-founders + 8–12 senior specialists per project. No juniors as leads. Ever." },
  { n: "03", t: "Measurable craft",    d: "The ØRIONS Standard — every project tracked against baseline at 30 / 60 / 90 days." },
];

/* ---------- Selected work ---------- */
const work = [
  { slug: "hongmove", title: "Hongmove", niche: "PropTech", year: "2025", img: workHongmove },
  { slug: "royal-thai-air-force", title: "Royal Thai Air Force", niche: "Government", year: "2024", img: workRtaf },
  { slug: "democrat-party", title: "Democrat Party", niche: "Politics", year: "2023", img: workDemocrat },
];

/* ---------- FAQ ---------- */
const faqs = [
  { q: "How long does a typical engagement take?",
    a: "Brand identity 6–12 weeks · Digital retainer ongoing (3-month minimum) · Production shoot day-by-day. แต่ละ engagement เราจะคุยกัน timeline ที่เป็นจริง ไม่สัญญาเกิน scope." },
  { q: "ทีมที่ทำงานมีกี่คน?",
    a: "2 co-founders + senior cast 8–12 คนต่อโปรเจกต์ (director, DP, photographer, strategist, performance lead, editor). คัดเฉพาะคนที่ตรง tonality กับงาน — ไม่มี junior เป็น lead." },
  { q: "Who owns the final files and footage?",
    a: "ลูกค้าเป็นเจ้าของไฟล์สุดท้ายทั้งหมดหลังชำระครบ. Music ที่ commission ให้ = royalty-free perpetual. Raw footage เก็บ 90 วัน (ขยายได้ตามตกลง)." },
  { q: "รับลูกค้าที่เป็นคู่แข่งในอุตสาหกรรมเดียวกันไหม?",
    a: "Dominate tier มี industry exclusivity included. Boutique และ tier อื่นพิจารณาเป็นกรณี — ถ้า conflict เราจะปฏิเสธอย่างเปิดเผย ไม่รับซ้อน." },
  { q: "ทำงานนอกกรุงเทพหรือต่างประเทศได้ไหม?",
    a: "ได้. Bangkok + ปริมณฑล included · ต่างจังหวัด day trip ≤ 200km +฿8,500 · ต่างประเทศ quoted per project. ทีม co-founders เดินทางได้ทั้งเอเชีย." },
  { q: "NDA และ confidentiality เป็นยังไง?",
    a: "Mutual NDA พร้อมเซ็นก่อนเริ่ม discovery call. โปรเจกต์ทั้งหมด confidential by default — เผยแพร่ใน portfolio เมื่อได้รับ approval เท่านั้น." },
];

/* =================================================================== */

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
          <h1 className="mt-10 h-display-xl max-w-[16ch]">
            One company. <em className="italic text-cinnabar">Three axes.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[680px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Agency for cashflow · Consulting for predictable revenue · Studio for asset & valuation.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-6 max-w-[680px] font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-foreground/75">
            แทนที่จะวิ่งหา 3 vendor — แบรนด์เอเจนซี่ + เอเจนซี่ยิงแอด + production house — ที่ ØRIONS ได้ทั้งสามในทีมเดียว, AD เดียว, invoice เดียว.
          </p>
        </Reveal>

        {/* Blueprint cards */}
        <Reveal delay={0.25}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/25">
            {blueprint.map((m, i) => (
              <Link
                key={m.n}
                to={m.to}
                className={`group block p-10 md:p-12 h-full ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/25" : ""} hover:bg-cinnabar/[0.04] transition-colors`}
              >
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

    {/* 04 — DELIVERABLES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionLabel index="04" label="Deliverables" />
          <Reveal delay={0.05}>
            <h2 className="mt-8 h-display-md">
              What you <em className="italic text-cinnabar">actually receive.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">
              ทุกชิ้นส่งมอบในรูปแบบที่ทีมในของคุณใช้งานต่อได้ทันที — ไม่มีไฟล์ proprietary, ไม่มี vendor lock-in.
            </p>
          </Reveal>
        </div>
        <div className="border-t border-foreground/20">
          {deliverables.map((d) => (
            <Reveal key={d.k}>
              <div className="grid grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] gap-6 py-6 md:py-7 border-b border-foreground/20 items-baseline">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{d.k}</div>
                <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.6] text-foreground/85">{d.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — INDUSTRIES */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Industries" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[22ch]">
            Six verticals. <em className="italic text-cinnabar">Selection over availability.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-foreground/75">
            เราเลือกเฉพาะ 6 อุตสาหกรรมที่เราเข้าใจ buyer behavior, seasonality และ decision cycle ลึก — ไม่รับนอกขอบเขตเพราะเราอยากเป็นที่หนึ่ง.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-foreground/20">
          {industries.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.04}>
              <div className={`p-8 h-full bg-background border-foreground/20 ${i > 0 ? "border-t md:border-t-0" : ""} ${i % 3 !== 0 ? "lg:border-l" : ""} ${i >= 3 ? "lg:border-t" : ""} ${i % 2 !== 0 ? "md:border-l" : ""} ${i >= 2 ? "md:border-t" : ""}`}>
                <h3 className="font-serif text-[22px] md:text-[26px] tracking-[-0.015em]">{it.name}</h3>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.65] text-muted-foreground">{it.brief}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 06 — WHY */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="06" label="Why ØRIONS" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[20ch]">
            Not another agency. <em className="italic text-cinnabar">Different by design.</em>
          </h2>
        </Reveal>
        <div className="mt-16 border-t border-foreground/20">
          {why.map((w) => (
            <Reveal key={w.n}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-12 items-baseline py-8 md:py-10 border-b border-foreground/20">
                <div className="font-serif italic text-cinnabar text-[28px] md:text-[40px] leading-none tabular-nums">{w.n}</div>
                <h3 className="text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.02em]">{w.t}</h3>
                <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.7] text-muted-foreground">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 07 — SELECTED WORK STRIP */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="07" label="Selected Work" />
          <Link to="/work" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            All case studies →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {work.map((w) => (
            <Link key={w.slug} to={`/work/${w.slug}`} className="group block overflow-hidden border border-foreground/15 bg-foreground/[0.04] aspect-[4/5] relative">
              <img src={w.img} alt={w.title} loading="lazy" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-700" />
              <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-col gap-1 bg-gradient-to-t from-background/80 to-transparent">
                <span className="font-serif text-[20px] md:text-[22px] tracking-[-0.02em] text-foreground">{w.title}</span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">{w.niche} · {w.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* 08 — FAQ */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <SectionLabel index="08" label="FAQ" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[20ch]">
            The honest <em className="italic text-cinnabar">questions.</em>
          </h2>
        </Reveal>
        <div className="mt-14">
          <FAQ items={faqs} />
        </div>
      </div>
    </section>

    {/* 09 — CTA */}
    <CTABand
      eyebrow="Next step"
      title={<>Tell us about the brand. <em className="italic text-cinnabar">We'll do the rest.</em></>}
      subtitle="30-min discovery call · free · with an honest fit-check at the end."
      primary={{ label: "Book discovery call", to: "/contact" }}
      secondary={{ label: "See pricing", to: "/pricing" }}
      tone="ink"
    />
  </div>
);

export default Services;