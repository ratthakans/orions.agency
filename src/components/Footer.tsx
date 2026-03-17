import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-6 md:px-12 py-20 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-16 pb-16 border-b border-divider mb-8">
          <div>
            <p className="font-logo font-medium text-[16px] tracking-[0.1em] text-foreground uppercase mb-4">ØRIONS</p>
            <p className="font-body text-[13px] leading-[1.72] text-muted-foreground max-w-[220px] mb-6">
              {t("Creative agency for brands that need stronger stories.", "Creative agency สำหรับแบรนด์ที่ต้องการเรื่องราวที่แข็งแกร่ง")}
            </p>
            <div className="space-y-2">
              <a href="mailto:hello@orions.agency" className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground block hover:text-foreground transition-colors duration-500">hello@orions.agency</a>
              <a href="tel:+66923905464" className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground block hover:text-foreground transition-colors duration-500">+66 92 390 5464</a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-6">Services</p>
            <div className="flex flex-col gap-3">
              {["Content", "Think", "Produce", "Develop"].map((item) => (
                <Link key={item} to="/services" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">{item}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-6">Company</p>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">About</Link>
              <Link to="/work" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">Work</Link>
              <Link to="/industries" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">Industries</Link>
              <Link to="/studio" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">Studio</Link>
              <Link to="/process" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">Process</Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-6">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="https://facebook.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">Facebook</a>
              <a href="https://instagram.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">Instagram</a>
              <a href="https://youtube.com/@orions-agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500">YouTube</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/50">
            © {new Date().getFullYear()} ØRIONS. All rights reserved.
          </p>
          <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground/50">
            Bangkok, Thailand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
