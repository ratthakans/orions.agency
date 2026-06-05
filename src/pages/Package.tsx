import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";

type Size = "S" | "M" | "L";
const SIZES: Size[] = ["S", "M", "L"];

const tracks = [
  {
    num: "01", name: "Digital", tagline: "Performance, amplified.",
    sales: 70, brand: 30,
    forWhat: "ยอดเดี๋ยวนี้ วัดเป็นตัวเลข",
    constraint: "หยุดยิงยอดชะลอ",
    prices: { S: "฿24,900", M: "฿49,900", L: "฿99,900" } as Record<Size, string>,
    adCap: { S: "แอดถึง ฿50k", M: "แอดถึง ฿120k", L: "แอดถึง ฿250k" } as Record<Size, string>,
    contract: { S: "ขั้นต่ำ 3 เดือน", M: "ขั้นต่ำ 3 เดือน", L: "ขั้นต่ำ 6 เดือน" } as Record<Size, string>,
    rows: [
      { k: "Ads · Static", s: "14", m: "24", l: "32" },
      { k: "Ads · Video / Reel", s: "5", m: "8", l: "10" },
      { k: "AI Creative Variations", s: "6→24+", m: "10→48+", l: "14→90+" },
      { k: "Ads Management", s: "Meta+TikTok", m: "+Google", l: "All+LINE" },
      { k: "Organic Reel / Post", s: "5 / 8", m: "10 / 12", l: "12 / 14" },
      { k: "ถ่ายของจริง", s: "0.5 วัน", m: "1 วัน", l: "2 วัน" },
      { k: "Marketing Strategy", s: "Core", m: "+Quarterly", l: "Full+roadmap" },
      { k: "90-Day Promise", s: "✓", m: "✓", l: "✓" },
    ],
    promise: "90-Day Promise — ถึงอย่างน้อย 1 ใน 3: CPL ↓30% · ROAS +30% · Lead +50% · ไม่ถึง → ฟรี 1 เดือน",
  },
  {
    num: "02", name: "Boutique", tagline: "Stories, refined.",
    sales: 30, brand: 70,
    forWhat: "แบรนด์ที่คนจำและเลือก",
    constraint: "ผลมาช้ากว่า",
    prices: { S: "฿24,900", M: "฿49,900", L: "฿99,900" } as Record<Size, string>,
    adCap: { S: "แอดถึง ฿30k", M: "แอดถึง ฿30k", L: "แอดถึง ฿30k" } as Record<Size, string>,
    contract: { S: "ขั้นต่ำ 3 เดือน", M: "ขั้นต่ำ 3 เดือน", L: "ขั้นต่ำ 6 เดือน" } as Record<Size, string>,
    rows: [
      { k: "Organic Reel", s: "10", m: "20", l: "24" },
      { k: "Static Post / Carousel", s: "14 / 5", m: "20 / 9", l: "24 / 10" },
      { k: "Brand Story", s: "3", m: "5", l: "6" },
      { k: "Hero Brand Film", s: "—", m: "—", l: "1" },
      { k: "ถ่ายของจริง", s: "0.5 วัน", m: "1 วัน", l: "2 วัน" },
      { k: "SEO / Seeding", s: "1 / 5", m: "3 / 15", l: "4 / 24+KOL" },
      { k: "CI / Brand Guidelines", s: "Starter", m: "Full", l: "Full+องค์กร" },
      { k: "Brand Lift Promise", s: "✓", m: "✓", l: "✓" },
    ],
    promise: "Brand Lift — ถึงอย่างน้อย 1 ใน 3 ใน 90 วัน: Eng +30% · Follower +30% · Reach +40% · ไม่ถึง → เติมคอนเทนต์ฟรี 1 เดือน",
  },
  {
    num: "03", name: "Hybrid", tagline: "Both worlds, at once.",
    sales: 50, brand: 50,
    forWhat: "โตเร็วและยั่งยืนพร้อมกัน",
    constraint: "ราคาสูงกว่า track เดี่ยว",
    prices: { S: "฿32,900", M: "฿64,900", L: "฿129,900" } as Record<Size, string>,
    adCap: { S: "แอดถึง ฿50k", M: "แอดถึง ฿120k", L: "แอดถึง ฿250k" } as Record<Size, string>,
    contract: { S: "ขั้นต่ำ 3 เดือน", M: "ขั้นต่ำ 3 เดือน", L: "ขั้นต่ำ 6 เดือน" } as Record<Size, string>,
    rows: [
      { k: "Ads · Static / Video", s: "8 / 3", m: "12 / 5", l: "20 / 8" },
      { k: "AI Creative Variations", s: "5→20+", m: "7→36+", l: "10→60+" },
      { k: "Organic Reel / Post", s: "5 / 6", m: "9 / 10", l: "14 / 14" },
      { k: "Brand Story / Hero", s: "1 / —", m: "2 / —", l: "4 / 1" },
      { k: "ถ่ายของจริง", s: "0.5 วัน", m: "1 วัน", l: "2 วัน" },
      { k: "Strategy · 2 ชั้น", s: "Mkt+Creative", m: "+roadmap", l: "Documented" },
      { k: "CI / Template", s: "—", m: "พื้นฐาน", l: "Full" },
      { k: "90-Day + Brand Lift", s: "✓", m: "✓", l: "✓" },
    ],
    promise: "ได้ทั้ง 90-Day Promise + Brand Lift Promise",
  },
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
  { q: "ทำไม Digital กับ Boutique ราคาเท่ากัน?",
    a: "Digital จ่ายให้ ‘สมองการตลาด’ (funnel · media buying · A/B) เห็นชิ้นงานน้อยกว่าแต่ทีมยิงแอดดูแลทุกวัน · Boutique จ่ายให้ ‘สมองครีเอทีฟ’ (craft · custom · CI) เห็น organic เยอะกว่า. AI = speed ไม่ใช่ส่วนลด — จ่ายเท่าเดิม แต่ได้มากขึ้นในเวลาเท่ากัน." },
  { q: "รวม ad spend ไหม?",
    a: "ไม่รวม ad spend — แต่ค่าบริหารแอดรวมให้จนถึงเพดานของแต่ละ size (ตลาดคิด 10–20% ของงบแยกต่างหาก). ทุกราคายังไม่รวม VAT 7%." },
  { q: "มีการันตีไหม?",
    a: "มี — 90-Day Promise (Digital) และ Brand Lift Promise (Boutique) · ไม่ถึงเป้าเรารับผิดชอบ. ถ้ายังไม่พร้อม เราบอกตรง ๆ และยังไม่รับงาน." },
];

