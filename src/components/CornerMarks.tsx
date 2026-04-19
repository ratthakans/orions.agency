const Mark = ({ className }: { className: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={`fixed pointer-events-none z-[55] text-foreground/25 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden
  >
    <path d="M0 6 V0 H6" />
  </svg>
);

const CornerMarks = () => (
  <>
    <Mark className="top-9 left-3" />
    <Mark className="top-9 right-3 rotate-90" />
    <Mark className="bottom-3 left-3 -rotate-90" />
    <Mark className="bottom-3 right-3 rotate-180" />
  </>
);

export default CornerMarks;
