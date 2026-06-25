import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Play, Minus, X, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/CTABand";
import Magnetic from "@/components/Magnetic";
import Slash from "@/components/Slash";
import HeroHeadline from "@/components/HeroHeadline";
import MarqueeBand from "@/components/MarqueeBand";
import CountUp from "@/components/CountUp";
import { workThumbs } from "@/data/portfolio";
import heroSilk from "@/assets/hero-silk.jpg";
import founder from "@/assets/team/founder.jpg";

// Direct booking channel — founder section CTA (LINE-first).
const LINE_URL = "https://line.me/ti/p/~orions";

// Pick N random work thumbnails (fresh each mount).
const pickRandom = (arr: string[], n: number): string[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
};

// 3 market pressures of 2026 — animated counters with real, cited figures (พูดตรง).
// Sources shown in the caption under the cards.
const pressures = [
  { to: 3, decimals: 0, suffix: "s", title: "3 วิแรกตัดสินทุกอย่าง",
    desc: "บนฟีดคนตัดสินใจใน ~3 วินาทีว่าจะดูต่อหรือปัด — คิดไม่คมตั้งแต่วิแรก ก็ถูกเลื่อนผ่าน" },
  { to: 74, decimals: 0, suffix: "%", title: "AI ท่วมเว็บ",
    desc: "หน้าเว็บใหม่ราว 74% มีคอนเทนต์จาก AI ปนแล้ว — ทางรอดคือ 'จริงกว่า' ไม่ใช่ 'เยอะกว่า'" },
  { prefix: "+", to: 20, decimals: 0, suffix: "%", title: "ค่าแอดแพงขึ้น",
    desc: "ค่าโฆษณา Meta (CPM) แพงขึ้นราว 20% ต่อปี — งบเท่าเดิมได้ reach น้อยลง ยิงมั่วคือเผาเงิน" },
];

// 3 sales lines — pick one or mix.
const lines = [
  { name: "Digital", tag: "ยอด / ลูกค้า เดี๋ยวนี้", th: "ยิงแอด ทำคอนเทนต์ วัดผล — ดันยอดด้วย performance", pay: "รายเดือน" },
  { name: "Boutique", tag: "แบรนด์ที่คนจำและเลือก", th: "สร้าง · refresh · rebrand ครบตั้งแต่คิดถึงวัดผล", pay: "ต่อแคมเปญ", featured: true },
  { name: "Production", tag: "แค่ทีมถ่าย (มี brief เอง)", th: "ทีมกองถ่าย senior ระดับโฆษณา — ถ่าย ตัด ครบ", pay: "ต่อวัน" },
];

// Why ORIONS — honest comparison across the 4 real options a brand has.
// score: 2 = ทำได้ · 1 = บางส่วน · 0 = ไม่ตอบโจทย์
const compareCols = ["จ้างทีมเอง", "จ้างสตูดิโอ", "Full-service เจ้าอื่น", "ORIONS"];
const compareRows: { label: string; v: number[] }[] = [
  { label: "เข้าใจแบรนด์ลึกระดับ in-house", v: [2, 1, 1, 2] },
  { label: "ครบ คิด–ทำ–ยิง ในทีมเดียว", v: [0, 0, 1, 2] },
  { label: "งานเป็นแบรนด์คุณ ไม่ใช่ลายเซ็นเขา", v: [2, 0, 1, 2] },
  { label: "วัดผลแบรนด์จริง ต่อเนื่อง", v: [1, 0, 0, 2] },
  { label: "ไม่ต้องแบกเงินเดือนทั้งทีม", v: [0, 2, 2, 2] },
];

// Proof — real, countable deliverables (พูดตรง: นับจาก portfolio จริง).
const proofStats = [
  { to: 43, suffix: "+", label: "โปรดักชันวิดีโอ", sub: "reels · MV · long-form" },
  { to: 15, label: "มิวสิควิดีโอ", sub: "ให้ศิลปินจริง" },
  { to: 8, label: "แบรนด์เคส", sub: "กลยุทธ์ถึงผลิต" },
  { to: 10, suffix: "+", label: "ศิลปิน / ค่าย", sub: "ที่ร่วมงาน" },
];
// Real artists ØRIONS has produced music videos for.
const proofArtists = [
  "PANCAKE", "NUM KALA", "URBOYTJ", "ZOM MARIE", "กวาง จิรพรรณ", "นุ่นนิ่น ชาลิสสา",
  "นุ๊ก ธนดล", "ป๊ายปาย โอริโอ้", "ปิ๋ม ชุติมา", "วี พนมภูไท", "เบลล์ นิภาดา", "Innertears",
];

