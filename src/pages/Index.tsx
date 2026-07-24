import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import CTABand from "@/components/CTABand";
import Slash from "@/components/Slash";
import SignalField from "@/components/SignalField";
import Picture from "@/components/Picture";
import heroSilk from "@/assets/hero-silk.jpg?as=picture";
import { innovations } from "@/data/system";
import { depthMap } from "@/data/practice";
import { caseStudies } from "@/data/caseStudies";

const SITE_URL = "https://orions.agency";
const FEATURED_CASE_SLUGS = ["hongmove", "heavy-organizer", "khaoyai-country-club"];

// Depth map cadence — type gets heavier and rows sit further apart the deeper
// you go, so the scale reads as a descent rather than a four-item list.
const DEPTH_SIZE = ["text-[24px] md:text-[32px]", "text-[28px] md:text-[40px]", "text-[32px] md:text-[48px]", "text-[36px] md:text-[56px]"];
const DEPTH_PAD = ["py-5 md:py-6", "py-6 md:py-8", "py-7 md:py-10", "py-8 md:py-12"];
const featuredCases = FEATURED_CASE_SLUGS.flatMap((slug) => {
  const found = caseStudies.find((item) => item.slug === slug);
  return found ? [found] : [];
});

/* Hero headline — a quiet mask-up reveal (CSS; see .mask-line in index.css). */
const HeroTitle = () => {
  const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
    <span className="mask-line">
      <span style={{ animationDelay: `${delay}s` }}>{children}</span>
    </span>
  );
  return (
    <h1 className="h-display-xl leading-[0.92]">
      <span className="sr-only">Where aesthetic meets algorithm — a creative agency.</span>
      <span aria-hidden="true">
        <Line delay={0.1}>Where aesthetic</Line>
        <Line delay={0.22}>meets algorithm<span className="text-cinnabar">.</span></Line>
      </span>
    </h1>
  );
};

