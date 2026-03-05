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
        {/* Hero header */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                Get in Touch
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Let's Build<br />
                <span className="text-accent-gradient">Something Great</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                Tell us about your brand and what you're trying to build. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
          {/* Form — takes 3 columns */}
          <AnimatedSection delay={0.1}>
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} required />
                  <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClasses} />
                  <input type="text" placeholder="Project Type" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClasses} />
                </div>
                <input type="text" placeholder="Budget Range" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={inputClasses} />
                <textarea placeholder="Tell us about your project *" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} min-h-[140px] resize-none`} required />
                <button
                  type="submit"
                  className="group/btn bg-foreground text-background px-10 py-4 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300 mt-4 flex items-center gap-2"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact info — takes 2 columns */}
          <AnimatedSection delay={0.2}>
            <div className="lg:col-span-2 space-y-0">
              {[
                { label: "Email", value: "hello@orions.agency", href: "mailto:hello@orions.agency" },
                { label: "Phone", value: "+66 92 390 5464", href: "tel:+66923905464" },
                { label: "Website", value: "orions.agency", href: "https://orions.agency" },
              ].map((item) => (
                <div key={item.label} className="border-b border-divider py-6 group">
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{item.label}</p>
                  <a href={item.href} className="font-body text-foreground group-hover:text-accent-warm transition-colors duration-300">
                    {item.value}
                  </a>
                </div>
              ))}
              <div className="pt-6">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Address</p>
                <p className="font-body text-foreground leading-relaxed">
                  246/8 Yothin Phatthana Soi<br />
                  Khlong Chan, Bang Kapi<br />
                  Bangkok 10240, Thailand
                </p>
              </div>

              {/* Map embed */}
              <div className="pt-8">
                <div className="w-full aspect-[4/3] border border-divider overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1!2d100.6!3d13.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ2JzQ4LjAiTiAxMDDCsDM2JzAwLjAiRQ!5e0!3m2!1sen!2sth!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
