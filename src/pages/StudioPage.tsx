import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

const studioProjects = [
  {
    num: "01",
    title: "ORIONS Dialogue",
    type: "Podcast",
    desc: { en: "Long-form conversations with creative leaders, filmmakers, and thinkers who shape culture. Honest dialogue about craft, purpose, and the creative process.", th: "บทสนทนายาวกับผู้นำด้านครีเอทีฟ ผู้กำกับภาพยนตร์ และนักคิดที่หล่อหลอมวัฒนธรรม สนทนาอย่างจริงใจเรื่องฝีมือ จุดประสงค์ และกระบวนการสร้างสรรค์" },
    purpose: { en: "Show taste. Start conversations. Build community around meaningful creative work.", th: "แสดงรสนิยม เริ่มบทสนทนา สร้างชุมชนรอบงานสร้างสรรค์ที่มีความหมาย" },
  },
  {
    num: "02",
    title: "No Signal",
    type: "Survival Documentary",
    desc: { en: "A documentary series following people who choose to live off the grid. Raw, cinematic, and deeply human — exploring what happens when we disconnect from everything.", th: "ซีรีส์สารคดีตามคนที่เลือกใช้ชีวิตนอกสังคม ดิบ มีความเป็นภาพยนตร์ และเป็นมนุษย์อย่างลึกซึ้ง — สำรวจว่าเกิดอะไรขึ้นเมื่อเราตัดการเชื่อมต่อจากทุกสิ่ง" },
    purpose: { en: "Show capability. Prove we can produce content that people choose to watch — not just ads they're forced to see.", th: "แสดงความสามารถ พิสูจน์ว่าเราผลิต content ที่คนเลือกดู — ไม่ใช่แค่โฆษณาที่ถูกบังคับให้เห็น" },
  },
  {
    num: "03",
    title: "Look Your Best",
    type: "Beauty Show",
    desc: { en: "A beauty and self-expression series that goes beyond makeup. Personal stories, confidence, transformation — redefining what it means to look and feel your best.", th: "ซีรีส์ความงามและการแสดงออกที่ไปไกลกว่าเครื่องสำอาง เรื่องราวส่วนตัว ความมั่นใจ การเปลี่ยนแปลง — นิยามใหม่ของการดูดีและรู้สึกดีที่สุด" },
    purpose: { en: "Build brand identity. Create a platform that attracts both audiences and potential brand partners.", th: "สร้าง brand identity สร้างแพลตฟอร์มที่ดึงดูดทั้ง audience และ brand partner" },
  },
];

const StudioPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>Studio — ØRIONS Original Content</title>
        <meta name="description" content="ORIONS Studio: original content that shows our taste, capability, and brand identity. Featuring ORIONS Dialogue, No Signal, and Look Your Best." />
        <link rel="canonical" href="https://orions.agency/studio" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={50} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-10">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">Studio</span>
              </div>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-4xl">
                {t(<>Original<br /><span className="text-accent-gradient">content.</span></>, <><span className="text-accent-gradient">ผลงาน</span><br />ต้นฉบับ</>)}
              </h1>
              <p className="font-body text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
                {t(
                  "Beyond client work, we create original content that shows our taste, capability, and point of view. These are the projects we choose to make.",
                  "นอกเหนือจากงานลูกค้า เราสร้างผลงานต้นฉบับที่แสดงรสนิยม ความสามารถ และมุมมองของเรา นี่คือโปรเจกต์ที่เราเลือกทำ"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto space-y-0">
            {studioProjects.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 0.05}>
                <div className="border-t border-divider py-16 md:py-20 group">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-gradient">{p.num}</span>
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{p.type}</span>
                      </div>
                      <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-[0.94] tracking-[0.02em] text-foreground">{p.title}</h2>
                    </div>
                    <div className="space-y-6">
                      <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{p.desc[lang]}</p>
                      <div className="border border-divider bg-card p-6">
                        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-3">{t("Purpose", "จุดประสงค์")}</h4>
                        <p className="font-body text-[14px] leading-[1.75] text-muted-foreground">{p.purpose[lang]}</p>
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
