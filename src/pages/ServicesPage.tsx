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
    title: "Content Systems",
    desc: {
      en: "Ongoing content for brands that need consistency and quality — without building an in-house team.",
      th: "Content ต่อเนื่องสำหรับแบรนด์ที่ต้องการความสม่ำเสมอและคุณภาพ — โดยไม่ต้องสร้างทีมภายใน",
    },
    type: "retainer",
    ideal: {
      en: "Brands that need consistent content every month but don't have an in-house creative team.",
      th: "แบรนด์ที่ต้องการ content สม่ำเสมอทุกเดือนแต่ไม่มีทีมครีเอทีฟภายใน",
    },
    process: {
      en: ["Brand & content audit", "Monthly content calendar", "Shoot & produce", "Publish & optimize"],
      th: ["ตรวจสอบแบรนด์และ content", "วางแผน content รายเดือน", "ถ่ายทำและผลิต", "เผยแพร่และปรับปรุง"],
    },
    deliverables: {
      en: ["Content strategy", "Social media posts", "Short-form videos", "Monthly shoot days", "Performance reports"],
      th: ["กลยุทธ์ content", "โพสต์โซเชียลมีเดีย", "วิดีโอสั้น", "วันถ่ายทำรายเดือน", "รายงานผลลัพธ์"],
    },
  },
  {
    num: "02",
    title: "Creative & Campaign",
    desc: {
      en: "Ideas and campaigns that define how brands are seen — from concept to execution.",
      th: "ไอเดียและแคมเปญที่กำหนดว่าแบรนด์ถูกมองอย่างไร — ตั้งแต่คอนเซปต์ถึงการลงมือทำ",
    },
    type: "project",
    ideal: {
      en: "Product launches, rebranding, seasonal campaigns, or when a brand needs a strong creative idea.",
      th: "เปิดตัวผลิตภัณฑ์ รีแบรนด์ แคมเปญตามฤดูกาล หรือเมื่อแบรนด์ต้องการไอเดียครีเอทีฟที่แข็งแกร่ง",
    },
    process: {
      en: ["Brief & research", "Concept development", "Creative direction & production", "Launch & measure"],
      th: ["บรีฟและวิจัย", "พัฒนาคอนเซปต์", "ครีเอทีฟไดเรกชันและผลิต", "เปิดตัวและวัดผล"],
    },
    deliverables: {
      en: ["Campaign concept & story", "Creative direction", "Key visual design", "Copywriting & messaging", "Social & digital assets"],
      th: ["คอนเซปต์และเรื่องราวแคมเปญ", "ครีเอทีฟไดเรกชัน", "ออกแบบ key visual", "เขียน copy และ messaging", "Assets สำหรับโซเชียลและดิจิทัล"],
    },
  },
  {
    num: "03",
    title: "Film & Production",
    desc: {
      en: "High-quality films and visual storytelling — from brand videos to full documentaries.",
      th: "ภาพยนตร์คุณภาพสูงและการเล่าเรื่องด้วยภาพ — จาก brand video ถึงสารคดีเต็มรูปแบบ",
    },
    type: "project",
    ideal: {
      en: "Brands that need cinematic-quality visual content to tell their story.",
      th: "แบรนด์ที่ต้องการ visual content ระดับภาพยนตร์เพื่อเล่าเรื่องราว",
    },
    process: {
      en: ["Pre-production & scripting", "Production & filming", "Post-production & editing", "Delivery & cutdowns"],
      th: ["Pre-production และเขียนบท", "ถ่ายทำ", "Post-production และตัดต่อ", "ส่งมอบและตัด cutdowns"],
    },
    deliverables: {
      en: ["Script & storyboard", "Hero video production", "Color grading & sound design", "Social cutdowns", "Behind the scenes content"],
      th: ["บทและ storyboard", "ผลิตวิดีโอหลัก", "Color grading และ sound design", "ตัด cutdowns สำหรับโซเชียล", "เบื้องหลังการถ่ายทำ"],
    },
  },
  {
    num: "04",
    title: "Creative Transformation",
    desc: {
      en: "Building new ideas, products, and brand directions from the ground up.",
      th: "สร้างไอเดียใหม่ ผลิตภัณฑ์ และทิศทางแบรนด์ตั้งแต่เริ่มต้น",
    },
    type: "project",
    ideal: {
      en: "Founders, startups, or established companies exploring new brands, products, or sub-brands.",
      th: "ผู้ก่อตั้ง สตาร์ทอัพ หรือบริษัทที่กำลังสำรวจแบรนด์ ผลิตภัณฑ์ หรือ sub-brand ใหม่",
    },
    process: {
      en: ["Discovery & research", "Brand strategy", "Identity design", "Launch preparation"],
      th: ["ค้นหาและวิจัย", "กลยุทธ์แบรนด์", "ออกแบบ identity", "เตรียมเปิดตัว"],
    },
    deliverables: {
      en: ["Brand positioning & story", "Visual identity system", "Brand guidelines", "Launch content & assets", "Website direction"],
      th: ["Positioning และเรื่องราวแบรนด์", "ระบบ visual identity", "Brand guidelines", "Content และ assets สำหรับเปิดตัว", "ทิศทางเว็บไซต์"],
    },
  },
];

