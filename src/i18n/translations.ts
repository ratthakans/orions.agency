export type Lang = "en" | "th";

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.desc": {
    en: "We define direction, build authority, and create work that moves markets.",
    th: "เรากำหนดทิศทาง สร้างความน่าเชื่อถือ และสร้างสรรค์ผลงานที่ขับเคลื่อนตลาด",
  },
  "hero.trust": {
    en: "Trusted by 50+ brands across Southeast Asia",
    th: "ได้รับความไว้วางใจจากแบรนด์กว่า 50+ แบรนด์ทั่วเอเชียตะวันออกเฉียงใต้",
  },

  // Problem
  "problem.desc": {
    en: "Everyone is publishing. Everyone is advertising. Everyone is speaking louder. But meaning is disappearing.",
    th: "ทุกคนต่างเผยแพร่คอนเทนต์ ทุกคนต่างโฆษณา ทุกคนต่างพูดดังขึ้น แต่ความหมายกลับหายไป",
  },
  "problem.solution_title": {
    en: "ØRIONS exists to change that.",
    th: "ØRIONS มีขึ้นเพื่อเปลี่ยนสิ่งนี้",
  },
  "problem.solution_desc": {
    en: "We reduce noise. We create meaningful communication that people remember.",
    th: "เราลดเสียงรบกวน เราสร้างการสื่อสารที่มีความหมายและผู้คนจดจำได้",
  },

  // Social Proof
  "social.trusted": {
    en: "Trusted by forward-thinking brands",
    th: "ได้รับความไว้วางใจจากแบรนด์ที่มองไปข้างหน้า",
  },

  // Impact
  "impact.desc": {
    en: "Every service we offer is designed to move a specific metric. Here's what happens when ØRIONS works with a brand.",
    th: "ทุกบริการที่เรามอบถูกออกแบบเพื่อขับเคลื่อนตัวชี้วัดเฉพาะ นี่คือผลลัพธ์เมื่อ ØRIONS ทำงานร่วมกับแบรนด์",
  },

  // Process
  "process.desc": {
    en: "A proven four-step process that takes brands from unclear to unforgettable.",
    th: "กระบวนการ 4 ขั้นตอนที่พิสูจน์แล้ว พาแบรนด์จากความไม่ชัดเจนไปสู่ความน่าจดจำ",
  },
  "process.step1": {
    en: "We immerse ourselves in your brand, market, and audience to understand the full landscape before making any decisions.",
    th: "เราเข้าใจแบรนด์ ตลาด และกลุ่มเป้าหมายของคุณอย่างลึกซึ้ง ก่อนที่จะตัดสินใจใดๆ",
  },
  "process.step2": {
    en: "We define your positioning, messaging architecture, and communication roadmap — the blueprint for everything that follows.",
    th: "เรากำหนด positioning สถาปัตยกรรมข้อความ และแผนการสื่อสาร — พิมพ์เขียวสำหรับทุกสิ่งที่ตามมา",
  },
  "process.step3": {
    en: "Our team builds bespoke creative assets, campaigns, and systems designed to cut through noise and create real impact.",
    th: "ทีมของเราสร้างสรรค์ผลงาน แคมเปญ และระบบที่ออกแบบมาเพื่อตัดผ่านเสียงรบกวนและสร้างผลกระทบที่แท้จริง",
  },
  "process.step4": {
    en: "We deploy, measure, and optimize — ensuring your communication compounds over time and delivers lasting ROI.",
    th: "เราเปิดตัว วัดผล และปรับปรุง — เพื่อให้แน่ใจว่าการสื่อสารของคุณเติบโตขึ้นเรื่อยๆ และให้ผลตอบแทนที่ยั่งยืน",
  },

  // Process dialog details
  "process.step1.process_title": { en: "Our Discovery Process", th: "กระบวนการค้นหาของเรา" },
  "process.step1.process": { en: "We conduct brand audits, competitor analysis, audience research, and stakeholder interviews to build a 360° understanding of your landscape.", th: "เราทำ Brand Audit วิเคราะห์คู่แข่ง วิจัยกลุ่มเป้าหมาย และสัมภาษณ์ผู้มีส่วนได้ส่วนเสีย เพื่อสร้างความเข้าใจแบบ 360°" },
  "process.step1.different_title": { en: "How We're Different", th: "เราแตกต่างอย่างไร" },
  "process.step1.different": { en: "We don't skip to tactics. We stay in discovery until we truly understand the brand's truth, market gaps, and audience motivations.", th: "เราไม่กระโดดไปสู่กลยุทธ์ เราอยู่ในขั้นค้นหาจนกว่าจะเข้าใจความจริงของแบรนด์ ช่องว่างในตลาด และแรงจูงใจของผู้ชม" },
  "process.step1.steps_title": { en: "Key Steps", th: "ขั้นตอนสำคัญ" },
  "process.step1.steps": { en: "Brand Audit & Analysis|Competitor Landscape Mapping|Audience & Persona Research|Stakeholder Interviews|Insight Synthesis Report|Strategic Brief Creation", th: "วิเคราะห์แบรนด์|แผนที่ภูมิทัศน์คู่แข่ง|วิจัยกลุ่มเป้าหมาย|สัมภาษณ์ผู้มีส่วนได้ส่วนเสีย|รายงานสรุปข้อมูลเชิงลึก|สร้าง Strategic Brief" },

  "process.step2.process_title": { en: "Our Strategy Framework", th: "กรอบกลยุทธ์ของเรา" },
  "process.step2.process": { en: "We define your brand positioning, messaging hierarchy, and communication roadmap — creating the blueprint that guides every creative decision.", th: "เรากำหนด Brand Positioning ลำดับชั้นข้อความ และแผนการสื่อสาร — สร้างพิมพ์เขียวที่นำทางทุกการตัดสินใจเชิงสร้างสรรค์" },
  "process.step2.different_title": { en: "How We're Different", th: "เราแตกต่างอย่างไร" },
  "process.step2.different": { en: "Strategy isn't a document we hand off. It's a living framework we build with you and refine as the market responds.", th: "กลยุทธ์ไม่ใช่เอกสารที่ส่งมอบ แต่เป็นกรอบที่มีชีวิตที่เราสร้างร่วมกับคุณและปรับปรุงตามการตอบสนองของตลาด" },
  "process.step2.steps_title": { en: "Key Steps", th: "ขั้นตอนสำคัญ" },
  "process.step2.steps": { en: "Brand Positioning Statement|Messaging Architecture|Communication Roadmap|Channel Strategy|Content Pillars Definition|KPI Framework Setup", th: "กำหนด Brand Positioning|สถาปัตยกรรมข้อความ|แผนการสื่อสาร|กลยุทธ์ช่องทาง|กำหนด Content Pillars|ตั้งค่ากรอบ KPI" },

  "process.step3.process_title": { en: "Our Creative Process", th: "กระบวนการสร้างสรรค์ของเรา" },
  "process.step3.process": { en: "Our team builds bespoke creative assets, campaigns, and systems designed to cut through noise and create real, measurable impact.", th: "ทีมของเราสร้างสรรค์ผลงาน แคมเปญ และระบบที่ออกแบบมาเพื่อตัดผ่านเสียงรบกวนและสร้างผลกระทบที่วัดผลได้จริง" },
  "process.step3.different_title": { en: "How We're Different", th: "เราแตกต่างอย่างไร" },
  "process.step3.different": { en: "Every asset is built from strategy, not trends. We create work that's meaningful first, beautiful second — and always both.", th: "ทุกผลงานสร้างจากกลยุทธ์ ไม่ใช่เทรนด์ เราสร้างงานที่มีความหมายก่อน สวยงามเป็นอันดับสอง — และเป็นทั้งสองอย่างเสมอ" },
  "process.step3.steps_title": { en: "Key Steps", th: "ขั้นตอนสำคัญ" },
  "process.step3.steps": { en: "Creative Concept Development|Visual Identity & Design|Campaign Asset Production|Content System Build|Quality Assurance Review|Client Presentation & Refinement", th: "พัฒนาคอนเซ็ปต์ครีเอทีฟ|ออกแบบ Visual Identity|ผลิตแคมเปญ|สร้างระบบคอนเทนต์|ตรวจสอบคุณภาพ|นำเสนอและปรับปรุง" },

  "process.step4.process_title": { en: "Our Launch Strategy", th: "กลยุทธ์การเปิดตัวของเรา" },
  "process.step4.process": { en: "We deploy, measure, and optimize — ensuring your communication compounds over time and delivers lasting, sustainable ROI.", th: "เราเปิดตัว วัดผล และปรับปรุง — เพื่อให้การสื่อสารของคุณเติบโตขึ้นเรื่อยๆ และให้ผลตอบแทนที่ยั่งยืน" },
  "process.step4.different_title": { en: "How We're Different", th: "เราแตกต่างอย่างไร" },
  "process.step4.different": { en: "We don't launch and leave. We stay embedded, tracking performance, iterating creative, and scaling what works.", th: "เราไม่เปิดตัวแล้วจากไป เราอยู่ร่วม ติดตามผล ปรับปรุงครีเอทีฟ และขยายสิ่งที่ได้ผล" },
  "process.step4.steps_title": { en: "Key Steps", th: "ขั้นตอนสำคัญ" },
  "process.step4.steps": { en: "Campaign Launch & Deployment|Performance Tracking Setup|Data Analysis & Reporting|Creative Iteration & A/B Testing|Scale & Optimization|Monthly Strategy Reviews", th: "เปิดตัวแคมเปญ|ตั้งค่าติดตามผลลัพธ์|วิเคราะห์ข้อมูลและรายงาน|ปรับปรุงครีเอทีฟและ A/B Testing|ขยายและเพิ่มประสิทธิภาพ|ทบทวนกลยุทธ์รายเดือน" },

  // FAQ
  "faq.desc": {
    en: "Everything you need to know before starting a project with us.",
    th: "ทุกสิ่งที่คุณต้องรู้ก่อนเริ่มโปรเจกต์กับเรา",
  },

  // CTA Bridge
  "cta.availability": {
    en: "Currently accepting Q2 2026 projects · Join 50+ brands that chose clarity over noise",
    th: "กำลังรับโปรเจกต์ Q2 2026 · ร่วมกับแบรนด์กว่า 50+ ที่เลือกความชัดเจนแทนเสียงรบกวน",
  },

  // Footer
  "footer.tagline": {
    en: "Meaning-driven creative agency.\nNoiseless, More Meaning.",
    th: "ครีเอทีฟเอเจนซี่ที่ขับเคลื่อนด้วยความหมาย\nลดเสียงรบกวน เพิ่มความหมาย",
  },

  // Work
  "work.desc": {
    en: "A selection of projects where we helped brands find clarity and create impact.",
    th: "ผลงานคัดสรรที่เราช่วยแบรนด์ค้นพบความชัดเจนและสร้างผลกระทบ",
  },

  // Contact
  "contact.desc": {
    en: "Tell us about your brand and what you're trying to build. We'll get back to you within 24 hours.",
    th: "เล่าให้เราฟังเกี่ยวกับแบรนด์ของคุณและสิ่งที่คุณต้องการสร้าง เราจะตอบกลับภายใน 24 ชั่วโมง",
  },
  "contact.thankyou": {
    en: "We'll be in touch within 24 hours.",
    th: "เราจะติดต่อกลับภายใน 24 ชั่วโมง",
  },

  // About
  "about.desc": {
    en: "A meaning-driven creative agency. We help brands define direction and express it through campaigns, content, and digital experiences.",
    th: "ครีเอทีฟเอเจนซี่ที่ขับเคลื่อนด้วยความหมาย เราช่วยแบรนด์กำหนดทิศทางและแสดงออกผ่านแคมเปญ คอนเทนต์ และประสบการณ์ดิจิทัล",
  },
  "about.approach": {
    en: "Our approach is simple",
    th: "แนวทางของเราเรียบง่าย",
  },
  "about.team_desc": {
    en: "A small, focused team of strategists, designers, and storytellers building meaningful brands.",
    th: "ทีมเล็กๆ ที่มุ่งมั่น ประกอบด้วยนักกลยุทธ์ นักออกแบบ และนักเล่าเรื่อง สร้างสรรค์แบรนด์ที่มีความหมาย",
  },

  // Services
  "services.desc": {
    en: "These services focus on defining direction and building the key communication assets for the brand.",
    th: "บริการเหล่านี้มุ่งเน้นการกำหนดทิศทางและสร้างสินทรัพย์การสื่อสารหลักสำหรับแบรนด์",
  },
  "programs.desc": {
    en: "These programs help brands maintain consistent communication and long-term digital presence.",
    th: "โปรแกรมเหล่านี้ช่วยให้แบรนด์รักษาการสื่อสารที่สม่ำเสมอและสร้างตัวตนดิจิทัลในระยะยาว",
  },

  // Careers
  "careers.desc": {
    en: "We're always looking for talented, curious people who want to do meaningful creative work. If that sounds like you, we'd love to hear from you.",
    th: "เรามองหาคนที่มีความสามารถและอยากรู้อยากเห็น ที่ต้องการทำงานครีเอทีฟที่มีความหมาย ถ้านั่นคือคุณ เราอยากได้ยินจากคุณ",
  },
  "careers.norole": {
    en: "Don't see your role? We're always open to meeting great people.",
    th: "ไม่เห็นตำแหน่งที่ใช่? เราพร้อมเปิดรับคนเก่งเสมอ",
  },
};

export default translations;
