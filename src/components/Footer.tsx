import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="px-6 md:px-10 pb-8">
      <div className="border-t border-background/40 pt-12 md:pt-14">
      {/* Main grid: nav / contact / studio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div>
          <div className="index-badge opacity-50 mb-6">Index</div>
          <ul className="space-y-3 font-display text-[18px] md:text-[20px] tracking-[-0.02em]">
            {[
              { to: "/services", label: "Services" },
              { to: "/work", label: "Work" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-block transition-colors duration-300 hover:text-[hsl(var(--accent-to))]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="index-badge opacity-50 mb-6">Reach</div>
          <div className="space-y-4 font-display text-[15px] md:text-[16px]">
            <a href="mailto:hello@orions.agency" className="block transition-colors duration-300 hover:text-[hsl(var(--accent-to))] break-all">
              hello@orions.agency
            </a>
            <a href="tel:+66923905464" className="block transition-colors duration-300 hover:text-[hsl(var(--accent-to))]">
              +66 92 390 5464
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <a href="https://instagram.com/orions.bkk" target="_blank" rel="noreferrer" aria-label="Instagram"
               className="w-9 h-9 border border-background/25 flex items-center justify-center transition-all duration-300 hover:bg-gradient-accent hover:text-background hover:border-transparent">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/orions.bkk" target="_blank" rel="noreferrer" aria-label="Facebook"
               className="w-9 h-9 border border-background/25 flex items-center justify-center transition-all duration-300 hover:bg-gradient-accent hover:text-background hover:border-transparent">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="mailto:hello@orions.agency" aria-label="Email"
               className="w-9 h-9 border border-background/25 flex items-center justify-center transition-all duration-300 hover:bg-gradient-accent hover:text-background hover:border-transparent">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="index-badge opacity-50 mb-6">Studio</div>
          <p className="font-thai text-[14px] leading-[1.7] opacity-80">
            246/8 Soi Yothinphatthana<br />
            Bang Kapi, Bangkok 10240<br />
            Thailand
          </p>
        </div>
      </div>

      {/* Legal row */}
      <div className="mt-10 pt-5 border-t border-background/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50">
          © {new Date().getFullYear()} ØRIONS · Bangkok, TH
        </p>
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50">
          Tax ID 0105568220629
        </p>
      </div>
      </div>
    </div>
  </footer>
);

export default Footer;
