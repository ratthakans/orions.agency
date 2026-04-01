import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle anchor scrolling for same-page navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.replace("/", "");
    if (location.pathname === "/" && hash.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-warm origin-left z-10"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[60px]">
        <Link to="/" className="flex items-center">
          <span className="font-logo text-[13px] font-medium tracking-[0.08em] text-foreground uppercase">ØRIONS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={(e) => handleNavClick(e, s.href)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-5 py-2 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
          >
            Let's Talk
          </a>
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
              {navLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={(e) => handleNavClick(e, s.href)}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
                >
                  {s.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-5 py-3 text-center mt-4 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