// Company flagship showreel — featured as the mid-page proof break.
const SHOWREEL_ID = "308_jYAVkwI";

const ShowreelFeature = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
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
  const [thumbs] = useState(() => pickRandom(workThumbs, 14));
  return (
  <div>
    <SEO
      title="ØRIONS — ยอด หรือ แบรนด์? · Creative Agency, Bangkok"
      description="เอเจนซีที่รวม คิด–ทำ–ยิง ไว้ในระบบเดียว — Digital (ยอด) · Boutique (แบรนด์) · Production (ถ่าย). เราถามก่อนเสนอเสมอ: ยอด หรือ แบรนด์?"
      path="/"
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[100svh] flex flex-col px-6 md:px-10 overflow-hidden">
      <img src={heroSilk} alt="" aria-hidden className="silk-drift absolute -inset-[6%] z-0 w-[112%] h-[112%] object-cover object-center pointer-events-none select-none" />
      <div aria-hidden className="hero-scrim absolute inset-0 z-0 pointer-events-none" />
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
        <Reveal delay={0.5}>
          <div className="mt-11 flex flex-col sm:flex-row items-center gap-4">
            <Magnetic strength={10} className="inline-block">
              <Link to="/contact" className="btn-accent">
                <span>คุยฟรี 45 นาที</span><ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
            <Link to="/work" className="btn-ghost">
              <span>ดูผลงาน</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — MARKET PRESSURE — ทำแบบเดิมไม่รอด */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="2026"
          title={<>ทำแบบเดิม <em className="text-cinnabar">ไม่รอดแล้ว.</em></>}
          intro="ปี 2026 เปลี่ยนกติกาไป 3 อย่าง — และทั้ง 3 คือเหตุผลว่าทำไม 'ทำเองแบบเดิม' ถึงไม่พอ"
        />
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pressures.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-soft h-full p-7 md:p-8">
                <CountUp to={p.to} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals}
                  className="num-display text-cinnabar text-[clamp(44px,6vw,68px)] leading-none"
                  suffixClassName="text-[0.5em] ml-0.5" />
                <h3 lang="th" className="mt-5 font-display text-[17px] md:text-[19px] font-semibold">{p.title}</h3>
                <p lang="th" className="mt-2.5 font-thai thai-wrap text-[13px] leading-[1.7] text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground/70 max-w-[640px] leading-[1.7]">
          ที่มา · short-form video benchmarks 2025 · Ahrefs AI-content study 2025 · Meta CPM benchmarks 2024–25
        </p>
        <p lang="th" className="mt-6 font-thai text-[13px] leading-[1.7] text-foreground/80 max-w-[640px]">
          แต่ก่อนจะเริ่ม เราขอถามคุณแค่ <span className="text-cinnabar font-medium">คำถามเดียว</span> ↓
        </p>
      </div>
    </section>

    {/* 03 — THE ONE QUESTION + 3 CHOICES */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="ถามก่อนขาย"
          title={<>คุณอยากได้ <em className="text-cinnabar">ยอด</em> หรือ <em className="text-cinnabar">แบรนด์</em>?</>}
          intro="ลูกค้าเกือบทุกคนเข้ามาเพราะอยากได้ยอด — แต่ยอดที่อยู่ยาวต้องมีแบรนด์หนุน. เราบอกตรงๆ ว่าควรเริ่มตรงไหน และจะไม่ขายของที่คุณยังไม่ต้องการ."
        />
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {lines.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.07}>
              <div className={`relative h-full flex flex-col p-7 md:p-8 ${l.featured ? "card-accent" : "card-soft"}`}>
                {l.featured && <span className="ribbon-pill absolute -top-3 left-7">ครบสุด</span>}
                <span lang="th" className="font-thai text-[11px] tracking-[0.02em] text-cinnabar">{l.tag}</span>
                <h3 className="mt-2 font-unbounded text-[24px] md:text-[28px] leading-none tracking-[-0.01em]">{l.name}</h3>
                <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-foreground/85 flex-1">{l.th}</p>
                <div className="mt-6 pt-5 border-t border-foreground/15 flex items-center justify-between">
                  <span lang="th" className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">จ่ายแบบ</span>
                  <span lang="th" className="font-thai text-[13px] text-foreground">{l.pay}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p lang="th" className="mt-8 font-thai text-[13px] leading-[1.7] text-muted-foreground max-w-[640px]">
          เลือกสายเดียว หรือผสมก็ได้ — ส่วนใหญ่เริ่มที่ <span className="text-foreground/85">ยอด (Digital)</span> ให้เงินหมุนก่อน แล้วต่อ <span className="text-foreground/85">แบรนด์ (Boutique)</span> ให้แข็ง.
        </p>
        <Link to="/diagnostic" className="btn-ghost mt-6">
          <span>ไม่แน่ใจ? ลองวินิจฉัย — ยอด หรือ แบรนด์?</span><ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* 04 — WHY ORIONS — 4 choices */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="ทำไมต้องเรา"
          title={<>คุณมี 4 ทางเลือก — <em className="text-cinnabar">เราพูดตรงทั้งหมด.</em></>}
        />
        <Reveal>
          <div className="mt-12 md:mt-14 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <div className="min-w-[660px]">
              {/* header — option names */}
              <div className="grid grid-cols-[1.6fr_repeat(4,1fr)] items-stretch">
                <div aria-hidden />
                {compareCols.map((c, i) => {
                  const us = i === compareCols.length - 1;
                  return (
                    <div key={c} className={`flex items-center justify-center gap-1.5 text-center px-2 py-4 ${us ? "bg-cinnabar/10 border-x border-t border-cinnabar/45" : ""}`}>
                      {us && <Slash className="text-[13px]" />}
                      <span lang="th" className={`font-display text-[13px] md:text-[15px] font-semibold leading-tight ${us ? "text-cinnabar" : "text-foreground/90"}`}>{c}</span>
                    </div>
                  );
                })}
              </div>
              {/* criteria rows */}
              {compareRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[1.6fr_repeat(4,1fr)] items-center border-t border-foreground/12">
                  <div lang="th" className="py-3.5 pr-4 font-thai text-[13px] md:text-[14px] leading-[1.5] text-foreground/85">{row.label}</div>
                  {row.v.map((val, ci) => {
                    const us = ci === row.v.length - 1;
                    return (
                      <div key={ci} className={`flex items-center justify-center py-3.5 ${us ? "bg-cinnabar/10 border-x border-cinnabar/45" : ""}`}>
                        {val === 2 ? (
                          <Check className={us ? "w-[18px] h-[18px] text-cinnabar" : "w-[18px] h-[18px] text-foreground"} strokeWidth={2.5} />
                        ) : val === 1 ? (
                          <Minus className="w-[18px] h-[18px] text-muted-foreground/60" strokeWidth={2.5} />
                        ) : (
                          <X className="w-4 h-4 text-foreground/25" strokeWidth={2.5} />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
              {/* close the ORIONS column box */}
              <div className="grid grid-cols-[1.6fr_repeat(4,1fr)]">
                <div className="col-span-4" />
                <div className="border-b border-cinnabar/45" />
              </div>
            </div>
          </div>
        </Reveal>
        {/* legend */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
          <span lang="th" className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-cinnabar" strokeWidth={2.5} /> ทำได้</span>
          <span lang="th" className="inline-flex items-center gap-1.5"><Minus className="w-3.5 h-3.5" strokeWidth={2.5} /> บางส่วน</span>
          <span lang="th" className="inline-flex items-center gap-1.5"><X className="w-3.5 h-3.5 text-foreground/40" strokeWidth={2.5} /> ไม่ตอบโจทย์</span>
        </div>
        <p lang="th" className="mt-8 font-thai text-[14px] md:text-[15px] leading-[1.7] text-foreground/80 max-w-[640px]">
          เรายืดหยุ่นเรื่อง <span className="text-foreground">สไตล์</span> ได้ แต่ไม่เคยลดเรื่อง <span className="text-cinnabar font-medium">มาตรฐานฝีมือ</span> — ลายเซ็นของเราคือ "มาตรฐาน" ไม่ใช่ "ลุค".
        </p>
      </div>
    </section>

    {/* 04b — SHOWREEL (proof break after "why us") */}
    <ShowreelFeature />

    {/* 04c — PROOF BY NUMBERS + artist wall */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none">
          <Slash className="text-[15px]" />
          <span className="text-muted-foreground">Proof</span>
        </div>
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-6 h-display-md max-w-[20ch] thai-wrap">
            ตัวเลขที่นับได้จริง <em className="text-cinnabar">ไม่ใช่คำโฆษณา.</em>
          </h2>
        </Reveal>
        <div className="mt-12 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {proofStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div>
                <CountUp to={s.to} suffix={s.suffix} decimals={0}
                  className="num-display text-cinnabar text-[clamp(40px,6vw,64px)] leading-none"
                  suffixClassName="text-[0.5em] ml-0.5" />
                <div lang="th" className="mt-4 font-display text-[16px] md:text-[18px] font-semibold">{s.label}</div>
                <div lang="th" className="mt-1 font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-14 pt-8 border-t border-foreground/12">
            <div lang="th" className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">ศิลปิน / ค่าย ที่เราเคยทำ MV ให้</div>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3">
              {proofArtists.map((a, i) => (
                <span key={a} className="inline-flex items-center gap-3">
                  <span lang="th" className="font-display text-[16px] md:text-[19px] font-medium tracking-[-0.01em] text-foreground/85">{a}</span>
                  {i < proofArtists.length - 1 && <span aria-hidden className="text-cinnabar/60">/</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" viewTransition className="btn-accent">
              <span>คุยฟรี 45 นาที</span><ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href="/ORIONS_RateCard_2026.pdf" download className="btn-ghost">
              <Download className="w-4 h-4" /><span>ดาวน์โหลด Rate Card 2026</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* — KINETIC BRAND BAND */}
    <MarqueeBand />

    {/* 05 — THE ORIONS STANDARD — the moat */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none">
            <Slash className="text-[15px]" />
            <span className="text-muted-foreground">The ORIONS Standard</span>
          </div>
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-6 h-display-md max-w-[16ch] thai-wrap">
              เราไม่ส่งของ <em className="text-cinnabar">จบแล้วจบเลย.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div>
            <p lang="th" className="font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
              งานส่วนใหญ่จบที่ "ส่งมอบ" — มาตรฐานของเราคือจบที่ <span className="text-foreground">ผลลัพธ์</span>. ทุกงานเราตกลง baseline และตัวชี้วัดกันตั้งแต่ต้น (เช่น brand recall · consideration · branded search · แนวโน้ม CPL) แล้ววัดซ้ำที่ <span className="text-cinnabar">45 และ 90 วัน</span> — ไม่เข้าเป้าก็ปรับต่อจนเข้าที่.
            </p>
            <p lang="th" className="mt-5 font-thai text-[13px] leading-[1.7] text-muted-foreground">
              นี่คือ <span className="text-foreground/90">วิธีทำงาน</span> ของเรา ไม่ใช่ option เสริม — และเป็นสิ่งที่เอเจนซีส่วนใหญ่ไม่ทำ.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 06 — WORK SHOWCASE (random real work, reshuffled each visit) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            lang="th"
            eyebrow="Our work"
            title={<>งานจริง <em className="text-cinnabar">หลากหลายงานฝีมือ.</em></>}
            intro="สุ่มงานจากหลายหมวดมาให้ดู — ดูทั้งหมดได้ในหน้าผลงาน"
          />
          <Link to="/work" className="hidden md:inline-flex font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-cinnabar transition-colors">
            Index of work →
          </Link>
        </div>
        <div className="mt-12 md:mt-16 marquee" style={{ maskImage: "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)" }}>
          <ul className="work-marquee flex shrink-0 gap-4 md:gap-5">
            {[...thumbs, ...thumbs].map((src, i) => (
              <li key={`${src}-${i}`} className="shrink-0 w-[200px] sm:w-[240px] md:w-[280px]" aria-hidden={i >= thumbs.length}>
                <Link to="/work" className="group relative block overflow-hidden rounded-none border border-foreground/12 bg-foreground/[0.04] aspect-[4/5] transition-colors duration-500 hover:border-cinnabar/60">
                  <img src={src} alt="ผลงาน ØRIONS" loading="lazy" className="w-full h-full object-cover scale-100 grayscale-[0.4] group-hover:scale-[1.06] group-hover:grayscale-0 transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-80" />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] uppercase text-background bg-cinnabar px-2 py-1 rounded-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    ดูงาน <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* 06b — TALK TO THE FOUNDER (direct, LINE-first) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <Reveal>
          <div className="card-soft p-7 md:p-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-7 md:gap-12 items-center">
            <img
              src={founder}
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
                ไม่ต้องผ่านเซลส์ — เล่าโจทย์มาเลย ผมจะบอกตรงๆ ว่าควรเริ่มตรงไหน หรือยังไม่ต้องเริ่ม. คุยฟรี 45 นาที ไม่มีข้อผูกมัด.
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
      title={<>เริ่มที่คำถามเดียว:<br /><em className="text-cinnabar">ยอด หรือ แบรนด์?</em></>}
      subtitle="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เราช่วยวินิจฉัยให้ว่าคุณควรเริ่มที่ยอดหรือแบรนด์ก่อน."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "ดูแพ็กเกจ", to: "/package" }}
      tone="ink"
    />
  </div>
  );
};

export default Index;
