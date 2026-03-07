import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface StepDetail {
  num: string;
  title: { en: string; th: string };
  desc: { en: string; th: string };
  badge: string;
  dialog: {
    subtitle: { en: string; th: string };
    process: { en: string[]; th: string[] };
    different: { en: string; th: string };
    keySteps: { label: string; desc: { en: string; th: string } }[];
  };
}

const steps: StepDetail[] = [
  {
    num: "01",
    title: { en: "Discovery", th: "Discovery" },
    desc: { en: "Deep brand interviews, competitor mapping, and audience analysis — AI-synthesized in days, not weeks.", th: "สัมภาษณ์แบรนด์เชิงลึก วิเคราะห์คู่แข่ง และ audience — สังเคราะห์ด้วย AI ในไม่กี่วัน" },
    badge: "Strategy",
    dialog: {
      subtitle: { en: "Understand before we create.", th: "เข้าใจก่อนสร้าง" },
      process: {
        en: [
          "We start every engagement with a deep-dive into your brand, market, and audience. AI tools like Perplexity and Claude help us synthesize competitor landscapes and audience behavior in days — not the typical 3-4 weeks.",
          "The output is a Brand Discovery Document that becomes the foundation for every creative decision that follows."
        ],
        th: [
          "เราเริ่มทุก engagement ด้วยการ deep-dive เข้าสู่แบรนด์ ตลาด และ audience ของคุณ AI tools อย่าง Perplexity และ Claude ช่วยสังเคราะห์ competitor landscape และพฤติกรรม audience ได้ในไม่กี่วัน",
          "ผลลัพธ์คือ Brand Discovery Document ที่เป็นรากฐานของทุก creative decision ที่ตามมา"
        ]
      },
      different: {
        en: "Most agencies spend 3-4 weeks on discovery. We compress this to 3-5 days using AI-powered research synthesis — without sacrificing depth.",
        th: "Agency ส่วนใหญ่ใช้เวลา 3-4 สัปดาห์ในขั้น discovery เราบีบอัดเหลือ 3-5 วันด้วย AI-powered research"
      },
      keySteps: [
        { label: "Brand Interview", desc: { en: "60-min deep-dive session with stakeholders", th: "Session deep-dive 60 นาทีกับ stakeholder" } },
        { label: "AI Competitor Scan", desc: { en: "Automated analysis of 20+ competitors", th: "วิเคราะห์คู่แข่ง 20+ รายอัตโนมัติ" } },
        { label: "Audience Mapping", desc: { en: "Behavioral & psychographic profiling", th: "Behavioral & psychographic profiling" } },
        { label: "Opportunity Matrix", desc: { en: "Data-backed gaps and positioning opportunities", th: "Gap และโอกาส positioning จาก data" } },
        { label: "Brand DNA Brief", desc: { en: "One-page strategic foundation document", th: "เอกสาร strategic foundation หนึ่งหน้า" } },
        { label: "Kickoff Alignment", desc: { en: "Present findings & align on direction", th: "นำเสนอ findings และ align ทิศทาง" } },
      ]
    }
  },
  {
    num: "02",
    title: { en: "Strategy", th: "Strategy" },
    desc: { en: "Humans set the direction. AI accelerates production. Every concept passes a craft review before you see it.", th: "มนุษย์กำหนดทิศทาง AI เร่งการผลิต ทุก concept ผ่าน craft review ก่อนถึงมือคุณ" },
    badge: "Creative",
    dialog: {
      subtitle: { en: "Direction before decoration.", th: "ทิศทางก่อนตกแต่ง" },
      process: {
        en: [
          "Strategy is where human thinking leads. We define your brand positioning, messaging architecture, and creative territory — informed by data but driven by experience.",
          "AI helps us generate 10x more concept variations to test, but the strategic direction is always set by our senior creative team."
        ],
        th: [
          "Strategy คือจุดที่ human thinking นำ เรากำหนด brand positioning, messaging architecture และ creative territory — มาจาก data แต่ขับเคลื่อนด้วยประสบการณ์",
          "AI ช่วยให้เราสร้าง concept variations ได้มากกว่า 10 เท่า แต่ strategic direction กำหนดโดย senior creative team เสมอ"
        ]
      },
      different: {
        en: "We pressure-test every positioning concept with AI-generated market simulations before committing.",
        th: "เราทดสอบทุก positioning concept ด้วย AI-generated market simulation ก่อนตัดสินใจ"
      },
      keySteps: [
        { label: "Positioning Workshop", desc: { en: "Define where you stand in the market", th: "กำหนดตำแหน่งของคุณในตลาด" } },
        { label: "Messaging Architecture", desc: { en: "Core narrative & key messages by audience", th: "Core narrative & key messages ตาม audience" } },
        { label: "Creative Territory", desc: { en: "Visual & verbal direction exploration", th: "สำรวจทิศทาง visual & verbal" } },
        { label: "AI Concept Sprint", desc: { en: "Generate 50+ variations in 48 hours", th: "สร้าง 50+ variations ใน 48 ชั่วโมง" } },
        { label: "Craft Review", desc: { en: "Senior team curates the best 3-5 directions", th: "Senior team คัดเลือก 3-5 ทิศทางที่ดีที่สุด" } },
        { label: "Client Presentation", desc: { en: "Present strategy with rationale & next steps", th: "นำเสนอ strategy พร้อมเหตุผลและขั้นตอนถัดไป" } },
      ]
    }
  },
  {
    num: "03",
    title: { en: "Creation", th: "Creation" },
    desc: { en: "Design, copy, and assets built in parallel — not sequentially. AI compresses timelines without compressing quality.", th: "Design, copy และ assets สร้างพร้อมกัน — AI บีบอัด timeline โดยไม่ลดคุณภาพ" },
    badge: "Build",
    dialog: {
      subtitle: { en: "Build everything at once.", th: "สร้างทุกอย่างพร้อมกัน" },
      process: {
        en: [
          "Traditional agencies work sequentially: copy → design → production. We work in parallel. AI handles the heavy lifting while our creative team focuses on craft and quality control.",
          "Every asset passes through a human review gate before delivery."
        ],
        th: [
          "Agency แบบเดิมทำงานเป็นลำดับ: copy → design → production เราทำแบบขนาน AI จัดการงานหนัก ขณะที่ creative team โฟกัสที่ craft และ quality control",
          "ทุก asset ผ่าน human review gate ก่อนส่งมอบ"
        ]
      },
      different: {
        en: "Our parallel production model means a full brand identity that takes 8-12 weeks elsewhere gets delivered in 3-4 weeks.",
        th: "Production model แบบขนานของเราหมายความว่า brand identity เต็มรูปแบบที่ที่อื่นใช้ 8-12 สัปดาห์ เราส่งมอบใน 3-4 สัปดาห์"
      },
      keySteps: [
        { label: "Design System", desc: { en: "Colors, typography, components in Figma", th: "Colors, typography, components ใน Figma" } },
        { label: "AI Content Generation", desc: { en: "Copy, visuals, and variations at scale", th: "Copy, visuals และ variations ในปริมาณมาก" } },
        { label: "Art Direction", desc: { en: "Human-led creative quality control", th: "Creative quality control โดยมนุษย์" } },
        { label: "Asset Production", desc: { en: "Final files across all formats & channels", th: "ไฟล์ final ทุก format และ channel" } },
        { label: "Brand Guidelines", desc: { en: "Living document for consistent application", th: "เอกสารที่อัปเดตได้สำหรับการใช้งาน consistent" } },
        { label: "Quality Gate", desc: { en: "Senior review before any deliverable ships", th: "Senior review ก่อนส่งมอบทุกชิ้นงาน" } },
      ]
    }
  },
  {
    num: "04",
    title: { en: "Launch & Scale", th: "Launch & Scale" },
    desc: { en: "We don't hand over files. We hand over a living brand system — with the documentation and support to grow it.", th: "เราไม่ส่งแค่ไฟล์ เราส่ง brand system ที่มีชีวิต — พร้อม documentation และ support เพื่อการเติบโต" },
    badge: "Growth",
    dialog: {
      subtitle: { en: "Launch is just the beginning.", th: "Launch เป็นแค่จุดเริ่มต้น" },
      process: {
        en: [
          "We don't disappear after delivery. Launch & Scale is about ensuring your brand system works in the real world — and continues to grow.",
          "From launch day support to ongoing optimization, we build systems that compound over time."
        ],
        th: [
          "เราไม่หายไปหลังส่งมอบ Launch & Scale คือการทำให้ brand system ทำงานได้ในโลกจริง — และเติบโตต่อไป",
          "ตั้งแต่ launch day support ถึง ongoing optimization เราสร้างระบบที่สะสมผลลัพธ์ตามเวลา"
        ]
      },
      different: {
        en: "We deliver a living brand system — not just files. This includes implementation support, team training, and a 30-day post-launch optimization window.",
        th: "เราส่งมอบ living brand system — ไม่ใช่แค่ไฟล์ รวมถึง implementation support, team training และ 30 วัน post-launch optimization"
      },
      keySteps: [
        { label: "Launch Planning", desc: { en: "Coordinated rollout across all channels", th: "วางแผน rollout ทุก channel" } },
        { label: "Implementation Support", desc: { en: "Hands-on help getting everything live", th: "ช่วยเหลือจนทุกอย่าง live" } },
        { label: "Team Training", desc: { en: "Empower your team to use the brand system", th: "ฝึก team ให้ใช้ brand system ได้" } },
        { label: "Performance Tracking", desc: { en: "AI-powered analytics from day one", th: "AI-powered analytics ตั้งแต่วันแรก" } },
        { label: "30-Day Optimization", desc: { en: "Post-launch tweaks based on real data", th: "ปรับแต่งหลัง launch จาก real data" } },
        { label: "Growth Roadmap", desc: { en: "Strategic plan for the next 6-12 months", th: "Strategic plan สำหรับ 6-12 เดือนข้างหน้า" } },
      ]
    }
  },
];

