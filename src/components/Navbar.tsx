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
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[56px]">
          <Link to="/" className="flex items-center">
            <span className="font-logo text-[12px] font-medium tracking-[0.08em] text-foreground uppercase">ØRIONS</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-0">
              <button
                onClick={() => setLang("en")}
                className={`font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 transition-all duration-300 ${
                  lang === "en" ? "text-foreground" : "text-muted-foreground/30 hover:text-muted-foreground"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground/15 self-center text-[10px]">/</span>
              <button
                onClick={() => setLang("th")}
                className={`font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 transition-all duration-300 ${
                  lang === "th" ? "text-foreground" : "text-muted-foreground/30 hover:text-muted-foreground"
                }`}
              >
                TH
              </button>
            </div>
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground border-b border-foreground/25 pb-0.5 hover:border-foreground/60 transition-all duration-500"
            >
              Inquiry
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex gap-0">
              <button
                onClick={() => setLang("en")}
                className={`font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-1 transition-all duration-300 ${
                  lang === "en" ? "text-foreground" : "text-muted-foreground/30"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground/15 self-center text-[10px]">/</span>
              <button
                onClick={() => setLang("th")}
                className={`font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-1 transition-all duration-300 ${
                  lang === "th" ? "text-foreground" : "text-muted-foreground/30"
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
              <div className="px-6 py-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-500 ${
                      location.pathname === link.href ? "text-foreground" : "text-muted-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => { setIsOpen(false); setDialogOpen(true); }}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-5 py-3 text-center mt-4"
                >
                  Inquiry
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
