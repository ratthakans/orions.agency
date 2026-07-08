import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

interface Action {
  label: string;
  to: string;
  variant?: "accent" | "ghost";
  external?: boolean;
}

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primary: Action;
  secondary?: Action;
  /** Kept for API compatibility; "ink" tints the outer band slightly. */
  tone?: "ink" | "snow";
  className?: string;
}

/** Closing CTA — an open, cinematic statement (no boxed panel, text-link CTAs). */
const CTABand = ({ eyebrow, title, subtitle, primary, secondary, tone = "snow", className = "" }: Props) => {
  const bandBg = tone === "ink" ? "bg-surface" : "";
  return (
    <section className={`${bandBg} px-6 md:px-10 border-t border-foreground/15 ${className}`}>
      <div className="max-w-[1280px] mx-auto py-28 md:py-48">
        {eyebrow && (
          <Reveal>
            <SectionLabel label={eyebrow} reveal={false} />
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h2 className="mt-8 h-display-lg max-w-[15ch]">{title}</h2>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[560px] font-serif text-[17px] md:text-[21px] leading-[1.5] text-muted-foreground">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-7 sm:gap-12">
            <Link to={primary.to} viewTransition className="cta-link cta-link-lg">
              <span>{primary.label}</span>
              <ArrowUpRight className="w-[18px] h-[18px]" />
            </Link>
            {secondary && (
              <Link to={secondary.to} viewTransition className="cta-link cta-link-lg cta-link-muted">
                <span>{secondary.label}</span>
                <ArrowUpRight className="w-[18px] h-[18px]" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABand;
