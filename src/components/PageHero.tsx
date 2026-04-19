import Reveal from "@/components/Reveal";

interface Props {
  eyebrowNumber: string;
  eyebrowLabel: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrowNumber, eyebrowLabel, title, subtitle }: Props) => (
  <section className="px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24">
    {(eyebrowNumber || eyebrowLabel) && (
      <Reveal>
        <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
          <span className="index-badge font-bold">{eyebrowNumber} — {eyebrowLabel}</span>
          <span className="index-badge font-medium text-muted-foreground hidden sm:inline">ØRIONS · BANGKOK</span>
        </div>
      </Reveal>
    )}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mt-12 md:mt-16">
      <div className="md:col-span-9">
        <Reveal delay={0.1}>
          <h1 className="font-display text-[48px] md:text-[96px] leading-[0.95] tracking-[-0.04em] whitespace-pre-line">
            {title}
          </h1>
        </Reveal>
      </div>
      {subtitle && (
        <div className="md:col-span-7 md:col-start-3">
          <Reveal delay={0.2}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground font-thai">
              {subtitle}
            </p>
          </Reveal>
        </div>
      )}
    </div>
  </section>
);

export default PageHero;
