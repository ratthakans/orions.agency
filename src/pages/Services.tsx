import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const services = [
  {
    n: "01",
    id: "creative-solution",
    verb: "WE CLARIFY",
    title: "Creative Solution",
    tagline: "Strategy that unlocks the real bottleneck.",
    what: "วางกลยุทธ์เชิงสร้างสรรค์เมื่อธุรกิจของคุณติดอยู่กับวิธีเดิม — เราหาจุดตายที่แท้จริง แล้วออกแบบทางออกที่ใช้ได้จริง ไม่ใช่แค่สวยบนสไลด์",
    how: ["Discovery & Diagnostic Workshop", "Brand & Business Audit", "Positioning & Messaging Architecture", "Creative Direction Roadmap"],
    deliverables: ["Strategic Brief Document", "Brand Positioning Framework", "Visual & Verbal Direction Deck", "12-month Creative Roadmap"],
    outcomes: ["ทีมและผู้บริหารเห็นภาพเดียวกัน", "ลดเวลา decision-making 40%+", "งบประมาณการตลาดถูกใช้ตรงเป้า"],
  },
  {
    n: "02",
    id: "applied-communication",
    verb: "WE CONNECT",
    title: "Applied Communication",
    tagline: "Content built for the way people actually scroll.",
    what: "การสื่อสารที่ออกแบบจากพฤติกรรมจริงของผู้ใช้ ไม่ใช่จากเทรนด์ — content, copy, และ creative ที่หยุดนิ้วโป้งและสร้าง action",
    how: ["Audience Behavior Mapping", "Message Frameworking", "Multi-format Content System", "Performance Iteration"],
    deliverables: ["Content Pillar System", "Editorial Calendar (3-6 mo.)", "Hero & Hub Creative Sets", "Copy & CTA Library"],
    outcomes: ["Engagement rate เพิ่มเฉลี่ย 2-3x", "Cost per acquisition ลดลง", "Brand recall ที่วัดผลได้จริง"],
  },
  {
    n: "03",
    id: "social-media-marketing",
    verb: "WE AMPLIFY",
    title: "Social Media Marketing",
    tagline: "Always-on systems, not random posting.",
    what: "บริหารช่องทางดิจิทัลแบบ end-to-end — ตั้งแต่ strategy, content production, community, paid media จนถึง analytics เพื่อสร้างทั้งตัวตนและยอดขาย",
    how: ["Channel Strategy & Setup", "Monthly Content Production", "Paid Media Management", "Community & Reporting"],
    deliverables: ["Monthly Content (12-30 ชิ้น)", "Paid Campaign Management", "Community Response SLA", "Monthly Performance Report"],
    outcomes: ["Follower growth ที่มีคุณภาพ", "Lead pipeline จาก social", "Brand presence ที่สม่ำเสมอ"],
  },
  {
    n: "04",
    id: "high-impact-production",
    verb: "WE PRODUCE",
    title: "High Impact Production",
    tagline: "Cinematic craft for moments that must land.",
    what: "งานผลิตคุณภาพระดับสากล — ภาพยนตร์โฆษณา, brand film, documentary, photography และ key visual ที่สร้างภาพจำที่ทรงพลังให้แบรนด์",
    how: ["Pre-production & Storyboarding", "Director-led Production", "Post-production & Color", "Multi-format Delivery"],
    deliverables: ["TVC / Brand Film", "Key Visual & Photography", "Cutdowns & Social Edits", "Behind-the-scenes Asset"],
    outcomes: ["ภาพลักษณ์ premium ที่จดจำ", "Asset ที่ใช้ได้ข้ามช่องทาง", "ROI ที่วัดผ่าน brand equity"],
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

    {/* SERVICE STACK with sticky index */}
    <section className="px-6 md:px-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sticky index */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28">
            <div className="label-mono text-muted-foreground">Index</div>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="group flex items-baseline gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="label-mono text-grad-soft">{s.n}</span>
                    <span className="display-s text-[16px]">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-9 divide-y divide-border">
          {services.map((s) => (
            <Reveal key={s.n}>
              <article id={s.id} className="relative py-20 md:py-28 scroll-mt-28">
                {/* Big numeral background */}
                <div aria-hidden className="pointer-events-none absolute -top-4 right-0 font-display text-foreground/[0.06] text-[140px] md:text-[200px] leading-none tracking-[-0.05em] select-none">
                  {s.n}
                </div>

                <div className="relative">
                  <div className="label-mono text-grad-soft">{s.verb}</div>
                  <h2 className="mt-5 display-m">{s.title}</h2>
                  <p className="mt-4 body-l text-muted-foreground max-w-[640px]">{s.tagline}</p>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Narrative */}
                    <div className="md:col-span-5">
                      <div className="label-mono text-muted-foreground">What it is</div>
                      <p className="mt-4 body-l text-foreground/90 font-thai">{s.what}</p>
                    </div>

                    {/* Lists */}
                    <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                      <div>
                        <div className="label-mono text-muted-foreground">How</div>
                        <ul className="mt-4 space-y-3">
                          {s.how.map((h) => (
                            <li key={h} className="flex gap-3 body-m text-foreground/85">
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
                            <li key={d} className="flex gap-3 body-m text-foreground/85">
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
                            <li key={o} className="body-m text-foreground/85 font-thai border-l border-border pl-3">
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <Reveal><SectionLabel number="02" label="THE BLUEPRINT" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 display-m max-w-[800px]">6 ขั้นตอนสู่ผลลัพธ์ที่แม่นยำ</h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { n: "01", letter: "O", name: "Open",       body: "เปิดปัญหาที่แท้จริง" },
            { n: "02", letter: "R", name: "Reason",     body: "หาเหตุผลเบื้องหลัง" },
            { n: "03", letter: "I", name: "Ideation",   body: "ไอเดียที่ใช้ได้จริง" },
            { n: "04", letter: "O", name: "Offer",      body: "ออกแบบข้อเสนอที่ชัด" },
            { n: "05", letter: "N", name: "Navigation", body: "นำทางจนเห็นผล" },
            { n: "06", letter: "S", name: "Success",    body: "ขยายผลความสำเร็จ" },
          ].map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05}>
              <div className="bg-background border border-border p-5 h-full">
                <div className="label-mono text-muted-foreground">{b.n}</div>
                <div className="mt-4 font-display text-grad text-[44px] leading-none">{b.letter}</div>
                <div className="mt-4 display-s text-[16px]">{b.name}</div>
                <p className="mt-2 text-[12px] leading-[1.55] text-muted-foreground font-thai">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <h2 className="display-l">Ready to apply?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[600px] body-l text-muted-foreground font-thai">
            เริ่มจาก Clarity Audit — เราจะชี้จุดตายและทางรอดให้คุณภายใน 60 นาที
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-grad text-background px-7 py-4 label-mono hover:opacity-90 transition-opacity">
              Book Clarity Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/work" className="inline-flex items-center gap-3 border border-border px-7 py-4 label-mono hover:border-foreground transition-colors">
              See the Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Services;
