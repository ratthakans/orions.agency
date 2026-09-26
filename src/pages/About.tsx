import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import Picture from "@/components/Picture";
import founder from "@/assets/team/founder-portrait.jpg?as=picture";
import { caseStudies } from "@/data/caseStudies";
import { brand, pointOfView, principles } from "@/data/practice";

/** Read from the record rather than asserted, so the page cannot drift into a
 *  claim the work does not back. */
const fields = Array.from(new Set(caseStudies.map((item) => item.niche)));

const About = () => (
  <div>
    <SEO
      title="About ORIONS — One creative director. Every story."
      description="ORIONS คือ independent creative studio ในกรุงเทพฯ นำโดยรัฐกันต์ สุวรรณภักดี — งานทุกชิ้นผ่านสายตาเดียวกันตั้งแต่โจทย์จนถึงงานที่ส่งมอบ"
      path="/about"
    />

    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-24 md:pb-36">
        <SectionLabel label={`About · ${brand.descriptor}`} />
        <Reveal emphasis="lead">
          <h1 className="mt-9 h-display-lg max-w-[15ch]">One creative director. Every story.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-9 max-w-[720px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.8] text-foreground/85">
            งานสร้างสรรค์ที่ดีไม่ได้เกิดจากจำนวนคน แต่เกิดจากคนที่เห็นภาพทั้งหมดพร้อมกัน ตั้งแต่โจทย์ทางธุรกิจ เรื่องของแบรนด์ ไปจนถึงรายละเอียดของงานที่ส่งมอบ
          </p>
        </Reveal>
      </div>
    </section>

    {/* The founder led the old page's fourth section. On a founder-led practice
        that is the argument, so it runs second — right under the claim. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="From the founder" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
          <Picture
            data={founder}
            alt="Ratthakan Suwanphakdee — Founder & Creative Director, ORIONS"
            className="w-44 h-56 md:w-60 md:h-[19rem] object-cover object-top grayscale-[0.3] saturate-[0.85]"
          />
          <div>
            <Reveal emphasis="lead">
              <p lang="th" className="font-body text-[25px] md:text-[38px] leading-[1.4] max-w-[40ch]">
                งานของเราเริ่มจากการสังเกตอย่างจริงจัง แล้วค่อยขัดเกลาจนเรื่องที่สำคัญชัดขึ้น
              </p>
            </Reveal>
            <p lang="th" className="mt-8 font-thai text-[16px]">รัฐกันต์ สุวรรณภักดี</p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Founder &amp; Creative Director</p>
          </div>
        </div>
      </div>
    </section>

    {/* Point of view, as one line, with the principles that follow from it. */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
        <SectionLabel label="Point of view" />
        <div>
          <Reveal emphasis="lead">
            <h2 className="h-display-md">{pointOfView}</h2>
          </Reveal>
          <ul className="mt-12 border-t border-foreground/15">
            {principles.map((line) => (
              <li key={line} className="py-5 border-b border-foreground/15 font-body text-[18px] md:text-[21px]">{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Substance from the record, not from adjectives: the fields actually
        worked in, read out of the case studies. */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Across the record" />
        <Reveal emphasis="lead">
          <h2 className="mt-8 h-display-md max-w-[22ch]">Different fields. The same way of looking.</h2>
        </Reveal>
        <ul className="mt-12 pt-7 border-t border-foreground/15 flex flex-wrap gap-x-8 gap-y-3">
          {fields.map((field) => (
            <li key={field} className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
              {field}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          <Link to="/work" className="cta-link">
            <span>See the work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="cta-link cta-link-muted">
            <span>Talk to ORIONS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
