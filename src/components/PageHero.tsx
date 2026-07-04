import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

interface Props {
  /** Mono eyebrow label, e.g. "Selected work". */
  eyebrow: string;
  /** Serif display masthead (em → cinnabar). */
  title: ReactNode;
  /** Muted lead paragraph under the title. */
  intro?: ReactNode;
  /** Oversized ghosted numeral floated top-right for editorial framing, e.g. "01". */
  index?: string;
  /** Mono coordinate/label chips rendered as a rail beneath the intro. */
  meta?: string[];
  /** Title language — "th" applies Thai wrapping/weight. */
  lang?: string;
  /** Intro language — defaults to `lang`. Set independently when the title is
   *  Latin serif but the lead paragraph is Thai. */
  introLang?: string;
  /** Tightens the title measure. Defaults to a comfortable editorial width. */
  titleClamp?: string;
  /** Extra content (filters, CTAs, form links) rendered below the meta rail. */
  children?: ReactNode;
  /** Slightly elevated dark band. */
  tone?: "ink" | "base";
  /** Optional absolutely-positioned backdrop (e.g. TopoField). */
  backdrop?: ReactNode;
  className?: string;
}

/**
 * PageHero — the shared interior masthead for ØRIONS.
 * Editorial composition: a giant ghosted index numeral fills the right,
 * a mono eyebrow + slash sits above a serif display title, and a mono
 * meta rail anchors the baseline. Consistent rhythm across every page.
 */
const PageHero = ({
  eyebrow,
  title,
  intro,
  index,
  meta,
  lang,
  introLang,
  titleClamp = "max-w-[20ch]",
  children,
  tone = "ink",
  backdrop,
  className = "",
}: Props) => {
  const isTh = lang === "th";
  const introIsTh = (introLang ?? lang) === "th";
  const introLangAttr = introLang ?? lang;
  return (
    <section
      className={`relative overflow-hidden ${tone === "ink" ? "section-ink" : ""} px-6 md:px-10 border-b border-foreground/15 ${className}`}
    >
      {backdrop}
      {index && (
        <span
          aria-hidden
          className="kicker-index pointer-events-none absolute -top-2 right-2 md:right-6 hidden sm:block select-none text-[30vw] md:text-[260px] leading-none"
        >
          {index}
        </span>
      )}
      <div className="relative z-10 max-w-[1280px] mx-auto pt-28 md:pt-36 pb-16 md:pb-20">
        <SectionLabel label={eyebrow} />
        <Reveal delay={0.08}>
          <h1
            lang={lang}
            className={`mt-8 h-display-lg ${titleClamp} ${isTh ? "thai-wrap" : ""}`}
          >
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.14}>
            <p
              lang={introLangAttr}
              className={`mt-8 max-w-[640px] text-[15px] md:text-[18px] leading-[1.8] text-muted-foreground ${introIsTh ? "font-thai thai-wrap" : ""}`}
            >
              {intro}
            </p>
          </Reveal>
        )}
        {meta && meta.length > 0 && (
          <Reveal delay={0.2}>
            <div className="meta-rail mt-10 pt-5 border-t border-foreground/12">
              {meta.map((m) => (
                <span key={m}>
                  <span aria-hidden className="text-cinnabar">/</span>
                  <span>{m}</span>
                </span>
              ))}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
