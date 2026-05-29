import Reveal from "@/components/Reveal";
import { ReactNode } from "react";
import CropMarks from "@/components/CropMarks";
import VerticalLabel from "@/components/VerticalLabel";

interface Props {
  eyebrow?: string;
  /** Title can include JSX. Avoid `text-gradient` (reserved for Index hero). */
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: string;
  /** Offset title to the right (Amsterdam asymmetric grid). Default true for inner pages. */
  asymmetric?: boolean;
  /** 90° edge label, e.g. "/ 02 SERVICES" */
  verticalLabel?: string;
  /** Size for the title. Default 'lg'. */
  titleSize?: "lg" | "md" | "sm";
}

/** Unified editorial hero — single source of truth for inner page heroes */
const PageHero = ({
  eyebrow,
  title,
  subtitle,
  meta = "ØRIONS · BANGKOK",
  asymmetric = true,
  verticalLabel,
  titleSize = "lg",
}: Props) => (
  <section className="relative px-6 md:px-10 pt-32 md:pt-36 pb-16 md:pb-20">
    <CropMarks />
    {verticalLabel && <VerticalLabel side="left">{verticalLabel}</VerticalLabel>}

    <Reveal>
      <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
        <span className="index-badge font-bold">{eyebrow ?? "INDEX"}</span>
        <span className="index-badge font-medium text-muted-foreground hidden sm:inline">{meta}</span>
      </div>
    </Reveal>

    <div className="mt-12 md:mt-16">
      <div className={asymmetric ? "grid grid-cols-1 md:grid-cols-12 gap-8" : ""}>
        <div className={asymmetric ? "md:col-span-10 md:col-start-2" : ""}>
          <Reveal delay={0.1}>
            <h1 className={`font-display h-display-${titleSize}`}>
              {title}
            </h1>
          </Reveal>
        </div>
      </div>
      {subtitle && (
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.2}>
              <p className="text-[16px] md:text-[19px] leading-[1.7] text-muted-foreground font-thai">{subtitle}</p>
            </Reveal>
          </div>
        </div>
      )}
    </div>
  </section>
);

export default PageHero;
