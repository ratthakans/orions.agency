import { ReactNode } from "react";
import Reveal from "./Reveal";
import CTA from "./CTA";

interface CTAItem {
  label: string;
  to: string;
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

/** Unified closing CTA block — used at the bottom of Index, Work, About, Services. */
const ClosingCTA = ({
  eyebrow = "READY WHEN YOU ARE",
  title,
  description,
  ctas,
  email,
  phone,
}: Props) => (
  <section className="relative px-6 md:px-10">
    <div className="border-t border-foreground py-16 md:py-20 max-w-[760px] mx-auto text-center">
      <Reveal>
        <div className="index-badge text-muted-foreground mb-6">{eyebrow}</div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display h-display-sm text-balance">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[520px] mx-auto text-[15px] leading-[1.7] text-muted-foreground font-thai">
            {description}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          {ctas.map((c) => (
            <CTA key={c.label} to={c.to} variant={c.variant}>
              {c.label}
            </CTA>
          ))}
        </div>
      </Reveal>
      {(email || phone) && (
        <Reveal delay={0.3}>
          <div className="mt-12 inline-flex items-center gap-6 md:gap-8 font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
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
