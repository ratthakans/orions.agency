import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const tools = [
  { badge: "Strategy", badgeType: "core" as const, name: "Claude", use: { en: "Brand strategy, long-form copy, research synthesis, and client-facing documents.", th: "กลยุทธ์แบรนด์ คอปปี้ยาว การสังเคราะห์ข้อมูล และเอกสารสำหรับลูกค้า" } },
  { badge: "Copy", badgeType: "core" as const, name: "ChatGPT", use: { en: "Social captions, ad copy variations, email subject lines, and rapid ideation sprints.", th: "แคปชันโซเชียล คอปปี้โฆษณา หัวข้ออีเมล และการระดมไอเดียอย่างรวดเร็ว" } },
  { badge: "Visuals", badgeType: "core" as const, name: "Midjourney", use: { en: "Campaign hero imagery, moodboards, art direction references, and concept visualization.", th: "ภาพ hero ของแคมเปญ moodboard อ้างอิงการกำกับศิลป์ และการแสดงภาพ concept" } },
  { badge: "Visuals", badgeType: "default" as const, name: "Adobe Firefly", use: { en: "Generative fill, background removal, and expanding existing brand assets without licensing issues.", th: "Generative fill ลบพื้นหลัง และขยาย brand assets ที่มีอยู่โดยไม่มีปัญหาลิขสิทธิ์" } },
  { badge: "Video", badgeType: "default" as const, name: "Runway ML", use: { en: "Short-form video generation, motion graphics, and AI-assisted video editing for social content.", th: "การสร้างวิดีโอระยะสั้น motion graphics และการตัดต่อวิดีโอด้วย AI สำหรับโซเชียล" } },
  { badge: "Research", badgeType: "default" as const, name: "Perplexity", use: { en: "Real-time market research, competitor analysis, trend tracking, and insight gathering.", th: "การวิจัยตลาดแบบ real-time การวิเคราะห์คู่แข่ง การติดตามเทรนด์ และการรวบรวม insight" } },
  { badge: "Analytics", badgeType: "default" as const, name: "Foreplay AI", use: { en: "Ad creative analysis, competitor swipe files, and performance-based creative decisions.", th: "การวิเคราะห์ creative โฆษณา swipe file ของคู่แข่ง และการตัดสินใจ creative ตามประสิทธิภาพ" } },
  { badge: "Voice", badgeType: "default" as const, name: "ElevenLabs", use: { en: "AI voiceover for video content, podcast production, and multilingual brand audio.", th: "เสียงพากย์ AI สำหรับวิดีโอ การผลิตพอดแคสต์ และเสียงแบรนด์หลายภาษา" } },
  { badge: "Automation", badgeType: "default" as const, name: "Make (Integromat)", use: { en: "Automated content workflows, client reporting pipelines, and cross-platform publishing.", th: "workflow คอนเทนต์อัตโนมัติ pipeline รายงานลูกค้า และการเผยแพร่ข้ามแพลตฟอร์ม" } },
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
                  {t("Our AI Stack", "เครื่องมือ AI ที่เราใช้")}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
                <div>
                  <h1 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-5">
                    {t(<>Powered by<br />the best <span className="text-accent-gradient">tools.</span></>, <>ขับเคลื่อนด้วย<br /><span className="text-accent-gradient">เครื่องมือที่ดีที่สุด</span></>)}
                  </h1>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    {t(
                      "We don't just use AI — we've built a production stack that cuts delivery time by 60% while maintaining the quality standard of a senior creative team. Every tool below earns its place.",
                      "เราไม่ได้แค่ใช้ AI แต่เราได้สร้าง production stack ที่ลดเวลาส่งงานได้ถึง 60% ในขณะที่ยังรักษามาตรฐานคุณภาพระดับทีมครีเอทีฟซีเนียร์"
                    )}
                  </p>
                </div>

                {/* Tool Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider">
                  {tools.map((tool, i) => (
                    <AnimatedSection key={tool.name} delay={i * 0.05}>
                      <div className="bg-background p-7 hover:bg-secondary transition-colors duration-300 relative">
                        <span className={`inline-block font-mono text-[8px] tracking-[0.18em] uppercase px-2 py-[3px] mb-3 border ${
                          tool.badgeType === "core"
                            ? "border-accent-violet/35 text-accent-violet"
                            : "border-divider text-muted-foreground"
                        }`}>
                          {tool.badge}
                        </span>
                        <h3 className="font-mono text-[13px] tracking-[0.06em] text-foreground font-medium mb-2">{tool.name}</h3>
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
                      "ทุกเครื่องมือ AI ใน stack ของเรามีจุดประสงค์เฉพาะ เราไม่ใช้ AI เพื่อแทนที่ความคิดสร้างสรรค์ แต่เราใช้มันเพื่อขยายวิจารณญาณของมนุษย์"
                    )}
                  </p>
                  <div className="grid grid-cols-2 gap-px bg-divider border border-divider">
                    <div className="bg-background p-6 text-center">
                      <span className="font-display text-[48px] leading-none text-accent-gradient block mb-2">60%</span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{t("Faster Delivery", "ส่งงานเร็วขึ้น")}</span>
                    </div>
                    <div className="bg-background p-6 text-center">
                      <span className="font-display text-[48px] leading-none text-accent-gradient block mb-2">100%</span>
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">{t("Human Strategy", "กลยุทธ์โดยมนุษย์")}</span>
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
