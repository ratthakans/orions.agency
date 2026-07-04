import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/CTABand";
import Slash from "@/components/Slash";
import HeroHeadline from "@/components/HeroHeadline";
import { caseStudies } from "@/data/caseStudies";
import Picture from "@/components/Picture";
import heroSilk from "@/assets/hero-silk.jpg?as=picture";
import founder from "@/assets/team/founder.jpg?as=picture";

// What we do — three disciplines, one lens (per the 2026 brand direction).
const included = [
  { k: "Brand Strategy", d: "วางรากฐานและทิศทางให้ชัด เพื่อให้แบรนด์ไม่ต้องลงไปแข่งตัดราคา" },
  { k: "Creative Production", d: "งานภาพและเสียงคุณภาพบูทีค — brand film · video · photography · music production — ที่หยุดสายตาคนได้ใน 1.7 วินาที" },
  { k: "Communication Design", d: "ออกแบบการสื่อสารทุกจุดสัมผัส เปลี่ยนคนแปลกหน้าให้เป็นลูกค้าที่ภักดี" },
];

// Featured cases for the homepage — curated, image-forward (real work, shown early).
// Six, presented as a slow auto-looping marquee.
const featuredCases = caseStudies.slice(0, 6);

// Company flagship showreel — featured as the mid-page proof break.
const SHOWREEL_ID = "308_jYAVkwI";

