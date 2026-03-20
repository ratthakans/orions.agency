import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const industries = [
  {
    slug: "hospitality",
    num: "01",
    label: "Hotels & Resorts",
    title: "Hospitality",
    outcome: { en: "Transform how guests discover and choose your property", th: "เปลี่ยนวิธีที่แขกค้นพบและเลือกที่พักของคุณ" },
    tags: ["Narrative", "Campaign", "Hero Film", "Content System"],
  },
  {
    slug: "golf",
    num: "02",
    label: "Golf Clubs",
    title: "Golf",
    outcome: { en: "Attract the next generation of golfers through culture and lifestyle", th: "ดึงดูดนักกอล์ฟรุ่นใหม่ผ่านวัฒนธรรมและไลฟ์สไตล์" },
    tags: ["Positioning", "Demand Strategy", "Hero Film", "Content"],
  },
  {
    slug: "concert",
    num: "03",
    label: "Concerts & Live Events",
    title: "Concert",
    outcome: { en: "Turn events into cultural moments people can't miss", th: "เปลี่ยนอีเวนต์ให้เป็นช่วงเวลาทางวัฒนธรรมที่พลาดไม่ได้" },
    tags: ["Narrative", "FOMO Campaign", "Hype System", "Content"],
  },
  {
    slug: "tech",
    num: "04",
    label: "Tech Companies",
    title: "Tech",
    outcome: { en: "Clarify your product story and drive real adoption", th: "ทำให้เรื่องราวผลิตภัณฑ์ชัดเจนและเพิ่มการใช้งานจริง" },
    tags: ["Clarity", "Narrative", "Adoption Campaign", "Content"],
  },
];

const PackageListPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Creative Transformation by Industry | ØRIONS"
        description="One creative system — applied to your industry. We transform how brands communicate, compete, and grow."
        path="/package"
      />
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">⬡</span> Creative Transformation
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
                ONE SYSTEM.
                <br />YOUR <span className="text-accent-gradient">INDUSTRY.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t(
                  "Creative Transformation is our core service — a complete creative system that includes strategy, narrative, campaign, and production. We apply the same methodology to every industry, tailored to your specific challenges.",
                  "Creative Transformation คือบริการหลักของเรา — ระบบครีเอทีฟครบวงจรที่รวม strategy, narrative, campaign และ production เราใช้วิธีการเดียวกันกับทุกอุตสาหกรรม ปรับให้เหมาะกับความท้าทายเฉพาะของคุณ"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">✦</span> {t("The System", "ระบบ")}
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border">
              {[
                { num: "01", en: "Insight & Audit", th: "วิเคราะห์และตรวจสอบ", desc: { en: "Understand the real problem", th: "เข้าใจปัญหาที่แท้จริง" } },
                { num: "02", en: "Narrative Design", th: "ออกแบบ Narrative", desc: { en: "Define what you mean", th: "กำหนดสิ่งที่คุณสื่อ" } },
                { num: "03", en: "Campaign & Film", th: "แคมเปญและฟิล์ม", desc: { en: "Create the moment", th: "สร้างช่วงเวลาสำคัญ" } },
                { num: "04", en: "Content System", th: "ระบบ Content", desc: { en: "Keep it working", th: "ทำให้มันทำงานต่อเนื่อง" } },
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.06}>
                  <div className="bg-background hover:bg-muted/30 transition-all duration-500 p-6 md:p-8 border-r border-b border-border">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-accent-warm/40 block mb-4">{step.num}</span>
                    <span className="font-body text-[14px] md:text-[15px] leading-[1.4] text-foreground block mb-2">
                      {t(step.en, step.th)}
                    </span>
                    <span className="font-body text-[12px] text-muted-foreground/60">
                      {t(step.desc.en, step.desc.th)}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">◎</span> {t("Applied To", "นำไปใช้กับ")}
              </p>
            </AnimatedSection>
            <div className="space-y-6">
              {industries.map((ind, i) => (
                <AnimatedSection key={ind.slug} delay={i * 0.06}>
                  <Link
                    to={`/package/${ind.slug}`}
                    className="group relative block border border-border hover:border-accent-warm/30 transition-all duration-500"
                  >
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />

                    <div className="p-8 md:p-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{ind.num}</span>
                        <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">
                          {ind.label}
                        </span>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[0.9] tracking-[0.01em] text-foreground group-hover:text-accent-warm transition-colors duration-500 mb-3">
                            {ind.title}
                          </h2>
                          <p className="font-body text-[14px] leading-[1.7] text-foreground/70 max-w-xl mb-4">
                            {ind.outcome[lang]}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {ind.tags.map((tag) => (
                              <span key={tag} className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted-foreground/50 border border-border/50 px-2 py-1">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground group-hover:text-accent-warm transition-colors duration-300">
                            {t("Explore", "ดูรายละเอียด")}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-warm group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                NOT SURE WHERE
                <br />TO <span className="text-accent-gradient">START?</span>
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
                {t(
                  "Tell us about your brand and goals — we'll recommend the right creative transformation for your industry.",
                  "บอกเราเกี่ยวกับแบรนด์และเป้าหมายของคุณ — เราจะแนะนำ creative transformation ที่เหมาะสมสำหรับอุตสาหกรรมของคุณ"
                )}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Link to="/contact" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                  Get a Recommendation <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link to="/services" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                  View All Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default PackageListPage;
