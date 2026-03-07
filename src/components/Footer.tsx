import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="border-t-2 glow-border px-6 md:px-12 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-16 pb-12 border-b border-divider mb-8">
          <div>
            <p className="font-display text-[26px] tracking-[0.18em] text-foreground mb-3">ØRIONS</p>
            <p className="font-body text-[13px] leading-[1.72] text-muted-foreground max-w-[220px] mb-5">
              {t("AI-Native Creative Agency.\nHuman craft. Machine velocity.", "เอเจนซี่ครีเอทีฟ AI-Native\nงานฝีมือมนุษย์ ความเร็วเครื่องจักร")}
            </p>
            <div className="space-y-1.5">
              <a href="mailto:hello@orions.agency" className="font-mono text-[11px] tracking-[0.06em] text-accent-violet block hover:text-foreground transition-colors">hello@orions.agency</a>
              <a href="tel:+66923905464" className="font-mono text-[11px] tracking-[0.06em] text-accent-violet block hover:text-foreground transition-colors">+66 92 390 5464</a>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-violet mb-5">{t("Services", "บริการ")}</p>
            <div className="flex flex-col gap-2.5">
              {[
                { en: "Brand Strategy", th: "กลยุทธ์แบรนด์" },
                { en: "Visual Identity", th: "เอกลักษณ์ภาพ" },
                { en: "Content Production", th: "ผลิตคอนเทนต์" },
                { en: "Social Media", th: "โซเชียลมีเดีย" },
                { en: "Monthly Retainer", th: "แพ็กเกจรายเดือน" },
              ].map((item) => (
                <Link key={item.en} to="/services" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">{item[lang]}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-violet mb-5">{t("Company", "บริษัท")}</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">{t("About", "เกี่ยวกับเรา")}</Link>
              <Link to="/ai-stack" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">{t("AI Stack", "เครื่องมือ AI")}</Link>
              <Link to="/work" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">{t("Work", "ผลงาน")}</Link>
              <Link to="/careers" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">{t("Careers", "ร่วมงาน")}</Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-violet mb-5">{t("Connect", "ติดต่อ")}</p>
            <div className="flex flex-col gap-2.5">
              <a href="https://instagram.com/orions.agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              <a href="https://linkedin.com/company/orions-agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://behance.net/orions-agency" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors">Behance</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] tracking-[0.14em] text-muted-foreground">
            © {new Date().getFullYear()} ØRIONS. All rights reserved.
          </p>
          <p className="font-mono text-[9px] tracking-[0.14em] text-muted-foreground">
            <span className="text-accent-violet">◎</span> {t("Bangkok, Thailand", "กรุงเทพฯ ประเทศไทย")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
