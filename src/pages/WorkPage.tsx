import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const WorkPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Work | ØRIONS"
        description="Original productions from ØRIONS — documentary films, creative experiments, and in-house work."
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
                Work
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
                ORIGINAL<br />
                <span className="text-accent-gradient">PRODUCTIONS.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl">
                In-house films, documentaries, and creative work — where we push our own standards.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Immersive project list */}
        <section className="pb-20">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.05}>
              <Link
                to={`/work/${project.slug}`}
                className="group block border-t border-border"
              >
                {/* Full-width image */}
                <div className="aspect-[21/9] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.03] group-hover:scale-100"
                    loading="lazy"
                    width={1280}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10 group-hover:via-background/20 transition-all duration-700" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full px-4 sm:px-6 md:px-12 pb-8 md:pb-12">
                      <div className="max-w-7xl mx-auto flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm">{project.type}</span>
                            <span className="w-px h-3 bg-accent-warm/30" />
                            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50">{project.details.year}</span>
                            <span className="w-px h-3 bg-border/30" />
                            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/30">{project.details.status}</span>
                          </div>
                          <h2 className="font-display text-[32px] md:text-[56px] tracking-[0.02em] text-foreground mb-2">
                            {project.title}
                          </h2>
                          <p className="font-body text-[14px] leading-[1.7] text-muted-foreground/60 max-w-lg hidden md:block">
                            {project.tagline}
                          </p>
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/30 group-hover:text-accent-warm/60 transition-colors duration-300 hidden md:inline-flex items-center gap-2 mb-2">
                          View project <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
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
              <Link to="/projects" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                View Projects <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
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
