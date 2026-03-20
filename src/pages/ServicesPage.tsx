import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

interface Service {
  num: string;
  title: string;
  desc: { en: string; th: string };
  type: "partner" | "project";
  ideal: { en: string; th: string };
  process: { en: string[]; th: string[] };
  deliverables: { en: string[]; th: string[] };
  outcome: { en: string; th: string };
}

const services: Service[] = [
  {
    num: "01",
    title: "Creative Transformation",
    desc: {
      en: "Redefine how your brand communicates, competes, and grows — from positioning to campaign.",
      th: "ปรับเปลี่ยนวิธีที่แบรนด์สื่อสาร แข่งขัน และเติบโต — จาก positioning สู่ campaign",
    },
    type: "project",
    ideal: {
      en: "Brands ready for a complete creative overhaul — when your current approach isn't driving the results you need.",
      th: "แบรนด์ที่พร้อมปรับเปลี่ยนครีเอทีฟทั้งระบบ — เมื่อแนวทางปัจจุบันไม่สร้างผลลัพธ์ที่ต้องการ",
    },
    process: {
      en: ["Brand & demand audit", "Positioning strategy", "Narrative design", "Campaign development"],
      th: ["ตรวจสอบแบรนด์และ demand", "กลยุทธ์ positioning", "ออกแบบ narrative", "พัฒนาแคมเปญ"],
    },
    deliverables: {
      en: ["Brand positioning", "Core narrative", "Campaign concept", "Creative direction", "Communication framework"],
      th: ["Brand positioning", "Core narrative", "คอนเซปต์แคมเปญ", "Creative direction", "กรอบการสื่อสาร"],
    },
    outcome: {
      en: "A complete creative reset — clear positioning, strong narrative, and a campaign system ready to launch.",
      th: "ปรับเปลี่ยนครีเอทีฟทั้งระบบ — positioning ชัด, narrative แข็งแกร่ง และระบบแคมเปญพร้อมเปิดตัว",
    },
  },
  {
    num: "02",
    title: "Creative Communication",
    desc: {
      en: "Design the ideas and campaigns that make people care, remember, and act.",
      th: "ออกแบบไอเดียและแคมเปญที่ทำให้คนสนใจ จดจำ และลงมือทำ",
    },
    type: "project",
    ideal: {
      en: "Brands that have a story but need stronger campaigns — clear ideas that cut through noise and drive results.",
      th: "แบรนด์ที่มีเรื่องราวแล้วแต่ต้องการแคมเปญที่แข็งแกร่งกว่า — ไอเดียที่ชัดเจนและสร้างผลลัพธ์",
    },
    process: {
      en: ["Brief & insight", "Concept development", "Communication design", "Launch strategy"],
      th: ["บรีฟและ insight", "พัฒนาคอนเซปต์", "ออกแบบการสื่อสาร", "กลยุทธ์เปิดตัว"],
    },
    deliverables: {
      en: ["Campaign concept", "Key message", "Communication structure", "Content direction", "Launch plan"],
      th: ["คอนเซปต์แคมเปญ", "Key message", "โครงสร้างการสื่อสาร", "ทิศทาง content", "แผนเปิดตัว"],
    },
    outcome: {
      en: "A campaign system with a clear idea at its core — designed to cut through and drive action.",
      th: "ระบบแคมเปญที่มีไอเดียชัดเจนเป็นแกน — ออกแบบมาเพื่อโดดเด่นและกระตุ้นการกระทำ",
    },
  },
  {
    num: "03",
    title: "Film & Production",
    desc: {
      en: "Cinematic production — from script to screen. Campaign films, brand videos, and visual content.",
      th: "งานผลิตระดับภาพยนตร์ — จากบทสู่หน้าจอ Campaign film, brand video และ visual content",
    },
    type: "project",
    ideal: {
      en: "Brands that need high-quality production to bring their ideas to life — not just content, but craft.",
      th: "แบรนด์ที่ต้องการงานผลิตคุณภาพสูง — ไม่ใช่แค่ content แต่เป็นงานฝีมือ",
    },
    process: {
      en: ["Pre-production & scripting", "Production & filming", "Post-production & editing", "Delivery & cutdowns"],
      th: ["Pre-production และเขียนบท", "ถ่ายทำ", "Post-production และตัดต่อ", "ส่งมอบและตัด cutdowns"],
    },
    deliverables: {
      en: ["Script & storyboard", "Hero video", "Color grading & sound design", "Campaign assets", "Social cutdowns"],
      th: ["บทและ storyboard", "วิดีโอหลัก", "Color grading และ sound design", "Campaign assets", "Social cutdowns"],
    },
    outcome: {
      en: "Cinematic content that captures your brand's essence — hero films, campaign videos, and assets built for impact.",
      th: "Content ระดับภาพยนตร์ที่จับแก่นของแบรนด์ — hero film, campaign video และ asset ที่สร้างมาเพื่อ impact",
    },
  },
  {
    num: "04",
    title: "Creative Partner",
    desc: {
      en: "Your long-term creative think tank. We become an extension of your team.",
      th: "Think tank ครีเอทีฟระยะยาว เราเป็นส่วนขยายของทีมคุณ",
    },
    type: "partner",
    ideal: {
      en: "Brands that need an ongoing creative partner — not just deliverables, but strategic thinking that evolves with your business.",
      th: "แบรนด์ที่ต้องการพันธมิตรครีเอทีฟระยะยาว — ไม่ใช่แค่ส่งมอบงาน แต่เป็น strategic thinking ที่เติบโตไปกับธุรกิจ",
    },
    process: {
      en: ["Monthly strategic review", "Campaign evolution", "Creative direction", "Brand guardianship"],
      th: ["ทบทวนกลยุทธ์รายเดือน", "พัฒนาแคมเปญ", "Creative direction", "ดูแลแบรนด์"],
    },
    deliverables: {
      en: ["Ongoing creative direction", "Campaign evolution", "Strategic thinking", "Brand guardianship", "Content guidance"],
      th: ["Creative direction ต่อเนื่อง", "พัฒนาแคมเปญ", "Strategic thinking", "ดูแลแบรนด์", "แนวทาง content"],
    },
    outcome: {
      en: "A dedicated creative team that thinks with you — keeping your brand sharp, relevant, and always evolving.",
      th: "ทีมครีเอทีฟที่คิดไปกับคุณ — ทำให้แบรนด์คมชัด ตรงประเด็น และพัฒนาอยู่เสมอ",
    },
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://orions.agency/services" },
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "ØRIONS Creative Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc.en,
          areaServed: ["Bangkok", "Thailand", "Southeast Asia"],
        },
      })),
    },
  ],
};

