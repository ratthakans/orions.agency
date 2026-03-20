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
    title: "Creative Direction",
    desc: {
      en: "Define your brand story and positioning — the idea that makes everything else work.",
      th: "กำหนดเรื่องราวและตำแหน่งของแบรนด์ — ไอเดียที่ทำให้ทุกอย่างได้ผล",
    },
    type: "project",
    ideal: {
      en: "Brands that need clarity before content. When your story isn't clear, nothing else works.",
      th: "แบรนด์ที่ต้องการความชัดเจนก่อน content เมื่อเรื่องราวไม่ชัด สิ่งอื่นก็ไม่ได้ผล",
    },
    process: {
      en: ["Brand & audience audit", "Positioning strategy", "Narrative design", "Creative direction"],
      th: ["ตรวจสอบแบรนด์และกลุ่มเป้าหมาย", "กลยุทธ์ positioning", "ออกแบบ narrative", "Creative direction"],
    },
    deliverables: {
      en: ["Brand positioning", "Core narrative", "Creative direction", "Brand story framework", "Messaging guidelines"],
      th: ["Brand positioning", "Core narrative", "Creative direction", "Brand story framework", "แนวทางการสื่อสาร"],
    },
  },
  {
    num: "02",
    title: "Campaign Development",
    desc: {
      en: "Turn ideas into strong campaigns that people remember and act on.",
      th: "เปลี่ยนไอเดียให้เป็นแคมเปญที่คนจดจำและลงมือทำ",
    },
    type: "project",
    ideal: {
      en: "Product launches, seasonal campaigns, or when a brand needs a strong creative idea that drives real results.",
      th: "เปิดตัวผลิตภัณฑ์ แคมเปญตามฤดูกาล หรือเมื่อแบรนด์ต้องการไอเดียที่สร้างผลลัพธ์จริง",
    },
    process: {
      en: ["Brief & insight", "Concept development", "Campaign structure", "Launch & measure"],
      th: ["บรีฟและ insight", "พัฒนาคอนเซปต์", "โครงสร้างแคมเปญ", "เปิดตัวและวัดผล"],
    },
    deliverables: {
      en: ["Campaign concept", "Creative idea", "Communication structure", "Key visual direction", "Launch strategy"],
      th: ["คอนเซปต์แคมเปญ", "ไอเดียครีเอทีฟ", "โครงสร้างการสื่อสาร", "ทิศทาง key visual", "กลยุทธ์เปิดตัว"],
    },
  },
  {
    num: "03",
    title: "Content Production",
    desc: {
      en: "Bring ideas to life through cinematic execution — video, visual, and campaign assets.",
      th: "ทำให้ไอเดียเป็นจริงผ่านการผลิตระดับภาพยนตร์ — วิดีโอ ภาพ และ campaign assets",
    },
    type: "project",
    ideal: {
      en: "Brands that need high-quality production to bring their ideas and campaigns to life.",
      th: "แบรนด์ที่ต้องการงานผลิตคุณภาพสูงเพื่อทำให้ไอเดียและแคมเปญเป็นจริง",
    },
    process: {
      en: ["Pre-production & scripting", "Production & filming", "Post-production & editing", "Delivery & cutdowns"],
      th: ["Pre-production และเขียนบท", "ถ่ายทำ", "Post-production และตัดต่อ", "ส่งมอบและตัด cutdowns"],
    },
    deliverables: {
      en: ["Script & storyboard", "Hero video production", "Color grading & sound design", "Campaign assets", "Social cutdowns"],
      th: ["บทและ storyboard", "ผลิตวิดีโอหลัก", "Color grading และ sound design", "Campaign assets", "ตัด cutdowns สำหรับโซเชียล"],
    },
  },
  {
    num: "04",
    title: "Creative Retainer",
    desc: {
      en: "Keep your brand consistent, relevant, and impactful over time.",
      th: "รักษาความสม่ำเสมอ ตรงประเด็น และมีผลกระทบของแบรนด์อย่างต่อเนื่อง",
    },
    type: "retainer",
    ideal: {
      en: "Brands that need ongoing creative direction and campaign continuity — not just content, but ideas that keep working.",
      th: "แบรนด์ที่ต้องการ creative direction ต่อเนื่องและความต่อเนื่องของแคมเปญ — ไม่ใช่แค่ content แต่เป็นไอเดียที่ทำงานต่อไป",
    },
    process: {
      en: ["Monthly creative review", "Campaign extension", "Content guidance", "Performance optimization"],
      th: ["ทบทวนครีเอทีฟรายเดือน", "ขยายแคมเปญ", "แนวทาง content", "ปรับปรุงประสิทธิภาพ"],
    },
    deliverables: {
      en: ["Ongoing creative direction", "Campaign extension", "Content guidance", "Monthly creative review", "Brand consistency audit"],
      th: ["Creative direction ต่อเนื่อง", "ขยายแคมเปญ", "แนวทาง content", "ทบทวนครีเอทีฟรายเดือน", "ตรวจสอบความสม่ำเสมอของแบรนด์"],
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
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What creative services does ØRIONS offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ØRIONS offers Creative Direction, Campaign Development, Content Production, and Creative Retainer — all driven by ideas first, not just execution.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the right service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your brand story isn't clear, start with Creative Direction. If you need a strong campaign, go with Campaign Development. If you need production, Content Production. For ongoing support, Creative Retainer.",
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
        title="Creative Services — Ideas First | ØRIONS"
        description="ØRIONS services: Creative Direction, Campaign Development, Content Production, and Creative Retainer. We create ideas first, then turn them into campaigns that work."
        path="/services"
        keywords="creative direction, campaign development, content production, creative retainer, idea-driven agency"
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[
                    { label: "Creative Direction", price: "60,000 – 100,000", unit: "THB", scope: "Per Project" },
                    { label: "Campaign Development", price: "200,000 – 400,000", unit: "THB", scope: "Per Project", featured: true },
                    { label: "Creative Retainer", price: "80,000 – 150,000", unit: "THB / month", scope: "Ongoing" },
                  ].map((tier) => (
                    <div key={tier.label} className={`border ${tier.featured ? "border-accent-warm/30 bg-accent-warm/[0.03]" : "border-border"} p-8`}>
                      {tier.featured && <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3 block">★ Most Popular</span>}
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-2">{tier.scope}</p>
                      <h3 className="font-display text-[22px] tracking-[0.02em] text-foreground mb-4">{tier.label}</h3>
                      <div className="border-t border-border pt-4">
                        <p className="font-display text-[20px] text-foreground">฿{tier.price}</p>
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
                      q: "How do I choose the right service?",
                      a: "If your story isn't clear, start with Creative Direction. If you need a campaign, go with Campaign Development. For production, Content Production. For ongoing support, Creative Retainer.",
                    },
                    {
                      q: "What makes ØRIONS different from other agencies?",
                      a: "We focus on ideas first. We're not a production house or a social media agency — we create the ideas that make everything else work.",
                    },
                    {
                      q: "Can you help define scope and budget?",
                      a: "Yes. Many clients come with a goal rather than a clear scope, and we help shape the right deliverables, timeline, and budget range.",
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
