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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  const inputClasses = "w-full bg-transparent border-b border-divider py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] bg-background border-divider p-8 md:p-10">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Start a Project
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground text-sm mt-2">
            Tell us about your brand and what you're trying to build.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} required />
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} required />
          <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClasses} />
          <input type="text" placeholder="Project Type" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClasses} />
          <input type="text" placeholder="Budget Range" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={inputClasses} />
          <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} min-h-[100px] resize-none`} required />
          <button type="submit" className="w-full bg-foreground text-background py-4 text-sm font-display font-medium tracking-wide hover:bg-muted-foreground transition-colors duration-300">
            Send Message
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StartProjectDialog;
