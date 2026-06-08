import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  /** Title language — "th" applies Thai wrapping/font. */
  lang?: string;
  className?: string;
}

/**
 * Alpha-style section heading on ORIONS's editorial skin:
 *   cinnabar mono eyebrow → serif display title (em → italic cinnabar) → muted intro.
 */
const SectionHeading = ({ eyebrow, title, intro, center = false, lang, className = "" }: Props) => (
  <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
    {eyebrow && <p className="eyebrow-mono">{eyebrow}</p>}
    <h2 lang={lang} className={`mt-5 h-display-md ${lang === "th" ? "thai-wrap" : ""}`}>
      {title}
    </h2>
    {intro && (
      <p
        lang={lang}
        className={`mt-5 text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground ${lang === "th" ? "font-thai thai-wrap" : ""}`}
      >
        {intro}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
