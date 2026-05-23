import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import workHongmove from "@/assets/hongmove.png";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workGcoo from "@/assets/gcoo.jpg";

const selectedWork = [
  { n: "01", title: "Hongmove",             niche: "PropTech",    impact: "+312%", img: workHongmove },
  { n: "02", title: "Royal Thai Air Force", niche: "Government",  impact: "2.1M",  img: workRtaf },
  { n: "03", title: "Democrat Party",       niche: "Politics",    impact: "12M+",  img: workDemocrat },
  { n: "04", title: "GCOO",                 niche: "Mobility",    impact: "+540%", img: workGcoo },
];

const processSteps = [
  { n: "6", label: "Reels",  th: "Short-form ที่ขับเคลื่อนการค้นพบ — เร็ว แม่น และ on-brand ทุกชิ้น" },
  { n: "3", label: "Static", th: "Editorial pieces ที่ให้บริบท ลึก และอยู่ใน feed ได้นานกว่าหนึ่งวัน" },
  { n: "1", label: "Hero",   th: "Signature story รายเดือน — ชิ้นที่กำหนดทิศทางและจดจำได้ทั้งซีซั่น" },
];

const testimonials = [
  {
    quote: "พวกเขาไม่ผลิตให้ครบจำนวน — เขาคิดก่อนผลิตทุกครั้ง และนั่นเปลี่ยน rhythm ของแบรนด์เรา",
    name: "Brand Lead",
    org: "PropTech Studio · Bangkok",
  },
  {
    quote: "Hero content รายเดือนของเรา กลายเป็นสิ่งที่ทีม sales หยิบไปคุยกับลูกค้าทุกครั้ง",
    name: "Marketing Director",
    org: "Hospitality Group",
  },
];

const trustedBy = ["Hongmove", "Khaoyai CC", "RTAF", "Democrat", "Heavy", "GCOO"];

const servicesPreview = [
  { sym: "◐", tier: "Starter", name: "Data-Informed Loop", price: "Start from ฿35,000", tag: "First refined steps." },
  { sym: "◑", tier: "Pro",     name: "Data-Tested Loops",  price: "Start from ฿69,000", tag: "Cut through the noise.",  featured: true },
  { sym: "◒", tier: "Elite",   name: "Data-Strategy Lab",  price: "Start from ฿139,000", tag: "Become a name remembered." },
];

const indexLinks = [
  { n: "01", to: "/about",       title: "About",          th: "สิ่งที่เราเชื่อ และวิธีที่เราทำงาน — Manifesto + Approach ในที่เดียว" },
  { n: "02", to: "/services",    title: "Services",       th: "3 ระดับ · 1 เป้าหมาย — แพ็กเกจที่ออกแบบรอบ Content Loop" },
  { n: "03", to: "/work",        title: "Work",           th: "Selected case studies — ผลงานที่เรา refined แล้วภูมิใจ" },
  { n: "04", to: "/diagnostic",  title: "The Diagnostic", th: "12 คำถาม · 2 นาที — รู้ว่าแบรนด์คุณ refined แค่ไหน" },
];

