import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Package", to: "/package" },
  { label: "Consulting", to: "/consulting" },
  { label: "Work", to: "/work" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Anthropic-style logo: full ØRIONS at the top, collapse to Ø once scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground/10">
      <div className="px-6 md:px-10 h-[64px] flex items-center justify-between text-foreground">
        <Link to="/" aria-label="ØRIONS" className="font-brand text-[16px] md:text-[18px] tracking-[0.02em] relative z-[60] inline-flex items-center leading-none">
          <span>Ø</span>
          <span
            aria-hidden
            className={`inline-block overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled && !open ? "max-w-0 opacity-0 -translate-x-1" : "max-w-[200px] opacity-100 translate-x-0"
            }`}
          >
            RIONS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative font-body text-[13px] font-medium tracking-[0.02em] transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:bg-cinnabar after:transition-transform after:duration-300 after:w-full ${
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-foreground/55 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                } after:origin-left`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-body text-[13px] font-medium tracking-[0.02em] transition-colors ${
                isActive ? "text-cinnabar" : "text-foreground/55 hover:text-cinnabar"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/diagnostic"
            className={({ isActive }) =>
              `ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase border transition-colors ${
                isActive
                  ? "bg-cinnabar text-background border-cinnabar"
                  : "border-cinnabar text-cinnabar hover:bg-cinnabar hover:text-background"
              }`
            }
          >
            Brand audit ↗
          </NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative z-[60] flex flex-col items-end gap-[5px] py-2"
        >
          <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "w-5 translate-y-[6px] rotate-45" : "w-5"}`} />
          <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "opacity-0" : "w-4"}`} />
          <span className={`block h-px bg-foreground transition-all duration-300 ${open ? "w-5 -translate-y-[6px] -rotate-45" : "w-5"}`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-50 bg-background flex flex-col transition-[opacity,transform] duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="h-[64px] shrink-0" />
        <nav className="flex-1 px-6 flex flex-col justify-center gap-2">
          {[...links, { label: "Contact", to: "/contact" }].map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `group flex items-baseline gap-4 py-3 border-b border-foreground/10 ${isActive ? "text-cinnabar" : "text-foreground"}`
              }
            >
              <span className="font-mono text-[11px] tracking-[0.22em] text-cinnabar tabular-nums">0{i + 1}</span>
              <span className="h-display-md">{l.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="px-6 pb-2">
          <NavLink to="/diagnostic" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-cinnabar">
            Brand audit ↗
          </NavLink>
        </div>
        <div className="px-6 py-8 font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground flex flex-col gap-1.5">
          <a href="mailto:hello@orions.agency" className="hover:text-cinnabar transition-colors">hello@orions.agency</a>
          <a href="tel:+66923905464" className="hover:text-cinnabar transition-colors">+66 92 390 5464</a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
