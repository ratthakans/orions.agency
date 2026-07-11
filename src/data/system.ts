// ORIONS — a boutique creative agency, "where aesthetic meets algorithm".
// Canonical product/scope copy (user-authored 2026-07-04) + product detail data
// (CI, features, painpoints, screenshots, links) for the /system page.
// The agency builds memorable brands by hand AND its own AI (VÆST) + products.

export const scopes = [
  {
    n: "01",
    k: "Boutique Brand Consultancy",
    d: "ที่ปรึกษาแบรนด์ระดับ high-end ที่เจาะลึกถึงแก่นของปัญหา — ผสาน creative data เข้ากับกลยุทธ์ที่เฉียบคมและวัดผลได้จริง.",
  },
  {
    n: "02",
    k: "Aesthetic Intelligence",
    d: "สมองกล AI ที่ไม่ได้มีแค่ตรรกะและตัวเลข แต่ถูกปลูกถ่าย DNA ให้มีรสนิยม และเข้าใจสุนทรียศาสตร์ทางศิลปะขั้นสูง.",
  },
  {
    n: "03",
    k: "Creative Tech Platforms",
    d: "ระบบนิเวศแพลตฟอร์มของเราเอง สร้างขึ้นเพื่อปฏิวัติและทลายขีดจำกัดของอุตสาหกรรมสร้างสรรค์ในทุกมิติ.",
  },
];

export interface Innovation {
  n: string;
  name: string;
  role: string;
  kind: string;
  powered: string;
  quote?: string;
  body: string;
  /** section accent (each product's own brand colour) */
  accent: string;
  /** live product URL */
  href: string;
  hrefLabel: string;
  /** CI at a glance — palette + type */
  ci: { palette: string[]; type: string; note: string };
  features: { k: string; d: string }[];
  painpoints: string[];
}

