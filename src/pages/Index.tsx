import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import SimpleMarquee from "@/components/SimpleMarquee";
import Magnetic from "@/components/Magnetic";
import HeroHeadline from "@/components/HeroHeadline";
import { caseStudies } from "@/data/caseStudies";

const selectedWork = caseStudies; // all 6, revealed gradually on scroll

const marquee = [
  "Stories, refined.",
  "Brand Strategy",
  "Creative Production",
  "Social Media Marketing",
  "Constraint is the brief",
  "Bangkok · Est. 2026",
];

const services = [
  { n: "01", en: "Brand Strategy",       tag: "หาเรื่องที่ใช่",   th: "research · positioning · brand identity & CI · naming · brand narrative" },
  { n: "02", en: "Creative Production",  tag: "ทำให้เห็น",        th: "brand film · ภาพถ่ายโปรดักต์/อาหาร/พอร์เทรต · คอนเทนต์ · key visual & design" },
  { n: "03", en: "Social Media Marketing", tag: "ทำให้ดังและวัดได้", th: "content + community · ยิงแอด Meta/TikTok/Google/LINE · A/B testing · performance report" },
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
        <Reveal><SectionLabel label="Creative Agency · Bangkok" /></Reveal>
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
              <Link to="/diagnostic" className="btn-primary">
                <span>นัด Brand Audit</span><ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Link to="/contact" className="btn-ghost">
              <span>เริ่มต้นบทสนทนา</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
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

    {/* 02 — WHAT WE BELIEVE */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="01" label="What we believe" />
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[26ch] thai-wrap">
            แบรนด์ที่ดีไม่ได้เกิดจากการพูดให้ดังที่สุด — แต่จากการพูดให้ <em className="italic text-cinnabar">ถูก.</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-start">
          <Reveal delay={0.15}>
            <p lang="th" className="editorial-quote text-[17px] md:text-[21px]">
              ถูกเรื่อง ถูกคน ถูกเวลา และงานที่ดีที่สุดมักเกิดขึ้น <em className="text-cinnabar not-italic font-serif italic">ใต้ข้อจำกัด</em> ไม่ใช่ในที่ที่ทำอะไรก็ได้ · ทุกแบรนด์ที่มาหาเรามีอุปสรรคของตัวเอง — งานของเราเหมือนกันเสมอ: หาเรื่องที่จริง แล้ว refine มันจนคมพอจะลงในกรอบนั้นได้.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="border border-foreground/20 p-8 md:p-10">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— Our stance</div>
              <p lang="th" className="mt-6 font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.6] text-foreground/90">
                เราไม่หนีข้อจำกัด — เราถือว่ามันคือ <em className="font-serif italic text-cinnabar">บรีฟ.</em>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 02 — BRAND AUDIT */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-24">
        <SectionLabel index="02" label="Brand audit" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-end">
          <div>
            <Reveal delay={0.05}>
              <h2 lang="th" className="h-display-md max-w-[22ch] thai-wrap">
                ไม่แน่ใจว่าควรเริ่มตรงไหน? — ตอบ 18 คำถาม <em className="italic text-cinnabar">3 นาที.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p lang="th" className="mt-6 max-w-[54ch] font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground">
                ตรวจแบรนด์ของคุณใน 6 มิติ — ได้คะแนนทันที + จุดอ่อน 3 อันดับแรก แล้วเราจะบอกตรง ๆ ว่าทางไหนเหมาะกับคุณที่สุด · ไม่มีข้อผูกมัด.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="md:text-right">
              <Magnetic strength={8} className="inline-block">
                <Link to="/diagnostic" className="btn-primary">
                  <span>ทำ Brand Audit</span><ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 04 — WHAT WE DO */}
    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="03" label="What we do" />
          <Link to="/services" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            All services →
          </Link>
        </div>
        <Reveal delay={0.1}>
          <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">
            Brand Strategy · Creative Production · Social — <em className="italic text-cinnabar">ในทีมเดียว.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {services.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.07}>
              <div className={`p-10 md:p-12 h-full ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">— {d.n}</div>
                <h3 className="mt-8 text-[24px] md:text-[28px] leading-[1.05] tracking-[-0.02em] font-semibold">{d.en}</h3>
                <div lang="th" className="mt-3 font-serif italic text-cinnabar text-[16px]">{d.tag}</div>
                <p lang="th" className="mt-6 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-foreground/75">{d.th}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — SELECTED WORK */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionLabel index="04" label="Selected Work" />
          <Link to="/work" className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            Index of work →
          </Link>
        </div>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
            เลือกมาเพราะแต่ละชิ้นมีเงื่อนไขที่ทำให้วิธีคิดของเราเห็นชัด — ไม่ใช่เพราะงบใหญ่ที่สุด.
          </p>
        </Reveal>
        {/* Auto-scroll carousel — slides right → left; pause on hover to click */}
        <div className="mt-12 md:mt-16 marquee" style={{ maskImage: "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)" }}>
          <ul className="work-marquee flex shrink-0 gap-4 md:gap-5">
            {[...selectedWork, ...selectedWork].map((w, i) => (
              <li key={`${w.slug}-${i}`} className="shrink-0 w-[260px] sm:w-[320px] md:w-[400px]" aria-hidden={i >= selectedWork.length}>
                <Link to={`/work/${w.slug}`} className="group relative block overflow-hidden border border-foreground/15 bg-foreground/[0.04] aspect-[4/5]">
                  <img src={w.cover} alt={w.title} loading="lazy" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-[filter,opacity,transform] duration-700" />
                  <div className="absolute left-0 right-0 bottom-0 p-5 flex flex-col gap-1 bg-gradient-to-t from-background/85 to-transparent">
                    <span lang="th" className="font-serif text-[19px] md:text-[21px] tracking-[-0.01em] text-foreground">{w.n} — {w.title}</span>
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/70">{w.niche} · {w.year}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* 06 — CTA (contact close — Brand Audit already has its own section above) */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>พร้อมคุยแล้ว? <em className="italic text-cinnabar">เล่าโจทย์มาได้เลย.</em></>}
      subtitle="คุยฟรี 45 นาที · ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูแพ็กเกจ", to: "/package" }}
      tone="snow"
    />
  </div>
);

export default Index;
