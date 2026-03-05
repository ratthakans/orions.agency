import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">Get in Touch</p>
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

        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider mb-20">
            <div className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors duration-300">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</p>
              <a href="mailto:hello@orions.agency" className="font-body text-foreground group-hover:text-accent-warm transition-colors duration-300">hello@orions.agency →</a>
            </div>
            <div className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors duration-300">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Phone</p>
              <a href="tel:+66923905464" className="font-body text-foreground group-hover:text-accent-warm transition-colors duration-300">+66 92 390 5464 →</a>
            </div>
            <div className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors duration-300">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Location</p>
              <a href="https://maps.app.goo.gl/MCY3ywNZBYofY49Q9" target="_blank" rel="noopener noreferrer" className="font-body text-foreground group-hover:text-accent-warm transition-colors duration-300">246/8 Soi Yothinpattana 3, Bang Kapi →</a>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-10">Send a Message</p>
              {submitted ? (
                <div className="border border-divider p-10 text-center">
                  <p className="font-display text-xl font-semibold text-foreground mb-3">Thank you</p>
                  <p className="font-body text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="border-t border-divider py-5">
                    <label className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Name *</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-accent-warm transition-colors duration-300 pb-1" placeholder="Your full name" required />
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Email *</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-accent-warm transition-colors duration-300 pb-1" placeholder="your@email.com" required />
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Company</label>
                    <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-accent-warm transition-colors duration-300 pb-1" placeholder="Your company name" />
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Budget Range</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-transparent text-sm font-body text-foreground focus:outline-none border-b border-transparent focus:border-accent-warm transition-colors duration-300 pb-1 appearance-none cursor-pointer">
                      <option value="" className="bg-background">Select a range</option>
                      <option value="< ฿100K" className="bg-background">Under ฿100,000</option>
                      <option value="฿100K–300K" className="bg-background">฿100,000 – ฿300,000</option>
                      <option value="฿300K–500K" className="bg-background">฿300,000 – ฿500,000</option>
                      <option value="฿500K–1M" className="bg-background">฿500,000 – ฿1,000,000</option>
                      <option value="> ฿1M" className="bg-background">฿1,000,000+</option>
                    </select>
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Message *</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none min-h-[100px] resize-none border-b border-transparent focus:border-accent-warm transition-colors duration-300 pb-1" placeholder="Tell us about your project, goals, and timeline..." required />
                  </div>
                  <div className="border-t border-divider pt-8">
                    <button type="submit" className="group/btn bg-foreground text-background px-10 py-4 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300 flex items-center gap-2">
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                        <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-10">Visit Us</p>
              <div className="w-full aspect-square border border-divider overflow-hidden mb-8">
                <iframe
                  src="https://maps.google.com/maps?q=246/8+Soi+Yothinpattana+3+Khlong+Chan+Bang+Kapi+Bangkok+10240&output=embed"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="ØRIONS Office Location - 246/8 Soi Yothinpattana 3, Bang Kapi, Bangkok"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-3">
                <p className="font-body text-foreground leading-relaxed">
                  246/8 Soi Yothinpattana 3<br />Khlong Chan, Bang Kapi<br />Bangkok 10240, Thailand
                </p>
                <p className="font-body text-muted-foreground text-sm">Monday – Friday, 10:00 – 19:00</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
