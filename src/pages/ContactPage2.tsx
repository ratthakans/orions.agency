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

      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-6 md:px-12 pt-24 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.p {...fade(0.1)} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">Contact</motion.p>
          <motion.h1 {...fade(0.2)} className="font-display text-[clamp(32px,5.5vw,56px)] font-normal italic text-foreground leading-[1.1]">
            Start with a conversation.
          </motion.h1>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 md:py-28 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[680px] mx-auto">
          <div className="space-y-6">
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
          </div>

          <motion.div {...fadeIn(0.2)} className="mt-12 pt-10 border-t border-border/30">
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-3">Location</p>
            <p className="font-body text-[14px] leading-[1.8] text-muted-foreground">
              246/8 Soi Yothin Pattana<br />
              Khlong Chan, Bang Kapi<br />
              Bangkok 10240, Thailand
            </p>
          </motion.div>

          <motion.div {...fadeIn(0.25)} className="mt-12">
            <a
              href="mailto:hello@orions.agency"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-foreground border border-border px-8 py-3.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Get in touch <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
