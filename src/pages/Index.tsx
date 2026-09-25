import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import CTABand from "@/components/CTABand";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import HeroReel from "@/components/HeroReel";
import heroPoster from "@/assets/hero-reel-poster.jpg?as=picture";
import { capabilities, method } from "@/data/practice";
import { caseStudies } from "@/data/caseStudies";

const featuredSlugs = ["heavy-organizer", "hongmove", "khaoyai-country-club"];
const featuredCases = featuredSlugs.flatMap((slug) => {
  const item = caseStudies.find((work) => work.slug === slug);
  return item ? [item] : [];
});

const Index = () => (
  <div>
    <SEO
      title="ORIONS — Stories, refined. · Story-led creative company"
      description="ORIONS ช่วยแบรนด์ค้นหาแก่นของเรื่อง เชื่อมโยงสิ่งสำคัญ ขัดเกลาให้ชัด และถ่ายทอดผ่าน Brand, Campaign, Film และ Digital Experience"
      path="/"
      schema={{ "@context": "https://schema.org", "@type": "Organization", name: "ORIONS", url: "https://orions.agency", slogan: "Stories, refined.", description: "ORIONS is a story-led creative company helping brands uncover, connect, refine and express the stories that make them worth remembering." }}
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

    <section className="section-paper px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-28 md:py-44 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24">
        <SectionLabel label="The idea" />
        <div><Reveal emphasis="lead"><h2 className="h-display-lg max-w-[18ch]">Every brand has a story.</h2></Reveal><Reveal delay={0.1}><p lang="th" className="mt-8 max-w-[650px] font-thai thai-wrap text-[16px] md:text-[19px] leading-[1.8] text-foreground/80">เรื่องนั้นอาจอยู่ในจุดเริ่มต้น ผู้คน ผลิตภัณฑ์ หรือรายละเอียดที่แบรนด์ทำมาตลอด เราเข้าไปค้นหาว่าอะไรควรถูกมองเห็น อะไรควรเชื่อมเข้าด้วยกัน และเรื่องไหนควรถูกจดจำ</p><p className="mt-10 font-serif text-[27px] md:text-[36px] leading-[1.1]">We reveal the constellation.</p></Reveal></div>
      </div>
    </section>

    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"><div><SectionLabel label="Selected work" /><Reveal emphasis="lead"><h2 className="mt-8 h-display-lg">Stories made visible.</h2></Reveal></div><Link to="/work" className="cta-link"><span>View all work</span><ArrowUpRight className="w-4 h-4" /></Link></div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-5 lg:gap-x-8 gap-y-12">
          {featuredCases.map((item, i) => <Reveal key={item.slug} emphasis="quiet" className={i === 0 ? "md:col-span-2 lg:col-span-8" : i === 1 ? "lg:col-span-4" : "md:col-span-2 lg:col-span-12"}><Link to={`/work/${item.slug}`} className="group block">
            <div className={`film-frame bg-surface-2 ${i === 0 ? "aspect-[16/10]" : i === 1 ? "aspect-[4/5]" : "aspect-[21/9]"}`}><Picture data={item.cover} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><span className="absolute left-4 top-4 z-[3] font-mono text-[10px] tracking-[0.18em] text-white bg-black/50 px-2 py-1">0{i + 1} / 03</span></div>
            <div className="mt-5 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">{item.niche} · {item.year}</div>
            <h3 className="mt-2 font-display text-[23px] md:text-[27px]">{item.title}</h3>
            <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.75] text-foreground/80">{item.verdictShort}</p>
          </Link></Reveal>)}
        </div>
      </div>
    </section>

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36">
        <SectionLabel label="What we do" />
        <div className="mt-12 border-t border-foreground/15">
          {capabilities.map((item, i) => <Reveal key={item.name} emphasis="quiet"><div className="grid grid-cols-1 md:grid-cols-[70px_1fr_1fr] gap-4 md:gap-10 py-9 border-b border-foreground/15"><span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span><h2 className="h-display-md">{item.name}</h2><div><p className="font-body text-[21px]">{item.line}</p><p lang="th" className="mt-3 font-thai text-[15px] leading-[1.75] text-muted-foreground">{item.description}</p></div></div></Reveal>)}
        </div>
        <Link to="/practice" className="cta-link mt-10"><span>Explore what we do</span><ArrowUpRight className="w-4 h-4" /></Link>
      </div>
    </section>

    <section className="section-ink px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36">
        <SectionLabel label="The ORIONS method" />
        <Reveal emphasis="lead"><h2 className="mt-8 h-display-md max-w-[22ch]">From scattered points to a story worth remembering.</h2></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 border-t border-foreground/15">{method.map((step, i) => <div key={step.name} className="py-6 md:pr-5 border-b md:border-r border-foreground/15 last:border-r-0"><span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span><h3 className="mt-3 font-display text-[24px]">{step.name}</h3><p lang="th" className="mt-3 font-thai text-[14px] leading-[1.7] text-muted-foreground">{step.description}</p></div>)}</div>
      </div>
    </section>

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24">
        <SectionLabel label="Creative partnership" />
        <div><Reveal emphasis="lead"><h2 className="h-display-md max-w-[20ch]">An external creative team, built around your brand.</h2></Reveal><p lang="th" className="mt-8 max-w-[650px] font-thai text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">สำหรับแบรนด์ที่ต้องการความคิดและทิศทางสร้างสรรค์อย่างต่อเนื่อง โดยมีทีมที่เข้าใจเรื่องของแบรนด์และดูแลความสอดคล้องของงานในทุกจุดสัมผัส</p><Link to="/practice#creative-partnership" className="cta-link mt-9"><span>Explore the partnership</span><ArrowUpRight className="w-4 h-4" /></Link></div>
      </div>
    </section>

    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-24 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div><SectionLabel label="Point of view" /><h2 className="mt-7 h-display-md">Less noise.<br />More meaning.</h2><p lang="th" className="mt-6 max-w-[48ch] font-thai text-[15px] leading-[1.8] text-muted-foreground">ความคิดเกี่ยวกับแบรนด์ ความคิดสร้างสรรค์ วัฒนธรรม และรายละเอียดที่ควรค่าแก่การสังเกต</p><Link to="/thinking" className="cta-link mt-8"><span>Read our point of view</span><ArrowUpRight className="w-4 h-4" /></Link></div>
        <div><SectionLabel label="About ORIONS" /><h2 className="mt-7 h-display-md">Boutique by design.</h2><p lang="th" className="mt-6 max-w-[48ch] font-thai text-[15px] leading-[1.8] text-muted-foreground">เราเลือกทำงานกับโปรเจกต์จำนวนจำกัด เพื่อให้ทุกเรื่องได้รับเวลา ความเข้าใจ และความใส่ใจที่งานสร้างสรรค์ที่ดีต้องการ</p><Link to="/about" className="cta-link mt-8"><span>Meet ORIONS</span><ArrowUpRight className="w-4 h-4" /></Link></div>
      </div>
    </section>

    <CTABand eyebrow="Start a conversation" title={<>Have a story worth refining?</>} subtitle="เล่าเรื่องของแบรนด์ให้เราฟัง เราจะช่วยมองว่าสิ่งไหนควรถูกทำให้ชัด" primary={{ label: "Talk to ORIONS", to: "/contact" }} secondary={{ label: "Explore our work", to: "/work" }} tone="ink" />
  </div>
);

export default Index;
