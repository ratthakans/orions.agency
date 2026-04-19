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



const About = () => (
  <div>
    <SEO
      title="About — ØRIONS"
      description="The Applied Creative Agency from Bangkok. We bridge the gap between good ideas and measurable impact."
      path="/about"
    />

    {/* 01 — WHO WE ARE */}
    <section className="px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-28">
      <SectionHeader left="01 — WHO WE ARE" right="bangkok · est. 2014" />

      <div className="mt-16">
        <Reveal>
          <h1 className="font-display text-[56px] md:text-[140px] leading-[0.86] tracking-[-0.05em]">
            The{" "}
            <span
              className="italic font-normal"
              style={{ fontFamily: "'Cutive', serif", textTransform: "none", letterSpacing: "-0.02em" }}
            >
              Applied
            </span>{" "}
            Creative<br />
            Agency<span className="text-muted-foreground">.</span>
          </h1>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
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

        <div className="md:col-span-5 flex flex-col justify-between">
          <Reveal delay={0.15}>
            <span className="index-badge text-muted-foreground">— A NOTE</span>
            <p className="mt-6 text-[16px] md:text-[19px] leading-[1.7] font-thai">
              ØRIONS คือจุดบรรจบของ{" "}
              <span className="font-display normal-case font-bold">Bangkok Energy</span>{" "}
              — ความเร็วและสัญชาตญาณแบบกรุงเทพฯ และ{" "}
              <span className="font-display normal-case font-bold">Logical Standard</span>{" "}
              — ตรรกะและมาตรฐานระดับสากล เราปิดช่องว่างระหว่าง “ไอเดียที่ดูดีบนสไลด์” กับ “ผลลัพธ์ที่วัดได้จริงในธุรกิจ” เปลี่ยนทุกบาทของงบประมาณให้กลายเป็น Impact ที่จับต้องได้
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 md:mt-0 pt-8 border-t border-foreground text-[15px] md:text-[17px] leading-[1.6] font-thai">
              ไม่ใช่แค่คนที่คิดเป็น ไม่ใช่แค่คนที่ทำเป็น{" "}
              <span className="font-display normal-case font-bold">แต่คือคนที่ทำให้ธุรกิจขยับได้จริง</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 03 — O-R-I-O-N-S METHOD */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-foreground text-background border-y border-foreground">
      <SectionHeader left="02 — THE METHOD" right="O · R · I · O · N · S" />
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

    {/* 03 — TEAM */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="03 — THE TEAM" right="bangkok crew · 08" />

      <Reveal>
        <h2 className="mt-12 font-display text-[40px] md:text-[72px] leading-[0.92] tracking-[-0.03em] max-w-[900px]">
          People behind<br />the{" "}
          <span
            className="italic font-normal"
            style={{ fontFamily: "'Cutive', serif", textTransform: "none", letterSpacing: "-0.02em" }}
          >
            output
          </span>
          <span className="text-muted-foreground">.</span>
        </h2>
      </Reveal>

      {/* Leadership */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground border border-foreground">
        {[
          { role: "Founder", name: "Ratthakan Suwanphakdee", initials: "RS" },
          { role: "CEO", name: "Kanakhom Kittisakulnam", initials: "KK" },
        ].map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div className="bg-background p-8 md:p-10 h-full flex flex-col justify-between min-h-[260px]">
              <div className="flex items-start justify-between">
                <span className="index-badge">{String(i + 1).padStart(2, "0")} — {p.role}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{p.initials}</span>
              </div>
              <div>
                <div className="font-display text-[32px] md:text-[48px] leading-[0.95] tracking-[-0.03em]">
                  {p.name.split(" ")[0]}
                </div>
                <div className="font-display text-[32px] md:text-[48px] leading-[0.95] tracking-[-0.03em] text-muted-foreground">
                  {p.name.split(" ").slice(1).join(" ")}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Crew */}
      <div className="mt-12">
        <SectionHeader left="— THE CREW" right="06 specialists" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
          {[
            { role: "Creative Director", name: "Manrut Rojrattanavichai" },
            { role: "Creative", name: "Akaphant Apirugpong" },
            { role: "Project Manager", name: "Namfon Kamnoedklang" },
            { role: "Editor", name: "Achitpon Repaichit" },
            { role: "DOP", name: "Teerawat Singkam" },
            { role: "Director", name: "Niti Paladkong" },
          ].map((p, i) => {
            const initials = p.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
            return (
              <Reveal key={p.name} delay={i * 0.04}>
                <div className="bg-background p-6 md:p-7 h-full flex flex-col justify-between min-h-[200px] group transition-colors duration-500 hover:bg-foreground hover:text-background">
                  <div className="flex items-center justify-between">
                    <span className="index-badge opacity-70">{String(i + 3).padStart(2, "0")}</span>
                    <span className="font-mono text-[10px] opacity-60">{initials}</span>
                  </div>
                  <div>
                    <div className="index-badge text-muted-foreground group-hover:text-background/70 transition-colors">
                      {p.role}
                    </div>
                    <div className="mt-2 font-display text-[20px] md:text-[24px] leading-[1.05] tracking-[-0.02em]">
                      {p.name}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
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
