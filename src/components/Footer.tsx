/* Hallmark · footer archetype: Ft4 Dense typographic colophon (was the
   4-column link grid + social row, which is the AI-footer fingerprint —
   a catalogue of a sitemap the site doesn't need repeating).
   Ft4 suits this studio because the content is already colophon content:
   a registered entity, a tax ID, an address, two channels. A colophon is
   what a printed thing puts at the end; this site has been describing
   itself as printed matter throughout. */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const index = [
  { to: "/practice", label: "Practice" },
  { to: "/work", label: "Work" },
  { to: "/system", label: "System" },
  { to: "/thinking", label: "Thinking" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy" },
];

const Dot = () => <span aria-hidden className="text-foreground/25 mx-2">·</span>;

const Footer = () => {
  const year = new Date().getFullYear();
  const [bkkTime, setBkkTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));
      setBkkTime(`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`);
    };
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="bg-surface text-foreground border-t border-foreground/10 overflow-hidden">
      {/* Status strip — quiet ribbon */}
      <div className="px-6 md:px-10 h-8 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/55 border-b border-foreground/10">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-cinnabar" aria-hidden />
          Studio open · BKK {bkkTime} ICT
        </span>
      </div>

      <div className="px-6 md:px-10 pt-16 md:pt-20 pb-10 max-w-[1280px] mx-auto">
        {/* The close — one address, given the size of a closing gesture. */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-foreground/15 pb-12">
          <a
            href="mailto:hello@orions.agency"
            className="font-serif font-medium text-[28px] md:text-[44px] tracking-[-0.015em] hover:text-foreground transition-colors"
          >
            hello@orions.agency
          </a>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-foreground/55 md:text-right">
            Reply within 24h · Mon–Fri
          </div>
        </div>

        {/* Colophon — one block, ragged right, set at reading-small in mono.
            Every destination is still here; it just stopped pretending to be
            a sitemap with four headings over it. */}
        <div className="mt-10 font-mono text-[11px] leading-[2.1] tracking-[0.04em] text-foreground/70 max-w-[86ch]">
          <p>
            <span className="text-foreground">ORIONS Creative Co., Ltd.</span>
            <Dot />41/175 Soi Nawamin 111 Yaek 3, Nawamin, Bueng Kum, Bangkok 10240, Thailand
            <Dot />Tax ID 0105568063442
          </p>
          <p className="mt-1">
            <a href="mailto:hello@orions.agency" className="hover:text-foreground transition-colors">hello@orions.agency</a>
            <Dot /><a href="tel:+66893542628" className="hover:text-foreground transition-colors">+66 89 354 2628</a>
            <span lang="th" className="font-thai text-[12px] text-foreground/55"> (คุณพลอย)</span>
            <Dot /><a href="https://line.me/ti/p/~orions" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LINE @orions</a>
            <Dot /><a href="https://www.instagram.com/orions.agency" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
            <Dot /><a href="https://www.facebook.com/orions.agency" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Facebook</a>
          </p>
          <p className="mt-1">
            {index.map((l, i) => (
              <span key={l.to}>
                {i > 0 && <Dot />}
                <Link to={l.to} className="hover:text-foreground transition-colors">{l.label}</Link>
              </span>
            ))}
          </p>
          <p className="mt-1 text-foreground/45">
            © {year} ØRIONS<Dot />Stories, refined.<Dot />Est. 2025, Bangkok.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
