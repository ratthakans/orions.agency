import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import MethodStep from "@/components/MethodStep";

import workHongmove from "@/assets/hongmove.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";

const selectedWork = [
  { n: "01", slug: "hongmove",             title: "Hongmove",             niche: "PropTech",   year: "2025", impact: "+312% sign-ups",   img: workHongmove },
  { n: "02", slug: "royal-thai-air-force", title: "Royal Thai Air Force", niche: "Government", year: "2024", impact: "2.1M reach",        img: workRtaf },
  { n: "03", slug: "democrat-party",       title: "Democrat Party",       niche: "Politics",   year: "2023", impact: "12M+ impressions",  img: workDemocrat },
];

const problems = [
  { n: "i.",   en: "Three vendors, three languages",  th: "จ้างเอเจนซี่แบรนด์ + เอเจนซี่ยิงแอด + โปรดักชั่นเฮาส์ — ไฟล์ไม่ต่อกัน ความเข้าใจหลุดกลางทาง" },
  { n: "ii.",  en: "Lots of content, no identity",    th: "เหมือนทุกแบรนด์ในฟีด สวยจืดชืด ไม่มีใครจำแบรนด์ได้จริง" },
  { n: "iii.", en: "Spent, but unmeasured",           th: "ไม่มี baseline ไม่รู้ว่าเงินที่ลงไปเปลี่ยนเป็นยอดขายจริงไหม" },
];

const divisions = [
  { n: "Ø1", en: "Boutique",              tag: "Brand identity & strategy", th: "อัตลักษณ์และระบบแบรนด์ระดับพรีเมียม — สำหรับแบรนด์ที่ต้องการลายเซ็นชัด" },
  { n: "Ø2", en: "Digital & Performance", tag: "Content + paid media",       th: "ขับเคลื่อนยอดด้วย data-driven content และ funnel ที่วัดผลได้" },
  { n: "Ø3", en: "Production",            tag: "In-house creative crew",     th: "ทีมโปรดักชันซีเนียร์ คุมคุณภาพและต้นทุนทุกชิ้น" },
];

const strengths = [
  { n: "01", en: "A connected ecosystem",     th: "ที่เดียวครบ — Creative, Strategy, Production, Consulting ไม่ต้องคุมหลาย vendor" },
  { n: "02", en: "Craft, made measurable",    th: "The ØRIONS Standard — งานทุกชิ้นมีหลักฐานและตัวเลขเทียบกับ baseline ไม่ใช้การเดาทาง" },
  { n: "03", en: "A senior crew only",        th: "นำโดย 2 co-founders + cast ซีเนียร์ 8–12 คนต่อโปรเจกต์ รับงานน้อยเพื่อผลลัพธ์ที่ดีที่สุด" },
];

