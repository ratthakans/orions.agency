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
                Work
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

        {/* Featured Project — Full Width */}
        <section className="px-4 sm:px-6 md:px-12 pb-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <Link to={`/work/${projects[0].slug}`} className="group block">
                <div className="aspect-[21/9] overflow-hidden relative border border-border hover:border-accent-warm/30 transition-colors duration-300">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    width={1280}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-2">{projects[0].type}</p>
                    <h2 className="font-display text-[36px] md:text-[56px] tracking-[0.02em] text-foreground mb-2">
                      {projects[0].title}
                    </h2>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-lg hidden md:block">
                      {projects[0].tagline}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {projects.slice(1).map((project, i) => (
                <AnimatedSection key={project.slug} delay={i * 0.08}>
                  <Link to={`/work/${project.slug}`} className="group block border border-border hover:border-accent-warm/30 transition-colors duration-300">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                        width={1280}
                        height={800}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-accent-warm/80 bg-background/60 px-3 py-1 backdrop-blur-sm">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="font-display text-[24px] md:text-[30px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">
                        {project.tagline}
                      </p>
                    </div>
                  </Link>
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
