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

const allMembers = [
  { name: "Krit Thanaporn", role: "Founder", dept: "Management", image: teamKrit },
  { name: "Nari Vongsa", role: "CEO", dept: "Management", image: teamNari },
  { name: "Tawan Srisai", role: "CFO", dept: "Management", image: teamTawan },
  { name: "Ploy Charoensuk", role: "Creative Director", dept: "Creative", image: teamPloy },
  { name: "Arun Kittisak", role: "Creative Marketing", dept: "Creative", image: teamArun },
  { name: "Mai Sutthipong", role: "Creative Senior", dept: "Creative", image: teamMai },
  { name: "Somchai Rattana", role: "Editor / DOP", dept: "Production", image: teamSomchai },
  { name: "Pim Wattana", role: "Editor Senior", dept: "Production", image: teamPim },
  { name: "Dao Siriporn", role: "Graphic Designer", dept: "Production", image: teamDao },
  { name: "Nat Prasert", role: "Account Executive", dept: "Social & Account", image: teamNat },
  { name: "Joy Supatra", role: "Account Executive", dept: "Social & Account", image: teamJoy },
  { name: "Lin Thongchai", role: "Project Manager", dept: "Social & Account", image: teamLin },
  { name: "Fern Kamonpat", role: "Social Media Manager", dept: "Social & Account", image: teamFern },
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
        {/* Compact hero — unified pattern */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Who We Are
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
                A CREATIVE AGENCY<br />FOCUSED ON <span className="text-accent-gradient">STORYTELLING.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-lg">
                {t(
                  "ORIONS is a creative agency focused on storytelling, campaigns, and film. We help brands connect their ideas into meaningful narratives.",
                  "ORIONS คือ creative agency ที่โฟกัสเรื่องการเล่าเรื่อง แคมเปญ และภาพยนตร์"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Why ORIONS — card grid */}
        <section className="px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">△</span> Why ORIONS
              </p>
              <h2 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-12">
                WE DON'T JUST EXECUTE.<br />WE <span className="text-accent-gradient">THINK.</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Think", desc: { en: "We start with strategy and narrative — understanding the brand before producing anything.", th: "เราเริ่มด้วย strategy และ narrative — เข้าใจแบรนด์ก่อนผลิตอะไร" } },
                { title: "Develop", desc: { en: "We shape ideas into clear concepts — campaign directions, film treatments, content systems.", th: "เราหล่อหลอมไอเดียเป็นคอนเซ็ปต์ที่ชัดเจน" } },
                { title: "Produce", desc: { en: "We execute with cinematic quality — every frame, every word, every detail considered.", th: "เราผลิตด้วยคุณภาพระดับภาพยนตร์ — ทุกเฟรม ทุกคำ ทุกรายละเอียด" } },
              ].map((v, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="group relative border border-border p-8 md:p-10 hover:border-accent-warm/30 transition-all duration-500 h-full">
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                    
                    <span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[32px] tracking-[0.03em] text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-500">{v.title}</h3>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{v.desc[lang]}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team — unified grid */}
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
                    "13 people. Four departments. One shared belief: every brand has a story worth telling well.",
                    "13 คน สี่แผนก ความเชื่อเดียวกัน: ทุกแบรนด์มีเรื่องราวที่คุ้มค่าจะเล่าให้ดี"
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
                      {/* Da Vinci corner marks on image */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/50 transition-all duration-500" />
                      {/* Gradient overlay */}
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
