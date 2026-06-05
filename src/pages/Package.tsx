import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";

// NOTE: example pricing — adjust to your real rate card before launch.
const tiers = [
  {
    name: "Starter",
    th: "เริ่มต้นวางระบบ",
    price: "฿35,000",
    unit: "/ เดือน",
    desc: "สำหรับแบรนด์ที่อยากเริ่มให้ถูกตั้งแต่แรก — วางระบบและคอนเทนต์ที่สม่ำเสมอ",
    features: [
      "Brand audit + positioning เบื้องต้น",
      "Content system + คอนเทนต์ 8 ชิ้น/เดือน",
      "ดูแล 1 แพลตฟอร์มหลัก",
      "รายงานผลรายเดือน",
    ],
    featured: false,
  },
  {
    name: "Growth",
    th: "เต็มทีม",
    price: "฿69,000",
    unit: "/ เดือน",
    desc: "ทีมเดียวตั้งแต่กลยุทธ์ถึงการผลิต — Brand Strategy + Production + Social",
    features: [
      "ทุกอย่างใน Starter",
      "Brand strategy + CI ครบชุด",
      "คอนเทนต์ 16 ชิ้น/เดือน + short-form video",
      "ดูแล 2–3 แพลตฟอร์ม + community",
      "A/B testing + performance report",
    ],
    featured: true,
  },
  {
    name: "Scale",
    th: "เร่งและขยาย",
    price: "฿139,000",
    unit: "/ เดือน",
    desc: "เพิ่ม brand film, โปรดักชันใหญ่ และการยิงแอดเต็มรูปแบบ",
    features: [
      "ทุกอย่างใน Growth",
      "Brand film / hero content รายไตรมาส",
      "Production day + ภาพถ่ายระดับ commercial",
      "Ads management — Meta / TikTok / Google / LINE",
      "Dashboard + กลยุทธ์รายไตรมาส",
    ],
    featured: false,
  },
];

const faqs = [
  { q: "ราคานี้รวมอะไรบ้าง?",
    a: "เป็นแพ็กเกจรายเดือนแบบทำงานเป็นทีมเดียว — ครอบคลุมตามรายการในแต่ละแพ็กเกจ. งานโปรเจกต์ครั้งเดียว (เช่น brand identity, brand film เดี่ยว ๆ) คิดแยกตาม scope." },
  { q: "ยกเลิก/ปรับแพ็กเกจได้ไหม?",
    a: "ได้ — เริ่มที่แพ็กเกจที่เหมาะกับตอนนี้ แล้วขยับขึ้น/ลงได้ตามจังหวะของแบรนด์. ไม่มีสัญญาผูกมัดระยะยาว." },
  { q: "ไม่แน่ใจว่าควรเริ่มแพ็กเกจไหน?",
    a: "ทำ Brand Audit 3 นาที — เราจะดูคะแนนแล้วแนะนำว่าควรเริ่มตรงไหนก่อน ตรงไปตรงมา ไม่มีข้อผูกมัด." },
];

const Package = () => (
  <div>
    <SEO
      title="Packages — แพ็กเกจและราคา · ØRIONS"
      description="แพ็กเกจรายเดือนแบบทีมเดียว ตั้งแต่กลยุทธ์ถึงการผลิต — Starter, Growth, Scale. เลือกที่เหมาะกับแบรนด์คุณ."
      path="/package"
    />

    {/* 01 — HERO */}
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto pt-28 md:pt-32 pb-12 md:pb-16">
        <SectionLabel index="01" label="Packages" />
        <Reveal delay={0.05}>
          <h1 lang="th" className="mt-10 h-display-lg max-w-[18ch] thai-wrap">
            เลือกที่เหมาะกับ <em className="italic text-cinnabar">ตอนนี้.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p lang="th" className="mt-8 max-w-[680px] font-thai thai-wrap text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground">
            แพ็กเกจรายเดือนแบบทำงานเป็นทีมเดียว — เริ่มเล็กแล้วขยับขึ้นได้ตามจังหวะของแบรนด์. ไม่แน่ใจว่าควรเริ่มตรงไหน? ทำ Brand Audit ก่อนได้.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 02 — TIERS */}
    <section className="px-6 md:px-10 pb-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <div
              className={`h-full flex flex-col border p-8 md:p-10 ${
                t.featured ? "section-ink border-cinnabar" : "border-foreground/20 bg-background"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar">{t.name}</div>
                {t.featured && (
                  <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-cinnabar border border-cinnabar px-2 py-1">แนะนำ</div>
                )}
              </div>
              <div lang="th" className="mt-2 font-serif italic text-cinnabar text-[18px]">{t.th}</div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="num-display text-[40px] md:text-[48px]">{t.price}</span>
                <span lang="th" className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{t.unit}</span>
              </div>

              <p lang="th" className="mt-5 font-thai thai-wrap text-[14px] leading-[1.7] text-muted-foreground">{t.desc}</p>

              <ul className="mt-7 space-y-3 border-t border-foreground/15 pt-7 flex-1">
                {t.features.map((f) => (
                  <li key={f} lang="th" className="grid grid-cols-[18px_1fr] gap-3 font-thai thai-wrap text-[14px] leading-[1.55] text-foreground/90">
                    <Check className="w-3.5 h-3.5 text-cinnabar mt-1" /><span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 justify-between ${t.featured ? "btn-accent" : "btn-ghost"}`}
              >
                <span>เลือก {t.name}</span><ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p lang="th" className="max-w-[1280px] mx-auto mt-8 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
          * ราคาตัวอย่าง · งานโปรเจกต์ครั้งเดียว และ Consulting คิดแยกตาม scope — <Link to="/consulting" className="text-foreground hover:text-cinnabar transition-colors">ดู Consulting</Link>
        </p>
      </Reveal>
    </section>

    {/* 03 — FAQ */}
    <section className="bg-surface px-6 md:px-10 border-t border-foreground/15">
      <div className="max-w-[1080px] mx-auto py-20 md:py-28">
        <SectionLabel index="02" label="Before you ask" />
        <Reveal delay={0.05}>
          <h2 className="mt-10 h-display-md">
            The short <em className="italic text-cinnabar">answers.</em>
          </h2>
        </Reveal>
        <div className="mt-14"><FAQ items={faqs} /></div>
      </div>
    </section>

    {/* 04 — CTA */}
    <CTABand
      eyebrow="Not sure yet?"
      title={<>ไม่แน่ใจว่าควรเริ่มแพ็กเกจไหน? <em className="italic text-cinnabar">ให้ audit ช่วยมอง.</em></>}
      subtitle="ตอบ 18 ข้อ · 3 นาที · ฟรี — แล้วเราจะบอกว่าทางไหนเหมาะกับคุณที่สุด."
      primary={{ label: "ทำ Brand Audit", to: "/diagnostic" }}
      secondary={{ label: "เริ่มต้นบทสนทนา", to: "/contact" }}
      tone="ink"
    />
  </div>
);

export default Package;
