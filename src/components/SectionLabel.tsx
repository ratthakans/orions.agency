interface Props {
  number: string;
  label: string;
  className?: string;
}

const SectionLabel = ({ number, label, className = "" }: Props) => (
  <div className={`index-badge text-foreground ${className}`}>
    <span className="font-bold">{number}</span>
    <span className="mx-2 text-muted-foreground">—</span>
    <span className="font-medium">{label}</span>
  </div>
);

export default SectionLabel;
