import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

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
      title="ØRIONS — No Guesswork. Just Craft."
      description="The Creative Company. Branding, content, production & paid media for brands with something to say. From first call to first market-ready direction in 4 weeks."
      path="/"
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[100svh] flex flex-col px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-28 md:pt-32 pb-24 md:pb-32">
        <Reveal>
          <h1 className="font-serif h-display-xl leading-[0.92] tracking-[-0.04em]">
            No Guesswork. <em className="italic text-cinnabar">Just Craft.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 md:mt-12 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[48ch]">
            Branding, content, production &amp; paid media for brands with something to say. From first call to first market-ready direction in 4 weeks.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 md:mt-16 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            ØRIONS · The Creative Company · Bangkok · 2026
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:opacity-90 transition-opacity duration-300"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* 02 — THE PROBLEM */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="02" label="The Problem" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[24ch]">
            คุณไม่ได้ขาด agency. คุณขาด <em className="italic text-cinnabar">ทีมเดียวที่เอาอยู่ทั้งงาน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-10 max-w-[640px] font-serif italic text-[19px] md:text-[22px] leading-[1.55] text-foreground/80">
            แบรนด์ดีๆ ส่วนใหญ่ติดอยู่ตรงนี้ —
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className={`p-10 md:p-12 h-full bg-background ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[22px] leading-none">{p.n}</div>
                <h3 className="mt-8 font-serif text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.015em]">{p.en}</h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 border-l-2 border-cinnabar pl-6 md:pl-8 max-w-[760px]">
            <p className="font-serif italic text-[20px] md:text-[26px] leading-[1.4] tracking-[-0.01em]">
              ปัญหาไม่ใช่ฝีมือใครไม่ดี — ปัญหาคือ <em className="text-cinnabar">ไม่มีใครถือทั้งเส้น</em> ตั้งแต่ตัวตน → คอนเทนต์ → ยอด.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 03 — THE INSIGHT */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="03" label="The Insight" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Craft ที่ดี ควรมี <em className="italic text-cinnabar">หลักฐาน.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[680px] font-serif italic text-[18px] md:text-[22px] leading-[1.55] text-foreground/80">
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
            <p className="mt-6 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[640px]">
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
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="04" label="Divisions" />
          <Link to="/services" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            See the full ecosystem →
          </Link>
        </div>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            สามทีม · แบรนด์เดียว · <em className="italic text-cinnabar">Account Director คนเดียว.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {divisions.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.07}>
              <div className={`p-10 md:p-12 h-full bg-background ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {d.n}</div>
                <h3 className="mt-8 font-serif text-[28px] md:text-[34px] leading-[1.05] tracking-[-0.02em]">{d.en}</h3>
                <div className="mt-3 font-serif italic text-muted-foreground text-[15px]">{d.tag}</div>
                <p className="mt-6 font-thai text-[14px] md:text-[15px] leading-[1.7] text-foreground/80">{d.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — CORE STRENGTHS */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="05" label="Why ØRIONS" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            ไม่ใช่อีกหนึ่งเอเจนซี่ <em className="italic text-cinnabar">ทั่วไป.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {strengths.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="bg-background p-10 md:p-12 h-full">
                <div className="font-serif italic text-cinnabar text-[40px] md:text-[56px] leading-none tabular-nums">{s.n}</div>
                <h3 className="mt-8 font-serif text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.015em]">{s.en}</h3>
                <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{s.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 06 — SELECTED WORK */}
    <section className="px-6 md:px-10 border-t border-foreground/15/12">
      <div className="max-w-[1400px] mx-auto py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="06" label="Selected Work" />
          <Link
            to="/work"
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors"
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
                  <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 shrink-0 text-cinnabar group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

    {/* 04 — VENTURES */}
    <section className="px-6 md:px-10 border-t border-foreground/15/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="04" label="Ventures" />
          <Link
            to="/projects"
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            All ventures →
          </Link>
        </div>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            Studios build for clients. <em className="italic text-cinnabar">We build for ourselves, too.</em>
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/15 border border-foreground/15">
          {[
            { n: "01", name: "Routte",          url: "https://routte.to/",        tag: "Travel · Itinerary", line: "Plan trips like a local. Share them like a story." },
            { n: "02", name: "First Draft Pro", url: "https://firstdraftpro.co/", tag: "Writing · AI",       line: "Get the first draft out of the way." },
          ].map((v) => (
            <a
              key={v.name}
              href={v.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-background p-8 md:p-12 flex flex-col hover:bg-cinnabar hover:text-background transition-colors duration-500"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">
                  {v.n} — {v.tag}
                </div>
                <ArrowUpRight className="w-5 h-5 text-cinnabar group-hover:text-background transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-12 md:mt-16 font-serif text-[44px] md:text-[64px] leading-[0.95] tracking-[-0.03em]">
                {v.name}
              </h3>
              <p className="mt-5 font-serif italic text-cinnabar text-[18px] md:text-[20px] leading-[1.3] group-hover:text-background">
                {v.line}
              </p>
              <div className="mt-auto pt-10 font-mono text-[10px] tracking-[0.22em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                Visit {v.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — TRUSTED / TESTIMONIALS */}
    <section className="px-6 md:px-10 border-t border-foreground/15 ">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="05" label="Trusted" />

        <Reveal delay={0.1}>
          <div className="mt-16 group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-6 md:gap-8 w-max animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((t, i) => (
                <figure
                  key={i}
                  className="shrink-0 w-[340px] md:w-[440px] border-t border-foreground/15/20 pt-8"
                >
                  <span className="font-serif italic text-cinnabar text-[48px] leading-none">"</span>
                  <blockquote className="mt-2 font-serif text-[20px] md:text-[24px] leading-[1.3] tracking-[-0.015em]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    <span className="text-foreground">{t.name}</span> — {t.org}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 border-t border-foreground/15/20 pt-10">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                Selected partners
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                20+ brands refined · since 2020
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

    {/* 06 — SERVICES PREVIEW */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="06" label="Packages" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Three tiers.<br /><em className="italic text-cinnabar">One refined system.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {servicesPreview.map((p, i) => (
            <Reveal key={p.tier} delay={i * 0.08}>
              <div className={`p-8 md:p-10 h-full flex flex-col ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${p.featured ? " text-foreground" : "bg-background"}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-serif italic text-cinnabar text-[24px] leading-none">{p.n}</div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{p.tier}</div>
                </div>
                <h3 className="mt-8 font-serif text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className="mt-4 font-serif italic text-[15px] text-muted-foreground">
                  {p.tag}
                </p>
                <div className="mt-auto pt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
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
              className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:opacity-90 transition-opacity duration-300"
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

    {/* 07 — DIAGNOSTIC TEASER */}
    <section className="px-6 md:px-10 border-t border-foreground/15 ">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="07" label="Diagnostic" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — editorial copy */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-serif h-display-md max-w-[22ch]">
                Not sure where you stand? <em className="italic text-cinnabar">Find out in 3 minutes.</em>
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
                  <li key={b.n} className="flex gap-5 border-t border-foreground/15/15 pt-5">
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
                  className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:opacity-90 transition-opacity duration-300"
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
                    Live preview
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
                      { label: "Clarity",      v: 82 },
                      { label: "Consistency",  v: 68 },
                      { label: "Data",         v: 71 },
                      { label: "Craft",        v: 74 },
                      { label: "Audience",     v: 65 },
                      { label: "Strategy",     v: 70 },
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

                  <div className="mt-8 pt-6 border-t border-foreground/15/15 font-thai text-[13px] leading-[1.7] text-muted-foreground">
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