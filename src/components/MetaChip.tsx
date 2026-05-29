import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  accent?: boolean;
  className?: string;
}

/** Mono meta chip — dates, metrics, constraints. CAPS alphanumeric per spec. */
const MetaChip = ({ children, accent, className = "" }: Props) => (
  <span className={`meta-chip ${accent ? "meta-chip-accent" : ""} ${className}`}>{children}</span>
);

export default MetaChip;