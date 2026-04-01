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
  },
  {
    title: "37 Below",
    desc: "An extreme travel documentary on harsh environments and physical limits.",
    image: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&q=80",
    label: "Original",
  },
  {
    title: "Alan Makeup",
    desc: "A documentary series on identity and personal transformation through makeup.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    label: "Original",
  },
  {
    title: "ลงอาคม",
    desc: "A documentary exploring belief, ritual, and the unseen forces people live with.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    label: "Original",
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

      {/* Grid */}
      <section className="py-12 md:py-20 px-6 md:px-12 border-t border-border/40">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {works.map((w, i) => (
              <motion.div key={w.title} {...fadeIn(i * 0.08)} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden relative bg-foreground/5">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover brightness-[0.55] group-hover:brightness-[0.65] group-hover:scale-[1.02] transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6">
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/40 block mb-2">{w.label}</span>
                    <h3 className="font-display text-[24px] md:text-[30px] font-medium text-white leading-tight">{w.title}</h3>
                  </div>
                </div>
                <p className="font-body text-[13px] text-muted-foreground mt-3 leading-[1.6]">{w.desc}</p>
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