const TrackCard = ({ t, i }: { t: typeof tracks[number]; i: number }) => {
  const [size, setSize] = useState<Size>("S");
  const lower = size.toLowerCase() as "s" | "m" | "l";
  return (
    <Reveal delay={i * 0.06}>
      <div className="border border-foreground/20 bg-background p-7 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Track {t.num}</div>
            <h2 className="mt-2 text-[28px] md:text-[36px] leading-none tracking-[-0.02em] font-semibold">{t.name}</h2>
            <div className="mt-2 font-serif italic text-cinnabar text-[16px] md:text-[18px]">{t.tagline}</div>
          </div>
          <div className="min-w-[180px]">
            <div className="flex h-1.5 overflow-hidden">
              <span className="bg-cinnabar" style={{ width: `${t.sales}%` }} />
              <span className="bg-foreground/20" style={{ width: `${t.brand}%` }} />
            </div>
            <div className="mt-2 flex justify-between font-mono text-[9px] tracking-[0.14em] uppercase text-muted-foreground">
              <span>ยอด {t.sales}</span><span>แบรนด์ {t.brand}</span>
            </div>
          </div>
        </div>

        <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground">
          <span className="text-foreground">{t.forWhat}</span> · ข้อจำกัด: {t.constraint}
        </p>

        {/* Size selector + price */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5 sm:items-end border-t border-foreground/15 pt-7">
          <div className="inline-flex border border-foreground/30">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`px-5 py-2.5 font-mono text-[12px] tracking-[0.1em] transition-colors ${
                  size === s ? "bg-cinnabar text-background" : "text-foreground/60 hover:text-foreground"
                } ${s !== "S" ? "border-l border-foreground/30" : ""}`}
              >
                {s}{s === "S" ? " ★" : ""}
              </button>
            ))}
          </div>
          <div className="flex items-baseline gap-3">
            <span className="num-display text-[40px] md:text-[48px] text-cinnabar">{t.prices[size]}</span>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground">/ เดือน</span>
          </div>
        </div>
        <div lang="th" className="mt-2 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
          {t.contract[size]} · {t.adCap[size]}
        </div>

        {/* Deliverables — selected size highlighted */}
        <ul className="mt-7 border-t border-foreground/15">
          {t.rows.map((r) => (
            <li key={r.k} className="grid grid-cols-[1fr_auto_auto_auto] gap-x-3 md:gap-x-6 items-center py-2.5 border-b border-foreground/10 text-[12px] md:text-[13px]">
              <span lang="th" className="font-thai text-foreground/85">{r.k}</span>
              {(["s", "m", "l"] as const).map((col) => (
                <span
                  key={col}
                  className={`w-[64px] md:w-[96px] text-right font-mono tracking-[0.02em] ${
                    col === lower ? "text-cinnabar font-medium" : "text-muted-foreground/70"
                  }`}
                >
                  {r[col]}
                </span>
              ))}
            </li>
          ))}
        </ul>

        <p lang="th" className="mt-5 font-thai thai-wrap text-[12px] leading-[1.6] text-muted-foreground">
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-cinnabar">— Promise</span>&nbsp;&nbsp;{t.promise}
        </p>

        <Link to="/contact" className="mt-7 btn-accent justify-between w-full sm:w-auto">
          <span>เลือก {t.name} · {size}</span><ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </Reveal>
  );
};

const Package = () => (
  <div>
    <SEO
      title="Rate Card 2026 — แพ็กเกจและราคา · ØRIONS"
      description="Performance × Branding รายเดือน — เลือก track (Digital / Boutique / Hybrid) เลือกขนาด (S/M/L) แล้วเริ่มได้เลย. ผูกค่าบริการไว้กับผลจริง."
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
        <Reveal delay={0.15}>
          <p className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            <span className="text-cinnabar">—</span> ทุกราคาไม่รวม VAT 7% · ไม่รวม ad spend
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — TRACKS */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto py-16 md:py-24 grid grid-cols-1 gap-6 md:gap-8">
        {tracks.map((t, i) => <TrackCard key={t.name} t={t} i={i} />)}
      </div>
    </section>

    {/* 03 — ADD-ONS + PRODUCTION */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <SectionLabel index="02" label="Add-on menu" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-8 h-display-sm">เสริมได้ตามต้องการ.</h2>
          </Reveal>
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
          <SectionLabel index="03" label="ORIONS Production" />
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-8 h-display-sm">มี brief แล้ว ขาดทีมออกกอง.</h2>
          </Reveal>
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

    {/* 04 — HOW WE WORK */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="04" label="How we work" />
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

    {/* 05 — FAQ */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Before you ask" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md">The short <em className="italic text-cinnabar">answers.</em></h2>
        </Reveal>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 06 — CTA */}
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
