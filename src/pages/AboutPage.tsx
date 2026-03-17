import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import teamKrit from "@/assets/team-krit.jpg";
import teamNari from "@/assets/team-nari.jpg";
import teamTawan from "@/assets/team-tawan.jpg";
import teamPloy from "@/assets/team-ploy.jpg";
import teamArun from "@/assets/team-arun.jpg";
import teamMai from "@/assets/team-mai.jpg";
import teamSomchai from "@/assets/team-somchai.jpg";
import teamPim from "@/assets/team-pim.jpg";
import teamDao from "@/assets/team-dao.jpg";
import teamNat from "@/assets/team-nat.jpg";
import teamJoy from "@/assets/team-joy.jpg";
import teamLin from "@/assets/team-lin.jpg";
import teamFern from "@/assets/team-fern.jpg";

const managementTeam = [
  { name: "Krit Thanaporn", role: "Founder", image: teamKrit },
  { name: "Nari Vongsa", role: "CEO", image: teamNari },
  { name: "Tawan Srisai", role: "CFO", image: teamTawan },
];

const creativeTeam = [
  { name: "Ploy Charoensuk", role: "Creative Director", image: teamPloy },
  { name: "Arun Kittisak", role: "Creative Marketing", image: teamArun },
  { name: "Mai Sutthipong", role: "Creative Senior", image: teamMai },
];

const productionTeam = [
  { name: "Somchai Rattana", role: "Editor / DOP", image: teamSomchai },
  { name: "Pim Wattana", role: "Editor Senior", image: teamPim },
  { name: "Dao Siriporn", role: "Graphic Designer", image: teamDao },
];

const socialTeam = [
  { name: "Nat Prasert", role: "Account Executive", image: teamNat },
  { name: "Joy Supatra", role: "Account Executive", image: teamJoy },
  { name: "Lin Thongchai", role: "Project Manager", image: teamLin },
  { name: "Fern Kamonpat", role: "Social Media Manager", image: teamFern },
];

const teamGroups = [
  { label: "Management", members: managementTeam },
  { label: "Creative", members: creativeTeam },
  { label: "Production", members: productionTeam },
  { label: "Social & Account", members: socialTeam },
];

const AboutPage = () => {
  const { lang, t } = useLanguage();

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>About — ØRIONS Creative Agency</title>
        <meta name="description" content="ORIONS is a creative agency focused on storytelling, campaigns, and film." />
        <link rel="canonical" href="https://orions.agency/about" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">✦</span> Who We Are
              </p>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10 max-w-4xl">
                A CREATIVE AGENCY<br />FOCUSED ON <span className="text-accent-gradient">STORYTELLING.</span>
              </h1>
              <p className="font-body text-[16px] leading-[1.7] text-muted-foreground max-w-lg">
                {t(
                  "ORIONS is a creative agency focused on storytelling, campaigns, and film. We help brands connect their ideas into meaningful narratives.",
                  "ORIONS คือ creative agency ที่โฟกัสเรื่องการเล่าเรื่อง แคมเปญ และภาพยนตร์"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Why ORIONS */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">△</span> Why ORIONS
              </p>
              <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
                WE DON'T JUST EXECUTE.<br />WE <span className="text-accent-gradient">THINK.</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { title: "Think", desc: { en: "We start with strategy and narrative — understanding the brand before producing anything.", th: "เราเริ่มด้วย strategy และ narrative — เข้าใจแบรนด์ก่อนผลิตอะไร" } },
                { title: "Develop", desc: { en: "We shape ideas into clear concepts — campaign directions, film treatments, content systems.", th: "เราหล่อหลอมไอเดียเป็นคอนเซ็ปต์ที่ชัดเจน" } },
                { title: "Produce", desc: { en: "We execute with cinematic quality — every frame, every word, every detail considered.", th: "เราผลิตด้วยคุณภาพระดับภาพยนตร์ — ทุกเฟรม ทุกคำ ทุกรายละเอียด" } },
              ].map((v, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="group relative p-6 -m-6 hover:bg-foreground/[0.02] transition-all duration-500">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/40 transition-all duration-500" />
                    
                    <span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[32px] tracking-[0.03em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-500">{v.title}</h3>
                    <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{v.desc[lang]}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
                <span className="text-accent-warm mr-2">⬡</span> The People
              </p>
              <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
                OUR <span className="text-accent-gradient">TEAM</span>
              </h2>
            </AnimatedSection>

            {teamGroups.map((group, gi) => (
              <AnimatedSection key={group.label} delay={gi * 0.06}>
                <div className="mb-16 last:mb-0">
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm/60 mb-8 pb-3 border-b border-border">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {group.members.map((member) => (
                      <div key={member.name} className="group">
                        <div className="w-full aspect-[3/4] overflow-hidden mb-3 relative max-w-[180px]">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <h3 className="font-body text-[14px] text-foreground mb-0.5 group-hover:text-accent-warm transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground/60">
                          {member.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
