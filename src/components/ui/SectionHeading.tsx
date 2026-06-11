import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Slash from "@/components/Slash";

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
 * Section heading — one eyebrow language site-wide (matches SectionLabel):
 *   [— hairline] MONO LABEL → serif display title (em → cinnabar) → muted intro.
 */
const SectionHeading = ({ eyebrow, title, intro, center = false, lang, className = "" }: Props) => (
  <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none ${center ? "justify-center" : ""}`}>
        <Slash className="text-[15px]" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
    )}
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
