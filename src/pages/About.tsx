import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import FlipNumber from "@/components/FlipNumber";
import ConstellationLine from "@/components/ConstellationLine";
import whoOrionsTeam from "@/assets/who-orions-team.webp";

const SITE_URL = "https://orions.agency";
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
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
        ],
      }}
    />

    <PageHero
      eyebrow="ABOUT · INDEX"
      verticalLabel="/ 04 · ABOUT"
      title={<>The Applied Creative<br /><span className="text-muted-foreground">Agency.</span></>}
    />

    {/* WHO IS ØRIONS — image dominant */}
    <section className="relative px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <Reveal>
            <div className="aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-surface-2 border border-foreground">
              <img src={whoOrionsTeam} alt="ØRIONS team in Bangkok" loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
              <span className="block mt-3 font-mono text-[14px] md:text-[16px] tracking-[0.04em] text-muted-foreground uppercase">from Bangkok</span>
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
            <div className="mt-12 border-t border-foreground pt-6 grid grid-cols-3 gap-3 md:gap-4">
              {[
                { v: 10, suffix: "+", l: "YEARS CRAFT" },
                { v: 40, suffix: "+", l: "BRANDS" },
                { v: null, suffix: "∞", l: "IDEAS APPLIED" },
              ].map((s, i) => (
                <div key={s.l} className={i > 0 ? "border-l border-soft pl-3 md:pl-4" : ""}>
                  <div className="num-display text-[28px] md:text-[44px]">
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

    {/* THE MEANING OF THE LINE — editorial asymmetric */}
    <section className="relative px-6 md:px-10 bg-surface overflow-hidden">
      <div className="border-t border-foreground py-16 md:py-24">
      {/* Decorative oversized line — top right, rotated, intentional mark */}
      <div className="pointer-events-none absolute -top-10 -right-20 select-none">
        <div
          className="font-display leading-none tracking-[-0.06em] text-foreground/[0.04] origin-top-right -rotate-[15deg]"
          style={{ fontSize: "clamp(220px, 32vw, 520px)" }}
        >
          ―
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header row */}
        <div className="flex items-center gap-3 mb-12 md:mb-16 flex-wrap">
          <span className="block w-8 h-px bg-foreground" />
          <p className="index-badge">THE MEANING OF THE LINE</p>
        </div>

        {/* Pull quote — centered */}
        <Reveal>
          <blockquote className="font-display h-display-md text-foreground text-center max-w-[1100px] mx-auto text-balance">
            <span className="text-muted-foreground">&ldquo;</span>
            ดาวฤกษ์ทุกดวงมีแสงในตัวเอง<span className="text-muted-foreground"> … </span>
            แต่ไม่มีความหมายอะไรเลย
            <span className="text-muted-foreground">&rdquo;</span>
          </blockquote>
        </Reveal>

        {/* Equal 3 columns with constellation connector */}
        <div className="relative mt-20 md:mt-28">
          <div className="hidden md:block absolute inset-x-0 -top-12 h-16 text-foreground">
            <ConstellationLine className="w-full h-full" dots={3} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                n: "01",
                tag: "The Line",
                lead: false,
                body: (
                  <>
                    จนกว่าจะมีคน <span className="font-display normal-case font-bold tracking-[-0.01em]">"ลากเส้น"</span> เชื่อมพวกมันเข้าด้วยกัน เส้นสายที่ลากผ่านความมืด คือสิ่งที่เปลี่ยนจุดสว่างที่กระจัดกระจาย ให้กลายเป็นรูปธรรม เป็นเรื่องเล่า และเป็นตำนาน
                  </>
                ),
              },
              {
                n: "02",
                tag: "The Connector",
                body: (
                  <>
                    <span className="font-display normal-case font-bold tracking-[-0.01em]">ØRIONS</span> คือคนลากเส้นสายเหล่านั้น เราไม่ได้แค่รวบรวมคนเก่ง แต่เราคือคนที่เชื่อมโยงศักยภาพมหาศาล ให้กลายเป็น <span className="text-foreground font-semibold">'ทางออก'</span> ที่มีทิศทาง
                  </>
                ),
              },
              {
                n: "03",
                tag: "The Meaning",
                body: (
                  <>
                    เราเปลี่ยนแสงสว่างที่โดดเดี่ยว ให้กลายเป็น <span className="text-foreground font-semibold">'ความหมาย'</span> ที่ขับเคลื่อนธุรกิจของคุณได้จริง — ไม่ใช่แค่ภาพสวย แต่เป็น Impact ที่วัดผลได้
                  </>
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.n} delay={0.1 + i * 0.1} className="h-full">
                <div className="border-t border-foreground pt-6 h-full flex flex-col">
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                      {c.n}
                    </span>
                    <span className="font-display text-[12px] tracking-[0.04em] uppercase text-foreground">
                      {c.tag}
                    </span>
                  </div>
                  <p className="font-thai text-foreground text-[15px] md:text-[16px] leading-[1.85]">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Signature row */}
        <Reveal delay={0.35}>
          <div className="mt-12 pt-8 border-t border-foreground flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="font-display tracking-[-0.02em] leading-[1.15] h-display-xs max-w-[680px]">
              หยุดเดา แล้วเริ่ม<span className="text-gradient"> ลากเส้น </span>ที่ถูกต้องไปกับเรา<span className="text-muted-foreground">.</span>
            </p>
            <div className="md:text-right shrink-0">
              <div className="index-badge text-muted-foreground">— SIGNED</div>
              <div className="mt-2 font-display tracking-[-0.02em] text-[14px] md:text-[16px]">
                ØRIONS Creative Co., Ltd.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      </div>
    </section>

    {/* THE 6 METHODS */}
    <section className="px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/40 py-16 md:py-24">
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
                <div className="num-display text-[48px] md:text-[80px] transition-all duration-500 group-hover:translate-x-1">
                  <span className="inline-block group-hover:[-webkit-text-stroke:1px_currentColor] group-hover:text-transparent transition-all duration-500">
                    {s.letter}
                  </span>
                </div>
                <span className="index-badge opacity-60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 font-display h-display-2xs">
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
      </div>
    </section>

    {/* TEAM */}
    <section className="px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-24">
      <SectionHeader index="02" left="TEAM" right={`${team.length} PEOPLE`} />
      <Reveal>
        <h2 className="mt-12 font-display h-display-md max-w-[900px]">
          People behind<br />the output<span className="text-muted-foreground">.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex items-baseline gap-4 flex-wrap">
          <span className="num-display text-[40px] md:text-[64px]">
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
      </div>
    </section>

    {/* CTA — editorial close, centered & calm */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20 max-w-[760px] mx-auto text-center">
        <Reveal>
          <div className="index-badge text-muted-foreground mb-6">READY WHEN YOU ARE</div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-sm text-balance">
            Stop guessing<span className="text-muted-foreground">.</span><br />
            Start <span className="text-gradient">applying</span><span className="text-muted-foreground">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
            <CTA to="/contact#audit">Request ØRIONS Audit (Free)</CTA>
            <CTA to="/contact" variant="ghost">Or start a conversation</CTA>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 inline-flex items-center gap-6 md:gap-8 font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
            <a href="mailto:hello@orions.agency" className="hover:text-foreground transition-colors">
              hello@orions.agency
            </a>
            <span aria-hidden className="block w-px h-3 bg-muted-foreground" />
            <a href="tel:+66923905464" className="hover:text-foreground transition-colors">
              +66 92 390 5464
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
