import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/CTABand";
import Magnetic from "@/components/Magnetic";
import Slash from "@/components/Slash";
import HeroHeadline from "@/components/HeroHeadline";
import CountUp from "@/components/CountUp";
import { caseStudies } from "@/data/caseStudies";

const selectedWork = caseStudies;

const clients = ["พรรคประชาธิปัตย์", "กองทัพอากาศ", "GCOO", "HONG MOVE", "เขาใหญ่ คันทรี่คลับ", "HEAVY ORGANIZER"];

// Track record — from the ØRIONS rebrand deck (the team's real numbers)
const stats = [
  { to: 120, suffix: "+", k: "โปรเจกต์ที่ส่งมอบ" },
  { to: 5,   suffix: "+", k: "ปีของการลงมือทำ" },
  { to: 24,  suffix: "h", k: "ตอบกลับภายใน" },
];

const services = [
  { n: "01", en: "Brand Strategy",          tag: "หาเรื่องที่ใช่",      th: "research · positioning · brand identity & CI · naming · brand narrative" },
  { n: "02", en: "Creative Production",      tag: "ทำให้เห็น",           th: "brand film · ภาพถ่ายโปรดักต์/อาหาร/พอร์เทรต · คอนเทนต์ · key visual & design" },
  { n: "03", en: "Social Media Marketing",  tag: "ทำให้ดังและวัดได้",  th: "content + community · ยิงแอด Meta/TikTok/Google/LINE · A/B testing · performance report" },
];

