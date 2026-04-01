import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const ContactPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero — larger CTA */}
      <section className="min-h-[50vh] flex items-end px-6 md:px-12 pt-24 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.p {...fade(0.1)} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">Contact</motion.p>
          <motion.h1 {...fade(0.2)} className="font-display text-[clamp(36px,7vw,80px)] font-normal italic text-foreground leading-[1.05]">
            Start with a<br />conversation.
          </motion.h1>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 md:py-28 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — CTA */}
          <div>
            <motion.p {...fadeIn(0.05)} className="font-body text-[17px] md:text-[19px] leading-[1.85] text-foreground/70 mb-10">
              Whether you're starting a new project, rethinking your brand, or looking for a long-term creative partner — we'd like to hear from you.
            </motion.p>
            <motion.div {...fadeIn(0.1)}>
              <a
                href="mailto:hello@orions.agency"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-foreground border border-border px-8 py-3.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                Get in touch <span>→</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeIn(0.2)} className="mt-12 flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Vimeo
              </a>
            </motion.div>
          </div>

          {/* Right — Contact details */}
          <div className="space-y-8">
            <motion.div {...fadeIn(0.05)}>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-2">Email</p>
              <a
                href="mailto:hello@orions.agency"
                className="font-body text-[18px] md:text-[20px] text-foreground hover:text-primary transition-colors duration-300"
              >
                hello@orions.agency
              </a>
            </motion.div>

            <motion.div {...fadeIn(0.1)}>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-2">Phone</p>
              <a href="tel:+66923905464" className="font-body text-[18px] md:text-[20px] text-foreground/75">
                092 390 5464
              </a>
            </motion.div>

            <motion.div {...fadeIn(0.15)}>
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-2">Web</p>
              <a
                href="https://orions.agency"
                className="font-body text-[18px] md:text-[20px] text-foreground/75 hover:text-foreground transition-colors duration-300"
              >
                orions.agency
              </a>
            </motion.div>

            <motion.div {...fadeIn(0.2)} className="pt-4 border-t border-border/30">
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-3">Location</p>
              <p className="font-body text-[14px] leading-[1.8] text-muted-foreground">
                246/8 Soi Yothin Pattana<br />
                Khlong Chan, Bang Kapi<br />
                Bangkok 10240, Thailand
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
