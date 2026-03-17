import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import studioDialogue from "@/assets/studio-dialogue.jpg";
import studioNosignal from "@/assets/studio-nosignal.jpg";
import studioLookyourbest from "@/assets/studio-lookyourbest.jpg";

const studioProjects = [
  {
    num: "01",
    title: "ORIONS Dialogue",
    type: "Podcast",
    status: "In Production",
    image: studioDialogue,
    desc: {
      en: "Long-form conversations with creative leaders and thinkers who shape culture. Honest dialogue about craft, purpose, and the creative process.",
      th: "บทสนทนายาวกับผู้นำด้านครีเอทีฟและนักคิดที่หล่อหลอมวัฒนธรรม",
    },
    purpose: {
      en: "Show taste. Start conversations. Build community around meaningful creative work.",
      th: "แสดงรสนิยม เริ่มบทสนทนา สร้างชุมชนรอบงานสร้างสรรค์ที่มีความหมาย",
    },
    format: { en: "Audio + Video · 45–60 min episodes · Monthly", th: "Audio + Video · ตอนละ 45–60 นาที · รายเดือน" },
  },
  {
    num: "02",
    title: "No Signal",
    type: "Survival Documentary",
    status: "Pre-production",
    image: studioNosignal,
    desc: {
      en: "A documentary series following people who choose to live off the grid. Raw, cinematic, and deeply human.",
      th: "ซีรีส์สารคดีตามคนที่เลือกใช้ชีวิตนอกสังคม ดิบ มีความเป็นภาพยนตร์ และเป็นมนุษย์อย่างลึกซึ้ง",
    },
    purpose: {
      en: "Show capability. Prove we can produce content that people choose to watch.",
      th: "แสดงความสามารถ พิสูจน์ว่าเราผลิต content ที่คนเลือกดู",
    },
    format: { en: "Cinematic series · 6 episodes · 20–30 min each", th: "ซีรีส์ภาพยนตร์ · 6 ตอน · ตอนละ 20–30 นาที" },
  },
  {
    num: "03",
    title: "Look Your Best",
    type: "Beauty Show",
    status: "Concept",
    image: studioLookyourbest,
    desc: {
      en: "A beauty and self-expression series that goes beyond makeup. Personal stories, confidence, transformation.",
      th: "ซีรีส์ความงามและการแสดงออกที่ไปไกลกว่าเครื่องสำอาง เรื่องราวส่วนตัว ความมั่นใจ การเปลี่ยนแปลง",
    },
    purpose: {
      en: "Build brand identity. Create a platform that attracts audiences and brand partners.",
      th: "สร้าง brand identity สร้างแพลตฟอร์มที่ดึงดูดทั้ง audience และ brand partner",
    },
    format: { en: "Short-form series · 10–15 min episodes · Weekly", th: "ซีรีส์สั้น · ตอนละ 10–15 นาที · รายสัปดาห์" },
  },
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
        {/* Compact hero */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Studio
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
                ORIGINAL <span className="text-accent-gradient">CONTENT.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-lg">
                {t("Beyond client work, we create original content that shows our taste, capability, and point of view.", "นอกเหนือจากงานลูกค้า เราสร้างผลงานต้นฉบับที่แสดงรสนิยมและความสามารถ")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Cards with images */}
        <section className="px-6 md:px-12 py-12 md:py-20 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {studioProjects.map((p, i) => (
                <AnimatedSection key={p.num} delay={i * 0.08}>
                  <div className="group relative border border-border hover:border-accent-warm/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500 z-10" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500 z-10" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500 z-10" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500 z-10" />

                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-warm/90 bg-background/80 backdrop-blur-sm border border-accent-warm/20 px-3 py-1">
                          {p.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{p.num}</span>
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{p.type}</span>
                      </div>

                      <h2 className="font-display text-[clamp(28px,3.5vw,40px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-500">
                        {p.title}
                      </h2>

                      <p className="font-body text-[14px] leading-[1.7] text-foreground/70 mb-6 flex-1">
                        {p.desc[lang]}
                      </p>

                      {/* Format */}
                      <div className="mb-5">
                        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1.5">Format</h4>
                        <p className="font-mono text-[11px] leading-[1.6] text-foreground/60">{p.format[lang]}</p>
                      </div>

                      {/* Purpose */}
                      <div className="border-t border-border/50 pt-5">
                        <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1.5">Purpose</h4>
                        <p className="font-body text-[13px] leading-[1.7] text-muted-foreground">{p.purpose[lang]}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default StudioPage;
