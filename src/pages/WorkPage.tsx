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

const works = [
  {
    title: "No Signal",
    desc: "A survival documentary exploring isolation, endurance, and instinct.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    label: "Original",
    category: "Documentary",
    year: "2024",
  },
  {
    title: "37 Below",
    desc: "An extreme travel documentary on harsh environments and physical limits.",
    image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=1200&q=80",
    label: "Original",
    category: "Documentary",
    year: "2024",
  },
  {
    title: "Alan Makeup",
    desc: "A documentary series on identity and personal transformation through makeup.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    label: "Original",
    category: "Series",
    year: "2023",
  },
  {
    title: "ลงอาคม",
    desc: "A documentary exploring belief, ritual, and the unseen forces people live with.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
    label: "Original",
    category: "Documentary",
    year: "2023",
  },
];

const WorkPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero — bold, cinematic */}
      <section className="min-h-[60vh] flex items-end px-6 md:px-12 pt-24 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=80"
            alt=""
            className="w-full h-full object-cover brightness-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <motion.p {...fade(0.1)} className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary/50 mb-4">Selected Work</motion.p>
          <motion.h1 {...fade(0.2)} className="font-logo text-[clamp(40px,8vw,80px)] font-bold tracking-[0.08em] text-foreground leading-[1] uppercase">
            Work
          </motion.h1>
          <motion.p {...fade(0.3)} className="font-body text-[15px] text-muted-foreground mt-5 max-w-[480px]">
            Original productions and selected client projects — each crafted with intention.
          </motion.p>
        </div>
      </section>

      {/* Featured — full bleed hero card */}
      <section className="border-t border-border/30">
        <motion.div {...fadeIn(0)} className="group cursor-pointer relative">
          <div className="aspect-[16/7] md:aspect-[21/8] overflow-hidden relative">
            <img
              src={works[0].image}
              alt={works[0].title}
              className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.55] group-hover:scale-[1.03] transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-primary/60">{works[0].label}</span>
                <span className="w-4 h-px bg-primary/30" />
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-foreground/30">{works[0].category}</span>
                <span className="w-4 h-px bg-primary/30" />
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-foreground/30">{works[0].year}</span>
              </div>
              <h3 className="font-logo text-[clamp(32px,5vw,64px)] font-bold text-foreground leading-tight tracking-[0.04em] uppercase">{works[0].title}</h3>
              <p className="font-body text-[15px] text-muted-foreground mt-4 max-w-[500px] leading-[1.7]">{works[0].desc}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid — 2-col cinematic cards */}
      <section className="py-2 px-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {works.slice(1).map((w, i) => (
            <motion.div key={w.title} {...fadeIn((i + 1) * 0.1)} className="group cursor-pointer relative border-t border-border/20">
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden relative">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover brightness-[0.35] group-hover:brightness-[0.5] group-hover:scale-[1.03] transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-primary/50">{w.label}</span>
                    <span className="w-3 h-px bg-primary/30" />
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-foreground/25">{w.category}</span>
                  </div>
                  <h3 className="font-logo text-[24px] md:text-[32px] font-bold text-foreground leading-tight tracking-[0.04em] uppercase">{w.title}</h3>
                  <p className="font-body text-[13px] text-muted-foreground mt-3 leading-[1.7] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">{w.desc}</p>
                </div>

                {/* Year watermark */}
                <span className="absolute top-6 right-6 font-mono text-[11px] tracking-[0.1em] text-foreground/10">{w.year}</span>

                {/* Accent border on hover */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-20 md:py-28 px-6 border-t border-border/30 text-center section-dark-accent">
        <motion.p {...fadeIn(0)} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-6">
          Client Work
        </motion.p>
        <motion.p {...fadeIn(0.05)} className="font-display text-[clamp(24px,4vw,40px)] font-normal italic text-foreground/60 leading-[1.2]">
          Additional projects available on request.
        </motion.p>
      </section>

      <Footer />
    </main>
  );
};

export default WorkPage;
