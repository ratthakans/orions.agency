/** Shared brand architecture for Home, What We Do, Work and Contact.
 *
 *  One model, one axis. The movements answer the client's question — what are
 *  you stuck on — rather than describing our process, so a visitor arrives
 *  with a problem and finds it named. Everything else on the site hangs off
 *  this file; nothing may introduce a second answer to "what do you sell". */

export type MovementSlug = "expand" | "reframe" | "embed";

export type Movement = {
  slug: MovementSlug;
  name: string;
  /** English line that titles the movement */
  line: string;
  /** The client's own question, in their words */
  question: string;
  /** What the movement is, in Thai */
  body: string;
  /** The English pivot the movement turns on */
  pivot: string;
  /** What it can come out as */
  list: string[];
  /** The qualifier that keeps the movement honest */
  note: string;
  /** The closing line, stated in English */
  closer: string;
};

export const movements: Movement[] = [
  {
    slug: "expand",
    name: "Expand",
    line: "Build what comes next.",
    question: "เราจะโตไปไหนต่อ?",
    body: "เมื่อ growth เดิมเริ่มถึงขีดจำกัด เราไม่ได้เริ่มจากคำถามว่าจะขายเพิ่มอย่างไร แต่เริ่มจากการนำ brand equity, capability และ cultural relevance ที่มีอยู่ ไปสร้างพื้นที่เติบโตใหม่",
    pivot: "What can this brand become next?",
    list: ["Product", "Service", "Experience", "Collaboration", "Activation", "Category", "Business Opportunity"],
    note: "ไม่ใช่ innovation เพื่อให้ดูใหม่ แต่คือการสร้าง next S-curve ที่ยังมีเหตุผลว่าทำไมต้องเป็นแบรนด์นี้",
    closer: "From brand equity to new value.",
  },
  {
    slug: "reframe",
    name: "Reframe",
    line: "Change the way it is seen.",
    question: "ยังมีใครอีกที่สิ่งนี้มีความหมายกับเขา?",
    body: "บางครั้ง product ไม่ได้มีปัญหา ปัญหาคือเรายังมองมันผ่านกรอบเดิม เราเปลี่ยน context ของสิ่งที่มีอยู่ ให้มันมีความหมายกับคนอีกกลุ่ม ในอีก moment ด้วยอีกเหตุผลหนึ่ง โดยไม่จำเป็นต้องเปลี่ยน product หลัก",
    pivot: "Find a new reason to care.",
    list: ["Unseen Audience", "Emerging Behavior", "Alternative Use Case", "New Occasion", "Cultural Context", "Demand Territory", "Communication Angle"],
    note: "เป้าหมายไม่ใช่แค่การหา target ใหม่ แต่คือการหาเหตุผลใหม่ที่ทำให้คนสนใจ",
    closer: "Same product. Different relevance.",
  },
  {
    slug: "embed",
    name: "Embed",
    line: "Make the brand live everywhere.",
    question: "ทำอย่างไรให้ทุกสิ่งยังรู้สึกว่าเป็นเรา?",
    body: "เมื่อแบรนด์โตขึ้น สิ่งที่มักแตกออกจากกันคือ product, channel, content และ experience ทุกอย่างอาจดูดีในตัวเอง แต่เมื่ออยู่ด้วยกันกลับไม่รู้สึกว่าเป็นแบรนด์เดียวกัน เราจึงสร้าง Creative Foundation ที่ทำให้ตัวตนของแบรนด์ถูกฝังอยู่ในทุก expression ไม่ใช่เพียงการใช้ logo, color หรือ typography ให้ถูกต้อง",
    pivot: "The same point of view.",
    list: ["Narrative", "Tone", "Visual Language", "Behavior", "Content", "Product Expression", "Digital Experience", "Service", "Customer Journey"],
    note: "ทุก touchpoint ไม่ต้องเหมือนกัน แต่ต้องมองโลกจากจุดเดียวกัน",
    closer: "One identity. Many expressions.",
  },
];

export const getMovement = (slug: string) => movements.find((m) => m.slug === slug);

/** The line that keeps the movements attached to the brand idea. Without it
 *  the site reads as two decks stapled together: a story company on the
 *  homepage, a growth framework one section later. */
