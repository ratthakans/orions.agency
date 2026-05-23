import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import workHongmove from "@/assets/hongmove.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workGcoo from "@/assets/gcoo.jpg";

const selectedWork = [
  { n: "01", title: "Hongmove",             niche: "PropTech",    impact: "+312%", img: workHongmove },
  { n: "02", title: "Royal Thai Air Force", niche: "Government",  impact: "2.1M",  img: workRtaf },
  { n: "03", title: "Democrat Party",       niche: "Politics",    impact: "12M+",  img: workDemocrat },
  { n: "04", title: "GCOO",                 niche: "Mobility",    impact: "+540%", img: workGcoo },
];

const processSteps = [
  { n: "6", label: "Reels",  th: "Short-form ที่ขับเคลื่อนการค้นพบ — เร็ว แม่น และ on-brand ทุกชิ้น" },
  { n: "3", label: "Static", th: "Editorial pieces ที่ให้บริบท ลึก และอยู่ใน feed ได้นานกว่าหนึ่งวัน" },
  { n: "1", label: "Hero",   th: "Signature story รายเดือน — ชิ้นที่กำหนดทิศทางและจดจำได้ทั้งซีซั่น" },
];

const testimonials = [
  {
    quote: "พวกเขาไม่ผลิตให้ครบจำนวน — เขาคิดก่อนผลิตทุกครั้ง และนั่นเปลี่ยน rhythm ของแบรนด์เรา",
    name: "Brand Lead",
    org: "PropTech Studio · Bangkok",
  },
  {
    quote: "Hero content รายเดือนของเรา กลายเป็นสิ่งที่ทีม sales หยิบไปคุยกับลูกค้าทุกครั้ง",
    name: "Marketing Director",
    org: "Hospitality Group",
  },
];

const trustedBy = [
  "Hongmove", "Khaoyai CC", "RTAF", "Democrat", "Heavy", "GCOO",
  "Sermsuk", "Bangkok Bank", "SCG", "CP All", "Thai Airways", "PTT",
  "Central", "King Power", "AIS", "True", "Singha", "Chang",
];

const servicesPreview = [
  { sym: "◐", tier: "Starter", name: "Data-Informed Loop", price: "Start from ฿35,000", tag: "First refined steps." },
  { sym: "◑", tier: "Pro",     name: "Data-Tested Loops",  price: "Start from ฿69,000", tag: "Cut through the noise.",  featured: true },
  { sym: "◒", tier: "Elite",   name: "Data-Strategy Lab",  price: "Start from ฿139,000", tag: "Become a name remembered." },
];

const manifestoPoints = [
  {
    n: "i.",
    en: "ตัดส่วนเกิน",
    th: "ในโลกที่ทุกคนตะโกนเหมือนกัน — เราเลือกที่จะเงียบลง เพื่อให้สิ่งที่พูดมีน้ำหนัก",
  },
  {
    n: "ii.",
    en: "สกัดเนื้อแท้",
    th: "เราหา signal ในกองของ noise — เพื่อให้ทุกชิ้นที่ออกไป มีเหตุผลที่อยู่ตรงนั้น",
  },
  {
    n: "iii.",
    en: "กลั่นกรองเรื่องราว",
    th: "เราคิดก่อนผลิต แก้ก่อนส่ง — ส่งมอบเฉพาะชิ้นที่เราภูมิใจให้แบรนด์ของคุณ",
  },
];

