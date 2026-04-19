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

const unstuckSteps = [
  { n: "01", title: "AUDIT", body: "วิเคราะห์จุดตันและจุดที่งบรั่วไหลด้วยตรรกะและข้อมูล" },
  { n: "02", title: "ENGINEER", body: "ออกแบบโซลูชันที่ประยุกต์ใช้ได้จริง เปลี่ยนไอเดียเป็นแผนงาน" },
  { n: "03", title: "EXECUTE", body: "ผลิตงาน High-Impact ด้วยความเร็วและมาตรฐานสากล" },
  { n: "04", title: "IMPACT", body: "วัดผลลัพธ์ทางธุรกิจและขยายผล (Scale) ให้เติบโตยั่งยืน" },
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

const whyOrions = [
  { tag: "CONSULTANT", title: "ให้แผน ไม่ทำจริง", body: "ส่งมอบ Paper Strategy แต่ไม่ได้พาไปทำจนเห็นผล", highlight: false },
  { tag: "STUDIO", title: "ทำตามสั่ง ไม่คิดต่อ", body: "รับ Execution ได้ดี แต่ไม่มองภาพรวมกลยุทธ์ธุรกิจ", highlight: false },
  { tag: "ØRIONS", title: "กลยุทธ์ × งานผลิต", body: "เชื่อมการคิดกับการทำ เพื่อให้ธุรกิจขยับไปข้างหน้าได้จริง", highlight: true },
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
              <div className={`group relative py-10 md:py-14 ${i === 0 ? "border-t" : ""} border-b border-foreground transition-colors duration-500 hover:bg-foreground hover:text-background cursor-default overflow-hidden`}>
                <div className="grid grid-cols-12 gap-6 md:gap-8 items-start px-2 md:px-6">
                  {/* Index marker */}
                  <div className="col-span-2 md:col-span-1 pt-3">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground transition-colors duration-500 group-hover:text-background/60">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Stat */}
                  <div className="col-span-10 md:col-span-4">
                    <CountUp
                      to={p.stat}
                      prefix={p.prefix}
                      suffix={p.suffix}
                      decimals={p.decimals}
                      className="font-display text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em] block transition-transform duration-500 group-hover:-translate-y-1"
                      suffixClassName={p.suffix === "x" ? "" : "text-[28px] md:text-[36px] tracking-normal ml-1 align-baseline text-muted-foreground group-hover:text-background/70"}
                    />
                  </div>

                  {/* Label + body */}
                  <div className="col-span-12 md:col-span-7 md:pt-3">
                    <div className="index-badge text-foreground transition-colors duration-500 group-hover:text-background">
                      {p.label}
                    </div>
                    <div className="mt-3 hairline w-8 transition-colors duration-500 group-hover:bg-background/40" />
                    <p className="mt-4 text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground font-thai transition-colors duration-500 group-hover:text-background/80 max-w-[420px]">
                      {p.body}
                    </p>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
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
      <div className="border-t border-background pt-3 pb-3 flex items-center justify-between">
        <span className="index-badge font-bold">APPLIED SOLUTIONS</span>
        <span className="index-badge font-medium opacity-60 hidden sm:inline">สิ่งที่เราส่งมอบให้คุณ</span>
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
        <Reveal delay={0.1} className="md:col-span-8">
          <h2 className="font-display text-[48px] md:text-[88px] leading-[0.92] tracking-[-0.04em]">
            Four practices.<br />One outcome.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="md:col-span-4">
          <p className="text-[15px] md:text-[17px] leading-[1.7] font-thai text-background/70">
            ครบทุกเครื่องมือที่ธุรกิจคุณต้องใช้ — ตั้งแต่กลยุทธ์จนถึงงานผลิต ภายใต้ทีมเดียว
          </p>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/30 border border-background/30">
        {appliedSolutions.map((s, i) => (
          <Reveal key={s.n} delay={0.05 * i}>
            <article className="group h-full p-7 md:p-9 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-500 flex flex-col">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-[11px] tracking-[0.12em] opacity-60">{s.n}</div>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </div>
              <h3 className="mt-10 md:mt-14 font-display text-[24px] md:text-[28px] leading-[1.05] tracking-[-0.02em]">
                {s.title}
              </h3>
              <div className="mt-5 hairline w-8 bg-background/40 group-hover:bg-foreground/40 transition-colors duration-500" />
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

      {/* Sub-categories — always 4 columns */}
      {[
        { label: "Applied Creative across industries", items: worksAcrossIndustries },
        { label: "High-Impact Digital Content", items: worksHighImpact },
        { label: "Mastery in Storytelling", items: worksStorytelling },
      ].map((cat, ci) => (
        <div key={cat.label} className="mt-20">
          <Reveal>
            <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
              <span className="index-badge font-bold">{`0${ci + 1} / ${cat.label.toUpperCase()}`}</span>
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
        </div>
      ))}

      <div className="mt-12 flex justify-end">
        <Link to="/work" className="inline-flex items-center gap-3 index-badge hover:opacity-60 transition-opacity">
          VIEW ALL WORK <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* 08 — WHY ØRIONS — middle card oversized */}
    <section className="relative px-6 md:px-10 py-20 md:py-32 border-t border-foreground">
      <SectionHeader left="08 — WHY ØRIONS" right="ทำไมต้องเป็น ØRIONS" />

      <Reveal delay={0.1}>
        <h2 className="mt-12 md:mt-16 font-display text-[40px] md:text-[64px] leading-[0.95] tracking-[-0.04em] max-w-[900px]">
          Not a consultant.<br />Not a studio.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-px bg-foreground border border-foreground">
        {whyOrions.map((w) => (
          <div
            key={w.tag}
            className={`p-8 md:p-10 flex flex-col ${w.highlight ? "bg-foreground text-background md:col-span-6 md:row-span-2 min-h-[420px]" : "bg-background md:col-span-3"}`}
          >
            <div className="flex items-baseline justify-between">
              <div className={`index-badge ${w.highlight ? "text-background/60" : "text-muted-foreground"}`}>{w.tag}</div>
              <div className={`font-display text-[20px] ${w.highlight ? "" : "text-muted-foreground"}`}>
                {w.highlight ? "✓" : "✕"}
              </div>
            </div>
            <h3 className={`mt-8 font-display tracking-[-0.02em] ${w.highlight ? "text-[36px] md:text-[56px] leading-[0.95]" : "text-[22px] md:text-[26px] leading-[1.1] font-thai"}`}>
              {w.title}
            </h3>
            <p className={`mt-6 text-[14px] md:text-[15px] leading-[1.7] font-thai ${w.highlight ? "text-background/80 md:text-[16px]" : "text-muted-foreground"}`}>
              {w.body}
            </p>
            {w.highlight && (
              <div className="mt-auto pt-10 flex items-center gap-2 index-badge text-background/60">
                <span>OUR APPROACH</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* 09 — ØRIONS AUDIT */}
    <section className="relative px-6 md:px-10 py-20 md:py-28 border-t border-foreground">
      <div>
        <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
          <span className="index-badge font-bold">09 — ØRIONS AUDIT (FREE)</span>
          <span className="index-badge font-medium opacity-60 hidden sm:inline">LIMITED · รับเฉพาะธุรกิจที่ต้องการเปลี่ยนแปลงจริง</span>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-[44px] md:text-[88px] leading-[0.95] tracking-[-0.04em]">
                ØRIONS Audit.<br />Free.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-[16px] md:text-[20px] leading-[1.65] font-thai text-muted-foreground max-w-[560px]">
                เราไม่ได้มาขอโอกาส แต่มาเพื่อชี้ <span className="text-foreground font-bold">"จุดตาย"</span> และหา <span className="text-foreground font-bold">"ทางรอด"</span> ให้ธุรกิจของคุณ
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-3 border border-foreground px-7 py-4 index-badge hover:bg-foreground hover:text-background transition-colors">
                REQUEST AUDIT <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-5 space-y-px bg-foreground border border-foreground">
            {[
              { n: "01", t: "ชี้จุดตาย", b: "เราจะบอกว่าอะไรที่ขวางการเติบโตของธุรกิจคุณอยู่ พร้อมแนวทางแก้ไขเบื้องต้น" },
              { n: "02", t: "จำกัดจำนวน", b: "รับเฉพาะธุรกิจที่ต้องการความเปลี่ยนแปลงจริงๆ เพื่อรักษาคุณภาพการวิเคราะห์สูงสุด" },
            ].map((c, i) => (
              <Reveal key={c.n} delay={0.2 + i * 0.1}>
                <div className="bg-background p-6 md:p-8">
                  <div className="flex items-baseline gap-4">
                    <div className="font-mono text-[12px] text-muted-foreground">{c.n} /</div>
                    <h4 className="font-display text-[16px] md:text-[18px] tracking-[0.02em]">{c.t}</h4>
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.7] text-muted-foreground font-thai">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 10 — CTA */}
    <section className="relative px-6 md:px-10 py-20 md:py-32 bg-foreground text-background overflow-hidden">
      <div>
        <div className="border-t border-background pt-3 pb-3 flex items-center justify-between">
          <span className="index-badge font-bold">10 — LET'S WORK</span>
          <span className="index-badge font-medium opacity-60 hidden sm:inline">ØRIONS · BANGKOK</span>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[44px] md:text-[88px] leading-[0.9] tracking-[-0.04em]">
                Your business<br />is stuck.<br />
                <span className="opacity-50">We're the unstuck.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 font-thai text-[18px] md:text-[22px] text-background/70">
                Stop guessing. Start applying. — <span className="text-background font-medium">Practical. Bold. Done.</span>
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge hover:opacity-90 transition-opacity">
                  Start a project <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-3 border border-background px-7 py-4 index-badge hover:bg-background hover:text-foreground transition-colors">
                  Explore services
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:border-l md:border-background/30 md:pl-8">
            <Reveal delay={0.3}>
              <div className="index-badge opacity-60">DIRECT</div>
              <a href="mailto:hello@orions.agency" className="mt-3 block font-display text-[16px] hover:underline">
                hello@orions.agency
              </a>
              <a href="tel:+66923905464" className="mt-1 block font-display text-[16px] hover:underline">
                +66 92 390 5464
              </a>
              <p className="mt-8 text-[12px] font-mono opacity-60 leading-relaxed">
                246/8 SOI YOTHINPHATTHANA<br />
                BANG KAPI · BANGKOK 10240
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
