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
    name: { en: "Brand Strategy & Identity", th: "Brand Strategy & Identity" },
    desc: {
      en: "We find what makes your brand impossible to replace — then express it in a visual and verbal system that works across every channel and market.",
      th: "เราค้นหาสิ่งที่ทำให้แบรนด์คุณแทนที่ไม่ได้ แล้วแสดงออกเป็นระบบ visual และ verbal ที่ทำงานได้ทุกช่องทาง",
    },
    tags: [{ label: "Brand Audit", type: "craft" }, { label: "Naming", type: "craft" }, { label: "Logo System" }, { label: "Brand Guidelines" }, { label: "AI Concepting", type: "ai" }],
  },
  {
    num: "02",
    name: { en: "Campaign Development", th: "Campaign Development" },
    desc: {
      en: "Full-funnel campaigns from insight to execution. We combine data intelligence with narrative craft — campaigns that convert and get remembered.",
      th: "แคมเปญ full-funnel จาก insight ถึง execution ผสมผสาน data intelligence กับ narrative craft — แคมเปญที่ convert และถูกจดจำ",
    },
    tags: [{ label: "Data Insights", type: "ai" }, { label: "Concept Dev", type: "craft" }, { label: "Media Planning" }, { label: "Launch Strategy" }],
  },
  {
    num: "03",
    name: { en: "Content Production", th: "Content Production" },
    desc: {
      en: "From a single launch to a 12-month content system. AI-scale output with the editorial judgment of a senior creative director on every piece.",
      th: "ตั้งแต่ launch ครั้งเดียวถึง content system 12 เดือน — output ระดับ AI พร้อมวิจารณญาณ Creative Director ในทุกชิ้นงาน",
    },
    tags: [{ label: "AI-Assisted Writing", type: "ai" }, { label: "Art Direction", type: "craft" }, { label: "Photo Direction" }, { label: "Video Scripts" }],
  },
  {
    num: "04",
    name: { en: "Digital Experience", th: "Digital Experience" },
    desc: {
      en: "Websites and landing pages that convert visitors into customers. Built with performance, brand consistency, and conversion rate as the non-negotiables.",
      th: "เว็บไซต์และ landing page ที่แปลงผู้เยี่ยมชมเป็นลูกค้า สร้างด้วย performance, brand consistency และ conversion rate",
    },
    tags: [{ label: "Web Design" }, { label: "UX Strategy", type: "ai" }, { label: "UI Polish", type: "craft" }, { label: "CRO" }],
  },
];

const retainerServices: ServiceItem[] = [
  {
    num: "R01",
    name: { en: "Social Media Management", th: "Social Media Management" },
    desc: {
      en: "We run your social presence as a living brand asset — strategy, creation, community, and analytics. Not just a content queue.",
      th: "เราดูแล social presence ของคุณให้เป็น brand asset ที่มีชีวิต — strategy, creation, community และ analytics ไม่ใช่แค่คิว content",
    },
    tags: [{ label: "IG · TikTok · LINE" }, { label: "Analytics Dashboard", type: "ai" }, { label: "Community Strategy", type: "craft" }],
  },
  {
    num: "R02",
    name: { en: "Monthly Content Production", th: "Monthly Content Production" },
    desc: {
      en: "A consistent, on-brand content pipeline delivered every month. AI-produced at speed, craft-reviewed before it reaches your audience.",
      th: "Content pipeline ที่ consistent และ on-brand ส่งทุกเดือน ผลิตด้วย AI อย่างรวดเร็ว ผ่าน craft review ก่อนถึง audience",
    },
    tags: [{ label: "AI Production", type: "ai" }, { label: "Editorial Review", type: "craft" }, { label: "Copy + Visuals" }, { label: "Content Calendar" }],
  },
  {
    num: "R03",
    name: { en: "SEO & Performance Marketing", th: "SEO & Performance Marketing" },
    desc: {
      en: "Organic growth that compounds over time. We build the search presence your brand deserves.",
      th: "Organic growth ที่สะสมตามเวลา เราสร้าง search presence ที่แบรนด์คุณสมควรได้รับ",
    },
    tags: [{ label: "Keyword Research", type: "ai" }, { label: "On-page SEO" }, { label: "Link Building" }, { label: "Performance Tracking", type: "ai" }],
  },
  {
    num: "R04",
    name: { en: "Email & LINE Marketing", th: "Email & LINE Marketing" },
    desc: {
      en: "Owned channels are your highest-ROI asset. We build sequences, newsletters, and LINE campaigns that turn subscribers into loyal customers.",
      th: "Owned channels คือ asset ที่ ROI สูงสุดของคุณ เราสร้าง sequence, newsletter และ LINE campaign ที่เปลี่ยน subscriber เป็นลูกค้าประจำ",
    },
    tags: [{ label: "Email Flows" }, { label: "LINE OA" }, { label: "Automation", type: "ai" }, { label: "Copywriting", type: "craft" }],
  },
];

