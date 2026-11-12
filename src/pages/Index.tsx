import { SITE_URL } from "@/lib/site";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import CTABand from "@/components/CTABand";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import HeroReel from "@/components/HeroReel";
import heroPoster from "@/assets/hero-reel-poster.jpg?as=picture";
import founderPortrait from "@/assets/team/founder-portrait.jpg?as=picture";
import audiQ8 from "@/assets/credits/audi-q8.jpg?as=picture";
import zolza from "@/assets/credits/zolza.jpg?as=picture";
import keyArtA from "@/assets/work/artdir/artdir-06.jpg?as=picture";
import keyArtB from "@/assets/work/artdir/artdir-17.jpg?as=picture";
import keyArtC from "@/assets/work/artdir/artdir-10.jpg?as=picture";
import campaignPhoto from "@/assets/work/photography/04.jpg?as=picture";
import type { PictureData } from "@/components/Picture";
import { approaches, brand, getApproach, services } from "@/data/practice";
import { caseStudies } from "@/data/caseStudies";

const featuredSlugs = ["heavy-organizer", "hongmove", "khaoyai-country-club"];
const featuredCases = featuredSlugs.flatMap((slug) => {
  const item = caseStudies.find((work) => work.slug === slug);
  return item ? [item] : [];
});

type Plate = { title: string; kind: string; image: PictureData };
const plateRows: Plate[][] = [
  [
    { title: "Key art", kind: "Art direction", image: keyArtA },
    { title: "Campaign", kind: "Photography", image: campaignPhoto },
    { title: "Audi Q8 TFSI e", kind: "Brand film", image: audiQ8 },
  ],
  [
    { title: "ZOLZA", kind: "Brand world", image: zolza },
    { title: "Key art", kind: "Art direction", image: keyArtB },
    { title: "Key art", kind: "Art direction", image: keyArtC },
  ],
];
const plates = plateRows.flat();

/** Home runs in the founder's order — concept, work, services, about — and
 *  closes on the promise. Each blueprint layer appears on exactly one page;
 *  what shows here is the one-line form, with the detail a click away. */
