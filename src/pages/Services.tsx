import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

// 3 internal capabilities (how we're built) → packaged into 3 sales lines.
const units = [
  { k: "คิด", en: "Strategy", d: "ต้นน้ำ — positioning · idea · วางคอนเทนต์" },
  { k: "ทำ", en: "Craft", d: "กลางน้ำ — ถ่าย/ตัด/กราฟิก ระดับ commercial" },
  { k: "ยิง", en: "Distribution", d: "ปลายน้ำ — media buying · tracking · ROAS" },
];

// ORIONS Method — 5 steps, every line walks all 5 (depth differs).
const method = [
  { n: "01", k: "Research", d: "เข้าใจตลาด/คู่แข่ง/กลุ่มเป้าหมาย + ตั้ง baseline" },
  { n: "02", k: "DNA", d: "idea · positioning · identity" },
  { n: "03", k: "Craft", d: "ผลิตจริง — ฟิล์ม ภาพ คอนเทนต์" },
  { n: "04", k: "Launch", d: "เปิดตัว + rollout" },
  { n: "05", k: "Measure", d: "วัดผล แล้วปรับต่อ" },
];

// 3 sales lines — pick one or mix.
const lines = [
  {
    n: "01", en: "Digital", tag: "ยอด / ลีด เดี๋ยวนี้",
    lead: "นำโดย Distribution (ยิง)", pay: "รายเดือน",
    summary: "ดันยอดด้วย performance — ยิงแอด ทำคอนเทนต์ วัดผล แล้วรีดให้ทุกบาทของ media ทำงานหนักที่สุด.",
    items: [
      "full-funnel media buying — Meta · TikTok · Google · LINE",
      "ดูแลเพจ + community + คอนเทนต์ลงฟีด",
      "KOL / influencer orchestration",
      "tracking & analytics — Pixel · CAPI · ROAS",
      "performance report ทุกเดือน",
    ],
    fit: "มีของพร้อมขาย · ต้องการลีด/ยอด · มีงบ ad spend ต่อเนื่อง",
    notFit: "ยังไม่มีของพร้อมขาย · ต้องปั้นภาพจำก่อน · หวังผลใน 14 วัน",
  },
  {
    n: "02", en: "Boutique", tag: "แบรนด์ที่คนจำและเลือก",
    lead: "นำโดย Strategy (คิด) — รวมทุก unit", pay: "ต่อแคมเปญ",
    summary: "สร้าง · refresh · rebrand ครบตั้งแต่คิดถึงวัดผล — วางตัวตนและจุดยืนให้คนจำและเลือก.",
    items: [
      "positioning & brand DNA — จุดยืนและแก่นตัวตน",
      "brand identity & CI — โลโก้ สี ฟอนต์ คู่มือแบรนด์",
      "big idea / campaign — แนวคิดใหญ่ร้อยทั้งแคมเปญ",
      "craft เต็ม — ฟิล์ม ภาพ คอนเทนต์ (ดู Production)",
      "The ORIONS Standard — วัดผลแบรนด์ 45/90 วัน",
    ],
    fit: "ธุรกิจใหม่ยังไม่เคยทำแบรนด์ · มีแบรนด์อยาก refresh / reposition",
    notFit: "อยากได้ยอดเดี๋ยวนี้เป็นหลัก · ไม่พร้อมให้เวลา workshop",
    featured: true,
  },
  {
    n: "03", en: "Production", tag: "แค่ทีมถ่าย (มี brief เอง)",
    lead: "นำโดย Craft (ทำ)", pay: "ต่อวัน",
    summary: "ทีมกองถ่าย senior ระดับโฆษณา — เปลี่ยนกลยุทธ์เป็นงานศิลป์เชิงพาณิชย์ที่หยุดนิ้ว.",
    items: [
      "high-end commercial photography",
      "premium video — TVC → Reels / Shorts",
      "visual & motion crafting",
      "senior crew เท่านั้น · raw + same-day proxy",
    ],
    fit: "มี brief/ทีมเองแล้ว ขาดทีมออกกอง — agency · in-house team · PR firm",
    notFit: "ต้องการให้คิด strategy หรือวัดผลให้ (→ Boutique / Digital)",
  },
];

