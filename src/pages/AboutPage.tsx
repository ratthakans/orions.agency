import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import OrionConstellation from "@/components/OrionConstellation";
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
        {/* Hero */}
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={25} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">Who We Are</p>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-3xl">
                {t(<>A creative agency<br />focused on <span className="text-accent-gradient">storytelling.</span></>, <>Creative agency<br />ที่โฟกัส<span className="text-accent-gradient">การเล่าเรื่อง</span></>)}
              </h1>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-lg">
                {t(
                  "ORIONS is a creative agency focused on storytelling, campaigns, and film. We help brands connect their ideas into meaningful narratives.",
                  "ORIONS คือ creative agency ที่โฟกัสเรื่องการเล่าเรื่อง แคมเปญ และภาพยนตร์"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Constellation Thinking */}
        <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-accent-gradient mb-8">{t("How We Think", "วิธีคิดของเรา")}</p>
                  <h2 className="font-display text-[clamp(40px,5vw,80px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8">
                    {t(<>Constellation<br /><span className="text-accent-gradient">Thinking.</span></>, <>การคิดแบบ<br /><span className="text-accent-gradient">กลุ่มดาว</span></>)}
                  </h2>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6 max-w-md">
                    {t(
                      "Every brand has dots — ideas, stories, values, moments. Most brands scatter them. We connect them into something clear, recognizable, and unforgettable.",
                      "ทุกแบรนด์มีจุด — ไอเดีย เรื่องราว คุณค่า ช่วงเวลา แบรนด์ส่วนใหญ่กระจัดกระจาย เราเชื่อมต่อให้เป็นสิ่งที่ชัดเจนและลืมไม่ลง"
                    )}
                  </p>
                  <p className="font-body text-[14px] leading-[1.8] text-foreground/50 italic">
                    {t('"Every dot has meaning. We just know how to connect them."', '"ทุกจุดมีความหมาย เราแค่รู้วิธีเชื่อมต่อมัน"')}
                  </p>
                </div>
                <div className="flex items-center justify-center opacity-40">
                  <OrionConstellation size="lg" opacity={0.3} animate={true} showStars={true} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why ORIONS */}
        <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">{t("Why ORIONS", "ทำไม ORIONS")}</p>
              <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.88] tracking-[0.02em] text-foreground mb-16">
                {t(<>We don't just execute.<br />We <span className="text-accent-gradient">think.</span></>, <>เราไม่ได้แค่ทำ<br />เรา<span className="text-accent-gradient">คิด</span></>)}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: { en: "Think", th: "คิด" }, desc: { en: "We start with strategy and narrative — understanding the brand before producing anything.", th: "เราเริ่มด้วย strategy และ narrative — เข้าใจแบรนด์ก่อนผลิตอะไร" } },
                { title: { en: "Develop", th: "พัฒนา" }, desc: { en: "We shape ideas into clear concepts — campaign directions, film treatments, content systems.", th: "เราหล่อหลอมไอเดียเป็นคอนเซ็ปต์ที่ชัดเจน" } },
                { title: { en: "Produce", th: "ผลิต" }, desc: { en: "We execute with cinematic quality — every frame, every word, every detail considered.", th: "เราผลิตด้วยคุณภาพระดับภาพยนตร์ — ทุกเฟรม ทุกคำ ทุกรายละเอียด" } },
              ].map((v, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-accent-gradient block mb-4">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display text-[32px] tracking-[0.04em] text-foreground mb-3">{v.title[lang]}</h3>
                    <p className="font-body text-[14px] leading-[1.75] text-muted-foreground">{v.desc[lang]}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-28 md:py-40 px-6 md:px-12 border-t border-divider">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">The People</p>
              <h2 className="font-display text-[clamp(48px,6vw,96px)] leading-[0.88] tracking-[0.02em] text-foreground mb-16">
                {t(<>Our <span className="text-accent-gradient">Team</span></>, <>ทีม<span className="text-accent-gradient">ของเรา</span></>)}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.08}>
                  <div className="group">
                    <div className="w-full aspect-[3/4] overflow-hidden mb-4">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                    </div>
                    <h3 className="font-body text-[14px] text-foreground mb-0.5">{member.name}</h3>
                    <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/50">{member.role}</p>
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
