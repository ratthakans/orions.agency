import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
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
  {
    title: "Alan Makeup",
    desc: "A documentary series on identity and personal transformation through makeup.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
  },
  {
    title: "ลงอาคม",
    desc: "A documentary exploring belief, ritual, and the unseen forces people live with.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
  },
];

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

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-[clamp(48px,10vw,120px)] font-semibold tracking-[0.12em] uppercase leading-[0.95] text-foreground"
        >
          ORIONS
        </motion.h1>
        <motion.div {...fadeUp(0.3)} className="mt-8 space-y-1">
          <p className="font-display text-[clamp(22px,4vw,42px)] font-normal italic text-foreground/80 leading-[1.2]">
            Fewer pieces.
          </p>
          <p className="font-display text-[clamp(22px,4vw,42px)] font-normal italic text-foreground/80 leading-[1.2]">
            Stronger impact.
          </p>
        </motion.div>
        <motion.p
          {...fadeUp(0.5)}
          className="mt-10 font-body text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground max-w-[520px]"
        >
          A creative agency focused on clear communication, strong art direction, and high-quality film production.
        </motion.p>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-40 px-6">
        <div className="max-w-[680px] mx-auto">
          <motion.p {...fadeUp()} className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-12">
            About
          </motion.p>

          <div className="space-y-8 font-body text-[16px] md:text-[17px] leading-[1.8] text-foreground/85">
            <motion.p {...fadeUp(0.05)}>
              We do less — with more intention.
            </motion.p>
            <motion.p {...fadeUp(0.1)}>
              In a world of constant output, we believe brands do not need more noise. They need clear direction, thoughtful communication, and work that people can actually feel.
            </motion.p>
            <motion.p {...fadeUp(0.15)}>
              Our approach brings together strategic thinking, considered art direction, and disciplined production — all within a small, focused team where every decision is deliberate.
            </motion.p>
            <motion.p {...fadeUp(0.2)}>
              We define what needs to be said, shape how it should be expressed, and bring it to life through film and visual production. The result is work that sits between strategy and execution — practical enough to solve communication problems, and crafted enough to create lasting brand value.
            </motion.p>
            <motion.p {...fadeUp(0.25)} className="italic text-foreground/70 pt-4">
              We take on a limited number of projects each year. This is by design.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* ── WORK ── */}
      <section id="work" className="py-24 md:py-40 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.p {...fadeUp()} className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-4">
            Work
          </motion.p>
          <motion.p {...fadeUp(0.05)} className="font-body text-[15px] text-muted-foreground mb-16">
            Selected projects and original productions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {works.map((w, i) => (
              <motion.div key={w.title} {...fadeUp(i * 0.08)} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden relative bg-foreground/5">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-[0.7] group-hover:scale-[1.03] transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6">
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/50 block mb-2">Original</span>
                    <h3 className="font-display text-[24px] md:text-[28px] font-medium text-white leading-tight">
                      {w.title}
                    </h3>
                  </div>
                </div>
                <p className="font-body text-[13px] text-muted-foreground mt-3 leading-[1.6]">
                  {w.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp(0.1)} className="text-center font-body text-[13px] text-muted-foreground/60 mt-12">
            Additional client work available on request.
          </motion.p>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 md:py-40 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.p {...fadeUp()} className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-16">
            Services
          </motion.p>

          {/* Retainer block */}
          <motion.div {...fadeUp(0.05)} className="border border-border p-8 md:p-10 mb-12">
            <h3 className="font-display text-[28px] md:text-[32px] font-medium text-foreground mb-4">Retainer</h3>
            <p className="font-body text-[15px] leading-[1.8] text-foreground/80 max-w-[600px] mb-4">
              We work with a small number of clients on an ongoing basis — providing monthly creative support, campaign planning, creative direction, and production oversight.
            </p>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground italic">
              Best suited for brands that need continuity, consistency, and a trusted creative partner over the long term.
            </p>
          </motion.div>

          {/* Three service columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {services.map((s, i) => (
              <motion.div key={s.num} {...fadeUp(i * 0.08)}>
                <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/50 block mb-4">{s.num}</span>
                <h3 className="font-display text-[24px] md:text-[26px] font-medium text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-[14px] leading-[1.7] text-foreground/75 mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="font-body text-[13px] text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1 text-[8px]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp(0.1)} className="text-center font-mono text-[12px] tracking-[0.08em] text-muted-foreground mt-16">
            Our process: Define → Develop → Produce
          </motion.p>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* ── CLIENTS ── */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-[680px] mx-auto">
          <motion.p {...fadeUp()} className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-12">
            Clients
          </motion.p>
          <motion.p {...fadeUp(0.05)} className="font-body text-[16px] md:text-[17px] leading-[1.8] text-foreground/85 mb-6">
            We work best with founder-led and culturally driven brands that value clarity, strong visual standards, and long-term brand building.
          </motion.p>
          <motion.p {...fadeUp(0.1)} className="font-body text-[15px] leading-[1.7] text-muted-foreground">
            Especially suited to lifestyle, hospitality, travel, beauty, and culture-led categories.
          </motion.p>
        </div>
      </section>

      <div className="section-divider max-w-[1200px] mx-auto" />

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-40 px-6">
        <div className="max-w-[680px] mx-auto">
          <motion.p {...fadeUp()} className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-12">
            Contact
          </motion.p>
          <motion.p {...fadeUp(0.05)} className="font-display text-[28px] md:text-[36px] italic font-normal text-foreground mb-10">
            Start with a conversation.
          </motion.p>
          <div className="space-y-3">
            <motion.div {...fadeUp(0.1)}>
              <a href="mailto:hello@orions.agency" className="font-body text-[16px] text-foreground hover:text-accent transition-colors duration-300">
                hello@orions.agency
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.13)}>
              <a href="tel:+66923905464" className="font-body text-[16px] text-muted-foreground">
                092 390 5464
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.16)}>
              <a href="https://orions.agency" className="font-body text-[16px] text-muted-foreground hover:text-foreground transition-colors duration-300">
                orions.agency
              </a>
            </motion.div>
          </div>
          <motion.div {...fadeUp(0.2)} className="mt-10">
            <a
              href="mailto:hello@orions.agency"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-foreground border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
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

export default Index;
