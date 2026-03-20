import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartProjectDialog from "@/components/StartProjectDialog";
import AnimatedSection, { AnimatedChild } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hospitality-hero.jpg";
import detailImg from "@/assets/hospitality-detail.jpg";
import lobbyImg from "@/assets/hospitality-lobby.jpg";
import aerialImg from "@/assets/hospitality-aerial.jpg";

const phases = [
  {
    num: "01",
    title: "Demand & Positioning Audit",
    subtitle: "เข้าใจ demand gap ก่อนลงมือทำ",
    items: ["วิเคราะห์ audience ปัจจุบัน", "Occupancy pattern mapping", "Content & channel review", "Demand gap analysis", "Segment ใหม่ที่ควรโฟกัส"],
    deliverable: "Demand Audit Report",
    deliverableDesc: "รายงานที่ชี้ให้เห็น demand gap, segment ใหม่ที่ควรเจาะ และ positioning ที่จะสร้างความแตกต่าง",
  },
  {
    num: "02",
    title: "Demand Strategy",
    subtitle: "กำหนด direction ที่ชัดเจน",
    items: ["Target segment definition", "Key message development", "Campaign direction", "Channel strategy", "Content framework"],
    deliverable: "Demand Strategy Deck",
    deliverableDesc: "แผนกลยุทธ์ที่กำหนด target, message, และ direction ของ campaign ทั้งหมด",
  },
  {
    num: "03",
    title: "Signature Campaign & Hero Film",
    subtitle: "เปลี่ยน strategy ให้เป็นสิ่งที่คนรู้สึกได้",
    items: ["Hero brand film (60–90s)", "Campaign photography", "Social-first video series", "Paid media creative", "On-property content capture"],
    deliverable: "Full Campaign Suite",
    deliverableDesc: "Hero film, photography, และ creative assets พร้อมใช้งานในทุก channel",
  },
  {
    num: "04",
    title: "Campaign Continuity System",
    subtitle: "รักษา demand ไม่ให้ drop",
    items: ["แตก hero film เป็น content ย่อย", "รักษา brand direction", "เติม content ตาม season", "Performance tracking", "Seasonal campaign refreshes"],
    deliverable: "Scalable Demand Engine",
    deliverableDesc: "ระบบที่ทำให้ demand ไม่ตกหลัง campaign launch — พร้อม content plan ต่อเนื่อง",
  },
];

const tiers = [
  {
    label: "DEMAND AUDIT",
    scope: "Phase 1",
    price: "60,000 – 90,000",
    detail: "Demand gap, segment ใหม่, positioning direction",
    note: "สำหรับโรงแรมที่ต้องการเข้าใจ gap ก่อนลงทุน",
  },
  {
    label: "SIGNATURE CAMPAIGN",
    scope: "Phase 1–3",
    price: "250,000 – 400,000",
    detail: "Strategy + campaign + hero film + content set",
    note: "สำหรับโรงแรมที่พร้อมเปิดตัว campaign ใหม่",
    featured: true,
  },
  {
    label: "DEMAND GROWTH SYSTEM",
    scope: "All Four Phases",
    price: "600,000 – 900,000+",
    detail: "Audit + campaign + support 3 เดือน — ระบบครบวงจร",
    note: "สำหรับโรงแรมที่ต้องการ growth อย่างจริงจัง",
  },
];

const demandGaps = [
  { icon: "📉", title: "Weekday/Low season ว่าง", desc: "เสียรายได้ 30–50% — occupancy ต่ำ 40–65%" },
  { icon: "💸", title: "แข่งราคาใน OTA", desc: "ADR ลดลง — พึ่ง promotion และ OTA สูง" },
  { icon: "🏷️", title: "Brand ไม่ชัด", desc: "เลือกยากใน OTA — ไม่มี narrative ที่ทำให้คน 'เลือกคุณก่อน'" },
  { icon: "🎯", title: "Content มีแต่ไม่มี story", desc: "มี content แต่ไม่เกิด desire — มี campaign แต่ไม่แตกต่าง" },
];

const targetSegments = [
  { title: "Remote Workers", age: "25–40 ปี", desc: "ทำงานยืดหยุ่น มองหาที่ทำงาน + พักผ่อน — ยอมจ่าย premium เพื่อ experience" },
  { title: "Wellness / Reset", age: "All ages", desc: "ต้องการพักใจ/สุขภาพ — ยอมจ่าย premium สำหรับ meaningful escape" },
  { title: "Couples / Occasion", age: "High spenders", desc: "Honeymoon / anniversary — เน้น experience และ moment ที่แชร์ได้" },
];

