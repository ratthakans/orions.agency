import { Link } from "react-router-dom";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
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
      <div className="px-6 md:px-10 pt-20 md:pt-24 pb-8 max-w-[1200px] mx-auto">
        {/* Lead row — manifesto + contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-8">— ØRIONS</p>
            <p className="font-display text-[20px] md:text-[28px] leading-[1.2] tracking-[-0.025em] text-balance max-w-[520px]">
              From idea to final cut <span className="text-gradient">— one team,</span> no handoff.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-3">
            <a href="mailto:hello@orions.agency" className="font-display text-[15px] md:text-[16px] tracking-[-0.01em] hover:opacity-70 transition-opacity">
              hello@orions.agency
            </a>
            <a href="tel:+66923905464" className="font-display text-[15px] md:text-[16px] tracking-[-0.01em] hover:opacity-70 transition-opacity">
              +66 92 390 5464
            </a>
            <p className="font-thai text-[13px] leading-[1.6] text-background/60 mt-1">
              Bangkok, Thailand
            </p>
          </div>
        </div>

        {/* Nav + socials */}
        <div className="mt-16 md:mt-20 pt-6 border-t border-background/20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] tracking-[0.25em] uppercase">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-60 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6 font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="mt-6 pt-4 border-t border-background/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 font-mono text-[9px] tracking-[0.22em] uppercase opacity-40">
          <p>© {year} ØRIONS</p>
          <p>Bangkok · Est. 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
