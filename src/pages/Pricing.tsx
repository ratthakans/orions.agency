import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import PageMark from "@/components/PageMark";
import ClosingCTA from "@/components/ClosingCTA";
const SITE_URL = "https://orions.agency";

/* ─────────────────────────────────────────────────────────────────── */
/* DATA                                                                 */
/* ─────────────────────────────────────────────────────────────────── */

type Pkg = {
  key: string;
  badge: string;
  name: string;
  price: string;
  unit: string;
  contract: string;
  highlights: string[];
  ribbon?: string;
};

const packages: Pkg[] = [
  {
    key: "starter",
    badge: "01 · STARTER",
    name: "Starter",
    price: "29,000",
    unit: "THB / mo",
    contract: "ขั้นต่ำ 1 เดือน",
    highlights: [
      "10 Static posts",
      "15 Reels / TikTok (9:16)",
      "1 Production day",
      "1 Platform · Strategy meetup 1 ครั้ง / เดือน",
    ],
  },
  {
    key: "pro",
    badge: "02 · MOST POPULAR",
    name: "Pro",
    price: "59,000",
    unit: "THB / mo",
    contract: "ขั้นต่ำ 3 เดือน",
    ribbon: "★ MOST POPULAR",
    highlights: [
      "15 Static posts · 15 Stories",
      "30 Reels / TikTok · 10 Photos",
      "2 Production days · 2 Platforms",
      "Free Ads Management ≤ 50k",
    ],
  },
  {
    key: "elite",
    badge: "03 · PREMIUM",
    name: "Elite",
    price: "119,000",
    unit: "THB / mo",
    contract: "ขั้นต่ำ 6 เดือน",
    ribbon: "♛ PREMIUM",
    highlights: [
      "20 Static · Daily Stories · 30 Reels (3 Hero)",
      "1 Horizontal video · 20–30 Photos",
      "3 Production days · Full Crew · 4 Platforms",
      "Free Ads ≤ 100k · Brand Manual · Performance Bonus",
    ],
  },
];

type Row = { label: string; starter: string; pro: string; elite: string };
type Group = { title: string; rows: Row[] };
const compareGroups: Group[] = [
  {
    title: "Headline",
    rows: [
      { label: "Price (THB / mo)", starter: "29,000", pro: "59,000", elite: "119,000" },
      { label: "Minimum contract", starter: "1 mo", pro: "3 mo", elite: "6 mo" },
    ],
  },
  {
    title: "Content",
    rows: [
      { label: "Static posts", starter: "10", pro: "15", elite: "20" },
      { label: "Stories (IG / FB)", starter: "—", pro: "15", elite: "Daily (30)" },
      { label: "Reels / TikTok (9:16)", starter: "15", pro: "30", elite: "30 (3 Hero)" },
      { label: "Horizontal video (16:9)", starter: "—", pro: "—", elite: "1 / mo" },
      { label: "Photography", starter: "—", pro: "10", elite: "20–30" },
    ],
  },
  {
    title: "Production",
    rows: [
      { label: "Production days", starter: "1", pro: "2", elite: "3 (full crew)" },
      { label: "Platforms covered", starter: "1", pro: "2", elite: "up to 4" },
    ],
  },
  {
    title: "Strategy",
    rows: [
      { label: "Strategy meetup", starter: "1× / mo", pro: "2× / mo", elite: "4× / mo" },
      { label: "Trend report", starter: "Monthly", pro: "Bi-weekly", elite: "2× / mo + alerts" },
      { label: "Content calendar", starter: "—", pro: "Monthly", elite: "Monthly + QBR" },
      { label: "Brand manual", starter: "—", pro: "—", elite: "✓" },
    ],
  },
  {
    title: "Ads & Community",
    rows: [
      { label: "Ads management", starter: "Add-on (3,500)", pro: "Free ≤ 50k", elite: "Free ≤ 100k" },
      { label: "Community mgmt response", starter: "≤ 6 hr", pro: "≤ 3 hr", elite: "≤ 1 hr" },
      { label: "Dedicated account mgr", starter: "—", pro: "Shared", elite: "✓" },
    ],
  },
  {
    title: "Delivery",
    rows: [
      { label: "Revisions", starter: "1 / piece", pro: "2 / piece", elite: "3 major + ∞ minor" },
      { label: "Performance bonus", starter: "—", pro: "—", elite: "ROAS > 5× → 5%" },
    ],
  },
];

