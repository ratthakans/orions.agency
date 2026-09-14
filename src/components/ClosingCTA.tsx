import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

interface CTAItem {
  label: string;
  to: string;
  /** "ghost" = outlined; anything else = filled accent. */
  variant?: "primary" | "ghost" | "invert";
}

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  ctas: CTAItem[];
  email?: string;
  phone?: string;
}

/** Unified closing CTA block — one button system (.btn-*) + one eyebrow (SectionLabel). */
const ClosingCTA = ({
  eyebrow = "Ready when you are",
  title,
  description,
  ctas,
  email,
  phone,
}: Props) => (
  <section className="relative px-6 md:px-10 border-t border-foreground/15">
    <div className="max-w-[1280px] mx-auto py-28 md:py-48 text-center">
      <Reveal>
        <div className="flex justify-center">
          <SectionLabel label={eyebrow} reveal={false} />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-7 h-display-lg text-balance max-w-[18ch] mx-auto">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[520px] mx-auto text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground font-thai">
            {description}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-7 sm:gap-12">
          {ctas.map((c) => (
            <Link
              key={c.label}
              to={c.to}
              viewTransition
              className={`cta-link cta-link-lg ${c.variant === "ghost" ? "cta-link-muted" : ""}`}
            >
              <span>{c.label}</span>
              <ArrowUpRight className="w-[18px] h-[18px]" />
            </Link>
          ))}
        </div>
      </Reveal>
      {(email || phone) && (
        <Reveal delay={0.3}>
          <div className="mt-12 inline-flex items-center gap-6 md:gap-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            {email && (
              <a href={`mailto:${email}`} className="hover:text-foreground transition-colors break-all">
                {email}
              </a>
            )}
            {email && phone && <span aria-hidden className="block w-px h-3 bg-muted-foreground" />}
            {phone && (
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-foreground transition-colors">
                {phone}
              </a>
            )}
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

export default ClosingCTA;
