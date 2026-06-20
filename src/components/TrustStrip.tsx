interface Props {
  items?: string[];
  label?: string;
  className?: string;
}

// Real clients only (พูดตรง — never list a brand we haven't worked with).
const defaultItems = [
  "พรรคประชาธิปัตย์",
  "กองทัพอากาศ",
  "GCOO",
  "HONG MOVE",
  "เขาใหญ่ คันทรี่คลับ",
  "HEAVY ORGANIZER",
  "My Hotel",
  "พรรคพลวัต",
];

const TrustStrip = ({ items = defaultItems, label = "Trusted by", className = "" }: Props) => (
  <div className={`border-y border-foreground/15 ${className}`}>
    <div className="px-6 md:px-10 py-6 md:py-7 max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar shrink-0 inline-flex items-center gap-3">
        <span className="block w-6 h-px bg-cinnabar" />
        {label}
      </span>
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {items.map((name) => (
          <li
            key={name}
            className="font-serif text-[15px] md:text-[17px] tracking-[-0.01em] text-foreground/70 hover:text-foreground transition-colors"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TrustStrip;