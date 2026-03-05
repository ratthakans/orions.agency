import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const steps = [
  { num: "01", title: "Discovery", descKey: "process.step1", dialogKey: "process.step1" },
  { num: "02", title: "Strategy", descKey: "process.step2", dialogKey: "process.step2" },
  { num: "03", title: "Creation", descKey: "process.step3", dialogKey: "process.step3" },
  { num: "04", title: "Launch & Scale", descKey: "process.step4", dialogKey: "process.step4" },
];

const ProcessSection = () => {
  const { t } = useLanguage();
  const [selectedStep, setSelectedStep] = useState<typeof steps[0] | null>(null);

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
              <button
                onClick={() => setSelectedStep(step)}
                className="bg-background p-8 md:p-10 h-full w-full text-left group hover:bg-secondary transition-colors duration-300 relative overflow-hidden cursor-pointer"
              >
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
                <span className="inline-flex items-center gap-1 mt-4 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Process Step Dialog */}
      <Dialog open={!!selectedStep} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
          {selectedStep && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display text-3xl font-bold text-accent-gradient">{selectedStep.num}</span>
                  <DialogTitle className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {selectedStep.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="font-body text-muted-foreground text-sm leading-relaxed">
                  {t(selectedStep.descKey)}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                {/* Our Process */}
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-3">
                    {t(`${selectedStep.dialogKey}.process_title`)}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {t(`${selectedStep.dialogKey}.process`)}
                  </p>
                </div>

                {/* How We're Different */}
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-3">
                    {t(`${selectedStep.dialogKey}.different_title`)}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {t(`${selectedStep.dialogKey}.different`)}
                  </p>
                </div>

                {/* Key Steps */}
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground tracking-wide uppercase mb-3">
                    {t(`${selectedStep.dialogKey}.steps_title`)}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t(`${selectedStep.dialogKey}.steps`).split("|").map((s, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-secondary/50 border border-border">
                        <span className="font-display text-xs font-bold text-accent-gradient mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-body text-sm text-foreground">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProcessSection;
