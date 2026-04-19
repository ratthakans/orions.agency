import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background px-6 md:px-10 pt-20 md:pt-28 pb-8">
    {/* Top: index header */}
    <div className="border-t border-background/30 pt-3 pb-3 flex items-center justify-between gap-6">
      <span className="index-badge font-bold inline-flex items-center gap-3">
        <span className="opacity-60 font-mono">∞</span>
        <span className="block w-4 h-px bg-background/40" />
        <span>SIGN-OFF</span>
      </span>
      <span className="index-badge font-medium opacity-60 hidden sm:inline">ØRIONS · BANGKOK · TH</span>
    </div>

    {/* Editorial row: index links + contact */}
    <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
      <div className="md:col-span-4">
        <div className="index-badge opacity-60">— INDEX</div>
        <ul className="mt-6 space-y-3 font-display text-[18px] md:text-[22px] leading-[1.1]">
          <li><Link to="/services" className="inline-block hover:translate-x-1 transition-transform duration-300">Services <span className="opacity-50">↗</span></Link></li>
          <li><Link to="/work" className="inline-block hover:translate-x-1 transition-transform duration-300">Work <span className="opacity-50">↗</span></Link></li>
          <li><Link to="/about" className="inline-block hover:translate-x-1 transition-transform duration-300">About <span className="opacity-50">↗</span></Link></li>
          <li><Link to="/contact" className="inline-block hover:translate-x-1 transition-transform duration-300">Contact <span className="opacity-50">↗</span></Link></li>
        </ul>
      </div>

      <div className="md:col-span-4">
        <div className="index-badge opacity-60">— CONTACT</div>
        <ul className="mt-6 space-y-4 text-[14px] leading-[1.5]">
          <li>
            <div className="index-badge opacity-50 mb-1">EMAIL</div>
            <a href="mailto:hello@orions.agency" className="font-display text-[16px] md:text-[18px] hover:opacity-70 transition-opacity break-all">
              hello@orions.agency
            </a>
          </li>
          <li>
            <div className="index-badge opacity-50 mb-1">TEL</div>
            <a href="tel:+66923905464" className="font-display text-[16px] md:text-[18px] hover:opacity-70 transition-opacity">
              +66 92 390 5464
            </a>
          </li>
        </ul>
      </div>

      <div className="md:col-span-4">
        <div className="index-badge opacity-60">— STUDIO</div>
        <p className="mt-6 font-thai text-[14px] leading-[1.6] opacity-90">
          246/8 Soi Yothinphatthana<br />
          Bang Kapi, Bangkok 10240<br />
          Thailand
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="https://instagram.com/orions.bkk" target="_blank" rel="noreferrer" aria-label="Instagram"
             className="w-9 h-9 border border-background/40 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://facebook.com/orions.bkk" target="_blank" rel="noreferrer" aria-label="Facebook"
             className="w-9 h-9 border border-background/40 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="mailto:hello@orions.agency" aria-label="Email"
             className="w-9 h-9 border border-background/40 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    {/* Massive editorial wordmark */}
    <Link to="/" aria-label="ØRIONS home" className="block mt-20 md:mt-28 group">
      <span
        className="font-brand block leading-[0.82] tracking-[-0.05em] transition-opacity duration-500 group-hover:opacity-90"
        style={{ fontSize: "clamp(80px, 19vw, 280px)" }}
      >
        ØRIONS
      </span>
    </Link>

    {/* Legal row */}
    <div className="mt-10 border-t border-background/30 pt-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <p className="index-badge opacity-80">PRACTICAL · BOLD · DONE</p>
      <p className="font-mono text-[10px] opacity-60">
        © {new Date().getFullYear()} ØRIONS · TAX ID 0105568220629 · BANGKOK · TH
      </p>
    </div>
  </footer>
);

export default Footer;
