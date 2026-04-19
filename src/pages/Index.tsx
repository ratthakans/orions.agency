import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";
import heroBicycle from "@/assets/hero-bicycle.jpg";
import povCrosswalk from "@/assets/pov-crosswalk.jpg";
import unlockRunning from "@/assets/unlock-running.jpg";
import gravityTaxi from "@/assets/gravity-taxi.jpg";

const pressures = [
  { stat: 1.7, suffix: "s", decimals: 1, label: "ATTENTION SPAN", title: "ไม่ถึง 2 วินาที", body: "คือเวลาที่คุณมีในการหยุดลูกค้า ก่อนจะถูกปัดทิ้ง" },
  { stat: 41, prefix: "+", suffix: "%", decimals: 0, label: "DIGITAL INFLATION", title: "ค่าโฆษณาแพงขึ้น", body: "เกือบเท่าตัว แต่ประสิทธิภาพกลับสวนทาง" },
  { stat: 4.6, suffix: "×", decimals: 1, label: "DIGITAL WASTE", title: "ขยะดิจิทัลล้นโลก", body: "งานที่ไม่มีคุณภาพถูกกลบหายไปหมด" },
];

const SectionMeta = ({ index, total = "13", label }: { index: string; total?: string; label: string }) => (
  <div className="flex items-center justify-between border-b border-border pb-4 mb-12">
    <span className="index-badge">INDEX {index} / {total}</span>
    <span className="index-badge text-foreground/80">{label}</span>
  </div>
);

