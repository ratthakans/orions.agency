import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    num: "01", title: "Content",
    subtitle: "Social content · Short video · Content system",
    price: "50k–150k/month",
    what: { en: "We build and manage your brand's content engine — from social media posts and short-form videos to full content calendars and production systems.", th: "เราสร้างและบริหาร content engine ของแบรนด์คุณ — ตั้งแต่ social media posts, วิดีโอสั้น ไปจนถึง content calendar และระบบการผลิต" },
    when: { en: "When your brand needs consistent, high-quality content but doesn't have the team or time to produce it.", th: "เมื่อแบรนด์ต้องการ content ที่สม่ำเสมอและคุณภาพสูง แต่ไม่มีทีมหรือเวลาผลิตเอง" },
    get: { en: "Content calendar, social posts, short-form videos, performance reports, monthly strategy reviews.", th: "Content calendar, social posts, วิดีโอสั้น, performance reports, monthly strategy reviews" },
  },
  {
    num: "02", title: "Think",
    subtitle: "Brand narrative · Campaign concept · Creative direction",
    price: "150k–350k",
    what: { en: "Strategic thinking and creative direction for brands that need clarity before they need content. We define who you are, what you stand for, and how you should communicate.", th: "การคิดเชิงกลยุทธ์และ creative direction สำหรับแบรนด์ที่ต้องการความชัดเจนก่อน content" },
    when: { en: "When launching a new brand, repositioning, or developing a campaign that needs real strategic depth.", th: "เมื่อเปิดตัวแบรนด์ใหม่ ปรับ positioning หรือพัฒนาแคมเปญที่ต้องการ strategic depth" },
    get: { en: "Brand narrative document, creative brief, campaign concept, mood boards, messaging architecture.", th: "Brand narrative document, creative brief, campaign concept, mood boards, messaging architecture" },
  },
  {
    num: "03", title: "Produce",
    subtitle: "Campaign film · Brand documentary · Video production",
    price: "100k–600k",
    what: { en: "Cinematic production from script to screen. We produce campaign films, brand documentaries, and video content with the quality of a production house and the strategic clarity of an agency.", th: "งานผลิตระดับภาพยนตร์ตั้งแต่บทจนถึงหน้าจอ เราผลิต campaign film, brand documentary และ video content ด้วยคุณภาพโปรดักชั่นเฮาส์" },
    when: { en: "When you need film or video that tells a story — not just looks good.", th: "เมื่อคุณต้องการภาพยนตร์หรือวิดีโอที่เล่าเรื่อง — ไม่ใช่แค่สวย" },
    get: { en: "Script development, production management, filming, post-production, final deliverables.", th: "Script development, production management, ถ่ายทำ, post-production, deliverables ทุก format" },
  },
  {
    num: "04", title: "Develop",
    subtitle: "New brand · Product concept · IP development",
    price: "200k–1M+",
    what: { en: "Full brand development from zero — identity, narrative, product concept, and intellectual property creation.", th: "การพัฒนาแบรนด์เต็มรูปแบบตั้งแต่ศูนย์ — identity, narrative, product concept และการสร้าง IP" },
    when: { en: "When you're building a brand, product, or concept from scratch and need a team that can think and execute at a high level.", th: "เมื่อคุณกำลังสร้างแบรนด์ ผลิตภัณฑ์ หรือคอนเซ็ปต์จากศูนย์" },
    get: { en: "Brand identity system, naming, positioning, product concept, launch strategy, IP documentation.", th: "ระบบ brand identity, naming, positioning, product concept, launch strategy, IP documentation" },
  },
];

const industries = [
  "Hospitality", "Lifestyle Brands", "Restaurant & Cafe", "Beauty & Wellness",
  "Real Estate", "Startups", "Automotive", "Government",
];

const ServicesPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Services — ØRIONS Creative Agency</title>
        <meta name="description" content="Creative services: Content, Think, Produce, Develop. We work across hospitality, lifestyle, beauty, real estate, and more." />
        <link rel="canonical" href="https://orions.agency/services" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Compact hero */}
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
                {t("From content systems to full brand development — choose the way that fits your needs.", "ตั้งแต่ระบบ content ไปจนถึงการพัฒนาแบรนด์เต็มรูปแบบ — เลือกแบบที่เหมาะกับคุณ")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services grid — visible immediately */}
        <section className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((s, i) => (
                <AnimatedSection key={s.num} delay={i * 0.06}>
                  <div className="group relative border border-border p-8 md:p-10 hover:border-accent-warm/30 transition-all duration-500 h-full">
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />

                    {/* Header row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{s.num}</span>
                      <span className="font-mono text-[12px] tracking-[0.08em] text-accent-warm font-medium">฿{s.price}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-[clamp(40px,5vw,64px)] leading-[0.9] tracking-[0.01em] text-foreground mb-2 group-hover:text-accent-warm transition-colors duration-500">
                      {s.title}
                    </h2>
                    <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/60 mb-6">{s.subtitle}</p>

                    {/* What */}
                    <p className="font-body text-[14px] leading-[1.7] text-foreground/70 mb-6">
                      {s.what[lang]}
                    </p>

                    {/* When */}
                    <div className="mb-6">
                      <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">{t("When to use", "เมื่อไหร่ควรใช้")}</h4>
                      <p className="font-body text-[13px] leading-[1.7] text-muted-foreground">{s.when[lang]}</p>
                    </div>

                    {/* Deliverables */}
                    <div className="border-t border-border/50 pt-5">
                      <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">{t("Deliverables", "สิ่งที่ลูกค้าได้รับ")}</h4>
                      <p className="font-mono text-[11px] leading-[1.8] text-foreground/50">{s.get[lang]}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
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
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
