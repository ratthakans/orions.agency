import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import CTABand from "@/components/CTABand";
import SimpleMarquee from "@/components/SimpleMarquee";
import Magnetic from "@/components/Magnetic";
import HeroHeadline from "@/components/HeroHeadline";
import { caseStudies } from "@/data/caseStudies";

const selectedWork = caseStudies;

const clients = ["พรรคประชาธิปัตย์", "กองทัพอากาศ", "GCOO", "HONG MOVE", "เขาใหญ่ คันทรี่คลับ", "HEAVY ORGANIZER"];

// PLACEHOLDER — layout mockup only. Replace with real client quotes + names before launch (brand value = พูดตรง).
const testimonials = [
  { quote: "ข้อความรับรองจากลูกค้าจะอยู่ตรงนี้ — เล่าถึงการทำงานกับ ØRIONS ภายใต้เงื่อนไขจริงของแบรนด์ และผลที่เกิดขึ้น.", who: "ผู้บริหารแบรนด์", org: "[ชื่อแบรนด์ · ลูกค้าจริง]" },
  { quote: "พื้นที่สำหรับคำพูดจริงของลูกค้า — เน้นว่าทีมเข้าใจโจทย์ที่มีกรอบ และ refine จนออกมาคม.", who: "Head of Marketing", org: "[ชื่อแบรนด์ · ลูกค้าจริง]" },
  { quote: "คำรับรองตัวอย่าง — สื่อถึงความตรงไปตรงมาและการส่งงานเป็นทีมเดียวจบ.", who: "Founder", org: "[ชื่อแบรนด์ · ลูกค้าจริง]" },
];

const marquee = [
  "Stories, refined.",
  "Brand Strategy",
  "Creative Production",
  "Social Media Marketing",
  "Constraint is the brief",
  "Bangkok · Est. 2026",
];

// One sharp line per card — the full version lives on /about
const reasons = [
  { no: "01", title: "ข้อจำกัดคือบรีฟ",      body: "งบ เวลา เงื่อนไข — เราใช้มันเป็นกรอบที่ทำให้งานคมขึ้น ไม่ใช่ข้ออ้าง" },
  { no: "02", title: "สามทีมในที่เดียว",     body: "Strategy → Production → Social ส่งต่อกันในทีมเดียว เรื่องไม่หล่นระหว่างทาง" },
  { no: "03", title: "วัดผลได้ ไม่ใช่แค่สวย", body: "ทุกงานมาพร้อม A/B testing + report จริง — ไม่ใช่ boost แล้วจบ" },
  { no: "04", title: "พูดตรง",               body: "ไม่ขายฝัน ไม่การันตีตัวเลขลอย ๆ — และจะบอกตรง ๆ ถ้าเราไม่ใช่คำตอบ" },
];

const services = [
  { n: "01", en: "Brand Strategy",          tag: "หาเรื่องที่ใช่",      th: "research · positioning · brand identity & CI · naming · brand narrative" },
  { n: "02", en: "Creative Production",      tag: "ทำให้เห็น",           th: "brand film · ภาพถ่ายโปรดักต์/อาหาร/พอร์เทรต · คอนเทนต์ · key visual & design" },
  { n: "03", en: "Social Media Marketing",  tag: "ทำให้ดังและวัดได้",  th: "content + community · ยิงแอด Meta/TikTok/Google/LINE · A/B testing · performance report" },
];

// Compact teaser data — full detail lives on /package
const packages = [
  { name: "Performance", goal: "ยอด",    price: "฿24,900" },
  { name: "Hybrid",      goal: "ทั้งคู่", price: "฿32,900", featured: true },
  { name: "Branding",    goal: "แบรนด์", price: "฿24,900" },
];

