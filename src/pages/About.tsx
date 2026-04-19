import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
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
};

const team: Person[] = [
  { role: "Founder", name: "Ratthakan Suwanphakdee", img: founderImg },
  { role: "CEO", name: "Kanakhom Kittisakulnam", img: ceoImg },
  { role: "Creative Director", name: "Manrut Rojrattanavichai", img: cdImg },
  { role: "Creative", name: "Akaphant Apirugpong", img: creativeImg },
  { role: "Project Manager", name: "Namfon Kamnoedklang", img: pmImg },
  { role: "Editor", name: "Achitpon Repaichit", img: editorImg },
  { role: "DOP", name: "Teerawat Singkam", img: dopImg },
  { role: "Director", name: "Niti Paladkong", img: directorImg },
];

const PersonCard = ({ p, index }: { p: Person; index: number }) => (
  <Reveal delay={index * 0.04}>
    <div className="bg-background h-full flex flex-col group">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface">
        <img
          src={p.img}
          alt={`${p.name} — ${p.role} at ØRIONS`}
          loading="lazy"
          width={640}
          height={800}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-95 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
        />
        {/* unify tone across photos */}
        <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/0 to-transparent pointer-events-none" />

        <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
          <span className="index-badge text-background bg-foreground/60 px-1.5 py-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[9px] text-background bg-foreground/60 px-1.5 py-0.5">ØRIONS</span>
        </div>

        {/* Role overlay on image */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="index-badge text-background/85">{p.role}</div>
        </div>
      </div>
      <div className="pt-3 pb-1">
        <div className="font-display tracking-[-0.02em] leading-[1.1] text-[13px] md:text-[15px]">
          {p.name}
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

    <PageHero
      eyebrow="ABOUT · INDEX"
      title={<>The <span className="text-gradient">Applied</span> Creative<br />Agency<span className="text-muted-foreground">.</span></>}
    />

    {/* THE MEANING OF THE LINE — manifesto (replaces A NOTE) */}
    <section className="px-6 md:px-10 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
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
              <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-background">
                <span className="index-badge">ØRIONS · BANGKOK</span>
                <span className="index-badge opacity-70">— MANIFESTO</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <p className="font-display tracking-[-0.02em] leading-[1.15] text-[20px] md:text-[30px] max-w-[560px]">
                  <span className="opacity-60">"</span>ดาวฤกษ์ทุกดวงมีแสงในตัวเอง<span className="opacity-60">…</span> แต่มันไม่มีความหมายอะไรเลย<span className="opacity-60">"</span>
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="block w-8 h-px bg-background/70" />
                  <span className="index-badge opacity-80">UNTIL SOMEONE DRAWS THE LINE</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 flex flex-col justify-between">
          <Reveal delay={0.15}>
            <span className="index-badge text-muted-foreground">— THE MEANING OF THE LINE</span>
            <div className="mt-6 space-y-5 text-[15px] md:text-[17px] leading-[1.75] font-thai">
              <p>
                จนกว่าจะมีคน <span className="font-display normal-case font-bold">"ลากเส้น"</span> เชื่อมพวกมันเข้าด้วยกัน
                เส้นสายที่ลากผ่านความมืด คือสิ่งที่เปลี่ยนจุดสว่างที่กระจัดกระจาย ให้กลายเป็นรูปธรรม เป็นเรื่องเล่า และเป็นตำนาน
              </p>
              <p>
                <span className="font-display normal-case font-bold">ØRIONS</span> คือคนลากเส้นสายเหล่านั้น
                เราไม่ได้แค่รวบรวมคนเก่ง แต่เราคือคนที่เชื่อมโยงศักยภาพมหาศาล ให้กลายเป็น <span className="italic">'ทางออก'</span> ที่มีทิศทาง
              </p>
              <p>
                เราเปลี่ยนแสงสว่างที่โดดเดี่ยว ให้กลายเป็น <span className="italic">'ความหมาย'</span> ที่ขับเคลื่อนธุรกิจของคุณได้จริง
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 md:mt-0 pt-8 border-t border-foreground">
              <p className="font-display tracking-[-0.02em] leading-[1.2] text-[18px] md:text-[22px]">
                หยุดเดา แล้วเริ่ม<span className="italic">ลากเส้น</span>ที่ถูกต้องไปกับเรา<span className="text-muted-foreground">.</span>
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="index-badge text-muted-foreground">— SIGNED</span>
                <span className="font-display tracking-[-0.02em] text-[13px] md:text-[15px]">
                  ØRIONS Creative Co., Ltd.
                </span>
              </div>
            </div>
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
      <SectionHeader index="02" left="TEAM" right={`${team.length} PEOPLE`} />
      <Reveal>
        <h2 className="mt-12 font-display leading-[0.92] tracking-[-0.03em] max-w-[900px]" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
          People behind<br />the output<span className="text-muted-foreground">.</span>
        </h2>
      </Reveal>

      {/* 4 cols × 2 rows */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {team.map((p, i) => (
          <PersonCard key={p.name} p={p} index={i} />
        ))}
      </div>
    </section>

    {/* THE MEANING OF THE LINE */}
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-foreground text-background border-t border-foreground overflow-hidden">
      <SectionHeader index="03" left="THE MEANING OF THE LINE" right="MANIFESTO" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-7">
          <Reveal>
            <h2
              className="font-display leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px, 5.2vw, 68px)" }}
            >
              The Meaning<br />of the <span className="italic opacity-80">Line</span><span className="opacity-50">.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-12 font-display tracking-[-0.02em] leading-[1.2] text-[22px] md:text-[30px] max-w-[680px]">
              <span className="opacity-60">"</span>ดาวฤกษ์ทุกดวงมีแสงในตัวเอง<span className="opacity-60">…</span>{" "}
              แต่มันไม่มีความหมายอะไรเลย<span className="opacity-60">"</span>
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex items-center gap-4">
              <span className="block w-10 h-px bg-background/60" />
              <span className="index-badge opacity-70">UNTIL SOMEONE DRAWS THE LINE</span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:border-l border-background/30 md:pl-10">
          <Reveal delay={0.2}>
            <div className="space-y-6 text-[15px] md:text-[16px] leading-[1.8] font-thai opacity-90">
              <p>
                จนกว่าจะมีคน <span className="font-display normal-case font-bold opacity-100">"ลากเส้น"</span> เชื่อมพวกมันเข้าด้วยกัน
                เส้นสายที่ลากผ่านความมืด คือสิ่งที่เปลี่ยนจุดสว่างที่กระจัดกระจาย ให้กลายเป็นรูปธรรม เป็นเรื่องเล่า และเป็นตำนาน
              </p>
              <p>
                <span className="font-display normal-case font-bold opacity-100">ØRIONS</span> คือคนลากเส้นสายเหล่านั้น
                เราไม่ได้แค่รวบรวมคนเก่ง แต่เราคือคนที่เชื่อมโยงศักยภาพมหาศาล ให้กลายเป็น{" "}
                <span className="italic">'ทางออก'</span> ที่มีทิศทาง
              </p>
              <p>
                เราเปลี่ยนแสงสว่างที่โดดเดี่ยว ให้กลายเป็น <span className="italic">'ความหมาย'</span> ที่ขับเคลื่อนธุรกิจของคุณได้จริง
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-12 pt-8 border-t border-background/30 font-display tracking-[-0.02em] leading-[1.2] text-[20px] md:text-[26px]">
              หยุดเดา แล้วเริ่ม<span className="italic">ลากเส้น</span>ที่ถูกต้อง<br />ไปกับเรา<span className="opacity-50">.</span>
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-10 flex items-center justify-between">
              <span className="index-badge opacity-70">— SIGNED</span>
              <span className="font-display tracking-[-0.02em] text-[14px] md:text-[16px]">
                ØRIONS Creative Co., Ltd.
              </span>
            </div>
          </Reveal>
        </div>
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
