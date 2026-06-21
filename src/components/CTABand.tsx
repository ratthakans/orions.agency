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

/** Alpha-style closing CTA — a rounded cinnabar-tinted panel. */
const CTABand = ({ eyebrow, title, subtitle, primary, secondary, tone = "snow", className = "" }: Props) => {
  const bandBg = tone === "ink" ? "bg-surface" : "";
  return (
    <section className={`${bandBg} px-6 md:px-10 border-t border-foreground/15 ${className}`}>
      <div className="max-w-[1280px] mx-auto py-20 md:py-24">
        <Reveal>
          <div className="card-accent p-8 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
              <div>
                {eyebrow && <SectionLabel label={eyebrow} reveal={false} />}
                <h2 className="mt-5 h-display-md max-w-[22ch]">{title}</h2>
                {subtitle && (
                  <p className="mt-5 max-w-[640px] font-serif text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:justify-self-end md:w-full">
                <Link to={primary.to} viewTransition className="btn-accent justify-between">
                  <span>{primary.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {secondary && (
                  <Link to={secondary.to} viewTransition className="btn-ghost justify-between">
                    <span>{secondary.label}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABand;
