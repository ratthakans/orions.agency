import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const services = [
  {
    n: "01",
    title: "Creative Solution",
    tagline: "Strategy that unlocks the real bottleneck.",
    what: "วางกลยุทธ์เชิงสร้างสรรค์เมื่อธุรกิจของคุณติดอยู่กับวิธีเดิม — เราหาจุดตายที่แท้จริง แล้วออกแบบทางออกที่ใช้ได้จริง ไม่ใช่แค่สวยบนสไลด์",
    how: [
      "Discovery & Diagnostic Workshop",
      "Brand & Business Audit",
      "Positioning & Messaging Architecture",
      "Creative Direction Roadmap",
    ],
    deliverables: [
      "Strategic Brief Document",
      "Brand Positioning Framework",
      "Visual & Verbal Direction Deck",
      "12-month Creative Roadmap",
    ],
    outcomes: [
      "ทีมและผู้บริหารเห็นภาพเดียวกัน",
      "ลดเวลา decision-making 40%+",
      "งบประมาณการตลาดถูกใช้ตรงเป้า",
    ],
  },
  {
    n: "02",
    title: "Applied Communication",
    tagline: "Content built for the way people actually scroll.",
    what: "การสื่อสารที่ออกแบบจากพฤติกรรมจริงของผู้ใช้ ไม่ใช่จากเทรนด์ — content, copy, และ creative ที่หยุดนิ้วโป้งและสร้าง action",
    how: [
      "Audience Behavior Mapping",
      "Message Frameworking",
      "Multi-format Content System",
      "Performance Iteration",
    ],
    deliverables: [
      "Content Pillar System",
      "Editorial Calendar (3-6 mo.)",
      "Hero & Hub Creative Sets",
      "Copy & CTA Library",
    ],
    outcomes: [
      "Engagement rate เพิ่มเฉลี่ย 2-3x",
      "Cost per acquisition ลดลง",
      "Brand recall ที่วัดผลได้จริง",
    ],
  },
  {
    n: "03",
    title: "Social Media Marketing",
    tagline: "Always-on systems, not random posting.",
    what: "บริหารช่องทางดิจิทัลแบบ end-to-end — ตั้งแต่ strategy, content production, community, paid media จนถึง analytics เพื่อสร้างทั้งตัวตนและยอดขาย",
    how: [
      "Channel Strategy & Setup",
      "Monthly Content Production",
      "Paid Media Management",
      "Community & Reporting",
    ],
    deliverables: [
      "Monthly Content (12-30 ชิ้น)",
      "Paid Campaign Management",
      "Community Response SLA",
      "Monthly Performance Report",
    ],
    outcomes: [
      "Follower growth ที่มีคุณภาพ",
      "Lead pipeline จาก social",
      "Brand presence ที่สม่ำเสมอ",
    ],
  },
  {
    n: "04",
    title: "High Impact Production",
    tagline: "Cinematic craft for moments that must land.",
    what: "งานผลิตคุณภาพระดับสากล — ภาพยนตร์โฆษณา, brand film, documentary, photography และ key visual ที่สร้างภาพจำที่ทรงพลังให้แบรนด์",
    how: [
      "Pre-production & Storyboarding",
      "Director-led Production",
      "Post-production & Color",
      "Multi-format Delivery",
    ],
    deliverables: [
      "TVC / Brand Film",
      "Key Visual & Photography",
      "Cutdowns & Social Edits",
      "Behind-the-scenes Asset",
    ],
    outcomes: [
      "ภาพลักษณ์ premium ที่จดจำ",
      "Asset ที่ใช้ได้ข้ามช่องทาง",
      "ROI ที่วัดผ่าน brand equity",
    ],
  },
];

