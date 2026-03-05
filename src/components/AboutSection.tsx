import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
  <section id="about" className="py-32 md:py-44 px-6 md:px-12 bg-elevated">
    <div className="max-w-7xl mx-auto">
      {/* Header — same 2-col layout as Careers */}
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              About<br />
              <span className="text-accent-gradient">ØRIONS</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              {t("about.desc")}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl">
        <div className="space-y-8 font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
          <AnimatedSection delay={0.1}>
            <div className="border-t border-divider pt-10">
              <p className="text-foreground font-display text-lg md:text-xl mb-6">Our approach is simple</p>
              <p className="mb-6">
                Clear thinking.<br />
                Purposeful creativity.<br />
                Disciplined execution.
              </p>
              <p className="text-foreground font-display text-lg md:text-xl">
                Less noise.<br />
                More meaning.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

};

export default AboutSection;
