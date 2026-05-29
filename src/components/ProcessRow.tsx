import { ReactNode } from "react";

interface Props {
  index: string;
  title: string;
  meta?: string;
  children?: ReactNode;
}

/** Rate-card process row: `01 / Title … WEEK 01 · DAYS 1–5` + body */
const ProcessRow = ({ index, title, meta, children }: Props) => (
  <div className="process-row">
    <div className="process-row__head">
      <h3 className="process-row__title">
        <span className="process-row__index">{index} /</span>
        {title}
      </h3>
      {meta && <span className="process-row__meta">{meta}</span>}
    </div>
    {children && <div className="process-row__body">{children}</div>}
  </div>
);

export default ProcessRow;