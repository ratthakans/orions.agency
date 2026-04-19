import { useEffect, useState } from "react";

interface Props {
  text?: string;
  texts?: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  startDelay?: number;
  holdDuration?: number;
  cursorClassName?: string;
}

const Typewriter = ({
  text,
  texts,
  className = "",
  speed = 70,
  deleteSpeed = 40,
  startDelay = 400,
  holdDuration = 1600,
  cursorClassName = "w-[2px] h-[1em] bg-foreground ml-1",
}: Props) => {
  const phrases = texts && texts.length > 0 ? texts : text ? [text] : [""];
  const loop = phrases.length > 1;

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "holding" | "deleting">("idle");

  useEffect(() => {
    const t = setTimeout(() => setPhase("typing"), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    const current = phrases[index];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, speed);
        return () => clearTimeout(t);
      }
      if (loop) {
        const t = setTimeout(() => setPhase("deleting"), holdDuration);
        return () => clearTimeout(t);
      }
      setPhase("holding");
      return;
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(t);
      }
      setIndex((i) => (i + 1) % phrases.length);
      setPhase("typing");
    }
  }, [phase, displayed, index, phrases, loop, speed, deleteSpeed, holdDuration]);

  return (
    <span className={className} aria-label={phrases.join(" · ")}>
      {displayed}
      <span className={`inline-block align-middle animate-pulse ${cursorClassName}`} />
    </span>
  );
};

export default Typewriter;
