import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-divider relative overflow-hidden">
    {/* Large watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span className="font-logo text-[15vw] md:text-[12vw] font-medium tracking-tight text-stroke-lg opacity-[0.03]">
        ØRIONS
      </span>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      {/* Main footer */}
      <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand */}
        <div>
          <p className="font-logo text-2xl font-medium text-foreground mb-3">ØRIONS</p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
            Meaning-driven creative agency.<br />
            Noiseless, More Meaning.
          </p>
        </div>

        {/* Navigation */}
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

        {/* Contact */}
        <div>
          <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
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
              Bangkok, Thailand
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
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

export default Footer;