export const movementBridge = {
  line: "One story. Three directions.",
  body: "เรื่องของแบรนด์เดินได้สามทิศ — ไปข้างหน้า มองจากมุมใหม่ และลงลึกเข้าไปข้างใน สามวิธีในการพาแบรนด์ไปข้างหน้าโดยไม่ทำให้มันสูญเสียสิ่งที่ทำให้มันเป็นตัวเอง",
};

export const movementSummary = [
  { name: "Expand", line: "opens possibility." },
  { name: "Reframe", line: "creates relevance." },
  { name: "Embed", line: "builds coherence." },
];

/** How any movement is executed. This is craft, not a second model — it sits
 *  below the movements and never competes with them for the homepage. */
export const craft = [
  { name: "Story", line: "Find what matters.", examples: "Brand strategy · Positioning · Narrative · Messaging" },
  { name: "Direction", line: "Shape how it should feel.", examples: "Creative direction · Identity · Art direction · Campaign direction" },
  { name: "Expression", line: "Bring it into the world.", examples: "Film · Photography · Content · Digital experience" },
];

export type Engagement = {
  slug: string;
  name: string;
  line: string;
  fit: string;
  outcome: string;
  /** Which movement this is a way into. Brand Foundation has none — see below. */
  movement: MovementSlug | null;
};

/** Every movement starts from something that already exists: equity to carry
 *  forward, a product to re-frame, a brand grown wide enough to drift. A brand
 *  being built from nothing has none of it, so Brand Foundation is deliberately
 *  outside the three and stated as the step before them, rather than forced
 *  into a movement it does not belong to. */
export const foundation: Engagement = {
  slug: "brand-foundation",
  name: "Brand Foundation",
  line: "Find the story before building the brand.",
  fit: "แบรนด์หรือธุรกิจใหม่ที่ยังไม่มีรากให้ต่อยอด",
  outcome: "รู้ว่าแบรนด์คือใคร ต่างอย่างไร และควรให้ผู้คนจดจำอะไร",
  movement: null,
};

export const engagements: Engagement[] = [
  { slug: "creative-launch", name: "Creative Launch", line: "Turn a moment into a story.", fit: "แบรนด์ ผลิตภัณฑ์ สถานที่ หรือบริการที่กำลังเปิดตัว", outcome: "ช่วงเวลาการเปิดตัวที่ผู้คนมีเหตุผลจะสนใจและจดจำ", movement: "expand" },
  { slug: "campaign-platform", name: "Campaign Platform", line: "One idea. Many expressions.", fit: "แบรนด์ที่ต้องการแนวคิดหลักสำหรับแคมเปญหรือการสื่อสาร", outcome: "หนึ่งแนวคิดที่ต่อยอดได้หลายจุดสัมผัสโดยยังเล่าเรื่องเดียวกัน", movement: "reframe" },
  { slug: "brand-refine", name: "Brand Refine", line: "Same brand. Clearer story.", fit: "แบรนด์ที่เติบโตแล้ว แต่ภาพและข้อความยังไม่สะท้อนตัวตน", outcome: "แบรนด์เดิมที่ชัด สอดคล้อง และเป็นตัวเองมากขึ้น", movement: "reframe" },
  { slug: "creative-partnership", name: "Creative Partnership", line: "An external creative team, built around your brand.", fit: "ทีมภายในที่ต้องการมุมมองและทิศทางสร้างสรรค์อย่างต่อเนื่อง", outcome: "ทิศทางแบรนด์และงานสร้างสรรค์ที่สม่ำเสมอในระยะยาว", movement: "embed" },
];

export const getEngagementsFor = (slug: MovementSlug) =>
  engagements.filter((item) => item.movement === slug);

/** A craft, not a movement. It was sitting alongside the engagements as though
 *  choosing a medium were the same kind of decision as choosing a move. */
export const filmCraft = {
  name: "Film & Visual Story",
  line: "A story designed for the screen.",
  body: "งานภาพนิ่งและภาพเคลื่อนไหวเป็นวิธีถ่ายทอด ไม่ใช่จุดตั้งต้น เราเริ่มจากความหมายที่อยากให้คนจดจำ แล้วจึงออกแบบว่าภาพควรทำหน้าที่อะไร",
};
