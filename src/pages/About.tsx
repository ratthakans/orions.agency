import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import FlipNumber from "@/components/FlipNumber";
import ConstellationLine from "@/components/ConstellationLine";
import whoOrionsTeam from "@/assets/who-orions-team.jpg";
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
  specialty?: string;
};

const team: Person[] = [
  { role: "Founder", name: "Ratthakan Suwanphakdee", img: founderImg, specialty: "Vision & Strategy" },
  { role: "CEO", name: "Kanakhom Kittisakulnam", img: ceoImg, specialty: "Operations & Growth" },
  { role: "Creative Director", name: "Manrut Rojrattanavichai", img: cdImg, specialty: "Concept & Art Direction" },
  { role: "Creative", name: "Akaphant Apirugpong", img: creativeImg, specialty: "Idea & Copy" },
  { role: "Project Manager", name: "Namfon Kamnoedklang", img: pmImg, specialty: "Process & Delivery" },
  { role: "Editor", name: "Achitpon Repaichit", img: editorImg, specialty: "Story & Cut" },
  { role: "DOP", name: "Teerawat Singkam", img: dopImg, specialty: "Light & Frame" },
  { role: "Director", name: "Niti Paladkong", img: directorImg, specialty: "Performance & Pace" },
];

const PersonCard = ({ p, index, total }: { p: Person; index: number; total: number }) => (
  <Reveal delay={index * 0.04}>
    <div className="bg-background h-full flex flex-col group">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface">
        <img
          src={p.img}
          alt={`${p.name} — ${p.role} at ØRIONS`}
          loading="lazy"
          width={640}
          height={800}
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-95 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
        />
        {/* unify tone across photos */}
        <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent pointer-events-none" />

        {/* Top: large index + brand */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span className="font-display text-background text-[18px] md:text-[22px] leading-none tracking-[-0.02em]">
            {String(index + 1).padStart(2, "0")}
            <span className="text-background/50 text-[12px] md:text-[14px]">/{String(total).padStart(2, "0")}</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-background/70">ØRIONS</span>
        </div>

        {/* Role overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="index-badge text-background/90">{p.role}</div>
        </div>

        {/* Hover specialty reveal */}
        {p.specialty && (
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] bg-foreground text-background px-3 py-3">
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-background/60">Specialty</div>
            <div className="mt-1 font-display text-[13px] tracking-[-0.01em] leading-[1.2]">{p.specialty}</div>
          </div>
        )}
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

    <div className="relative">
      <PageHero
        eyebrow="ABOUT · INDEX"
        title={<>The <span className="text-gradient">Applied</span> Creative<br />Agency<span className="text-muted-foreground">.</span></>}
      />

      {/* Hero meta strip */}
      <div className="px-6 md:px-10 -mt-10 md:-mt-14 mb-4 md:mb-6">
        <Reveal delay={0.3}>
          <div className="max-w-[1400px] mx-auto border-t border-foreground grid grid-cols-3">
            {[
              { k: "EST.", v: "2014" },
              { k: "BASED", v: "BANGKOK" },
              { k: "DISCIPLINE", v: "APPLIED CREATIVE" },
            ].map((m, i) => (
              <div
                key={m.k}
                className={`py-3 px-3 ${i > 0 ? "border-l border-foreground" : ""} flex items-baseline gap-2`}
              >
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{m.k}</span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase">{m.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute bottom-6 right-10 items-center gap-3 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Scroll</span>
        <span className="relative inline-flex w-1.5 h-1.5">
          <span className="absolute inset-0 bg-foreground rounded-full animate-ping opacity-60" />
          <span className="relative inline-flex w-1.5 h-1.5 bg-foreground rounded-full" />
        </span>
      </div>
    </div>

    {/* WHO IS ØRIONS — image dominant */}
    <section className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <Reveal>
            <div className="aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-surface-2 border border-foreground">
              <img src={whoOrionsTeam} alt="ØRIONS team in Bangkok" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              <span>01 — ØRIONS TEAM</span>
              <span>BANGKOK STUDIO</span>
              <span>2024</span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-foreground" />
            <p className="index-badge text-foreground">WHO IS ØRIONS</p>
          </div>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display h-display-md">
              Applied Creative Agency
              <span className="block mt-3 text-[18px] md:text-[22px] tracking-[0.04em] text-muted-foreground font-mono uppercase">from Bangkok</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hairline w-16 mt-8" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 text-[16px] md:text-[18px] leading-[1.8] font-thai text-muted-foreground">
              ØRIONS ทำหน้าที่เชื่อมช่องว่างระหว่าง <span className="text-foreground font-medium">"ไอเดียที่ดูดี"</span> กับ <span className="text-foreground font-medium">"ผลลัพธ์ที่วัดผลได้"</span> เพื่อเปลี่ยนงบประมาณที่สูญเปล่าให้เป็น Impact ที่แท้จริงของธุรกิจ
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 border-t border-foreground pt-6 flex items-stretch divide-x divide-foreground/30">
              {[
                { v: 10, suffix: "+", l: "YEARS CRAFT" },
                { v: 40, suffix: "+", l: "BRANDS" },
                { v: null, suffix: "∞", l: "IDEAS APPLIED" },
              ].map((s, i) => (
                <div key={s.l} className={`flex-1 ${i === 0 ? "pr-4" : "px-4"} ${i === 2 ? "pr-0" : ""}`}>
                  <div className="font-display text-[32px] md:text-[44px] leading-none tracking-[-0.03em]">
                    {s.v !== null ? (
                      <FlipNumber to={s.v} suffix={s.suffix} suffixClassName="ml-0.5" />
                    ) : (
                      <span>{s.suffix}</span>
                    )}
                  </div>
                  <div className="mt-2 index-badge text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* THE MEANING OF THE LINE — tight editorial moment */}
    <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-foreground bg-surface overflow-hidden">
      {/* Subtle constellation marks — corner */}
      <div
        className="pointer-events-none absolute -top-6 -right-10 select-none font-display leading-none tracking-[-0.06em] text-foreground/[0.035] origin-top-right -rotate-[12deg]"
        style={{ fontSize: "clamp(180px, 26vw, 420px)" }}
        aria-hidden
      >
        ―
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16 md:mb-20">
          <span className="block w-8 h-px bg-foreground" />
          <p className="index-badge">MANIFESTO · 01</p>
        </div>

        {/* Pull quote — centered, with hairline marks */}
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8 text-muted-foreground">
              <span className="block w-6 h-px bg-foreground/40" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase">The Meaning of the Line</span>
              <span className="block w-6 h-px bg-foreground/40" />
            </div>
            <blockquote className="font-display h-display-lg text-foreground max-w-[1100px] mx-auto text-balance leading-[1.05]">
              <span className="text-muted-foreground">&ldquo;</span>
              ดาวฤกษ์ทุกดวงมีแสงในตัวเอง<span className="text-muted-foreground">…</span><br className="hidden md:block" />
              {" "}แต่<span className="text-gradient italic"> ไม่มีความหมาย </span>อะไรเลย
              <span className="text-muted-foreground">&rdquo;</span>
            </blockquote>
          </div>
        </Reveal>

        {/* Three beats — short, punchy, connected by hairline */}
        <div className="relative mt-20 md:mt-28">
          {/* connector line desktop */}
          <div className="hidden md:block absolute left-[8%] right-[8%] top-[14px] h-px bg-foreground/20" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {[
              {
                n: "01",
                tag: "Stars",
                body: "ทุกแบรนด์มีของดี — แต่กระจัดกระจาย ไม่มีทิศทาง",
              },
              {
                n: "02",
                tag: "Line",
                body: "เราคือคนลากเส้นเชื่อม ศักยภาพให้กลายเป็นทิศทาง",
              },
              {
                n: "03",
                tag: "Meaning",
                body: "เปลี่ยนแสงที่โดดเดี่ยว ให้เป็น Impact ที่วัดผลได้",
              },
            ].map((c, i) => (
              <Reveal key={c.n} delay={0.15 + i * 0.12} className="h-full">
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                  {/* Dot on connector line */}
                  <div className="relative flex flex-col items-center md:items-start">
                    <span className="block w-[14px] h-[14px] rounded-full bg-background border border-foreground relative z-10" />
                  </div>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      {c.n}
                    </span>
                    <span className="font-display text-[13px] tracking-[0.04em] uppercase">
                      {c.tag}
                    </span>
                  </div>
                  <p className="mt-4 font-thai text-[16px] md:text-[17px] leading-[1.7] text-foreground/85 max-w-[320px]">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Signature kicker */}
        <Reveal delay={0.4}>
          <div className="mt-20 md:mt-28 pt-8 border-t border-foreground flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="font-display tracking-[-0.02em] leading-[1.15] text-[22px] md:text-[32px] max-w-[640px]">
              หยุดเดา แล้วเริ่ม<span className="text-gradient italic"> ลากเส้น </span>ที่ถูกต้อง<span className="text-muted-foreground">.</span>
            </p>
            <div className="md:text-right shrink-0">
              <div className="index-badge text-muted-foreground">— SIGNED</div>
              <div className="mt-1 font-display tracking-[-0.02em] text-[14px] md:text-[16px]">
                ØRIONS Creative Co., Ltd.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* THE 6 METHODS */}
    <section className="px-6 md:px-10 py-24 md:py-32 bg-foreground text-background border-y border-foreground">
      <SectionHeader index="01" left="METHOD" right="06 STEPS" variant="dark" />
      <Reveal>
        <h2 className="mt-12 font-display h-display-md max-w-[900px]">
          The 6 Methods
        </h2>
      </Reveal>

      {/* Connecting journey line */}
      <div className="mt-12 hidden md:block">
        <div className="relative h-6">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-background/30" />
          <div className="relative flex justify-between">
            {orionsSteps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="block w-2 h-2 rounded-full bg-background" />
                <span className="mt-1 font-mono text-[9px] tracking-[0.2em] text-background/60">
                  {s.letter}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-px bg-background/30 border border-background/30 relative">
        {orionsSteps.map((s, i) => (
          <Reveal key={`${s.letter}-${i}`} delay={i * 0.05}>
            <div className="relative bg-foreground p-5 md:p-6 h-full flex flex-col group transition-colors duration-500 hover:bg-background hover:text-foreground">
              {/* Corner marks on hover */}
              <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-current opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-baseline justify-between">
                <div
                  className="font-display text-[56px] md:text-[80px] leading-[0.85] tracking-[-0.04em] transition-all duration-500 group-hover:translate-x-1"
                  style={{
                    WebkitTextStroke: "0px transparent",
                  }}
                >
                  <span className="inline-block group-hover:[-webkit-text-stroke:1px_currentColor] group-hover:text-transparent transition-all duration-500">
                    {s.letter}
                  </span>
                </div>
                <span className="index-badge opacity-60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 font-display text-[18px] md:text-[22px] leading-[1] tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.6] font-thai opacity-80 group-hover:opacity-100">
                {s.body}
              </p>

              {/* Process arrow between cards (desktop) */}
              {i < orionsSteps.length - 1 && (
                <span className="hidden md:block absolute top-8 -right-3 z-10 font-mono text-[14px] text-background/40 group-hover:text-foreground/40">
                  →
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* TEAM */}
    <section className="px-6 md:px-10 py-24 md:py-32">
      <SectionHeader index="02" left="TEAM" right={`${team.length} PEOPLE`} />
      <Reveal>
        <h2 className="mt-12 font-display h-display-md max-w-[900px]">
          People behind<br />the output<span className="text-muted-foreground">.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex items-baseline gap-4 flex-wrap">
          <span className="font-display text-[44px] md:text-[64px] leading-none tracking-[-0.03em]">
            {String(team.length).padStart(2, "0")}
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
            PEOPLE · 01 MISSION · NO HANDOFF
          </span>
        </div>
      </Reveal>

      {/* 4 cols × 2 rows with alternating row offset */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {team.map((p, i) => {
          // Row 2 cards (index 4-7) get a downward offset on desktop
          const isRowTwo = i >= 4;
          return (
            <div key={p.name} className={isRowTwo ? "md:mt-10" : ""}>
              <PersonCard p={p} index={i} total={team.length} />
            </div>
          );
        })}
      </div>
    </section>

    {/* CTA — editorial close, centered & calm */}
    <section className="relative px-6 md:px-10 py-28 md:py-40 border-t border-foreground">
      <div className="max-w-[900px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display h-display-lg text-balance">
            Stop guessing.<br />
            Start <span className="italic text-gradient">applying</span><span className="text-muted-foreground">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <CTA to="/contact#audit">Request ØRIONS Audit (Free)</CTA>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 inline-flex items-center gap-6 md:gap-8 font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
            <a href="mailto:hello@orions.co" className="hover:text-foreground transition-colors">
              hello@orions.co
            </a>
            <span aria-hidden className="block w-px h-3 bg-foreground/30" />
            <a href="tel:+66000000000" className="hover:text-foreground transition-colors">
              +66 (0) 00 000 0000
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
