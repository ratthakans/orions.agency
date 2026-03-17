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

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>ØRIONS — Creative Agency for Brands That Need Stronger Stories | Bangkok</title>
        <meta name="description" content="ORIONS is a creative agency helping brands connect their ideas into meaningful stories, campaigns, and films." />
        <link rel="canonical" href="https://orions.agency/" />
      </Helmet>
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />

      <Marquee items={["Narrative", "Campaign", "Film", "Content", "Strategy", "Brand", "Story"]} />

      {/* What We Do */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              What We Do
            </p>
            <h2 className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
              STORIES, CAMPAIGNS,<br />AND <span className="text-accent-gradient">FILMS.</span>
            </h2>
            <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-md mb-24">
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
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 block mb-5">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[32px] tracking-[0.03em] text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{s.desc[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-20">
              <Link to="/services" className="font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
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
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Selected Work
            </p>
            <h2 className="font-display text-[clamp(48px,6vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
              WORK THAT <span className="text-accent-gradient">SPEAKS.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.06}>
                <Link to="/work" className="group block">
                  <div className="overflow-hidden mb-5">
                    <img src={w.image} alt={w.title} className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700" loading="lazy" />
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground block mb-1.5">{w.category}</span>
                  <h3 className="font-body text-[16px] text-foreground/80 group-hover:text-foreground transition-colors duration-300">{w.title}</h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-20">
              <Link to="/work" className="font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                All Work →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={["Think", "Develop", "Produce", "Launch", "Scale"]} speed="slow" />

      {/* Why ORIONS */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                Why ORIONS
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
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground/50 italic">
                "Every dot has meaning. We just know how to connect them."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 md:py-64 px-6 md:px-12 text-center">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(64px,10vw,180px)] leading-[0.88] tracking-[0.01em] text-foreground mb-12">
              START A<br /><span className="text-accent-gradient">PROJECT.</span>
            </h2>
            <div className="flex gap-10 justify-center items-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Start a Project
              </button>
              <Link
                to="/contact"
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Contact
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
