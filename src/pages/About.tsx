import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

const pains = [
  { n: "i.",   en: "ADHD Culture",     th: "สมาธิสั้นลงเหลือไม่กี่วินาที คนเลื่อนผ่านทุกอย่างที่ไม่สะกิดใจในวินาทีแรก" },
  { n: "ii.",  en: "AI Content Flood", th: "ฟีดถูกถมด้วยคอนเทนต์ AI หน้าตาเหมือนกัน — คนชาชิน และมองหาคอนเทนต์จริง" },
  { n: "iii.", en: "Ads Inflation",    th: "ค่าโฆษณาแพงขึ้นทุกวัน ผลลัพธ์น้อยลงทุกวัน — ยิง Ads ให้คอนเทนต์ไร้จิตวิญญาณ คือเผาเงินทิ้ง" },
];

const promises = [
  { n: "i.",   en: "Work we're proud of.",  th: "คิดก่อนทำ แก้ก่อนส่ง — ถ้าคุณรู้สึกว่ายังไม่ใช่ เราจะแก้จนกว่าจะใช่" },
  { n: "ii.",  en: "Always on time.",        th: "Content Calendar ของเดือนถัดไป จะอยู่ในมือคุณภายในวันที่ 25 ของเดือนปัจจุบัน เสมอ" },
  { n: "iii.", en: "Radically transparent.", th: "ทุกตัวเลข ทุก performance ทุกค่า ads — เปิดให้คุณเห็นทั้งหมด ไม่มีค่าคอมแอบแฝง" },
];

const pillars = [
  { sym: "i.",   en: "Craft",    th: "งานทุกชิ้นผ่านมือคน ไม่ใช่สายพาน — ตรวจสอบ กลั่นกรอง และส่งมอบเฉพาะชิ้นที่เราภูมิใจ" },
  { sym: "ii.",  en: "Strategy", th: "ทุกชิ้นมีเหตุผลที่อยู่ตรงนั้น — เริ่มจาก Data, ผ่าน Brand Voice, ไปสู่ Audience ที่ใช่" },
  { sym: "iii.", en: "Story",    th: "เรื่องเล่าที่ทำให้แบรนด์คุณถูกจดจำ — ไม่ใช่แค่ engagement แต่คือ long-term bond" },
];

const data = [
  { sym: "i.",   en: "ฟังคน",   th: "Audience Insights จาก Meta + Google + Social Listening — เพื่อรู้ว่าใครคือกลุ่มเป้าหมายจริง ไม่ใช่ที่เราคิดว่าใช่" },
  { sym: "ii.",  en: "ฟังตลาด", th: "Competitor Content Analysis + Trend Mapping ใน niche ของคุณ — เพื่อรู้ว่าคู่แข่งพูดอะไร และเราต้องพูดต่างยังไง" },
  { sym: "iii.", en: "ฟังตัวเลข", th: "Performance Loop ที่ปรับ creative ตาม data จริง — ทุกชิ้นที่ส่งไป กลับมาเป็น insight สำหรับชิ้นต่อไป" },
];

const beyond = [
  { sym: "i.",   en: "Signature Campaign", th: "Big idea ที่ทำงานข้าม 6:3:1 Loop ทั้งหมด — เปลี่ยนเดือนธรรมดา ให้เป็นช่วงเวลาที่แบรนด์เป็นที่จดจำ" },
  { sym: "ii.",  en: "Audience Lifecycle", th: "จาก awareness → trust → purchase → loyalty — แต่ละ stage เราออกแบบ message ที่ใช่" },
  { sym: "iii.", en: "Long-term Bond",     th: "เพราะการได้ลูกค้าใหม่ ต้นทุน 5 เท่าของรักษาลูกค้าเก่า — เราสร้างความสัมพันธ์ที่อยู่ได้ยาว" },
];

const divisionsFull = [
  {
    n: "Ø Boutique",
    role: "Brand-first identity & strategy",
    pain: "Generic positioning · weak narrative · unmemorable identity",
    output: "Brand identity · premium packaging · hero brand campaign",
  },
  {
    n: "Ø Digital & Performance",
    role: "Data-driven content & paid media",
    pain: "Ad spend that doesn't convert · scattered funnel · no baseline",
    output: "Social retainer · content machine · performance media · commerce ops",
  },
  {
    n: "Ø Production",
    role: "Commercial-grade creative crew",
    pain: "Inconsistent quality across vendors · escalating costs",
    output: "Commercial crew · post-production suite · raw footage system",
  },
];

