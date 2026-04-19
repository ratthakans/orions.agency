import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import TypingLoop from "@/components/TypingLoop";
import heroStreet from "@/assets/hero-street.jpg";
import whoOrionsTeam from "@/assets/who-orions-team.jpg";
import approachRunning from "@/assets/approach-running.jpg";
import approachTaxi from "@/assets/approach-taxi.jpg";
import whatVortex from "@/assets/what-vortex.jpg";
import whatSkater from "@/assets/what-skater.jpg";
import whatWindow from "@/assets/what-window.jpg";

const pressures = [
  { stat: 1.7, suffix: "s", decimals: 1, label: "ATTENTION SPAN", body: "คุณมีเวลาไม่ถึง 2 วินาทีในการหยุดลูกค้าก่อนจะถูกปัดทิ้ง" },
  { stat: 41, prefix: "", suffix: "%", decimals: 0, label: "DIGITAL INFLATION", body: "ค่าโฆษณาแพงขึ้นเกือบเท่าตัว แต่ประสิทธิภาพกลับสวนทาง" },
  { stat: 4.6, suffix: "×", decimals: 1, label: "DIGITAL WASTE", body: "ขยะดิจิทัลล้นโลก จนงานที่ไม่มีคุณภาพถูกกลบหายไปหมด" },
];

const appliedSolutions = [
  { n: "01", title: "Creative Solution", body: "วางกลยุทธ์และหาทางออกใหม่ๆ เมื่อธุรกิจมาถึงจุดตัน" },
  { n: "02", title: "Applied Communication", body: "การสื่อสารที่ประยุกต์ให้เข้ากับพฤติกรรมจริง เพื่อหยุดนิ้วโป้งลูกค้า" },
  { n: "03", title: "Social Media Marketing", body: "บริหารจัดการช่องทางการตลาด เพื่อสร้างตัวตนและยอดขาย" },
  { n: "04", title: "High Impact Production", body: "งานผลิตคุณภาพสูงระดับสากล เพื่อสร้างภาพจำที่ทรงพลัง" },
];


const worksAcrossIndustries = [
  { tag: "Political Communication", name: "DEMOCRAT PARTY", body: "การสื่อสารเชิงกลยุทธ์ภายใต้เงื่อนไขที่ท้าทาย", img: whatSkater },
  { tag: "Mobility", name: "GCOO", body: "Localization ระบบการเดินทางคนเมือง", img: whatWindow },
  { tag: "Hospitality Tech", name: "MY HOTEL", body: "Smart Hotel ที่ใช้งานได้จริงรายแรกของไทย", img: whatVortex },
  { tag: "National Campaign", name: "HEAVY ORGANIZER", body: "แคมเปญสื่อสารระดับประเทศที่สร้างแรงกระเพื่อมจริง", img: approachRunning },
];

const worksHighImpact = [
  { tag: "Sports Branding", name: "LEICESTER × BURIRAM ESPORT", body: "งานสื่อสารแบรนด์กีฬาระดับสากล", img: approachTaxi },
  { tag: "Healthcare", name: "SIRIRAJ HOSPITAL", body: "การเล่าเรื่องความเชื่อมั่นทางการแพทย์ให้เข้าถึงง่าย", img: whatWindow },
  { tag: "Automotive", name: "AUDI THAILAND", body: "โปรดักชันสะท้อนภาพลักษณ์ความพรีเมียมระดับโลก", img: whatVortex },
];

const worksStorytelling = [
  { tag: "Documentary", name: "เถื่อน Travel · เกิดแก่เจ็บโต · ท่วงทำนองที่เลือนหาย", body: "สารคดีที่บันทึกชีวิตและความเปลี่ยนแปลง", img: approachRunning },
  { tag: "Series & Variety", name: "THE UPGRADE", body: "ซีรีส์ที่ผสมความบันเทิงกับสาระอย่างลงตัว", img: whatSkater },
  { tag: "Music & Creative", name: "เพลงลำคำเขื่อนแก้ว", body: "Creative Content ที่ผูกดนตรีกับท้องถิ่น", img: heroStreet },
];

const heroProjects = [
  { tag: "APPLIED UTILITY", name: "HONGMOVE", body: "เปลี่ยนความซับซ้อนให้ดูง่าย ระบบสื่อสาร Seamless สำหรับ Taxi VIP", stat: "+25%", statLabel: "CONVERSION CLARITY", img: approachTaxi },
  { tag: "APPLIED IMAGE", name: "RTAF", body: "ยึดความน่าเชื่อถือคืนมา ปรับโฉมภาพลักษณ์ผ่าน High-end Production", stat: "2×", statLabel: "ENGAGEMENT QUALITY", img: whatVortex },
  { tag: "APPLIED AESTHETIC", name: "KHAO YAI", body: "ยกระดับด้วยรสนิยม เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", stat: "30%", statLabel: "DECISION SPEED", img: approachRunning },
];


