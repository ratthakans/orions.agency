import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const positions = [
  { title: "Creative Marketing", type: "Full-time", desc: { en: "Lead creative marketing strategies for campaigns across digital and traditional media.", th: "นำกลยุทธ์การตลาดเชิงสร้างสรรค์สำหรับแคมเปญทั้งดิจิทัลและสื่อดั้งเดิม" } },
  { title: "Creative Content", type: "Full-time", desc: { en: "Develop compelling content narratives that connect brands with their audiences.", th: "พัฒนา content narrative ที่เชื่อมต่อแบรนด์กับกลุ่มเป้าหมาย" } },
  { title: "Editor Senior", type: "Full-time", desc: { en: "Edit and produce cinematic-quality films, commercials, and branded content.", th: "ตัดต่อและผลิตงานภาพยนตร์ โฆษณา และ branded content คุณภาพสูง" } },
  { title: "Graphic Designer", type: "Full-time", desc: { en: "Create visual identities, layouts, and design systems for diverse brand projects.", th: "สร้าง visual identity, layout และ design system สำหรับโปรเจกต์แบรนด์" } },
  { title: "Account Executive", type: "Full-time", count: 2, desc: { en: "Manage client relationships and ensure smooth project delivery from brief to launch.", th: "ดูแลลูกค้าและบริหารโปรเจกต์ตั้งแต่รับ brief จนถึง launch" } },
  { title: "Project Manager", type: "Full-time", desc: { en: "Oversee project timelines, budgets, and cross-team coordination.", th: "ดูแลไทม์ไลน์ งบประมาณ และการประสานงานระหว่างทีม" } },
  { title: "Social Media Manager", type: "Full-time", desc: { en: "Plan, execute, and optimize social media strategies across platforms.", th: "วางแผน ดำเนินการ และ optimize กลยุทธ์โซเชียลมีเดีย" } },
];

const CareerPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Career — ØRIONS Creative Agency</title>
        <meta name="description" content="Join ORIONS. We're looking for creative minds who think different and connect dots." />
        <link rel="canonical" href="https://orions.agency/career" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">✦</span> Join Us
              </p>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10 max-w-5xl">
                CONNECT YOUR<br />
                <span className="text-accent-gradient">DOTS</span> WITH OURS.
              </h1>
              <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-lg">
                {t(
                  "We're always looking for passionate creatives who believe in the power of storytelling. If you think different, we want to hear from you.",
                  "เราตามหาครีเอทีฟที่มีความหลงใหลและเชื่อในพลังของการเล่าเรื่องเสมอ ถ้าคุณคิดต่าง เราอยากรู้จักคุณ"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">◎</span> Open Positions
              </p>
              <h2 className="font-display text-[clamp(44px,5.5vw,88px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
                WE'RE <span className="text-accent-gradient">HIRING.</span>
              </h2>
            </AnimatedSection>

            <div className="flex flex-col">
              {positions.map((pos, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <a
                    href={`mailto:hello@orions.agency?subject=Apply: ${pos.title}`}
                    className="group relative block border-t border-border/50 hover:border-accent-warm/30 transition-all duration-500"
                  >
                    {/* Da Vinci corner marks */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />

                    <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 px-2 md:px-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-display text-[24px] md:text-[32px] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-500">
                            {pos.title}
                          </h3>
                          {pos.count && (
                            <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm border border-accent-warm/30 px-2 py-0.5">
                              ×{pos.count}
                            </span>
                          )}
                        </div>
                        <p className="font-body text-[14px] leading-[1.6] text-muted-foreground max-w-md">
                          {pos.desc[lang]}
                        </p>
                      </div>

                      <div className="flex items-center gap-6">
                        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground/50">
                          {pos.type}
                        </span>
                        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-foreground/40 group-hover:text-accent-warm transition-colors duration-500 flex items-center gap-2">
                          Apply
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
              {/* Bottom border */}
              <div className="border-t border-border/50" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">△</span> Don't See Your Role?
              </p>
              <h2 className="font-display text-[clamp(36px,4.5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10">
                SEND US YOUR <span className="text-accent-gradient">PORTFOLIO.</span>
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-md mx-auto mb-12">
                {t(
                  "We're always open to meeting talented people. Drop us a line and tell us what you do best.",
                  "เราพร้อมพบคนเก่งเสมอ ส่งข้อความมาบอกเราว่าคุณถนัดอะไร"
                )}
              </p>
              <a
                href="mailto:career@orions.agency"
                className="inline-block font-mono text-[12px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-4 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                career@orions.agency
              </a>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CareerPage;
