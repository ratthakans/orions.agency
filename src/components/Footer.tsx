import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-6 md:px-12 py-24 border-t border-divider/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-16 pb-20 border-b border-divider/50 mb-10">
          <div>
            <p className="font-logo font-medium text-[12px] tracking-[0.08em] text-foreground uppercase mb-5">ØRIONS</p>
            <p className="font-body text-[14px] leading-[1.8] text-muted-foreground/35 max-w-[220px] mb-8">
              {t("Creative agency for brands that need stronger stories.", "Creative agency สำหรับแบรนด์ที่ต้องการเรื่องราวที่แข็งแกร่ง")}
            </p>
            <div className="space-y-2.5">
              <a href="mailto:hello@orions.agency" className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/25 block hover:text-foreground/60 transition-colors duration-500">hello@orions.agency</a>
              <a href="tel:+66923905464" className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/25 block hover:text-foreground/60 transition-colors duration-500">+66 92 390 5464</a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground/20 mb-7">Services</p>
            <div className="flex flex-col gap-3.5">
              {["Content", "Think", "Produce", "Develop"].map((item) => (
                <Link key={item} to="/services" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">{item}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground/20 mb-7">Company</p>
            <div className="flex flex-col gap-3.5">
              <Link to="/about" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">About</Link>
              <Link to="/work" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">Work</Link>
              <Link to="/industries" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">Industries</Link>
              <Link to="/studio" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">Studio</Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground/20 mb-7">Connect</p>
            <div className="flex flex-col gap-3.5">
              <a href="https://facebook.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">Facebook</a>
              <a href="https://instagram.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">Instagram</a>
              <a href="https://youtube.com/@orions-agency" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted-foreground/30 hover:text-foreground/60 transition-colors duration-500">YouTube</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/15">
            © {new Date().getFullYear()} ØRIONS
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/15">
            Bangkok, Thailand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
