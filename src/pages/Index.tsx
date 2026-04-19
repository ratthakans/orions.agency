import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";
import Typewriter from "@/components/Typewriter";

const pressures = [
  { stat: 1.7, suffix: "s", decimals: 1, label: "ATTENTION SPAN", title: "ไม่ถึง 2 วินาที", body: "คือเวลาที่คุณมีในการหยุดลูกค้า ก่อนจะถูกปัดทิ้ง" },
  { stat: 41, prefix: "+", suffix: "%", decimals: 0, label: "DIGITAL INFLATION", title: "ค่าโฆษณาแพงขึ้น", body: "เกือบเท่าตัว แต่ประสิทธิภาพกลับสวนทาง" },
  { stat: 4.6, suffix: "x", decimals: 1, label: "DIGITAL WASTE", title: "ขยะดิจิทัลล้นโลก", body: "งานที่ไม่มีคุณภาพถูกกลบหายไปหมด" },
];

const featured = [
  { name: "HONGMOVE", category: "APPLIED UTILITY", body: "ระบบสื่อสาร Seamless สำหรับ Taxi VIP", impact: "+25%", impactLabel: "CONVERSION CLARITY" },
  { name: "RTAF", category: "APPLIED IMAGE", body: "ปรับโฉมภาพลักษณ์ผ่าน High-end Production", impact: "2X", impactLabel: "ENGAGEMENT QUALITY" },
  { name: "KHAO YAI", category: "APPLIED AESTHETIC", body: "เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", impact: "30%", impactLabel: "DECISION SPEED" },
];

