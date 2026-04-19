import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const About = () => (
  <div>
    <SEO title="About — ØRIONS" description="Applied Creative Agency from Bangkok. We bridge the gap between good ideas and measurable impact." path="/about" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="WHO WE ARE"
      title="Applied Creative Agency."
      subtitle="ØRIONS คือ Applied Creative Agency จากกรุงเทพ — เราเชื่อมช่องว่างระหว่าง 'ไอเดียที่ดูดี' กับ 'ผลลัพธ์ที่วัดผลได้' เพื่อเปลี่ยนงบประมาณที่สูญเปล่าให้เป็น Impact ที่แท้จริงของธุรกิจ"
    />

    {/* MANIFESTO */}
    <section className="px-6 md:px-10 py-20 md:py-28 border-y border-foreground">
      <SectionHeader left="02 — MANIFESTO" right="practical. bold. done." />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-[80px] md:text-[120px] leading-[0.85]">"</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <p className="font-thai text-[24px] md:text-[36px] leading-[1.4] max-w-[860px]">
              เราไม่ได้มาขอโอกาส <span className="font-display normal-case font-medium">แต่มาเพื่อชี้จุดตาย และหาทางรอดให้ธุรกิจของคุณ</span>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center gap-4">
              <div className="hairline w-12" />
              <p className="index-badge font-medium">— ØRIONS, BANGKOK</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* THE PROBLEM WE SOLVE */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="03 — THE PROBLEM" right="why applied matters" />
      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.03em] max-w-[860px]">
            Good ideas are cheap.<br />Applied ideas move business.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[700px] text-[16px] md:text-[18px] leading-[1.7] font-thai text-muted-foreground">
            หลายธุรกิจติดอยู่ในวงจรที่จ่ายแพงขึ้น แต่ได้ผลลัพธ์เท่าเดิม เพราะ 'ไอเดียที่ดูดี' ไม่เคยถูกแปลงเป็นระบบที่ทำงานได้จริง
          </p>
        </Reveal>
      </div>
    </section>

    {/* PRINCIPLES */}
    <section className="px-6 md:px-10 py-20 md:py-28 border-y border-foreground">
      <SectionHeader left="04 — PRINCIPLES" right="three rules we live by" />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {[
          { n: "01", t: "Practical", b: "เราชอบงานสวย แต่เราเลือกงานที่ใช้ได้จริงก่อนเสมอ — ไอเดียต้อง execute ได้" },
          { n: "02", t: "Bold", b: "งานปลอดภัยคืองานที่ถูกมองข้าม เราเลือกความคมที่มีเหตุผลและ data รองรับ" },
          { n: "03", t: "Done", b: "เราไม่ส่งมอบ paper strategy เราพาไอเดียไปสู่ผลลัพธ์ทางธุรกิจที่วัดผลได้จริง" },
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

    {/* WHY APPLIED */}
    <section className="px-6 md:px-10 py-20 md:py-28">
      <SectionHeader left="05 — WHY APPLIED" right="not consultant. not studio." />
      <div className="mt-12 max-w-[700px]">
        <Reveal>
          <p className="text-[16px] md:text-[18px] leading-[1.7] font-thai">
            ทำไมบางโจทย์ต้องใช้ <span className="font-display normal-case font-bold">Applied Creative Agency</span> ไม่ใช่แค่ consultant หรือ studio
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground border border-foreground">
        {[
          { t: "CONSULTANT", s: "ช่วยคิดได้", b: "แต่ไม่ได้พาไอเดียไปสู่ execution ที่วัดผลได้", us: false },
          { t: "STUDIO", s: "ช่วยทำได้", b: "แต่ไม่ได้เริ่มจากปัญหาธุรกิจที่ลึกพอทุกครั้ง", us: false },
          { t: "APPLIED AGENCY", s: "เชื่อมการคิดเข้ากับการทำ", b: "เพื่อให้ direction กลายเป็น Impact ที่แท้จริงของธุรกิจ", us: true },
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
          ไม่ใช่แค่คนที่คิดเป็น ไม่ใช่แค่คนที่ทำเป็น <span className="font-display normal-case font-bold">แต่คือคนที่ทำให้ธุรกิจขยับได้จริง</span>
        </p>
      </Reveal>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-10 py-20 md:py-28 border-t border-foreground">
      <SectionHeader left="06 — NEXT CHAPTER" />
      <div className="mt-12">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[64px] leading-[0.95] tracking-[-0.03em] max-w-[860px]">
            Stop guessing.<br />Start applying.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 index-badge text-muted-foreground">PRACTICAL · BOLD · DONE</p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link to="/contact#audit" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-90 transition-opacity">
            Request ØRIONS Audit (Free) <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
