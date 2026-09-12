import { isValidElement, type ReactNode } from "react";

const THAI = /[฀-๿]/;

/** True if any text inside a React node is Thai.
 *
 *  The document is <html lang="th">, so an element with no `lang` of its own
 *  inherits Thai — including a heading whose words are English. Components that
 *  receive their heading as a prop (CTABand, ClosingCTA, SectionHeading) use
 *  this to stamp the correct `lang` on the element itself, so the Thai-only
 *  heading metrics in index.css (`[lang="th"]`) land on Thai lines and nowhere
 *  else. Getting this right is also what a screen reader needs. */
export const hasThai = (node: ReactNode): boolean => {
  if (typeof node === "string") return THAI.test(node);
  if (node == null || typeof node === "boolean" || typeof node === "number") return false;
  if (Array.isArray(node)) return node.some(hasThai);
  if (isValidElement(node)) return hasThai((node.props as { children?: ReactNode }).children);
  return false;
};

export const langOf = (node: ReactNode): "th" | "en" => (hasThai(node) ? "th" : "en");
