import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface Props {
  /** Words to cycle through; the last one is typed and kept. */
  words: string[];
  className?: string;
  caretClassName?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  pauseMs?: number;
}

/** Types each word, deletes it, moves on — and STOPS on the final word
 *  (caret keeps blinking). Reserves the width of the longest word so the
 *  surrounding line never reflows. */
const TypingCycle = ({
  words,
  className = "",
  caretClassName = "",
  typeSpeed = 95,
  deleteSpeed = 45,
  holdMs = 900,
  pauseMs = 320,
}: Props) => {
  const reduced = useReducedMotion();
  const finalWord = words[words.length - 1];
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">("typing");

  const done = index >= words.length - 1 && display === finalWord;

  useEffect(() => {
    if (reduced || done) return;
    const word = words[index];
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (display.length < word.length) {
        t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      // Last word → stop here and keep it.
      if (index === words.length - 1) return;
      t = setTimeout(() => setPhase("deleting"), holdMs);
    } else if (phase === "deleting") {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(word.slice(0, display.length - 1)), deleteSpeed);
      } else {
        t = setTimeout(() => setPhase("pausing"), 0);
      }
    } else if (phase === "pausing") {
      t = setTimeout(() => {
        setIndex((i) => Math.min(i + 1, words.length - 1));
        setPhase("typing");
      }, pauseMs);
    }
    return () => clearTimeout(t);
  }, [reduced, done, display, phase, index, words, typeSpeed, deleteSpeed, holdMs, pauseMs, finalWord]);

  return (
    <span className={`inline-grid ${className}`}>
      {/* invisible sizer reserves the widest width — prevents reflow; overlay is centered in the same grid cell */}
      <span aria-hidden className="invisible whitespace-pre [grid-area:1/1] justify-self-center">{longest}</span>
      <span className="whitespace-pre [grid-area:1/1] justify-self-center">
        {reduced ? finalWord : display}
        <span
          className={`inline-block w-[0.055em] h-[0.74em] ml-[0.06em] translate-y-[0.04em] ${
            done ? "animate-pulse" : ""
          } ${caretClassName}`}
        />
      </span>
    </span>
  );
};

export default TypingCycle;
