import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import PageMark from "@/components/PageMark";
import ClosingCTA from "@/components/ClosingCTA";
import SimpleMarquee from "@/components/SimpleMarquee";
const SITE_URL = "https://orions.agency";

const capabilities = [
  {
    tag: "— 01 / BRANDING",
    title: "Branding.",
    line: "Identity ที่ลูกค้าจำได้ใน 3 วินาที.",
    desc: "Naming, logo, system, guideline, launch kit — สร้างแบรนด์ที่ขายได้ตั้งแต่ครั้งแรกที่เห็น.",
    items: ["Naming & Strategy", "Logo & Identity", "Visual System", "Brand Guideline", "Launch Kit"],
    selected: "Selected · Hongmove · Atlas · Sera",
  },
  {
    tag: "— 02 / CONTENT",
    title: "Content.",
    line: "คอนเทนต์ที่ดูจบแล้วอยากแชร์.",
    desc: "Director, DOP, studio, edit, color, sound — งานโปรดักชันครบจบในทีมเดียว.",
    items: ["Photo + Video Shoots", "Reels + Short-form", "Edit · Color · Sound", "Graphic + Motion", "Asset Libraries"],
    selected: "Selected · RTAF · Heavy",
  },
  {
    tag: "— 03 / SOCIAL",
    title: "Social.",
    line: "โพสต์ที่ขายของได้จริง — วัดผลทุกบาท.",
    desc: "Strategy, calendar, daily content, community, Meta + TikTok ads — โตด้วยตัวเลข ไม่ใช่ความรู้สึก.",
    items: ["Strategy + Calendar", "Daily Posting", "Community Mgmt", "Meta + TikTok Ads", "Monthly Report"],
    selected: "Selected · MyHotel · GCOO · Khaoyai",
  },
];

const process4 = [
  { n: "01", t: "Listen", d: "คุย 30 นาที เช็กว่าเหมาะกันมั้ย ฟรี — เข้าใจธุรกิจ ตลาด คู่แข่ง.", w: "Week 1" },
  { n: "02", t: "Plan",   d: "เสนอแผนสั้นๆ ตัวเลขจริง ไม่ขายฝัน — strategy, calendar, KPI.",   w: "Week 1–2" },
  { n: "03", t: "Build",  d: "ถ่าย ตัด สี เสียง — สร้างแบรนด์ คอนเทนต์ และแอด ด้วยทีม in-house.", w: "Week 2–4" },
  { n: "04", t: "Run",    d: "รันงาน รายงานทุกเดือน วัดผลจริง — ปรับคอนเทนต์ ปรับแอดต่อเนื่อง.", w: "Ongoing" },
];

type Pkg = {
  key: string;
  badge: string;
  name: string;
  price: string;
  unit: string;
  bestFor: string;
  tagline: string;
  contract: string;
  highlights: string[];
  details: string[];
  ribbon?: string;
};

