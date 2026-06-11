import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import { caseStudies } from "@/data/caseStudies";

const clients = ["พรรคประชาธิปัตย์", "กองทัพอากาศ", "GCOO", "HONG MOVE", "เขาใหญ่ คันทรี่คลับ", "HEAVY ORGANIZER"];

const services = [
  { en: "Brand Strategy",         tag: "หาเรื่องที่ใช่ — positioning, ตัวตน, ระบบแบรนด์ (CI), naming" },
  { en: "Creative Production",    tag: "ทำให้เห็น — brand film, ถ่ายภาพ, คอนเทนต์, ดีไซน์" },
  { en: "Social Media Marketing", tag: "ทำให้ดังและวัดได้ — เพจ, ยิงแอด, SEO, รายงานผล" },
];

const work = caseStudies.slice(0, 6);

const label = "font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground";

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Stories, refined. · Creative Agency, Bangkok"
      description="ครีเอทีฟเอเจนซีในกรุงเทพฯ ที่รวม Brand Strategy · Creative Production · Social Media Marketing ไว้ในทีมเดียว — เราถือว่าข้อจำกัดคือบรีฟ."
      path="/"
    />

    {/* — HERO — calm, static, spacious */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1180px] mx-auto pt-40 md:pt-56 pb-24 md:pb-36">
        <Reveal>
          <p className={label}>ØRIONS — Creative Agency, Bangkok</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-7 font-serif font-medium tracking-[-0.02em] leading-[1.02] text-[clamp(46px,8vw,104px)] max-w-[14ch]">
            Stories, <em className="text-cinnabar">refined.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-9 max-w-[54ch] font-thai thai-wrap text-[17px] md:text-[19px] leading-[1.75] text-muted-foreground">
            ทุกองค์กรมีเรื่องของตัวเองอยู่แล้ว — สิ่งที่ขาดคือการ refine ให้คนหยุดดู เชื่อ และจำ.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-11 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">เริ่มต้นบทสนทนา</Link>
            <Link to="/work" className="btn-ghost">ดูผลงาน</Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* — TRUSTED BY — quiet single row */}
    <section className="px-6 md:px-10 border-t border-border">
      <div className="max-w-[1180px] mx-auto py-16 md:py-20">
        <p lang="th" className={label}>แบรนด์ที่เลือกทำงานกับเรา</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5">
          {clients.map((c) => (
            <span key={c} lang="th" className="font-serif text-[18px] md:text-[22px] tracking-[-0.01em] text-foreground/55">{c}</span>
          ))}
        </div>
      </div>
    </section>

    {/* — WHAT WE DO — calm two-column list */}
    <section className="px-6 md:px-10 border-t border-border">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-20">
        <div>
          <Reveal><p className={label}>What we do</p></Reveal>
          <Reveal delay={0.05}>
            <h2 lang="th" className="mt-6 font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] tracking-[-0.018em] max-w-[14ch]">
              สามบริการ <em className="text-cinnabar">ในทีมเดียว.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-serif text-[16px] text-foreground hover:text-cinnabar transition-colors">
              ดูบริการทั้งหมด <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <div className="md:pt-2">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.06}>
              <Link to="/services" className={`group flex items-start justify-between gap-6 py-7 md:py-8 ${i > 0 ? "border-t border-border" : ""}`}>
                <div>
                  <h3 className="font-serif text-[23px] md:text-[28px] tracking-[-0.01em] group-hover:text-cinnabar transition-colors">{s.en}</h3>
                  <p lang="th" className="mt-2 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground max-w-[46ch]">{s.tag}</p>
                </div>
                <ArrowRight className="w-5 h-5 mt-1.5 text-foreground/25 group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* — SELECTED WORK — calm static grid, captions below */}
    <section className="px-6 md:px-10 border-t border-border">
      <div className="max-w-[1180px] mx-auto py-24 md:py-36">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Reveal><p className={label}>Selected work</p></Reveal>
            <Reveal delay={0.05}>
              <h2 lang="th" className="mt-6 font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] tracking-[-0.018em]">
                งานที่เลือกมาเพราะ <em className="text-cinnabar">เงื่อนไข.</em>
              </h2>
            </Reveal>
          </div>
          <Link to="/work" className="hidden md:inline-flex items-center gap-2 font-serif text-[15px] text-foreground hover:text-cinnabar transition-colors">
            ดูทั้งหมด <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {work.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 3) * 0.06}>
              <Link to={`/work/${w.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl bg-surface-2" style={{ aspectRatio: "4 / 3" }}>
                  <img src={w.cover} alt={w.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </div>
                <p className="mt-4 font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground">{w.niche} · {w.year}</p>
                <h3 lang="th" className="mt-1.5 font-serif text-[20px] md:text-[22px] tracking-[-0.01em] group-hover:text-cinnabar transition-colors">{w.title}</h3>
                <p lang="th" className="mt-1.5 font-thai thai-wrap text-[13px] leading-[1.6] text-muted-foreground line-clamp-2">{w.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* — CLOSING — calm CTA */}
    <section className="px-6 md:px-10 border-t border-border">
      <div className="max-w-[1180px] mx-auto py-28 md:py-44 text-center">
        <Reveal>
          <h2 lang="th" className="font-serif text-[clamp(34px,5.5vw,68px)] leading-[1.05] tracking-[-0.02em] max-w-[18ch] mx-auto">
            พร้อมคุยแล้ว? <em className="text-cinnabar">เล่าโจทย์มาได้เลย.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p lang="th" className="mt-7 font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-[46ch] mx-auto">
            คุยฟรี 45 นาที · ไม่มีข้อผูกมัด — หรือลองทำ Brand Audit 1 นาทีก่อนก็ได้.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">เริ่มต้นบทสนทนา</Link>
            <Link to="/diagnostic" className="btn-ghost">ทำ Brand Audit</Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;
