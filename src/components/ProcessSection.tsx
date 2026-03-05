import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  { num: "01", title: "Discovery", descKey: "process.step1" },
  { num: "02", title: "Strategy", descKey: "process.step2" },
  { num: "03", title: "Creation", descKey: "process.step3" },
  { num: "04", title: "Launch & Scale", descKey: "process.step4" },
];

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                Process
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                How We<br />
                <span className="text-accent-gradient">Work</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                {t("process.desc")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-divider border border-divider">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="bg-background p-8 md:p-10 h-full group hover:bg-secondary transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="font-display text-4xl md:text-5xl font-bold text-foreground/10 mb-6 block">
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent-gradient transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
