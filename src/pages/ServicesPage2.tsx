import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

interface ServiceDetail {
  num: string;
  title: string;
  badge?: string;
  desc: string;
  investment: string;
  timeline: string;
  idealFor: string;
  team: string;
  deliverables: string[];
  process: string[];
  terms: string[];
  scopeOptions?: string[];
  subCategories?: { label: string; items: string[] }[];
}

const coreServices: ServiceDetail[] = [
  {
    num: "01",
    title: "Demand Strategy",
    badge: "NEW",
    desc: "หา insight สร้าง narrative direction วาง message framework — ตอบว่า \"เรื่องอะไรจะสร้าง demand ให้แบรนด์\" ก่อนที่จะผลิตอะไรสักชิ้น",
    investment: "150,000 – 300,000 THB",
    timeline: "3–4 weeks",
    idealFor: "แบรนด์ที่ยังไม่ชัดว่า \"เรื่องอะไรจะขาย\" หรืออยากเปลี่ยน direction ใหม่ก่อนลงทุนผลิตงาน",
    team: "Creative Director + Strategist + Account Executive",
    deliverables: [
      "Consumer Insight Deck — สรุป insight จาก research, interview, และ market landscape",
      "Brand Narrative Direction — เรื่องเล่าหลักที่จะใช้ขับเคลื่อนทุกชิ้นงาน",
      "Key Message Framework — message หลัก + supporting messages สำหรับแต่ละ audience",
      "Creative Brief — brief ที่พร้อมส่งต่อให้ทีม production (ของเราหรือของลูกค้า)",
      "Presentation Deck — สรุปทั้งหมดในรูปแบบที่นำเสนอ stakeholder ได้ทันที",
    ],
    process: [
      "Week 1: Kickoff + Research — interview ทีมลูกค้า, ศึกษาตลาด, วิเคราะห์คู่แข่ง",
      "Week 2: Insight Synthesis — สรุป insight, หา tension points, draft narrative direction",
      "Week 3: Direction Development — พัฒนา narrative, message framework, creative brief",
      "Week 4: Presentation + Revision — นำเสนอ, รับ feedback, ปรับ final version",
    ],
    terms: [
      "ราคารวม research, strategy, และ creative direction — ไม่รวม production",
      "Research scope: desk research + interview ไม่เกิน 8 คน",
      "Revision: 2 rounds หลัง presentation",
      "Round เพิ่มเติม: 15,000 THB/round",
      "Payment: 50% upfront, 50% on delivery",
      "ไฟล์ส่งมอบ: PDF deck + editable file (Keynote/Figma)",
    ],
  },
  {
    num: "02",
    title: "Creative Transformation",
    badge: "FLAGSHIP",
    desc: "Rebrand, reposition, หรือสร้างแบรนด์ใหม่ตั้งแต่ identity system ถึง brand world — เปลี่ยนวิธีที่คนมองแบรนด์คุณทั้งระบบ",
    investment: "500,000 – 1,000,000+ THB",
    timeline: "4–8 weeks (brand system) / 8–12 weeks (full transformation)",
    idealFor: "แบรนด์ที่รู้สึกว่า identity เดิมไม่สะท้อนตัวตนอีกแล้ว หรือกำลัง pivot ไป direction ใหม่",
    team: "Creative Director + Art Director + Designer + Strategist + AE",
    deliverables: [
      "Brand Strategy Document — positioning, personality, tone of voice, brand story",
      "Visual Identity System — logo, typography, color system, graphic elements, iconography",
      "Brand Guidelines — document ครบถ้วนที่ทีมใดก็ใช้ต่อได้",
      "Brand World — visual direction สำหรับ photography, illustration, motion",
      "Application Mockups — ตัวอย่างการใช้งานจริง 5–10 touchpoints",
      "Brand Launch Kit — assets พร้อมใช้งานสำหรับ launch",
    ],
    process: [
      "Phase 1 (Week 1–2): Discovery — audit แบรนด์เดิม, interview stakeholders, competitive analysis",
      "Phase 2 (Week 2–4): Strategy — positioning, narrative, personality framework",
      "Phase 3 (Week 3–6): Design Exploration — 3 visual directions, refine เหลือ 1",
      "Phase 4 (Week 5–8): System Build — พัฒนา full identity system + guidelines",
      "Phase 5 (Week 7–10): Application — mockups + brand world + launch kit",
    ],
    terms: [
      "ราคารวม strategy + design + guidelines — ไม่รวม production ของ applications จริง",
      "Visual direction: นำเสนอ 3 directions, เลือก 1 เพื่อพัฒนาต่อ",
      "Direction เพิ่มเติม: 50,000 THB/direction",
      "Revision: 3 rounds ต่อ phase",
      "Round เพิ่มเติม: 20,000 THB/round",
      "Payment: 40% upfront, 30% after design approval, 30% on final delivery",
      "ลิขสิทธิ์: โอนให้ลูกค้า 100% หลัง payment ครบ",
    ],
  },
  {
    num: "03",
    title: "Signature Campaign",
    desc: "ออกแบบ campaign ที่มี story เป็นแกน — ตั้งแต่ concept, creative direction, production ไปจนถึง launch plan ที่สร้าง demand ไม่ใช่แค่ awareness",
    investment: "200,000 – 500,000 THB",
    timeline: "3–6 weeks (concept to launch-ready)",
    idealFor: "แบรนด์ที่ต้องการ campaign ที่มี narrative ชัด สร้าง impact ได้จริง ไม่ใช่แค่ burst ad",
    team: "Creative Director + Director + Art Director + Copywriter + AE",
    deliverables: [
      "Campaign Concept Deck — big idea, narrative arc, visual direction",
      "Creative Execution Plan — ชิ้นงานทั้งหมดที่ต้องผลิต + spec แต่ละชิ้น",
      "Key Visual + Adaptations — hero visual + 3–5 format adaptations",
      "Copy Deck — headline, body copy, tagline, CTA สำหรับทุก touchpoint",
      "Content Production — video/photo/motion ตาม scope (ถ้ารวม production)",
      "Launch Strategy — timeline, channel plan, release sequence, KPI framework",
    ],
    process: [
      "Week 1: Brief + Insight — รับ brief, ขุด insight เพิ่มเติม, กำหนด campaign territory",
      "Week 2: Concept Development — พัฒนา 2–3 concepts, นำเสนอ, เลือก 1",
      "Week 3–4: Creative Execution — KV, copy, content plan, pre-production",
      "Week 4–6: Production + Launch Prep — ผลิตชิ้นงาน, finalize launch strategy",
    ],
    terms: [
      "200K–300K = concept + creative direction + KV + copy + launch plan (ไม่รวม production)",
      "300K–500K = ข้างบน + production (1 video + photo set + social adaptations)",
      "Concept: นำเสนอ 2–3 directions, เลือก 1",
      "Revision: 2 rounds per deliverable",
      "Round เพิ่มเติม: 15,000 THB/round",
      "Media buying ไม่รวมในราคา",
      "Payment: 50% upfront, 50% on delivery",
      "ลิขสิทธิ์: โอนให้ลูกค้า 100% หลัง payment ครบ",
    ],
  },
  {
    num: "04",
    title: "Production",
    desc: "ผลิตงานที่มี craft จริง — film, photography, motion, social content ทุกชิ้นสร้างจาก narrative ไม่ใช่จาก template ทีม in-house ตั้งแต่ Director ถึง Post",
    investment: "100,000 – 300,000+ THB",
    timeline: "2–6 weeks",
    idealFor: "แบรนด์ที่มี direction แล้ว ต้องการ production team ที่เข้าใจ story และผลิตงานที่มีคุณภาพ",
    team: "Director + DOP/Editor + Art Director + Post Supervisor (+ crew ตาม scope)",
    subCategories: [
      {
        label: "Film / Video",
        items: [
          "Short-form video (15–60s) — เริ่มต้น 50,000 THB/piece",
          "Long-form video (1–3 min) — เริ่มต้น 100,000 THB/piece",
          "Documentary / brand film (3–10 min) — เริ่มต้น 150,000 THB",
        ],
      },
      {
        label: "Photography",
        items: [
          "Product photography set (10–20 shots) — เริ่มต้น 30,000 THB",
          "Lifestyle / campaign photography (half day) — เริ่มต้น 50,000 THB",
          "Full day shoot — เริ่มต้น 80,000 THB",
        ],
      },
      {
        label: "Motion Graphics",
        items: [
          "Social motion (15–30s) — เริ่มต้น 20,000 THB/piece",
          "Explainer / brand motion (30–60s) — เริ่มต้น 50,000 THB",
        ],
      },
      {
        label: "Social Content Suite",
        items: [
          "Content pack (10 pieces: static + motion + copy) — เริ่มต้น 40,000 THB",
        ],
      },
    ],
    deliverables: [],
    process: [],
    terms: [
      "ราคาเป็น starting price — final quote ขึ้นอยู่กับ complexity, location, talent",
      "ค่า location, talent, props, wardrobe, travel — คิดแยกตาม actual cost + 15% management fee",
      "Revision: 2 rounds edit/retouch ต่อชิ้นงาน",
      "Video revision เพิ่มเติม: 10,000 THB/round, Photo: 5,000 THB/round",
      "Raw footage / raw files: ไม่รวม — ซื้อเพิ่ม 20,000 THB",
      "Payment: 50% upfront, 50% on delivery",
      "ลิขสิทธิ์ชิ้นงาน: โอนให้ลูกค้า 100% หลัง payment ครบ",
    ],
  },
  {
    num: "05",
    title: "Event / Activation",
    desc: "ออกแบบ experience ที่คนสัมผัสได้จริง — จาก concept, spatial design, production จนถึง on-ground execution ที่ต่อเนื่องจาก campaign narrative",
    investment: "150,000 – 500,000+ THB",
    timeline: "4–8 weeks",
    idealFor: "แบรนด์ที่ต้องการสร้าง experience ที่คนจำได้ — launch event, pop-up, brand activation",
    team: "Creative Director + Event Producer + Art Director + Production Manager + AE",
    deliverables: [
      "Event Concept Deck — theme, narrative, experience flow, mood & tone",
      "Spatial / Experience Design — layout, stage design, installation concept",
      "Production Plan — vendor list, timeline, budget breakdown, logistics",
      "Content Plan — documentation strategy (photo/video สำหรับ during + after event)",
      "On-ground Execution — ØRIONS team on-site ดูแล creative direction",
      "Post-event Report — documentation, highlights, performance metrics",
    ],
    process: [
      "Week 1–2: Concept + Planning — brief, concept development, spatial design, vendor sourcing",
      "Week 3–4: Pre-production — design finalization, vendor management, rehearsal",
      "Week 5–6: Production + Event — setup, execution, documentation",
      "Week 7–8: Post-event — content edit, report, debrief",
    ],
    terms: [
      "ราคารวม creative concept + design + creative direction on-site",
      "ค่า venue, vendor, construction, F&B, talent — คิดแยกตาม actual cost + 15% management fee",
      "Concept: นำเสนอ 2 directions, เลือก 1",
      "Revision: 2 rounds ต่อ phase",
      "Payment: 40% upfront, 30% after concept approval, 30% post-event",
      "Cancellation: หลัง concept approval แล้ว ค่า creative direction ไม่คืน (40%)",
      "Documentation (photo/video) รวมในราคา — edit + delivery ภายใน 2 weeks หลัง event",
    ],
  },
  {
    num: "06",
    title: "Digital Experience",
    desc: "Narrative website, custom interface, ecommerce ที่ทุก element ถูก design มาเพื่อสร้าง perception shift — ไม่ใช่แค่เว็บสวย แต่เว็บที่เปลี่ยนวิธีที่คนมองแบรนด์",
    investment: "80,000 – 250,000 THB",
    timeline: "3–6 weeks",
    idealFor: "แบรนด์ที่ต้องการ digital presence ที่สะท้อนตัวตน — ไม่ใช่เว็บ template",
    team: "Creative Director + UX/UI Designer + Developer + AE",
    scopeOptions: [
      "Landing Page / Microsite → 1–3 pages, responsive, animation — 80,000–120,000 THB",
      "Narrative Website → 5–10 pages, custom design, CMS — 120,000–200,000 THB",
      "Custom Interface / Ecommerce → Custom UI/UX, product system — 180,000–250,000+ THB",
    ],
    deliverables: [
      "UX Wireframe — structure + user flow ก่อน design",
      "UI Design — full visual design ทุกหน้า (Figma)",
      "Development — responsive, optimized, SEO-ready",
      "CMS Setup — ให้ลูกค้าแก้ไข content เองได้",
      "Launch Support — deploy + QA + 2 weeks post-launch bug fix",
    ],
    process: [
      "Week 1: Brief + UX — sitemap, wireframe, user flow",
      "Week 2–3: UI Design — 2 design directions → เลือก 1 → design ทุกหน้า",
      "Week 3–5: Development — build, CMS, responsive, testing",
      "Week 5–6: QA + Launch — review, fix, deploy, handover",
    ],
    terms: [
      "ราคารวม design + development + CMS + 2 weeks post-launch support",
      "Content (text + images): ลูกค้าจัดหา หรือเพิ่ม copywriting +20,000 THB",
      "Domain + hosting: ลูกค้ารับผิดชอบ (ØRIONS แนะนำ + setup ให้ฟรี)",
      "Design direction: นำเสนอ 2 directions, เลือก 1",
      "Revision: 2 rounds per phase",
      "Round เพิ่มเติม: 10,000 THB/round",
      "Payment: 40% upfront, 30% after design approval, 30% on launch",
      "ลิขสิทธิ์ design + code: โอนให้ลูกค้า 100% หลัง payment ครบ",
    ],
  },
];

