import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const sections = [
    { label: "Problem", href: "#problem" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 100) setHidden(true);
      else setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50"
    >
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-warm origin-left z-10"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[60px]">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
          <span className="font-logo text-[13px] font-medium tracking-[0.08em] text-foreground uppercase">ØRIONS</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {sections.map((s) => (
            <button
              key={s.href}
              onClick={() => scrollTo(s.href)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollTo("#contact")}
            className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-5 py-2 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6">
              {sections.map((s) => (
                <button
                  key={s.href}
                  onClick={() => scrollTo(s.href)}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
                >
                  {s.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-5 py-3 text-center mt-4 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
