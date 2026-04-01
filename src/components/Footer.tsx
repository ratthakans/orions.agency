import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-20">
          {/* Left: Brand */}
          <div className="flex-1">
            <Link to="/" className="font-logo text-[18px] font-medium tracking-[0.08em] text-foreground uppercase inline-block mb-4">
              ØRIONS
            </Link>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-xs">
              A creative agency focused on clear communication, strong art direction, and high-quality film production. Based in Bangkok.
            </p>
          </div>

          {/* Middle: Navigation */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">Navigate</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact Info */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:hello@orions.agency"
                className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-300 block"
              >
                hello@orions.agency
              </a>
              <a
                href="tel:+66923905464"
                className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/60 block"
              >
                092 390 5464
              </a>
              <div className="pt-2">
                <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40 leading-[1.8]">
                  246/8 Soi Yothin Pattana<br />
                  Khlong Chan, Bang Kapi<br />
                  Bangkok 10240, Thailand
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30">
              © {new Date().getFullYear()} ØRIONS. All rights reserved.
            </p>
            <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/20">
              Tax ID: 0105568220629
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
