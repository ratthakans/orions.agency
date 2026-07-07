import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/CTABand";
import Slash from "@/components/Slash";
import HeroHeadline from "@/components/HeroHeadline";
import SignalField from "@/components/SignalField";
import Picture from "@/components/Picture";
import heroSilk from "@/assets/hero-silk.jpg?as=picture";
import founder from "@/assets/team/founder.jpg?as=picture";

// What we do — three disciplines, one lens (per the 2026 brand direction).
const included = [
  { k: "Brand Strategy", d: "วางรากฐานและทิศทางให้ชัด เพื่อให้แบรนด์ไม่ต้องลงไปแข่งตัดราคา" },
  { k: "Creative Production", d: "งานภาพและเสียงคุณภาพบูทีค — brand film · video · photography · music production — ที่หยุดสายตาคนได้ใน 1.7 วินาที" },
  { k: "Communication Design", d: "ออกแบบการสื่อสารทุกจุดสัมผัส เปลี่ยนคนแปลกหน้าให้เป็นลูกค้าที่ภักดี" },
];

// Company flagship showreel — the single proof moment on the homepage.
const SHOWREEL_ID = "308_jYAVkwI";

const ShowreelFeature = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none">
              <Slash className="text-[15px]" />
              <span className="text-muted-foreground">Showreel 2026</span>
            </div>
            <Reveal delay={0.05}>
              <h2 lang="th" className="mt-6 h-display-md max-w-[18ch] thai-wrap">
                ฝีมือ พูดแทนเรา <em className="text-cinnabar">ดีกว่า.</em>
              </h2>
            </Reveal>
          </div>
          <Link to="/work" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">ดูผลงานทั้งหมด →</Link>
        </div>
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
        <Link to="/work" viewTransition className="btn-ghost mt-10 md:hidden"><span>ดูผลงานทั้งหมด</span><ArrowUpRight className="w-4 h-4" /></Link>
      </div>
    </section>
  );
};

const Index = () => {
  return (
  <div>
    <SEO
      title="ØRIONS — Boutique Creative Agency, Bangkok"
      description="Boutique creative agency ในกรุงเทพฯ ที่ data-driven แบบมีรสนิยม — วินิจฉัยด้วยหลักฐานผ่าน SONAR แล้วลงมือแก้ด้วยงานคราฟต์ วัดผลด้วย Vaest. brand strategy · creative production · communication design. เรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด."
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
    </section>

    {/* 02 — POV STRIP — the brand line, up front */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-14 md:py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-12 md:items-center">
        <Reveal>
          <p className="font-serif text-[24px] md:text-[34px] leading-[1.3] tracking-[-0.01em] text-foreground/90 max-w-[22ch]">
            Marketing rents <em className="text-cinnabar italic">attention.</em><br />Creative earns <em className="text-cinnabar italic">belief.</em>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="md:text-right">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">Signal, not noise</p>
            <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground md:ml-auto max-w-[42ch]">
              การตลาดเช่าความสนใจได้ชั่วคราว — แต่ความคิดสร้างสรรค์ทำให้คนเชื่อและอยู่กับคุณ. ในโลกที่ทุกอย่างล้นเกิน เรื่องที่คมที่สุดชนะ ไม่ใช่เรื่องที่ดังที่สุด.
            </p>
            <Link to="/thinking" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/70 hover:text-cinnabar transition-colors">อ่าน Manifesto <ArrowUpRight className="w-3.5 h-3.5" /></Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 03 — WHAT WE DO — the positioning leads (before any proof) */}
    <section className="relative overflow-hidden bg-surface px-6 md:px-10 border-t border-foreground/15">
      <SignalField fx={0.82} fy={0.5} seed={3} intensity={0.75}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionHeading
          lang="th"
          eyebrow="An agency that thinks like a consultancy"
          title={<>เอเจนซี่ ที่มีสมองของ <em className="text-cinnabar">consult.</em></>}
          intro="ที่ปรึกษาคิดเก่งแต่ทำไม่ได้ · เอเจนซี่ทั่วไปทำสวยแต่คิดไม่ลึก. เราอยู่ตรงกลาง — วินิจฉัยด้วยหลักฐาน ไม่ใช่ความเห็น แล้วลงมือแก้ด้วยงานคราฟต์จนจบ วัดผลว่าขยับ Signal จริงไหม. เหมือนหมอ ไม่เหมือนร้านขายยา."
        />
        <Reveal delay={0.05}>
          <p className="mt-8 font-serif text-[20px] md:text-[28px] leading-[1.3] tracking-[-0.015em] text-foreground max-w-[24ch]">
            คิดแบบ <em className="text-cinnabar italic">Consult</em> → ทำแบบ <em className="text-cinnabar italic">Craft</em> → ส่งมอบแบบ <em className="text-cinnabar italic">Boutique.</em>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p lang="th" className="mt-5 font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
            ขับด้วยหลักฐาน — <span className="text-cinnabar">SONAR</span> ฟังหา Signal · <span className="text-cinnabar">Vaest</span> วัดว่ามันขยับจริง
          </p>
        </Reveal>
        {/* Three disciplines — the treatment */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {included.map((it, i) => (
            <Reveal key={it.k} delay={i * 0.05}>
              <div className="h-full card-soft p-6 md:p-7 hover:border-cinnabar/50 transition-colors group">
                <h3 className="font-display text-[17px] md:text-[19px] font-medium leading-tight tracking-[-0.01em] group-hover:text-cinnabar transition-colors">{it.k}</h3>
                <p lang="th" className="mt-2 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.8] text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p lang="th" className="mt-12 font-thai text-[14px] leading-[1.8] text-foreground/80 max-w-[660px]">
          เรารับงานจำกัด — เพราะการวินิจฉัยที่ดี ทำแบบสายพานไม่ได้. <Link to="/thinking" className="text-cinnabar hover:underline">อ่านวิธีทำงานของเรา</Link>.
        </p>
      </div>
    </section>

    {/* 04 — SHOWREEL (the single proof moment — let the work speak) */}
    <ShowreelFeature />

    {/* 05 — FOUNDER (a short personal note — the ask lives in the CTA below) */}
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
