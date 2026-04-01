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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    label: "Original",
    category: "Documentary",
  },
  {
    title: "37 Below",
    desc: "An extreme travel documentary on harsh environments and physical limits.",
    image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&q=80",
    label: "Original",
    category: "Documentary",
  },
  {
    title: "Alan Makeup",
    desc: "A documentary series on identity and personal transformation through makeup.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    label: "Original",
    category: "Series",
  },
  {
    title: "ลงอาคม",
    desc: "A documentary exploring belief, ritual, and the unseen forces people live with.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    label: "Original",
    category: "Documentary",
  },
];

const WorkPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-6 md:px-12 pt-24 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.p {...fade(0.1)} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">Selected Work</motion.p>
          <motion.h1 {...fade(0.2)} className="font-display text-[clamp(36px,6vw,64px)] font-medium text-foreground leading-[1.05]">
            Work
          </motion.h1>
          <motion.p {...fade(0.3)} className="font-body text-[15px] text-muted-foreground mt-4 max-w-[420px]">
            Selected projects and original productions.
          </motion.p>
        </div>
      </section>

      {/* Asymmetric Grid — first card full-width, rest 3-col portrait */}
      <section className="py-12 md:py-20 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[1200px] mx-auto">
          {/* Featured / first card — full width */}
          <motion.div {...fadeIn(0)} className="group cursor-pointer mb-8">
            <div className="aspect-[21/9] overflow-hidden relative">
              <img
                src={works[0].image}
                alt={works[0].title}
                className="w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-[1.02] transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-foreground/30 block mb-2">{works[0].label} · {works[0].category}</span>
                <h3 className="font-display text-[clamp(28px,4vw,48px)] font-medium text-foreground leading-tight">{works[0].title}</h3>
                <p className="font-body text-[14px] text-muted-foreground mt-3 max-w-[500px]">{works[0].desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Remaining cards — 3-col portrait poster */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {works.slice(1).map((w, i) => (
              <motion.div key={w.title} {...fadeIn((i + 1) * 0.08)} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.65] group-hover:scale-[1.02] transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  {/* Hover overlay that slides up */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-foreground/30 block mb-2">{w.label} · {w.category}</span>
                    <h3 className="font-display text-[24px] md:text-[28px] font-medium text-foreground leading-tight">{w.title}</h3>
                    <p className="font-body text-[13px] text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{w.desc}</p>
                  </div>
                  {/* Primary border on hover */}
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeIn(0.1)} className="text-center font-body text-[13px] text-muted-foreground/50 mt-16">
            Additional client work available on request.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorkPage;