type SearchPkg = {
  key: string;
  badge: string;
  name: string;
  price: string;
  unit: string;
  highlights: string[];
  ribbon?: string;
};
const searchPackages: SearchPkg[] = [
  {
    key: "seo",
    badge: "01 · SEO",
    name: "SEO",
    price: "20,000",
    unit: "THB / mo",
    highlights: [
      "Keyword research (80–120 / mo)",
      "On-page · Schema · Technical audit",
      "Content optimization 4–5 บทความ / mo",
      "Backlink building 5–8 quality links",
      "Local SEO + Google Business Profile",
    ],
  },
  {
    key: "aeo",
    badge: "02 · AEO",
    name: "AEO",
    price: "25,000",
    unit: "THB / mo",
    ribbon: "★ NEW",
    highlights: [
      "AI visibility audit (ChatGPT / Perplexity / Claude)",
      "Q&A content 5–6 บทความ + Entity optimization",
      "Citation tracking (50–80 prompts / mo)",
      "LLM-friendly restructuring + E-E-A-T",
      "Brand mention analysis report",
    ],
  },
  {
    key: "bundle",
    badge: "03 · BUNDLE",
    name: "SEO + AEO",
    price: "35,000",
    unit: "THB / mo",
    ribbon: "★ SAVE 10K",
    highlights: [
      "ทุกอย่างใน SEO + AEO",
      "Integrated visibility strategy",
      "Unified monthly report",
      "Quarterly strategy workshop",
      "Priority response",
    ],
  },
];

type Service = { name: string; note: string; price: string; unit?: string };

const productionServices: Service[] = [
  { name: "Long-form Video (3–5 min)", note: "Script + production + editing — YouTube / FB", price: "15,000", unit: "/ คลิป" },
  { name: "TVC / Commercial Production", note: "Script · actors · full crew", price: "เริ่ม 50,000" },
  { name: "Brand Film (3–5 min)", note: "Cinematic short film · script-driven", price: "เริ่ม 80,000" },
  { name: "Podcast Production", note: "บันทึก + ตัดต่อ + เผยแพร่", price: "12,000", unit: "/ EP" },
  { name: "Professional Photoshoot", note: "Half / full day + retouch 20–40 ภาพ", price: "15,000", unit: "/ วัน" },
  { name: "Drone Aerial Shoot", note: "ภาพ / วิดีโอจากมุมสูง (พื้นที่อนุญาต)", price: "8,000", unit: "/ ครั้ง" },
];

const webServices: Service[] = [
  { name: "Landing Page", note: "Design + development หน้าเดียว", price: "20,000" },
  { name: "Website (5–7 pages)", note: "Responsive + basic SEO", price: "เริ่ม 60,000" },
  { name: "E-commerce Setup", note: "Shopee / Lazada / Web store", price: "เริ่ม 35,000" },
  { name: "LINE OA Setup + Rich Menu", note: "Setup + Rich Menu + Auto-reply", price: "12,000" },
];

const marketingServices: Service[] = [
  { name: "Ads Management (Starter)", note: "Budget ≤ 30k", price: "3,500", unit: "/ mo" },
  { name: "Influencer / KOL Mgmt", note: "คัด · ติดต่อ · บริหาร · วัดผล", price: "10%", unit: "ของ budget" },
  { name: "Email Marketing Setup", note: "ระบบ + template + automation", price: "เริ่ม 18,000" },
  { name: "Workshop ทีมลูกค้า (½ วัน)", note: "อบรมทีมงาน Social Media", price: "18,000" },
  { name: "Brand Strategy Workshop (full day)", note: "ปรับ positioning + strategy", price: "45,000" },
  { name: "Raw Files Delivery", note: "Footage + source files", price: "15,000", unit: "/ mo" },
  { name: "Crisis Management / PR", note: "จัดการประเด็นที่กระทบแบรนด์", price: "Quote per case" },
];

