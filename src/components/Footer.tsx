import { Link } from "react-router-dom";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="px-6 md:px-10 py-10 md:py-12 max-w-[1200px] mx-auto">
      <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <Link to="/" className="font-brand text-[18px] tracking-[-0.02em]">
          ØRIONS
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[11px] tracking-[0.2em] uppercase">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-70 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2 font-mono text-[10px] tracking-[0.18em] uppercase opacity-50">
        <p>© {new Date().getFullYear()} ØRIONS · Bangkok, TH</p>
        <p>Tax ID 0105568220629</p>
      </div>
    </div>
  </footer>
);

export default Footer;