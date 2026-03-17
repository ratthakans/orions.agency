import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    num: "01",
    title: "Content Systems",
    desc: {
      en: "Ongoing content for brands that need consistency and quality.",
      th: "Content ต่อเนื่องสำหรับแบรนด์ที่ต้องการความสม่ำเสมอและคุณภาพ",
    },
    includes: ["Content Strategy", "Social Content", "Short-form Video", "Content Shooting"],
    when: {
      en: "For brands that want consistent content but don't have an in-house team.",
      th: "สำหรับแบรนด์ที่ต้องการ content สม่ำเสมอแต่ไม่มีทีมภายใน",
    },
    price: "60,000 – 200,000 THB / month",
    note: {
      en: "We work with a limited number of monthly clients to ensure quality.",
      th: "เรารับลูกค้ารายเดือนจำนวนจำกัดเพื่อรักษาคุณภาพ",
    },
    type: "retainer",
  },
  {
    num: "02",
    title: "Creative & Campaign",
    desc: {
      en: "Ideas and campaigns that define how brands are seen.",
      th: "ไอเดียและแคมเปญที่กำหนดว่าแบรนด์ถูกมองอย่างไร",
    },
    includes: ["Campaign Concept", "Brand Storytelling", "Creative Direction", "Communication Strategy"],
    when: {
      en: "For product launches, rebranding, or when a brand needs a strong campaign idea.",
      th: "สำหรับเปิดตัวผลิตภัณฑ์ รีแบรนด์ หรือเมื่อแบรนด์ต้องการไอเดียแคมเปญที่แข็งแกร่ง",
    },
    price: "250,000 – 500,000 THB per project",
    type: "project",
  },
  {
    num: "03",
    title: "Film & Production",
    desc: {
      en: "High-quality films and visual storytelling.",
      th: "ภาพยนตร์คุณภาพสูงและการเล่าเรื่องด้วยภาพ",
    },
    includes: ["Campaign Film", "Brand Video", "Documentary", "Commercial Video"],
    when: {
      en: "For brands that need high-quality visual execution.",
      th: "สำหรับแบรนด์ที่ต้องการงานภาพคุณภาพสูง",
    },
    price: "120,000 – 700,000 THB per project",
    type: "project",
  },
  {
    num: "04",
    title: "Brand Development",
    desc: {
      en: "Building new ideas, products, and brand directions.",
      th: "สร้างไอเดียใหม่ ผลิตภัณฑ์ และทิศทางแบรนด์",
    },
    includes: ["New Brand Concepts", "Product Ideas", "Sub-brand Development", "Creative Project Direction"],
    when: {
      en: "For founders or companies exploring new opportunities.",
      th: "สำหรับผู้ก่อตั้งหรือบริษัทที่กำลังสำรวจโอกาสใหม่",
    },
    price: "200,000 – 1,000,000+ THB",
    type: "project",
  },
];

const industries = [
  "Hospitality", "Lifestyle Brands", "Restaurant & Cafe", "Beauty & Wellness",
  "Real Estate", "Startups", "Automotive", "Government",
];

const ServicesPage = () => {
  const { lang, t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Services — ØRIONS Creative Agency</title>
        <meta name="description" content="Creative services: Content Systems, Creative & Campaign, Film & Production, Brand Development. We work across hospitality, lifestyle, beauty, real estate, and more." />
        <link rel="canonical" href="https://orions.agency/services" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Services
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
                FOUR WAYS TO WORK<br />WITH <span className="text-accent-gradient">ORIONS.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-lg">
                {t(
                  "From monthly content to full brand builds — choose the way that fits your needs.",
                  "ตั้งแต่ content รายเดือนไปจนถึงการสร้างแบรนด์เต็มรูปแบบ — เลือกแบบที่เหมาะกับคุณ"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services grid */}
        <section className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((s, i) => (
                <AnimatedSection key={s.num} delay={i * 0.06}>
                  <div className="group relative border border-border p-8 md:p-10 hover:border-accent-warm/30 transition-all duration-500 h-full flex flex-col">
                    {/* Da Vinci corners */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />

                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{s.num}</span>
                      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-warm/60 border border-accent-warm/20 px-2.5 py-1">
                        {s.type === "retainer" ? t("Monthly", "รายเดือน") : t("Per Project", "ต่อโปรเจกต์")}
                      </span>
                    </div>

                    {/* Title & desc */}
                    <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[0.9] tracking-[0.01em] text-foreground mb-2 group-hover:text-accent-warm transition-colors duration-500">
                      {s.title}
                    </h2>
                    <p className="font-body text-[14px] leading-[1.7] text-foreground/70 mb-6">
                      {s.desc[lang]}
                    </p>

                    {/* Includes */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.includes.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/60 border border-border/60 px-3 py-1.5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* When */}
                    <div className="mb-6">
                      <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">
                        {t("When to use", "เมื่อไหร่ควรใช้")}
                      </h4>
                      <p className="font-body text-[13px] leading-[1.7] text-muted-foreground">{s.when[lang]}</p>
                    </div>

                    {/* Price + note */}
                    <div className="border-t border-border/50 pt-5 mt-auto">
                      <p className="font-mono text-[13px] tracking-[0.05em] text-accent-warm font-medium">
                        ฿{s.price}
                      </p>
                      {s.note && (
                        <p className="font-mono text-[10px] tracking-[0.05em] text-muted-foreground/40 mt-2 italic">
                          {s.note[lang]}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                  <span className="text-accent-warm/50 mr-2">⬡</span> {t("Industries We Work With", "อุตสาหกรรมที่เราทำงานด้วย")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground/60 border border-border/60 px-4 py-2 hover:text-foreground/80 hover:border-accent-warm/30 transition-all duration-300"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
                NOT SURE WHERE<br />TO <span className="text-accent-gradient">START?</span>
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-md mx-auto mb-10">
                {t(
                  "Start with a content plan or a campaign idea. We'll figure it out together.",
                  "เริ่มจาก content plan หรือไอเดียแคมเปญ แล้วเราจะหาทางร่วมกัน"
                )}
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
      </div>
      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
};

export default ServicesPage;
