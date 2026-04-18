import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const heroProjects = [
  { n: "01", name: "พรรคประชาธิปัตย์", url: "democrat.or.th", body: "ต้องการสร้างการเมืองเชิงสร้างสรรค์ ผ่านกิจกรรมนอกการหาเสียง", challenge: "แรงต้านทางการเมืองฝั่งซ้าย / ข้อจำกัดของกฎหมายเลือกตั้ง" },
  { n: "02", name: "GCOO", url: "gcoo.in.th", body: "เปิดตลาดในไทยด้วย localization และ payment gateway", challenge: "การปรับโมเดลให้เข้ากับพฤติกรรมคนไทย" },
  { n: "03", name: "MY HOTEL", url: "pzentsmart.com", body: "วางตำแหน่งเป็น Smart Hotel OTA รายแรกของไทย", challenge: "การดีลกับผู้ให้บริการให้เกิดความเชื่อถือ" },
  { n: "04", name: "HONG MOVE", url: "hongmove.co.th", body: "ออกตลาด taxi VIP EV ใน AOT พร้อมวางระบบความเป็นไปได้", challenge: "ความหลากหลายทางภาษา รองรับมาลายู จีน อาราบิก ฮินดี" },
];

const more = [
  { n: "05", name: "HEAVY ORGANIZER", url: "heavyorganizer.com", body: "Green music festival with low carbon footprint", challenge: "การสร้างความรู้และความร่วมมือจากผู้คนร่วมงาน" },
  { n: "06", name: "เขาใหญ่ คันทรีคลับ", url: "khaoyaicc.com", body: "ปรับโฉมประสบการณ์สนามกอล์ฟดั้งเดิมสู่พรีเมียม", challenge: "การรักษามรดกของแบรนด์ในขณะที่ขยายฐานลูกค้าใหม่" },
  { n: "07", name: "RTAF · กองทัพอากาศ", url: "rtaf.mi.th", body: "ปรับภาพลักษณ์ผ่าน high-end production", challenge: "fake news / การสื่อสารโดยต้องรักษาความลับทางราชการ" },
  { n: "08", name: "พรรคพลวัต", url: "—", body: "พรรคใหม่ที่ต้องสื่อสารจุดยืนภายใต้เวลาจำกัด", challenge: "ไม่มีฐานเสียงเดิม / ข้อจำกัดของกฎหมายเลือกตั้ง" },
];

const commercials = [
  { name: "LEICESTER CITY", category: "Sports brand" },
  { name: "BURIRAM ESPORT", category: "Esports campaign" },
  { name: "AUDI THAILAND", category: "Automotive premium" },
  { name: "SIRIRAJ HOSPITAL", category: "Healthcare" },
];

const longform = [
  { name: "เถื่อน Travel", category: "Documentary series" },
  { name: "The Upgrade", category: "Series & variety" },
  { name: "เพลงลำคำเขื่อนแก้ว", category: "Music & creative" },
  { name: "เกิดแก่เจ็บโต", category: "Thai PBS feature" },
  { name: "Finding the Last Note", category: "Documentary" },
];

const Work = () => (
  <div>
    <SEO title="Work — ØRIONS" description="Selected projects across politics, mobility, hospitality, healthcare and culture." path="/work" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="SELECTED WORK"
      title="Sharper ideas. Real outcomes."
      subtitle="งานที่เราเลือกมาเพื่อแสดงวิธีคิดของ ØRIONS — ตั้งแต่การวางกลยุทธ์ การออกแบบการสื่อสาร ไปจนถึงงานผลิตที่สร้างผลลัพธ์จริง"
    />

    {/* HERO PROJECTS */}
    <section className="px-6 md:px-10 pb-20 md:pb-28">
      <SectionHeader left="02 — HERO PROJECTS" right="four featured cases" />

      <div className="mt-12 border-t border-foreground">
        {heroProjects.map((p) => (
          <Reveal key={p.n}>
            <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 border-b border-border-soft group">
              <div className="md:col-span-1">
                <div className="font-display text-[20px]">{p.n}</div>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-[28px] md:text-[40px] leading-[0.95] tracking-[-0.02em]">{p.name}</h3>
                <a href={`https://${p.url}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 index-badge text-muted-foreground hover:text-foreground transition-colors">
                  {p.url} <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="md:col-span-3">
                <div className="index-badge text-muted-foreground">BRIEF</div>
                <p className="mt-3 text-[14px] leading-[1.65] font-thai">{p.body}</p>
              </div>
              <div className="md:col-span-3">
                <div className="index-badge text-muted-foreground">CHALLENGE</div>
                <p className="mt-3 text-[14px] leading-[1.65] font-thai text-muted-foreground">{p.challenge}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* MORE PROJECTS */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-surface border-y border-foreground">
      <SectionHeader left="03 — MORE SELECTED" right="across industries" />

      <div className="mt-12 border-t border-foreground">
        {more.map((p) => (
          <Reveal key={p.n}>
            <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 border-b border-border-soft">
              <div className="md:col-span-1">
                <div className="font-display text-[20px]">{p.n}</div>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-[24px] md:text-[32px] leading-[0.95] tracking-[-0.02em]">{p.name}</h3>
                <span className="mt-3 inline-block index-badge text-muted-foreground">{p.url}</span>
              </div>
              <div className="md:col-span-3">
                <div className="index-badge text-muted-foreground">BRIEF</div>
                <p className="mt-3 text-[14px] leading-[1.65] font-thai">{p.body}</p>
              </div>
              <div className="md:col-span-3">
                <div className="index-badge text-muted-foreground">CHALLENGE</div>
                <p className="mt-3 text-[14px] leading-[1.65] font-thai text-muted-foreground">{p.challenge}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* COMMERCIALS */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="04 — SOCIAL & COMMERCIALS" />
      <div className="mt-8 max-w-[700px]">
        <Reveal>
          <p className="text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground font-thai">
            เราพาแนวคิดไปสู่ execution ได้จริงในงาน social-led และ commercial ที่ต้องการทั้งภาพลักษณ์และคุณภาพของการผลิต
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground border border-foreground">
        {commercials.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <div className="bg-background p-5 md:p-6 aspect-[4/5] flex flex-col justify-between">
              <div className="index-badge text-muted-foreground">{c.category}</div>
              <h3 className="font-display text-[18px] md:text-[22px] leading-[1.05]">{c.name}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* LONG-FORM */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-surface border-y border-foreground">
      <SectionHeader left="05 — ENTERTAINMENT & LONG-FORM" />
      <div className="mt-8 max-w-[700px]">
        <Reveal>
          <p className="text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground font-thai">
            สารคดี ซีรีส์ และผลงานเล่าเรื่องที่ฟังเสียงของคนจริง — ไม่ใช่แค่งาน production
          </p>
        </Reveal>
      </div>

      <div className="mt-12 border-t border-foreground">
        {longform.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.05}>
            <article className="grid grid-cols-12 gap-6 py-6 md:py-8 border-b border-border-soft">
              <div className="col-span-1 font-display text-[14px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-7 md:col-span-6">
                <h3 className="font-display text-[20px] md:text-[28px] leading-[1.1] font-thai font-medium">{l.name}</h3>
              </div>
              <div className="col-span-4 md:col-span-5 self-center">
                <div className="index-badge text-muted-foreground">{l.category}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="06 — NEXT" />
      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[64px] leading-[0.95] tracking-[-0.03em] max-w-[800px]">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-90 transition-opacity">
            Start a conversation <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Work;
