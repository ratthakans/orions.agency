import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";
import { useLanguage } from "@/contexts/LanguageContext";
import teamKrit from "@/assets/team-krit.jpg";
import teamNari from "@/assets/team-nari.jpg";
import teamTawan from "@/assets/team-tawan.jpg";
import teamPloy from "@/assets/team-ploy.jpg";
import teamArun from "@/assets/team-arun.jpg";
import teamMai from "@/assets/team-mai.jpg";

const team = [
  { name: "Krit Thanaporn", role: "Founder & Creative Director", image: teamKrit },
  { name: "Nari Vongsa", role: "Head of Strategy", image: teamNari },
  { name: "Tawan Srisai", role: "Film Director", image: teamTawan },
  { name: "Ploy Charoensuk", role: "Content Lead", image: teamPloy },
  { name: "Arun Kittisak", role: "Producer", image: teamArun },
  { name: "Mai Sutthipong", role: "Campaign Director", image: teamMai },
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
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">Who We Are</p>
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

        <Marquee items={["Story", "Strategy", "Campaign", "Film", "Meaning"]} />

        {/* Constellation Thinking */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="max-w-3xl">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-gradient mb-8">How We Think</p>
                <h2 className="font-display text-[clamp(44px,5.5vw,88px)] leading-[0.9] tracking-[0.01em] text-foreground mb-10">
                  CONSTELLATION<br /><span className="text-accent-gradient">THINKING.</span>
                </h2>
                <p className="font-body text-[16px] leading-[1.7] text-muted-foreground mb-8">
                  {t(
                    "Every brand has dots — ideas, stories, values, moments. Most brands scatter them. We connect them into something clear, recognizable, and unforgettable.",
                    "ทุกแบรนด์มีจุด — ไอเดีย เรื่องราว คุณค่า ช่วงเวลา แบรนด์ส่วนใหญ่กระจัดกระจาย เราเชื่อมต่อให้เป็นสิ่งที่ชัดเจนและลืมไม่ลง"
                  )}
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-muted-foreground/50 italic">
                  "Every dot has meaning. We just know how to connect them."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why ORIONS */}
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">Why ORIONS</p>
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
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.15em] text-muted-foreground/40 block mb-5">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[32px] tracking-[0.03em] text-foreground mb-4">{v.title}</h3>
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
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">The People</p>
              <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-20">
                OUR <span className="text-accent-gradient">TEAM</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.06}>
                  <div className="group">
                    <div className="w-full aspect-[3/4] overflow-hidden mb-5">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                    </div>
                    <h3 className="font-body text-[15px] text-foreground mb-0.5">{member.name}</h3>
                    <p className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">{member.role}</p>
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
