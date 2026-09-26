import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import Picture from "@/components/Picture";
import founder from "@/assets/team/founder-portrait.jpg?as=picture";
import { caseStudies } from "@/data/caseStudies";
import { movements } from "@/data/practice";

/** Read from the record rather than asserted, so the page cannot drift into a
 *  claim the work does not back. */
const fields = Array.from(new Set(caseStudies.map((item) => item.niche)));

const About = () => (
  <div>
    <SEO
      title="About ORIONS — One creative director. Every story."
      description="ORIONS คือ story-led creative company ในกรุงเทพฯ นำโดยรัฐกันต์ สุวรรณภักดี — งานทุกชิ้นผ่านสายตาเดียวกันตั้งแต่โจทย์จนถึงงานที่ส่งมอบ"
      path="/about"
    />

    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-24 md:pb-36">
        <SectionLabel label="About ORIONS" />
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

    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
        <SectionLabel label="What that means" />
        <div>
          <Reveal emphasis="lead">
            <h2 className="h-display-md max-w-[20ch]">We don't invent stories. We reveal them.</h2>
          </Reveal>
          <p lang="th" className="mt-8 font-thai thai-wrap text-[16px] md:text-[18px] leading-[1.85] text-foreground/80">
            แบรนด์ประกอบด้วยเรื่องราว ผู้คน ความเชื่อ ประสบการณ์ และการตัดสินใจมากมาย เราช่วยมองว่าอะไรคือสิ่งสำคัญ เชื่อมสิ่งเหล่านั้นเข้าด้วยกัน และถ่ายทอดให้คนเข้าใจว่ามันหมายถึงอะไร
          </p>
        </div>
      </div>
    </section>

    {/* Substance from the record, not from adjectives: the fields worked in and
        the three moves, both read out of the data files. */}
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
          {movements.map((m, i) => (
            <Link
              key={m.slug}
              to={`/practice#${m.slug}`}
              className="group py-8 md:pr-8 border-b md:border-r border-foreground/15 last:border-r-0"
            >
              <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-4 font-display text-[26px] group-hover:opacity-80 transition-opacity">{m.name}</h3>
              <p lang="th" className="mt-3 font-thai text-[14px] leading-[1.7] text-muted-foreground">
                {caseStudies.filter((c) => c.movement === m.slug).length} เคสในบันทึก · {m.record}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          <Link to="/work" className="cta-link">
            <span>See the work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/thinking" className="cta-link cta-link-muted">
            <span>Read our point of view</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    <CTABand
      eyebrow="About ORIONS"
      title={<>Great creative work requires attention.</>}
      subtitle="มีเรื่องของแบรนด์ที่อยากทำให้ชัดขึ้น? เริ่มต้นบทสนทนากับเรา"
      primary={{ label: "Talk to ORIONS", to: "/contact" }}
      secondary={{ label: "Explore our work", to: "/work" }}
      tone="snow"
    />
  </div>
);

export default About;