/** Decorative 6-axis radar — teaser for the Brand Audit (illustrative shape, not a real score). */
const RadarPreview = () => {
  const cx = 100, cy = 100, R = 78;
  const vals = [0.82, 0.55, 0.38, 0.7, 0.6, 0.48];
  const pt = (i: number, r: number): [number, number] => {
    const a = (-90 + i * 60) * (Math.PI / 180);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const ring = (rr: number) => vals.map((_, i) => pt(i, rr).join(",")).join(" ");
  const poly = vals.map((v, i) => pt(i, v * R).join(",")).join(" ");
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="ตัวอย่างเรดาร์ Brand Audit 6 มิติ" className="w-full max-w-[260px] text-foreground">
      {[0.34, 0.67, 1].map((f, k) => (
        <polygon key={k} points={ring(R * f)} fill="none" stroke="currentColor" strokeOpacity={0.14} />
      ))}
      {vals.map((_, i) => { const [x, y] = pt(i, R); return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="currentColor" strokeOpacity={0.1} />; })}
      <polygon points={poly} fill="hsl(var(--accent))" fillOpacity={0.18} stroke="hsl(var(--accent))" strokeWidth={1.6} strokeLinejoin="round" />
      {vals.map((v, i) => { const [x, y] = pt(i, v * R); return <circle key={i} cx={x} cy={y} r={3} fill="hsl(var(--accent))" />; })}
    </svg>
  );
};

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined. · Creative Agency, Bangkok"
      description="ครีเอทีฟเอเจนซีในกรุงเทพฯ ที่รวม Brand Strategy · Creative Production · Social Media Marketing ไว้ในทีมเดียว — เราถือว่าข้อจำกัดคือบรีฟ."
      path="/"
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[84svh] md:min-h-[92svh] flex flex-col px-6 md:px-10 overflow-hidden">
      <div aria-hidden className="hero-texture absolute inset-0 z-0 pointer-events-none" />
      <div
        aria-hidden
        className="hero-glow absolute left-1/2 top-[44%] z-0 w-[420px] h-[420px] md:w-[640px] md:h-[640px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 62%)", filter: "blur(24px)" }}
      />
      <div className="relative z-10 max-w-[1100px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-20 md:pt-28 pb-16 md:pb-24">
        <Reveal><BadgeChip>Creative Agency · Bangkok</BadgeChip></Reveal>
        <div className="mt-8">
          <HeroHeadline />
        </div>
        <Reveal delay={0.4}>
          <p lang="th" className="mt-8 md:mt-10 font-thai thai-wrap text-balance text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-[48ch]">
            ทุกองค์กรมีเรื่องของตัวเองอยู่แล้ว สิ่งที่ขาดคือการ refine ให้คนหยุดดู เชื่อ และจำ.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Magnetic strength={10} className="inline-block">
              <Link to="/diagnostic" className="btn-accent">
                <span>นัด Brand Audit</span><ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Link to="/contact" className="btn-ghost">
              <span>เริ่มต้นบทสนทนา</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.6}>
          <p lang="th" className="mt-10 font-thai text-[11px] tracking-[0.02em] text-muted-foreground text-center">
            Brand · Creative · Social — ข้อจำกัดคือบรีฟ · พูดตรง
          </p>
        </Reveal>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden md:flex flex-col items-center gap-2" aria-hidden>
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <span className="relative block w-px h-10 bg-foreground/15 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-cinnabar animate-[scrollcue_1.8s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>

    {/* — BRAND TICKER */}
    <section className="section-ink border-t border-foreground/15 overflow-hidden">
      <div className="py-4 md:py-5">
        <SimpleMarquee items={marquee} duration={34} />
      </div>
    </section>

    {/* — TRUSTED BY — logo wall (PLACEHOLDER: swap styled names for real client logo SVGs) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-12 md:py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-7">
          <span lang="th" className="font-thai text-[12px] tracking-[0.02em] text-muted-foreground">
            แบรนด์ที่มีเงื่อนไข เลือกทำงานกับเรา
          </span>
          <Link to="/work" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            ดูผลงาน →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-foreground/12">
          {clients.map((c) => (
            <div
              key={c}
              className="group relative flex items-center justify-center text-center px-4 py-8 md:py-10 border-b border-r border-foreground/12 hover:bg-foreground/[0.03] transition-colors"
            >
              <span lang="th" className="font-display text-[15px] md:text-[17px] font-semibold leading-tight text-foreground/55 group-hover:text-foreground transition-colors">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* — SELECTED WORK (creative proof, full colour, moved up) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            lang="th"
            eyebrow="Selected Work"
            title={<>งานที่เลือกมาเพราะ <em className="text-cinnabar">เงื่อนไข.</em></>}
            intro="แต่ละชิ้นมีเงื่อนไขที่ทำให้วิธีคิดของเราเห็นชัด — ไม่ใช่เพราะงบใหญ่ที่สุด"
          />
          <Link to="/work" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            Index of work →
          </Link>
        </div>
        <div className="mt-12 md:mt-16 marquee" style={{ maskImage: "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)" }}>
          <ul className="work-marquee flex shrink-0 gap-4 md:gap-5">
            {[...selectedWork, ...selectedWork].map((w, i) => (
              <li key={`${w.slug}-${i}`} className="shrink-0 w-[280px] sm:w-[340px] md:w-[420px]" aria-hidden={i >= selectedWork.length}>
                <Link to={`/work/${w.slug}`} className="group relative block overflow-hidden rounded-2xl border border-foreground/12 bg-foreground/[0.04] aspect-[4/5] transition-colors duration-500 hover:border-cinnabar/60">
                  <img src={w.cover} alt={w.title} loading="lazy" className="w-full h-full object-cover scale-100 group-hover:scale-[1.06] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  {/* corner index */}
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.22em] text-foreground/70">— {w.n}</span>
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] uppercase text-background bg-cinnabar px-2 py-1 rounded-full opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    ดูเคส <ArrowUpRight className="w-3 h-3" />
                  </span>
                  <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-col gap-1.5 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{w.niche} · {w.year}</span>
                    <span lang="th" className="font-display text-[19px] md:text-[22px] font-semibold tracking-[-0.01em] text-foreground leading-tight">{w.title}</span>
                    <span lang="th" className="font-thai thai-wrap text-[12px] leading-[1.5] text-foreground/70 line-clamp-2">{w.summary}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* 03 — WHY BRANDS CHOOSE US */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="Why ORIONS"
          title={<>ทำไมแบรนด์ที่มีเงื่อนไข <em className="text-cinnabar">เลือกเรา.</em></>}
          intro="สี่ความเชื่อที่ทำให้วิธีทำงานของเราต่างออกไป — และทำไมมันได้ผลกับแบรนด์ที่มีข้อจำกัดจริง"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.no} delay={i * 0.08}>
              <div className="card-soft h-full p-7 md:p-9">
                <div className="flex items-baseline gap-4">
                  <span className="num-display text-[34px] text-cinnabar/70">{r.no}</span>
                  <h3 lang="th" className="font-serif text-[22px] md:text-[26px] tracking-[-0.015em] leading-snug">{r.title}</h3>
                </div>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — WHAT WE DO */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            lang="th"
            eyebrow="What we do"
            title={<>สามบริการ <em className="text-cinnabar">ในทีมเดียว.</em></>}
            intro="หาเรื่องที่ใช่ · ทำให้เห็น · ทำให้ดังและวัดได้ — ครบในที่เดียว"
          />
          <Link to="/services" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            ดูบริการทั้งหมด →
          </Link>
        </div>
        <div className="mt-12 md:mt-14 border-t border-foreground/15">
          {services.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.06}>
              <Link
                to="/services"
                className="group block border-b border-foreground/15 py-8 md:py-11 px-0 md:px-4 -mx-0 md:-mx-4 rounded-none md:rounded-2xl transition-colors duration-300 hover:bg-foreground/[0.025]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-8 md:items-baseline">
                  <div className="md:col-span-5 flex items-baseline gap-5 md:gap-7">
                    <span className="num-display text-cinnabar text-[38px] md:text-[60px] leading-none shrink-0">{d.n}</span>
                    <div>
                      <h3 className="h-display-sm md:text-[38px] leading-[1.04] group-hover:text-cinnabar transition-colors duration-300">{d.en}</h3>
                      <div lang="th" className="mt-1.5 font-serif text-foreground/70 text-[18px] md:text-[22px]">{d.tag}</div>
                    </div>
                  </div>
                  <div className="md:col-span-6 md:pt-2">
                    <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{d.th}</p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <ArrowUpRight className="w-7 h-7 text-foreground/30 group-hover:text-cinnabar group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — PACKAGES PREVIEW */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          center
          lang="th"
          eyebrow="Packages"
          title={<>ตอนนี้คุณต้องการ <em className="text-cinnabar">อะไร?</em></>}
          intro="เลือก track ตามเป้าหมาย — ยอด · แบรนด์ · หรือทั้งคู่ · รายเดือน เริ่มที่ ฿24,900"
        />
        {/* Compact teaser — full cards + compare table live on /package */}
        <Reveal>
          <div className="mt-12 max-w-[760px] mx-auto card-soft hover:translate-y-0 divide-y divide-foreground/10">
            {packages.map((p) => (
              <Link key={p.name} to="/package" className="group flex items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 transition-colors hover:bg-foreground/[0.025]">
                <div className="flex items-center gap-3">
                  <div>
                    <div lang="th" className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{p.goal}</div>
                    <div className="mt-0.5 text-[19px] md:text-[22px] font-semibold tracking-[-0.015em] group-hover:text-cinnabar transition-colors">{p.name}</div>
                  </div>
                  {p.featured && <span lang="th" className="font-thai text-[9px] leading-none text-background bg-cinnabar rounded-full px-2 py-1 mt-3">คุ้มสุด</span>}
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-right">
                    <span lang="th" className="font-thai text-[11px] text-muted-foreground mr-1.5">เริ่ม</span>
                    <span className="num-display text-[22px] md:text-[26px]">{p.price}</span>
                    <span lang="th" className="font-thai text-[11px] text-muted-foreground ml-1">/ ด.</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-cinnabar group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Link to="/package" className="btn-ghost">
              <span>ดูแพ็กเกจ + ตารางเทียบ</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <p lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">ราคายังไม่รวม VAT 7% · ไม่รวม ad spend</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* — SHOWREEL — full-width background video, cover (crops top/bottom), autoplay · muted · loop */}
    <section className="relative border-t border-foreground/15 overflow-hidden bg-black">
      <div className="relative w-full h-[80vh] min-h-[440px] overflow-hidden">
        <iframe
          title="ØRIONS showreel"
          src="https://www.youtube-nocookie.com/embed/nFNVN8uE2dI?autoplay=1&mute=1&loop=1&playlist=nFNVN8uE2dI&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&vq=hd2160&hd=1"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full border-0 pointer-events-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-background/25 pointer-events-none" />
        <div className="absolute left-0 right-0 bottom-0 px-6 md:px-10 pb-6 md:pb-10 pointer-events-none">
          <div className="max-w-[1280px] mx-auto">
            <p className="eyebrow-mono">Showreel 2026</p>
            <h2 lang="th" className="mt-2 md:mt-3 h-display-sm md:h-display-md max-w-[18ch] thai-wrap">
              งานที่ <em className="text-cinnabar">ขยับได้.</em>
            </h2>
          </div>
        </div>
      </div>
    </section>

    {/* 07 — BRAND AUDIT */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-24">
        <Reveal>
          <div className="card-accent p-8 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                <p className="eyebrow-mono">Brand audit · ฟรี</p>
                <h2 lang="th" className="mt-5 h-display-md thai-wrap max-w-[20ch]">
                  ไม่แน่ใจว่าควรเริ่มตรงไหน? <em className="text-cinnabar">ตอบ 6 ข้อ 1 นาที.</em>
                </h2>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[15px] leading-[1.7] text-muted-foreground max-w-[54ch]">
                  ตรวจแบรนด์ใน 6 มิติ — ได้คะแนนทันที + จุดอ่อน 3 อันดับแรก แล้วเราบอกตรง ๆ ว่าทางไหนเหมาะกับคุณ · ไม่มีข้อผูกมัด.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-7">
                <RadarPreview />
                <Magnetic strength={8} className="inline-block">
                  <Link to="/diagnostic" className="btn-accent">
                    <span>ทำ Brand Audit</span><ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* TESTIMONIALS — hidden until real client quotes exist (brand = พูดตรง, no mock quotes in production).
        The `testimonials` data above is kept as the layout reference — re-add the section once real words + names are in. */}

    {/* FAQ removed — answers live on /package, /contact and /diagnostic (no duplicate content on Home) */}

    {/* 08 — CTA close */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>พร้อมคุยแล้ว? <em className="text-cinnabar">เล่าโจทย์มาได้เลย.</em></>}
      subtitle="คุยฟรี 45 นาที · ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูแพ็กเกจ", to: "/package" }}
      tone="ink"
    />
  </div>
);

export default Index;
