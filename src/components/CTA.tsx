import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

/** Single CTA primitive — primary (filled pill) or ghost (underlined link) */
const CTA = ({ to, href, variant = "primary", children, className = "", external }: Props) => {
  const base =
    variant === "primary"
      ? "inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge hover:opacity-90 transition-opacity"
      : "inline-flex items-center gap-2 index-badge text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity";
  const cls = `${base} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight className={variant === "primary" ? "w-4 h-4" : "w-3.5 h-3.5"} />
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to || "/"} className={cls}>
      {inner}
    </Link>
  );
};

export default CTA;
