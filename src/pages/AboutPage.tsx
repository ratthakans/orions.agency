import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import teamKrit from "@/assets/team-krit.jpg";
import teamNari from "@/assets/team-nari.jpg";
import teamTawan from "@/assets/team-tawan.jpg";
import teamPloy from "@/assets/team-ploy.jpg";
import teamMai from "@/assets/team-mai.jpg";
import teamSomchai from "@/assets/team-somchai.jpg";
import teamDao from "@/assets/team-dao.jpg";
import teamNat from "@/assets/team-nat.jpg";
import teamLin from "@/assets/team-lin.jpg";
import teamArm from "@/assets/team-arm.jpg";

const allMembers = [
  { name: "Krit Thanaporn", role: "Founder", dept: "Management", image: teamKrit },
  { name: "Nari Vongsa", role: "CEO", dept: "Management", image: teamNari },
  { name: "Tawan Srisai", role: "CFO", dept: "Management", image: teamTawan },
  { name: "Ploy Charoensuk", role: "Creative Director", dept: "Creative", image: teamPloy },
  { name: "Mai Sutthipong", role: "Creative Senior", dept: "Creative", image: teamMai },
  { name: "Dao Siriporn", role: "Art Director", dept: "Creative", image: teamDao },
  { name: "Somchai Rattana", role: "Editor / DOP", dept: "Production", image: teamSomchai },
  { name: "Arm Wattana", role: "Strategist", dept: "Strategy", image: teamArm },
  { name: "Lin Thongchai", role: "Project Manager", dept: "Social & Account", image: teamLin },
  { name: "Nat Prasert", role: "Account Executive", dept: "Social & Account", image: teamNat },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://orions.agency/about" },
      ],
    },
    {
      "@type": "AboutPage",
      name: "About ØRIONS",
      url: "https://orions.agency/about",
      description: "Learn about ØRIONS, a Bangkok creative agency focused on storytelling, campaigns, and film production.",
    },
  ],
};

const AboutPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="About ØRIONS | Creative Agency in Bangkok"
        description="Meet ØRIONS, a Bangkok creative agency combining strategy, campaigns, film production, and creative transformation for Thai and regional brands."
        path="/about"
        keywords="about creative agency Bangkok, Bangkok branding agency team, production house Thailand"
        schema={aboutSchema}
      />
      <Navbar />
      <div className="pt-20">
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Who We Are
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
                A BANGKOK CREATIVE AGENCY<br />FOCUSED ON <span className="text-accent-gradient">STORYTELLING.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t(
                  "ØRIONS is a creative agency in Bangkok focused on storytelling, campaigns, and film. We help Thai and regional brands connect strategy, narrative, and production into one clear creative system.",
                  "ØRIONS คือ creative agency ในกรุงเทพฯ ที่โฟกัสเรื่องการเล่าเรื่อง แคมเปญ และภาพยนตร์ เราช่วยแบรนด์ไทยและระดับภูมิภาคเชื่อมกลยุทธ์ narrative และ production เข้าด้วยกันเป็นระบบเดียว"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                    <span className="text-accent-warm mr-2">◎</span> Local Perspective
                  </p>
                  <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
                    ROOTED IN BANGKOK.
                    <br />BUILT FOR THE REGION.
                  </h2>
                </div>
                <div className="space-y-5">
                  <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">
                    {t(
                      "Our team works from Bangkok with experience across hospitality, real estate, education, healthcare, lifestyle, and startup brands throughout Thailand and Southeast Asia.",
                      "ทีมของเราทำงานจากกรุงเทพฯ และมีประสบการณ์กับแบรนด์ด้าน hospitality, real estate, education, healthcare, lifestyle และ startup ทั่วไทยและเอเชียตะวันออกเฉียงใต้"
                    )}
                  </p>
                  <div className="flex flex-wrap items-center gap-8">
                    <Link to="/work" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-foreground border-b border-foreground/40 pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                      View Selected Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                    <Link to="/contact" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground border-b border-border pb-1 hover:border-accent-warm hover:text-accent-warm transition-all duration-300">
                      Talk to the Team <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  <span className="text-accent-warm mr-2">⬡</span> The People
                </p>
                <h2 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6">
                  OUR <span className="text-accent-gradient">TEAM</span>
                </h2>
                <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-lg mb-16">
                  {t(
                    "9 people. One shared belief: every brand has a story worth telling well.",
                    "9 คน ความเชื่อเดียวกัน: ทุกแบรนด์มีเรื่องราวที่คุ้มค่าจะเล่าให้ดี"
                  )}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
              {allMembers.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.03}>
                  <div className="group">
                    <div className="relative overflow-hidden mb-4">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <h3 className="font-body text-[14px] text-foreground mb-0.5 group-hover:text-accent-warm transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground/60 mb-0.5">
                      {member.role}
                    </p>
                    <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-accent-warm/40">
                      {member.dept}
                    </p>
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
