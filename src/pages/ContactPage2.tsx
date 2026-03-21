import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";

const ContactPage2 = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Contact — ØRIONS"
        description="Ready to change how people see your brand? Let's talk. Bangkok-based creative agency."
        path="/contact"
      />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-4 sm:px-6 md:px-12 pb-16 md:pb-24 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8"
          >
            <span className="text-accent-warm mr-2">✦</span> Let's Talk
          </motion.p>
          <TextReveal className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground">
            LET'S TALK.
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground mt-8 max-w-xl"
          >
            If you want your brand to be seen differently, we should talk.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-lg mx-auto">
          {submitted ? (
            <AnimatedSection>
              <div className="py-16 text-center">
                <p className="font-display text-[40px] text-accent-gradient mb-4">THANK YOU.</p>
                <p className="font-body text-[16px] text-muted-foreground">We'll be in touch soon.</p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-3">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-[15px] text-foreground focus:outline-none focus:border-accent-warm transition-colors duration-300 placeholder:text-muted-foreground/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-3">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-[15px] text-foreground focus:outline-none focus:border-accent-warm transition-colors duration-300 placeholder:text-muted-foreground/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-3">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-[15px] text-foreground focus:outline-none focus:border-accent-warm transition-colors duration-300 resize-none placeholder:text-muted-foreground/30"
                    placeholder="Tell us about your project"
                  />
                </div>
                <button
                  type="submit"
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300 w-full mt-4"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.4}>
            <div className="mt-20 text-center">
              <a
                href="mailto:hello@orions.agency"
                className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
                hello@orions.agency
              </a>
              <div className="mt-6 flex items-center justify-center gap-6">
                {["Facebook", "Instagram", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40 hover:text-accent-warm transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage2;
