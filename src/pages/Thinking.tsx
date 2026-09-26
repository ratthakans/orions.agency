import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import { movements } from "@/data/practice";

const ideas = [
  { n: "01", title: "Stories already exist.", body: "บางครั้งแบรนด์ไม่ต้องการเรื่องใหม่ สิ่งที่มีคุณค่าที่สุดมีอยู่แล้วในผู้คน ผลิตภัณฑ์ และวิธีที่แบรนด์ทำงาน เพียงยังไม่ถูกมองเห็นชัดพอ" },
  { n: "02", title: "Meaning comes from connection.", body: "เรื่องหนึ่งเรื่องไม่ได้เกิดจากจุดเดียว เรามองความสัมพันธ์ระหว่างธุรกิจ ผู้คน วัฒนธรรม คำ และภาพ เพื่อพบความหมายที่แต่ละส่วนให้ไม่ได้เพียงลำพัง" },
  { n: "03", title: "Refinement gives ideas strength.", body: "ความคิดที่ดีขึ้นไม่ได้เกิดจากการเติมเสมอไป การตัดสิ่งรบกวนออกช่วยให้ข้อความ ภาพ และประสบการณ์พูดเรื่องเดียวกัน" },
];

const Thinking = () => (
  <div>
    <SEO title="Point of View — Less noise. More meaning. · ORIONS" description="มุมมองของ ORIONS ต่อเรื่องของแบรนด์ ความเชื่อมโยง และการขัดเกลางานสร้างสรรค์ให้ชัดและมีความหมาย" path="/thinking" />
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-24 md:pb-36">
        <SectionLabel label="Point of view" />
        <Reveal emphasis="lead"><h1 className="mt-9 h-display-lg max-w-[18ch]">Less noise.<br />More meaning.</h1></Reveal>
        <Reveal delay={0.1}><p lang="th" className="mt-9 max-w-[700px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.8] text-foreground/85">โลกมีเนื้อหาอยู่มากแล้ว สิ่งที่แบรนด์ต้องการคือความชัดเจนว่าอะไรควรถูกพูด อะไรควรถูกเชื่อม และอะไรควรถูกจดจำ</p></Reveal>
      </div>
    </section>
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Three beliefs" />
        <div className="mt-12 border-t border-foreground/15">
          {ideas.map((idea) => <Reveal key={idea.n} emphasis="quiet"><article className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-10 py-10 md:py-16 border-b border-foreground/15"><span className="font-mono text-[11px] text-muted-foreground">{idea.n}</span><h2 className="font-display text-[30px] md:text-[43px] leading-[1.1]">{idea.title}</h2><p lang="th" className="font-thai text-[16px] md:text-[18px] leading-[1.85] text-foreground/80">{idea.body}</p></article></Reveal>)}
        </div>
      </div>
    </section>
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
        <SectionLabel label="In practice" />
        <div>
          <Reveal emphasis="lead">
            <h2 className="h-display-md max-w-[20ch]">Where a story goes next.</h2>
          </Reveal>
          <p lang="th" className="mt-8 font-thai text-[16px] md:text-[18px] leading-[1.8] text-foreground/80">
            เมื่อเรื่องชัดแล้ว คำถามต่อไปคือมันควรเดินไปทางไหน — ไปข้างหน้าเพื่อสร้างพื้นที่ใหม่ มองจากมุมใหม่เพื่อให้มีความหมายกับคนอีกกลุ่ม หรือลงลึกเข้าไปข้างในเพื่อให้ทุกจุดสัมผัสยังเป็นแบรนด์เดียวกัน
          </p>
          <div className="mt-10 border-t border-foreground/15">
            {movements.map((m) => (
              <Link
                key={m.slug}
                to={`/practice#${m.slug}`}
                className="group flex items-baseline gap-5 md:gap-8 py-5 border-b border-foreground/15"
              >
                <span className="font-display text-[21px] md:text-[25px] shrink-0">{m.name}</span>
                <span lang="th" className="font-thai text-[14px] md:text-[15px] leading-[1.7] text-muted-foreground group-hover:text-foreground/85 transition-colors">
                  {m.question}
                </span>
              </Link>
            ))}
          </div>
          <Link to="/practice" className="cta-link mt-9">
            <span>Explore what we do</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36"><SectionLabel label="ORIONS notes" /><h2 className="mt-8 h-display-md">Things worth noticing.</h2><p lang="th" className="mt-6 max-w-[620px] font-thai text-[16px] leading-[1.8] text-muted-foreground">บันทึกเรื่องแบรนด์ ความคิดสร้างสรรค์ วัฒนธรรม และรายละเอียดเบื้องหลังงาน</p><Link to="/blog" className="cta-link mt-8"><span>Read the notes</span><ArrowUpRight className="w-4 h-4" /></Link></div>
    </section>
    <CTABand eyebrow="Point of view" title={<>Not louder. Not busier. More intentional.</>} subtitle="เรื่องของแบรนด์คุณมีอะไรที่ควรถูกมองเห็นชัดขึ้น?" primary={{ label: "Talk to ORIONS", to: "/contact" }} secondary={{ label: "Explore our work", to: "/work" }} tone="snow" />
  </div>
);

export default Thinking;
