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
      <div className="px-6 md:px-10 pt-12 md:pt-16 pb-6 max-w-[1400px] mx-auto">
        {/* Top meta strip */}
        <div className="border-t border-background/25 pt-4 flex items-center justify-between font-mono text-[9px] tracking-[0.3em] uppercase opacity-60">
          <span>Bangkok · 13.7°N</span>
          <span className="hidden sm:inline">Est. 2026</span>
          <span>№ {year}</span>
        </div>

        {/* Lead — manifesto */}
        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-y-8">
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-[18px] md:text-[24px] leading-[1.25] tracking-[-0.025em] text-balance">
              From idea to final cut <span className="text-gradient">— one team,</span><br className="hidden md:block" /> no handoff.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-10 md:border-l border-background/15 flex flex-col">
            <a
              href="mailto:hello@orions.agency"
              className="group inline-flex items-baseline gap-2 font-display text-[14px] md:text-[15px] tracking-[-0.01em] hover:opacity-70 transition-opacity"
            >
              <span className="font-mono text-[9px] tracking-[0.25em] opacity-50">→</span>
              hello@orions.agency
            </a>
            <a
              href="tel:+66923905464"
              className="mt-2 inline-block font-display text-[14px] md:text-[15px] tracking-[-0.01em] hover:opacity-70 transition-opacity"
            >
              +66 92 390 5464
            </a>
            <p className="mt-4 font-thai text-[12px] leading-[1.6] text-background/65 max-w-[320px]">
              246/8 Soi Yothinphatthana 3, Khlong Chan, Bang Kapi, Bangkok 10240
            </p>
          </div>
        </div>

        {/* Nav row */}
        <div className="mt-10 md:mt-14 border-t border-background/15 pt-5 grid grid-cols-2 md:grid-cols-12 gap-y-4">
          <div className="md:col-span-2 font-mono text-[9px] tracking-[0.25em] uppercase opacity-50">
            Index
          </div>
          <ul className="md:col-span-7 flex flex-wrap gap-x-6 gap-y-2 font-display text-[13px] tracking-[-0.01em]">
            {navLinks.map((l, i) => (
              <li key={l.to} className="flex items-baseline gap-2">
                <span className="font-mono text-[8px] tracking-[0.2em] opacity-40 tabular-nums">
                  0{i + 1}
                </span>
                <Link to={l.to} className="hover:opacity-60 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="md:col-span-3 flex justify-end gap-5 font-mono text-[9px] tracking-[0.25em] uppercase opacity-70">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mega wordmark */}
        <Link to="/" aria-label="ØRIONS — Home" className="block mt-10 md:mt-12 group">
          <span
            className="block font-brand text-background select-none whitespace-nowrap leading-[0.82] tracking-[-0.045em] transition-opacity group-hover:opacity-90"
            style={{ fontSize: "clamp(48px, 12vw, 160px)" }}
          >
            ØRIONS
          </span>
        </Link>

        {/* Legal */}
        <div className="mt-6 pt-4 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-2 font-mono text-[9px] tracking-[0.22em] uppercase opacity-50">
          <p>© {year} ØRIONS · Bangkok, TH · Tax 0105568220629</p>
          <p>Set in Unbounded · IBM Plex · JetBrains Mono</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
