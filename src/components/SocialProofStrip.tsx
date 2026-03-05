import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 50, suffix: "+", label: "Brands Served" },
  { value: 3.2, suffix: "×", label: "Avg ROI", decimals: 1 },
  { value: 6, suffix: "", label: "Countries" },
  { value: 89, suffix: "%", label: "Brand Recall" },
];

const Counter = ({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((eased * value).toFixed(decimals));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, decimals]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
};

const clientLogos = [
  { name: "Meridian", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5"/><path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Voss Studio", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><polygon points="20,6 34,34 6,34" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
  { name: "Kova", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><rect x="8" y="8" width="24" height="24" stroke="currentColor" strokeWidth="1.5" rx="2"/><circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Arcline", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><path d="M6 34 Q20 4 34 34" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
  { name: "Sonder", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><path d="M8 28 C8 14 32 14 32 28" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Halcyon", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><path d="M20 6L6 20L20 34L34 20Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg> },
  { name: "Vektor", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><path d="M8 32L20 8L32 32" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="13" y1="24" x2="27" y2="24" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { name: "Nimbus", icon: <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6"><circle cx="16" cy="22" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="26" cy="22" r="8" stroke="currentColor" strokeWidth="1.5"/></svg> },
];

const SocialProofStrip = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-divider border border-divider mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background p-8 md:p-10 text-center">
                <p className="font-display text-3xl md:text-5xl font-bold text-foreground mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body text-center mb-8">
            Trusted by forward-thinking brands
          </p>
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-0">
              {[...Array(3)].map((_, rep) => (
                <div key={rep} className="flex items-center gap-0 shrink-0">
                  {clientLogos.map((client) => (
                    <div key={`${rep}-${client.name}`} className="flex items-center gap-2 px-8 text-muted-foreground">
                      {client.icon}
                      <span className="font-display text-xs tracking-[0.15em] uppercase">{client.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialProofStrip;
