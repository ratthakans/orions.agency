import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const heroProjects = [
  {
    n: "01",
    name: "พรรคประชาธิปัตย์",
    url: "democrat.or.th",
    body: "อยากทำการเมืองสร้างสรรค์ ผ่านกิจกรรมที่ไม่ใช่การหาเสียง",
    challenge: "แรงต้านทางการเมืองฝั่งซ้าย / ข้อจำกัดของกฎหมายเลือกตั้ง",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&q=80",
    tag: "POLITICS",
  },
  {
    n: "02",
    name: "GCOO",
    url: "gcoo.in.th",
    body: "เปิดตลาดในไทยด้วย localization และ payment gateway",
    challenge: "การปรับโมเดลให้เข้ากับพฤติกรรมคนไทย",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&q=80",
    tag: "MOBILITY",
  },
  {
    n: "03",
    name: "MY HOTEL",
    url: "pzentsmart.com",
    body: "ต้องการวางตัวเป็น first smart hotel OTA ของไทย",
    challenge: "การดีลกับผู้ให้บริการให้เกิดความเชื่อถือ",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
    tag: "HOSPITALITY",
  },
  {
    n: "04",
    name: "HONG MOVE",
    url: "hongmove.co.th",
    body: "ออกตลาด taxi VIP EV ใน AOT พร้อมวางระบบความเป็นไปได้",
    challenge: "ความหลากหลายทางภาษา รองรับมาลายู จีน อาราบิก ฮินดี",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600&q=80",
    tag: "MOBILITY",
  },
];

const more = [
  { n: "05", name: "HEAVY ORGANIZER", url: "heavyorganizer.com", body: "Green music festival with low carbon footprint", img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80" },
  { n: "06", name: "เขาใหญ่ คันทรีคลับ", url: "khaoyaicc.com", body: "ปรับโฉมประสบการณ์สนามกอล์ฟดั้งเดิมสู่พรีเมียม", img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80" },
  { n: "07", name: "RTAF · กองทัพอากาศ", url: "rtaf.mi.th", body: "ปรับภาพลักษณ์ผ่าน high-end production", img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80" },
  { n: "08", name: "พรรคพลวัต", url: "—", body: "พรรคใหม่ที่ต้องนำเสนอมุมมองทางการเมืองภายใต้เวลาจำกัด", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80" },
];

const reels = [
  { name: "LEICESTER CITY", category: "Sports brand", img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&q=80" },
  { name: "AUDI THAILAND", category: "Automotive premium", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80" },
  { name: "BURIRAM ESPORT", category: "Esports campaign", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80" },
  { name: "SIRIRAJ HOSPITAL", category: "Healthcare", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" },
];

const longform = [
  { name: "เถื่อน Travel", category: "Documentary series", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80" },
  { name: "The Upgrade", category: "Series & variety", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80" },
  { name: "เพลงลำคำเขื่อนแก้ว", category: "Music & creative", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80" },
  { name: "เกิดแก่เจ็บโต", category: "Thai PBS feature", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80" },
  { name: "Finding the Last Note", category: "Documentary", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80" },
];

const FEATURED_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Work = () => (
  <div>
    <SEO title="Work — ØRIONS" description="Selected projects across politics, mobility, hospitality, healthcare and culture." path="/work" />

    <section className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24">
      <Reveal>
        <h1 className="font-display text-[56px] md:text-[140px] leading-[0.86] tracking-[-0.05em]">
          Sharper{" "}
          <span
            className="italic font-normal"
            style={{ fontFamily: "'Cutive', serif", textTransform: "none", letterSpacing: "-0.02em" }}
          >
            ideas
          </span>
          .<br />
          Real outcomes<span className="text-muted-foreground">.</span>
        </h1>
      </Reveal>
    </section>

    {/* FEATURED VIDEO REEL */}
    <section className="px-6 md:px-10 pb-20 md:pb-28">
      <Reveal>
        <div className="relative w-full aspect-video overflow-hidden bg-foreground group">
          <video
            src={FEATURED_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
          <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3">
            <span className="w-2 h-2 bg-background animate-pulse" />
            <span className="index-badge text-background">SHOWREEL · 2025</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-background text-[32px] md:text-[72px] leading-[0.9] tracking-[-0.03em]">
              From idea<br />to final cut.
            </h2>
            <div className="hidden md:flex items-center gap-3 text-background">
              <Play className="w-5 h-5 fill-background" />
              <span className="index-badge">PLAYING</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>

    {/* HERO PROJECTS — visual cards */}
    <section className="px-6 md:px-10 pb-20 md:pb-28">
      <SectionHeader left="HERO PROJECTS" right="four featured cases" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {heroProjects.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.05}>
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-background text-foreground px-2 py-1 index-badge">{p.n}</span>
                  <span className="bg-foreground text-background px-2 py-1 index-badge">{p.tag}</span>
                </div>
                <a
                  href={`https://${p.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 w-10 h-10 bg-background text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Visit ${p.url}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-5 grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <h3 className="font-display text-[24px] md:text-[32px] leading-[0.95] tracking-[-0.02em]">{p.name}</h3>
                  <span className="mt-1 inline-block index-badge text-muted-foreground">{p.url}</span>
                </div>
                <div className="col-span-5">
                  <p className="text-[13px] leading-[1.6] font-thai">{p.body}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* MORE PROJECTS — image-led grid */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-surface border-y border-foreground">
      <SectionHeader left="MORE SELECTED" right="across industries" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {more.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.05}>
            <article className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-background">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute top-3 left-3 bg-background text-foreground px-2 py-1 index-badge">{p.n}</div>
              </div>
              <h3 className="mt-4 font-display text-[18px] md:text-[20px] leading-[1.05]">{p.name}</h3>
              <p className="mt-1 text-[12px] font-thai text-muted-foreground line-clamp-2">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* COMMERCIALS — video-style hover cards */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="SOCIAL & COMMERCIALS" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground border border-foreground">
        {reels.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <article className="relative aspect-[4/5] overflow-hidden bg-background group cursor-pointer">
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 border-2 border-background flex items-center justify-center">
                  <Play className="w-5 h-5 text-background fill-background" />
                </div>
              </div>
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-background">
                <span className="index-badge">{c.category}</span>
                <span className="font-mono text-[10px]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-[18px] md:text-[22px] leading-[1.05] text-background">{c.name}</h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* LONG-FORM — wide cinematic */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-surface border-y border-foreground">
      <SectionHeader left="ENTERTAINMENT & LONG-FORM" />
      <div className="mt-8 max-w-[700px]">
        <Reveal>
          <p className="text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground font-thai">
            สารคดี ซีรีส์ และผลงานเล่าเรื่องที่ฟังเสียงของคนจริง — ไม่ใช่แค่งาน production
          </p>
        </Reveal>
      </div>

      <div className="mt-12 space-y-6 md:space-y-8">
        {longform.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.05}>
            <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative aspect-[21/9] md:aspect-[16/9] overflow-hidden bg-background">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-foreground/20" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-background">
                  <Play className="w-3 h-3 fill-background" />
                  <span className="index-badge">REEL</span>
                </div>
              </div>
              <div className="md:col-span-1 font-display text-[14px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-[24px] md:text-[36px] leading-[1.05] font-thai font-medium">{l.name}</h3>
              </div>
              <div className="md:col-span-2">
                <span className="index-badge text-muted-foreground">{l.category}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div>
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[64px] leading-[0.95] tracking-[-0.03em] max-w-[800px]">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-90 transition-opacity">
            Start a conversation <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Work;
