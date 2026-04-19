import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";
import Typewriter from "@/components/Typewriter";

import democratImg from "@/assets/projects/democrat.jpg";
import gcooImg from "@/assets/projects/gcoo.jpg";
import myhotelImg from "@/assets/projects/myhotel.jpg";
import hongmoveImg from "@/assets/projects/hongmove.jpg";

const pressures = [
  { stat: 1.7, suffix: "s", decimals: 1, label: "ADHD SPAN", title: "Attention สั้นลง", body: "เวลาที่คนหยุดดูคอนเทนต์สั้นลงกว่าเดิมมาก" },
  { stat: 41, prefix: "+", suffix: "%", decimals: 0, label: "DIGITAL INFLATION", title: "ต้นทุนเข้าถึงสูงขึ้น", body: "ค่าโฆษณาแพงขึ้น แต่ผลลัพธ์กลับลดลง" },
  { stat: 4.6, suffix: "x", decimals: 1, label: "AI FLOOD", title: "Content ล้นตลาด", body: "AI ผลิตคอนเทนต์มากขึ้นจนความแตกต่างถูกกลบ" },
];

const heroProjects = [
  {
    name: "พรรคประชาธิปัตย์",
    image: democratImg,
    challenge: "แรงต้านทางการเมืองฝั่งซ้าย และข้อจำกัดของกฎหมายเลือกตั้ง",
    url: "democrat.or.th",
    tag: "POLITICAL",
  },
  {
    name: "GCOO",
    image: gcooImg,
    challenge: "เปิดตลาดในไทยด้วย Localization และ Payment Gateway",
    url: "gcoo.io",
    tag: "MOBILITY",
  },
  {
    name: "MY HOTEL",
    image: myhotelImg,
    challenge: "วางตัวเป็น First Smart Hotel OTA ของไทย",
    url: "pzentsmart.com",
    tag: "HOSPITALITY",
  },
  {
    name: "HONG MOVE",
    image: hongmoveImg,
    challenge: "Taxi VIP EV ใน AOT รองรับมาลายู จีน อาราบิก ฮินดี",
    url: "hongmove.co.th",
    tag: "MOBILITY",
  },
];

const whyAgency = [
  {
    label: "CONSULTANT",
    title: "ช่วยคิดได้",
    body: "แต่ไม่ได้พาไอเดียไปสู่ execution เสมอไป",
  },
  {
    label: "STUDIO",
    title: "ช่วยทำได้",
    body: "แต่ไม่ได้เริ่มจากปัญหาธุรกิจที่ลึกพอทุกครั้ง",
  },
  {
    label: "AGENCY",
    title: "เชื่อมคิดเข้ากับทำ",
    body: "เพื่อให้ direction กลายเป็นงานที่ใช้ได้จริง",
    accent: true,
  },
];

const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Sharper ideas. Clearer direction." description="An applied creative agency from Bangkok. We turn direction into work that moves." path="/" />

    {/* HERO */}
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="hero-wash" aria-hidden />
      <div className="relative z-10 text-center w-full max-w-[1400px] mx-auto pt-20">
        <Reveal>
          <div className="label-mono text-grad-soft mb-8">EST. BANGKOK · 2024</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-brand text-[16vw] md:text-[110px] leading-[0.88] tracking-[-0.05em] text-foreground">
            ØRIONS
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-16 divider-grad" />
            <span className="label-mono text-foreground">APPLIED CREATIVE AGENCY</span>
            <span className="h-px w-16 divider-grad" />
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <Typewriter
            text="Sharper ideas. Clearer direction."
            className="mt-8 font-thai text-[18px] md:text-[22px] font-light text-foreground/90"
          />
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 label-mono text-muted-foreground z-10">orions.agency</div>
      <a href="#stagnation" className="absolute bottom-6 right-6 md:right-12 flex items-center gap-2 label-mono text-muted-foreground hover:text-foreground transition-colors z-10">
        Scroll <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
      </a>
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
            <p className="font-thai text-[26px] md:text-[36px] leading-[1.4] font-medium">
              <span className="text-primary">ในโลกที่ทุกอย่าง</span> <span className="text-grad font-bold">หมุนเร็วขึ้น</span><br />
              <span className="text-primary">ไม่ใช่ทุกธุรกิจจะ</span> <span className="text-grad font-bold">ปรับตัวทัน</span>
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 mx-auto h-px w-24 divider-grad" />
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-8 mx-auto max-w-[620px] text-[15px] md:text-base leading-[1.75] font-thai text-primary">
            การเปลี่ยนแปลงไม่ได้รอใคร โมเดลที่เคยใช้ได้ดี<br />
            อาจไม่ตอบโจทย์อีกต่อไป
          </p>
        </Reveal>
      </div>
    </section>

    {/* THE PRESSURE */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="THE PRESSURE" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[32px] md:text-[44px] leading-[0.95] max-w-[900px] font-thai">
            ธุรกิจไม่ได้สู้แค่กับคู่แข่ง<br />แต่กำลังรับแรงกดดันจาก 3 ด้าน
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

    {/* HERO PROJECTS */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Reveal><SectionLabel number="04" label="HERO PROJECTS" /></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display italic text-[32px] md:text-[44px] leading-[0.95] font-light normal-case-force">
                Direction turned into work.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/work" className="label-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
              All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {heroProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group bg-background border border-border ring-grad-hover transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="label-mono text-grad-soft">{p.tag}</div>
                  <h3 className="mt-4 font-display text-[22px] md:text-[26px] font-thai">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">
                    <span className="label-mono text-foreground/80 mr-2">CHALLENGE</span>{p.challenge}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-[12px] text-muted-foreground">{p.url}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHY AGENCY */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="05" label="WHY AGENCY" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[32px] md:text-[44px] leading-[0.95] max-w-[900px] font-thai">
            ทำไมบางโจทย์ต้องใช้ <span className="text-grad">Agency</span><br />
            ไม่ใช่แค่ Consultant หรือ Studio
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {whyAgency.map((w, i) => (
            <Reveal key={w.label} delay={i * 0.1}>
              <div className={`h-full p-8 md:p-10 ${w.accent ? "bg-background relative" : "bg-surface"}`}>
                {w.accent && <div className="absolute top-0 left-0 right-0 h-px divider-grad" aria-hidden />}
                <div className={`label-mono ${w.accent ? "text-grad-soft" : "text-muted-foreground"}`}>{w.label}</div>
                <h3 className={`mt-6 font-display text-[26px] md:text-[32px] font-thai ${w.accent ? "text-foreground" : "text-foreground/85"}`}>{w.title}</h3>
                <p className="mt-4 text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground font-thai">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-16 mx-auto text-center max-w-[720px] font-thai text-[17px] md:text-[20px] leading-[1.6] text-foreground/85">
            ไม่ใช่แค่คนที่คิดเป็น ไม่ใช่แค่คนที่ทำเป็น<br />
            <span className="text-grad font-medium">แต่คือคนที่ทำให้งานขยับได้จริง</span>
          </p>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="06" label="LET'S TALK" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-display text-[32px] md:text-[64px] leading-[0.95]">
            <span className="text-muted-foreground">Have a direction.</span><br />
            <span className="text-grad">Need it to move?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-thai text-foreground/85 text-[17px] md:text-[20px] max-w-[640px]">
            เริ่มต้นด้วยการคุย 60 นาที — เพื่อชี้จุดที่ติด และทางที่ไปต่อได้จริง
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
              Start a conversation <ArrowRight className="w-4 h-4" />
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
