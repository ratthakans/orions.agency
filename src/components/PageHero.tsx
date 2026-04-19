import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

interface Props {
  eyebrowNumber: string;
  eyebrowLabel: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrowNumber, eyebrowLabel, title, subtitle }: Props) => (
  <section className="px-6 md:px-12 pt-36 md:pt-44 pb-20 md:pb-28">
    <div className="max-w-[1400px] mx-auto">
      <Reveal>
        <SectionLabel number={eyebrowNumber} label={eyebrowLabel} />
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-8 font-display text-[36px] md:text-[72px] leading-[0.95] max-w-[1100px] tracking-[-0.03em]">
          {title}
        </h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[720px] text-[16px] md:text-[19px] leading-[1.7] text-muted-foreground font-thai">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  </section>
);

export default PageHero;
