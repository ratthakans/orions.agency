import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

/* ---------- 01 Master Blueprint ---------- */
const blueprint = [
  { n: "Ø1", name: "Creative Agency",     tag: "Cashflow Driver",     desc: "บริการเชิงพาณิชย์ ตอบโจทย์การตลาดและยอดขาย — Boutique · Digital · Production สามยูนิตทำงานเป็นเครื่องเดียว.", to: "#boutique" },
  { n: "Ø2", name: "Creative Consulting", tag: "Predictable Revenue", desc: "ที่ปรึกษาเชิงกลยุทธ์ระดับ C-suite สัญญาระยะยาว 12–36 เดือน เพื่อรายได้ฐานที่มั่นคงและความสัมพันธ์ลึก.",         to: "/consulting" },
  { n: "Ø3", name: "Creative Studio",     tag: "Asset & Valuation",   desc: "in-house lab สร้างสินทรัพย์และนวัตกรรมของตัวเอง — products, IP, ventures. อิสระ 100% จากลูกค้า.",              to: "/studio" },
];

/* ---------- 02 Boutique ---------- */
const boutiqueIndustries = [
  { name: "Restaurant",     brief: "เปิดสาขา · launch menu · เปลี่ยน chef · เจาะตลาดต่างชาติ" },
  { name: "Hospitality",    brief: "เพิ่ม occupancy off-season · rebrand หลัง renovation · MICE" },
  { name: "Golf",           brief: "เพิ่ม member ต่างชาติ · tournament · rebrand" },
  { name: "Real Estate",    brief: "launch project · closeout · เจาะตลาดต่างชาติ" },
  { name: "Wellness",       brief: "launch program · wellness tourism · membership" },
  { name: "Premium Retail", brief: "collection launch · flagship opening · founder story" },
];

const boutiqueStandard = [
  { kpi: "Branded search",      v: "↑ 20–40%", note: "เทียบ baseline 90 วัน" },
  { kpi: "Engagement rate",     v: "↑ 30–50%", note: "บน brand content" },
  { kpi: "Earned media",        v: "3–10",     note: "Organic mentions (System + Legacy)" },
  { kpi: "Audience composition", v: "Mapped",  note: "ขยับเข้าหา target segment" },
];

