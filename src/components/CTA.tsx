import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import Magnetic from "./Magnetic";

interface Props {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost" | "invert";
  children: ReactNode;
  className?: string;
  external?: boolean;
  noMagnetic?: boolean;
}

/** Single CTA primitive — primary/invert filled pill or ghost underlined link.
 *  Arrow performs a diagonal swap-out on hover (Vercel-style) + magnetic drift. */
const CTA = ({ to, href, variant = "primary", children, className = "", external, noMagnetic }: Props) => {
  const base =
    variant === "primary"
      ? "group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-95 transition-opacity"
      : variant === "invert"
      ? "group inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge hover:opacity-95 transition-opacity"
      : "group inline-flex items-center gap-2 index-badge text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity";

  const cls = `${base} ${className}`;
  const arrowSize = variant === "ghost" ? "w-3.5 h-3.5" : "w-4 h-4";

  const inner = (
    <>
      <span>{children}</span>
      <span className={`relative inline-flex overflow-hidden ${arrowSize}`}>
        <ArrowUpRight
          className={`${arrowSize} absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0`}
        />
        <ArrowUpRight
          className={`${arrowSize} absolute inset-0 -translate-x-3 translate-y-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100`}
          style={{ stroke: "url(#cta-grad)" }}
        />
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="cta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent-from))" />
              <stop offset="100%" stopColor="hsl(var(--accent-to))" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </>
  );

  const node = href ? (
    <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {inner}
    </a>
  ) : (
    <Link to={to || "/"} className={cls}>
      {inner}
    </Link>
  );

  if (noMagnetic || variant === "ghost") return node;
  return <Magnetic strength={6} className="inline-block">{node}</Magnetic>;
};

export default CTA;
