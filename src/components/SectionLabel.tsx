import Reveal from "@/components/Reveal";
import Slash from "@/components/Slash";

interface Props {
  /** Section number — "01", "02" … rendered in foreground before the label. */
  index?: string;
  label: string;
  /** Wrap in Reveal animation. Default false — one orchestrated entrance
   *  per page lives in the hero, and a label that fades in above a heading
   *  that doesn't is the inconsistency, not the restraint. */
  reveal?: boolean;
  className?: string;
}

/** Editorial section label — single source of truth.
 *  Pattern: [/ brand slash] NN · LABEL  (mono · 10/0.22em uppercase) */
const SectionLabel = ({ index, label, reveal = false, className = "" }: Props) => {
  const node = (
    <div className={`inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase leading-none ${className}`}>
      <Slash className="text-[15px]" />
      {index ? <span className="text-foreground tabular-nums">{index}</span> : null}
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
  return reveal ? <Reveal>{node}</Reveal> : node;
};

export default SectionLabel;
