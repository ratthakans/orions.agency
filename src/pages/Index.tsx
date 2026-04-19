import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import RotatingHeadline from "@/components/RotatingHeadline";
import SelectedWorkReel from "@/components/SelectedWorkReel";
import VideoReel, { type VideoReelItem } from "@/components/VideoReel";
import heroStreet from "@/assets/hero-street.jpg";
import whoOrionsTeam from "@/assets/who-orions-team.jpg";
import approachRunning from "@/assets/approach-running.jpg";
import approachTaxi from "@/assets/approach-taxi.jpg";
import hongmove from "@/assets/hongmove.png";
import rtaf from "@/assets/rtaf.jpg";
import khaoyai from "@/assets/khaoyai.jpg";
import democrat from "@/assets/democrat.jpg";
import gcoo from "@/assets/gcoo.jpg";
import myhotel from "@/assets/myhotel.png";
import heavyOrganizer from "@/assets/heavy-organizer.jpg";
import whatVortex from "@/assets/what-vortex.jpg";
import whatSkater from "@/assets/what-skater.jpg";
import whatWindow from "@/assets/what-window.jpg";

const pressures = [
  { stat: 1.7, suffix: "s", decimals: 1, label: "ATTENTION SPAN", body: "คุณมีเวลาไม่ถึง 2 วินาทีในการหยุดลูกค้าก่อนจะถูกปัดทิ้ง" },
  { stat: 41, prefix: "", suffix: "%", decimals: 0, label: "DIGITAL INFLATION", body: "ค่าโฆษณาแพงขึ้นเกือบเท่าตัว แต่ประสิทธิภาพกลับสวนทาง" },
  { stat: 4.6, suffix: "×", decimals: 1, label: "DIGITAL WASTE", body: "ขยะดิจิทัลล้นโลก จนงานที่ไม่มีคุณภาพถูกกลบหายไปหมด" },
];

const appliedSolutions = [
  { n: "01", title: "Creative Solution", body: "วางกลยุทธ์และหาทางออกใหม่ๆ เมื่อธุรกิจมาถึงจุดตัน" },
  { n: "02", title: "Applied Communication", body: "การสื่อสารที่ประยุกต์ให้เข้ากับพฤติกรรมจริง เพื่อหยุดนิ้วโป้งลูกค้า" },
  { n: "03", title: "Social Media Marketing", body: "บริหารจัดการช่องทางการตลาด เพื่อสร้างตัวตนและยอดขาย" },
  { n: "04", title: "High Impact Production", body: "งานผลิตคุณภาพสูงระดับสากล เพื่อสร้างภาพจำที่ทรงพลัง" },
];


const worksAcrossIndustries = [
  { tag: "Political Communication", name: "DEMOCRAT PARTY", body: "การสื่อสารเชิงกลยุทธ์ภายใต้เงื่อนไขที่ท้าทาย", img: democrat },
  { tag: "Mobility", name: "GCOO", body: "Localization ระบบการเดินทางคนเมือง", img: gcoo },
  { tag: "Hospitality Tech", name: "MY HOTEL", body: "Smart Hotel ที่ใช้งานได้จริงรายแรกของไทย", img: myhotel },
  { tag: "National Campaign", name: "HEAVY ORGANIZER", body: "แคมเปญสื่อสารระดับประเทศที่สร้างแรงกระเพื่อมจริง", img: heavyOrganizer },
];

// (worksHighImpact moved to /work)

const socialCommercials: VideoReelItem[] = [
  { tag: "Sports · Football", name: "LEICESTER CITY", body: "แคมเปญสื่อสารแบรนด์ระดับสากล สำหรับสโมสรฟุตบอลพรีเมียร์ลีก", videoId: "T8j2S_Zewes" },
  { tag: "Esports", name: "BURIRAM ESPORT", body: "สร้างตัวตนทีม Esport ไทยให้ก้าวสู่เวทีระดับภูมิภาค", videoId: "KwHy9KieUxg" },
  { tag: "Healthcare", name: "SIRIRAJ HOSPITAL", body: "Storytelling ที่สื่อสารความน่าเชื่อถือของสถาบันการแพทย์ชั้นนำ", videoId: "z5JyydIxOwo" },
  { tag: "Automotive", name: "AUDI THAILAND", body: "High-end Production ที่ตีความ Premium Mobility ในแบบไทย", videoId: "_aEZ3MWhjV4" },
];