// Market pressures of this era — real, cited data — mapped to the 3 services.
const painpoints = [
  { to: 1.7, decimals: 1, suffix: "s", title: "ยุคสมาธิสั้น",
    desc: "คอนเทนต์มีเวลาบนมือถือแค่ 1.7 วินาที (Meta) — แบรนด์ที่ไม่คมตั้งแต่วิแรก โดนเลื่อนผ่าน",
    answer: "Brand Strategy" },
  { prefix: "+", to: 40, suffix: "%", title: "เงินเฟ้อดิจิทัล",
    desc: "ค่าโฆษณาโซเชียล (CPM) แพงขึ้นราว 40% ในช่วงปี 2020–2024 — ยิงมั่วไม่คุ้มอีกต่อไป",
    answer: "Social Media Marketing" },
  { to: 4, suffix: "×", title: "คอนเทนต์ AI ท่วมจอ",
    desc: "หน้าเว็บที่ AI ผลิตโตเกือบ 4 เท่า (82→312 ล้านหน้า/เดือน) — งานที่คนคิดถึงโดดเด่นกว่า",
    answer: "Creative Production" },
];

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined. · Creative Agency, Bangkok"
      description="ครีเอทีฟเอเจนซีในกรุงเทพฯ ที่รวม Brand Strategy · Creative Production · Social Media Marketing ไว้ในทีมเดียว — เราถือว่าข้อจำกัดคือบรีฟ."
      path="/"
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[82svh] md:min-h-[90svh] flex flex-col px-6 md:px-10 overflow-hidden">
      <div aria-hidden className="hero-texture absolute inset-0 z-0 pointer-events-none" />
      <div aria-hidden className="fluid-orange opacity-80" />
      <div className="relative z-10 max-w-[1280px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-24 md:pt-32 pb-20 md:pb-28">
        <Reveal>
          <div className="mb-7 flex justify-center"><Slash className="text-[clamp(46px,7vw,84px)]" /></div>
        </Reveal>
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Creative Agency · Bangkok</p>
        </Reveal>
        <div className="mt-7">
          <HeroHeadline />
        </div>
        <Reveal delay={0.4}>
          <p lang="th" className="mt-9 md:mt-11 font-thai thai-wrap text-balance text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-[48ch]">
            ทุกองค์กรมีเรื่องของตัวเองอยู่แล้ว สิ่งที่ขาดคือการ refine ให้คนหยุดดู เชื่อ และจำ.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-11 flex flex-col sm:flex-row items-center gap-4">
            <Magnetic strength={10} className="inline-block">
              <Link to="/diagnostic" className="btn-accent">
                <span>ทำ Brand Audit</span><ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Link to="/contact" className="btn-ghost">
              <span>เริ่มต้นบทสนทนา</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.6}>
          <p className="mt-11 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
            Energetic · Strategic · Profound
          </p>
        </Reveal>
      </div>
    </section>

    {/* — STATS BAND — track record + ghosted wordmark (rebrand) */}
    <section className="relative px-6 md:px-10 border-t border-foreground/15 overflow-hidden">
      <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="wordmark-ghost text-[19vw] md:text-[16vw] whitespace-nowrap">ØRIONS</span>
      </div>
      <div className="relative max-w-[1280px] mx-auto py-16 md:py-24">
        <Reveal>
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-full bg-cinnabar text-background px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase">Let's grow together</span>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.08}>
              <div>
                <CountUp to={s.to} suffix={s.suffix} className="num-display text-foreground text-[clamp(40px,8vw,88px)] leading-none" />
                <div lang="th" className="mt-3 font-thai text-[12px] md:text-[14px] tracking-[0.02em] text-muted-foreground">{s.k}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* — TRUSTED BY — quiet single row (PLACEHOLDER: swap styled names for real client logo SVGs) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-14 md:py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <span lang="th" className="font-mono text-[10px] tracking-[0.04em] text-muted-foreground">
            แบรนด์ที่เลือกทำงานกับเรา
          </span>
          <Link to="/work" className="font-mono text-[10px] tracking-[0.04em] text-muted-foreground hover:text-cinnabar transition-colors">
            ดูผลงาน →
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
          {clients.map((c) => (
            <span key={c} lang="th" className="font-serif text-[17px] md:text-[21px] tracking-[-0.01em] text-foreground/45 hover:text-foreground/75 transition-colors">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* — SELECTED WORK (creative proof, full colour) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
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
                  <img src={w.cover} alt={w.title} loading="lazy" className="w-full h-full object-cover scale-100 grayscale-[0.4] group-hover:scale-[1.06] group-hover:grayscale-0 transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
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


    {/* — WHY NOW — market pressures mapped to the 3 services (real, cited) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="Why now"
          title={<>โลกเปลี่ยน — <em className="text-cinnabar">บรีฟก็เปลี่ยน.</em></>}
          intro="3 แรงกดดันของยุคนี้ ที่ทำให้ 3 บริการของเราจำเป็นกว่าเดิม"
        />
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {painpoints.map((p, i) => (
            <Reveal key={p.answer} delay={i * 0.08}>
              <div className="card-soft p-7 md:p-8 h-full flex flex-col">
                <CountUp
                  to={p.to}
                  prefix={p.prefix}
                  suffix={p.suffix}
                  decimals={p.decimals ?? 0}
                  className="num-display text-cinnabar text-[clamp(46px,6vw,76px)] leading-none"
                  prefixClassName="text-[0.55em] align-top mr-0.5"
                  suffixClassName="text-[0.5em] align-top"
                />
                <h3 lang="th" className="mt-5 font-serif text-[22px] md:text-[26px] tracking-[-0.01em]">{p.title}</h3>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground flex-1">{p.desc}</p>
                <Link to="/services" className="group mt-6 inline-flex items-center gap-2.5">
                  <Slash className="text-[15px]" />
                  <span className="font-serif text-[16px] md:text-[18px] text-foreground group-hover:text-cinnabar transition-colors">{p.answer}</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 font-mono text-[10px] tracking-[0.04em] text-muted-foreground/70">
          ที่มา: Meta (mobile attention) · social CPM 2020–2024 · AI web pages 2024–2026
        </p>
      </div>
    </section>

    {/* — WHAT WE DO */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            lang="th"
            eyebrow="What we do"
            title={<>สามบริการ <em className="text-cinnabar">ในทีมเดียว.</em></>}
            intro="หาเรื่องที่ใช่ · ทำให้เห็น · ทำให้ดังและวัดได้ — ครบในที่เดียว"
          />
          <Link to="/services" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.04em] text-muted-foreground hover:text-cinnabar transition-colors">
            ดูบริการทั้งหมด →
          </Link>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {services.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.08}>
              <Link
                to="/services"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/12 bg-foreground/[0.02] p-7 md:p-9 min-h-[280px] transition-colors duration-500 hover:border-cinnabar/50 hover:bg-foreground/[0.04]"
              >
                <span aria-hidden className="font-brand absolute -top-4 right-2 text-[120px] md:text-[150px] leading-none pointer-events-none select-none" style={{ WebkitTextStroke: "1.5px hsl(var(--accent) / 0.22)", color: "transparent" }}>{d.n}</span>
                <div className="relative flex items-center gap-2.5">
                  <Slash className="text-[22px]" />
                  <h3 className="font-serif text-[24px] md:text-[30px] tracking-[-0.01em] group-hover:text-cinnabar transition-colors duration-300">{d.en}</h3>
                </div>
                <div lang="th" className="relative mt-2 font-serif text-cinnabar/90 text-[17px] md:text-[19px]">{d.tag}</div>
                <p lang="th" className="relative mt-5 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.7] text-muted-foreground flex-1">{d.th}</p>
                <div className="relative mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.04em] text-foreground/55 group-hover:text-cinnabar transition-colors">
                  ดูบริการ <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
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
            <div className="flex items-center gap-3"><Slash className="text-[15px]" /><span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/80">Showreel 2026</span></div>
            <h2 lang="th" className="mt-2 md:mt-3 h-display-sm md:h-display-md max-w-[18ch] thai-wrap">
              งานที่ <em className="text-cinnabar">ขยับได้.</em>
            </h2>
          </div>
        </div>
      </div>
    </section>

    {/* — CTA close (Brand Audit folded in) */}
    <CTABand
      eyebrow="Start a conversation"
      title={<>พร้อมคุยแล้ว? <em className="text-cinnabar">เล่าโจทย์มาได้เลย.</em></>}
      subtitle="คุยฟรี 45 นาที · ไม่มีข้อผูกมัด — หรือลองทำ Brand Audit 1 นาที ให้เราบอกตรง ๆ ว่าทางไหนเหมาะกับคุณ."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      tone="ink"
    />
  </div>
);

export default Index;
