import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import Picture from "@/components/Picture";
import founder from "@/assets/team/founder.jpg?as=picture";

// All copy below is the founder's brand book, verbatim.

const different = [
  {
    n: "01",
    t: "Story before format",
    b: ["เราไม่เริ่มจาก “ต้องทำ Video กี่ตัว?” หรือ “เดือนนี้จะโพสต์อะไร?”", "เราเริ่มจาก อะไรคือเรื่องที่ควรถูกเล่า แล้วจึงเลือกวิธีเล่าที่เหมาะสมที่สุด"],
  },
  {
    n: "02",
    t: "Understanding before execution",
    b: ["งานที่ดีควรรู้สึกว่า มันเป็นของแบรนด์นี้เท่านั้น ไม่ใช่งานที่สามารถเปลี่ยน Logo แล้วกลายเป็นของใครก็ได้", "นั่นเกิดขึ้นได้ก็ต่อเมื่อเราเข้าใจแบรนด์จริง ๆ ก่อนลงมือสร้าง"],
  },
  {
    n: "03",
    t: "Craft over volume",
    b: ["ORIONS ตั้งใจเป็น Boutique Creative Company เราไม่ได้สร้างระบบเพื่อรับงานให้ได้มากที่สุด", "เราเลือกทำงานในจำนวนที่ยังสามารถ คิด ถาม แก้ ทดลอง และใส่ใจในรายละเอียดได้จริง — เพราะงานที่ Refined ต้องการเวลาและความใส่ใจ"],
  },
  {
    n: "04",
    t: "One story across every touchpoint",
    b: ["Strategy · Identity · Campaign · Film · Content · Digital ไม่ควรรู้สึกเหมือนเป็นงานจากคนละบริษัท"],
    line: "Different expressions of the same story.",
  },
  {
    n: "05",
    t: "Details create perception",
    b: ["คนอาจไม่สามารถอธิบายได้ว่า ทำไมบางแบรนด์ถึงรู้สึก Premium ทำไมบาง Film ถึงรู้สึกจริง ทำไมบาง Layout ถึงรู้สึกพอดี", "แต่มันเกิดจากรายละเอียดเล็ก ๆ จำนวนมากที่ถูกตัดสินใจอย่างตั้งใจ"],
    line: "Nothing is too small to deserve intention.",
  },
];

const notThis = [
  { t: "Not a content factory.", b: "เราไม่ได้เชื่อว่าทุกวันจำเป็นต้องมีอะไรบางอย่างถูกโพสต์" },
  { t: "Not a production line.", b: "เราไม่ได้วัดคุณภาพของงานจากจำนวน Output ที่ผลิตได้" },
  { t: "Not trend-first.", b: "เราเข้าใจ Trend แต่เราไม่ยอมให้ Trend เป็น Strategy" },
  { t: "Not creative for creativity's sake.", b: "เราไม่ได้สร้างงานเพียงเพราะมันดู Creative — ทุก Idea ควรมีเหตุผลว่าทำไมมันถึงเหมาะกับแบรนด์" },
];

const bestWith = [
  "แบรนด์ที่กำลังเข้าสู่ Chapter ใหม่",
  "แบรนด์ที่ Product ดี แต่ยังเล่าไม่ชัด",
  "แบรนด์ที่เติบโตเร็วกว่าภาพลักษณ์เดิม",
  "แบรนด์ที่ต้องการสร้าง Meaning มากกว่าการสร้าง Reach",
  "แบรนด์ที่ต้องการ Creative Partner ไม่ใช่แค่ Vendor",
];

const principles = [
  { t: "Meaning over noise", b: "อย่าสื่อสารเพียงเพราะมี Channel ให้สื่อสาร — พูดเมื่อมีสิ่งที่ควรถูกพูด" },
  { t: "Clarity over complexity", b: "Idea ที่ดีที่สุดไม่ได้จำเป็นต้องดูฉลาด แต่มันควรทำให้คนเข้าใจได้อย่างชัดเจน" },
  { t: "Depth over volume", b: "เราอยากเข้าใจให้ลึกขึ้น ไม่ใช่ผลิตให้มากขึ้น" },
  { t: "Craft over convenience", b: "สิ่งที่สะดวกที่สุด ไม่ได้หมายความว่าเป็นสิ่งที่ดีที่สุด" },
  { t: "Timeless over trendy", b: "เราเข้าใจสิ่งที่เกิดขึ้นวันนี้ แต่สร้างสิ่งที่ยังมีคุณค่าในวันพรุ่งนี้" },
];