const faqs = [
  { q: "ผลลัพธ์เห็นเมื่อไหร่?", a: "30 วันแรก — เห็น traction (reach, engagement, save) · 90 วัน — เห็นผลกับยอดขาย / leads · เรารายงานตัวเลขจริงทุกเดือน ไม่ใช่ vanity metrics." },
  { q: "ใครเป็นเจ้าของไฟล์ต้นฉบับ (Raw Files)?", a: "ลูกค้าเป็นเจ้าของ final deliverables ทั้งหมด · Raw files (footage, source) ส่งมอบเมื่อจบสัญญา หรือซื้อเพิ่ม 15,000 THB ต่อเดือนของงาน" },
  { q: "ปรับแพ็กเกจระหว่างสัญญาได้ไหม?", a: "อัปเกรดได้ทุกเมื่อ · ดาวน์เกรดทำได้เมื่อจบรอบสัญญาปัจจุบัน" },
  { q: "มีค่า Setup Fee ไหม?", a: "ไม่มี · รวมในแพ็กเกจแล้วทุกระดับ" },
];

const jumpNav = [
  { href: "#social", label: "Social Media" },
  { href: "#compare", label: "Compare" },
  { href: "#search", label: "Search + AI" },
  { href: "#production", label: "Production" },
  { href: "#web", label: "Web" },
  { href: "#marketing", label: "Marketing" },
  { href: "#faq", label: "FAQ" },
];

/* ─────────────────────────────────────────────────────────────────── */
/* COMPONENTS                                                           */
/* ─────────────────────────────────────────────────────────────────── */

const PackageCard = ({ p }: { p: Pkg }) => (
  <Reveal>
    <article className={`relative bg-background border border-foreground p-7 md:p-9 h-full flex flex-col ${p.ribbon === "★ MOST POPULAR" ? "md:-translate-y-3 md:shadow-[0_0_0_1px_hsl(var(--orion))]" : ""}`}>
      {p.ribbon && (
        <div className="absolute -top-px left-0 bg-orion text-background px-4 py-1 font-mono text-[10px] tracking-[0.14em] uppercase">
          {p.ribbon}
        </div>
      )}
      <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">{p.badge}</div>
      <h3 className={`mt-5 font-serif italic tracking-[-0.02em] leading-none ${p.ribbon === "★ MOST POPULAR" ? "text-[48px] md:text-[60px]" : "text-[40px] md:text-[52px]"}`}>{p.name}</h3>
      <div className="mt-7 flex items-baseline gap-2">
        <span className={`font-serif text-orion tracking-[-0.03em] tabular-nums ${p.ribbon === "★ MOST POPULAR" ? "text-[52px] md:text-[64px]" : "text-[44px] md:text-[52px]"}`}>{p.price}</span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.unit}</span>
      </div>
      <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.contract}</p>

      <ul className="mt-8 pt-6 border-t border-soft space-y-3 flex-1">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 font-thai text-[14px] leading-[1.55] text-foreground/80">
            <span className="text-orion mt-[2px]">—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-8 group inline-flex items-center justify-between border-t border-foreground pt-5 font-mono text-[10px] tracking-[0.14em] uppercase hover:opacity-60 transition-opacity"
      >
        <span>Book a call</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>
    </article>
  </Reveal>
);

const SearchCard = ({ p }: { p: SearchPkg }) => (
  <Reveal>
    <article className="relative bg-background border border-foreground p-7 md:p-8 h-full flex flex-col">
      {p.ribbon && (
        <div className="absolute -top-px left-0 bg-orion text-background px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase">
          {p.ribbon}
        </div>
      )}
      <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">{p.badge}</div>
      <h3 className="mt-5 font-serif italic text-[34px] md:text-[42px] tracking-[-0.02em] leading-none">{p.name}</h3>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-serif text-orion text-[36px] md:text-[44px] tracking-[-0.03em] tabular-nums">{p.price}</span>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{p.unit}</span>
      </div>
      <ul className="mt-7 pt-5 border-t border-soft space-y-2.5 flex-1">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 font-thai text-[13.5px] leading-[1.55] text-foreground/80">
            <span className="text-orion mt-[2px]">—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-7 group inline-flex items-center justify-between border-t border-foreground pt-4 font-mono text-[10px] tracking-[0.14em] uppercase hover:opacity-60 transition-opacity"
      >
        <span>Add to package</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>
    </article>
  </Reveal>
);

