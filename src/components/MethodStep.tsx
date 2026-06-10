import { ReactNode } from "react";

interface Props {
  n: string;
  caption: string;
  title: ReactNode;
  children?: ReactNode;
}

/** Numbered method block — giant cinnabar serif numeral + caption + sans title with accent */
const MethodStep = ({ n, caption, title, children }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-foreground/15">
    <div className="md:col-span-3">
      <div className="method-num">{n}</div>
      <span className="method-caption">{caption}</span>
    </div>
    <div className="md:col-span-9">
      <h3 className="text-[28px] md:text-[34px] leading-tight tracking-tight">{title}</h3>
      {children && <div className="mt-4 max-w-[68ch] text-foreground/80 leading-relaxed">{children}</div>}
    </div>
  </div>
);

export default MethodStep;