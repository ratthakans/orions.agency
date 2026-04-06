import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\n${formData.message}`
    );
    window.location.href = `mailto:hello@orions.agency?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Contact | ØRIONS"
        description="Let's make your brand easier to remember. Get in touch with ØRIONS creative agency in Bangkok."
        path="/contact"
        keywords="contact creative agency bangkok, hire creative agency, brand consultation"
      />
      <Navbar />

      <div className="pt-20">
        <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 md:px-12 pt-24 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Contact
              </p>
              <h1 className="font-display text-[clamp(36px,5vw,72px)] leading-[1] tracking-[0.01em] text-foreground mb-6">
                LET'S MAKE YOUR BRAND<br />
                <span className="text-accent-gradient">EASIER TO REMEMBER.</span>
              </h1>
              <p className="font-body text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-lg mx-auto">
                Tell us about your brand — we'll start with a conversation.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <form onSubmit={handleSubmit} className="mt-12 space-y-6 text-left max-w-md mx-auto">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-[14px] text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-accent-warm/50 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-[14px] text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-accent-warm/50 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-[14px] text-foreground focus:outline-none focus:border-accent-warm/50 transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="bg-background">Select a service</option>
                    <option value="Strategy" className="bg-background">Strategy</option>
                    <option value="Communication Design" className="bg-background">Communication Design</option>
                    <option value="Film & Production" className="bg-background">Film & Production</option>
                    <option value="Retainer" className="bg-background">Retainer</option>
                    <option value="Not sure yet" className="bg-background">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-border px-4 py-3 font-body text-[14px] text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-accent-warm/50 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
                >
                  Start your first project
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="mt-16 pt-12 border-t border-border/50 space-y-6">
                <a
                  href="mailto:hello@orions.agency"
                  className="font-mono text-[16px] md:text-[18px] tracking-[0.05em] text-foreground hover:text-accent-warm transition-colors duration-300 block"
                >
                  hello@orions.agency
                </a>
                <a
                  href="tel:+66923905464"
                  className="font-mono text-[16px] md:text-[18px] tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 block"
                >
                  092 390 5464
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="mt-12 pt-8 border-t border-border/50">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-4">Location</p>
                <p className="font-mono text-[12px] tracking-[0.05em] text-muted-foreground/50 leading-[2]">
                  246/8 Soi Yothin Pattana<br />
                  Khlong Chan, Bang Kapi<br />
                  Bangkok 10240, Thailand
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