const ServicesPage = () => {
  const { lang, t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Creative Services — Ideas First | ØRIONS"
        description="Creative Transformation, Creative Communication, Film & Production, and Creative Partner. We create ideas first, then turn them into campaigns that work."
        path="/services"
        keywords="creative transformation, creative communication, film production, creative partner, idea-driven agency"
        schema={servicesSchema}
      />
      <Navbar />
      <div className="pt-20">
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Services
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4 max-w-5xl">
                IDEAS FIRST.
              </h1>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
                THEN <span className="text-accent-gradient">EVERYTHING ELSE.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t(
                  "We are an idea-driven creative agency. Every service starts with a strong idea — because without the right idea, execution doesn't matter.",
                  "เราคือ idea-driven creative agency ทุกบริการเริ่มจากไอเดียที่แข็งแกร่ง — เพราะถ้าไม่มีไอเดียที่ถูกต้อง การลงมือทำก็ไม่มีความหมาย"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            {services.map((s, i) => {
              const isExpanded = expandedService === s.num;
              return (
                <AnimatedSection key={s.num} delay={i * 0.06}>
                  <div
                    className="group border-t border-border cursor-pointer hover:border-accent-warm/30 transition-colors duration-500"
                    onClick={() => setExpandedService(isExpanded ? null : s.num)}
                  >
                    <div className="flex items-center justify-between py-8 md:py-10">
                      <div className="flex items-baseline gap-6 md:gap-10">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{s.num}</span>
                        <div>
                          <div className="flex items-center gap-4 mb-1">
                            <h2 className="font-display text-[clamp(32px,4vw,56px)] tracking-[0.03em] text-foreground group-hover:text-accent-warm transition-colors duration-500">
                              {s.title}
                            </h2>
                            <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-accent-warm/60 border border-accent-warm/20 px-2 py-0.5 hidden md:inline-block">
                              {s.type === "partner" ? t("Ongoing Partnership", "พันธมิตรระยะยาว") : t("Per Project", "ต่อโปรเจกต์")}
                            </span>
                          </div>
                          <p className="font-body text-[14px] leading-[1.7] text-foreground/50 max-w-xl">
                            {s.desc[lang]}
                          </p>
                        </div>
                      </div>
                      <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground text-2xl font-light shrink-0 ml-4"
                      >
                        +
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 md:pb-14 pl-[calc(11px+1.5rem)] md:pl-[calc(11px+2.5rem)]">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                              <div>
                                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-3">
                                  {t("Ideal for", "เหมาะสำหรับ")}
                                </h3>
                                <p className="font-body text-[13px] leading-[1.7] text-muted-foreground">{s.ideal[lang]}</p>
                              </div>
                              <div>
                                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-3">
                                  {t("How we work", "วิธีการทำงาน")}
                                </h3>
                                <div className="space-y-1.5">
                                  {s.process[lang].map((step, idx) => (
                                    <span key={idx} className="font-mono text-[11px] text-muted-foreground/70 block">
                                      <span className="text-accent-warm/40 mr-1.5">{String(idx + 1).padStart(2, "0")}</span>
                                      {step}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-3">
                                  {t("Deliverables", "สิ่งที่ส่งมอบ")}
                                </h3>
                                <ul className="space-y-1.5">
                                  {s.deliverables[lang].map((d) => (
                                    <li key={d} className="font-body text-[12px] text-foreground/60 flex items-start gap-2">
                                      <span className="text-accent-warm/40 mt-0.5 text-[8px]">◆</span>
                                      {d}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Outcome */}
                            <div className="border-t border-border/30 pt-6 mb-8">
                              <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-3">
                                {t("What you walk away with", "สิ่งที่คุณจะได้รับ")}
                              </h3>
                              <p className="font-body text-[14px] leading-[1.7] text-foreground/70 max-w-2xl">
                                {s.outcome[lang]}
                              </p>
                            </div>

                            <div className="flex items-center gap-6 flex-wrap">
                              <button
                                onClick={(e) => { e.stopPropagation(); setDialogOpen(true); }}
                                className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-6 py-2.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
                              >
                                {t("Start this service", "เริ่มบริการนี้")}
                              </button>
                              <Link
                                to={`/work?service=${encodeURIComponent(s.title)}`}
                                onClick={(e) => e.stopPropagation()}
                                className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
                              >
                                {t("View related work →", "ดูผลงานที่เกี่ยวข้อง →")}
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
            <div className="border-t border-border" />
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-4">
                NOT SURE WHERE
              </h2>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                TO <span className="text-accent-gradient">START?</span>
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-md mx-auto mb-10">
                {t(
                  "Start with an idea. We'll figure out the right service, scope, and timing together.",
                  "เริ่มจากไอเดีย แล้วเราจะช่วยหาบริการ ขอบเขตงาน และเวลาที่เหมาะสมร่วมกัน"
                )}
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <button
                  onClick={() => setDialogOpen(true)}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
                >
                  Work With Us
                </button>
                <Link to="/contact" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                  Contact the team <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
};

export default ServicesPage;
