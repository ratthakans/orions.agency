import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Download, Phone, Info, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import pleum from "@/assets/pleum.jpg";

const RATECARD_PDF = "/ORIONS_RateCard_2026.pdf";

type Size = "S" | "M" | "L";
const SIZES: { id: Size; label: string }[] = [
  { id: "S", label: "เริ่มต้น" },
  { id: "M", label: "ขยาย" },
  { id: "L", label: "เต็มสูบ" },
];

const tracks = [
  {
    num: "01", name: "Performance", goal: "ยอด", tagline: "Performance, amplified.",
    mindset: "คิดแบบนักการตลาด", sales: 70, brand: 30,
    forWhat: "อยากได้ยอดเดี๋ยวนี้ วัดเป็นตัวเลข",
    prices: { S: "฿24,900", M: "฿49,900", L: "฿99,900" } as Record<Size, string>,
    sub: { S: "3 เดือน · แอดถึง ฿30k", M: "3 เดือน · แอดถึง ฿70k", L: "6 เดือน · แอดถึง ฿150k" } as Record<Size, string>,
    points: [
      "ยิงแอด Meta + TikTok ดูแลทุกวัน (ไซส์ใหญ่ +Google +LINE)",
      "AI แตกครีเอทีฟทดสอบหลายสิบแบบต่อเดือน",
      "คอนเทนต์ + ถ่ายของจริง + รายงานผล",
    ],
  },
  {
    num: "02", name: "Branding", goal: "แบรนด์", tagline: "Stories, refined.",
    mindset: "คิดแบบครีเอทีฟ", sales: 30, brand: 70,
    forWhat: "อยากให้แบรนด์ถูกจำและถูกเลือก",
    prices: { S: "฿24,900", M: "฿49,900", L: "฿99,900" } as Record<Size, string>,
    sub: { S: "3 เดือน · แอดถึง ฿20k", M: "3 เดือน · แอดถึง ฿20k", L: "6 เดือน · แอดถึง ฿20k" } as Record<Size, string>,
    points: [
      "Mini Brand CI for Social → ระบบแบรนด์เต็ม (ไซส์ใหญ่)",
      "คอนเทนต์แบรนด์ + ถ่าย creative-directed",
      "SEO + seeding / KOL + brand film (ไซส์ใหญ่)",
    ],
  },
  {
    num: "03", name: "Hybrid", goal: "ทั้งคู่", tagline: "Both worlds, at once.",
    mindset: "การตลาด + ครีเอทีฟ", sales: 50, brand: 50,
    forWhat: "อยากโตเร็วและยั่งยืนพร้อมกัน",
    prices: { S: "฿32,900", M: "฿64,900", L: "฿129,900" } as Record<Size, string>,
    sub: { S: "3 เดือน · แอดถึง ฿30k", M: "3 เดือน · แอดถึง ฿70k", L: "6 เดือน · แอดถึง ฿150k" } as Record<Size, string>,
    points: [
      "ได้ทั้งยิงแอด + สร้างแบรนด์",
      "Mini Brand CI for Social + กลยุทธ์ 2 ชั้น",
      "AI optimization + production",
    ],
    featured: true,
  },
];

const TRACK_NAMES = ["Performance", "Branding", "Hybrid"] as const;
const goalOf: Record<string, string> = { Performance: "ยอด", Branding: "แบรนด์", Hybrid: "ทั้งคู่" };