// Click-to-expand list of the three lines
const LinesAccordion = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {lines.map((s, i) => {
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
                <h2 className="font-unbounded text-[22px] md:text-[38px] leading-[1.0] tracking-[-0.02em]">{s.en}</h2>
                <div lang="th" className="mt-2 font-serif text-foreground/70 text-[16px] md:text-[22px]">{s.tag}</div>
              </div>
              <span className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <Plus className="w-6 h-6 md:w-8 md:h-8 text-foreground/55 group-hover:text-cinnabar transition-colors" />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-7 md:px-10 md:pl-[172px] max-w-[860px]">
                  <p lang="th" className="font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/90">{s.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                    <span>{s.lead}</span><span className="text-cinnabar">จ่าย · {s.pay}</span>
                  </div>
                  <p lang="th" className="mt-5 eyebrow-mono text-muted-foreground">สิ่งที่คุณได้</p>
                </div>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 px-7 md:px-10 md:pl-[172px] max-w-[860px]">
                  {s.items.map((it) => (
                    <li key={it} lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.6] text-foreground/85 grid grid-cols-[12px_1fr] gap-3">
                      <span className="text-cinnabar mt-1">·</span><span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 mx-7 md:mx-10 md:ml-[172px] max-w-[860px] grid grid-cols-1 sm:grid-cols-2 gap-3 pb-8 md:pb-10">
                  <div className="rounded-none border border-foreground/12 bg-foreground/[0.02] p-4">
                    <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-cinnabar">เหมาะกับ</div>
                    <p lang="th" className="mt-1.5 font-thai thai-wrap text-[13px] leading-[1.6] text-foreground/85">{s.fit}</p>
                  </div>
                  <div className="rounded-none border border-foreground/12 bg-foreground/[0.02] p-4">
                    <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">ยังไม่เหมาะ</div>
                    <p lang="th" className="mt-1.5 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground">{s.notFit}</p>
                  </div>
                </div>
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
      title="Services — Digital · Boutique · Production · ØRIONS"
      description="3 สาย เลือกสายเดียวหรือผสม — Digital (ยอด รายเดือน) · Boutique (แบรนด์ ต่อแคมเปญ) · Production (ถ่าย ต่อวัน). สร้างจาก 3 ส่วน คิด–ทำ–ยิง ในระบบเดียว."
      path="/services"
      schema={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://orions.agency/services" },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital — Performance & Social Ads",
          serviceType: "Performance marketing & social advertising",
          description: "ยิงแอด ทำคอนเทนต์ วัดผล — ดันยอดด้วย performance, คิดราคารายเดือน.",
          provider: { "@type": "Organization", name: "ØRIONS", url: "https://orions.agency" },
          areaServed: { "@type": "Country", name: "Thailand" },
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Boutique — Brand Strategy & Identity",
          serviceType: "Brand strategy, identity & rebrand",
          description: "สร้าง · refresh · rebrand ครบตั้งแต่คิดถึงวัดผล, คิดราคาต่อแคมเปญ.",
          provider: { "@type": "Organization", name: "ØRIONS", url: "https://orions.agency" },
          areaServed: { "@type": "Country", name: "Thailand" },
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Production — Photo & Video",
          serviceType: "Advertising-grade photo & video production",
          description: "ทีมกองถ่าย senior ระดับโฆษณา — ถ่าย ตัด ครบ, คิดราคาต่อวัน.",
          provider: { "@type": "Organization", name: "ØRIONS", url: "https://orions.agency" },
          areaServed: { "@type": "Country", name: "Thailand" },
        },
      ]}
    />

    {/* 01 — HERO */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-20 md:pb-24">
        <SectionLabel label="What we do" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[20ch] thai-wrap">
            ยอด หรือ แบรนด์? <em className="text-cinnabar">เลือกสายที่ใช่.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-8 max-w-[720px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            เราสร้างจาก 3 ส่วน — <strong className="text-foreground">คิด · ทำ · ยิง</strong> — แล้วแพ็กออกเป็น 3 สาย: <strong className="text-foreground">Digital</strong> (ยอด) · <strong className="text-foreground">Boutique</strong> (แบรนด์) · <strong className="text-foreground">Production</strong> (ถ่าย). เลือกสายเดียว หรือผสมก็ได้ จ่ายเฉพาะที่ใช้.
          </p>
        </Reveal>

        {/* 3 units mini-row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {units.map((u, i) => (
            <Reveal key={u.en} delay={0.2 + i * 0.06}>
              <div className="card-soft h-full p-5 md:p-6">
                <div className="flex items-baseline gap-3">
                  <span lang="th" className="font-serif text-cinnabar text-[22px] md:text-[26px]">{u.k}</span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">{u.en}</span>
                </div>
                <p lang="th" className="mt-2.5 font-thai thai-wrap text-[12.5px] leading-[1.6] text-foreground/80">{u.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 02 — THE THREE LINES */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
          <SectionHeading
            lang="th"
            eyebrow="3 สาย"
            title={<>เลือกสายที่ <em className="text-cinnabar">ตรงโจทย์.</em></>}
          />
          <p lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">กดเพื่อดูรายละเอียด</p>
        </div>
        <LinesAccordion />
      </div>
    </section>

    {/* 03 — ORIONS METHOD (5 steps) */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          eyebrow="The ORIONS Method"
          lang="th"
          title={<>เดินครบ 5 ขั้น — <em className="text-cinnabar">ทุกสาย.</em></>}
          intro="ต่างกันแค่ความลึก ไม่ข้ามขั้น — ตั้งแต่เข้าใจโจทย์ จนถึงวัดผลและปรับต่อ."
        />
        <div className="mt-16 relative">
          <div aria-hidden className="hidden lg:block absolute top-[17px] left-0 right-0 h-px bg-foreground/15" />
          <motion.div
            aria-hidden
            className="hidden lg:block absolute top-[17px] left-0 right-0 h-px bg-cinnabar origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
            {method.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="relative z-10 inline-grid place-items-center w-[34px] h-[34px] rounded-none border border-cinnabar bg-[hsl(var(--surface))] num-display text-cinnabar text-[13px]">{s.n}</span>
                <h3 className="mt-5 font-serif text-[22px] md:text-[26px] tracking-[-0.01em]">{s.k}</h3>
                <p lang="th" className="mt-2.5 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground max-w-[26ch]">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 04 — CTA */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>ยังไม่แน่ใจว่าควรเริ่มสายไหน? <em className="text-cinnabar">เราช่วยวินิจฉัย.</em></>}
      subtitle="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์มา เราบอกตรงๆ ว่าควรเริ่มที่ยอดหรือแบรนด์ก่อน."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูแพ็กเกจ", to: "/package" }}
      tone="snow"
    />
  </div>
);

export default Services;
