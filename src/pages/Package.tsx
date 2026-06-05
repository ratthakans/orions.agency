import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";

type Size = "S" | "M" | "L";
const SIZES: { id: Size; label: string }[] = [
  { id: "S", label: "เริ่มต้น" },
  { id: "M", label: "ขยาย" },
  { id: "L", label: "เต็มสูบ" },
];

const tracks = [
  {
    num: "01", name: "Digital", goal: "ยอด", tagline: "Performance, amplified.",
    sales: 70, brand: 30,
    forWhat: "อยากได้ยอดเดี๋ยวนี้ วัดเป็นตัวเลข",
    prices: { S: "฿24,900", M: "฿49,900", L: "฿99,900" } as Record<Size, string>,
    sub: { S: "ขั้นต่ำ 3 เดือน · บริหารแอดถึง ฿50k", M: "ขั้นต่ำ 3 เดือน · บริหารแอดถึง ฿120k", L: "ขั้นต่ำ 6 เดือน · บริหารแอดถึง ฿250k" } as Record<Size, string>,
    points: [
      "ยิงแอด Meta + TikTok ดูแลทุกวัน (ไซส์ใหญ่ +Google +LINE)",
      "AI แตกครีเอทีฟทดสอบหลายสิบแบบต่อเดือน",
      "คอนเทนต์ + ถ่ายของจริง 0.5–2 วัน",
      "กลยุทธ์การตลาด + รายงานผล",
    ],
    promise: "90-Day Promise — ไม่ถึงเป้า ฟรี 1 เดือน",
  },
  {
    num: "02", name: "Boutique", goal: "แบรนด์", tagline: "Stories, refined.",
    sales: 30, brand: 70,
    forWhat: "อยากให้แบรนด์ถูกจำและถูกเลือก",
    prices: { S: "฿24,900", M: "฿49,900", L: "฿99,900" } as Record<Size, string>,
    sub: { S: "ขั้นต่ำ 3 เดือน · บริหารแอดถึง ฿30k", M: "ขั้นต่ำ 3 เดือน · บริหารแอดถึง ฿30k", L: "ขั้นต่ำ 6 เดือน · บริหารแอดถึง ฿30k" } as Record<Size, string>,
    points: [
      "ระบบแบรนด์ + CI / Brand Guidelines",
      "คอนเทนต์แบรนด์ + ถ่าย creative-directed",
      "SEO + seeding / KOL",
      "Brand film / long-form (ไซส์ใหญ่)",
    ],
    promise: "Brand Lift — ไม่ถึงเป้า เติมคอนเทนต์ฟรี 1 เดือน",
  },
  {
    num: "03", name: "Hybrid", goal: "ทั้งคู่", tagline: "Both worlds, at once.",
    sales: 50, brand: 50,
    forWhat: "อยากโตเร็วและยั่งยืนพร้อมกัน",
    prices: { S: "฿32,900", M: "฿64,900", L: "฿129,900" } as Record<Size, string>,
    sub: { S: "ขั้นต่ำ 3 เดือน · บริหารแอดถึง ฿50k", M: "ขั้นต่ำ 3 เดือน · บริหารแอดถึง ฿120k", L: "ขั้นต่ำ 6 เดือน · บริหารแอดถึง ฿250k" } as Record<Size, string>,
    points: [
      "ได้ทั้งยิงแอด + สร้างแบรนด์",
      "กลยุทธ์ 2 ชั้น (การตลาด + ครีเอทีฟ)",
      "AI optimization + production",
      "CI / template (ไซส์ใหญ่)",
    ],
    promise: "ได้ทั้ง 90-Day + Brand Lift Promise",
    featured: true,
  },
];

const TRACK_NAMES = ["Digital", "Boutique", "Hybrid"] as const;
const goalOf: Record<string, string> = { Digital: "ยอด", Boutique: "แบรนด์", Hybrid: "ทั้งคู่" };

