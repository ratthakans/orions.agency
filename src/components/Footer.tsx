import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-logo text-[12px] font-medium tracking-[0.08em] text-foreground uppercase">ØRIONS</Link>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40">Creative Agency</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@orions.agency" className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-300">hello@orions.agency</a>
            <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30">Bangkok, Thailand</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Process", href: "/process" },
                { label: "Studio", href: "/studio" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/30">
              © {new Date().getFullYear()} ØRIONS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
