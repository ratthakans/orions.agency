import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

/* Tool icon SVGs - distinctive representations for each tool */
const ToolIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    "Claude": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
    "ChatGPT": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6v28M6 20h28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 11l18 18M29 11L11 29" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    "Midjourney": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 32L20 8l12 24" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 24h16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    "Adobe Firefly": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 28l6-8 4 5 3-4 5 7" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    "Runway ML": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <polygon points="14,10 30,20 14,30" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 20h4M30 20h4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 14h3M8 26h3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    "Perplexity": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M27 25l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 16l3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "Foreplay AI": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="8" y="12" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 18h24" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 22v4M20 21v5M26 23v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    "ElevenLabs": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M12 28V12M17 24V16M22 28V12M27 24V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Make (Integromat)": (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="12" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 18l7-4M17 22l7 4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  };

  return (
    <span className="text-accent-violet">
      {icons[name] || (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </span>
  );
};

const tools = [
  { badge: "Strategy", badgeType: "core" as const, name: "Claude", use: { en: "Brand strategy, long-form copy, research synthesis, and client-facing documents.", th: "Brand strategy, long-form copy, สังเคราะห์ research และเอกสารสำหรับลูกค้า" } },
  { badge: "Copy", badgeType: "core" as const, name: "ChatGPT", use: { en: "Social captions, ad copy variations, email subject lines, and rapid ideation sprints.", th: "Social captions, ad copy variations, email subject lines และ rapid ideation" } },
  { badge: "Visuals", badgeType: "core" as const, name: "Midjourney", use: { en: "Campaign hero imagery, moodboards, art direction references, and concept visualization.", th: "Campaign hero imagery, moodboard, art direction reference และ concept visualization" } },
  { badge: "Visuals", badgeType: "default" as const, name: "Adobe Firefly", use: { en: "Generative fill, background removal, and expanding existing brand assets without licensing issues.", th: "Generative fill, ลบพื้นหลัง และขยาย brand assets โดยไม่มีปัญหาลิขสิทธิ์" } },
  { badge: "Video", badgeType: "default" as const, name: "Runway ML", use: { en: "Short-form video generation, motion graphics, and AI-assisted video editing for social content.", th: "สร้างวิดีโอ short-form, motion graphics และ AI-assisted video editing สำหรับ social content" } },
  { badge: "Research", badgeType: "default" as const, name: "Perplexity", use: { en: "Real-time market research, competitor analysis, trend tracking, and insight gathering.", th: "Market research แบบ real-time, วิเคราะห์คู่แข่ง, ติดตาม trend และรวบรวม insight" } },
  { badge: "Analytics", badgeType: "default" as const, name: "Foreplay AI", use: { en: "Ad creative analysis, competitor swipe files, and performance-based creative decisions.", th: "วิเคราะห์ ad creative, competitor swipe file และ creative decision ตาม performance" } },
  { badge: "Voice", badgeType: "default" as const, name: "ElevenLabs", use: { en: "AI voiceover for video content, podcast production, and multilingual brand audio.", th: "AI voiceover สำหรับวิดีโอ, podcast production และ brand audio หลายภาษา" } },
  { badge: "Automation", badgeType: "default" as const, name: "Make (Integromat)", use: { en: "Automated content workflows, client reporting pipelines, and cross-platform publishing.", th: "Content workflow อัตโนมัติ, client reporting pipeline และ cross-platform publishing" } },
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
                <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
                  Our AI Stack
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
                <div>
                  <h1 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-5">
                    {t(<>Powered by<br />the best <span className="text-accent-gradient">tools.</span></>, <>ขับเคลื่อนด้วย<br /><span className="text-accent-gradient">tools ที่ดีที่สุด</span></>)}
                  </h1>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    {t(
                      "We don't just use AI — we've built a production stack that cuts delivery time by 60% while maintaining the quality standard of a senior creative team. Every tool below earns its place.",
                      "เราไม่ได้แค่ใช้ AI — เราสร้าง production stack ที่ลดเวลาส่งงาน 60% โดยยังรักษา quality standard ระดับ senior creative team ทุก tool ด้านล่างพิสูจน์คุณค่าของมันแล้ว"
                    )}
                  </p>
                </div>

                {/* Tool Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider">
                  {tools.map((tool, i) => (
                    <AnimatedSection key={tool.name} delay={i * 0.05}>
                      <div className="bg-background p-7 hover:bg-secondary transition-colors duration-300 relative group">
                        {/* Left accent bar on hover */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                        
                        <div className="flex items-start gap-4 mb-3">
                          <ToolIcon name={tool.name} />
                          <div className="flex-1 min-w-0">
                            <span className={`inline-block font-mono text-[8px] tracking-[0.18em] uppercase px-2 py-[3px] mb-2 border ${
                              tool.badgeType === "core"
                                ? "border-accent-violet/35 text-accent-violet"
                                : "border-divider text-muted-foreground"
                            }`}>
                              {tool.badge}
                            </span>
                            <h3 className="font-mono text-[13px] tracking-[0.06em] text-foreground font-medium">{tool.name}</h3>
                          </div>
                        </div>
                        <p className="font-body text-[12px] leading-[1.6] text-muted-foreground">{tool.use[lang]}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Philosophy Section */}
            <AnimatedSection delay={0.2}>
              <div className="mt-20 border-t border-divider pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="font-display text-[clamp(36px,4.5vw,68px)] leading-[0.94] tracking-[0.02em] text-foreground mb-6">
                    {t(<>AI is our <span className="text-accent-gradient">velocity.</span><br />Humans are our <span className="text-accent-gradient">compass.</span></>, <>AI คือ<span className="text-accent-gradient">ความเร็ว</span>ของเรา<br />มนุษย์คือ<span className="text-accent-gradient">เข็มทิศ</span>ของเรา</>)}
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    {t(
                      "Every AI tool in our stack serves a specific purpose. We don't use AI to replace creative thinking — we use it to amplify human judgment and compress production timelines.",
                      "ทุก AI tool ใน stack ของเรามีจุดประสงค์เฉพาะ เราไม่ใช้ AI แทนที่ creative thinking — เราใช้มันเพื่อขยาย human judgment และบีบอัด production timeline"
                    )}
                  </p>
                  <div className="grid grid-cols-2 gap-px bg-divider border border-divider">
                    <div className="bg-background p-6 text-center group hover:bg-secondary transition-colors duration-300">
                      <span className="font-display text-[48px] leading-none text-accent-gradient block mb-2">60%</span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Faster Delivery</span>
                    </div>
                    <div className="bg-background p-6 text-center group hover:bg-secondary transition-colors duration-300">
                      <span className="font-display text-[48px] leading-none text-accent-gradient block mb-2">100%</span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Human Strategy</span>
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
