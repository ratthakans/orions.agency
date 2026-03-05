import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    num: "01",
    title: "Brand Direction",
    subtitle: "Define the brand clearly.",
    scope: ["Brand Strategy", "Brand Positioning", "Rebranding", "Messaging & Narrative Development", "Go-to-Market Direction"],
    outcome: "A clear brand story and communication foundation.",
  },
  {
    num: "02",
    title: "Campaign & Narrative Content",
    subtitle: "Create work people remember.",
    scope: ["Campaign Concepts", "Brand Films & Video", "Photography", "Editorial Content", "Social Content Series", "Founder Storytelling"],
    outcome: "Memorable campaigns and meaningful content.",
  },
  {
    num: "03",
    title: "Digital Experience",
    subtitle: "Build the brand online.",
    scope: ["Narrative Websites", "Landing Pages", "UX/UI Direction", "Campaign Microsites", "Conversion Architecture"],
    outcome: "A strong digital presence that supports brand growth.",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
            What we do
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Core Services
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
            These services focus on defining direction and building the key communication assets for the brand.
          </p>
        </AnimatedSection>

        <div className="space-y-0">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <div className="border-t border-divider">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 md:py-10 flex items-start md:items-center justify-between text-left group"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="font-display text-sm text-muted-foreground group-hover:text-accent-warm transition-colors duration-300">{s.num}</span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm mt-1">{s.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className={`font-display text-2xl mt-1 md:mt-0 transition-all duration-300 ${
                      openIndex === i ? "text-accent-warm rotate-45" : "text-muted-foreground rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-12 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Scope</p>
                          <ul className="space-y-2">
                            {s.scope.map((item) => (
                              <li key={item} className="font-body text-sm text-secondary-foreground">{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Outcome</p>
                          <p className="font-body text-sm text-secondary-foreground leading-relaxed">{s.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-divider" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
