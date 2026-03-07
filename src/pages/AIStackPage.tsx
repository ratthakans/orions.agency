import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const tools = [
  {
    name: "Claude",
    logo: "https://cdn.worldvectorlogo.com/logos/anthropic-1.svg",
    badge: "Strategy",
    desc: {
      en: "Brand strategy, long-form copy, research synthesis, and client-facing documents.",
      th: "Brand strategy, long-form copy, สังเคราะห์ research และเอกสารลูกค้า",
    },
  },
  {
    name: "ChatGPT",
    logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
    badge: "Copy",
    desc: {
      en: "Social captions, ad copy variations, email subject lines, and rapid ideation.",
      th: "Social captions, ad copy variations, email subject lines และ rapid ideation",
    },
  },
  {
    name: "Midjourney",
    logo: "https://cdn.worldvectorlogo.com/logos/midjourney.svg",
    badge: "Visuals",
    desc: {
      en: "Campaign hero imagery, moodboards, art direction references, and concepts.",
      th: "Campaign hero imagery, moodboard, art direction reference และ concept",
    },
  },
  {
    name: "Runway",
    logo: "https://cdn.worldvectorlogo.com/logos/runway-1.svg",
    badge: "Video",
    desc: {
      en: "Short-form video generation, motion graphics, and AI-assisted video editing.",
      th: "สร้างวิดีโอ short-form, motion graphics และ AI-assisted video editing",
    },
  },
  {
    name: "Perplexity",
    logo: "https://cdn.worldvectorlogo.com/logos/perplexity-ai-icon.svg",
    badge: "Research",
    desc: {
      en: "Real-time market research, competitor analysis, trend tracking, and insights.",
      th: "Market research แบบ real-time, วิเคราะห์คู่แข่ง, ติดตาม trend และ insight",
    },
  },
  {
    name: "Lovable",
    logo: "https://cdn.worldvectorlogo.com/logos/lovable.svg",
    badge: "Web Dev",
    desc: {
      en: "AI-powered web development for landing pages, brand sites, and digital experiences.",
      th: "AI-powered web development สำหรับ landing page, brand site และ digital experience",
    },
  },
];

const AIStackPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>AI Stack — ØRIONS Creative Agency</title>
        <meta name="description" content="Discover the AI tools powering ØRIONS' creative production. From Claude for strategy to Midjourney for visuals — our stack cuts delivery time by 60%." />
        <link rel="canonical" href="https://orions.agency/ai-stack" />
      </Helmet>
      <Navbar />
      <div className="pt-[62px]">
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-12">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-accent-violet">
                  Our AI Stack
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                <h1 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
                  {t(<>Powered by<br />the best <span className="text-accent-gradient">tools.</span></>, <>ขับเคลื่อนด้วย<br /><span className="text-accent-gradient">tools ที่ดีที่สุด</span></>)}
                </h1>
                <p className="font-body text-[16px] leading-[1.8] text-muted-foreground mt-4">
                  {t(
                    "We don't just use AI — we've built a production stack that cuts delivery time by 60% while maintaining the quality standard of a senior creative team.",
                    "เราไม่ได้แค่ใช้ AI — เราสร้าง production stack ที่ลดเวลาส่งงาน 60% โดยยังรักษา quality standard ระดับ senior creative team"
                  )}
                </p>
              </div>
            </AnimatedSection>

            {/* Tool Grid — 6 tools, 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider">
              {tools.map((tool, i) => (
                <AnimatedSection key={tool.name} delay={i * 0.06}>
                  <div className="bg-background p-8 md:p-9 hover:bg-secondary transition-colors duration-300 relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-9 h-9 object-contain rounded-sm"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-[3px] border border-accent-violet/30 text-accent-violet mb-1 inline-block">
                          {tool.badge}
                        </span>
                        <h3 className="font-body text-[15px] tracking-[0.02em] text-foreground font-medium">{tool.name}</h3>
                      </div>
                    </div>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{tool.desc[lang]}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Philosophy */}
            <AnimatedSection delay={0.2}>
              <div className="mt-20 border-t border-divider pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="font-display text-[clamp(36px,4.5vw,68px)] leading-[0.94] tracking-[0.02em] text-foreground mb-6">
                    {t(<>AI is our <span className="text-accent-gradient">velocity.</span><br />Humans are our <span className="text-accent-gradient">compass.</span></>, <>AI คือ<span className="text-accent-gradient">ความเร็ว</span>ของเรา<br />มนุษย์คือ<span className="text-accent-gradient">เข็มทิศ</span>ของเรา</>)}
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="font-body text-[16px] leading-[1.8] text-muted-foreground">
                    {t(
                      "Every AI tool in our stack serves a specific purpose. We don't use AI to replace creative thinking — we use it to amplify human judgment and compress production timelines.",
                      "ทุก AI tool ใน stack ของเรามีจุดประสงค์เฉพาะ เราไม่ใช้ AI แทนที่ creative thinking — เราใช้มันเพื่อขยาย human judgment และบีบอัด production timeline"
                    )}
                  </p>
                  <div className="grid grid-cols-2 gap-px bg-divider border border-divider">
                    <div className="bg-background p-6 text-center group hover:bg-secondary transition-colors duration-300">
                      <span className="font-display text-[48px] leading-none text-accent-gradient block mb-2">60%</span>
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Faster Delivery</span>
                    </div>
                    <div className="bg-background p-6 text-center group hover:bg-secondary transition-colors duration-300">
                      <span className="font-display text-[48px] leading-none text-accent-gradient block mb-2">100%</span>
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Human Strategy</span>
                    </div>
                  </div>
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

export default AIStackPage;
