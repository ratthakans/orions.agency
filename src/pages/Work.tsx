import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const heroProjects = [
  { name: "HONGMOVE", category: "APPLIED UTILITY", body: "เปลี่ยนความซับซ้อนให้ดูง่าย ระบบสื่อสาร Seamless สำหรับ Taxi VIP", impact: "+25%", impactLabel: "CONVERSION CLARITY" },
  { name: "RTAF", category: "APPLIED IMAGE", body: "ยึดความน่าเชื่อถือคืนมา ปรับโฉมภาพลักษณ์ผ่าน High-end Production", impact: "2X", impactLabel: "ENGAGEMENT QUALITY" },
  { name: "KHAO YAI", category: "APPLIED AESTHETIC", body: "ยกระดับด้วยรสนิยม เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", impact: "30%", impactLabel: "DECISION SPEED" },
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
  { name: "Audi Thailand", category: "Automotive Premium", body: "งานโปรดักชันที่สะท้อนภาพลักษณ์พรีเมียมระดับโลก" },
];

const longform = [
  { name: "เถื่อน Travel · เกิดแก่เจ็บโต · ท่วงทำนองที่เลือนหาย", category: "DOCUMENTARY", body: "สารคดีที่ฟังเสียงของคนจริง" },
  { name: "The Upgrade", category: "SERIES & VARIETY", body: "รายการที่ผสานความบันเทิงกับความรู้" },
  { name: "เพลงลำคำเขื่อนแก้ว", category: "MUSIC & CREATIVE", body: "งานดนตรีที่หยั่งรากกับวัฒนธรรม" },
];

const Work = () => (
  <div>
    <SEO title="Work — ØRIONS" description="Applied Creative in action. Selected projects across mobility, hospitality, healthcare and culture." path="/work" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="SELECTED WORK"
      title="Applied Creative in action."
      subtitle="งานที่เราเลือกมาเพื่อแสดง 'วิธีคิด' ของ ØRIONS — ตั้งแต่การวางกลยุทธ์ การออกแบบการสื่อสาร ไปจนถึงงานผลิตที่สร้างผลลัพธ์จริง"
    />

    {/* HERO PROJECTS */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="HERO PROJECTS" /></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="group bg-background border border-border ring-grad-hover transition-all duration-300">
                <div className="aspect-[16/10] bg-grad-radial relative overflow-hidden after:absolute after:inset-0 after:bg-background/55 group-hover:after:bg-background/35 after:transition-colors" />
                <div className="p-6 md:p-8">
                  <div className="label-mono text-grad-soft">{p.category}</div>
                  <h3 className="mt-4 font-display text-[26px]">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">{p.body}</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-display text-grad text-[36px] leading-none">{p.impact}</div>
                    <div className="mt-2 label-mono text-muted-foreground">{p.impactLabel}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* SELECTED */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="03" label="ACROSS INDUSTRIES" /></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedWorks.map((w, i) => (
            <Reveal key={w.name} delay={(i % 2) * 0.1}>
              <article className="group flex border border-border ring-grad-hover transition-colors">
                <div className="w-[40%] aspect-square bg-grad-radial relative overflow-hidden shrink-0 after:absolute after:inset-0 after:bg-background/55" />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="label-mono text-grad-soft">{w.category}</div>
                  <h3 className="mt-3 font-display text-[22px] md:text-[26px]">{w.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground font-thai">{w.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* COMMERCIALS */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="04" label="SOCIAL & COMMERCIALS" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display italic text-[32px] md:text-[56px] leading-[1] font-light">
            High-Impact Digital Content.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {commercials.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <article className="group bg-background border border-border ring-grad-hover transition-colors">
                <div className="aspect-video bg-grad-radial relative overflow-hidden flex items-center justify-center before:absolute before:inset-0 before:bg-background/55">
                  <div className="relative z-10 w-12 h-12 border border-foreground/60 flex items-center justify-center group-hover:bg-foreground transition-colors">
                    <Play className="w-4 h-4 text-foreground group-hover:text-background" fill="currentColor" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="label-mono text-grad-soft">{c.category}</div>
                  <h3 className="mt-3 font-display text-[18px]">{c.name}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground font-thai">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* LONG-FORM */}
    <section className="px-6 md:px-12 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="05" label="ENTERTAINMENT & LONG-FORM" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display italic text-[32px] md:text-[56px] leading-[1] font-light">
            Mastery in Storytelling.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {longform.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <article className="group bg-surface border border-border ring-grad-hover transition-colors">
                <div className="aspect-video bg-grad-radial relative overflow-hidden flex items-center justify-center before:absolute before:inset-0 before:bg-background/55">
                  <div className="relative z-10 w-12 h-12 border border-foreground/60 flex items-center justify-center group-hover:bg-foreground transition-colors">
                    <Play className="w-4 h-4 text-foreground group-hover:text-background" fill="currentColor" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="label-mono text-grad-soft">{l.category}</div>
                  <h3 className="mt-3 font-display text-[16px] font-thai leading-[1.35]">{l.name}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground font-thai">{l.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[56px] leading-[1]">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Work;
