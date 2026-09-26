/** Shared brand architecture for Home, Services, Work and Contact.
 *
 *  One model, one axis. The movements answer the client's question — what are
 *  you stuck on — rather than describing our process, so a visitor arrives
 *  with a problem and finds it named. Everything else on the site hangs off
 *  this file; nothing may introduce a second answer to "what do you sell".
 *
 *  Kept to what the site actually renders. The founder's full movements text
 *  (pivots, output lists, qualifiers, closing lines) lives in public/llms.txt;
 *  the pages say less on purpose. */

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
  /** What the cases in this movement had in common — shown on a case page
   *  beside the movement it belongs to. */
  record: string;
};

export const movements: Movement[] = [
  {
    slug: "expand",
    name: "Expand",
    line: "Build what comes next.",
    question: "เราจะโตไปไหนต่อ?",
    body: "เมื่อ growth เดิมเริ่มถึงขีดจำกัด เราไม่ได้เริ่มจากคำถามว่าจะขายเพิ่มอย่างไร แต่เริ่มจากการนำ brand equity, capability และ cultural relevance ที่มีอยู่ ไปสร้างพื้นที่เติบโตใหม่",
    record: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ",
  },
  {
    slug: "reframe",
    name: "Reframe",
    line: "Change the way it is seen.",
    question: "ยังมีใครอีกที่สิ่งนี้มีความหมายกับเขา?",
    body: "บางครั้ง product ไม่ได้มีปัญหา ปัญหาคือเรายังมองมันผ่านกรอบเดิม เราเปลี่ยน context ของสิ่งที่มีอยู่ ให้มันมีความหมายกับคนอีกกลุ่ม ในอีก moment ด้วยอีกเหตุผลหนึ่ง โดยไม่จำเป็นต้องเปลี่ยน product หลัก",
    record: "เมื่อต้องเปลี่ยนภาพจำ โดยไม่ทิ้งของเดิม",
  },
  {
    slug: "embed",
    name: "Embed",
    line: "Make the brand live everywhere.",
    question: "ทำอย่างไรให้ทุกสิ่งยังรู้สึกว่าเป็นเรา?",
    body: "เมื่อแบรนด์โตขึ้น สิ่งที่มักแตกออกจากกันคือ product, channel, content และ experience ทุกอย่างอาจดูดีในตัวเอง แต่เมื่ออยู่ด้วยกันกลับไม่รู้สึกว่าเป็นแบรนด์เดียวกัน เราจึงสร้าง Creative Foundation ที่ทำให้ตัวตนของแบรนด์ถูกฝังอยู่ในทุก expression",
    record: "เมื่อการพูดคือโจทย์ที่ยากที่สุด",
  },
];

export const getMovement = (slug: string) => movements.find((m) => m.slug === slug);

/** The homepage's heading for the services strip. */
export const movementBridge = {
  line: "One story. Three directions.",
};

export type Engagement = {
  slug: string;
  name: string;
  line: string;
  /** Which movement this is a way into. Brand Foundation has none — see below. */
  movement: MovementSlug | null;
};

/** Every movement starts from something that already exists: equity to carry
 *  forward, a product to re-frame, a brand grown wide enough to drift. A brand
 *  being built from nothing has none of it, so Brand Foundation sits outside
 *  the three rather than being forced into a movement it does not belong to. */
export const foundation: Engagement = {
  slug: "brand-foundation",
  name: "Brand Foundation",
  line: "Find the story before building the brand.",
  movement: null,
};

export const engagements: Engagement[] = [
  { slug: "creative-launch", name: "Creative Launch", line: "Turn a moment into a story.", movement: "expand" },
  { slug: "campaign-platform", name: "Campaign Platform", line: "One idea. Many expressions.", movement: "reframe" },
  { slug: "brand-refine", name: "Brand Refine", line: "Same brand. Clearer story.", movement: "reframe" },
  { slug: "creative-partnership", name: "Creative Partnership", line: "An external creative team, built around your brand.", movement: "embed" },
];

export const getEngagementsFor = (slug: MovementSlug) =>
  engagements.filter((item) => item.movement === slug);

/** A craft, not a movement — choosing a medium is not the same kind of decision
 *  as choosing a move. It stays offered because people do ask for a film. */
export const filmCraft = {
  name: "Film & Visual Story",
  line: "A story designed for the screen.",
};
