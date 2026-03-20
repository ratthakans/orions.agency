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
import heroImg from "@/assets/golf-hero.jpg";
import detailImg from "@/assets/golf-detail.jpg";
import lifestyleImg from "@/assets/golf-lifestyle.jpg";
import clubhouseImg from "@/assets/golf-clubhouse.jpg";

const phases = [
  {
    num: "01",
    title: "Demand & Positioning Audit",
    subtitle: "เข้าใจ demand gap ก่อนลงมือทำ",
    items: ["วิเคราะห์ลูกค้าปัจจุบัน", "Utilization mapping", "Content audit", "Demand gap analysis", "Segment ใหม่ที่ควรโฟกัส"],
    deliverable: "Demand Audit Report",
    deliverableDesc: "รายงานที่ชี้ให้เห็น gap ของ demand, segment ใหม่ที่ควรเจาะ และ positioning ที่จะสร้างความแตกต่าง",
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
    items: ["แตก hero film เป็น content ย่อย", "รักษา brand direction", "เติม content ตาม moment", "Performance tracking", "Seasonal campaign refreshes"],
    deliverable: "Scalable Demand Engine",
    deliverableDesc: "ระบบที่ทำให้ demand ไม่ตกหลัง campaign launch — พร้อม content plan ต่อเนื่อง",
  },
];

const tiers = [
  {
    label: "DEMAND AUDIT",
    scope: "Phase 1",
    price: "50,000 – 80,000",
    detail: "Demand gap, segment ใหม่, positioning direction",
    note: "สำหรับสนามที่ต้องการเข้าใจ gap ก่อนลงทุน",
  },
  {
    label: "SIGNATURE CAMPAIGN",
    scope: "Phase 1–3",
    price: "200,000 – 350,000",
    detail: "Strategy + campaign + hero film + content set",
    note: "สำหรับสนามที่พร้อมเปิดตัว campaign ใหม่",
    featured: true,
  },
  {
    label: "DEMAND GROWTH SYSTEM",
    scope: "All Four Phases",
    price: "500,000 – 800,000+",
    detail: "Audit + campaign + support 3 เดือน — ระบบครบวงจร",
    note: "สำหรับสนามที่ต้องการ growth อย่างจริงจัง",
  },
];

const demandGaps = [
  { icon: "📉", title: "Weekday ว่าง", desc: "Utilization ต่ำ 30–50% — รายได้หายไปจำนวนมาก" },
  { icon: "👤", title: "ลูกค้าใหม่เข้ามาน้อย", desc: "Growth จำกัด — พึ่งพาลูกค้าเดิมสูง" },
  { icon: "🏷️", title: "Brand ไม่ดึงดูดคนรุ่นใหม่", desc: "Perception ดู traditional — ไม่ connect กับ lifestyle ใหม่" },
  { icon: "🎯", title: "Marketing ไม่มี direction", desc: "มี content แต่ไม่มี story — มี campaign แต่ไม่แตกต่าง" },
];

const targetSegments = [
  { title: "Young Professionals", age: "28–40 ปี", desc: "ทำงานในเมือง ต้องการ weekend escape — เล่น golf เพื่อ relax + social" },
  { title: "Lifestyle Golfers", age: "All ages", desc: "เล่น golf เป็นส่วนหนึ่งของ lifestyle — ชอบสถานที่ที่ 'ดูดี' แชร์ experience" },
  { title: "Golf Travelers", age: "High spenders", desc: "เดินทางมาเล่น golf — มองหา destination ที่มี story และ package" },
];

