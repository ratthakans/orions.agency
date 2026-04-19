interface Props {
  /** Optional 2-digit index, e.g. "01" */
  index?: string;
  /** Section title (left-side) */
  left: string;
  /** Optional right-side meta */
  right?: string;
  /** Use a soft hairline (default true) */
  soft?: boolean;
}

/** Unified section divider used on every page */
const SectionHeader = ({ index, left, right, soft = false }: Props) => (
  <div className={`${soft ? "border-t border-soft" : "border-t border-foreground"} pt-3 pb-3 flex items-center justify-between gap-6`}>
    <span className="index-badge font-bold inline-flex items-center gap-3">
      {index && <span className="text-muted-foreground font-mono">{index}</span>}
      {index && <span className="block w-4 h-px bg-foreground/40" />}
      <span>{left}</span>
    </span>
    {right && <span className="index-badge font-medium text-muted-foreground hidden sm:inline">{right}</span>}
  </div>
);

export default SectionHeader;
