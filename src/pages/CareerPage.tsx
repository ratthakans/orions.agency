import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const positions = [
  {
    title: "Creative Marketing", type: "Full-time",
    desc: { en: "Lead creative marketing strategies for campaigns across digital and traditional media.", th: "นำกลยุทธ์การตลาดเชิงสร้างสรรค์สำหรับแคมเปญทั้งดิจิทัลและสื่อดั้งเดิม" },
    details: {
      en: ["Develop and execute creative marketing campaigns across digital and traditional channels", "Collaborate with the creative team to produce compelling campaign concepts", "Analyze campaign performance and optimize strategies based on data insights", "Manage relationships with media partners and vendors", "Stay current with industry trends and emerging marketing platforms"],
      th: ["พัฒนาและดำเนินแคมเปญการตลาดเชิงสร้างสรรค์ทั้งช่องทางดิจิทัลและสื่อดั้งเดิม", "ร่วมงานกับทีมครีเอทีฟเพื่อผลิตคอนเซ็ปต์แคมเปญที่น่าสนใจ", "วิเคราะห์ผลแคมเปญและปรับกลยุทธ์จากข้อมูล", "บริหารความสัมพันธ์กับพาร์ทเนอร์สื่อและ vendor", "ติดตามเทรนด์อุตสาหกรรมและแพลตฟอร์มการตลาดใหม่ๆ"],
    },
    requirements: {
      en: ["2+ years in marketing or advertising", "Strong understanding of digital marketing channels", "Excellent communication and presentation skills", "Portfolio of past campaigns required"],
      th: ["ประสบการณ์ 2+ ปี ในสายการตลาดหรือโฆษณา", "เข้าใจช่องทางการตลาดดิจิทัลเป็นอย่างดี", "ทักษะการสื่อสารและนำเสนอที่ดี", "ต้องมี portfolio ผลงานแคมเปญ"],
    },
  },
  {
    title: "Creative Content", type: "Full-time",
    desc: { en: "Develop compelling content narratives that connect brands with their audiences.", th: "พัฒนา content narrative ที่เชื่อมต่อแบรนด์กับกลุ่มเป้าหมาย" },
    details: {
      en: ["Create and manage content strategies for multiple brand accounts", "Write scripts, captions, and copy for social media and branded content", "Collaborate with designers and editors to produce high-quality deliverables", "Research and stay ahead of content trends across platforms", "Contribute to campaign ideation and creative brainstorming sessions"],
      th: ["สร้างและบริหาร content strategy สำหรับหลายแบรนด์", "เขียนสคริปต์ แคปชัน และ copy สำหรับโซเชียลมีเดียและ branded content", "ร่วมงานกับดีไซเนอร์และ editor เพื่อผลิตงานคุณภาพสูง", "ค้นคว้าและติดตามเทรนด์ content ในแต่ละแพลตฟอร์ม", "มีส่วนร่วมในการคิดแคมเปญและ brainstorm ไอเดียครีเอทีฟ"],
    },
    requirements: {
      en: ["1+ years in content creation or copywriting", "Strong writing skills in Thai and English", "Understanding of social media algorithms and trends", "Creative thinker with a keen eye for storytelling"],
      th: ["ประสบการณ์ 1+ ปี ด้าน content creation หรือ copywriting", "ทักษะการเขียนภาษาไทยและอังกฤษดี", "เข้าใจ algorithm และเทรนด์โซเชียลมีเดีย", "คิดสร้างสรรค์และมีสายตาด้าน storytelling"],
    },
  },
  {
    title: "Editor Senior", type: "Full-time",
    desc: { en: "Edit and produce cinematic-quality films, commercials, and branded content.", th: "ตัดต่อและผลิตงานภาพยนตร์ โฆษณา และ branded content คุณภาพสูง" },
    details: {
      en: ["Edit campaign films, brand documentaries, and commercial content", "Lead post-production workflows including color grading and sound design", "Collaborate with directors and creative leads on narrative pacing", "Manage and mentor junior editors on the team", "Maintain and optimize post-production pipelines and asset management"],
      th: ["ตัดต่อ campaign film, brand documentary และ commercial content", "ดูแล post-production workflow รวมถึง color grading และ sound design", "ร่วมงานกับผู้กำกับและ creative lead เรื่อง narrative pacing", "ดูแลและ mentor editor รุ่นน้องในทีม", "บริหารและปรับปรุง pipeline post-production และการจัดการไฟล์"],
    },
    requirements: {
      en: ["3+ years in video editing (agency or production house)", "Proficient in Premiere Pro, After Effects, DaVinci Resolve", "Strong sense of storytelling and visual rhythm", "Experience with color grading and sound design is a plus"],
      th: ["ประสบการณ์ 3+ ปี ด้านตัดต่อวิดีโอ (agency หรือ production house)", "ใช้ Premiere Pro, After Effects, DaVinci Resolve ได้คล่อง", "มี sense ด้าน storytelling และจังหวะภาพ", "มีประสบการณ์ color grading และ sound design จะพิจารณาเป็นพิเศษ"],
    },
  },
  {
    title: "Graphic Designer", type: "Full-time",
    desc: { en: "Create visual identities, layouts, and design systems for diverse brand projects.", th: "สร้าง visual identity, layout และ design system สำหรับโปรเจกต์แบรนด์" },
    details: {
      en: ["Design visual identities, key visuals, and brand collateral", "Create layouts for social media, presentations, and print materials", "Develop and maintain design systems across multiple brand projects", "Collaborate with the creative and content teams on campaign visuals", "Ensure brand consistency across all touchpoints and deliverables"],
      th: ["ออกแบบ visual identity, key visual และ brand collateral", "สร้าง layout สำหรับโซเชียลมีเดีย งานนำเสนอ และสิ่งพิมพ์", "พัฒนาและดูแล design system สำหรับหลายโปรเจกต์", "ร่วมงานกับทีมครีเอทีฟและ content ด้านภาพแคมเปญ", "ดูแลความสม่ำเสมอของแบรนด์ในทุก touchpoint"],
    },
    requirements: {
      en: ["2+ years in graphic design", "Proficient in Figma, Photoshop, Illustrator", "Strong typography and layout skills", "Portfolio showcasing brand and campaign work"],
      th: ["ประสบการณ์ 2+ ปี ด้าน graphic design", "ใช้ Figma, Photoshop, Illustrator ได้คล่อง", "ทักษะ typography และ layout แข็งแรง", "มี portfolio แสดงผลงานแบรนด์และแคมเปญ"],
    },
  },
  {
    title: "Account Executive", type: "Full-time", count: 2,
    desc: { en: "Manage client relationships and ensure smooth project delivery from brief to launch.", th: "ดูแลลูกค้าและบริหารโปรเจกต์ตั้งแต่รับ brief จนถึง launch" },
    details: {
      en: ["Serve as the primary point of contact for assigned client accounts", "Manage project briefs, timelines, and deliverable tracking", "Coordinate between clients and internal creative/production teams", "Prepare proposals, presentations, and project reports", "Identify opportunities for account growth and upselling"],
      th: ["เป็นผู้ติดต่อหลักสำหรับบัญชีลูกค้าที่รับผิดชอบ", "บริหาร brief, timeline และติดตาม deliverable", "ประสานงานระหว่างลูกค้ากับทีมครีเอทีฟ/โปรดักชั่นภายใน", "จัดเตรียม proposal, presentation และรายงานโปรเจกต์", "มองหาโอกาสขยายบัญชีและ upsell"],
    },
    requirements: {
      en: ["1-3 years in account management or client services", "Excellent organizational and multitasking skills", "Strong interpersonal and communication abilities", "Experience in advertising or creative agency preferred"],
      th: ["ประสบการณ์ 1-3 ปี ด้าน account management หรือ client services", "ทักษะจัดการและ multitask ที่ดี", "ทักษะมนุษยสัมพันธ์และการสื่อสารแข็งแรง", "มีประสบการณ์ใน agency โฆษณาจะพิจารณาเป็นพิเศษ"],
    },
  },
  {
    title: "Project Manager", type: "Full-time",
    desc: { en: "Oversee project timelines, budgets, and cross-team coordination.", th: "ดูแลไทม์ไลน์ งบประมาณ และการประสานงานระหว่างทีม" },
    details: {
      en: ["Plan, execute, and close projects on time and within budget", "Create and maintain project schedules, resource plans, and status reports", "Facilitate communication between creative, production, and account teams", "Identify and mitigate project risks proactively", "Implement and improve project management processes and tools"],
      th: ["วางแผน ดำเนินการ และปิดโปรเจกต์ตรงเวลาและอยู่ในงบ", "สร้างและดูแลตารางโปรเจกต์ แผนทรัพยากร และรายงานสถานะ", "ประสานการสื่อสารระหว่างทีมครีเอทีฟ โปรดักชั่น และ account", "ระบุและจัดการความเสี่ยงโปรเจกต์เชิงรุก", "ปรับปรุงกระบวนการและเครื่องมือบริหารโปรเจกต์"],
    },
    requirements: {
      en: ["2+ years in project management", "Experience with project management tools (Asana, Notion, etc.)", "Strong problem-solving and leadership skills", "Ability to manage multiple projects simultaneously"],
      th: ["ประสบการณ์ 2+ ปี ด้าน project management", "ใช้เครื่องมือบริหารโปรเจกต์ได้ (Asana, Notion ฯลฯ)", "ทักษะแก้ปัญหาและ leadership แข็งแรง", "สามารถจัดการหลายโปรเจกต์พร้อมกันได้"],
    },
  },
  {
    title: "Social Media Manager", type: "Full-time",
    desc: { en: "Plan, execute, and optimize social media strategies across platforms.", th: "วางแผน ดำเนินการ และ optimize กลยุทธ์โซเชียลมีเดีย" },
    details: {
      en: ["Develop and manage social media strategies for client brands", "Plan and schedule content calendars across platforms (IG, FB, TikTok, etc.)", "Monitor, analyze, and report on social media performance metrics", "Engage with communities and manage brand reputation online", "Stay updated on platform algorithm changes and emerging trends"],
      th: ["พัฒนาและบริหารกลยุทธ์โซเชียลมีเดียสำหรับแบรนด์ลูกค้า", "วางแผนและจัด content calendar ข้ามแพลตฟอร์ม (IG, FB, TikTok ฯลฯ)", "ติดตาม วิเคราะห์ และรายงาน performance metrics ของโซเชียลมีเดีย", "ดูแลชุมชนและจัดการชื่อเสียงแบรนด์ออนไลน์", "อัปเดต algorithm แพลตฟอร์มและเทรนด์ใหม่ๆ"],
    },
    requirements: {
      en: ["2+ years managing social media accounts professionally", "Data-driven with experience in analytics tools", "Creative mindset with strong copywriting skills", "Experience managing paid social campaigns is a plus"],
      th: ["ประสบการณ์ 2+ ปี บริหารโซเชียลมีเดียมืออาชีพ", "ขับเคลื่อนด้วยข้อมูลและใช้เครื่องมือวิเคราะห์ได้", "คิดสร้างสรรค์และมีทักษะ copywriting แข็งแรง", "มีประสบการณ์จัดการ paid social campaign จะพิจารณาเป็นพิเศษ"],
    },
  },
];