const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Applied Creative Agency" description="Practical. Bold. Done. Creative Engineering from Bangkok." path="/" />

    {/* HERO — Editorial Studio Masthead */}
    <section className="relative min-h-screen flex flex-col px-5 md:px-12 overflow-hidden">
      <div className="liquid-blob" aria-hidden />
      <div className="grain" aria-hidden />

      {/* Eyebrow row */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pt-28 md:pt-36">
        <Reveal>
          <div className="flex items-center justify-between gap-4 pb-5 border-b border-border">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 divider-grad" />
              <span className="label-mono text-grad-soft">APPLIED CREATIVE AGENCY</span>
            </div>
            <span className="label-mono text-muted-foreground hidden sm:inline">
              BKK · 13.7°N, 100.5°E
            </span>
          </div>
        </Reveal>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-[1400px] mx-auto py-16 md:py-20">
        <div className="w-full">
          <Reveal delay={0.05}>
            <h1 className="font-brand text-[18vw] md:text-[96px] leading-[0.88] tracking-[-0.06em] text-foreground">
              ØRIONS
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
              <h2 className="md:col-span-7 font-thai text-[20px] md:text-[28px] leading-[1.4] font-medium text-foreground/90 normal-case-force">
                We turn <span className="text-muted-foreground">stuck brands</span> into <span className="text-grad">unstuck outcomes.</span>
              </h2>
              <div className="md:col-span-5 md:text-right">
                <div className="label-mono text-muted-foreground mb-2">CURRENTLY</div>
                <Typewriter
                  texts={["PRACTICAL.", "BOLD.", "DONE.", "APPLIED."]}
                  className="font-brand text-grad text-[18px] md:text-[22px] tracking-[0.04em]"
                  cursorClassName="w-[2px] h-[0.9em] bg-grad ml-1"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-grad text-background px-7 py-4 font-brand text-[12px] tracking-[0.12em] hover:opacity-90 transition-opacity"
              >
                Book Clarity Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-3 border-grad px-7 py-4 font-brand text-[12px] tracking-[0.12em] text-foreground hover:opacity-80 transition-opacity"
              >
                See Work
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pb-8">
        <Reveal delay={0.5}>
          <div className="border-t border-border grid grid-cols-2 md:grid-cols-4">
            {[
              { n: "01", l: "BANGKOK" },
              { n: "02", l: "STRATEGY + FILM" },
              { n: "03", l: "EST. 2024" },
            ].map((m) => (
              <div key={m.n} className="py-5 md:py-6 px-1 border-b md:border-b-0 md:border-r border-border last:border-r-0">
                <span className="label-mono text-muted-foreground mr-3">{m.n}</span>
                <span className="label-mono text-foreground">{m.l}</span>
              </div>
            ))}
            <a
              href="#stagnation"
              className="py-5 md:py-6 px-1 flex items-center gap-3 label-mono text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-grad-soft">04</span>
              <span>SCROLL</span>
              <ChevronDown className="w-3.5 h-3.5 ml-auto md:ml-2 animate-scroll-bounce group-hover:text-foreground" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* MARQUEE */}
    <section className="border-y border-border py-6 overflow-hidden">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {["STRATEGY", "COMMUNICATION", "SOCIAL", "PRODUCTION", "BRAND FILM", "APPLIED CREATIVE", "BANGKOK ↔ WORLD"].map((w, i) => (
              <span key={i} className="font-display text-[28px] md:text-[32px] leading-none tracking-[-0.02em] flex items-center gap-16">
                <span className={i % 2 ? "text-grad" : "text-foreground/80"}>{w}</span>
                <span className="text-muted-foreground/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* THE STAGNATION — centered quote */}
    <section id="stagnation" className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[920px] mx-auto text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel number="01" label="THE STAGNATION" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <blockquote className="mt-12">
            <p className="font-thai text-[26px] md:text-[36px] leading-[1.35] font-medium">
              <span className="text-muted-foreground">"เมื่อวิธีเดิม</span><br />
              <span>มาถึง</span> <span className="text-grad">ทางตัน</span><br />
              <span className="text-muted-foreground">คุณต้องการไอเดียที่</span><br />
              <span className="text-grad">'ประยุกต์'</span> <span>มาเพื่อแก้ปัญหาจริง"</span>
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 mx-auto h-px w-24 divider-grad" />
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-8 mx-auto max-w-[620px] text-[15px] md:text-[16px] leading-[1.75] text-muted-foreground font-thai">
            หลายแบรนด์ติดอยู่ใน <span className="text-grad-soft">Vicious Cycle</span> — ทำงานหนักขึ้น จ่ายแพงขึ้น แต่ผลลัพธ์เท่าเดิม เพราะกติกาของโลกเปลี่ยนไปแล้ว
          </p>
        </Reveal>
      </div>
    </section>

    {/* 3 PRESSURES */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="THE 3 PRESSURES" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[36px] md:text-[48px] leading-[0.95] max-w-[900px] font-thai">
            3 จุดตายที่กัดกินงบประมาณ
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="border-t border-border pt-8">
                <CountUp to={p.stat} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals}
                  className="font-display text-grad text-[60px] md:text-[84px] leading-none tracking-[-0.04em] block" />
                <div className="mt-6 label-mono text-muted-foreground">{p.label}</div>
                <div className="mt-3 font-display text-[20px] font-thai">{p.title}</div>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[300px]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-20 font-mono text-[11px] italic text-muted-foreground/60">
          Source: ØRIONS Industry Observation, 2025
        </p>
      </div>
    </section>

    {/* WHO IS ØRIONS */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal><SectionLabel number="03" label="WHO IS ØRIONS" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display italic text-[36px] md:text-[56px] leading-[1] font-light normal-case-force">
            Creative Engineering<br />from Bangkok.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-16 inline-block border-grad px-8 py-6 relative">
            <div className="font-display text-[18px] md:text-[24px] tracking-tight">
              <span className="text-grad">BANGKOK ENERGY</span>
              <span className="text-muted-foreground mx-4">×</span>
              <span className="text-grad">LOGICAL STANDARD</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-[760px] text-[17px] md:text-[20px] leading-[1.7] font-thai">
            เราคือนักแก้ปัญหาที่นำความรวดเร็วแบบ Bangkok Energy มาผสานกับ Logical Standard ระดับสากล
          </p>
          <p className="mt-6 max-w-[760px] text-[15px] leading-[1.75] text-muted-foreground font-thai">
            เราเชื่อมช่องว่างระหว่าง 'ไอเดียที่ดูดี' กับ 'ผลลัพธ์ทางธุรกิจที่วัดผลได้' เพื่อลดงบประมาณที่สูญเปล่าและสร้างผลกระทบที่แท้จริงให้กับแบรนด์
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 label-mono text-foreground border-b border-border hover:border-foreground pb-1">
            More about us <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* FEATURED WORK PREVIEW */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Reveal><SectionLabel number="04" label="FEATURED WORK" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display italic text-[36px] md:text-[48px] leading-[0.95] font-light normal-case-force">
                Applied Creative in action.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/work" className="label-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
              All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="group bg-background border border-border ring-grad-hover transition-all duration-300">
                <div className="aspect-[16/10] bg-grad-radial relative overflow-hidden after:absolute after:inset-0 after:bg-background/55 group-hover:after:bg-background/35 after:transition-colors" />
                <div className="p-6 md:p-8">
                  <div className="label-mono text-grad-soft">{p.category}</div>
                  <h3 className="mt-4 font-display text-[24px]">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">{p.body}</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-display text-grad text-[36px] leading-none">{p.impact}</div>
                    <div className="mt-2 label-mono text-muted-foreground">{p.impactLabel}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="05" label="LET'S WORK" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-display text-[32px] md:text-[68px] leading-[0.95]">
            <span className="text-muted-foreground">Your business is stuck.</span><br />
            <span className="text-grad">We're the unstuck.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-display italic text-foreground text-[20px] md:text-[26px] normal-case-force">
            Stop guessing. Start applying.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
              Book Clarity Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-3 border border-border px-7 py-4 label-mono hover:border-foreground">
              Explore Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;
