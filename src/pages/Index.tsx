import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import { useLanguage } from "@/contexts/LanguageContext";

import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workSera from "@/assets/work-sera.jpg";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const { t, lang } = useLanguage();

  const services = [
    {
      title: "Content",
      desc: { en: "Consistent, meaningful content systems that scale.", th: "ระบบ content ที่สม่ำเสมอ มีความหมาย และขยายได้" },
      details: {
        en: "We build content engines — not just posts. From monthly social calendars to short-form video production, we create systems that keep your brand active, consistent, and growing.",
        th: "เราสร้าง content engine — ไม่ใช่แค่โพสต์ ตั้งแต่ social calendar รายเดือนไปจนถึงการผลิตวิดีโอสั้น เราสร้างระบบที่ทำให้แบรนด์ active และเติบโต"
      },
      includes: ["Content Calendar", "Short-form Video", "Social Media Management", "Monthly Reports"]
    },
    {
      title: "Think",
      desc: { en: "Strategic thinking and creative direction for brands that need clarity.", th: "การคิดเชิงกลยุทธ์และ creative direction สำหรับแบรนด์ที่ต้องการความชัดเจน" },
      details: {
        en: "We craft brand narratives, positioning statements, and messaging frameworks that give your brand a clear voice. From founding stories to campaign themes — we make sure every word counts.",
        th: "เราสร้าง brand narrative, positioning statement และ messaging framework ที่ให้แบรนด์ของคุณมีเสียงที่ชัดเจน ตั้งแต่เรื่องราวการก่อตั้งจนถึงธีมแคมเปญ"
      },
      includes: ["Brand Narrative", "Creative Brief", "Campaign Concept", "Messaging Architecture"]
    },
    {
      title: "Produce",
      desc: { en: "Cinematic production from concept to final cut.", th: "งานภาพยนตร์ตั้งแต่คอนเซ็ปต์จนถึงตัดต่อเสร็จ" },
      details: {
        en: "Full-service film production with the storytelling depth of an agency. We handle scripts, direction, cinematography, and post-production for campaign films, brand documentaries, and commercial content.",
        th: "งานผลิตภาพยนตร์ครบวงจรด้วยความลึกของการเล่าเรื่องระดับ agency เราดูแลบท กำกับ ถ่ายภาพ และ post-production"
      },
      includes: ["Script Development", "Direction & DOP", "Post-production", "Color Grading & Sound"]
    },
    {
      title: "Develop",
      desc: { en: "Full brand development from zero — identity, narrative, and IP.", th: "การพัฒนาแบรนด์เต็มรูปแบบตั้งแต่ศูนย์ — identity, narrative และ IP" },
      details: {
        en: "End-to-end brand creation — from naming and identity to product concept and launch strategy. We design brands that are built to last and scale.",
        th: "การสร้างแบรนด์ครบวงจร — ตั้งแต่ naming และ identity ไปจนถึง product concept และ launch strategy"
      },
      includes: ["Brand Identity", "Naming & Positioning", "Product Concept", "Launch Strategy"]
    },
  ];

  const featuredWork = [
    { title: "Northwind Electric", category: "Campaign Film", image: workNorthwind },
    { title: "Atlas Property Group", category: "Brand Documentary", image: workAtlas },
    { title: "Koha Culture Studio", category: "Brand Story Video", image: workKoha },
    { title: "Sera Hospitality", category: "Content System", image: workSera },
  ];

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>ØRIONS — Creative Agency for Brands That Need Stronger Stories | Bangkok</title>
        <meta name="description" content="ORIONS is a creative agency helping brands connect their ideas into meaningful stories, campaigns, and films." />
        <link rel="canonical" href="https://orions.agency/" />
      </Helmet>
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />

      <Marquee items={["Content", "Think", "Produce", "Develop", "Story", "Film", "Strategy"]} />

      {/* What We Do */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> What We Do
            </p>
            <h2 className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
              STORIES, CAMPAIGNS,<br />AND <span className="text-accent-gradient">FILMS.</span>
            </h2>
            <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-md mb-20">
              {t(
                "We help brands think clearly, tell better stories, and produce work that people actually remember.",
                "เราช่วยแบรนด์คิดอย่างชัดเจน เล่าเรื่องได้ดีขึ้น และผลิตงานที่คนจดจำได้จริง"
              )}
            </p>
          </AnimatedSection>

          <div className="space-y-0">
            {services.map((s, i) => {
              const isExpanded = expandedService === i;
              return (
                <AnimatedSection key={s.title} delay={i * 0.08}>
                  <div
                    className="group border-t border-border cursor-pointer hover:border-accent-warm/30 transition-colors duration-500"
                    onClick={() => setExpandedService(isExpanded ? null : i)}
                  >
                    <div className="flex items-center justify-between py-8 md:py-10">
                      <div className="flex items-baseline gap-6 md:gap-10">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="font-display text-[clamp(32px,4vw,56px)] tracking-[0.03em] text-foreground group-hover:text-accent-warm transition-colors duration-500">{s.title}</h3>
                      </div>
                      <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground text-2xl font-light"
                      >
                        +
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 md:pb-14 pl-[calc(11px+1.5rem)] md:pl-[calc(11px+2.5rem)]">
                            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mb-8">
                              {s.details[lang]}
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {s.includes.map((item) => (
                                <span
                                  key={item}
                                  className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/60 border border-border/60 px-3 py-1.5 hover:text-foreground/80 hover:border-accent-warm/30 transition-all duration-300"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
            <div className="border-t border-border" />
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-20">
              <Link to="/services" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                All Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={["Think", "Develop", "Produce", "Launch", "Scale"]} speed="slow" />

      {/* Selected Work */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">◎</span> Selected Work
            </p>
            <h2 className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
              WORK THAT <span className="text-accent-gradient">SPEAKS.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.06}>
                <Link to="/work" className="group block relative">
                  <div className="overflow-hidden mb-5 relative">
                    <img src={w.image} alt={w.title} className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                    <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-1.5">{w.category}</span>
                  <h3 className="font-body text-[16px] text-foreground/80 group-hover:text-accent-warm transition-colors duration-300">{w.title}</h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-20">
              <Link to="/work" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                All Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why ORIONS */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">△</span> Why ORIONS
              </p>
              <h2 className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10">
                NOT JUST<br /><span className="text-accent-gradient">PRODUCTION.</span>
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-muted-foreground mb-8 max-w-lg">
                {t(
                  "We're a creative agency that helps brands think, shape stories, and execute them with cinematic quality.",
                  "เราคือ creative agency ที่ช่วยแบรนด์คิด หล่อหลอมเรื่องราว และผลิตออกมาด้วยคุณภาพระดับภาพยนตร์"
                )}
              </p>
              <p className="font-mono text-[13px] leading-[1.7] text-accent-warm/60 italic border-l-2 border-accent-warm/30 pl-6">
                "Every dot has meaning. We just know how to connect them."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={["Story", "Strategy", "Campaign", "Film", "Meaning"]} />

      {/* Final CTA */}
      <section className="py-40 md:py-56 px-6 md:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(64px,10vw,180px)] leading-[0.88] tracking-[0.01em] text-foreground mb-12">
              START A<br /><span className="text-accent-gradient">PROJECT.</span>
            </h2>
            <div className="flex gap-10 justify-center items-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="group font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
              </button>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                Contact <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
};

export default Index;