const CareerPage = () => {
  const { lang, t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Career — ØRIONS Creative Agency</title>
        <meta name="description" content="Join ORIONS. We're looking for creative minds who think different and connect dots." />
        <link rel="canonical" href="https://orions.agency/career" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Compact hero — same spacing as Services */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    <span className="text-accent-warm mr-2">✦</span> {t("Open Positions", "ตำแหน่งงาน")}
                  </p>
                  <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground">
                    WE'RE <span className="text-accent-gradient">HIRING.</span>
                  </h1>
                </div>
                <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-sm">
                  {t(
                    "We're looking for passionate creatives who believe in storytelling. If you think different, we want to hear from you.",
                    "เราตามหาครีเอทีฟที่เชื่อในพลังของการเล่าเรื่อง ถ้าคุณคิดต่าง เราอยากรู้จักคุณ"
                  )}
                </p>
              </div>
            </AnimatedSection>

            {/* Position count */}
            <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-6">
              {positions.reduce((acc, p) => acc + (p.count || 1), 0)} {t("positions open", "ตำแหน่งเปิดรับ")}
            </div>

            <div className="flex flex-col">
              {positions.map((pos, i) => {
                const isExpanded = expandedIndex === i;
                return (
                  <AnimatedSection key={i} delay={i * 0.04}>
                    <div className="group relative border-t border-border/50 hover:border-accent-warm/30 transition-all duration-500">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />

                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : i)}
                        className="w-full text-left py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8 px-2 md:px-6"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-display text-[22px] md:text-[28px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-500">
                              {pos.title}
                            </h3>
                            {pos.count && (
                              <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm border border-accent-warm/30 px-2 py-0.5">
                                ×{pos.count}
                              </span>
                            )}
                          </div>
                          <p className="font-body text-[13px] leading-[1.6] text-muted-foreground max-w-md">
                            {pos.desc[lang]}
                          </p>
                        </div>

                        <div className="flex items-center gap-6">
                          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground/50">
                            {pos.type}
                          </span>
                          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-foreground/40 group-hover:text-accent-warm transition-colors duration-500 flex items-center gap-2">
                            {isExpanded ? "Close" : "Details"}
                            <svg
                              className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </span>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-2 md:px-6 pb-8 md:pb-10">
                              <div className="border-t border-border/30 pt-6 md:pt-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                  <div>
                                    <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                                      {t("Responsibilities", "หน้าที่รับผิดชอบ")}
                                    </h4>
                                    <ul className="space-y-2.5">
                                      {pos.details[lang].map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                          <span className="text-accent-warm/60 mt-1.5 text-[8px]">◆</span>
                                          <span className="font-body text-[13px] leading-[1.7] text-foreground/70">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                                      {t("Requirements", "คุณสมบัติ")}
                                    </h4>
                                    <ul className="space-y-2.5">
                                      {pos.requirements[lang].map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                          <span className="text-accent-warm/60 mt-1.5 text-[8px]">◆</span>
                                          <span className="font-body text-[13px] leading-[1.7] text-foreground/70">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <div className="mt-8">
                                  <a
                                    href={`mailto:career@orions.agency?subject=Apply: ${pos.title}`}
                                    className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
                                  >
                                    {t("Apply for this position", "สมัครตำแหน่งนี้")} →
                                  </a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedSection>
                );
              })}
              <div className="border-t border-border/50" />
            </div>
          </div>
        </section>

        {/* CTA — same bottom spacing as Services industries */}
        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">△</span> Don't See Your Role?
              </p>
              <h2 className="font-display text-[clamp(32px,4vw,64px)] leading-[0.9] tracking-[0.01em] text-foreground mb-8">
                SEND US YOUR <span className="text-accent-gradient">PORTFOLIO.</span>
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-md mx-auto mb-10">
                {t(
                  "We're always open to meeting talented people. Drop us a line and tell us what you do best.",
                  "เราพร้อมพบคนเก่งเสมอ ส่งข้อความมาบอกเราว่าคุณถนัดอะไร"
                )}
              </p>
              <a
                href="mailto:career@orions.agency"
                className="inline-block font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-4 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                career@orions.agency
              </a>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CareerPage;
