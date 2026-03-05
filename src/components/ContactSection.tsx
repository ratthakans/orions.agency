import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses = "w-full bg-transparent border-b border-divider py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300";

  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Start a Project
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
            Tell us about your brand and what you're trying to build.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} required />
              <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} required />
              <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClasses} />
              <input type="text" placeholder="Project Type" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClasses} />
              <input type="text" placeholder="Budget Range" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={inputClasses} />
              <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} min-h-[120px] resize-none`} required />
              <button
                type="submit"
                className="bg-foreground text-background px-10 py-4 text-sm font-display font-medium tracking-wide hover:bg-muted-foreground transition-colors duration-300 mt-4"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-10">
              <div>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Website</p>
                <p className="font-body text-foreground">orions.agency</p>
              </div>
              <div>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Email</p>
                <a href="mailto:hello@orions.agency" className="font-body text-foreground hover:text-accent-warm transition-colors">
                  hello@orions.agency
                </a>
              </div>
              <div>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Phone</p>
                <a href="tel:+66923905464" className="font-body text-foreground hover:text-accent-warm transition-colors">
                  +66 92 390 5464
                </a>
              </div>
              <div>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Address</p>
                <p className="font-body text-foreground leading-relaxed">
                  246/8 Yothin Phatthana Soi<br />
                  Khlong Chan, Bang Kapi<br />
                  Bangkok 10240<br />
                  Thailand
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
