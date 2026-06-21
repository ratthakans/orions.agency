import { Link } from "react-router-dom";
import { ArrowUpRight, Download, Phone, Info } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import pleum from "@/assets/pleum.jpg";

const RATECARD_PDF = "/ORIONS_RateCard_2026.pdf";

// 3 sales lines — pricing MODEL only (real numbers live in the Rate Card PDF /
// are quoted per client). This is the page's headline; no fixed prices here.
const lineModels = [
  {
    name: "Digital", tag: "ยอด / ลีด เดี๋ยวนี้", unit: "รายเดือน",
    model: "package fee รายเดือน + ad spend จ่ายตรง platform — เราดูแลและปรับแอดให้ ไม่บวก % ค่าแอด",
    note: "ผูกขั้นต่ำเพื่อให้ผลมีเวลาพิสูจน์",
  },
  {
    name: "Boutique", tag: "แบรนด์ที่คนจำและเลือก", unit: "ต่อแคมเปญ",
    model: "เหมาตามขอบเขต (สร้าง · refresh · rebrand) → ต่อ tracking retainer ได้หลังจบ",
    note: "ปรับทิศก่อนผลิตจริงจนพอใจ + วัดผล",
    featured: true,
  },
  {
    name: "Production", tag: "แค่ทีมถ่าย (มี brief เอง)", unit: "ต่อวัน",
    model: "ราคาวัน = ถ่าย + raw + same-day proxy · edit เป็น add-on · จองหลายวันมีส่วนลด",
    note: "senior crew เท่านั้น",
  },
];

const ADDON_GROUPS = ["Ads & Performance", "Content & Production", "Web & Funnel", "Brand & Identity"];
const addons = [
  { g: "Ads & Performance", k: "Ads Static / Video", v: "฿600 / ฿2,500", info: "ครีเอทีฟแอดเพิ่มต่อชิ้น — ภาพนิ่ง / วิดีโอ สำหรับยิงโฆษณา" },
  { g: "Ads & Performance", k: "UGC / Review content", v: "฿2,500", info: "คอนเทนต์รีวิว/ใช้จริงจากผู้ใช้ ดูธรรมชาติ น่าเชื่อถือ" },
  { g: "Ads & Performance", k: "KOL / Influencer Management", v: "เริ่ม ฿8,000 / แคมเปญ", info: "จัดหา ดีล และดูแล KOL / micro-influencer ให้ตรงกลุ่ม พร้อมสรุปผล" },
  { g: "Ads & Performance", k: "Google Ads Management", v: "฿7,900 / ด.", info: "ดูแลและยิงโฆษณา Google Search & Display" },
  { g: "Ads & Performance", k: "LINE Ads Management", v: "฿6,900 / ด.", info: "ดูแลและยิงโฆษณาบน LINE" },
  { g: "Ads & Performance", k: "Seeding / IO (10 โพสต์)", v: "฿4,500 / ชุด", info: "กระจายโพสต์ในกลุ่ม/เพจ สร้างกระแสและความน่าเชื่อ" },
  { g: "Content & Production", k: "Motion Graphic / Explainer", v: "฿6,500 / ชิ้น", info: "โมชั่นกราฟิกอธิบายสินค้า/บริการ — ลื่น เข้าใจง่าย" },
  { g: "Content & Production", k: "Photo Retouching", v: "฿800 / ภาพ", info: "รีทัชภาพระดับโฆษณา — สี ผิว แสง เก็บดีเทลครบ" },
  { g: "Content & Production", k: "Hero Brand Film", v: "฿25,000", info: "หนังแบรนด์ชิ้นเอก สำหรับเปิดตัว / วางภาพลักษณ์" },
  { g: "Web & Funnel", k: "Landing page", v: "฿4,000 / หน้า", info: "หน้าเว็บรับแคมเปญ — ปิดการขาย / เก็บลีด" },
  { g: "Web & Funnel", k: "Corporate Website", v: "เริ่ม ฿39,000", info: "เว็บไซต์องค์กรหลายหน้า — ออกแบบ + พัฒนา responsive" },
  { g: "Web & Funnel", k: "SEO Article", v: "฿3,500 / บทความ", info: "บทความ SEO ให้ลูกค้าเจอคุณบน Google" },
  { g: "Web & Funnel", k: "Email / CRM Automation", v: "เริ่ม ฿9,000", info: "วางระบบอีเมล/CRM อัตโนมัติ — ดูแลลูกค้าและกระตุ้นยอดซ้ำ" },
  { g: "Brand & Identity", k: "Logo Design", v: "เริ่ม ฿12,000", info: "ออกแบบโลโก้ + แนวทางใช้งานเบื้องต้น" },
  { g: "Brand & Identity", k: "CI / Brand Guideline", v: "เริ่ม ฿35,000", info: "คู่มืออัตลักษณ์แบรนด์ — โลโก้ สี ฟอนต์ การใช้งาน" },
];

