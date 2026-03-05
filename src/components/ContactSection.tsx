import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header — same 2-col layout as Careers */}
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

        {/* Contact info bar — same pattern as Careers info bar */}
        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider mb-20">
            <div className="bg-background p-6 md:p-8">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</p>
              <a href="mailto:hello@orions.agency" className="font-body text-foreground hover:text-accent-warm transition-colors duration-300">
                hello@orions.agency →
              </a>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Phone</p>
              <a href="tel:+66923905464" className="font-body text-foreground hover:text-accent-warm transition-colors duration-300">
                +66 92 390 5464 →
              </a>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Location</p>
              <a href="https://maps.app.goo.gl/w2vrRH9Y4j1NwS9J8" target="_blank" rel="noopener noreferrer" className="font-body text-foreground hover:text-accent-warm transition-colors duration-300">
                TV Burabha, Ram Inthra →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Form — full width, clean layout */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-8">
              Send a Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="border-t border-divider">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px">
                  <div className="py-6 md:pr-8">
                    <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="py-6 md:pl-8 border-t md:border-t-0 border-divider">
                    <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-divider py-6">
                <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div className="border-t border-divider py-6">
                <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none min-h-[120px] resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                />
              </div>

              <div className="border-t border-divider pt-8">
                <button
                  type="submit"
                  className="group/btn bg-foreground text-background px-10 py-4 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>

        {/* Map */}
        <AnimatedSection delay={0.2}>
          <div className="mt-24">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-8">
              Visit Us
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="font-body text-foreground leading-relaxed mb-4">
                  TV Burabha Building<br />
                  Ram Inthra Expressway<br />
                  Bangkok, Thailand
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  Monday – Friday, 10:00 – 19:00
                </p>
              </div>
              <div className="w-full aspect-[16/9] border border-divider overflow-hidden">
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
    </section>
  );
};

export default ContactSection;