const coreStrengths = [
  { n: "01", en: "A connected, seamless ecosystem", th: "ที่เดียวครบ — Creative, Strategy, Production, Consulting ไม่ต้องคุมหลาย vendor หรือเริ่มนับหนึ่งใหม่ทุกครั้ง" },
  { n: "02", en: "Craft, made measurable",          th: "The ØRIONS Standard — งานทุกชิ้นมีหลักฐานและตัวเลขเทียบกับ baseline ก่อนเริ่ม และ track หลัง launch · ไม่ใช้การเดาทาง" },
  { n: "03", en: "The connected senior crew only",  th: "นำโดย 2 co-founders + cast ซีเนียร์ 8–12 คนต่อโปรเจกต์ · Selection over availability — รับงานน้อยเพื่อผลลัพธ์ที่ดีที่สุด" },
];

const promiseList = [
  { n: "i.",   en: "30-day money-back",       th: "ไม่พอใจใน 30 วันแรก คืนเงินเต็มจำนวน ไม่มีคำถาม" },
  { n: "ii.",  en: "Free month four",          th: "ถ้าไม่ถึงเป้าที่ตกลงร่วมกัน เราทำต่อให้ฟรีในเดือนที่ 4" },
  { n: "iii.", en: "Free adjustment chapter",  th: "เปิด adjustment chapter แก้งานอย่างมีระบบจนกว่าจะใช่" },
  { n: "iv.",  en: "Free reshoot",             th: "ถ้าฟุตเทจไม่ผ่านมาตรฐาน เราถ่ายซ่อมให้ฟรี" },
  { n: "v.",   en: "Full IP transfer",         th: "ลิขสิทธิ์งานทั้งหมดเป็นของคุณหลังชำระเงินครบ" },
];

const screeningFit = [
  "มีของพร้อมขาย — สินค้า/บริการพร้อม scale ไม่ใช่ยังอยู่ในขั้น validate",
  "ต้องการสเกลยอดแบบวัดผลได้ ไม่ใช่แค่คอนเทนต์สวย ๆ ที่ไม่มีตัวเลขรองรับ",
  "ต้องการทีมซีเนียร์เสริมทัพระยะยาว ไม่ใช่งานชิ้นเดียวจบ",
];

const screeningNotFit = [
  "ยังไม่มีของพร้อมขาย หรือยังไม่ผ่านขั้น product-market fit",
  "คาดหวังผลลัพธ์ใน 14 วัน — craft ที่ honest ต้องใช้เวลาอย่างน้อย 90 วัน",
  "งาน Wedding / Personal / Family event",
  "อุตสาหกรรมที่เราไม่รับ: pharmaceuticals · fast fashion mass · gambling · MLM",
];

// Team — roles only for now (names kept in comments for future reference)
const team = [
  { role: "CEO" },                    // พี่น้ำ
  { role: "Founder" },                // พี่เตอร์
  { role: "Creative Director" },      // พี่แมน
  { role: "Marketing Director" },     // พี่เรย์
  { role: "Director" },               // พี่โจ
  { role: "Creative" },               // พี่รมมี่
  { role: "Ads Specialist" },         // พี่เต้
  { role: "Art Director" },           // พี่โซนี่
  { role: "Post Supervisor" },        // พี่ชุ
  { role: "Editor" },                 // พี่สตั้น
  { role: "Project Coordinator" },    // พี่ทีม
  { role: "Social Media Manager" },   // พี่เปอร์
  { role: "DOP" },                    // พี่เต
  { role: "Project Manager" },        // พี่น้ำฝน
  { role: "Admin" },                  // พี่เอธ
];

