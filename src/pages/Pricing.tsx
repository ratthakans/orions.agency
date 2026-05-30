import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";

/* ---------- Boutique ---------- */
const boutiqueStandard = [
  { kpi: "Branded search",       v: "↑ 20–40%", note: "เทียบ baseline 90 วัน" },
  { kpi: "Engagement rate",      v: "↑ 30–50%", note: "บน brand content" },
  { kpi: "Earned media",         v: "3–10",     note: "Organic mentions" },
  { kpi: "Audience composition", v: "Mapped",   note: "ขยับเข้าหา target segment" },
];

const boutiquePhases = [
  { n: "01", title: "Strategy & Data",    weeks: "Weeks 1–3",   body: "Discovery + audience deep-dive + cultural intelligence. Big Idea + manifesto จาก data จริง." },
  { n: "02", title: "Creative Direction", weeks: "Weeks 2–4",   body: "Visual directions + world-build. Cast director, DP, photographer ให้ตรงโทน." },
  { n: "03", title: "Production",         weeks: "Weeks 3–9",   body: "Full-service shoot days. Hero film + stills + short-form ด้วย senior crew." },
  { n: "04", title: "Launch & Review",    weeks: "Weeks 4–12+", body: "Rollout, cutdowns, press kit. รีวิวที่ 30 / 60 / 90 วัน." },
];

const boutiqueAddons = [
  { name: "Extra full-service shoot day",  desc: "crew + post + crafted deliverables",     price: "฿55,000 / day" },
  { name: "Additional brand film 60–90s",  desc: "ตัด + กราฟิก + ดนตรี perpetual license", price: "฿75,000" },
  { name: "PR + media outreach",           desc: "list, pitch, follow-up · 1 round",       price: "฿45,000" },
  { name: "Influencer / KOL coordination", desc: "brief, brief-back, แคมเปญสั้น 1 รอบ",   price: "฿35,000" },
  { name: "Logo refresh (existing brand)", desc: "redraw + cleanup · ไม่รวม strategy",     price: "฿35,000" },
  { name: "Brand naming (standalone)",     desc: "shortlist + rationale + checks",         price: "฿45,000" },
  { name: "Packaging / label design",      desc: "1 SKU · 2 directions · 1 round",         price: "฿55,000" },
];

/* ---------- Digital ---------- */
type Row = [string, string];
type Tier = { name: string; price: string; sub: string; tagline: string; featured?: boolean; rows: Row[] };

const digitalTiers: Tier[] = [
  {
    name: "Starter", price: "฿22,900", sub: "/ mo · min 3 months", tagline: "Entry · single-platform launch.",
    rows: [
      ["Ad spend range", "฿0–30k"],
      ["Platforms", "Meta"],
      ["Reels / TikTok", "8 / mo"],
      ["Static posts", "6 / mo"],
      ["Stories", "10 / mo"],
      ["Ad creatives", "6 / mo"],
      ["Photography", "6 shots / mo"],
      ["Content day", "½ day / mo"],
      ["Reporting", "Bi-weekly"],
      ["Guarantee", "CPL ↓20% in 60 days"],
    ],
  },
  {
    name: "Growth Engine", price: "฿44,900", sub: "/ mo · min 3 months", tagline: "Sweet spot · the engine most brands need.", featured: true,
    rows: [
      ["Ad spend range", "฿30–60k"],
      ["Platforms", "Meta + TikTok + Google"],
      ["Reels / TikTok", "16 / mo"],
      ["Static posts", "12 / mo"],
      ["Stories", "20 / mo"],
      ["Ad creatives", "12 / mo"],
      ["Photography", "12 shots / mo"],
      ["Content day", "1 day / mo"],
      ["LINE OA", "Setup + 2 broadcasts / mo"],
      ["Reporting", "Weekly + dashboard"],
    ],
  },
  {
    name: "Dominate", price: "฿89,900", sub: "/ mo · min 6 months", tagline: "Scale · category-dominant presence.",
    rows: [
      ["Ad spend range", "฿60–120k"],
      ["Platforms", "All + LINE Ads"],
      ["Reels / TikTok", "28 / mo"],
      ["Static posts", "20 / mo"],
      ["Stories", "Daily"],
      ["Ad creatives", "24 / mo"],
      ["Photography", "20 shots / mo"],
      ["Content days", "2 days / mo"],
      ["Custom dashboard", "Looker Studio"],
      ["Industry exclusivity", "Included"],
    ],
  },
];