const About = () => (
  <div>
    <SEO
      title="About — Boutique by design · ØRIONS"
      description="ORIONS ไม่ได้ตั้งใจโตด้วยการรับ Project ให้มากที่สุด — เราอยากโตด้วยคุณภาพของงาน ความสัมพันธ์กับ Client และความลึกของสิ่งที่เราสร้างร่วมกัน. Refinement cannot be mass-produced."
      path="/about"
    />

    {/* HERO — Boutique by design */}
    <section className="section-ink px-6 md:px-10 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-28">
        <SectionLabel label="About" />
        <Reveal delay={0.1} emphasis="lead">
          <h1 className="mt-8 h-display-lg max-w-[14ch]">
            Boutique <em className="text-foreground">by design.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div lang="th" className="mt-10 max-w-[680px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.85] text-foreground/80 space-y-4">
            <p>ORIONS ไม่ได้ตั้งใจโตด้วยการรับ Project ให้มากที่สุด</p>
            <p>เราอยากโตด้วยคุณภาพของงาน ความสัมพันธ์กับ Client และความลึกของสิ่งที่เราสร้างร่วมกัน</p>
            <p>เราจึงเลือกทำงานกับ Project จำนวนจำกัด เพื่อให้ทีมสามารถอยู่ใกล้กับงานได้จริง</p>
            <p className="text-foreground">ใกล้พอที่จะเข้าใจ · ใกล้พอที่จะ Challenge · ใกล้พอที่จะใส่ใจกับรายละเอียดที่คนอื่นอาจมองข้าม</p>
          </div>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-10 font-serif text-[20px] md:text-[28px] leading-[1.2] tracking-[-0.02em] text-foreground">
            Refinement cannot be mass-produced.
          </p>
        </Reveal>
      </div>
    </section>

    {/* WHAT MAKES ORIONS DIFFERENT */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="What makes ORIONS different" />
        <div className="mt-12 border-t border-foreground/20">
          {different.map((d) => (
            <Reveal key={d.n} emphasis="quiet">
              <div className="py-9 md:py-11 border-b border-foreground/12 grid grid-cols-[46px_1fr] md:grid-cols-[92px_0.9fr_1.1fr] gap-x-5 md:gap-x-10 gap-y-4 items-baseline">
                <span className="font-mono text-[11px] tracking-[0.14em] tabular-nums text-muted-foreground">{d.n}</span>
                <h3 className="font-display font-medium text-[22px] md:text-[30px] leading-[1.1] tracking-[-0.03em]">{d.t}</h3>
                <div lang="th" className="col-span-2 md:col-span-1 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.85] text-foreground/80 space-y-3">
                  {d.b.map((x) => <p key={x}>{x}</p>)}
                  {d.line && <p className="font-serif text-[16px] md:text-[18px] leading-[1.35] tracking-[-0.01em] text-foreground">{d.line}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* FOUNDER'S NOTE */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Founder's note" />
        <Reveal delay={0.05}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
            <Picture
              data={founder}
              alt="Ratthakan Suwanphakdee — Founder & Creative Director, ØRIONS"
              className="w-44 h-56 md:w-60 md:h-[19rem] rounded-none object-cover object-top shrink-0"
            />
            <div>
              <div aria-hidden className="font-serif text-foreground text-[56px] md:text-[80px] leading-[0.4] select-none">“</div>
              <blockquote lang="th" className="mt-5 font-thai text-[22px] md:text-[34px] leading-[1.45] thai-wrap text-foreground max-w-[42ch]">
                ผมเริ่ม ØRIONS เพราะเชื่อว่าแบรนด์ที่ดีไม่ต้องดังที่สุด — แค่คมพอที่คนจะจำได้เอง. เราจะบอกตรง ๆ เสมอ — ทั้งตอนที่มันใช่ และตอนที่ยังไม่พร้อม.
              </blockquote>
              <div className="mt-8">
                <p lang="th" className="font-thai text-[16px] font-medium text-foreground">รัฐกันต์ สุวรรณภักดี</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Ratthakan Suwanphakdee · Founder &amp; Creative Director</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WHAT WE ARE NOT */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="What we are not" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 border-t border-foreground/20">
          {notThis.map((x) => (
            <Reveal key={x.t} emphasis="quiet">
              <div className="h-full py-8 md:py-10 border-b border-foreground/12 md:odd:pr-10 md:even:pl-10 md:even:border-l md:even:border-l-foreground/12">
                <h3 className="font-display font-medium text-[20px] md:text-[26px] leading-[1.15] tracking-[-0.03em]">{x.t}</h3>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.8] text-muted-foreground max-w-[44ch]">{x.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHO WE WORK BEST WITH */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionLabel label="Who we work best with" />
        </div>
        <div className="md:col-span-8">
          <Reveal emphasis="lead">
            <h2 lang="th" className="h-display-md max-w-[22ch] thai-wrap">
              ORIONS เหมาะกับแบรนด์ที่ไม่ได้ต้องการแค่ “ดูดีขึ้น” แต่ต้องการเข้าใจตัวเองชัดขึ้น
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-10 border-t border-foreground/12">
              {bestWith.map((b) => (
                <li key={b} lang="th" className="py-4 border-b border-foreground/12 font-thai text-[15px] md:text-[17px] leading-[1.7] text-foreground/90">{b}</li>
              ))}
            </ul>
            <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              และแบรนด์ที่ให้คุณค่ากับ <span className="text-foreground">Thinking · Taste · Craft · Detail · และ Long-term Brand Value</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* BRAND PRINCIPLES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Brand principles" />
        <div className="mt-12 border-t border-foreground/20">
          {principles.map((p) => (
            <Reveal key={p.t} emphasis="quiet">
              <div className="py-7 md:py-9 border-b border-foreground/12 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-3 md:gap-10 items-baseline">
                <h3 className="font-display font-medium text-[22px] md:text-[32px] leading-[1.05] tracking-[-0.035em]">{p.t}</h3>
                <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.8] text-muted-foreground max-w-[52ch]">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Contact"
      title={<>Have a story <em className="text-foreground">worth refining?</em></>}
      primary={{ label: "Talk to ORIONS", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default About;
