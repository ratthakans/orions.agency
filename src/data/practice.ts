// THE PRACTICE — the single answer to "what do you sell".
//
// This replaces four competing service lists that used to live on Home, About,
// Thinking and Contact (three different trios, none of them matching). A list
// of disciplines describes a supplier; an ordered ladder with a gate describes
// a consultancy.
//
// Naming rule, learned the hard way: the first version of this model was built
// on a nautical/glacial metaphor, with four invented stage names and a scale of
// negative depth markers. It read as muddled — a borrowed diagram, fighting the
// brand's own name (ØRIONS is a constellation: sky, not sea), and it forced a
// client to learn a private vocabulary before they could tell what we sell.
// A model that has to be translated is friction at the top of the funnel.
//   → Poetry belongs in the belief. The offer must be plain.
// The working metaphor is now diagnosis — which the case pages already speak
// (every case opens อาการ → คำวินิจฉัย), so the practice and the record finally
// use one language. See the regression guard in content-contracts.test.ts.

export type Stage = {
  /** Ladder index — 01…04 */
  n: string;
  slug: string;
  /** Plain Thai name — no glossary required */
  name: string;
  /** English counterpart, used as a quiet secondary label */
  nameEn: string;
  /** One line — what this step actually is */
  kind: string;
  /** Duration / commercial shape */
  terms: string;
  /** The lead paragraph */
  body: string;
  /** What the client receives */
  deliverable?: { k: string; d: string }[];
  /** The line that closes the step */
  note?: string;
  /** Marks the single entry point */
  gate?: boolean;
};

/** The ladder — in the order an engagement actually runs. */
export const stages: Stage[] = [
  {
    n: "01",
    slug: "diagnostic",
    name: "การวินิจฉัย",
    nameEn: "The Diagnostic",
    kind: "หาว่าปัญหาอยู่ตรงไหน — ทุกงานเริ่มที่นี่ ไม่มีทางลัด",
    terms: "3 สัปดาห์ · ราคาคงที่ · จ่ายครั้งเดียว · ไม่ผูกมัดว่าต้องทำต่อ",
    gate: true,
    body:
      "สามสัปดาห์เพื่อตอบคำถามเดียว: ปัญหาของแบรนด์นี้อยู่ที่วิธีสื่อสาร หรืออยู่ลึกกว่านั้น. เราไม่รับงานที่ยังไม่ผ่านขั้นนี้ เพราะการลงมือก่อนรู้ว่าปัญหาอยู่ตรงไหน คือการขายชั่วโมงทำงาน ไม่ใช่การขายคำตัดสิน.",
    deliverable: [
      { k: "สัปดาห์ 1 · ตรวจ", d: "สัมภาษณ์ผู้ก่อตั้งและทีม · อ่านทุกสิ่งที่แบรนด์เคยพูดต่อสาธารณะ · สแกนหมวดทั้งตลาด" },
      { k: "สัปดาห์ 2 · ผ่า", d: "แยกสิ่งที่แบรนด์พูด ออกจากสิ่งที่คนได้ยิน — หาจุดที่สองอย่างนี้ไม่ตรงกัน" },
      { k: "สัปดาห์ 3 · ตัดสิน", d: "ส่งมอบในห้องประชุม ไม่ส่งอีเมล" },
      { k: "รายงานการวินิจฉัย", d: "ไม่เกิน 20 หน้า — สิ่งที่ตรวจพบ · คำวินิจฉัย · ทิศทางเดียว (ไม่มี A/B/C) · รายการตัดทิ้ง" },
    ],
    note: "ลูกค้าเอารายงานไปทำเองก็ได้ เอาไปให้ใครก็ได้ — นั่นคือความมั่นใจที่เราขาย.",
  },
  {
    n: "02",
    slug: "strategy",
    name: "กลยุทธ์",
    nameEn: "The Strategy",
    kind: "งานที่กำหนดว่าแบรนด์จะพูดอะไรไปอีกหลายปี",
    terms: "8–12 สัปดาห์ · ต่อจากการวินิจฉัยเท่านั้น",
    body:
      "กลยุทธ์คือสิ่งที่ตัดสินว่างานที่ออกไปข้างนอกจะหน้าตาแบบไหน. ขั้นนี้ไม่ใช่ของแถมท้ายใบเสนอราคา — มันคือสินค้าหลัก และเป็นเหตุผลเดียวที่งานผลิตหลังจากนี้จะไม่หลุดทิศ.",
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
    n: "03",
    slug: "work",
    name: "งานจริง",
    nameEn: "The Work",
    kind: "สิ่งที่ตลาดเห็น — งานที่ออกไปข้างนอกจริง",
    terms: "รับเฉพาะเคสที่ผ่านการวินิจฉัย · เรากำกับเอง และลงมือเองเมื่อเคสคุ้มพอ",
    body:
      "ที่ปรึกษาส่วนใหญ่จบที่สไลด์ แล้วส่งต่อให้คนอื่นไปทำ. เราจบที่งานที่ออกสู่ตลาด — เพราะกลยุทธ์ที่ไม่มีใครแปลเป็นงานจริงได้ ก็เป็นแค่เอกสาร และงานสวยบนกลยุทธ์ผิด คือการจ่ายเงินเพื่อให้คนจำผิดเร็วขึ้น.",
    deliverable: [
      { k: "Identity", d: "ชื่อ · ระบบภาพ · เสียงและคลังภาษา · guideline ที่ทีมลูกค้าใช้เองได้" },
      { k: "Film", d: "brand film · campaign film — เขียนบท กำกับ โปรดักชัน (เส้นส่งออกของเรา)" },
      { k: "Campaign", d: "key message · content system · media direction" },
      { k: "High-stakes", d: "การสื่อสารในภาวะที่ทุกคำถูกจับตา — รับน้อยที่สุด เลือกมากที่สุด" },
    ],
    note: "สิทธิ์ยับยั้ง — ทุกชิ้นตรวจเทียบกลยุทธ์ก่อนออก งานที่ขัดกลยุทธ์ไม่ได้ออก แม้ลูกค้าอยากออก.",
  },
  {
    n: "04",
    slug: "counsel",
    name: "ที่ปรึกษาต่อเนื่อง",
    nameEn: "The Counsel",
    kind: "อยู่ในห้องบอร์ดระยะยาว ไม่ใช่จบเป็นโปรเจกต์",
    terms: "12–18 เดือน · รับปีละไม่กี่ราย · อยู่ในห้องบอร์ด ไม่ใช่ห้องการตลาด",
    body:
      "การเปลี่ยนแบรนด์จริงไม่ได้จบในโปรเจกต์เดียว. ลูกค้าส่วนใหญ่ที่ขอ 'รีแบรนด์' กำลังขอให้เปลี่ยนแค่เปลือก — งานแรกของเราคือบอกว่าเขาต้องการอะไรกันแน่ และบางรายยังไม่พร้อมเปลี่ยนจริง เราปฏิเสธเคสนั้น.",
    deliverable: [
      { k: "อำนาจคัดกรอง", d: "ทุกสิ่งที่องค์กรจะพูดต่อสาธารณะผ่านตาเราก่อน และเรามีสิทธิ์บอกว่าไม่" },
      { k: "วินิจฉัยซ้ำรายไตรมาส", d: "ทิศทางถูกทบทวนด้วยหลักฐาน ไม่ใช่ด้วยความเคยชิน" },
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