const digitalAddons = [
  { name: "Google Ads Management",        desc: "Search + Display",                 price: "฿7,900 / mo" },
  { name: "LINE Ads Management",          desc: "Setup + targeting + creative",     price: "฿6,900 / mo" },
  { name: "Conversion Rate Optimization", desc: "6-week sprint · audit + test",     price: "฿29,900" },
  { name: "Landing Page Design & Build",  desc: "1 page + form",                    price: "฿14,900" },
  { name: "Lead Magnet Funnel",           desc: "eBook + landing + 5-email seq.",   price: "฿24,900" },
  { name: "LINE OA Setup + Broadcast",    desc: "Rich menu + auto-reply + 4 / mo",  price: "฿5,900 + ฿4,900/mo" },
];

/* ---------- Production ---------- */
const productionDays = [
  {
    name: "Run-and-Gun", price: "฿12,000", sub: "S · 1 camera · 1 crew · 8 hrs",
    items: [
      ["Camera", "1 × Sony A7V + GM lens kit"],
      ["Crew", "Solo Operator (DP)"],
      ["Lighting + Audio", "LED panel · RØDE VideoMic"],
      ["Delivery", "raw · cloud + proxy same day"],
    ] as Row[],
  },
  {
    name: "Multi-Cam", price: "฿24,000", sub: "M · 2 cameras · 2 crew · 10 hrs",
    items: [
      ["Camera", "2 × A7V + tethered monitor"],
      ["Crew", "DP + camera assistant"],
      ["Lighting + Audio", "studio kit 2–3 จุด · Wireless GO II ×2"],
      ["Delivery", "raw 2 มุมกล้อง · ตัดสลับมุมได้"],
    ] as Row[],
  },
  {
    name: "Cinematic", price: "฿36,000", sub: "L · 3 cameras · 2 crew + gimbal · 10 hrs", featured: true,
    items: [
      ["Camera", "3 × A7V (static 2 + gimbal 1)"],
      ["Crew", "DP + assistant · ทีมเท่า M = คุ้มสุด"],
      ["Lighting + Audio", "studio kit เต็ม · Wireless PRO ×4 · DJI RS 4"],
      ["Delivery", "raw 3 มุมกล้อง · ลดวันถ่าย"],
    ] as Row[],
  },
];

const productionAlaCarte = [
  { group: "Crew · per day", rows: [
    ["Camera body เพิ่ม (A7V)", "฿4,500"],
    ["Second DP / B-cam", "฿8,500"],
    ["Hair & Makeup", "฿6,500"],
    ["Stylist", "฿8,500"],
    ["Producer (full-day)", "฿7,500"],
    ["Drone + DJI Mavic 3 Pro", "฿12,000"],
  ] as Row[] },
  { group: "Post · per piece", rows: [
    ["Photo retouching (high-end)", "฿800"],
    ["Video edit · social (15–30s)", "฿4,500"],
    ["Video edit · brand (60–90s)", "฿12,000"],
    ["Video edit · hero (2–3 min)", "฿28,000"],
    ["Original music (90–180s)", "฿35,000"],
    ["Subtitles THA + ENG", "฿1,500"],
  ] as Row[] },
  { group: "Equipment · per day", rows: [
    ["Sony FX3 cinema upgrade", "฿8,500"],
    ["Underwater housing + diver", "฿9,500"],
    ["Anamorphic lens set", "฿6,500"],
    ["HMI / Skypanel S60", "฿8,500"],
    ["Pro sound recording", "฿4,500"],
    ["Studio space rental", "฿6.5–12k"],
  ] as Row[] },
  { group: "Travel", rows: [
    ["Bangkok + ปริมณฑล", "Included"],
    ["ต่างจังหวัด day trip ≤ 200km", "+฿8,500"],
    ["ต่างประเทศ", "Quoted"],
  ] as Row[] },
];

/* ---------- Ladder ---------- */
const ladder = [
  { code: "Ø Boutique",   start: "Brand Identity · From ฿80,000",     term: "Project-based", best: "แบรนด์เปิดใหม่ · rebrand · launch",        to: "#boutique"   },
  { code: "Ø Digital",    start: "Retainer · From ฿22,900/mo",         term: "3–12 months",   best: "ต้องการสเกลยอดและวัดผล",                    to: "#digital"    },
  { code: "Ø Production", start: "Shoot day · From ฿12,000",           term: "Per project",   best: "ต้องการคอนเทนต์โปรดักชันคุณภาพ",            to: "#production" },
  { code: "Ø Consulting", start: "Fractional CCO · From ฿180,000/mo",  term: "12–36 months",  best: "องค์กรใหญ่ที่ต้องการ creative leadership",   to: "/consulting" },
];