const Index = () => (
  <div>
    <SEO
      title="ORIONS — Stories, Refined. · Boutique Creative Studio"
      description="ORIONS คือ independent creative studio — ค้นหาว่าอะไรคือสิ่งที่สำคัญจริงของแบรนด์ ทำให้มันคมขึ้น และทำให้เรื่องนั้นมีชีวิตอยู่ในทุกสิ่งที่แบรนด์ทำ"
      path="/"
      schema={{ "@context": "https://schema.org", "@type": "Organization", name: "ORIONS", url: SITE_URL, slogan: "Stories, Refined.", description: "ORIONS is a boutique creative studio. We don't reinvent brands. We refine what makes them worth caring about." }}
    />

    {/* Concept, part one: the master idea and the belief under it. */}
    <section className="section-ink min-h-[90svh] px-6 md:px-10 flex items-center relative isolate overflow-hidden">
      <HeroReel still={heroPoster} />
      <div className="max-w-[1400px] mx-auto w-full pt-36 pb-16 md:pb-20 relative z-10">
        <div className="flex items-start justify-between gap-8">
          <Reveal><SectionLabel label={`ORIONS · ${brand.descriptor}`} /></Reveal>
          <span className="hidden md:block font-mono text-[11px] tracking-[0.22em] uppercase text-foreground/75">Founder-led · Bangkok</span>
        </div>
        <Reveal delay={0.08} emphasis="lead">
          <h1 className="mt-12 md:mt-16 hero-title">
            <span className="block whitespace-nowrap">Stories,</span>
            <span className="block whitespace-nowrap">Refined.</span>
          </h1>
        </Reveal>
        <div className="mt-12 md:mt-16 pt-7 border-t border-foreground/30 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20">
          <Reveal delay={0.18}>
            <p className="max-w-[560px] font-body text-[19px] md:text-[23px] leading-[1.45] text-foreground/90">{brand.belief.en}</p>
            {/* The Thai reader's first sentence is in Thai, not a section later. */}
            <p lang="th" className="mt-4 max-w-[560px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.75] text-foreground/75">
              {brand.belief.th}
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

    {/* The work leads: six frames picked for craft, before a word of method.
        One row height per row, each frame at its own ratio — a contact sheet. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-14 md:py-20">
        <div className="flex items-end justify-between gap-8">
          <SectionLabel label="Selected frames" />
          <Link to="/work" className="cta-link">
            <span>View all work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div aria-hidden className="sprocket-edge mt-10" />
        {plateRows.map((row, r) => (
          <div key={r} className="mt-2.5 md:mt-3 grid grid-cols-2 gap-2.5 md:flex md:gap-3">
            {row.map((plate) => {
              const ar = plate.image.img.w / plate.image.img.h;
              const n = plates.indexOf(plate) + 1;
              return (
                <Link
                  key={plate.title + n}
                  to="/work"
                  style={{ "--ar": ar } as React.CSSProperties}
                  className={`group relative block overflow-hidden border border-foreground/12 hover:border-foreground/40 transition-colors md:[flex:var(--ar)_1_0%] md:aspect-[var(--ar)] ${
                    ar > 1.3 ? "col-span-2 aspect-video" : "aspect-[4/5]"
                  }`}
                >
                  <Picture
                    data={plate.image}
                    alt={`${plate.title} — ${plate.kind}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                  <span aria-hidden className="frame-index absolute left-0 bottom-0 pointer-events-none">{String(n).padStart(3, "0")}</span>
                  <span className="absolute right-3 bottom-2.5 text-right font-mono text-[10px] tracking-[0.16em] uppercase text-white/90 pointer-events-none">
                    {plate.title} · {plate.kind}
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
        <div aria-hidden className="sprocket-edge mt-2.5 md:mt-3" />
      </div>
    </section>

    {/* About, as a face: on a founder-led studio the person is the claim. The
        heading holds the left column; the portrait and the line sit right. */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-24">
        <div>
          <SectionLabel label="About" />
          <Reveal emphasis="lead">
            <h2 className="mt-8 h-display-md max-w-[16ch]">Small by choice. One eye on every frame.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          <Picture
            data={founderPortrait}
            alt="Ratthakans — Founder & Creative Director, ORIONS"
            loading="lazy"
            className="w-36 h-44 md:w-44 md:h-56 object-cover object-top grayscale-[0.3] saturate-[0.85]"
          />
          <div>
            <p lang="th" className="max-w-[520px] font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
              งานสร้างสรรค์ที่ดีไม่ได้เกิดจากจำนวนคน แต่เกิดจากคนที่เห็นภาพทั้งหมดพร้อมกัน
            </p>
            <p lang="th" className="mt-6 font-thai text-[15px]">รัฐกันต์ สุวรรณภักดี</p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Founder &amp; Creative Director</p>
            <Link to="/about" className="cta-link mt-8">
              <span>About ORIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-16 md:py-24">
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
              <Link to="/work/$slug" params={{ slug: item.slug }} className="group block">
                <div className={`film-frame bg-surface-2 ${i === 0 ? "aspect-[16/10]" : i === 1 ? "aspect-[4/5]" : "aspect-[21/9]"}`}>
                  <Picture
                    data={item.cover}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 z-[3] font-mono text-[11px] tracking-[0.18em] uppercase text-white bg-black/50 px-2 py-1">
                    {getApproach(item.approach)?.name ?? item.approach}
                  </span>
                </div>
                <div className="mt-5 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{item.niche} · {item.year}</div>
                <h3 className="mt-2 font-display text-[23px] md:text-[27px]">{item.title}</h3>
                <p lang="th" className="mt-3 font-thai thai-wrap text-[14px] leading-[1.75] text-foreground/80">{item.verdictShort}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Services in one line each; the detail lives on /services. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1400px] mx-auto py-16 md:py-24">
        <div className="flex items-end justify-between gap-8">
          <SectionLabel label="Services" />
          <Link to="/services" className="cta-link">
            <span>All services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-12 border-t border-foreground/15">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services" hash={s.slug}
              className="group grid grid-cols-1 md:grid-cols-[70px_1fr_1fr_24px] items-baseline gap-3 md:gap-10 py-8 md:py-10 border-b border-foreground/15"
            >
              <span className="font-mono text-[11px] text-muted-foreground">{s.n}</span>
              <h3 className="h-display-md">{s.name}</h3>
              <p className="font-body text-[17px] md:text-[20px] text-foreground/80">{s.line}</p>
              <ArrowUpRight className="hidden md:block w-5 h-5 text-foreground/40 group-hover:text-foreground transition-colors" />
            </Link>
          ))}
        </div>
        {/* The approaches are what sets ORIONS apart, so they get one quiet line
            here — set apart from the services, never listed as a fourth. */}
        <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Signature approaches</span>
          {approaches.map((a) => (
            <Link key={a.slug} to="/services" hash={a.slug} className="cta-link">
              <span>{a.name} — {a.equals}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="The promise"
      title={<>{brand.promise.first} {brand.promise.then}</>}
      subtitle="เล่าเรื่องของแบรนด์ให้เราฟัง เราจะช่วยมองว่าสิ่งไหนควรถูกทำให้ชัด"
      primary={{ label: "Talk to ORIONS", to: "/contact" }}
      secondary={{ label: "Explore our work", to: "/work" }}
      tone="ink"
    />
  </div>
);

export default Index;
