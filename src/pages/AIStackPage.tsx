import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Tool {
  name: string;
  logo: string;
  badge: string;
  desc: { en: string; th: string };
  dialog: {
    subtitle: { en: string; th: string };
    howWeUse: { en: string[]; th: string[] };
    capabilities: { label: string; desc: { en: string; th: string } }[];
  };
}

const tools: Tool[] = [
  {
    name: "Claude",
    logo: "https://cdn.worldvectorlogo.com/logos/anthropic-1.svg",
    badge: "Strategy",
    desc: {
      en: "Brand strategy, long-form copy, research synthesis, and client-facing documents.",
      th: "Brand strategy, long-form copy, สังเคราะห์ research และเอกสารลูกค้า",
    },
    dialog: {
      subtitle: { en: "Our strategic brain for deep thinking.", th: "สมองเชิงกลยุทธ์สำหรับการคิดเชิงลึก" },
      howWeUse: {
        en: [
          "Claude handles our most complex strategic work — from brand audits to competitive analysis documents. Its ability to process long contexts means we can feed entire market reports and get nuanced insights.",
          "We use Claude for client-facing documents where tone, accuracy, and depth matter most. Every strategy deck starts with Claude."
        ],
        th: [
          "Claude จัดการงาน strategic ที่ซับซ้อนที่สุด — ตั้งแต่ brand audit ถึง competitive analysis เอกสาร ความสามารถในการประมวล context ยาวหมายความว่าเราสามารถป้อน market report ทั้งฉบับและได้ insight ที่ละเอียด",
          "เราใช้ Claude สำหรับเอกสารที่ลูกค้าเห็นซึ่ง tone, ความแม่นยำ และความลึกสำคัญที่สุด ทุก strategy deck เริ่มจาก Claude"
        ]
      },
      capabilities: [
        { label: "Brand Audits", desc: { en: "Deep analysis of brand positioning & perception", th: "วิเคราะห์เชิงลึกของ brand positioning & perception" } },
        { label: "Strategy Documents", desc: { en: "Comprehensive strategic frameworks", th: "Strategic framework ที่ครอบคลุม" } },
        { label: "Research Synthesis", desc: { en: "Process large datasets into actionable insights", th: "ประมวล dataset ขนาดใหญ่เป็น insight ที่ใช้งานได้" } },
        { label: "Long-form Copy", desc: { en: "Case studies, whitepapers, and editorial", th: "Case study, whitepaper และ editorial" } },
      ]
    }
  },
  {
    name: "ChatGPT",
    logo: "/icons/chatgpt.png",
    badge: "Copy",
    desc: {
      en: "Social captions, ad copy variations, email subjects, and rapid creative ideation.",
      th: "Social captions, ad copy variations, email subjects และ rapid ideation",
    },
    dialog: {
      subtitle: { en: "Speed machine for creative copy.", th: "เครื่องจักรความเร็วสำหรับ creative copy" },
      howWeUse: {
        en: [
          "ChatGPT is our go-to for high-volume copy tasks. When we need 20 ad variations in an hour or 50 social captions for A/B testing, ChatGPT delivers with consistency and speed.",
          "We pair it with our brand voice guidelines to ensure every piece sounds authentically on-brand, then our copywriters add the final creative polish."
        ],
        th: [
          "ChatGPT คือเครื่องมือหลักสำหรับงาน copy ปริมาณมาก เมื่อต้องการ 20 ad variations ในชั่วโมงเดียวหรือ 50 social captions สำหรับ A/B testing ChatGPT ส่งมอบด้วยความ consistent และรวดเร็ว",
          "เราจับคู่กับ brand voice guidelines เพื่อให้ทุกชิ้นงานฟังดู on-brand แล้ว copywriter ของเราเพิ่ม creative polish สุดท้าย"
        ]
      },
      capabilities: [
        { label: "Ad Copy", desc: { en: "High-volume variations for Meta, Google, TikTok", th: "Variations ปริมาณมากสำหรับ Meta, Google, TikTok" } },
        { label: "Social Captions", desc: { en: "Platform-optimized captions at scale", th: "Captions ที่ optimize สำหรับแต่ละ platform" } },
        { label: "Email Subjects", desc: { en: "A/B test-ready subject line variations", th: "Subject line variations พร้อมสำหรับ A/B test" } },
        { label: "Rapid Ideation", desc: { en: "Brainstorm concepts and taglines fast", th: "Brainstorm concept และ tagline อย่างรวดเร็ว" } },
      ]
    }
  },
  {
    name: "Midjourney",
    logo: "/icons/midjourney.webp",
    badge: "Visuals",
    desc: {
      en: "Campaign hero imagery, moodboards, art direction references, and visual concepts.",
      th: "Campaign hero imagery, moodboard, art direction reference และ visual concept",
    },
    dialog: {
      subtitle: { en: "Infinite visual exploration in hours.", th: "สำรวจ visual ได้ไม่จำกัดในไม่กี่ชั่วโมง" },
      howWeUse: {
        en: [
          "Midjourney transforms our art direction process. Instead of describing a visual concept in words, we can show clients exactly what we mean — exploring 50+ directions before committing to production.",
          "Our art directors use Midjourney for initial exploration, then refine the chosen direction through professional photography and design."
        ],
        th: [
          "Midjourney เปลี่ยน art direction process ของเรา แทนที่จะอธิบาย visual concept ด้วยคำพูด เราสามารถแสดงให้ลูกค้าเห็นสิ่งที่เราหมายถึง — สำรวจ 50+ ทิศทางก่อนตัดสินใจ",
          "Art director ของเราใช้ Midjourney สำหรับ exploration เริ่มต้น แล้ว refine ทิศทางที่เลือกผ่าน professional photography และ design"
        ]
      },
      capabilities: [
        { label: "Hero Imagery", desc: { en: "Campaign-quality visuals for presentations", th: "Visual ระดับ campaign สำหรับ presentation" } },
        { label: "Moodboards", desc: { en: "Rapid visual direction exploration", th: "สำรวจ visual direction อย่างรวดเร็ว" } },
        { label: "Art Direction", desc: { en: "Reference imagery for photo shoots", th: "Reference imagery สำหรับ photo shoot" } },
        { label: "Concept Art", desc: { en: "Visualize ideas before production", th: "Visualize ไอเดียก่อน production" } },
      ]
    }
  },
  {
    name: "Runway",
    logo: "/icons/runway.png",
    badge: "Video",
    desc: {
      en: "Short-form video generation, motion graphics, and AI-assisted video editing.",
      th: "สร้างวิดีโอ short-form, motion graphics และ AI-assisted video editing",
    },
    dialog: {
      subtitle: { en: "Video production at impossible speed.", th: "Video production ด้วยความเร็วที่เหลือเชื่อ" },
      howWeUse: {
        en: [
          "Runway lets us prototype video concepts in minutes instead of days. We use it for initial creative exploration, motion tests, and rapid concept validation with clients.",
          "For final production, our video editors combine Runway-generated elements with professional footage to create polished, broadcast-quality content."
        ],
        th: [
          "Runway ให้เรา prototype video concept ในไม่กี่นาทีแทนที่จะเป็นวัน เราใช้สำหรับ creative exploration เริ่มต้น, motion test และ rapid concept validation กับลูกค้า",
          "สำหรับ final production video editor ของเราผสม Runway-generated elements กับ professional footage เพื่อสร้าง content คุณภาพระดับ broadcast"
        ]
      },
      capabilities: [
        { label: "Video Generation", desc: { en: "AI-generated video clips and b-roll", th: "AI-generated video clips และ b-roll" } },
        { label: "Motion Graphics", desc: { en: "Animated elements and transitions", th: "Animated elements และ transitions" } },
        { label: "Video Editing", desc: { en: "AI-assisted editing and color grading", th: "AI-assisted editing และ color grading" } },
        { label: "Concept Testing", desc: { en: "Rapid video prototyping for client review", th: "Rapid video prototyping สำหรับ client review" } },
      ]
    }
  },
  {
    name: "Adobe Firefly",
    logo: "/icons/firefly.png",
    badge: "Design",
    desc: {
      en: "Generative design assets, texture creation, and AI-powered image editing workflows.",
      th: "Generative design assets, สร้าง texture และ AI-powered image editing workflows",
    },
    dialog: {
      subtitle: { en: "Seamless AI inside creative tools.", th: "AI ที่ผสานในเครื่องมือ creative อย่างราบรื่น" },
      howWeUse: {
        en: [
          "Adobe Firefly integrates directly into our existing Creative Cloud workflow — Photoshop, Illustrator, and InDesign. This means our designers can use generative fill, extend backgrounds, and create variations without leaving their primary tools.",
          "It's particularly powerful for production tasks: extending image backgrounds, generating texture variations, and creating on-brand asset variants at scale."
        ],
        th: [
          "Adobe Firefly ผสานเข้ากับ Creative Cloud workflow ของเราโดยตรง — Photoshop, Illustrator และ InDesign designer ของเราสามารถใช้ generative fill, ขยาย background และสร้าง variations โดยไม่ต้องออกจากเครื่องมือหลัก",
          "มีพลังมากสำหรับ production tasks: ขยาย image background, สร้าง texture variations และสร้าง on-brand asset variants ในปริมาณมาก"
        ]
      },
      capabilities: [
        { label: "Generative Fill", desc: { en: "Smart content-aware image editing", th: "Smart content-aware image editing" } },
        { label: "Texture Creation", desc: { en: "On-brand textures and patterns", th: "Texture และ pattern ที่ on-brand" } },
        { label: "Image Extension", desc: { en: "Extend and resize images intelligently", th: "ขยายและ resize ภาพอย่างชาญฉลาด" } },
        { label: "Asset Variants", desc: { en: "Generate multiple design variations fast", th: "สร้าง design variations หลายแบบรวดเร็ว" } },
      ]
    }
  },
  {
    name: "Lovable",
    logo: "/icons/lovable.png",
    badge: "Web Dev",
    desc: {
      en: "AI-powered web development for landing pages, brand sites, and digital experiences.",
      th: "AI-powered web development สำหรับ landing page, brand site และ digital experience",
    },
    dialog: {
      subtitle: { en: "Ship beautiful websites in days, not months.", th: "ส่งมอบเว็บไซต์สวยๆ ในไม่กี่วัน ไม่ใช่หลายเดือน" },
      howWeUse: {
        en: [
          "Lovable lets us build production-ready websites through AI-assisted development. We go from design concept to live site in days instead of weeks — without sacrificing code quality or performance.",
          "It's perfect for campaign landing pages, brand microsites, and digital experiences where speed-to-market is critical."
        ],
        th: [
          "Lovable ให้เราสร้าง production-ready websites ผ่าน AI-assisted development เราไปจาก design concept ถึง live site ในไม่กี่วันแทนที่จะเป็นสัปดาห์ — โดยไม่ลด code quality หรือ performance",
          "เหมาะสำหรับ campaign landing page, brand microsite และ digital experience ที่ speed-to-market สำคัญ"
        ]
      },
      capabilities: [
        { label: "Landing Pages", desc: { en: "High-converting campaign pages", th: "Campaign page ที่ convert สูง" } },
        { label: "Brand Sites", desc: { en: "Full corporate and brand websites", th: "เว็บไซต์ corporate และ brand เต็มรูปแบบ" } },
        { label: "Rapid Prototyping", desc: { en: "Working prototypes in hours", th: "Working prototype ในไม่กี่ชั่วโมง" } },
        { label: "Responsive Design", desc: { en: "Perfect on every device and screen size", th: "สมบูรณ์แบบในทุกอุปกรณ์และขนาดหน้าจอ" } },
      ]
    }
  },
];