/* ---------- Fine print ---------- */
const finePrint = [
  { n: "01", t: "Payment",      body: "Boutique 50/50 · System 50/30/20 · Legacy 40/30/20/10. Digital ชำระต้นเดือน · Production single day 50/50." },
  { n: "02", t: "Revisions",    body: "ระบุแต่ละ package · เกินคิด 8–15% ของ package price ต่อรอบ · เปลี่ยน concept หลัก = scope ใหม่." },
  { n: "03", t: "Ownership",    body: "Final files เป็นของลูกค้าหลังชำระครบ · music commissioned = royalty-free perpetual · raw เก็บ 90 วัน." },
  { n: "04", t: "Standard",     body: "ไม่ถึงเป้า → free adjustment chapter ใน engagement ถัดไป · Digital: 30 วันแรก คืน 100% เดือนแรก." },
  { n: "05", t: "Cancellation", body: "ก่อน production start คืน 70% · หลัง start คืน 30% + raw + งานเสร็จ. Production: ≥14d คืน 80% · 7–14d คืน 50%." },
  { n: "06", t: "Travel",       body: "Bangkok + ปริมณฑล included · ต่างจังหวัด/ต่างประเทศคิดตามจริง · ค่าตัว talent / music license แยก." },
];

/* ---------- Sub-nav ---------- */
const subnav = [
  { id: "boutique",   label: "Boutique" },
  { id: "digital",    label: "Digital" },
  { id: "production", label: "Production" },
  { id: "consulting", label: "Consulting" },
  { id: "ladder",     label: "Ladder" },
  { id: "fineprint",  label: "Fine print" },
];

/* =================================================================== */

