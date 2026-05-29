import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/diagnostic", label: "Diagnostic" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/consulting", label: "Consulting" },
  { to: "/work", label: "Work" },
  { to: "/studio", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://instagram.com/orions.bkk", label: "IG" },
  { href: "https://facebook.com/orions.bkk", label: "FB" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [bkkTime, setBkkTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
      setBkkTime(`${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`);
    };
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <footer className="bg-black text-foreground overflow-hidden">
      {/* Status strip — quiet ribbon */}
      <div className="px-6 md:px-10 h-8 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/55 border-b border-foreground/10">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-cinnabar" aria-hidden />
          Studio open · BKK {bkkTime} ICT
        </span>
        <span className="hidden md:inline">Now booking · Q3 2026</span>
      </div>
      <div className="px-6 md:px-10 pt-16 md:pt-20 pb-6 max-w-[1280px] mx-auto">
        {/* Headline row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-foreground/15 pb-12">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/55 mb-5">— ØRIONS · BANGKOK</p>
            <a
              href="mailto:hello@orions.agency"
              className="font-serif italic text-[28px] md:text-[44px] tracking-[-0.015em] hover:text-cinnabar transition-colors"
            >
              hello@orions.agency
            </a>
          </div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/55 text-right">
            <div className="text-foreground inline-flex items-center gap-2 justify-end">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cinnabar" aria-hidden />
              BKK {bkkTime} ICT
            </div>
            <div className="mt-1">Reply within 24h · Mon–Fri</div>
          </div>
        </div>

        {/* 3 columns */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-5">— Contact</div>
            <ul className="space-y-2 font-thai text-[13px] leading-[1.7] text-foreground/85">
              <li><a href="mailto:hello@orions.agency" className="hover:text-cinnabar transition-colors">hello@orions.agency</a></li>
              <li><a href="tel:+66923905464" className="hover:text-cinnabar transition-colors">+66 92 390 5464</a></li>
              <li><a href="https://line.me/ti/p/~orions" target="_blank" rel="noreferrer" className="hover:text-cinnabar transition-colors">LINE @orions</a></li>
              <li><a href="https://wa.me/66923905464" target="_blank" rel="noreferrer" className="hover:text-cinnabar transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-5">— Studio</div>
            <p className="font-thai text-[13px] leading-[1.7] text-foreground/85">
              246/8 Soi Yothin Pattana 3<br />
              Khlong Chan, Bang Kapi<br />
              Bangkok 10240, TH
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/45">
              Tax ID 0105568220629
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-5">— Index</div>
            <ul className="space-y-2 btn-label">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-foreground/85 hover:text-cinnabar transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-cinnabar mb-5">— Elsewhere</div>
            <ul className="space-y-2 btn-label">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-foreground/85 hover:text-cinnabar transition-colors">
                    {s.label === "IG" ? "Instagram" : "Facebook"}
                  </a>
                </li>
              ))}
              <li><Link to="/studio" className="text-foreground/85 hover:text-cinnabar transition-colors">Studio</Link></li>
              <li><Link to="/diagnostic" className="text-foreground/85 hover:text-cinnabar transition-colors">Diagnostic</Link></li>
            </ul>
          </div>
        </div>

        {/* Division link matrix */}
        <div className="mt-14 pt-10 border-t border-foreground/15 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            { code: "Ø Boutique",  desc: "Brand identity & strategy", to: "/services#boutique" },
            { code: "Ø Digital",   desc: "Content + paid media",       to: "/services#digital" },
            { code: "Ø Production", desc: "Creative crew + post",      to: "/services#production" },
          ].map((d) => (
            <Link key={d.code} to={d.to} className="group block border-t border-foreground/15 pt-5 hover:border-cinnabar transition-colors">
              <div className="font-serif italic text-cinnabar text-[20px] md:text-[24px] tracking-[-0.015em]">{d.code}</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/55 group-hover:text-foreground/85 transition-colors">
                {d.desc} →
              </div>
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-16 pt-5 border-t border-foreground/15 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.18em] uppercase opacity-50">
          <p>© {year} ØRIONS — All rights reserved.</p>
          <p>Stories, refined. · Est. 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
