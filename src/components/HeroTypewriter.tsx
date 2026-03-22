import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

const phrases = [
  "UNLOCK NEW MARKETS.",
  "UNLOCK NEW DEMAND.",
  "UNLOCK NEW IDEAS.",
  "UNLOCK NEW GROWTH.",
];

const HeroTypewriter = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[currentIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      }, 25);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, 55);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <span className="text-accent-gradient" style={{ fontFamily: "'Cutive', serif" }}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.75em] bg-accent-warm ml-1 align-baseline relative top-[0.05em]"
      />
    </span>
  );
});

HeroTypewriter.displayName = "HeroTypewriter";

export default HeroTypewriter;
