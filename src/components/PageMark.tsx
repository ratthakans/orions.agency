interface Props {
  index: string;
  total?: string;
}

/** Editorial page-mark used at the top of each section — `ORIONS ✦   NN / NN`.
 *  variant defaults to light (ink on cream); use `dark` token-aware classes when nesting on dark sections. */
const PageMark = ({ index, total = "09" }: Props) => (
  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-12 md:mb-16">
    <span className="flex items-center gap-3">ORIONS <span className="text-orion">✦</span></span>
    <span>{index} / {total}</span>
  </div>
);

export default PageMark;