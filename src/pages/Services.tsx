import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const services = [
  {
    n: "01",
    title: "Brand Direction",
    body: "วาง narrative และ positioning ที่ชัด เพื่อให้แบรนด์ยืนตรงจุดและสื่อสารได้สม่ำเสมอ",
    items: ["Brand Narrative", "Positioning", "Messaging", "Brand Voice", "Campaign Planning"],
    outcomes: ["ทีมและผู้บริหารเห็นภาพเดียวกัน", "ลดเวลา decision-making", "งบการตลาดถูกใช้ตรงเป้า"],
  },
  {
    n: "02",
    title: "Creative Direction",
    body: "ออกแบบ campaign และ content system ที่หยุดสายตา และทำงานได้ต่อเนื่องในทุกช่องทาง",
    items: ["Campaign Concepts", "Content Systems", "Copywriting", "Creative Direction", "Film & Production"],
    outcomes: ["Engagement quality เพิ่มขึ้น", "Cost per result ลดลง", "Brand recall ที่วัดผลได้"],
  },
  {
    n: "03",
    title: "Digital Experience",
    body: "ออกแบบ touchpoint ดิจิทัลให้แปลงความสนใจเป็นการกระทำ ตั้งแต่หน้าเว็บถึง flow การใช้งาน",
    items: ["Website Direction", "UX/UI", "Landing Pages", "Experience Design", "Touchpoint Design"],
    outcomes: ["Conversion clarity ดีขึ้น", "User journey ลื่นไหล", "Touchpoint ที่จดจำได้"],
  },
  {
    n: "04",
    title: "Film & Production",
    body: "งานผลิตคุณภาพระดับสากล — brand film, commercial, documentary ที่สร้างภาพจำที่ทรงพลัง",
    items: ["Brand Film & TVC", "Commercial Production", "Documentary", "Photography", "Post-production"],
    outcomes: ["ภาพลักษณ์ premium ที่จดจำ", "Asset ที่ใช้ได้ข้ามช่องทาง", "ROI ผ่าน brand equity"],
  },
];

const Services = () => (
  <div>
    <SEO title="Services — ØRIONS" description="Brand Direction, Creative Direction, Digital Experience, Film & Production. Four practices, one outcome: clarity." path="/services" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="WHAT WE DO"
      title="Four practices. One outcome: clarity."
      subtitle="ØRIONS ทำงานครบทั้งกลยุทธ์ การสื่อสาร ประสบการณ์ดิจิทัล และงานผลิต — ทุกบริการถูกออกแบบให้ส่งมอบผลลัพธ์ที่วัดผลได้"
    />

    <section className="px-6 md:px-10 pb-10">
      <div className="border-t border-foreground">
        {services.map((s) => (
          <Reveal key={s.n}>
            <article className="py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 border-b border-border-soft">
              <header className="lg:col-span-4">
                <div className="font-display text-[80px] md:text-[120px] leading-[0.85] tracking-[-0.04em]">
                  {s.n}
                </div>
                <h2 className="mt-6 font-display text-[26px] md:text-[36px] leading-[1] tracking-[-0.02em]">
                  {s.title}
                </h2>
                <p className="mt-6 text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground font-thai max-w-[360px]">
                  {s.body}
                </p>
              </header>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="border-t border-foreground pt-3">
                    <span className="index-badge font-bold">CAPABILITIES</span>
                  </div>
                  <ul className="mt-5 space-y-2 text-[14px] font-thai">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-3 border-b border-border-soft pb-2">
                        <span className="text-muted-foreground">·</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="border-t border-foreground pt-3">
                    <span className="index-badge font-bold">OUTCOMES</span>
                  </div>
                  <ul className="mt-5 space-y-3 text-[14px] font-thai">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex gap-3">
                        <span className="font-display text-[12px] mt-[2px]">→</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PROCESS */}
    <section className="px-6 md:px-10 py-20 md:py-32 bg-surface border-y border-foreground">
      <SectionHeader left="02 — THE BLUEPRINT" right="ORIONS · 6 stages" />
      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[52px] leading-[0.95] tracking-[-0.03em] max-w-[800px]">
            Six stages, one outcome.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-px bg-foreground border border-foreground">
        {[
          { l: "O", n: "Observe", b: "อ่านสิ่งที่เกิดขึ้นจริง" },
          { l: "R", n: "Reframe", b: "ตีโจทย์ใหม่ให้คม" },
          { l: "I", n: "Imagine", b: "สร้างความเป็นไปได้" },
          { l: "O", n: "Orchestrate", b: "ประกอบ solution" },
          { l: "N", n: "Nurture", b: "Refine ต่อเนื่อง" },
          { l: "S", n: "Scale", b: "ขยายผลที่เวิร์ก" },
        ].map((b, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="bg-background p-5 md:p-6 h-full min-h-[180px]">
              <div className="font-display text-[64px] md:text-[80px] leading-[0.85]">{b.l}</div>
              <div className="mt-4 font-display text-[14px]">{b.n}</div>
              <p className="mt-2 text-[12px] leading-[1.55] text-muted-foreground font-thai">{b.b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="03 — READY?" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-display text-[36px] md:text-[64px] leading-[0.95] tracking-[-0.03em]">
              Have a problem<br />worth solving?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[480px] text-[15px] leading-[1.7] text-muted-foreground font-thai">
              เริ่มจากการคุยสั้นๆ เราจะช่วยชี้จุดตันและทางรอดให้ภายใน 60 นาที
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-90 transition-opacity">
              Start a project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
