import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/CTABand";
import Magnetic from "@/components/Magnetic";
import HeroHeadline from "@/components/HeroHeadline";
import Slash from "@/components/Slash";
import { caseStudies } from "@/data/caseStudies";

const selectedWork = caseStudies;

const clients = ["พรรคประชาธิปัตย์", "กองทัพอากาศ", "GCOO", "HONG MOVE", "เขาใหญ่ คันทรี่คลับ", "HEAVY ORGANIZER"];

const services = [
  { n: "01", en: "Brand Strategy",          tag: "หาเรื่องที่ใช่",      th: "research · positioning · brand identity & CI · naming · brand narrative" },
  { n: "02", en: "Creative Production",      tag: "ทำให้เห็น",           th: "brand film · ภาพถ่ายโปรดักต์/อาหาร/พอร์เทรต · คอนเทนต์ · key visual & design" },
  { n: "03", en: "Social Media Marketing",  tag: "ทำให้ดังและวัดได้",  th: "content + community · ยิงแอด Meta/TikTok/Google/LINE · A/B testing · performance report" },
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
      <div className="relative z-10 max-w-[1100px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-24 md:pt-32 pb-20 md:pb-28">
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
                <span>นัด Brand Audit</span><ArrowUpRight className="w-4 h-4" />
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

    {/* — TRUSTED BY — quiet single row (PLACEHOLDER: swap styled names for real client logo SVGs) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-14 md:py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <span lang="th" className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            แบรนด์ที่เลือกทำงานกับเรา
          </span>
          <Link to="/work" className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
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
