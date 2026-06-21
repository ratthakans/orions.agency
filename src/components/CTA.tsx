import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost" | "invert" | "chevron";
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** @deprecated kept for API compat. CTA no longer wraps in Magnetic. */
  noMagnetic?: boolean;
}

/** Single CTA primitive — primary/invert filled pill or ghost underlined link.
 *  Arrow performs a diagonal swap-out on hover (Vercel-style) + magnetic drift. */
const CTA = ({ to, href, variant = "primary", children, className = "", external, noMagnetic }: Props) => {
  if (variant === "chevron") {
    const cls = `cta-chevron ${className}`;
    return href ? (
      <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        <span>{children}</span>
      </a>
    ) : (
      <Link to={to || "/"} viewTransition className={cls}><span>{children}</span></Link>
    );
  }
  const base =
    variant === "primary"
      ? "group relative inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-none btn-label overflow-hidden border border-foreground transition-colors duration-500 hover:text-foreground"
      : variant === "invert"
      ? "group relative inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 rounded-none btn-label overflow-hidden border border-background transition-colors duration-500 hover:text-background"
      : "group inline-flex items-center gap-2 btn-label text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity";

  const cls = `${base} ${className}`;
  const arrowSize = variant === "ghost" ? "w-3.5 h-3.5" : "w-4 h-4";

  const sweepClass =
    variant === "primary"
      ? "absolute inset-0 bg-background -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
      : variant === "invert"
      ? "absolute inset-0 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
      : "";

  const inner = (
    <>
      {variant !== "ghost" && <span aria-hidden className={sweepClass} />}
      <span className="relative">{children}</span>
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
    <Link to={to || "/"} viewTransition className={cls}>
      {inner}
    </Link>
  );

  return node;
};

export default CTA;