const industries = [
  "Hospitality", "Lifestyle Brands", "Restaurant & Cafe", "Beauty & Wellness",
  "Real Estate", "Startups", "Automotive", "Government",
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What creative services does ØRIONS offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ØRIONS offers Content Systems, Creative & Campaign, Film & Production, and Creative Transformation for brands in Bangkok, Thailand, and Southeast Asia.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the right service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you need consistent monthly output, start with Content Systems. If you need a launch, repositioning, or high-impact moment, Creative & Campaign or Film & Production is usually the better fit. Contact us and we'll help define the right scope.",
          },
        },
      ],
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
        title="Creative Agency Services in Bangkok | ØRIONS"
        description="Explore ØRIONS services: content systems, campaign strategy, film production, and creative transformation for growing brands in Bangkok and Southeast Asia."
        path="/services"
        keywords="creative agency services Bangkok, film production house Bangkok, content agency Thailand, creative transformation Bangkok"
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
                CREATIVE AGENCY SERVICES
                <br />FOR <span className="text-accent-gradient">GROWING BRANDS.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t(
                  "From monthly content to full brand builds in Bangkok — each ØRIONS service comes with clear deliverables and a strategy-first process.",
                  "ตั้งแต่ content รายเดือนไปจนถึงการสร้างแบรนด์เต็มรูปแบบในกรุงเทพฯ — แต่ละบริการของ ØRIONS มี deliverables ชัดเจนและกระบวนการที่เริ่มจาก strategy"
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
                  <span className="text-accent-warm/50 mr-2">⬡</span> {t("Industries We Work With", "อุตสาหกรรมที่เราทำงานด้วย")}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {industries.map((ind) => (
                    <Link
                      key={ind}
                      to="/industries"
                      className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground/60 border border-border/60 px-4 py-2 hover:text-foreground/80 hover:border-accent-warm/30 transition-all duration-300"
                    >
                      {ind}
                    </Link>
                  ))}
                </div>
                <Link to="/industries" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                  Explore industries <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                    <span className="text-accent-warm mr-2">◎</span> FAQs
                  </p>
                  <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                    WHAT TO EXPECT
                    <br />BEFORE WE START.
                  </h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      q: "How do we choose the right service?",
                      a: "If you need consistent monthly output, start with Content Systems. If you need a launch, repositioning, or high-impact moment, Creative & Campaign or Film & Production is usually the better fit.",
                    },
                    {
                      q: "Do you work with Bangkok-only brands?",
                      a: "No. We work with brands in Bangkok, across Thailand, and throughout Southeast Asia, but we keep the local market perspective strong.",
                    },
                    {
                      q: "Can you help define scope and budget?",
                      a: "Yes. Many clients come in with a goal rather than a clear scope, and we help shape the right deliverables, timeline, and budget range.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-t border-border pt-5">
                      <h3 className="font-body text-[16px] text-foreground mb-2">{item.q}</h3>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{item.a}</p>
                    </div>
                  ))}
                </div>
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
                  "Start with a content plan or a campaign idea. We'll figure out the right service, scope, and timing together.",
                  "เริ่มจาก content plan หรือไอเดียแคมเปญ แล้วเราจะช่วยหาบริการ ขอบเขตงาน และเวลาที่เหมาะสมร่วมกัน"
                )}
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <button
                  onClick={() => setDialogOpen(true)}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
                >
                  Start a Project
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
