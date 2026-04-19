interface Props {
  className?: string;
}

const Mark = ({ pos }: { pos: string }) => (
  <span
    aria-hidden
    className={`absolute w-3 h-3 ${pos}`}
  >
    <span className="absolute top-0 left-0 w-3 h-px bg-foreground/30" />
    <span className="absolute top-0 left-0 w-px h-3 bg-foreground/30" />
  </span>
);

/**
 * Print-style crop marks at the four corners of a section.
 * Parent must be `relative`. Use sparingly (hero / major sections only).
 */
const CropMarks = ({ className = "" }: Props) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
    <Mark pos="top-2 left-2" />
    <Mark pos="top-2 right-2 rotate-90" />
    <Mark pos="bottom-2 left-2 -rotate-90" />
    <Mark pos="bottom-2 right-2 rotate-180" />
  </div>
);

export default CropMarks;
