// ORIONS — a boutique creative agency, "where aesthetic meets algorithm".
// Canonical product/scope copy (user-authored 2026-07-04; product facts synced
// from the actual product repos + live sites 2026-07-16) for the /system page.
// The agency builds memorable brands by hand AND its own AI (VÆST) + products.
//
// Story arc of the four instruments — from the thinking room to the road:
//   คิด (VÆST) → เขียน (First Draft) → บริหารสตูดิโอ (COLLAPS) → ออกเดินทาง (Routte)

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
  /** live product URL — or an internal /contact route while in private beta */
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
    body: "VÆST คือหัวใจและกระดูกสันหลังของจักรวาล ORIONS. ขณะที่ AI ทั่วไปประมวลผลได้เร็วแต่มืดบอดต่อความงาม เราฝังวิธีคิดและวิญญาณของ creative director ระดับท็อปเข้าไปในแกนกลางประมวลผล — โยน brief ไฟล์ สเปรดชีต มูดบอร์ดที่ขัดแย้งกันเองลงไป แล้วกด Crystallize: ได้เอกสารเดียวที่คม อ่านรู้เรื่อง แก้ได้ถึงระดับประโยค และผ่านด่านตรวจรสนิยมครั้งสุดท้ายก่อนส่งเสมอ. เปิดใช้จริงแล้วที่ vaest.orions.agency.",
    accent: "#ff5a1f",
    href: "https://vaest.orions.agency",
    hrefLabel: "vaest.orions.agency",
    ci: {
      palette: ["#050506", "#f2f1ee", "#4fc3ff", "#ff5a1f"],
      type: "Inter · Newsreader · IBM Plex Mono",
      note: "ดำสนิท + prism gradient (cyan→orange) · editorial luxe-tech",
    },
    features: [
      { k: "Crystallize → one document", d: "ทิ้ง brief + ไฟล์กระจัดกระจาย (PDF · sheet · moodboard) แล้ว VÆST ตกผลึกเป็นเอกสารเดียวที่คม — ไม่ใช่ chatbot ไม่ใช่กำแพงแชท" },
      { k: "Document canvas", d: "แก้ทั้งเซคชัน หรือไฮไลต์ทีละประโยค — Shorten · Formal · Expand · Ask VÆST" },
      { k: "Client loop", d: "แชร์ลิงก์ read-only ให้ลูกค้าคอมเมนต์ตรงเซคชัน แล้วกดเดียว apply โน้ตเป็น revision — feedback เลิกจมในอีเมล" },
      { k: "Ø Think + apex audit", d: "ปลุก ODIN เป็น senior creative มายั่วให้งานกล้าขึ้น และ NORRSKEN ตรวจความย้อนแย้ง/ตรรกะทั้งฉบับ อ้างอิงถึงบรรทัด — ไม่ผ่าน ไม่ส่ง" },
    ],
    painpoints: [
      "input จากลูกค้ากระจัดกระจายและขัดกันเอง — อีเมล 4 ฉบับ เอกสาร 40 หน้า มูดบอร์ดคลุมเครือ ไม่เคยกลายเป็นทิศทางเดียว",
      "feedback วนอยู่ในเธรดอีเมล ไม่เคยลงมาอยู่ในตัวงาน",
      "รสนิยมของสตูดิโออยู่ในหัว senior คนเดียว — VÆST เปลี่ยนมันเป็น infrastructure",
    ],
  },
  {
    n: "02",
    name: "First Draft",
    role: "The Canvas",
    kind: "Screenwriting & Production Platform",
    powered: "Powered by VÆST",
    quote: "Before the final, you need a first draft.",
    body: "แพลตฟอร์มเขียนบท + โปรดักชันครบวงจรบนเบราว์เซอร์ สำหรับทีมหนังไทย/เอเชีย (UI ไทยทั้งหมด). หัวใจคือ Living Production Graph — บทคือ single source of truth: แก้บทฉากเดียว แล้ว breakdown · stripboard · callsheet · budget ของทุกแผนกขยับตามทันที. เสริมด้วย VÆST AI 20+ บทบาทที่อ่านบทไทยแตกจริง ให้โน้ตระดับทีมงานจริง.",
    accent: "#ffa14b",
    href: "https://firstdraftpro.co",
    hrefLabel: "firstdraftpro.co",
    ci: {
      palette: ["#ffffff", "#0b0b0d", "#ffa14b", "#ff5a1f"],
      type: "Inter · Fraunces · IBM Plex Sans Thai · JetBrains Mono",
      note: "paper/ink อบอุ่น + amber→orange gradient · editorial minimal",
    },
    features: [
      { k: "Script editor มาตรฐาน", d: "จัดรูปแบบบทไทยถูกต้อง นับหน้า/eighths แม่น import Fountain/PDF/DOCX, export PDF และ .fdx" },
      { k: "VÆST AI Studio (20+ doctors)", d: "Coverage · Script Doctor · Writers' Room · Ghost co-writer — จูนมาให้อ่านบทไทยเข้าใจจริง" },
      { k: "Living Production Graph", d: "auto breakdown → stripboard/DOOD → call sheet, DPR, budget (ATL/BTL). แก้บทแล้ว propagate ทุกเอกสารในคลิกเดียว" },
      { k: "Plot Map + Story Bible", d: "โครงเรื่อง/beat/tension graph · wiki auto-link [[ชื่อ]] · storyboard วาดเองหรือ AI · เอกสารกองถ่ายครบ" },
    ],
    painpoints: [
      "ต้องสลับหลายโปรแกรม (เขียนบท · จัดคิว · ทำ budget) — First Draft รวมในที่เดียว",
      "แก้บทแล้วเอกสารทุกแผนกค้างเวอร์ชันเก่า — ที่นี่อัปเดตตามอัตโนมัติ ไม่มีเอกสารตกหล่น",
      "เครื่องมือเขียนบท + AI ที่เข้าใจภาษาไทยจริงยังไม่เคยมี — ในราคาที่ทีมไทยจ่ายไหว",
    ],
  },
  {
    n: "03",
    name: "COLLAPS",
    role: "The Engine Room",
    kind: "The Creative Operating System",
    powered: "",
    quote: "Run your studio. Not your software.",
    body: "ระบบปฏิบัติการของสตูดิโอครีเอทีฟ — ยุบ CRM · โน้ต · project management · แชททีม · บัญชี ที่เคยกระจายอยู่เจ็ดที่ ให้เหลือ loop เดียว: ลีดเข้ามาเป็นลูกค้า, Sales AI ร่างข้อเสนอ/ราคา/กำหนดเวลาจาก rate card + กำลังทีม + margin จริง, อนุมัติใบเสนอราคาแล้วงานไหลเป็นโปรเจกต์พร้อมงบ โดย margin มองเห็นตลอดทาง. รู้ว่าควรขายอะไร ทีมส่งมอบไหวไหม และเหลือกำไรเท่าไร — ก่อนใบเสนอราคาจะออกจากมือ.",
    accent: "#7c6cff",
    href: "/contact?pkg=COLLAPS",
    hrefLabel: "Private beta — ขอทดลองใช้",
    ci: {
      palette: ["#f6f4f2", "#14131a", "#7c6cff", "#ff8d7c"],
      type: "Inter · Newsreader · IBM Plex Mono",
      note: "paper/ink + aurora gradient (blue→violet→coral) · warm editorial SaaS",
    },
    features: [
      { k: "CRM & Leads", d: "Account 360 + pipeline — ลีดจากเว็บ/LINE/อีเมล ยุบเป็นประวัติลูกค้า บทสนทนา และดีลเดียว" },
      { k: "Sales AI", d: "แนะนำแพ็กเกจ ราคา และเวลา จากประวัติลูกค้า rate card กำลังทีม และ margin จริง — ได้ draft ให้รีวิวก่อนเสมอ" },
      { k: "Projects & Team", d: "ใบเสนอราคาที่ถูกรับ กลายเป็น phase งาน งบ และเธรดทีม — โดยไม่ต้องกรอก scope ซ้ำ" },
      { k: "Thai Finance", d: "ใบเสนอราคา/ใบแจ้งหนี้/ใบเสร็จ ไทย-อังกฤษ · VAT · หัก ณ ที่จ่าย · partial payments · ส่งต่อบัญชี (FlowAccount sync)" },
    ],
    painpoints: [
      "ข้อมูลสตูดิโออยู่เจ็ดที่ — CRM โน้ต PM ไดรฟ์ แชท บัญชี และ AI ไม่เคยคุยกัน",
      "context หายระหว่างเครื่องมือ — scope และประวัติต้องกรอกใหม่ทุกรอบ",
      "คนที่เปิดสตูดิโอเพื่อสร้างงาน กลายเป็นคนไล่ตามอัปเดต — COLLAPS คืนเวลานั้นให้",
    ],
  },
  {
    n: "04",
    name: "Routte",
    role: "The Compass",
    kind: "The Curated AI Trip Planner",
    powered: "Powered by VÆST",
    quote: "Every day is a story.",
    body: "AI trip planner สำหรับเมืองไทย (mobile-first) ที่เปลี่ยนอารมณ์และเวลาที่คุณมี ให้เป็น 'วันหนึ่งที่เล่าเป็นเรื่อง' — six chapters, not fifteen pins: มีจังหวะ ไต่ตามแสง และมี hero moment เดียวของวัน. พก Passport สะสมตราเมืองและแต้มความประหยัด สแกน QR ที่ร้านพาร์ตเนอร์เพื่อรับส่วนลดและจ่ายเงินได้เลย — ฝั่งร้านค้ามี partner platform ของตัวเองที่ partner.routte.to. คัดสรรผ่านเลนส์ศิลปะ สถาปัตยกรรม และวิถีชีวิต ราวกับนิตยสารท่องเที่ยวไฮเอนด์ที่ทำเพื่อคุณคนเดียว.",
    accent: "#F97316",
    href: "https://routte.to",
    hrefLabel: "routte.to",
    ci: {
      palette: ["#080a0e", "#F97316", "#818cf8", "#a3e635"],
      type: "Space Grotesk · Inter · Instrument Serif · JetBrains Mono",
      note: "ดำอุ่น + ส้ม coral · topographic noise · app-like premium",
    },
    features: [
      { k: "AI story routes", d: "mood + จำนวนชั่วโมง → วันที่เล่าเป็นเรื่อง 6 บท มี hero moment เดียว (เวลาเปิด-ปิด/เดินทาง/รสนิยม จัดให้)" },
      { k: "Passport & badges", d: "เก็บตราเมืองที่ไป tier crest และแต้ม — พร้อมยอด 'ประหยัดไปแล้ว' ที่นับให้เห็นจริง" },
      { k: "Scan-to-save / scan-to-pay", d: "โชว์ passport QR ที่ร้านพาร์ตเนอร์ = ส่วนลดบาทจริงทันที และจ่ายบิลด้วย QR เดียว" },
      { k: "Partner platform", d: "ร้านค้า/คาเฟ่/สตูดิโอ ลงร้านฟรี สร้างดีล ติดตามยอด redeem และ ROI ที่ partner.routte.to" },
    ],
    painpoints: [
      "ทริปทั่วไป = กองหมุดบนแผนที่ ไม่มีจังหวะ — Routte จัดเป็นวันที่มีเรื่องเล่า timed ตามแสงและพลังงาน",
      "คูปอง/พอยต์วุ่นวาย — ส่วนลดจริงลดที่เคาน์เตอร์ทันที ไม่ต้องแคปหน้าจอ",
      "ร้านอิสระดี ๆ ไม่มีช่องทางเจอนักเดินทางตัวจริง — Routte พาไปโผล่กลางเส้นทางของคนที่พร้อมมา",
    ],
  },
];
