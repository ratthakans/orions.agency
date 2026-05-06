import { Link } from "react-router-dom";

const Col = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <div className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-50 pb-3 mb-5 border-b border-background/15">
      {label}
    </div>
    {children}
  </div>
);

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://instagram.com/orions.bkk", label: "Instagram" },
  { href: "https://facebook.com/orions.bkk", label: "Facebook" },
];

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="px-6 md:px-10 pt-20 md:pt-28 pb-10 max-w-[1400px] mx-auto">
      {/* Masthead */}
      <div className="border-t border-background/25 pt-8 flex items-baseline justify-between">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-60">
          The Colophon
        </p>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-60 hidden sm:block">
          № {new Date().getFullYear()}
        </p>
      </div>

      {/* Manifesto line */}
      <p className="mt-12 md:mt-16 font-display text-[20px] md:text-[28px] leading-[1.25] tracking-[-0.02em] max-w-[680px] text-balance">
        From idea to final cut <span className="opacity-50">— one team,</span><br className="hidden md:block" /> no handoff.
      </p>

      {/* 4-column colophon */}
      <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        <Col label="Index">
          <ul className="space-y-2.5 font-display text-[15px] md:text-[16px] tracking-[-0.01em]">
            {navLinks.map((l, i) => (
              <li key={l.to} className="flex items-baseline gap-3">
                <span className="font-mono text-[9px] tracking-[0.2em] opacity-40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Link to={l.to} className="hover:opacity-60 transition-opacity">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Col>

        <Col label="Reach">
          <a href="mailto:hello@orions.agency" className="block font-display text-[15px] md:text-[16px] tracking-[-0.01em] break-all hover:opacity-60 transition-opacity">
            hello@orions.agency
          </a>
          <a href="tel:+66923905464" className="mt-3 block font-display text-[15px] md:text-[16px] tracking-[-0.01em] hover:opacity-60 transition-opacity">
            +66 92 390 5464
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase opacity-70">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Col>

        <Col label="Studio">
          <p className="font-thai text-[14px] leading-[1.7] text-background/85">
            246/8 Soi Yothinphatthana 3<br />
            Khlong Chan, Bang Kapi<br />
            Bangkok 10240, Thailand
          </p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase opacity-50">
            Mon–Fri · 10:00–19:00 ICT
          </p>
        </Col>

        <Col label="Imprint">
          <p className="font-thai text-[14px] leading-[1.7] text-background/85">
            Boutique creative agency.<br />
            F&amp;B · Fashion · Hospitality.
          </p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase opacity-50">
            Tax ID 0105568220629
          </p>
        </Col>
      </div>

      {/* Mega wordmark */}
      <Link to="/" aria-label="ØRIONS — Home" className="block mt-20 md:mt-28 group">
        <span className="block font-brand text-background select-none whitespace-nowrap leading-[0.82] tracking-[-0.04em] transition-opacity group-hover:opacity-90"
              style={{ fontSize: "clamp(72px, 18vw, 240px)" }}>
          ØRIONS
        </span>
      </Link>

      {/* Legal row */}
      <div className="mt-10 pt-5 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-2 font-mono text-[10px] tracking-[0.2em] uppercase opacity-50">
        <p>© {new Date().getFullYear()} ØRIONS · Bangkok, TH</p>
        <p>Set in Unbounded · IBM Plex · JetBrains Mono</p>
      </div>
    </div>
  </footer>
);

export default Footer;