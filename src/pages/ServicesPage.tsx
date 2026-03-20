import { useState } from "react";
import { Link } from "react-router-dom";
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
  type: "retainer" | "project";
  ideal: { en: string; th: string };
  process: { en: string[]; th: string[] };
  deliverables: { en: string[]; th: string[] };
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
      en: ["Script & storyboard", "Hero video", "Color grading & sound", "Campaign assets", "Social cutdowns"],
      th: ["บทและ storyboard", "วิดีโอหลัก", "Color grading และ sound", "Campaign assets", "Social cutdowns"],
    },
  },
  {
    num: "04",
    title: "Creative Retainer",
    desc: {
      en: "Keep your brand consistent, relevant, and impactful over time.",
      th: "รักษาความสม่ำเสมอ ตรงประเด็น และมีผลกระทบอย่างต่อเนื่อง",
    },
    type: "retainer",
    ideal: {
      en: "Brands that need ongoing creative direction — not just content, but ideas that keep working month after month.",
      th: "แบรนด์ที่ต้องการ creative direction ต่อเนื่อง — ไม่ใช่แค่ content แต่เป็นไอเดียที่ทำงานต่อเนื่อง",
    },
    process: {
      en: ["Monthly creative review", "Campaign extension", "Content guidance", "Performance optimization"],
      th: ["ทบทวนครีเอทีฟรายเดือน", "ขยายแคมเปญ", "แนวทาง content", "ปรับปรุงประสิทธิภาพ"],
    },
    deliverables: {
      en: ["Ongoing creative direction", "Campaign extension", "Content guidance", "Monthly review", "Brand consistency"],
      th: ["Creative direction ต่อเนื่อง", "ขยายแคมเปญ", "แนวทาง content", "ทบทวนรายเดือน", "ความสม่ำเสมอของแบรนด์"],
    },
  },
];

const industries = [
  "Tech", "Hospitality", "Golf", "Concert / Music",
  "Lifestyle Brands", "Restaurant & Cafe", "Real Estate", "Startups",
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
        description="Creative Transformation, Creative Communication, Film & Production, and Creative Retainer. We create ideas first, then turn them into campaigns that work."
        path="/services"
        keywords="creative transformation, creative communication, film production, creative retainer, idea-driven agency"
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
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
                IDEAS FIRST.
                <br />THEN <span className="text-accent-gradient">EVERYTHING ELSE.</span>
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
          <div className="max-w-7xl mx-auto space-y-8">
            {services.map((s, i) => {
              const isExpanded = expandedService === s.num;
              return (
                <AnimatedSection key={s.num} delay={i * 0.06}>
                  <div className="group relative border border-border hover:border-accent-warm/30 transition-all duration-500">
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />

                    <div
                      className="p-8 md:p-10 cursor-pointer"
                      onClick={() => setExpandedService(isExpanded ? null : s.num)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{s.num}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-warm/60 border border-accent-warm/20 px-2.5 py-1">
                            {s.type === "retainer" ? t("Monthly Retainer", "รายเดือน") : t("Per Project", "ต่อโปรเจกต์")}
                          </span>
                          <span className={`font-mono text-[11px] text-muted-foreground/50 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}>
                            +
                          </span>
                        </div>
                      </div>

                      <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[0.9] tracking-[0.01em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-500">
                        {s.title}
                      </h2>
                      <p className="font-body text-[14px] leading-[1.7] text-foreground/70 max-w-xl">
                        {s.desc[lang]}
                      </p>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="border-t border-border/50 p-8 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

                        <div className="flex items-center gap-6 flex-wrap">
                          <button
                            onClick={() => setDialogOpen(true)}
                            className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-6 py-2.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
                          >
                            {t("Start this service", "เริ่มบริการนี้")}
                          </button>
                          <Link
                            to={`/work?service=${encodeURIComponent(s.title)}`}
                            className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
                          >
                            {t("View related work →", "ดูผลงานที่เกี่ยวข้อง →")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                  <span className="text-accent-warm/50 mr-2">⬡</span> {t("Where We Create Impact", "ที่ที่เราสร้าง Impact")}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {industries.map((ind) => (
                    <Link
                      key={ind}
                      to="/package"
                      className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground/60 border border-border/60 px-4 py-2 hover:text-foreground/80 hover:border-accent-warm/30 transition-all duration-300"
                    >
                      {ind}
                    </Link>
                  ))}
                </div>
                <Link to="/package" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                  Explore industries <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                  <span className="text-accent-warm mr-2">◎</span> {t("Simple, Clear Engagement", "ราคาชัดเจน")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { label: "Creative Transformation", price: "200,000 – 500,000", unit: "THB", scope: "Per Project" },
                    { label: "Creative Communication", price: "100,000 – 300,000", unit: "THB", scope: "Per Project", featured: true },
                    { label: "Film & Production", price: "150,000 – 400,000", unit: "THB", scope: "Per Project" },
                    { label: "Creative Retainer", price: "80,000 – 150,000", unit: "THB / month", scope: "Ongoing" },
                  ].map((tier) => (
                    <div key={tier.label} className={`border ${tier.featured ? "border-accent-warm/30 bg-accent-warm/[0.03]" : "border-border"} p-8`}>
                      {tier.featured && <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3 block">★ Most Popular</span>}
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-2">{tier.scope}</p>
                      <h3 className="font-display text-[18px] tracking-[0.02em] text-foreground mb-4">{tier.label}</h3>
                      <div className="border-t border-border pt-4">
                        <p className="font-display text-[18px] text-foreground">฿{tier.price}</p>
                        <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50 mt-1">{tier.unit}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-body text-[14px] text-muted-foreground/60 italic">
                  {t("We focus on high-impact work, not volume.", "เราโฟกัสที่งานที่สร้าง impact สูง ไม่ใช่ปริมาณ")}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
                NOT SURE WHERE
                <br />TO <span className="text-accent-gradient">START?</span>
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
