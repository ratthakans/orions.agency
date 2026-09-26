import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import Picture from "@/components/Picture";
import founder from "@/assets/team/founder.jpg?as=picture";

const beliefs = [
  { name: "Stories already exist.", description: "เรื่องที่มีคุณค่ามักอยู่ในแบรนด์อยู่แล้ว เพียงยังไม่ถูกมองเห็นหรือเล่าอย่างชัดเจน" },
  { name: "Meaning comes from connection.", description: "ความหมายเกิดขึ้นเมื่อเราเห็นความสัมพันธ์ระหว่างผู้คน ผลิตภัณฑ์ วัฒนธรรม และธุรกิจ" },
  { name: "Great work comes from refinement.", description: "เราตัดสิ่งที่ไม่จำเป็นออก เพื่อให้สิ่งสำคัญมีพื้นที่และน้ำหนักมากพอ" },
];

const About = () => (
  <div>
    <SEO title="About ORIONS — Boutique by design." description="ORIONS คือ story-led creative company ในกรุงเทพฯ เราค้นหา เชื่อม ขัดเกลา และถ่ายทอดเรื่องของแบรนด์ผ่านงานสร้างสรรค์ที่มีความหมาย" path="/about" />
    <section className="section-ink px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-36 pb-24 md:pb-36">
        <SectionLabel label="About ORIONS" />
        <Reveal emphasis="lead"><h1 className="mt-9 h-display-lg max-w-[17ch]">Boutique by design.</h1></Reveal>
        <Reveal delay={0.1}><p lang="th" className="mt-9 max-w-[720px] font-thai thai-wrap text-[17px] md:text-[20px] leading-[1.8] text-foreground/85">ORIONS คือบริษัทครีเอทีฟที่เริ่มจากเรื่องของแบรนด์ เราเลือกทำงานกับโปรเจกต์จำนวนจำกัด เพื่อให้ทุกเรื่องได้รับเวลา ความเข้าใจ และความใส่ใจในรายละเอียดที่ควรได้รับ</p></Reveal>
      </div>
    </section>
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
        <SectionLabel label="What we believe" />
        <div><Reveal emphasis="lead"><h2 className="h-display-md max-w-[20ch]">We don't invent stories. We reveal them.</h2></Reveal><p lang="th" className="mt-8 font-thai text-[16px] md:text-[18px] leading-[1.85] text-foreground/80">แบรนด์ประกอบด้วยเรื่องราว ผู้คน ความเชื่อ ประสบการณ์ และการตัดสินใจมากมาย เราช่วยมองว่าอะไรคือสิ่งสำคัญ เชื่อมสิ่งเหล่านั้นเข้าด้วยกัน และถ่ายทอดให้คนเข้าใจว่ามันหมายถึงอะไร</p></div>
      </div>
    </section>
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="Our principles" />
        <div className="mt-12 border-t border-foreground/15">{beliefs.map((belief, i) => <Reveal key={belief.name} emphasis="quiet"><div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-10 py-9 md:py-12 border-b border-foreground/15"><span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span><h3 className="font-display text-[27px] md:text-[34px] leading-[1.15]">{belief.name}</h3><p lang="th" className="font-thai text-[15px] md:text-[17px] leading-[1.8] text-muted-foreground">{belief.description}</p></div></Reveal>)}</div>
      </div>
    </section>
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-24 md:py-36">
        <SectionLabel label="From the founder" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
          <Picture data={founder} alt="Ratthakan Suwanphakdee — Founder & Creative Director, ORIONS" className="w-44 h-56 md:w-60 md:h-[19rem] object-cover object-top" />
          <div><Reveal emphasis="lead"><p lang="th" className="font-body text-[25px] md:text-[38px] leading-[1.4] max-w-[40ch]">งานของเราเริ่มจากการสังเกตอย่างจริงจัง แล้วค่อยขัดเกลาจนเรื่องที่สำคัญชัดขึ้น</p></Reveal><p lang="th" className="mt-8 font-thai text-[16px]">รัฐกันต์ สุวรรณภักดี</p><p className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Founder & Creative Director</p></div>
        </div>
        {/* About had no path to the offer at all — a visitor who read this far
            could reach the point of view but not what we actually do. */}
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          <Link to="/practice" className="cta-link">
            <span>See the three movements</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/thinking" className="cta-link cta-link-muted">
            <span>Read our point of view</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
    <CTABand eyebrow="About ORIONS" title={<>Great creative work requires attention.</>} subtitle="มีเรื่องของแบรนด์ที่อยากทำให้ชัดขึ้น? เริ่มต้นบทสนทนากับเรา" primary={{ label: "Talk to ORIONS", to: "/contact" }} secondary={{ label: "Explore our work", to: "/work" }} tone="snow" />
  </div>
);

export default About;
