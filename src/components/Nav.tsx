import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-background/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
        <Link to="/" className="font-brand text-[20px] md:text-[22px] tracking-[-0.01em] text-foreground">
          ØRIONS
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `label-mono transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex label-mono bg-accent-solid text-accent-foreground px-4 py-2.5 hover:opacity-90 transition-opacity"
        >
          Let's Talk
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="label-mono text-foreground">
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="label-mono bg-accent-solid text-accent-foreground px-4 py-3 inline-block w-fit">
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
