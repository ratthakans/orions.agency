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

const team = [
  { name: "Ratthakan Suwanphakdee", role: "Founder & Creative Director" },
  { name: "Khanakhom Kittisakulnam", role: "CEO" },
];

const values = [
  { title: "Limited projects", desc: "We take on a small number of projects each year. This is by design — not by limitation." },
  { title: "Define before we create", desc: "Every project starts with strategy. We don't produce until the direction is clear." },
  { title: "Work that lasts", desc: "We focus on communication that builds long-term brand value, not short-term attention." },
];

const AboutPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-6 md:px-12 pt-24 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.p {...fade(0.1)} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">About</motion.p>
          <motion.h1 {...fade(0.2)} className="font-display text-[clamp(36px,6vw,64px)] font-medium text-foreground leading-[1.05]">
            We do less —<br />with more intention.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[680px] mx-auto space-y-8 font-body text-[16px] md:text-[17px] leading-[1.85] text-foreground/75">
          <motion.p {...fadeIn(0.05)}>
            In a world of constant output, we believe brands do not need more noise. They need clear direction, thoughtful communication, and work that people can actually feel.
          </motion.p>
          <motion.p {...fadeIn(0.1)}>
            Our approach brings together strategic thinking, considered art direction, and disciplined production — all within a small, focused team where every decision is deliberate.
          </motion.p>
          <motion.p {...fadeIn(0.15)}>
            We define what needs to be said, shape how it should be expressed, and bring it to life through film and visual production. The result is work that sits between strategy and execution — practical enough to solve communication problems, and crafted enough to create lasting brand value.
          </motion.p>
          <motion.p {...fadeIn(0.2)} className="italic text-foreground/50 pt-4">
            We take on a limited number of projects each year. This is by design.
          </motion.p>
        </div>
      </section>

      {/* Why ØRIONS */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.p {...fadeIn()} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-12">Why ØRIONS</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeIn(i * 0.08)}>
                <h3 className="font-display text-[22px] md:text-[24px] font-medium text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-[14px] leading-[1.75] text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.p {...fadeIn()} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-12">Leadership</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[600px]">
            {team.map((t, i) => (
              <motion.div key={t.name} {...fadeIn(i * 0.08)}>
                <div className="aspect-[3/4] bg-secondary mb-4" />
                <h3 className="font-display text-[20px] font-medium text-foreground">{t.name}</h3>
                <p className="font-mono text-[11px] tracking-[0.05em] text-muted-foreground mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[680px] mx-auto">
          <motion.p {...fadeIn()} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-10">Clients</motion.p>
          <motion.p {...fadeIn(0.05)} className="font-body text-[16px] md:text-[17px] leading-[1.85] text-foreground/75 mb-5">
            We work best with founder-led and culturally driven brands that value clarity, strong visual standards, and long-term brand building.
          </motion.p>
          <motion.p {...fadeIn(0.1)} className="font-body text-[15px] leading-[1.7] text-muted-foreground">
            Especially suited to lifestyle, hospitality, travel, beauty, and culture-led categories.
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[680px] mx-auto space-y-6">
          <motion.p {...fadeIn()} className="font-display text-[clamp(28px,5vw,52px)] font-normal italic text-foreground/70 leading-[1.1]">
            Clarity over noise.
          </motion.p>
          <motion.p {...fadeIn(0.08)} className="font-display text-[clamp(28px,5vw,52px)] font-normal italic text-foreground/50 leading-[1.1]">
            Fewer, better pieces.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
