import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

const industries = [
  { title: { en: "Hospitality", th: "การโรงแรม" }, need: { en: "Hotels and resorts need emotional storytelling that transports guests before they arrive.", th: "โรงแรมและรีสอร์ตต้องการ emotional storytelling ที่พาแขกไปก่อนจะมาถึง" }, help: { en: "We create brand films, destination content, and narrative-driven campaigns that capture the feeling of a place.", th: "เราสร้าง brand film, destination content และแคมเปญที่ขับเคลื่อนด้วย narrative ถ่ายทอดความรู้สึกของสถานที่" } },
  { title: { en: "Lifestyle Brands", th: "ไลฟ์สไตล์แบรนด์" }, need: { en: "Lifestyle brands need to be aspirational without being inaccessible — authentic and visually compelling.", th: "Lifestyle brand ต้อง aspirational โดยไม่ห่างเหิน — authentic และดึงดูดทางสายตา" }, help: { en: "We build brand worlds through cinematic content, campaign films, and content systems that feel effortless.", th: "เราสร้าง brand world ผ่าน cinematic content, campaign film และระบบ content ที่รู้สึกเป็นธรรมชาติ" } },
  { title: { en: "Restaurant & Cafe", th: "ร้านอาหาร & คาเฟ่" }, need: { en: "F&B brands need to tell the story behind the food — the people, the craft, the experience.", th: "แบรนด์ F&B ต้องเล่าเรื่องเบื้องหลังอาหาร — ผู้คน, ฝีมือ, ประสบการณ์" }, help: { en: "We produce documentary-style content, brand films, and social content that makes people hungry to visit.", th: "เราผลิต documentary-style content, brand film และ social content ที่ทำให้คนอยากมา" } },
  { title: { en: "Beauty & Wellness", th: "ความงาม & สุขภาพ" }, need: { en: "Beauty brands need visual storytelling that's both aspirational and trustworthy.", th: "แบรนด์ความงามต้องการ visual storytelling ที่ทั้ง aspirational และน่าเชื่อถือ" }, help: { en: "We create campaign films, product storytelling, and content systems that build brand desire and trust.", th: "เราสร้าง campaign film, product storytelling และระบบ content ที่สร้างความต้องการและความไว้วางใจ" } },
  { title: { en: "Real Estate", th: "อสังหาริมทรัพย์" }, need: { en: "Property developers need to sell a vision — a life, not just a building.", th: "Developer ต้องขายวิสัยทัศน์ — ชีวิต ไม่ใช่แค่ตึก" }, help: { en: "We produce brand documentaries, project films, and narrative content that bring developments to life.", th: "เราผลิต brand documentary, project film และ narrative content ที่ทำให้โครงการมีชีวิต" } },
  { title: { en: "Startups", th: "สตาร์ทอัพ" }, need: { en: "Startups need to build brand awareness and credibility fast — with limited budget and big ambition.", th: "สตาร์ทอัพต้องสร้าง brand awareness และความน่าเชื่อถือให้เร็ว — ด้วยงบจำกัดและความทะเยอทะยานสูง" }, help: { en: "We develop brand narratives, explainer videos, and content strategies that position startups as category leaders.", th: "เราพัฒนา brand narrative, explainer video และ content strategy ที่วาง positioning ให้สตาร์ทอัพเป็นผู้นำ" } },
  { title: { en: "Automotive", th: "ยานยนต์" }, need: { en: "Automotive brands need cinematic quality that matches the engineering precision of their products.", th: "แบรนด์ยานยนต์ต้องการคุณภาพระดับภาพยนตร์ที่เทียบเท่าความแม่นยำของผลิตภัณฑ์" }, help: { en: "We produce campaign films, launch content, and brand documentaries with the production value this industry demands.", th: "เราผลิต campaign film, launch content และ brand documentary ด้วย production value ที่อุตสาหกรรมนี้ต้องการ" } },
  { title: { en: "Government", th: "ภาครัฐ" }, need: { en: "Government organizations need to communicate with clarity, purpose, and public trust.", th: "องค์กรภาครัฐต้องสื่อสารด้วยความชัดเจน มีจุดประสงค์ และสร้างความไว้วางใจจากประชาชน" }, help: { en: "We create documentary content, public campaigns, and narrative films that make complex initiatives understandable.", th: "เราสร้าง documentary content, public campaign และ narrative film ที่ทำให้โครงการซับซ้อนเข้าใจง่าย" } },
];

const IndustriesPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>Industries — ØRIONS Creative Agency</title>
        <meta name="description" content="ORIONS works with brands across hospitality, lifestyle, beauty, real estate, startups, automotive, and government sectors." />
        <link rel="canonical" href="https://orions.agency/industries" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={40} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-10">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">Industries</span>
              </div>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-4xl">
                {t(<>Every industry has<br />a <span className="text-accent-gradient">story.</span></>, <>ทุกอุตสาหกรรม<br />มี<span className="text-accent-gradient">เรื่องราว</span></>)}
              </h1>
              <p className="font-body text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
                {t(
                  "We work across sectors, but our approach stays the same: understand the brand, shape the story, produce the work.",
                  "เราทำงานข้ามอุตสาหกรรม แต่แนวทางเดิม: เข้าใจแบรนด์ หล่อหลอมเรื่องราว ผลิตผลงาน"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto space-y-0">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title.en} delay={i * 0.05}>
                <div className="border-t border-divider py-12 md:py-16 group">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-gradient block mb-3">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="font-display text-[clamp(36px,4vw,56px)] leading-[0.94] tracking-[0.02em] text-foreground">{ind.title[lang]}</h2>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-3">{t("What they need", "สิ่งที่ต้องการ")}</h4>
                        <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{ind.need[lang]}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-3">{t("How ORIONS helps", "ORIONS ช่วยอย่างไร")}</h4>
                        <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{ind.help[lang]}</p>
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

export default IndustriesPage;
