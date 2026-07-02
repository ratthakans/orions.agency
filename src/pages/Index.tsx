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
import TopoField from "@/components/TopoField";
import Picture from "@/components/Picture";
import heroSilk from "@/assets/hero-silk.jpg?as=picture";
import founder from "@/assets/team/founder.jpg?as=picture";

// Direct booking channel — founder section CTA (LINE-first).
const LINE_URL = "https://line.me/ti/p/~orions";

// What a Boutique engagement includes — the craft spine.
const included = [
  { k: "Positioning & Brand DNA", d: "จุดยืน แก่นตัวตน และเรื่องที่จริงของแบรนด์ — ต้นน้ำของทุกอย่าง" },
  { k: "Identity & CI", d: "โลโก้ · สี · ฟอนต์ · คู่มือแบรนด์ — ระบบที่ทำให้คนจำได้" },
  { k: "Big Idea / Campaign", d: "แนวคิดใหญ่ที่ร้อยทั้งแคมเปญให้พูดเรื่องเดียวกัน" },
  { k: "Brand Film & Premium Production", d: "ฟิล์ม · ภาพ · art direction ระดับโฆษณา โดยทีม senior" },
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
      description="บูทีคครีเอทีฟเอเจนซีในกรุงเทพฯ — งานปั้นแบรนด์ที่คนจำและเลือก. brand strategy · identity · big idea · brand film และ art direction ระดับโฆษณา. คิดต่อแคมเปญ/โปรเจกต์ ตีตามโจทย์จริง."
      path="/"
      schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "ØRIONS ทำอะไร?", acceptedAnswer: { "@type": "Answer", text: "ØRIONS เป็นบูทีคครีเอทีฟเอเจนซีในกรุงเทพฯ ที่เน้นงานปั้นแบรนด์ระดับโฆษณา — brand strategy, identity, big idea, brand film และ art direction. เป้าหมายคือทำให้แบรนด์ถูกจำและถูกเลือก ไม่ใช่แค่ถูกเห็น." } },
          { "@type": "Question", name: "เริ่มงานกับ ØRIONS ต้องทำอย่างไร?", acceptedAnswer: { "@type": "Answer", text: "เริ่มจากคุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราจะบอกตรงๆ ว่าจะ refine มันยังไง. ติดต่อ hello@orions.agency · 092 390 5464 · LINE @orions" } },
          { "@type": "Question", name: "ØRIONS คิดราคายังไง?", acceptedAnswer: { "@type": "Answer", text: "งานคราฟต์คิดเป็นแคมเปญหรือโปรเจกต์ — ไม่มีเรทการ์ด ตีตามขอบเขต ความลึก และมาตรฐานที่โจทย์ต้องการ. เราคุยโจทย์ก่อนเสมอ แล้วเสนอสโคป + ราคาที่ตรงงาน. ขอใบเสนอราคาได้." } },
          { "@type": "Question", name: "ØRIONS ไม่เหมาะกับใคร?", acceptedAnswer: { "@type": "Answer", text: "ถ้าอยากได้คอนเทนต์เยอะที่สุดในราคาถูกที่สุดโดยไม่ต้องมีกลยุทธ์หรือมาตรฐานงานคราฟต์ เราจะบอกตรงๆ ว่าเราอาจไม่ใช่คำตอบ." } },
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

    {/* 02 — POV STRIP — pull the thesis up */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-14 md:py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-12 md:items-center">
        <Reveal>
          <p lang="th" className="font-serif text-[24px] md:text-[34px] leading-[1.3] tracking-[-0.01em] text-foreground/90 max-w-[20ch] thai-wrap">
            ตรรกะทำให้คน<em className="text-cinnabar italic">เชื่อ</em><br />— อารมณ์ทำให้คน<em className="text-cinnabar italic">ซื้อ.</em>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="md:text-right">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cinnabar">Connection &gt; followers</p>
            <p lang="th" className="mt-3 font-thai thai-wrap text-[13px] leading-[1.8] text-muted-foreground md:ml-auto max-w-[42ch]">
              connection ที่จริงกับคนที่รักแบรนด์ มีค่ากว่ายอด follower — และอยู่ทนกว่าโปรโมชั่น. นั่นคือสิ่งที่คู่แข่งลอกด้วยราคาไม่ได้.
            </p>
            <Link to="/thinking" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/70 hover:text-cinnabar transition-colors">อ่านแนวคิดของเรา <ArrowUpRight className="w-3.5 h-3.5" /></Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 03 — SELECTED WORK — featured cases, image-forward (craft shown early) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading lang="th" eyebrow="Selected work"
            title={<>งานที่เรา<em className="text-cinnabar">ภูมิใจ.</em></>} />
          <Link to="/work" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">ดูผลงานทั้งหมด →</Link>
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

    {/* 05 — WHAT WE DO — boutique craft + what's included (consolidated) */}
    <section className="relative overflow-hidden bg-surface px-6 md:px-10 border-t border-foreground/15">
      <TopoField fx={0.14} fy={0.62} seed={1} intensity={0.2}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionHeading
          lang="th"
          title={<>งานปั้นที่คน<em className="text-cinnabar">จำและเลือก.</em></>}
          intro="ØRIONS คือบูทีคครีเอทีฟเอเจนซี — งานคราฟต์ระดับโฆษณาสำหรับแบรนด์ที่อยากถูกจำ ไม่ใช่แค่ถูกเห็น. นี่คือฝั่งของอารมณ์ที่ทำให้คนยอมจ่ายแพง."
        />
        <p className="mt-6 font-mono text-[11px] tracking-[0.12em] uppercase text-cinnabar">
          Logic convinces · <span className="text-foreground">Emotion converts</span>
        </p>
        {/* What's included — compact service cards */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {included.map((it, i) => (
            <Reveal key={it.k} delay={(i % 2) * 0.05}>
              <div className="h-full card-soft p-6 md:p-7 hover:border-cinnabar/50 transition-colors group">
                <h3 className="font-display text-[17px] md:text-[19px] font-medium leading-tight tracking-[-0.01em] group-hover:text-cinnabar transition-colors">{it.k}</h3>
                <p lang="th" className="mt-2 font-thai thai-wrap text-[13px] md:text-[14px] leading-[1.8] text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 06 — TALK TO THE FOUNDER + CTA (consolidated closing) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <Reveal>
          <div className="card-soft p-7 md:p-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-7 md:gap-12 items-center">
            <Picture
              data={founder}
              alt="Ratthakan Suwanphakdee — Founder / Creative Director, ØRIONS"
              className="w-28 h-36 md:w-44 md:h-56 rounded-none object-cover object-top shrink-0"
            />
            <div>
              <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none">
                <Slash className="text-[15px]" />
                <span className="text-muted-foreground">คุยกับผู้ก่อตั้ง</span>
              </div>
              <h2 lang="th" className="mt-5 h-display-md max-w-[18ch] thai-wrap">
                คุยกับผม <em className="text-cinnabar">ตรงๆ</em> ก่อนตัดสินใจ.
              </h2>
              <p lang="th" className="mt-5 font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.8] text-foreground/85 max-w-[560px]">
                ไม่ต้องผ่านเซลส์ — เล่าโจทย์มาเลย ผมจะบอกตรงๆ ว่าควรเริ่มตรงไหน หรือยังไม่ต้องเริ่ม.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <a href="mailto:ratthakan@orions.agency?subject=คุยฟรี 45 นาที — ØRIONS" className="btn-accent justify-between sm:justify-center">
                  <span>อีเมลหาผมตรงๆ</span><ArrowUpRight className="w-4 h-4" />
                </a>
                <Link to="/contact" viewTransition className="btn-ghost justify-between sm:justify-center">
                  <span>เล่าโจทย์ผ่านฟอร์ม</span><ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                <a href="tel:+66923905464" className="hover:text-cinnabar transition-colors">092-390-5464</a>
                <a href={LINE_URL} target="_blank" rel="noreferrer" className="hover:text-cinnabar transition-colors">LINE @orions</a>
              </div>
              <div className="mt-5">
                <p lang="th" className="font-thai text-[15px] font-medium text-foreground">รัฐกันต์ สุวรรณภักดี</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Ratthakan Suwanphakdee · Founder / Creative Director</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 07 — CTA close */}
    <CTABand
      eyebrow="เริ่มง่ายๆ"
      title={<>มีโจทย์ที่อยาก <em className="text-cinnabar">ปั้นให้คม</em> ไหม?</>}
      subtitle="เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง — ไม่มีข้อผูกมัด."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูผลงาน", to: "/work" }}
      tone="ink"
    />
  </div>
  );
};

export default Index;
