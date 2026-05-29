import Reveal from "@/components/Reveal";

interface Props {
  index?: string;
  label: string;
  /** "ink" = on snow bg (default). "snow" = on dark/ink bg. */
  tone?: "ink" | "snow";
  /** Wrap in Reveal animation. Default true. */
  reveal?: boolean;
  className?: string;
}

/** Editorial section label — single source of truth.
 *  Pattern: [hairline · cinnabar 24px] NN — Title  (mono · 10/0.22em uppercase) */
const SectionLabel = ({ index, label, tone = "ink", reveal = true, className = "" }: Props) => {
  const node = (
    <div className={`eyebrow-mono ${className}`}>
      {index && <span className="text-muted-foreground mr-2">{index} /</span>}
      <span>{label.toUpperCase()}</span>
    </div>
  );
  return reveal ? <Reveal>{node}</Reveal> : node;
};

export default SectionLabel;