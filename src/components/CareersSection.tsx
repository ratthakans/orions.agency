import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const jobs = [
  { title: "Video Editor", type: "Full-time", description: { en: "Craft compelling visual stories for brands across Southeast Asia. You'll own the full post-production pipeline.", th: "สร้าง visual story ที่ทรงพลังสำหรับแบรนด์ใน Southeast Asia คุณจะดูแล post-production pipeline ทั้งหมด" }, responsibilities: ["Edit and produce high-quality video content for brand campaigns, social media, and digital platforms", "Collaborate with the creative director and strategists to translate briefs into visual narratives", "Manage post-production workflow including color grading, sound design, and motion graphics", "Stay current with video trends, editing techniques, and platform-specific formats", "Ensure all deliverables meet brand guidelines and quality standards"], qualifications: ["2+ years of professional video editing experience", "Proficiency in Adobe Premiere Pro, After Effects, and DaVinci Resolve", "Strong storytelling sense and attention to detail", "Experience with motion graphics is a plus", "Portfolio showcasing previous work required"] },
  { title: "Graphic Designer", type: "Full-time", description: { en: "Create impactful visual identities, marketing collateral, and digital assets that define brands.", th: "สร้าง visual identity, marketing collateral และ digital asset ที่กำหนดตัวตนของแบรนด์" }, responsibilities: ["Design brand identities, marketing materials, and digital assets", "Create layouts for social media, websites, presentations, and print", "Collaborate with strategists and copywriters to develop creative concepts", "Maintain design consistency across all brand touchpoints", "Prepare production-ready files and manage design asset libraries"], qualifications: ["2+ years of graphic design experience in agency or in-house setting", "Expert proficiency in Figma, Adobe Illustrator, and Photoshop", "Strong typography and layout skills", "Understanding of brand systems and design thinking", "Portfolio demonstrating range and craft required"] },
  { title: "Content Creator", type: "Full-time", description: { en: "Produce scroll-stopping content across platforms — from concept to final cut. You think in hooks, visuals, and trends.", th: "สร้าง content ที่หยุด scroll ทุก platform — ตั้งแต่ concept ถึง final cut คุณคิดเป็น hook, visual และ trend" }, responsibilities: ["Ideate and produce short-form video content for TikTok, Instagram Reels, and YouTube Shorts", "Develop content concepts aligned with brand strategy and campaign objectives", "Stay ahead of platform trends, audio trends, and viral formats", "Collaborate with social media managers and strategists on content calendars", "Edit and optimize content for each platform's best practices and algorithms"], qualifications: ["1+ years of experience creating content for social media platforms", "Proficiency in CapCut, Adobe Premiere Pro, or similar editing tools", "Strong visual storytelling and understanding of social media algorithms", "Comfortable being on camera or directing on-camera talent", "Portfolio of published social media content required"] },
  { title: "Digital Marketing Specialist", type: "Full-time", description: { en: "Plan, execute, and optimize campaigns across paid and organic channels with a data-driven approach.", th: "วางแผน execute และ optimize campaign ทั้ง paid และ organic ด้วยแนวทาง data-driven" }, responsibilities: ["Plan and manage digital advertising campaigns across Meta, Google, TikTok, and LINE", "Analyze campaign performance and provide actionable insights and reports", "Develop SEO strategies and oversee content optimization", "Manage marketing budgets and optimize for ROI", "Collaborate with the creative team on ad creatives and landing pages"], qualifications: ["2+ years of experience in digital marketing or performance marketing", "Proficiency with Google Analytics, Meta Business Suite, and Google Ads", "Strong analytical skills and data-driven mindset", "Experience with SEO tools (Ahrefs, SEMrush) is a plus", "Understanding of the Thai digital landscape preferred"] },
  { title: "Social Media Manager", type: "Full-time", description: { en: "Own our clients' social presence from strategy to execution. Build communities that drive real engagement.", th: "ดูแล social presence ของลูกค้าตั้งแต่ strategy ถึง execution สร้าง community ที่ขับเคลื่อน engagement จริง" }, responsibilities: ["Develop and execute social media strategies across Instagram, Facebook, TikTok, X, and LINE", "Create, schedule, and publish engaging content aligned with brand voice", "Monitor trends, conversations, and competitor activity", "Manage community engagement and respond to audience interactions", "Track KPIs and deliver monthly performance reports"], qualifications: ["2+ years managing social media for brands or agencies", "Strong copywriting skills in both Thai and English", "Experience with social management tools (Hootsuite, Buffer, or similar)", "Understanding of social algorithms and content best practices", "Creative mindset with a pulse on culture and trends"] },
  { title: "Creative Strategist", type: "Full-time", description: { en: "Bridge the gap between insight and execution. Shape brand narratives that move people and markets.", th: "เชื่อมช่องว่างระหว่าง insight และ execution สร้าง brand narrative ที่ขับเคลื่อนทั้งคนและตลาด" }, responsibilities: ["Develop brand strategies, creative concepts, and campaign narratives", "Conduct research and audience analysis to inform creative direction", "Write creative briefs and present strategic recommendations to clients", "Collaborate with designers, editors, and marketers to bring ideas to life", "Identify emerging trends and opportunities for brand storytelling"], qualifications: ["3+ years in creative strategy, brand planning, or advertising", "Exceptional storytelling and presentation skills", "Ability to think both creatively and analytically", "Experience working with cross-functional creative teams", "Strong command of English; Thai proficiency is a plus"] },
];

