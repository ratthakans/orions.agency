import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface StartProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StartProjectDialog = ({ open, onOpenChange }: StartProjectDialogProps) => {
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

  const inputClasses = "w-full bg-transparent border-b border-divider py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-violet transition-colors duration-300";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[540px] bg-background border-divider p-8 md:p-10">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Start a Project
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground text-sm mt-2">
            Tell us about your brand and what you're trying to build.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="border border-divider p-10 text-center mt-4">
            <p className="font-display text-xl font-semibold text-foreground mb-3">Thank you!</p>
            <p className="font-body text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} required />
            <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClasses} />
            <input type="text" placeholder="Project Type" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClasses} />
            <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={`${inputClasses} appearance-none cursor-pointer`}>
              <option value="" className="bg-background">Budget Range</option>
              <option value="< ฿100K" className="bg-background">Under ฿100,000</option>
              <option value="฿100K–300K" className="bg-background">฿100,000 – ฿300,000</option>
              <option value="฿300K–500K" className="bg-background">฿300,000 – ฿500,000</option>
              <option value="฿500K–1M" className="bg-background">฿500,000 – ฿1,000,000</option>
              <option value="> ฿1M" className="bg-background">฿1,000,000+</option>
            </select>
            <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} min-h-[100px] resize-none`} required />
            <button type="submit" className="w-full bg-accent-gradient text-white py-4 text-sm font-display font-medium tracking-wide hover:opacity-90 transition-all duration-300">
              Send Message
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StartProjectDialog;
