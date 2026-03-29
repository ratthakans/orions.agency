import { motion } from "framer-motion";

const lines = [
  "Most agencies add noise.",
  "We strip it back.",
  "Find what matters.",
  "And make people see you.",
  "From idea to final cut — one team, no handoff.",
];

const ManifestoSection = () => (
  <section className="py-32 md:py-48 px-4 sm:px-6 md:px-12">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
        }}
      >
        {lines.map((line, i) => (
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
              className={`font-display tracking-[0.01em] leading-[1.05] ${
                i === lines.length - 1
                  ? "text-accent-gradient text-[clamp(32px,6vw,80px)]"
                  : "text-foreground text-[clamp(32px,6vw,80px)]"
              }`}
            >
              {line}
            </motion.p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ManifestoSection;
