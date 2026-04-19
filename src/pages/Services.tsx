import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const stacks = [
  {
    n: "01",
    title: "BRAND DIRECTION",
    tagline: "วาง direction ของแบรนด์ให้คมและใช้ได้จริง",
    items: ["Brand Narrative", "Positioning", "Messaging", "Brand Voice", "Campaign Planning"],
  },
  {
    n: "02",
    title: "CREATIVE DIRECTION",
    tagline: "เปลี่ยน direction ให้กลายเป็นงานที่ทำงานได้จริง",
    items: ["Campaign Concepts", "Content Systems", "Copywriting", "Creative Direction", "Film & Production"],
  },
  {
    n: "03",
    title: "DIGITAL EXPERIENCE",
    tagline: "ออกแบบทุกจุดสัมผัสให้แปลเป็นผลลัพธ์ของธุรกิจ",
    items: ["Website Direction", "UX / UI", "Landing Pages", "Experience Design", "Touchpoint Design"],
  },
];

const orionsAcronym = [
  { l: "O", n: "Observe",     b: "อ่านสิ่งที่เกิดขึ้นจริงในตลาด พฤติกรรม และบริบทธุรกิจ" },
  { l: "R", n: "Reframe",     b: "ตีโจทย์ใหม่ให้คม เพื่อเห็นโอกาสที่ซ่อนอยู่" },
  { l: "I", n: "Imagine",     b: "สร้างความเป็นไปได้ใหม่ที่ตอบโจทย์ได้จริง" },
  { l: "O", n: "Orchestrate", b: "ประกอบ solution ที่ตรงจุด พร้อม execute" },
  { l: "N", n: "Nurture",     b: "Refine และ optimize ให้ดีขึ้นต่อเนื่อง" },
  { l: "S", n: "Scale",       b: "ขยายสิ่งที่พิสูจน์แล้วว่าเวิร์กในระดับใหญ่ขึ้น" },
];

const Services = () => (
  <div>
    <SEO title="Services — ØRIONS" description="Brand Direction, Creative Direction, Digital Experience. Three stacks that turn ideas into outcomes." path="/services" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="WHAT WE DO"
      title="Three stacks. One direction."
      subtitle="ØRIONS ทำงานครบทั้งกลยุทธ์ การสื่อสาร และประสบการณ์ดิจิทัล — ออกแบบให้แต่ละ stack ส่งต่อกันเป็นทิศทางเดียว ไม่ใช่งานแยกชิ้น"
    />

    {/* STACKS */}
    <section className="px-6 md:px-12 pb-10">
      <div className="max-w-[1400px] mx-auto divide-y divide-border">
        {stacks.map((s) => (
          <Reveal key={s.n}>
            <article className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <header className="lg:col-span-5">
                <div className="font-display text-accent text-[80px] md:text-[140px] leading-none tracking-[-0.04em]">
                  {s.n}
                </div>
                <h2 className="mt-6 font-display text-[28px] md:text-[40px] leading-[1.05]">
                  {s.title}
                </h2>
                <p className="mt-5 font-thai text-muted-foreground text-[16px] md:text-[18px] leading-[1.6] max-w-[420px]">
                  {s.tagline}
                </p>
              </header>

              <div className="lg:col-span-7 lg:pl-12 lg:border-l border-border">
                <div className="label-mono text-muted-foreground mb-6">SCOPE</div>
                <ul className="divide-y divide-border border-y border-border">
                  {s.items.map((i) => (
                    <li key={i} className="py-4 flex items-baseline gap-6">
                      <span className="font-mono text-[11px] text-accent w-8">→</span>
                      <span className="font-thai text-[17px] md:text-[19px] text-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PROCESS — ORIONS */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="04" label="HOW WE WORK" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[36px] md:text-[56px] leading-[1.05] max-w-[800px]">
            THE <span className="text-accent">ØRIONS</span> PROCESS
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.7] text-muted-foreground font-thai">
            เราไม่เริ่มจากสิ่งที่ลูกค้าขอ แต่เริ่มจากสิ่งที่ธุรกิจกำลังเจออยู่จริง
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-border">
          {orionsAcronym.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-background border-r border-b border-border p-6 md:p-8 h-full">
                <div className="font-display text-accent text-[64px] leading-none">{s.l}</div>
                <div className="mt-6 font-display text-[15px] tracking-[0.05em]">{s.n}</div>
                <p className="mt-3 text-[12px] leading-[1.65] text-muted-foreground font-thai">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05]">
            Ready to <span className="text-accent">sharpen</span><br />the next idea?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[600px] text-[16px] leading-[1.7] text-muted-foreground font-thai">
            เริ่มจากการสนทนา 30 นาที — เราจะตีโจทย์ใหม่ให้คุณเห็นทิศทางที่ชัดขึ้น
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-accent-solid text-accent-foreground px-7 py-4 label-mono hover:opacity-90 transition-opacity">
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Services;
