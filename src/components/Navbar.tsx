import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import StartProjectDialog from "./StartProjectDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "AI Stack", href: "/ai-stack" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/about#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[62px]">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gradient" />
            <span className="font-logo text-[16px] font-medium tracking-[0.22em] text-foreground uppercase" style={{ letterSpacing: '0.22em', wordSpacing: '-0.15em' }}>ØRIONS</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex border border-divider overflow-hidden rounded-sm">
              <button
                onClick={() => setLang("en")}
                className={`font-mono text-[10px] tracking-[0.14em] uppercase px-4 py-[7px] transition-all duration-200 ${
                  lang === "en" ? "bg-accent-gradient text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("th")}
                className={`font-mono text-[10px] tracking-[0.14em] uppercase px-4 py-[7px] transition-all duration-200 ${
                  lang === "th" ? "bg-accent-gradient text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                TH
              </button>
            </div>
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[11px] tracking-[0.1em] uppercase text-foreground border border-foreground/20 px-5 py-2.5 hover:bg-accent-gradient hover:border-transparent hover:text-white transition-all duration-300 rounded-sm"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex border border-divider overflow-hidden rounded-sm">
              <button
                onClick={() => setLang("en")}
                className={`font-mono text-[9px] tracking-[0.14em] uppercase px-3 py-1.5 transition-all duration-200 ${
                  lang === "en" ? "bg-accent-gradient text-white" : "text-muted-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("th")}
                className={`font-mono text-[9px] tracking-[0.14em] uppercase px-3 py-1.5 transition-all duration-200 ${
                  lang === "th" ? "bg-accent-gradient text-white" : "text-muted-foreground"
                }`}
              >
                TH
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
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
              className="md:hidden border-t border-divider bg-background overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-mono text-sm tracking-[0.1em] uppercase transition-colors ${
                      location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => { setIsOpen(false); setDialogOpen(true); }}
                  className="font-mono text-sm tracking-[0.1em] uppercase bg-accent-gradient text-white px-5 py-3 text-center mt-2 rounded-sm"
                >
                  Start a Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Navbar;