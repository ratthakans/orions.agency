// Kinetic brand band — a slow scrolling strip of brand phrases, slash-separated.
// Decorative (aria-hidden); pauses on hover, halts on reduced-motion (via .marquee-track).
const PHRASES = ["Stories, Refined", "ยอด หรือ แบรนด์", "Online", "Boutique", "คิด · ทำ · ยิง", "Creative Agency"];

const MarqueeBand = () => (
  <section aria-hidden className="bg-surface border-y border-foreground/15 py-5 md:py-6 overflow-hidden">
    <div className="marquee">
      <div className="marquee-track items-center">
        {[...PHRASES, ...PHRASES].map((p, i) => (
          <span key={i} className="inline-flex items-center gap-7 shrink-0">
            <span className="font-unbounded uppercase tracking-[-0.02em] text-foreground/80 whitespace-nowrap text-[clamp(15px,2.4vw,28px)] leading-none">
              {p}
            </span>
            <span className="brand-slash text-[clamp(15px,2.4vw,28px)]" />
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default MarqueeBand;
