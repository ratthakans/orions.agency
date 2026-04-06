import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { clientProjects } from "@/data/clientProjects";

const ProjectsPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Projects | ØRIONS"
        description="Client work by ØRIONS — branding, campaigns, film production, and content systems for brands that want to be remembered."
        path="/projects"
        keywords="client work bangkok, branding agency, campaign production, brand film, content system"
      />
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-end px-4 sm:px-6 md:px-12 pt-24 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Projects
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
                CLIENT<br />
                <span className="text-accent-gradient">WORK.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl">
                Selected projects for brands that needed clarity, direction, and work people actually remember.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter Tags */}
        <section className="px-4 sm:px-6 md:px-12 pb-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-wrap gap-3">
                {["All", "Branding", "Campaign", "Brand Film", "Content System"].map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-colors duration-300 cursor-pointer ${
                      tag === "All"
                        ? "border-accent-warm/50 text-accent-warm"
                        : "border-border text-muted-foreground/50 hover:border-accent-warm/30 hover:text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {clientProjects.map((project, i) => (
                <AnimatedSection key={project.slug} delay={i * 0.08}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block border border-border hover:border-accent-warm/30 transition-colors duration-500"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative bg-muted/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-100"
                        loading="lazy"
                        width={1280}
                        height={800}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-accent-warm/80 bg-background/60 px-3 py-1 backdrop-blur-sm">
                          {project.type}
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/60 bg-background/60 px-3 py-1 backdrop-blur-sm">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="font-display text-[24px] md:text-[30px] tracking-[0.02em] text-foreground mb-2 group-hover:text-accent-warm transition-colors duration-300">
                            {project.title}
                          </h2>
                          <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-4">
                            {project.tagline}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((service) => (
                              <span
                                key={service}
                                className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted-foreground/40 border border-border/50 px-2 py-1"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground/30 group-hover:text-accent-warm/50 transition-colors duration-300 mt-2 shrink-0">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 border-t border-border text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              HAVE A PROJECT<br />
              <span className="text-accent-gradient">IN MIND?</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              <Link
                to="/contact"
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
              >
                Start your first project
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300"
              >
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

export default ProjectsPage;
