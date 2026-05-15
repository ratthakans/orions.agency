import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import PageMark from "@/components/PageMark";
import ClosingCTA from "@/components/ClosingCTA";
const SITE_URL = "https://orions.agency";

const capabilities = [
  {
    tag: "— 01 / BRANDING",
    title: "Brand.",
    line: "Identity ที่จำได้ — และเลือกซื้อ.",
    desc: "Positioning, naming, identity, messaging, launch kit — วางแบรนด์ที่ขายของได้ตั้งแต่วันแรก ไม่ใช่แค่ดูดี.",
    items: ["Positioning + Audience", "Naming & Identity", "Visual System", "Messaging + Tone", "Launch Kit"],
    selected: "Selected · Hongmove · Atlas · Sera",
  },
  {
    tag: "— 02 / CONTENT",
    title: "Content.",
    line: "คอนเทนต์ที่ทั้งสวย — และดันยอด.",
    desc: "Director, DOP, studio, edit, color, sound — โปรดักชันครบทีมเดียว ออกแบบเพื่อ CTR · watch-time · conversion.",
    items: ["Performance Creative", "Photo + Video Shoots", "Reels + Short-form", "Edit · Color · Sound", "Graphic + Motion"],
    selected: "Selected · RTAF · Heavy",
  },
  {
    tag: "— 03 / PAID MEDIA",
    title: "Ads.",
    line: "ยิงแอดที่ลด CAC จริง — รายงานทุกบาท.",
    desc: "Strategy, funnel, daily content, community, Meta · TikTok · Google ads — โตด้วยตัวเลข ไม่ใช่ความรู้สึก.",
    items: ["Funnel + KPI Strategy", "Meta + TikTok + Google", "Daily Posting + Community", "Creative Optimisation", "Monthly ROAS Report"],
    selected: "Selected · MyHotel · GCOO · Khaoyai",
  },
];

const process4 = [
  { n: "01", t: "Diagnose", d: "Free 30-min growth audit — เข้าใจธุรกิจ ตลาด คู่แข่ง และตัวเลขปัจจุบัน.", w: "Week 1" },
  { n: "02", t: "Plan",     d: "Strategy + funnel + KPI ที่จับต้องได้ ไม่ขายฝัน — มีตัวเลขเป้าหมายจริง.", w: "Week 1–2" },
  { n: "03", t: "Build",    d: "ถ่าย ตัด สี เสียง — สร้างแบรนด์ คอนเทนต์ และ ad creatives ด้วยทีม in-house.", w: "Week 2–4" },
  { n: "04", t: "Scale",    d: "รันแอด ปรับ creative รายงาน ROAS · CAC · retention ทุกเดือน วัดผลจริง.", w: "Ongoing" },
];

const Services = () => (
  <div>
    <SEO
      title="Services — ØRIONS"
      description="Brand, content, and paid media — one in-house team. Engineered for growth. Bangkok creative agency."
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

    {/* 01 · HERO */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-32 md:pt-40 pb-16 md:pb-24">
        <PageMark index="01" total="03" />
        <Reveal>
          <h1 className="font-serif text-[52px] md:text-[88px] lg:text-[112px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
            A boutique creative <em className="text-orion italic">agency.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
            Brand · Content · Paid media — one in-house team. Crafted to hit the brief, the numbers, and the eye.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 btn-label hover:bg-orion transition-colors">
              <span>Get a free growth audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="group inline-flex items-center gap-2 btn-label text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
              See pricing →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 · WHAT WE DO */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="02" total="03" />
        <Reveal>
          <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
            What we <em className="text-orion italic">grow.</em>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 border-t border-foreground grid grid-cols-1 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className={`py-10 md:py-12 md:px-10 ${i > 0 ? "md:border-l border-foreground border-t md:border-t-0" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground">{c.tag}</div>
                <h3 className="mt-8 font-serif italic text-[40px] md:text-[48px] leading-[1] tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-6 font-serif italic text-orion text-[16px] md:text-[18px] leading-[1.4] max-w-[24ch]">"{c.line}"</p>
                <p className="mt-4 font-thai text-[14px] leading-[1.7] text-muted-foreground">{c.desc}</p>
                <ul className="mt-7 pt-6 border-t border-dashed border-foreground/25 space-y-2 font-thai text-[14px] text-foreground/85">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3"><span className="text-muted-foreground">—</span><span>{it}</span></li>
                  ))}
                </ul>
                <p className="mt-7 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">{c.selected}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 · PROCESS */}
    <section className="px-6 md:px-10 border-t border-foreground">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <PageMark index="03" total="03" />
        <Reveal>
          <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.03em] max-w-[16ch]">
            Live in <em className="text-orion italic">4 weeks.</em>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 border-t border-foreground">
          {process4.map((s, i) => (
            <Reveal key={s.n} delay={0.04 * i}>
              <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline border-b border-foreground/15 py-7 md:py-9 group hover:bg-foreground/[0.025] transition-colors">
                <div className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground">{s.n}</div>
                <div className="col-span-10 md:col-span-3 font-serif italic text-[28px] md:text-[40px] tracking-[-0.02em] leading-[1.05]">{s.t}.</div>
                <div className="col-span-12 md:col-span-6 font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/75">{s.d}</div>
                <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[10px] tracking-[0.14em] uppercase text-orion">{s.w}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      eyebrow="NEXT STEPS"
      title={<>Tell us about <em className="text-orion italic">the brand.</em></>}
      description="30-min discovery call. Free. We reply within 24 hours."
      ctas={[
        { label: "Get a free proposal", to: "/contact" },
        { label: "See pricing", to: "/pricing", variant: "ghost" },
      ]}
      email="hello@orions.agency"
      phone="+66 92 390 5464"
    />
  </div>
);

export default Services;
