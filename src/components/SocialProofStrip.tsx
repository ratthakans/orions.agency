import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return <span ref={ref}>{display}{suffix}</span>;
};

const SocialProofStrip = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 89, suffix: "%", label: t("Brand Recall Increase", "การจดจำแบรนด์เพิ่มขึ้น") },
    { value: 3.2, suffix: "×", label: t("Campaign Engagement", "Engagement ของแคมเปญ"), decimals: 1 },
    { value: 47, suffix: "%", label: t("Content Efficiency", "ประสิทธิภาพคอนเทนต์") },
    { value: 156, suffix: "%", label: t("Search Visibility", "การมองเห็นในการค้นหา") },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
              {t("Measurable Impact", "ผลลัพธ์ที่วัดได้จริง")}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-divider border border-divider mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background p-8 md:p-10 text-center">
                <p className="font-display text-[80px] leading-none text-accent-gradient mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </p>
                <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialProofStrip;
