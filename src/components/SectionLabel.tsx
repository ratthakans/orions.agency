import Reveal from "@/components/Reveal";

interface Props {
  /** Section number — "01", "02" … rendered in cinnabar before the label. */
  index?: string;
  label: string;
  /** Wrap in Reveal animation. Default true. */
  reveal?: boolean;
  className?: string;
}

/** Editorial section label — single source of truth.
 *  Pattern: [— cinnabar hairline] NN · LABEL  (mono · 10/0.22em uppercase) */
const SectionLabel = ({ index, label, reveal = true, className = "" }: Props) => {
  const node = (
    <div className={`inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none ${className}`}>
      <span aria-hidden className="block h-px w-7 bg-cinnabar shrink-0" />
      {index ? <span className="text-cinnabar tabular-nums">{index}</span> : null}
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
  return reveal ? <Reveal>{node}</Reveal> : node;
};

export default SectionLabel;