const AIStackPage = () => {
  const { lang, t } = useLanguage();
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>AI Stack — ØRIONS Creative Agency</title>
        <meta name="description" content="Discover the AI tools powering ØRIONS' creative production. From Claude for strategy to Midjourney for visuals — our stack cuts delivery time by 60%." />
        <link rel="canonical" href="https://orions.agency/ai-stack" />
      </Helmet>
      <Navbar />
      <div className="pt-[62px]">
        <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
          <StarField count={40} />
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-12">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground">
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




            {/* Tool Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider">
              {tools.map((tool, i) => (
                <AnimatedSection key={tool.name} delay={i * 0.06}>
                  <div
                    onClick={() => setSelectedTool(tool)}
                    className="bg-background p-8 md:p-9 hover:bg-secondary transition-colors duration-300 relative group cursor-pointer"
                  >
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
                        <span className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-[3px] border border-foreground/15 text-foreground/60 mb-1 inline-block">
                          {tool.badge}
                        </span>
                        <h3 className="font-body text-[15px] tracking-[0.02em] text-foreground font-medium">{tool.name}</h3>
                      </div>
                    </div>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{tool.desc[lang]}</p>
                    <div className="mt-4 flex items-center gap-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase">{t("View Details", "ดูรายละเอียด")}</span>
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" /></svg>
                    </div>
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

      {/* Tool Detail Dialog */}
      <Dialog open={!!selectedTool} onOpenChange={() => setSelectedTool(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-divider p-0 gap-0">
          {selectedTool && (
            <>
              <DialogHeader className="p-8 pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <img src={selectedTool.logo} alt={selectedTool.name} className="w-10 h-10 object-contain rounded-sm" />
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-[3px] border border-foreground/15 text-foreground/60 mb-1 inline-block">
                      {selectedTool.badge}
                    </span>
                    <DialogTitle className="font-display text-[36px] tracking-[0.03em] leading-none text-foreground">
                      {selectedTool.name}
                    </DialogTitle>
                  </div>
                </div>
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{selectedTool.dialog.subtitle[lang]}</p>
              </DialogHeader>

              <div className="p-8 space-y-8">
                <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("How We Use It", "เราใช้อย่างไร")}</h4>
                  <div className="space-y-3">
                    {selectedTool.dialog.howWeUse[lang].map((p, i) => (
                      <p key={i} className="font-body text-[14px] leading-[1.75] text-muted-foreground">{p}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("Capabilities", "ความสามารถ")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider border border-divider">
                    {selectedTool.dialog.capabilities.map((cap, i) => (
                      <div key={i} className="bg-background p-4 hover:bg-secondary transition-colors duration-300">
                        <span className="font-mono text-[10px] tracking-[0.1em] text-foreground block mb-1">{cap.label}</span>
                        <span className="font-body text-[13px] text-muted-foreground leading-snug">{cap.desc[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default AIStackPage;