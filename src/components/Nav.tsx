import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";


const links = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
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
    <header className="fixed top-7 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-soft">
      <div className="px-6 md:px-10 h-[64px] flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 text-foreground">
          <span className="font-brand text-[20px] md:text-[22px] tracking-[-0.02em]">ØRIONS</span>
          <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground hidden sm:inline">
            [{idx}/05]
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `index-badge transition-colors duration-200 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Magnetic strength={6} className="hidden md:inline-block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 index-badge bg-foreground text-background px-4 py-2.5 hover:opacity-95 transition-opacity"
          >
            <span>Let's Talk</span>
            <span className="relative inline-flex overflow-hidden w-3.5 h-3.5">
              <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0" />
              <ArrowUpRight className="w-3.5 h-3.5 absolute inset-0 -translate-x-3 translate-y-3 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ stroke: "url(#cta-grad)" }} />
            </span>
          </Link>
        </Magnetic>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Scroll progress hairline */}
      <div className="absolute bottom-0 left-0 h-px bg-gradient-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />

      {open && (
        <div className="md:hidden border-t border-foreground bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="index-badge text-foreground">
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="index-badge bg-foreground text-background px-4 py-3 inline-block w-fit">
              Let's Talk ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
