import { useState } from "react";
import { ArrowRight, Play, ImageIcon, ChevronDown } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";

/* ───────────────── DATA ───────────────── */

const pressures = [
  {
    stat: 1.7, suffix: "s", decimals: 1,
    label: "ATTENTION SPAN",
    title: "ไม่ถึง 2 วินาที",
    body: "คือเวลาที่คุณมีในการหยุดลูกค้า ก่อนจะถูกปัดทิ้ง",
  },
  {
    stat: 41, prefix: "+", suffix: "%", decimals: 0,
    label: "DIGITAL INFLATION",
    title: "ค่าโฆษณาแพงขึ้น",
    body: "เกือบเท่าตัว แต่ประสิทธิภาพกลับสวนทาง",
  },
  {
    stat: 4.6, suffix: "x", decimals: 1,
    label: "DIGITAL WASTE",
    title: "ขยะดิจิทัลล้นโลก",
    body: "งานที่ไม่มีคุณภาพถูกกลบหายไปหมด",
  },
];

const services = [
  { n: "01", title: "Creative Solution", body: "วางกลยุทธ์และหาทางออกใหม่ๆ เมื่อธุรกิจเริ่มถึงจุดตัน" },
  { n: "02", title: "Applied Communication", body: "การสื่อสารที่ประยุกต์ให้เข้ากับพฤติกรรมจริง เพื่อหยุดนิ้วโป้งลูกค้า" },
  { n: "03", title: "Social Media Marketing", body: "บริหารจัดการช่องทางดิจิทัล เพื่อสร้างตัวตนและยอดขาย" },
  { n: "04", title: "High Impact Production", body: "งานผลิตคุณภาพสูงระดับสากล เพื่อสร้างภาพจำที่ทรงพลัง" },
];

const blueprint = [
  { n: "01", letter: "O", name: "Open",       body: "เปิดปัญหาให้เห็นจริง" },
  { n: "02", letter: "R", name: "Reason",     body: "หาเหตุผลที่อยู่เบื้องหลัง" },
  { n: "03", letter: "I", name: "Ideation",   body: "สร้างไอเดียที่ใช้ได้จริง" },
  { n: "04", letter: "O", name: "Offer",      body: "ออกแบบข้อเสนอที่ชัด" },
  { n: "05", letter: "N", name: "Navigation", body: "นำทางจนเห็นผลลัพธ์" },
  { n: "06", letter: "S", name: "Success",    body: "ขยายผลความสำเร็จ" },
];

const heroProjects = [
  {
    name: "HONGMOVE",
    category: "APPLIED UTILITY",
    body: "เปลี่ยนความซับซ้อนให้ดูง่าย ระบบสื่อสาร Seamless สำหรับ Taxi VIP",
    impact: "+25%",
    impactLabel: "CONVERSION CLARITY",
  },
  {
    name: "RTAF",
    category: "APPLIED IMAGE",
    body: "ยึดความน่าเชื่อถือคืนมา ปรับโฉมภาพลักษณ์ผ่าน High-end Production",
    impact: "2X",
    impactLabel: "ENGAGEMENT QUALITY",
  },
  {
    name: "KHAO YAI",
    category: "APPLIED AESTHETIC",
    body: "ยกระดับด้วยรสนิยม เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม",
    impact: "30%",
    impactLabel: "DECISION SPEED",
  },
];

const selectedWorks = [
  { name: "Democrat Party", category: "Political Communication", body: "การสื่อสารเชิงกลยุทธ์ภายใต้เงื่อนไขที่ท้าทาย" },
  { name: "GCOO", category: "Mobility", body: "Localization และระบบที่เปลี่ยนพฤติกรรมการเดินทางคนเมือง" },
  { name: "MY HOTEL", category: "Hospitality Tech", body: "วางระบบ Smart Hotel ที่ใช้งานได้จริงรายแรกของไทย" },
  { name: "Heavy Organizer", category: "National Campaign", body: "แคมเปญสื่อสารระดับประเทศที่สร้างแรงกระเพื่อมได้จริง" },
];

