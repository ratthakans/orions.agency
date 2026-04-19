interface Props {
  children: string;
  /** "left" places at left edge, "right" at right edge */
  side?: "left" | "right";
  className?: string;
}

/**
 * 90° rotated label — Wim Crouwel / Studio Dumbar pattern.
 * Use along hero edges to mark page index, location, year, etc.
 */
const VerticalLabel = ({ children, side = "left", className = "" }: Props) => {
  const sideCls = side === "left" ? "left-2 md:left-4" : "right-2 md:right-4";
  const rotate = side === "left" ? "-rotate-90" : "rotate-90";
  return (
    <span
      aria-hidden
      className={`pointer-events-none hidden md:flex absolute top-1/2 ${sideCls} -translate-y-1/2 ${rotate} origin-center font-mono text-[10px] tracking-[0.32em] uppercase text-muted-foreground whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  );
};

export default VerticalLabel;
