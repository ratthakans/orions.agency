import { Instagram, Facebook } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import aboutHero from "@/assets/about-hero.jpg";
import founderImg from "@/assets/team/founder.jpg";
import ceoImg from "@/assets/team/ceo.jpg";
import cdImg from "@/assets/team/creative-director.jpg";
import creativeImg from "@/assets/team/creative.jpg";
import pmImg from "@/assets/team/pm.jpg";
import editorImg from "@/assets/team/editor.jpg";
import dopImg from "@/assets/team/dop.jpg";
import directorImg from "@/assets/team/director.jpg";

const orionsSteps = [
  { letter: "O", title: "Open", body: "ทำความเข้าใจปัญหาที่แท้จริงที่ทำให้ธุรกิจนิ่ง" },
  { letter: "R", title: "Reason", body: "ใช้เหตุผลและข้อมูลคัดเลือกทางเลือกที่คุ้มค่าที่สุด" },
  { letter: "I", title: "Ideation", body: "สร้างไอเดียใหม่ที่ตอบโจทย์การแก้ปัญหาจริง" },
  { letter: "O", title: "Offer", body: "นำเสนอแผนงานและแนวทางที่ชัดเจน (No Guesswork)" },
  { letter: "N", title: "Navigation", body: "กำกับงานผลิตให้แม่นยำตามทิศทางที่วางไว้" },
  { letter: "S", title: "Success", body: "วัดผลความสำเร็จและขยายผล (Scale) ให้เติบโต" },
];

type Person = {
  role: string;
  name: string;
  img: string;
  ig: string;
  fb: string;
};

const leadership: Person[] = [
  { role: "Founder", name: "Ratthakan Suwanphakdee", img: founderImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
  { role: "CEO", name: "Kanakhom Kittisakulnam", img: ceoImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
];

const crew: Person[] = [
  { role: "Creative Director", name: "Manrut Rojrattanavichai", img: cdImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
  { role: "Creative", name: "Akaphant Apirugpong", img: creativeImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
  { role: "Project Manager", name: "Namfon Kamnoedklang", img: pmImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
  { role: "Editor", name: "Achitpon Repaichit", img: editorImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
  { role: "DOP", name: "Teerawat Singkam", img: dopImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
  { role: "Director", name: "Niti Paladkong", img: directorImg, ig: "https://instagram.com/orions.bkk", fb: "https://facebook.com/orions.bkk" },
];

const PersonCard = ({ p, index, large = false }: { p: Person; index: number; large?: boolean }) => (
  <Reveal delay={index * 0.04}>
    <div className="bg-background h-full flex flex-col group">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface">
        <img
          src={p.img}
          alt={`${p.name} — ${p.role} at ØRIONS`}
          loading="lazy"
          width={768}
          height={960}
          className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
        />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="index-badge text-background bg-foreground/70 px-1.5 py-0.5">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-mono text-[10px] text-background bg-foreground/70 px-1.5 py-0.5">ØRIONS</span>
        </div>
      </div>
      <div className="pt-5 pb-1 flex items-start justify-between gap-4">
        <div>
          <div className="index-badge text-muted-foreground">{p.role}</div>
          <div
            className={`mt-2 font-display tracking-[-0.02em] leading-[1.05] ${
              large ? "text-[24px] md:text-[32px]" : "text-[18px] md:text-[22px]"
            }`}
          >
            {p.name}
          </div>
        </div>
        <div className="flex items-center gap-2 pt-1 shrink-0">
          <a
            href={p.ig}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.name} on Instagram`}
            className="w-8 h-8 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href={p.fb}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.name} on Facebook`}
            className="w-8 h-8 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </Reveal>
);

const About = () => (
  <div>
    <SEO
      title="About — ØRIONS"
      description="The Applied Creative Agency from Bangkok. We bridge the gap between good ideas and measurable impact."
      path="/about"
    />

    {/* WHO WE ARE */}
    <section className="px-6 md:px-10 pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="mt-4">
        <Reveal>
          <h1 className="font-display leading-[0.86] tracking-[-0.05em]" style={{ fontSize: "clamp(56px, 11vw, 132px)" }}>
            The <span className="text-gradient">Applied</span> Creative<br />
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
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 flex flex-col justify-between">
          <Reveal delay={0.15}>
            <span className="index-badge text-muted-foreground">— A NOTE</span>
            <p className="mt-6 text-[16px] md:text-[19px] leading-[1.7] font-thai">
              ØRIONS คือจุดบรรจบของความเร็วและสัญชาตญาณแบบกรุงเทพฯ และตรรกะและมาตรฐานระดับสากล เราปิดช่องว่างระหว่าง “ไอเดียที่ดูดีบนสไลด์” กับ “ผลลัพธ์ที่วัดได้จริงในธุรกิจ” เปลี่ยนทุกบาทของงบประมาณให้กลายเป็น Impact ที่จับต้องได้
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 md:mt-0 pt-8 border-t border-foreground text-[15px] md:text-[17px] leading-[1.6] font-thai">
              ไม่ใช่แค่คนคิดเป็น ไม่ใช่แค่คนทำเป็น{" "}
              <span className="font-display normal-case font-bold">แต่คือคนที่ทำให้ธุรกิจไปต่อได้</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* THE 6 METHODS */}
    <section className="px-6 md:px-10 py-24 md:py-32 bg-foreground text-background border-y border-foreground">
      <div className="border-t border-background/40 pt-3 pb-3 flex items-center justify-between gap-6">
        <span className="index-badge font-bold inline-flex items-center gap-3">
          <span className="opacity-60 font-mono">01</span>
          <span className="block w-4 h-px bg-background/40" />
          <span>METHOD</span>
        </span>
        <span className="index-badge font-medium opacity-60 hidden sm:inline">06 STEPS</span>
      </div>
      <Reveal>
        <h2 className="mt-12 font-display leading-[0.92] tracking-[-0.03em] max-w-[900px]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
          The 6 Methods
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

    {/* TEAM */}
    <section className="px-6 md:px-10 py-24 md:py-32">
      <SectionHeader index="02" left="TEAM" right={`${leadership.length + crew.length} PEOPLE`} />
      <Reveal>
        <h2 className="mt-12 font-display leading-[0.92] tracking-[-0.03em] max-w-[900px]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
          People behind<br />the output<span className="text-muted-foreground">.</span>
        </h2>
      </Reveal>

      {/* Leadership */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {leadership.map((p, i) => (
          <PersonCard key={p.name} p={p} index={i} large />
        ))}
      </div>

      {/* Crew */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
        {crew.map((p, i) => (
          <PersonCard key={p.name} p={p} index={i + 2} />
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-foreground">
      <div>
        <Reveal>
          <h2 className="font-display leading-[0.92] tracking-[-0.03em] max-w-[860px]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
            Stop guessing.<br />Start applying.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <CTA to="/contact#audit">Request ØRIONS Audit (Free)</CTA>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