const commercials = [
  { name: "Leicester City × Buriram Esport", category: "Sports Brand", body: "งานสื่อสารแบรนด์กีฬาระดับสากล" },
  { name: "Siriraj Hospital", category: "Healthcare", body: "การเล่าเรื่องความเชื่อมั่นทางการแพทย์ให้เข้าถึงง่าย" },
  { name: "Audi Thailand", category: "Automotive Premium", body: "งานโปรดักชันที่สะท้อนภาพลักษณ์ความพรีเมียมระดับโลก" },
];

const longform = [
  { name: "เถื่อน Travel · เกิดแก่เจ็บโต · ท่วงทำนองที่เลือนหาย", category: "DOCUMENTARY", body: "สารคดีที่ฟังเสียงของคนจริง" },
  { name: "The Upgrade", category: "SERIES & VARIETY", body: "รายการที่ผสานความบันเทิงกับความรู้" },
  { name: "เพลงลำคำเขื่อนแก้ว", category: "MUSIC & CREATIVE", body: "งานดนตรีที่หยั่งรากกับวัฒนธรรม" },
];

/* ───────────────── PAGE ───────────────── */

const Index = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", brief: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("AUDIT REQUEST:", form);
    alert("ขอบคุณครับ — ทีม ØRIONS จะติดต่อกลับภายใน 24 ชม.");
    setForm({ name: "", company: "", email: "", brief: "" });
  };

  return (
    <div id="top" className="grain min-h-screen bg-background text-foreground">
      <SEO
        title="ØRIONS — Applied Creative Agency"
        description="Practical. Bold. Done. Creative Engineering from Bangkok."
      />
      <Nav />

      {/* ─────────────── 1. HERO ─────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="text-center w-full max-w-[1400px] mx-auto pt-20">
          <Reveal>
            <h1 className="font-display text-[22vw] md:text-[180px] leading-[0.85] tracking-[-0.04em]">
              ØRIONS
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 label-mono text-accent">APPLIED CREATIVE AGENCY</div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-5 mx-auto h-px w-12 bg-accent" />
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-6 font-mono text-[13px] tracking-[0.25em] uppercase text-muted-foreground">
              Practical. Bold. Done.
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-6 md:left-12 label-mono text-muted-foreground">
          orions.agency
        </div>
        <a
          href="#stagnation"
          className="absolute bottom-6 right-6 md:right-12 flex items-center gap-2 label-mono text-muted-foreground hover:text-accent transition-colors"
        >
          Scroll <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
        </a>
      </section>

      {/* ─────────────── 2. THE STAGNATION ─────────────── */}
      <section id="stagnation" className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <SectionLabel number="01" label="THE STAGNATION" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[44px] md:text-[88px] leading-[0.95] font-thai">
              ทำไมธุรกิจของคุณถึง <span className="text-muted-foreground">'นิ่ง'</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[760px] text-[16px] md:text-[19px] leading-[1.7] text-muted-foreground font-thai">
              หลายแบรนด์ติดอยู่ใน{" "}
              <span className="text-accent">Vicious Cycle</span> — ทำงานหนักขึ้น จ่ายแพงขึ้น
              แต่ผลลัพธ์เท่าเดิม เพราะกติกาของโลกเปลี่ยนไปแล้ว
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="mt-14 border-l-2 border-accent pl-6 md:pl-8 max-w-[820px]">
              <p className="font-thai text-[20px] md:text-[28px] leading-[1.45] font-medium">
                "เมื่อวิธีเดิมมาถึงทางตัน คุณต้องการไอเดียที่ <span className="text-accent">'ประยุกต์'</span> มาเพื่อแก้ปัญหาจริง"
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── 3. THE 3 PRESSURES ─────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <SectionLabel number="02" label="THE 3 PRESSURES" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[40px] md:text-[72px] leading-[0.95] max-w-[900px] font-thai">
              3 จุดตายที่กัดกินงบประมาณ
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {pressures.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.1}>
                <div className="border-t border-border pt-8">
                  <CountUp
                    to={p.stat}
                    prefix={p.prefix}
                    suffix={p.suffix}
                    decimals={p.decimals}
                    className="font-display text-accent text-[80px] md:text-[104px] leading-none tracking-[-0.04em] block"
                  />
                  <div className="mt-6 label-mono text-muted-foreground">{p.label}</div>
                  <div className="mt-3 font-display text-[22px] font-thai">{p.title}</div>
                  <p className="mt-3 text-[15px] leading-[1.65] text-muted-foreground font-thai max-w-[300px]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-20 font-mono text-[11px] italic text-muted-foreground/60">
            Source: ØRIONS Industry Observation, 2025
          </p>
        </div>
      </section>

      {/* ─────────────── 4. WHO IS ØRIONS ─────────────── */}
      <section id="about" className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <SectionLabel number="03" label="WHO IS ØRIONS" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display italic text-[40px] md:text-[80px] leading-[1] font-light">
              Creative Engineering<br />from Bangkok.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-16 inline-block border border-border px-8 py-6">
              <div className="font-display text-[18px] md:text-[26px] tracking-tight">
                <span className="text-accent">BANGKOK ENERGY</span>
                <span className="text-muted-foreground mx-4">×</span>
                <span className="text-accent">LOGICAL STANDARD</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-12 max-w-[760px] text-[17px] md:text-[20px] leading-[1.65] font-thai">
              เราคือนักแก้ปัญหาที่นำความรวดเร็วแบบ Bangkok Energy มาผสานกับ Logical Standard ระดับสากล
            </p>
            <p className="mt-6 max-w-[760px] text-[15px] leading-[1.7] text-muted-foreground font-thai">
              เราเชื่อมช่องว่างระหว่าง 'ไอเดียที่ดูดี' กับ 'ผลลัพธ์ทางธุรกิจที่วัดผลได้' เพื่อลดงบประมาณที่สูญเปล่าและสร้างผลกระทบที่แท้จริงให้กับแบรนด์
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── 5. APPLIED SOLUTIONS ─────────────── */}
      <section id="services" className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="04" label="APPLIED SOLUTIONS" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[40px] md:text-[72px] leading-[0.95] font-thai">
              สิ่งที่เราส่งมอบให้คุณ
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.1}>
                <div className="group bg-background p-8 md:p-12 h-full transition-colors hover:bg-surface border border-transparent hover:border-accent/30">
                  <div className="font-display text-accent text-[64px] md:text-[80px] leading-none">
                    {s.n}
                  </div>
                  <div className="mt-8 label-mono text-muted-foreground">SERVICE / {s.n}</div>
                  <h3 className="mt-3 font-display text-[24px] md:text-[32px]">{s.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[420px]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 6. THE BLUEPRINT ─────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="05" label="THE BLUEPRINT" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[40px] md:text-[72px] leading-[0.95] font-thai">
              6 ขั้นตอนสู่ผลลัพธ์ที่แม่นยำ
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[640px] text-[15px] md:text-[17px] leading-[1.65] text-muted-foreground font-thai">
              จากความเข้าใจปัญหาที่แท้จริง สู่การขยายผลความสำเร็จให้เติบโต
            </p>
          </Reveal>

          <div className="relative mt-20">
            {/* connecting line */}
            <div className="hidden md:block absolute top-[88px] left-0 right-0 h-px bg-border" />
            <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {blueprint.map((b, i) => (
                <Reveal key={b.n} delay={i * 0.06}>
                  <div className="bg-background border border-border p-6 h-full">
                    <div className="label-mono text-muted-foreground">{b.n}</div>
                    <div className="mt-6 font-display text-accent text-[72px] leading-none">{b.letter}</div>
                    <div className="mt-6 font-display text-[18px]">{b.name}</div>
                    <p className="mt-2 text-[13px] leading-[1.6] text-muted-foreground font-thai">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── 7. HERO PROJECTS ─────────────── */}
      <section id="hero-projects" className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="06" label="HERO PROJECTS" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display italic text-[40px] md:text-[72px] leading-[0.95] font-light">
              Applied Creative in action.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <article className="group bg-background border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[16/9] bg-[hsl(0_0%_10%)] flex items-center justify-center relative overflow-hidden">
                    <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="label-mono text-accent">{p.category}</div>
                    <h3 className="mt-4 font-display text-[28px]">{p.name}</h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">{p.body}</p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="font-display text-accent text-[40px] leading-none">{p.impact}</div>
                      <div className="mt-2 label-mono text-muted-foreground">{p.impactLabel}</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 8. SELECTED WORKS ─────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="07" label="SELECTED WORKS" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display italic text-[40px] md:text-[72px] leading-[0.95] font-light">
              Applied Creative across industries.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedWorks.map((w, i) => (
              <Reveal key={w.name} delay={(i % 2) * 0.1}>
                <article className="group flex border border-border hover:border-accent/40 transition-colors">
                  <div className="w-[40%] aspect-square bg-[hsl(0_0%_10%)] flex items-center justify-center shrink-0">
                    <ImageIcon className="w-7 h-7 text-muted-foreground/40" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="label-mono text-accent">{w.category}</div>
                    <h3 className="mt-3 font-display text-[22px] md:text-[26px]">{w.name}</h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">{w.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 9. SOCIAL & COMMERCIALS ─────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="08" label="SOCIAL & COMMERCIALS" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display italic text-[40px] md:text-[72px] leading-[0.95] font-light">
              High-Impact Digital Content.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercials.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <article className="group bg-background border border-border hover:border-accent/40 transition-colors">
                  <div className="aspect-video bg-[hsl(0_0%_10%)] flex items-center justify-center relative">
                    <div className="w-14 h-14 border border-accent/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                      <Play className="w-5 h-5 text-accent group-hover:text-accent-foreground" fill="currentColor" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="label-mono text-accent">{c.category}</div>
                    <h3 className="mt-3 font-display text-[20px]">{c.name}</h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground font-thai">{c.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 10. ENTERTAINMENT & LONG-FORM ─────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="09" label="ENTERTAINMENT & LONG-FORM" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display italic text-[40px] md:text-[72px] leading-[0.95] font-light">
              Mastery in Storytelling.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {longform.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.1}>
                <article className="group bg-surface border border-border hover:border-accent/40 transition-colors">
                  <div className="aspect-video bg-[hsl(0_0%_10%)] flex items-center justify-center relative">
                    <div className="w-14 h-14 border border-accent/60 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                      <Play className="w-5 h-5 text-accent group-hover:text-accent-foreground" fill="currentColor" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="label-mono text-accent">{l.category}</div>
                    <h3 className="mt-3 font-display text-[18px] font-thai leading-[1.3]">{l.name}</h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground font-thai">{l.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 11. WHY AGENCY ─────────────── */}
      <section className="px-6 md:px-12 py-28 md:py-40 border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="10" label="WHY AGENCY?" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[40px] md:text-[72px] leading-[0.95] font-thai">
              ทำไมต้องเป็น ØRIONS
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {[
              { title: "CONSULTANT", sub: "ให้แผน ไม่ทำจริง", body: "ส่งมอบ Paper Strategy แต่ไม่ได้พาไปทำจนเห็นผล", muted: true },
              { title: "STUDIO", sub: "ทำตามสั่ง ไม่คิดต่อ", body: "รับ Execution ได้ดี แต่ไม่มองภาพรวมกลยุทธ์ธุรกิจ", muted: true },
              { title: "ØRIONS", sub: "กลยุทธ์ × งานผลิต", body: "เชื่อมการคิดกับการทำ เพื่อให้ธุรกิจขยับไปข้างหน้าได้จริง", muted: false },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div
                  className={`p-8 md:p-10 h-full border ${
                    c.muted
                      ? "bg-background border-border text-muted-foreground"
                      : "bg-accent border-accent text-accent-foreground"
                  }`}
                >
                  <div className={`label-mono ${c.muted ? "text-muted-foreground" : "text-accent-foreground/80"}`}>
                    {c.muted ? "VS" : "OUR APPROACH"}
                  </div>
                  <h3 className={`mt-6 font-display text-[28px] md:text-[36px] ${c.muted ? "" : "text-accent-foreground"}`}>
                    {c.title}
                  </h3>
                  <div className={`mt-4 font-display text-[18px] md:text-[20px] font-thai ${c.muted ? "text-muted-foreground" : "text-accent-foreground"}`}>
                    {c.sub}
                  </div>
                  <p className={`mt-4 text-[14px] leading-[1.7] font-thai ${c.muted ? "text-muted-foreground/80" : "text-accent-foreground/90"}`}>
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── 12. THE CLARITY AUDIT ─────────────── */}
      <section id="audit" className="bg-accent text-accent-foreground px-6 md:px-12 py-28 md:py-40 border-t border-accent">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="label-mono text-accent-foreground/80">SPECIAL OFFER / LIMITED</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[64px] md:text-[140px] leading-[0.9] tracking-[-0.04em]">
              THE CLARITY<br />AUDIT
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 h-px w-16 bg-accent-foreground" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-[680px] text-[17px] md:text-[22px] leading-[1.55] font-thai">
              เราไม่ได้มาขอโอกาส แต่มาเพื่อชี้ <strong>'จุดตาย'</strong> และหา <strong>'ทางรอด'</strong> ให้คุณ
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px]">
            {[
              { n: "01", title: "วิเคราะห์จุดตัน", body: "เราจะบอกว่าอะไรที่ขวางทางเติบโตของธุรกิจคุณอยู่ พร้อมแนวทางแก้ไขเบื้องต้น" },
              { n: "02", title: "จำกัดจำนวน",     body: "รับเฉพาะธุรกิจที่ต้องการความเปลี่ยนแปลงจริงๆ เพื่อรักษาคุณภาพการวิเคราะห์สูงสุด" },
            ].map((b, i) => (
              <Reveal key={b.n} delay={i * 0.1}>
                <div className="border-t border-accent-foreground/30 pt-6">
                  <div className="label-mono">{b.n} / {b.title}</div>
                  <p className="mt-4 text-[15px] leading-[1.7] font-thai">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <form
              onSubmit={submit}
              className="mt-16 max-w-[760px] grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name" className="bg-transparent border border-accent-foreground/40 px-4 py-3.5 text-[15px] placeholder:text-accent-foreground/60 focus:outline-none focus:border-accent-foreground"
              />
              <input
                required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company" className="bg-transparent border border-accent-foreground/40 px-4 py-3.5 text-[15px] placeholder:text-accent-foreground/60 focus:outline-none focus:border-accent-foreground"
              />
              <input
                required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email" className="md:col-span-2 bg-transparent border border-accent-foreground/40 px-4 py-3.5 text-[15px] placeholder:text-accent-foreground/60 focus:outline-none focus:border-accent-foreground"
              />
              <textarea
                required value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })}
                placeholder="Brief Challenge" rows={4}
                className="md:col-span-2 bg-transparent border border-accent-foreground/40 px-4 py-3.5 text-[15px] placeholder:text-accent-foreground/60 focus:outline-none focus:border-accent-foreground resize-none"
              />
              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-3 bg-accent-foreground text-accent px-8 py-4 label-mono hover:bg-accent-foreground/90 transition-colors mt-2"
              >
                BOOK YOUR AUDIT <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── 13. CLOSING ─────────────── */}
      <section id="contact" className="px-6 md:px-12 py-28 md:py-40 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SectionLabel number="11" label="LET'S WORK" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-10 font-display text-[44px] md:text-[96px] leading-[0.95]">
              <span className="text-muted-foreground">Your business is stuck.</span><br />
              <span className="text-foreground">We're the unstuck.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-display italic text-accent text-[20px] md:text-[28px]">
              Stop guessing. Start applying.
            </p>
          </Reveal>

          <div className="mt-20 border-t border-border pt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: "WEBSITE", value: "orions.agency", href: "https://orions.agency" },
              { label: "EMAIL",   value: "hello@orions.agency", href: "mailto:hello@orions.agency" },
              { label: "TEL",     value: "092-390-5464", href: "tel:+66923905464" },
            ].map((c) => (
              <div key={c.label}>
                <div className="label-mono text-muted-foreground">{c.label}</div>
                <a href={c.href} className="mt-3 block font-display text-[20px] md:text-[24px] hover:text-accent transition-colors">
                  {c.value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="label-mono text-accent">PRACTICAL. BOLD. DONE.</p>
            <p className="mt-4 font-mono text-[10px] text-muted-foreground/40">
              © {new Date().getFullYear()} ØRIONS · 246/8 Soi Yothin Pattana, Bangkok 10240 · Tax ID: 0105568220629
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
