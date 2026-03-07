import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceItem {
  num: string;
  name: { en: string; th: string };
  desc: { en: string; th: string };
  tags: { label: string; type?: "ai" | "craft" }[];
}

const projectServices: ServiceItem[] = [
  {
    num: "01",
    name: { en: "Brand Strategy & Identity", th: "กลยุทธ์และเอกลักษณ์แบรนด์" },
    desc: {
      en: "We find what makes your brand impossible to replace — then express it in a visual and verbal system that works across every channel and market.",
      th: "เราค้นหาสิ่งที่ทำให้แบรนด์ของคุณไม่สามารถถูกแทนที่ได้ แล้วแสดงออกในระบบ visual และ verbal ที่ทำงานได้ทุกช่องทาง",
    },
    tags: [{ label: "Brand Audit", type: "craft" }, { label: "Naming", type: "craft" }, { label: "Logo System" }, { label: "Brand Guidelines" }, { label: "AI Concepting", type: "ai" }],
  },
  {
    num: "02",
    name: { en: "Campaign Development", th: "พัฒนาแคมเปญ" },
    desc: {
      en: "Full-funnel campaigns from insight to execution. We combine data intelligence with narrative craft — campaigns that convert and get remembered.",
      th: "แคมเปญ full-funnel จาก insight ถึงการดำเนินการ เราผสมผสานข้อมูลเชิงลึกกับงานเล่าเรื่อง",
    },
    tags: [{ label: "Data Insights", type: "ai" }, { label: "Concept Dev", type: "craft" }, { label: "Media Planning" }, { label: "Launch Strategy" }],
  },
  {
    num: "03",
    name: { en: "Content Production", th: "ผลิตคอนเทนต์" },
    desc: {
      en: "From a single launch to a 12-month content system. AI-scale output with the editorial judgment of a senior creative director on every piece.",
      th: "ตั้งแต่การเปิดตัวครั้งเดียวถึงระบบคอนเทนต์ 12 เดือน ผลลัพธ์ระดับ AI พร้อมวิจารณญาณของ Creative Director",
    },
    tags: [{ label: "AI-Assisted Writing", type: "ai" }, { label: "Art Direction", type: "craft" }, { label: "Photo Direction" }, { label: "Video Scripts" }],
  },
  {
    num: "04",
    name: { en: "Digital Experience", th: "ประสบการณ์ดิจิทัล" },
    desc: {
      en: "Websites and landing pages that convert visitors into customers. Built with performance, brand consistency, and conversion rate as the non-negotiables.",
      th: "เว็บไซต์และหน้า landing ที่แปลงผู้เยี่ยมชมให้เป็นลูกค้า สร้างด้วยประสิทธิภาพและ conversion rate",
    },
    tags: [{ label: "Web Design" }, { label: "UX Strategy", type: "ai" }, { label: "UI Polish", type: "craft" }, { label: "CRO" }],
  },
];

const retainerServices: ServiceItem[] = [
  {
    num: "R01",
    name: { en: "Social Media Management", th: "จัดการโซเชียลมีเดีย" },
    desc: {
      en: "We run your social presence as a living brand asset — strategy, creation, community, and analytics. Not just a content queue.",
      th: "เราดูแลการปรากฏตัวบนโซเชียลของคุณในฐานะ brand asset ที่มีชีวิต ไม่ใช่แค่คิวคอนเทนต์",
    },
    tags: [{ label: "IG · TikTok · LINE" }, { label: "Analytics Dashboard", type: "ai" }, { label: "Community Strategy", type: "craft" }],
  },
  {
    num: "R02",
    name: { en: "Monthly Content Production", th: "ผลิตคอนเทนต์รายเดือน" },
    desc: {
      en: "A consistent, on-brand content pipeline delivered every month. AI-produced at speed, craft-reviewed before it reaches your audience.",
      th: "pipeline คอนเทนต์ที่สม่ำเสมอและสอดคล้องกับแบรนด์ ส่งทุกเดือน ผลิตด้วย AI อย่างรวดเร็ว",
    },
    tags: [{ label: "AI Production", type: "ai" }, { label: "Editorial Review", type: "craft" }, { label: "Copy + Visuals" }, { label: "Content Calendar" }],
  },
  {
    num: "R03",
    name: { en: "SEO & Performance Marketing", th: "SEO และการตลาดประสิทธิภาพ" },
    desc: {
      en: "Organic growth that compounds over time. We build the search presence your brand deserves.",
      th: "การเติบโต organic ที่สะสมตามเวลา เราสร้างการปรากฏตัวในการค้นหาที่แบรนด์ของคุณสมควรได้รับ",
    },
    tags: [{ label: "Keyword Research", type: "ai" }, { label: "On-page SEO" }, { label: "Link Building" }, { label: "Performance Tracking", type: "ai" }],
  },
  {
    num: "R04",
    name: { en: "Email & LINE Marketing", th: "Email และ LINE Marketing" },
    desc: {
      en: "Owned channels are your highest-ROI asset. We build sequences, newsletters, and LINE campaigns that turn subscribers into loyal customers.",
      th: "ช่องทางที่เป็นของคุณคือทรัพย์สิน ROI สูงสุด เราสร้าง sequence, newsletter และแคมเปญ LINE",
    },
    tags: [{ label: "Email Flows" }, { label: "LINE OA" }, { label: "Automation", type: "ai" }, { label: "Copywriting", type: "craft" }],
  },
];