const PackagePage = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <SEO
        title="Hospitality Creative Layer — Creative Agency for Hotels | ØRIONS"
        description="Creative Agency ที่ช่วยเพิ่ม Demand & Revenue ให้โรงแรม ผ่านระบบ creative ที่ขับเคลื่อน booking จริง — ไม่แทน Marketing แต่เพิ่มพลัง"
        path="/package/hospitality"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury resort infinity pool at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28">
          <Link to="/package" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent-warm transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> All Packages
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-6"
          >
            Hospitality Creative Layer
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(40px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-4xl">
            CREATIVE LAYER ที่เพิ่ม DEMAND ให้โรงแรม
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[16px] text-muted-foreground max-w-[520px] leading-[1.7] mt-8"
          >
            โรงแรมไม่ได้ขาดห้องพัก แต่ขาด "เหตุผลใหม่" ที่ทำให้คนอยากจอง — เราช่วยสร้าง narrative ที่ทำให้คน "เลือกคุณก่อน"
          </motion.p>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">ความจริงของธุรกิจโรงแรม</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-3xl">
              รายได้ไม่โต พึ่ง OTA สูง ขยายฐานลูกค้าใหม่ไม่ได้
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: "40–65%", label: "Weekday occupancy เฉลี่ย" },
              { stat: "High", label: "พึ่ง OTA / โปรโมชั่นสูง" },
              { stat: "60%+", label: "รายได้มาจากลูกค้าเดิม" },
            ].map((s) => (
              <AnimatedChild key={s.label}>
                <p className="font-display text-[clamp(40px,5vw,64px)] leading-[1] text-accent-warm">{s.stat}</p>
                <p className="font-body text-[14px] text-muted-foreground mt-3">{s.label}</p>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Detail image */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={detailImg} alt="Luxury hotel interior detail" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Demand Gap */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Demand Gap</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground">
              นี่คือปัญหา "Demand" ไม่ใช่แค่ Content
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {demandGaps.map((g) => (
              <AnimatedChild key={g.title}>
                <div className="bg-secondary p-8 h-full">
                  <span className="text-2xl">{g.icon}</span>
                  <h3 className="font-display text-[20px] text-foreground mt-4 mb-2">{g.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{g.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Insight + Positioning */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Insight</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground mb-6">
              People don't book rooms. They book how it feels.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              ลูกค้าซื้อความรู้สึก, lifestyle, และ moment ที่แชร์ได้ — แบรนด์ที่ชนะคือแบรนด์ที่เล่า experience ได้ชัด
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Positioning</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground mb-6">
              ORIONS = Creative Layer
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              เราไม่ได้มาแทนทีม marketing ของคุณ — เรามาเติม creative layer ที่ทำให้ positioning คม, campaign ต่าง, และ content สร้าง "ภาพจำ" ที่ทำให้ทุกอย่าง impact มากขึ้น
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Target Segments */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Target Segments</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground">
              กลุ่มใหม่ที่ใช้จ่ายสูงกว่า 1.3–2x และสร้าง UGC สูง
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetSegments.map((seg) => (
              <AnimatedChild key={seg.title}>
                <div className="bg-secondary p-8 h-full">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-2">{seg.age}</p>
                  <h3 className="font-display text-[24px] leading-[1] text-foreground mb-4">{seg.title}</h3>
                  <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{seg.desc}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Aerial image */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={aerialImg} alt="Aerial view of tropical island resort" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* System Overview */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16 md:mb-24">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Demand-Driven Creative System</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-foreground">
              Four phases. One clear direction.
            </h2>
          </AnimatedSection>

          <div className="space-y-20 md:space-y-28">
            {phases.map((phase) => (
              <AnimatedSection key={phase.num} className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16" delay={0.1}>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{phase.num}</span>
                  <h3 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] text-foreground mt-2 mb-3">{phase.title}</h3>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-6">{phase.subtitle}</p>
                  <div className="border-t border-border pt-5">
                    <ul className="space-y-2.5">
                      {phase.items.map((item) => (
                        <li key={item} className="font-body text-[14px] text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Deliverable</p>
                    <h4 className="font-display text-[clamp(24px,3vw,36px)] leading-[0.95] text-foreground mb-4">{phase.deliverable}</h4>
                    <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{phase.deliverableDesc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Example Campaign */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Example Campaign</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] text-foreground">
              Work From Paradise
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
              เปลี่ยนโรงแรมให้เป็น "ที่ใช้ชีวิต + ทำงาน" — Target: Remote workers ที่ต้องการมากกว่าแค่ห้องพัก
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-secondary p-8 h-full">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Content Direction</p>
                <ul className="space-y-3">
                  {["Morning routine", "Work with view", "Coffee / slow life", "Sunset unwind"].map((item) => (
                    <li key={item} className="font-body text-[15px] text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-secondary p-8 h-full">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Expected Impact</p>
                <div className="space-y-4">
                  <div>
                    <p className="font-display text-[32px] leading-[1] text-foreground">+10–25%</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-1">Weekday demand increase</p>
                  </div>
                  <div>
                    <p className="font-display text-[32px] leading-[1] text-foreground">+Long stay</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-1">Increased length of stay</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Investment</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] text-foreground">
              เลือกระดับที่ตรงกับเป้าหมาย
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <AnimatedChild key={tier.label}>
                <div className={`p-8 md:p-10 h-full flex flex-col justify-between ${tier.featured ? 'bg-foreground text-background' : 'bg-secondary'}`}>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">{tier.label}</p>
                    <h3 className={`font-display text-[24px] leading-[1] mb-2 ${tier.featured ? 'text-background' : 'text-foreground'}`}>{tier.scope}</h3>
                    <p className={`font-display text-[clamp(28px,3.5vw,40px)] leading-[1] mb-6 ${tier.featured ? 'text-background' : 'text-foreground'}`}>
                      ฿{tier.price}
                    </p>
                    <p className={`font-body text-[14px] leading-[1.7] mb-6 ${tier.featured ? 'text-background/60' : 'text-muted-foreground'}`}>{tier.detail}</p>
                  </div>
                  <p className={`font-body text-[13px] italic ${tier.featured ? 'text-background/40' : 'text-muted-foreground/60'}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>

          {/* Retainer */}
          <AnimatedSection className="mt-8">
            <div className="bg-secondary p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Retainer</p>
                  <h3 className="font-display text-[clamp(28px,3vw,40px)] leading-[0.95] text-foreground mb-2">Campaign Continuity</h3>
                  <p className="font-display text-[clamp(24px,3vw,36px)] leading-[1] text-accent-warm">฿120,000 – 150,000 /เดือน</p>
                </div>
                <div>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-4">
                    หลัง launch 4–8 สัปดาห์ momentum จะลดลงและ perception ใหม่ยังไม่แข็ง — Retainer คือระบบที่ทำให้ creative direction ต่อเนื่อง, สร้าง hero pieces เพิ่มตามจังหวะ, และแตก campaign เป็น content ใช้ได้จริง
                  </p>
                  <p className="font-body text-[13px] text-muted-foreground/60 italic">
                    ไม่ดู admin / ไม่ยิง ads / ไม่ replace ทีม — ทำให้ asset ที่ลงทุนไป "ทำงานต่อ"
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why ORIONS */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Why ORIONS</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] text-foreground max-w-3xl">
              เราไม่ได้แค่ทำ content เราสร้าง demand
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Agency ทั่วไป", desc: "ทำ production / content" },
              { num: "02", title: "ORIONS", desc: "วาง narrative, สร้าง campaign, ใช้ creative เพื่อเพิ่ม demand" },
              { num: "03", title: "Guarantee", desc: "Direction ชัด, campaign ใช้ได้จริง, marketing impact สูงขึ้น" },
            ].map((r) => (
              <AnimatedChild key={r.num}>
                <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{r.num}</span>
                <h4 className="font-display text-[20px] text-foreground mt-2 mb-2">{r.title}</h4>
                <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{r.desc}</p>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lobbyImg} alt="Luxury hotel lobby at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-foreground max-w-3xl mb-4">
              สร้างเหตุผลให้คนอยากจองที่โรงแรมคุณ
            </h2>
            <p className="font-body text-[15px] text-muted-foreground max-w-md mb-8">
              เราไม่ได้มาแทนทีมคุณ — เรามาทำให้ทีมคุณเก่งขึ้น
            </p>
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Start a Project
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default PackagePage;
