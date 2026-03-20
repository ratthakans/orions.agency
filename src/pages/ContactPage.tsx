import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://orions.agency/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://orions.agency/contact" },
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "ØRIONS",
      url: "https://orions.agency/contact",
      telephone: "+66-92-390-5464",
      email: "hello@orions.agency",
      areaServed: ["Bangkok", "Thailand", "Southeast Asia"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "246/8 Soi Yothinpattana",
        addressLocality: "Khlong Chan, Bang Kapi",
        addressRegion: "Bangkok",
        postalCode: "10240",
        addressCountry: "TH",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    },
  ],
};

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
      <SEO
        title="Contact ØRIONS | Creative Agency Bangkok"
        description="Contact ØRIONS in Bangkok to start a branding, campaign, content, or film production project. Share your brief and get a response within 24 hours."
        path="/contact"
        keywords="contact creative agency Bangkok, start project production house Thailand, branding agency Bangkok contact"
        schema={contactSchema}
      />
      <Navbar />
      <div className="pt-20">
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="text-accent-warm mr-2">✦</span> Contact
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-6 max-w-5xl">
                START A PROJECT
                <br />WITH <span className="text-accent-gradient">ØRIONS.</span>
              </h1>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-2xl">
                {t("Tell us about your brand, campaign, film, or content need. Our Bangkok team will get back to you within 24 hours.", "เล่าให้เราฟังเกี่ยวกับแบรนด์ แคมเปญ ภาพยนตร์ หรือ content ที่คุณต้องการ แล้วทีมกรุงเทพฯ ของเราจะติดต่อกลับภายใน 24 ชั่วโมง")}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 py-8 md:py-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">
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
                          <option value="creative-direction" className="bg-background">Creative Direction</option>
                          <option value="campaign" className="bg-background">Campaign Development</option>
                          <option value="production" className="bg-background">Content Production</option>
                          <option value="partner" className="bg-background">Creative Partner</option>
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
                        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-transparent text-[14px] font-body text-foreground placeholder:text-muted-foreground/30 focus:outline-none min-h-[100px] resize-none border-b border-border focus:border-foreground/50 transition-colors duration-300 pb-3" placeholder={t("Tell us about your project...", "เล่าเกี่ยวกับโปรเจกต์ของคุณ...") as string} />
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
                    <p className="font-body text-[14px] text-foreground/60 leading-[1.7] mb-4">
                      246/8 Soi Yothinpattana,<br />
                      Khlong Chan, Bang Kapi,<br />
                      Bangkok 10240
                    </p>
                    <a href="https://maps.google.com/?q=246/8+Soi+Yothinpattana+Bangkok+10240" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                      Open map →
                    </a>
                  </div>

                  <div className="border-t border-border pt-8">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-3">{t("Business Hours", "เวลาทำการ")}</p>
                    <p className="font-body text-[13px] text-foreground/50 leading-[1.7]">
                      Monday – Friday<br />
                      10:00 – 19:00
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
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Creative Direction", "Campaign", "Production", "Partner"].map((s) => (
                        <span key={s} className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted-foreground/50 border border-border/50 px-3 py-1.5">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link to="/services" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">Explore services →</Link>
                      <Link to="/work" className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">See selected work →</Link>
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
