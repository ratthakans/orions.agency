import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import BadgeChip from "@/components/ui/BadgeChip";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, acts } from "@/data/caseStudies";

const SITE_URL = "https://orions.agency";

/** A single portfolio card — full-colour cover, clear title, scope, one-line summary. */
const CaseCard = ({
  slug,
  title,
  cover,
  niche,
  scope,
  year,
  summary,
}: {
  slug: string;
  title: string;
  cover: string;
  niche: string;
  scope: string;
  year: string;
  summary: string;
}) => (
  <Link to={`/work/${slug}`} className="group block card-soft overflow-hidden">
    {/* Cover — full colour, subtle hover zoom + ดูเคส pill */}
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
      <img
        src={cover}
        alt={`${title} — ${scope}`}
        loading="lazy"
        className="w-full h-full object-cover scale-100 group-hover:scale-[1.05] transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      />
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] uppercase text-background bg-cinnabar px-2.5 py-1 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        ดูเคส <ArrowUpRight className="w-3 h-3" />
      </span>
    </div>

    {/* Caption */}
    <div className="p-6 md:p-7">
      <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
        <span>{niche}</span>
        <span className="num-display">{year}</span>
      </div>
      <h3
        lang="th"
        className="mt-3 font-serif text-[22px] md:text-[26px] tracking-[-0.01em] leading-[1.15] thai-wrap group-hover:text-cinnabar transition-colors duration-300"
      >
        {title}
      </h3>
      <div className="mt-1 font-mono text-[10px] tracking-[0.16em] uppercase text-foreground/60">
        {scope}
      </div>
      <p
        lang="th"
        className="mt-4 font-thai thai-wrap text-[14px] md:text-[15px] leading-[1.65] text-muted-foreground"
      >
        {summary}
      </p>
    </div>
  </Link>
);

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
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-16 md:pb-20">
        <Reveal>
          <BadgeChip>Selected Work · ØRIONS</BadgeChip>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch] thai-wrap">
            งานที่เลือกมาเพราะ <em className="text-cinnabar">เงื่อนไข.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            lang="th"
            className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] text-muted-foreground max-w-[680px] leading-[1.7]"
          >
            เลือกมาเพราะแต่ละชิ้นมีเงื่อนไขที่ทำให้วิธีคิดของเราเห็นชัด — ไม่ใช่เพราะงบใหญ่ที่สุด. กดที่เคสไหนก็ได้เพื่อดูเรื่องเต็ม.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 · CASE STUDIES — grouped by act, clean labeled sections */}
    {acts.map((act) => {
      const items = caseStudies.filter((c) => c.act === act.n);
      return (
        <section key={act.n} className="px-6 md:px-10 border-t border-foreground/15">
          <div className="max-w-[1280px] mx-auto py-20 md:py-28">
            <SectionLabel index={`Act ${act.n}`} label={`of 0${acts.length}`} />
            <Reveal delay={0.05}>
              <h2 lang="th" className="mt-6 h-display-sm max-w-[34ch] thai-wrap">
                {act.title}
              </h2>
            </Reveal>

            <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {items.map((w, i) => (
                <Reveal key={w.slug} delay={0.05 * i}>
                  <CaseCard
                    slug={w.slug}
                    title={w.title}
                    cover={w.cover}
                    niche={w.niche}
                    scope={w.scope}
                    year={w.year}
                    summary={w.summary}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );
    })}

    {/* Trusted-by removed — the client logo wall already lives on Home (no duplicate proof band) */}

    <ClosingCTA
      title={<>โจทย์ของคุณมี <em className="text-cinnabar">เงื่อนไข</em> แบบไหน?</>}
      description="ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit 1 นาที แล้วเรานัดคุยผลให้ — หรือทักมาคุยเลย."
      ctas={[
        { label: "ทำ Brand Audit", to: "/diagnostic" },
        { label: "เริ่มต้นบทสนทนา", to: "/contact", variant: "ghost" },
      ]}
    />
  </div>
);

export default Work;
