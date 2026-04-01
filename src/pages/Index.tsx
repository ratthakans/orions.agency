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
            src="https://www.youtube.com/embed/pT5BmAKGllg?autoplay=1&mute=1&loop=1&playlist=pT5BmAKGllg&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&playsinline=1&iv_load_policy=3&start=0"
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
            className="font-display text-[clamp(52px,11vw,140px)] font-semibold tracking-[0.14em] uppercase leading-[0.9] text-foreground"
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
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 md:py-36 px-6 border-t border-border/30">
        <div className="max-w-[680px] mx-auto">
          <motion.p {...fadeIn()} className="font-body text-[17px] md:text-[19px] leading-[1.85] text-foreground/75">
            We do less — with more intention. In a world of constant output, we believe brands do not need more noise. They need clear direction, thoughtful communication, and work that people can actually feel.
          </motion.p>
          <motion.div {...fadeIn(0.1)} className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About us <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {works.map((w, i) => (
              <motion.div key={w.title} {...fadeIn(i * 0.08)} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-[0.7] group-hover:scale-[1.02] transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6">
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/35 block mb-2">Original</span>
                    <h3 className="font-display text-[24px] md:text-[28px] font-medium text-white leading-tight">{w.title}</h3>
                  </div>
                </div>
                <p className="font-body text-[13px] text-muted-foreground mt-3">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 md:py-36 px-6 border-t border-border/30">
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
              <motion.div key={s.num} {...fadeIn(i * 0.08)}>
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
        <motion.p {...fadeIn()} className="font-display text-[clamp(32px,6vw,72px)] font-medium italic text-foreground leading-[1.05]">
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
