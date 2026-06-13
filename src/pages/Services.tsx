import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/SectionLabel";
import ImageBand from "@/components/ImageBand";
import CTABand from "@/components/CTABand";
import { caseStudies } from "@/data/caseStudies";

const process = [
  { n: "01", k: "Listen", week: "สัปดาห์ 1", d: "ฟังโจทย์และเงื่อนไข — audit แบรนด์, คู่แข่ง, และกรอบที่ต้องอยู่ในนั้น" },
  { n: "02", k: "Refine", week: "สัปดาห์ 2", d: "ตกผลึกเรื่องที่จริง + ทิศทาง — refine จนคมพอจะลงในกรอบได้" },
  { n: "03", k: "Make",   week: "สัปดาห์ 3", d: "ผลิตจริง — craft, ดีไซน์, คอนเทนต์ ภายใต้ทิศทางเดียวกัน" },
  { n: "04", k: "Launch", week: "สัปดาห์ 4", d: "ขึ้นจริง แล้ววัดผล — ทดสอบ, ปรับ, ทำต่อเนื่อง" },
];

const services = [
  {
    n: "01",
    en: "Brand Strategy",
    tag: "หาเรื่องที่ใช่",
    summary: "วางตัวตน จุดยืน ชื่อ และระบบแบรนด์ (CI) ให้ชัดก่อนเริ่มทำคอนเทนต์ — เพื่อให้ทุกอย่างที่ทำต่อจากนี้ไปในทิศทางเดียวกัน.",
    items: [
      "research — เจาะตลาด คู่แข่ง และกลุ่มลูกค้า",
      "positioning — วางจุดยืนว่าแบรนด์ยืนตรงไหน ต่างจากใคร",
      "naming — ตั้งชื่อแบรนด์ / สินค้า / แคมเปญ",
      "brand identity & CI — โลโก้ สี ฟอนต์ และคู่มือใช้งานแบรนด์",
      "brand narrative — เรื่องเล่าและข้อความหลักของแบรนด์",
    ],
  },
  {
    n: "02",
    en: "Creative Production",
    tag: "ทำให้เห็น",
    summary: "ถ่าย ตัด ออกแบบ ครบในทีมเดียว — ได้คอนเทนต์ลงเพจ, brand film และภาพถ่ายโปรดักต์ / อาหาร / พอร์เทรต พร้อมใช้งานจริง.",
    items: [
      "brand film — วิดีโอแบรนด์และโฆษณา ถ่ายและตัดครบ",
      "ภาพถ่ายโปรดักต์ / อาหาร / พอร์เทรต — โปรดักชันในสตูดิโอและนอกสถานที่",
      "คอนเทนต์ — คลิปสั้น รีล และโพสต์สำหรับลงโซเชียล",
      "key visual & design — คีย์วิชวลแคมเปญ และงานออกแบบกราฟิก",
    ],
  },
  {
    n: "03",
    en: "Social Media Marketing",
    tag: "ทำให้ดังและวัดได้",
    summary: "ดูแลเพจ ยิงแอด และทำ SEO ให้ลูกค้าเจอคุณ — แล้ววัดผลออกมาเป็นตัวเลขจริงทุกเดือน.",
    items: [
      "SEO — ทำให้ลูกค้าเจอคุณบน Google: บทความ, on-page, โครงสร้างเว็บ",
      "ดูแลเพจ + community — วางคอนเทนต์ ตอบลูกค้า และดูแลคอมมูนิตี้",
      "ยิงแอด Meta / TikTok / Google / LINE — วางและจัดการแคมเปญโฆษณา",
      "A/B testing — ทดสอบเพื่อหาสิ่งที่ได้ผลที่สุด",
      "performance report — รายงานผลเป็นตัวเลขที่อ่านเข้าใจง่าย",
    ],
  },
];

