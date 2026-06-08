import { ReactNode } from "react";

/** Alpha-style pill badge chip with a cinnabar status dot. */
const BadgeChip = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`badge-chip ${className}`}>
    <span className="badge-chip__dot" aria-hidden />
    {children}
  </span>
);

export default BadgeChip;
