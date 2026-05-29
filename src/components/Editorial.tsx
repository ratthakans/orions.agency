import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

/** Editorial narrative blockquote — Newsreader serif body with cinnabar left rule.
 *  Use to wrap manifesto / narrative prose per ØRIONS Design System spec. */
const Editorial = ({ children, className = "" }: Props) => (
  <blockquote className={`editorial-quote ${className}`}>{children}</blockquote>
);

export default Editorial;