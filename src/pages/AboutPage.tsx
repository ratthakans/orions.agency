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

const values = [
  {
    num: "01",
    title: "Ideas First",
    en: "We don't start with formats or channels. We start with the idea. Everything else follows.",
    th: "เราไม่เริ่มจาก format หรือ channel เราเริ่มจากไอเดีย ทุกอย่างตามมาทีหลัง",
  },
  {
    num: "02",
    title: "Clarity Over Complexity",
    en: "If people don't understand it, it doesn't work. We make the complex simple and the simple powerful.",
    th: "ถ้าคนไม่เข้าใจ มันก็ไม่ทำงาน เราทำสิ่งซับซ้อนให้เรียบง่าย และทำสิ่งเรียบง่ายให้ทรงพลัง",
  },
  {
    num: "03",
    title: "Impact, Not Volume",
    en: "We don't measure success by how much we produce. We measure it by how much it moves people.",
    th: "เราไม่วัดความสำเร็จจากจำนวนที่ผลิต แต่วัดจากว่ามัน 'ขยับ' คนได้แค่ไหน",
  },
  {
    num: "04",
    title: "Partners, Not Vendors",
    en: "We work with brands, not for them. We think alongside you, challenge assumptions, and push for better.",
    th: "เราทำงานกับแบรนด์ ไม่ใช่ทำงานให้ เราคิดไปด้วยกัน ท้าทายสมมติฐาน และผลักดันให้ดีขึ้น",
  },
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
      description: "Learn about ØRIONS, an idea-driven creative agency that creates ideas, stories, and campaigns that drive real impact.",
    },
  ],
};

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="About ØRIONS | Idea-Driven Creative Agency"
        description="Meet ØRIONS, an idea-driven creative agency. We create ideas, stories, and campaigns that make people care, remember, and act."
        path="/about"
        keywords="about creative agency, idea-driven agency, creative direction, campaign development"
        schema={aboutSchema}
      />
      <Navbar />
      <div className="pt-20">

        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Who We Are
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-8 max-w-5xl">
                AN IDEA-DRIVEN<br />CREATIVE <span className="text-accent-gradient">AGENCY.</span>
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Manifesto */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                    <span className="text-accent-warm mr-2">◎</span> Manifesto
                  </p>
                  <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] tracking-[0.01em] text-foreground">
                    PEOPLE DON'T<br />
                    REMEMBER CONTENT.
                    <br />
                    <span className="text-accent-gradient">THEY REMEMBER IDEAS.</span>
                  </h2>
                </div>
                <div className="flex flex-col justify-end space-y-6">
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-lg">
                    {t(
                      "We believe the world doesn't need more content. It needs better ideas. Ideas that cut through noise, change how people feel, and drive them to act.",
                      "เราเชื่อว่าโลกไม่ต้องการ content มากขึ้น แต่ต้องการไอเดียที่ดีกว่า ไอเดียที่ตัดผ่านเสียงรบกวน เปลี่ยนความรู้สึก และผลักดันให้คนลงมือทำ"
                    )}
                  </p>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-lg">
                    {t(
                      "ØRIONS exists because we saw too many brands spending more and saying less. We create ideas first, then turn them into stories, campaigns, and experiences that make people care, remember, and act.",
                      "ØRIONS เกิดขึ้นเพราะเราเห็นแบรนด์มากมายใช้เงินมากขึ้นแต่พูดได้น้อยลง เราสร้างไอเดียก่อน แล้วเปลี่ยนมันเป็นเรื่องราว แคมเปญ และประสบการณ์ที่ทำให้คนสนใจ จดจำ และลงมือทำ"
                    )}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="border-t border-border pt-16">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  <span className="text-accent-warm mr-2">⬡</span> What We Stand For
                </p>
                <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.92] tracking-[0.01em] text-foreground mb-16">
                  OUR <span className="text-accent-gradient">VALUES</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {values.map((v, i) => (
                <AnimatedSection key={v.num} delay={i * 0.05}>
                  <div className="group border-t border-border py-10 pr-8 md:pr-12 relative">
                    <div className="flex items-start gap-6">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-accent-warm/50 pt-1 shrink-0">
                        {v.num}
                      </span>
                      <div>
                        <h3 className="font-display text-[20px] md:text-[24px] tracking-[0.02em] text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-300">
                          {v.title}
                        </h3>
                        <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-md">
                          {t(v.en, v.th)}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Rooted in Bangkok */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20">
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
                <div className="space-y-5 flex flex-col justify-end">
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

        {/* Team */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
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
                    "10 people. One shared belief: every brand has a story worth telling well.",
                    "10 คน ความเชื่อเดียวกัน: ทุกแบรนด์มีเรื่องราวที่คุ้มค่าจะเล่าให้ดี"
                  )}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
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
