import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";

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

    {/* HERO */}
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="text-center w-full max-w-[1400px] mx-auto pt-20">
        <Reveal>
          <h1 className="font-brand text-[20vw] md:text-[180px] leading-[0.9] tracking-[-0.04em] text-grad">
            ØRIONS
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 label-mono text-muted-foreground">APPLIED CREATIVE AGENCY</div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-5 mx-auto h-px w-24 divider-grad" />
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-6 font-mono text-[13px] tracking-[0.25em] uppercase text-muted-foreground">
            Practical. Bold. Done.
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 label-mono text-muted-foreground">orions.agency</div>
      <a href="#stagnation" className="absolute bottom-6 right-6 md:right-12 flex items-center gap-2 label-mono text-muted-foreground hover:text-foreground transition-colors">
        Scroll <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
      </a>
    </section>

    {/* THE STAGNATION */}
    <section id="stagnation" className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal><SectionLabel number="01" label="THE STAGNATION" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[40px] md:text-[80px] leading-[0.95] font-thai">
            ทำไมธุรกิจของคุณถึง <span className="text-muted-foreground">'นิ่ง'</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[760px] text-[16px] md:text-[19px] leading-[1.75] text-muted-foreground font-thai">
            หลายแบรนด์ติดอยู่ใน <span className="text-grad-soft">Vicious Cycle</span> — ทำงานหนักขึ้น จ่ายแพงขึ้น แต่ผลลัพธ์เท่าเดิม เพราะกติกาของโลกเปลี่ยนไปแล้ว
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <blockquote className="mt-14 border-l border-border pl-6 md:pl-8 max-w-[820px]">
            <p className="font-thai text-[20px] md:text-[26px] leading-[1.5] font-medium">
              "เมื่อวิธีเดิมมาถึงทางตัน คุณต้องการไอเดียที่ <span className="text-grad">'ประยุกต์'</span> มาเพื่อแก้ปัญหาจริง"
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>

    {/* 3 PRESSURES */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="THE 3 PRESSURES" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[36px] md:text-[64px] leading-[0.95] max-w-[900px] font-thai">
            3 จุดตายที่กัดกินงบประมาณ
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="border-t border-border pt-8">
                <CountUp to={p.stat} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals}
                  className="font-display text-grad text-[80px] md:text-[104px] leading-none tracking-[-0.04em] block" />
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
          <h2 className="mt-8 font-display italic text-[36px] md:text-[72px] leading-[1] font-light">
            Creative Engineering<br />from Bangkok.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-16 inline-block border border-border px-8 py-6">
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
              <h2 className="mt-8 font-display italic text-[36px] md:text-[64px] leading-[0.95] font-light">
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
              <article className="group bg-background border border-border hover:border-foreground/40 transition-all duration-300">
                <div className="aspect-[16/10] bg-grad opacity-[0.08] group-hover:opacity-[0.12] transition-opacity" />
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
          <h2 className="mt-10 font-display text-[40px] md:text-[88px] leading-[0.95]">
            <span className="text-muted-foreground">Your business is stuck.</span><br />
            <span className="text-grad">We're the unstuck.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-display italic text-foreground text-[20px] md:text-[26px]">
            Stop guessing. Start applying.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 label-mono hover:bg-foreground/90">
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
