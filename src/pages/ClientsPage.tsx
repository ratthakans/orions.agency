import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const ClientsPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Who We Work With — ØRIONS"
        description="We work with brands that want to unlock new growth through creative thinking. Tech, hospitality, lifestyle, entertainment."
        path="/clients"
      />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-end px-4 sm:px-6 md:px-12 pb-16 md:pb-24 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8"
          >
            <span className="text-accent-warm mr-2">✦</span> Who We Work With
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground"
          >
            OUR CLIENTS.
          </motion.h1>
        </div>
      </section>

      {/* Two columns */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">
          <AnimatedSection>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-10">Ideal Clients</p>
              <ul className="space-y-8">
                {[
                  "Brands that want to unlock new growth",
                  "Brands that want to stand out from the market",
                  "Brands that don't want to compete on price",
                  "Teams open to creative thinking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-accent-warm mt-2 shrink-0" />
                    <span className="font-body text-[16px] leading-[1.7] text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-10">Industry Focus</p>
              <ul className="space-y-8">
                {[
                  "Tech / Startup",
                  "Hospitality",
                  "Lifestyle / Experience",
                  "Entertainment / Event",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-muted-foreground/40 mt-2 shrink-0" />
                    <span className="font-body text-[16px] leading-[1.7] text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ClientsPage;
