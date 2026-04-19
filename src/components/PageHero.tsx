import Reveal from "@/components/Reveal";
import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  /** Title can include JSX. Use <span className="text-gradient">word</span> for accent. */
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: string;
}

/** Unified left-aligned editorial hero — single source of truth for page heroes */
const PageHero = ({ eyebrow, title, subtitle, meta = "ØRIONS · BANGKOK" }: Props) => (
  <section className="px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-28">
    <Reveal>
      <div className="border-t border-foreground pt-3 pb-3 flex items-center justify-between">
        <span className="index-badge font-bold">{eyebrow ?? "INDEX"}</span>
        <span className="index-badge font-medium text-muted-foreground hidden sm:inline">{meta}</span>
      </div>
    </Reveal>
    <div className="mt-12 md:mt-16">
      <Reveal delay={0.1}>
        <h1 className="font-display h-display-lg">
          {title}
        </h1>
      </Reveal>
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
