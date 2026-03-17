import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
  const { t, lang } = useLanguage();

  const services = [
    { title: "Narrative", desc: { en: "Brand stories that define who you are and why it matters.", th: "เรื่องราวแบรนด์ที่บอกว่าคุณคือใครและทำไมถึงสำคัญ" } },
    { title: "Campaign", desc: { en: "Strategic campaigns that move people and drive results.", th: "แคมเปญเชิงกลยุทธ์ที่ขับเคลื่อนผู้คนและสร้างผลลัพธ์" } },
    { title: "Film", desc: { en: "Cinematic production from concept to final cut.", th: "งานภาพยนตร์ตั้งแต่คอนเซ็ปต์จนถึงตัดต่อเสร็จ" } },
    { title: "Content", desc: { en: "Consistent, meaningful content systems that scale.", th: "ระบบ content ที่สม่ำเสมอ มีความหมาย และขยายได้" } },
  ];

  const featuredWork = [
    { title: "Northwind Electric", category: "Campaign Film", image: workNorthwind },
    { title: "Atlas Property Group", category: "Brand Documentary", image: workAtlas },
    { title: "Koha Culture Studio", category: "Brand Story Video", image: workKoha },
    { title: "Sera Hospitality", category: "Content System", image: workSera },
  ];

  const studioProjects = [
    { title: "ORIONS Dialogue", type: "Podcast" },
    { title: "No Signal", type: "Documentary" },
    { title: "Look Your Best", type: "Beauty Show" },
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

      {/* Marquee */}
      <Marquee items={["Narrative", "Campaign", "Film", "Content", "Strategy", "Brand", "Story"]} />

      {/* What We Do */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              What We Do
            </p>
            <h2 className="font-display text-[clamp(44px,5.5vw,88px)] leading-[0.9] tracking-[0.02em] text-foreground mb-6 max-w-3xl">
              Stories, campaigns,<br />and <span className="text-accent-gradient">films.</span>
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground/50 max-w-md mb-24">
              {t(
                "We help brands think clearly, tell better stories, and produce work that people actually remember.",
                "เราช่วยแบรนด์คิดอย่างชัดเจน เล่าเรื่องได้ดีขึ้น และผลิตงานที่คนจดจำได้จริง"
              )}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/25 block mb-5">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[28px] tracking-[0.04em] text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-[14px] leading-[1.8] text-muted-foreground/45">{s.desc[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-20">
              <Link to="/services" className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/35 border-b border-foreground/10 pb-1 hover:text-foreground hover:border-foreground/30 transition-all duration-500">
                All Services →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              Selected Work
            </p>
            <h2 className="font-display text-[clamp(44px,5.5vw,88px)] leading-[0.9] tracking-[0.02em] text-foreground mb-20">
              Work that <span className="text-accent-gradient">speaks.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWork.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.06}>
                <Link to="/work" className="group block">
                  <div className="overflow-hidden mb-5">
                    <img src={w.image} alt={w.title} className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.015] transition-all duration-[900ms]" loading="lazy" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/25 block mb-1.5">{w.category}</span>
                  <h3 className="font-body text-[15px] text-foreground/70 group-hover:text-foreground transition-colors duration-500">{w.title}</h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-20">
              <Link to="/work" className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/35 border-b border-foreground/10 pb-1 hover:text-foreground hover:border-foreground/30 transition-all duration-500">
                All Work →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Marquee 2 */}
      <Marquee items={["Think", "Develop", "Produce", "Launch", "Scale"]} speed="slow" />

      {/* Why ORIONS */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
                Why ORIONS
              </p>
              <h2 className="font-display text-[clamp(44px,5.5vw,88px)] leading-[0.9] tracking-[0.02em] text-foreground mb-10">
                Not just<br /><span className="text-accent-gradient">production.</span>
              </h2>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground/50 mb-8 max-w-lg">
                {t(
                  "We're a creative agency that helps brands think, shape stories, and execute them with cinematic quality.",
                  "เราคือ creative agency ที่ช่วยแบรนด์คิด หล่อหลอมเรื่องราว และผลิตออกมาด้วยคุณภาพระดับภาพยนตร์"
                )}
              </p>
              <p className="font-body text-[14px] leading-[1.8] text-muted-foreground/25 italic">
                "Every dot has meaning. We just know how to connect them."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Studio */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-10">
              Studio
            </p>
            <h2 className="font-display text-[clamp(44px,5.5vw,88px)] leading-[0.9] tracking-[0.02em] text-foreground mb-20">
              Original <span className="text-accent-gradient">content.</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {studioProjects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <Link to="/studio" className="flex items-baseline justify-between py-7 border-b border-divider/50 group">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/20">{p.type}</span>
                    <span className="font-display text-[clamp(22px,2.5vw,36px)] tracking-[0.03em] text-foreground/70 group-hover:text-foreground transition-colors duration-500">{p.title}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground/15 group-hover:text-muted-foreground/50 transition-colors duration-500">→</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 md:py-64 px-6 md:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(56px,9vw,140px)] leading-[0.88] tracking-[0.02em] text-foreground mb-12">
              Start a<br /><span className="text-accent-gradient">project.</span>
            </h2>
            <div className="flex gap-10 justify-center items-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-all duration-500"
              >
                Start a Project
              </button>
              <Link
                to="/contact"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/35 hover:text-foreground transition-colors duration-500"
              >
                Contact
              </Link>
            </div>
            <a href="mailto:hello@orions.agency" className="inline-block mt-16 font-mono text-[10px] tracking-[0.1em] text-muted-foreground/20 hover:text-muted-foreground/50 transition-colors duration-500">
              hello@orions.agency
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
};

export default Index;