const Services = () => (
  <div>
    <SEO title="Services — ØRIONS" description="Strategy, Communication, Social, and Production. Four applied solutions to unstick your business." path="/services" />

    <PageHero
      eyebrowNumber="01"
      eyebrowLabel="APPLIED SOLUTIONS"
      title="What we do, and what you get."
      subtitle="ØRIONS ทำงานครบทั้งกลยุทธ์ การสื่อสาร และงานผลิต — ทุกบริการถูกออกแบบให้ส่งมอบ outcome ที่วัดผลได้ ไม่ใช่แค่ deliverable"
    />

    {/* SERVICE STACK */}
    <section className="px-6 md:px-12 pb-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto divide-y divide-border">
        {services.map((s) => (
          <Reveal key={s.n}>
            <article className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left rail */}
              <header className="lg:col-span-4">
                <div className="font-display text-grad text-[80px] md:text-[120px] leading-none tracking-[-0.04em]">
                  {s.n}
                </div>
                <h2 className="mt-6 font-display text-[28px] md:text-[40px] leading-[1.05]">
                  {s.title}
                </h2>
                <p className="mt-4 font-display italic text-muted-foreground text-[16px] md:text-[18px] font-light">
                  {s.tagline}
                </p>
              </header>

              {/* Right details */}
              <div className="lg:col-span-8 lg:pl-10 lg:border-l border-border space-y-12">
                <div>
                  <div className="label-mono text-grad-soft">What it is</div>
                  <p className="mt-4 text-[16px] md:text-[18px] leading-[1.7] text-foreground/90 font-thai max-w-[640px]">
                    {s.what}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div>
                    <div className="label-mono text-muted-foreground">How we work</div>
                    <ul className="mt-4 space-y-3">
                      {s.how.map((h) => (
                        <li key={h} className="flex gap-3 text-[14px] leading-[1.55] text-foreground/85">
                          <span className="mt-[7px] h-[5px] w-[5px] bg-grad shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="label-mono text-muted-foreground">Deliverables</div>
                    <ul className="mt-4 space-y-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-3 text-[14px] leading-[1.55] text-foreground/85">
                          <Check className="w-3.5 h-3.5 mt-[5px] text-grad-soft shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="label-mono text-muted-foreground">Outcomes</div>
                    <ul className="mt-4 space-y-3">
                      {s.outcomes.map((o) => (
                        <li key={o} className="text-[14px] leading-[1.55] text-foreground/85 font-thai border-l border-border pl-3">
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PROCESS */}
    <section className="px-6 md:px-12 py-28 md:py-36 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="THE BLUEPRINT" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[32px] md:text-[56px] leading-[1] max-w-[800px]">
            6 ขั้นตอนสู่ผลลัพธ์ที่แม่นยำ
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { n: "01", letter: "O", name: "Open", body: "เปิดปัญหาที่แท้จริง" },
            { n: "02", letter: "R", name: "Reason", body: "หาเหตุผลเบื้องหลัง" },
            { n: "03", letter: "I", name: "Ideation", body: "ไอเดียที่ใช้ได้จริง" },
            { n: "04", letter: "O", name: "Offer", body: "ออกแบบข้อเสนอที่ชัด" },
            { n: "05", letter: "N", name: "Navigation", body: "นำทางจนเห็นผล" },
            { n: "06", letter: "S", name: "Success", body: "ขยายผลความสำเร็จ" },
          ].map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05}>
              <div className="bg-background border border-border p-5 h-full">
                <div className="label-mono text-muted-foreground">{b.n}</div>
                <div className="mt-4 font-display text-grad text-[56px] leading-none">{b.letter}</div>
                <div className="mt-4 font-display text-[16px]">{b.name}</div>
                <p className="mt-2 text-[12px] leading-[1.55] text-muted-foreground font-thai">{b.body}</p>
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
          <h2 className="font-display text-[36px] md:text-[64px] leading-[1]">
            Ready to apply?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.7] text-muted-foreground font-thai">
            เริ่มจาก Clarity Audit — เราจะชี้จุดตายและทางรอดให้คุณภายใน 60 นาที
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
            Book Clarity Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Services;
