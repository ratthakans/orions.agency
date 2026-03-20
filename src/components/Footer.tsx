import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 md:gap-16 pb-16 md:pb-20 border-b border-border mb-10">
          <div>
            <p className="font-logo font-medium text-[13px] tracking-[0.08em] text-foreground uppercase mb-5">ØRIONS</p>
            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-[320px] mb-8">
              {t("An idea-driven creative agency. We create ideas, stories, and campaigns that make people care, remember, and act.", "Idea-driven creative agency เราสร้างไอเดีย เรื่องราว และแคมเปญที่ทำให้คนสนใจ จดจำ และลงมือทำ")}
            </p>
            <div className="space-y-2.5 mb-8">
              <a href="mailto:hello@orions.agency" className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground block hover:text-foreground transition-colors duration-300">hello@orions.agency</a>
              <a href="tel:+66923905464" className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground block hover:text-foreground transition-colors duration-300">+66 92 390 5464</a>
            </div>
            <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/50">
              246/8 Soi Yothinpattana, Khlong Chan, Bang Kapi, Bangkok 10240
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-7">Services</p>
            <div className="flex flex-col gap-3.5">
              <Link to="/services" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Creative Transformation</Link>
              <Link to="/services" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Creative Communication</Link>
              <Link to="/services" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Film & Production</Link>
              <Link to="/services" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Creative Partner</Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-7">Company</p>
            <div className="flex flex-col gap-3.5">
              <Link to="/about" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">About</Link>
              <Link to="/work" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Work</Link>
              <Link to="/studio" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Studio</Link>
              <Link to="/package" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Industries</Link>
              <Link to="/contact" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Contact</Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-7">Connect</p>
            <div className="flex flex-col gap-3.5">
              <a href="https://facebook.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Facebook</a>
              <a href="https://instagram.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">Instagram</a>
              <a href="https://youtube.com/@orions-agency" target="_blank" rel="noopener noreferrer" className="font-body text-[15px] text-foreground/60 hover:text-foreground transition-colors duration-300">YouTube</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/50">
            © {new Date().getFullYear()} ØRIONS
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/50">
            Bangkok, Thailand · Serving Southeast Asia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
