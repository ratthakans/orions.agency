import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

interface Props {
  eyebrowNumber: string;
  eyebrowLabel: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrowNumber, eyebrowLabel, title, subtitle }: Props) => (
  <section className="px-6 md:px-12 pt-32 md:pt-36 pb-20 md:pb-28">
    <div className="max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex items-center justify-between border-b border-border pb-4 mb-12">
          <span className="index-badge">INDEX {eyebrowNumber} / 13</span>
          <span className="index-badge text-foreground/80">{eyebrowLabel}</span>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-2">
          <Reveal>
            <SectionLabel number={eyebrowNumber} label={eyebrowLabel} />
          </Reveal>
        </div>
        <div className="md:col-span-10">
          <Reveal delay={0.1}>
            <h1 className="font-display text-[40px] md:text-[80px] leading-[0.95] max-w-[1100px] tracking-[-0.04em]">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-[680px] text-[16px] md:text-[18px] leading-[1.75] text-muted-foreground font-thai">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
