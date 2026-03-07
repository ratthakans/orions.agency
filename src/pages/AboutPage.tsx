import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
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
  { name: "Tawan Srisai", role: "Design Director", image: teamTawan },
  { name: "Ploy Charoensuk", role: "Content Lead", image: teamPloy },
  { name: "Arun Kittisak", role: "Digital Experience Lead", image: teamArun },
  { name: "Mai Sutthipong", role: "Campaign Director", image: teamMai },
];

const AboutPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>About & Contact — ØRIONS Creative Agency</title>
        <meta name="description" content="Meet the team behind ØRIONS. A meaning-driven creative agency in Bangkok. Get in touch to start your project." />
        <link rel="canonical" href="https://orions.agency/about" />
      </Helmet>
      <Navbar />
      <div className="pt-20">

        {/* About Hero */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-divider">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-12">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">
                  Who We Are
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
                <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
                  {t(<>About<br /><span className="text-accent-gradient">ØRIONS</span></>, <>เกี่ยวกับ<br /><span className="text-accent-gradient">ØRIONS</span></>)}
                </h2>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                  {t(
                    "A meaning-driven creative agency. We help brands define direction and express it through campaigns, content, and digital experiences.",
                    "Creative agency ที่ขับเคลื่อนด้วยความหมาย เราช่วยแบรนด์กำหนดทิศทางและแสดงออกผ่าน campaign, content และ digital experience"
                  )}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="max-w-4xl border-t border-divider pt-10">
                <p className="font-body text-[15px] font-medium text-foreground mb-6">{t("Our approach is simple", "แนวทางของเราเรียบง่าย")}</p>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6 whitespace-pre-line">
                  {t(
                    "Human thinking sets the direction.\nAI accelerates the execution.\nCraft ensures the quality.",
                    "Human thinking กำหนดทิศทาง\nAI เร่งการ execution\nCraft รักษาคุณภาพ"
                  )}
                </p>
                <p className="font-body text-[15px] font-medium text-foreground whitespace-pre-line">
                  {t("Strategy first.\nSpeed second.\nAlways both.", "Strategy ก่อน\nSpeed ตามมา\nได้ทั้งสอง")}
                </p>
              </div>
            </AnimatedSection>

            {/* Why Orion? Origin Story */}
            <AnimatedSection delay={0.2}>
              <div className="max-w-4xl border-t border-divider pt-10 mt-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[20px] animate-twinkle">✧</span>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-accent-gradient">{t("Why Orion?", "ทำไม Orion?")}</p>
                </div>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-4">
                  {t(
                    "Named after the hunter constellation — the brightest, most recognizable pattern in the night sky. For thousands of years, travelers have used Orion to find their way. That's what we do for brands.",
                    "ตั้งชื่อตามกลุ่มดาวนายพราน — กลุ่มดาวที่สว่างและจดจำได้ง่ายที่สุดบนท้องฟ้า มานับพันปีที่นักเดินทางใช้กลุ่มดาว Orion เพื่อหาทิศทาง นั่นคือสิ่งที่เราทำให้แบรนด์"
                  )}
                </p>
                <p className="font-body text-[15px] leading-[1.8] text-foreground/80 italic">
                  {t(
                    "We help brands become unmistakable — visible, precise, and unforgettable. Like Orion in the night sky.",
                    "เราช่วยให้แบรนด์โดดเด่นจนแทนที่ไม่ได้ — เหมือนกลุ่มดาว Orion บนท้องฟ้ายามค่ำคืน"
                  )}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 border-b border-divider">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-12">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">
                  The People
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-12">
                <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
                  {t(<>Our<br /><span className="text-accent-gradient">Team</span></>, <>ทีม<br /><span className="text-accent-gradient">ของเรา</span></>)}
                </h2>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                  {t(
                    "A small, focused team of strategists, designers, and storytellers building meaningful brands.",
                    "ทีมเล็กๆ ที่โฟกัส ประกอบด้วย strategist, designer และ storyteller ที่สร้างแบรนด์อย่างมีความหมาย"
                  )}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.08}>
                  <div className="bg-background p-0 group">
                    <div className="w-full aspect-[3/4] overflow-hidden relative">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-700" loading="lazy" />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="font-body text-[15px] font-medium text-foreground mb-1">{member.name}</h3>
                      <p className="font-body text-[13px] text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-12">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">
                  {t("Get in Touch", "ติดต่อเรา")}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-12">
                <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
                  {t(<>Let's Build<br /><span className="text-accent-gradient">Something Great</span></>, <>มาสร้าง<br /><span className="text-accent-gradient">สิ่งดีๆ ด้วยกัน</span></>)}
                </h2>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                  {t(
                    "Tell us about your brand and what you're trying to build. We'll get back to you within 24 hours.",
                    "เล่าให้เราฟังเกี่ยวกับแบรนด์ของคุณและสิ่งที่อยากสร้าง เราจะติดต่อกลับภายใน 24 ชั่วโมง"
                  )}
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Bar */}
            <AnimatedSection delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider mb-16">
                <div className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors duration-300 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2">Email</p>
                  <a href="mailto:hello@orions.agency" className="font-body text-[14px] text-foreground">hello@orions.agency →</a>
                </div>
                <div className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors duration-300 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2">{t("Phone", "โทรศัพท์")}</p>
                  <a href="tel:+66923905464" className="font-body text-[14px] text-foreground">+66 92 390 5464 →</a>
                </div>
                <div className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors duration-300 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2">Location</p>
                  <a href="https://maps.app.goo.gl/MCY3ywNZBYofY49Q9" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-foreground">Bangkok, Thailand →</a>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimatedSection delay={0.1}>
                <div>
                  <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-10">{t("Send a Message", "ส่งข้อความ")}</h3>
                  {submitted ? (
                    <div className="border border-divider p-10 text-center">
                      <p className="font-display text-[30px] tracking-[0.03em] text-foreground mb-3">{t("Thank you", "ขอบคุณครับ")}</p>
                      <p className="font-body text-[14px] text-muted-foreground">{t("We'll be in touch within 24 hours.", "เราจะติดต่อกลับภายใน 24 ชั่วโมง")}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-0">
                      <div className="border-t border-divider py-5">
                        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Name *", "ชื่อ *")}</label>
                        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Your full name", "ชื่อ-นามสกุล") as string} required />
                      </div>
                      <div className="border-t border-divider py-5">
                        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">Email *</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder="your@email.com" required />
                      </div>
                      <div className="border-t border-divider py-5">
                        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Company", "บริษัท")}</label>
                        <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Your company name", "ชื่อบริษัท") as string} />
                      </div>
                      <div className="border-t border-divider py-5">
                        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">Budget Range</label>
                        <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1 appearance-none cursor-pointer">
                          <option value="" className="bg-background">{t("Select a range", "เลือกช่วงงบประมาณ")}</option>
                          <option value="< ฿100K" className="bg-background">Under ฿100,000</option>
                          <option value="฿100K–300K" className="bg-background">฿100,000 – ฿300,000</option>
                          <option value="฿300K–500K" className="bg-background">฿300,000 – ฿500,000</option>
                          <option value="฿500K–1M" className="bg-background">฿500,000 – ฿1,000,000</option>
                          <option value="> ฿1M" className="bg-background">฿1,000,000+</option>
                        </select>
                      </div>
                      <div className="border-t border-divider py-5">
                        <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Message *", "ข้อความ *")}</label>
                        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none min-h-[100px] resize-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Tell us about your project, goals, and timeline...", "เล่าเกี่ยวกับ project เป้าหมาย และ timeline ของคุณ...") as string} required />
                      </div>
                      <div className="border-t border-divider pt-8">
                        <button type="submit" className="bg-accent-gradient text-white px-10 py-3.5 font-mono text-[11px] tracking-[0.1em] uppercase hover:opacity-90 transition-all duration-300 rounded-sm">
                          {t("Send Message →", "ส่งข้อความ →")}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-10">{t("Visit Us", "มาเยี่ยมเรา")}</h3>
                  <div className="w-full aspect-square border border-divider overflow-hidden mb-8">
                    <iframe
                      src="https://maps.google.com/maps?q=246/8+Soi+Yothinpattana+3+Khlong+Chan+Bang+Kapi+Bangkok+10240&output=embed"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title="ØRIONS Office Location"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="font-body text-[14px] text-foreground leading-relaxed">
                      246/8 Soi Yothinpattana 3<br />Khlong Chan, Bang Kapi<br />Bangkok 10240, Thailand
                    </p>
                    <p className="font-body text-[13px] text-muted-foreground">{t("Monday – Friday, 10:00 – 19:00", "จันทร์ – ศุกร์ 10:00 – 19:00")}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
