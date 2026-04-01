import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const darkPages = ["/work"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDark = darkPages.includes(location.pathname);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = isDark ? "text-dark-foreground" : "text-foreground";
  const mutedColor = isDark ? "text-dark-muted" : "text-muted-foreground";
  const bgScrolled = isDark
    ? "bg-dark/95 backdrop-blur-sm border-b border-dark-border"
    : "bg-background/95 backdrop-blur-sm border-b border-border/50";
  const mobileBg = isDark ? "border-t border-dark-border bg-dark" : "border-t border-border bg-background";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? bgScrolled : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-[64px]">
        <Link to="/" className={`font-display text-[22px] font-semibold tracking-[0.12em] uppercase ${textColor}`}>
          ØRIONS
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className={`font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-300 ${
                location.pathname === s.href ? textColor : `${mutedColor} hover:${textColor}`
              }`}
            >
              {s.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`block w-5 h-px ${isDark ? "bg-dark-foreground" : "bg-foreground"} transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-5 h-px ${isDark ? "bg-dark-foreground" : "bg-foreground"} transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px ${isDark ? "bg-dark-foreground" : "bg-foreground"} transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
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
            className={`md:hidden ${mobileBg} overflow-hidden`}
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className={`font-mono text-[12px] tracking-[0.08em] uppercase transition-colors duration-300 text-left ${
                    location.pathname === s.href ? textColor : `${mutedColor} hover:${textColor}`
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
