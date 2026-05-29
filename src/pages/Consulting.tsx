import { Link } from "react-router-dom";
import { ArrowUpRight, Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

const units = [
  {
    code: "2.1",
    name: "Business Creative Solution",
    tag: "Brand Transformation",
    desc: "X-ray โครงสร้างแบรนด์และโมเดลธุรกิจ ใช้ creativity พลิกโฉมและแก้ปัญหาเชิงโครงสร้าง.",
    services: ["Brand Audit", "Strategic Rebranding", "Legacy Modernization"],
    target: "บริษัทมหาชน · แบรนด์ดั้งเดิมสืบทอดสู่รุ่นลูก",
  },
  {
    code: "2.2",
    name: "Strategic Creative Direction",
    tag: "Fractional CCO",
    desc: "ทำหน้าที่เสมือน CCO นอกองค์กร วางแผนแม่บทประจำปี คุมคุณภาพภาพลักษณ์ และกำกับทิศทาง creative ของทุก vendor.",
    services: ["Annual Creative Blueprint", "Agency Quality Audit", "C-Level Advisory"],
    target: "Conglomerate · เครืออสังหา · เครือโรงพยาบาล",
  },
  {
    code: "2.3",
    name: "Creative Culture & Training",
    tag: "Organization Transition",
    desc: "พัฒนาบุคลากรและปรับเปลี่ยนวัฒนธรรมองค์กร ให้เท่าทันเทคโนโลยีครีเอทีฟยุคใหม่ — AI · design thinking · workplace.",
    services: ["Generative AI สำหรับธุรกิจ", "Design Thinking Academy", "Workplace Consulting"],
    target: "HR · ฝ่ายนวัตกรรมขององค์กรขนาดใหญ่",
  },
];

const engagement = [
  { label: "Starting from", value: "฿180,000 / mo" },
  { label: "Engagement length", value: "12 – 36 months" },
  { label: "Cadence", value: "Monthly C-level review" },
  { label: "Output", value: "Blueprint · Audit · Advisory" },
];

const fitYes = [
  "Conglomerate / holding company ที่ต้องการ creative leadership ระดับ C-suite",
  "องค์กรดั้งเดิมที่เตรียมสืบทอดสู่รุ่นใหม่ และต้องการ rebrand ทั้งระบบ",
  "บริษัทมหาชน · เครือโรงแรม · เครือโรงพยาบาล ที่ต้องการ governance ของ vendor",
  "ทีม HR / Innovation ที่ต้องอัพสกิล creative + AI ทั่วองค์กร",
];
const fitNo = [
  "งาน project-based เปิดตัวสินค้า/แคมเปญเดี่ยว — ใช้ Ø Boutique",
  "งาน performance ad / content retainer — ใช้ Ø Digital",
  "งานถ่ายทำ / crew on demand — ใช้ Ø Production",
];

const Consulting = () => (
  <div>
    <SEO
      title="Ø Consulting — Predictable Revenue · ØRIONS"
      description="Strategic creative leadership for conglomerates and listed brands. Fractional CCO, brand transformation, and creative culture — 12–36 month engagements."
      path="/consulting"
    />

    {/* HERO */}
    <section className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-20 border-b border-foreground/15">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="01" label="Ø Consulting" />
        <Reveal delay={0.1}>
          <h1 className="mt-10 font-serif h-display-xl max-w-[18ch]">
            Strategic creative <em className="italic text-cinnabar">leadership.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 font-serif italic text-[15px] md:text-[20px] text-muted-foreground max-w-[42ch]">
            Predictable Revenue · long-form partnerships, not project work.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[680px] font-thai text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
            สำหรับองค์กรที่ creativity เป็นปัจจัยเชิงโครงสร้าง — ไม่ใช่แค่งานชิ้น. เราเข้าทำงานในระดับ C-suite วางแผนแม่บทประจำปี และคุมคุณภาพ creative ของทั้ง ecosystem ลูกค้า.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — Three units */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Three units" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            สามยูนิตงาน · <em className="italic text-cinnabar">หนึ่งโต๊ะตัดสินใจ.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-foreground/20">
          {units.map((u, i) => (
            <Reveal key={u.code} delay={i * 0.06}>
              <div className={`p-8 md:p-10 h-full bg-background flex flex-col ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{u.code}</div>
                <h3 className="mt-4 font-serif text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.015em]">{u.name}</h3>
                <div className="mt-3 font-serif italic text-cinnabar text-[14px] md:text-[15px]">[ {u.tag} ]</div>
                <p className="mt-5 font-thai text-[13px] md:text-[14px] leading-[1.7] text-foreground/85">{u.desc}</p>
                <div className="mt-6 pt-6 border-t border-foreground/15 space-y-4 text-[12px]">
                  <div>
                    <div className="font-mono tracking-[0.22em] uppercase text-cinnabar text-[10px]">— Services</div>
                    <ul className="mt-2 space-y-1 font-thai text-foreground/75 leading-[1.6]">
                      {u.services.map((s) => <li key={s}>· {s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono tracking-[0.22em] uppercase text-cinnabar text-[10px]">— Target</div>
                    <p className="mt-2 font-thai leading-[1.6] text-foreground/75">{u.target}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 03 — Engagement model */}
    <section className="px-6 md:px-10 border-t border-foreground/15 bg-surface">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="03" label="Engagement model" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            ปีต่อปี · <em className="italic text-cinnabar">ไม่ใช่ชิ้นต่อชิ้น.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-foreground/20">
          {engagement.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.05}>
              <div className={`p-8 md:p-10 h-full bg-background ${i > 0 ? "border-t md:border-t-0 md:border-l border-foreground/20 lg:border-l" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{e.label}</div>
                <div className="mt-6 font-serif text-[24px] md:text-[30px] tracking-[-0.015em] leading-[1.1]">{e.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — Who it's for */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="04" label="Who it's for" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-md max-w-[22ch]">
            Fit · <em className="italic text-cinnabar">not for.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border border-foreground/20">
          <div className="p-8 md:p-12 bg-background">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-6">— Ideal clients</div>
            <ul className="space-y-4">
              {fitYes.map((f) => (
                <li key={f} className="flex gap-3 font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/85">
                  <Check className="w-4 h-4 mt-1 shrink-0 text-cinnabar" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-12 bg-background border-t md:border-t-0 md:border-l border-foreground/20">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-6">— Not for</div>
            <ul className="space-y-4">
              {fitNo.map((f) => (
                <li key={f} className="flex gap-3 font-thai text-[14px] md:text-[15px] leading-[1.65] text-foreground/70">
                  <X className="w-4 h-4 mt-1 shrink-0 text-foreground/40" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* 05 — CTA */}
    <section className="px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1280px] mx-auto py-20 md:py-28">
        <SectionLabel index="05" label="Next step" />
        <Reveal delay={0.1}>
          <h2 className="mt-10 font-serif h-display-lg max-w-[20ch]">
            Book a <em className="italic text-cinnabar">private consultation.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[640px] font-thai text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            45-นาที discovery call · NDA-ready · เราคัด engagement ที่เหมาะกับโครงสร้างคุณก่อนเสนอราคา.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 btn-label border border-cinnabar bg-cinnabar text-background transition-opacity"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-7 py-4 btn-label border border-foreground hover:border-cinnabar hover:text-cinnabar transition-colors"
            >
              <span>See agency services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Consulting;