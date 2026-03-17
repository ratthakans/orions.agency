import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface StartProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StartProjectDialog = ({ open, onOpenChange }: StartProjectDialogProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (open: boolean) => {
    if (!open) setSubmitted(false);
    onOpenChange(open);
  };

  const inputClass = "w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/30 focus:outline-none border-b border-border focus:border-foreground/50 transition-colors duration-300 pb-3";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto bg-background border-border p-0 gap-0">
        <DialogHeader className="p-8 pb-0">
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-accent-gradient mb-4">New Project</p>
          <DialogTitle className="font-display text-[36px] tracking-[0.03em] leading-none text-foreground mb-2">
            {t("Start a Project", "เริ่ม Project")}
          </DialogTitle>
          <p className="font-body text-[14px] text-muted-foreground leading-relaxed">
            {t("Tell us about your brand.", "เล่าให้เราฟังเกี่ยวกับแบรนด์")}
          </p>
        </DialogHeader>

        <div className="p-8 pt-6">
          {submitted ? (
            <div className="py-12 text-center">
              <p className="font-display text-[28px] text-foreground mb-2">{t("Thank you.", "ขอบคุณครับ")}</p>
              <p className="font-body text-[13px] text-muted-foreground">{t("We'll be in touch within 24 hours.", "เราจะติดต่อกลับภายใน 24 ชั่วโมง")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">{t("Name *", "ชื่อ *")}</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder={t("Your full name", "ชื่อ-นามสกุล") as string} required />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="your@email.com" required />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">{t("Company", "บริษัท")}</label>
                <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder={t("Your company name", "ชื่อบริษัท") as string} />
              </div>
              <div>
                <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">{t("Project Type", "ประเภท Project")}</label>
                <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-divider focus:border-foreground/30 transition-colors duration-500 pb-2 appearance-none cursor-pointer">
                  <option value="" className="bg-background">{t("Select", "เลือก")}</option>
                  <option value="content" className="bg-background">Content</option>
                  <option value="think" className="bg-background">Think (Strategy)</option>
                  <option value="produce" className="bg-background">Produce (Film)</option>
                  <option value="develop" className="bg-background">Develop (Brand)</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">{t("Message *", "ข้อความ *")}</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/30 focus:outline-none min-h-[80px] resize-none border-b border-divider focus:border-foreground/30 transition-colors duration-500 pb-2" placeholder={t("Tell us about your project...", "เล่าเกี่ยวกับ project ของคุณ...") as string} required />
              </div>
              <button type="submit" className="bg-foreground text-background px-8 py-3 font-mono text-[10px] tracking-[0.16em] uppercase hover:opacity-85 transition-opacity">
                {t("Send", "ส่ง")}
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartProjectDialog;
