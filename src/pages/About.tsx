import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import aboutHero from "@/assets/about-hero.jpg";

const orionsSteps = [
  { letter: "O", title: "Open", body: "ทำความเข้าใจปัญหาที่แท้จริงที่ทำให้ธุรกิจนิ่ง" },
  { letter: "R", title: "Reason", body: "ใช้เหตุผลและข้อมูลคัดเลือกทางเลือกที่คุ้มค่าที่สุด" },
  { letter: "I", title: "Ideation", body: "สร้างไอเดียใหม่ที่ตอบโจทย์การแก้ปัญหาจริง" },
  { letter: "O", title: "Offer", body: "นำเสนอแผนงานและแนวทางที่ชัดเจน (No Guesswork)" },
  { letter: "N", title: "Navigation", body: "กำกับงานผลิตให้แม่นยำตามทิศทางที่วางไว้" },
  { letter: "S", title: "Success", body: "วัดผลความสำเร็จและขยายผล (Scale) ให้เติบโต" },
];

const compare = [
  { t: "CONSULTANT", s: "ช่วยคิดได้", b: "แต่ไม่ได้พาไอเดียไปสู่ execution ที่วัดผลได้", us: false },
  { t: "STUDIO", s: "ช่วยทำได้", b: "แต่ไม่ได้เริ่มจากปัญหาธุรกิจที่ลึกพอทุกครั้ง", us: false },
  { t: "APPLIED AGENCY", s: "เชื่อมการคิดเข้ากับการทำ", b: "เพื่อให้ direction กลายเป็น Impact ที่แท้จริงของธุรกิจ", us: true },
];

const About = () => (
  <div>
    <SEO
      title="About — ØRIONS"
      description="The Applied Creative Agency from Bangkok. We bridge the gap between good ideas and measurable impact."
      path="/about"
    />

    {/* 01 — THE PROBLEM (now first) */}
    <section className="px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-28">
      <SectionHeader left="01 — THE PROBLEM" right="why applied matters" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-display text-[40px] md:text-[80px] leading-[0.92] tracking-[-0.04em]">
              Good ideas<br />are cheap.<br />
              <span className="italic font-normal" style={{ fontFamily: "'Cutive', serif", textTransform: "none" }}>
                Applied
              </span>{" "}
              ideas<br />move business.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-4 md:pt-4">
          <Reveal delay={0.15}>
            <div className="border-t border-foreground pt-6">
              <p className="text-[15px] md:text-[17px] leading-[1.7] font-thai text-muted-foreground">
                หลายธุรกิจติดอยู่ในวงจรที่จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม เพราะ <span className="text-foreground font-medium">'ไอเดียที่ดูดี'</span> ไม่เคยถูกแปลงเป็นระบบที่ทำงานได้จริง
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 02 — THE APPLIED CREATIVE AGENCY (redesigned typo) */}
    <section className="px-6 md:px-10 py-20 md:py-28 border-t border-foreground">
      <SectionHeader left="02 — WHO WE ARE" right="bangkok · est. 2014" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
        <div className="md:col-span-7">
          <Reveal>
            <h1 className="font-display text-[56px] md:text-[112px] leading-[0.88] tracking-[-0.05em]">
              The{" "}
              <span
                className="italic font-normal align-baseline"
                style={{ fontFamily: "'Cutive', serif", textTransform: "none", letterSpacing: "-0.02em" }}
              >
                Applied
              </span>
              <br />
              Creative<br />
              Agency<span className="text-muted-foreground">.</span>
            </h1>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
              <img
                src={aboutHero}
                alt="ØRIONS studio in Bangkok at dusk"
                width={1920}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-background">
                <span className="index-badge">ØRIONS · BANGKOK</span>
                <span className="font-mono text-[10px]">EST. 2014</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <Reveal>
            <span className="index-badge text-muted-foreground">— A NOTE</span>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <p className="text-[16px] md:text-[19px] leading-[1.7] font-thai">
              เราคือจุดตัดระหว่าง{" "}
              <span className="font-display normal-case font-bold">Bangkok Energy</span>{" "}
              (ความเร็ว) และ{" "}
              <span className="font-display normal-case font-bold">Logical Standard</span>{" "}
              (ตรรกะสากล) เราทำหน้าที่เชื่อมช่องว่างระหว่าง "ไอเดียที่ดูดี" กับ "ผลลัพธ์ที่วัดผลได้" เพื่อเปลี่ยนงบประมาณที่สูญเปล่าให้เป็น Impact ที่แท้จริงของธุรกิจ
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 03 — O-R-I-O-N-S METHOD */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-foreground text-background border-y border-foreground">
      <SectionHeader left="03 — THE METHOD" right="O · R · I · O · N · S" />
      <Reveal>
        <h2 className="mt-12 font-display text-[40px] md:text-[72px] leading-[0.92] tracking-[-0.03em] max-w-[900px]">
          6 ขั้นตอน<br />สู่ผลลัพธ์ที่แม่นยำ
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-px bg-background/30 border border-background/30">
        {orionsSteps.map((s, i) => (
          <Reveal key={`${s.letter}-${i}`} delay={i * 0.05}>
            <div className="bg-foreground p-5 md:p-6 h-full flex flex-col group transition-colors duration-500 hover:bg-background hover:text-foreground">
              <div className="flex items-baseline justify-between">
                <div className="font-display text-[56px] md:text-[80px] leading-[0.85] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1">
                  {s.letter}
                </div>
                <span className="index-badge opacity-60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 font-display text-[18px] md:text-[22px] leading-[1] tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.6] font-thai opacity-80 group-hover:opacity-100">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* 04 — WHY APPLIED */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="04 — WHY APPLIED" right="not consultant. not studio." />
      <div className="mt-12 max-w-[700px]">
        <Reveal>
          <p className="text-[16px] md:text-[18px] leading-[1.7] font-thai">
            ทำไมบางโจทย์ต้องใช้{" "}
            <span className="font-display normal-case font-bold">Applied Creative Agency</span>{" "}
            ไม่ใช่แค่ consultant หรือ studio
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {compare.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className={`p-8 md:p-10 h-full ${c.us ? "bg-foreground text-background" : "bg-background"}`}>
              <div className={`index-badge ${c.us ? "opacity-70" : "text-muted-foreground"}`}>
                {c.us ? "ØRIONS" : "VS"}
              </div>
              <h3 className="mt-6 font-display text-[26px] md:text-[32px]">{c.t}</h3>
              <div className={`mt-3 font-display text-[16px] font-thai font-medium ${c.us ? "" : "text-muted-foreground"}`}>{c.s}</div>
              <p className={`mt-4 text-[14px] leading-[1.7] font-thai ${c.us ? "opacity-80" : "text-muted-foreground"}`}>{c.b}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <p className="mt-12 max-w-[700px] text-[15px] md:text-[17px] leading-[1.7] font-thai">
          ไม่ใช่แค่คนที่คิดเป็น ไม่ใช่แค่คนที่ทำเป็น{" "}
          <span className="font-display normal-case font-bold">แต่คือคนที่ทำให้ธุรกิจขยับได้จริง</span>
        </p>
      </Reveal>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-28 border-t border-foreground">
      <div>
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[64px] leading-[0.95] tracking-[-0.03em] max-w-[860px]">
            Stop guessing.<br />Start applying.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Link to="/contact#audit" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-90 transition-opacity">
            Request ØRIONS Audit (Free) <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
