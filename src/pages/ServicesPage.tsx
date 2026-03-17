import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    num: "01",
    title: "Content",
    subtitle: { en: "Social content · Short video · Content system", th: "Social content · วิดีโอสั้น · ระบบ content" },
    price: "50k–150k/month",
    what: { en: "We build and manage your brand's content engine — from social media posts and short-form videos to full content calendars and production systems.", th: "เราสร้างและบริหาร content engine ของแบรนด์คุณ — ตั้งแต่ social media posts, วิดีโอสั้น ไปจนถึง content calendar และระบบการผลิต" },
    when: { en: "When your brand needs consistent, high-quality content but doesn't have the team or time to produce it.", th: "เมื่อแบรนด์ต้องการ content ที่สม่ำเสมอและคุณภาพสูง แต่ไม่มีทีมหรือเวลาผลิตเอง" },
    get: { en: "Content calendar, social posts, short-form videos, performance reports, monthly strategy reviews.", th: "Content calendar, social posts, วิดีโอสั้น, performance reports, monthly strategy reviews" },
  },
  {
    num: "02",
    title: "Think",
    subtitle: { en: "Brand narrative · Campaign concept · Creative direction", th: "Brand narrative · คอนเซ็ปต์แคมเปญ · Creative direction" },
    price: "150k–350k",
    what: { en: "Strategic thinking and creative direction for brands that need clarity before they need content. We define who you are, what you stand for, and how you should communicate.", th: "การคิดเชิงกลยุทธ์และ creative direction สำหรับแบรนด์ที่ต้องการความชัดเจนก่อน content" },
    when: { en: "When launching a new brand, repositioning, or developing a campaign that needs real strategic depth.", th: "เมื่อเปิดตัวแบรนด์ใหม่ ปรับ positioning หรือพัฒนาแคมเปญที่ต้องการ strategic depth" },
    get: { en: "Brand narrative document, creative brief, campaign concept, mood boards, messaging architecture.", th: "Brand narrative document, creative brief, campaign concept, mood boards, messaging architecture" },
  },
  {
    num: "03",
    title: "Produce",
    subtitle: { en: "Campaign film · Brand documentary · Video production", th: "Campaign film · Brand documentary · วิดีโอโปรดักชั่น" },
    price: "100k–600k",
    what: { en: "Cinematic production from script to screen. We produce campaign films, brand documentaries, and video content with the quality of a production house and the strategic clarity of an agency.", th: "งานผลิตระดับภาพยนตร์ตั้งแต่บทจนถึงหน้าจอ เราผลิต campaign film, brand documentary และ video content ด้วยคุณภาพโปรดักชั่นเฮาส์" },
    when: { en: "When you need film or video that tells a story — not just looks good.", th: "เมื่อคุณต้องการภาพยนตร์หรือวิดีโอที่เล่าเรื่อง — ไม่ใช่แค่สวย" },
    get: { en: "Script development, production management, filming, post-production, final deliverables.", th: "Script development, production management, ถ่ายทำ, post-production, deliverables ทุก format" },
  },
  {
    num: "04",
    title: "Develop",
    subtitle: { en: "New brand · Product concept · IP development", th: "แบรนด์ใหม่ · Product concept · IP development" },
    price: "200k–1M+",
    what: { en: "Full brand development from zero — identity, narrative, product concept, and intellectual property creation.", th: "การพัฒนาแบรนด์เต็มรูปแบบตั้งแต่ศูนย์ — identity, narrative, product concept และการสร้าง IP" },
    when: { en: "When you're building a brand, product, or concept from scratch and need a team that can think and execute at a high level.", th: "เมื่อคุณกำลังสร้างแบรนด์ ผลิตภัณฑ์ หรือคอนเซ็ปต์จากศูนย์" },
    get: { en: "Brand identity system, naming, positioning, product concept, launch strategy, IP documentation.", th: "ระบบ brand identity, naming, positioning, product concept, launch strategy, IP documentation" },
  },
];

const ServicesPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Services — ØRIONS Creative Agency</title>
        <meta name="description" content="Creative services: Content, Think, Produce, Develop." />
        <link rel="canonical" href="https://orions.agency/services" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-muted-foreground/50 mb-10">Services</p>
              <h1 className="font-display text-[clamp(48px,6.5vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10 max-w-3xl">
                {t(<>Four ways to<br />work with <span className="text-accent-gradient">ORIONS.</span></>, <>สี่วิธีทำงาน<br />กับ <span className="text-accent-gradient">ORIONS</span></>)}
              </h1>
              <p className="font-body text-[14px] leading-[1.9] text-muted-foreground/60 max-w-lg">
                {t(
                  "From monthly content to full brand development. Choose the service that matches where your brand is right now.",
                  "ตั้งแต่ content รายเดือนไปจนถึงการพัฒนาแบรนด์เต็มรูปแบบ"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto">
            {services.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.04}>
                <div className="border-t border-divider/50 py-24 md:py-28">
                  <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-24 items-start">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/25 block mb-5">{s.num}</span>
                      <h2 className="font-display text-[clamp(52px,6vw,88px)] leading-[0.88] tracking-[0.01em] text-foreground mb-4">{s.title}</h2>
                      <p className="font-body text-[12px] text-muted-foreground/40 mb-5">{s.subtitle[lang]}</p>
                      <span className="font-mono text-[10px] tracking-[0.14em] text-accent-gradient">฿{s.price}</span>
                    </div>
                    <div className="space-y-12">
                      <div>
                        <h4 className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground/25 mb-5">{t("What it is", "คืออะไร")}</h4>
                        <p className="font-body text-[14px] leading-[1.9] text-muted-foreground/60">{s.what[lang]}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground/25 mb-5">{t("When to use it", "เมื่อไหร่ควรใช้")}</h4>
                        <p className="font-body text-[14px] leading-[1.9] text-muted-foreground/60">{s.when[lang]}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground/25 mb-5">{t("What clients get", "ลูกค้าได้อะไร")}</h4>
                        <p className="font-body text-[14px] leading-[1.9] text-muted-foreground/40">{s.get[lang]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