const benefits = [
  { title: "Social Security", desc: { en: "Full coverage as required by Thai labor law", th: "ประกันสังคมครบตามกฎหมายแรงงาน" } },
  { title: "Public Holidays", desc: { en: "All public holidays off per regulations", th: "หยุดวันหยุดนักขัตฤกษ์ตามกฎหมาย" } },
  { title: "Creative Culture", desc: { en: "Collaborative, creative team environment", th: "ทำงานในทีม creative ที่ collaborative" } },
  { title: "Flexible Hours", desc: { en: "Mon – Fri, 10:00 – 19:00 with flexibility", th: "จันทร์ – ศุกร์ 10:00 – 19:00 มีความยืดหยุ่น" } },
  { title: "Growth Path", desc: { en: "Clear progression and skill development", th: "Career path ชัดเจนและพัฒนา skill ได้" } },
  { title: "Team Activities", desc: { en: "Regular outings, workshops, and retreats", th: "Team outing, workshop และ retreat เป็นประจำ" } },
];

const CareersSection = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const { lang, t } = useLanguage();

  return (
    <section className="py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <AnimatedSection>
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-3.5 mb-8">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground">Careers</span>
            </div>
            <h2 className="font-display text-[clamp(48px,7vw,100px)] leading-[0.9] tracking-[0.02em] text-foreground mb-6">
              {t(<>Join Our <span className="text-accent-gradient">Creative Team</span></>, <>ร่วมงานกับ <span className="text-accent-gradient">Creative Team</span></>)}
            </h2>
            <p className="font-body text-[16px] text-muted-foreground leading-[1.75] max-w-xl">
              {t(
                "We're always looking for talented, curious people who want to do meaningful creative work at the intersection of human craft and AI.",
                "เรามองหาคนที่มีความสามารถและอยากรู้อยากเห็น ที่อยากทำงาน creative ที่มีความหมาย ณ จุดบรรจบของ human craft และ AI"
              )}
            </p>
          </div>
        </AnimatedSection>

        {/* Info strip */}
        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider mb-20">
            <div className="bg-background p-7 hover:bg-secondary transition-colors duration-300">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{t("Working Hours", "เวลาทำงาน")}</p>
              <p className="font-body text-[15px] text-foreground">{t("Monday – Friday, 10:00 – 19:00", "จันทร์ – ศุกร์ 10:00 – 19:00")}</p>
            </div>
            <div className="bg-background p-7 hover:bg-secondary transition-colors duration-300">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">Location</p>
              <a href="https://maps.app.goo.gl/MCY3ywNZBYofY49Q9" target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-foreground transition-colors duration-300">
                246/8 Soi Yothinpattana 3, Bang Kapi →
              </a>
            </div>
            <div className="bg-background p-7 hover:bg-secondary transition-colors duration-300">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">{t("Apply", "สมัครงาน")}</p>
              <a href="mailto:hello@orions.agency" className="font-body text-[15px] text-foreground transition-colors duration-300">
                hello@orions.agency →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Open Positions */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-3.5 mb-10">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-accent-violet">
              {t("Open Positions", "ตำแหน่งที่เปิดรับ")}
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider mb-20">
          {jobs.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.05}>
              <div
                onClick={() => setSelectedJob(job)}
                className="bg-background p-8 md:p-10 relative overflow-hidden group hover:bg-secondary transition-colors duration-300 cursor-pointer"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.22em] text-accent-violet mb-3 block">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[26px] tracking-[0.04em] leading-none text-foreground">{job.title}</h3>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground border border-divider px-3 py-1 shrink-0 mt-6">{job.type}</span>
                </div>
                <p className="font-body text-[14px] text-muted-foreground leading-[1.7] line-clamp-2">{job.description[lang]}</p>
                <div className="mt-4 flex items-center gap-2 text-accent-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase">{t("View Details", "ดูรายละเอียด")}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Benefits */}
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-10">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-accent-violet">
              {t("Benefits & Perks", "สวัสดิการ")}
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider mb-20">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.05}>
              <div className="bg-background p-8 md:p-9 group hover:bg-secondary transition-colors duration-300">
                <span className="font-mono text-[10px] tracking-[0.22em] text-accent-violet mb-3 block">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="font-body text-[15px] font-medium text-foreground mb-2">{b.title}</h4>
                <p className="font-body text-[14px] text-muted-foreground leading-[1.65]">{b.desc[lang]}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.1}>
          <div className="border border-divider p-10 md:p-14 text-center bg-card">
            <h3 className="font-display text-[clamp(28px,4vw,52px)] leading-[0.94] tracking-[0.02em] text-foreground mb-4">
              {t(<>Don't see your role? <span className="text-accent-gradient">Reach out.</span></>, <>ไม่เห็นตำแหน่งที่ใช่? <span className="text-accent-gradient">ติดต่อเรา</span></>)}
            </h3>
            <p className="font-body text-[15px] text-muted-foreground mb-8 max-w-md mx-auto leading-[1.7]">
              {t("We're always open to meeting great people. Send your portfolio and tell us what excites you.", "เราเปิดรับคนเก่งเสมอ ส่ง portfolio มาพร้อมบอกเราว่าอะไรที่ทำให้คุณตื่นเต้น")}
            </p>
            <a href="mailto:hello@orions.agency" className="inline-flex items-center gap-2 bg-accent-gradient text-white px-10 py-4 font-mono text-[11px] tracking-[0.15em] uppercase hover:opacity-90 transition-all duration-300 rounded-sm">
              {t("Send Your Portfolio", "ส่ง Portfolio")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Job Detail Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background border-divider p-0">
          {selectedJob && (
            <div className="p-8 md:p-12">
              <DialogHeader className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <DialogTitle className="font-display text-2xl md:text-3xl text-foreground">{selectedJob.title}</DialogTitle>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground border border-divider px-2 py-0.5">{selectedJob.type}</span>
                </div>
                <DialogDescription className="font-body text-[15px] text-muted-foreground leading-[1.7]">{selectedJob.description[lang]}</DialogDescription>
              </DialogHeader>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-divider p-5">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{t("Working Hours", "เวลาทำงาน")}</p>
                    <p className="font-body text-[14px] text-foreground">Mon – Fri, 10:00 – 19:00</p>
                  </div>
                  <div className="border border-divider p-5">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Location</p>
                    <p className="font-body text-[14px] text-foreground">246/8 Soi Yothinpattana 3, Bang Kapi</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-violet mb-4">Responsibilities</h4>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-accent-violet font-mono text-[10px] mt-1">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-body text-[14px] text-foreground leading-[1.65]">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-divider pt-8">
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-violet mb-4">Qualifications</h4>
                  <ul className="space-y-3">
                    {selectedJob.qualifications.map((q, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-accent-violet font-mono text-[10px] mt-1">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-body text-[14px] text-foreground leading-[1.65]">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-divider pt-8">
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-violet mb-4">{t("Benefits", "สวัสดิการ")}</h4>
                  <div className="flex flex-wrap gap-2">
                    {benefits.map((b) => (
                      <span key={b.title} className="font-mono text-[10px] tracking-[0.1em] uppercase border border-divider px-3 py-1.5 text-foreground">{b.title}</span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-divider pt-8">
                  <a href="mailto:hello@orions.agency" className="inline-flex items-center gap-2 bg-accent-gradient text-white px-8 py-3.5 font-mono text-[11px] tracking-[0.15em] uppercase hover:opacity-90 transition-all duration-300 rounded-sm">
                    {t("Apply Now", "สมัครเลย")}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CareersSection;
