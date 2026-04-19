import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const principles = [
  { n: "01", t: "Practical over Pretty", b: "เราชอบงานสวย แต่เราเลือกงานที่ใช้ได้จริงก่อนเสมอ — strategy ต้อง execute ได้, content ต้อง convert ได้" },
  { n: "02", t: "Bold over Safe",        b: "งานปลอดภัยคืองานที่มองข้าม เราเลือกความกล้าที่มีเหตุผล เพื่อให้แบรนด์ถูกจดจำในจังหวะที่ใช่" },
  { n: "03", t: "Done over Discussed",   b: "เราไม่ส่งมอบ Paper Strategy เราพาไอเดียจากกระดาษไปสู่ผลลัพธ์ที่จับต้องได้จริงในตลาด" },
];

const process = [
  { n: "01", t: "Listen",    b: "เปิดบทสนทนา ฟังบริบทธุรกิจอย่างไม่มีอคติ" },
  { n: "02", t: "Diagnose",  b: "ระบุจุดตันที่แท้จริง ไม่ใช่แค่อาการ" },
  { n: "03", t: "Apply",     b: "ลงมือผลิต ทดสอบ และปรับจูนแบบมีระบบ" },
  { n: "04", t: "Measure",   b: "วัดผลลัพธ์ที่จับต้องได้ พร้อมขยายผล" },
];

const About = () => (
  <div>
    <SEO title="About — ØRIONS" description="Bangkok Energy × Logical Standard. We bridge ideas and outcomes." path="/about" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="WHO WE ARE"
      title="Creative Engineering from Bangkok."
      subtitle="ØRIONS คือเอเจนซีที่ผสาน Bangkok Energy เข้ากับ Logical Standard ระดับสากล เพื่อเชื่อมไอเดียที่ดีกับผลลัพธ์ทางธุรกิจที่วัดผลได้"
    />

    {/* FORMULA */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal><SectionLabel number="02" label="THE FORMULA" /></Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 border-grad p-10 md:p-16 relative">
            <div className="display-m">
              <span className="text-grad">BANGKOK ENERGY</span>
              <span className="text-muted-foreground mx-3 md:mx-6">×</span>
              <span className="text-grad">LOGICAL STANDARD</span>
            </div>
            <p className="mt-8 max-w-[700px] body-l text-muted-foreground font-thai">
              ความรวดเร็วและความหลากหลายของกรุงเทพ × มาตรฐานเชิงเหตุผลและความแม่นยำระดับสากล —
              สูตรที่ทำให้เราแก้ปัญหาแบรนด์ได้เร็ว ลึก และวัดผลได้
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* MANIFESTO */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-[1200px] mx-auto">
        <Reveal><SectionLabel number="03" label="MANIFESTO" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 display-m max-w-[900px]">Three rules we live by.</h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="grid grid-cols-12 gap-6 py-10 md:py-14 items-start">
                <div className="col-span-12 md:col-span-2 font-display text-grad text-[36px] md:text-[44px] leading-none">{p.n}</div>
                <h3 className="col-span-12 md:col-span-4 display-s">{p.t}</h3>
                <p className="col-span-12 md:col-span-6 body-m text-muted-foreground font-thai">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS TIMELINE */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="04" label="HOW WE WORK" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 display-m max-w-[900px]">From listen to measure.</h2>
        </Reveal>

        <div className="mt-16 relative">
          {/* horizontal line desktop */}
          <div className="hidden md:block absolute top-[14px] left-0 right-0 h-px divider-grad" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="relative md:pt-10">
                  <span className="hidden md:block absolute top-[8px] left-0 h-[14px] w-[14px] bg-grad" />
                  <div className="label-mono text-grad-soft md:hidden">{p.n}</div>
                  <h3 className="display-s mt-2 md:mt-0">{p.t}</h3>
                  <p className="mt-3 body-m text-muted-foreground font-thai max-w-[260px]">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* WHY US — comparison */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="05" label="WHY ØRIONS" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 display-m font-thai">ไม่ใช่ Consultant. ไม่ใช่ Studio.</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "CONSULTANT", s: "ให้แผน ไม่ทำจริง", b: "ส่งมอบ Paper Strategy แต่ไม่ได้พาไปทำจนเห็นผล", muted: true },
            { t: "STUDIO",     s: "ทำตามสั่ง ไม่คิดต่อ", b: "รับ Execution ได้ดี แต่ไม่มองภาพรวมกลยุทธ์ธุรกิจ", muted: true },
            { t: "ØRIONS",     s: "กลยุทธ์ × งานผลิต",  b: "เชื่อมการคิดกับการทำ ให้ธุรกิจขยับไปข้างหน้าได้จริง", muted: false },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className={`p-8 md:p-10 h-full border ${c.muted ? "bg-background border-border" : "bg-grad text-background border-transparent md:scale-[1.02]"}`}>
                <div className={`label-mono ${c.muted ? "text-muted-foreground" : "text-background/80"}`}>
                  {c.muted ? "VS" : "OUR APPROACH"}
                </div>
                <h3 className={`mt-6 display-s ${c.muted ? "" : "text-background"}`}>{c.t}</h3>
                <div className={`mt-3 body-m font-thai ${c.muted ? "text-muted-foreground" : "text-background"}`}>{c.s}</div>
                <p className={`mt-4 body-m font-thai ${c.muted ? "text-muted-foreground/80" : "text-background/90"}`}>{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* LOCATOR */}
    <section className="px-6 md:px-12 py-20 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <div className="label-mono text-muted-foreground">Based in</div>
          <h3 className="mt-4 display-m">Bangkok, TH</h3>
        </div>
        <div className="h-px w-full md:w-[40%] divider-grad" />
        <div className="md:text-right">
          <div className="label-mono text-muted-foreground">Working</div>
          <h3 className="mt-4 display-m">Worldwide</h3>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <h2 className="display-m">Let's build the next chapter together.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