const Pricing = () => (
  <div>
    <SEO
      title="Pricing — ØRIONS · Rate Card 2026"
      description="Transparent rates for Boutique, Digital, Production & Consulting. No retainer traps, no markup, money-back on Digital first month."
      path="/pricing"
    />

    {/* 01 — HERO */}
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-16 md:pb-20">
        <SectionLabel index="01" label="Rate Card · 2026" />
        <Reveal delay={0.05}>
          <h1 className="mt-10 h-display-xl max-w-[18ch]">
            Transparent rates. <em className="italic text-cinnabar">No retainer traps.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Four ways to engage — pick the chapter that fits where your brand is right now.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-foreground/75">
            ไม่มี hidden fee · ไม่มี markup สื่อ · Boutique 50/50 · Digital 30 วันแรกคืน 100% ถ้าไม่พอใจ.
          </p>
        </Reveal>

        {/* Trust quick chips */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            {["No markup on media", "Senior crew only", "Lifetime usage", "Money-back · first month"].map((c) => (
              <span key={c} className="inline-flex items-center gap-2 border border-foreground/30 px-3 py-2 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/80">
                <span className="block w-1.5 h-1.5 bg-cinnabar" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Sub-nav */}
        <Reveal delay={0.25}>
          <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-foreground/20 pt-6">
            {subnav.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70 hover:text-cinnabar transition-colors"
              >
                — {s.label}
              </a>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>

    {/* 02 — BOUTIQUE */}
    <section id="boutique" className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Ø Boutique" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[20ch]">
            Brand identity & <em className="italic text-cinnabar">story craft.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Project-based · From ฿80,000 · 6–12 weeks.
          </p>
        </Reveal>

        {/* Standard KPIs */}
        <div className="mt-16">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> The ORIONS Standard · 90-day proof
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-foreground/20">
            {boutiqueStandard.map((s, i) => (
              <Reveal key={s.kpi} delay={i * 0.05}>
                <div className={`p-8 md:p-10 h-full bg-background ${i > 0 ? "border-t lg:border-t-0 lg:border-l border-foreground/20" : ""} ${i === 1 || i === 3 ? "md:border-l md:border-t-0" : ""} ${i === 2 ? "md:border-l-0 md:border-t" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">{s.kpi}</div>
                  <div className="mt-4 font-serif italic text-cinnabar text-[28px] md:text-[36px] leading-none tabular-nums">{s.v}</div>
                  <div className="mt-3 font-thai text-[13px] leading-[1.6] text-muted-foreground">{s.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> From brief to brand moment
          </div>
          <div className="border-t border-foreground/20">
            {boutiquePhases.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_140px_2fr] gap-4 md:gap-10 items-baseline py-8 border-b border-foreground/20">
                  <div className="font-serif italic text-cinnabar text-[28px] md:text-[34px] leading-none">{p.n}</div>
                  <h4 className="font-serif text-[22px] md:text-[26px] tracking-[-0.015em]">{p.title}</h4>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{p.weeks}</div>
                  <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-foreground/80">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Annual Legacy callout */}
        <Reveal delay={0.1}>
          <div className="mt-16 border-y border-cinnabar px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Annual Legacy</div>
              <h4 className="mt-3 font-serif text-[22px] md:text-[28px] tracking-[-0.015em] max-w-[40ch]">
                ต่ออายุ Legacy 12 เดือน — <em className="italic text-cinnabar">save 8%</em> · monthly check-in · co-founder advisory ตลอดปี.
              </h4>
            </div>
            <div className="text-right shrink-0">
              <div className="font-serif italic text-cinnabar text-[34px] md:text-[44px] leading-none tabular-nums">฿532,000</div>
              <div className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">/ year · vs ฿578k</div>
            </div>
          </div>
        </Reveal>

        {/* Add-ons */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> Add-ons · no markup for Boutique clients
          </div>
          <div className="border-t border-foreground/20">
            {boutiqueAddons.map((a) => (
              <div key={a.name} className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto] gap-3 md:gap-10 items-baseline py-6 md:py-7 border-b border-foreground/20">
                <h3 className="font-serif text-[19px] md:text-[22px] tracking-[-0.01em]">{a.name}</h3>
                <p lang="th" className="font-thai thai-wrap text-[14px] leading-[1.6] text-muted-foreground">{a.desc}</p>
                <div className="font-serif text-[18px] md:text-[20px] tracking-[-0.01em] tabular-nums whitespace-nowrap md:text-right">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 03 — DIGITAL */}
    <section id="digital" className="section-ink px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="Ø Digital" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[20ch]">
            Performance, <em className="italic text-cinnabar">by design.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Monthly retainer · From ฿22,900/mo · Money-back first month.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {digitalTiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className={`relative p-10 md:p-12 h-full flex flex-col bg-background ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${t.featured ? "md:-my-px border border-cinnabar" : ""}`}>
                {t.featured && (
                  <div className="absolute top-0 left-0 right-0 -translate-y-1/2 flex justify-center">
                    <span className="bg-cinnabar text-background font-mono text-[10px] tracking-[0.22em] uppercase px-4 py-2">Recommended</span>
                  </div>
                )}
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{t.name}</div>
                <h3 className="mt-6 font-serif text-[42px] md:text-[52px] leading-[1] tracking-[-0.02em] tabular-nums">{t.price}</h3>
                <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{t.sub}</div>
                <p className="mt-5 font-serif italic text-[15px] leading-[1.5] text-muted-foreground">{t.tagline}</p>

                <div className="mt-8 pt-6 border-t border-foreground/15 flex-1">
                  {t.rows.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[1fr_auto] gap-4 py-2.5 border-b border-foreground/10">
                      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{k}</div>
                      <div className="font-thai text-[13px] text-foreground/85 text-right">{v}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`mt-8 group inline-flex items-center justify-between gap-3 px-6 py-3.5 font-mono text-[10px] tracking-[0.22em] uppercase border transition-colors duration-300 ${
                    t.featured ? "border-cinnabar bg-cinnabar text-background"
                               : "border-foreground hover:border-cinnabar hover:text-cinnabar"
                  }`}
                >
                  <span>Start with {t.name.split(" ")[0]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 border-l-2 border-cinnabar pl-6 max-w-[720px]">
            <p lang="th" className="font-serif italic text-[18px] md:text-[22px] leading-[1.5]">
              ลูกค้าใหม่ 30 วันแรก — <em className="text-cinnabar">คืน 100% เดือนแรก</em>. เราเชื่อมั่นในระบบมากพอ ที่จะรับความเสี่ยงเดือนแรกแทนคุณ.
            </p>
          </div>
        </Reveal>

        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> Standalone add-ons · buy 3, get 10% off
          </div>
          <div className="border-t border-foreground/20">
            {digitalAddons.map((a) => (
              <div key={a.name} className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto] gap-3 md:gap-10 items-baseline py-6 md:py-7 border-b border-foreground/20">
                <h3 className="font-serif text-[19px] md:text-[22px] tracking-[-0.01em]">{a.name}</h3>
                <p lang="th" className="font-thai thai-wrap text-[14px] leading-[1.6] text-muted-foreground">{a.desc}</p>
                <div className="font-serif text-[18px] md:text-[20px] tracking-[-0.01em] tabular-nums whitespace-nowrap md:text-right">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 04 — PRODUCTION */}
    <section id="production" className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="04" label="Ø Production" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[22ch]">
            Crew on demand · <em className="italic text-cinnabar">priced by camera + crew.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Per project · From ฿12,000 / shoot day · senior crew only.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {productionDays.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <div className={`relative p-10 md:p-12 h-full flex flex-col bg-background ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${d.featured ? "md:-my-px border border-cinnabar" : ""}`}>
                {d.featured && (
                  <div className="absolute top-0 left-0 right-0 -translate-y-1/2 flex justify-center">
                    <span className="bg-cinnabar text-background font-mono text-[10px] tracking-[0.22em] uppercase px-4 py-2">Recommended</span>
                  </div>
                )}
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{d.name}</div>
                <h3 className="mt-6 font-serif text-[42px] md:text-[52px] leading-[1] tracking-[-0.02em] tabular-nums">{d.price}</h3>
                <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{d.sub}</div>
                <div className="mt-8 pt-6 border-t border-foreground/15 space-y-5 flex-1">
                  {d.items.map(([k, v]) => (
                    <div key={k}>
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{k}</div>
                      <p lang="th" className="mt-2 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.65] text-foreground/80">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> A-la-carte · 10% off when buying 3+ in one shoot
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-foreground/20">
            {productionAlaCarte.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <div className={`p-8 md:p-10 bg-background border-foreground/20 ${i > 0 ? "border-t md:border-t-0" : ""} ${i % 2 !== 0 ? "md:border-l" : ""} ${i >= 2 ? "md:border-t" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-5">{g.group}</div>
                  <div className="border-t border-foreground/15">
                    {g.rows.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[1fr_auto] gap-4 py-3 border-b border-foreground/10">
                        <div className="font-thai text-[13px] md:text-[14px] text-foreground/85">{k}</div>
                        <div className="font-serif text-[14px] md:text-[16px] tabular-nums text-foreground">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 05 — CONSULTING (summary card → link) */}
    <section id="consulting" className="section-ink px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Ø Consulting" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-lg max-w-[22ch]">
            Fractional <em className="italic text-cinnabar">CCO</em> · 12–36 month contracts.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            ที่ปรึกษาเชิงกลยุทธ์ระดับ C-suite — เข้าทำงานร่วมกับ founder/board เพื่อสร้างรายได้ฐาน ที่มั่นคงและความสัมพันธ์ลึก. ราคาเริ่มต้น <em className="not-italic text-cinnabar">฿180,000/mo</em>.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link to="/consulting" className="btn-accent mt-12 inline-flex">
            <span>See full Consulting brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* 06 — LADDER */}
    <section id="ladder" className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="06" label="The Ladder" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md max-w-[22ch]">
            เลือก <em className="italic text-cinnabar">บท</em> ของคุณ.
          </h2>
        </Reveal>
        <div className="mt-16 border-t border-foreground/20">
          {ladder.map((p) => {
            const isHash = p.to.startsWith("#");
            const inner = (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_0.8fr_1.4fr_auto] gap-3 md:gap-10 items-baseline py-7 md:py-8 border-b border-foreground/20 group">
                <h3 className="font-serif italic text-cinnabar text-[22px] md:text-[26px] tracking-[-0.015em]">{p.code}</h3>
                <div className="font-serif text-[15px] md:text-[17px] tracking-[-0.005em]">{p.start}</div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{p.term}</div>
                <p lang="th" className="font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.6] text-foreground/80">{p.best}</p>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-cinnabar transition-colors" />
              </div>
            );
            return isHash
              ? <a key={p.code} href={p.to}>{inner}</a>
              : <Link key={p.code} to={p.to}>{inner}</Link>;
          })}
        </div>
      </div>
    </section>

    {/* 07 — FINE PRINT */}
    <section id="fineprint" className="section-ink px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="07" label="Fine print" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md max-w-[22ch]">
            No surprises. <em className="italic text-cinnabar">Ever.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 border-t border-foreground/20">
          {finePrint.map((f) => (
            <div key={f.n} className="border-b border-foreground/20 py-7 grid grid-cols-[40px_1fr] gap-4 items-baseline">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{f.n}</div>
              <div>
                <h4 className="font-serif text-[18px] md:text-[20px] tracking-[-0.015em]">{f.t}</h4>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 08 — CTA */}
    <CTABand
      eyebrow="Ready to begin"
      title={<>Pricing is the easy part. <em className="italic text-cinnabar">Fit is the hard part.</em></>}
      subtitle="30-min discovery call · we'll tell you the right tier — or tell you it's not us."
      primary={{ label: "Book discovery call", to: "/contact" }}
      secondary={{ label: "Browse services", to: "/services" }}
      tone="snow"
    />
  </div>
);

export default Pricing;