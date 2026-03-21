import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Problem", href: "/problem" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const location = useLocation();

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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
        <Link to="/" className="flex items-center">
          <span className="font-logo text-[13px] font-medium tracking-[0.08em] text-foreground uppercase">ØRIONS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                location.pathname === s.href ? "text-accent-warm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-5 py-2 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
          >
            Let's Talk
          </Link>
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
                <Link
                  key={s.href}
                  to={s.href}
                  className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 text-left ${
                    location.pathname === s.href ? "text-accent-warm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-5 py-3 text-center mt-4 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
