import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

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

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
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

  return (
    <section className="min-h-[85vh] flex items-end px-6 md:px-12 pb-20 md:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[clamp(48px,8vw,130px)] leading-[0.9] tracking-[0.01em] text-foreground mb-12"
          >
            A CREATIVE AGENCY<br />
            FOR BRANDS THAT NEED<br />
            <span className="text-accent-gradient">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[0.8em] bg-accent-warm ml-1 align-baseline relative top-[0.05em]"
              />
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-end max-w-5xl"
          >
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