// Click-to-expand list of the three services
const ServicesAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={s.n} className={isOpen ? "card-accent" : "card-soft"}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group w-full text-left grid grid-cols-[52px_1fr_auto] md:grid-cols-[120px_1fr_auto] gap-5 md:gap-12 items-center p-7 md:p-10"
            >
              <div className="font-serif text-cinnabar text-[34px] md:text-[60px] leading-none tabular-nums">{s.n}</div>
              <div>
                <h2 className="text-[24px] md:text-[40px] leading-[1.0] tracking-[-0.03em] font-semibold">{s.en}</h2>
                <div lang="th" className="mt-2 font-serif text-foreground/70 text-[16px] md:text-[22px]">{s.tag}</div>
              </div>
              <span className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <Plus className="w-6 h-6 md:w-8 md:h-8 text-foreground/55 group-hover:text-cinnabar transition-colors" />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-7 md:px-10 md:pl-[172px] max-w-[820px]">
                  <p lang="th" className="font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/90">{s.summary}</p>
                  <p lang="th" className="mt-5 eyebrow-mono text-muted-foreground">สิ่งที่คุณได้</p>
                </div>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 px-7 md:px-10 pb-8 md:pb-10 md:pl-[172px] max-w-[820px]">
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
      description="Brand Strategy · Creative Production · Social Media Marketing + SEO ในทีมเดียว — วางแบรนด์ ถ่าย ตัด ยิงแอด ทำ SEO ให้เจอบน Google และวัดผลเป็นตัวเลขจริง."
      path="/services"
    />

    {/* 01 — HERO */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
        <SectionLabel label="What we do" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch] thai-wrap">
            สามอย่าง · <em className="text-cinnabar">ทีมเดียว.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-8 max-w-[700px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            Brand Strategy · Creative Production · Social Media Marketing ในทีมเดียว. จาก F&amp;B แฟชัน hospitality ถึงการเมืองและราชการ — วิธีคิดเดียว ทุกเงื่อนไข.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — THE THREE SERVICES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-2">
          <p lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">กดเพื่อดูรายละเอียด</p>
        </div>
        <ServicesAccordion />
      </div>
    </section>

    <ImageBand image={caseStudies[1].cover}>
      ถ่าย ตัด ออกแบบ — <em className="text-cinnabar">ครบในทีมเดียว.</em>
    </ImageBand>

    {/* 03 — PROCESS TIMELINE */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="From hello to live"
          lang="th"
          title={<>จาก hello ขึ้นจริงใน <em className="text-cinnabar">4 สัปดาห์.</em></>}
          intro="ทำงานเป็นทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต — ไม่มีไฟล์หลุดกลางทาง ไม่มีความเข้าใจที่หายไประหว่างทีม."
        />
        <div className="mt-16 relative">
          {/* timeline rail — base + an animated cinnabar fill that draws left→right on scroll */}
          <div aria-hidden className="hidden lg:block absolute top-[17px] left-0 right-0 h-px bg-foreground/15" />
          <motion.div
            aria-hidden
            className="hidden lg:block absolute top-[17px] left-0 right-0 h-px bg-cinnabar origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {process.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="relative z-10 inline-grid place-items-center w-[34px] h-[34px] rounded-full border border-cinnabar bg-[hsl(var(--surface))] num-display text-cinnabar text-[13px]">{s.n}</span>
                <div lang="th" className="mt-5 font-mono text-[10px] tracking-[0.04em] text-cinnabar">{s.week}</div>
                <h3 className="mt-1.5 font-serif text-[22px] md:text-[28px] tracking-[-0.01em]">{s.k}</h3>
                <p lang="th" className="mt-2.5 font-thai thai-wrap text-[13px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[30ch]">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ removed — answers live on /package, /contact and /diagnostic */}

    {/* 05 — CTA */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>เล่าโจทย์มา — เราจะ <em className="text-cinnabar">refine</em> มันให้คม<span className="text-cinnabar">.</span></>}
      subtitle="ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit 1 นาที — หรือทักมาคุยเลย."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="snow"
    />
  </div>
);

export default Services;
