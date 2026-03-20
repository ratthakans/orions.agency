import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const packages = [
  {
    slug: "hospitality",
    num: "01",
    label: "Hotels & Resorts",
    title: "Hospitality",
    outcome: { en: "Drive bookings through positioning & cinematic campaigns", th: "เพิ่มยอดจองด้วย positioning และแคมเปญระดับภาพยนตร์" },
    price: "From ฿60,000",
  },
  {
    slug: "golf",
    num: "02",
    label: "Golf Clubs",
    title: "Golf",
    outcome: { en: "Attract the next generation of golfers", th: "ดึงดูดนักกอล์ฟรุ่นใหม่" },
    price: "From ฿50,000",
  },
  {
    slug: "concert",
    num: "03",
    label: "Concerts & Live Events",
    title: "Concert",
    outcome: { en: "Turn events into cultural moments people can't miss", th: "เปลี่ยนอีเวนต์ให้เป็นช่วงเวลาทางวัฒนธรรมที่พลาดไม่ได้" },
    price: "From ฿60,000",
  },
  {
    slug: "tech",
    num: "04",
    label: "Tech Companies",
    title: "Tech",
    outcome: { en: "Clarify your product & drive real adoption", th: "ทำให้ผลิตภัณฑ์ชัดเจนและเพิ่มการใช้งานจริง" },
    price: "From ฿60,000",
  },
];

const PackageListPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Creative Solutions by Industry | ØRIONS"
        description="Industry-specific creative systems — from strategy to production — built to drive measurable growth."
        path="/package"
      />
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">⬡</span> Packages
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
                PICK YOUR <span className="text-accent-gradient">INDUSTRY.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t(
                  "A creative layer on your team — we don't replace anyone, we make everything better. Each package includes strategy, creative direction, and production.",
                  "ชั้นครีเอทีฟบนทีมของคุณ — เราไม่ได้มาแทนที่ใคร เราทำให้ทุกอย่างดีขึ้น แต่ละแพ็กเกจรวม strategy, creative direction และ production"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Package List */}
        <section className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto space-y-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.slug} delay={i * 0.06}>
                <Link
                  to={`/package/${pkg.slug}`}
                  className="group relative block border border-border hover:border-accent-warm/30 transition-all duration-500"
                >
                  {/* Da Vinci corners */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />

                  <div className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40">{pkg.num}</span>
                      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-accent-warm/60 border border-accent-warm/20 px-2.5 py-1">
                        {pkg.price}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">
                          {pkg.label}
                        </span>
                        <h2 className="font-display text-[clamp(36px,4.5vw,56px)] leading-[0.9] tracking-[0.01em] text-foreground group-hover:text-accent-warm transition-colors duration-500">
                          {pkg.title}
                        </h2>
                        <p className="font-body text-[14px] leading-[1.7] text-foreground/70 max-w-xl mt-3">
                          {pkg.outcome[lang]}
                        </p>
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
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                NOT SURE WHICH
                <br />PACKAGE <span className="text-accent-gradient">FITS?</span>
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
                {t(
                  "Tell us about your brand and goals — we'll recommend the right creative system for your industry.",
                  "บอกเราเกี่ยวกับแบรนด์และเป้าหมายของคุณ — เราจะแนะนำระบบครีเอทีฟที่เหมาะสมสำหรับอุตสาหกรรมของคุณ"
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