const heroProjects = [
  { tag: "MOBILITY", name: "HONGMOVE", body: "เปลี่ยนความซับซ้อนให้ดูง่าย ระบบสื่อสาร Seamless สำหรับ Taxi VIP", stat: "+25%", statLabel: "CONVERSION CLARITY", img: hongmove },
  { tag: "DEFENCE", name: "RTAF", body: "ยึดความน่าเชื่อถือคืนมา ปรับโฉมภาพลักษณ์ผ่าน High-end Production", stat: "2×", statLabel: "ENGAGEMENT QUALITY", img: rtaf },
  { tag: "HOSPITALITY", name: "KHAO YAI", body: "ยกระดับด้วยรสนิยม เปลี่ยนสนามกอล์ฟดั้งเดิมสู่ประสบการณ์พรีเมียม", stat: "30%", statLabel: "DECISION SPEED", img: khaoyai },
];


const Index = () => (
  <div id="top">
    <SEO title="ØRIONS — Sharper ideas. Clearer direction." description="Idea-led Creative Agency. We help brands cut through the noise with sharper ideas and clearer direction." path="/" />

    {/* HERO — Editorial cover */}
    <section className="relative px-6 md:px-10 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <Reveal delay={0.05}>
          <h1
            className="font-brand leading-[0.85] tracking-[-0.05em] text-foreground"
            style={{ fontSize: "clamp(72px, 16vw, 220px)" }}
          >
            ØRIONS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 md:mt-10 index-badge font-bold">APPLIED CREATIVE AGENCY</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-4 font-display text-[20px] md:text-[28px] leading-[1.2] tracking-[-0.02em] text-foreground">
            <RotatingHeadline
              items={[
                "PRACTICAL · BOLD · DONE",
                "FROM IDEA → FINAL CUT",
                "ONE TEAM · NO HANDOFF",
                "BANGKOK · 2019—",
              ]}
            />
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="index-badge font-medium">SCROLL</span>
        <span className="block w-px h-10 bg-foreground/40 animate-pulse" />
      </div>
    </section>

    {/* MARQUEE */}
    <section className="border-y border-foreground py-3 overflow-hidden">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {["BRAND DIRECTION", "CREATIVE DIRECTION", "DIGITAL EXPERIENCE", "FILM & PRODUCTION", "BANGKOK ↔ WORLD"].map((w, i) => (
              <span key={i} className="font-display text-[14px] md:text-[16px] leading-none tracking-[0.04em] flex items-center gap-12">
                <span>{w}</span>
                <span className="text-muted-foreground">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* 03 — THE VICIOUS CYCLE */}
    <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-foreground">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-foreground" />
              <p className="index-badge text-foreground">THE VICIOUS CYCLE</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-10 md:mt-12 font-thai text-[36px] md:text-[64px] leading-[1.15] tracking-[-0.02em] font-bold text-foreground">
              หลายธุรกิจติดอยู่ใน<br /><span className="font-extrabold">"วงจรอุบาท"</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-thai text-[18px] md:text-[22px] leading-[1.55] text-muted-foreground max-w-[460px]">
              จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 hairline w-16" />
          </Reveal>
        </div>

        <div className="md:col-span-7 flex flex-col">
          {pressures.map((p, i) => (
            <Reveal key={p.label} delay={0.2 + i * 0.1}>
              <div className={`group relative py-10 md:py-14 ${i === 0 ? "border-t" : ""} border-b border-soft cursor-default`}>
                <div className="grid grid-cols-12 gap-6 md:gap-8 items-start px-2 md:px-6">
                  <div className="col-span-2 md:col-span-1 pt-3">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="col-span-10 md:col-span-4">
                    <CountUp
                      to={p.stat}
                      prefix={p.prefix}
                      suffix={p.suffix}
                      decimals={p.decimals}
                      className="font-display text-[64px] md:text-[88px] leading-[0.9] tracking-[-0.04em] block transition-transform duration-500 group-hover:-translate-y-1"
                      suffixClassName={p.suffix === "x" ? "" : "text-[28px] md:text-[36px] tracking-normal ml-1 align-baseline text-muted-foreground"}
                    />
                  </div>

                  <div className="col-span-12 md:col-span-7 md:pt-3">
                    <div className="index-badge text-foreground">
                      {p.label}
                    </div>
                    <div className="mt-3 hairline w-8" />
                    <p className="mt-4 text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground font-thai max-w-[420px]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — WHO IS ØRIONS — balanced split, smaller image */}
    <section className="relative border-t border-foreground px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Image — contained, 3/4 ratio */}
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="aspect-[3/4] overflow-hidden bg-surface-2 border border-foreground">
            <img src={whoOrionsTeam} alt="ØRIONS team in Bangkok" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Manifesto column */}
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-foreground" />
            <p className="index-badge text-foreground">WHO IS ØRIONS</p>
          </div>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-[40px] md:text-[64px] leading-[0.95] tracking-[-0.04em]">
              Applied Creative Agency
              <span className="block mt-3 text-[18px] md:text-[22px] tracking-[0.04em] text-muted-foreground font-mono uppercase">from Bangkok</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hairline w-16 mt-8" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 text-[16px] md:text-[18px] leading-[1.8] font-thai text-muted-foreground max-w-[560px]">
              ØRIONS ทำหน้าที่เชื่อมช่องว่างระหว่าง <span className="text-foreground font-medium">"ไอเดียที่ดูดี"</span> กับ <span className="text-foreground font-medium">"ผลลัพธ์ที่วัดผลได้"</span> เพื่อเปลี่ยนงบประมาณที่สูญเปล่าให้เป็น Impact ที่แท้จริงของธุรกิจ
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 index-badge text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity">
              READ MORE <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-3 border-t border-foreground pt-6 max-w-[560px]">
              {[
                { v: "10+", l: "YEARS CRAFT" },
                { v: "40+", l: "BRANDS" },
                { v: "∞", l: "IDEAS APPLIED" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-[32px] md:text-[44px] leading-none tracking-[-0.03em]">{s.v}</div>
                  <div className="mt-2 index-badge text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* APPLIED SOLUTIONS — the offer */}
    <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-foreground bg-foreground text-background">
      <Reveal>
        <h2 className="font-display leading-[0.92] tracking-[-0.04em]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
          Applied <span className="text-gradient">Solutions</span>.
        </h2>
      </Reveal>

      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/30 border border-background/30">
        {appliedSolutions.map((s, i) => (
          <Reveal key={s.n} delay={0.05 * i}>
            <article className="group h-full p-7 md:p-9 bg-foreground text-background flex flex-col">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-[11px] tracking-[0.12em] opacity-60">{s.n}</div>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </div>
              <h3 className="mt-10 md:mt-14 font-display text-[24px] md:text-[28px] leading-[1.05] tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1">
                {s.title}
              </h3>
              <div className="mt-5 hairline w-8 bg-background/40" />
              <p className="mt-5 text-[14px] leading-[1.7] font-thai opacity-75">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* SELECTED WORK */}
    <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-foreground">
      <SectionHeader left="SELECTED WORK" right="applied creative in action" />

      <SelectedWorkReel projects={heroProjects} />

      {/* Applied Creative Across Industries — small reel */}
      <div className="mt-20">
        <SelectedWorkReel projects={worksAcrossIndustries} size="sm" />
      </div>

    </section>

    {/* MASTERY IN STORYTELLING — 21:9 cinematic video */}
    <section className="relative w-full overflow-hidden border-t border-foreground bg-foreground">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full pointer-events-none"
          src="https://www.youtube.com/embed/u4r7Szy3uxI?autoplay=1&mute=1&loop=1&playlist=u4r7Szy3uxI&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0"
          title="Mastery in Storytelling"
          allow="autoplay; encrypted-media"
          frameBorder={0}
        />
      </div>
    </section>

    {/* SOCIAL & COMMERCIALS — video reel */}
    <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-foreground">
      <SectionHeader left="SOCIAL & COMMERCIALS" right="branded films · campaigns" />
      <VideoReel items={socialCommercials} />


      <div className="mt-12 flex justify-end">
        <Link to="/work" className="inline-flex items-center gap-3 index-badge hover:opacity-60 transition-opacity">
          VIEW ALL WORK <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>


    {/* CLOSING — clean two-line CTA strip */}
    <section className="relative bg-foreground text-background border-t border-foreground px-6 md:px-10 py-24 md:py-32">
      <div className="border-t border-background/30 pt-3 pb-3 flex items-center justify-between gap-6">
        <span className="index-badge font-bold inline-flex items-center gap-3">
          <span className="opacity-60 font-mono">05</span>
          <span className="block w-4 h-px bg-background/40" />
          <span>UNSTUCK</span>
        </span>
        <span className="index-badge font-medium opacity-60 hidden sm:inline">PRACTICAL · BOLD · DONE</span>
      </div>

      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
        <Reveal delay={0.05} className="md:col-span-8">
          <h2 className="font-display leading-[0.92] tracking-[-0.03em]" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
            Stop guessing.<br /><span className="opacity-50">Start applying.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-4">
          <div className="flex flex-col items-start gap-5">
            <Link
              to="/contact#audit"
              className="group inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge hover:opacity-95 transition-opacity"
            >
              <span>Request the Audit</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 index-badge text-background border-b border-background pb-1 hover:opacity-70 transition-opacity"
            >
              <span>Or start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;