const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Applied Creative Agency" description="Practical. Bold. Done. Creative Engineering from Bangkok." path="/" />

    {/* HERO — Editorial split */}
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 pt-28 md:pt-32 pb-10 overflow-hidden">
      {/* Top meta bar */}
      <Reveal>
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="index-badge">◐ INDEX 01 / 13</span>
          <span className="index-badge text-foreground/80 hidden sm:inline">APPLIED CREATIVE AGENCY</span>
          <span className="index-badge">EST. 2024 — BKK</span>
        </div>
      </Reveal>

      {/* Wordmark — left aligned */}
      <div className="flex-1 flex flex-col justify-center">
        <Reveal delay={0.05}>
          <h1 className="font-brand text-grad text-[20vw] md:text-[18vw] lg:text-[17vw] leading-[0.85] tracking-[-0.06em] text-left">
            ØRIONS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="md:col-span-5">
              <p className="font-display normal-case-force italic text-[20px] md:text-[28px] font-light text-foreground/95 leading-[1.25]">
                Practical. Bold. <span className="text-grad">Done.</span>
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-8">
              <p className="text-[13px] md:text-[14px] leading-[1.65] text-muted-foreground font-thai">
                เอเจนซีสร้างสรรค์ที่นำกลยุทธ์มาแก้ปัญหาธุรกิจจริง — ไม่ใช่แค่ทำงานสวย
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom meta bar */}
      <Reveal delay={0.3}>
        <div className="flex items-end justify-between border-t border-border pt-4 mt-8">
          <span className="index-badge">EST. BANGKOK · 2024 · ORIONS.AGENCY</span>
          <a href="#stagnation" className="index-badge text-foreground hover:text-grad transition-colors flex items-center gap-2">
            <span>↓ NEXT — THE STAGNATION</span>
          </a>
        </div>
      </Reveal>
    </section>

    {/* MARQUEE — slim divider */}
    <section className="border-y border-border py-3 overflow-hidden">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {["STRATEGY", "COMMUNICATION", "SOCIAL", "PRODUCTION", "BRAND FILM", "APPLIED CREATIVE", "BANGKOK ↔ WORLD"].map((w, i) => (
              <span key={i} className="font-display text-[14px] md:text-[16px] leading-none tracking-[0.05em] flex items-center gap-12">
                <span className="text-foreground/70">{w}</span>
                <span className="text-grad-soft">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* THE STAGNATION — Editorial split */}
    <section id="stagnation" className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionMeta index="02" label="THE STAGNATION" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-3">
            <Reveal>
              <div className="font-display text-grad text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em]">
                01
              </div>
              <div className="mt-4 label-mono text-muted-foreground">THE STAGNATION</div>
              <div className="mt-12 hidden md:block">
                <div className="hairline w-12 mb-3" />
                <p className="font-mono text-[10px] italic text-muted-foreground/60 leading-relaxed">
                  Source: ØRIONS<br />Industry Observation, 2025
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-9 md:border-l md:border-border md:pl-12">
            <Reveal delay={0.15}>
              <blockquote>
                <p className="font-thai text-[26px] md:text-[40px] leading-[1.35] font-normal max-w-[820px]">
                  <span className="text-muted-foreground">"เมื่อวิธีเดิมมาถึง</span>{" "}
                  <span className="text-foreground">ทางตัน</span>
                  <span className="text-muted-foreground">,</span>
                  <br />
                  <span className="text-muted-foreground">คุณต้องการไอเดียที่</span>{" "}
                  <span className="text-grad italic">'ประยุกต์'</span>
                  <br />
                  <span className="text-muted-foreground">มาเพื่อแก้ปัญหา</span>
                  <span className="text-foreground">จริง</span>
                  <span className="text-muted-foreground">"</span>
                </p>
              </blockquote>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex items-center gap-4">
                <div className="hairline w-16" />
                <p className="label-mono text-muted-foreground">— ØRIONS MANIFESTO, 2024</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-10 max-w-[640px] text-[15px] md:text-[16px] leading-[1.75] text-muted-foreground font-thai">
                หลายแบรนด์ติดอยู่ใน <span className="text-foreground">Vicious Cycle</span> — ทำงานหนักขึ้น จ่ายแพงขึ้น แต่ผลลัพธ์เท่าเดิม เพราะกติกาของโลกเปลี่ยนไปแล้ว<sup className="text-grad ml-0.5">¹</sup>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* 3 PRESSURES — Horizontal */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="03" label="THE 3 PRESSURES" /></Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1] max-w-[760px] font-thai font-medium">
            3 จุดตายที่กัดกินงบประมาณ<sup className="text-grad ml-1 text-[16px] md:text-[20px]">²</sup>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="md:px-10 first:md:pl-0 py-10 md:py-0">
                <CountUp to={p.stat} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals}
                  className="font-display text-grad text-[88px] md:text-[120px] leading-[0.9] tracking-[-0.05em] block" />
                <div className="mt-6 hairline w-10" />
                <div className="mt-6 label-mono text-muted-foreground">{p.label}</div>
                <div className="mt-2 font-display text-[18px] md:text-[20px] font-thai">{p.title}</div>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground font-thai max-w-[280px]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHO IS ØRIONS — Asymmetric */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="04" label="WHO IS ØRIONS" /></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display italic text-[40px] md:text-[64px] leading-[1] font-light normal-case-force">
                Creative Engineering<br />
                <span className="text-grad">from Bangkok.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-12 max-w-[600px] text-[17px] md:text-[19px] leading-[1.7] font-thai">
                เราคือนักแก้ปัญหาที่นำความรวดเร็วแบบ <span className="text-grad">Bangkok Energy</span> มาผสานกับ <span className="text-grad">Logical Standard</span> ระดับสากล
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-[600px] text-[14px] leading-[1.75] text-muted-foreground font-thai">
                เราเชื่อมช่องว่างระหว่าง 'ไอเดียที่ดูดี' กับ 'ผลลัพธ์ทางธุรกิจที่วัดผลได้' เพื่อลดงบประมาณที่สูญเปล่าและสร้างผลกระทบที่แท้จริงให้กับแบรนด์
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/about" className="mt-10 inline-flex items-center gap-3 label-mono text-foreground border-b border-border hover:border-foreground pb-1">
                More about us <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:pt-20">
            <Reveal delay={0.2}>
              <div className="border border-border p-8 md:p-10 bg-surface-2">
                <div className="label-mono text-muted-foreground mb-6">THE FORMULA</div>
                <div className="font-display text-[20px] md:text-[24px] leading-[1.3]">
                  <div className="text-grad">BANGKOK</div>
                  <div className="text-grad">ENERGY</div>
                  <div className="my-3 text-muted-foreground text-[28px]">×</div>
                  <div className="text-grad">LOGICAL</div>
                  <div className="text-grad">STANDARD</div>
                </div>
                <div className="mt-8 hairline" />
                <p className="mt-6 text-[12px] leading-[1.6] text-muted-foreground font-mono">
                  EQ. ØRIONS_v.1 — established 2024
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* FEATURED WORK — Asymmetric: 1 large + 2 stack */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="05" label="FEATURED WORK" /></Reveal>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <Reveal>
            <h2 className="font-display italic text-[36px] md:text-[52px] leading-[0.95] font-light normal-case-force max-w-[700px]">
              Applied Creative<br />in action.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/work" className="label-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-2 border-b border-border pb-1">
              All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large feature */}
          <Reveal className="md:col-span-7">
            <Link to="/work" className="group block bg-background border border-border ring-grad-hover transition-all duration-300 h-full">
              <div className="aspect-[4/3] bg-surface-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-grad-radial opacity-30" />
                <div className="absolute inset-0 grain opacity-30" />
                <div className="absolute top-6 left-6 label-mono text-foreground/60">FEATURED · 01</div>
                <div className="absolute bottom-6 right-6">
                  <ArrowUpRight className="w-6 h-6 text-foreground/60 group-hover:text-grad transition-colors" />
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="label-mono text-grad-soft">APPLIED UTILITY</div>
                <h3 className="mt-4 font-display text-[32px] md:text-[40px] leading-[1]">HONGMOVE</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[500px]">
                  ระบบสื่อสาร Seamless สำหรับ Taxi VIP — เปลี่ยนความซับซ้อนให้ดูง่าย
                </p>
                <div className="mt-8 pt-8 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="font-display text-grad text-[48px] md:text-[56px] leading-none">+25%</div>
                    <div className="mt-2 label-mono text-muted-foreground">CONVERSION CLARITY</div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Two stacked */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {[
              { name: "RTAF", category: "APPLIED IMAGE", body: "ปรับโฉมภาพลักษณ์ผ่าน High-end Production", impact: "2×", impactLabel: "ENGAGEMENT", n: "02" },
              { name: "KHAO YAI", category: "APPLIED AESTHETIC", body: "เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", impact: "30%", impactLabel: "DECISION SPEED", n: "03" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={(i + 1) * 0.1}>
                <Link to="/work" className="group block bg-background border border-border ring-grad-hover transition-all duration-300 h-full">
                  <div className="grid grid-cols-5 h-full">
                    <div className="col-span-2 aspect-square bg-surface-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grad-radial opacity-25" />
                      <div className="absolute top-3 left-3 label-mono text-foreground/60">FT · {p.n}</div>
                    </div>
                    <div className="col-span-3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="label-mono text-grad-soft text-[10px]">{p.category}</div>
                        <h3 className="mt-3 font-display text-[20px]">{p.name}</h3>
                        <p className="mt-2 text-[12px] leading-[1.6] text-muted-foreground font-thai">{p.body}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex items-baseline gap-3">
                        <div className="font-display text-grad text-[24px] leading-none">{p.impact}</div>
                        <div className="label-mono text-muted-foreground text-[9px]">{p.impactLabel}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionMeta index="06" label="LET'S WORK" /></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-display text-[40px] md:text-[80px] leading-[0.95] tracking-[-0.03em]">
                <span className="text-muted-foreground">Your business</span><br />
                <span className="text-muted-foreground">is stuck.</span><br />
                <span className="text-grad">We're the unstuck.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 font-display italic text-foreground text-[20px] md:text-[26px] normal-case-force">
                Stop guessing. Start applying.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
                  Book Clarity Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-3 border border-border px-7 py-4 label-mono hover:border-foreground transition-colors">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:border-l md:border-border md:pl-10 md:pt-4">
            <Reveal delay={0.3}>
              <div className="label-mono text-muted-foreground">DIRECT</div>
              <a href="mailto:hello@orions.agency" className="mt-3 block font-display text-[18px] hover:text-grad transition-colors">
                hello@orions.agency
              </a>
              <a href="tel:+66923905464" className="mt-2 block font-display text-[18px] hover:text-grad transition-colors">
                +66 92 390 5464
              </a>
              <div className="mt-8 hairline" />
              <p className="mt-6 text-[12px] font-mono text-muted-foreground/70 leading-relaxed">
                246/8 SOI YOTHIN PATTANA 3<br />
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
