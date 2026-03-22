import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { works, serviceFilters } from "@/data/works";

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && serviceFilters.includes(serviceParam)) {
      setActiveFilter(serviceParam);
    }
  }, [searchParams]);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "All") return works;
    return works.filter((w) => w.service === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Portfolio & Case Studies | ØRIONS Bangkok"
        description="Browse selected ØRIONS work across creative transformation, communication, film production, and retainer projects."
        path="/work"
        keywords="creative agency portfolio Bangkok, campaign film portfolio, creative transformation"
      />
      <Navbar />
      <div className="pt-20">
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Portfolio
              </p>
              <h1 className="font-display font-bold text-[clamp(28px,4.5vw,56px)] leading-[1] tracking-[0.02em] text-foreground mb-6 max-w-5xl">
                Creative work
                <br />that <span className="text-accent-gradient">performs.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t("Quality over quantity. Every project here represents a brand we helped think, shape, and produce.", "คุณภาพเหนือปริมาณ ทุกโปรเจกต์ที่นี่คือแบรนด์ที่เราช่วยคิด สร้าง และผลิต")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-12 pb-20 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.04}>
              <div className="flex items-center gap-3 md:gap-6 mb-12 md:mb-16 flex-wrap">
                {serviceFilters.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-300 pb-0.5 ${
                      activeFilter === cat ? "text-accent-warm border-b border-accent-warm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredWorks.map((w, i) => (
                <AnimatedSection key={w.slug} delay={i * 0.03}>
                  <Link to={`/work/${w.slug}`} className="group block">
                    <div className="overflow-hidden mb-5 relative">
                      <img src={w.image} alt={w.title} className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                    </div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm/60">{w.service}</span>
                      <span className="text-muted-foreground/30 text-[8px]">●</span>
                      <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{w.type}</span>
                    </div>
                    <h2 className="font-display font-normal text-[15px] tracking-tight uppercase text-foreground/80 group-hover:text-accent-warm transition-colors duration-300 mb-1">{w.title}</h2>
                    <p className="font-body text-[14px] leading-[1.6] text-muted-foreground line-clamp-2">{w.brief[lang]}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {filteredWorks.length === 0 && (
              <div className="text-center py-20">
                <p className="font-mono text-[12px] tracking-[0.1em] uppercase text-muted-foreground/50">
                  {t("No projects in this category yet.", "ยังไม่มีผลงานในหมวดนี้")}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-display text-[clamp(22px,3.5vw,44px)] leading-[1.05] tracking-[0.02em] text-foreground mb-6">
                Want work like this
                <br />for your brand?
              </h2>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
                {t("Tell us what you're launching, changing, or trying to grow.", "บอกเราว่าคุณกำลังเปิดตัว เปลี่ยนแปลง หรืออยากขยายอะไร")}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <Link to="/services" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                  Explore Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <Link to="/contact" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                  Start a Project Brief <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
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

export default WorkPage;
