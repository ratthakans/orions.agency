import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import OrionConstellation from "@/components/OrionConstellation";
import ConstellationDivider from "@/components/ConstellationDivider";
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
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>About — ØRIONS Creative Agency</title>
        <meta name="description" content="ORIONS is a creative agency focused on storytelling, campaigns, and film. We help brands think, develop, and produce ideas with clarity and impact." />
        <link rel="canonical" href="https://orions.agency/about" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Hero — Who We Are */}
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={50} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-10">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">Who We Are</span>
              </div>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-4xl">
                {t(<>A creative agency<br />focused on <span className="text-accent-gradient">storytelling.</span></>, <>Creative agency<br />ที่โฟกัส<span className="text-accent-gradient">การเล่าเรื่อง</span></>)}
              </h1>
              <p className="font-body text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
                {t(
                  "ORIONS is a creative agency focused on storytelling, campaigns, and film. We help brands connect their ideas into meaningful narratives that resonate with people.",
                  "ORIONS คือ creative agency ที่โฟกัสเรื่องการเล่าเรื่อง แคมเปญ และภาพยนตร์ เราช่วยแบรนด์เชื่อมต่อไอเดียเป็น narrative ที่มีความหมายและกินใจ"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <ConstellationDivider />

        {/* How We Think — Constellation Thinking */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[20px] animate-twinkle">✧</span>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent-gradient">{t("How We Think", "วิธีคิดของเรา")}</p>
                  </div>
                  <h2 className="font-display text-[clamp(36px,4.5vw,68px)] leading-[0.94] tracking-[0.02em] text-foreground mb-8">
                    {t(<>Constellation<br /><span className="text-accent-gradient">Thinking.</span></>, <>การคิดแบบ<br /><span className="text-accent-gradient">กลุ่มดาว</span></>)}
                  </h2>
                  <div className="space-y-5">
                    <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                      {t(
                        "Every brand has dots — ideas, stories, values, moments. Most brands scatter them. We connect them into something clear, recognizable, and unforgettable. Like a constellation.",
                        "ทุกแบรนด์มีจุด — ไอเดีย เรื่องราว คุณค่า ช่วงเวลา แบรนด์ส่วนใหญ่กระจัดกระจาย เราเชื่อมต่อให้เป็นสิ่งที่ชัดเจน จดจำได้ และลืมไม่ลง เหมือนกลุ่มดาว"
                      )}
                    </p>
                    <p className="font-body text-[16px] leading-[1.8] text-foreground/80 italic">
                      {t(
                        '"Every dot has meaning. We just know how to connect them."',
                        '"ทุกจุดมีความหมาย เราแค่รู้วิธีเชื่อมต่อมัน"'
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <OrionConstellation size="lg" opacity={0.3} animate={true} showStars={true} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why ORIONS */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-12">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">{t("Why ORIONS", "ทำไม ORIONS")}</span>
              </div>
              <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-12">
                {t(<>We don't just execute.<br />We <span className="text-accent-gradient">think.</span></>, <>เราไม่ได้แค่ทำ<br />เรา<span className="text-accent-gradient">คิด</span></>)}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider">
              {[
                { title: { en: "Think", th: "คิด" }, desc: { en: "We start with strategy and narrative — understanding the brand before producing anything.", th: "เราเริ่มด้วย strategy และ narrative — เข้าใจแบรนด์ก่อนผลิตอะไร" } },
                { title: { en: "Develop", th: "พัฒนา" }, desc: { en: "We shape ideas into clear concepts — campaign directions, film treatments, content systems.", th: "เราหล่อหลอมไอเดียเป็นคอนเซ็ปต์ที่ชัดเจน — ทิศทางแคมเปญ, film treatment, ระบบ content" } },
                { title: { en: "Produce", th: "ผลิต" }, desc: { en: "We execute with cinematic quality — every frame, every word, every detail considered.", th: "เราผลิตด้วยคุณภาพระดับภาพยนตร์ — ทุกเฟรม ทุกคำ ทุกรายละเอียด" } },
              ].map((v, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-background p-10 md:p-12 group hover:bg-secondary transition-colors duration-300 relative h-full">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                    <h3 className="font-display text-[30px] tracking-[0.04em] text-foreground mb-3">{v.title[lang]}</h3>
                    <p className="font-body text-[14px] leading-[1.75] text-muted-foreground">{v.desc[lang]}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <ConstellationDivider />

        {/* Team */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-12">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">The People</span>
              </div>
              <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground mb-12">
                {t(<>Our <span className="text-accent-gradient">Team</span></>, <>ทีม<span className="text-accent-gradient">ของเรา</span></>)}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.08}>
                  <div className="bg-card border border-divider group overflow-hidden">
                    <div className="w-full aspect-[3/4] overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-700" loading="lazy" />
                    </div>
                    <div className="p-6 md:p-7">
                      <h3 className="font-body text-[15px] font-medium text-foreground mb-1">{member.name}</h3>
                      <p className="font-body text-[13px] text-muted-foreground">{member.role}</p>
                    </div>
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
