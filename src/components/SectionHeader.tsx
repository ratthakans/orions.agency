import { motion } from "framer-motion";

interface Props {
  /** Optional 2-digit index, e.g. "01" */
  index?: string;
  /** Section title (left-side) */
  left: string;
  /** Optional right-side meta */
  right?: string;
  /** Use a soft hairline (default false) */
  soft?: boolean;
  /** Color scheme — light (on background) or dark (on foreground) */
  variant?: "light" | "dark";
}

/** Unified section divider used on every page — top hairline animates scaleX in on view */
const SectionHeader = ({ index, left, right, soft = false, variant = "light" }: Props) => {
  const isDark = variant === "dark";
  const lineColor = soft
    ? isDark ? "bg-background/30" : "bg-[hsl(var(--border-soft))]"
    : isDark ? "bg-background/40" : "bg-foreground";
  const indexCls = isDark ? "opacity-60 font-mono" : "text-muted-foreground font-mono";
  const ruleCls = isDark ? "block w-4 h-px bg-background/40" : "block w-4 h-px bg-foreground/40";
  const rightCls = isDark ? "opacity-60" : "text-muted-foreground";

  return (
    <div className="relative pt-3 pb-3 flex items-center justify-between gap-6">
      <motion.span
        aria-hidden
        className={`absolute top-0 left-0 right-0 h-px ${lineColor} origin-left`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
      <span className="index-badge font-bold inline-flex items-center gap-3">
        {index && <span className={indexCls}>{index}</span>}
        {index && <span className={ruleCls} />}
        <span>{left}</span>
      </span>
      {right && <span className={`index-badge font-medium hidden sm:inline ${rightCls}`}>{right}</span>}
    </div>
  );
};

export default SectionHeader;
