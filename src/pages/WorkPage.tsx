import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

import workNoSignal from "@/assets/work-northwind.jpg";
import work37Below from "@/assets/work-atlas.jpg";
import workAlanMakeup from "@/assets/work-koha.jpg";
import workLongAkhom from "@/assets/work-lumen.jpg";

const originals = [
  {
    title: "No Signal",
    desc: "A survival documentary exploring isolation, endurance, and instinct.",
    image: workNoSignal,
  },
  {
    title: "37 Below",
    desc: "An extreme travel documentary on harsh environments and physical limits.",
    image: work37Below,
  },
  {
    title: "Alan Makeup",
    desc: "A documentary series on identity and personal transformation through makeup.",
    image: workAlanMakeup,
  },
  {
    title: "ลงอาคม",
    desc: "A documentary exploring belief, ritual, and the unseen forces people live with.",
    image: workLongAkhom,
  },
];

const WorkPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Work | ØRIONS"
        description="Selected projects and original productions from ØRIONS — documentary films, brand campaigns, and creative work."
        path="/work"
        keywords="documentary film, original production, creative agency work, brand campaign bangkok"
      />
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-end px-4 sm:px-6 md:px-12 pt-24 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Work
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
                SELECTED<br />
                <span className="text-accent-gradient">WORK.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl">
                Selected projects and original productions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {originals.map((project, i) => (
                <AnimatedSection key={project.title} delay={i * 0.08}>
                  <div className="group border border-border hover:border-accent-warm/30 transition-colors duration-300">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/5 transition-all duration-500" />
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="font-display text-[24px] md:text-[30px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground/50 mt-16 text-center">
                Additional client work available on request.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 border-t border-border text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              WANT TO WORK<br />
              <span className="text-accent-gradient">TOGETHER?</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              <Link to="/contact" className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                Start a Conversation
              </Link>
              <Link to="/services" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                View Services <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default WorkPage;