type Cmp = { label: string; info: string; size?: boolean; best?: string[]; v: Record<string, string | Record<Size, string>> };
/* Compare rows grouped by theme (mirrors the rate-card PDF) — easier to scan than one long list. */
const compareGroups: { group: string; rows: Cmp[] }[] = [
  { group: "ราคา & ความเหมาะ", rows: [
    { label: "ราคา / เดือน", info: "ค่าบริการรายเดือน ยังไม่รวม VAT 7% และ ad spend", size: true, v: {
      Performance: { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
      Branding: { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
      Hybrid: { S: "฿32,900", M: "฿64,900", L: "฿129,900" },
    }},
    { label: "เหมาะกับ", info: "โจทย์ที่แพ็กนี้ตอบได้ดีที่สุด", v: { Performance: "อยากได้ยอดเดี๋ยวนี้", Branding: "อยากให้แบรนด์ถูกจำ", Hybrid: "โตเร็ว + ยั่งยืน" } },
    { label: "คิดแบบ", info: "ทุกงานคิดใหม่ ไม่ใช้เทมเพลต — ต่างกันแค่ตั้งต้นจาก mindset ไหน", v: { Performance: "การตลาด", Branding: "ครีเอทีฟ", Hybrid: "ทั้งคู่" } },
    { label: "โฟกัส · ยอด / แบรนด์", info: "สัดส่วนระหว่างการทำยอดกับการสร้างแบรนด์", v: { Performance: "70 / 30", Branding: "30 / 70", Hybrid: "50 / 50" } },
  ]},
  { group: "แอด & AI", rows: [
    { label: "ยิงแอด · แพลตฟอร์ม", info: "แพลตฟอร์มที่เรายิงและดูแลให้ (เพิ่มขึ้นตามไซส์)", size: true, best: ["Performance", "Hybrid"], v: {
      Performance: { S: "Meta · TikTok", M: "+ Google", L: "+ Google + LINE" },
      Branding: { S: "เน้น awareness", M: "เน้น awareness", L: "เน้น awareness" },
      Hybrid: { S: "Meta · TikTok", M: "Meta · TikTok", L: "+ เพิ่มแพลตฟอร์ม" },
    }},
    { label: "บริหารแอด (เพดาน)", info: "เราดูแล/บริหารแอดให้ฟรีจนถึงงบเพดานนี้ (เอเจนซีทั่วไปคิด 10–20% ของงบ) — ส่วนค่ายิงแอดจริง (ad spend) ลูกค้าจ่ายเอง", size: true, best: ["Performance", "Hybrid"], v: {
      Performance: { S: "฿30k", M: "฿70k", L: "฿150k" },
      Branding: { S: "฿20k", M: "฿20k", L: "฿20k" },
      Hybrid: { S: "฿30k", M: "฿70k", L: "฿150k" },
    }},
    { label: "AI optimization", info: "ระบบ AI ปรับแอดอัตโนมัติให้คุ้มงบที่สุด (ไซส์ L)", best: ["Performance", "Hybrid"], v: { Performance: "ไซส์ L", Branding: "—", Hybrid: "ไซส์ L" } },
  ]},
  { group: "คอนเทนต์ & โปรดักชัน", rows: [
    { label: "คอนเทนต์ · รีล / โพสต์", info: "จำนวนคอนเทนต์ออร์แกนิกต่อเดือน", size: true, best: ["Branding"], v: {
      Performance: { S: "5 / 8", M: "10 / 12", L: "12 / 14" },
      Branding: { S: "10 / 14", M: "20 / 20", L: "24 / 24" },
      Hybrid: { S: "8 / 11", M: "15 / 16", L: "18 / 20" },
    }},
    { label: "ถ่ายของจริง", info: "วันถ่ายโปรดักชันจริงต่อเดือน", size: true, v: {
      Performance: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
      Branding: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
      Hybrid: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
    }},
  ]},
  { group: "ระบบแบรนด์ & SEO", rows: [
    { label: "Brand CI", info: "ระบบอัตลักษณ์แบรนด์ — เริ่มจาก Mini Brand CI สำหรับโซเชียล", size: true, best: ["Branding"], v: {
      Performance: { S: "—", M: "—", L: "—" },
      Branding: { S: "Mini Brand CI", M: "Full CI", L: "Full + องค์กร" },
      Hybrid: { S: "Mini Brand CI", M: "พื้นฐาน", L: "Full" },
    }},
    { label: "SEO / seeding", info: "บทความ SEO และการกระจายเนื้อหา (seeding / รีวิว)", best: ["Branding"], v: { Performance: "ไซส์ L", Branding: "ทุกไซส์ (+KOL)", Hybrid: "M ขึ้นไป" } },
    { label: "Brand film / long-form", info: "วิดีโอแบรนด์หรือคอนเทนต์ยาว", best: ["Branding", "Hybrid"], v: { Performance: "—", Branding: "ไซส์ใหญ่", Hybrid: "ไซส์ใหญ่" } },
  ]},
  { group: "เงื่อนไข", rows: [
    { label: "สัญญาขั้นต่ำ", info: "ระยะเวลาผูกพันขั้นต่ำของแพ็ก", size: true, v: {
      Performance: { S: "3 เดือน", M: "3 เดือน", L: "6 เดือน" },
      Branding: { S: "3 เดือน", M: "3 เดือน", L: "6 เดือน" },
      Hybrid: { S: "3 เดือน", M: "3 เดือน", L: "6 เดือน" },
    }},
  ]},
];

const addons = [
  { k: "Ads Static / Video", v: "฿600 / ฿2,500", info: "ครีเอทีฟแอดเพิ่มต่อชิ้น — ภาพนิ่ง / วิดีโอ สำหรับยิงโฆษณา" },
  { k: "UGC / Review content", v: "฿2,500", info: "คอนเทนต์รีวิว/ใช้จริงจากผู้ใช้ ดูธรรมชาติ น่าเชื่อถือ" },
  { k: "KOL / Influencer Management", v: "เริ่ม ฿8,000 / แคมเปญ", info: "จัดหา ดีล และดูแล KOL / micro-influencer ให้ตรงกลุ่ม พร้อมสรุปผล" },
  { k: "Google Ads Management", v: "฿7,900 / ด.", info: "ดูแลและยิงโฆษณา Google Search & Display" },
  { k: "LINE Ads Management", v: "฿6,900 / ด.", info: "ดูแลและยิงโฆษณาบน LINE" },
  { k: "Motion Graphic / Explainer", v: "฿6,500 / ชิ้น", info: "โมชั่นกราฟิกอธิบายสินค้า/บริการ — ลื่น เข้าใจง่าย" },
  { k: "Photo Retouching", v: "฿800 / ภาพ", info: "รีทัชภาพระดับโฆษณา — สี ผิว แสง เก็บดีเทลครบ" },
  { k: "Seeding / IO (10 โพสต์)", v: "฿4,500 / ชุด", info: "กระจายโพสต์ในกลุ่ม/เพจ สร้างกระแสและความน่าเชื่อ" },
  { k: "SEO Article", v: "฿3,500 / บทความ", info: "บทความ SEO ให้ลูกค้าเจอคุณบน Google" },
  { k: "Landing page", v: "฿4,000 / หน้า", info: "หน้าเว็บรับแคมเปญ — ปิดการขาย / เก็บลีด" },
  { k: "Corporate Website", v: "เริ่ม ฿39,000", info: "เว็บไซต์องค์กรหลายหน้า — ออกแบบ + พัฒนา responsive" },
  { k: "Email / CRM Automation", v: "เริ่ม ฿9,000", info: "วางระบบอีเมล/CRM อัตโนมัติ — ดูแลลูกค้าและกระตุ้นยอดซ้ำ" },
  { k: "Logo Design", v: "เริ่ม ฿12,000", info: "ออกแบบโลโก้ + แนวทางใช้งานเบื้องต้น" },
  { k: "Hero Brand Film", v: "฿25,000", info: "หนังแบรนด์ชิ้นเอก สำหรับเปิดตัว / วางภาพลักษณ์" },
  { k: "CI / Brand Guideline", v: "เริ่ม ฿35,000", info: "คู่มืออัตลักษณ์แบรนด์ — โลโก้ สี ฟอนต์ การใช้งาน" },
];

const production = [
  { k: "Essential Day", v: "฿15,000 / วัน", info: "ทีมถ่ายชุดเล็ก — เหมาะคอนเทนต์เร็ว run-and-gun" },
  { k: "Standard Day", v: "฿35,000 / วัน", info: "ทีมถ่ายมาตรฐาน — ยอดนิยม คุ้มสุด" },
  { k: "Signature Day", v: "฿95,000 / วัน", info: "โปรดักชันเต็มรูปแบบ สำหรับงานชิ้นเอก" },
];

const faqs = [
  { q: "เลือก track ไหนดี?",
    a: "ตอบคำถามเดียว — ตอนนี้คุณต้องการ ยอด (Performance), แบรนด์ (Branding), หรือทั้งคู่ (Hybrid)." },
  { q: "S / M / L ต่างกันยังไง?",
    a: "ขนาดทีมและปริมาณงานต่อเดือน — S เริ่มต้น (ยอดนิยม), M ขยาย, L เต็มสูบ. เริ่มเล็กแล้วขยับขึ้นได้." },
  { q: "ทำไม Performance กับ Branding ราคาเท่ากัน?",
    a: "ทุกงานคิดใหม่ให้ตรงธุรกิจคุณ ไม่ใช้เทมเพลต — ต่างกันแค่ตั้งต้นจาก mindset: Performance คิดแบบการตลาด · Branding คิดแบบครีเอทีฟ. AI ช่วยให้เร็วขึ้น ไม่ใช่ส่วนลด." },
];

/** Info tooltip — (i) icon that explains a line item on hover / focus. */
const InfoTip = ({ text }: { text: string }) => (
  <span className="relative inline-flex group/tip align-middle ml-1.5" tabIndex={0} title={text} aria-label={text}>
    <Info className="w-3.5 h-3.5 text-muted-foreground/55 hover:text-cinnabar cursor-help shrink-0" />
    <span role="tooltip" className="pointer-events-none absolute left-0 top-full mt-2 w-max max-w-[220px] rounded-lg border border-foreground/15 bg-surface-2 px-3 py-2 font-thai text-[11.5px] leading-snug tracking-normal normal-case text-foreground/90 opacity-0 translate-y-1 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 group-focus-within/tip:opacity-100 transition-all duration-200 z-40 shadow-xl">
      {text}
    </span>
  </span>
);

const CompareTable = ({ size }: { size: Size }) => (
  <div className="overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
    <table className="w-full table-fixed min-w-[640px] border-collapse">
      <colgroup>
        <col className="w-[150px] md:w-[180px]" />
        <col /><col /><col />
      </colgroup>
      <thead>
        <tr className="border-b-2 border-foreground">
          <th className="sticky left-0 z-10 bg-[hsl(var(--card))]" />
          {TRACK_NAMES.map((name) => {
            const featured = name === "Hybrid";
            return (
              <th key={name} className={`text-left py-4 px-3 align-bottom ${featured ? "bg-cinnabar/[0.04] rounded-t-xl" : ""}`}>
                <div className="flex items-center gap-2">
                  <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{goalOf[name]}</span>
                  {featured && <span lang="th" className="font-thai text-[9px] leading-none text-background bg-cinnabar rounded-full px-2 py-1">คุ้มสุด</span>}
                </div>
                <div className="mt-1 text-[15px] md:text-[18px] font-semibold tracking-[-0.01em]">{name}</div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {compareGroups.map((g) => (
          <Fragment key={g.group}>
            {/* group divider — label lives in the sticky first column so it survives horizontal scroll */}
            <tr aria-hidden>
              <td lang="th" className="pt-6 pb-1.5 font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/80 whitespace-nowrap sticky left-0 z-10 bg-[hsl(var(--card))]">
                — {g.group}
              </td>
              <td /><td /><td className="bg-cinnabar/[0.04]" />
            </tr>
            {g.rows.map((row) => {
              const isPrice = row.label.startsWith("ราคา");
              return (
                <tr key={row.label} className={`border-b border-foreground/10 ${isPrice ? "bg-cinnabar/[0.06]" : "hover:bg-foreground/[0.02] transition-colors"}`}>
                  <td lang="th" className="py-3.5 pr-3 font-thai text-[12.5px] text-foreground/75 align-middle sticky left-0 z-10 bg-[hsl(var(--card))]">
                    <span className="inline-flex items-center">{row.label}<InfoTip text={row.info} /></span>
                  </td>
                  {TRACK_NAMES.map((name) => {
                    const raw = row.v[name];
                    const val = row.size ? (raw as Record<Size, string>)[size] : (raw as string);
                    const win = !isPrice && row.best?.includes(name);
                    const base = isPrice
                      ? "num-display text-[18px] md:text-[22px] text-cinnabar"
                      : win
                      ? "font-thai text-[13px] font-semibold text-cinnabar"
                      : val === "—"
                      ? "font-thai text-[13px] text-foreground/30"
                      : "font-thai text-[13px] text-foreground/85";
                    return (
                      <td key={name} lang="th" className={`py-3.5 px-3 align-middle ${name === "Hybrid" ? "bg-cinnabar/[0.04]" : ""} ${base}`}>{val}</td>
                    );
                  })}
                </tr>
              );
            })}
          </Fragment>
        ))}
      </tbody>
    </table>
  </div>
);

/** Shared S/M/L segmented control — used above the cards and inside the compare table (synced). */
const SizeToggle = ({ size, setSize, compact = false }: { size: Size; setSize: (s: Size) => void; compact?: boolean }) => (
  <div className="inline-flex rounded-full border border-foreground/30 overflow-hidden shrink-0">
    {SIZES.map((s) => (
      <button key={s.id} type="button" onClick={() => setSize(s.id)}
        className={`font-thai text-[11px] tracking-[0.02em] transition-colors ${compact ? "px-4 py-2" : "px-5 py-2.5"} ${size === s.id ? "bg-cinnabar text-background" : "text-foreground/60 hover:text-foreground"} ${s.id !== "S" ? "border-l border-foreground/30" : ""}`}>
        {compact ? s.id : `${s.id} · ${s.label}`}
      </button>
    ))}
  </div>
);

const PricingSection = () => {
  const [size, setSize] = useState<Size>("S");
  const [showCompare, setShowCompare] = useState(false);
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="The choice" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[22ch] thai-wrap">
            ตอนนี้คุณต้องการ <em className="text-cinnabar">อะไร?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[15px] leading-[1.7] text-muted-foreground">
            เลือก track ตามเป้าหมาย แล้วเลือกขนาดทีม — ยอด (Performance) · แบรนด์ (Branding) · หรือทั้งคู่ (Hybrid).
          </p>
        </Reveal>

        {/* Step 1: size selector */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2.5">
            <span className="grid place-items-center w-6 h-6 rounded-full bg-cinnabar text-background num-display text-[13px]">1</span>
            <span lang="th" className="font-thai text-[13px] text-foreground">เลือกขนาดทีม</span>
          </span>
          <SizeToggle size={size} setSize={setSize} />
        </div>

        {/* Step 2: track cards */}
        <div className="mt-6 mb-5 inline-flex items-center gap-2.5">
          <span className="grid place-items-center w-6 h-6 rounded-full bg-cinnabar text-background num-display text-[13px]">2</span>
          <span lang="th" className="font-thai text-[13px] text-foreground">เลือก track แล้วกดเพื่อส่งโจทย์</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className={`relative h-full flex flex-col p-7 md:p-8 ${t.featured ? "card-accent lg:-my-3 lg:py-10" : "card-soft"}`}>
                {t.featured && <span className="ribbon-pill absolute -top-3 left-7">คุ้มสุด</span>}
                <div className="flex items-center justify-between gap-3">
                  <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{t.goal} · {t.mindset}</span>
                  <span className="font-mono text-[10px] tracking-[0.04em] text-muted-foreground shrink-0">{t.sales}/{t.brand}</span>
                </div>
                <h3 className="mt-3 text-[26px] md:text-[30px] leading-none font-semibold tracking-[-0.02em]">{t.name}</h3>
                <div className="mt-1 font-serif text-foreground/70 text-[15px]">{t.tagline}</div>

                <div className="mt-4 flex h-1.5 overflow-hidden rounded-full">
                  <span className="bg-cinnabar" style={{ width: `${t.sales}%` }} />
                  <span className="bg-foreground/15" style={{ width: `${t.brand}%` }} />
                </div>

                <p lang="th" className="mt-5 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground">{t.forWhat}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="num-display text-[38px] md:text-[44px] text-cinnabar">{t.prices[size]}</span>
                  <span className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">/ เดือน</span>
                </div>
                <div lang="th" className="mt-1.5 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">{t.sub[size]}</div>

                <ul className="mt-6 space-y-2.5 border-t border-foreground/15 pt-6 flex-1">
                  {t.points.map((p) => (
                    <li key={p} lang="th" className="grid grid-cols-[16px_1fr] gap-2.5 font-thai thai-wrap text-[13px] leading-[1.5] text-foreground/85">
                      <Check className="w-3.5 h-3.5 text-foreground/45 mt-0.5" /><span>{p}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/contact?pkg=${encodeURIComponent(`${t.name} · ${size}`)}`} className={`mt-7 justify-between ${t.featured ? "btn-accent" : "btn-ghost"}`}>
                  <span>เลือก {t.name} · {size}</span><ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p lang="th" className="mt-6 font-thai text-[12px] leading-[1.6] text-muted-foreground max-w-[640px]">
          ราคาไม่รวม VAT 7% · <span className="text-foreground/80">ค่าบริหารแอดเรารวมให้ฟรีจนถึงงบเพดาน — แต่ค่ายิงแอดจริง (ad spend) ลูกค้าจ่ายเอง</span> (เอเจนซีทั่วไปคิดค่าบริหาร 10–20% ของงบ)
        </p>

        {/* Full comparison — collapsed by default to keep the page light */}
        <div className="mt-20">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-7">
            <div>
              <SectionLabel label="Compare" />
              <h3 lang="th" className="mt-4 h-display-sm">เทียบให้เห็นชัด</h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {showCompare && (
                <>
                  <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">ขนาด</span>
                  <SizeToggle size={size} setSize={setSize} compact />
                </>
              )}
              <button
                type="button"
                onClick={() => setShowCompare((v) => !v)}
                aria-expanded={showCompare}
                className="btn-ghost"
              >
                <span lang="th">{showCompare ? "ซ่อนตาราง" : "ดูตารางเทียบ"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCompare ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
          {showCompare && (
            <Reveal>
              <div className="card-soft p-4 md:p-6">
                <CompareTable size={size} />
              </div>
              <p lang="th" className="mt-4 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">
                <span className="md:hidden">เลื่อนตารางไปทางขวาเพื่อดูครบทุกแพ็ก → · </span>
                ชี้ที่ <Info className="inline w-3 h-3 -mt-0.5" /> เพื่อดูคำอธิบาย · กด S/M/L ได้ทั้งบนการ์ดและในตาราง
              </p>
            </Reveal>
          )}

          {/* Not in package → talk to sales (custom) */}
          <div className="mt-10 card-soft p-6 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] text-foreground/85 max-w-[52ch]">
              ไม่เจอสิ่งที่ต้องการในแพ็ก? เราจัด <span className="text-cinnabar font-medium">custom</span> ให้ได้ตามโจทย์และงบ — คุยกับฝ่ายขายได้เลย.
            </p>
            <div className="flex gap-3 shrink-0">
              <a href="tel:+66655169925" className="btn-ghost"><Phone className="w-4 h-4" /><span>065-516-9925</span></a>
              <Link to="/contact?pkg=Custom" className="btn-accent"><span>คุยกับฝ่ายขาย</span><ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const priceOf = (name: string, size: Size) => tracks.find((t) => t.name === name)?.prices[size] || "";
const priceNum = (name: string, size: Size) => parseInt((priceOf(name, size) || "").replace(/[^0-9]/g, ""), 10) || 0;
const adCapOf = (name: string, size: Size) => (name === "Branding" ? 20000 : size === "L" ? 150000 : size === "M" ? 70000 : 30000);
const fmtBaht = (n: number) => "฿" + n.toLocaleString("en-US");
const fmtK = (n: number) => (n >= 1000 ? "฿" + Math.round(n / 1000) + "k" : "฿" + n);

const addonSuggest: Record<string, string[]> = {
  Performance: ["Google Ads Management", "LINE Ads Management", "Landing page"],
  Branding: ["CI / Brand Guideline", "Hero Brand Film", "SEO Article"],
  Hybrid: ["Landing page", "SEO Article", "Seeding / IO (10 โพสต์)"],
};
const addonPriceMap: Record<string, string> = Object.fromEntries(addons.map((a) => [a.k, a.v]));

const goalBtns: { id: "Performance" | "Branding" | "Hybrid"; label: string; sales: number; brand: number }[] = [
  { id: "Performance", label: "เน้นยอด", sales: 70, brand: 30 },
  { id: "Branding", label: "เน้นแบรนด์", sales: 30, brand: 70 },
  { id: "Hybrid", label: "ทั้งคู่", sales: 50, brand: 50 },
];

/** Budget calculator → suggests budget split (fee + ad spend), package + add-ons, then sends to sales. */
const BudgetCalculator = () => {
  const [sales, setSales] = useState("");
  const [launched, setLaunched] = useState<boolean | null>(null);
  const [goal, setGoal] = useState<"Performance" | "Branding" | "Hybrid" | null>(null);

  const salesNum = parseInt(sales.replace(/[^0-9]/g, ""), 10) || 0;
  const rate = launched === false ? 0.6 : 0.3;
  const budget = Math.round(salesNum * rate);
  const ready = salesNum > 0 && launched !== null && goal !== null;

  // out-of-range → custom; otherwise size by budget capacity
  const tooSmall = budget > 0 && budget < 24900;
  const tooBig = budget > 300000;
  const isCustom = ready && (tooSmall || tooBig);
  const recSize: Size = budget >= 130000 ? "L" : budget >= 58000 ? "M" : "S";
  const pkgName = goal && !isCustom ? `${goal} · ${recSize}` : "";
  const feeNum = goal && !isCustom ? priceNum(goal, recSize) : 0;
  const cap = goal && !isCustom ? adCapOf(goal, recSize) : 0;
  const adSpend = Math.max(0, Math.min(budget - feeNum, cap));
  const suggestedAddons = goal ? addonSuggest[goal] : [];

  const optBtn = (active: boolean) =>
    `group rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${active ? "border-cinnabar bg-cinnabar" : "border-foreground/15 hover:border-cinnabar hover:bg-cinnabar"}`;

  return (
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="Budget calculator" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">
            ไม่รู้จะเริ่มที่ไซส์ไหน? <em className="text-cinnabar">คำนวณจากยอดที่ตั้งไว้.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p lang="th" className="mt-5 max-w-[600px] font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground">
            กรอก 3 ข้อ แล้วเราจะแนะนำ <span className="text-foreground/80">งบการตลาด · งบยิงแอด · แพ็กที่เหมาะ · add-on</span> ให้ทันที.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Inputs */}
          <div className="card-soft p-7 md:p-9 flex flex-col gap-9">
            {/* 1 — sales */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-cinnabar text-background num-display text-[13px]">1</span>
                <label lang="th" className="font-thai text-[13px] text-foreground">ยอดขายที่คาดหวัง / เดือน</label>
              </div>
              <div className="mt-4 flex items-center gap-2 border-b-2 border-foreground/20 focus-within:border-cinnabar transition-colors pb-2">
                <span className="num-display text-cinnabar text-[26px]">฿</span>
                <input inputMode="numeric" value={salesNum ? salesNum.toLocaleString("en-US") : ""} onChange={(e) => setSales(e.target.value)}
                  placeholder="500,000" className="w-full bg-transparent num-display text-[26px] md:text-[30px] text-foreground placeholder:text-foreground/25 focus:outline-none" />
                <span lang="th" className="font-thai text-[12px] text-muted-foreground shrink-0">บาท</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[100000, 300000, 500000, 1000000].map((n) => (
                  <button key={n} type="button" onClick={() => setSales(String(n))}
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] tracking-[0.02em] transition-colors ${salesNum === n ? "border-cinnabar bg-cinnabar text-background" : "border-foreground/20 text-foreground/60 hover:border-cinnabar hover:text-foreground"}`}>
                    {fmtK(n)}
                  </button>
                ))}
              </div>
            </div>

            {/* 2 — launched */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-cinnabar text-background num-display text-[13px]">2</span>
                <label lang="th" className="font-thai text-[13px] text-foreground">สินค้านี้เคยออกตลาดมาก่อนไหม?</label>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { v: true, t: "เคยแล้ว", s: "คนเริ่มรู้จัก · งบ 30%" },
                  { v: false, t: "ยังไม่เคย", s: "ต้อง launch · งบ 60%" },
                ].map((o) => {
                  const on = launched === o.v;
                  return (
                    <button key={o.t} type="button" onClick={() => setLaunched(o.v)} className={optBtn(on)}>
                      <div className="flex items-center justify-between">
                        <span lang="th" className={`font-thai text-[14px] ${on ? "text-background" : "text-foreground group-hover:text-background"}`}>{o.t}</span>
                        <Check className={`w-4 h-4 ${on ? "text-background" : "text-transparent group-hover:text-background/70"}`} />
                      </div>
                      <div lang="th" className={`font-thai text-[11px] mt-1 ${on ? "text-background/80" : "text-muted-foreground group-hover:text-background/80"}`}>{o.s}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3 — goal */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-cinnabar text-background num-display text-[13px]">3</span>
                <label lang="th" className="font-thai text-[13px] text-foreground">เป้าหมายของคุณ</label>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {goalBtns.map((g) => {
                  const on = goal === g.id;
                  return (
                    <button key={g.id} type="button" onClick={() => setGoal(g.id)} className={optBtn(on) + " text-center"}>
                      <div lang="th" className={`font-thai text-[13px] leading-tight ${on ? "text-background" : "text-foreground group-hover:text-background"}`}>{g.label}</div>
                      <div className="mt-2 flex h-1 overflow-hidden rounded-full">
                        <span className={on ? "bg-background" : "bg-cinnabar group-hover:bg-background"} style={{ width: `${g.sales}%` }} />
                        <span className={on ? "bg-background/30" : "bg-foreground/15 group-hover:bg-background/30"} style={{ width: `${g.brand}%` }} />
                      </div>
                      <div className={`mt-1.5 font-mono text-[9px] tracking-[0.04em] ${on ? "text-background" : "text-cinnabar group-hover:text-background"}`}>{g.sales}/{g.brand}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="card-accent p-7 md:p-9 flex flex-col min-h-[460px]">
            {!ready ? (
              <div className="m-auto text-center py-10">
                <div className="num-display text-foreground/15 text-[72px] leading-none">?</div>
                <p lang="th" className="mt-3 font-thai text-[14px] text-muted-foreground max-w-[26ch] mx-auto">กรอกยอด + ตอบ 2 ข้อ แล้วเราจะแนะนำให้ทันที</p>
              </div>
            ) : isCustom ? (
              <div className="flex flex-col h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Custom</div>
                <div className="mt-4 num-display text-cinnabar text-[40px] md:text-[48px] leading-none">{fmtBaht(budget)}<span className="font-thai text-[13px] text-muted-foreground ml-2">งบ/เดือน</span></div>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-foreground/85">
                  {tooSmall ? "งบต่ำกว่าแพ็กเริ่มต้น (฿24,900) — เราช่วยจัดแผนเล็กที่พอดีงบได้." : "งบเกินแพ็ก L มาตรฐาน — เหมาะกับแผน custom / enterprise."}
                </p>
                <div className="mt-auto pt-7 flex flex-col gap-3">
                  <Link to={`/contact?pkg=${encodeURIComponent(`Custom · ${goal}`)}`} className="btn-accent justify-between">
                    <span>คุยกับฝ่ายขาย (จัด custom)</span><ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+66655169925" className="btn-ghost justify-center"><Phone className="w-4 h-4" /><span>065-516-9925</span></a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— แนะนำ</div>
                {/* breakdown */}
                <dl className="mt-5 space-y-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt lang="th" className="font-thai text-[13px] text-muted-foreground">งบการตลาดรวม ({Math.round(rate * 100)}%)</dt>
                    <dd className="num-display text-foreground text-[22px]">{fmtBaht(budget)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt lang="th" className="font-thai text-[13px] text-muted-foreground">ค่าบริการ ORIONS</dt>
                    <dd className="num-display text-cinnabar text-[20px]">{fmtBaht(feeNum)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt lang="th" className="font-thai text-[13px] text-muted-foreground">งบยิงแอด <span className="text-foreground/45">(ad spend)</span></dt>
                    <dd className="num-display text-foreground text-[20px]">{fmtBaht(adSpend)}</dd>
                  </div>
                </dl>
                <p lang="th" className="mt-2 font-thai text-[10.5px] text-muted-foreground">ค่ายิงแอดจริงลูกค้าจ่ายเอง · เราดูแล/บริหารแอดให้ถึงเพดาน {fmtK(cap)}</p>

                {/* package */}
                <div className="mt-5 pt-5 border-t border-foreground/15">
                  <p lang="th" className="font-thai text-[12px] text-muted-foreground">แพ็กที่เหมาะกับคุณ</p>
                  <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                    <span className="h-display-sm">{pkgName}</span>
                    <span className="num-display text-cinnabar text-[20px]">{priceOf(goal!, recSize)}</span>
                  </div>
                </div>

                {/* add-ons */}
                <div className="mt-5">
                  <p lang="th" className="font-thai text-[12px] text-muted-foreground">add-on ที่แนะนำ</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {suggestedAddons.map((a) => (
                      <span key={a} lang="th" className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-surface-2 px-3 py-1 font-thai text-[11.5px] text-foreground/85">
                        {a} <span className="text-cinnabar">{addonPriceMap[a]}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={`/contact?pkg=${encodeURIComponent(pkgName)}`} className="btn-accent justify-between mt-7">
                  <span>เลือกแพ็กนี้ · ส่งให้ฝ่ายขาย</span><ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Package = () => (
  <div>
    <SEO
      title="Rate Card 2026 — แพ็กเกจและราคา · ØRIONS"
      description="Performance × Branding รายเดือน — เลือก track (Performance / Branding / Hybrid) เลือกขนาด (S/M/L) แล้วเริ่มได้เลย. ทุกงานคิดใหม่ ไม่ใช้เทมเพลต."
      path="/package"
    />

    {/* 01 — HERO */}
    <section className="section-ink px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="01" label="Rate Card 2026" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-10 h-display-lg max-w-[18ch] thai-wrap">
            เลือก track เลือกขนาด <em className="text-cinnabar">แล้วเริ่มได้เลย.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            ทุกงานคิดใหม่ให้ตรงธุรกิจคุณ <strong className="text-foreground">ไม่ใช้เทมเพลต</strong> — ต่างกันแค่ตั้งต้นจาก mindset: การตลาด (Performance) · ครีเอทีฟ (Branding) · หรือทั้งคู่ (Hybrid).
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={RATECARD_PDF} download className="btn-accent">
              <Download className="w-4 h-4" /><span>ดาวน์โหลด Rate Card (PDF)</span>
            </a>
            <a href="tel:+66655169925" className="btn-ghost">
              <Phone className="w-4 h-4" /><span>คุยกับฝ่ายขาย 065-516-9925</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — PRICING */}
    <PricingSection />

    {/* 03 — BUDGET CALCULATOR */}
    <BudgetCalculator />

    {/* 04 — ADD-ONS + PRODUCTION */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <SectionLabel index="04" label="Add-on menu" />
          <Reveal delay={0.05}><h2 lang="th" className="mt-8 h-display-sm">เสริมได้ตามต้องการ.</h2></Reveal>
          <dl className="card-soft mt-8 px-6 md:px-7 py-2">
            {addons.map((a, i) => (
              <div key={a.k} className={`flex items-baseline justify-between gap-6 py-3 ${i !== addons.length - 1 ? "border-b border-foreground/12" : ""}`}>
                <dt lang="th" className="font-thai text-[14px] text-foreground/85 inline-flex items-center">{a.k}<InfoTip text={a.info} /></dt>
                <dd className="font-mono text-[12px] tracking-[0.02em] text-cinnabar shrink-0">{a.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <SectionLabel index="05" label="ORIONS Production" />
          <Reveal delay={0.05}><h2 lang="th" className="mt-8 h-display-sm">มี brief แล้ว ขาดทีมออกกอง.</h2></Reveal>
          <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground max-w-[44ch]">
            senior crew + Sony A7V / FX6 + GM glass · raw + same-day proxy.
          </p>
          <dl className="card-soft mt-8 px-6 md:px-7 py-2">
            {production.map((a, i) => (
              <div key={a.k} className={`flex items-baseline justify-between gap-6 py-3 ${i !== production.length - 1 ? "border-b border-foreground/12" : ""}`}>
                <dt lang="th" className="font-thai text-[14px] text-foreground/85 inline-flex items-center">{a.k}<InfoTip text={a.info} /></dt>
                <dd className="font-mono text-[12px] tracking-[0.02em] text-cinnabar shrink-0">{a.v}</dd>
              </div>
            ))}
          </dl>
          <p lang="th" className="mt-5 font-thai text-[11px] tracking-[0.02em] text-muted-foreground leading-[1.6]">
            ซื้อ 3+ add-ons ลด 10% · จ้าง 2 สายลด 10% · 3 สายลด 15%
          </p>
        </div>
      </div>
    </section>

    {/* 05 — FAQ */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="06" label="Before you ask" />
        <Reveal delay={0.05}><h2 className="mt-10 h-display-md">The short <em className="text-cinnabar">answers.</em></h2></Reveal>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 06 — TALK TO SALES (ปลื้ม) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="07" label="Talk to sales" />
        <Reveal delay={0.05}>
          <div className="mt-10 card-soft p-6 md:p-9 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <img
              src={pleum}
              alt="ปลื้ม — Sales Executive, ØRIONS"
              className="w-28 h-28 md:w-40 md:h-40 rounded-2xl object-cover object-top shrink-0"
            />
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Sales Executive</div>
              <h3 className="mt-2 h-display-sm">ปลื้ม</h3>
              <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground max-w-[52ch]">
                อยากได้ใบเสนอราคา หรือไม่แน่ใจว่าแพ็กไหนเหมาะ — ทักได้เลย ยินดีแนะนำตรง ๆ.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+66655169925" className="btn-accent">
                  <Phone className="w-4 h-4" /><span>065-516-9925</span>
                </a>
                <a href={RATECARD_PDF} download className="btn-ghost">
                  <Download className="w-4 h-4" /><span>ดาวน์โหลด Rate Card</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 07 — CTA */}
    <CTABand
      eyebrow="Not sure yet?"
      title={<>ไม่แน่ใจว่าควรเลือก track ไหน? <em className="text-cinnabar">ให้ audit ช่วยมอง.</em></>}
      subtitle="ตอบ 6 ข้อ · 1 นาที · ฟรี — หรือคุย Discovery Call 45 นาที."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="ink"
    />
  </div>
);

export default Package;
