import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";

const process = [
  { n: "01", k: "Listen", week: "สัปดาห์ 1", d: "ฟังโจทย์และเงื่อนไข — audit แบรนด์, คู่แข่ง, และกรอบที่ต้องอยู่ในนั้น" },
  { n: "02", k: "Refine", week: "สัปดาห์ 2", d: "ตกผลึกเรื่องที่จริง + ทิศทาง — refine จนคมพอจะลงในกรอบได้" },
  { n: "03", k: "Make",   week: "สัปดาห์ 3", d: "ผลิตจริง — craft, ดีไซน์, คอนเทนต์ ภายใต้ทิศทางเดียวกัน" },
  { n: "04", k: "Launch", week: "สัปดาห์ 4", d: "ขึ้นจริง แล้ววัดผล — ทดสอบ, ปรับ, ทำต่อเนื่อง" },
];

const faqs = [
  { q: "ต้อง 4 สัปดาห์เสมอไหม?",
    a: "เป็นจังหวะตั้งต้น — งานเล็กเร็วกว่านั้น งานใหญ่อาจนานกว่า. สิ่งที่คงที่คือทำงานเป็นทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต ไม่มีไฟล์หลุดกลางทาง." },
  { q: "เลือกบริการเดียวได้ไหม หรือต้องครบทั้งสาม?",
    a: "เลือกเฉพาะที่ต้องการได้ — Brand Strategy, Creative Production หรือ Social. แต่จุดแข็งของเราคือทั้งสามอยู่ในทีมเดียว ทำให้เรื่องเดียวกันต่อเนื่องตั้งแต่ต้นจนจบ." },
  { q: "ไม่แน่ใจว่าควรเริ่มตรงไหน?",
    a: "ลองทำ Brand audit (Diagnostic) — ตอบ 18 คำถาม แล้วเราจะบอกว่าทางไหนเหมาะกับคุณที่สุด ตรงไปตรงมา ไม่มีข้อผูกมัด." },
];

const services = [
  {
    n: "01",
    en: "Brand Strategy",
    tag: "หาเรื่องที่ใช่",
    items: ["research", "positioning", "brand identity & CI", "naming", "brand narrative"],
  },
  {
    n: "02",
    en: "Creative Production",
    tag: "ทำให้เห็น",
    items: ["brand film", "ภาพถ่ายโปรดักต์ / อาหาร / พอร์เทรต", "คอนเทนต์", "key visual & design"],
  },
  {
    n: "03",
    en: "Social Media Marketing",
    tag: "ทำให้ดังและวัดได้",
    items: ["content + community", "ยิงแอด Meta / TikTok / Google / LINE", "A/B testing", "performance report"],
  },
];

// Click-to-expand list of the three services
const ServicesAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-foreground/20">
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={s.n} className="border-b border-foreground/20">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group w-full text-left grid grid-cols-[52px_1fr_auto] md:grid-cols-[120px_1fr_auto] gap-5 md:gap-12 items-center py-8 md:py-11"
            >
              <div className="font-serif italic text-cinnabar text-[34px] md:text-[60px] leading-none tabular-nums">{s.n}</div>
              <div>
                <h2 className="text-[24px] md:text-[40px] leading-[1.0] tracking-[-0.03em] font-semibold">{s.en}</h2>
                <div lang="th" className="mt-2 font-serif italic text-cinnabar text-[16px] md:text-[22px]">{s.tag}</div>
              </div>
              <span className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <Plus className="w-6 h-6 md:w-8 md:h-8 text-foreground/55 group-hover:text-cinnabar transition-colors" />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pb-10 md:pb-14 md:pl-[132px] max-w-[760px]">
                  {s.items.map((it) => (
                    <li key={it} lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.6] text-foreground/85 grid grid-cols-[12px_1fr] gap-3">
                      <span className="text-cinnabar mt-1">·</span><span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Services = () => (
  <div>
    <SEO
      title="Services — Brand Strategy · Creative Production · Social · ØRIONS"
      description="ครีเอทีฟเอเจนซีในกรุงเทพฯ ที่รวม Brand Strategy · Creative Production · Social Media Marketing ไว้ในทีมเดียว. ทำงานตั้งแต่กลยุทธ์ถึงการผลิต — จาก hello ขึ้นจริงใน 4 สัปดาห์."
      path="/services"
    />

    {/* 01 — HERO */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
        <SectionLabel index="01" label="What we do" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-10 h-display-lg max-w-[18ch] thai-wrap">
            สามอย่าง · <em className="italic text-cinnabar">ทีมเดียว.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-8 max-w-[700px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            ครีเอทีฟเอเจนซีในกรุงเทพฯ ที่รวม Brand Strategy · Creative Production · Social Media Marketing ไว้ในทีมเดียว · บ้านเดิมของเราคือ F&amp;B แฟชัน และ hospitality — แล้ววิธีคิดเดียวกันนี้ก็พาเราไปทำงานที่มีกรอบหนักกว่า ตั้งแต่การเมือง ราชการ ไปจนถึงการเปิดตลาดใหม่ (ดูได้ในงานของเรา).
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — THE THREE SERVICES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-2">
          <p lang="th" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">กดเพื่อดูรายละเอียด</p>
        </div>
        <ServicesAccordion />
      </div>
    </section>

    {/* 03 — HOW WE WORK */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="How we work" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[22ch] thai-wrap">
            จาก hello ขึ้นจริงใน <em className="italic text-cinnabar">4 สัปดาห์.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            ทำงานเป็นทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต — ไม่มีไฟล์หลุดกลางทาง ไม่มีความเข้าใจที่หายไประหว่างทีม.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border border-foreground/20">
          {[
            { n: "i.",   en: "ขัดจนเงา",      th: "craft · ดีไซน์ · ระบบแบรนด์ — refine เรื่องที่จริงของแบรนด์จนคม" },
            { n: "ii.",  en: "ปรับจนเข้าที่", th: "ทดสอบ · วัดผล · ปรับจริงต่อเนื่อง — ผูกทุกอย่างไว้กับผลที่วัดได้" },
          ].map((s, i) => (
            <Reveal key={s.en} delay={i * 0.08}>
              <div className={`p-10 md:p-12 h-full ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-serif italic text-cinnabar text-[24px] leading-none">{s.n}</div>
                <h3 lang="th" className="mt-8 font-thai text-[24px] md:text-[28px] leading-[1.1] tracking-[-0.01em] font-medium">{s.en}</h3>
                <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{s.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — PROCESS TIMELINE */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="From hello to live" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[20ch] thai-wrap">
            สี่สัปดาห์ · <em className="italic text-cinnabar">หนึ่งทีม.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-foreground/20">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="h-full p-8 md:p-10 border-b border-r border-foreground/20">
                <div lang="th" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{s.week}</div>
                <h3 className="mt-6 process-row__title">
                  <span className="process-row__index">{s.n}</span>{s.k}
                </h3>
                <p lang="th" className="mt-3 process-row__body font-thai thai-wrap text-[14px] md:text-[15px]">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — FAQ */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <SectionLabel index="04" label="Before you ask" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md">
            The short <em className="italic text-cinnabar">answers.</em>
          </h2>
        </Reveal>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 06 — CTA */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>เล่าโจทย์มา — เราจะ <em className="italic text-cinnabar">refine</em> มันให้คม.</>}
      subtitle="ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit 3 นาที — หรือทักมาคุยเลย."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="snow"
    />
  </div>
);

export default Services;
