import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import StarField from "./StarField";

interface ServiceItem {
  num: string;
  name: { en: string; th: string };
  desc: { en: string; th: string };
  tags: { label: string; type?: "ai" | "craft" }[];
  dialog: {
    subtitle: { en: string; th: string };
    process: { en: string[]; th: string[] };
    different: { en: string; th: string };
    keySteps: { label: string; desc: { en: string; th: string } }[];
  };
}

const projectServices: ServiceItem[] = [
  {
    num: "01",
    name: { en: "Brand Strategy & Identity", th: "Brand Strategy & Identity" },
    desc: {
      en: "We find what makes your brand impossible to replace — then express it in a visual and verbal system that works across every channel and market you operate in.",
      th: "เราค้นหาสิ่งที่ทำให้แบรนด์คุณแทนที่ไม่ได้ แล้วแสดงออกเป็นระบบ visual และ verbal ที่ทำงานได้ทุกช่องทางและตลาดที่คุณอยู่",
    },
    tags: [{ label: "Brand Audit", type: "craft" }, { label: "Naming", type: "craft" }, { label: "Logo System" }, { label: "Brand Guidelines" }, { label: "AI Concepting", type: "ai" }, { label: "From ฿45,000" }],
    dialog: {
      subtitle: { en: "Your brand's foundation, built to last.", th: "รากฐานแบรนด์ของคุณ สร้างให้ยั่งยืน" },
      process: {
        en: [
          "We start with a deep brand audit — analyzing your current positioning, competitors, and audience perception. AI tools help us process market data at scale.",
          "From there, we build your complete brand identity system: logo, typography, color palette, tone of voice, and comprehensive guidelines that your team can execute consistently."
        ],
        th: [
          "เราเริ่มด้วย brand audit เชิงลึก — วิเคราะห์ positioning ปัจจุบัน คู่แข่ง และ audience perception โดย AI tools ช่วยประมวล market data ในปริมาณมาก",
          "จากนั้นเราสร้างระบบ brand identity ครบวงจร: logo, typography, color palette, tone of voice และ guidelines ที่ทีมคุณใช้ได้อย่าง consistent"
        ]
      },
      different: { en: "We generate 50+ logo concepts using AI in 48 hours, then our senior designers curate and refine the top 5. You get more options, faster — with the same craft quality.", th: "เราสร้าง logo concept กว่า 50 แบบด้วย AI ใน 48 ชม. แล้ว senior designer คัดเลือกและ refine top 5 — ได้ตัวเลือกมากขึ้น เร็วขึ้น ด้วย craft quality เท่าเดิม" },
      keySteps: [
        { label: "Brand Audit", desc: { en: "Evaluate current brand health & perception", th: "ประเมิน brand health และ perception ปัจจุบัน" } },
        { label: "Competitive Analysis", desc: { en: "AI-powered landscape mapping", th: "AI-powered landscape mapping" } },
        { label: "Naming & Positioning", desc: { en: "Strategic naming with linguistic validation", th: "Strategic naming พร้อม linguistic validation" } },
        { label: "Visual Identity", desc: { en: "Logo system, color, typography", th: "ระบบ logo, สี, typography" } },
        { label: "Verbal Identity", desc: { en: "Tone of voice & messaging framework", th: "Tone of voice & messaging framework" } },
        { label: "Brand Guidelines", desc: { en: "Living document for team implementation", th: "เอกสาร guidelines สำหรับทีม" } },
      ]
    }
  },
  {
    num: "02",
    name: { en: "Campaign Development", th: "Campaign Development" },
    desc: {
      en: "Full-funnel campaigns from insight to execution. We combine data intelligence with narrative craft — campaigns that convert and get remembered.",
      th: "แคมเปญ full-funnel จาก insight ถึง execution ผสมผสาน data intelligence กับ narrative craft — แคมเปญที่ convert และถูกจดจำ",
    },
    tags: [{ label: "Data Insights", type: "ai" }, { label: "Concept Dev", type: "craft" }, { label: "Media Planning" }, { label: "Launch Strategy" }, { label: "From ฿35,000" }],
    dialog: {
      subtitle: { en: "Campaigns that convert and get remembered.", th: "แคมเปญที่ convert และถูกจดจำ" },
      process: {
        en: [
          "Every campaign starts with data — audience behavior, market trends, and competitive intelligence. AI helps us identify high-opportunity creative territories before we invest in production.",
          "We develop full-funnel campaigns from awareness to conversion, with clear KPIs at every stage. Each creative concept is tested with AI-simulated audience responses before going live."
        ],
        th: [
          "ทุกแคมเปญเริ่มจาก data — พฤติกรรม audience, market trends และ competitive intelligence โดย AI ช่วยระบุ creative territory ที่มีโอกาสสูงก่อนลงทุนใน production",
          "เราพัฒนาแคมเปญ full-funnel ตั้งแต่ awareness ถึง conversion พร้อม KPI ชัดเจนทุกขั้น ทุก creative concept ทดสอบด้วย AI-simulated audience response ก่อน go live"
        ]
      },
      different: { en: "We test 20+ creative variations using AI before spending a single baht on media. This means higher ROAS from day one.", th: "เราทดสอบ creative variation กว่า 20 แบบด้วย AI ก่อนใช้เงินแม้แต่บาทเดียวกับ media — ได้ ROAS สูงกว่าตั้งแต่วันแรก" },
      keySteps: [
        { label: "Data Mining", desc: { en: "AI-powered audience & trend analysis", th: "AI-powered audience & trend analysis" } },
        { label: "Concept Development", desc: { en: "Creative territory exploration", th: "สำรวจ creative territory" } },
        { label: "Creative Production", desc: { en: "Copy, visuals & video at scale", th: "Copy, visuals & video ในปริมาณมาก" } },
        { label: "Media Strategy", desc: { en: "Channel mix optimization", th: "Channel mix optimization" } },
        { label: "A/B Testing", desc: { en: "AI-simulated response modeling", th: "AI-simulated response modeling" } },
        { label: "Performance Tracking", desc: { en: "Real-time dashboards & optimization", th: "Real-time dashboards & optimization" } },
      ]
    }
  },
  {
    num: "03",
    name: { en: "Content Production", th: "Content Production" },
    desc: {
      en: "From a single launch to a 12-month content system. AI-scale output with the editorial judgment of a senior creative director on every piece.",
      th: "ตั้งแต่ launch ครั้งเดียวถึง content system 12 เดือน — output ระดับ AI พร้อมวิจารณญาณ Creative Director ในทุกชิ้นงาน",
    },
    tags: [{ label: "AI-Assisted Writing", type: "ai" }, { label: "Art Direction", type: "craft" }, { label: "Photo Direction" }, { label: "Video Scripts" }, { label: "From ฿25,000" }],
    dialog: {
      subtitle: { en: "Volume meets quality. Every single piece.", th: "ปริมาณที่มาพร้อมคุณภาพ ทุกชิ้นงาน" },
      process: {
        en: [
          "Content at scale doesn't have to mean content without soul. We use AI to handle the production heavy-lifting — generating variations, adapting formats, and optimizing for channels.",
          "Every piece goes through our editorial review process. A senior creative director signs off on quality before anything reaches your audience."
        ],
        th: [
          "Content ในปริมาณมากไม่จำเป็นต้องไร้ soul เราใช้ AI จัดการงานหนักของ production — สร้าง variation, ปรับ format และ optimize สำหรับแต่ละ channel",
          "ทุกชิ้นงานผ่าน editorial review process โดย senior creative director sign off คุณภาพก่อนถึง audience"
        ]
      },
      different: { en: "We produce 3x the content volume of a traditional agency at the same budget — because AI handles production while humans handle direction.", th: "เราผลิต content มากกว่า agency ทั่วไป 3 เท่าในงบเดียวกัน — เพราะ AI จัดการ production ขณะที่มนุษย์จัดการ direction" },
      keySteps: [
        { label: "Content Strategy", desc: { en: "Pillar topics & content calendar", th: "Pillar topics & content calendar" } },
        { label: "AI Draft Generation", desc: { en: "First drafts at 10x speed", th: "First draft เร็วขึ้น 10 เท่า" } },
        { label: "Editorial Review", desc: { en: "Human quality control on every piece", th: "Human quality control ทุกชิ้นงาน" } },
        { label: "Visual Production", desc: { en: "Photography, illustration, video", th: "Photography, illustration, video" } },
        { label: "Channel Adaptation", desc: { en: "Resize & reformat for every platform", th: "Resize & reformat สำหรับทุก platform" } },
        { label: "Performance Analysis", desc: { en: "Track & optimize based on data", th: "Track & optimize จาก data" } },
      ]
    }
  },
  {
    num: "04",
    name: { en: "Digital Experience", th: "Digital Experience" },
    desc: {
      en: "Websites and landing pages that convert visitors into customers. Built with performance, brand consistency, and conversion rate optimization as the non-negotiable priorities.",
      th: "เว็บไซต์และ landing page ที่แปลงผู้เยี่ยมชมเป็นลูกค้า สร้างด้วย performance, brand consistency และ conversion rate optimization เป็นสิ่งที่ต้องมี",
    },
    tags: [{ label: "Web Design" }, { label: "UX Strategy", type: "ai" }, { label: "UI Polish", type: "craft" }, { label: "CRO" }, { label: "From ฿30,000" }],
    dialog: {
      subtitle: { en: "Every pixel earns its place.", th: "ทุก pixel มีค่า" },
      process: {
        en: [
          "We design and build digital experiences that are beautiful AND functional. Every design decision is backed by UX data and conversion optimization principles.",
          "AI helps us prototype faster, test more variations, and optimize copy in real-time. But the design sensibility and brand consistency come from our experienced UI/UX team."
        ],
        th: [
          "เราออกแบบและสร้าง digital experience ที่ทั้งสวยและใช้งานได้จริง ทุก design decision มาจาก UX data และหลัก conversion optimization",
          "AI ช่วยให้เรา prototype เร็วขึ้น test variation มากขึ้น และ optimize copy แบบ real-time แต่ design sensibility และ brand consistency มาจากทีม UI/UX ที่มีประสบการณ์"
        ]
      },
      different: { en: "We use AI-powered heatmap prediction and copy optimization before launch — so your site converts better from day one, not after months of A/B testing.", th: "เราใช้ AI-powered heatmap prediction และ copy optimization ก่อน launch — เว็บ convert ได้ดีตั้งแต่วันแรก ไม่ต้องรอ A/B testing หลายเดือน" },
      keySteps: [
        { label: "UX Audit", desc: { en: "Current site analysis & user journey mapping", th: "วิเคราะห์เว็บปัจจุบัน & user journey mapping" } },
        { label: "Wireframing", desc: { en: "AI-assisted layout & flow prototyping", th: "AI-assisted layout & flow prototyping" } },
        { label: "UI Design", desc: { en: "Pixel-perfect design aligned with brand", th: "Pixel-perfect design สอดคล้องกับแบรนด์" } },
        { label: "Development", desc: { en: "Fast, responsive, SEO-optimized build", th: "Build ที่เร็ว responsive และ SEO-optimized" } },
        { label: "Copy Optimization", desc: { en: "AI-refined messaging for conversion", th: "AI-refined messaging เพื่อ conversion" } },
        { label: "Launch & Monitor", desc: { en: "Go-live support & performance tracking", th: "Go-live support & performance tracking" } },
      ]
    }
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
    dialog: {
      subtitle: { en: "Your social presence, always on.", th: "Social presence ของคุณ ออนตลอดเวลา" },
      process: {
        en: [
          "We manage your social channels end-to-end: from content strategy and creation to community management and performance analytics.",
          "AI powers our content calendar planning, trend monitoring, and performance prediction. Humans handle community engagement, brand voice, and creative direction."
        ],
        th: [
          "เราจัดการ social channel ของคุณ end-to-end: ตั้งแต่ content strategy, creation ไปจนถึง community management และ performance analytics",
          "AI ขับเคลื่อน content calendar planning, trend monitoring และ performance prediction มนุษย์ดูแล community engagement, brand voice และ creative direction"
        ]
      },
      different: { en: "Our AI monitors trends in real-time and suggests content opportunities before they peak — so you're always ahead of the conversation, not chasing it.", th: "AI ของเราติดตาม trends แบบ real-time และแนะนำ content opportunities ก่อน peak — คุณนำหน้าการสนทนาเสมอ ไม่ใช่ตามหลัง" },
      keySteps: [
        { label: "Content Strategy", desc: { en: "Monthly themes & content pillars", th: "Monthly themes & content pillars" } },
        { label: "Content Creation", desc: { en: "AI-assisted posts with human polish", th: "AI-assisted posts พร้อม human polish" } },
        { label: "Community Management", desc: { en: "Engagement & conversation management", th: "Engagement & conversation management" } },
        { label: "Trend Monitoring", desc: { en: "Real-time opportunity identification", th: "ระบุโอกาสแบบ real-time" } },
        { label: "Analytics Dashboard", desc: { en: "Weekly performance reporting", th: "Performance reporting รายสัปดาห์" } },
        { label: "Monthly Review", desc: { en: "Strategy optimization meeting", th: "ประชุม strategy optimization รายเดือน" } },
      ]
    }
  },
  {
    num: "R02",
    name: { en: "Monthly Content Production", th: "Monthly Content Production" },
    desc: {
      en: "A consistent, on-brand content pipeline delivered every month. AI-produced at speed, craft-reviewed before it reaches your audience.",
      th: "Content pipeline ที่ consistent และ on-brand ส่งทุกเดือน ผลิตด้วย AI อย่างรวดเร็ว ผ่าน craft review ก่อนถึง audience",
    },
    tags: [{ label: "AI Production", type: "ai" }, { label: "Editorial Review", type: "craft" }, { label: "Copy + Visuals" }, { label: "Content Calendar" }],
    dialog: {
      subtitle: { en: "Never run out of content again.", th: "ไม่ต้องขาด content อีกต่อไป" },
      process: {
        en: [
          "Our monthly content production service delivers a steady stream of on-brand content across all your channels. AI handles volume; our creative team ensures every piece meets your brand standard.",
          "You get a content calendar at the start of each month, review cycles built in, and performance data to inform next month's strategy."
        ],
        th: [
          "บริการ content production รายเดือนของเราส่ง content ที่ on-brand อย่างสม่ำเสมอในทุก channel โดย AI จัดการ volume; creative team ดูแลให้ทุกชิ้นตรง brand standard",
          "คุณได้ content calendar ต้นเดือน, review cycle ที่กำหนดไว้ และ performance data เพื่อวางแผนเดือนถัดไป"
        ]
      },
      different: { en: "3x more content at the same budget compared to traditional agencies. AI produces; humans perfect.", th: "Content มากกว่า 3 เท่าในงบเดียวกันเทียบกับ agency ทั่วไป AI ผลิต; มนุษย์ขัดเกลา" },
      keySteps: [
        { label: "Monthly Planning", desc: { en: "Content calendar & topic selection", th: "Content calendar & เลือก topic" } },
        { label: "AI Draft Creation", desc: { en: "Fast first drafts for all formats", th: "First draft รวดเร็วทุก format" } },
        { label: "Creative Review", desc: { en: "Human editing & art direction", th: "Human editing & art direction" } },
        { label: "Asset Delivery", desc: { en: "Final files in all required formats", th: "ไฟล์ final ทุก format ที่ต้องการ" } },
        { label: "Scheduling", desc: { en: "Automated publishing pipeline", th: "Automated publishing pipeline" } },
        { label: "Performance Report", desc: { en: "End-of-month analytics review", th: "Analytics review สิ้นเดือน" } },
      ]
    }
  },
  {
    num: "R03",
    name: { en: "SEO & Performance Marketing", th: "SEO & Performance Marketing" },
    desc: {
      en: "Organic growth that compounds over time. We build the search presence your brand deserves.",
      th: "Organic growth ที่สะสมตามเวลา เราสร้าง search presence ที่แบรนด์คุณสมควรได้รับ",
    },
    tags: [{ label: "Keyword Research", type: "ai" }, { label: "On-page SEO" }, { label: "Link Building" }, { label: "Performance Tracking", type: "ai" }],
    dialog: {
      subtitle: { en: "Growth that compounds, month after month.", th: "การเติบโตที่สะสม เดือนต่อเดือน" },
      process: {
        en: [
          "SEO is a long game — but AI helps us accelerate it. We use AI-powered keyword research, content optimization, and competitive analysis to build your organic presence faster.",
          "Our approach combines technical SEO, content strategy, and link building into a unified growth engine that compounds over time."
        ],
        th: [
          "SEO เป็นเกมระยะยาว — แต่ AI ช่วยเร่งมันได้ เราใช้ AI-powered keyword research, content optimization และ competitive analysis เพื่อสร้าง organic presence เร็วขึ้น",
          "แนวทางของเรารวม technical SEO, content strategy และ link building เป็น growth engine ที่สะสมผลลัพธ์ตามเวลา"
        ]
      },
      different: { en: "AI identifies keyword opportunities 10x faster and predicts ranking difficulty with 85% accuracy — so we invest your budget where it matters most.", th: "AI ระบุ keyword opportunities เร็วกว่า 10 เท่าและทำนาย ranking difficulty แม่นยำ 85% — เราลงทุนงบของคุณในจุดที่สำคัญที่สุด" },
      keySteps: [
        { label: "Keyword Research", desc: { en: "AI-powered opportunity identification", th: "AI-powered opportunity identification" } },
        { label: "Technical SEO", desc: { en: "Site speed, structure & indexation", th: "Site speed, structure & indexation" } },
        { label: "Content Optimization", desc: { en: "On-page SEO for every page", th: "On-page SEO สำหรับทุกหน้า" } },
        { label: "Link Building", desc: { en: "Quality backlink acquisition", th: "Quality backlink acquisition" } },
        { label: "Competitor Monitoring", desc: { en: "Track competitor rankings & moves", th: "ติดตาม ranking และการเคลื่อนไหวคู่แข่ง" } },
        { label: "Monthly Reporting", desc: { en: "Rankings, traffic & conversion data", th: "Rankings, traffic & conversion data" } },
      ]
    }
  },
  {
    num: "R04",
    name: { en: "Email & LINE Marketing", th: "Email & LINE Marketing" },
    desc: {
      en: "Owned channels are your highest-ROI asset. We build sequences, newsletters, and LINE campaigns that turn subscribers into loyal customers.",
      th: "Owned channels คือ asset ที่ ROI สูงสุดของคุณ เราสร้าง sequence, newsletter และ LINE campaign ที่เปลี่ยน subscriber เป็นลูกค้าประจำ",
    },
    tags: [{ label: "Email Flows" }, { label: "LINE OA" }, { label: "Automation", type: "ai" }, { label: "Copywriting", type: "craft" }],
    dialog: {
      subtitle: { en: "Your highest-ROI channel, maximized.", th: "Channel ที่ ROI สูงสุดของคุณ maximize แล้ว" },
      process: {
        en: [
          "Email and LINE are your most profitable channels — if done right. We build automated sequences, regular newsletters, and targeted campaigns that nurture subscribers into loyal customers.",
          "AI helps us personalize at scale, optimize send times, and A/B test subject lines. But the copy and creative strategy come from humans who understand your brand."
        ],
        th: [
          "Email และ LINE คือ channel ที่ทำกำไรมากที่สุด — ถ้าทำถูกวิธี เราสร้าง automated sequence, newsletter สม่ำเสมอ และ targeted campaign ที่ nurture subscriber ให้เป็นลูกค้าประจำ",
          "AI ช่วยเรา personalize ในปริมาณมาก, optimize เวลาส่ง และ A/B test subject line แต่ copy และ creative strategy มาจากมนุษย์ที่เข้าใจแบรนด์คุณ"
        ]
      },
      different: { en: "Our AI-optimized send times and subject lines consistently deliver 40%+ open rates — double the industry average.", th: "เวลาส่งและ subject line ที่ AI optimize ให้ open rate 40%+ สม่ำเสมอ — เป็นสองเท่าของค่าเฉลี่ย industry" },
      keySteps: [
        { label: "Flow Architecture", desc: { en: "Welcome, nurture & re-engagement sequences", th: "Welcome, nurture & re-engagement sequences" } },
        { label: "Template Design", desc: { en: "Brand-consistent email & LINE templates", th: "Email & LINE template ที่ consistent กับแบรนด์" } },
        { label: "Copy & Content", desc: { en: "Engaging copy for every touchpoint", th: "Copy ที่น่าสนใจสำหรับทุก touchpoint" } },
        { label: "Automation Setup", desc: { en: "Trigger-based workflow configuration", th: "ตั้งค่า trigger-based workflow" } },
        { label: "A/B Testing", desc: { en: "Subject lines, timing & content tests", th: "ทดสอบ subject line, timing & content" } },
        { label: "Performance Review", desc: { en: "Open rates, clicks & conversion analysis", th: "วิเคราะห์ open rate, click & conversion" } },
      ]
    }
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
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { lang, t } = useLanguage();
  const services = activeTab === "proj" ? projectServices : retainerServices;

  const comparisonFeatures = [
    { label: { en: "Social posts / month", th: "Social posts / เดือน" }, signal: "8", orbit: "16", constellation: "30+" },
    { label: { en: "Content calendar", th: "Content calendar" }, signal: "✓", orbit: "✓", constellation: "✓" },
    { label: { en: "Social media management", th: "Social media management" }, signal: "—", orbit: "✓", constellation: "✓" },
    { label: { en: "SEO monitoring & strategy", th: "SEO monitoring & strategy" }, signal: t("Basic", "เบื้องต้น"), orbit: t("Full", "ครบวงจร"), constellation: t("Full + Ads", "ครบ + Ads") },
    { label: { en: "Email / LINE campaigns", th: "Email / LINE campaigns" }, signal: "1", orbit: "2", constellation: t("Unlimited", "ไม่จำกัด") },
    { label: { en: "Dedicated creative lead", th: "Creative Lead เฉพาะ" }, signal: "—", orbit: "✓", constellation: "✓" },
    { label: { en: "Strategy calls", th: "Strategy calls" }, signal: "—", orbit: t("Bi-weekly", "ทุก 2 สัปดาห์"), constellation: t("Weekly", "รายสัปดาห์") },
    { label: { en: "Paid ads management", th: "Paid ads management" }, signal: "—", orbit: "—", constellation: "✓" },
    { label: { en: "Quarterly brand audit", th: "Brand audit รายไตรมาส" }, signal: "—", orbit: "—", constellation: "✓" },
    { label: { en: "Priority SLA (24hr)", th: "Priority SLA (24 ชม.)" }, signal: "—", orbit: "—", constellation: "✓" },
    { label: { en: "Performance reports", th: "Performance reports" }, signal: t("Monthly", "รายเดือน"), orbit: t("Bi-weekly", "ทุก 2 สัปดาห์"), constellation: t("Weekly", "รายสัปดาห์") },
  ];

  return (
    <section id="services" className="py-16 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <StarField count={40} />
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3.5 mb-8 md:mb-12">
            <span className="w-[22px] h-px bg-accent-gradient" />
            <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground">
              {t("What We Do", "สิ่งที่เราทำ")}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-8 md:mb-12">
            <h2 className="font-display text-[clamp(36px,5.5vw,84px)] leading-[0.94] tracking-[0.02em] text-foreground">
              {t(<>Full-service.<br /><span className="text-accent-gradient">Full commitment.</span></>, <>Full-service.<br /><span className="text-accent-gradient">มุ่งมั่นเต็มที่</span></>)}
            </h2>
            <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
              {t(
                "From brand foundation to live campaign. AI-accelerated production, human-led strategy. Choose your path: Navigational Stars for one-time projects, or Orbital Systems for ongoing growth.",
                "ตั้งแต่รากฐานแบรนด์ถึง live campaign — production เร่งด้วย AI, strategy นำโดยมนุษย์ เลือกเส้นทาง: Navigational Stars สำหรับ project หรือ Orbital Systems สำหรับการเติบโตต่อเนื่อง"
              )}
            </p>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex border-b border-divider mb-8 md:mb-12 gap-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab("proj")}
            className={`font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase px-4 sm:px-7 py-3.5 sm:py-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
              activeTab === "proj" ? "text-foreground border-foreground" : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {t("✧ Navigational Stars", "✧ Navigational Stars")}
          </button>
          <button
            onClick={() => setActiveTab("ret")}
            className={`font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase px-4 sm:px-7 py-3.5 sm:py-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
              activeTab === "ret" ? "text-foreground border-foreground" : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {t("☽ Orbital Systems", "☽ Orbital Systems")}
          </button>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider border border-divider">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.08} className="h-full">
              <div
                onClick={() => setSelectedService(s)}
                className="bg-background p-6 sm:p-8 md:p-11 relative overflow-hidden group hover:bg-secondary transition-colors duration-300 cursor-pointer h-full"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-gradient scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-foreground/40 mb-3 sm:mb-5 block">{s.num}</span>
                <h3 className="font-display text-[24px] sm:text-[30px] tracking-[0.04em] leading-none text-foreground mb-2 sm:mb-3">
                  {s.name[lang]}
                </h3>
                <p className="font-body text-[13.5px] sm:text-[14.5px] leading-[1.75] text-muted-foreground mb-4 sm:mb-5">{s.desc[lang]}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`font-mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 border ${
                        tag.type === "ai"
                          ? "border-foreground/15 text-foreground/60"
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
          <div className="mt-5 sm:mt-7 bg-card border border-divider border-l-2 border-l-foreground/20 p-6 sm:p-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-foreground/50 block mb-2.5">
                Monthly Retainer
              </span>
              <h3 className="font-display text-[28px] sm:text-[34px] tracking-[0.04em] leading-none text-foreground mb-2.5">
                {t("Need consistent growth?", "ต้องการเติบโตอย่างต่อเนื่อง?")}
              </h3>
              <p className="font-body text-[13.5px] sm:text-[14px] leading-[1.75] text-muted-foreground max-w-[520px]">
                {t(
                  "Our retainer plans start at ฿18,000/month — social media, content, SEO, and email marketing with a dedicated creative lead.",
                  "Retainer plan เริ่มต้นที่ ฿18,000/เดือน — social media, content, SEO และ email marketing พร้อม creative lead เฉพาะ"
                )}
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground block mb-1">{t("Starting from", "เริ่มต้นที่")}</span>
              <span className="font-display text-[48px] sm:text-[56px] leading-none text-foreground">฿18K</span>
              <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground block mt-1">/ {t("month", "เดือน")}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Retainer Plans */}
        <div className="mt-14 sm:mt-20">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-8 md:mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                Retainer Plans
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider">
            {retainerPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1} className="h-full">
                <div className={`bg-background p-7 sm:p-10 md:p-12 relative transition-colors duration-300 hover:bg-secondary h-full flex flex-col ${plan.best ? "outline outline-1 outline-foreground/20" : ""}`}>
                  {plan.best && plan.badge && (
                    <div className="absolute top-0 left-7 sm:left-10 font-mono text-[9px] tracking-[0.2em] uppercase bg-accent-gradient text-white px-3 py-1.5">
                      {plan.badge[lang]}
                    </div>
                  )}
                  <span className={`font-mono text-[10px] tracking-[0.25em] uppercase text-foreground/50 block ${plan.best ? "mt-7" : ""} mb-4`}>
                    {plan.tier}
                  </span>
                  <h3 className="font-display text-[34px] sm:text-[40px] tracking-[0.04em] leading-none text-foreground mb-1.5">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="font-display text-[48px] sm:text-[60px] leading-none text-foreground">
                      <span className="text-[20px] sm:text-[22px] opacity-45">฿</span>{plan.price}
                    </span>
                    {plan.priceSuffix && <span className="font-display text-[20px] sm:text-[24px] opacity-35">{plan.priceSuffix}</span>}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground block mb-6 sm:mb-8">{plan.per[lang]}</span>
                  <div className="h-px bg-divider mb-5 sm:mb-7" />
                  <ul className="space-y-2.5 mb-7 sm:mb-9 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="font-body text-[13.5px] sm:text-[14px] leading-[1.55] text-muted-foreground flex gap-3 items-baseline">
                        <span className="font-mono text-[10px] text-foreground/40 shrink-0">—</span>
                        {f[lang]}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block text-center font-mono text-[11px] tracking-[0.15em] uppercase py-3.5 border transition-all duration-300 rounded-sm mt-auto ${
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

        {/* Comparison Table */}
        <div className="mt-14 sm:mt-20">
          <AnimatedSection>
            <div className="flex items-center gap-3.5 mb-8 md:mb-12">
              <span className="w-[22px] h-px bg-accent-gradient" />
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground">
                {t("Compare Plans", "เปรียบเทียบแพลน")}
              </span>
            </div>
          </AnimatedSection>

          {/* Desktop table */}
          <AnimatedSection delay={0.1} className="hidden md:block">
            <div className="border border-divider overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-card">
                    <th className="text-left font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50 p-5 border-b border-divider w-[40%]">
                      {t("Feature", "ฟีเจอร์")}
                    </th>
                    <th className="text-center font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50 p-5 border-b border-l border-divider">
                      Signal
                    </th>
                    <th className="text-center font-mono text-[10px] tracking-[0.2em] uppercase p-5 border-b border-l border-divider">
                      <span className="text-foreground">Orbit</span>
                      <span className="block text-[8px] tracking-[0.15em] text-accent-violet mt-0.5">{t("POPULAR", "ยอดนิยม")}</span>
                    </th>
                    <th className="text-center font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50 p-5 border-b border-l border-divider">
                      Constellation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feat, i) => (
                    <tr key={i} className="hover:bg-secondary/50 transition-colors duration-200">
                      <td className="font-body text-[13.5px] text-muted-foreground p-4 px-5 border-b border-divider">
                        {feat.label[lang]}
                      </td>
                      <td className="text-center font-mono text-[12px] text-muted-foreground p-4 border-b border-l border-divider">
                        <span className={feat.signal === "—" ? "opacity-30" : feat.signal === "✓" ? "text-foreground" : ""}>
                          {feat.signal}
                        </span>
                      </td>
                      <td className="text-center font-mono text-[12px] text-muted-foreground p-4 border-b border-l border-divider bg-card/30">
                        <span className={feat.orbit === "—" ? "opacity-30" : feat.orbit === "✓" ? "text-foreground" : ""}>
                          {feat.orbit}
                        </span>
                      </td>
                      <td className="text-center font-mono text-[12px] text-muted-foreground p-4 border-b border-l border-divider">
                        <span className={feat.constellation === "—" ? "opacity-30" : feat.constellation === "✓" ? "text-foreground" : ""}>
                          {feat.constellation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-card">
                    <td className="font-mono text-[10px] tracking-[0.15em] uppercase text-foreground/50 p-5">{t("Monthly price", "ราคา / เดือน")}</td>
                    <td className="text-center font-display text-[24px] text-foreground p-5 border-l border-divider">
                      <span className="text-[14px] opacity-45">฿</span>18K
                    </td>
                    <td className="text-center font-display text-[24px] text-foreground p-5 border-l border-divider bg-card/30">
                      <span className="text-[14px] opacity-45">฿</span>25K
                    </td>
                    <td className="text-center font-display text-[24px] text-foreground p-5 border-l border-divider">
                      <span className="text-[14px] opacity-45">฿</span>35K<span className="text-[14px] opacity-35">+</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </AnimatedSection>

          {/* Mobile comparison - stacked cards */}
          <AnimatedSection delay={0.1} className="md:hidden space-y-4">
            {retainerPlans.map((plan) => (
              <div key={plan.name} className={`border border-divider bg-background p-5 ${plan.best ? "border-foreground/20" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-foreground/50 block">{plan.tier}</span>
                    <h4 className="font-display text-[28px] leading-none text-foreground">{plan.name}</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-[28px] leading-none text-foreground">
                      <span className="text-[14px] opacity-45">฿</span>{plan.price}
                    </span>
                    {plan.priceSuffix && <span className="font-display text-[14px] opacity-35">{plan.priceSuffix}</span>}
                    <span className="font-mono text-[9px] text-muted-foreground block">/ {t("mo", "เดือน")}</span>
                  </div>
                </div>
                {plan.best && plan.badge && (
                  <div className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase bg-accent-gradient text-white px-2.5 py-1 mb-4">
                    {plan.badge[lang]}
                  </div>
                )}
                <div className="h-px bg-divider mb-4" />
                <div className="space-y-2">
                  {comparisonFeatures.map((feat, fi) => {
                    const val = plan.name === "Signal" ? feat.signal : plan.name === "Orbit" ? feat.orbit : feat.constellation;
                    if (val === "—") return null;
                    return (
                      <div key={fi} className="flex justify-between items-baseline gap-3">
                        <span className="font-body text-[13px] text-muted-foreground">{feat.label[lang]}</span>
                        <span className={`font-mono text-[11px] shrink-0 ${val === "✓" ? "text-foreground" : "text-muted-foreground"}`}>{val}</span>
                      </div>
                    );
                  })}
                </div>
                <a
                  href="/contact"
                  className={`block text-center font-mono text-[11px] tracking-[0.15em] uppercase py-3 border transition-all duration-300 rounded-sm mt-5 ${
                    plan.best
                      ? "bg-accent-gradient border-transparent text-white hover:opacity-90"
                      : "border-divider text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {plan.cta[lang]}
                </a>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-divider p-0 gap-0">
          {selectedService && (
            <>
              <DialogHeader className="p-8 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {selectedService.tags.slice(0, 3).map((tag) => (
                       <span key={tag.label} className={`font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-[3px] border ${
                         tag.type === "ai" ? "border-foreground/15 text-foreground/60" : "border-divider text-muted-foreground"
                      }`}>{tag.label}</span>
                    ))}
                  </div>
                </div>
                <DialogTitle className="font-display text-[40px] tracking-[0.03em] leading-none text-foreground mb-2">
                  {selectedService.name[lang]}
                </DialogTitle>
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{selectedService.dialog.subtitle[lang]}</p>
              </DialogHeader>

              <div className="p-8 space-y-8">
                {/* Our Process */}
                <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("Our Process", "กระบวนการของเรา")}</h4>
                  <div className="space-y-3">
                    {selectedService.dialog.process[lang].map((p, i) => (
                      <p key={i} className="font-body text-[14px] leading-[1.75] text-muted-foreground">{p}</p>
                    ))}
                  </div>
                </div>

                {/* How We're Different */}
                <div className="border border-divider bg-card p-6">
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-3">{t("How We're Different", "สิ่งที่เราต่าง")}</h4>
                  <p className="font-body text-[14px] leading-[1.75] text-muted-foreground">{selectedService.dialog.different[lang]}</p>
                </div>

                {/* Key Steps */}
                <div>
                  <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 mb-4">{t("Key Steps", "ขั้นตอนสำคัญ")}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-divider border border-divider">
                    {selectedService.dialog.keySteps.map((ks, i) => (
                      <div key={i} className="bg-background p-4 hover:bg-secondary transition-colors duration-300">
                        <span className="font-mono text-[10px] tracking-[0.1em] text-foreground block mb-1">{ks.label}</span>
                        <span className="font-body text-[13px] text-muted-foreground leading-snug">{ks.desc[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
