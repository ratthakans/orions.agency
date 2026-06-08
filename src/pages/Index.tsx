import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import SimpleMarquee from "@/components/SimpleMarquee";
import Magnetic from "@/components/Magnetic";
import HeroHeadline from "@/components/HeroHeadline";
import { caseStudies } from "@/data/caseStudies";

const selectedWork = caseStudies;

const clients = ["พรรคประชาธิปัตย์", "กองทัพอากาศ", "GCOO", "HONG MOVE", "เขาใหญ่ คันทรี่คลับ", "HEAVY ORGANIZER"];

const marquee = [
  "Stories, refined.",
  "Brand Strategy",
  "Creative Production",
  "Social Media Marketing",
  "Constraint is the brief",
  "Bangkok · Est. 2026",
];

// Honest capability facts — not fabricated performance metrics (พูดตรง)
const facts = [
  { v: "3 → 1", k: "ทีมเดียว", d: "Strategy · Production · Social รวมในทีมเดียว ไม่ต้องประสานหลายเจ้า" },
  { v: "6", k: "มิติ Brand Audit", d: "ตรวจแบรนด์ครบ 6 ด้าน รู้คะแนน + จุดอ่อนใน 3 นาที" },
  { v: "45", k: "นาที Discovery", d: "คุยฟรี ไม่มีข้อผูกมัด — เล่าโจทย์ เราช่วยมองทาง" },
  { v: "24ชม.", k: "ตอบกลับ", d: "ทุกข้อความได้รับการตอบกลับภายใน 1 วันทำการ" },
];

const reasons = [
  {
    no: "01",
    title: "ข้อจำกัดคือบรีฟ",
    body: "งบ เวลา เงื่อนไข — เราไม่หนีมัน เราใช้มันเป็นกรอบที่ทำให้งานคมขึ้น แทนที่จะเป็นข้ออ้างให้งานจืด",
    answer: "ทุกโจทย์เริ่มจากการหาเรื่องที่จริง แล้ว refine จนคมพอจะลงในกรอบนั้นได้",
  },
  {
    no: "02",
    title: "สามทีมในที่เดียว",
    body: "กลยุทธ์ ครีเอทีฟ และโซเชียล มักอยู่กันคนละเจ้า เรื่องเลยหล่นระหว่างทาง น้ำเสียงเพี้ยน",
    answer: "Strategy → Production → Social ส่งต่อกันในทีมเดียว เรื่องเดียวกันตั้งแต่ต้นจนจบ",
  },
  {
    no: "03",
    title: "วัดผลได้ ไม่ใช่แค่สวย",
    body: "สวยแล้วเงียบไม่พอ — คอนเทนต์ที่ดีต้องไปถึงคนถูกกลุ่มและพิสูจน์ได้ว่าได้ผล",
    answer: "โซเชียลและแอดมาพร้อม A/B testing + report จริง ไม่ใช่ boost แล้วจบ",
  },
  {
    no: "04",
    title: "พูดตรง",
    body: "เราไม่ขายฝัน ไม่การันตีตัวเลขลอย ๆ และจะบอกตรง ๆ เมื่ออะไรไม่เวิร์ก",
    answer: "และเราจะบอกด้วยซ้ำว่า ORIONS ไม่ใช่คำตอบเมื่อไหร่ — เพื่อให้คุณตัดสินใจถูก",
  },
];

const services = [
  { n: "01", en: "Brand Strategy",          tag: "หาเรื่องที่ใช่",      th: "research · positioning · brand identity & CI · naming · brand narrative" },
  { n: "02", en: "Creative Production",      tag: "ทำให้เห็น",           th: "brand film · ภาพถ่ายโปรดักต์/อาหาร/พอร์เทรต · คอนเทนต์ · key visual & design" },
  { n: "03", en: "Social Media Marketing",  tag: "ทำให้ดังและวัดได้",  th: "content + community · ยิงแอด Meta/TikTok/Google/LINE · A/B testing · performance report" },
];

