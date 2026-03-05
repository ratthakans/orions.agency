import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/orions.agency" },
  { label: "LinkedIn", href: "https://linkedin.com/company/orions-agency" },
  { label: "Behance", href: "https://behance.net/orions-agency" },
];

const Footer = () => {
  return (
    <footer className="border-t border-divider relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-logo text-[15vw] md:text-[12vw] font-medium tracking-tight text-stroke-lg opacity-[0.03]">
          ØRIONS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="font-logo text-2xl font-medium text-foreground mb-3">ØRIONS</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs whitespace-pre-line">
              {"Meaning-driven creative agency.\nNoiseless, More Meaning."}
            </p>
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-accent-warm transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Contact
            </p>
            <div className="flex flex-col gap-3 font-body text-sm text-muted-foreground">
              <a href="mailto:hello@orions.agency" className="hover:text-accent-warm transition-colors duration-300">
                hello@orions.agency
              </a>
              <a href="tel:+66923905464" className="hover:text-accent-warm transition-colors duration-300">
                +66 92 390 5464
              </a>
              <p className="leading-relaxed">
                246/8 Soi Yothinpattana 3<br />
                Khlong Chan, Bang Kapi<br />
                Bangkok 10240, Thailand
              </p>
            </div>

            <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mt-8 mb-4">
              Follow Us
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-foreground hover:text-accent-warm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-divider py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} ØRIONS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://orions.agency" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              orions.agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
