import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";

const services = [
  {
    n: "01",
    title: "Creative Solution",
    body: "วางกลยุทธ์และหาทางออกใหม่ๆ เมื่อธุรกิจเริ่มถึงจุดตัน",
    detail:
      "เราเริ่มจากการตีโจทย์ทางธุรกิจให้ขาด แล้วใช้ creative thinking ผสมกับ data เพื่อหาทางออกที่ทั้งสด ใหม่ และพิสูจน์ผลได้จริง — ไม่ใช่แค่ idea ที่ดูดีบน slide",
    items: [
      "Business & Brand Diagnosis",
      "Positioning & Messaging Framework",
      "Creative Strategy",
      "Campaign Concept Development",
      "Workshop & Co-creation",
    ],
    outcomes: [
      "ลด decision-making time ของทีม 40–60%",
      "Brief ที่ชัดขึ้น ลดรอบ revision เฉลี่ย 3 รอบ",
      "Conversion clarity เพิ่มขึ้น +30%",
    ],
    stats: [
      { v: "+30%", l: "CONVERSION CLARITY" },
      { v: "−25%", l: "DIGITAL WASTE" },
      { v: "60min", l: "AVG. STRATEGY UNLOCK" },
    ],
  },
  {
    n: "02",
    title: "Applied Communication",
    body: "การสื่อสารที่ประยุกต์ให้เข้ากับพฤติกรรมจริง เพื่อหยุดนิ้วโป้งลูกค้า",
    detail:
      "เราออกแบบสารและรูปแบบ content ที่อิงพฤติกรรมจริงในแต่ละแพลตฟอร์ม ไม่ใช่ template สำเร็จรูป — เพื่อให้ทุก touchpoint ทำงานได้ในสภาพแวดล้อมที่ attention เหลือไม่ถึง 2 วินาที",
    items: [
      "Communication Architecture",
      "Copywriting & Messaging",
      "Platform-native Content",
      "Visual Direction",
      "A/B Testing & Optimization",
    ],
    outcomes: [
      "Engagement quality เพิ่มขึ้น 2–3 เท่า",
      "Cost per qualified lead ลดลง 35%",
      "Stop-rate บนฟีดดีขึ้น +45%",
    ],
    stats: [
      { v: "3×", l: "ENGAGEMENT QUALITY" },
      { v: "+45%", l: "STOP-RATE" },
      { v: "−35%", l: "CPL" },
    ],
  },
  {
    n: "03",
    title: "Social Media Marketing",
    body: "บริหารจัดการช่องทางดิจิทัลเพื่อสร้างตัวตนที่แตกต่างและสร้างยอดขาย",
    detail:
      "ดูแลช่องทาง social ตั้งแต่วาง content pillar รายไตรมาส บริหารคอมมูนิตี้ จนถึงรัน performance campaign — โฟกัสที่ทั้ง brand presence และ commercial outcome ไปพร้อมกัน",
    items: [
      "Content Pillar & Editorial Calendar",
      "Channel Management (FB / IG / TikTok / LinkedIn / YT)",
      "Community Management",
      "Performance Media & Paid Social",
      "Monthly Reporting & Insight",
    ],
    outcomes: [
      "Organic reach โต 4–6 เท่าใน 90 วัน",
      "Qualified inbound เพิ่มขึ้น +35%",
      "ลดการพึ่งพา paid reach ลง 20%",
    ],
    stats: [
      { v: "5×", l: "ORGANIC REACH (90D)" },
      { v: "+35%", l: "QUALIFIED INBOUND" },
      { v: "−20%", l: "PAID DEPENDENCY" },
    ],
  },
  {
    n: "04",
    title: "High Impact Production",
    body: "งานผลิตคุณภาพสูงระดับสากล เพื่อสร้างภาพจำที่ทรงพลัง",
    detail:
      "ทีมผลิต in-house ที่ทำตั้งแต่ brand film, TVC, documentary จนถึง premium photography — ทุก asset ถูกออกแบบให้ใช้งานได้ข้ามช่องทางและเก็บมูลค่าระยะยาวให้แบรนด์",
    items: [
      "Brand Film & TVC",
      "Commercial Production",
      "Documentary & Long-form",
      "Premium Photography",
      "Post-production & Color",
    ],
    outcomes: [
      "Brand recall ที่วัดผลได้ +50%",
      "Asset usable ข้ามช่องทาง 6+ เดือน",
      "Decision speed ของลูกค้าใหม่เร็วขึ้น 30%",
    ],
    stats: [
      { v: "+50%", l: "BRAND RECALL" },
      { v: "6mo+", l: "ASSET LIFESPAN" },
      { v: "30%", l: "FASTER DECISION" },
    ],
  },
];

const Services = () => (
  <div>
    <SEO
      title="Services — ØRIONS"
      description="Creative Solution, Applied Communication, Social Media Marketing, High Impact Production. Four practices, one outcome: clarity."
      path="/services"
    />

    <PageHero
      eyebrow="SERVICES · INDEX"
      title={<>Applied <span className="text-gradient">solutions</span>.</>}
    />

    <section className="px-6 md:px-10">
      <div className="border-t border-foreground">
        {services.map((s) => (
          <Reveal key={s.n}>
            <article className="group py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-b border-soft transition-colors duration-500">
              <header className="lg:col-span-4">
                <div className="font-display text-[80px] md:text-[120px] leading-[0.85] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1 text-muted-foreground/40 group-hover:text-foreground">
                  {s.n}
                </div>
                <h2 className="mt-6 font-display text-[26px] md:text-[36px] leading-[1] tracking-[-0.02em]">
                  {s.title}
                </h2>
                <p className="mt-6 text-[15px] md:text-[16px] leading-[1.7] font-thai max-w-[380px]">
                  {s.body}
                </p>
              </header>

              <div className="lg:col-span-8 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <div className="border-t border-foreground pt-3">
                      <span className="index-badge font-bold">CAPABILITIES</span>
                    </div>
                    <ul className="mt-5 space-y-2 text-[14px] font-thai">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3 border-b border-soft pb-2">
                          <span className="text-muted-foreground">·</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="border-t border-foreground pt-3">
                      <span className="index-badge font-bold">OUTCOMES</span>
                    </div>
                    <ul className="mt-5 space-y-3 text-[14px] font-thai">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex gap-3">
                          <span className="font-display text-[12px] mt-[2px]">→</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-px bg-foreground border border-foreground">
                  {s.stats.map((st) => (
                    <div key={st.l} className="bg-background text-foreground p-5 md:p-6">
                      <div className="font-display text-[28px] md:text-[40px] leading-none tracking-[-0.03em]">{st.v}</div>
                      <div className="mt-3 index-badge text-muted-foreground">{st.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-12 flex justify-end opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* CTA — editorial close, centered & calm */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-16 md:py-20 max-w-[760px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display h-display-sm text-balance">
            Have a problem<br />worth <span className="italic text-gradient">solving</span><span className="text-muted-foreground">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[520px] mx-auto text-[15px] leading-[1.7] text-muted-foreground font-thai">
            เริ่มจากการคุยสั้นๆ เราจะช่วยชี้จุดตันและทางรอดให้ภายใน 60 นาที
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <CTA to="/contact">Start a project</CTA>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 inline-flex items-center gap-6 md:gap-8 font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
            <a href="mailto:hello@orions.agency" className="hover:text-foreground transition-colors">
              hello@orions.agency
            </a>
            <span aria-hidden className="block w-px h-3 bg-foreground/30" />
            <a href="tel:+66923905464" className="hover:text-foreground transition-colors">
              +66 92 390 5464
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Services;