const packages: Pkg[] = [
  {
    key: "starter",
    badge: "01 · STARTER",
    name: "Starter",
    price: "29,000",
    unit: "THB / เดือน",
    bestFor: "ธุรกิจเริ่มต้นบน IG / TikTok",
    tagline: "ทดลองได้ ไม่ผูกมัด — เริ่มต้นเล็ก โตไปด้วยกัน.",
    contract: "ขั้นต่ำ 1 เดือน",
    highlights: [
      "10 Static posts",
      "15 Reels / TikTok (9:16)",
      "1 Production day",
      "1 Platform · Strategy meetup 1 ครั้ง / เดือน",
    ],
    details: [
      "Static Posts · 10 / เดือน",
      "Reels / TikTok (9:16) · 15 / เดือน",
      "Production Days · 1 วัน",
      "Caption / Copywriting · Standard",
      "Hashtag Research · Basic",
      "Platform Coverage · 1 platform",
      "Strategy Meetup · 1 ครั้ง / เดือน (1 ชม.)",
      "Trend Report · รายเดือน",
      "Community Mgmt (7 วัน) · ตอบใน 6 ชม.",
      "Ads Management · Add-on (3,500 THB / เดือน)",
      "Revisions · 1 / ชิ้น",
      "Onboarding · Basic Setup (14 วันแรก)",
      "Monthly Performance Report · ส่งวันที่ 5 ของเดือนถัดไป",
      "Payment · ชำระล่วงหน้าทุกวันที่ 25 ของเดือนก่อนหน้า",
    ],
  },
  {
    key: "pro",
    badge: "02 · MOST POPULAR",
    name: "Pro",
    price: "59,000",
    unit: "THB / เดือน",
    bestFor: "แบรนด์ที่ต้องการ volume + ads ที่วัดผลได้",
    tagline: "Most Popular — คุ้มที่สุดใน 3 เดือนแรก.",
    contract: "ขั้นต่ำ 3 เดือน",
    ribbon: "★ MOST POPULAR",
    highlights: [
      "15 Static posts · 15 Stories",
      "30 Reels / TikTok · 10 Photos",
      "2 Production days · 2 Platforms",
      "Free Ads Management ≤ 50k",
    ],
    details: [
      "Static Posts · 15 / เดือน",
      "Instagram / FB Stories · 15 / เดือน",
      "Reels / TikTok (9:16) · 30 / เดือน",
      "Photography · 10 ภาพ / เดือน",
      "Production Days · 2 วัน",
      "Caption / Copywriting · พร้อม CTA + Hook",
      "Hashtag Research · Strategic",
      "Platform Coverage · 2 platforms",
      "Strategy Meetup · 2 ครั้ง / เดือน",
      "Content Strategy · Pillar Planning 4–5 หมวด",
      "Tone of Voice · Guideline + Do's & Don'ts",
      "Content Calendar · รายเดือน ส่งทุกวันที่ 25",
      "Trend Report · ทุก 2 สัปดาห์",
      "Community Mgmt (7 วัน) · ตอบใน 3 ชม.",
      "Ads Management · ฟรี (≤ 50k budget)",
      "Competitor Analysis · Quarterly",
      "Dedicated Account Mgr · Shared",
      "Backup Team · ✓",
      "Revisions · 2 / ชิ้น",
      "Onboarding · Strategy Workshop",
    ],
  },
  {
    key: "elite",
    badge: "03 · PREMIUM",
    name: "Elite",
    price: "119,000",
    unit: "THB / เดือน",
    bestFor: "Launch / rebrand เต็มรูปแบบ + ที่ปรึกษาเชิงกลยุทธ์",
    tagline: "Full Premium Service — ทีมประจำที่ขับ growth.",
    contract: "ขั้นต่ำ 6 เดือน",
    ribbon: "♛ PREMIUM",
    highlights: [
      "20 Static · Daily Stories · 30 Reels (3 Hero)",
      "1 Horizontal video · 20–30 Photos",
      "3 Production days · Full Crew · 4 Platforms",
      "Free Ads ≤ 100k · Brand Manual · Performance Bonus",
    ],
    details: [
      "Static Posts · 20 / เดือน",
      "Instagram / FB Stories · Daily (30 / เดือน)",
      "Reels / TikTok (9:16) · 30 (รวม 3 Hero)",
      "Horizontal Video (16:9) · 1 ตัว / เดือน (≤ 3 นาที)",
      "Photography · 20–30 ภาพ / เดือน",
      "Production Days · 3 วัน (Full Crew)",
      "Caption / Copywriting · ระดับโฆษณา + A/B Testing",
      "Hashtag Research · Premium + Tracking",
      "Platform Coverage · สูงสุด 4 platforms",
      "Strategy Meetup · 4 ครั้ง / เดือน",
      "Trend Report · 2 ครั้ง / เดือน + Alerts",
      "Community Mgmt (7 วัน) · ตอบใน 1 ชม.",
      "Ads Management · ฟรี (≤ 100k budget)",
      "Brand Manual · ✓",
      "Competitor Analysis · Deep-dive ทุกเดือน",
      "Dedicated Account Mgr · ✓",
      "Backup Team · ✓ + Priority",
      "Revisions · 3 Major + Unlimited Minor",
      "Onboarding · Full Discovery Workshop",
      "Quarterly Business Review · Brand + ROI + Growth projection",
      "Performance Bonus · ROAS เกิน 5x ติดต่อกัน 3 เดือน → 5% ของยอดส่วนเกิน",
    ],
  },
];

