import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import StartProjectDialog from "./StartProjectDialog";


const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const location = useLocation();
  

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-logo text-xl md:text-2xl font-medium tracking-tight text-foreground">
            ØRIONS
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative text-sm transition-colors duration-300 font-body tracking-wide ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent-warm" />
                )}
              </Link>
            ))}


            <button
              onClick={() => setDialogOpen(true)}
              className="text-sm bg-foreground text-background px-5 py-2.5 font-display font-medium hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
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
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-display transition-colors ${
                      location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => setLang(lang === "en" ? "th" : "en")}
                  className="text-sm font-display tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors border border-divider px-4 py-2 w-fit"
                >
                  {lang === "en" ? "ภาษาไทย" : "English"}
                </button>
                <button
                  onClick={() => { setIsOpen(false); setDialogOpen(true); }}
                  className="text-sm bg-foreground text-background px-5 py-3 font-display font-medium text-center mt-2 hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300"
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
