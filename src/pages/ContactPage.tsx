import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ContactPage = () => {
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
        {/* Hero */}
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
              <div className="space-y-6 mt-12">
                <a
                  href="mailto:hello@orions.agency"
                  className="font-mono text-[18px] md:text-[22px] tracking-[0.05em] text-foreground hover:text-accent-warm transition-colors duration-300 block"
                >
                  hello@orions.agency
                </a>
                <a
                  href="tel:+66923905464"
                  className="font-mono text-[18px] md:text-[22px] tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 block"
                >
                  092 390 5464
                </a>
                <p className="font-mono text-[16px] md:text-[18px] tracking-[0.05em] text-muted-foreground/50">
                  orions.agency
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="mt-16 pt-12 border-t border-border/50">
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
