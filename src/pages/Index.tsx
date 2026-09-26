import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import CTABand from "@/components/CTABand";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import HeroReel from "@/components/HeroReel";
import heroPoster from "@/assets/hero-reel-poster.jpg?as=picture";
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
          <Reveal delay={0.18}><p lang="th" className="max-w-[590px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.75] text-foreground/85">เราช่วยแบรนด์ค้นหาเรื่องที่มีความหมาย เชื่อมสิ่งสำคัญเข้าด้วยกัน และขัดเกลาให้ชัดพอที่จะถูกมองเห็น เข้าใจ และจดจำ</p></Reveal>
          <Reveal delay={0.25}><div className="flex flex-wrap lg:justify-end items-start gap-x-10 gap-y-6"><Link to="/work" className="cta-link cta-link-lg"><span>Explore our work</span><ArrowUpRight className="w-[18px] h-[18px]" /></Link><Link to="/contact" className="cta-link cta-link-lg cta-link-muted"><span>Talk to ORIONS</span><ArrowUpRight className="w-[18px] h-[18px]" /></Link></div></Reveal>
        </div>
      </div>
    </section>

    {/* The one answer to "what do you sell". A visitor picks the question they
        already walked in holding, rather than reading our process first. */}
    <section className="section-paper px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-28 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24">
          <SectionLabel label="Three movements" />
          <div>
            <Reveal emphasis="lead"><h2 className="h-display-lg max-w-[16ch]">{movementBridge.line}</h2></Reveal>
            <Reveal delay={0.1}>
              <p lang="th" className="mt-8 max-w-[650px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.8] text-foreground/80">
                แบรนด์ไม่ได้ต้องการทำมากขึ้นเสมอไป บางครั้งต้องหาเส้นทางใหม่ บางครั้งต้องถูกมองในมุมใหม่ และบางครั้งต้องทำให้ทุกสิ่งกลับมาเป็นเรื่องเดียวกัน
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-24 border-t border-foreground/15">
          {movements.map((m, i) => (
            <Reveal key={m.slug} emphasis="quiet">
              <Link to={`/practice#${m.slug}`} className="group grid grid-cols-1 md:grid-cols-[70px_1fr_1fr] gap-4 md:gap-10 py-10 md:py-12 border-b border-foreground/15">
                <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                <div>
                  <h3 className="h-display-md">{m.name}</h3>
                  <p className="mt-3 font-body text-[19px] md:text-[21px]">{m.line}</p>
                </div>
                <div className="md:pt-2">
                  <p lang="th" className="font-thai text-[16px] md:text-[17px] leading-[1.75]">เมื่อคำถามคือ “{m.question}”</p>
                  <p className="mt-5 font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">{m.closer}</p>
                  <span className="cta-link mt-6 group-hover:opacity-100"><span>อ่าน {m.name}</span><ArrowUpRight className="w-4 h-4" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link to="/practice" className="cta-link mt-12"><span>Explore what we do</span><ArrowUpRight className="w-4 h-4" /></Link>
      </div>
    </section>

    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"><div><SectionLabel label="Selected work" /><Reveal emphasis="lead"><h2 className="mt-8 h-display-lg">Stories made visible.</h2></Reveal></div><Link to="/work" className="cta-link"><span>View all work</span><ArrowUpRight className="w-4 h-4" /></Link></div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-5 lg:gap-x-8 gap-y-12">
          {featuredCases.map((item, i) => <Reveal key={item.slug} emphasis="quiet" className={i === 0 ? "md:col-span-2 lg:col-span-8" : i === 1 ? "lg:col-span-4" : "md:col-span-2 lg:col-span-12"}><Link to={`/work/${item.slug}`} className="group block">
            <div className={`film-frame bg-surface-2 ${i === 0 ? "aspect-[16/10]" : i === 1 ? "aspect-[4/5]" : "aspect-[21/9]"}`}><Picture data={item.cover} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><span className="absolute left-4 top-4 z-[3] font-mono text-[10px] tracking-[0.18em] uppercase text-white bg-black/50 px-2 py-1">{getMovement(item.movement)?.name ?? item.movement}</span></div>
            <div className="mt-5 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{item.niche} · {item.year}</div>
            <h3 className="mt-2 font-display text-[23px] md:text-[27px]">{item.title}</h3>
            <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.75] text-foreground/80">{item.verdictShort}</p>
          </Link></Reveal>)}
        </div>
      </div>
    </section>

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24">
        <SectionLabel label="Creative partnership" />
        <div>
          <Reveal emphasis="lead">
            <h2 className="h-display-md max-w-[20ch]">An external creative team, built around your brand.</h2>
          </Reveal>
          <p lang="th" className="mt-8 max-w-[650px] font-thai text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
            สำหรับแบรนด์ที่ต้องการความคิดและทิศทางสร้างสรรค์อย่างต่อเนื่อง โดยมีทีมที่เข้าใจเรื่องของแบรนด์และดูแลความสอดคล้องของงานในทุกจุดสัมผัส
          </p>
          <Link to="/practice#creative-partnership" className="cta-link mt-9">
            <span>Explore the partnership</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Two 50/50 teaser cards under no head was the weakest section on the
        page. One idea now — who we are — with the point of view as a single
        link beneath it. The ORIONS view itself belongs to /practice, where it
        closes the argument the movements open; repeating it here would put the
        same statement on two pages again. */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24">
        <SectionLabel label="About ORIONS" />
        <div>
          <Reveal emphasis="lead">
            <h2 className="h-display-lg max-w-[16ch]">Boutique by design.</h2>
          </Reveal>
          <p lang="th" className="mt-8 max-w-[640px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
            เราเลือกทำงานกับโปรเจกต์จำนวนจำกัด เพื่อให้ทุกเรื่องได้รับเวลา ความเข้าใจ และความใส่ใจที่งานสร้างสรรค์ที่ดีต้องการ
          </p>
          <div className="mt-10 pt-7 border-t border-foreground/15 flex flex-wrap gap-x-10 gap-y-5">
            <Link to="/about" className="cta-link">
              <span>Meet ORIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/thinking" className="cta-link cta-link-muted">
              <span>Read our point of view</span>
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