const boutiquePhases = [
  { n: "01", title: "Strategy & Data",     weeks: "Weeks 1–3",   body: "Discovery + audience deep-dive + cultural intelligence report. ฟังคนที่ใช่ก่อนเริ่มทำ — Big Idea + manifesto เกิดจาก data จริง ไม่ใช่สมมติฐาน." },
  { n: "02", title: "Creative Direction",  weeks: "Weeks 2–4",   body: "Visual directions + world-build. คัด director, DP, photographer และ stylist ให้ตรงโทน — ทีมเฉพาะเรื่อง ไม่ใช่ทีมสำเร็จรูป." },
  { n: "03", title: "Production",          weeks: "Weeks 3–9",   body: "Full-service shoot days. Hero film, photography, short-form ถ่ายเป็น batch ที่วางแผนล่วงหน้า ด้วย senior crew เท่านั้น." },
  { n: "04", title: "Launch & Review",     weeks: "Weeks 4–12+", body: "Rollout calendar, cutdowns, press kit. Track ผลเทียบ ORIONS Standard และรีวิวที่ 30 / 60 / 90 วันตาม tier." },
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

/* ---------- 03 Digital tiers ---------- */
type Row = [string, string];
type Tier = {
  name: string; price: string; sub: string; tagline: string;
  featured?: boolean; rows: Row[];
};

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

/* ---------- 04 Production ---------- */
const productionDays = [
  {
    name: "Run-and-Gun", price: "฿12,000", sub: "S · 1 camera · 1 crew · 8 hrs",
    items: [
      ["Camera", "1 × Sony A7V + GM lens kit ครบ 6 ตัว"],
      ["Crew", "Solo Operator (DP)"],
      ["Lighting + Audio", "LED panel พกพา · RØDE VideoMic"],
      ["Delivery", "raw footage · cloud + proxy วันเดียวกัน"],
    ],
  },
  {
    name: "Multi-Cam", price: "฿24,000", sub: "M · 2 cameras · 2 crew · 10 hrs",
    items: [
      ["Camera", "2 × A7V (wide + handheld) + tethered monitor"],
      ["Crew", "DP + camera assistant"],
      ["Lighting + Audio", "studio kit 2–3 จุด · RØDE Wireless GO II ×2"],
      ["Delivery", "raw 2 มุมกล้อง · ตัดสลับมุมได้"],
    ],
  },
  {
    name: "Cinematic", price: "฿36,000", sub: "L · 3 cameras · 2 crew + gimbal · 10 hrs", featured: true,
    items: [
      ["Camera", "3 × A7V (static 2 + gimbal 1) + director's monitor"],
      ["Crew", "DP + assistant · ทีมเท่า M = คุ้มสุด"],
      ["Lighting + Audio", "studio kit เต็ม · RØDE Wireless PRO ×4 (32-bit Float) · DJI RS 4"],
      ["Delivery", "raw 3 มุมกล้อง · ลดวันถ่าย"],
    ],
  },
];

const productionKit = [
  { cat: "Audio · RØDE Professional", items: ["RØDE Wireless PRO / GO II · 32-bit Float on-board", "RØDE VideoMic Series · shotgun · run-and-gun"] },
  { cat: "Stabilization & Aerial",    items: ["DJI RS 4 · 3-axis · native vertical", "DJI Drone · cinema class"] },
  { cat: "Wireless Monitoring",       items: ["Hollyland Wireless Video · client monitor real-time"] },
  { cat: "Lighting · Studio Grade",   items: ["Nanlite Forza / FC · daylight + bi-color", "Nanlite PavoTube RGBWW · effect light", "NiceFoto softbox + heavy-duty stands"] },
  { cat: "Data Safety",               items: ["ProGrade Digital · dual-slot recording", "Cloud + local backup · raw 90 วัน"] },
];

const productionAlaCarte = [
  { group: "Crew · per day", rows: [
    ["Camera body เพิ่ม (A7V)", "฿4,500"],
    ["Second DP / B-cam",        "฿8,500"],
    ["Hair & Makeup",            "฿6,500"],
    ["Stylist",                  "฿8,500"],
    ["Producer (full-day)",      "฿7,500"],
    ["Drone + DJI Mavic 3 Pro",  "฿12,000"],
  ]},
  { group: "Post-production · per piece", rows: [
    ["Photo retouching (high-end)", "฿800"],
    ["Video edit · social (15–30s)", "฿4,500"],
    ["Video edit · brand (60–90s)",  "฿12,000"],
    ["Video edit · hero (2–3 min)",  "฿28,000"],
    ["Original music (90–180s)",     "฿35,000"],
    ["Subtitles THA + ENG",          "฿1,500"],
  ]},
  { group: "Equipment · per day", rows: [
    ["Sony FX3 cinema upgrade",   "฿8,500"],
    ["Underwater housing + diver", "฿9,500"],
    ["Anamorphic lens set",       "฿6,500"],
    ["HMI / Skypanel S60",        "฿8,500"],
    ["Pro sound recording",       "฿4,500"],
    ["Studio space rental",       "฿6.5–12k"],
  ]},
  { group: "Travel", rows: [
    ["Bangkok + ปริมณฑล",          "Included"],
    ["ต่างจังหวัด day trip ≤ 200km", "+฿8,500"],
    ["ต่างประเทศ",                 "Quoted"],
  ]},
];

const productionPromise = [
  "Senior crew only — no juniors as primary roles",
  "High-quality raw footage — ฟุตเทจดิบครบทุกมุม ตัดต่อเลือกเติมได้",
  "Same-day proxy delivery to client folder",
  "Cloud delivery (WeTransfer Pro / Google Drive)",
  "Raw archived 90 days · longer retention quoted",
  "Lifetime perpetual usage for your brand",
  "Technical fault (not creative direction) → free re-shoot",
];

/* ---------- 05 Ladder ---------- */
const ladder = [
  { code: "Ø Boutique",   start: "Brand Identity · From ฿80,000",      term: "Project-based", best: "แบรนด์เปิดใหม่ · rebrand · launch",                  to: "#boutique"   },
  { code: "Ø Digital",    start: "Retainer · From ฿22,900/mo",          term: "3–12 months",   best: "ต้องการสเกลยอดและวัดผล",                              to: "#digital"    },
  { code: "Ø Production", start: "Shoot day · From ฿12,000",            term: "Per project",   best: "ต้องการคอนเทนต์โปรดักชันคุณภาพ",                      to: "#production" },
  { code: "Ø Consulting", start: "Fractional CCO · From ฿180,000/mo",   term: "12–36 months",  best: "องค์กรใหญ่ที่ต้องการ creative leadership",            to: "/consulting" },
  { code: "Ø Studio",     start: "In-house lab · IP & ventures",        term: "Ongoing",       best: "ผลิตภัณฑ์ของ ØRIONS เอง — ไม่ใช่งานรับจ้าง",          to: "/studio"     },
];

/* ---------- 06 Fine print ---------- */
const finePrint = [
  { n: "01", t: "Payment",    body: "Boutique 50/50 · System 50/30/20 · Legacy 40/30/20/10. Digital ชำระต้นเดือน · Production single day 50/50." },
  { n: "02", t: "Revisions",  body: "ระบุแต่ละ package · เกินคิด 8–15% ของ package price ต่อรอบ · เปลี่ยน concept หลัก = scope ใหม่." },
  { n: "03", t: "Ownership",  body: "Final files เป็นของลูกค้าหลังชำระครบ · music commissioned = royalty-free perpetual · ORIONS เก็บ raw 90 วัน." },
  { n: "04", t: "Standard",   body: "ไม่ถึงเป้า → free adjustment chapter ใน engagement ถัดไป · Digital: 30 วันแรก คืน 100% เดือนแรก." },
  { n: "05", t: "Cancellation", body: "ก่อน production start คืน 70% · หลัง start คืน 30% + raw + งานเสร็จ. Production: ≥14d คืน 80% · 7–14d คืน 50%." },
  { n: "06", t: "Travel",     body: "Bangkok + ปริมณฑล included · ต่างจังหวัด/ต่างประเทศคิดตามจริง · ค่าตัว talent / music license แยก." },
];

/* =================================================================== */

const Services = () => (
  <div>
    <SEO
      title="Services — Boutique · Digital · Production · ØRIONS"
      description="Three divisions, one company. Boutique (brand & story) · Digital (performance) · Production (crew on demand). Rate card 2026."
      path="/services"
    />

    {/* 01 HERO + Master Blueprint */}
    <section className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="01" label="The Company" />
        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl max-w-[16ch]">
            ØRIONS.co — <em className="italic text-cinnabar">The Creative Company.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 font-serif italic text-[15px] md:text-[18px] text-muted-foreground">
            Three axes. One company. Cashflow · Predictable Revenue · Asset & Valuation.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
            {blueprint.map((m, i) => {
              const isHash = m.to.startsWith("#");
              const Inner = (
                <div className={`p-10 md:p-12 h-full bg-background ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""} hover:bg-cinnabar/[0.03] transition-colors`}>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">[ {m.tag} ]</div>
                  <div className="mt-6 font-serif italic text-cinnabar text-[28px] md:text-[34px] leading-none">{m.n}</div>
                  <h3 className="mt-4 font-serif text-[26px] md:text-[30px] leading-[1.1] tracking-[-0.02em]">{m.name}</h3>
                  <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{m.desc}</p>
                  <div className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70 inline-flex items-center gap-2">
                    Read more <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              );
              return isHash
                ? <a key={m.n} href={m.to} className="block">{Inner}</a>
                : <Link key={m.n} to={m.to} className="block">{Inner}</Link>;
            })}
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 BOUTIQUE */}
    <section id="boutique" className="px-6 md:px-10 border-t border-foreground/15 bg-surface scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Ø Boutique" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[18ch]">
            Stories, <em className="italic text-cinnabar">refined.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Build your brand & identity — a boutique studio crafting brand stories with intention.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[640px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            Brand strategy · cultural intelligence · documentary-grade production · เลือกเฉพาะ 6 industries ที่เราเข้าใจ buyer behavior, seasonality และ decision cycle ลึก.
          </p>
        </Reveal>

        {/* 6 industries */}
        <div className="mt-16">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> Six industries · selection over availability
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-foreground/20">
            {boutiqueIndustries.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.04}>
                <div className={`p-8 h-full bg-background border-foreground/20 ${i % 3 !== 0 ? "lg:border-l" : ""} ${i >= 3 ? "lg:border-t" : ""} ${i % 2 !== 0 ? "md:border-l lg:border-l" : ""} ${i >= 2 ? "md:border-t" : ""} ${i === 0 ? "" : "border-t md:border-t"}`}>
                  <h3 className="font-serif text-[22px] md:text-[26px] tracking-[-0.015em]">{it.name}</h3>
                  <p className="mt-3 font-thai text-[13px] md:text-[14px] leading-[1.65] text-muted-foreground">{it.brief}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Standard */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> The ORIONS Standard · 90-day proof
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-foreground/20">
            {boutiqueStandard.map((s, i) => (
              <Reveal key={s.kpi} delay={i * 0.05}>
                <div className={`p-8 md:p-10 h-full bg-background ${i > 0 ? "border-t lg:border-t-0 lg:border-l border-foreground/20" : ""} ${i === 2 ? "md:border-l md:border-t-0" : ""} ${i === 1 ? "md:border-l md:border-t-0" : ""} ${i === 3 ? "md:border-l" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">{s.kpi}</div>
                  <div className="mt-4 font-serif italic text-cinnabar text-[28px] md:text-[36px] leading-none tabular-nums">{s.v}</div>
                  <div className="mt-3 font-thai text-[13px] leading-[1.6] text-muted-foreground">{s.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Process */}
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
                  <p className="font-thai text-[14px] md:text-[15px] leading-[1.7] text-foreground/80">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Annual Legacy callout */}
        <Reveal delay={0.2}>
          <div className="mt-16 border-y border-cinnabar bg-background px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
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

        {/* Boutique add-ons */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> Add-ons · no mark-up for Boutique clients
          </div>
          <div className="border-t border-foreground/20">
            {boutiqueAddons.map((a) => (
              <div key={a.name} className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto] gap-3 md:gap-10 items-baseline py-6 md:py-7 border-b border-foreground/20">
                <h3 className="font-serif text-[19px] md:text-[22px] tracking-[-0.01em]">{a.name}</h3>
                <p className="font-thai text-[14px] leading-[1.6] text-muted-foreground">{a.desc}</p>
                <div className="font-serif text-[18px] md:text-[20px] tracking-[-0.01em] tabular-nums whitespace-nowrap md:text-right">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 03 DIGITAL */}
    <section id="digital" className="px-6 md:px-10 border-t border-foreground/15 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="Ø Digital" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[20ch]">
            Performance, <em className="italic text-cinnabar">by design.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Sales & reach — ads, content, funnel, CRM as one engine. Measurable results in 90 days · first-month money-back.
          </p>
        </Reveal>

        {/* 3 tiers */}
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
                  className={`mt-8 group inline-flex items-center justify-between gap-3 px-6 py-3.5 btn-label border transition-colors duration-300 ${
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

        {/* Money-back promise */}
        <Reveal delay={0.2}>
          <div className="mt-12 border-l-2 border-cinnabar pl-6 max-w-[720px]">
            <p className="font-serif italic text-[18px] md:text-[22px] leading-[1.5]">
              ลูกค้าใหม่ 30 วันแรก — <em className="text-cinnabar">คืน 100% เดือนแรก</em>. เราเชื่อมั่นในระบบมากพอ ที่จะรับความเสี่ยงเดือนแรกแทนคุณ.
            </p>
          </div>
        </Reveal>

        {/* Digital add-ons */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> Standalone add-ons · buy 3, get 10% off
          </div>
          <div className="border-t border-foreground/20">
            {digitalAddons.map((a) => (
              <div key={a.name} className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto] gap-3 md:gap-10 items-baseline py-6 md:py-7 border-b border-foreground/20">
                <h3 className="font-serif text-[19px] md:text-[22px] tracking-[-0.01em]">{a.name}</h3>
                <p className="font-thai text-[14px] leading-[1.6] text-muted-foreground">{a.desc}</p>
                <div className="font-serif text-[18px] md:text-[20px] tracking-[-0.01em] tabular-nums whitespace-nowrap md:text-right">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 04 PRODUCTION */}
    <section id="production" className="px-6 md:px-10 border-t border-foreground/15 bg-surface scroll-mt-24">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="04" label="Ø Production" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[20ch]">
            Crew on demand · <em className="italic text-cinnabar">priced by camera + crew.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            Sony A7V + GM lens kit · senior crew only · same-day proxy delivery.
          </p>
        </Reveal>

        {/* Shoot day tiers */}
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
                      <p className="mt-2 font-thai text-[13px] md:text-[14px] leading-[1.65] text-foreground/80">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Equipment kit */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> Commercial-grade kit · industry standard
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-foreground/20">
            {productionKit.map((g, i) => (
              <Reveal key={g.cat} delay={i * 0.04}>
                <div className={`p-8 h-full bg-background border-foreground/20 ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""} ${i >= 2 ? "lg:border-t-0 lg:border-l" : ""}`}>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70 mb-4">{g.cat}</div>
                  <ul className="space-y-3 font-thai text-[13px] md:text-[14px] leading-[1.6] text-foreground/85">
                    {g.items.map((it) => <li key={it} className="flex gap-2"><span className="text-cinnabar">·</span><span>{it}</span></li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-10 border-l-2 border-cinnabar pl-6 max-w-[720px]">
              <p className="font-serif italic text-[16px] md:text-[20px] leading-[1.5]">
                Safety net · <em className="text-cinnabar">32-bit Float</em> — RØDE Wireless PRO บันทึกสำรองในไมค์ · เสียงเบามากหรือตะโกนกระทันหัน เสียงไม่แตก · ปรับใน post ได้สมบูรณ์.
              </p>
            </div>
          </Reveal>
        </div>

        {/* A-la-carte */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> A-la-carte · buy 3 add-ons within a shoot day, 10% off
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

        {/* The Promise */}
        <div className="mt-20">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-cinnabar" /> The Promise · every shoot, delivery-ready
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-foreground/20">
            <div className="p-8 md:p-10 bg-background">
              <ul className="space-y-4">
                {productionPromise.map((p) => (
                  <li key={p} className="flex gap-3 font-thai text-[14px] md:text-[15px] leading-[1.6] text-foreground/85">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-cinnabar" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-background border-t md:border-t-0 md:border-l border-foreground/20 space-y-8">
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-3">— Ideal clients</div>
                <p className="font-thai text-[14px] leading-[1.7] text-foreground/85">
                  Agency อื่นที่ไม่มี in-house production · brand in-house team ที่ต้องการแค่ crew · PR firm ที่ต้องการ visual content · ลูกค้า ORIONS Digital/Boutique ที่ต้องการ capacity เพิ่ม.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3">— Not for</div>
                <p className="font-thai text-[14px] leading-[1.7] text-foreground/70">
                  Strategy / creative direction (ใช้ Boutique) · ads management (ใช้ Digital) · wedding · personal photography · event production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 05 LADDER */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="The Ladder" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            เลือก <em className="italic text-cinnabar">บท</em> ของคุณ.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[680px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            5 เส้นทาง — เริ่มจากจุดที่ใช่กับสถานะแบรนด์คุณตอนนี้ และต่อยอดเป็น ecosystem ได้เมื่อพร้อม.
          </p>
        </Reveal>

        <div className="mt-16 border-t border-foreground/20">
          {ladder.map((p, i) => {
            const isHash = p.to.startsWith("#");
            const inner = (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_0.8fr_1.4fr_auto] gap-3 md:gap-10 items-baseline py-7 md:py-8 border-b border-foreground/20 group">
                <h3 className="font-serif italic text-cinnabar text-[22px] md:text-[26px] tracking-[-0.015em]">{p.code}</h3>
                <div className="font-serif text-[15px] md:text-[17px] tracking-[-0.005em]">{p.start}</div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{p.term}</div>
                <p className="font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/80">{p.best}</p>
                <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-cinnabar transition-colors" />
              </div>
            );
            return (
              <Reveal key={p.code} delay={i * 0.05}>
                {isHash
                  ? <a href={p.to} className="block">{inner}</a>
                  : <Link to={p.to} className="block">{inner}</Link>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 06 FINE PRINT */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="06" label="The Fine Print" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Terms · <em className="italic text-cinnabar">across divisions.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-foreground/20">
          {finePrint.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.04}>
              <div className={`p-8 md:p-10 h-full bg-background border-foreground/20 ${i > 0 ? "border-t md:border-t-0" : ""} ${i % 2 !== 0 ? "md:border-l" : ""} ${i % 3 !== 0 ? "lg:border-l" : ""} ${i >= 2 ? "md:border-t" : ""} ${i >= 3 ? "lg:border-t" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{f.n}</div>
                <h3 className="mt-4 font-serif text-[22px] tracking-[-0.015em]">{f.t}</h3>
                <p className="mt-4 font-thai text-[13px] md:text-[14px] leading-[1.7] text-foreground/80">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">All prices VAT 7% excluded</p>
      </div>
    </section>

    {/* 07 CTA */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="07" label="Next step" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[20ch]">
            Discovery call · <em className="italic text-cinnabar">45 minutes.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[640px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            ฟรี · ไม่มีพันธะผูกมัด · เราคัด division ที่ใช่ที่สุดให้ก่อนเสนอราคา.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-4 btn-label border border-cinnabar bg-cinnabar text-background transition-opacity">
              <span>Book discovery call</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/consulting" className="inline-flex items-center gap-3 px-7 py-4 btn-label border border-foreground hover:border-cinnabar hover:text-cinnabar transition-colors">
              <span>Or — Ø Consulting</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Services;