const retainerPlans = [
  {
    tier: "Starter",
    name: "Signal",
    price: "18,000",
    per: { en: "/ month · 3-month minimum", th: "/ เดือน · ขั้นต่ำ 3 เดือน" },
    features: [
      { en: "8 social posts / month", th: "8 social posts / เดือน" },
      { en: "Monthly content calendar", th: "Content calendar รายเดือน" },
      { en: "Basic SEO monitoring", th: "SEO monitoring เบื้องต้น" },
      { en: "Monthly performance report", th: "Performance report รายเดือน" },
      { en: "1 email / LINE campaign", th: "1 email / LINE campaign" },
    ],
    cta: { en: "Get Started", th: "เริ่มต้น" },
    best: false,
  },
  {
    tier: "Growth",
    name: "Orbit",
    price: "25,000",
    per: { en: "/ month · 3-month minimum", th: "/ เดือน · ขั้นต่ำ 3 เดือน" },
    features: [
      { en: "16 social posts / month", th: "16 social posts / เดือน" },
      { en: "Full social media management", th: "Social media management ครบวงจร" },
      { en: "SEO content + keyword strategy", th: "SEO content + keyword strategy" },
      { en: "2 email / LINE campaigns / month", th: "2 email / LINE campaigns / เดือน" },
      { en: "Dedicated creative lead", th: "Creative Lead เฉพาะของคุณ" },
      { en: "Bi-weekly strategy calls", th: "Strategy call ทุก 2 สัปดาห์" },
    ],
    cta: { en: "Start Orbiting", th: "เริ่ม Orbit" },
    best: true,
    badge: { en: "Most Popular", th: "ยอดนิยม" },
  },
  {
    tier: "Full Service",
    name: "Constellation",
    price: "35,000",
    priceSuffix: "+",
    per: { en: "/ month · custom scope", th: "/ เดือน · กำหนด scope เอง" },
    features: [
      { en: "Everything in Orbit", th: "ทุกอย่างใน Orbit" },
      { en: "Paid ads management (Meta / Google)", th: "Paid ads management (Meta / Google)" },
      { en: "Full content production team", th: "Content production team ครบทีม" },
      { en: "Quarterly brand audit", th: "Brand audit รายไตรมาส" },
      { en: "Priority 24hr response SLA", th: "Priority SLA ตอบภายใน 24 ชม." },
      { en: "Regional market strategy", th: "Regional market strategy" },
    ],
    cta: { en: "Let's Talk Scope", th: "คุยเรื่อง Scope" },
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
              {t(<>Full-service.<br /><span className="text-accent-gradient">Full commitment.</span></>, <>Full-service.<br /><span className="text-accent-gradient">มุ่งมั่นเต็มที่</span></>)}
            </h2>
            <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
              {t(
                "From brand foundation to live campaign. AI-accelerated production, human-led strategy. We work across both project briefs and ongoing retainers.",
                "ตั้งแต่รากฐานแบรนด์ถึง live campaign — production เร่งด้วย AI, strategy นำโดยมนุษย์ ทำได้ทั้งแบบ project และ retainer รายเดือน"
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
            {t("Project Work", "Project Work")}
          </button>
          <button
            onClick={() => setActiveTab("ret")}
            className={`font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 border-b-2 transition-all duration-300 ${
              activeTab === "ret" ? "text-foreground border-accent-violet" : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {t("Monthly Retainer", "Monthly Retainer")}
          </button>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-11 relative overflow-hidden group hover:bg-secondary transition-colors duration-300">
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
                Monthly Retainer
              </span>
              <h3 className="font-display text-[34px] tracking-[0.04em] leading-none text-foreground mb-2.5">
                {t("Need consistent growth?", "ต้องการเติบโตอย่างต่อเนื่อง?")}
              </h3>
              <p className="font-body text-[13.5px] leading-[1.75] text-muted-foreground max-w-[520px]">
                {t(
                  "Our retainer plans start at ฿18,000/month — social media, content, SEO, and email marketing with a dedicated creative lead.",
                  "Retainer plan เริ่มต้นที่ ฿18,000/เดือน — social media, content, SEO และ email marketing พร้อม creative lead เฉพาะ"
                )}
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground block mb-1">{t("Starting from", "เริ่มต้นที่")}</span>
              <span className="font-display text-[56px] leading-none text-foreground">฿18K</span>
              <span className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground block mt-1">/ {t("month", "เดือน")}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Retainer Plans */}
        <div className="mt-20">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-accent-violet">
                Retainer Plans
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
                    {plan.tier}
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
                        : "border-divider text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {plan.cta[lang]}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
