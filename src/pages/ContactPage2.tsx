import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const serviceOptions = [
  "Creative Transformation",
  "Signature Campaign",
  "Production",
  "Event / Activation",
  "Digital Experience",
  "Conversation System",
  "Creative Partnership (Retainer)",
  "Content System (Retainer)",
  "Channel Management (Retainer)",
  "Other",
];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://orions.agency/contact" },
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "ØRIONS",
      url: "https://orions.agency/contact",
      telephone: "+66-92-390-5464",
      email: "hello@orions.agency",
      address: {
        "@type": "PostalAddress",
        streetAddress: "246/8 Soi Yothinpattana",
        addressLocality: "Khlong Chan, Bang Kapi",
        addressRegion: "Bangkok",
        postalCode: "10240",
        addressCountry: "TH",
      },
    },
  ],
};

const ContactPage2 = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.service || "General"}] Project inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`);
    window.location.href = `mailto:hello@orions.agency?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Contact — ØRIONS"
        description="Ready to change how people see your brand? Let's talk. Bangkok-based creative agency."
        path="/contact"
        schema={contactSchema}
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
            <span className="text-accent-warm mr-2">✦</span> Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground"
          >
            LET'S <span className="text-accent-gradient">TALK.</span>
          </motion.h1>
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

      {/* Two-column: Info + Form */}
      <section className="py-16 md:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — Contact Info */}
            <AnimatedSection>
              <div className="space-y-12">
                {/* Email */}
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-3">Email</p>
                  <a href="mailto:hello@orions.agency" className="font-display text-[24px] md:text-[32px] text-foreground hover:text-accent-warm transition-colors duration-300 break-all">
                    hello@orions.agency
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-3">Phone</p>
                  <a href="tel:0923905464" className="font-display text-[24px] md:text-[32px] text-foreground hover:text-accent-warm transition-colors duration-300">
                    092-390-5464
                  </a>
                </div>

                {/* Office */}
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-3">Office</p>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    246/8 Soi Yothin Pattana<br />
                    Khlong Chan, Bang Kapi<br />
                    Bangkok 10240, Thailand
                  </p>
                </div>

                {/* Tax */}
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-3">Tax ID</p>
                  <p className="font-mono text-[14px] text-muted-foreground">0105568220629</p>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-8 pt-4">
                  {[
                    { name: "Facebook", url: "https://facebook.com/orionsagency" },
                    { name: "Instagram", url: "https://instagram.com/orionsagency" },
                    { name: "YouTube", url: "https://youtube.com/@orionsagency" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 hover:text-accent-warm transition-colors duration-300"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection delay={0.2}>
              {submitted ? (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <p className="font-display text-[48px] text-accent-gradient mb-4">THANK YOU.</p>
                    <p className="font-body text-[16px] text-muted-foreground">We'll be in touch soon.</p>
                  </div>
                </div>
              ) : (
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
                    <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-3">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-[15px] text-foreground focus:outline-none focus:border-accent-warm transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-background text-muted-foreground">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-background text-foreground">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 block mb-3">Message</label>
                    <textarea
                      required
                      rows={5}
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
                    Send Message →
                  </button>
                </form>
              )}
            </AnimatedSection>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage2;
