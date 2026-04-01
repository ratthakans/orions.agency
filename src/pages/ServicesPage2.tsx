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

const services = [
  {
    num: "01",
    title: "Strategy",
    desc: "Define what your brand should say, who it should speak to, and how it should be understood.",
    items: ["Brand positioning & narrative", "Communication framework", "Campaign direction"],
  },
  {
    num: "02",
    title: "Communication Design",
    desc: "Shape strategy into clear ideas, visual direction, and systems people connect with.",
    items: ["Campaign concepts & creative direction", "Messaging & content systems", "Touchpoint structure"],
  },
  {
    num: "03",
    title: "Film & Production",
    desc: "Execute with attention to detail — from concept to final delivery.",
    items: ["TVC, commercials & branded content", "Documentary-style film", "Photo & video production"],
  },
];

const processSteps = [
  { label: "Define", desc: "Clarify the problem and the audience" },
  { label: "Develop", desc: "Shape strategy into creative direction" },
  { label: "Produce", desc: "Execute with craft and precision" },
];

const ServicesPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-6 md:px-12 pt-24 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.p {...fade(0.1)} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">What We Do</motion.p>
          <motion.h1 {...fade(0.2)} className="font-display text-[clamp(36px,6vw,64px)] font-medium text-foreground leading-[1.05]">
            Services
          </motion.h1>
        </div>
      </section>

      {/* Retainer — with primary border-left accent */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn()} className="border border-border border-l-2 border-l-primary/30 p-8 md:p-12 max-w-[720px]">
            <h2 className="font-display text-[28px] md:text-[34px] font-medium text-foreground mb-5">Retainer</h2>
            <p className="font-body text-[15px] leading-[1.85] text-foreground/75 mb-5">
              We work with a small number of clients on an ongoing basis — providing monthly creative support, campaign planning, creative direction, and production oversight.
            </p>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground italic">
              Best suited for brands that need continuity, consistency, and a trusted creative partner over the long term.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three pillars — full-width stacked cards with watermark numbers */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border/30 section-dark-accent">
        <div className="max-w-[1200px] mx-auto space-y-0">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              {...fadeIn(i * 0.1)}
              className="relative py-14 md:py-20 border-b border-border/20 last:border-b-0"
            >
              {/* Watermark number */}
              <span className="font-display text-[100px] md:text-[140px] font-semibold text-primary/[0.04] absolute top-4 md:top-6 right-0 leading-none select-none pointer-events-none">
                {s.num}
              </span>
              <div className="relative max-w-[700px]">
                <span className="font-mono text-[11px] text-primary/30 block mb-5">{s.num}</span>
                <h3 className="font-display text-[28px] md:text-[36px] font-medium text-foreground mb-4">{s.title}</h3>
                <p className="font-body text-[15px] leading-[1.85] text-foreground/70 mb-8">{s.desc}</p>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="font-body text-[13px] text-muted-foreground flex items-start gap-3">
                      <span className="text-primary/25 mt-[2px] text-[10px]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process — visual timeline */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.p {...fadeIn()} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-14 text-center">Our Approach</motion.p>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between max-w-[800px] mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border/40 -translate-y-1/2" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.label}
                {...fadeIn(i * 0.15)}
                className="relative flex flex-col items-center text-center z-10 mb-10 md:mb-0"
              >
                {/* Dot */}
                <div className="w-3 h-3 border border-primary/40 bg-background mb-5" />
                <h4 className="font-display text-[22px] md:text-[26px] font-medium text-foreground mb-2">{step.label}</h4>
                <p className="font-body text-[13px] text-muted-foreground max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;
