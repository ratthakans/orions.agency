import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import CTABand from "@/components/CTABand";

// Seed notes — the studio's own point of view. Expand / add real entries over time.
const notes = [
  {
    n: "01",
    date: "2026",
    title: "ข้อจำกัดคือบรีฟ",
    dek: "ทำไมงานที่ดีที่สุดถึงเกิดใต้กรอบ ไม่ใช่ในที่ที่ทำอะไรก็ได้",
    body: "เวลามีอิสระไม่จำกัด คนมักจมอยู่กับตัวเลือก · พอมีกรอบ — งบ กฎหมาย เวลา ภาพจำเดิม — มันบังคับให้เราเลือก และการเลือกคือจุดเริ่มของไอเดียที่คม. เราเลยไม่หนีข้อจำกัด เราอ่านมันเป็นบรีฟ แล้ว refine เรื่องที่จริงจนลงในกรอบนั้นได้พอดี.",
  },
  {
    n: "02",
    date: "2026",
    title: "ทำไมเราถึงบอกลูกค้าว่า ‘ยังไม่รับ’",
    dek: "ความซื่อสัตย์สำคัญกว่าการรับทุกงาน",
    body: "ถ้าของหรือ unit economics ยังไม่พร้อม การเร่งทำแบรนด์มักทำให้เจ็บเร็วขึ้น · เราเลือกบอกตรง ๆ แล้วรอจนกว่าจะพร้อม — เพราะงานที่เราอยากให้คนจำ คืองานที่อยู่ได้นาน ไม่ใช่กระแสที่ผ่านไป.",
  },
  {
    n: "03",
    date: "2026",
    title: "AI ทำให้เราเร็วขึ้น — แต่ไม่ได้คิดแทน",
    dek: "เครื่องมือเปลี่ยน หลักการไม่เปลี่ยน",
    body: "AI ช่วยให้เราทดสอบได้มากขึ้นและเร็วขึ้น · แต่การตัดสินใจว่าอะไรจริง อะไรคม และอะไรควรปล่อยออกไป — ยังเป็นงานของคน และคนยังเป็นผู้รับผิดชอบงานนั้น.",
  },
];

const Journal = () => (
  <div>
    <SEO
      title="Journal — Notes from the studio · ØRIONS"
      description="บันทึกมุมมองจากสตูดิโอ ORIONS — ว่าด้วยข้อจำกัด ความซื่อสัตย์ และการ refine เรื่องให้คม."
      path="/journal"
    />

    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16">
        <SectionLabel label="Journal" />
        <Reveal delay={0.1}>
          <div className="mt-10">
            <BadgeChip>Notes from the studio</BadgeChip>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 lang="th" className="mt-6 h-display-lg max-w-[16ch] thai-wrap">
            บันทึกจาก <em className="text-cinnabar">สตูดิโอ.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p lang="th" className="mt-8 max-w-[640px] font-serif text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            มุมมองสั้น ๆ เรื่องการทำแบรนด์ใต้ข้อจำกัด — สิ่งที่เราเชื่อ และวิธีที่เราทำงาน.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Point of view"
          title={<>สิ่งที่เรา <em className="text-cinnabar">เชื่อ.</em></>}
          intro="สามมุมมองที่อยู่เบื้องหลังวิธีทำงานของเรา."
          lang="th"
        />
        <div className="mt-12 grid grid-cols-1 gap-5">
          {notes.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <article className="card-soft grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 p-8 md:p-10">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  — {p.n}<br /><span className="text-cinnabar">{p.date}</span>
                </div>
                <div>
                  <h2 lang="th" className="h-display-sm max-w-[24ch]">{p.title}</h2>
                  <p lang="th" className="mt-3 font-serif text-[16px] md:text-[18px] text-cinnabar">{p.dek}</p>
                  <p lang="th" className="mt-6 font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.85] text-foreground/85 max-w-[64ch]">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="Brand audit"
      title={<>เห็นด้วยกับวิธีคิดนี้? <em className="text-cinnabar">เริ่มที่นี่.</em></>}
      subtitle="ตอบ 6 ข้อ · 1 นาที · ฟรี — แล้วเรานัดคุยผลให้."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="snow"
    />
  </div>
);

export default Journal;