type Cmp = { label: string; size?: boolean; v: Record<string, string | Record<Size, string>> };
const compareRows: Cmp[] = [
  { label: "ราคา / เดือน", size: true, v: {
    Digital: { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
    Boutique: { S: "฿24,900", M: "฿49,900", L: "฿99,900" },
    Hybrid: { S: "฿32,900", M: "฿64,900", L: "฿129,900" },
  }},
  { label: "เป้า · ยอด / แบรนด์", v: { Digital: "70 / 30", Boutique: "30 / 70", Hybrid: "50 / 50" } },
  { label: "Ads · static / video", size: true, v: {
    Digital: { S: "14 / 5", M: "24 / 8", L: "32 / 10" },
    Boutique: { S: "6 / 2", M: "10 / 4", L: "12 / 4" },
    Hybrid: { S: "8 / 3", M: "12 / 5", L: "20 / 8" },
  }},
  { label: "Organic · reel / post", size: true, v: {
    Digital: { S: "5 / 8", M: "10 / 12", L: "12 / 14" },
    Boutique: { S: "10 / 14", M: "20 / 20", L: "24 / 24" },
    Hybrid: { S: "5 / 6", M: "9 / 10", L: "14 / 14" },
  }},
  { label: "ถ่ายของจริง", size: true, v: {
    Digital: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
    Boutique: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
    Hybrid: { S: "0.5 วัน", M: "1 วัน", L: "2 วัน" },
  }},
  { label: "บริหารแอด (เพดาน)", size: true, v: {
    Digital: { S: "฿50k", M: "฿120k", L: "฿250k" },
    Boutique: { S: "฿30k", M: "฿30k", L: "฿30k" },
    Hybrid: { S: "฿50k", M: "฿120k", L: "฿250k" },
  }},
  { label: "การันตี", v: { Digital: "90-Day", Boutique: "Brand Lift", Hybrid: "ทั้งคู่" } },
];

const addons = [
  { k: "Ads Static / Video", v: "฿600 / ฿2,500" },
  { k: "UGC / Review content", v: "฿2,500" },
  { k: "Google Ads Management", v: "฿7,900 / ด." },
  { k: "LINE Ads Management", v: "฿6,900 / ด." },
  { k: "Landing page (AI/no-code)", v: "฿4,000 / หน้า" },
  { k: "Platform เพิ่ม (+1)", v: "฿8,000 / ด." },
  { k: "SEO Article", v: "฿3,500 / บทความ" },
  { k: "Seeding / IO (10 โพสต์)", v: "฿4,500 / ชุด" },
  { k: "PR / Reputation", v: "฿20,000 / ด." },
  { k: "Hero Brand Film", v: "฿25,000" },
  { k: "CI / Brand Guideline", v: "เริ่ม ฿35,000" },
  { k: "Brand renaming", v: "เริ่ม ฿80,000" },
];

const production = [
  { k: "Essential Day", v: "฿15,000 / วัน" },
  { k: "Standard Day ★", v: "฿35,000 / วัน" },
  { k: "Signature Day", v: "฿95,000 / วัน" },
  { k: "Production Partner", v: "฿90,000 / ไตรมาส" },
];

const steps = [
  { n: "01", t: "Discovery Call · ฟรี 45 นาที", d: "ประเมิน fit · เลือก track · คำนวณ break-even" },
  { n: "02", t: "Onboarding · 30 วันแรก", d: "เชื่อม platform · ถ่ายจริง · ตกลง baseline" },
  { n: "03", t: "Launch + Optimize", d: "AI แตก variations · ตัวแพ้ตัดทิ้ง ตัวชนะอัดงบ" },
  { n: "04", t: "90-Day Review", d: "วัดผลกับ Promise · วางแผนรอบถัดไป" },
];

const faqs = [
  { q: "เลือก track ไหนดี?",
    a: "ตอบคำถามเดียว — ตอนนี้คุณต้องการ ยอด (Digital), แบรนด์ (Boutique), หรือทั้งคู่ (Hybrid). Digital เหยียบคันเร่ง · Boutique วางรากฐาน · Hybrid ขับไปสร้างถนนไป." },
  { q: "S / M / L ต่างกันยังไง?",
    a: "ขนาดของทีมและปริมาณงานต่อเดือน — S เริ่มต้น (ยอดนิยม), M ขยาย, L เต็มสูบ. เริ่มเล็กแล้วขยับขึ้นได้ตามจังหวะของแบรนด์." },
  { q: "ทำไม Digital กับ Boutique ราคาเท่ากัน?",
    a: "Digital จ่ายให้ ‘สมองการตลาด’ (funnel · media buying · A/B) · Boutique จ่ายให้ ‘สมองครีเอทีฟ’ (craft · custom · CI). AI = speed ไม่ใช่ส่วนลด — จ่ายเท่าเดิม แต่ได้มากขึ้นในเวลาเท่ากัน." },
  { q: "รวม ad spend ไหม?",
    a: "ไม่รวม ad spend — แต่ค่าบริหารแอดรวมให้จนถึงเพดานของแต่ละ size. ทุกราคายังไม่รวม VAT 7%." },
];

const CompareTable = ({ size }: { size: Size }) => (
  <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
    <table className="w-full min-w-[640px] border-collapse">
      <thead>
        <tr className="border-b-2 border-foreground">
          <th className="w-[170px]" />
          {TRACK_NAMES.map((name) => (
            <th key={name} className="text-left py-4 px-4 align-bottom">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">{goalOf[name]}</div>
              <div className="mt-1 text-[17px] md:text-[20px] font-semibold tracking-[-0.01em]">{name}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {compareRows.map((row) => (
          <tr key={row.label} className={`border-b border-foreground/12 ${row.label.startsWith("ราคา") ? "bg-cinnabar/[0.05]" : ""}`}>
            <td lang="th" className="py-3 pr-4 font-thai text-[13px] text-foreground/75 align-middle">{row.label}</td>
            {TRACK_NAMES.map((name) => {
              const raw = row.v[name];
              const val = row.size ? (raw as Record<Size, string>)[size] : (raw as string);
              return (
                <td key={name} className={`py-3 px-4 align-middle ${row.label.startsWith("ราคา") ? "num-display text-[20px] md:text-[24px] text-cinnabar" : "font-mono text-[13px] text-foreground/90"}`}>{val}</td>
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
  const [showTable, setShowTable] = useState(false);
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
            เลือก track ตามเป้าหมาย แล้วเลือกขนาดทีม — Digital เหยียบคันเร่ง · Boutique วางรากฐาน · Hybrid ขับไปสร้างถนนไป.
          </p>
        </Reveal>

        {/* Step 1: size selector (shared) */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span lang="th" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">1 · เลือกขนาดทีม</span>
          <div className="inline-flex border border-foreground/30">
            {SIZES.map((s) => (
              <button key={s.id} type="button" onClick={() => setSize(s.id)}
                className={`px-5 py-2.5 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors ${size === s.id ? "bg-cinnabar text-background" : "text-foreground/60 hover:text-foreground"} ${s.id !== "S" ? "border-l border-foreground/30" : ""}`}>
                {s.id} · {s.label}{s.id === "S" ? " ★" : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: track cards */}
        <div className="mt-3 mb-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">2 · เลือก track</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tracks.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className={`h-full flex flex-col border p-7 md:p-8 ${t.featured ? "border-cinnabar" : "border-foreground/20"}`}>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{t.goal}</div>
                  {t.featured && <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-cinnabar border border-cinnabar px-2 py-0.5">คุ้มสุด</div>}
                </div>
                <h3 className="mt-3 text-[26px] md:text-[30px] leading-none font-semibold tracking-[-0.02em]">{t.name}</h3>
                <div className="mt-1 font-serif italic text-cinnabar text-[15px]">{t.tagline}</div>

                <div className="mt-4 flex h-1.5 overflow-hidden">
                  <span className="bg-cinnabar" style={{ width: `${t.sales}%` }} />
                  <span className="bg-foreground/15" style={{ width: `${t.brand}%` }} />
                </div>
                <div className="mt-1.5 flex justify-between font-mono text-[9px] tracking-[0.12em] uppercase text-muted-foreground"><span>ยอด {t.sales}</span><span>แบรนด์ {t.brand}</span></div>

                <p lang="th" className="mt-5 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground">{t.forWhat}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="num-display text-[38px] md:text-[44px] text-cinnabar">{t.prices[size]}</span>
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">/ เดือน</span>
                </div>
                <div lang="th" className="mt-1.5 font-mono text-[10px] tracking-[0.08em] text-muted-foreground">{t.sub[size]}</div>

                <ul className="mt-6 space-y-2.5 border-t border-foreground/15 pt-6 flex-1">
                  {t.points.map((p) => (
                    <li key={p} lang="th" className="grid grid-cols-[16px_1fr] gap-2.5 font-thai thai-wrap text-[13px] leading-[1.5] text-foreground/85">
                      <Check className="w-3.5 h-3.5 text-cinnabar mt-0.5" /><span>{p}</span>
                    </li>
                  ))}
                  <li lang="th" className="grid grid-cols-[16px_1fr] gap-2.5 font-thai thai-wrap text-[13px] leading-[1.5] text-cinnabar">
                    <Check className="w-3.5 h-3.5 mt-0.5" /><span>{t.promise}</span>
                  </li>
                </ul>

                <Link to="/contact" className={`mt-7 justify-between ${t.featured ? "btn-accent" : "btn-ghost"}`}>
                  <span>เลือก {t.name} · {size}</span><ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p lang="th" className="mt-6 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
          ราคาไม่รวม VAT 7% · ไม่รวม ad spend
        </p>

        {/* Progressive disclosure: full comparison */}
        <div className="mt-10 border-t border-foreground/15 pt-8">
          <button type="button" onClick={() => setShowTable((v) => !v)}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-foreground hover:text-cinnabar transition-colors">
            <span>{showTable ? "ซ่อนตารางเทียบ" : "ดูตารางเทียบแบบเต็ม"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showTable ? "rotate-180" : ""}`} />
          </button>
          {showTable && (
            <div className="mt-8">
              <CompareTable size={size} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Package = () => (
  <div>
    <SEO
      title="Rate Card 2026 — แพ็กเกจและราคา · ØRIONS"
      description="Performance × Branding รายเดือน — เลือก track (Digital / Boutique / Hybrid) เลือกขนาด (S/M/L) แล้วเริ่มได้เลย. เราขายผล ไม่ใช่จำนวนโพสต์."
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
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            ยอดวันนี้ หรือแบรนด์ที่อยู่ยาว — เลือกทิศทางที่ใช่ตอนนี้. Performance × Branding รายเดือน · เราขายผล ไม่ใช่จำนวนโพสต์.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — PRICING (choice + cards + comparison) */}
    <PricingSection />

    {/* 03 — ADD-ONS + PRODUCTION */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <SectionLabel index="03" label="Add-on menu" />
          <Reveal delay={0.05}><h2 lang="th" className="mt-8 h-display-sm">เสริมได้ตามต้องการ.</h2></Reveal>
          <dl className="mt-8 border-t border-foreground/20">
            {addons.map((a) => (
              <div key={a.k} className="flex items-baseline justify-between gap-6 py-3 border-b border-foreground/15">
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
          <dl className="mt-8 border-t border-foreground/20">
            {production.map((a) => (
              <div key={a.k} className="flex items-baseline justify-between gap-6 py-3 border-b border-foreground/15">
                <dt lang="th" className="font-thai text-[14px] text-foreground/85">{a.k}</dt>
                <dd className="font-mono text-[12px] tracking-[0.02em] text-cinnabar shrink-0">{a.v}</dd>
              </div>
            ))}
          </dl>
          <p lang="th" className="mt-5 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground leading-[1.6]">
            Edit: social ฿4,500 · brand ฿12,000 · hero ฿28,000 · ซื้อ 3+ add-ons ลด 10% · 2 สายลด 10% · 3 สายลด 15%
          </p>
        </div>
      </div>
    </section>

    {/* 05 — HOW WE WORK */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="How we work" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-10 h-display-md">จาก kickoff ถึง <em className="italic text-cinnabar">optimize.</em></h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-foreground/20">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="h-full p-8 md:p-10 border-b border-r border-foreground/20">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {s.n}</div>
                <h3 lang="th" className="mt-6 font-thai text-[18px] md:text-[20px] font-medium leading-[1.3]">{s.t}</h3>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] leading-[1.7] text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 06 — FAQ */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <SectionLabel index="06" label="Before you ask" />
        <Reveal delay={0.05}><h2 className="mt-10 h-display-md">The short <em className="italic text-cinnabar">answers.</em></h2></Reveal>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 07 — CTA */}
    <CTABand
      eyebrow="Not sure yet?"
      title={<>ไม่แน่ใจว่าควรเลือก track ไหน? <em className="italic text-cinnabar">ให้ audit ช่วยมอง.</em></>}
      subtitle="ตอบ 18 ข้อ · 3 นาที · ฟรี — หรือคุย Discovery Call 45 นาที ไม่มีข้อผูกมัด."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="ink"
    />
  </div>
);

export default Package;
