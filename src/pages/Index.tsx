import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import TrustStrip from "@/components/TrustStrip";
import CTABand from "@/components/CTABand";

import workHongmove from "@/assets/hongmove.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";

const selectedWork = [
  { n: "01", slug: "hongmove",             title: "Hongmove",             niche: "PropTech",   year: "2025", img: workHongmove },
  { n: "02", slug: "royal-thai-air-force", title: "Royal Thai Air Force", niche: "Government", year: "2024", img: workRtaf },
  { n: "03", slug: "democrat-party",       title: "Democrat Party",       niche: "Politics",   year: "2023", img: workDemocrat },
];

const problems = [
  { n: "i.",   en: "Three vendors, three languages", th: "จ้างเอเจนซี่แบรนด์ + เอเจนซี่ยิงแอด + โปรดักชั่นเฮาส์ — ไฟล์ไม่ต่อกัน ความเข้าใจหลุดกลางทาง" },
  { n: "ii.",  en: "Lots of content, no identity",   th: "เหมือนทุกแบรนด์ในฟีด สวยจืดชืด ไม่มีใครจำแบรนด์ได้จริง" },
  { n: "iii.", en: "Spent, but unmeasured",          th: "ไม่มี baseline ไม่รู้ว่าเงินที่ลงไปเปลี่ยนเป็นยอดขายจริงไหม" },
];

const divisions = [
  { n: "Ø1", en: "Boutique",              tag: "Brand identity & strategy", th: "อัตลักษณ์และระบบแบรนด์ระดับพรีเมียม" },
  { n: "Ø2", en: "Digital & Performance", tag: "Content + paid media",      th: "ขับเคลื่อนยอดด้วย data-driven content และ funnel" },
  { n: "Ø3", en: "Production",            tag: "In-house creative crew",    th: "ทีมโปรดักชันซีเนียร์ คุมคุณภาพและต้นทุนทุกชิ้น" },
];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, Refined."
      description="The Creative Company. Branding, content, production & paid media for brands with something to say."
      path="/"
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[88svh] flex flex-col px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-24 md:pt-28 pb-20 md:pb-24">
        <Reveal><SectionLabel index="01" label="The Creative Company" /></Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display-xl">Stories, <em className="italic text-cinnabar">Refined.</em></h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-8 md:mt-10 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-[52ch]">
            Branding, content, production &amp; paid media สำหรับแบรนด์ที่มีเรื่องจะเล่า — ตั้งแต่ first call ถึง direction พร้อมออกตลาดภายใน 4 สัปดาห์.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 md:mt-12 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            ØRIONS · The Creative Company · Bangkok · 2026
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <Link to="/contact" className="mt-10 btn-primary">
            <span>Book Discovery Call</span><ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    <TrustStrip label="Trusted by" />

    {/* 02 — PROBLEM (slim) */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="The Problem" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">
            คุณไม่ได้ขาด agency. คุณขาด <em className="italic text-cinnabar">ทีมเดียวที่เอาอยู่ทั้งงาน.</em>
          </h2>
        </Reveal>
        <div className="mt-14 border-t border-foreground/25">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.6fr] gap-4 md:gap-12 items-baseline py-8 md:py-10 border-b border-foreground/25">
                <div className="font-serif italic text-cinnabar text-[28px] md:text-[40px] leading-none tabular-nums">{p.n}</div>
                <h3 className="text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.02em]">{p.en}</h3>
                <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — DIVISIONS TEASER */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="03" label="Divisions" />
          <Link to="/services" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            See the full ecosystem →
          </Link>
        </div>
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[22ch] thai-wrap">
            สามทีม · แบรนด์เดียว · <em className="italic text-cinnabar">Account Director คนเดียว.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/30">
          {divisions.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.07}>
              <div className={`p-10 md:p-12 h-full ${i === 1 ? "bg-cinnabar/[0.06]" : ""} ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/30" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {d.n}</div>
                <h3 className="mt-8 text-[28px] md:text-[34px] leading-[1.05] tracking-[-0.02em] font-semibold">{d.en}</h3>
                <div className="mt-3 font-serif italic text-muted-foreground text-[15px]">{d.tag}</div>
                <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-foreground/80">{d.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — SELECTED WORK */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="04" label="Selected Work" />
          <Link to="/work" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            Index of work →
          </Link>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {selectedWork.map((w) => (
            <Link key={w.slug} to={`/work/${w.slug}`} className="group relative block overflow-hidden border border-foreground/15 bg-foreground/[0.04] aspect-[4/5]">
              <img src={w.img} alt={w.title} loading="lazy" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-700" />
              <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-col gap-1 bg-gradient-to-t from-background/80 to-transparent">
                <span className="font-serif text-[20px] md:text-[22px] tracking-[-0.02em] text-foreground">{w.n} — {w.title}</span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">{w.niche} · {w.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — CTA */}
    <CTABand
      eyebrow="Ready when you are"
      title={<>พร้อมเริ่ม <em className="italic text-cinnabar">บทแรก</em> ของแบรนด์คุณหรือยัง?</>}
      subtitle="Discovery call · 45 นาที · ฟรี · ไม่มีพันธะผูกมัด."
      primary={{ label: "Book discovery call", to: "/contact" }}
      secondary={{ label: "See services", to: "/services" }}
      tone="snow"
    />
  </div>
);

export default Index;