export const innovations: Innovation[] = [
  {
    n: "01",
    name: "VÆST",
    role: "The Core Engine",
    kind: "The AI Creative Director",
    powered: "",
    quote: "Computation is nothing without taste.",
    body: "VÆST คือหัวใจและกระดูกสันหลังของจักรวาล ORIONS. ขณะที่ AI ทั่วไปประมวลผลได้เร็วแต่มืดบอดต่อความงาม เราฝังวิธีคิดและวิญญาณของ creative director ระดับท็อปเข้าไปในแกนกลางประมวลผล — VÆST เข้าใจความขบถ จังหวะของ white space และความลุ่มลึกของสุนทรียศาสตร์. มันทำหน้าที่เป็นผู้แปลรหัสจากศิลปะสู่สมการ คอยควบคุมให้ทุกผลผลิตที่ออกจากร่มของ ORIONS สง่างามในระดับที่มนุษย์ต้องหยุดมอง.",
    accent: "#ff5a1f",
    href: "https://vaest-orions.vercel.app",
    hrefLabel: "vaest-orions.vercel.app",
    ci: {
      palette: ["#050506", "#f2f1ee", "#4fc3ff", "#ff5a1f"],
      type: "Inter · Newsreader · IBM Plex Mono",
      note: "ดำสนิท + prism gradient (cyan→orange) · editorial luxe-tech",
    },
    features: [
      { k: "Summing → one document", d: "ทิ้ง brief + ไฟล์กระจัดกระจาย (PDF · sheet · moodboard) แล้ว VÆST ตกผลึกเป็นเอกสารเดียวที่คม แก้ได้ทีละเซคชัน — ไม่ใช่ chatbot" },
      { k: "The Creative Trinity", d: "SKALD (สปาร์ไอเดีย) · ODIN (ตกผลึก) · NORRSKEN (ด่านตรวจรสนิยมก่อนส่ง)" },
      { k: "Ø Think", d: "ปลุก ODIN เป็น senior creative มายั่วให้งานกล้าขึ้น — provocation อ้างอิงถึงจุด ไม่ใช่แค่ตรวจคำผิด" },
      { k: "Taste memory", d: "ทุกครั้งที่ approve/skip ถูกจำไว้ต่อโปรเจกต์ — รสนิยมของสตูดิโอเลิกอยู่ในหัว senior คนเดียว" },
    ],
    painpoints: [
      "AI ทั่วไปเร็วแต่ไร้รสนิยม — วัดกันที่ speed/benchmark ไม่ใช่ว่างาน 'ดี' จริงไหม",
      "brief + ไฟล์เป็นกอง ไม่เคยกลายเป็น direction เดียวที่ใช้ต่อได้",
      "chatbot คายกำแพงตัวอักษร ไม่ใช่เอกสารที่แก้/ส่งได้",
    ],
  },
  {
    n: "02",
    name: "First Draft",
    role: "The Canvas",
    kind: "Screenwriting & Production Platform",
    powered: "Powered by VÆST",
    quote: "Before the final, you need a first draft.",
    body: "แพลตฟอร์มเขียนบท + โปรดักชันครบวงจรบนเบราว์เซอร์ สำหรับทีมหนังไทย/เอเชีย (UI ไทยทั้งหมด). รวม script editor มาตรฐานอุตสาหกรรม เข้ากับ plot planning, story bible และชุดโปรดักชันเต็ม (breakdown → stripboard → callsheet → budget) ผูกกับ single source of truth — แก้บทบรรทัดเดียว เอกสารทุกแผนกอัปเดตตาม. เสริมผู้ช่วย AI 20+ ตัวจาก Gemini ที่อ่านบทไทยเข้าใจ.",
    accent: "#4285F4",
    href: "https://firstdraftpro.co",
    hrefLabel: "firstdraftpro.co",
    ci: {
      palette: ["#FFFFFF", "#111111", "#4285F4", "#EA4335"],
      type: "Fraunces · Inter · IBM Plex Sans Thai",
      note: "Swiss/paper ขาว-ดำ + accent สเปกตรัม Gemini · editorial minimal",
    },
    features: [
      { k: "Script editor มาตรฐาน", d: "จัดรูปแบบบทไทยถูกต้อง นับหน้า/eighths แม่น import Fountain/PDF/DOCX, export PDF และ .fdx" },
      { k: "AI Studio (20+ doctors)", d: "Coverage · Script Doctor · Writers' Room · Ghost autocomplete · Risk Radar — จูนมาให้อ่านบทไทย" },
      { k: "Production Suite ครบ", d: "auto breakdown 19 หมวด → stripboard/DOOD → call sheet, DPR, budget (ATL/BTL). แก้บทแล้ว cascade ทุกเอกสาร" },
      { k: "Story Bible + Collaboration", d: "wiki auto-link [[ชื่อ]] · real-time presence · suggestion mode · version history" },
    ],
    painpoints: [
      "ต้องสลับหลายโปรแกรม (เขียนบท · จัดคิว · ทำ budget) — First Draft รวมในที่เดียว",
      "แก้บทแล้วต้องรื้อเอกสารแผนกใหม่ทุกครั้ง — ที่นี่อัปเดตอัตโนมัติ",
      "ไม่มีเครื่องมือเขียนบท + AI ที่เข้าใจภาษาไทยจริง",
    ],
  },
  {
    n: "03",
    name: "Routte",
    role: "The Compass",
    kind: "The Curated AI Trip Planner",
    powered: "Powered by VÆST",
    quote: "Every day is a story.",
    body: "AI trip planner สำหรับเมืองไทย (mobile-first) ที่เปลี่ยนอารมณ์และเวลาที่คุณมี ให้เป็น 'วันหนึ่งที่เล่าเป็นเรื่อง' — 6 บทมีจังหวะ พร้อม hero moment ไม่ใช่กองหมุดบนแผนที่. เสริมด้วย Passport สะสมตราเมือง และเครือข่ายส่วนลดจริงที่แสกน QR ที่ร้านพาร์ตเนอร์เพื่อรับดีลและจ่ายเงินได้เลย. คัดสรรผ่านเลนส์ศิลปะ สถาปัตยกรรม และวิถีชีวิต ราวกับนิตยสารท่องเที่ยวไฮเอนด์ที่ทำเพื่อคุณคนเดียว.",
    accent: "#F97316",
    href: "https://routte.to",
    hrefLabel: "routte.to",
    ci: {
      palette: ["#0A0A0A", "#F97316", "#14b8a6", "#f5f0e6"],
      type: "Space Grotesk · Unbounded · Inter · JetBrains Mono",
      note: "ดำ + ส้ม coral · ธีม topographic · glassy · app-like premium",
    },
    features: [
      { k: "AI story routes", d: "mood + จำนวนชั่วโมง → วันที่เล่าเป็นเรื่อง 6 บท มี hero moment เดียว พร้อมในไม่ถึงนาที (เวลาเปิด-ปิด/เดินทาง/รสนิยม จัดให้)" },
      { k: "Passport perks + scan-to-save", d: "โชว์ QR ที่ร้านพาร์ตเนอร์ = ส่วนลดบาทจริง ทุกครั้งประทับตราเมือง + นับยอดที่ประหยัด" },
      { k: "Scan-to-pay", d: "ผูกบัตรครั้งเดียว จ่ายบิลที่ร้านด้วย QR เดียว แตะเดียว ใบเสร็จดิจิทัล" },
      { k: "Concierge + Communities", d: "AI local fixer ในกระเป๋า (visa run · คาเฟ่ทำงาน · คืนนี้ไปไหนดี) + crest/มีตอัพชุมชนนักเดินทาง" },
    ],
    painpoints: [
      "ทริปทั่วไป = กองหมุดบนแผนที่ ไม่มีจังหวะ — Routte จัดเป็นวันที่มีเรื่องเล่า timed ตามแสงและพลังงาน",
      "จองทริปเองยุ่ง (เวลาเปิด-ปิด · เดินทาง · รสนิยม) — จัดให้อัตโนมัติ",
      "คูปอง/พอยต์วุ่นวาย — ส่วนลดจริงลดที่เคาน์เตอร์ทันที ไม่ต้องแคปหน้าจอ",
    ],
  },
  {
    n: "04",
    name: "SONAR",
    role: "The Radar",
    kind: "The Quantum-Inspired Creative CRM",
    powered: "Driven by VÆST",
    quote: "Turning dry numbers into a cultural phenomenon.",
    body: "creative CRM สำหรับแบรนด์ SMB/ค้าปลีกไทย — อัปโหลด CSV ลูกค้า แล้ว SONAR คำนวณ RFM segmentation ในเบราว์เซอร์ (ข้อมูลดิบไม่ออกจากเครื่อง) จากนั้น AI ตั้งชื่อ segment เขียน insight ที่มีหลักฐาน และร่างแคมเปญพร้อมยิงต่อ segment. เปลี่ยนตัวเลขแห้งๆ ให้เป็นงานครีเอทีฟระดับ masterpiece — ราวกับมี creative director มานั่งวิเคราะห์จิตวิญญาณลูกค้าแต่ละคน.",
    accent: "#ff6a2b",
    href: "https://mst-golf-crm.vercel.app",
    hrefLabel: "ดูตัวอย่างจริง — MST Golf CRM",
    ci: {
      palette: ["#060607", "#f5f5f2", "#ff6a2b", "#4fb3da"],
      type: "Inter · IBM Plex Mono · Anuphan",
      note: "ดำสนิท + ส้ม cinnabar · gradient สอง pole · xAI/technical cinematic",
    },
    features: [
      { k: "Upload → RFM segmentation", d: "parse CSV + คำนวณ RFM เป็น 6 กลุ่ม (Champions · Loyal · At Risk · Hibernating…) ในเบราว์เซอร์ — ตัวเลขคำนวณจริง ไม่ใช่ AI มั่ว" },
      { k: "Playbook + Creative", d: "แต่ละ segment ได้ 'play' + ข้อความพร้อมยิง ≥5 แบบ ผูกกับ channel และ brand voice" },
      { k: "Insight engine", d: "หา driver / churn / affinity / anomaly พร้อมหลักฐาน ความมั่นใจ และ action ที่แนะนำ" },
      { k: "Owned member base + white-label", d: "ฐานสมาชิกที่โตเองผ่านฟอร์ม + LINE OA · ตั้งสี/ชื่อแบรนด์ให้เป็นของลูกค้า · export PDF" },
    ],
    painpoints: [
      "SMB ไม่มีทีม data มาอ่านไฟล์ลูกค้า — SONAR อ่านระดับนักวิเคราะห์ในไม่ถึงนาที",
      "เครื่องมือทั่วไปให้ 'กราฟแล้วจบ' — SONAR ให้หลักฐาน + ข้อความพร้อม copy ไปใช้",
      "ตัดสินใจหน้าร้านด้วยความรู้สึก — Operations วางบนตัวเลขจริง",
    ],
  },
];