const ProcessSection = () => {
  const { lang, t } = useLanguage();
  const [selectedStep, setSelectedStep] = useState<StepDetail | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
              {t("How We Work", "วิธีการทำงาน")}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-12">
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>A framework<br />that <span className="text-accent-gradient">compounds.</span></>, <>Framework<br />ที่<span className="text-accent-gradient">สะสมผลลัพธ์</span></>)}
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
              {t(
                "Every engagement follows the same four stages. Where we differ is the depth at each step — and how much faster AI lets us move through them.",
                "ทุกโปรเจกต์ผ่าน 4 ขั้นตอนเดียวกัน สิ่งที่ต่างคือความลึกในแต่ละขั้น — และความเร็วที่ AI ช่วยให้เราเคลื่อนไหวได้"
              )}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-divider">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div
                onClick={() => setSelectedStep(step)}
                className="p-10 md:p-9 border-r border-b border-divider last:border-r-0 relative group hover:bg-secondary transition-colors duration-300 cursor-pointer"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <span className="font-display text-[88px] leading-none block mb-5 text-foreground/10 group-hover:text-accent-gradient transition-all duration-500">{step.num}</span>
                <h3 className="font-body text-[15px] font-medium text-foreground mb-2.5">{step.title[lang]}</h3>
                <p className="font-body text-[13px] leading-[1.72] text-muted-foreground">{step.desc[lang]}</p>
                <span className="absolute top-5 right-5 font-mono text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 bg-foreground/5 text-foreground/60 border border-foreground/10">
                  {step.badge}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={!!selectedStep} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-divider p-0 gap-0">
          {selectedStep && (
            <>
              <DialogHeader className="p-8 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground">{selectedStep.badge}</span>
                </div>
                <DialogTitle className="font-display text-[40px] tracking-[0.03em] leading-none text-foreground mb-2">
                  {selectedStep.title[lang]}
                </DialogTitle>
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{selectedStep.dialog.subtitle[lang]}</p>
              </DialogHeader>

              <div className="p-8 space-y-8">
                <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("Our Process", "กระบวนการของเรา")}</h4>
                  <div className="space-y-3">
                    {selectedStep.dialog.process[lang].map((p, i) => (
                      <p key={i} className="font-body text-[14px] leading-[1.75] text-muted-foreground">{p}</p>
                    ))}
                  </div>
                </div>

                <div className="border border-divider bg-card p-6">
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-3">{t("How We're Different", "สิ่งที่เราต่าง")}</h4>
                  <p className="font-body text-[14px] leading-[1.75] text-muted-foreground">{selectedStep.dialog.different[lang]}</p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("Key Steps", "ขั้นตอนสำคัญ")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider border border-divider">
                    {selectedStep.dialog.keySteps.map((ks, i) => (
                      <div key={i} className="bg-background p-4 hover:bg-secondary transition-colors duration-300">
                        <span className="font-mono text-[10px] tracking-[0.1em] text-foreground block mb-1">{ks.label}</span>
                        <span className="font-body text-[13px] text-muted-foreground leading-snug">{ks.desc[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProcessSection;