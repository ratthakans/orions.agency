import Reveal from "@/components/Reveal";

interface Props {
  index: string;
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
    <div
      className={`font-mono text-[10px] tracking-[0.22em] uppercase flex items-center gap-3 ${
        tone === "snow" ? "text-background/55" : "text-muted-foreground"
      } ${className}`}
    >
      <span className="block w-6 h-px bg-cinnabar" />
      {index} — {label}
    </div>
  );
  return reveal ? <Reveal>{node}</Reveal> : node;
};

export default SectionLabel;