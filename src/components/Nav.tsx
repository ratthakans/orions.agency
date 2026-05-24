import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const links = [
  { label: "Diagnostic", to: "/diagnostic" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Ventures", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-6 md:px-10 h-[72px] flex items-center justify-between text-foreground">
        <Link to="/" className="font-brand text-[13px] md:text-[14px]">
          ØRIONS
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative w-8 h-8 flex flex-col items-end justify-center gap-[6px]"
        >
          <span
            className={`block h-px bg-foreground transition-all duration-300 ${
              open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-foreground transition-all duration-300 ${
              open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-5"
            }`}
          />
        </button>
      </div>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 bg-background transition-opacity duration-500 pointer-events-auto ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="h-full flex flex-col px-6 md:px-10 pt-[120px] md:pt-[140px]">
          <nav className="flex-1 flex flex-col items-start justify-start gap-2 md:gap-3">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-serif italic text-[48px] md:text-[96px] leading-[1.02] tracking-[-0.03em] transition-opacity duration-300 ${
                    isActive ? "opacity-100 text-cinnabar" : "opacity-90 hover:text-cinnabar"
                  }`
                }
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="pb-10 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
            <a href="mailto:hello@orions.agency" className="hover:text-foreground transition-colors">
              hello@orions.agency
            </a>
            <span className="hidden sm:inline">BANGKOK · ICT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
