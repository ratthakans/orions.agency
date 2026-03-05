import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

const team = [
  { name: "Krit Thanaporn", role: "Founder & Creative Director", initials: "KT" },
  { name: "Nari Vongsa", role: "Head of Strategy", initials: "NV" },
  { name: "Tawan Srisai", role: "Design Director", initials: "TS" },
  { name: "Ploy Charoensuk", role: "Content Lead", initials: "PC" },
  { name: "Arun Kittisak", role: "Digital Experience Lead", initials: "AK" },
  { name: "Mai Sutthipong", role: "Campaign Director", initials: "MS" },
];

const AboutPage = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <div className="pt-20">
      <AboutSection />

      {/* Team Section */}
      <section className="py-32 md:py-44 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
              The people
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-20">
              Our Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <div className="bg-background p-8 md:p-10 group">
                  <div className="w-full aspect-[3/4] bg-secondary mb-6 flex items-center justify-center overflow-hidden">
                    <span className="font-display text-4xl md:text-5xl font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </main>
);

export default AboutPage;
