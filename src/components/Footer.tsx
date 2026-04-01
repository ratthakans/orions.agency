import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-16 border-t border-border/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-[20px] font-semibold tracking-[0.12em] text-foreground uppercase inline-block mb-3">
              ØRIONS
            </Link>
            <p className="font-body text-[13px] leading-[1.7] text-muted-foreground max-w-[280px]">
              A creative agency focused on clear communication, strong art direction, and high-quality film production.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", href: "/about" },
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-5">Contact</p>
            <div className="space-y-2">
              <a href="mailto:hello@orions.agency" className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors duration-300 block">
                hello@orions.agency
              </a>
              <a href="tel:+66923905464" className="font-mono text-[11px] text-muted-foreground/60 block">
                092 390 5464
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[10px] text-muted-foreground/40">
            © {new Date().getFullYear()} ØRIONS
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/30">
            Bangkok, Thailand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
