import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";


const links = [
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
];

const pageIndex: Record<string, string> = {
  "/": "01",
  "/services": "02",
  "/work": "03",
  "/about": "04",
  "/contact": "05",
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const idx = pageIndex[pathname] ?? "··";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar — Klar-style */}
      <div className="bg-foreground text-background">
        <div className="px-6 md:px-10 h-7 flex items-center justify-center text-center overflow-hidden">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase whitespace-nowrap">
            Q3 2026 BOOKING — 30-MIN CALL, FREE · REPLY IN 24H
          </p>
        </div>
      </div>
      <div className="bg-background/95 backdrop-blur-sm border-b border-foreground/10 px-6 md:px-10 h-[64px] flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 text-foreground">
          <span className="font-brand text-[20px] md:text-[22px] tracking-[-0.02em]">ØRIONS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `btn-label relative py-1 transition-colors duration-300 group ${
                  isActive ? "text-foreground" : "text-foreground/45 hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-px bg-foreground origin-left transition-transform duration-300 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="group hidden md:inline-flex items-center gap-2 btn-label bg-foreground text-background px-4 py-2.5 border border-foreground transition-all duration-300 hover:gap-3 hover:bg-background hover:text-foreground"
        >
          <span>Get a free proposal</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Scroll progress hairline */}
      <div className="absolute bottom-0 left-0 h-px bg-foreground transition-[width] duration-150" style={{ width: `${progress}%` }} />

      {open && (
        <div className="md:hidden border-t border-foreground/10 bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="btn-label text-foreground">
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-label bg-foreground text-background px-4 py-3 inline-block w-fit">
              Get a free proposal ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
