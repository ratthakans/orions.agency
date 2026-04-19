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

const blueprint = [
  { l: "O", n: "Open", b: "ทำความเข้าใจปัญหาที่แท้จริง" },
  { l: "R", n: "Reason", b: "ใช้ข้อมูลคัดเลือกทางที่มีค่า" },
  { l: "I", n: "Ideation", b: "สร้างไอเดียนำที่แก้ไขได้" },
  { l: "O", n: "Offer", b: "นำเสนอแผนงานที่ชัดเจน" },
  { l: "N", n: "Navigation", b: "ทำงานผลิตให้แม่นยำ" },
  { l: "S", n: "Success", b: "วัดผลและขยายผลให้เติบโต" },
];

const heroProjects = [
  { tag: "APPLIED UTILITY", name: "HONGMOVE", body: "เปลี่ยนความซับซ้อนให้ดูง่าย ระบบสื่อสาร Seamless สำหรับ Taxi VIP", stat: "+25%", statLabel: "CONVERSION CLARITY", img: approachTaxi },
  { tag: "APPLIED IMAGE", name: "RTAF", body: "ยึดความน่าเชื่อถือคืนมา ปรับโฉมภาพลักษณ์ผ่าน High-end Production", stat: "2×", statLabel: "ENGAGEMENT QUALITY", img: whatVortex },
  { tag: "APPLIED AESTHETIC", name: "KHAO YAI", body: "ยกระดับด้วยรสนิยม เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", stat: "30%", statLabel: "DECISION SPEED", img: approachRunning },
];

