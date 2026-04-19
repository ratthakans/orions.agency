interface Props {
  number: string;
  label: string;
  className?: string;
}

const SectionLabel = ({ number, label, className = "" }: Props) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="h-px w-10 divider-grad" />
    <span className="label-mono text-grad-soft">
      {number} — {label}
    </span>
  </div>
);

export default SectionLabel;
