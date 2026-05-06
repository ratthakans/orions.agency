import { Link } from "react-router-dom";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-background overflow-hidden">
    <div className="px-6 md:px-10 pt-16 md:pt-20 max-w-[1400px] mx-auto">
      {/* Top meta row */}
      <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <nav>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[11px] tracking-[0.22em] uppercase">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-70 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-60">
          Bangkok · EST. 2026
        </p>
      </div>

      {/* Mega wordmark */}
      <Link to="/" aria-label="ØRIONS — Home" className="block mt-12 md:mt-16">
        <span
          className="block font-brand leading-[0.82] tracking-[-0.04em] text-background select-none whitespace-nowrap"
          style={{ fontSize: "clamp(96px, 22vw, 320px)" }}
        >
          ØRIONS
        </span>
      </Link>

      {/* Bottom legal row */}
      <div className="mt-8 pt-5 pb-8 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-2 font-mono text-[10px] tracking-[0.18em] uppercase opacity-50">
        <p>© {new Date().getFullYear()} ØRIONS</p>
        <p>Tax ID 0105568220629</p>
      </div>
    </div>
  </footer>
);

export default Footer;