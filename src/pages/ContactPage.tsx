import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StarField from "@/components/StarField";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", company: "", projectType: "", budget: "", timeline: "", email: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>Contact — ØRIONS Creative Agency</title>
        <meta name="description" content="Start a project with ORIONS. Tell us about your brand and what you need — we'll get back to you within 24 hours." />
        <link rel="canonical" href="https://orions.agency/contact" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={40} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3.5 mb-10">
                <span className="w-[22px] h-px bg-accent-gradient" />
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">Contact</span>
              </div>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-4xl">
                {t(<>Start a <span className="text-accent-gradient">Project.</span></>, <>เริ่ม<span className="text-accent-gradient">โปรเจกต์</span></>)}
              </h1>
              <p className="font-body text-[16px] leading-[1.8] text-muted-foreground max-w-xl">
                {t(
                  "Tell us about your brand, your goals, and what you're trying to build. We'll get back to you within 24 hours.",
                  "เล่าให้เราฟังเกี่ยวกับแบรนด์ เป้าหมาย และสิ่งที่อยากสร้าง เราจะติดต่อกลับภายใน 24 ชั่วโมง"
                )}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
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
          </div>
        </section>

        {/* Form */}
        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              {submitted ? (
                <div className="border border-divider p-16 text-center">
                  <p className="font-display text-[40px] tracking-[0.03em] text-foreground mb-4">{t("Thank you.", "ขอบคุณครับ")}</p>
                  <p className="font-body text-[15px] text-muted-foreground">{t("We'll be in touch within 24 hours.", "เราจะติดต่อกลับภายใน 24 ชั่วโมง")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  <div className="border-t border-divider py-5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Name *", "ชื่อ *")}</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Your full name", "ชื่อ-นามสกุล") as string} required />
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Company", "บริษัท")}</label>
                    <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Your company name", "ชื่อบริษัท") as string} />
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Project Type", "ประเภทโปรเจกต์")}</label>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1 appearance-none cursor-pointer">
                      <option value="" className="bg-background">{t("Select project type", "เลือกประเภทโปรเจกต์")}</option>
                      <option value="content" className="bg-background">Content</option>
                      <option value="think" className="bg-background">Think (Strategy)</option>
                      <option value="produce" className="bg-background">Produce (Film)</option>
                      <option value="develop" className="bg-background">Develop (Brand)</option>
                      <option value="other" className="bg-background">{t("Other", "อื่นๆ")}</option>
                    </select>
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">Budget Range</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1 appearance-none cursor-pointer">
                      <option value="" className="bg-background">{t("Select a range", "เลือกช่วงงบประมาณ")}</option>
                      <option value="50k-150k" className="bg-background">฿50,000 – ฿150,000</option>
                      <option value="150k-350k" className="bg-background">฿150,000 – ฿350,000</option>
                      <option value="350k-600k" className="bg-background">฿350,000 – ฿600,000</option>
                      <option value="600k-1m" className="bg-background">฿600,000 – ฿1,000,000</option>
                      <option value="1m+" className="bg-background">฿1,000,000+</option>
                    </select>
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">Timeline</label>
                    <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1 appearance-none cursor-pointer">
                      <option value="" className="bg-background">{t("Select timeline", "เลือก timeline")}</option>
                      <option value="asap" className="bg-background">{t("As soon as possible", "เร็วที่สุด")}</option>
                      <option value="1-2months" className="bg-background">{t("1–2 months", "1–2 เดือน")}</option>
                      <option value="3-6months" className="bg-background">{t("3–6 months", "3–6 เดือน")}</option>
                      <option value="flexible" className="bg-background">{t("Flexible", "ยืดหยุ่นได้")}</option>
                    </select>
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">Email *</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder="your@email.com" required />
                  </div>
                  <div className="border-t border-divider py-5">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-2 block">{t("Message", "ข้อความ")}</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none min-h-[120px] resize-none border-b border-transparent focus:border-foreground/30 transition-colors duration-300 pb-1" placeholder={t("Tell us about your project...", "เล่าเกี่ยวกับโปรเจกต์ของคุณ...") as string} />
                  </div>
                  <div className="border-t border-divider pt-8">
                    <button type="submit" className="bg-accent-gradient text-white px-10 py-3.5 font-mono text-[11px] tracking-[0.1em] uppercase hover:opacity-90 transition-all duration-300 rounded-sm">
                      {t("Start a Project →", "เริ่ม Project →")}
                    </button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