const selectedWorks = [
  { tag: "Political Communication", name: "DEMOCRAT PARTY", body: "การสื่อสารเชิงกลยุทธ์ภายใต้เงื่อนไขที่ท้าทาย", img: whatSkater },
  { tag: "Mobility", name: "GCOO", body: "Localization และระบบที่เปลี่ยนพฤติกรรมการเดินทางของคนเมือง", img: whatWindow },
  { tag: "Hospitality Tech", name: "MY HOTEL", body: "วางระบบ Smart Hotel ที่ใช้งานได้จริงรายแรกของไทย", img: whatVortex },
  { tag: "National Campaign", name: "HEAVY ORGANIZER", body: "แคมเปญสื่อสารระดับประเทศที่สร้างแรงกระเพื่อมได้จริง", img: approachRunning },
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

    {/* THE VICIOUS CYCLE */}
    <section className="relative px-6 md:px-10 min-h-screen flex items-center py-20 md:py-28 bg-surface border-y border-foreground overflow-hidden">

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative z-10">
        {/* Left */}
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-foreground" />
              <p className="index-badge text-foreground">THE VICIOUS CYCLE</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 md:mt-10 font-thai text-[32px] md:text-[56px] leading-[1.2] tracking-[-0.02em] font-bold text-foreground">
              หลายธุรกิจติดอยู่ใน
              <br />
              <span className="font-extrabold">"วงจรอุบาท"</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 md:mt-8 font-thai text-[18px] md:text-[22px] leading-[1.55] text-muted-foreground max-w-[460px]">
              ทำงานหนักขึ้น จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 md:mt-12 hairline w-16" />
          </Reveal>
        </div>

        {/* Right */}
        <div className="md:col-span-7 flex flex-col">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={0.2 + i * 0.1}>
              <div className={`group relative py-8 md:py-10 ${i === 0 ? "border-t" : ""} border-b border-foreground transition-colors duration-500 hover:bg-foreground hover:text-background cursor-default overflow-hidden`}>
                <div className="absolute top-3 right-3 md:top-4 md:right-4 font-mono text-[11px] tracking-[0.08em] text-muted-foreground transition-colors duration-500 group-hover:text-background/60">
                  0{i + 1} / 03
                </div>

                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline px-2 md:px-4">
                  <div className="col-span-12 md:col-span-4">
                    <CountUp to={p.stat} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals}
                      className="font-display text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em] block transition-transform duration-500 group-hover:-translate-y-1" />
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <div className="index-badge text-foreground transition-colors duration-500 group-hover:text-background">{p.label}</div>
                    <p className="mt-4 text-[14px] md:text-[15px] leading-[1.65] text-muted-foreground font-thai transition-colors duration-500 group-hover:text-background/80">
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

    {/* WHO IS ØRIONS */}
    <section className="px-6 md:px-10 py-20 md:py-32">
      <SectionHeader left="04 — WHO IS ØRIONS" right="creative agency from bangkok" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="aspect-[4/5] overflow-hidden bg-surface-2">
            <img src={whoOrionsTeam} alt="ØRIONS team standing on a Bangkok rooftop with the city skyline" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-5 order-1 md:order-2 space-y-8">
          <Reveal>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.03em]">
              Creative Agency<br />from Bangkok.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="hairline w-16" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[16px] md:text-[18px] leading-[1.75] font-thai text-muted-foreground">
              เราคือนักแก้ปัญหาที่นำความรวดเร็วแบบ <span className="font-display normal-case font-bold text-foreground">Bangkok Energy</span> มาผสานกับ <span className="font-display normal-case font-bold text-foreground">Logical Standard</span> ระดับสากล เราเชื่อมช่องว่างระหว่าง <span className="text-foreground font-medium">"ไอเดียที่ดูดี"</span> กับ <span className="text-foreground font-medium">"ผลลัพธ์ทางธุรกิจที่วัดผลได้"</span> เพื่อลดงบประมาณที่สูญเปล่าและสร้างผลกระทบที่แท้จริงให้กับแบรนด์
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* APPLIED SOLUTIONS */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-surface border-y border-foreground">
      <SectionHeader left="05 — APPLIED SOLUTIONS" right="สิ่งที่เราส่งมอบให้คุณ" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground border border-foreground">
        {appliedSolutions.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <article className="group bg-background h-full p-8 md:p-10 flex flex-col transition-colors duration-500 hover:bg-foreground hover:text-background cursor-default">
              <div className="flex items-start justify-between">
                <div className="font-display text-[44px] md:text-[56px] leading-none tracking-[-0.03em]">{s.n}</div>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="mt-12 font-display text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-4 text-[14px] md:text-[15px] leading-[1.65] text-muted-foreground font-thai transition-colors duration-500 group-hover:text-background/80">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* THE BLUEPRINT */}
    <section className="px-6 md:px-10 py-20 md:py-32">
      <SectionHeader left="06 — THE BLUEPRINT" right="6 ขั้นตอนสู่ผลลัพธ์ที่แม่นยำ" />

      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.03em] max-w-[900px]">
            6 ขั้นตอนสู่ผลลัพธ์<br />ที่แม่นยำ
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] font-thai text-muted-foreground max-w-[680px]">
            จากความเข้าใจปัญหาที่แท้จริง สู่การขยายผลความสำเร็จให้เติบโต
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-px bg-foreground border border-foreground">
        {blueprint.map((s, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="bg-background p-5 md:p-6 h-full min-h-[220px] flex flex-col">
              <div className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">0{i + 1}</div>
              <div className="mt-3 font-display text-[64px] md:text-[80px] leading-[0.85]">{s.l}</div>
              <div className="mt-4 font-display text-[14px] tracking-[0.02em]">{s.n}</div>
              <p className="mt-3 text-[12px] leading-[1.55] text-muted-foreground font-thai">{s.b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* HERO PROJECTS */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-surface border-y border-foreground">
      <SectionHeader left="07 — HERO PROJECTS" right="applied creative in action" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {heroProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <article className="bg-background h-full flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-surface-2">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="index-badge text-muted-foreground">{p.tag}</div>
                <h3 className="mt-4 font-display text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.02em]">{p.name}</h3>
                <p className="mt-4 text-[14px] leading-[1.65] text-muted-foreground font-thai flex-1">{p.body}</p>
                <div className="mt-8 border-t border-foreground pt-4">
                  <div className="font-display text-[32px] md:text-[40px] leading-none tracking-[-0.03em]">{p.stat}</div>
                  <div className="mt-2 index-badge text-muted-foreground">{p.statLabel}</div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* SELECTED WORKS */}
    <section className="px-6 md:px-10 py-20 md:py-32">
      <SectionHeader left="08 — SELECTED WORKS" right="applied creative across industries" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground border border-foreground">
        {selectedWorks.map((w, i) => (
          <Reveal key={w.name} delay={i * 0.08}>
            <article className="group bg-background h-full grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-2">
                <img src={w.img} alt={w.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <div className="index-badge text-muted-foreground">{w.tag}</div>
                <h3 className="mt-4 font-display text-[22px] md:text-[26px] leading-[1.1] tracking-[-0.02em]">{w.name}</h3>
                <p className="mt-4 text-[14px] leading-[1.65] text-muted-foreground font-thai">{w.body}</p>
                <div className="mt-auto pt-6 flex items-center gap-2 text-[12px] font-mono text-muted-foreground">
                  <span>VIEW CASE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* WHY AGENCY */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-surface border-y border-foreground">
      <SectionHeader left="09 — WHY AGENCY?" right="ทำไมต้องเป็น ØRIONS" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {whyOrions.map((w, i) => (
          <Reveal key={w.tag} delay={i * 0.1}>
            <div className={`h-full p-8 md:p-10 flex flex-col ${w.highlight ? "bg-foreground text-background" : "bg-background"}`}>
              <div className={`index-badge ${w.highlight ? "text-background/60" : "text-muted-foreground"}`}>{w.tag}</div>
              <h3 className={`mt-8 font-display text-[28px] md:text-[36px] leading-[1.05] tracking-[-0.02em] ${w.highlight ? "" : "font-thai"}`}>
                {w.title}
              </h3>
              <p className={`mt-6 text-[14px] md:text-[15px] leading-[1.65] font-thai ${w.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                {w.body}
              </p>
              {w.highlight && (
                <div className="mt-auto pt-10 flex items-center gap-2 index-badge text-background/60">
                  <span>OUR APPROACH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* THE CLARITY AUDIT */}
    <section className="px-6 md:px-10 py-20 md:py-32">
      <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
        <span className="index-badge font-bold">10 — THE CLARITY AUDIT</span>
        <span className="index-badge font-medium opacity-60 hidden sm:inline">SPECIAL OFFER · LIMITED</span>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="font-display text-[40px] md:text-[72px] leading-[0.95] tracking-[-0.03em]">
              The Clarity<br />Audit.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-[16px] md:text-[20px] leading-[1.65] font-thai text-muted-foreground max-w-[560px]">
              เราไม่ได้มาขอโอกาส แต่มาเพื่อชี้ <span className="text-foreground font-bold">"จุดตาย"</span> และหา <span className="text-foreground font-bold">"ทางรอด"</span> ให้คุณ
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5 space-y-px bg-foreground border border-foreground">
          {[
            { n: "01", t: "วิเคราะห์จุดตัน", b: "เราจะบอกว่าอะไรที่ขวางการเติบโตของธุรกิจคุณอยู่ พร้อมแนวทางแก้ไขเบื้องต้น" },
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
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-foreground text-background">
      <div className="border-t border-background pt-3 pb-3 flex items-center justify-between">
        <span className="index-badge font-bold">11 — LET'S WORK</span>
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
              Stop guessing. Start applying.
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
    </section>
  </div>
);

export default Index;