const production = [
  { k: "Essential Day", v: "฿15,000 / วัน", info: "ทีมถ่ายชุดเล็ก — เหมาะคอนเทนต์เร็ว run-and-gun" },
  { k: "Standard Day", v: "฿35,000 / วัน", info: "ทีมถ่ายมาตรฐาน — ยอดนิยม คุ้มสุด" },
  { k: "Signature Day", v: "฿95,000 / วัน", info: "โปรดักชันเต็มรูปแบบ สำหรับงานชิ้นเอก" },
];

const faqs = [
  { q: "เลือกสายไหนดี?",
    a: "ตอบคำถามเดียว — อยากได้ ยอด (Digital) · แบรนด์ (Boutique) · หรือมี brief แล้วแค่อยากได้ทีมถ่าย (Production). ไม่แน่ใจ คุยฟรี 45 นาที เราช่วยวินิจฉัย." },
  { q: "ราคาเท่าไหร่?",
    a: "ตีตามโจทย์และขอบเขตของแต่ละลูกค้า — ไม่มีราคาตายตัวหน้าเว็บ. ดูช่วงราคาอ้างอิงใน Rate Card (PDF) หรือขอใบเสนอราคาที่ตรงงานคุณได้เลย." },
  { q: "มิกซ์หลายสายได้ไหม คิดราคายังไง?",
    a: "ได้ — แต่ละสายจ่ายคนละชั้นไม่ทับซ้อน (เช่น มี Production แล้วเติม Digital จ่ายเฉพาะส่วนยิง) คุมโดยทีมเดียว." },
  { q: "ค่ายิงแอด (ad spend) จ่ายยังไง บัญชีโฆษณาใครถือ?",
    a: "ลูกค้าถือบัญชีโฆษณาเอง เติมเงินเอง เห็นยอดจริงทุกบาท — ORIONS ดูแลและปรับแอดให้ โดยไม่บวก % ค่าแอด (เอเจนซีทั่วไปคิด 10–20% ของงบ)." },
  { q: "มีค่า setup / แรกเข้าไหม?",
    a: "ไม่มีค่าแรกเข้าแยก — onboarding และการวางระบบเริ่มต้นรวมอยู่ในค่าบริการแล้ว." },
  { q: "add-on คิดเพิ่มยังไง?",
    a: "à la carte ต่อชิ้น ไม่บวก markup · ซื้อ 3+ ลด 10% · จองโปรดักชันหลายวันมีส่วนลด. ราคายังไม่รวม VAT 7%." },
];

/** Info tooltip — (i) icon that explains a line item on hover / focus. */
const InfoTip = ({ text }: { text: string }) => (
  <span className="relative inline-flex group/tip align-middle ml-1.5" tabIndex={0} title={text} aria-label={text}>
    <Info className="w-3.5 h-3.5 text-muted-foreground/55 hover:text-cinnabar cursor-help shrink-0" />
    <span role="tooltip" className="pointer-events-none absolute left-0 top-full mt-2 w-max max-w-[220px] rounded-none border border-foreground/15 bg-surface-2 px-3 py-2 font-thai text-[11.5px] leading-snug tracking-normal normal-case text-foreground/90 opacity-0 translate-y-1 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 group-focus-within/tip:opacity-100 transition-all duration-200 z-40">
      {text}
    </span>
  </span>
);

