import { Link } from "@tanstack/react-router";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import { archive } from "@/data/archive";

/** Twelve numbered pieces, each with a thumbnail from the studio's own work.
 *  No dates, no categories. */
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

    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-14 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-14">
        {archive.map((piece) => (
          <Link key={piece.slug} to="/archive/$slug" params={{ slug: piece.slug }} className="group block">
            <div className="film-frame aspect-[4/3] bg-surface-2">
              <Picture
                data={piece.image}
                alt={piece.credit}
                loading="lazy"
                style={{ objectPosition: piece.focus }}
                className="w-full h-full object-cover grayscale-[0.3] saturate-[0.85] transition-[transform,filter] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
            <span className="mt-5 block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">No. {piece.n}</span>
            <span className="mt-2 block font-display text-[21px] md:text-[23px] leading-[1.15] group-hover:opacity-80 transition-opacity">{piece.title}</span>
            <span lang="th" className="mt-3 block font-thai text-[14px] leading-[1.7] text-muted-foreground">{piece.dek}</span>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Archive;