const retainerPlans = [
  {
    tier: { en: "Starter", th: "สตาร์ทเตอร์" },
    name: "Signal",
    price: "18,000",
    per: { en: "/ month · 3-month minimum", th: "/ เดือน · ขั้นต่ำ 3 เดือน" },
    features: [
      { en: "8 social posts / month", th: "8 โพสต์โซเชียล / เดือน" },
      { en: "Monthly content calendar", th: "ปฏิทินคอนเทนต์รายเดือน" },
      { en: "Basic SEO monitoring", th: "ติดตาม SEO เบื้องต้น" },
      { en: "Monthly performance report", th: "รายงานประสิทธิภาพรายเดือน" },
      { en: "1 email / LINE campaign", th: "1 แคมเปญ email / LINE" },
    ],
    cta: { en: "Get Started", th: "เริ่มต้น" },
    best: false,
  },
  {
    tier: { en: "Growth", th: "เติบโต" },
    name: "Orbit",
    price: "25,000",
    per: { en: "/ month · 3-month minimum", th: "/ เดือน · ขั้นต่ำ 3 เดือน" },
    features: [
      { en: "16 social posts / month", th: "16 โพสต์โซเชียล / เดือน" },
      { en: "Full social media management", th: "จัดการโซเชียลมีเดียครบวงจร" },
      { en: "SEO content + keyword strategy", th: "คอนเทนต์ SEO + กลยุทธ์คีย์เวิร์ด" },
      { en: "2 email / LINE campaigns / month", th: "2 แคมเปญ email / LINE / เดือน" },
      { en: "Dedicated creative lead", th: "Creative Lead เฉพาะของคุณ" },
      { en: "Bi-weekly strategy calls", th: "ประชุมกลยุทธ์ทุก 2 สัปดาห์" },
    ],
    cta: { en: "Start Orbiting", th: "เริ่ม Orbit" },
    best: true,
    badge: { en: "Most Popular", th: "ยอดนิยม" },
  },
  {
    tier: { en: "Full Service", th: "บริการเต็มรูปแบบ" },
    name: "Constellation",
    price: "35,000",
    priceSuffix: "+",
    per: { en: "/ month · custom scope", th: "/ เดือน · กำหนดขอบเขตเอง" },
    features: [
      { en: "Everything in Orbit", th: "ทุกอย่างใน Orbit" },
      { en: "Paid ads management (Meta / Google)", th: "จัดการโฆษณา paid (Meta / Google)" },
      { en: "Full content production team", th: "ทีมผลิตคอนเทนต์ครบวงจร" },
      { en: "Quarterly brand audit", th: "ตรวจสอบแบรนด์รายไตรมาส" },
      { en: "Priority 24hr response SLA", th: "ตอบสนองด่วน SLA 24 ชม." },
      { en: "Regional market strategy", th: "กลยุทธ์ตลาดระดับภูมิภาค" },
    ],
    cta: { en: "Let's Talk Scope", th: "คุยเรื่องขอบเขต" },
    best: false,
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"proj" | "ret">("proj");
  const { lang, t } = useLanguage();
  const services = activeTab === "proj" ? projectServices : retainerServices;

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
              {t("What We Do", "สิ่งที่เราทำ")}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-12">
            <h2 className="font-display text-[clamp(42px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>Full-service.<br /><span className="text-accent-gradient">Full commitment.</span></>, <>ครบวงจร<br /><span className="text-accent-gradient">มุ่งมั่นเต็มที่</span></>)}
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
              {t(
                "From brand foundation to live campaign. AI-accelerated production, human-led strategy. We work across both project briefs and ongoing retainers.",
                "ตั้งแต่รากฐานแบรนด์ถึงแคมเปญที่ออนแอร์ การผลิตด้วย AI กลยุทธ์นำโดยมนุษย์ เราทำงานทั้งแบบโปรเจกต์และ retainer รายเดือน"
              )}
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex border-b border-divider mb-12 gap-0">
          <button
            onClick={() => setActiveTab("proj")}
            className={`font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 border-b-2 transition-all duration-300 ${
              activeTab === "proj" ? "text-foreground border-accent-violet" : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {t("Project Work", "งานโปรเจกต์")}
          </button>
          <button
            onClick={() => setActiveTab("ret")}
            className={`font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 border-b-2 transition-all duration-300 ${
              activeTab === "ret" ? "text-foreground border-accent-violet" : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {t("Monthly Retainer", "บริการรายเดือน")}
          </button>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-11 relative overflow-hidden group hover:bg-secondary transition-colors duration-300">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <span className="font-mono text-[9px] tracking-[0.22em] text-accent-violet mb-5 block">{s.num}</span>
                <h3 className="font-display text-[30px] tracking-[0.04em] leading-none text-foreground mb-3">
                  {s.name[lang]}
                </h3>
                <p className="font-body text-[13.5px] leading-[1.75] text-muted-foreground mb-5">{s.desc[lang]}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`font-mono text-[8.5px] tracking-[0.12em] uppercase px-2.5 py-1 border ${
                        tag.type === "ai"
                          ? "border-accent-violet/30 text-accent-violet"
                          : tag.type === "craft"
                          ? "border-foreground/15 text-muted-foreground"
                          : "border-divider text-muted-foreground"
                      }`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Retainer callout */}
        <AnimatedSection delay={0.1}>
          <div className="mt-7 bg-card border border-divider border-l-2 border-l-accent-violet p-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-accent-violet block mb-2.5">
                {t("Monthly Retainer", "แพ็กเกจรายเดือน")}
              </span>
              <h3 className="font-display text-[34px] tracking-[0.04em] leading-none text-foreground mb-2.5">
                {t("Need consistent growth?", "ต้องการเติบโตอย่างต่อเนื่อง?")}
              </h3>
              <p className="font-body text-[13.5px] leading-[1.75] text-muted-foreground max-w-[520px]">
                {t(
                  "Our retainer plans start at ฿18,000/month — social media, content, SEO, and email marketing with a dedicated creative lead.",
                  "แผน retainer เริ่มต้นที่ ฿18,000/เดือน — โซเชียลมีเดีย คอนเทนต์ SEO และ email marketing พร้อม creative lead เฉพาะ"
                )}
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground block mb-1">{t("Starting from", "เริ่มต้นที่")}</span>
              <span className="font-display text-[56px] leading-none text-foreground">฿18K</span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground block mt-1">{t("/ month", "/ เดือน")}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Retainer Plans */}
        <div className="mt-20">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
                {t("Retainer Plans", "แผนรายเดือน")}
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider">
            {retainerPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div className={`bg-background p-10 md:p-12 relative transition-colors duration-300 hover:bg-secondary ${plan.best ? "bg-card outline outline-1 outline-accent-violet" : ""}`}>
                  {plan.best && plan.badge && (
                    <div className="absolute top-0 left-10 font-mono text-[8.5px] tracking-[0.2em] uppercase bg-accent-gradient text-white px-3 py-1.5">
                      {plan.badge[lang]}
                    </div>
                  )}
                  <span className={`font-mono text-[9px] tracking-[0.25em] uppercase text-accent-violet block ${plan.best ? "mt-7" : ""} mb-4`}>
                    {plan.tier[lang]}
                  </span>
                  <h3 className="font-display text-[40px] tracking-[0.04em] leading-none text-foreground mb-1.5">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="font-display text-[60px] leading-none text-foreground">
                      <span className="text-[22px] opacity-45">฿</span>{plan.price}
                    </span>
                    {plan.priceSuffix && <span className="font-display text-[24px] opacity-35">{plan.priceSuffix}</span>}
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground block mb-8">{plan.per[lang]}</span>
                  <div className="h-px bg-divider mb-7" />
                  <ul className="space-y-2.5 mb-9">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="font-body text-[13.5px] leading-[1.55] text-muted-foreground flex gap-3 items-baseline">
                        <span className="font-mono text-[10px] text-accent-violet shrink-0">—</span>
                        {f[lang]}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block text-center font-mono text-[10px] tracking-[0.15em] uppercase py-3.5 border transition-all duration-300 rounded-sm ${
                      plan.best
                        ? "bg-accent-gradient border-transparent text-white hover:opacity-90"
                        : "border-divider text-muted-foreground hover:bg-accent-gradient hover:border-transparent hover:text-white"
                    }`}
                  >
                    {plan.cta[lang]}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom note */}
          <AnimatedSection delay={0.1}>
            <div className="mt-5 p-5 border border-divider flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <span className="font-mono text-[9.5px] tracking-[0.12em] text-muted-foreground">
                {t(
                  "All plans include: AI production pipeline · Dedicated creative lead · Monthly strategy session · Cancel or upgrade anytime",
                  "ทุกแผนรวม: AI production pipeline · Creative Lead เฉพาะ · ประชุมกลยุทธ์รายเดือน · ยกเลิกหรืออัพเกรดได้ตลอดเวลา"
                )}
              </span>
              <a href="/contact" className="bg-accent-gradient text-white font-mono text-[10px] tracking-[0.1em] uppercase px-6 py-2.5 rounded-sm shrink-0 hover:opacity-90 transition-opacity">
                {t("Start Today →", "เริ่มเลย →")}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
