import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import BadgeChip from "@/components/ui/BadgeChip";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, acts } from "@/data/caseStudies";

const SITE_URL = "https://orions.agency";

const Work = () => (
  <div>
    <SEO
      title="Work — Selected Work · ØRIONS"
      description="เลือกมาเพราะแต่ละชิ้นมีเงื่อนไขที่ทำให้วิธีคิดของเราเห็นชัด — ไม่ใช่เพราะงบใหญ่ที่สุด."
      path="/work"
      schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
        ],
      }}
    />

    {/* 01 · HERO */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-16 md:pb-20">
        <BadgeChip>Selected Work · ØRIONS</BadgeChip>
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-10 h-display-lg max-w-[18ch] thai-wrap">
            งานที่เลือกมาเพราะ <em className="italic text-cinnabar">เงื่อนไข.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 font-serif italic text-[16px] md:text-[22px] text-muted-foreground max-w-[680px] leading-[1.5]">
            เลือกมาเพราะแต่ละชิ้นมีเงื่อนไขที่ทำให้วิธีคิดของเราเห็นชัด — ไม่ใช่เพราะงบใหญ่ที่สุด.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 · ACTS */}
    {acts.map((act, ai) => {
      const items = caseStudies.filter((c) => c.act === act.n);
      const ink = ai % 2 === 0;
      return (
        <section
          key={act.n}
          className={`${ink ? "section-ink" : ""} relative overflow-hidden px-6 md:px-10 border-t border-foreground/15`}
        >
          {/* Oversized act numeral watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 right-2 md:right-8 font-serif italic text-cinnabar/[0.07] leading-none select-none"
            style={{ fontSize: "clamp(140px, 24vw, 340px)" }}
          >
            {act.n}
          </div>
          <div className="relative max-w-[1280px] mx-auto py-20 md:py-28">
            <SectionLabel index={`Act ${act.n}`} label={`of 0${acts.length}`} />
            <Reveal delay={0.05}>
              <h2 lang="th" className="mt-10 h-display-md max-w-[24ch] thai-wrap">{act.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p lang="th" className="mt-6 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
                {act.lead}
              </p>
            </Reveal>

            <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
              {items.map((w, i) => (
                <Reveal key={w.slug} delay={0.05 * i}>
                  <Link to={`/work/${w.slug}`} className="group block">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-muted" style={{ aspectRatio: "16 / 10" }}>
                      <img
                        src={w.cover}
                        alt={`${w.title} — ${w.scope}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-background/95 mix-blend-difference">
                        <span>— {w.n}</span>
                        <span>{w.niche.toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="mt-5 flex items-baseline justify-between gap-4">
                      <h3 lang="th" className="font-serif text-[24px] md:text-[30px] tracking-[-0.01em]">
                        {w.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-cinnabar shrink-0 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                    <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                      {w.domain} · {w.scope}
                    </div>
                    <p lang="th" className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.7] text-foreground/75 max-w-[52ch]">
                      {w.constraint}
                    </p>
                    <p lang="th" className="mt-2 font-thai thai-wrap text-[13px] text-foreground/70 max-w-[52ch]">
                      {w.summary}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );
    })}

    {/* TRUSTED BY — real clients only */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionHeading
          lang="th"
          eyebrow="Trusted by"
          title={<>แบรนด์ที่มี <em className="italic text-cinnabar">เงื่อนไข</em> เลือกทำงานกับเรา.</>}
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 border-t border-foreground/15 pt-12">
          {["พรรคประชาธิปัตย์", "กองทัพอากาศ", "GCOO", "HONG MOVE", "เขาใหญ่ คันทรี่คลับ", "HEAVY ORGANIZER"].map((name) => (
            <div key={name} className="flex items-center">
              <span lang="th" className="font-serif italic text-[18px] md:text-[22px] tracking-[-0.01em] text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>โจทย์ของคุณมี <em className="italic text-cinnabar">เงื่อนไข</em> แบบไหน?</>}
      description="ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit 3 นาที แล้วเรานัดคุยผลให้ — หรือทักมาคุยเลย."
      ctas={[
        { label: "ทำ Brand Audit", to: "/diagnostic" },
        { label: "เริ่มต้นบทสนทนา", to: "/contact", variant: "ghost" },
      ]}
    />
  </div>
);

export default Work;
