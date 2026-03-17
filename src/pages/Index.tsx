import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import OrionConstellation from "@/components/OrionConstellation";
import StarField from "@/components/StarField";
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
    { title: "Northwind Electric", category: { en: "Campaign Film", th: "Campaign Film" }, image: workNorthwind },
    { title: "Atlas Property Group", category: { en: "Brand Documentary", th: "Brand Documentary" }, image: workAtlas },
    { title: "Koha Culture Studio", category: { en: "Brand Story Video", th: "Brand Story Video" }, image: workKoha },
    { title: "Sera Hospitality", category: { en: "Content System", th: "Content System" }, image: workSera },
  ];

  const industries = [
    { en: "Hospitality", th: "การโรงแรม" },
    { en: "Lifestyle", th: "ไลฟ์สไตล์" },
    { en: "Beauty", th: "ความงาม" },
    { en: "Real Estate", th: "อสังหาริมทรัพย์" },
    { en: "Startups", th: "สตาร์ทอัพ" },
    { en: "Automotive", th: "ยานยนต์" },
  ];

  const processSteps = [
    { num: "01", title: "Discover" },
    { num: "02", title: "Define" },
    { num: "03", title: "Create" },
    { num: "04", title: "Produce" },
    { num: "05", title: "Launch" },
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
        <meta name="description" content="ORIONS is a creative agency helping brands connect their ideas into meaningful stories, campaigns, and films. Every dot has meaning — we just know how to connect them." />
        <link rel="canonical" href="https://orions.agency/" />
      </Helmet>
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />

      {/* What We Do */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
              {t("What We Do", "สิ่งที่เราทำ")}
            </p>
            <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.88] tracking-[0.02em] text-foreground mb-6 max-w-3xl">
              {t(<>Stories, campaigns,<br />and <span className="text-accent-gradient">films.</span></>, <>เรื่องราว, แคมเปญ<br />และ<span className="text-accent-gradient">ภาพยนตร์</span></>)}
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-lg mb-20">
              {t(
                "We help brands think clearly, tell better stories, and produce work that people actually remember.",
                "เราช่วยแบรนด์คิดอย่างชัดเจน เล่าเรื่องได้ดีขึ้น และผลิตงานที่คนจดจำได้จริง"
              )}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-gradient block mb-4">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[32px] tracking-[0.04em] text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-[13px] leading-[1.75] text-muted-foreground">{s.desc[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-16">
              <Link to="/services" className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground border-b border-foreground/15 pb-1 hover:text-foreground hover:border-foreground/40 transition-all duration-500">
                {t("View All Services →", "ดู Services ทั้งหมด →")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
              {t("Selected Work", "ผลงานคัดสรร")}
            </p>
            <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.88] tracking-[0.02em] text-foreground mb-16">
              {t(<>Work that <span className="text-accent-gradient">speaks.</span></>, <>ผลงานที่<span className="text-accent-gradient">สื่อสาร</span></>)}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredWork.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.08}>
                <Link to="/work" className="group block overflow-hidden">
                  <div className="overflow-hidden mb-4">
                    <img src={w.image} alt={w.title} className="w-full aspect-[16/9] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700" loading="lazy" />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground/60 block mb-1">{w.category[lang]}</span>
                  <h3 className="font-body text-[15px] text-foreground group-hover:text-accent-gradient transition-colors duration-500">{w.title}</h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-16">
              <Link to="/work" className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground border-b border-foreground/15 pb-1 hover:text-foreground hover:border-foreground/40 transition-all duration-500">
                {t("View All Work →", "ดูผลงานทั้งหมด →")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why ORIONS */}
      <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider relative overflow-hidden">
        <StarField count={20} />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
                  {t("Why ORIONS", "ทำไม ORIONS")}
                </p>
                <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8">
                  {t(<>Not just<br /><span className="text-accent-gradient">production.</span></>, <>ไม่ใช่แค่<br /><span className="text-accent-gradient">โปรดักชั่น</span></>)}
                </h2>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6 max-w-md">
                  {t(
                    "We're a creative agency that helps brands think, shape stories, and execute them with cinematic quality.",
                    "เราคือ creative agency ที่ช่วยแบรนด์คิด หล่อหลอมเรื่องราว และผลิตออกมาด้วยคุณภาพระดับภาพยนตร์"
                  )}
                </p>
                <p className="font-body text-[14px] leading-[1.8] text-foreground/60 italic">
                  {t(
                    '"Every dot has meaning. We just know how to connect them."',
                    '"ทุกจุดมีความหมาย เราแค่รู้วิธีเชื่อมต่อมัน"'
                  )}
                </p>
              </div>
              <div className="flex items-center justify-center opacity-60">
                <OrionConstellation size="lg" opacity={0.2} animate={true} showStars={true} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
              {t("Industries", "อุตสาหกรรม")}
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10">
              {industries.map((ind, i) => (
                <span key={ind.en} className="font-display text-[clamp(28px,3.5vw,48px)] tracking-[0.04em] text-foreground/25 hover:text-foreground transition-colors duration-500 cursor-default">
                  {ind[lang]}
                </span>
              ))}
            </div>
            <Link to="/industries" className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground border-b border-foreground/15 pb-1 hover:text-foreground hover:border-foreground/40 transition-all duration-500">
              {t("View All Industries →", "ดูอุตสาหกรรมทั้งหมด →")}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
              {t("Process", "กระบวนการ")}
            </p>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-10">
              {processSteps.map((step, i) => (
                <div key={step.num} className="flex items-baseline gap-2">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-accent-gradient">{step.num}</span>
                  <span className="font-display text-[clamp(28px,3.5vw,48px)] tracking-[0.04em] text-foreground">{step.title}</span>
                  {i < processSteps.length - 1 && <span className="font-body text-foreground/15 ml-4">—</span>}
                </div>
              ))}
            </div>
            <Link to="/process" className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground border-b border-foreground/15 pb-1 hover:text-foreground hover:border-foreground/40 transition-all duration-500">
              {t("Learn More →", "เรียนรู้เพิ่มเติม →")}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Studio */}
      <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
              {t("Studio", "สตูดิโอ")}
            </p>
            <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.88] tracking-[0.02em] text-foreground mb-16">
              {t(<>Original <span className="text-accent-gradient">content.</span></>, <><span className="text-accent-gradient">ผลงาน</span>ต้นฉบับ</>)}
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {studioProjects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <Link to="/studio" className="flex items-baseline justify-between py-6 border-b border-divider group">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50">{p.type}</span>
                    <span className="font-display text-[clamp(24px,3vw,40px)] tracking-[0.04em] text-foreground group-hover:text-accent-gradient transition-colors duration-500">{p.title}</span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/30 group-hover:text-muted-foreground transition-colors duration-500">→</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 md:py-56 px-6 md:px-12 text-center border-t border-divider relative overflow-hidden">
        <StarField count={15} />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(64px,10vw,160px)] leading-[0.85] tracking-[0.02em] text-foreground mb-10">
              {t(<>Start a<br /><span className="text-accent-gradient">project.</span></>, <>เริ่ม<br /><span className="text-accent-gradient">โปรเจกต์</span></>)}
            </h2>
            <div className="flex gap-6 justify-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-foreground text-background font-mono text-[10px] tracking-[0.16em] uppercase px-8 py-3.5 hover:opacity-85 transition-opacity"
              >
                {t("Start a Project", "เริ่ม Project")}
              </button>
              <Link
                to="/contact"
                className="text-muted-foreground font-mono text-[10px] tracking-[0.16em] uppercase py-3.5 px-1 border-b border-foreground/20 hover:text-foreground hover:border-foreground/50 transition-all duration-500"
              >
                {t("Contact Us", "ติดต่อเรา")}
              </Link>
            </div>
            <a href="mailto:hello@orions.agency" className="inline-block mt-10 font-mono text-[11px] tracking-[0.1em] text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-500">
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
