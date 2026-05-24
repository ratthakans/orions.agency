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
