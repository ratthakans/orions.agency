import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { archive, archiveThemes } from "@/data/archive";

/** A typographic index, not a feed: no cover images (the design system bans
 *  stock imagery), no dates (the pieces are numbered), grouped by the layer of
 *  the blueprint each one belongs to. */
const Archive = () => (
  <div>
    <SEO
      title="Archive — Notes on Stories, Refined. · ORIONS"
      description="บันทึกสั้น ๆ จาก ORIONS ว่าด้วยมุมมอง แนวคิดของแบรนด์ วิธีทำงาน และ signature approaches"
      path="/archive"
    />

    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-16 md:pb-24">
        <SectionLabel label="Archive" />
        <Reveal emphasis="lead">
          <h1 className="mt-9 h-display-lg max-w-[16ch]">Notes on stories, refined.</h1>
        </Reveal>
      </div>
    </section>

    {archiveThemes.map((theme) => (
      <section key={theme} className="px-6 md:px-10 border-t border-foreground/15">
        <div className="max-w-[1280px] mx-auto py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-24">
          <SectionLabel label={theme} />
          <div className="border-t border-foreground/15">
            {archive
              .filter((piece) => piece.theme === theme)
              .map((piece) => (
                <Link
                  key={piece.slug}
                  to={`/archive/${piece.slug}`}
                  className="group grid grid-cols-[44px_1fr_20px] items-baseline gap-4 py-6 border-b border-foreground/15"
                >
                  <span className="font-mono text-[11px] text-muted-foreground">{piece.n}</span>
                  <span>
                    <span className="block font-display text-[21px] md:text-[25px] leading-[1.15] group-hover:opacity-80 transition-opacity">{piece.title}</span>
                    <span lang="th" className="mt-2 block font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{piece.dek}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Archive;
