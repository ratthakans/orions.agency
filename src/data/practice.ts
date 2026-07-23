// THE PRACTICE — the single answer to "what do you sell".
//
// This replaces four competing service lists that used to live on Home, About,
// Thinking and Contact (three different trios, none of them matching). A list
// of disciplines describes a supplier; four depths describe a consultancy — it
// has an order, a gate, and a decision at each level.
//
// Depth numbers (−40m …) are the section index across this zone; the waterline
// device belongs to the Agency zone only. Per the blueprint: never illustrate
// the iceberg. If it needs the drawing, the idea isn't sharp enough yet.

export type Depth = {
  /** Depth marker used in place of 01/02/03 */
  m: string;
  slug: string;
  name: string;
  /** One line — what this level actually is */
  kind: string;
  /** Duration / commercial shape */
  terms: string;
  /** The lead paragraph */
  body: string;
  /** What the client receives */
  deliverable?: { k: string; d: string }[];
  /** The line that closes the level */
  note?: string;
  /** Marks the single entry point */
  gate?: boolean;
};

/** The depth map — surface to floor. Order here is the mental model. */
export const depthMap = [
  { m: "00m", name: "Waterline", d: "สิ่งที่ตลาดเห็น" },
  { m: "−40m", name: "Sounding", d: "หยั่งความลึก · ประตูเดียว" },
  { m: "−400m", name: "Mass", d: "จัดมวล" },
  { m: "−900m", name: "Roll", d: "พลิก" },
];

