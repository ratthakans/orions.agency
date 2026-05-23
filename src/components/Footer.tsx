import { Link } from "react-router-dom";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/diagnostic", label: "The Diagnostic" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://instagram.com/orions.bkk", label: "IG" },
  { href: "https://facebook.com/orions.bkk", label: "FB" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background overflow-hidden">
      <div className="px-6 md:px-10 pt-16 md:pt-20 pb-6 max-w-[1200px] mx-auto">
        {/* Top row — contact + nav */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-background/55 mb-5">— ØRIONS · BANGKOK</p>
            <a
              href="mailto:hello@orions.agency"
              className="font-serif italic text-[24px] md:text-[34px] tracking-[-0.01em] hover:opacity-70 transition-opacity"
            >
              hello@orions.agency
            </a>
          </div>
          <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 btn-label">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-60 transition-opacity">{l.label}</Link>
              </li>
            ))}
            <li aria-hidden className="opacity-40">·</li>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="mt-12 pt-5 border-t border-background/15 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.14em] uppercase opacity-50">
          <p>© {year} ØRIONS</p>
          <p>Est. 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
