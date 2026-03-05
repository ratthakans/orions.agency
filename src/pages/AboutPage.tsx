import { Helmet } from "react-helmet-async";
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

const AboutPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>About — ØRIONS Creative Agency</title>
        <meta name="description" content="Meet the team behind ØRIONS. A meaning-driven creative agency in Bangkok helping brands define direction and express it clearly." />
        <link rel="canonical" href="https://orions.agency/about" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <AboutSection />

        {/* Team Section */}
        <section className="py-32 md:py-44 px-6 md:px-12 relative">
          <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">The People</p>
                  <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                    Our<br />
                    <span className="text-accent-gradient">Team</span>
                  </h2>
                </div>
                <div className="flex items-end">
                  <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                    A small, focused team of strategists, designers, and storytellers building meaningful brands.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.08}>
                  <div className="bg-background p-8 md:p-10 group">
                    <div className="w-full aspect-[3/4] bg-secondary mb-6 overflow-hidden relative">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent-warm/0 via-transparent to-transparent group-hover:from-accent-warm/15 transition-all duration-700" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1">{member.name}</h3>
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
};

export default AboutPage;
