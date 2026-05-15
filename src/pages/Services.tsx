import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Check, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import ClosingCTA from "@/components/ClosingCTA";

const accent = "text-gradient";
const SITE_URL = "https://orions.agency";

const process6 = [
  { n: "01", t: "Strategy" },
  { n: "02", t: "Planning" },
  { n: "03", t: "Approval" },
  { n: "04", t: "Production" },
  { n: "05", t: "Publish" },
  { n: "06", t: "Optimize" },
];

type Pkg = {
  key: string;
  badge: string;
  name: string;
  price: string;
  unit: string;
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
    tagline: "สำหรับธุรกิจเริ่มต้น — ทดลองได้ ไม่ผูกมัด",
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
    tagline: "Most Popular — คุ้มที่สุด เห็นผลจริง",
    contract: "ขั้นต่ำ 3 เดือน",
    ribbon: "★ POPULAR",
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
    tagline: "Full Premium Service — ที่ปรึกษาเชิงกลยุทธ์",
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

const compareRows: { label: string; values: [string, string, string] }[] = [
  { label: "Static Posts",          values: ["10", "15", "20"] },
  { label: "IG / FB Stories",       values: ["—", "15 / เดือน", "Daily (30)"] },
  { label: "Reels / TikTok (9:16)", values: ["15", "30", "30 (3 Hero)"] },
  { label: "Horizontal Video (16:9)", values: ["—", "—", "1 ตัว ≤ 3 นาที"] },
  { label: "Photography",           values: ["—", "10 / เดือน", "20–30 / เดือน"] },
  { label: "Production Days",       values: ["1", "2", "3 (Full Crew)"] },
  { label: "Copywriting",           values: ["Standard", "CTA + Hook", "ระดับโฆษณา"] },
  { label: "Hashtag Research",      values: ["Basic", "Strategic", "Premium + Tracking"] },
  { label: "Platform Coverage",     values: ["1", "2", "สูงสุด 4"] },
  { label: "Strategy Meetup",       values: ["1× / mo", "2× / mo", "4× / mo"] },
  { label: "Trend Report",          values: ["Monthly", "ทุก 2 สัปดาห์", "2× + Alerts"] },
  { label: "Community Mgmt",        values: ["≤ 6 ชม.", "≤ 3 ชม.", "≤ 1 ชม."] },
  { label: "Ads Management",        values: ["Add-on", "ฟรี ≤ 50k", "ฟรี ≤ 100k"] },
  { label: "Brand Manual",          values: ["—", "—", "✓"] },
  { label: "Competitor Analysis",   values: ["—", "Quarterly", "Deep-dive monthly"] },
  { label: "Dedicated Account Mgr", values: ["—", "Shared", "✓"] },
  { label: "Backup Team",           values: ["—", "✓", "✓ + Priority"] },
  { label: "Revisions",             values: ["1 / ชิ้น", "2 / ชิ้น", "3 Major + ∞ Minor"] },
  { label: "Onboarding",            values: ["Basic Setup", "Strategy Workshop", "Full Discovery"] },
  { label: "Performance Bonus",     values: ["—", "—", "✓"] },
  { label: "Contract ขั้นต่ำ",       values: ["1 เดือน", "3 เดือน", "6 เดือน"] },
];

const addons = [
  { name: "SEO Package",          price: "18,000 THB / mo", note: "On-page · Technical · Content briefs · Monthly report" },
  { name: "AEO Package",          price: "22,000 THB / mo", note: "AI search optimization · Citation tracking · LLM-friendly content" },
  { name: "SEO + AEO Bundle",     price: "35,000 THB / mo", note: "ทุกอย่างใน SEO + AEO · SAVE 10,000 · Quarterly Strategy Workshop", featured: true },
  { name: "Production · Photo",   price: "เริ่ม 25,000",    note: "Half-day shoot · Edit · Delivery in 7 วัน" },
  { name: "Production · Video",   price: "เริ่ม 45,000",    note: "Full crew · 1 day shoot · Edit + Color + Sound" },
  { name: "Email Marketing Setup", price: "เริ่ม 18,000",   note: "Setup ระบบ + Template + Automation flow" },
  { name: "Crisis Management / PR", price: "Quote ตามเคส",   note: "จัดการประเด็นที่กระทบแบรนด์" },
  { name: "Influencer Campaign",  price: "10% ของ budget",   note: "Sourcing · Negotiation · Coordination · Reporting" },
];

const commitments = [
  "Response · ภายใน 24 ชม. ในวันทำการ",
  "On-time delivery · ส่ง Content Calendar ทุกวันที่ 25",
  "Confidentiality · NDA พร้อมเซ็นทุกโครงการ",
  "Industry Exclusivity · ไม่รับคู่แข่งโดยตรงในพื้นที่เดียวกัน",
];

const faqs = [
  { q: "ใครเป็นเจ้าของไฟล์ต้นฉบับ (Raw Files)?", a: "ลูกค้าเป็นเจ้าของ final deliverables ทั้งหมด · Raw files (footage, source) ส่งมอบเมื่อจบสัญญา หรือซื้อเพิ่ม 15,000 THB ต่อเดือนของงาน" },
  { q: "ถ้าผลลัพธ์ไม่เป็นไปตามที่คาด?", a: "เราใช้ first-month review — ถ้าไม่พอใจ ปรับ scope ได้ทันที หรือยกเลิกโดยไม่มีค่าใช้จ่ายเพิ่ม" },
  { q: "ปรับแพ็กเกจระหว่างสัญญาได้ไหม?", a: "อัปเกรดได้ทุกเมื่อ · ดาวน์เกรดทำได้เมื่อจบรอบสัญญาปัจจุบัน" },
  { q: "ใครเป็นผู้โพสต์คอนเทนต์?", a: "ทีม ØRIONS โพสต์ให้ใน account ของคุณตามเวลาที่วางไว้ · ลูกค้าให้สิทธิ์ระดับ Editor บน Meta Business Suite และ TikTok Business Center" },
  { q: "มีค่า Setup Fee ไหม?", a: "ไม่มี · รวมในแพ็กเกจแล้วทุกระดับ" },
];

const PackageCard = ({ p }: { p: Pkg }) => (
  <Reveal>
    <article className={`relative bg-background border border-foreground p-7 md:p-9 h-full flex flex-col ${p.ribbon ? "md:-translate-y-2" : ""}`}>
      {p.ribbon && (
        <div className="absolute -top-px left-0 bg-foreground text-background px-4 py-1 font-mono text-[9px] tracking-[0.25em] uppercase">
          {p.ribbon}
        </div>
      )}
      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{p.badge}</div>
      <h3 className="mt-5 font-display text-[34px] md:text-[44px] tracking-[-0.02em] leading-none">{p.name}</h3>
      <div className="mt-6 flex items-baseline gap-2">
        <span className={`font-display ${accent} text-[36px] md:text-[44px] tracking-[-0.03em] tabular-nums`}>{p.price}</span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.unit}</span>
      </div>
      <p className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.contract}</p>
      <p className="mt-6 font-thai text-[14px] leading-[1.65] text-foreground/75 border-t border-soft pt-5">{p.tagline}</p>
      <ul className="mt-6 space-y-3 flex-1">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 font-thai text-[13.5px] leading-[1.55] text-foreground/80">
            <Check className="w-3.5 h-3.5 mt-1 shrink-0 text-foreground/60" />
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
        description="3 packages: Starter 29k, Pro 59k, Elite 119k. Social media, content production, brand strategy. Add-ons: SEO/AEO, production, PR."
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

      {/* HERO */}
      <section className="relative bg-foreground text-background">
        <div className="px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32 max-w-[1200px] mx-auto">
          <Reveal delay={0.05}>
            <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10">— SERVICE PROPOSAL</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display h-display-md text-balance max-w-[900px]">
              Social · Content · <span className={accent}>Brand.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-thai text-[15px] md:text-[17px] leading-[1.65] text-background/70 max-w-[620px]">
              3 แพ็กเกจ ออกแบบให้เหมาะกับธุรกิจในแต่ละช่วงของการเติบโต — ปรับเปลี่ยนได้เมื่อโตขึ้น
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT + 6-STEP PROCESS */}
      <section className="px-6 md:px-10">
        <div className="border-t border-foreground py-20 md:py-28 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">— 01 · ABOUT</p>
            <Reveal>
              <h2 className="font-display h-display-sm">
                Creative agency, <span className={accent}>full-service.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="font-thai text-[15px] md:text-[16px] leading-[1.75] text-foreground/75">
                ØRIONS คือ Creative Agency ที่เชื่อว่าทุกแบรนด์มีเรื่องราวที่ควรค่าแก่การเล่า — เรามุ่งมั่นเป็นพันธมิตรที่ช่วยให้แบรนด์ของคุณเติบโตอย่างยั่งยืน ไม่ใช่แค่การผลิตคอนเทนต์ แต่คือการวางกลยุทธ์ การสร้างตัวตน และการสื่อสารที่สร้างผลลัพธ์จริง
              </p>
              <p className="mt-5 font-thai text-[14.5px] leading-[1.75] text-foreground/65">
                ทีมเราครอบคลุมตั้งแต่ Creative Strategist, Content Creator, Video Producer, Designer ไปจนถึง Performance Marketing Specialist — รวมทุกความเชี่ยวชาญไว้ในที่เดียว
              </p>
            </Reveal>
          </div>
        </div>

        {/* 6-step process strip */}
        <div className="border-t border-foreground py-14 md:py-20 max-w-[1200px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-8">— PROCESS</p>
          <div className="grid grid-cols-2 md:grid-cols-6 border-t border-foreground/30">
            {process6.map((s, i) => (
              <Reveal key={s.n} delay={0.05 * i}>
                <div className={`py-6 md:py-8 ${i > 0 ? "md:border-l border-foreground/15" : ""} ${i % 2 === 1 ? "border-l border-foreground/15 md:border-l" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground px-4">{s.n}</div>
                  <div className="mt-3 px-4 font-display text-[18px] md:text-[20px] tracking-[-0.01em]">{s.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 PACKAGES */}
      <section className="px-6 md:px-10 bg-foreground text-background">
        <div className="border-t border-background/30 py-24 md:py-32 max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-14">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/55 mb-4">— 02 · PACKAGES</p>
              <Reveal>
                <h2 className="font-display h-display-sm">
                  3 ระดับ. <span className={accent}>เลือกที่ใช่.</span>
                </h2>
              </Reveal>
            </div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/45">
              VALID 30 DAYS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-foreground">
            {packages.map((p) => <PackageCard key={p.key} p={p} />)}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-6 md:px-10">
        <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">— COMPARE</p>
          <Reveal>
            <h2 className="font-display h-display-sm">
              Side by <span className={accent}>side.</span>
            </h2>
          </Reveal>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="border-y border-foreground">
                  <th className="text-left py-4 pr-4 font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground w-[28%]">Feature</th>
                  <th className="text-left py-4 px-4 font-display text-[14px] md:text-[16px] tracking-[-0.01em] w-[24%]">Starter</th>
                  <th className="text-left py-4 px-4 font-display text-[14px] md:text-[16px] tracking-[-0.01em] w-[24%]">
                    Pro <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">★</span>
                  </th>
                  <th className="text-left py-4 px-4 font-display text-[14px] md:text-[16px] tracking-[-0.01em] w-[24%]">
                    Elite <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">♛</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.label} className="border-b border-soft">
                    <td className="py-3.5 pr-4 font-thai text-[13.5px] text-foreground/80">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td key={i} className="py-3.5 px-4 font-mono text-[11.5px] tracking-[0.04em] text-foreground/75">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PACKAGE DEEP DIVE — accordion */}
      <section className="px-6 md:px-10">
        <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">— PACKAGE DETAILS</p>
          <Reveal>
            <h2 className="font-display h-display-sm">
              Everything <span className={accent}>included.</span>
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-foreground">
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
                      <h3 className="font-display text-[26px] md:text-[36px] tracking-[-0.02em] leading-[1.05]">{p.name}</h3>
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
      </section>

      {/* ADD-ONS */}
      <section className="px-6 md:px-10">
        <div className="border-t border-foreground py-24 md:py-32 max-w-[1200px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">— 03 · ADD-ONS</p>
          <Reveal>
            <h2 className="font-display h-display-sm">
              Pay as <span className={accent}>you go.</span>
            </h2>
          </Reveal>
          <p className="mt-6 max-w-[520px] font-thai text-[14.5px] leading-[1.7] text-foreground/70">
            เสริมแพ็กเกจหลักด้วยบริการเฉพาะทาง — ไม่มีค่าผูกมัด · ลูกค้า Elite ได้ส่วนลด 20% ทุก add-on
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-l border-foreground/20">
            {addons.map((a) => (
              <Reveal key={a.name}>
                <div className={`relative border-r border-b border-foreground/20 p-7 md:p-9 h-full ${a.featured ? "bg-foreground text-background" : ""}`}>
                  {a.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-accent text-foreground px-3 py-1 font-mono text-[9px] tracking-[0.25em] uppercase">
                      SAVE 10K
                    </div>
                  )}
                  <h3 className={`font-display text-[20px] md:text-[24px] tracking-[-0.01em] ${a.featured ? "text-background" : ""}`}>{a.name}</h3>
                  <div className={`mt-3 font-display ${a.featured ? "text-gradient" : accent} text-[22px] md:text-[26px] tracking-[-0.02em] tabular-nums`}>{a.price}</div>
                  <p className={`mt-4 font-thai text-[13.5px] leading-[1.65] ${a.featured ? "text-background/70" : "text-foreground/65"}`}>{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="px-6 md:px-10 bg-foreground text-background">
        <div className="border-t border-background/30 py-20 md:py-28 max-w-[1200px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/55 mb-4">— 04 · COMMITMENTS</p>
          <Reveal>
            <h2 className="font-display h-display-sm">
              ความเชื่อใจ <span className={accent}>เริ่มจากความรับผิดชอบ.</span>
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-2 border-t border-background/15">
            {commitments.map((c, i) => (
              <Reveal key={c} delay={0.05 * i}>
                <li className={`py-6 md:py-8 px-1 md:px-2 border-b border-background/15 ${i % 2 === 1 ? "md:border-l border-background/15" : ""}`}>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-background/45 mr-4">0{i + 1}</span>
                  <span className="font-thai text-[14.5px] leading-[1.65]">{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10">
        <div className="border-t border-foreground py-24 md:py-32 max-w-[1000px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">— 05 · FAQ</p>
          <Reveal>
            <h2 className="font-display h-display-sm">
              คำถามที่ <span className={accent}>พบบ่อย.</span>
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-foreground">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="border-b border-foreground/15">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-baseline justify-between gap-6 py-6 md:py-7 text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="font-display text-[17px] md:text-[20px] tracking-[-0.01em] flex-1">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground mr-3">0{i + 1}</span>
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

      {/* TERMS */}
      <section className="px-6 md:px-10">
        <div className="border-t border-foreground py-20 md:py-24 max-w-[1000px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">— 06 · TERMS</p>
          <Reveal>
            <h2 className="font-display text-[24px] md:text-[32px] tracking-[-0.02em]">
              ข้อตกลงและเงื่อนไข
            </h2>
          </Reveal>
          <ul className="mt-10 space-y-3.5 font-thai text-[14px] leading-[1.7] text-foreground/75 max-w-[720px]">
            {[
              "Payment · ชำระล่วงหน้าทุกวันที่ 25 ของเดือนก่อนหน้า",
              "Onboarding Setup Fee · ไม่มี (รวมในแพ็กเกจแล้ว)",
              "Industry Exclusivity · ตกลงร่วมกัน — ไม่รับคู่แข่งโดยตรงในพื้นที่เดียวกัน",
              "Force Majeure · กรณีเหตุสุดวิสัย (algorithm เปลี่ยน, account ถูกแบนโดยไม่ใช่ความผิด, ภัยพิบัติ) ไม่ถือเป็นความรับผิดชอบของ ØRIONS",
              "Cancellation · แจ้งล่วงหน้า 30 วัน · งานที่ผลิตเสร็จแล้วชำระเต็มจำนวน",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-foreground/40 shrink-0">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCTA
        eyebrow="07 · NEXT STEPS"
        title={<>เริ่มต้น <span className={accent}>ทำงานร่วมกัน.</span></>}
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
