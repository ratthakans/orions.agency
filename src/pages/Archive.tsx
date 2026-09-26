import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { archive } from "@/data/archive";

/** One numbered list — no cover images, no dates, no categories. */
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
      <div className="max-w-[1280px] mx-auto py-14 md:py-20">
        <div className="border-t border-foreground/15">
          {archive.map((piece) => (
            <Link
              key={piece.slug}
              to={`/archive/${piece.slug}`}
              className="group grid grid-cols-[44px_1fr_20px] md:grid-cols-[80px_1fr_1fr_24px] items-baseline gap-4 md:gap-10 py-7 border-b border-foreground/15"
            >
              <span className="font-mono text-[11px] text-muted-foreground">{piece.n}</span>
              <span className="font-display text-[21px] md:text-[25px] leading-[1.15] group-hover:opacity-80 transition-opacity">{piece.title}</span>
              <span lang="th" className="col-start-2 md:col-start-auto font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground">{piece.dek}</span>
              <ArrowUpRight className="hidden md:block w-4 h-4 text-foreground/40 group-hover:text-foreground transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Archive;