const Index = () => (
  <div>
    <SEO
      title="ØRIONS — Creative Agency · Where Aesthetic Meets Algorithm"
      description="ครีเอทีฟเอเจนซีในกรุงเทพฯ ที่ผสานศิลปะเข้ากับสมการ — ปั้นแบรนด์ที่คนจำด้วยมือมนุษย์ และ AI ที่มีรสนิยมของเราเอง. เราจัดมวลก่อน แล้วจึงแกะยอด — ทำงานเป็นสี่ชั้นความลึก ทุกงานเริ่มที่ Sounding. ขับเคลื่อนด้วย VÆST — AI creative director ที่มีรสนิยม."
      path="/"
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ØRIONS",
        url: SITE_URL,
        slogan: "Where aesthetic meets algorithm.",
        description:
          "ØRIONS is a creative agency in Bangkok where aesthetic meets algorithm — it builds memorable brands by hand and its own AI with taste. The practice runs in four depths with a single door: Sounding, Mass, Waterline, Roll — every engagement starts at Sounding. Powered by VÆST (an AI creative director). Products: VÆST, First Draft, Routte.",
      }}
    />

    {/* 01 — HERO */}
    <section className="relative min-h-[100svh] flex flex-col px-6 md:px-10 overflow-hidden">
      <Picture data={heroSilk} alt="" aria-hidden className="silk-drift absolute -inset-[6%] z-0 w-[112%] h-[112%] object-cover object-center pointer-events-none select-none" />
      <div aria-hidden className="hero-scrim absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center pt-24 md:pt-32 pb-20 md:pb-28">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-foreground/70">
            <Slash className="text-[15px]" /> ØRIONS · Creative Agency · Bangkok
          </div>
        </Reveal>
        <div className="mt-8">
          <HeroTitle />
        </div>
        <Reveal delay={0.5}>
          <p lang="th" className="mt-9 font-thai thai-wrap text-[17px] md:text-[21px] leading-[1.7] text-foreground/85 max-w-[42ch]">
            ยอดคือผลลัพธ์ของมวล — เราจัดมวลก่อน แล้วจึงแกะยอด. ทุกงานเริ่มที่การหยั่งความลึก.
          </p>
        </Reveal>
        <Reveal delay={0.62}>
          <div className="mt-12 flex flex-col sm:flex-row items-start gap-7 sm:gap-12">
            <Link to="/work" className="cta-link cta-link-lg">
              <span>ดูผลงานที่คัดไว้</span><ArrowUpRight className="w-[18px] h-[18px]" />
            </Link>
            <Link to="/contact" className="cta-link cta-link-lg cta-link-muted">
              <span>เล่าโจทย์ให้เรา</span><ArrowUpRight className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — THE CONTEXT */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-52">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14 lg:gap-24 items-end">
          <Reveal emphasis="lead">
            <h2 lang="th" className="font-serif text-[34px] md:text-[64px] leading-[1.08] tracking-[-0.02em] max-w-[16ch] thai-wrap">
              โลกไม่ได้ต้องการเสียงที่ดังหรือกว้างขึ้น — แต่โหยหา<em className="text-foreground italic">ความลึก.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-t border-foreground/15 divide-y divide-foreground/12">
              <div className="py-6">
                <div className="font-serif text-foreground text-[40px] md:text-[54px] leading-none tracking-[-0.02em]">Signal</div>
                <div lang="th" className="mt-3 font-thai text-[13px] leading-[1.7] text-muted-foreground">คัดสิ่งที่สำคัญให้เหลือข้อความที่คนเข้าใจและจำได้</div>
              </div>
              <div className="py-6">
                <div className="font-serif text-foreground text-[40px] md:text-[54px] leading-none tracking-[-0.02em]">Depth</div>
                <div lang="th" className="mt-3 font-thai text-[13px] leading-[1.7] text-muted-foreground">สร้างความหมายที่ลึกพอให้คนหยุดมองและอยากรู้ต่อ</div>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <p lang="th" className="mt-16 md:mt-24 max-w-[760px] font-thai thai-wrap text-[17px] md:text-[21px] leading-[1.75] text-foreground/80">
            ORIONS คือ <span className="text-foreground">ครีเอทีฟเอเจนซี</span> ที่ผสานศิลปะเข้ากับสมการ — เราไม่ได้แค่ปั้นแบรนด์ให้สวย แต่สร้างเครื่องมือ AI ของเราเองเพื่อยกระดับงานครีเอทีฟให้ลึกและคมกว่าเดิม. <span className="text-foreground">Where aesthetic meets algorithm.</span>
          </p>
        </Reveal>
      </div>
    </section>

    {/* 03 — THE PRACTICE (depth map only; the four depths live on /practice) */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-52">
        <Reveal>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-muted-foreground">— The Practice</div>
        </Reveal>
        <Reveal delay={0.05} emphasis="lead">
          <h2 lang="th" className="mt-8 h-display-lg max-w-[16ch] thai-wrap">
            เราจัดมวลก่อน <em className="text-foreground">แล้วจึงแกะยอด.</em>
          </h2>
        </Reveal>
        {/* The descent is expressed by the type itself — each level sits heavier
            and further apart than the one above it. Never illustrate the iceberg. */}
        <div className="mt-14 md:mt-20 border-t border-foreground/20">
          {depthMap.map((d, i) => (
            <Reveal key={d.m} emphasis="quiet">
              <div className={`grid grid-cols-[84px_1fr] lg:grid-cols-[150px_0.8fr_1.2fr] items-baseline gap-x-5 gap-y-2 border-b border-foreground/12 ${DEPTH_PAD[i]}`}>
                <span className={`font-mono text-[12px] md:text-[13px] tracking-[0.14em] tabular-nums ${d.gate ? "text-cinnabar" : "text-muted-foreground"}`}>
                  {d.m}
                </span>
                <span className={`font-serif leading-[1.0] tracking-[-0.025em] ${DEPTH_SIZE[i]}`}>{d.name}</span>
                <span lang="th" className="col-span-2 lg:col-span-1 font-thai thai-wrap text-[14px] md:text-[16px] leading-[1.75] text-muted-foreground">
                  {d.d}
                  {d.gate && (
                    <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase text-cinnabar">ประตูเดียว</span>
                  )}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.08}>
          <blockquote lang="th" className="mt-14 md:mt-16 font-serif text-[26px] md:text-[44px] leading-[1.3] tracking-[-0.015em] text-foreground max-w-[24ch] thai-wrap">
            เราไม่แกะยอดให้ใคร <em className="text-foreground italic">ที่ไม่ให้เราแตะมวล.</em>
          </blockquote>
        </Reveal>
        <Reveal delay={0.12}>
          <Link to="/practice" viewTransition className="cta-link mt-10">
            <span>ทุกงานเริ่มที่ −40m — ดูวิธีที่เรารับงาน</span><ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* 04 — THE RECORD (cases lead with the verdict, not the scope line) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-44">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-muted-foreground">— บันทึกคำวินิจฉัย</div>
              <h2 lang="th" className="mt-8 h-display-lg max-w-[15ch] thai-wrap">
                งานที่เริ่มจาก<em className="text-foreground">เงื่อนไขจริง.</em>
              </h2>
            </div>
            <Link to="/work" className="cta-link">
              <span>ดูผลงานทั้งหมด</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {featuredCases.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06} emphasis="quiet">
              <Link
                to={`/work/${item.slug}`}
                className="group relative block overflow-hidden border border-foreground/12 aspect-[4/5] bg-surface-2"
              >
                <Picture
                  data={item.cover}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-[1.03] transition-[transform,filter] duration-700"
                />
                <span aria-hidden className="halftone absolute inset-0" />
                <span className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/75">{item.niche} · {item.year}</span>
                  <span lang="th" className="mt-3 block font-serif text-[26px] md:text-[30px] leading-[1.05] text-foreground">{item.title}</span>
                  <span lang="th" className="mt-3 block font-thai text-[13px] md:text-[14px] leading-[1.65] text-foreground/75">{item.verdictShort}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 05 — THE FOUR INNOVATIONS (the system) */}
    <section id="system" className="relative overflow-hidden px-6 md:px-10 border-t border-foreground/15 scroll-mt-16">
      <SignalField fx={0.8} fy={0.28} seed={7} intensity={0.6}
        className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 max-w-[1400px] mx-auto pt-32 md:pt-52 pb-10 md:pb-16">
        <Reveal>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-muted-foreground">— The system · three instruments</div>
        </Reveal>
        <Reveal delay={0.05} emphasis="lead">
          <h2 className="mt-8 h-display-lg max-w-[16ch]">
            หนึ่งจักรวาล ขับเคลื่อนด้วย <em className="text-foreground">VÆST.</em>
          </h2>
        </Reveal>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto border-t border-foreground/15">
        {innovations.map((it, i) => (
          <Reveal key={it.n} delay={0.04}>
            {/* Kept deliberately tighter than The Practice — these are the
                instruments, not the offer. Depth is the homepage's centre. */}
            <article className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-20 py-12 md:py-16 border-b border-foreground/15">
              <div>
                <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground">
                  <span className="text-foreground tabular-nums">{it.n}</span>
                  <span>{it.role}</span>
                </div>
                <Link to={`/system/${it.slug}`} viewTransition className="group/name block">
                  <h3 className="mt-4 font-display font-medium text-[clamp(34px,5vw,64px)] leading-[0.92] tracking-[-0.03em] transition-colors duration-300 group-hover/name:opacity-80">{it.name}</h3>
                </Link>
                <div lang="th" className="mt-4 font-serif text-[16px] md:text-[19px] leading-[1.35] tracking-[-0.01em] text-foreground/85">{it.kind}</div>
              </div>
              <div className="lg:pt-8">
                <p lang="th" className="font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground max-w-[52ch]">
                  {it.lede}
                </p>
                <Link to={`/system/${it.slug}`} viewTransition className="cta-link mt-6">
                  <span>ดูรายละเอียด {it.name}</span><ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="relative z-10 h-20 md:h-28" />
    </section>

    {/* 06 — WHO / SCOPE-1 bridge to the agency work */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-32 md:py-52 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-24 items-center">
        <div>
          <Reveal emphasis="lead">
            <h2 lang="th" className="font-serif text-[30px] md:text-[52px] leading-[1.1] tracking-[-0.02em] max-w-[18ch] thai-wrap">
              เบื้องหลังทุกแพลตฟอร์ม คือ<em className="text-foreground italic">งานคราฟต์</em>ของมนุษย์.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p lang="th" className="mt-8 max-w-[620px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.8] text-foreground/80">
              เทคโนโลยีคือโครงสร้าง แต่รสนิยมคือสิ่งที่ทำให้มันมีชีวิต. ในฐานะ brand consultancy เรายังลงมือคราฟต์แบรนด์ให้คนจำและเลือก — ด้วยมือของทีม senior ที่ VÆST เกิดมาจากวิธีคิดของพวกเขา.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/work" className="cta-link mt-10">
              <span>ดูผลงาน</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <blockquote lang="th" className="font-serif text-[24px] md:text-[34px] leading-[1.35] tracking-[-0.015em] text-foreground/90 max-w-[22ch]">
            Computation is nothing without <em className="text-foreground italic">taste.</em>
          </blockquote>
        </Reveal>
      </div>
    </section>

    {/* 07 — CLOSING */}
    <CTABand
      eyebrow="Build with us"
      title={<>Where aesthetic <em className="text-foreground">meets algorithm.</em></>}
      subtitle="มีโจทย์ที่อยากปั้น หรืออยากสร้างอนาคตของงานครีเอทีฟไปด้วยกัน — เริ่มบทสนทนาได้เลย."
      primary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      secondary={{ label: "อ่านแนวคิดของเรา", to: "/thinking" }}
      tone="ink"
    />
  </div>
);

export default Index;
