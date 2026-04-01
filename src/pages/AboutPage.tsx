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
  { name: "Ratthakan Suwanphakdee", role: "Founder & Creative Director", initials: "RS" },
  { name: "Khanakhom Kittisakulnam", role: "CEO", initials: "KK" },
];

const values = [
  { num: "01", title: "Limited projects", desc: "We take on a small number of projects each year. This is by design — not by limitation." },
  { num: "02", title: "Define before we create", desc: "Every project starts with strategy. We don't produce until the direction is clear." },
  { num: "03", title: "Work that lasts", desc: "We focus on communication that builds long-term brand value, not short-term attention." },
];

const AboutPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero with atmospheric image */}
      <section className="relative min-h-[60vh] flex items-end px-6 md:px-12 pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=80"
            alt="Cinematic atmosphere"
            className="w-full h-full object-cover brightness-[0.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
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

      {/* Why ØRIONS — with oversized numbers */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border/30 section-dark-accent">
        <div className="max-w-[1200px] mx-auto">
          <motion.p {...fadeIn()} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50 mb-16">Why ØRIONS</motion.p>
          <div className="space-y-16 md:space-y-20">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeIn(i * 0.08)} className="relative">
                <span className="font-display text-[100px] md:text-[140px] font-semibold text-primary/[0.04] absolute -top-8 md:-top-12 -left-2 leading-none select-none pointer-events-none">
                  {v.num}
                </span>
                <div className="relative pl-0 md:pl-6 max-w-[600px]">
                  <span className="font-mono text-[11px] text-primary/30 block mb-3">{v.num}</span>
                  <h3 className="font-display text-[24px] md:text-[28px] font-medium text-foreground mb-3">{v.title}</h3>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">{v.desc}</p>
                </div>
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
                <div className="aspect-[3/4] bg-secondary mb-4 flex items-center justify-center">
                  <span className="font-display text-[48px] md:text-[56px] font-semibold text-foreground/10 tracking-[0.1em]">
                    {t.initials}
                  </span>
                </div>
                <h3 className="font-display text-[20px] font-medium text-foreground">{t.name}</h3>
                <p className="font-mono text-[11px] tracking-[0.05em] text-muted-foreground mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-border/30 section-dark-accent">
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

      {/* Philosophy — larger quotes */}
      <section className="py-28 md:py-44 px-6 md:px-12 border-t border-border/30">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {["Clarity over noise.", "Fewer, better pieces."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: i === 0 ? 0.7 : 0.4,
                      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                  className="font-display text-[clamp(32px,6vw,72px)] font-normal italic text-foreground leading-[1.1]"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