const faqs = [
  { q: "ผลลัพธ์เห็นเมื่อไหร่?", a: "30 วันแรก — เห็น traction (reach, engagement, save) · 90 วัน — เห็นผลกับยอดขาย / leads · เรารายงานตัวเลขจริงทุกเดือน ไม่ใช่ vanity metrics." },
  { q: "ใครเป็นเจ้าของไฟล์ต้นฉบับ (Raw Files)?", a: "ลูกค้าเป็นเจ้าของ final deliverables ทั้งหมด · Raw files (footage, source) ส่งมอบเมื่อจบสัญญา หรือซื้อเพิ่ม 15,000 THB ต่อเดือนของงาน" },
  { q: "ถ้าผลลัพธ์ไม่เป็นไปตามที่คาด?", a: "เราใช้ first-month review — ถ้าไม่พอใจ ปรับ scope ได้ทันที หรือยกเลิกโดยไม่มีค่าใช้จ่ายเพิ่ม" },
  { q: "ปรับแพ็กเกจระหว่างสัญญาได้ไหม?", a: "อัปเกรดได้ทุกเมื่อ · ดาวน์เกรดทำได้เมื่อจบรอบสัญญาปัจจุบัน" },
  { q: "ใครเป็นผู้โพสต์คอนเทนต์?", a: "ทีม ØRIONS โพสต์ให้ใน account ของคุณตามเวลาที่วางไว้ · ลูกค้าให้สิทธิ์ระดับ Editor บน Meta Business Suite และ TikTok Business Center" },
  { q: "มีค่า Setup Fee ไหม?", a: "ไม่มี · รวมในแพ็กเกจแล้วทุกระดับ" },
];

const PackageCard = ({ p }: { p: Pkg }) => (
  <Reveal>
    <article className={`relative bg-background border border-foreground p-7 md:p-9 h-full flex flex-col ${p.ribbon === "★ MOST POPULAR" ? "md:-translate-y-3 md:shadow-[0_0_0_1px_hsl(var(--orion))]" : ""}`}>
      {p.ribbon && (
        <div className="absolute -top-px left-0 bg-orion text-background px-4 py-1 font-mono text-[9px] tracking-[0.25em] uppercase">
          {p.ribbon}
        </div>
      )}
      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{p.badge}</div>
      <h3 className={`mt-5 font-serif italic tracking-[-0.02em] leading-none ${p.ribbon === "★ MOST POPULAR" ? "text-[48px] md:text-[60px]" : "text-[40px] md:text-[52px]"}`}>{p.name}</h3>
      <div className="mt-6 flex items-baseline gap-2">
        <span className={`font-serif text-orion tracking-[-0.03em] tabular-nums ${p.ribbon === "★ MOST POPULAR" ? "text-[44px] md:text-[56px]" : "text-[36px] md:text-[44px]"}`}>{p.price}</span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.unit}</span>
      </div>
      <p className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.contract}</p>

      <div className="mt-6 border-t border-soft pt-5">
        <p className="font-mono text-[9.5px] tracking-[0.25em] uppercase text-muted-foreground">Best for</p>
        <p className="mt-2 font-thai text-[14px] leading-[1.5] text-foreground">{p.bestFor}</p>
      </div>

      <p className="mt-5 font-serif italic text-[15px] leading-[1.55] text-foreground/70">{p.tagline}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 font-thai text-[13.5px] leading-[1.55] text-foreground/80">
            <span className="text-orion mt-[2px]">—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-8 group inline-flex items-center justify-between border-t border-foreground pt-5 font-mono text-[10px] tracking-[0.25em] uppercase hover:opacity-60 transition-opacity"
      >
        <span>Book a call</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>
    </article>
  </Reveal>
);

