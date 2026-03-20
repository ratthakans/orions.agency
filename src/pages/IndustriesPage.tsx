import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const industries = [
  { title: "Hospitality", need: { en: "Hotels and resorts need emotional storytelling that transports guests before they arrive.", th: "โรงแรมและรีสอร์ตต้องการ emotional storytelling ที่พาแขกไปก่อนจะมาถึง" }, help: { en: "We create brand films, destination content, and narrative-driven campaigns.", th: "เราสร้าง brand film, destination content และแคมเปญที่ขับเคลื่อนด้วย narrative" } },
  { title: "Lifestyle Brands", need: { en: "Lifestyle brands need to be aspirational without being inaccessible.", th: "Lifestyle brand ต้อง aspirational โดยไม่ห่างเหิน" }, help: { en: "We build brand worlds through cinematic content and campaign films.", th: "เราสร้าง brand world ผ่าน cinematic content และ campaign film" } },
  { title: "Restaurant & Cafe", need: { en: "F&B brands need to tell the story behind the food.", th: "แบรนด์ F&B ต้องเล่าเรื่องเบื้องหลังอาหาร" }, help: { en: "We produce documentary-style content and brand films.", th: "เราผลิต documentary-style content และ brand film" } },
  { title: "Beauty & Wellness", need: { en: "Beauty brands need visual storytelling that's aspirational and trustworthy.", th: "แบรนด์ความงามต้องการ visual storytelling ที่ aspirational และน่าเชื่อถือ" }, help: { en: "We create campaign films and content systems that build desire and trust.", th: "เราสร้าง campaign film และระบบ content ที่สร้างความต้องการและความไว้วางใจ" } },
  { title: "Real Estate", need: { en: "Property developers need to sell a vision — a life, not just a building.", th: "Developer ต้องขายวิสัยทัศน์ — ชีวิต ไม่ใช่แค่ตึก" }, help: { en: "We produce brand documentaries and narrative content.", th: "เราผลิต brand documentary และ narrative content" } },
  { title: "Startups", need: { en: "Startups need brand awareness and credibility fast.", th: "สตาร์ทอัพต้องสร้าง brand awareness และความน่าเชื่อถือให้เร็ว" }, help: { en: "We develop brand narratives, explainer videos, and content strategies.", th: "เราพัฒนา brand narrative, explainer video และ content strategy" } },
  { title: "Automotive", need: { en: "Automotive brands need cinematic quality that matches their engineering.", th: "แบรนด์ยานยนต์ต้องการคุณภาพระดับภาพยนตร์" }, help: { en: "We produce campaign films and launch content with premium production value.", th: "เราผลิต campaign film และ launch content ด้วย production value ระดับ premium" } },
  { title: "Government", need: { en: "Government organizations need to communicate with clarity and public trust.", th: "องค์กรภาครัฐต้องสื่อสารด้วยความชัดเจนและสร้างความไว้วางใจ" }, help: { en: "We create documentary content and public campaigns.", th: "เราสร้าง documentary content และ public campaign" } },
];

const industriesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://orions.agency/industries" },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Industries ØRIONS Works With",
      url: "https://orions.agency/industries",
      description: "Industries served by ØRIONS across Bangkok, Thailand, and Southeast Asia.",
    },
  ],
};

const IndustriesPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Industries | ØRIONS Creative Agency Bangkok"
        description="ØRIONS works with hospitality, lifestyle, beauty, real estate, startups, automotive, and public-sector brands across Bangkok, Thailand, and Southeast Asia."
        path="/industries"
        keywords="creative agency hospitality Bangkok, real estate marketing Thailand, automotive campaign production Bangkok"
        schema={industriesSchema}
      />
      <Navbar />
      <div className="pt-20">
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">⬡</span> Industries
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
                EVERY INDUSTRY<br />HAS A <span className="text-accent-gradient">STORY.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t("We work with brands in Bangkok, across Thailand, and throughout Southeast Asia that need stronger positioning, sharper campaigns, and more meaningful production.", "เราทำงานกับแบรนด์ในกรุงเทพฯ ทั่วไทย และทั่วเอเชียตะวันออกเฉียงใต้ ที่ต้องการ positioning ที่ชัดขึ้น แคมเปญที่คมขึ้น และงานผลิตที่มีความหมายมากขึ้น")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-8 md:py-12 pb-20">
          <div className="max-w-7xl mx-auto">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i * 0.03}>
                <div className="group border-t border-border py-16 md:py-20 hover:border-accent-warm/30 transition-colors duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_1fr] gap-8 lg:gap-20 items-start">
                    <div>
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 block mb-4">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="font-display text-[32px] leading-[0.95] tracking-[0.01em] text-foreground group-hover:text-accent-warm transition-colors duration-500">{ind.title}</h2>
                    </div>
                    <div>
                      <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">{t("What they need", "สิ่งที่ต้องการ")}</h3>
                      <p className="font-body text-[15px] leading-[1.7] text-foreground/70">{ind.need[lang]}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">{t("How we help", "เราช่วยอย่างไร")}</h3>
                      <p className="font-body text-[15px] leading-[1.7] text-foreground/70">{ind.help[lang]}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                NEED A PARTNER WHO
                <br />UNDERSTANDS YOUR MARKET?
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
                {t("Tell us your category, audience, and commercial goal, and we'll recommend the best service mix for your brand.", "บอกหมวดธุรกิจ กลุ่มเป้าหมาย และเป้าหมายทางธุรกิจของคุณ แล้วเราจะแนะนำ service mix ที่เหมาะที่สุด")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Link to="/services" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                  Explore Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link to="/contact" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                  Start a Conversation <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default IndustriesPage;
