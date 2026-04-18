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
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-foreground">
      <div className="px-6 md:px-10 h-[64px] flex items-center justify-between">
        <Link to="/" className="font-brand text-[20px] md:text-[22px] tracking-[-0.02em] text-foreground">
          ØRIONS
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `index-badge transition-opacity ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex index-badge bg-foreground text-background px-4 py-2.5 hover:opacity-90 transition-opacity"
        >
          Let's Talk ↗
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
