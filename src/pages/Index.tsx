import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import SimpleMarquee from "@/components/SimpleMarquee";
import TypingLoop from "@/components/TypingLoop";

const accent = "text-gradient";

const Index = () => (
  <div id="top">
    <SEO
      title="ØRIONS — Boutique creative agency · Bangkok"
      description="A boutique Bangkok agency for branding, content and paid ads. From idea to final cut — one team, no handoff."
      path="/"
    />

    {/* HERO — full screen, single message, single CTA */}
    <section className="relative min-h-screen flex flex-col bg-foreground text-background overflow-hidden">
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] text-background/60 mb-10 md:mb-14">
            BANGKOK · EST. 2026
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-brand h-display-xl leading-[0.85] text-background">ØRIONS</h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-12 md:mt-16 font-display text-[14px] md:text-[18px] tracking-[-0.01em] max-w-[640px]">
            A boutique <TypingLoop text="creative agency" className={accent} />
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Link
            to="/services"
            className="mt-14 group inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 index-badge border border-background hover:gap-4 transition-all duration-300"
          >
            <span>See our services</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="font-mono text-[9px] tracking-[0.4em] text-background/45">SCROLL</div>
        <div className="w-px h-10 bg-background/25" />
      </div>

      {/* Bottom services marquee */}
      <div className="relative border-t border-background/15 py-5">
        <SimpleMarquee
          duration={42}
          items={[
            "SOCIAL MEDIA",
            "BRANDING",
            "CONTENT PRODUCTION",
            "PAID ADVERTISING",
            "STRATEGY",
          ]}
        />
      </div>
    </section>

    {/* CLOSING STRIP */}
    <section className="relative px-6 md:px-10">
      <div className="border-t border-foreground py-20 md:py-28 max-w-[900px] mx-auto text-center">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">
            — READY WHEN YOU ARE
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display h-display-md text-balance">
            From idea to <span className={accent}>final cut.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 font-thai text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground max-w-[480px] mx-auto">
            One team. No handoff. 30-min discovery call, free.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <Link
            to="/contact"
            className="mt-10 group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 index-badge border border-foreground hover:gap-4 transition-all duration-300"
          >
            <span>Work with us</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Index;
