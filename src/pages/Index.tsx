import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

const Laurel = ({ side }: { side: "left" | "right" }) => (
  <svg
    aria-hidden
    viewBox="0 0 40 60"
    className={`w-5 h-7 md:w-6 md:h-8 opacity-50 ${side === "right" ? "scale-x-[-1]" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
  >
    <path d="M28 4 C 16 14, 12 28, 16 44 C 18 52, 22 56, 28 58" />
    <path d="M26 12 q -8 2 -10 8" />
    <path d="M22 22 q -8 2 -10 8" />
    <path d="M20 34 q -8 2 -10 8" />
    <path d="M22 46 q -6 2 -8 6" />
  </svg>
);
import workHongmove from "@/assets/hongmove.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";

const selectedWork = [
  { n: "01", slug: "hongmove",             title: "Hongmove",             niche: "PropTech",   year: "2025", impact: "+312% sign-ups",   img: workHongmove },
  { n: "02", slug: "royal-thai-air-force", title: "Royal Thai Air Force", niche: "Government", year: "2024", impact: "2.1M reach",        img: workRtaf },
  { n: "03", slug: "democrat-party",       title: "Democrat Party",       niche: "Politics",   year: "2023", impact: "12M+ impressions",  img: workDemocrat },
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
  {
    quote: "ทีมเล็ก แต่ output คม — เหมือนได้ creative director มาเป็นพาร์ทเนอร์ ไม่ใช่ vendor",
    name: "Founder",
    org: "D2C Skincare · Bangkok",
  },
  {
    quote: "ครั้งแรกที่ content calendar ของเรามีเหตุผล ไม่ใช่แค่ตารางโพสต์",
    name: "Head of Content",
    org: "F&B Group",
  },
  {
    quote: "Editorial sense ของพวกเขาทำให้แบรนด์เราดูโตขึ้น 5 ปีในไตรมาสเดียว",
    name: "Creative Director",
    org: "Hospitality Collection",
  },
  {
    quote: "เราเคยจ้าง agency ใหญ่ — ที่นี่ละเอียดกว่า เร็วกว่า และพูดภาษาแบรนด์เป็น",
    name: "CMO",
    org: "Financial Services",
  },
];

const trustedBy = [
  "Hongmove", "Khaoyai CC", "RTAF", "Democrat", "Heavy", "GCOO",
  "Sermsuk", "Bangkok Bank", "SCG", "CP All", "Thai Airways", "PTT",
  "Central", "King Power", "AIS", "True", "Singha", "Chang",
];

const servicesPreview = [
  { n: "i.",   tier: "Starter", name: "Starter", price: "Start from ฿35,000",  tag: "First refined steps." },
  { n: "ii.",  tier: "Pro",     name: "Pro",     price: "Start from ฿69,000",  tag: "Cut through the noise.",  featured: true },
  { n: "iii.", tier: "Elite",   name: "Elite",   price: "Start from ฿139,000", tag: "Become a name remembered." },
];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined."
      description="Boutique creative studio in Bangkok. We refine stories through data, craft, and strategy."
      path="/"
    />

    {/* HERO — Collins-style: massive serif, all whitespace */}
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto w-full text-center pt-[20vh] pb-[18vh]">
        <Reveal>
          <h1 className="font-serif h-display-xl leading-[0.92] tracking-[-0.04em]">
            Stories, <em className="italic text-cinnabar">refined.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-12 md:mt-16 font-serif italic text-[18px] md:text-[22px] text-muted-foreground">
            Independent editorial studio. Bangkok. — Boutique Creative Agency.
          </p>
        </Reveal>

        {/* Credentials strip — laurel-style */}
        <Reveal delay={0.35}>
          <div className="mt-[18vh] md:mt-[22vh] flex items-center justify-center gap-5 md:gap-7 font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            <Laurel side="left" />
            <span>Six&nbsp;years</span>
            <span aria-hidden className="opacity-40">·</span>
            <span>40+&nbsp;brands</span>
            <span aria-hidden className="opacity-40">·</span>
            <span>Bangkok</span>
            <Laurel side="right" />
          </div>
        </Reveal>
      </div>
    </section>

    {/* 01 — APPROACH (promoted to first section) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="01" label="Approach" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Less, but <em className="italic text-cinnabar">considered.</em>
          </h2>
        </Reveal>
        <div className="mt-10 max-w-[640px] space-y-6">
          <Reveal delay={0.18}>
            <p className="font-serif text-[19px] md:text-[22px] leading-[1.55] text-foreground/85">
              We don't sell packages of posts. We run one refined loop every month — a short essay across formats, sequenced to be discovered, sit with the reader, and remembered.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="font-thai text-[15px] md:text-[17px] leading-[1.75] text-muted-foreground">
              สามจังหวะเดียวกันทุกเดือน — ฟัง, กลั่น, ปล่อย. ไม่ผลิตให้ครบจำนวน ผลิตให้ครบหน้าที่.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.32}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/approach"
              className="inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              Read the full approach →
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:opacity-90 transition-opacity"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Process ribbon */}
        <Reveal delay={0.4}>
          <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-foreground/15">
            {[
              { n: "01", k: "Listen",   d: "Brand, audience, current rhythm" },
              { n: "02", k: "Diagnose", d: "Where the loop breaks today" },
              { n: "03", k: "Refine",   d: "One signature story per month" },
              { n: "04", k: "Compound", d: "Measure, sharpen, repeat" },
            ].map((s, i) => (
              <div key={s.n} className={`py-8 md:py-10 ${i > 0 ? "md:border-l border-foreground/15" : ""} ${i > 0 && i < 2 ? "border-t md:border-t-0 border-foreground/15" : ""} ${i >= 2 ? "border-t md:border-t-0 border-foreground/15" : ""} md:px-6`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {s.n}</div>
                <div className="mt-3 font-serif italic text-[22px] md:text-[26px] tracking-[-0.015em]">{s.k}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — CAPABILITIES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="02" label="Capabilities" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            A full studio. <em className="italic text-cinnabar">Four disciplines.</em>
          </h2>
        </Reveal>
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-4 border-t border-foreground/15">
          {[
            { n: "i.",   k: "Brand Strategy",    d: "Positioning, narrative, voice, audience architecture." },
            { n: "ii.",  k: "Editorial Design",  d: "Identity systems, typography, art direction for content." },
            { n: "iii.", k: "Content Systems",   d: "Monthly editorial loops — Hero, Static, Reels." },
            { n: "iv.",  k: "Performance Loops", d: "Data-tested distribution, measurement, sharpened iteration." },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 0.06}>
              <div className={`py-10 md:py-12 md:px-6 h-full ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/15" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[18px]">{c.n}</div>
                <h3 className="mt-5 font-serif text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.02em]">{c.k}</h3>
                <p className="mt-4 font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground leading-[1.55]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — SELECTED WORK */}
    <section className="px-6 md:px-10 border-t border-foreground/12">
      <div className="max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="03" label="Selected Work" />
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
                className="group relative block md:col-span-8 md:row-span-5 overflow-hidden border border-foreground/10 bg-foreground/[0.04] aspect-[16/10] md:aspect-auto"
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
                className="group relative block md:col-span-4 md:row-span-5 overflow-hidden border border-foreground/10 bg-foreground/[0.04] aspect-[4/5] md:aspect-auto"
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
                className="group relative block md:col-span-5 md:row-span-3 overflow-hidden border border-foreground/10 bg-foreground/[0.04] aspect-[16/10] md:aspect-auto"
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
                className="group relative block md:col-span-7 md:row-span-3 bg-cinnabar text-background p-8 md:p-10 flex flex-col justify-between overflow-hidden"
              >
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-80">
                  — All case studies
                </div>
                <div className="flex items-end justify-between gap-6">
                  <h3 className="font-serif text-[28px] md:text-[40px] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
                    See the full <em className="italic">index of work</em>
                  </h3>
                  <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex items-center justify-between gap-6 border-t border-foreground/15 pt-6">
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
    <section className="px-6 md:px-10 border-t border-foreground/15">
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
    <section className="px-6 md:px-10 border-t border-foreground bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="05" label="Trusted" />

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
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="06" label="Packages" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Three tiers. <em className="italic text-cinnabar">One refined system.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {servicesPreview.map((p, i) => (
            <Reveal key={p.tier} delay={i * 0.08}>
              <div className={`p-8 md:p-10 h-full flex flex-col ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${p.featured ? "bg-surface text-foreground" : "bg-background"}`}>
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
    <section className="px-6 md:px-10 border-t border-foreground bg-surface">
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