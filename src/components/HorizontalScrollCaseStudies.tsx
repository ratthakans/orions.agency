import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { works } from "@/data/works";
import { useLanguage } from "@/contexts/LanguageContext";

const HorizontalScrollCaseStudies = () => {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  const featured = works.slice(0, 5);

  return (
    <section ref={containerRef} className="py-24 md:py-40 border-t border-border overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
              <span className="text-accent-warm mr-2">✦</span> Selected Work
            </p>
            <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground">
              CASE STUDIES.
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mt-4 md:mt-0"
          >
            View all work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 pl-4 sm:pl-6 md:pl-12">
        {featured.map((w) => (
          <Link
            key={w.slug}
            to={`/work/${w.slug}`}
            className="group flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] border border-border hover:border-accent-warm/30 transition-colors duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={w.image}
                alt={w.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60">{w.service}</span>
                <span className="text-muted-foreground/30 text-[8px]">●</span>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50">{w.type}</span>
              </div>
              <h3 className="font-display text-[22px] md:text-[28px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                {w.title}
              </h3>
              <p className="font-body text-[13px] leading-[1.6] text-muted-foreground line-clamp-2">{w.brief[lang]}</p>
              <p className="font-display text-[16px] tracking-[0.02em] text-accent-gradient mt-4">{w.result}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default HorizontalScrollCaseStudies;