const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Sharper ideas. Clearer direction." description="Idea-led Creative Agency. We help brands cut through the noise with sharper ideas and clearer direction." path="/" />

    {/* HERO — Editorial cover */}
    <section className="relative px-6 md:px-10 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <Reveal delay={0.05}>
          <h1 className="font-brand text-[18vw] md:text-[14vw] leading-[0.85] tracking-[-0.05em] text-foreground">
            ØRIONS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 md:mt-10 index-badge font-bold">APPLIED CREATIVE AGENCY</p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-4 font-display text-[20px] md:text-[28px] leading-[1.1] tracking-[-0.02em] min-h-[1.2em]">
            <TypingLoop text="PRACTICAL. BOLD. DONE." />
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="index-badge font-medium">SCROLL</span>
        <span className="block w-px h-10 bg-foreground/40 animate-pulse" />
      </div>
    </section>

    {/* MARQUEE */}
    <section className="border-y border-foreground py-3 overflow-hidden">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {["BRAND DIRECTION", "CREATIVE DIRECTION", "DIGITAL EXPERIENCE", "FILM & PRODUCTION", "BANGKOK ↔ WORLD"].map((w, i) => (
              <span key={i} className="font-display text-[14px] md:text-[16px] leading-none tracking-[0.04em] flex items-center gap-12">
                <span>{w}</span>
                <span className="text-muted-foreground">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* 03 — THE VICIOUS CYCLE */}
    <section className="relative px-6 md:px-10 py-20 md:py-28 border-t border-foreground">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-foreground" />
              <p className="index-badge text-foreground">THE VICIOUS CYCLE</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-10 md:mt-12 font-thai text-[36px] md:text-[64px] leading-[1.15] tracking-[-0.02em] font-bold text-foreground">
              หลายธุรกิจติดอยู่ใน<br /><span className="font-extrabold">"วงจรอุบาท"</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-thai text-[18px] md:text-[22px] leading-[1.55] text-muted-foreground max-w-[460px]">
              จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 hairline w-16" />
          </Reveal>
        </div>

        <div className="md:col-span-7 flex flex-col">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={0.2 + i * 0.1}>
              <div className={`group relative py-10 md:py-14 ${i === 0 ? "border-t" : ""} border-b border-soft cursor-default`}>
                <div className="grid grid-cols-12 gap-6 md:gap-8 items-start px-2 md:px-6">
                  <div className="col-span-2 md:col-span-1 pt-3">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="col-span-10 md:col-span-4">
                    <CountUp
                      to={p.stat}
                      prefix={p.prefix}
                      suffix={p.suffix}
                      decimals={p.decimals}
                      className="font-display text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em] block transition-transform duration-500 group-hover:-translate-y-1"
                      suffixClassName={p.suffix === "x" ? "" : "text-[28px] md:text-[36px] tracking-normal ml-1 align-baseline text-muted-foreground"}
                    />
                  </div>

                  <div className="col-span-12 md:col-span-7 md:pt-3">
                    <div className="index-badge text-foreground">
                      {p.label}
                    </div>
                    <div className="mt-3 hairline w-8" />
                    <p className="mt-4 text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[420px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — WHO IS ØRIONS — balanced split, smaller image */}
    <section className="relative border-t border-foreground px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Image — contained, 3/4 ratio */}
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="aspect-[3/4] overflow-hidden bg-surface-2 border border-foreground">
            <img src={whoOrionsTeam} alt="ØRIONS team in Bangkok" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Manifesto column */}
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-foreground" />
            <p className="index-badge text-foreground">WHO IS ØRIONS</p>
          </div>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[40px] md:text-[64px] leading-[0.95] tracking-[-0.04em]">
              Applied Creative Agency
              <span className="block mt-3 text-[18px] md:text-[22px] tracking-[0.04em] text-muted-foreground font-mono uppercase">from Bangkok</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hairline w-16 mt-8" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 text-[16px] md:text-[18px] leading-[1.8] font-thai text-muted-foreground max-w-[560px]">
              ØRIONS ทำหน้าที่เชื่อมช่องว่างระหว่าง <span className="text-foreground font-medium">"ไอเดียที่ดูดี"</span> กับ <span className="text-foreground font-medium">"ผลลัพธ์ที่วัดผลได้"</span> เพื่อเปลี่ยนงบประมาณที่สูญเปล่าให้เป็น Impact ที่แท้จริงของธุรกิจ
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 index-badge text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity">
              READ MORE <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-3 border-t border-foreground pt-6 max-w-[560px]">
              {[
                { v: "10+", l: "YEARS CRAFT" },
                { v: "40+", l: "BRANDS" },
                { v: "∞", l: "IDEAS APPLIED" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-[32px] md:text-[44px] leading-none tracking-[-0.03em]">{s.v}</div>
                  <div className="mt-2 index-badge text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* APPLIED SOLUTIONS — the offer */}
    <section className="relative px-6 md:px-10 py-20 md:py-28 border-t border-foreground bg-foreground text-background">
      <Reveal>
        <h2 className="font-display text-[48px] md:text-[88px] leading-[0.92] tracking-[-0.04em]">
          Applied Solutions.
        </h2>
      </Reveal>

      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/30 border border-background/30">
        {appliedSolutions.map((s, i) => (
          <Reveal key={s.n} delay={0.05 * i}>
            <article className="group h-full p-7 md:p-9 bg-foreground text-background flex flex-col">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-[11px] tracking-[0.12em] opacity-60">{s.n}</div>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </div>
              <h3 className="mt-10 md:mt-14 font-display text-[24px] md:text-[28px] leading-[1.05] tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                {s.title}
              </h3>
              <div className="mt-5 hairline w-8 bg-background/40" />
              <p className="mt-5 text-[14px] leading-[1.7] font-thai opacity-75">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* SELECTED WORK */}
    <section className="relative px-6 md:px-10 py-20 md:py-32 border-t border-foreground">
      <SectionHeader left="SELECTED WORK" right="applied creative in action" />

      {/* Hero projects — 3 column */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {heroProjects.map((p) => (
          <Reveal key={p.name}>
            <Link to="/work" className="group bg-background h-full flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="index-badge text-muted-foreground">{p.tag}</div>
                <h3 className="mt-4 font-display text-[22px] md:text-[28px] leading-[1.05] tracking-[-0.02em]">{p.name}</h3>
                <p className="mt-4 text-[14px] leading-[1.65] text-muted-foreground font-thai flex-1">{p.body}</p>
                <div className="mt-6 pt-4 border-t border-foreground flex items-baseline justify-between">
                  <div className="font-display text-[28px] md:text-[32px] leading-none tracking-[-0.03em]">{p.stat}</div>
                  <div className="index-badge text-muted-foreground">{p.statLabel}</div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Sub-categories: industries + storytelling = 4-col grids */}
      {[
        { label: "Applied Creative across industries", items: worksAcrossIndustries, ci: 1 },
        { label: "Mastery in Storytelling", items: worksStorytelling, ci: 3 },
      ].map((cat) => (
        <div key={cat.label} className="mt-20">
          <Reveal>
            <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
              <span className="index-badge font-bold">{`0${cat.ci} / ${cat.label.toUpperCase()}`}</span>
              <span className="index-badge font-medium text-muted-foreground hidden sm:inline">{cat.items.length} PROJECTS</span>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground border border-foreground">
            {cat.items.map((w) => (
              <Reveal key={w.name}>
                <article className="group bg-background h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                    <img src={w.img} alt={w.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="index-badge text-muted-foreground">{w.tag}</div>
                    <h3 className="mt-3 font-display text-[16px] md:text-[18px] leading-[1.15] tracking-[-0.02em]">{w.name}</h3>
                    <p className="mt-3 text-[13px] leading-[1.6] text-muted-foreground font-thai">{w.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* (High-Impact reel moved to /work) */}
        </div>
      ))}

      <div className="mt-12 flex justify-end">
        <Link to="/work" className="inline-flex items-center gap-3 index-badge hover:opacity-60 transition-opacity">
          VIEW ALL WORK <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>


    {/* CLOSING — ØRIONS AUDIT + LET'S WORK merged */}
    <section className="relative bg-foreground text-background overflow-hidden border-t border-foreground">
      <div className="px-6 md:px-10 pt-6 pb-3 flex items-center justify-between border-b border-background/20">
        <span className="index-badge font-bold">ØRIONS AUDIT × LET'S WORK</span>
        <span className="index-badge font-medium opacity-60 hidden sm:inline">FREE · LIMITED · BANGKOK</span>
      </div>

      {/* Massive headline */}
      <Reveal delay={0.05}>
        <div className="px-6 md:px-10 pt-20 md:pt-32 pb-10 md:pb-16">
          <h2 className="font-display text-[16vw] md:text-[15vw] leading-[0.85] tracking-[-0.05em]">
            UNSTUCK<br /><span className="opacity-40">YOUR BIZ.</span>
          </h2>
          <p className="mt-10 font-thai text-[18px] md:text-[24px] max-w-[640px] leading-[1.5] opacity-80">
            Stop guessing. Start applying. — <span className="font-bold text-background">Practical. Bold. Done.</span>
          </p>
        </div>
      </Reveal>

      {/* AUDIT highlight band */}
      <div className="border-t border-background/20 grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-8 md:p-14 lg:border-r lg:border-background/20">
          <div className="flex items-center gap-4 mb-8">
            <span className="index-badge bg-background text-foreground px-3 py-1">FREE DIAGNOSTIC</span>
            <span className="index-badge opacity-60">60 MIN · NO STRINGS</span>
          </div>
          <Reveal>
            <h3 className="font-display text-[44px] md:text-[88px] leading-[0.9] tracking-[-0.04em]">
              ØRIONS Audit. <span className="opacity-50">Free.</span>
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[560px] text-[16px] md:text-[18px] leading-[1.65] font-thai opacity-85">
              เราไม่ได้มาขอโอกาส แต่มาเพื่อชี้ <span className="font-bold">"จุดตาย"</span> และหา <span className="font-bold">"ทางรอด"</span> ให้ธุรกิจของคุณ — รับเฉพาะธุรกิจที่ต้องการเปลี่ยนแปลงจริง
            </p>
          </Reveal>
        </div>

        <ul className="lg:col-span-5 flex flex-col border-t lg:border-t-0 border-background/20">
          {[
            { n: "01", t: "Diagnose", b: "วิเคราะห์จุดตันและจุดที่งบรั่วไหลด้วยตรรกะและข้อมูลจริง" },
            { n: "02", t: "Roadmap", b: "แนวทางแก้ไขเบื้องต้น พร้อมลำดับความสำคัญที่ต้องลงมือ" },
            { n: "03", t: "No Pitch", b: "ไม่มีค่าใช้จ่าย ไม่มี deck ขายของ — ตรงประเด็นเท่านั้น" },
          ].map((it, i) => (
            <li key={it.n} className={`p-6 md:p-8 ${i > 0 ? "border-t border-background/20" : ""} flex-1`}>
              <div className="flex items-baseline justify-between">
                <span className="index-badge opacity-60">{it.n}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </div>
              <div className="mt-4 font-display text-[20px] md:text-[24px] tracking-[-0.02em]">{it.t}</div>
              <p className="mt-2 text-[13px] md:text-[14px] leading-[1.65] font-thai opacity-75">{it.b}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Action row — 2 paths */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-background/20">
        <Link to="/contact#audit" className="md:col-span-7 group p-8 md:p-12 flex items-center justify-between border-b md:border-b-0 md:border-r border-background/20 hover:bg-background hover:text-foreground transition-colors">
          <div>
            <div className="index-badge opacity-60 group-hover:opacity-100">FREE</div>
            <div className="mt-3 font-display text-[28px] md:text-[44px] tracking-[-0.03em] leading-[0.95]">Request your Audit →</div>
          </div>
          <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-500 group-hover:rotate-45" />
        </Link>
        <Link to="/contact" className="md:col-span-5 group p-8 md:p-12 flex items-center justify-between hover:bg-background hover:text-foreground transition-colors">
          <div>
            <div className="index-badge opacity-60 group-hover:opacity-100">START</div>
            <div className="mt-3 font-display text-[24px] md:text-[32px] tracking-[-0.03em] leading-[0.95]">Start a project →</div>
          </div>
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 group-hover:rotate-45" />
        </Link>
      </div>

      {/* Footer meta */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-background/20">
        <div className="p-6 md:p-10 md:border-r border-background/20">
          <div className="index-badge opacity-60">EMAIL</div>
          <a href="mailto:hello@orions.agency" className="mt-3 block font-display text-[16px] md:text-[18px] hover:underline">
            hello@orions.agency
          </a>
        </div>
        <div className="p-6 md:p-10 md:border-r border-background/20 border-t md:border-t-0">
          <div className="index-badge opacity-60">PHONE</div>
          <a href="tel:+66923905464" className="mt-3 block font-display text-[16px] md:text-[18px] hover:underline">
            +66 92 390 5464
          </a>
        </div>
        <div className="p-6 md:p-10 border-t md:border-t-0 border-background/20">
          <div className="index-badge opacity-60">STUDIO</div>
          <p className="mt-3 text-[13px] md:text-[14px] font-mono opacity-70 leading-relaxed">
            246/8 SOI YOTHINPHATTHANA<br />
            BANG KAPI · BANGKOK 10240
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
