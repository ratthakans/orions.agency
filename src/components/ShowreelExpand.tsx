import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Slash from "@/components/Slash";

/** Showreel that starts inside the 1280 section container (rounded) and
 *  expands to full-bleed as you scroll it toward the centre of the viewport. */
const ShowreelExpand = () => {
  const ref = useRef<HTMLElement>(null);
  const [vw, setVw] = useState(1440);
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const padX = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const maxW = useTransform(scrollYProgress, [0, 1], [1280, vw]);
  const radius = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative border-t border-foreground/15 py-10 md:py-16"
      style={{ paddingLeft: padX, paddingRight: padX }}
    >
      <motion.div
        className="relative mx-auto overflow-hidden bg-black"
        style={{ maxWidth: maxW, borderRadius: radius }}
      >
        <div className="relative w-full h-[72vh] min-h-[420px] overflow-hidden">
          <iframe
            title="ØRIONS showreel"
            src="https://www.youtube-nocookie.com/embed/nFNVN8uE2dI?autoplay=1&mute=1&loop=1&playlist=nFNVN8uE2dI&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&vq=hd2160&hd=1"
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full border-0 pointer-events-none"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-background/25 pointer-events-none" />
          <div className="absolute left-0 right-0 bottom-0 px-6 md:px-10 pb-6 md:pb-10 pointer-events-none">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex items-center gap-3">
                <Slash className="text-[15px]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-foreground/80">Showreel 2026</span>
              </div>
              <h2 lang="th" className="mt-2 md:mt-3 h-display-sm md:h-display-md max-w-[18ch] thai-wrap">
                งานที่ <em className="text-cinnabar">ขยับได้.</em>
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ShowreelExpand;
