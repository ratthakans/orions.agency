import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import TextReveal from "./TextReveal";

interface HeroSectionProps {
  onStartProject: () => void;
}

const phrases = [
  "DEMAND THAT GROWS.",
  "IDEAS THAT STICK.",
  "BRANDS THAT LEAD.",
  "IMPACT THAT LASTS.",
];

const Typewriter = memo(() => {
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
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="font-display font-medium text-[clamp(22px,4.5vw,64px)] leading-[0.9] tracking-[0.01em] text-accent-gradient block min-h-[1.1em] text-center"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.8em] bg-accent-warm ml-1 align-baseline relative top-[0.05em]"
      />
    </motion.span>
  );
});

Typewriter.displayName = "Typewriter";

const HeroSection = ({ onStartProject }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[75vh] md:min-h-[90vh] flex items-end px-4 sm:px-6 md:px-12 pb-12 md:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-5xl">
          <div className="mb-12">
            <TextReveal
              as="h1"
              className="font-display font-bold text-[clamp(24px,5.5vw,80px)] leading-[0.9] tracking-[0.01em] text-foreground overflow-wrap-break-word"
            >
              A CREATIVE AGENCY THAT TURNS IDEAS INTO DEMAND.
            </TextReveal>
            <Typewriter />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between max-w-5xl gap-8"
          >
            <div className="flex items-center gap-6 flex-wrap">
              <button
                onClick={onStartProject}
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Work With Us
              </button>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                View Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            <p className="font-body text-[16px] text-muted-foreground max-w-[400px] leading-[1.7]">
              {t(
                "We create ideas, stories, and campaigns that make people care, remember, and act.",
                "เราสร้างไอเดีย เรื่องราว และแคมเปญ ที่ทำให้คนสนใจ จดจำ และลงมือทำ"
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
