import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const studioProjects = [
  { num: "01", title: "ORIONS Dialogue", type: "Podcast", desc: { en: "Long-form conversations with creative leaders and thinkers who shape culture. Honest dialogue about craft, purpose, and the creative process.", th: "บทสนทนายาวกับผู้นำด้านครีเอทีฟและนักคิดที่หล่อหลอมวัฒนธรรม" }, purpose: { en: "Show taste. Start conversations. Build community around meaningful creative work.", th: "แสดงรสนิยม เริ่มบทสนทนา สร้างชุมชนรอบงานสร้างสรรค์ที่มีความหมาย" } },
  { num: "02", title: "No Signal", type: "Survival Documentary", desc: { en: "A documentary series following people who choose to live off the grid. Raw, cinematic, and deeply human.", th: "ซีรีส์สารคดีตามคนที่เลือกใช้ชีวิตนอกสังคม ดิบ มีความเป็นภาพยนตร์ และเป็นมนุษย์อย่างลึกซึ้ง" }, purpose: { en: "Show capability. Prove we can produce content that people choose to watch.", th: "แสดงความสามารถ พิสูจน์ว่าเราผลิต content ที่คนเลือกดู" } },
  { num: "03", title: "Look Your Best", type: "Beauty Show", desc: { en: "A beauty and self-expression series that goes beyond makeup. Personal stories, confidence, transformation.", th: "ซีรีส์ความงามและการแสดงออกที่ไปไกลกว่าเครื่องสำอาง เรื่องราวส่วนตัว ความมั่นใจ การเปลี่ยนแปลง" }, purpose: { en: "Build brand identity. Create a platform that attracts audiences and brand partners.", th: "สร้าง brand identity สร้างแพลตฟอร์มที่ดึงดูดทั้ง audience และ brand partner" } },
];

const StudioPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Studio — ØRIONS Original Content</title>
        <meta name="description" content="ORIONS Studio: original content — ORIONS Dialogue, No Signal, Look Your Best." />
        <link rel="canonical" href="https://orions.agency/studio" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">Studio</p>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10 max-w-4xl">
                ORIGINAL<br /><span className="text-accent-gradient">CONTENT.</span>
              </h1>
              <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-lg">
                {t("Beyond client work, we create original content that shows our taste, capability, and point of view.", "นอกเหนือจากงานลูกค้า เราสร้างผลงานต้นฉบับที่แสดงรสนิยมและความสามารถ")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto">
            {studioProjects.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 0.04}>
                <div className="border-t border-border py-24 md:py-28">
                  <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-24 items-start">
                    <div>
                      <div className="flex items-baseline gap-5 mb-5">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{p.num}</span>
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{p.type}</span>
                      </div>
                      <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground">{p.title}</h2>
                    </div>
                    <div className="space-y-10">
                      <p className="font-body text-[16px] leading-[1.7] text-foreground/70 max-w-xl">{p.desc[lang]}</p>
                      <div>
                        <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Purpose</h4>
                        <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{p.purpose[lang]}</p>
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

export default StudioPage;
