import { motion } from "framer-motion";

interface HeroSectionProps {
  onStartProject: () => void;
}

const HeroSection = ({ onStartProject }: HeroSectionProps) => (
  <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
    <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-12"
      >
        <span className="font-display text-xs tracking-wider">(01)</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          Bangkok · Available
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-6"
      >
        Creative Agency
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-bold tracking-tighter leading-[0.9] text-foreground mb-16"
      >
        Noiseless,<br />
        More Meaning.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-divider pt-8"
      >
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
          We define direction, build authority, and create work that moves markets.
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={onStartProject}
            className="bg-foreground text-background px-7 py-3.5 text-sm font-display font-medium tracking-wide hover:bg-muted-foreground transition-colors duration-300 flex items-center gap-2"
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <a
            href="/services"
            className="border border-divider text-foreground px-7 py-3.5 text-sm font-display font-medium tracking-wide hover:bg-secondary transition-colors duration-300"
          >
            View Services
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scrolling marquee */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="absolute bottom-0 left-0 right-0 border-t border-divider overflow-hidden py-4"
    >
      <div className="animate-marquee whitespace-nowrap flex gap-0">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mx-0">
            Brand Direction · Communication Systems · Digital Experience · Creative Expression · Strategy · Authority · Clarity ·&nbsp;
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
