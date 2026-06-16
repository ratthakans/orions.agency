import Reveal from "@/components/Reveal";
import ClosingCTA from "@/components/ClosingCTA";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import ImageBand from "@/components/ImageBand";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, moreSelected } from "@/data/caseStudies";

const SITE_URL = "https://orions.agency";
const bandCover = caseStudies.find((c) => c.slug === "hongmove")!.cover;

/** Deck-style project card — cover + number + name + one-liner + Challenge + live URL. */
const ProjectCard = ({
  n, title, cover, niche, summary, challenge, url,
}: {
  n: string; title: string; cover: string; niche: string; summary: string; challenge: string; url: string;
}) => (
  <div className="group flex flex-col h-full">
    <div className="relative w-full overflow-hidden rounded-2xl bg-surface-2" style={{ aspectRatio: "4 / 3" }}>
      <img
        src={cover}
        alt={`${title} — ${niche}`}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      />
    </div>

    <div className="mt-5 flex items-baseline gap-3">
      <span className="num-display text-cinnabar text-[18px] md:text-[20px] shrink-0">{n}</span>
      <h3 lang="th" className="font-serif text-[21px] md:text-[24px] tracking-[-0.01em] leading-[1.15] thai-wrap">{title}</h3>
    </div>
    <p lang="th" className="mt-2 font-thai thai-wrap text-[13.5px] leading-[1.6] text-muted-foreground">{summary}</p>

    <div className="mt-4 pt-4 border-t border-foreground/12">
      <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-cinnabar">— Challenge</div>
      <p lang="th" className="mt-1.5 font-thai thai-wrap text-[13px] leading-[1.55] text-foreground/75">{challenge}</p>
    </div>

    <div className="mt-auto pt-5">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-foreground/70 hover:text-cinnabar transition-colors"
        >
          {url.replace(/^https?:\/\//, "")} <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      ) : (
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-foreground/35">ไม่เปิดเผยต่อสาธารณะ</span>
      )}
    </div>
  </div>
);

const Work = () => (
  <div>
    <SEO
      title="Work — Selected Work · ØRIONS"
      description="ผลงานจริงที่เลือกมาเพราะแต่ละชิ้นมีเงื่อนไขที่ทำให้วิธีคิดของเราเห็นชัด — ไม่ใช่เพราะงบใหญ่ที่สุด."
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
        <SectionLabel label="Selected Work" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-8 h-display-lg max-w-[18ch] thai-wrap">
            งานที่เลือกมาเพราะ <em className="text-cinnabar">เงื่อนไข.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 font-thai thai-wrap text-[15px] md:text-[17px] text-muted-foreground max-w-[680px] leading-[1.7]">
            เลือกมาเพราะแต่ละชิ้นมีเงื่อนไขที่ทำให้วิธีคิดของเราเห็นชัด — ไม่ใช่เพราะงบใหญ่ที่สุด. กด "ดูเว็บจริง" เพื่อไปดูงานที่ส่งมอบจริงของแต่ละโปรเจกต์.
          </p>
        </Reveal>
      </div>
    </section>

    <ImageBand image={bandCover}>
      เลือกเพราะ <em className="text-cinnabar">เงื่อนไข</em> ไม่ใช่งบ<span className="text-cinnabar">.</span>
    </ImageBand>

    {/* 02 · SELECTED PROJECTS — numbered grid (1–8) */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="01" label="Hero projects" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-6 h-display-sm max-w-[28ch] thai-wrap">
            แปดงานที่นิยามวิธีคิดของเรา<span className="text-cinnabar">.</span>
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-14">
          {caseStudies.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 4) * 0.05}>
              <ProjectCard
                n={w.n}
                title={w.title}
                cover={w.cover}
                niche={w.niche}
                summary={w.summary}
                challenge={w.challenge}
                url={w.url}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 · MORE SELECTED PROJECTS — categorised editorial index */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="More selected projects" />
        <Reveal delay={0.05}>
          <h2 lang="th" className="mt-6 h-display-sm max-w-[28ch] thai-wrap">
            และอีกหลายงาน <em className="text-cinnabar">ที่เราภูมิใจ.</em>
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-foreground/15">
          {moreSelected.map((g, i) => (
            <Reveal key={g.category} delay={(i % 6) * 0.04}>
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-12 py-6 md:py-7 border-b border-foreground/15">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cinnabar">{g.category}</div>
                <div lang="th" className="font-thai thai-wrap text-[15px] md:text-[16px] leading-[1.7] text-foreground/85">
                  {g.items.join("  ·  ")}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ClosingCTA
      title={<>โจทย์ของคุณมี <em className="text-cinnabar">เงื่อนไข</em> แบบไหน?</>}
      description="คุยฟรี 45 นาที ไม่มีข้อผูกมัด — เล่าโจทย์และเงื่อนไขมา เราช่วยมองว่าจะ refine มันยังไง."
      ctas={[
        { label: "เริ่มต้นบทสนทนา", to: "/contact" },
        { label: "ดูแพ็กเกจ", to: "/package", variant: "ghost" },
      ]}
    />
  </div>
);

export default Work;
