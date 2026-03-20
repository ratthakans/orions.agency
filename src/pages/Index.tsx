import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import TextReveal from "@/components/TextReveal";
import HorizontalScroll from "@/components/HorizontalScroll";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workSera from "@/assets/work-sera.jpg";

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <div className="overflow-hidden relative">
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover ${className ?? ""}`}
        loading="lazy"
      />
    </div>
  );
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" }],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does ØRIONS do in Bangkok?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ØRIONS is a Bangkok creative agency that helps brands with strategy, campaigns, film production, content systems, and creative transformation.",
        },
      },
      {
        "@type": "Question",
        name: "Does ØRIONS work with brands outside Thailand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ØRIONS works with brands in Bangkok, across Thailand, and throughout Southeast Asia.",
        },
      },
      {
        "@type": "Question",
        name: "How do I start a project with ØRIONS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start by visiting the contact page, sharing your brief, timeline, and budget, and the team will reply within 24 hours.",
        },
      },
    ],
  },
];

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
      title: "Creative Transformation",
      desc: { en: "Building new ideas, products, and brand directions.", th: "สร้างไอเดียใหม่ ผลิตภัณฑ์ และทิศทางแบรนด์" },
      details: {
        en: "Full creative transformation from zero — identity, narrative, product concept, and intellectual property creation for founders and companies exploring new opportunities.",
        th: "การ transform แบรนด์เต็มรูปแบบตั้งแต่ศูนย์ — identity, narrative, product concept และการสร้าง IP"
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
      <SEO
        title="Creative Agency Bangkok for Brand, Campaign & Film | ØRIONS"
        description="ØRIONS is a creative agency in Bangkok helping brands across Thailand and Southeast Asia with storytelling, campaigns, content systems, brand development, and film production."
        path="/"
        keywords="creative agency Bangkok, branding agency Thailand, production house Bangkok, campaign agency Bangkok, film production Thailand"
        schema={homeSchema}
      />
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />

      <Marquee items={["Content Systems", "Creative & Campaign", "Film & Production", "Creative Transformation", "Story", "Strategy"]} />

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
            <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-2xl mb-20">
              {t(
                "We are a Bangkok creative agency helping brands think clearly, tell better stories, and produce work people remember across Thailand and Southeast Asia.",
                "เราเป็น creative agency จากกรุงเทพฯ ที่ช่วยแบรนด์คิดอย่างชัดเจน เล่าเรื่องได้ดีขึ้น และผลิตงานที่คนจดจำได้จริงในไทยและเอเชียตะวันออกเฉียงใต้"
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
            <div className="mt-20 flex flex-wrap items-center gap-8">
              <Link to="/services" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                All Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link to="/industries" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-border pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                Industries We Serve <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={["Content Systems", "Creative & Campaign", "Film & Production", "Creative Transformation"]} speed="slow" />

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
            <div className="mt-20 flex flex-wrap items-center gap-8">
              <Link to="/work" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                All Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link to="/contact" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-border pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                Start Your Project Brief <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="border-t border-border pt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  <span className="text-accent-warm mr-2">△</span> FAQs
                </p>
                <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                  WHAT BRANDS
                  <br />ASK FIRST.
                </h2>
                <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl">
                  {t(
                    "These are the questions we hear most from brands looking for a creative agency, production house, or campaign partner in Bangkok.",
                    "นี่คือคำถามที่เราได้ยินบ่อยที่สุดจากแบรนด์ที่มองหา creative agency, production house หรือพาร์ตเนอร์ด้านแคมเปญในกรุงเทพฯ"
                  )}
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    q: "What services does ØRIONS provide?",
                    a: "We provide content systems, creative campaigns, film production, and brand development for brands in Bangkok, Thailand, and Southeast Asia.",
                  },
                  {
                    q: "Who is ØRIONS best for?",
                    a: "We work best with brands that need strategic clarity, premium production quality, and a long-term storytelling system rather than one-off execution.",
                  },
                  {
                    q: "How quickly can we start?",
                    a: "Most projects can kick off within one to two weeks after briefing, depending on scope, production needs, and approval timelines.",
                  },
                ].map((item) => (
                  <div key={item.q} className="border-t border-border pt-5">
                    <h3 className="font-body text-[16px] text-foreground mb-2">{item.q}</h3>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
