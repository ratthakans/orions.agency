import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import CTABand from "@/components/CTABand";

// PLACEHOLDER: replace with real team names + photos before launch
// Roles only for now — honest (no fabricated names/portraits). The credibility
// comes from the real client track record listed below, not invented bios.
const people = [
  { role: "Creative Director",         th: "ทิศทางความคิดและคุณภาพงานโดยรวม" },
  { role: "Strategist",                th: "วางกลยุทธ์และเรื่องที่จริงก่อนลงมือ" },
  { role: "Art Director",              th: "ดูแลภาษาภาพให้คมและสอดคล้องกัน" },
  { role: "Producer",                  th: "คุมไทม์ไลน์ งบ และการส่งมอบจริง" },
  { role: "Director of Photography",   th: "ภาพเคลื่อนไหวและการถ่ายทำ" },
  { role: "Editor",                    th: "ตัดต่อและประกอบงานให้จบสมบูรณ์" },
];

// Real clients used elsewhere on the site — used here only to frame track record.
const trackRecordClients = [
  "พรรคประชาธิปัตย์",
  "กองทัพอากาศ",
  "GCOO",
  "HONG MOVE",
  "เขาใหญ่ คันทรี่คลับ",
  "HEAVY ORGANIZER",
];

const studioStats: { num?: number; display?: string; label: string }[] = [
  { display: "3 → 1", label: "ทีมเดียว ตั้งแต่กลยุทธ์ถึงการผลิต" },
  { num: 6,           label: "มิติใน Brand Audit" },
  { num: 24,          label: "ชม. ตอบกลับหลังทักมา" },
];

const principles = [
  { n: "i.",   en: "พูดตรง",              th: "บอกข้อจำกัดครบทั้งสองด้าน ถ้ายังไม่พร้อม เราบอกตรง ๆ" },
  { n: "ii.",  en: "ขายผล ไม่ใช่จำนวนโพสต์", th: "ผูกงานไว้กับผลที่วัดได้ ไม่ใช่จำนวนชิ้นงาน" },
  { n: "iii.", en: "ข้อจำกัดคือบรีฟ",       th: "เราออกแบบไอเดียรอบเงื่อนไข ไม่หนีมัน" },
  { n: "iv.",  en: "มองยาว",              th: "สร้างแบรนด์ที่ถูกจำ ไม่ใช่กระแสที่ผ่านไป" },
];

const notForYou = [
  { n: "01", th: "คุณต้องการแค่ยอดให้เร็วที่สุด โดยไม่สนภาพจำระยะยาว — performance shop เพียว ๆ อาจคุ้มกว่า" },
  { n: "02", th: "คุณอยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุด โดยไม่ต้องมีกลยุทธ์ — เราไม่ใช่ที่นั้น" },
  { n: "03", th: "ของหรือ unit economics ยังไม่พร้อม — เราจะบอก และยังไม่รับงานจนกว่าจะพร้อม" },
];

