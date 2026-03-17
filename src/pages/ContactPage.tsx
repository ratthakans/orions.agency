import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
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

  const inputClass = "w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/30 focus:outline-none border-b border-border focus:border-foreground/50 transition-colors duration-300 pb-3";
  const selectClass = "w-full bg-transparent text-[14px] font-body text-foreground focus:outline-none border-b border-border focus:border-foreground/50 transition-colors duration-300 pb-3 appearance-none cursor-pointer";

  return (
    <main className="bg-background min-h-screen grain-overlay">
      <Helmet>
        <title>Contact — ØRIONS Creative Agency</title>
        <meta name="description" content="Start a project with ORIONS. Tell us about your brand." />
        <link rel="canonical" href="https://orions.agency/contact" />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Compact hero — same spacing as Services */}
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Contact
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-4xl">
                START A <span className="text-accent-gradient">PROJECT.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-lg">
                {t("Tell us about your brand. We'll get back to you within 24 hours.", "เล่าให้เราฟังเกี่ยวกับแบรนด์ เราจะติดต่อกลับภายใน 24 ชั่วโมง")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Two-column layout: form + info */}
        <section className="px-6 md:px-12 py-8 md:py-12 pb-32 md:pb-48">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">
              {/* Form */}
              <AnimatedSection delay={0.04}>
                <div className="group relative border border-border p-8 md:p-12 hover:border-accent-warm/30 transition-all duration-500">
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-warm/0 group-hover:border-accent-warm/30 transition-all duration-500" />

                  {submitted ? (
                    <div className="py-16 text-center">
                      <p className="font-display text-[48px] tracking-[0.01em] text-foreground mb-5">THANK YOU.</p>
                      <p className="font-body text-[16px] text-muted-foreground">{t("We'll be in touch within 24 hours.", "เราจะติดต่อกลับภายใน 24 ชั่วโมง")}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-10">
                      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">
                        <span className="text-accent-warm/50 mr-2">◎</span> {t("Project Inquiry", "สอบถามโปรเจกต์")}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">{t("Name *", "ชื่อ *")}</label>
                          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder={t("Your full name", "ชื่อ-นามสกุล") as string} required />
                        </div>
                        <div>
                          <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">{t("Company", "บริษัท")}</label>
                          <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder={t("Your company name", "ชื่อบริษัท") as string} />
                        </div>
                      </div>
                      <div>
                        <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">Email *</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="your@email.com" required />
                      </div>
                      <div>
                        <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">Project Type</label>
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
                          <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">Budget</label>
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
                          <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">Timeline</label>
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
                        <label className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4 block">{t("Message", "ข้อความ")}</label>
                        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-[15px] font-body text-foreground placeholder:text-muted-foreground/30 focus:outline-none min-h-[100px] resize-none border-b border-border focus:border-foreground/50 transition-colors duration-300 pb-3" placeholder={t("Tell us about your project...", "เล่าเกี่ยวกับโปรเจกต์ของคุณ...") as string} />
                      </div>
                      <div className="pt-4">
                        <button type="submit" className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                          {t("Send Message", "ส่งข้อความ")} →
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Info sidebar */}
              <AnimatedSection delay={0.12}>
                <div className="space-y-10 lg:pt-4">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      <span className="text-accent-warm/50 mr-2">△</span> {t("Direct Contact", "ติดต่อโดยตรง")}
                    </p>
                    <div className="space-y-6">
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">Email</p>
                        <a href="mailto:hello@orions.agency" className="font-body text-[15px] text-foreground/70 hover:text-accent-warm transition-colors duration-300">hello@orions.agency</a>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-2">{t("Phone", "โทรศัพท์")}</p>
                        <a href="tel:+66923905464" className="font-body text-[15px] text-foreground/70 hover:text-accent-warm transition-colors duration-300">+66 92 390 5464</a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-3">{t("Office", "สำนักงาน")}</p>
                    <p className="font-body text-[14px] text-foreground/60 leading-[1.7]">
                      246/8 Soi Yothinpattana,<br />
                      Khlong Chan, Bang Kapi,<br />
                      Bangkok 10240
                    </p>
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-3">{t("Legal", "ข้อมูลบริษัท")}</p>
                    <p className="font-body text-[13px] text-foreground/50 leading-[1.7]">
                      ORIONS CREATIVE CO., LTD.<br />
                      Tax ID: 0105568063442
                    </p>
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-4">{t("Services", "บริการ")}</p>
                    <div className="flex flex-wrap gap-2">
                      {["Content", "Think", "Produce", "Develop"].map((s) => (
                        <span key={s} className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50 border border-border/50 px-3 py-1.5">
                          {s}
                        </span>
                      ))}
                    </div>
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

export default ContactPage;