/** 3 sales lines — pricing model, no fixed numbers. */
const LinesModel = () => (
  <section id="pricing" className="px-6 md:px-10 scroll-mt-24">
    <div className="max-w-[1280px] mx-auto py-20 md:py-28">
      <SectionLabel index="02" label="The model" />
      <Reveal delay={0.05}>
        <h2 lang="th" className="mt-10 h-display-md max-w-[22ch] thai-wrap">
          3 สาย คิดราคา <em className="text-cinnabar">คนละแบบ.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p lang="th" className="mt-6 max-w-[640px] font-thai thai-wrap text-[15px] leading-[1.7] text-muted-foreground">
          เลือกสายเดียวหรือผสม — แต่ละสายจ่ายคนละชั้นไม่ทับซ้อน. ตัวเลขจริงตีตามโจทย์แต่ละลูกค้า.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {lineModels.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.07}>
            <div className={`relative h-full flex flex-col p-7 md:p-8 ${l.featured ? "card-accent" : "card-soft"}`}>
              {l.featured && <span className="ribbon-pill absolute -top-3 left-7">ครบสุด</span>}
              <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{l.tag}</span>
              <h3 className="mt-2 font-unbounded text-[24px] md:text-[28px] leading-none tracking-[-0.01em]">{l.name}</h3>
              <div className="mt-5 inline-flex items-baseline gap-2">
                <span lang="th" className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">คิดราคา</span>
                <span lang="th" className="num-display text-cinnabar text-[24px] md:text-[28px]">{l.unit}</span>
              </div>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[13px] leading-[1.7] text-foreground/85 border-t border-foreground/15 pt-5 flex-1">{l.model}</p>
              <p lang="th" className="mt-4 font-thai text-[11.5px] leading-[1.6] text-muted-foreground">— {l.note}</p>
              <Link to={`/contact?pkg=${encodeURIComponent(l.name)}`} className={`mt-7 justify-between ${l.featured ? "btn-accent" : "btn-ghost"}`}>
                <span>ขอใบเสนอราคา · {l.name}</span><ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <p lang="th" className="mt-8 font-thai text-[12px] leading-[1.7] text-muted-foreground max-w-[680px]">
        มิกซ์สายจ่ายคนละชั้นไม่ทับซ้อน · add-on à la carte ไม่บวก markup · ราคายังไม่รวม VAT 7% · <span className="text-foreground/80">ดูช่วงราคาอ้างอิงใน Rate Card (PDF) ด้านล่าง</span>
      </p>
    </div>
  </section>
);

