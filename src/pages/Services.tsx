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
    title: "Branding.",
    line: "Identity ที่ลูกค้าจำได้ใน 3 วินาที.",
    desc: "Naming, logo, system, guideline, launch kit — สร้างแบรนด์ที่ขายได้ตั้งแต่ครั้งแรกที่เห็น.",
    items: ["Naming & Strategy", "Logo & Identity", "Visual System", "Brand Guideline", "Launch Kit"],
    selected: "Selected · Hongmove · Atlas · Sera",
  },
  {
    tag: "— 02 / CONTENT",
    title: "Content.",
    line: "คอนเทนต์ที่ดูจบแล้วอยากแชร์.",
    desc: "Director, DOP, studio, edit, color, sound — งานโปรดักชันครบจบในทีมเดียว.",
    items: ["Photo + Video Shoots", "Reels + Short-form", "Edit · Color · Sound", "Graphic + Motion", "Asset Libraries"],
    selected: "Selected · RTAF · Heavy",
  },
  {
    tag: "— 03 / SOCIAL",
    title: "Social.",
    line: "โพสต์ที่ขายของได้จริง — วัดผลทุกบาท.",
    desc: "Strategy, calendar, daily content, community, Meta + TikTok ads — โตด้วยตัวเลข ไม่ใช่ความรู้สึก.",
    items: ["Strategy + Calendar", "Daily Posting", "Community Mgmt", "Meta + TikTok Ads", "Monthly Report"],
    selected: "Selected · MyHotel · GCOO · Khaoyai",
  },
];

const process4 = [
  { n: "01", t: "Listen", d: "คุย 30 นาที เช็กว่าเหมาะกันมั้ย ฟรี — เข้าใจธุรกิจ ตลาด คู่แข่ง.", w: "Week 1" },
  { n: "02", t: "Plan",   d: "เสนอแผนสั้นๆ ตัวเลขจริง ไม่ขายฝัน — strategy, calendar, KPI.",   w: "Week 1–2" },
  { n: "03", t: "Build",  d: "ถ่าย ตัด สี เสียง — สร้างแบรนด์ คอนเทนต์ และแอด ด้วยทีม in-house.", w: "Week 2–4" },
  { n: "04", t: "Run",    d: "รันงาน รายงานทุกเดือน วัดผลจริง — ปรับคอนเทนต์ ปรับแอดต่อเนื่อง.", w: "Ongoing" },
];

const Services = () => (
  <div>
    <SEO
      title="Services — ØRIONS"
      description="Branding, content, and social — one in-house team. Live in 4 weeks. Bangkok creative agency."
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
          <h1 className="font-serif text-[44px] md:text-[80px] lg:text-[104px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
            Three things. <em className="text-orion italic">Done right.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-serif italic text-[18px] md:text-[22px] text-muted-foreground max-w-[640px] leading-[1.5]">
            Branding · Content · Social — one in-house team, one team to talk to. Live in 4 weeks.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 btn-label hover:bg-orion transition-colors">
              <span>Get a free proposal</span>
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
          <h2 className="font-serif text-[40px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[14ch]">
            What we <em className="text-orion italic">do.</em>
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
          <h2 className="font-serif text-[40px] md:text-[72px] lg:text-[96px] leading-[1.0] tracking-[-0.03em] max-w-[16ch]">
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