const marquee = ["Branding", "Social Media", "Creative Production", "Data-Refined", "Brand Journey"];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined."
      description="Boutique creative studio in Bangkok. We refine stories through data, craft, and strategy."
      path="/"
    />

    {/* HERO */}
    <section className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-10 pt-32 pb-20 max-w-[1400px] mx-auto w-full">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            Boutique Creative Studio · Est. 2026
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl leading-[0.92] whitespace-nowrap">
            Stories, <em className="italic text-cinnabar">refined.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-12 max-w-[640px] mx-auto font-thai text-[17px] md:text-[20px] leading-[1.55] text-muted-foreground">
            เราไม่ผลิตให้ครบจำนวน เราไม่ตามเทรนด์ที่อัลกอริทึมเขียนบท —
            เราตัดส่วนเกิน สกัดเนื้อแท้ และกลั่นกรองเรื่องราว เพื่อให้แบรนด์คุณ ถึงคนที่ใช่
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-foreground/15 pt-8 max-w-[860px] mx-auto">
            {[
              { en: "6 : 3 : 1",            sub: "Refined Content System" },
              { en: "Data-Refined",         sub: "Creative Process" },
              { en: "Industry Exclusivity", sub: "For Elite clients" },
            ].map((m) => (
              <div key={m.en}>
                <div className="font-serif text-[22px] md:text-[26px] tracking-[-0.015em]">{m.en}</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{m.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="border-y border-foreground/20 py-6 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-16 animate-[marquee_38s_linear_infinite] will-change-transform">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-serif text-[22px] md:text-[34px] tracking-[-0.01em] inline-flex items-center gap-16">
              {m} <span className="text-cinnabar">◐</span>
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* INDEX of pages */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            01 — Index
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Four ways in. <em className="italic text-cinnabar">One studio.</em>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-foreground/20">
          {indexLinks.map((l, i) => (
            <Reveal key={l.to} delay={i * 0.06}>
              <Link
                to={l.to}
                className="group block border-b border-foreground/20 py-8 md:py-10 grid grid-cols-12 gap-4 items-baseline transition-colors hover:bg-foreground/[0.02]"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.2em] text-cinnabar font-semibold">{l.n}</span>
                <span className="col-span-10 md:col-span-4 font-serif text-[32px] md:text-[48px] tracking-[-0.02em] leading-[1] group-hover:italic group-hover:text-cinnabar transition-all">
                  {l.title}
                </span>
                <span className="col-span-12 md:col-span-6 font-thai text-[14px] md:text-[15px] leading-[1.65] text-muted-foreground">
                  {l.th}
                </span>
                <span className="col-span-12 md:col-span-1 md:justify-self-end opacity-50 group-hover:opacity-100 group-hover:text-cinnabar transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-cinnabar text-background px-7 py-4 btn-label hover:bg-foreground transition-colors duration-300"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@orions.agency"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              hello@orions.agency →
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* SELECTED WORK */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            02 — Selected Work
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Refined for brands <em className="italic text-cinnabar">we believe in.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-12 gap-6 md:gap-8">
          {/* Large hero */}
          <Link to="/work" className="group col-span-12 md:col-span-8 block">
            <div className="aspect-[16/10] overflow-hidden border border-foreground/15">
              <img src={selectedWork[0].img} alt={selectedWork[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{selectedWork[0].n} — {selectedWork[0].niche}</div>
                <div className="mt-2 font-serif text-[28px] md:text-[34px] tracking-[-0.02em] group-hover:italic group-hover:text-cinnabar transition-all">{selectedWork[0].title}</div>
              </div>
              <div className="font-serif italic text-cinnabar text-[20px] md:text-[22px] shrink-0">{selectedWork[0].impact}</div>
            </div>
          </Link>

          {/* Stack of 3 */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6 md:gap-8">
            {selectedWork.slice(1).map((w) => (
              <Link key={w.n} to="/work" className="group block">
                <div className="aspect-[16/10] overflow-hidden border border-foreground/15">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{w.n} — {w.niche}</div>
                    <div className="mt-1 font-serif text-[18px] md:text-[20px] tracking-[-0.01em] group-hover:italic group-hover:text-cinnabar transition-all">{w.title}</div>
                  </div>
                  <div className="font-serif italic text-cinnabar text-[14px] shrink-0">{w.impact}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              See all work →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* PROCESS — 6:3:1 */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            03 — Process
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            The <em className="italic text-cinnabar">6 : 3 : 1</em> system.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[640px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            หนึ่งวงจรเนื้อหารายเดือน — ออกแบบให้แบรนด์ค้นพบ ค้างคา และจดจำ. ไม่ผลิตให้ครบจำนวน ผลิตให้ครบหน้าที่
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {processSteps.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-12 h-full flex flex-col">
                <div className="font-serif text-[120px] md:text-[160px] leading-[0.85] tracking-[-0.04em] text-cinnabar">{s.n}</div>
                <div className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase">{s.label}</div>
                <p className="mt-4 font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">
                  {s.th}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* TRUSTED / TESTIMONIALS */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            04 — Trusted
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="border-t border-foreground/20 pt-8">
                <span className="font-serif italic text-cinnabar text-[48px] leading-none">"</span>
                <blockquote className="mt-2 font-serif text-[24px] md:text-[30px] leading-[1.25] tracking-[-0.015em]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  <span className="text-foreground">{t.name}</span> — {t.org}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 border-t border-foreground/20 pt-10">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Selected partners
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-y-6 gap-x-8">
              {trustedBy.map((name) => (
                <div key={name} className="font-display text-[13px] tracking-[0.22em] uppercase text-foreground/70">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* SERVICES PREVIEW */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="block w-6 h-px bg-cinnabar" />
            05 — Packages
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[20ch]">
            Three tiers. <em className="italic text-cinnabar">One refined system.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {servicesPreview.map((p, i) => (
            <Reveal key={p.tier} delay={i * 0.08}>
              <div className={`p-8 md:p-10 h-full flex flex-col ${i > 0 ? "md:border-l border-foreground/20 border-t md:border-t-0" : ""} ${p.featured ? "bg-foreground text-background" : "bg-background"}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-cinnabar text-[28px] leading-none">{p.sym}</div>
                  <div className={`font-mono text-[10px] tracking-[0.22em] uppercase ${p.featured ? "text-cinnabar" : "text-cinnabar"}`}>{p.tier}</div>
                </div>
                <h3 className="mt-8 font-serif text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className={`mt-4 font-serif italic text-[15px] ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.tag}
                </p>
                <div className={`mt-auto pt-8 font-mono text-[10px] tracking-[0.22em] uppercase ${p.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {p.price}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 btn-label hover:bg-cinnabar transition-colors duration-300"
            >
              <span>See all packages</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/diagnostic"
              className="group inline-flex items-center gap-2 btn-label border-b border-foreground pb-1 hover:text-cinnabar hover:border-cinnabar transition-colors"
            >
              Not sure? Take The Diagnostic →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;