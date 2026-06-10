import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

const sections = [
  {
    n: "01",
    h: "ข้อมูลที่เราเก็บ",
    body: "เฉพาะที่คุณกรอกเอง — ชื่อ ชื่อแบรนด์ และอีเมล จากฟอร์มติดต่อหรือ Brand Audit · กรณี Brand Audit เราเก็บคำตอบและคะแนนของคุณไว้ด้วยเพื่อใช้คุยตอนนัด · สถิติการใช้งานเว็บเก็บแบบไม่ระบุตัวตนผ่าน Plausible (ไม่มีคุกกี้ ไม่ติดตามข้ามเว็บ).",
  },
  {
    n: "02",
    h: "ใช้ทำอะไร",
    body: "ติดต่อกลับเรื่องที่คุณสอบถาม · ส่งและพูดคุยผล Brand Audit · ปรับปรุงเนื้อหาและบริการของเรา · เราไม่ขาย ไม่แลกเปลี่ยน และไม่ส่งต่อข้อมูลของคุณให้บุคคลที่สามเพื่อการตลาด.",
  },
  {
    n: "03",
    h: "เก็บนานแค่ไหน",
    body: "เก็บเท่าที่จำเป็นต่อการติดต่อและการทำงานร่วมกัน · เมื่อไม่จำเป็นแล้ว หรือเมื่อคุณขอให้ลบ เราจะลบให้.",
  },
  {
    n: "04",
    h: "สิทธิของคุณ (PDPA)",
    body: "คุณขอดู ขอแก้ไข ขอสำเนา หรือขอลบข้อมูลของคุณได้ทุกเมื่อ · รวมถึงถอนความยินยอม — เพียงอีเมลมาที่ hello@orions.agency แล้วเราจะดำเนินการให้.",
  },
];

const Privacy = () => (
  <div>
    <SEO
      title="นโยบายความเป็นส่วนตัว — ØRIONS"
      description="เราเก็บเฉพาะข้อมูลที่จำเป็น ใช้เพื่อติดต่อกลับและส่งผล Brand Audit เท่านั้น ไม่ขายต่อ — และคุณขอลบได้ทุกเมื่อตาม PDPA."
      path="/privacy"
      noindex
    />

    <section className="section-ink px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 border-b border-foreground/15">
      <div className="max-w-[1080px] mx-auto">
        <SectionLabel label="Privacy" />
        <Reveal delay={0.1}>
          <h1 lang="th" className="mt-10 h-display-lg max-w-[16ch] thai-wrap">
            เก็บเท่าที่จำเป็น — <em className="text-cinnabar">พูดตรง.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            แบรนด์เรายึด "พูดตรง" — เรื่องข้อมูลของคุณก็เหมือนกัน. เราเก็บเฉพาะที่จำเป็น ใช้เท่าที่บอก และลบให้เมื่อคุณขอ.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <div className="border-t border-foreground/20">
          {sections.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 items-baseline py-10 md:py-12 border-b border-foreground/20">
                <div className="font-serif text-cinnabar text-[28px] md:text-[40px] leading-none tabular-nums">{s.n}</div>
                <div>
                  <h2 lang="th" className="h-display-sm">{s.h}</h2>
                  <p lang="th" className="mt-4 font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.8] text-foreground/85 max-w-[64ch]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p lang="th" className="mt-12 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">
            ติดต่อเรื่องข้อมูล: <a href="mailto:hello@orions.agency" className="text-foreground hover:text-cinnabar transition-colors">hello@orions.agency</a> · ปรับปรุงล่าสุด 2026
          </p>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Privacy;
