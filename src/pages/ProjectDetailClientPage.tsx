import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { clientProjects } from "@/data/clientProjects";

const ProjectDetailClientPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = clientProjects.find((p) => p.slug === slug);
  const currentIndex = clientProjects.findIndex((p) => p.slug === slug);
  const nextProject = clientProjects[(currentIndex + 1) % clientProjects.length];

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title={`${project.title} | ØRIONS`}
        description={project.tagline}
        path={`/projects/${project.slug}`}
        keywords={`${project.type.toLowerCase()}, ${project.client.toLowerCase()}, creative agency bangkok`}
      />
      <Navbar />

      <div className="pt-20">
        {/* Hero Image */}
        <section className="px-4 sm:px-6 md:px-12 pt-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="aspect-[21/9] overflow-hidden relative border border-border bg-muted/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={1280}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Info */}
        <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
              {/* Metadata */}
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-2">Client</p>
                    <p className="font-display text-[18px] tracking-[0.02em] text-foreground">{project.client}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-2">Type</p>
                    <p className="font-mono text-[12px] tracking-[0.05em] text-muted-foreground">{project.type}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-2">Year</p>
                    <p className="font-mono text-[12px] tracking-[0.05em] text-muted-foreground">{project.year}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-2">Services</p>
                    <div className="space-y-1">
                      {project.services.map((s) => (
                        <p key={s} className="font-mono text-[11px] tracking-[0.05em] text-muted-foreground/60">{s}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection delay={0.1}>
                <div>
                  <h1 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] tracking-[0.01em] text-foreground mb-6">
                    {project.title}
                  </h1>
                  <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-foreground/80 mb-8">
                    {project.tagline}
                  </p>
                  <div className="border-t border-border pt-8">
                    <p className="font-body text-[15px] leading-[1.9] text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Placeholder Gallery */}
        <section className="px-4 sm:px-6 md:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="aspect-[4/3] border border-border bg-muted/5 flex items-center justify-center">
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/20">Image {n}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Next Project */}
        <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-6">Next Project</p>
              <Link to={`/projects/${nextProject.slug}`} className="group block">
                <div className="flex items-end justify-between">
                  <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[0.95] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                    {nextProject.title}
                  </h2>
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground/40 group-hover:text-accent-warm/60 transition-colors duration-300 mb-2 inline-flex items-center gap-2">
                    View <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectDetailClientPage;
