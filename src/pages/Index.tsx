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
    { num: "01", title: "Discover", desc: { en: "Understand brand and problem", th: "เข้าใจแบรนด์และปัญหา" } },
    { num: "02", title: "Define", desc: { en: "Build narrative and direction", th: "สร้าง narrative และทิศทาง" } },
    { num: "03", title: "Create", desc: { en: "Develop ideas and concepts", th: "พัฒนาไอเดียและคอนเซ็ปต์" } },
    { num: "04", title: "Produce", desc: { en: "Execute content and film", th: "ผลิต content และภาพยนตร์" } },
    { num: "05", title: "Launch", desc: { en: "Deliver and scale", th: "ส่งมอบและขยายผล" } },
  ];

  const studioProjects = [
    { title: "ORIONS Dialogue", type: "Podcast", desc: { en: "Conversations with creative minds who shape culture.", th: "บทสนทนากับนักคิดสร้างสรรค์ที่หล่อหลอมวัฒนธรรม" } },
    { title: "No Signal", type: "Documentary", desc: { en: "A survival documentary exploring life off the grid.", th: "สารคดีเอาตัวรอดสำรวจชีวิตนอกสังคม" } },
    { title: "Look Your Best", type: "Beauty Show", desc: { en: "A beauty series redefining confidence and self-expression.", th: "ซีรีส์ความงามที่นิยามความมั่นใจและการแสดงออกใหม่" } },
  ];

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>ØRIONS — Creative Agency for Brands That Need Stronger Stories | Bangkok</title>
        <meta name="description" content="ORIONS is a creative agency helping brands connect their ideas into meaningful stories, campaigns, and films. Every dot has meaning — we just know how to connect them." />
        <link rel="canonical" href="https://orions.agency/" />
      </Helmet>
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />

      {/* What We Do */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                {t("What We Do", "สิ่งที่เราทำ")}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
              <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
                {t(<>Stories, campaigns,<br />and <span className="text-accent-gradient">films.</span></>, <>เรื่องราว, แคมเปญ<br />และ<span className="text-accent-gradient">ภาพยนตร์</span></>)}
              </h2>
              <p className="font-body text-[16px] leading-[1.8] text-muted-foreground mt-4">
                {t(
                  "We help brands think clearly, tell better stories, and produce work that people actually remember. Not just content — communication with meaning.",
                  "เราช่วยแบรนด์คิดอย่างชัดเจน เล่าเรื่องได้ดีขึ้น และผลิตงานที่คนจดจำได้จริง ไม่ใช่แค่ content — แต่คือการสื่อสารที่มีความหมาย"
                )}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-divider">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="p-10 md:p-9 border-r border-b border-divider last:border-r-0 relative group hover:bg-secondary transition-colors duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-gradient mb-4 block">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[28px] tracking-[0.04em] text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-[13px] leading-[1.72] text-muted-foreground">{s.desc[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/services" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-divider pb-1 hover:text-foreground hover:border-foreground/30 transition-all duration-300">
                {t("View All Services →", "ดู Services ทั้งหมด →")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <StarField count={30} />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                {t("Selected Work", "ผลงานคัดสรร")}
              </span>
            </div>
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-12">
              {t(<>Work that <span className="text-accent-gradient">speaks.</span></>, <>ผลงานที่<span className="text-accent-gradient">สื่อสาร</span></>)}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {featuredWork.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.08}>
                <Link to="/work" className="bg-background border border-divider group block overflow-hidden hover:bg-secondary transition-colors duration-300 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10" />
                  <div className="overflow-hidden">
                    <img src={w.image} alt={w.title} className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-1.5">{w.category[lang]}</span>
                    <h3 className="font-body text-[16px] font-medium text-foreground">{w.title}</h3>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/work" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-divider pb-1 hover:text-foreground hover:border-foreground/30 transition-all duration-300">
                {t("View All Work →", "ดูผลงานทั้งหมด →")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why ORIONS */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                {t("Why ORIONS", "ทำไม ORIONS")}
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-8">
                  {t(<>Not just<br /><span className="text-accent-gradient">production.</span></>, <>ไม่ใช่แค่<br /><span className="text-accent-gradient">โปรดักชั่น</span></>)}
                </h2>
                <div className="space-y-5">
                  <p className="font-body text-[16px] leading-[1.8] text-muted-foreground">
                    {t(
                      "We're not a production house. We're not a social media agency. We're a creative agency that helps brands think, shape stories, and execute them with cinematic quality.",
                      "เราไม่ใช่โปรดักชั่นเฮาส์ เราไม่ใช่ social media agency เราคือ creative agency ที่ช่วยแบรนด์คิด หล่อหลอมเรื่องราว และผลิตออกมาด้วยคุณภาพระดับภาพยนตร์"
                    )}
                  </p>
                  <p className="font-body text-[16px] leading-[1.8] text-foreground/80 italic">
                    {t(
                      '"Every dot has meaning. We just know how to connect them."',
                      '"ทุกจุดมีความหมาย เราแค่รู้วิธีเชื่อมต่อมัน"'
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <OrionConstellation size="lg" opacity={0.25} animate={true} showStars={true} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                {t("Industries", "อุตสาหกรรม")}
              </span>
            </div>
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-12">
              {t(<>Brands across <span className="text-accent-gradient">every sector.</span></>, <>แบรนด์จากทุก<span className="text-accent-gradient">อุตสาหกรรม</span></>)}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-divider border border-divider">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.en} delay={i * 0.06}>
                <div className="bg-background p-8 text-center group hover:bg-secondary transition-colors duration-300 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <span className="font-display text-[22px] tracking-[0.04em] text-foreground">{ind[lang]}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/industries" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-divider pb-1 hover:text-foreground hover:border-foreground/30 transition-all duration-300">
                {t("View All Industries →", "ดูอุตสาหกรรมทั้งหมด →")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                {t("Process", "กระบวนการ")}
              </span>
            </div>
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-12">
              {t(<>Five steps to <span className="text-accent-gradient">clarity.</span></>, <>ห้าขั้นตอนสู่<span className="text-accent-gradient">ความชัดเจน</span></>)}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-divider">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="p-8 border-r border-b border-divider last:border-r-0 relative group hover:bg-secondary transition-colors duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-gradient mb-3 block">{step.num}</span>
                  <h3 className="font-display text-[24px] tracking-[0.04em] text-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-[13px] leading-[1.72] text-muted-foreground">{step.desc[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/process" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-divider pb-1 hover:text-foreground hover:border-foreground/30 transition-all duration-300">
                {t("Learn More About Our Process →", "เรียนรู้เพิ่มเติมเกี่ยวกับกระบวนการ →")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Studio */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                {t("Studio", "สตูดิโอ")}
              </span>
            </div>
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-12">
              {t(<>Original <span className="text-accent-gradient">content.</span></>, <><span className="text-accent-gradient">ผลงาน</span>ต้นฉบับ</>)}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider">
            {studioProjects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-background p-10 group hover:bg-secondary transition-colors duration-300 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent-gradient mb-4 block">{p.type}</span>
                  <h3 className="font-display text-[28px] tracking-[0.04em] text-foreground mb-3">{p.title}</h3>
                  <p className="font-body text-[13px] leading-[1.72] text-muted-foreground">{p.desc[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/studio" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-divider pb-1 hover:text-foreground hover:border-foreground/30 transition-all duration-300">
                {t("Explore Studio →", "สำรวจสตูดิโอ →")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 px-6 md:px-12 text-center relative overflow-hidden bg-card">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <OrionConstellation size="xl" opacity={0.06} animate={false} className="scale-150" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-foreground/50 block mb-6">
              {t("Ready to start?", "พร้อมเริ่มต้น?")}
            </span>
            <h2 className="font-display text-[clamp(56px,8.5vw,130px)] leading-[0.88] tracking-[0.02em] text-foreground mb-6">
              {t(<>Start a project<br />with <span className="text-accent-gradient">ORIONS.</span></>, <>เริ่ม Project<br />กับ <span className="text-accent-gradient">ORIONS</span></>)}
            </h2>
            <p className="font-body text-base leading-[1.78] text-muted-foreground max-w-[420px] mx-auto mb-10">
              {t(
                "Tell us about your brand. We'll show you what's possible.",
                "เล่าให้เราฟังเกี่ยวกับแบรนด์ของคุณ เราจะแสดงให้เห็นว่าอะไรเป็นไปได้"
              )}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-accent-gradient text-white font-mono text-[11px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
              >
                {t("Start a Project →", "เริ่ม Project →")}
              </button>
              <Link
                to="/contact"
                className="text-muted-foreground border-b border-divider font-mono text-[11px] tracking-[0.1em] uppercase px-4 py-3.5 hover:text-foreground hover:border-muted-foreground transition-all duration-300"
              >
                {t("Contact Us", "ติดต่อเรา")}
              </Link>
            </div>
            <a href="mailto:hello@orions.agency" className="inline-block mt-7 font-mono text-[12px] tracking-[0.08em] text-muted-foreground border-b border-divider pb-0.5 hover:text-foreground transition-colors">
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