const process = [
  { n: "01", k: "Listen",   d: "Discovery · audience deep-dive · cultural intelligence" },
  { n: "02", k: "Refine",   d: "Big idea · strategy lock · direction lock" },
  { n: "03", k: "Build",    d: "Director · DP · photographer cast to tonal fit" },
  { n: "04", k: "Launch",   d: "Rollout · cutdowns · review at 30 / 60 / 90 days" },
];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, Refined."
      description="The Creative Company. Branding, content, production & paid media for brands with something to say. From first call to first market-ready direction in 4 weeks."
      path="/"
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[88svh] flex flex-col px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-24 md:pt-28 pb-20 md:pb-24">
        <Reveal>
          <h1 className="h-display-xl">
            Stories, <em className="italic text-cinnabar">Refined.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 md:mt-10 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-[52ch]">
            Branding, content, production &amp; paid media for brands with something to say. From first call to first market-ready direction in 4 weeks.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 md:mt-12 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            ØRIONS · The Creative Company · Bangkok · 2026
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <Link
            to="/contact"
            className="mt-10 btn-primary"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* 02 — THE PROBLEM */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="The Problem" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">
            คุณไม่ได้ขาด agency. คุณขาด <em className="italic text-cinnabar">ทีมเดียวที่เอาอยู่ทั้งงาน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p lang="th" className="mt-10 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.7] text-foreground/80">
            แบรนด์ดีๆ ส่วนใหญ่ติดอยู่ตรงนี้ —
          </p>
        </Reveal>

        {/* Stacked editorial rows — replaces 3-block grid for visual variation */}
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

        <Reveal delay={0.3}>
          <div className="mt-16 border-l-2 border-cinnabar pl-6 md:pl-8 max-w-[760px]">
            <p lang="th" className="font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.55] tracking-[-0.005em]">
              ปัญหาไม่ใช่ฝีมือใครไม่ดี — ปัญหาคือ <em className="text-cinnabar">ไม่มีใครถือทั้งเส้น</em> ตั้งแต่ตัวตน → คอนเทนต์ → ยอด.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 03 — THE INSIGHT */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="The Insight" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[20ch] thai-wrap">
            Craft ที่ดี ควรมี <em className="italic text-cinnabar">หลักฐาน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-10 max-w-[680px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.7] text-foreground/80">
            โลกของเอเจนซี่มักถูกแบ่งเป็นสองฝั่ง — ฝั่งที่ทำงานสวยแต่วัดไม่ได้ กับฝั่งที่วัดได้แต่ไม่มีใครจำแบรนด์ได้.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-14 border-t border-b border-cinnabar py-10 md:py-14 max-w-[860px]">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3">
              <span className="block w-6 h-px bg-cinnabar" />
              ØRIONS อยู่ตรงกลางโดยตั้งใจ
            </div>
            <h3 className="mt-6 font-serif text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.025em]">
              <em className="italic text-cinnabar">Data</em> informs. <em className="italic text-cinnabar">Creative</em> leads. <em className="italic text-cinnabar">Craft</em> delivers.
            </h3>
            <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[640px]">
              เราเชื่อว่า brand ที่ดีต้องทั้ง <em className="not-italic text-foreground">จำได้</em> และ <em className="not-italic text-foreground">ขายได้</em> — และทั้งสองอย่างต้องพิสูจน์เป็นตัวเลขได้ใน 90 วัน.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10">
            <Link to="/about" className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-cinnabar transition-colors">
              Read the full thinking →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 04 — DIVISIONS TEASER */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="04" label="Divisions" />
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

    {/* 05 — CORE STRENGTHS — giant numeral / 2-col asymmetric */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-12 md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <SectionLabel index="05" label="Why ØRIONS" />
            <Reveal delay={0.1}>
              <h2 lang="th" className="mt-8 h-display-md thai-wrap">
                ไม่ใช่อีกหนึ่งเอเจนซี่ <em className="italic text-cinnabar">ทั่วไป.</em>
              </h2>
            </Reveal>
          </div>
          <div>
          {strengths.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <MethodStep
                  n={s.n}
                  caption={`PRINCIPLE · ${String(i + 1).padStart(2, "0")}`}
                  title={<span className="font-semibold">{s.en}</span>}
                >
                  <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{s.th}</p>
                </MethodStep>
              </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>

    {/* 06 — SELECTED WORK */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="06" label="Selected Work" />
          <Link
            to="/work"
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors"
          >
            Index of work →
          </Link>
        </div>

        <div className="mt-12 md:mt-16 space-y-24 md:space-y-32">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[repeat(8,minmax(64px,1fr))] gap-3 md:gap-4 md:h-[720px]">
              {/* 01 — Hongmove (large hero) */}
              <Link
                to={`/work/${selectedWork[0].slug}`}
                className="group relative block md:col-span-8 md:row-span-5 overflow-hidden border border-foreground/15 bg-foreground/[0.04] aspect-[16/10] md:aspect-auto"
              >
                <img
                  src={selectedWork[0].img}
                  alt={selectedWork[0].title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-700"
                />
                <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 flex items-baseline justify-between gap-4 bg-gradient-to-t from-background/80 to-transparent">
                  <span className="font-serif text-[22px] md:text-[28px] tracking-[-0.02em] text-foreground">
                    {selectedWork[0].n} — {selectedWork[0].title}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">
                    {selectedWork[0].niche} · {selectedWork[0].year}
                  </span>
                </div>
              </Link>

              {/* 02 — RTAF (tall right) */}
              <Link
                to={`/work/${selectedWork[1].slug}`}
                className="group relative block md:col-span-4 md:row-span-5 overflow-hidden border border-foreground/15 bg-foreground/[0.04] aspect-[4/5] md:aspect-auto"
              >
                <img
                  src={selectedWork[1].img}
                  alt={selectedWork[1].title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-700"
                />
                <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-col gap-1 bg-gradient-to-t from-background/80 to-transparent">
                  <span className="font-serif text-[20px] md:text-[22px] tracking-[-0.02em] text-foreground">
                    {selectedWork[1].n} — {selectedWork[1].title}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">
                    {selectedWork[1].niche} · {selectedWork[1].year}
                  </span>
                </div>
              </Link>

              {/* 03 — Democrat (wide bottom-left) */}
              <Link
                to={`/work/${selectedWork[2].slug}`}
                className="group relative block md:col-span-5 md:row-span-3 overflow-hidden border border-foreground/15 bg-foreground/[0.04] aspect-[16/10] md:aspect-auto"
              >
                <img
                  src={selectedWork[2].img}
                  alt={selectedWork[2].title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-700"
                />
                <div className="absolute left-0 right-0 bottom-0 p-5 flex items-baseline justify-between gap-4 bg-gradient-to-t from-background/80 to-transparent">
                  <span className="font-serif text-[20px] md:text-[24px] tracking-[-0.02em] text-foreground">
                    {selectedWork[2].n} — {selectedWork[2].title}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">
                    {selectedWork[2].year}
                  </span>
                </div>
              </Link>

              {/* CTA tile */}
              <Link
                to="/work"
                className="group relative block md:col-span-7 md:row-span-3 bg-background border border-foreground/15 p-8 md:p-10 flex flex-col justify-between overflow-hidden hover:border-cinnabar transition-colors duration-500"
              >
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3">
                  <span className="block w-6 h-px bg-cinnabar" />
                  All case studies
                </div>
                <div className="flex items-end justify-between gap-6">
                  <h3 className="font-serif text-[28px] md:text-[40px] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
                    See the full <em className="italic text-cinnabar">index of work</em>
                  </h3>
                  <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 shrink-0 text-cinnabar transition-transform" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-between gap-6 border-t border-foreground/15/15 pt-6">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              03 of selected · more in the index
            </span>
            <Link
              to="/work"
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground hover:text-cinnabar transition-colors"
            >
              View all 12 projects →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 07 — PROCESS RHYTHM */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="07" label="Process" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 h-display-md max-w-[22ch]">
            From hello to first launch direction in <em className="italic text-cinnabar">4 weeks.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-b border-foreground/20">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className={`py-10 md:py-12 md:px-8 h-full ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Phase {s.n}</div>
                <h3 className="mt-5 font-serif italic text-[28px] md:text-[34px] tracking-[-0.02em]">{s.k}</h3>
                <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground leading-[1.6]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-8 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
            *Timeline varies by scope. Identity can move fast. System and Legacy are built deeper.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 08 — CLOSING CTA */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[860px] mx-auto py-20 md:py-28 text-center">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar inline-flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            Ready when you are
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-8 h-display-lg thai-wrap">
            พร้อมเริ่ม <em className="italic text-cinnabar">บทแรก</em> ของแบรนด์คุณหรือยัง?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] text-muted-foreground">
            Discovery Call · ฟรี · 45 นาที · ไม่มีพันธะผูกมัด
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label transition-opacity duration-300"
          >
            <span>Book Discovery Call Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;