const About = () => (
  <div>
    <SEO
      title="About — ØRIONS"
      description="What we believe, and how we work. The new landscape, our promise, three pillars, data-refined creative, and the 6:3:1 system."
      path="/about"
    />

    {/* 01 — MANIFESTO */}
    <section className="bg-background text-foreground min-h-[88vh] flex flex-col border-b border-foreground/15">
      <div className="px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full">
        <SectionLabel index="01" label="Manifesto" />
        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl">
            The New <em className="italic text-cinnabar">Landscape.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 font-serif italic text-[16px] md:text-[20px] text-foreground/60">
            Independent editorial studio. Bangkok. — Boutique Creative Agency.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[640px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-foreground/70">
            โลกออนไลน์วันนี้ ขับเคลื่อนด้วย 3 ความจริงที่ทำให้ Generic Content ตายไปแล้ว
          </p>
        </Reveal>
      </div>

      <div className="px-6 md:px-10 pb-24 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-foreground/20 pt-12">
          {pains.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.08}>
              <div>
                <div className="font-serif italic text-cinnabar text-[18px] mb-6">{p.n}</div>
                <h3 className="font-serif text-[28px] leading-[1.1] tracking-[-0.02em]">{p.en}</h3>
                <p className="mt-4 font-thai text-[15px] leading-[1.65] text-foreground/65">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 02 — OUR PROMISE */}
    <section className="bg-background text-foreground border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionLabel index="02" label="Our Promise" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[20ch]">
            แทนที่จะการันตีเป็นข้อๆ — เราขอให้คำมั่นใน <em className="italic text-cinnabar">สิ่งที่สำคัญ.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-foreground/20 pt-12">
          {promises.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div>
                <div className="font-serif italic text-cinnabar text-[18px] mb-6">{p.n}</div>
                <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.015em]">{p.en}</h3>
                <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — HOW WE REFINE (Pillars + Data) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="03" label="How We Refine" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg">
            สาม <em className="italic text-cinnabar">เสาหลัก.</em><br />หนึ่ง process.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[720px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            Craft · Strategy · Story — สามเสาหลักที่ขับเคลื่อนทุกชิ้นงาน. และก่อนทุกชิ้นจะเริ่ม เราฟังก่อน เพราะ "Refined" ไม่ใช่แค่ภาพสวย แต่คือชิ้นงานที่ผ่านการกลั่นจากเสียงจริงของคนที่ใช่
          </p>
        </Reveal>

        {/* Pillars — full cards (matches Data/Beyond grid pattern) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {pillars.map((p, i) => (
            <Reveal key={p.en} delay={i * 0.06}>
              <div className={`p-10 md:p-12 bg-background h-full ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[26px] leading-none">{p.sym}</div>
                <h3 className="mt-10 font-serif text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em]">{p.en}</h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Data — full cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {data.map((d, i) => (
            <Reveal key={d.en} delay={i * 0.08}>
              <div className={`p-10 md:p-12 bg-background ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[26px] leading-none">{d.sym}</div>
                <h3 className="mt-10 font-serif text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em]">{d.en}</h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{d.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — BEYOND CONTENT */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="04" label="Beyond Content" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[22ch]">
            เราไม่ได้สร้างแค่คอนเทนต์ —<br />
            เราออกแบบ <em className="italic text-cinnabar">Brand Journey</em> ทั้งสาย.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[720px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            Content เป็นจุดเริ่ม แต่ความสำเร็จของแบรนด์ คือเส้นทางทั้งสายที่ทำงานต่อเนื่อง ตั้งแต่คนเห็นครั้งแรก จนกลายเป็นแฟนพันธุ์แท้
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {beyond.map((b, i) => (
            <Reveal key={b.en} delay={i * 0.08}>
              <div className={`p-10 md:p-12 ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[26px] leading-none">{b.sym}</div>
                <h3 className="mt-10 font-serif text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em]">{b.en}</h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{b.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — DIVISIONS (Section 06 of master blueprint) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="05" label="Divisions" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[22ch]">
            สามทีม · แบรนด์เดียว · <em className="italic text-cinnabar">Account Director คนเดียว.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[680px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            สำหรับลูกค้าฝั่ง Creative Agency — เลือกใช้ทีมเดียว หรือใช้ร่วมกันเป็น ecosystem ก็ได้ ทุกอย่างเชื่อมต่อกันทันที ไม่ต้องเริ่มนับหนึ่งใหม่.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-foreground/20">
          {divisionsFull.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.07}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.4fr] gap-3 md:gap-10 items-baseline py-8 md:py-10 border-b border-foreground/20">
                <h3 className="font-serif text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.015em] italic text-cinnabar">{d.n}</h3>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2">— Pain solved</div>
                  <p className="font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/85">{d.pain}</p>
                  <div className="mt-5 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2">— Output</div>
                  <p className="font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/85">{d.output}</p>
                </div>
                <p className="font-serif italic text-[18px] md:text-[22px] leading-[1.4] text-foreground/80">{d.role}.</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 border-l-2 border-cinnabar pl-6 md:pl-8 max-w-[760px]">
            <p className="font-serif italic text-[20px] md:text-[26px] leading-[1.4] tracking-[-0.01em]">
              <em className="text-cinnabar">Brand-first, not sales-first.</em> เริ่มจากตัวตน → แล้วค่อยเร่งยอด เพราะเร่งยอดบนแบรนด์ที่ไม่ชัด = เผาเงิน.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 06 — CORE STRENGTHS */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="06" label="Why ØRIONS" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[22ch]">
            ไม่ใช่อีกหนึ่งเอเจนซี่ <em className="italic text-cinnabar">ทั่วไป.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {coreStrengths.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="bg-background p-10 md:p-12 h-full">
                <div className="font-serif italic text-cinnabar text-[48px] md:text-[64px] leading-none tabular-nums">{s.n}</div>
                <h3 className="mt-8 font-serif text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.015em]">{s.en}</h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{s.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 07 — THE PROMISE */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="07" label="The Promise" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[22ch]">
            We put <em className="italic text-cinnabar">skin in the game.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[680px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            เราเดิมพันที่ความสัมพันธ์ระยะยาว — ไม่ทิ้งงานไว้เป็นไฟล์สวย ๆ ที่ไม่มีใครใช้.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-foreground/20">
          {promiseList.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr_1.6fr] gap-6 md:gap-10 items-baseline py-7 md:py-8 border-b border-foreground/20">
                <span className="font-serif italic text-cinnabar text-[20px] md:text-[22px] w-10 shrink-0">{p.n}</span>
                <h3 className="font-serif text-[20px] md:text-[26px] leading-[1.15] tracking-[-0.015em]">{p.en}</h3>
                <p className="font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{p.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 08 — SCREENING */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="08" label="Who It's For" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[24ch]">
            แบรนด์ที่ <em className="italic text-cinnabar">เหมาะ</em> และยังไม่เหมาะร่วมงานกัน.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border border-foreground/20">
          <Reveal>
            <div className="bg-background p-10 md:p-12 h-full border-b md:border-b-0 md:border-r border-foreground/20">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3">
                <span className="block w-6 h-px bg-cinnabar" />
                เหมาะร่วมงานกัน
              </div>
              <ul className="mt-8 space-y-5">
                {screeningFit.map((t, i) => (
                  <li key={i} className="flex gap-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-foreground/85 border-t border-foreground/15 pt-5 first:border-0 first:pt-0">
                    <span className="font-serif italic text-cinnabar shrink-0">→</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-background p-10 md:p-12 h-full">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
                <span className="block w-6 h-px bg-muted-foreground" />
                ยังไม่เหมาะ
              </div>
              <ul className="mt-8 space-y-5">
                {screeningNotFit.map((t, i) => (
                  <li key={i} className="flex gap-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-foreground/70 border-t border-foreground/15 pt-5 first:border-0 first:pt-0">
                    <span className="font-mono text-muted-foreground shrink-0">×</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 border-l-2 border-cinnabar pl-6 md:pl-8 max-w-[760px]">
            <p className="font-serif italic text-[18px] md:text-[22px] leading-[1.5] tracking-[-0.005em]">
              หากประเมินแล้วพบว่าระบบของเราไม่ใช่คำตอบที่ใช่ที่สุดสำหรับแบรนด์คุณ — <em className="text-cinnabar">เราจะบอกตรงๆ ตั้งแต่รอบ Discovery Call.</em>
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 05 — OUR TEAM */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <SectionLabel index="05" label="Our Team" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[22ch]">
            15 people. <em className="italic text-cinnabar">One studio.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[640px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            ทีมเล็ก ที่ผ่านมือคนทุกชิ้น — ตั้งแต่ idea, production, post และ delivery จบในที่เดียว
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-foreground/15 border border-foreground/15">
          {team.map((m, i) => (
            <Reveal key={`${m.role}-${i}`} delay={(i % 5) * 0.04}>
              <div className="bg-background p-6 md:p-7 h-full flex flex-col justify-between min-h-[140px]">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-serif text-[18px] md:text-[20px] leading-[1.15] tracking-[-0.015em]">
                    {m.role}
                  </div>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                    —
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:opacity-90 transition-opacity duration-300"
            >
              <span>See packages</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/diagnostic"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              Take The Diagnostic →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
