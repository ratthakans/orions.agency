import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import CTABand from "@/components/CTABand";

const modes = [
  {
    n: "01",
    en: "Direction audit",
    tag: "หาเส้นที่หลุด",
    th: "X-ray แบรนด์และงานปัจจุบัน — หา positioning, voice และจุดที่สื่อสารหลุดออกจากกัน แล้วสรุปเป็นทิศทางที่ทีมหยิบไปใช้ต่อได้",
  },
  {
    n: "02",
    en: "Fractional creative direction",
    tag: "เป็น CD นอกองค์กร",
    th: "ทำหน้าที่เสมือน creative director ให้ทีมคุณรายเดือน — กำกับทิศทาง, รีวิวงาน, คุม vendor/in-house ให้ทุกชิ้นไปทางเดียวกัน",
  },
  {
    n: "03",
    en: "Strategy sprint / workshop",
    tag: "ตกผลึกแบบ time-boxed",
    th: "งานสั้น มีกรอบเวลา — positioning sprint หรือ brand workshop ที่จบด้วยข้อสรุปที่ตัดสินใจต่อได้ ไม่ลากยาว",
  },
];

const engagement = [
  { k: "รูปแบบ",   v: "Retainer รายเดือน หรือ sprint ตามกรอบงาน" },
  { k: "จังหวะ",   v: "รีวิวกับทีมคุณสม่ำเสมอ · ทำงานเป็นทีมเดียว" },
  { k: "ผลลัพธ์",  v: "Direction doc · audit · การกำกับงานจริง" },
  { k: "ราคา",     v: "ขึ้นกับ scope — เริ่มจากคุยก่อน" },
];

const Consulting = () => (
  <div>
    <SEO
      title="Consulting — Creative direction, on call · ØRIONS"
      description="Advisory และ fractional creative direction สำหรับทีมที่มี in-house อยู่แล้ว แต่ต้องการสายตาและมือ senior มากำกับทิศทาง — ข้อจำกัดคือบรีฟ."
      path="/consulting"
    />

    {/* 01 — HERO */}
    <section className="section-ink px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <BadgeChip>Consulting · Advisory · Fractional CD</BadgeChip>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 h-display-lg max-w-[16ch]">
            Creative direction, <em className="text-cinnabar">on call.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[700px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.7] text-foreground/85">
            สำหรับทีมที่มี in-house อยู่แล้ว แต่ต้องการสายตาและมือ senior มากำกับทิศทาง — เราไม่ได้มาแทนทีมคุณ เรามาทำให้ทีมคุณพูดเสียงเดียวกันและคมขึ้น.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            <span className="text-cinnabar">— Fit</span> &nbsp;In-house teams · Multi-vendor brands · ก่อน rebrand/launch
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — WHAT WE DO */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="mt-10">
          <SectionHeading
            eyebrow="How we work with you"
            lang="th"
            title={<>สามวิธีเข้าไป <em className="text-cinnabar">กำกับ.</em></>}
          />
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.06}>
              <div className="card-soft p-8 md:p-10 h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {m.n}</div>
                <h3 className="mt-8 text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.015em] font-semibold">{m.en}</h3>
                <div lang="th" className="mt-3 font-serif text-foreground/70 text-[16px]">{m.tag}</div>
                <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{m.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — ENGAGEMENT */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <SectionLabel label="How we engage" />
          <Reveal delay={0.1}>
            <h2 lang="th" className="mt-10 h-display-sm max-w-[18ch] thai-wrap">
              เริ่มจากคุยก่อน — <em className="text-cinnabar">ไม่ใช่ใบเสนอราคา.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[42ch]">
              เราผูกงานไว้กับผลที่วัดได้ ไม่ใช่จำนวนชั่วโมง — และจะบอกตรง ๆ ถ้ายังไม่ใช่เวลาที่ควรเริ่ม.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <dl className="card-soft p-8 md:p-10">
            {engagement.map((e, i) => (
              <Reveal key={e.k} delay={i * 0.05}>
                <div className={`grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-6 py-5 ${i > 0 ? "border-t border-foreground/15" : ""}`}>
                  <dt lang="th" className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar pt-1">{e.k}</dt>
                  <dd lang="th" className="font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.6] text-foreground/90">{e.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>

    {/* 05 — PRINCIPLE */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <Reveal>
          <p lang="th" className="editorial-quote text-[20px] md:text-[28px] max-w-[860px]">
            งานที่ดีที่สุดของ consulting ไม่ใช่การเข้าไปทำแทน — แต่คือการทำให้ทีมที่คุณมีอยู่แล้ว <em className="text-cinnabar font-serif">พูดเรื่องของตัวเองได้คมขึ้น</em> ภายใต้กรอบที่เป็นจริง.
          </p>
        </Reveal>
      </div>
    </section>

    {/* FAQ removed — answers live on /package, /contact and /diagnostic */}

    {/* 06 — CTA */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>อยากได้สายตา senior มา <em className="text-cinnabar">มองทิศทาง</em>?</>}
      subtitle="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — หรือทำ Brand Audit ก่อนก็ได้ จะได้คุยตรงจุด."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      tone="snow"
    />
  </div>
);

export default Consulting;