/** Detail blocks — ordered the way an engagement actually runs, not by depth. */
export const depths: Depth[] = [
  {
    m: "−40m",
    slug: "sounding",
    name: "Sounding",
    kind: "หยั่งความลึก — ทุกงานเริ่มที่นี่ ไม่มีทางลัด",
    terms: "สามสัปดาห์ · ราคาคงที่ · จ่ายครั้งเดียว · ไม่ผูกมัดว่าต้องทำต่อ",
    gate: true,
    body:
      "สามสัปดาห์เพื่อตอบคำถามเดียว: แบรนด์นี้ต้องทาสียอด หรือต้องพลิกทั้งก้อน. เราไม่รับงานที่ยังไม่ผ่านขั้นนี้ เพราะการลงมือก่อนรู้ว่าปัญหาอยู่ตรงไหน คือการขายชั่วโมงทำงาน ไม่ใช่การขายคำตัดสิน.",
    deliverable: [
      { k: "สัปดาห์ 1 · วัด", d: "สัมภาษณ์ผู้ก่อตั้งและทีม · อ่านทุกสิ่งที่แบรนด์เคยพูดต่อสาธารณะ · สแกนหมวดทั้งตลาด" },
      { k: "สัปดาห์ 2 · ผ่า", d: "แยกสิ่งที่แบรนด์พูด ออกจากสิ่งที่คนได้ยิน — หาจุดที่มวลกับยอดไม่ตรงกัน" },
      { k: "สัปดาห์ 3 · ตัดสิน", d: "ส่งมอบในห้องประชุม ไม่ส่งอีเมล" },
      { k: "The Sounding Report", d: "ไม่เกิน 20 หน้า — แผนที่ความลึก · คำวินิจฉัย · ทิศทางเดียว (ไม่มี A/B/C) · รายการตัดทิ้ง" },
    ],
    note: "ลูกค้าเอารายงานไปทำเองก็ได้ เอาไปให้ใครก็ได้ — นั่นคือความมั่นใจที่เราขาย.",
  },
  {
    m: "−400m",
    slug: "mass",
    name: "Mass",
    kind: "จัดมวล — งานที่กำหนดว่าแบรนด์จะพูดอะไรไปอีกหลายปี",
    terms: "8–12 สัปดาห์ · ต่อจาก Sounding เท่านั้น",
    body:
      "มวลใต้น้ำคือสิ่งที่ตัดสินว่ายอดจะออกมาหน้าตาแบบไหน. ขั้นนี้ไม่ใช่ของแถมท้ายใบเสนอราคา — มันคือสินค้าหลัก และเป็นเหตุผลเดียวที่งานผลิตหลังจากนี้จะไม่หลุดทิศ.",
    deliverable: [
      { k: "Positioning Architecture", d: "ที่ยืนที่แบรนด์ถือได้จริง และคู่แข่งลอกไม่ได้ในวันเดียว" },
      { k: "Narrative System", d: "เรื่องหลักหนึ่งเรื่อง และวิธีที่มันแตกไปในทุกจุดสัมผัส" },
      { k: "Language Doctrine", d: "คำที่ใช้ · คำที่ห้ามใช้ · น้ำเสียงที่เป็นของแบรนด์นี้เท่านั้น" },
      { k: "Decision Rules", d: "กฎที่ทีมลูกค้าใช้ตัดสินเองได้ตอนเราไม่อยู่ในห้อง" },
      { k: "The Kill List", d: "สิ่งที่ต้องหยุดทำ — ชิ้นที่ลูกค้าจำได้นานที่สุด และไม่มีใครในตลาดกล้าส่งมอบ" },
    ],
    note: "ส่งมอบเป็นเอกสารหลักหนึ่งเล่ม + เวิร์กช็อปกับผู้บริหาร ไม่ใช่สไลด์ที่ส่งแล้วหาย.",
  },
  {
    m: "00m",
    slug: "waterline",
    name: "Waterline",
    kind: "สิ่งที่ตลาดเห็น — งานที่ออกไปข้างนอกจริง",
    terms: "รับเฉพาะเคสที่ผ่าน Sounding · โดยปกติเรากำกับ ลงมือเองเมื่อเคสคุ้มพอ",
    body:
      "ยอดของภูเขาน้ำแข็งไม่ได้ถูกเลือก มันเป็นผลลัพธ์ของมวลข้างล่าง. เราจึงไม่แกะยอดให้ใครที่ไม่ให้เราแตะมวล — เพราะงานสวยบนกลยุทธ์ผิด คือการจ่ายเงินเพื่อให้จำผิดเร็วขึ้น.",
    deliverable: [
      { k: "Identity", d: "ชื่อ · ระบบภาพ · เสียงและคลังภาษา · guideline ที่ทีมลูกค้าใช้เองได้" },
      { k: "Film", d: "brand film · campaign film — เขียนบท กำกับ โปรดักชัน (เส้นส่งออกของเรา)" },
      { k: "Campaign", d: "key message · content system · media direction" },
      { k: "High-stakes", d: "การสื่อสารในภาวะที่ทุกคำถูกจับตา — รับน้อยที่สุด เลือกมากที่สุด" },
    ],
    note: "สิทธิ์ยับยั้ง — ทุกชิ้นตรวจเทียบ Mass ก่อนออก งานที่ขัดกลยุทธ์ไม่ได้ออก แม้ลูกค้าอยากออก.",
  },
  {
    m: "−900m",
    slug: "roll",
    name: "Roll",
    kind: "พลิก — เมื่อมวลเปลี่ยน ภูเขาน้ำแข็งพลิกทั้งก้อน",
    terms: "12–18 เดือน · รับปีละไม่กี่ราย · อยู่ในห้องบอร์ด ไม่ใช่ห้องการตลาด",
    body:
      "รีแบรนด์จริงคือการพลิก ไม่ใช่การทาสียอดใหม่. ลูกค้าส่วนใหญ่ที่ขอ 'รีแบรนด์' กำลังขอให้ทาสี — งานแรกของเราคือบอกว่าเขาต้องการอะไรกันแน่ และบางรายยังไม่พร้อมพลิก เราปฏิเสธเคสนั้น.",
    deliverable: [
      { k: "อำนาจคัดกรอง", d: "ทุกสิ่งที่องค์กรจะพูดต่อสาธารณะผ่านตาเราก่อน และเรามีสิทธิ์บอกว่าไม่" },
      { k: "Quarterly Sounding", d: "หยั่งซ้ำทุกไตรมาส — ทิศทางถูกทบทวนด้วยหลักฐาน ไม่ใช่ด้วยความเคยชิน" },
      { k: "Kill List รายเดือน", d: "ส่งก่อนรายการสิ่งที่ควรทำเพิ่มเสมอ" },
      { k: "Direct line", d: "ถึง senior โดยตรง ไม่ผ่าน account executive เพราะเราไม่มี" },
    ],
  },
];

/** Pricing logic — §13. Deliberately no numbers until the studio sets them. */
export const pricingLogic = [
  "ขายเฟสการคิด แยกจากการผลิตเสมอ",
  "ไม่ลดราคาการตัดสินใจ — ถ้างบลด ให้ลดขอบเขต การเข้าถึง หรือความเร็ว",
  "แยกต้นทุนผลิตภายนอก สิทธิ์การใช้งาน และเงินสำรอง ออกจากค่าบริการ",
];
