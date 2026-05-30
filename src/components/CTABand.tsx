import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

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
  tone?: "ink" | "snow";
  className?: string;
}

const CTABand = ({ eyebrow, title, subtitle, primary, secondary, tone = "ink", className = "" }: Props) => {
  const bg = tone === "ink" ? "section-ink" : "";
  return (
    <section className={`${bg} px-6 md:px-10 border-t border-foreground/15 ${className}`}>
      <div className="max-w-[1280px] mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16 items-end">
        <div>
          {eyebrow && (
            <Reveal>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar inline-flex items-center gap-3">
                <span className="block w-6 h-px bg-cinnabar" />
                {eyebrow}
              </div>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h2 className="mt-8 h-display-lg max-w-[22ch]">{title}</h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[640px] font-serif italic text-[16px] md:text-[20px] leading-[1.5] text-muted-foreground">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row md:flex-col gap-4">
            <Link to={primary.to} className="btn-accent justify-between">
              <span>{primary.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn-ghost justify-between">
                <span>{secondary.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABand;