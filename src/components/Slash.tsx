/** Brand signature — the orange "/" accent (ØRIONS rebrand). Size via font-size, e.g. text-[60px]. */
const Slash = ({ className = "" }: { className?: string }) => (
  <span aria-hidden className={`brand-slash ${className}`} />
);

export default Slash;