interface Retainer {
  num: string;
  tier: string;
  title: string;
  badge?: string;
  subtitle: string;
  investment: string;
  minCommitment: string;
  idealFor: string;
  team: string;
  communication: string;
  monthlyScope: string[];
  bonus: string[];
  terms: string[];
}

const retainers: Retainer[] = [
  {
    num: "07",
    tier: "TIER 1",
    title: "Pulse",
    subtitle: "Stay visible, stay consistent",
    investment: "40,000 – 80,000 THB / month",
    minCommitment: "3 months",
    idealFor: "แบรนด์ที่มี direction แล้ว ต้องการทีมดูแล channel ให้ content ออกสม่ำเสมอ ไม่หลุด tone",
    team: "Account Executive + Content Creator + Designer",
    communication: "LINE/Slack + Monthly review call (30 min)",
    monthlyScope: [
      "Social media management & scheduling (ทุก platform ที่ตกลงกัน)",
      "Community management & response (จันทร์–ศุกร์, office hours)",
      "Monthly content calendar (draft + approval flow)",
      "4–8 content pieces / month (graphic + copy, ตาม tier ราคา)",
      "Basic performance report (reach, engagement, growth)",
      "Platform optimization (bio, highlights, link-in-bio)",
    ],
    bonus: [
      "Free content audit ก่อนเริ่มงาน (ปกติ 15,000 THB)",
    ],
    terms: [
      "40K/mo = 4 pieces + basic management",
      "60K/mo = 6 pieces + active community mgmt",
      "80K/mo = 8 pieces + full management",
      "Content ที่เกิน scope: 3,000 THB/piece (graphic) / 5,000 THB/piece (motion)",
      "Revision: 2 rounds ต่อ piece",
      "Turnaround: 3–5 business days ต่อ piece",
      "ไม่รวม ad budget / media buying — เพิ่มได้ +15% management fee ของ ad spend",
      "Payment: ชำระล่วงหน้าทุกวันที่ 1 ของเดือน",
      "Cancellation: แจ้งล่วงหน้า 30 วัน หลัง minimum 3 months",
    ],
  },
  {
    num: "08",
    tier: "TIER 2",
    title: "Flow",
    badge: "MOST POPULAR",
    subtitle: "Ongoing creative + production engine",
    investment: "80,000 – 150,000 THB / month",
    minCommitment: "3 months",
    idealFor: "แบรนด์ที่ต้องการ creative team ประจำ คิด+ผลิตให้ — ไม่ต้องจ้าง freelance แยก",
    team: "Creative Director + Art Director + Content Creator + Designer + AE",
    communication: "LINE/Slack + Bi-weekly strategy calls (45 min)",
    monthlyScope: [
      "Everything in Pulse",
      "Monthly creative direction & campaign concept (mini brief ทุกเดือน)",
      "2–4 creative sets / month (1 set = 1 Key Visual + 3 adaptations + copy)",
      "1–2 short-form videos (30–60s, shot/edited/graded)",
      "Copywriting & caption direction สำหรับทุก post",
      "Bi-weekly strategy calls (45 min) — review + plan ahead",
      "Performance review + strategic recommendation",
    ],
    bonus: [
      "Free Demand Strategy mini session ก่อนเริ่มงาน (ปกติ 50,000 THB)",
      "Priority turnaround 48hr สำหรับ urgent requests (ปกติ 5 days)",
    ],
    terms: [
      "80K/mo = 2 sets + 1 video",
      "120K/mo = 3 sets + 1 video",
      "150K/mo = 4 sets + 2 videos",
      "Creative set เพิ่มเติม: 12,000 THB/set",
      "Video เพิ่มเติม: 35,000 THB/piece (short-form)",
      "Revision: 2 rounds ต่อ creative set, 2 rounds ต่อ video",
      "ไม่รวม ad budget / media buying — เพิ่มได้ +12% management fee",
      "Payment: ชำระล่วงหน้าทุกวันที่ 1 ของเดือน",
      "Cancellation: แจ้งล่วงหน้า 30 วัน หลัง minimum 3 months",
    ],
  },
  {
    num: "09",
    tier: "TIER 3",
    title: "Orbit",
    badge: "PREMIUM",
    subtitle: "Your creative partner — full access",
    investment: "120,000 – 180,000 THB / month",
    minCommitment: "6 months",
    idealFor: "แบรนด์ที่ต้องการ ØRIONS เป็น creative partner เต็มตัว เหมือนมี in-house creative team",
    team: "Dedicated Creative Director + Art Director + Director + Editor + Designer + AE",
    communication: "LINE/Slack (direct to CD) + Weekly check-in + Monthly strategy session (90 min)",
    monthlyScope: [
      "Everything in Flow",
      "Dedicated Creative Director (single point of contact)",
      "5 creative sets / month (48hr turnaround)",
      "2 short-form + 1 long-form video / month (long-form up to 3 min)",
      "Quarterly campaign concept & narrative refresh",
      "Monthly strategy session with leadership (90 min)",
      "Media planning & buying support (media budget separate)",
      "Website updates & minor iteration (ถ้ามีเว็บที่ ØRIONS สร้าง)",
    ],
    bonus: [
      "Free full Demand Strategy session (ปกติ 150,000 THB)",
      "1 free Event/Activation concept per quarter (ปกติ 80,000 THB/concept)",
      "Priority access to ØRIONS Studio IP collaborations",
      "Creative set ส่วนเกิน discounted: 10,000 THB/set (ปกติ 12,000)",
    ],
    terms: [
      "120K/mo = 5 sets + 2 short + 1 long video",
      "150K/mo = เพิ่ม media support",
      "180K/mo = full scope + event concepts",
      "Video เพิ่มเติม: Short 30,000 THB, Long 60,000 THB",
      "Revision: 3 rounds ต่อ creative set, 3 rounds ต่อ video",
      "NDA: sign ก่อนเริ่มงาน (standard ØRIONS NDA)",
      "Cancellation: แจ้งล่วงหน้า 60 วัน หลัง minimum 6 months",
      "Early termination fee: ค่า retainer 1 เดือน ถ้ายกเลิกก่อน 6 months",
    ],
  },
];

