import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import HorizontalScroll from "@/components/HorizontalScroll";
import { useLanguage } from "@/contexts/LanguageContext";

import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workSera from "@/assets/work-sera.jpg";

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="overflow-hidden relative">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={`w-full object-cover scale-[1.15] ${className ?? ""}`}
        loading="lazy"
      />
    </div>
  );
};

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const { t, lang } = useLanguage();

  const services = [
    {
      title: "Content Systems",
      desc: { en: "Ongoing content for brands that need consistency and quality.", th: "Content ต่อเนื่องสำหรับแบรนด์ที่ต้องการความสม่ำเสมอและคุณภาพ" },
      details: {
        en: "We build and manage your brand's content engine — from social posts and short-form videos to full content calendars and production systems.",
        th: "เราสร้างและบริหาร content engine ของแบรนด์คุณ — ตั้งแต่ social posts, วิดีโอสั้น ไปจนถึง content calendar และระบบการผลิต"
      },
      includes: ["Content Strategy", "Social Content", "Short-form Video", "Content Shooting"]
    },
    {
      title: "Creative & Campaign",
      desc: { en: "Ideas and campaigns that define how brands are seen.", th: "ไอเดียและแคมเปญที่กำหนดว่าแบรนด์ถูกมองอย่างไร" },
      details: {
        en: "Strategic thinking and creative direction for brands that need clarity before content. We define who you are, what you stand for, and how you should communicate.",
        th: "การคิดเชิงกลยุทธ์และ creative direction สำหรับแบรนด์ที่ต้องการความชัดเจนก่อน content"
      },
      includes: ["Campaign Concept", "Brand Storytelling", "Creative Direction", "Communication Strategy"]
    },
    {
      title: "Film & Production",
      desc: { en: "High-quality films and visual storytelling.", th: "ภาพยนตร์คุณภาพสูงและการเล่าเรื่องด้วยภาพ" },
      details: {
        en: "Cinematic production from script to screen. We produce campaign films, brand videos, documentaries, and commercial content with the quality of a production house and the clarity of an agency.",
        th: "งานผลิตระดับภาพยนตร์ตั้งแต่บทจนถึงหน้าจอ เราผลิต campaign film, brand video, documentary และ commercial content"
      },
      includes: ["Campaign Film", "Brand Video", "Documentary", "Commercial Video"]
    },
    {
      title: "Brand Development",
      desc: { en: "Building new ideas, products, and brand directions.", th: "สร้างไอเดียใหม่ ผลิตภัณฑ์ และทิศทางแบรนด์" },
      details: {
        en: "Full brand development from zero — identity, narrative, product concept, and intellectual property creation for founders and companies exploring new opportunities.",
        th: "การพัฒนาแบรนด์เต็มรูปแบบตั้งแต่ศูนย์ — identity, narrative, product concept และการสร้าง IP"
      },
      includes: ["New Brand Concepts", "Product Ideas", "Sub-brand Development", "Creative Project Direction"]
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

      <Marquee items={["Content Systems", "Creative & Campaign", "Film & Production", "Brand Development", "Story", "Strategy"]} />

      {/* What We Do */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> What We Do
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
            STORIES, CAMPAIGNS, AND FILMS.
          </TextReveal>
          <AnimatedSection delay={0.2}>
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
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-blue">{String(i + 1).padStart(2, "0")}</span>
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
                                  className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/60 border border-border/60 px-3 py-1.5 hover:text-foreground/80 hover:border-accent-blue/40 transition-all duration-300"
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
              <Link to="/services" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-blue hover:text-accent-blue transition-all duration-300">
                All Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={["Content Systems", "Creative & Campaign", "Film & Production", "Brand Development"]} speed="slow" />

      {/* Selected Work — Horizontal Scroll */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">◎</span> Selected Work
            </p>
          </AnimatedSection>
          <TextReveal className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
            WORK THAT SPEAKS.
          </TextReveal>

          <HorizontalScroll>
            {featuredWork.map((w) => (
              <Link key={w.title} to="/work" className="group block relative flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw]">
                <div className="overflow-hidden mb-5 relative">
                  <ParallaxImage
                    src={w.image}
                    alt={w.title}
                    className="aspect-[16/10] grayscale group-hover:grayscale-0 group-hover:scale-[1.18] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-1.5">{w.category}</span>
                <h3 className="font-body text-[16px] text-foreground/80 group-hover:text-accent-warm transition-colors duration-300">{w.title}</h3>
              </Link>
            ))}
          </HorizontalScroll>

          <AnimatedSection delay={0.2}>
            <div className="mt-20">
              <Link to="/work" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                All Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-40 md:py-56 px-6 md:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <TextReveal className="font-display text-[clamp(64px,10vw,180px)] leading-[0.88] tracking-[0.01em] text-foreground mb-12">
            START A PROJECT.
          </TextReveal>
          <AnimatedSection delay={0.3}>
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
