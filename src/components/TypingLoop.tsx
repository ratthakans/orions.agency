import { useEffect, useState } from "react";

interface Props {
  text: string;
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  pauseMs?: number;
}

const TypingLoop = ({
  text,
  className = "",
  typeSpeed = 90,
  deleteSpeed = 45,
  holdMs = 1600,
  pauseMs = 600,
}: Props) => {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">("typing");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (display.length < text.length) {
        timer = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase("holding"), 0);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), holdMs);
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(text.slice(0, display.length - 1)), deleteSpeed);
      } else {
        timer = setTimeout(() => setPhase("pausing"), 0);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("typing"), pauseMs);
    }
    return () => clearTimeout(timer);
  }, [display, phase, text, typeSpeed, deleteSpeed, holdMs, pauseMs]);

  return (
    <span className={className} aria-label={text}>
      {display}
      <span className="inline-block w-[0.08em] h-[0.9em] align-[-0.08em] ml-1 animate-pulse" style={{ background: "currentColor" }} />
    </span>
  );
};

export default TypingLoop;
