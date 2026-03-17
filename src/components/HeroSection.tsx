import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

interface HeroSectionProps {
  onStartProject: () => void;
}

const phrases = [
  "STRONGER STORIES.",
  "CLEARER IDEAS.",
  "BETTER CAMPAIGNS.",
  "FILMS THAT LAST.",
  "MEANINGFUL CONTENT.",
];

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[currentIndex];

  // Typewriter effect
  useState(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      // handled by useEffect below
    };
  });

  // Keep original typewriter via useEffect
  const _ = (() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { useEffect } = require("react");
    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;
      if (!isDeleting && displayText === currentPhrase) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev: number) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 60);
      }
      return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentPhrase]);
  })();

  return (
    <section className="min-h-[85vh] flex items-end px-6 md:px-12 pb-20 md:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-5xl">
          <div className="mb-12">
            <TextReveal
              as="h1"
              className="font-display text-[clamp(48px,8vw,130px)] leading-[0.9] tracking-[0.01em] text-foreground"
            >
              A CREATIVE AGENCY FOR BRANDS THAT NEED
            </TextReveal>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-display text-[clamp(48px,8vw,130px)] leading-[0.9] tracking-[0.01em] text-accent-gradient block"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[0.8em] bg-accent-warm ml-1 align-baseline relative top-[0.05em]"
              />
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between max-w-5xl gap-8"
          >
            <div className="flex items-center gap-6 flex-wrap">
              <MagneticButton strength={0.3}>
                <button
                  onClick={onStartProject}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
                >
                  Start a Project
                </button>
              </MagneticButton>
              <a
                href="/work"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                View Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            <p className="font-body text-[16px] text-muted-foreground max-w-[400px] leading-[1.7]">
              {t(
                "We help brands develop narratives, campaigns, and films with clarity and impact.",
                "เราช่วยแบรนด์พัฒนา narrative, campaign และ film ด้วยความชัดเจนและ impact"
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
