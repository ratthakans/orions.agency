import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Slash from "@/components/Slash";

/** Full-bleed cinematic band — real work image, graded toward the brand,
 *  with a slash + serif statement overlaid. Shared across pages. */
const ImageBand = ({ image, children }: { image: string; children: ReactNode }) => (
  <section className="relative w-full overflow-hidden border-t border-foreground/15">
    <div className="grade-orion relative w-full h-[56vw] max-h-[560px] min-h-[320px]">
      <img src={image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/25" />
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 pb-12 md:pb-16">
          <Reveal>
            <div className="mb-4"><Slash className="text-[clamp(32px,5vw,60px)]" /></div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 lang="th" className="font-serif text-[clamp(28px,4.8vw,64px)] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
              {children}
            </h2>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default ImageBand;
