import { useEffect, useState } from "react";

interface Props {
  text: string;
  delay?: number;        // ms before starting
  speed?: number;        // ms per character
  className?: string;
  caret?: boolean;
}

/** One-shot typing reveal — types text character by character, then a blinking caret. */
const TypeOnce = ({ text, delay = 600, speed = 70, className = "", caret = true }: Props) => {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = window.setTimeout(() => {
      const id = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(id);
          setDone(true);
        }
      }, speed);
    }, delay);
    return () => window.clearTimeout(start);
  }, [text, delay, speed]);

  return (
    <span className={`${className} ${caret && done ? "type-caret" : ""}`} aria-label={text}>
      {shown}
      {!done && caret && <span className="type-caret-inline" aria-hidden>|</span>}
    </span>
  );
};

export default TypeOnce;