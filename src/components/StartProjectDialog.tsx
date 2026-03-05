import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface StartProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StartProjectDialog = ({ open, onOpenChange }: StartProjectDialogProps) => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLanguage();

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

  const inputClasses = "w-full bg-transparent border-b border-divider py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300";

  const copy = {
    title: { en: "Start a Project", th: "เริ่มโปรเจกต์" },
    desc: { en: "Tell us about your brand and what you're trying to build.", th: "เล่าให้เราฟังเกี่ยวกับแบรนด์และสิ่งที่คุณต้องการสร้าง" },
    name: { en: "Name", th: "ชื่อ" },
    email: { en: "Email", th: "อีเมล" },
    company: { en: "Company", th: "บริษัท" },
    projectType: { en: "Project Type", th: "ประเภทโปรเจกต์" },
    budget: { en: "Budget Range", th: "งบประมาณ" },
    message: { en: "Message", th: "ข้อความ" },
    send: { en: "Send Message", th: "ส่งข้อความ" },
    thanks: { en: "Thank you!", th: "ขอบคุณ!" },
    thanksDesc: { en: "We'll be in touch within 24 hours.", th: "เราจะติดต่อกลับภายใน 24 ชั่วโมง" },
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[540px] bg-background border-divider p-8 md:p-10">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {copy.title[lang]}
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground text-sm mt-2">
            {copy.desc[lang]}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="border border-divider p-10 text-center mt-4">
            <p className="font-display text-xl font-semibold text-foreground mb-3">{copy.thanks[lang]}</p>
            <p className="font-body text-sm text-muted-foreground">{copy.thanksDesc[lang]}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <input type="text" placeholder={copy.name[lang]} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} required />
            <input type="email" placeholder={copy.email[lang]} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} required />
            <input type="text" placeholder={copy.company[lang]} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClasses} />
            <input type="text" placeholder={copy.projectType[lang]} value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClasses} />
            <input type="text" placeholder={copy.budget[lang]} value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={inputClasses} />
            <textarea placeholder={copy.message[lang]} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} min-h-[100px] resize-none`} required />
            <button type="submit" className="w-full bg-foreground text-background py-4 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300">
              {copy.send[lang]}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StartProjectDialog;
