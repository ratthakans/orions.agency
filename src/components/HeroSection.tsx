import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
    <div className="max-w-5xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground font-body mb-8"
      >
        Creative Agency
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-foreground mb-8"
      >
        ØRIONS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="font-display text-lg md:text-xl tracking-[0.15em] text-muted-foreground mb-6"
      >
        Noiseless, More Meaning.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        We help brands communicate clearly through strategy, campaigns, content, and digital systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="bg-foreground text-background px-8 py-4 text-sm font-display font-medium tracking-wide hover:bg-muted-foreground transition-colors duration-300 w-full sm:w-auto text-center"
        >
          Start a Project
        </a>
        <a
          href="#services"
          className="border border-divider text-foreground px-8 py-4 text-sm font-display font-medium tracking-wide hover:bg-secondary transition-colors duration-300 w-full sm:w-auto text-center"
        >
          View Services
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
