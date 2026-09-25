/** Shared brand architecture for Home, What We Do and Contact. */
export const capabilities = [
  { name: "Story", line: "Find what matters.", description: "ค้นหาแก่นของแบรนด์และเรื่องที่ควรถูกเล่า", examples: "Brand strategy · Positioning · Narrative · Messaging" },
  { name: "Direction", line: "Shape how it should feel.", description: "กำหนดโลก วิธีคิด และทิศทางที่เหมาะกับเรื่องนั้น", examples: "Creative direction · Identity · Art direction · Campaign direction" },
  { name: "Expression", line: "Bring it into the world.", description: "ถ่ายทอดเรื่องผ่านรูปแบบที่ผู้คนเห็น รู้สึก และมีส่วนร่วม", examples: "Film · Photography · Content · Digital experience" },
];

export const method = [
  { name: "Discover", description: "ทำความเข้าใจแบรนด์ ผู้คน และบริบท" },
  { name: "Connect", description: "เห็นความสัมพันธ์ระหว่างสิ่งที่กระจัดกระจาย" },
  { name: "Shape", description: "กำหนดเรื่องและทิศทางสร้างสรรค์" },
  { name: "Refine", description: "ตัดสิ่งที่รบกวนออกจนเหลือสิ่งสำคัญ" },
  { name: "Express", description: "ทำให้เรื่องมีชีวิตในรูปแบบที่เหมาะสม" },
];

export const engagements = [
  { slug: "brand-foundation", name: "Brand Foundation", line: "Find the story before building the brand.", fit: "แบรนด์หรือธุรกิจใหม่ที่ต้องการวางรากฐานให้ชัด", outcome: "รู้ว่าแบรนด์คือใคร ต่างอย่างไร และควรให้ผู้คนจดจำอะไร", phases: "Story → Direction" },
  { slug: "brand-refine", name: "Brand Refine", line: "Same brand. Clearer story.", fit: "แบรนด์ที่เติบโตแล้ว แต่ภาพและข้อความยังไม่สะท้อนตัวตน", outcome: "แบรนด์เดิมที่ชัด สอดคล้อง และเป็นตัวเองมากขึ้น", phases: "Story → Direction" },
  { slug: "campaign-platform", name: "Campaign Platform", line: "One idea. Many expressions.", fit: "แบรนด์ที่ต้องการแนวคิดหลักสำหรับแคมเปญหรือการสื่อสาร", outcome: "หนึ่งแนวคิดที่ต่อยอดได้หลายจุดสัมผัสโดยยังเล่าเรื่องเดียวกัน", phases: "Story → Direction → Expression" },
  { slug: "creative-launch", name: "Creative Launch", line: "Turn a moment into a story.", fit: "แบรนด์ ผลิตภัณฑ์ สถานที่ หรือบริการที่กำลังเปิดตัว", outcome: "ช่วงเวลาการเปิดตัวที่ผู้คนมีเหตุผลจะสนใจและจดจำ", phases: "Direction → Expression" },
  { slug: "film-visual-story", name: "Film & Visual Story", line: "A story designed for the screen.", fit: "แบรนด์ที่ต้องการเล่าผ่านภาพนิ่งหรือภาพเคลื่อนไหว", outcome: "งานภาพที่เริ่มจากความหมายและความรู้สึกที่อยากให้ผู้คนจดจำ", phases: "Story → Direction → Expression" },
  { slug: "creative-partnership", name: "Creative Partnership", line: "An external creative team, built around your brand.", fit: "ทีมภายในที่ต้องการมุมมองและทิศทางสร้างสรรค์อย่างต่อเนื่อง", outcome: "ทิศทางแบรนด์และงานสร้างสรรค์ที่สม่ำเสมอในระยะยาว", phases: "Continuous Story → Direction → Expression" },
];
