import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

const industries = [
  { title: { en: "Hospitality", th: "การโรงแรม" }, need: { en: "Hotels and resorts need emotional storytelling that transports guests before they arrive.", th: "โรงแรมและรีสอร์ตต้องการ emotional storytelling ที่พาแขกไปก่อนจะมาถึง" }, help: { en: "We create brand films, destination content, and narrative-driven campaigns.", th: "เราสร้าง brand film, destination content และแคมเปญที่ขับเคลื่อนด้วย narrative" } },
  { title: { en: "Lifestyle Brands", th: "ไลฟ์สไตล์แบรนด์" }, need: { en: "Lifestyle brands need to be aspirational without being inaccessible.", th: "Lifestyle brand ต้อง aspirational โดยไม่ห่างเหิน" }, help: { en: "We build brand worlds through cinematic content and campaign films.", th: "เราสร้าง brand world ผ่าน cinematic content และ campaign film" } },
  { title: { en: "Restaurant & Cafe", th: "ร้านอาหาร & คาเฟ่" }, need: { en: "F&B brands need to tell the story behind the food.", th: "แบรนด์ F&B ต้องเล่าเรื่องเบื้องหลังอาหาร" }, help: { en: "We produce documentary-style content and brand films.", th: "เราผลิต documentary-style content และ brand film" } },
  { title: { en: "Beauty & Wellness", th: "ความงาม & สุขภาพ" }, need: { en: "Beauty brands need visual storytelling that's aspirational and trustworthy.", th: "แบรนด์ความงามต้องการ visual storytelling ที่ aspirational และน่าเชื่อถือ" }, help: { en: "We create campaign films and content systems that build desire and trust.", th: "เราสร้าง campaign film และระบบ content ที่สร้างความต้องการและความไว้วางใจ" } },
  { title: { en: "Real Estate", th: "อสังหาริมทรัพย์" }, need: { en: "Property developers need to sell a vision — a life, not just a building.", th: "Developer ต้องขายวิสัยทัศน์ — ชีวิต ไม่ใช่แค่ตึก" }, help: { en: "We produce brand documentaries and narrative content.", th: "เราผลิต brand documentary และ narrative content" } },
  { title: { en: "Startups", th: "สตาร์ทอัพ" }, need: { en: "Startups need brand awareness and credibility fast.", th: "สตาร์ทอัพต้องสร้าง brand awareness และความน่าเชื่อถือให้เร็ว" }, help: { en: "We develop brand narratives, explainer videos, and content strategies.", th: "เราพัฒนา brand narrative, explainer video และ content strategy" } },
  { title: { en: "Automotive", th: "ยานยนต์" }, need: { en: "Automotive brands need cinematic quality that matches their engineering.", th: "แบรนด์ยานยนต์ต้องการคุณภาพระดับภาพยนตร์" }, help: { en: "We produce campaign films and launch content with premium production value.", th: "เราผลิต campaign film และ launch content ด้วย production value ระดับ premium" } },
  { title: { en: "Government", th: "ภาครัฐ" }, need: { en: "Government organizations need to communicate with clarity and public trust.", th: "องค์กรภาครัฐต้องสื่อสารด้วยความชัดเจนและสร้างความไว้วางใจ" }, help: { en: "We create documentary content and public campaigns.", th: "เราสร้าง documentary content และ public campaign" } },
];

const IndustriesPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Industries — ØRIONS Creative Agency</title>
        <meta name="description" content="ORIONS works with brands across hospitality, lifestyle, beauty, real estate, startups, automotive, and government." />
        <link rel="canonical" href="https://orions.agency/industries" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={20} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">Industries</p>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-3xl">
                {t(<>Every industry<br />has a <span className="text-accent-gradient">story.</span></>, <>ทุกอุตสาหกรรม<br />มี<span className="text-accent-gradient">เรื่องราว</span></>)}
              </h1>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-28 md:pb-40">
          <div className="max-w-7xl mx-auto">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title.en} delay={i * 0.04}>
                <div className="border-t border-divider py-14 md:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_1fr] gap-8 lg:gap-16 items-start">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-gradient block mb-3">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="font-display text-[32px] leading-[0.94] tracking-[0.02em] text-foreground">{ind.title[lang]}</h2>
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">{t("What they need", "สิ่งที่ต้องการ")}</h4>
                      <p className="font-body text-[14px] leading-[1.8] text-muted-foreground">{ind.need[lang]}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3">{t("How we help", "เราช่วยอย่างไร")}</h4>
                      <p className="font-body text-[14px] leading-[1.8] text-muted-foreground">{ind.help[lang]}</p>
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

export default IndustriesPage;