const Services = () => {
  const [openPkg, setOpenPkg] = useState<string | null>("pro");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <SEO
        title="Services & Packages — ØRIONS"
        description="Creative agency. Brand, film, social. 3 packages: Starter 29k, Pro 59k, Elite 119k. ทีมเดียวจบ — strategy, production, ads."
        path="/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          ],
        }}
      />

      {/* 01 · HERO — short + show starting price */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-32 md:pt-40 pb-16 md:pb-24">
          <PageMark index="01" total="05" />
          <Reveal>
            <h1 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em] max-w-[18ch]">
              Pricing that <em className="text-orion italic">makes sense.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
              Branding · Content · Social — one team, one monthly retainer. เริ่มต้น <span className="text-orion not-italic font-serif">29,000</span> บาท/เดือน.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3 items-center">
              <a href="#packages" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 font-mono text-[10px] tracking-[0.25em] uppercase hover:bg-orion transition-colors">
                See packages <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link to="/contact" className="group inline-flex items-center gap-2 border border-foreground px-6 py-3.5 font-mono text-[10px] tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-colors">
                Get a free proposal
              </Link>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground ml-1">
                ↳ ตอบกลับใน 24 ชม. · ปรึกษาฟรี 30 นาที
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 · WHAT WE DO — 3-col, no images, sync names with Index */}
      <section className="px-6 md:px-10 border-t border-foreground">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="03" total="05" />
          <Reveal>
            <h2 className="font-serif text-[40px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
              Three things, <em className="text-orion italic">properly.</em>
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className={`py-10 md:py-12 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{c.tag}</div>
                  <h3 className="mt-8 font-serif italic text-[40px] md:text-[48px] leading-[1] tracking-[-0.02em]">{c.title}</h3>
                  <p className="mt-6 font-serif italic text-orion text-[16px] md:text-[18px] leading-[1.4] max-w-[24ch]">"{c.line}"</p>
                  <p className="mt-4 font-thai text-[14px] leading-[1.7] text-muted-foreground">{c.desc}</p>
                  <ul className="mt-7 pt-6 border-t border-dashed border-foreground/25 space-y-2 font-thai text-[14px] text-foreground/85">
                    {c.items.map((it) => (
                      <li key={it} className="flex gap-3"><span className="text-muted-foreground">—</span><span>{it}</span></li>
                    ))}
                  </ul>
                  <p className="mt-7 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{c.selected}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · PROCESS — 4 steps, matches Index */}
      <section className="px-6 md:px-10 border-t border-foreground">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="04" total="05" />
          <Reveal>
            <h2 className="font-serif text-[40px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[16ch]">
              From hello, <em className="text-orion italic">live in 4 weeks.</em>
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 border-t border-foreground">
            {process4.map((s, i) => (
              <Reveal key={s.n} delay={0.04 * i}>
                <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline border-b border-foreground/15 py-7 md:py-9 group hover:bg-foreground/[0.025] transition-colors">
                  <div className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">{s.n}</div>
                  <div className="col-span-10 md:col-span-3 font-serif italic text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.05]">{s.t}.</div>
                  <div className="col-span-12 md:col-span-6 font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/75">{s.d}</div>
                  <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[10px] tracking-[0.22em] uppercase text-orion">{s.w}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · PACKAGES */}
      <section id="packages" className="px-6 md:px-10 border-t border-foreground">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="04" total="06" />
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <Reveal>
              <h2 className="font-serif text-[40px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[16ch]">
                Pick yours in <em className="text-orion italic">30 seconds.</em>
              </h2>
            </Reveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">VALID 30 DAYS</p>
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif italic text-[18px] md:text-[20px] text-muted-foreground max-w-[640px] leading-[1.5]">
              → ไม่แน่ใจ? เริ่มที่ <em className="text-orion not-italic font-serif">Pro</em>. คุ้มที่สุดใน 3 เดือนแรก.
            </p>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {packages.map((p) => <PackageCard key={p.key} p={p} />)}
          </div>

          <p className="mt-10 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground text-center">
            All packages include — Strategy · In-house production · Monthly report
          </p>

          {/* Package details accordion */}
          <div className="mt-20 md:mt-24">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">— PACKAGE DETAILS</p>
            <div className="border-t border-foreground">
              {packages.map((p) => {
                const isOpen = openPkg === p.key;
                return (
                  <div key={p.key} className="border-b border-foreground/15">
                    <button
                      type="button"
                      onClick={() => setOpenPkg(isOpen ? null : p.key)}
                      aria-expanded={isOpen}
                      className="group w-full grid grid-cols-12 gap-6 items-baseline py-7 md:py-9 text-left hover:bg-foreground/[0.03] transition-colors px-2 -mx-2"
                    >
                      <div className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                        {p.badge.split(" · ")[0]}
                      </div>
                      <div className="col-span-9 md:col-span-5">
                        <h3 className="font-serif italic text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.05]">{p.name}</h3>
                      </div>
                      <div className="hidden md:block col-span-5 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                        {p.price} {p.unit} · {p.contract}
                      </div>
                      <div className="col-span-1 flex justify-end">
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5 text-foreground/50 group-hover:text-foreground transition-colors" />}
                      </div>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className="grid grid-cols-12 gap-6 pb-10 px-2 -mx-2">
                          <div className="hidden md:block md:col-span-1" />
                          <ul className="col-span-12 md:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2.5">
                            {p.details.map((d) => (
                              <li key={d} className="flex gap-3 font-thai text-[13.5px] leading-[1.55] text-foreground/75">
                                <span className="text-foreground/40">—</span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 06 · FAQ */}
      <section className="px-6 md:px-10 border-t border-foreground">
        <div className="max-w-[1000px] mx-auto py-20 md:py-28">
          <PageMark index="05" total="06" />
          <Reveal>
            <h2 className="font-serif text-[40px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.03em]">
              คำถามที่ <em className="text-orion italic">พบบ่อย.</em>
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 border-t border-foreground">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="border-b border-foreground/15">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-baseline justify-between gap-6 py-6 md:py-8 text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="font-serif italic text-[20px] md:text-[26px] tracking-[-0.01em] flex-1 leading-[1.25]">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground mr-3 not-italic">0{i + 1}</span>
                      {f.q}
                    </span>
                    {isOpen ? <Minus className="w-4 h-4 shrink-0" /> : <Plus className="w-4 h-4 shrink-0 text-foreground/50" />}
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-400 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-7 md:pb-8 pl-12 md:pl-14 pr-10 font-thai text-[14px] leading-[1.75] text-foreground/70">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="bg-foreground text-background border-y border-foreground py-6 overflow-hidden">
        <SimpleMarquee
          items={["BRANDING", "FILM PRODUCTION", "SOCIAL MEDIA", "PAID ADS", "STRATEGY", "PHOTOGRAPHY"]}
          duration={45}
        />
      </section>

      <ClosingCTA
        eyebrow="NEXT STEPS"
        title={<>เริ่มต้น <em className="text-orion italic">ทำงานร่วมกัน.</em></>}
        description="ติดต่อทีมงานเพื่อนัด Kick-off Meeting · 30-min discovery call ฟรี"
        ctas={[
          { label: "Book a discovery call", to: "/contact" },
          { label: "See our work", to: "/work", variant: "ghost" },
        ]}
        email="hello@orions.agency"
        phone="+66 92 390 5464"
      />
    </div>
  );
};

export default Services;
