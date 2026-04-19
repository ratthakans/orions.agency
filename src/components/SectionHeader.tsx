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

/** Unified section divider used on every page */
const SectionHeader = ({ index, left, right, soft = false, variant = "light" }: Props) => {
  const isDark = variant === "dark";
  const borderTop = soft
    ? isDark ? "border-t border-background/30" : "border-t border-soft"
    : isDark ? "border-t border-background/40" : "border-t border-foreground";
  const indexCls = isDark ? "opacity-60 font-mono" : "text-muted-foreground font-mono";
  const ruleCls = isDark ? "block w-4 h-px bg-background/40" : "block w-4 h-px bg-foreground/40";
  const rightCls = isDark ? "opacity-60" : "text-muted-foreground";

  return (
    <div className={`${borderTop} pt-3 pb-3 flex items-center justify-between gap-6`}>
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
