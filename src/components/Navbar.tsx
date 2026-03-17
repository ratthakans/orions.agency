import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import StartProjectDialog from "./StartProjectDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useLanguage();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Industries", href: "/industries" },
    { label: "Process", href: "/process" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[56px]">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-logo text-[14px] font-medium tracking-[0.12em] text-foreground uppercase">ØRIONS</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-mono text-[9.5px] tracking-[0.16em] uppercase transition-colors duration-500 ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex gap-0">
              <button
                onClick={() => setLang("en")}
                className={`font-mono text-[9px] tracking-[0.16em] uppercase px-3 py-1.5 transition-all duration-300 ${
                  lang === "en" ? "text-foreground" : "text-muted-foreground/50 hover:text-muted-foreground"
                }`}
              >
                EN
              </button>
              <span className="text-divider self-center">/</span>
              <button
                onClick={() => setLang("th")}
                className={`font-mono text-[9px] tracking-[0.16em] uppercase px-3 py-1.5 transition-all duration-300 ${
                  lang === "th" ? "text-foreground" : "text-muted-foreground/50 hover:text-muted-foreground"
                }`}
              >
                TH
              </button>
            </div>
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-foreground border-b border-foreground/30 pb-0.5 hover:border-foreground transition-all duration-500"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex gap-0">
              <button
                onClick={() => setLang("en")}
                className={`font-mono text-[9px] tracking-[0.14em] uppercase px-2 py-1 transition-all duration-300 ${
                  lang === "en" ? "text-foreground" : "text-muted-foreground/50"
                }`}
              >
                EN
              </button>
              <span className="text-divider self-center text-[9px]">/</span>
              <button
                onClick={() => setLang("th")}
                className={`font-mono text-[9px] tracking-[0.14em] uppercase px-2 py-1 transition-all duration-300 ${
                  lang === "th" ? "text-foreground" : "text-muted-foreground/50"
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
              className="lg:hidden border-t border-divider bg-background overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-500 ${
                      location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => { setIsOpen(false); setDialogOpen(true); }}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-5 py-3 text-center mt-2"
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