const ServiceTable = ({ rows }: { rows: Service[] }) => (
  <div className="mt-12 md:mt-16 border-t border-foreground">
    {rows.map((s) => (
      <div key={s.name} className="grid grid-cols-12 gap-4 md:gap-6 items-baseline py-6 md:py-7 border-b border-foreground/15">
        <div className="col-span-12 md:col-span-5 font-serif italic text-[20px] md:text-[24px] tracking-[-0.01em] leading-[1.2]">
          {s.name}
        </div>
        <div className="col-span-7 md:col-span-4 font-thai text-[13.5px] leading-[1.5] text-muted-foreground">
          {s.note}
        </div>
        <div className="col-span-5 md:col-span-3 text-right md:text-left flex items-baseline justify-end md:justify-start gap-2">
          <span className="font-serif text-orion text-[22px] md:text-[26px] tracking-[-0.02em] tabular-nums">{s.price}</span>
          {s.unit && <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{s.unit}</span>}
        </div>
      </div>
    ))}
  </div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <Reveal>
    <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em]">
      <em className="text-orion italic">{children}</em>
    </h2>
  </Reveal>
);

/* ─────────────────────────────────────────────────────────────────── */
/* PAGE                                                                 */
/* ─────────────────────────────────────────────────────────────────── */

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <SEO
        title="Pricing — ØRIONS"
        description="Social media packages เริ่ม 29k · SEO/AEO · Production · Web · Marketing — one team, one retainer."
        path="/pricing"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing` },
          ],
        }}
      />

      {/* 01 · HERO — short, with jump nav */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-10 md:pb-14">
          <PageMark index="01" total="08" />
          <Reveal>
            <h1 className="font-serif text-[52px] md:text-[88px] lg:text-[112px] leading-[1.0] tracking-[-0.03em] max-w-[18ch]">
              <em className="text-orion italic">Pricing.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
              เริ่มต้น <span className="text-orion not-italic font-serif">29,000</span> บาท / เดือน · cancel anytime.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <a href="#social" className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 font-mono text-[10px] tracking-[0.14em] uppercase hover:bg-orion transition-colors">
                See packages <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link to="/contact" className="group inline-flex items-center gap-2 border border-foreground px-6 py-3.5 font-mono text-[10px] tracking-[0.14em] uppercase hover:bg-foreground hover:text-background transition-colors">
                Get a free proposal
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <nav className="mt-10 pt-6 border-t border-foreground/15 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              <span className="text-foreground/40">Jump to —</span>
              {jumpNav.map((j, i) => (
                <Fragment key={j.href}>
                  <a href={j.href} className="hover:text-foreground transition-colors">{j.label}</a>
                  {i < jumpNav.length - 1 && <span className="opacity-30">·</span>}
                </Fragment>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* 02 · SOCIAL MEDIA PACKAGES */}
      <section id="social" className="px-6 md:px-10 border-t border-foreground scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="02" total="08" />
          <SectionHeading>Social Media.</SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif italic text-[17px] md:text-[19px] text-muted-foreground max-w-[560px] leading-[1.55]">
              Monthly retainer · 3 ระดับ ปรับขึ้นได้ทุกเมื่อ.
            </p>
          </Reveal>
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {packages.map((p) => <PackageCard key={p.key} p={p} />)}
          </div>
        </div>
      </section>

      {/* 03 · COMPARE */}
      <section id="compare" className="px-6 md:px-10 border-t border-foreground scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="03" total="08" />
          <SectionHeading>Compare.</SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif italic text-[17px] md:text-[19px] text-muted-foreground max-w-[560px] leading-[1.55]">
              เห็นความต่างของทุกแพ็กเกจในตารางเดียว.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 md:mt-16 -mx-6 md:mx-0 overflow-x-auto">
              <table className="min-w-[760px] w-full border-collapse">
                <thead>
                  <tr className="border-y border-foreground">
                    <th className="text-left py-5 pl-6 md:pl-4 pr-4 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground w-[34%]">
                      Feature
                    </th>
                    <th className="text-left py-5 px-4 font-serif italic text-[20px] md:text-[24px] tracking-[-0.01em] w-[22%]">
                      Starter
                    </th>
                    <th className="relative text-left py-5 px-4 font-serif italic text-[20px] md:text-[24px] tracking-[-0.01em] w-[22%] bg-foreground/[0.04]">
                      Pro
                      <span className="absolute -top-px left-0 bg-orion text-background px-2 py-[2px] font-mono text-[9px] tracking-[0.18em] uppercase">
                        ★ Popular
                      </span>
                    </th>
                    <th className="text-left py-5 px-4 pr-6 md:pr-4 font-serif italic text-[20px] md:text-[24px] tracking-[-0.01em] w-[22%]">
                      Elite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareGroups.map((g) => (
                    <Fragment key={g.title}>
                      <tr>
                        <td colSpan={4} className="pt-7 pb-2 pl-6 md:pl-4 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                          — {g.title}
                        </td>
                      </tr>
                      {g.rows.map((r) => (
                        <tr key={`${g.title}-${r.label}`} className="border-t border-foreground/15">
                          <td className="py-4 pl-6 md:pl-4 pr-4 font-thai text-[14px] leading-[1.5] text-foreground/80">
                            {r.label}
                          </td>
                          <td className="py-4 px-4 font-mono text-[12.5px] tabular-nums text-foreground/85">
                            <span className={r.starter === "—" ? "text-foreground/30" : ""}>{r.starter}</span>
                          </td>
                          <td className="py-4 px-4 font-mono text-[12.5px] tabular-nums bg-foreground/[0.04] text-foreground/90">
                            <span className={r.pro === "—" ? "text-foreground/30" : ""}>{r.pro}</span>
                          </td>
                          <td className="py-4 px-4 pr-6 md:pr-4 font-mono text-[12.5px] tabular-nums text-foreground/85">
                            <span className={r.elite === "—" ? "text-foreground/30" : ""}>{r.elite}</span>
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 · SEARCH + AI VISIBILITY */}
      <section id="search" className="px-6 md:px-10 border-t border-foreground scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="04" total="08" />
          <SectionHeading>Search + AI.</SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif italic text-[17px] md:text-[19px] text-muted-foreground max-w-[640px] leading-[1.55]">
              ผู้บริโภคยุคใหม่ค้นผ่าน Google และถาม AI — ปรากฏให้เจอทั้งสองทาง.
            </p>
          </Reveal>
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {searchPackages.map((p) => <SearchCard key={p.key} p={p} />)}
          </div>
          <p className="mt-10 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            Elite ได้ส่วนลด 20% — SEO 16k · AEO 20k · Bundle 28k.
          </p>
        </div>
      </section>

      {/* 05 · PRODUCTION */}
      <section id="production" className="px-6 md:px-10 border-t border-foreground scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="05" total="08" />
          <SectionHeading>Production.</SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-6 font-serif italic text-[17px] md:text-[19px] text-muted-foreground max-w-[560px] leading-[1.55]">
              Pay as you go · ไม่มีค่าผูกมัด.
            </p>
          </Reveal>
          <ServiceTable rows={productionServices} />
        </div>
      </section>

      {/* 06 · WEB & DIGITAL */}
      <section id="web" className="px-6 md:px-10 border-t border-foreground scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="06" total="08" />
          <SectionHeading>Web & Digital.</SectionHeading>
          <ServiceTable rows={webServices} />
        </div>
      </section>

      {/* 07 · MARKETING & STRATEGY */}
      <section id="marketing" className="px-6 md:px-10 border-t border-foreground scroll-mt-24">
        <div className="max-w-[1280px] mx-auto py-20 md:py-28">
          <PageMark index="07" total="08" />
          <SectionHeading>Marketing.</SectionHeading>
          <ServiceTable rows={marketingServices} />
          <p className="mt-8 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            Pro / Elite include Ads Management (≤ 50k / ≤ 100k).
          </p>
        </div>
      </section>

      {/* 08 · FAQ */}
      <section id="faq" className="px-6 md:px-10 border-t border-foreground scroll-mt-24">
        <div className="max-w-[1000px] mx-auto py-20 md:py-28">
          <PageMark index="08" total="08" />
          <Reveal>
            <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em]">
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
                      <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground mr-3 not-italic">0{i + 1}</span>
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

      <ClosingCTA
        eyebrow="NEXT STEPS"
        title={<>Tell us about <em className="text-orion italic">the brand.</em></>}
        description="30-min discovery call. Free. We reply within 24 hours."
        ctas={[
          { label: "Get a free proposal", to: "/contact" },
          { label: "See our work", to: "/work", variant: "ghost" },
        ]}
        email="hello@orions.agency"
        phone="+66 92 390 5464"
      />
    </div>
  );
};

export default Pricing;
