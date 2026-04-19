interface Props {
  number: string;
  label: string;
  className?: string;
}

const SectionLabel = ({ number, label, className = "" }: Props) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="h-px w-10 bg-accent" />
    <span className="label-mono text-accent">
      {number} — {label}
    </span>
  </div>
);

export default SectionLabel;
