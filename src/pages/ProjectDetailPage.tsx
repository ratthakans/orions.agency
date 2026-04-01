import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title={`${project.title} | ØRIONS`}
        description={project.description}
        path={`/work/${project.slug}`}
        keywords={`${project.title}, ${project.type}, orions, documentary, film production`}
      />
      <Navbar />

      <div className="pt-20">
        {/* Hero Image */}
        <section className="relative">
          <div className="aspect-[21/9] md:aspect-[21/8] overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              width={1280}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-12 pb-10 md:pb-16">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <Link
                  to="/work"
                  className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300 mb-6"
                >
                  <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> Back to Work
                </Link>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-3">{project.type}</p>
                <h1 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-[0.01em] text-foreground">
                  {project.title}
                </h1>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 md:gap-20">
              <AnimatedSection>
                <p className="font-body text-[17px] md:text-[20px] leading-[1.8] text-foreground/90 mb-4">
                  {project.description}
                </p>
                <p className="font-thai text-[15px] leading-[1.8] text-muted-foreground/60 italic">
                  {project.tagline}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-6 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-10">
                  {Object.entries(project.details).map(([key, value]) => (
                    <div key={key}>
                      <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-accent-warm/40 mb-1">
                        {key === "role" ? "Credit" : key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p className="font-mono text-[12px] tracking-[0.05em] text-muted-foreground">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-16">
          <div className="max-w-4xl mx-auto">
            {project.sections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.08}>
                <div className="border-t border-border py-12 md:py-16">
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                    <h3 className="font-display text-[22px] md:text-[26px] tracking-[0.02em] text-foreground">
                      {section.title}
                    </h3>
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.9] text-muted-foreground">
                      {section.content}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Next Project */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground/40 mb-6">Next Project</p>
              <Link to={`/work/${nextProject.slug}`} className="group block">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/60 mb-2">{nextProject.type}</p>
                    <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.9] tracking-[0.01em] text-foreground group-hover:text-accent-warm transition-colors duration-300 mb-4">
                      {nextProject.title}
                    </h2>
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground/40 group-hover:text-accent-warm/60 transition-colors duration-300 inline-flex items-center gap-2">
                      View project <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden border border-border group-hover:border-accent-warm/30 transition-colors duration-300">
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={1280}
                      height={800}
                    />
                  </div>
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

export default ProjectDetailPage;
