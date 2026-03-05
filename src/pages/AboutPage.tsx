import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import teamKrit from "@/assets/team-krit.jpg";
import teamNari from "@/assets/team-nari.jpg";
import teamTawan from "@/assets/team-tawan.jpg";
import teamPloy from "@/assets/team-ploy.jpg";
import teamArun from "@/assets/team-arun.jpg";
import teamMai from "@/assets/team-mai.jpg";

const team = [
  { name: "Krit Thanaporn", role: "Founder & Creative Director", image: teamKrit },
  { name: "Nari Vongsa", role: "Head of Strategy", image: teamNari },
  { name: "Tawan Srisai", role: "Design Director", image: teamTawan },
  { name: "Ploy Charoensuk", role: "Content Lead", image: teamPloy },
  { name: "Arun Kittisak", role: "Digital Experience Lead", image: teamArun },
  { name: "Mai Sutthipong", role: "Campaign Director", image: teamMai },
];

const AboutPage = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <div className="pt-20">
      <AboutSection />

      {/* Team Section */}
      <section className="py-32 md:py-44 px-6 md:px-12 relative">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
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
                  <div className="w-full aspect-[3/4] bg-secondary mb-6 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                    {/* Accent tint overlay on hover */}
                    <div className="absolute inset-0 bg-accent-warm/0 group-hover:bg-accent-warm/10 transition-colors duration-700" />
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