const GolfPackagePage = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <SEO
        title="Golf Creative Layer — Creative Agency for Golf Clubs | ØRIONS"
        description="Creative Agency ที่ช่วยเพิ่ม Demand & รายได้ให้ Golf Club ผ่านระบบ creative ที่ขับเคลื่อน booking จริง"
        path="/package/golf"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury golf course aerial view at golden hour" className="w-full h-full object-cover" />
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
            Golf Creative Layer
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(40px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-4xl">
            CREATIVE LAYER ที่เพิ่ม DEMAND ให้สนามกอล์ฟ
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[16px] text-muted-foreground max-w-[520px] leading-[1.7] mt-8"
          >
            สนามกอล์ฟส่วนใหญ่ไม่ได้ขาดคุณภาพ แต่ขาด "Demand ใหม่" ที่จะทำให้รายได้โต — เราช่วยสร้างเหตุผลใหม่ให้คนอยากมาเล่นที่สนามคุณ
          </motion.p>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">ความจริงของธุรกิจ</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground max-w-3xl">
              รายได้ไม่โต ต้องพึ่ง promotion เดิม ขยายฐานลูกค้าใหม่ไม่ได้
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: "60–70%", label: "รายได้มาจากลูกค้าเดิม" },
              { stat: "40–60%", label: "Weekday utilization เฉลี่ย" },
              { stat: "↑", label: "อายุเฉลี่ยของ golfer สูงขึ้นต่อเนื่อง" },
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
              <img src={detailImg} alt="Golf ball on pristine green" className="w-full h-full object-cover" />
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
              ปัญหาที่แท้จริงของสนามกอล์ฟ
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

      {/* Insight */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Insight</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground mb-6">
              Golf = Lifestyle Economy
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              Golf ในปัจจุบันไม่ใช่แค่กีฬา แต่คือ networking, lifestyle, และ identity — ผู้เล่นใหม่มอง golf เป็น "experience" มากกว่า sport
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Positioning</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground mb-6">
              ORIONS = Creative Layer
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              เราไม่ได้มาแทนทีมคุณ — เรามาเติม creative layer ที่ทำให้ positioning ชัด, narrative น่าจดจำ, campaign แตกต่าง, และ content มีพลัง
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
              กลุ่มที่ใช้จ่ายสูงกว่า golfer ทั่วไป 1.5–2 เท่า
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

      {/* Lifestyle image */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={lifestyleImg} alt="Golfer walking on fairway at sunset" className="w-full h-full object-cover" />
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
              Workday Escape Golf
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-6 max-w-xl">
              เปลี่ยน weekday ให้กลายเป็น "escape time" — แทนที่จะขาย golf เป็น sport → ขายเป็น "เวลาพักจากชีวิตงาน"
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-secondary p-8 h-full">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Content Direction</p>
                <ul className="space-y-3">
                  {["Early morning calm", "Golf + coffee", "Slow afternoon", "Sunset finish"].map((item) => (
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
                    <p className="font-display text-[32px] leading-[1] text-foreground">+10–20%</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-1">Weekday traffic increase</p>
                  </div>
                  <div>
                    <p className="font-display text-[32px] leading-[1] text-foreground">New segment</p>
                    <p className="font-body text-[14px] text-muted-foreground mt-1">Young professionals entry</p>
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
                  <p className="font-display text-[clamp(24px,3vw,36px)] leading-[1] text-accent-warm">฿80,000 – 120,000 /เดือน</p>
                </div>
                <div>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-4">
                    หลัง campaign 4–8 สัปดาห์ awareness จะลดลงและ demand จะ drop — Retainer คือระบบรักษา demand ที่ช่วยรักษา brand direction, แตก campaign เป็น content, และสร้าง hero content เพิ่ม
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
              { num: "01", title: "Agency ทั่วไป", desc: "ทำ content" },
              { num: "02", title: "ORIONS", desc: "สร้าง demand, สร้าง campaign, ใช้ creative เพื่อเพิ่มรายได้" },
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
          <img src={clubhouseImg} alt="Luxury golf clubhouse at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-foreground max-w-3xl mb-4">
              สร้างเหตุผลให้คนอยากมาเล่นที่สนามคุณ
            </h2>
            <p className="font-body text-[15px] text-muted-foreground max-w-md mb-8">
              เราไม่ได้แค่ทำ content — เราสร้างระบบที่เพิ่ม demand, เปิดตลาดใหม่, และเพิ่มรายได้
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

export default GolfPackagePage;
