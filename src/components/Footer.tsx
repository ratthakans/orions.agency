import { Link, useLocation } from "react-router-dom";

const darkPages = ["/work"];

const Footer = () => {
  const location = useLocation();
  const isDark = darkPages.includes(location.pathname);

  const textColor = isDark ? "text-dark-foreground" : "text-foreground";
  const mutedColor = isDark ? "text-dark-muted" : "text-muted-foreground";
  const borderColor = isDark ? "border-dark-border" : "border-border";

  return (
    <footer className={`px-6 md:px-12 py-16 border-t ${borderColor}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className={`font-display text-[20px] font-semibold tracking-[0.12em] ${textColor} uppercase inline-block mb-3`}>
              ØRIONS
            </Link>
            <p className={`font-body text-[13px] leading-[1.7] ${mutedColor} max-w-[280px]`}>
              A creative agency focused on clear communication, strong art direction, and high-quality film production.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className={`font-mono text-[10px] tracking-[0.15em] uppercase ${mutedColor}/50 mb-5`}>Navigate</p>
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
                  className={`font-mono text-[11px] tracking-[0.06em] uppercase ${mutedColor} hover:${textColor} transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className={`font-mono text-[10px] tracking-[0.15em] uppercase ${mutedColor}/50 mb-5`}>Contact</p>
            <div className="space-y-2">
              <a href="mailto:hello@orions.agency" className={`font-mono text-[11px] ${mutedColor} hover:${textColor} transition-colors duration-300 block`}>
                hello@orions.agency
              </a>
              <a href="tel:+66923905464" className={`font-mono text-[11px] ${mutedColor}/60 block`}>
                092 390 5464
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-14 pt-6 border-t ${borderColor}/40 flex flex-col sm:flex-row justify-between items-center gap-3`}>
          <p className={`font-mono text-[10px] ${mutedColor}/40`}>
            © {new Date().getFullYear()} ØRIONS
          </p>
          <p className={`font-mono text-[10px] ${mutedColor}/30`}>
            Bangkok, Thailand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
