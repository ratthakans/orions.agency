import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import FlipNumber from "@/components/FlipNumber";
import ScrollMarquee from "@/components/ScrollMarquee";
import SectionHeader from "@/components/SectionHeader";
import BigSectionNumber from "@/components/BigSectionNumber";
import SEO from "@/components/SEO";
import RotatingHeadline from "@/components/RotatingHeadline";
import SelectedWorkReel from "@/components/SelectedWorkReel";
import VideoReel, { type VideoReelItem } from "@/components/VideoReel";
import CTA from "@/components/CTA";
import ClosingCTA from "@/components/ClosingCTA";
import KineticWordmark from "@/components/KineticWordmark";
import hongmove from "@/assets/hongmove.webp";
import rtaf from "@/assets/rtaf.webp";
import khaoyai from "@/assets/khaoyai.jpg";
import democrat from "@/assets/democrat.webp";
import gcoo from "@/assets/gcoo.webp";
import myhotel from "@/assets/myhotel.webp";
import heavyOrganizer from "@/assets/heavy-organizer.webp";
import YouTubeFacade from "@/components/YouTubeFacade";

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
          <h1 className="font-brand h-display-xl text-foreground">
            ØRIONS
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 index-badge">APPLIED CREATIVE AGENCY</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 font-display text-foreground text-[15px] md:text-[22px] tracking-[0.04em] uppercase max-w-full overflow-hidden">
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
        <span className="index-badge">SCROLL</span>
        <span className="block w-px h-10 bg-foreground/40 animate-pulse" />
      </div>
    </section>

    {/* MARQUEE — scroll-velocity coupled */}
    <section className="px-6 md:px-10 overflow-hidden">
      <div className="border-y border-foreground py-3">
        <ScrollMarquee
          items={["BRAND DIRECTION", "CREATIVE DIRECTION", "DIGITAL EXPERIENCE", "FILM & PRODUCTION", "BANGKOK ↔ WORLD"]}
        />
      </div>
    </section>

    {/* 03 — THE VICIOUS CYCLE */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <Reveal>
            <SectionHeader left="WHY BUDGETS KEEP LEAKING" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display h-display-md text-foreground">
              The Vicious Cycle<span className="text-muted-foreground">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-thai text-[17px] md:text-[20px] leading-[1.6] text-foreground max-w-[460px]">
              หลายธุรกิจติดอยู่ใน<span className="font-semibold">"วงจรอุบาท"</span> จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม
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
                  <div className="col-span-12 md:col-span-5">
                    <FlipNumber
                      to={p.stat}
                      prefix={p.prefix}
                      suffix={p.suffix}
                      decimals={p.decimals}
                      className="num-display text-[44px] md:text-[88px] transition-transform duration-500 group-hover:-translate-y-1"
                      suffixClassName="text-[20px] md:text-[36px] tracking-normal ml-1 align-baseline text-muted-foreground"
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

    {/* APPLIED SOLUTIONS — the offer */}
    <section className="relative px-6 md:px-10 bg-foreground text-background">
      <div className="border-t border-background/40 py-20 md:py-28">
      <Reveal>
        <h2 className="font-display h-display-md">
          Applied Solutions<span className="text-background/60">.</span>
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
              <h3 className="mt-12 font-display h-display-2xs transition-transform duration-500 group-hover:translate-x-1">
                {s.title}
              </h3>
              <div className="mt-6 hairline w-8 bg-background/40" />
              <p className="mt-6 text-[14px] leading-[1.7] font-thai opacity-80">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      </div>
    </section>

    {/* MASTERY IN STORYTELLING — 21:9 cinematic video (full bleed, no divider) */}
    <section className="relative w-full overflow-hidden bg-foreground">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9" }}>
        <YouTubeFacade videoId="u4r7Szy3uxI" title="Mastery in Storytelling" ambient />
      </div>
    </section>

    {/* SELECTED WORK */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20">
        <h2 className="font-display h-display-sm">
          Selected <span className="text-muted-foreground">Work</span>
        </h2>
        <SelectedWorkReel projects={heroProjects} />
      </div>
    </section>

    {/* APPLIED CREATIVE ACROSS INDUSTRIES */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20">
        <h2 className="font-display h-display-sm">
          Applied Creative <span className="text-muted-foreground">Across Industries</span>
        </h2>
        <SelectedWorkReel projects={worksAcrossIndustries} size="sm" />
      </div>
    </section>

    {/* SOCIAL & COMMERCIALS — video reel */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20">
      <h2 className="font-display h-display-sm">
        Social &amp; <span className="text-muted-foreground">Commercials</span>
      </h2>
      <VideoReel items={socialCommercials} />


      <div className="mt-12 flex justify-end">
        <Link to="/work" className="inline-flex items-center gap-3 index-badge text-muted-foreground hover:text-foreground transition-colors">
          VIEW ALL WORK <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      </div>
    </section>


    <ClosingCTA
      title={
        <>
          Stop guessing<span className="text-muted-foreground">.</span>
          <br />
          Start <span className="text-gradient">applying</span><span className="text-muted-foreground">.</span>
        </>
      }
      ctas={[
        { label: "Request the Audit", to: "/contact#audit" },
        { label: "Or start a project", to: "/contact", variant: "ghost" },
      ]}
    />
  </div>
);

export default Index;