const About = () => (
  <div>
    <SEO
      title="About — สิ่งที่เราเชื่อ · ØRIONS"
      description="แบรนด์ที่ดีไม่ได้เกิดจากการพูดให้ดังที่สุด แต่จากการพูดให้ถูก. งานที่ดีที่สุดมักเกิดใต้ข้อจำกัด — เราถือว่ามันคือบรีฟ."
      path="/about"
    />

    {/* 01 — MANIFESTO */}
    <section className="section-ink min-h-[88vh] flex flex-col border-b border-foreground/15">
      <div className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
        <Reveal>
          <BadgeChip>What we believe</BadgeChip>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[20ch] thai-wrap">
            พูดให้ดังที่สุด ไม่เท่าพูดให้ <em className="italic text-cinnabar">ถูก.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.7] text-foreground/80">
            ถูกเรื่อง · ถูกคน · ถูกเวลา — และงานที่ดีที่สุดมักเกิดขึ้นใต้ข้อจำกัด ไม่ใช่ในที่ที่ทำอะไรก็ได้.
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-10 pb-24 max-w-[1280px] mx-auto w-full">
        <div className="border-t border-foreground/20 pt-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16">
          <Reveal>
            <p lang="th" className="editorial-quote text-[17px] md:text-[21px]">
              ทุกแบรนด์ที่มาหาเรามีอุปสรรคของตัวเอง — คาเฟ่ที่เปิดบนถนนที่มีอีกสิบร้าน · แบรนด์แฟชันที่ต้องมีตัวตนในตลาดที่อิ่มตัว · พรรคการเมืองที่กฎหมายจำกัดเกือบทุกคำ · งานของเราเหมือนกันเสมอ: หาเรื่องที่จริง แล้ว refine มันจนคมพอจะลงในกรอบนั้นได้.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-accent h-full">
              <div className="eyebrow-mono">Our stance</div>
              <div lang="th" className="mt-6 font-thai thai-wrap text-[26px] md:text-[34px] leading-[1.25] font-medium tracking-[0]">
                เราไม่หนีข้อจำกัด — <span className="text-cinnabar">เราถือว่ามันคือบรีฟ.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 02 — WHAT WE HOLD */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="02 — What we hold"
          lang="th"
          title={<>สี่อย่างที่เรา <em className="italic text-cinnabar">ไม่ยอมต่อรอง.</em></>}
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.06}>
              <div className="card-soft p-10 md:p-12 h-full">
                <div className="font-serif italic text-cinnabar text-[22px] leading-none">{p.n}</div>
                <h3 lang="th" className="mt-8 font-thai text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.01em] font-medium">{p.en}</h3>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-12 border-l-2 border-cinnabar pl-6 md:pl-8 max-w-[760px]">
            <p lang="th" className="font-serif italic text-[17px] md:text-[21px] leading-[1.5] tracking-[-0.005em]">
              AI ช่วยให้เราเร็วขึ้นและทดสอบได้มากขึ้น — แต่คนยังเป็นคนคิดและรับผิดชอบงาน.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 03 — PEOPLE / STUDIO */}
    {/* PLACEHOLDER: replace with real team names + photos before launch */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="03 — The studio"
          lang="th"
          title={<>คนยังเป็นคนคิด — และ <em className="italic text-cinnabar">รับผิดชอบงาน.</em></>}
          intro="ทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต — strategist, creative director, art director, producer, ช่างภาพ และ editor ที่อยู่กับงานของคุณจริง ไม่ใช่สายพาน."
        />

        {/* Track record — real clients shown elsewhere on the site */}
        <Reveal delay={0.05}>
          <div className="card-accent mt-12">
            <div className="eyebrow-mono">Track record</div>
            <p lang="th" className="mt-5 font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.5] text-foreground/90 max-w-[760px]">
              ทีมเดียวกับที่อยู่เบื้องหลังงานจริงให้กับ —
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {trackRecordClients.map((c) => (
                <span key={c} lang="th" className="badge-chip font-thai text-foreground/85">
                  {c}
                </span>
              ))}
            </div>
            <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground max-w-[680px]">
              เราเพิ่งตั้งสตูดิโอในชื่อ ØRIONS — แต่คนทำงานไม่ได้เพิ่งเริ่มต้น.
            </p>
          </div>
        </Reveal>

        {/* Honest by-the-numbers — facts already true on the site */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {studioStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="stat-card h-full">
                <div className="num-display text-cinnabar text-[34px] md:text-[44px]">
                  {s.num != null ? <CountUp to={s.num} /> : s.display}
                </div>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.6] text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Roles — no fabricated names/photos, presented as rounded tiles */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {people.map((p, i) => (
            <Reveal key={p.role} delay={(i % 3) * 0.05}>
              <div className="card-soft p-7 md:p-8 h-full">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">{p.role}</div>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.6] text-foreground/70">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — WHEN WE'RE NOT THE ANSWER */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="04 — When we're not the answer"
          lang="th"
          title={<>ความซื่อสัตย์สำคัญกว่า <em className="italic text-cinnabar">การรับทุกงาน.</em></>}
          intro="เราจะบอกตรง ๆ ถ้า:"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:gap-5">
          {notForYou.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="card-soft grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12 items-baseline p-8 md:p-10">
                <div className="font-serif italic text-cinnabar text-[28px] md:text-[36px] leading-none tabular-nums">{p.n}</div>
                <p lang="th" className="font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.6] text-foreground/90">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — CTA */}
    <CTABand
      eyebrow="When you're ready"
      title={<>นั่นแหละคือ <em className="italic text-cinnabar">บรีฟ</em> ที่เราถนัด.</>}
      subtitle="ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit 3 นาที — หรือทักมาคุยเลย."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="snow"
    />
  </div>
);

export default About;
