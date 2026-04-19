interface Props {
  /** 2-digit number, e.g. "01" */
  n: string;
  /** Optional small label rendered below the number */
  label?: string;
  className?: string;
}

/**
 * Oversized floating section index number — Amsterdam / Werkplaats Typografie style.
 * Use as a section opener (above SectionHeader) for the main page sections.
 */
const BigSectionNumber = ({ n, label, className = "" }: Props) => (
  <div className={`flex items-end gap-4 md:gap-6 ${className}`}>
    <span
      aria-hidden
      className="num-display leading-none tracking-[-0.04em] text-foreground/15 select-none"
      style={{ fontSize: "clamp(72px, 11vw, 140px)" }}
    >
      {n}
    </span>
    {label && (
      <span className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-muted-foreground pb-3 md:pb-5">
        {label}
      </span>
    )}
  </div>
);

export default BigSectionNumber;
