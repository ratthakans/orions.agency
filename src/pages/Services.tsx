import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";

const packages = [
  {
    tier: "◐ Starter",
    name: ["Data-Informed", "Loop"],
    tagline: "For brands taking their first refined steps.",
    price: "฿35,000",
    sub: "/ เดือน · สัญญา 1 เดือน · ไม่ผูกมัด",
    annual: "Annual ฿350,000 · save 17%",
    features: [
      "1 Content Loop ครบวงจร — 6 Reels / 3 Static / 1 Horizontal",
      "Stories 6 + Photos 6 ครั้ง/เดือน",
      "Monthly Audience Insight Snapshot",
      "Competitor Analysis 3 brands",
      "1 Production Day · Sony A7V + ทีม 2 คน",
      "1 แพลตฟอร์ม + Cross-post",
      "Free Onboarding + Brand Audit",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    tier: "◑ Pro · Most Popular",
    name: ["Data-Tested", "Loops"],
    tagline: "For brands ready to cut through the noise.",
    price: "฿69,000",
    sub: "/ เดือน · สัญญาขั้นต่ำ 3 เดือน",
    annual: "Annual ฿690,000 · save 17%",
    features: [
      "12 Reels · 6 Static · 2 Hero Video · 12 Photos",
      "Stories 12 ครั้ง/เดือน",
      "+ Quarterly Signature Campaign",
      "+ Quarterly Audience Lifecycle Map",
      "Persona Mapping + A/B Testing",
      "2 Production Days · ทีม 3 คน + pro lighting",
      "Ads Management ฟรี ≤ ฿50k",
      "2 แพลตฟอร์ม + Monthly Report + QSR",
    ],
    cta: "Start with Pro",
    featured: true,
  },
  {
    tier: "◒ Elite",
    name: ["Data-Strategy", "Lab"],
    tagline: "For brands becoming a name remembered.",
    price: "฿139,000",
    sub: "/ เดือน · สัญญาขั้นต่ำ 6 เดือน",
    annual: "Annual ฿1,390,000 · save 17%",
    features: [
      "24 Reels · 12 Static · 3 Signature Stories",
      "Stories 16/mo · 24 Photos · 3 Production Days",
      "+ Quarterly Creative Lab (4hr workshop)",
      "+ Annual Audience Lifecycle Strategy",
      "+ Brand Manual (มูลค่า ฿30k · ฟรี)",
      "+ Brand Film 1 ครั้ง/6 เดือน (฿80k · ฟรี)",
      "Custom Dashboard + Dedicated AM",
      "Industry Exclusivity",
    ],
    cta: "Talk to Us",
    featured: false,
  },
];

const tiers = [
  { sym: "◐", title: "เริ่มต้น",       th: "กำลังสร้างเสียงของแบรนด์เป็นครั้งแรก ยังไม่มีฐาน audience ที่ชัด",         match: "Starter" },
  { sym: "◑", title: "กำลังเติบโต",     th: "มีฐานแล้ว แต่ต้องตัดผ่าน noise ในตลาด — แข่งกับคู่แข่งหนัก",              match: "Pro" },
  { sym: "◒", title: "เป็นที่รู้จัก",   th: "แบรนด์มีตัวตนชัด ต้องการสร้าง legacy + เป็นที่จดจำในระดับอุตสาหกรรม",   match: "Elite" },
];

const addOnCategories = [
  {
    label: "Branding",
    items: [
      { name: "Brand Identity Package", italic: false, desc: "Logo + Brand Book + Color + Typography + Visual System", price: "From ฿80,000" },
      { name: "Signature Campaign Concept", italic: true,  desc: "Big Idea across 6:3:1 Loop + Creative Direction + Strategy", price: "From ฿35,000" },
      { name: "Brand Deep Dive Session", italic: false, desc: "Half-day workshop · focused area + Summary deck", price: "฿20,000" },
    ],
  },
  {
    label: "Social Media",
    items: [
      { name: "Community Management Plus", italic: false, desc: "Extended hours 8:00–23:00 + Active Outreach + Auto-reply", price: "฿8,000 / mo" },
      { name: "Influencer / KOL Management", italic: true,  desc: "Selection + briefing + campaign management + reporting", price: "10% · min ฿10,000" },
      { name: "Paid Ads Audit & Analyze", italic: false, desc: "Performance review + Recommendations + Optimization", price: "฿15,000" },
    ],
  },
  {
    label: "Creative Production",
    items: [
      { name: "Brand Film (3–5 min)", italic: true,  desc: "Cinematic short film with director + plot + full crew", price: "From ฿80,000" },
      { name: "Commercial Video Production", italic: false, desc: "Script + cast + full crew · script-led brand video", price: "From ฿50,000" },
      { name: "Professional Photoshoot", italic: false, desc: "Dedicated shoot + retouching 20–40 images", price: "฿15,000 / day" },
    ],
  },
];

const Services = () => (
  <div>
    <SEO
      title="Services & Packages — ØRIONS"
      description="3 tiers. 1 goal. Refined content packages designed around our 6:3:1 system."
      path="/services"
    />

    {/* HERO */}
    <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            08 — Packages
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl max-w-[14ch]">
            3 ระดับ.<br />1 <em className="italic text-cinnabar">เป้าหมาย.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[680px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            แพ็กเกจของเราออกแบบตามจำนวน Content Loop + Data Depth + Strategic Layer — ยิ่งสูง ยิ่งครอบคลุม Brand Journey
          </p>
        </Reveal>
      </div>
    </section>

    {/* PACKAGES */}
    <section className="px-6 md:px-10 pb-24">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
        {packages.map((p, i) => (
          <Reveal key={p.tier} delay={i * 0.08}>
            <div className={`relative p-10 md:p-12 h-full flex flex-col ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${p.featured ? "bg-foreground text-background" : "bg-background"}`}>
              {p.featured && (
                <div className="absolute top-0 left-0 right-0 -translate-y-1/2 flex justify-center">
                  <span className="bg-cinnabar text-background font-mono text-[10px] tracking-[0.22em] uppercase px-4 py-2">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`font-mono text-[10px] tracking-[0.22em] uppercase ${p.featured ? "text-cinnabar" : "text-cinnabar"}`}>
                {p.tier}
              </div>
              <h3 className="mt-8 font-serif text-[36px] md:text-[42px] leading-[1] tracking-[-0.02em]">
                {p.name[0]}<br /><em className="italic">{p.name[1]}</em>
              </h3>
              <p className={`mt-5 font-serif italic text-[15px] md:text-[16px] leading-[1.5] ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                {p.tagline}
              </p>

              <div className="mt-10 pt-8 border-t border-current/20">
                <div className={`font-mono text-[10px] tracking-[0.22em] uppercase mb-3 ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>
                  Start from
                </div>
                <div className="font-serif text-[42px] md:text-[48px] tracking-[-0.025em] leading-none">{p.price}</div>
                <div className={`mt-2 font-mono text-[10px] tracking-[0.18em] uppercase ${p.featured ? "text-background/60" : "text-muted-foreground"}`}>
                  {p.sub}
                </div>
                <div className={`mt-3 font-mono text-[10px] tracking-[0.18em] uppercase ${p.featured ? "text-cinnabar" : "text-cinnabar"}`}>
                  {p.annual}
                </div>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 font-thai text-[14px] leading-[1.6]">
                    <Check className={`w-4 h-4 mt-1 shrink-0 ${p.featured ? "text-cinnabar" : "text-cinnabar"}`} />
                    <span className={p.featured ? "text-background/85" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-10 group inline-flex items-center justify-between gap-3 px-6 py-4 btn-label border transition-colors duration-300 ${
                  p.featured
                    ? "border-cinnabar bg-cinnabar text-background hover:bg-background hover:text-foreground hover:border-background"
                    : "border-foreground bg-foreground text-background hover:bg-cinnabar hover:border-cinnabar"
                }`}
              >
                <span>{p.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Founder's deal */}
      <Reveal delay={0.2}>
        <div className="max-w-[1280px] mx-auto mt-12 bg-cinnabar text-background p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h4 className="font-serif text-[24px] md:text-[28px] tracking-[-0.015em]">
              Founder's Deal — <em className="italic">20 รายแรก</em>
            </h4>
            <p className="mt-3 font-thai text-[14px] md:text-[15px] leading-[1.6] text-background/85 max-w-[560px]">
              3 เดือนแรกที่ ฿29,000/เดือน (Save ฿18,000) + ฟรี Brand Audit Report (มูลค่า ฿8,000)
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-serif text-[64px] md:text-[80px] leading-none tracking-[-0.03em]">20</div>
            <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-background/70">Slots Only</div>
          </div>
        </div>
      </Reveal>
    </section>

    {/* FIND YOUR TIER — guide */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            07 — Find Your Tier
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg">
            ตอนนี้ — เลือก<br /><em className="italic text-cinnabar">tier</em> ที่ใช่.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[680px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            แบรนด์ของคุณอยู่ช่วงไหน — เลือก stage ที่ใกล้ที่สุด เราจะเสนอ tier ที่เหมาะกับจังหวะการเติบโต
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {tiers.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-12 h-full flex flex-col">
                <div className="text-cinnabar text-[40px] leading-none">{t.sym}</div>
                <h3 className="mt-8 font-serif text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.02em]">{t.title}</h3>
                <p className="mt-5 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground flex-1">{t.th}</p>
                <div className="mt-8 pt-6 border-t border-foreground/15 font-mono text-[10px] tracking-[0.2em] uppercase">
                  → Match: <span className="text-cinnabar">{t.match}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center gap-5">
            <Link
              to="/diagnostic"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 btn-label hover:bg-cinnabar transition-colors duration-300"
            >
              <span>Take The Diagnostic</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              Talk to us first →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ADD-ONS — editorial table */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            09 — Add-ons
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[16ch]">
            Beyond the<br /><em className="italic text-cinnabar">package.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[680px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            Standalone services — ไม่ต้องอัปเกรด package ก็เลือกใช้ได้. เหมาะกับแบรนด์ที่มีเป้าหมายเฉพาะ หรือต้องการเพิ่มช่องทางใหม่.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            All prices exclude VAT 7% · one-time fees unless marked monthly
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-20">
          {addOnCategories.map((cat, ci) => (
            <Reveal key={cat.label} delay={ci * 0.05}>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar flex items-center gap-3 mb-6">
                  <span className="block w-6 h-px bg-cinnabar" />
                  {cat.label}
                </div>
                <div className="border-t border-foreground/20">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_auto] gap-3 md:gap-10 items-baseline py-6 md:py-7 border-b border-foreground/20 transition-colors hover:bg-surface px-2 md:px-4 -mx-2 md:-mx-4"
                    >
                      <h3 className={`font-serif text-[20px] md:text-[24px] leading-[1.15] tracking-[-0.01em] ${item.italic ? "italic text-cinnabar" : ""}`}>
                        {item.name}
                      </h3>
                      <p className="font-thai text-[14px] md:text-[15px] leading-[1.6] text-muted-foreground">
                        {item.desc}
                      </p>
                      <div className="font-mono text-[12px] tracking-[0.15em] uppercase text-foreground whitespace-nowrap md:text-right">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bundle Discount */}
        <Reveal delay={0.2}>
          <div className="mt-16 bg-cinnabar text-background p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-background/70">
                Bundle Discount
              </div>
              <h4 className="mt-3 font-serif text-[28px] md:text-[36px] tracking-[-0.015em] leading-[1.05]">
                Buy 3 add-ons or more — <em className="italic">15% off, instantly.</em>
              </h4>
              <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.6] text-background/85 max-w-[560px]">
                Mix and match — package + add-ons ปรับให้เข้ากับโจทย์ของคุณ. คุยกับ Account Manager เพื่อขอใบเสนอราคา.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between gap-4 px-7 py-4 btn-label border border-background bg-background text-cinnabar hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-300 shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Services;