import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
// PLACEHOLDER: temporary stand-in — overwrite src/assets/founder.jpg with the real founder photo
import founder from "@/assets/founder.jpg";
// PLACEHOLDER works — stand-ins for the founder's past projects
import fw1 from "@/assets/democrat.jpg";
import fw2 from "@/assets/rtaf.jpg";
import fw3 from "@/assets/gcoo.jpg";
import fw4 from "@/assets/hongmove.jpg";

const founderWorks = [
  { img: fw1, t: "Political brand · social" },
  { img: fw2, t: "Government · creative" },
  { img: fw3, t: "Mobility launch" },
  { img: fw4, t: "Airport EV taxi" },
];

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

const faqs = [
  { q: "ต่างจากการจ้าง agency ปกติยังไง?",
    a: "Agency รับงานมาผลิตให้. Consulting คือเราเข้าไปกำกับทิศทางและยกระดับทีม/ระบบที่คุณมีอยู่ — บางครั้งงานที่ดีที่สุดคือทำให้ทีมในของคุณเก่งขึ้น ไม่ใช่ผลิตแทน." },
  { q: "เริ่มยังไง?",
    a: "คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโครงสร้างทีมและโจทย์มา เราช่วยมองว่าควรเป็น audit สั้น ๆ, sprint หรือ retainer รายเดือน." },
  { q: "เหมาะกับใคร?",
    a: "ทีมที่มีคนผลิตอยู่แล้วแต่ต้องการสายตาและมือ senior มากำกับ — หรือองค์กรที่กำลังจะตัดสินใจครั้งใหญ่และอยากได้คนช่วยมองก่อน. ถ้าคุณยังไม่มีทีมเลย เริ่มที่บริการ agency อาจเหมาะกว่า — เราจะบอกตรง ๆ." },
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
        <SectionLabel index="01" label="Consulting" />
        <Reveal delay={0.05}>
          <div className="mt-8"><BadgeChip>Advisory · Fractional CD</BadgeChip></div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 h-display-lg max-w-[16ch]">
            Creative direction, <em className="italic text-cinnabar">on call.</em>
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
            title={<>สามวิธีเข้าไป <em className="italic text-cinnabar">กำกับ.</em></>}
          />
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.06}>
              <div className="card-soft p-8 md:p-10 h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {m.n}</div>
                <h3 className="mt-8 text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.015em] font-semibold">{m.en}</h3>
                <div lang="th" className="mt-3 font-serif italic text-cinnabar text-[16px]">{m.tag}</div>
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
          <SectionLabel index="04" label="How we engage" />
          <Reveal delay={0.1}>
            <h2 lang="th" className="mt-10 h-display-sm max-w-[18ch] thai-wrap">
              เริ่มจากคุยก่อน — <em className="italic text-cinnabar">ไม่ใช่ใบเสนอราคา.</em>
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

    {/* 05 — MEET THE FOUNDER (mockup) */}
    {/* PLACEHOLDER: drop the real founder photo at src/assets/founder.jpg and swap the photo block; replace past-work images with the founder's real projects. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Meet the founder" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-center">
          {/* Photo — PLACEHOLDER block */}
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden bg-surface-2 border border-foreground/10" style={{ aspectRatio: "4 / 5" }}>
              <img src={founder} alt="รัฐกันต์ สุวรรณภักดี — Founder, ØRIONS" className="w-full h-full object-cover object-top" />
              <span className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.18em] uppercase text-background bg-cinnabar/90 px-2 py-1 rounded">Placeholder</span>
            </div>
          </Reveal>

          {/* Bio + CTA */}
          <Reveal delay={0.1}>
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Founder</div>
              <h2 lang="th" className="mt-3 h-display-md">รัฐกันต์ สุวรรณภักดี</h2>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground max-w-[54ch]">
                ผู้ก่อตั้ง ØRIONS — คุมทิศทางครีเอทีฟและกลยุทธ์ของทุกงาน. <span className="text-foreground/55">[ประวัติ/ผลงานย่อจริง — เดี๋ยวเติมทีหลัง]</span>
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact?pkg=Consulting" className="btn-accent"><span>คุยกับ Founder</span><ArrowUpRight className="w-4 h-4" /></Link>
                <a href="tel:+66655169925" className="btn-ghost"><Phone className="w-4 h-4" /><span>065-516-9925</span></a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Past work mockup */}
        <div className="mt-16">
          <p lang="th" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">— งานเก่าของ Founder <span className="text-foreground/40">(ตัวอย่าง · placeholder)</span></p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {founderWorks.map((w, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group relative rounded-2xl overflow-hidden bg-muted" style={{ aspectRatio: "4 / 5" }}>
                  <img src={w.img} alt={w.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent" />
                  <span className="absolute top-3 left-3 font-mono text-[8px] tracking-[0.16em] uppercase text-background bg-foreground/60 px-1.5 py-0.5 rounded">Placeholder</span>
                  <span lang="th" className="absolute left-3 right-3 bottom-3 font-thai text-[12px] text-foreground/90">{w.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 06 — PRINCIPLE */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <Reveal>
          <p lang="th" className="editorial-quote text-[20px] md:text-[28px] max-w-[860px]">
            งานที่ดีที่สุดของ consulting ไม่ใช่การเข้าไปทำแทน — แต่คือการทำให้ทีมที่คุณมีอยู่แล้ว <em className="text-cinnabar font-serif italic">พูดเรื่องของตัวเองได้คมขึ้น</em> ภายใต้กรอบที่เป็นจริง.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 06 — FAQ */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <div className="mt-10">
          <SectionHeading
            eyebrow="Before you ask"
            title={<>The short <em className="italic text-cinnabar">answers.</em></>}
          />
        </div>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 07 — CTA */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>อยากได้สายตา senior มา <em className="italic text-cinnabar">มองทิศทาง</em>?</>}
      subtitle="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — หรือทำ Brand Audit ก่อนก็ได้ จะได้คุยตรงจุด."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      tone="snow"
    />
  </div>
);

export default Consulting;
