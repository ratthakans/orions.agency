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

const ParallaxImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className="overflow-hidden relative">
    <img src={src} alt={alt} className={`w-full object-cover ${className ?? ""}`} loading="lazy" />
  </div>
);

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
        name: "What does ØRIONS do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ØRIONS is an idea-driven creative agency that creates ideas, stories, and campaigns that drive real impact for brands.",
        },
      },
      {
        "@type": "Question",
        name: "What makes ØRIONS different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on ideas first. We are not a production house or a social media agency — we create the ideas that make everything else work.",
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
      title: "Creative Transformation",
      desc: { en: "Redefine how your brand communicates and grows.", th: "ปรับเปลี่ยนวิธีที่แบรนด์สื่อสารและเติบโต" },
      details: {
        en: "A complete creative overhaul — from positioning to campaign. We redefine how your brand communicates, competes, and grows.",
        th: "ปรับเปลี่ยนครีเอทีฟทั้งระบบ — จาก positioning สู่ campaign เราปรับวิธีที่แบรนด์สื่อสาร แข่งขัน และเติบโต"
      },
      includes: ["Positioning", "Narrative", "Campaign", "Creative Direction"],
    },
    {
      title: "Creative Communication",
      desc: { en: "Design ideas and campaigns people remember.", th: "ออกแบบไอเดียและแคมเปญที่คนจดจำ" },
      details: {
        en: "Ideas that become campaigns people remember. We design concepts, communication structures, and creative systems that drive real results.",
        th: "ไอเดียที่กลายเป็นแคมเปญที่คนจดจำ เราออกแบบ concept, โครงสร้างการสื่อสาร และ creative system ที่สร้างผลลัพธ์จริง"
      },
      includes: ["Campaign Concept", "Key Message", "Communication Design", "Launch Plan"],
    },
    {
      title: "Film & Production",
      desc: { en: "Cinematic execution — script to screen.", th: "งานผลิตระดับภาพยนตร์ — จากบทสู่หน้าจอ" },
      details: {
        en: "Cinematic production from script to screen. Campaign films, brand videos, and visual content with the quality of craft and the clarity of strategy.",
        th: "งานผลิตระดับภาพยนตร์ตั้งแต่บทจนถึงหน้าจอ Campaign film, brand video และ visual content ด้วยคุณภาพงานฝีมือ"
      },
      includes: ["Campaign Film", "Brand Video", "Visual Content", "Social Cutdowns"],
    },
    {
      title: "Creative Partner",
      desc: { en: "Your long-term creative think tank.", th: "Think tank ครีเอทีฟระยะยาวของคุณ" },
      details: {
        en: "More than a retainer — a dedicated creative partnership. We become an extension of your team, providing ongoing strategic thinking, creative direction, and campaign evolution.",
        th: "มากกว่า retainer — เป็นพันธมิตรครีเอทีฟ เราเป็นส่วนขยายของทีมคุณ ให้ strategic thinking, creative direction และพัฒนาแคมเปญอย่างต่อเนื่อง"
      },
      includes: ["Strategic Thinking", "Creative Direction", "Campaign Evolution", "Brand Guardianship"],
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
        title="Idea-Driven Creative Agency | ØRIONS"
        description="ØRIONS is an idea-driven creative agency. We create ideas, stories, and campaigns that make people care, remember, and act."
        path="/"
        keywords="creative agency, idea-driven agency, branding agency, campaign agency, creative direction, content production"
        schema={homeSchema}
      />
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />

      <Marquee items={["Creative Transformation", "Creative Communication", "Film & Production", "Creative Partner", "Ideas", "Impact"]} />

      {/* ─── POSITIONING ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> What We Are
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-7">
              <TextReveal className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground">
                WE ARE NOT YOUR TYPICAL AGENCY.
              </TextReveal>
              <AnimatedSection delay={0.2}>
                <p className="font-body text-[16px] leading-[1.8] text-muted-foreground mt-8 max-w-lg">
                  {t(
                    "We create ideas first, then turn them into campaigns that work. Everything starts with a strong idea — because without it, execution doesn't matter.",
                    "เราสร้างไอเดียก่อน แล้วเปลี่ยนมันเป็นแคมเปญที่ได้ผล ทุกอย่างเริ่มจากไอเดียที่แข็งแกร่ง — เพราะถ้าไม่มี การลงมือทำก็ไม่มีความหมาย"
                  )}
                </p>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <AnimatedSection delay={0.3}>
                <div className="space-y-0">
                  {[
                    { label: { en: "Not a production house", th: "ไม่ใช่ production house" }, neg: true },
                    { label: { en: "Not a social media agency", th: "ไม่ใช่ social media agency" }, neg: true },
                    { label: { en: "Not a content factory", th: "ไม่ใช่โรงงาน content" }, neg: true },
                  ].map((item) => (
                    <div key={item.label.en} className="flex items-center gap-4 py-3 border-b border-border">
                      <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/40">✕</span>
                      <span className="font-body text-[14px] text-muted-foreground/60 line-through decoration-muted-foreground/20">{t(item.label.en, item.label.th)}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 py-4 mt-2">
                    <span className="w-2 h-2 bg-accent-warm shrink-0" />
                    <span className="font-body text-[15px] text-foreground">
                      {t("An idea-driven creative agency.", "Idea-driven creative agency.")}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* What we help brands do */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border">
              {[
                { icon: "01", en: "Clarify their story", th: "ทำให้เรื่องราวชัดเจน" },
                { icon: "02", en: "Build strong campaigns", th: "สร้างแคมเปญที่แข็งแกร่ง" },
                { icon: "03", en: "Create content that matters", th: "สร้าง content ที่มีความหมาย" },
                { icon: "04", en: "Drive real impact", th: "สร้าง impact ที่จับต้องได้" },
              ].map((item) => (
                <div key={item.en} className="group relative bg-background hover:bg-muted/30 transition-all duration-500 p-6 md:p-8 border-r border-b border-border last:border-r-0">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40 block mb-4">{item.icon}</span>
                  <span className="font-body text-[14px] md:text-[15px] leading-[1.6] text-foreground/80 group-hover:text-accent-warm transition-colors duration-300">
                    {t(item.en, item.th)}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-32 md:py-48 px-6 md:px-12 text-center border-t border-border">
        <div className="max-w-4xl mx-auto">
          <TextReveal className="font-display text-[clamp(40px,7vw,100px)] leading-[0.88] tracking-[0.01em] text-foreground mb-6">
            PEOPLE DON'T REMEMBER CONTENT.
          </TextReveal>
          <TextReveal className="font-display text-[clamp(40px,7vw,100px)] leading-[0.88] tracking-[0.01em] text-accent-warm mb-12">
            THEY REMEMBER IDEAS.
          </TextReveal>
          <AnimatedSection delay={0.3}>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground max-w-xl mx-auto">
              {t(
                "Great brands don't just create more content. They create better ideas. At ØRIONS, everything starts with the idea.",
                "แบรนด์ที่ยิ่งใหญ่ไม่ได้แค่สร้าง content มากขึ้น แต่สร้างไอเดียที่ดีขึ้น ที่ ØRIONS ทุกอย่างเริ่มต้นจากไอเดีย"
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      

      {/* ─── SERVICES ─── */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> {t("What We Do", "สิ่งที่เราทำ")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-4xl mb-4">
              IDEAS FIRST.
            </h2>
            <h2 className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-4xl mb-8">
              THEN <span className="text-accent-gradient">EVERYTHING ELSE.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-2xl mb-20">
              {t(
                "We are an idea-driven creative agency. We create ideas, stories, and campaigns that make people care, remember, and act.",
                "เราคือ idea-driven creative agency เราสร้างไอเดีย เรื่องราว และแคมเปญที่ทำให้คนสนใจ จดจำ และลงมือทำ"
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
              <Link to="/package" className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-border pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                Industries We Serve <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
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

      {/* ─── FAQs ─── */}
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
                    "Common questions from brands looking for an idea-driven creative agency that delivers real impact.",
                    "คำถามที่พบบ่อยจากแบรนด์ที่มองหา creative agency ที่ขับเคลื่อนด้วยไอเดียและสร้าง impact จริง"
                  )}
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    q: "What makes ØRIONS different?",
                    a: "We focus on ideas first. We are not a production house or a social media agency — we create the ideas that make everything else work.",
                  },
                  {
                    q: "Who is ØRIONS best for?",
                    a: "Brands that need more than content — they need clarity, strong campaigns, and creative direction that drives real impact.",
                  },
                  {
                    q: "How quickly can we start?",
                    a: "Most projects can kick off within one to two weeks after briefing, depending on scope and production needs.",
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

      {/* ─── CLOSING CTA ─── */}
      <section className="py-40 md:py-56 px-6 md:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <TextReveal className="font-display text-[clamp(48px,8vw,140px)] leading-[0.88] tracking-[0.01em] text-foreground mb-4">
            WITHOUT THE RIGHT IDEA,
          </TextReveal>
          <TextReveal className="font-display text-[clamp(48px,8vw,140px)] leading-[0.88] tracking-[0.01em] text-accent-warm mb-12">
            NOTHING ELSE MATTERS.
          </TextReveal>
          <AnimatedSection delay={0.3}>
            <p className="font-body text-[18px] text-muted-foreground mb-12">
              {t("We start with the idea. Then we make it impossible to ignore.", "เราเริ่มจากไอเดีย แล้วทำให้มันเป็นสิ่งที่ไม่มีใครมองข้ามได้")}
            </p>
            <div className="flex gap-10 justify-center items-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="group font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Work With Us</span>
              </button>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                Start a Project <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
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
