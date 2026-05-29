import { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}

const PrincipleBlock = ({ eyebrow, title, children }: Props) => (
  <div className="principle-block">
    <div className="principle-block__eyebrow">{eyebrow}</div>
    <h3 className="principle-block__title">{title}</h3>
    {children && <p className="principle-block__body">{children}</p>}
  </div>
);

export default PrincipleBlock;