const ShowreelFeature = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none">
          <Slash className="text-[15px]" />
          <span className="text-muted-foreground">Showreel 2026</span>
        </div>
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-6 h-display-md max-w-[18ch] thai-wrap">
            ฝีมือ พูดแทนเรา <em className="text-cinnabar">ดีกว่า.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className="mt-8 relative w-full overflow-hidden rounded-none border border-foreground/15 bg-black"
            style={{ aspectRatio: "16 / 9" }}
          >
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${SHOWREEL_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="ØRIONS — Showreel 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="เล่น showreel"
                className="group absolute inset-0 w-full h-full cursor-pointer"
              >
                <img
                  src={`https://i.ytimg.com/vi/${SHOWREEL_ID}/maxresdefault.jpg`}
                  onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${SHOWREEL_ID}/hqdefault.jpg`; }}
                  alt="ØRIONS — Showreel 2026"
                  width={1280}
                  height={720}
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded-none bg-background/55 border border-foreground/25 text-foreground/90 group-hover:text-cinnabar group-hover:border-cinnabar transition-colors">
                    <Play className="w-6 h-6 md:w-7 md:h-7 ml-0.5" />
                  </span>
                </span>
                <span className="absolute left-4 bottom-4 md:left-6 md:bottom-6 font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-foreground/85">
                  ØRIONS · Showreel
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Index = () => {
  return (
  <div>
    <SEO
      title="ØRIONS — Boutique Creative Agency, Bangkok"
      description="Boutique creative agency ในกรุงเทพฯ ที่มีสมองของ consult — เราวินิจฉัยก่อนว่าแบรนด์ติดตรงไหน แล้วลงมือแก้ด้วยงานคราฟต์จนจบ. brand strategy · creative production · communication design. เรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด."
      path="/"
      schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "ØRIONS ทำอะไร?", acceptedAnswer: { "@type": "Answer", text: "ØRIONS เป็น boutique creative agency ในกรุงเทพฯ ที่มีสมองของ consult — เราไม่ได้รอบรีฟ แต่วินิจฉัยก่อนว่าแบรนด์ติดตรงไหน แล้วลงมือแก้ด้วยงานคราฟต์จนจบ ผ่าน brand strategy, creative production (brand film · video · photography · music) และ communication design. คิดแบบ Consult → ทำแบบ Craft → ส่งมอบแบบ Boutique." } },
          { "@type": "Question", name: "เริ่มงานกับ ØRIONS ต้องทำอย่างไร?", acceptedAnswer: { "@type": "Answer", text: "เริ่มจากคุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราจะบอกตรงๆ ว่าจะ refine มันยังไง. ติดต่อ hello@orions.agency · 089 354 2628 (คุณพลอย) · LINE @orions" } },
          { "@type": "Question", name: "ØRIONS คิดราคายังไง?", acceptedAnswer: { "@type": "Answer", text: "งานคราฟต์คิดเป็นแคมเปญหรือโปรเจกต์ — ไม่มีเรทการ์ด ตีตามขอบเขต ความลึก และมาตรฐานที่โจทย์ต้องการ. เราคุยโจทย์ก่อนเสมอ แล้วเสนอสโคป + ราคาที่ตรงงาน." } },
          { "@type": "Question", name: "ØRIONS ไม่เหมาะกับใคร?", acceptedAnswer: { "@type": "Answer", text: "เรารับงานจำกัดโดยตั้งใจ — เพราะงานดีไม่เกิดจากทำเยอะ. ถ้าต้องการคอนเทนต์เยอะที่สุดในราคาถูกที่สุดโดยไม่ต้องมีกลยุทธ์ เราจะบอกตรงๆ ว่าเราอาจไม่ใช่คำตอบ." } },
        ],
      }}
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[100svh] flex flex-col px-6 md:px-10 overflow-hidden">
      <Picture data={heroSilk} alt="" aria-hidden className="silk-drift absolute -inset-[6%] z-0 w-[112%] h-[112%] object-cover object-center pointer-events-none select-none" />
      <div aria-hidden className="hero-scrim absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10 max-w-[1280px] mx-auto w-full flex-1 flex flex-col justify-center items-center text-center pt-24 md:pt-32 pb-20 md:pb-28">
        <Reveal>
          <div className="mb-7 flex justify-center"><Slash className="text-[clamp(46px,7vw,84px)]" /></div>
        </Reveal>
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Boutique Creative Agency · Bangkok</p>
        </Reveal>
        <div className="mt-7">
          <HeroHeadline />
        </div>
        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link to="/contact" className="btn-accent">
              <span>เริ่มต้นบทสนทนา</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/work" className="btn-ghost">
              <span>ดูผลงาน</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Hero baseline — editorial meta rail (coordinates · scroll cue · vintage) */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full pb-7 hidden md:flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/55">
        <span>13.7563° N · 100.5018° E</span>
        <span className="inline-flex items-center gap-2 animate-pulse">
          <span aria-hidden className="w-1.5 h-1.5 bg-cinnabar" /> Scroll
        </span>
        <span>Est. 2025 · Bangkok</span>
      </div>
    </section>

    {/* 02 — POV — centered serif statement on cream (COLLINS-style breather) */}
    <section className="section-paper px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto py-28 md:py-44 flex flex-col items-center text-center">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Point of view</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="h-statement mt-10 max-w-[18ch]">
            Marketing rents attention.<br />Creative earns <em className="text-cinnabar">belief.</em>
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p lang="th" className="mt-10 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.9] text-muted-foreground max-w-[52ch]">
            การตลาดเช่าความสนใจได้ชั่วคราว — แต่ความคิดสร้างสรรค์ทำให้คนเชื่อและอยู่กับคุณ. ในโลกที่ทุกอย่างล้นเกิน เรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link to="/thinking" className="btn-ghost mt-12"><span>อ่าน Manifesto</span><ArrowUpRight className="w-4 h-4" /></Link>
        </Reveal>
      </div>
    </section>

    {/* 03 — SELECTED WORK — featured cases, image-forward (craft shown early) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading lang="th" eyebrow="Selected work"
            title={<>งานที่เรา<em className="text-cinnabar">ภูมิใจ.</em></>} />
          <Link to="/work" className="link-wipe hidden md:inline-flex font-mono text-[10px] tracking-[0.22em] uppercase">ดูผลงานทั้งหมด →</Link>
        </div>
        <Reveal delay={0.05}>
          <div className="work-marquee mt-12 md:mt-14 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
            <div className="work-marquee-track flex w-max">
              {[...featuredCases, ...featuredCases].map((c, i) => {
                const dup = i >= featuredCases.length;
                return (
                  <Link
                    key={`${c.slug}-${i}`}
                    to={`/work/${c.slug}`}
                    viewTransition
                    aria-hidden={dup}
                    tabIndex={dup ? -1 : undefined}
                    className="group flex flex-col shrink-0 w-[280px] md:w-[340px] mr-6 md:mr-8"
                  >
                    <div className="relative w-full overflow-hidden border border-foreground/12 aspect-[4/5]">
                      <Picture data={c.cover} alt={dup ? "" : c.title} loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.04] transition-[transform,filter] duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                      <span className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] uppercase text-background bg-cinnabar px-2 py-1">{c.niche}</span>
                    </div>
                    <div className="mt-5">
                      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{c.year}</div>
                      <h3 lang="th" className="mt-2 font-display text-[20px] md:text-[24px] font-medium leading-tight tracking-[-0.01em] group-hover:text-cinnabar transition-colors">{c.title}</h3>
                      <p lang="th" className="mt-2 font-thai thai-wrap text-[14px] leading-[1.8] text-muted-foreground">{c.summary}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Link to="/work" viewTransition className="btn-ghost mt-10 md:hidden"><span>ดูผลงานทั้งหมด</span><ArrowUpRight className="w-4 h-4" /></Link>
      </div>
    </section>

    {/* 04 — SHOWREEL (proof break — let the work speak) */}
    <ShowreelFeature />

    {/* 05 — WHAT WE DO — quiet editorial index rows on cream (COLLINS Programs) */}
    <section className="section-paper px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">What we do</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 lang="th" className="mt-8 h-display-md max-w-[24ch] thai-wrap">
            เอเจนซี่ ที่มีสมองของ <em className="text-cinnabar">consult.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p lang="th" className="mt-6 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.9] text-muted-foreground max-w-[620px]">
            ที่ปรึกษาคิดเก่งแต่ทำไม่ได้ · เอเจนซี่ทั่วไปทำสวยแต่คิดไม่ลึก. เราอยู่ตรงกลาง — วินิจฉัยก่อนว่าแบรนด์ติดตรงไหน แล้วลงมือแก้ด้วยงานคราฟต์จนจบ.
          </p>
        </Reveal>

        {/* Three disciplines — COLLINS-style list rows: serif name left, one-liner right */}
        <div className="mt-16 md:mt-20">
          {included.map((it, i) => (
            <Reveal key={it.k} delay={i * 0.06}>
              <div className="row-item group">
                <h3 className="font-serif text-[clamp(26px,3.6vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] group-hover:text-cinnabar transition-colors duration-300">
                  {it.k}
                </h3>
                <p lang="th" className="font-thai thai-wrap text-[13px] md:text-[15px] leading-[1.8] text-muted-foreground">
                  {it.d}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-foreground/18" />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link to="/contact" className="btn-accent"><span>เริ่มต้นบทสนทนา</span><ArrowUpRight className="w-4 h-4" /></Link>
            <p lang="th" className="font-thai text-[13px] leading-[1.8] text-muted-foreground">
              เรารับงานจำกัด — เพราะการวินิจฉัยที่ดี ทำแบบสายพานไม่ได้. <Link to="/thinking" className="text-cinnabar hover:underline">อ่านวิธีทำงานของเรา</Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 06 — FOUNDER (a short personal note — the ask lives in the CTA below) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
            <Picture
              data={founder}
              alt="Ratthakan Suwanphakdee — Founder & Creative Director, ØRIONS"
              className="w-28 h-36 md:w-44 md:h-56 rounded-none object-cover object-top shrink-0"
            />
            <div>
              <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none">
                <Slash className="text-[15px]" />
                <span className="text-muted-foreground">คุยกับผู้ก่อตั้ง</span>
              </div>
              <blockquote lang="th" className="mt-6 font-serif text-[24px] md:text-[36px] leading-[1.35] tracking-[-0.015em] thai-wrap text-foreground max-w-[26ch]">
                ไม่ต้องผ่านเซลส์ — เล่าโจทย์มาเลย ผมจะบอกตรงๆ ว่าควรเริ่มตรงไหน <em className="text-cinnabar italic">หรือยังไม่ต้องเริ่ม.</em>
              </blockquote>
              <div className="mt-7">
                <p lang="th" className="font-thai text-[15px] font-medium text-foreground">รัฐกันต์ สุวรรณภักดี</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Ratthakan Suwanphakdee · Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 07 — CTA close */}
    <CTABand
      eyebrow="ØRIONS"
      title={<>Don't get louder. <em className="text-cinnabar">Get unmistakable.</em></>}
      subtitle="เราไม่ทำให้คุณดังขึ้น — เราทำให้คุณเป็นตัวคุณที่ไม่มีใครแทนได้. เล่าโจทย์มาได้เลย ไม่มีข้อผูกมัด."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="ink"
    />
  </div>
  );
};

export default Index;
