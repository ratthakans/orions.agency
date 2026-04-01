import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const manifestoLines = [
  "Most agencies add noise.",
  "We strip it back.",
  "Find what matters.",
  "And make people see you.",
];

const works = [
  {
    title: "No Signal",
    desc: "A survival documentary exploring isolation, endurance, and instinct.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "37 Below",
    desc: "An extreme travel documentary on harsh environments and physical limits.",
    image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&q=80",
  },
];

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* ── HERO WITH VIDEO BG ── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* YouTube video background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/pT5BmAKGllg?autoplay=1&mute=1&loop=1&playlist=pT5BmAKGllg&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&playsinline=1&iv_load_policy=3&start=14"
            title="ØRIONS Hero Background"
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full brightness-[0.25] pointer-events-none"
            style={{ aspectRatio: '16/9' }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background z-[1]" />


        <div className="relative z-10">
          <motion.h1
            {...fade(0.15)}
            className="font-logo text-[clamp(44px,10vw,120px)] font-bold tracking-[0.18em] uppercase leading-[0.9] text-foreground"
          >
            ØRIONS
          </motion.h1>
          <motion.div {...fade(0.35)} className="mt-8 space-y-1">
            <p className="font-display text-[clamp(24px,4.5vw,44px)] font-normal italic text-foreground/70 leading-[1.15]">
              Fewer pieces.
            </p>
            <p className="font-display text-[clamp(24px,4.5vw,44px)] font-normal italic text-foreground/70 leading-[1.15]">
              Stronger impact.
            </p>
          </motion.div>
          <motion.p
            {...fade(0.55)}
            className="mt-10 font-body text-[15px] md:text-[16px] leading-[1.75] text-muted-foreground max-w-[500px] mx-auto"
          >
            A creative agency focused on clear communication, strong art direction, and high-quality film production.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">Scroll</span>
          <motion.div
            animate={{ height: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-primary/30"
          />
        </motion.div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="py-32 md:py-48 px-6 section-dark-accent">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
            }}
          >
            {manifestoLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                  className={`font-display text-[clamp(28px,5.5vw,72px)] leading-[1.1] ${
                    i >= 2 ? "text-foreground/50 italic" : "text-foreground"
                  }`}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WORK PREVIEW — Editorial stacked ── */}
      <section className="py-24 md:py-36 px-6 border-t border-border/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn()} className="flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">Selected Work</p>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] font-medium text-foreground leading-[1]">Work</h2>
            </div>
            <Link
              to="/work"
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              View all →
            </Link>
          </motion.div>

          <div className="space-y-8">
            {works.map((w, i) => (
              <motion.div key={w.title} {...fadeIn(i * 0.1)} className="group cursor-pointer">
                <div className="aspect-[21/9] overflow-hidden relative">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-[1.02] transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-foreground/30 block mb-2">Original</span>
                    <h3 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-foreground leading-tight">{w.title}</h3>
                  </div>
                </div>
                <p className="font-body text-[14px] text-muted-foreground mt-4 max-w-[600px]">{w.desc}</p>
                {i < works.length - 1 && <div className="section-divider mt-8" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 md:py-36 px-6 border-t border-border/30 section-dark-accent">
        <div className="max-w-[1200px] mx-auto">
          <motion.div {...fadeIn()} className="flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-3">What We Do</p>
              <h2 className="font-display text-[clamp(32px,5vw,56px)] font-medium text-foreground leading-[1]">Services</h2>
            </div>
            <Link
              to="/services"
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              View all →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Strategy", desc: "Define what your brand should say and how it should be understood." },
              { num: "02", title: "Communication Design", desc: "Shape strategy into clear ideas and visual direction." },
              { num: "03", title: "Film & Production", desc: "Execute with attention to detail — from concept to delivery." },
            ].map((s, i) => (
              <motion.div key={s.num} {...fadeIn(i * 0.08)} className="border-l-2 border-primary/15 pl-6">
                <span className="font-mono text-[11px] text-primary/30 block mb-4">{s.num}</span>
                <h3 className="font-display text-[22px] md:text-[24px] font-medium text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 md:py-44 px-6 border-t border-border/30 text-center">
        <div className="section-divider max-w-[120px] mx-auto mb-14" />
        <motion.p {...fadeIn()} className="font-display text-[clamp(36px,7vw,80px)] font-medium italic text-foreground leading-[1.05]">
          Start with a conversation.
        </motion.p>
        <motion.div {...fadeIn(0.15)} className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-foreground border border-border px-8 py-3.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            Get in touch <span>→</span>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
