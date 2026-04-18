import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const About = () => (
  <div>
    <SEO title="About — ØRIONS" description="Idea-led Creative Agency. We bridge thinking and doing — so direction becomes work that actually moves." path="/about" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="WHO WE ARE"
      title="Idea-led. Outcome-driven."
      subtitle="ØRIONS คือ Creative Agency สำหรับธุรกิจที่ไม่อยากติดอยู่ใน social vicious cycle เราเชื่อว่าไอเดียที่ชัดทำให้ธุรกิจไม่หายไปกับ noise"
    />

    {/* MANIFESTO */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-surface border-y border-foreground">
      <SectionHeader left="02 — MANIFESTO" />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-[80px] md:text-[120px] leading-[0.85]">"</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <p className="font-thai text-[22px] md:text-[34px] leading-[1.45] max-w-[860px]">
              ไอเดียที่ชัด<br />
              คอนเทนต์ที่มีคุณภาพ<br />
              การสื่อสารที่มีกลยุทธ์<br />
              — ไม่ใช่ทางเลือก <span className="font-bold">แต่คือทางรอด</span>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center gap-4">
              <div className="hairline w-12" />
              <p className="index-badge font-medium">— ØRIONS, 2024</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* PRINCIPLES */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="03 — PRINCIPLES" right="three rules we live by" />
      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.03em] max-w-[860px]">
            We don't add to the noise.<br />We cut through it.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {[
          { n: "01", t: "Practical", b: "เราชอบงานสวย แต่เราเลือกงานที่ใช้ได้จริงก่อนเสมอ — strategy ต้อง execute ได้" },
          { n: "02", t: "Sharp", b: "งานปลอดภัยคืองานที่ถูกมองข้าม เราเลือกความคมที่มีเหตุผล" },
          { n: "03", t: "Done", b: "เราไม่ส่งมอบ paper strategy เราพาไอเดียไปสู่ผลลัพธ์ที่จับต้องได้จริง" },
        ].map((p, i) => (
          <Reveal key={p.n} delay={i * 0.1}>
            <div className="bg-background p-8 md:p-10 h-full">
              <div className="font-display text-[60px] md:text-[80px] leading-[0.85]">{p.n}</div>
              <h3 className="mt-8 font-display text-[24px] md:text-[28px]">{p.t}</h3>
              <p className="mt-4 text-[14px] leading-[1.7] text-muted-foreground font-thai">{p.b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* WHY AGENCY */}
    <section className="px-6 md:px-10 py-20 md:py-28 bg-surface border-y border-foreground">
      <SectionHeader left="04 — WHY AGENCY" right="not consultant. not studio." />
      <div className="mt-12 max-w-[700px]">
        <Reveal>
          <p className="text-[16px] md:text-[18px] leading-[1.7] font-thai">
            ทำไมบางโจทย์ต้องใช้ <span className="font-display normal-case font-bold">agency</span> ไม่ใช่แค่ consultant หรือ studio
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {[
          { t: "CONSULTANT", s: "คิดเก่ง", b: "แต่มักจบที่ slide", us: false },
          { t: "STUDIO", s: "ช่วยทำได้", b: "แต่ไม่ได้เริ่มจากปัญหาธุรกิจที่ลึกพอทุกครั้ง", us: false },
          { t: "AGENCY", s: "ทั้งคิดและทำในทีมเดียว", b: "เพื่อให้ direction กลายเป็นงานที่ใช้ได้จริง", us: true },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className={`p-8 md:p-10 h-full ${c.us ? "bg-foreground text-background" : "bg-background"}`}>
              <div className={`index-badge ${c.us ? "opacity-70" : "text-muted-foreground"}`}>
                {c.us ? "ØRIONS" : "VS"}
              </div>
              <h3 className="mt-6 font-display text-[26px] md:text-[32px]">{c.t}</h3>
              <div className={`mt-3 font-display text-[16px] font-thai font-medium ${c.us ? "" : "text-muted-foreground"}`}>{c.s}</div>
              <p className={`mt-4 text-[14px] leading-[1.7] font-thai ${c.us ? "opacity-80" : "text-muted-foreground"}`}>{c.b}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <p className="mt-12 max-w-[700px] text-[15px] md:text-[17px] leading-[1.7] font-thai">
          ไม่ใช่แค่คนที่คิดเป็น ไม่ใช่แค่คนที่ทำเป็น <span className="font-display normal-case font-bold">แต่คือคนที่ทำให้งานขยับได้จริง</span>
        </p>
      </Reveal>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="05 — NEXT CHAPTER" />
      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[64px] leading-[0.95] tracking-[-0.03em] max-w-[860px]">
            Let's build the<br />next chapter together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-90 transition-opacity">
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
