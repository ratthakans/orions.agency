import { NavLink, Link } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Diagnostic", to: "/diagnostic" },
];

const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground/10">
    <div className="px-6 md:px-10 h-[72px] flex items-center justify-between text-foreground">
      <Link to="/" className="font-brand text-[13px] md:text-[14px]">
        ØRIONS
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `font-mono text-[11px] tracking-[0.22em] uppercase transition-colors ${
                isActive ? "text-cinnabar" : "text-foreground/70 hover:text-foreground"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="font-mono text-[11px] tracking-[0.22em] uppercase bg-gradient-cinnabar text-background px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Contact →
        </Link>
      </nav>

      <Link
        to="/contact"
        className="md:hidden font-mono text-[10px] tracking-[0.22em] uppercase bg-gradient-cinnabar text-background px-3 py-2"
      >
        Contact →
      </Link>
    </div>
  </header>
);

export default Nav;
