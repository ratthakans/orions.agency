import { NavLink, Link } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Consulting", to: "/consulting" },
  { label: "Work", to: "/work" },
  { label: "Studio", to: "/studio" },
  { label: "Diagnostic", to: "/diagnostic" },
];

const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground/10">
    <div className="px-6 md:px-10 h-[64px] flex items-center justify-between text-foreground">
      <Link to="/" className="font-brand text-[12px] md:text-[13px]">
        ØRIONS
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `font-mono text-[10px] tracking-[0.22em] uppercase transition-colors ${
                isActive ? "text-foreground" : "text-foreground/55 hover:text-foreground"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-mono text-[10px] tracking-[0.22em] uppercase transition-colors ${
              isActive ? "text-foreground" : "text-foreground/55 hover:text-cinnabar"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      <Link
        to="/contact"
        className="md:hidden font-mono text-[10px] tracking-[0.22em] uppercase text-foreground"
      >
        Contact →
      </Link>
    </div>
  </header>
);

export default Nav;
