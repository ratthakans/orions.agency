import { useEffect, useState } from "react";

interface Props {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

const Typewriter = ({ text, className = "", speed = 70, startDelay = 400 }: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, started, text, speed]);

  return (
    <p className={className} aria-label={text}>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-foreground align-middle ml-1 animate-pulse" />
    </p>
  );
};

export default Typewriter;
