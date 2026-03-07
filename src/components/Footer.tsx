import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import ConstellationDivider from "./ConstellationDivider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="px-6 md:px-12 pt-0 pb-10">
      <ConstellationDivider className="mb-16" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-16 pb-12 border-b border-divider mb-8">
          <div>
            <p className="font-logo font-medium text-[18px] tracking-[0.08em] text-foreground uppercase mb-3">ØRIONS</p>
            <p className="font-body text-[13px] leading-[1.72] text-muted-foreground max-w-[220px] mb-5">
              {t("Guiding brands through the noise.", "นำทางแบรนด์ผ่านทุก noise")}
            </p>
            <div className="space-y-1.5">
              <a href="mailto:hello@orions.agency" className="font-mono text-[11px] tracking-[0.06em] text-muted-foreground block hover:text-foreground transition-colors">hello@orions.agency</a>
              <a href="tel:+66923905464" className="font-mono text-[11px] tracking-[0.06em] text-muted-foreground block hover:text-foreground transition-colors">+66 92 390 5464</a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-foreground/50 mb-5">Services</p>
            <div className="flex flex-col gap-2.5">
              {["Brand Strategy", "Visual Identity", "Content Production", "Social Media", "Monthly Retainer"].map((item) => (
                <Link key={item} to="/services" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">{item}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-foreground/50 mb-5">Company</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/ai-stack" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">AI Stack</Link>
              <Link to="/work" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">Work</Link>
              <Link to="/careers" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-foreground/50 mb-5">Connect</p>
            <div className="flex flex-col gap-2.5">
              <a href="https://facebook.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">Facebook</a>
              <a href="https://instagram.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              <a href="https://youtube.com/@orions-agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] tracking-[0.14em] text-muted-foreground">
            © {new Date().getFullYear()} ØRIONS. All rights reserved.
          </p>
          <p className="font-mono text-[9px] tracking-[0.14em] text-muted-foreground">
            Bangkok, Thailand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