const Package = () => (
  <div>
    <SEO
      title="แพ็กเกจ & ราคา — Digital · Boutique · Production · ØRIONS"
      description="3 สาย คิดราคาคนละแบบ — Digital รายเดือน · Boutique ต่อแคมเปญ · Production ต่อวัน. จ่ายเฉพาะที่ใช้ ราคาจริงตีตามโจทย์แต่ละลูกค้า."
      path="/package"
    />

    {/* 01 — HERO */}
    <section className="section-ink px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="01" label="Pricing" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch] thai-wrap">
            จ่ายเฉพาะ <em className="text-cinnabar">ที่ใช้จริง.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">
            3 สาย คิดราคาคนละแบบ — <strong className="text-foreground">Digital</strong> รายเดือน · <strong className="text-foreground">Boutique</strong> ต่อแคมเปญ · <strong className="text-foreground">Production</strong> ต่อวัน. มิกซ์สายจ่ายคนละชั้นไม่ทับซ้อน <strong className="text-foreground">ราคาจริงตีตามโจทย์แต่ละลูกค้า</strong>.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="btn-accent">
              <span>ดูโมเดลราคา</span><ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={RATECARD_PDF} download className="btn-ghost">
              <Download className="w-4 h-4" /><span>ดาวน์โหลด Rate Card (PDF)</span>
            </a>
            <a href="tel:+66655169925" className="btn-ghost">
              <Phone className="w-4 h-4" /><span>คุยกับฝ่ายขาย 065-516-9925</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — PRICING MODEL (3 lines) */}
    <LinesModel />

    {/* 03 — ADD-ONS + PRODUCTION */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <SectionLabel index="03" label="Add-on menu" />
          <Reveal delay={0.05}><h2 lang="th" className="mt-8 h-display-sm">เสริมได้ตามต้องการ.</h2></Reveal>
          <dl className="card-soft mt-8 px-6 md:px-7 py-4">
            {ADDON_GROUPS.map((group, gi) => (
              <div key={group} className={gi > 0 ? "mt-5 pt-5 border-t border-foreground/15" : ""}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-2">— {group}</div>
                {addons.filter((a) => a.g === group).map((a) => (
                  <div key={a.k} className="flex items-baseline justify-between gap-6 py-2.5">
                    <dt lang="th" className="font-thai text-[14px] text-foreground/85 inline-flex items-center">{a.k}<InfoTip text={a.info} /></dt>
                    <dd className="font-mono text-[12px] tracking-[0.02em] text-foreground/75 shrink-0">{a.v}</dd>
                  </div>
                ))}
              </div>
            ))}
          </dl>
        </div>
        <div>
          <SectionLabel index="04" label="ORIONS Production" />
          <Reveal delay={0.05}><h2 lang="th" className="mt-8 h-display-sm">มี brief แล้ว ขาดทีมออกกอง.</h2></Reveal>
          <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground max-w-[44ch]">
            senior crew + Sony A7V / FX6 + GM glass · raw + same-day proxy — ภาพ/วิดีโอระดับโฆษณา ส่งไฟล์ได้ในวัน.
          </p>
          <dl className="card-soft mt-8 px-6 md:px-7 py-2">
            {production.map((a, i) => (
              <div key={a.k} className={`flex items-baseline justify-between gap-6 py-3 ${i !== production.length - 1 ? "border-b border-foreground/12" : ""}`}>
                <dt lang="th" className="font-thai text-[14px] text-foreground/85 inline-flex items-center">{a.k}<InfoTip text={a.info} /></dt>
                <dd className="font-mono text-[12px] tracking-[0.02em] text-foreground/75 shrink-0">{a.v}</dd>
              </div>
            ))}
          </dl>
          <p lang="th" className="mt-5 font-thai text-[11px] tracking-[0.02em] text-muted-foreground leading-[1.6]">
            ซื้อ 3+ add-ons ลด 10% · จองโปรดักชันตั้งแต่ 2 วันลด 10% · 3 วันลด 15%
          </p>
        </div>
      </div>
    </section>

    {/* 04 — FAQ */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Before you ask" />
        <Reveal delay={0.05}><h2 className="mt-10 h-display-md">The short <em className="text-cinnabar">answers.</em></h2></Reveal>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 05 — TALK TO SALES (ปลื้ม) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="06" label="Talk to sales" />
        <Reveal delay={0.05}>
          <div className="mt-10 card-soft p-6 md:p-9 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <img
              src={pleum}
              alt="ปลื้ม — Sales Executive, ØRIONS"
              className="w-28 h-28 md:w-40 md:h-40 rounded-none object-cover object-top shrink-0"
            />
            <div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Sales Executive</div>
              <h3 className="mt-2 h-display-sm">ปลื้ม</h3>
              <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground max-w-[52ch]">
                อยากได้ใบเสนอราคา หรือไม่แน่ใจว่าสายไหนเหมาะ — ทักได้เลย ยินดีแนะนำตรง ๆ.
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

    {/* 06 — CTA */}
    <CTABand
      eyebrow="Not sure yet?"
      title={<>ไม่แน่ใจว่าควรเริ่มสายไหน? <em className="text-cinnabar">คุยกับเราได้เลย.</em></>}
      subtitle="คุย Discovery Call 45 นาที ฟรี — เล่ายอด งบ และเป้าหมายมา เราช่วยจัดให้พอดี."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "คุยกับฝ่ายขาย", to: "/contact?pkg=Custom" }}
      tone="ink"
    />
  </div>
);

export default Package;