/* ── Expandable Core Service Card ── */
const CoreServiceCard = ({ s }: { s: ServiceDetail }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-t border-border group cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-8 md:py-12">
        <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/30 shrink-0">
            {s.num}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="font-display text-[clamp(24px,4vw,48px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                {s.title}
              </h3>
              {s.badge && (
                <span className="font-mono text-[9px] tracking-[0.15em] text-accent-warm border border-accent-warm/40 px-2 py-0.5">
                  {s.badge}
                </span>
              )}
            </div>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-2xl">
              {s.desc}
            </p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground text-xl font-light shrink-0 ml-4"
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-12 pl-[calc(10px+1rem)] md:pl-[calc(10px+2rem)]">
              {/* Row 1: Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border border-border/30 p-6">
                <div>
                  <SectionLabel>Investment</SectionLabel>
                  <p className="font-mono text-[13px] text-accent-warm mt-2">{s.investment}</p>
                </div>
                <div>
                  <SectionLabel>Timeline</SectionLabel>
                  <p className="font-mono text-[13px] text-foreground/70 mt-2">{s.timeline}</p>
                </div>
                <div className="col-span-2">
                  <SectionLabel>Team</SectionLabel>
                  <p className="font-body text-[13px] text-foreground/60 mt-2">{s.team}</p>
                </div>
              </div>

              {/* Ideal for */}
              <div className="mb-8">
                <SectionLabel>Ideal for</SectionLabel>
                <p className="font-body text-[13px] text-muted-foreground mt-3">{s.idealFor}</p>
              </div>

              {/* Scope Options (Digital Experience) */}
              {s.scopeOptions && s.scopeOptions.length > 0 && (
                <div className="mb-8">
                  <SectionLabel>Scope Options</SectionLabel>
                  <ul className="space-y-2 mt-3">
                    {s.scopeOptions.map((opt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-warm text-[8px] mt-1.5">→</span>
                        <span className="font-body text-[13px] text-foreground/70">{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sub-categories (Production) */}
              {s.subCategories && s.subCategories.length > 0 && (
                <div className="mb-8">
                  <SectionLabel>Deliverables</SectionLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {s.subCategories.map((cat) => (
                      <div key={cat.label}>
                        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-foreground/50 mb-2">{cat.label}</p>
                        <ul className="space-y-1.5">
                          {cat.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent-warm text-[8px] mt-1.5">✦</span>
                              <span className="font-body text-[13px] text-foreground/70">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables + Process */}
              {(s.deliverables.length > 0 || s.process.length > 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {s.deliverables.length > 0 && (
                    <div>
                      <SectionLabel>Deliverables</SectionLabel>
                      <ul className="space-y-2 mt-3">
                        {s.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent-warm text-[8px] mt-1.5">✦</span>
                            <span className="font-body text-[13px] text-foreground/70">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {s.process.length > 0 && (
                    <div>
                      <SectionLabel>Process</SectionLabel>
                      <ul className="space-y-2 mt-3">
                        {s.process.map((p, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="font-mono text-[10px] text-muted-foreground/40 mt-0.5 shrink-0 w-4">{i + 1}.</span>
                            <span className="font-body text-[13px] text-foreground/70">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Terms */}
              {s.terms.length > 0 && (
                <div className="border-t border-border/30 pt-6">
                  <SectionLabel>Terms & Conditions</SectionLabel>
                  <ul className="space-y-1.5 mt-3">
                    {s.terms.map((t, i) => (
                      <li key={i} className="font-body text-[12px] text-muted-foreground/60">— {t}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Retainer Card ── */
const RetainerCard = ({ r }: { r: Retainer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-t border-border group cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-8 md:py-10">
        <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/30 shrink-0">
            {r.num}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/40">{r.tier}</p>
              {r.badge && (
                <span className="font-mono text-[9px] tracking-[0.15em] text-accent-warm border border-accent-warm/40 px-2 py-0.5">
                  {r.badge}
                </span>
              )}
            </div>
            <h3 className="font-display text-[clamp(22px,3.5vw,40px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
              {r.title}
            </h3>
            <p className="font-body text-[14px] text-muted-foreground">{r.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-4">
          <span className="font-mono text-[10px] tracking-[0.08em] text-accent-warm/50 hidden md:inline">
            {r.investment}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-muted-foreground text-xl font-light"
          >
            +
          </motion.span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-[calc(10px+1rem)] md:pl-[calc(10px+2rem)]">
              {/* Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border border-border/30 p-6">
                <div>
                  <SectionLabel>Investment</SectionLabel>
                  <p className="font-mono text-[13px] text-accent-warm mt-2">{r.investment}</p>
                </div>
                <div>
                  <SectionLabel>Min. Commitment</SectionLabel>
                  <p className="font-mono text-[13px] text-foreground/70 mt-2">{r.minCommitment}</p>
                </div>
                <div className="col-span-2">
                  <SectionLabel>Team</SectionLabel>
                  <p className="font-body text-[13px] text-foreground/60 mt-2">{r.team}</p>
                </div>
              </div>

              {/* Ideal for + Communication */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <SectionLabel>Ideal for</SectionLabel>
                  <p className="font-body text-[13px] text-muted-foreground mt-3">{r.idealFor}</p>
                </div>
                <div>
                  <SectionLabel>Communication</SectionLabel>
                  <p className="font-body text-[13px] text-foreground/60 mt-3">{r.communication}</p>
                </div>
              </div>

              {/* Monthly Scope */}
              <div className="mb-8">
                <SectionLabel>Monthly Scope</SectionLabel>
                <ul className="space-y-2 mt-3">
                  {r.monthlyScope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-warm text-[8px] mt-1.5">✦</span>
                      <span className="font-body text-[13px] text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus */}
              {r.bonus.length > 0 && (
                <div className="mb-8 border-l-2 border-accent-warm/30 pl-4">
                  <SectionLabel>Bonus</SectionLabel>
                  <ul className="space-y-2 mt-3">
                    {r.bonus.map((b, i) => (
                      <li key={i} className="font-body text-[13px] text-accent-warm/80">★ {b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Terms */}
              <div className="border-t border-border/30 pt-6">
                <SectionLabel>Terms & Conditions</SectionLabel>
                <ul className="space-y-1.5 mt-3">
                  {r.terms.map((t, i) => (
                    <li key={i} className="font-body text-[12px] text-muted-foreground/60">— {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Label helper ── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">
    {children}
  </p>
);

/* ══════════════════════════ PAGE ══════════════════════════ */
const ServicesPage2 = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Services — ØRIONS"
        description="6 Core Services + 3 Retainer Models. Demand Strategy, Creative Transformation, Signature Campaign, Production, Event/Activation, Digital Experience."
        path="/services"
        keywords="creative agency services, brand transformation, campaign, production, event activation, digital experience, demand strategy"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="min-h-[55vh] flex items-end px-4 sm:px-6 md:px-12 pb-12 md:pb-20 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6"
          >
            <span className="text-accent-warm mr-2">✦</span> Services & Retainers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-[clamp(40px,8vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6"
          >
            SERVICES.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-body text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-lg"
          >
            6 Core Services + 3 Retainer Models<br />
            Complete scope, deliverables, process, pricing, terms & conditions.
          </motion.p>
        </div>
      </section>

      {/* ── Start Here ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative border border-accent-warm/30 p-8 md:p-12 hover:border-accent-warm/50 transition-colors duration-300">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm mb-6">
                ★ Start here
              </p>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6">
                ยังไม่ชัดว่าจะเริ่มจากอะไร? ลองดูสิ่งนี้:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <span className="font-display text-[18px] md:text-[22px] tracking-[0.02em] text-foreground">
                  Demand Strategy
                </span>
                <span className="text-muted-foreground/30 hidden sm:inline self-center">—</span>
                <span className="font-body text-[14px] text-muted-foreground self-center">หา insight ก่อนลงทุนผลิต</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
                <span className="font-display text-[18px] md:text-[22px] tracking-[0.02em] text-foreground">
                  Creative Transformation
                </span>
                <span className="text-muted-foreground/30 hidden sm:inline self-center">—</span>
                <span className="font-body text-[14px] text-muted-foreground self-center">เปลี่ยน identity ทั้งระบบ</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">
              Core Services
            </p>
          </AnimatedSection>
          {coreServices.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.05}>
              <CoreServiceCard s={s} />
            </AnimatedSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* ── Retainer ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">
              Retainer Models
            </p>
          </AnimatedSection>
          {retainers.map((r, i) => (
            <AnimatedSection key={r.num} delay={i * 0.05}>
              <RetainerCard r={r} />
            </AnimatedSection>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* ── General Terms ── */}
      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">
              General Terms & Conditions
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Payment",
                  items: [
                    "สกุลเงิน: THB ทั้งหมด",
                    "ราคาไม่รวม VAT 7%",
                    "ชำระภายใน 15 วันหลังได้รับ invoice",
                    "ค้างชำระเกิน 30 วัน: สงวนสิทธิ์หยุดงาน",
                  ],
                },
                {
                  label: "Scope & Change Request",
                  items: [
                    "งานนอก scope คิดเพิ่มตาม rate card",
                    "Change request แจ้งเป็นลายลักษณ์อักษร",
                    "ØRIONS ประเมิน impact ภายใน 24 ชม.",
                  ],
                },
                {
                  label: "Revision Policy",
                  items: [
                    "ทุก service มี revision rounds ตามที่ระบุ",
                    "\"1 round\" = feedback ครั้งเดียวที่รวบรวมมาแล้ว",
                    "Feedback ควรส่งภายใน 3 business days",
                  ],
                },
                {
                  label: "Intellectual Property",
                  items: [
                    "ลิขสิทธิ์โอนให้ลูกค้า 100% หลัง payment ครบ",
                    "ØRIONS สงวนสิทธิ์ใช้ชิ้นงานใน portfolio",
                    "Third-party assets: ลูกค้ารับผิดชอบ license",
                  ],
                },
              ].map((section) => (
                <div key={section.label} className="border border-border/30 p-6">
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-foreground/50 mb-3">{section.label}</p>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="font-body text-[12px] text-muted-foreground/60">— {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">✦</span> Ready?
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              LET'S BUILD<br />
              <span className="text-accent-gradient">SOMETHING WORTH NOTICING.</span>
            </h2>
            <div className="flex items-center justify-center gap-8 flex-wrap mt-10">
              <Link
                to="/contact"
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Start a project
              </Link>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                View our work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage2;
