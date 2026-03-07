import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
    if (!open) {
      setSubmitted(false);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-divider p-0 gap-0">
        <DialogHeader className="p-8 pb-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[16px] animate-twinkle">✧</span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-gradient">New Project</span>
          </div>
          <DialogTitle className="font-display text-[40px] tracking-[0.03em] leading-none text-foreground mb-2">
            {t("Start a Project", "เริ่ม Project")}
          </DialogTitle>
          <p className="font-body text-[15px] text-muted-foreground leading-relaxed">
            {t("Tell us about your brand and what you're trying to build.", "เล่าให้เราฟังเกี่ยวกับแบรนด์และสิ่งที่อยากสร้าง")}
          </p>
        </DialogHeader>

        <div className="p-8 space-y-0">
          {submitted ? (
            <div className="border border-divider p-10 text-center">
              <p className="font-display text-[30px] tracking-[0.03em] text-foreground mb-3">{t("Thank you!", "ขอบคุณครับ!")}</p>
              <p className="font-body text-[14px] text-muted-foreground">{t("We'll be in touch within 24 hours.", "เราจะติดต่อกลับภายใน 24 ชั่วโมง")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="border-t border-divider py-5">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Name *", "ชื่อ *")}</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Your full name", "ชื่อ-นามสกุล") as string} required />
              </div>
              <div className="border-t border-divider py-5">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder="your@email.com" required />
              </div>
              <div className="border-t border-divider py-5">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Company", "บริษัท")}</label>
                <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Your company name", "ชื่อบริษัท") as string} />
              </div>
              <div className="border-t border-divider py-5">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Project Type", "ประเภท Project")}</label>
                <input type="text" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("e.g. Brand Identity, Campaign, Content", "เช่น Brand Identity, Campaign, Content") as string} />
              </div>
              <div className="border-t border-divider py-5">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">Budget Range</label>
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1 appearance-none cursor-pointer">
                  <option value="" className="bg-background">{t("Select a range", "เลือกช่วงงบประมาณ")}</option>
                  <option value="< ฿100K" className="bg-background">Under ฿100,000</option>
                  <option value="฿100K–300K" className="bg-background">฿100,000 – ฿300,000</option>
                  <option value="฿300K–500K" className="bg-background">฿300,000 – ฿500,000</option>
                  <option value="฿500K–1M" className="bg-background">฿500,000 – ฿1,000,000</option>
                  <option value="> ฿1M" className="bg-background">฿1,000,000+</option>
                </select>
              </div>
              <div className="border-t border-divider py-5">
                <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Message *", "ข้อความ *")}</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none min-h-[100px] resize-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Tell us about your project...", "เล่าเกี่ยวกับ project ของคุณ...") as string} required />
              </div>
              <div className="border-t border-divider pt-8">
                <button type="submit" className="bg-accent-gradient text-white px-10 py-3.5 font-mono text-[11px] tracking-[0.1em] uppercase hover:opacity-90 transition-all duration-300 rounded-sm">
                  {t("Send Message →", "ส่งข้อความ →")}
                </button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartProjectDialog;
