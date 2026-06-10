import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Download, Phone, Info } from "lucide-react";
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
    sub: { S: "3 เดือน · แอดถึง ฿50k", M: "3 เดือน · แอดถึง ฿120k", L: "6 เดือน · แอดถึง ฿250k" } as Record<Size, string>,
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
    sub: { S: "3 เดือน · แอดถึง ฿30k", M: "3 เดือน · แอดถึง ฿30k", L: "6 เดือน · แอดถึง ฿30k" } as Record<Size, string>,
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
    sub: { S: "3 เดือน · แอดถึง ฿50k", M: "3 เดือน · แอดถึง ฿120k", L: "6 เดือน · แอดถึง ฿250k" } as Record<Size, string>,
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

type Cmp = { label: string; info: string; size?: boolean; v: Record<string, string | Record<Size, string>> };
const compareRows: Cmp[] = [
  { label: "ราคา / เดือน", info: "ค่าบริการรายเดือน ยังไม่รวม VAT 7% และ ad spend", size: true, v: {
    Performance: { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
    Branding: { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
    Hybrid: { S: "฿32,900", M: "฿64,900", L: "฿129,900" },
  }},
  { label: "เหมาะกับ", info: "โจทย์ที่แพ็กนี้ตอบได้ดีที่สุด", v: { Performance: "อยากได้ยอดเดี๋ยวนี้", Branding: "อยากให้แบรนด์ถูกจำ", Hybrid: "โตเร็ว + ยั่งยืน" } },
  { label: "คิดแบบ", info: "ทุกงานคิดใหม่ ไม่ใช้เทมเพลต — ต่างกันแค่ตั้งต้นจาก mindset ไหน", v: { Performance: "การตลาด", Branding: "ครีเอทีฟ", Hybrid: "ทั้งคู่" } },
  { label: "โฟกัส · ยอด / แบรนด์", info: "สัดส่วนระหว่างการทำยอดกับการสร้างแบรนด์", v: { Performance: "70 / 30", Branding: "30 / 70", Hybrid: "50 / 50" } },
  { label: "ยิงแอด", info: "แพลตฟอร์มที่เรายิงและดูแลให้", v: { Performance: "Meta · TikTok (+Google/LINE)", Branding: "เน้น awareness", Hybrid: "Meta · TikTok" } },
  { label: "บริหารแอด (เพดาน)", info: "เราบริหารแอดให้จนถึงงบนี้ — ตลาดทั่วไปคิด 10–20% ของงบแยกต่างหาก", size: true, v: {
    Performance: { S: "฿50k", M: "฿120k", L: "฿250k" },
    Branding: { S: "฿30k", M: "฿30k", L: "฿30k" },
    Hybrid: { S: "฿50k", M: "฿120k", L: "฿250k" },
  }},
  { label: "AI optimization", info: "ระบบ AI ปรับแอดอัตโนมัติให้คุ้มงบที่สุด (ไซส์ L)", v: { Performance: "ไซส์ L", Branding: "—", Hybrid: "ไซส์ L" } },
  { label: "คอนเทนต์ · รีล / โพสต์", info: "จำนวนคอนเทนต์ออร์แกนิกต่อเดือน", size: true, v: {
    Performance: { S: "5 / 8", M: "10 / 12", L: "12 / 14" },
    Branding: { S: "10 / 14", M: "20 / 20", L: "24 / 24" },
    Hybrid: { S: "5 / 6", M: "9 / 10", L: "14 / 14" },
  }},
  { label: "ถ่ายของจริง", info: "วันถ่ายโปรดักชันจริงต่อเดือน", size: true, v: {
    Performance: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
    Branding: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
    Hybrid: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
  }},
  { label: "Brand CI", info: "ระบบอัตลักษณ์แบรนด์ — เริ่มจาก Mini Brand CI สำหรับโซเชียล", size: true, v: {
    Performance: { S: "—", M: "—", L: "—" },
    Branding: { S: "Mini Brand CI", M: "Full CI", L: "Full + องค์กร" },
    Hybrid: { S: "Mini Brand CI", M: "พื้นฐาน", L: "Full" },
  }},
  { label: "SEO / seeding", info: "บทความ SEO และการกระจายเนื้อหา (seeding / รีวิว)", v: { Performance: "ไซส์ L", Branding: "ทุกไซส์ (+KOL)", Hybrid: "M ขึ้นไป" } },
  { label: "Brand film / long-form", info: "วิดีโอแบรนด์หรือคอนเทนต์ยาว", v: { Performance: "—", Branding: "ไซส์ใหญ่", Hybrid: "ไซส์ใหญ่" } },
  { label: "สัญญาขั้นต่ำ", info: "ระยะเวลาผูกพันขั้นต่ำของแพ็ก", size: true, v: {
    Performance: { S: "3 เดือน", M: "3 เดือน", L: "6 เดือน" },
    Branding: { S: "3 เดือน", M: "3 เดือน", L: "6 เดือน" },
    Hybrid: { S: "3 เดือน", M: "3 เดือน", L: "6 เดือน" },
  }},
];

const addons = [
  { k: "Ads Static / Video", v: "฿600 / ฿2,500" },
  { k: "UGC / Review content", v: "฿2,500" },
  { k: "Google Ads Management", v: "฿7,900 / ด." },
  { k: "LINE Ads Management", v: "฿6,900 / ด." },
  { k: "Landing page", v: "฿4,000 / หน้า" },
  { k: "SEO Article", v: "฿3,500 / บทความ" },
  { k: "Seeding / IO (10 โพสต์)", v: "฿4,500 / ชุด" },
  { k: "Hero Brand Film", v: "฿25,000" },
  { k: "CI / Brand Guideline", v: "เริ่ม ฿35,000" },
];

const production = [
  { k: "Essential Day", v: "฿15,000 / วัน" },
  { k: "Standard Day ★", v: "฿35,000 / วัน" },
  { k: "Signature Day", v: "฿95,000 / วัน" },
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
    <span role="tooltip" className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max max-w-[220px] rounded-lg border border-foreground/15 bg-surface-2 px-3 py-2 font-thai text-[11.5px] leading-snug tracking-normal normal-case text-foreground/90 opacity-0 translate-y-1 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 group-focus-within/tip:opacity-100 transition-all duration-200 z-40 shadow-xl">
      {text}
    </span>
  </span>
);

const CompareTable = ({ size }: { size: Size }) => (
  <div className="overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
    <table className="w-full min-w-[600px] border-collapse">
      <thead>
        <tr className="border-b-2 border-foreground">
          <th className="w-[180px]" />
          {TRACK_NAMES.map((name) => (
            <th key={name} className="text-left py-4 px-4 align-bottom">
              <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{goalOf[name]}</div>
              <div className="mt-1 text-[16px] md:text-[19px] font-semibold tracking-[-0.01em]">{name}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {compareRows.map((row) => (
          <tr key={row.label} className={`border-b border-foreground/12 ${row.label.startsWith("ราคา") ? "bg-cinnabar/[0.06]" : ""}`}>
            <td lang="th" className="py-3 pr-4 font-thai text-[13px] text-foreground/75 align-middle whitespace-nowrap">
              {row.label}<InfoTip text={row.info} />
            </td>
            {TRACK_NAMES.map((name) => {
              const raw = row.v[name];
              const val = row.size ? (raw as Record<Size, string>)[size] : (raw as string);
              return (
                <td key={name} lang="th" className={`py-3 px-4 align-middle ${row.label.startsWith("ราคา") ? "num-display text-[19px] md:text-[23px] text-cinnabar" : "font-thai text-[13px] text-foreground/90"}`}>{val}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PricingSection = () => {
  const [size, setSize] = useState<Size>("S");
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto py-20 md:py-24">
        <SectionLabel index="02" label="The choice" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[22ch] thai-wrap">
            ตอนนี้คุณต้องการ <em className="italic text-cinnabar">อะไร?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[15px] leading-[1.7] text-muted-foreground">
            เลือก track ตามเป้าหมาย แล้วเลือกขนาดทีม — ยอด (Performance) · แบรนด์ (Branding) · หรือทั้งคู่ (Hybrid).
          </p>
        </Reveal>

        {/* Step 1: size selector */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">1 · เลือกขนาดทีม</span>
          <div className="inline-flex rounded-full border border-foreground/30 overflow-hidden">
            {SIZES.map((s) => (
              <button key={s.id} type="button" onClick={() => setSize(s.id)}
                className={`px-5 py-2.5 font-thai text-[11px] tracking-[0.02em] transition-colors ${size === s.id ? "bg-cinnabar text-background" : "text-foreground/60 hover:text-foreground"} ${s.id !== "S" ? "border-l border-foreground/30" : ""}`}>
                {s.id} · {s.label}{s.id === "S" ? " ★" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: track cards */}
        <div className="mt-3 mb-4 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">2 · เลือก track แล้วกดเพื่อส่งโจทย์</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className={`relative h-full flex flex-col p-7 md:p-8 ${t.featured ? "card-accent" : "card-soft"}`}>
                {t.featured && <span className="ribbon-pill absolute -top-3 left-7">คุ้มสุด</span>}
                <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{t.goal} · {t.mindset}</div>
                <h3 className="mt-3 text-[26px] md:text-[30px] leading-none font-semibold tracking-[-0.02em]">{t.name}</h3>
                <div className="mt-1 font-serif italic text-cinnabar text-[15px]">{t.tagline}</div>

                <div className="mt-4 flex h-1.5 overflow-hidden rounded-full">
                  <span className="bg-cinnabar" style={{ width: `${t.sales}%` }} />
                  <span className="bg-foreground/15" style={{ width: `${t.brand}%` }} />
                </div>
                <div className="mt-1.5 flex justify-between font-thai text-[9px] tracking-[0.02em] text-muted-foreground"><span>ยอด {t.sales}</span><span>แบรนด์ {t.brand}</span></div>

                <p lang="th" className="mt-5 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground">{t.forWhat}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="num-display text-[38px] md:text-[44px] text-cinnabar">{t.prices[size]}</span>
                  <span className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">/ เดือน</span>
                </div>
                <div lang="th" className="mt-1.5 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">{t.sub[size]}</div>

                <ul className="mt-6 space-y-2.5 border-t border-foreground/15 pt-6 flex-1">
                  {t.points.map((p) => (
                    <li key={p} lang="th" className="grid grid-cols-[16px_1fr] gap-2.5 font-thai thai-wrap text-[13px] leading-[1.5] text-foreground/85">
                      <Check className="w-3.5 h-3.5 text-cinnabar mt-0.5" /><span>{p}</span>
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

        <p lang="th" className="mt-6 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">
          ราคาไม่รวม VAT 7% · ไม่รวม ad spend
        </p>

        {/* Full comparison */}
        <div className="mt-16 border-t border-foreground/15 pt-12">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-7">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Compare</div>
              <h3 lang="th" className="mt-3 h-display-sm">เทียบให้เห็นชัด</h3>
            </div>
            <a href={RATECARD_PDF} download className="btn-ghost">
              <Download className="w-4 h-4" /><span>ดาวน์โหลด Rate Card (PDF)</span>
            </a>
          </div>
          <div className="card-soft p-4 md:p-6">
            <CompareTable size={size} />
          </div>
          <p lang="th" className="mt-4 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">เลื่อนชี้ที่ <Info className="inline w-3 h-3 -mt-0.5" /> เพื่อดูคำอธิบายแต่ละข้อ</p>
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
            เลือก track เลือกขนาด <em className="italic text-cinnabar">แล้วเริ่มได้เลย.</em>
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

    {/* 03 — ADD-ONS + PRODUCTION */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <SectionLabel index="03" label="Add-on menu" />
          <Reveal delay={0.05}><h2 lang="th" className="mt-8 h-display-sm">เสริมได้ตามต้องการ.</h2></Reveal>
          <dl className="card-soft mt-8 px-6 md:px-7 py-2">
            {addons.map((a, i) => (
              <div key={a.k} className={`flex items-baseline justify-between gap-6 py-3 ${i !== addons.length - 1 ? "border-b border-foreground/12" : ""}`}>
                <dt lang="th" className="font-thai text-[14px] text-foreground/85">{a.k}</dt>
                <dd className="font-mono text-[12px] tracking-[0.02em] text-cinnabar shrink-0">{a.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <SectionLabel index="04" label="ORIONS Production" />
          <Reveal delay={0.05}><h2 lang="th" className="mt-8 h-display-sm">มี brief แล้ว ขาดทีมออกกอง.</h2></Reveal>
          <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground max-w-[44ch]">
            senior crew + Sony A7V / FX6 + GM glass · raw + same-day proxy.
          </p>
          <dl className="card-soft mt-8 px-6 md:px-7 py-2">
            {production.map((a, i) => (
              <div key={a.k} className={`flex items-baseline justify-between gap-6 py-3 ${i !== production.length - 1 ? "border-b border-foreground/12" : ""}`}>
                <dt lang="th" className="font-thai text-[14px] text-foreground/85">{a.k}</dt>
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
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Before you ask" />
        <Reveal delay={0.05}><h2 className="mt-10 h-display-md">The short <em className="italic text-cinnabar">answers.</em></h2></Reveal>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 06 — TALK TO SALES (ปลื้ม) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-24">
        <SectionLabel index="06" label="Talk to sales" />
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
      title={<>ไม่แน่ใจว่าควรเลือก track ไหน? <em className="italic text-cinnabar">ให้ audit ช่วยมอง.</em></>}
      subtitle="ตอบ 18 ข้อ · 3 นาที · ฟรี — หรือคุย Discovery Call 45 นาที."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="ink"
    />
  </div>
);

export default Package;