const marquee = ["Branding", "Social Media", "Creative Production", "Data-Refined", "Brand Journey"];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined."
      description="Boutique creative studio in Bangkok. We refine stories through data, craft, and strategy."
      path="/"
    />

    {/* HERO — Collins-quiet: headline lives alone in optical center */}
    <section className="relative min-h-screen grid place-items-center px-6 md:px-10">
      <div className="w-full max-w-[1400px] text-center pt-32 pb-24">
        <Reveal>
          <h1 className="font-serif h-display-xl leading-[0.92] whitespace-nowrap">
            Stories, <em className="italic text-cinnabar">refined.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-[560px] mx-auto font-thai text-[16px] md:text-[18px] leading-[1.6] text-muted-foreground">
            ตัดส่วนเกิน สกัดเนื้อแท้ กลั่นกรองเรื่องราว — เพื่อให้แบรนด์คุณถึงคนที่ใช่
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            <span>Est. 2026 · Bangkok</span>
            <span className="text-cinnabar">◐</span>
            <span>By invitation · Industry-exclusive</span>
            <span className="text-cinnabar">◐</span>
            <span>Refined, not scaled</span>
          </div>
        </Reveal>
      </div>
    </section>

    {/* FEATURED — Ink full-bleed drop (Collins-style) */}
    <section className="bg-foreground text-background px-6 md:px-10 py-24 md:py-40 border-t border-background/10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-background/60 flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            00 — Featured
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link to="/work" className="group block mt-12 md:mt-16">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={workHongmove}
                alt="Hongmove — featured case"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>

            <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end border-t border-background/15 pt-8">
              <div>
                <h2 className="font-serif h-display-md leading-[1.0] tracking-[-0.015em]">
                  Hongmove<em className="italic text-cinnabar">.</em>
                </h2>
                <div className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-background/60">
                  PropTech · Bangkok
                </div>
              </div>
              <div className="md:text-right">
                <div className="font-serif text-cinnabar text-[48px] md:text-[64px] leading-none tracking-[-0.02em]">
                  +312%
                </div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-background/60">
                  Qualified leads
                </div>
              </div>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 btn-label border-b border-background/40 pb-1 group-hover:text-cinnabar group-hover:border-cinnabar transition-colors">
              See the case <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>

    {/* MARQUEE */}
    <section>
      <div className="border-y border-foreground/20 py-6 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-16 animate-[marquee_38s_linear_infinite] will-change-transform">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-serif text-[22px] md:text-[34px] tracking-[-0.01em] inline-flex items-center gap-16">
              {m} <span className="text-cinnabar">◐</span>
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* OPERATING PRINCIPLES — relocated from hero */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            Operating principles
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {[
            { en: "6 : 3 : 1",            sub: "Refined Content System" },
            { en: "Data-Refined",         sub: "Creative Process" },
            { en: "Industry Exclusivity", sub: "For Elite clients" },
          ].map((m) => (
            <div key={m.en} className="border-t border-foreground/15 pt-6">
              <div className="font-serif text-[26px] md:text-[32px] tracking-[-0.015em]">{m.en}</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MINI MANIFESTO */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            01 — Manifesto
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            Less, but <em className="italic text-cinnabar">refined.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[640px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            เราไม่ใช่ content factory — เราคือ boutique studio ที่เชื่อในการทำงานสามขั้นตอนเดียวกันซ้ำๆ จนกว่าทุกชิ้นจะคมที่สุด
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {manifestoPoints.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08}>
              <div className="bg-background p-8 md:p-10 h-full flex flex-col">
                <div className="font-serif italic text-cinnabar text-[18px]">{m.n}</div>
                <h3 className="mt-8 font-serif text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em]">
                  {m.en}
                </h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">
                  {m.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap items-center gap-5">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              Read the full manifesto →
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:bg-foreground transition-colors duration-300"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* SELECTED WORK */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            02 — Selected Work
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Refined for brands <em className="italic text-cinnabar">we believe in.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {selectedWork.map((w) => (
            <Link key={w.n} to="/work" className="group block">
              <div className="aspect-[4/5] overflow-hidden border border-foreground/15">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{w.n} — {w.niche}</div>
                  <div className="mt-2 font-serif text-[22px] md:text-[24px] tracking-[-0.02em] leading-[1.05] group-hover:italic group-hover:text-cinnabar transition-all">{w.title}</div>
                </div>
                <div className="font-serif italic text-cinnabar text-[16px] md:text-[18px] shrink-0">{w.impact}</div>
              </div>
            </Link>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              See all work →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* PROCESS — 6:3:1 */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            03 — Process
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            The <em className="italic text-cinnabar">6 : 3 : 1</em> system.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[640px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            หนึ่งวงจรเนื้อหารายเดือน — ออกแบบให้แบรนด์ค้นพบ ค้างคา และจดจำ. ไม่ผลิตให้ครบจำนวน ผลิตให้ครบหน้าที่
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {processSteps.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-12 h-full flex flex-col">
                <div className="font-serif text-[120px] md:text-[160px] leading-[0.85] tracking-[-0.04em] text-cinnabar">{s.n}</div>
                <div className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase">{s.label}</div>
                <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">
                  {s.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* TRUSTED / TESTIMONIALS */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            04 — Trusted
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="border-t border-foreground/20 pt-8">
                <span className="font-serif italic text-cinnabar text-[48px] leading-none">"</span>
                <blockquote className="mt-2 font-serif text-[24px] md:text-[30px] leading-[1.25] tracking-[-0.015em]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  <span className="text-foreground">{t.name}</span> — {t.org}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 border-t border-foreground/20 pt-10">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                Selected partners
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                18 brands refined · since 2026
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-foreground/15 border border-foreground/15">
              {trustedBy.map((name) => (
                <div
                  key={name}
                  className="bg-background h-20 flex items-center justify-center px-3 text-center font-display text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-foreground/60 hover:text-cinnabar transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* SERVICES PREVIEW */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            05 — Packages
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Three tiers. <em className="italic text-cinnabar">One refined system.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {servicesPreview.map((p, i) => (
            <Reveal key={p.tier} delay={i * 0.08}>
              <div className={`p-8 md:p-10 h-full flex flex-col ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${p.featured ? "bg-foreground text-background" : "bg-background"}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-cinnabar text-[28px] leading-none">{p.sym}</div>
                  <div className={`font-mono text-[10px] tracking-[0.22em] uppercase ${p.featured ? "text-cinnabar" : "text-cinnabar"}`}>{p.tier}</div>
                </div>
                <h3 className="mt-8 font-serif text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className={`mt-4 font-serif italic text-[15px] ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.tag}
                </p>
                <div className={`mt-auto pt-8 font-mono text-[10px] tracking-[0.22em] uppercase ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.price}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 btn-label hover:bg-cinnabar transition-colors duration-300"
            >
              <span>See all packages</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/diagnostic"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              Not sure? Take The Diagnostic →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* DIAGNOSTIC TEASER — Lead gen */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            06 — Diagnostic
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — editorial copy */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-serif h-display-md max-w-[22ch]">
                Not sure where you stand? <em className="italic text-cinnabar">Find out in 5 minutes.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-[560px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
                18 คำถาม · 6 มิติแบรนด์ · ผลลัพธ์ + package ที่เหมาะกับคุณ ส่งให้ทันที — ไม่ต้องลงทะเบียน
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="mt-10 space-y-5 max-w-[520px]">
                {[
                  { n: "i.",   en: "Brand clarity score",     th: "วัดความคมของแบรนด์เป็นตัวเลข" },
                  { n: "ii.",  en: "Per-axis diagnosis",      th: "วินิจฉัยจุดอ่อน-จุดแข็งราย\u200Bมิติ" },
                  { n: "iii.", en: "Recommended package",     th: "แพ็กเกจที่เหมาะกับสถานะปัจจุบัน" },
                ].map((b) => (
                  <li key={b.n} className="flex gap-5 border-t border-foreground/15 pt-5">
                    <span className="font-serif italic text-cinnabar text-[18px] shrink-0 w-8">{b.n}</span>
                    <div>
                      <div className="font-serif text-[20px] md:text-[22px] tracking-[-0.015em]">{b.en}</div>
                      <div className="mt-1 font-thai text-[13px] md:text-[14px] text-muted-foreground">{b.th}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  to="/diagnostic"
                  className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:bg-foreground transition-colors duration-300"
                >
                  <span>Take The Diagnostic</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/diagnostic"
                  className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
                >
                  See sample result →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — sample result mockup */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="border border-foreground/20 bg-background">
                <div className="flex items-center justify-between px-5 py-3 border-b border-foreground/15">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    Sample result
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">
                    ◐ Live preview
                  </div>
                </div>

                <div className="px-6 py-8">
                  <div className="flex items-baseline justify-between gap-4 border-b border-foreground/15 pb-6">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                        Overall score
                      </div>
                      <div className="mt-2 font-serif text-[64px] md:text-[80px] leading-none tracking-[-0.03em]">
                        72<span className="text-muted-foreground text-[28px] md:text-[36px]"> / 100</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                        Recommended
                      </div>
                      <div className="mt-2 font-serif italic text-cinnabar text-[22px] md:text-[26px]">
                        → Pro tier
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { label: "Clarity",     v: 82 },
                      { label: "Consistency", v: 68 },
                      { label: "Craft",       v: 74 },
                      { label: "Conversion",  v: 61 },
                    ].map((a) => (
                      <div key={a.label}>
                        <div className="flex items-baseline justify-between mb-1.5">
                          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">{a.label}</span>
                          <span className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">{a.v}</span>
                        </div>
                        <div className="h-px bg-foreground/15 relative">
                          <div className="absolute inset-y-0 left-0 bg-cinnabar h-px" style={{ width: `${a.v}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-foreground/15 font-thai text-[13px] leading-[1.7] text-muted-foreground">
                    “แบรนด์ของคุณมีความคมในระดับดี — เหลือเพียงระบบคอนเทนต์ที่สม่ำเสมอ และ hero ที่จดจำได้”
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;