const packages = [
  { name: "Digital",  goal: "ยอด",    tagline: "Performance, amplified.", price: "฿24,900", bullets: ["ยิงแอด Meta + TikTok ดูแลทุกวัน", "AI แตกครีเอทีฟทดสอบหลายสิบแบบ", "90-Day Promise"] },
  { name: "Hybrid",   goal: "ทั้งคู่", tagline: "Both worlds, at once.",   price: "฿32,900", bullets: ["ได้ทั้งยิงแอด + สร้างแบรนด์", "กลยุทธ์ 2 ชั้น การตลาด + ครีเอทีฟ", "90-Day + Brand Lift Promise"], featured: true },
  { name: "Boutique", goal: "แบรนด์", tagline: "Stories, refined.",       price: "฿24,900", bullets: ["ระบบแบรนด์ + CI / Guidelines", "คอนเทนต์แบรนด์ + ถ่าย creative-directed", "Brand Lift Promise"] },
];

const faqs = [
  { q: "ORIONS ทำอะไรบ้าง?", a: "เรารวม Brand Strategy · Creative Production · Social Media Marketing ไว้ในทีมเดียว — ตั้งแต่หาเรื่องที่ใช่ ทำให้เห็น ไปจนทำให้ดังและวัดได้." },
  { q: "เริ่มทำงานกับเรายังไง?", a: "เริ่มได้ 2 ทาง — ทำ Brand Audit 3 นาทีเพื่อรู้จุดอ่อนก่อน หรือทักมาคุย Discovery Call 45 นาทีฟรี เล่าโจทย์และเงื่อนไขมาได้เลย." },
  { q: "ราคาเริ่มที่เท่าไหร่?", a: "แพ็กเกจรายเดือนเริ่มที่ ฿24,900 (ยังไม่รวม VAT · ไม่รวม ad spend) เลือก track และขนาดทีมได้ตามเป้าหมาย — ดูได้ที่หน้า Package." },
  { q: "การันตีผลไหม?", a: "เราพูดตรง — ไม่การันตีตัวเลขลอย ๆ แต่มี 90-Day Promise และ Brand Lift Promise: ถ้าไม่ถึงเป้าที่ตกลงกัน เราเติมงานให้ฟรี 1 เดือน." },
];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined. · Creative Agency, Bangkok"
      description="ครีเอทีฟเอเจนซีในกรุงเทพฯ ที่รวม Brand Strategy · Creative Production · Social Media Marketing ไว้ในทีมเดียว — เราถือว่าข้อจำกัดคือบรีฟ."
      path="/"
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[92svh] flex flex-col px-6 md:px-10 overflow-hidden">
      <div aria-hidden className="hero-texture absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10 max-w-[1100px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-24 md:pt-28 pb-20 md:pb-24">
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
          <div lang="th" className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-thai text-[11px] tracking-[0.02em] text-muted-foreground">
            <span>✦ Brand · Creative · Social</span>
            <span>✦ ข้อจำกัดคือบรีฟ</span>
            <span>✦ พูดตรง</span>
          </div>
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

    {/* — TRUSTED BY (real clients, early proof) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground shrink-0">
            แบรนด์ที่มีเงื่อนไข เลือกทำงานกับเรา
          </span>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {clients.map((c) => (
              <span key={c} lang="th" className="font-display text-[15px] md:text-[18px] font-semibold text-foreground/70 hover:text-foreground transition-colors">
                {c}
              </span>
            ))}
          </div>
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
                <Link to={`/work/${w.slug}`} className="group relative block overflow-hidden rounded-2xl border border-foreground/12 bg-foreground/[0.04] aspect-[4/5]">
                  <img src={w.cover} alt={w.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-col gap-1.5">
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

    {/* 02 — BY THE NUMBERS (honest facts) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-24">
        <SectionHeading
          center
          lang="th"
          eyebrow="How we work"
          title={<>ทำงานกับเรา <em className="italic text-cinnabar">ชัดตั้งแต่วันแรก.</em></>}
          intro="ทีมเดียวจบ · เริ่มฟรีได้ · ตอบไว — และเราพูดตรงเรื่องสิ่งที่ทำได้จริง"
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((f, i) => (
            <Reveal key={f.k} delay={i * 0.08}>
              <div className="stat-card h-full">
                <div className="num-display text-[44px] md:text-[52px] text-cinnabar">{f.v}</div>
                <div lang="th" className="mt-2 font-thai text-[11px] tracking-[0.02em] text-foreground/80">{f.k}</div>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — WHY BRANDS CHOOSE US */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="Why ORIONS"
          title={<>ทำไมแบรนด์ที่มีเงื่อนไข <em className="italic text-cinnabar">เลือกเรา.</em></>}
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
                <p lang="th" className="mt-5 border-t border-foreground/12 pt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-foreground/85">
                  <span className="font-serif italic text-cinnabar">วิธีของเรา · </span>{r.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — WHAT WE DO */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="What we do"
          title={<>สามบริการ <em className="italic text-cinnabar">ในทีมเดียว.</em></>}
          intro="ตั้งแต่หาเรื่องที่ใช่ ทำให้เห็น ไปจนทำให้ดังและวัดได้ — ครบในที่เดียว"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.08}>
              <Link to="/services" className="card-soft group h-full p-8 md:p-9 flex flex-col">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {d.n}</div>
                <h3 className="mt-7 text-[23px] md:text-[26px] leading-[1.08] tracking-[-0.02em] font-semibold">{d.en}</h3>
                <div lang="th" className="mt-2 font-serif italic text-cinnabar text-[16px]">{d.tag}</div>
                <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground flex-1">{d.th}</p>
                <span className="mt-7 inline-flex items-center gap-2 font-serif text-[14px] text-foreground group-hover:text-cinnabar transition-colors">
                  ดูรายละเอียด <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
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
          title={<>ตอนนี้คุณต้องการ <em className="italic text-cinnabar">อะไร?</em></>}
          intro="เลือก track ตามเป้าหมาย — ยอด · แบรนด์ · หรือทั้งคู่ · รายเดือน เริ่มที่ ฿24,900"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={`relative h-full flex flex-col p-8 ${p.featured ? "card-accent" : "card-soft"}`}>
                {p.featured && (
                  <span className="ribbon-pill absolute -top-3 left-1/2 -translate-x-1/2">คุ้มสุด</span>
                )}
                <div className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{p.goal}</div>
                <h3 className="mt-3 text-[27px] leading-none font-semibold tracking-[-0.02em]">{p.name}</h3>
                <div className="mt-1 font-serif italic text-cinnabar text-[15px]">{p.tagline}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">เริ่ม</span>
                  <span className="num-display text-[36px] text-foreground">{p.price}</span>
                  <span className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">/ ด.</span>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-foreground/12 pt-6 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} lang="th" className="grid grid-cols-[16px_1fr] gap-2.5 font-thai thai-wrap text-[13px] leading-[1.5] text-foreground/85">
                      <Check className="w-3.5 h-3.5 text-cinnabar mt-0.5" /><span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/package" className={`mt-7 ${p.featured ? "btn-accent" : "btn-ghost"} justify-between`}>
                  <span>ดูแพ็กเกจ {p.name}</span><ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Link to="/package" className="font-thai text-[11px] tracking-[0.02em] text-foreground hover:text-cinnabar transition-colors inline-flex items-center gap-2">
              ดูตารางเทียบทุกฟีเจอร์ <ArrowRight className="w-4 h-4" />
            </Link>
            <p lang="th" className="font-thai text-[11px] tracking-[0.02em] text-muted-foreground">ราคายังไม่รวม VAT 7% · ไม่รวม ad spend</p>
          </div>
        </Reveal>
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
                  ไม่แน่ใจว่าควรเริ่มตรงไหน? <em className="italic text-cinnabar">ตอบ 18 ข้อ 3 นาที.</em>
                </h2>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[15px] leading-[1.7] text-muted-foreground max-w-[54ch]">
                  ตรวจแบรนด์ใน 6 มิติ — ได้คะแนนทันที + จุดอ่อน 3 อันดับแรก แล้วเราบอกตรง ๆ ว่าทางไหนเหมาะกับคุณ · ไม่มีข้อผูกมัด.
                </p>
              </div>
              <div className="md:justify-self-end">
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

    {/* 08 — FAQ */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <SectionHeading
          center
          lang="th"
          eyebrow="FAQ"
          title={<>คำถามที่ <em className="italic text-cinnabar">เจอบ่อย.</em></>}
        />
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 09 — CTA close */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>พร้อมคุยแล้ว? <em className="italic text-cinnabar">เล่าโจทย์มาได้เลย.</em></>}
      subtitle="คุยฟรี 45 นาที · ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูแพ็กเกจ", to: "/package" }}
      tone="ink"
    />
  </div>
);

export default Index;
