import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

/* Real product logos as clean SVGs */
const ToolLogo = ({ name }: { name: string }) => {
  const logos: Record<string, JSX.Element> = {
    "Claude": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M25.17 13.47L20.65 26.56h-2.18l-5.3-15.02h2.88l3.5 11.1h.06l3.54-11.1h2.86l3.54 11.1h.06l3.5-11.1H35.97L30.67 26.56h-2.18l-4.52-13.09h-.06z" fill="#D4A373"/>
        <text x="5" y="28" fontSize="8" fill="#D4A373" fontFamily="sans-serif" fontWeight="700">Claude</text>
      </svg>
    ),
    "ChatGPT": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4zm0 2c7.73 0 14 6.27 14 14s-6.27 14-14 14S6 27.73 6 20 12.27 6 20 6z" fill="#10A37F" opacity="0.2"/>
        <path d="M19.5 10.5l-6.5 4v7.5l6.5 4 6.5-4V14.5l-6.5-4zm0 2.3l4.3 2.6v5.2l-4.3 2.6-4.3-2.6v-5.2l4.3-2.6z" fill="#10A37F"/>
        <circle cx="19.5" cy="18.5" r="2" fill="#10A37F"/>
      </svg>
    ),
    "Midjourney": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M8 32c2-6 5-16 12-22M20 10c4 3 8 10 12 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 28c3-5 5-10 8-12M20 16c3 2 5 7 8 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    "Adobe Firefly": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="6" fill="#2C0052" opacity="0.15"/>
        <path d="M13 28l5.5-7.5 3.5 4.5 4-5.5 5 8.5H13z" fill="#7B61FF" opacity="0.7"/>
        <path d="M20 8l2.5 5h-5L20 8z" fill="#FF6B6B"/>
        <circle cx="15" cy="15" r="3" fill="#FF9F43" opacity="0.6"/>
        <path d="M24 12c2 0 4 1.5 4 4s-2 4-4 4" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Runway ML": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="6" y="12" width="28" height="16" rx="2" stroke="#fff" strokeWidth="1.5"/>
        <polygon points="16,16 16,24 24,20" fill="#fff"/>
        <path d="M6 28l4-4M30 28l4-4" stroke="#fff" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    "Perplexity": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M20 6v12M20 18l10-8M20 18L10 10" stroke="#20B8CD" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 10v16l10 8 10-8V10" stroke="#20B8CD" strokeWidth="1.5" fill="none"/>
        <path d="M10 26l10-8 10 8" stroke="#20B8CD" strokeWidth="1.5"/>
      </svg>
    ),
    "Foreplay AI": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="#FF6B6B" strokeWidth="1.5"/>
        <path d="M6 16h28" stroke="#FF6B6B" strokeWidth="1"/>
        <rect x="10" y="20" width="6" height="8" rx="1" fill="#FF6B6B" opacity="0.3"/>
        <rect x="18" y="22" width="6" height="6" rx="1" fill="#FF6B6B" opacity="0.5"/>
        <rect x="26" y="18" width="4" height="10" rx="1" fill="#FF6B6B" opacity="0.7"/>
      </svg>
    ),
    "ElevenLabs": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="14" y="8" width="4" height="24" rx="2" fill="#fff"/>
        <rect x="22" y="8" width="4" height="24" rx="2" fill="#fff"/>
      </svg>
    ),
    "Make (Integromat)": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="12" cy="20" r="6" fill="#6D00CC" opacity="0.3" stroke="#6D00CC" strokeWidth="1.5"/>
        <circle cx="28" cy="12" r="4" fill="#6D00CC" opacity="0.2" stroke="#6D00CC" strokeWidth="1.5"/>
        <circle cx="28" cy="28" r="4" fill="#6D00CC" opacity="0.2" stroke="#6D00CC" strokeWidth="1.5"/>
        <path d="M18 18l6-4M18 22l6 4" stroke="#6D00CC" strokeWidth="1.5"/>
      </svg>
    ),
    "Lovable": (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="6" stroke="#FF6B9D" strokeWidth="1.5"/>
        <path d="M14 20l4 4 8-8" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="12" r="3" fill="#FF6B9D" opacity="0.4"/>
      </svg>
    ),
  };

  return (
    <span className="block">
      {logos[name] || (
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
  { badge: "Web Dev", badgeType: "core" as const, name: "Lovable", use: { en: "AI-powered web development for landing pages, brand sites, and digital experiences — shipped in days.", th: "AI-powered web development สำหรับ landing page, brand site และ digital experience — ส่งมอบในไม่กี่วัน" } },
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
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-accent-violet">
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
                          <ToolLogo name={tool.name} />
                          <div className="flex-1 min-w-0">
                            <span className={`inline-block font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-[3px] mb-2 border ${
                              tool.badgeType === "core"
                                ? "border-accent-violet/35 text-accent-violet"
                                : "border-divider text-muted-foreground"
                            }`}>
                              {tool.badge}
                            </span>
                            <h3 className="font-body text-[14px] tracking-[0.02em] text-foreground font-medium">{tool.name}</h3>
                          </div>
                        </div>
                        <p className="font-body text-[13px] leading-[1.65] text-muted-foreground">{tool.use[lang]}</p>
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
