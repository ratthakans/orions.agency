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

  const inputClass = "w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/30 focus:outline-none border-b border-divider focus:border-foreground/30 transition-colors duration-500 pb-2";
  const selectClass = "w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-divider focus:border-foreground/30 transition-colors duration-500 pb-2 appearance-none cursor-pointer";

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Contact — ØRIONS Creative Agency</title>
        <meta name="description" content="Start a project with ORIONS. Tell us about your brand." />
        <link rel="canonical" href="https://orions.agency/contact" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
          <StarField count={15} />
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection>
              <p className="font-mono text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-8">Contact</p>
              <h1 className="font-display text-[clamp(52px,7vw,120px)] leading-[0.88] tracking-[0.02em] text-foreground mb-8 max-w-3xl">
                {t(<>Start a <span className="text-accent-gradient">Project.</span></>, <>เริ่ม<span className="text-accent-gradient">โปรเจกต์</span></>)}
              </h1>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground max-w-lg">
                {t("Tell us about your brand. We'll get back to you within 24 hours.", "เล่าให้เราฟังเกี่ยวกับแบรนด์ เราจะติดต่อกลับภายใน 24 ชั่วโมง")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Info */}
        <section className="px-6 md:px-12 mb-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection delay={0.05}>
              <div className="flex flex-wrap gap-x-16 gap-y-4 pb-12 border-b border-divider">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">Email</p>
                  <a href="mailto:hello@orions.agency" className="font-body text-[14px] text-foreground hover:text-accent-gradient transition-colors duration-500">hello@orions.agency</a>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">{t("Phone", "โทรศัพท์")}</p>
                  <a href="tel:+66923905464" className="font-body text-[14px] text-foreground hover:text-accent-gradient transition-colors duration-500">+66 92 390 5464</a>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">Location</p>
                  <span className="font-body text-[14px] text-foreground">Bangkok, Thailand</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Form */}
        <section className="px-6 md:px-12 pb-28 md:pb-40">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={0.1}>
              {submitted ? (
                <div className="py-20 text-center">
                  <p className="font-display text-[48px] tracking-[0.03em] text-foreground mb-4">{t("Thank you.", "ขอบคุณครับ")}</p>
                  <p className="font-body text-[15px] text-muted-foreground">{t("We'll be in touch within 24 hours.", "เราจะติดต่อกลับภายใน 24 ชั่วโมง")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">{t("Name *", "ชื่อ *")}</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder={t("Your full name", "ชื่อ-นามสกุล") as string} required />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">{t("Company", "บริษัท")}</label>
                    <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder={t("Your company name", "ชื่อบริษัท") as string} />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">{t("Project Type", "ประเภทโปรเจกต์")}</label>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={selectClass}>
                      <option value="" className="bg-background">{t("Select", "เลือก")}</option>
                      <option value="content" className="bg-background">Content</option>
                      <option value="think" className="bg-background">Think (Strategy)</option>
                      <option value="produce" className="bg-background">Produce (Film)</option>
                      <option value="develop" className="bg-background">Develop (Brand)</option>
                      <option value="other" className="bg-background">{t("Other", "อื่นๆ")}</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">Budget</label>
                      <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={selectClass}>
                        <option value="" className="bg-background">{t("Select", "เลือก")}</option>
                        <option value="50k-150k" className="bg-background">฿50k – 150k</option>
                        <option value="150k-350k" className="bg-background">฿150k – 350k</option>
                        <option value="350k-600k" className="bg-background">฿350k – 600k</option>
                        <option value="600k-1m" className="bg-background">฿600k – 1M</option>
                        <option value="1m+" className="bg-background">฿1M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">Timeline</label>
                      <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className={selectClass}>
                        <option value="" className="bg-background">{t("Select", "เลือก")}</option>
                        <option value="asap" className="bg-background">ASAP</option>
                        <option value="1-2m" className="bg-background">1–2 months</option>
                        <option value="3-6m" className="bg-background">3–6 months</option>
                        <option value="flex" className="bg-background">Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">Email *</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-3 block">{t("Message", "ข้อความ")}</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/30 focus:outline-none min-h-[120px] resize-none border-b border-divider focus:border-foreground/30 transition-colors duration-500 pb-2" placeholder={t("Tell us about your project...", "เล่าเกี่ยวกับโปรเจกต์ของคุณ...") as string} />
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="bg-foreground text-background px-10 py-3.5 font-mono text-[10px] tracking-[0.16em] uppercase hover:opacity-85 transition-opacity">
                      {t("Send Message", "ส่งข้อความ")}
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
