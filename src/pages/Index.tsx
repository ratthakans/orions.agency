import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import CTABand from "@/components/CTABand";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import HeroReel from "@/components/HeroReel";
import heroPoster from "@/assets/hero-reel-poster.jpg?as=picture";
import founderPortrait from "@/assets/team/founder-portrait.jpg?as=picture";
import { getMovement, movements, movementBridge } from "@/data/practice";
import { caseStudies } from "@/data/caseStudies";

const featuredSlugs = ["heavy-organizer", "hongmove", "khaoyai-country-club"];
const featuredCases = featuredSlugs.flatMap((slug) => {
  const item = caseStudies.find((work) => work.slug === slug);
  return item ? [item] : [];
});

const Index = () => (
  <div>
    <SEO
      title="ORIONS — Stories, refined. · Expand, Reframe, Embed"
      description="ORIONS ทำงานผ่านสาม movement — EXPAND สร้างพื้นที่เติบโตใหม่ REFRAME เปลี่ยนมุมที่แบรนด์ถูกมอง EMBED ทำให้ตัวตนอยู่ในทุกจุดสัมผัส"
      path="/"
      schema={{ "@context": "https://schema.org", "@type": "Organization", name: "ORIONS", url: "https://orions.agency", slogan: "Stories, refined.", description: "ORIONS is a story-led creative company working through three movements — Expand, Reframe and Embed — to carry a brand forward without losing what makes it itself." }}
    />

    <section className="section-ink min-h-[90svh] px-6 md:px-10 flex items-center relative isolate overflow-hidden">
      <HeroReel still={heroPoster} />
      <div className="max-w-[1400px] mx-auto w-full pt-36 pb-16 md:pb-20 relative z-10">
        <div className="flex items-start justify-between gap-8"><Reveal><SectionLabel label="ORIONS · Story-led creative company" /></Reveal><span className="hidden md:block font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/75">Showreel 2026 · ØRIONS</span></div>
        <Reveal delay={0.08} emphasis="lead"><h1 className="mt-14 md:mt-20 h-display-xl hero-title"><span className="block whitespace-nowrap">Stories,</span><span className="block whitespace-nowrap">refined.</span></h1></Reveal>
        <div className="mt-16 md:mt-24 pt-7 border-t border-foreground/30 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20">
          <Reveal delay={0.18}>
            <p lang="th" className="max-w-[590px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.75] text-foreground/85">
              เราช่วยแบรนด์ค้นหาเรื่องที่มีความหมาย เชื่อมสิ่งสำคัญเข้าด้วยกัน และขัดเกลาให้ชัดพอที่จะถูกมองเห็น เข้าใจ และจดจำ
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap lg:justify-end items-start gap-x-10 gap-y-6">
              <Link to="/work" className="cta-link cta-link-lg">
                <span>Explore our work</span>
                <ArrowUpRight className="w-[18px] h-[18px]" />
              </Link>
              <Link to="/contact" className="cta-link cta-link-lg cta-link-muted">
                <span>Talk to ORIONS</span>
                <ArrowUpRight className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionLabel label="Selected work" />
            <Reveal emphasis="lead">
              <h2 className="mt-8 h-display-lg">Stories made visible.</h2>
            </Reveal>
          </div>
          <Link to="/work" className="cta-link">
            <span>View all work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-5 lg:gap-x-8 gap-y-12">
          {featuredCases.map((item, i) => (
            <Reveal
              key={item.slug}
              emphasis="quiet"
              className={i === 0 ? "md:col-span-2 lg:col-span-8" : i === 1 ? "lg:col-span-4" : "md:col-span-2 lg:col-span-12"}
            >
              <Link to={`/work/${item.slug}`} className="group block">
                <div className={`film-frame bg-surface-2 ${i === 0 ? "aspect-[16/10]" : i === 1 ? "aspect-[4/5]" : "aspect-[21/9]"}`}>
                  <Picture
                    data={item.cover}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 z-[3] font-mono text-[10px] tracking-[0.18em] uppercase text-white bg-black/50 px-2 py-1">
                    {getMovement(item.movement)?.name ?? item.movement}
                  </span>
                </div>
                <div className="mt-5 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{item.niche} · {item.year}</div>
                <h3 className="mt-2 font-display text-[23px] md:text-[27px]">{item.title}</h3>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.75] text-foreground/80">{item.verdictShort}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services, after the work: the record first, then the three moves it
        was made with. One line per movement — the detail lives on /services. */}
    <section className="section-paper px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <SectionLabel label="Services" />
            <Reveal emphasis="lead">
              <h2 className="mt-8 h-display-lg max-w-[16ch]">{movementBridge.line}</h2>
            </Reveal>
          </div>
          <Link to="/services" className="cta-link">
            <span>All services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-14 border-t border-foreground/15">
          {movements.map((m, i) => (
            <Link
              key={m.slug}
              to={`/services#${m.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[70px_1fr_1fr_24px] items-baseline gap-3 md:gap-10 py-8 md:py-10 border-b border-foreground/15"
            >
              <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              <h3 className="h-display-md">{m.name}</h3>
              <p lang="th" className="font-thai text-[15px] md:text-[17px] leading-[1.7] text-foreground/80">{m.question}</p>
              <ArrowUpRight className="hidden md:block w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* About, as a face: on a founder-led practice the person is the claim. */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24">
        <SectionLabel label="About" />
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start">
          <Picture
            data={founderPortrait}
            alt="Ratthakan Suwanphakdee — Founder & Creative Director, ORIONS"
            loading="lazy"
            className="w-36 h-44 md:w-48 md:h-60 object-cover object-top grayscale-[0.3] saturate-[0.85]"
          />
          <div>
            <Reveal emphasis="lead">
              <h2 className="h-display-md max-w-[16ch]">The person behind the work.</h2>
            </Reveal>
            <p lang="th" className="mt-7 max-w-[560px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
              งานสร้างสรรค์ที่ดีไม่ได้เกิดจากจำนวนคน แต่เกิดจากคนที่เห็นภาพทั้งหมดพร้อมกัน
            </p>
            <p lang="th" className="mt-7 font-thai text-[15px]">รัฐกันต์ สุวรรณภักดี</p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Founder &amp; Creative Director</p>
            <Link to="/about" className="cta-link mt-9">
              <span>About ORIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <CTABand eyebrow="Start a conversation" title={<>Not louder. Not busier. More intentional.</>} subtitle="เล่าเรื่องของแบรนด์ให้เราฟัง เราจะช่วยมองว่าสิ่งไหนควรถูกทำให้ชัด" primary={{ label: "Talk to ORIONS", to: "/contact" }} secondary={{ label: "Explore our work", to: "/work" }} tone="ink" />
  </div>
);

export default Index;
