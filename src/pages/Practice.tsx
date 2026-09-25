import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import { capabilities, engagements, method } from "@/data/practice";

const Practice = () => (
  <div>
    <SEO title="What We Do — Story, Direction, Expression · ORIONS" description="ORIONS ช่วยแบรนด์ค้นหาเรื่องที่ควรถูกเล่า กำหนดทิศทางสร้างสรรค์ และถ่ายทอดผ่าน Brand, Campaign, Film และ Digital Experience" path="/practice" />
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-24 md:pb-36">
        <SectionLabel label="What we do" />
        <Reveal emphasis="lead"><h1 className="mt-9 h-display-lg max-w-[16ch]">Meaning before medium.</h1></Reveal>
        <Reveal delay={0.1}><p lang="th" className="mt-9 max-w-[660px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.8] text-foreground/85">เราเริ่มจากการทำความเข้าใจว่าแบรนด์มีเรื่องอะไรที่ควรถูกมองเห็น แล้วจึงเลือกวิธีถ่ายทอดที่เหมาะกับเรื่องนั้นจริง ๆ</p></Reveal>
      </div>
    </section>
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="The architecture" />
        <div className="mt-12 border-t border-foreground/15">
          {capabilities.map((item, i) => <Reveal key={item.name} emphasis="quiet"><article className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-10 py-9 md:py-12 border-b border-foreground/15">
            <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">0{i + 1}</span>
            <div><h2 className="h-display-md">{item.name}</h2><p className="mt-3 font-body text-[19px] md:text-[23px]">{item.line}</p></div>
            <div className="md:pt-2"><p lang="th" className="font-thai text-[15px] md:text-[17px] leading-[1.8]">{item.description}</p><p className="mt-5 font-mono text-[11px] leading-[1.9] text-muted-foreground">{item.examples}</p></div>
          </article></Reveal>)}
        </div>
      </div>
    </section>
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Ways to work together" />
        <Reveal emphasis="lead"><h2 className="mt-8 h-display-lg max-w-[18ch]">Start with the question that matters.</h2></Reveal>
        <p lang="th" className="mt-7 max-w-[650px] font-thai text-[16px] leading-[1.8] text-muted-foreground">แต่ละงานมีจุดเริ่มต่างกัน เราจึงกำหนดขอบเขตจากโจทย์ เป้าหมาย และสิ่งที่แบรนด์ต้องการให้เปลี่ยน</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-foreground/15">
          {engagements.map((item, i) => <Reveal key={item.slug} emphasis="quiet"><article id={item.slug} className="py-9 md:py-12 border-b border-foreground/15 scroll-mt-24">
            <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">0{i + 1} / {item.phases}</span>
            <h3 className="mt-5 font-display text-[30px] md:text-[38px] leading-[1.1]">{item.name}</h3>
            <p className="mt-3 font-body text-[18px] md:text-[21px]">{item.line}</p>
            <p lang="th" className="mt-6 font-thai text-[14px] md:text-[16px] leading-[1.8] text-muted-foreground">เหมาะกับ: {item.fit}</p>
            <p lang="th" className="mt-2 font-thai text-[14px] md:text-[16px] leading-[1.8]">สิ่งที่ต้องการให้เกิดขึ้น: {item.outcome}</p>
            <Link to={`/contact?pkg=${encodeURIComponent(item.name)}`} className="cta-link mt-7"><span>คุยเรื่อง {item.name}</span><ArrowUpRight className="w-4 h-4" /></Link>
          </article></Reveal>)}
        </div>
      </div>
    </section>
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="The ORIONS method" />
        <Reveal emphasis="lead"><h2 className="mt-8 h-display-md max-w-[20ch]">From scattered points to a story worth remembering.</h2></Reveal>
        <div className="mt-12 border-t border-foreground/15 grid grid-cols-1 md:grid-cols-5">
          {method.map((step, i) => <div key={step.name} className="py-7 md:pr-6 border-b md:border-r border-foreground/15 last:border-r-0"><span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span><h3 className="mt-4 font-display text-[25px]">{step.name}</h3><p lang="th" className="mt-3 font-thai text-[14px] leading-[1.75] text-muted-foreground">{step.description}</p></div>)}
        </div>
      </div>
    </section>
    <CTABand eyebrow="Start a conversation" title={<>Have a story worth refining?</>} subtitle="เล่าโจทย์ของแบรนด์ให้เราฟัง แล้วเราจะช่วยมองว่าควรเริ่มตรงไหน" primary={{ label: "Talk to ORIONS", to: "/contact" }} secondary={{ label: "ดูผลงาน", to: "/work" }} tone="ink" />
  </div>
);

export default Practice;
