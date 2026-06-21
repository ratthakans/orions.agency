// Kinetic brand band — a slow scrolling strip of brand phrases, slash-separated.
// Decorative (aria-hidden); pauses on hover, halts on reduced-motion (via .marquee-track).
const PHRASES = ["Stories, Refined", "ยอด หรือ แบรนด์", "คิด · ทำ · ยิง", "Digital", "Boutique", "Production"];

const MarqueeBand = () => (
  <section aria-hidden className="bg-surface border-y border-foreground/15 py-7 md:py-10 overflow-hidden">
    <div className="marquee">
      <div className="marquee-track items-center">
        {[...PHRASES, ...PHRASES].map((p, i) => (
          <span key={i} className="inline-flex items-center gap-10 shrink-0">
            <span className="font-unbounded uppercase tracking-[-0.02em] text-foreground/85 whitespace-nowrap text-[clamp(24px,4.5vw,52px)] leading-none">
              {p}
            </span>
            <span className="brand-slash text-[clamp(24px,4.5vw,52px)]" />
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default MarqueeBand;
