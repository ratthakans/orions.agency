/** The ORIONS blueprint, as the site renders it. Every page reads from here.
 *
 *  Three layers and no more: the master idea (Stories, Refined.), three
 *  services, and two signature approaches that combine those services for a
 *  bigger problem. The method sits under them as how the work is done. The
 *  founder's words are used as written; nothing here is paraphrased. */

export const brand = {
  descriptor: "Independent Creative Studio",
  master: "Stories, Refined.",
  belief: {
    th: "ทุกแบรนด์มีเรื่องราวของตัวเองอยู่แล้ว ORIONS ไม่ได้เข้ามาเพื่อสร้างเรื่องใหม่ทุกครั้ง แต่เพื่อค้นหาว่าอะไรคือสิ่งที่สำคัญจริง ทำให้มันคมขึ้น และทำให้เรื่องนั้นมีชีวิตอยู่ในทุกสิ่งที่แบรนด์ทำ",
    en: "We don't reinvent brands. We refine what makes them worth caring about.",
  },
  promise: { first: "First, we find what matters.", then: "Then, we make it matter everywhere." },
};

/** Brand Idea — where a story actually lives. */
export const brandIdea = {
  line: "A story is not what a brand says. It is what people come to understand.",
  th: "เรื่องราวของแบรนด์ไม่ได้อยู่แค่ใน tagline หรือ campaign",
  parts: [
    { name: "Story", line: "what it means" },
    { name: "Behavior", line: "how it acts" },
    { name: "Aesthetic", line: "what form it takes" },
    { name: "Experience", line: "how it is remembered" },
  ],
  close: "It should be experienced.",
};

export const pointOfView = "Better = More Intentional.";

export const principles = [
  "More isn't the answer. Better is.",
  "Nothing exists without intention.",
  "Identity should be embedded, not applied.",
  "One story. Many expressions.",
];

export type ServiceSlug = "brand-strategy" | "creative-communication" | "brand-experience";

export type Service = { slug: ServiceSlug; n: string; name: string; line: string; items: string[] };

export const services: Service[] = [
  {
    slug: "brand-strategy",
    n: "01",
    name: "Brand & Strategy",
    line: "Find what matters.",
    items: ["Brand Strategy", "Positioning", "Brand Narrative", "Audience & Demand", "Messaging", "Opportunity Mapping"],
  },
  {
    slug: "creative-communication",
    n: "02",
    name: "Creative & Communication",
    line: "Give it a point of view.",
    items: ["Creative Direction", "Campaign Concept", "Art Direction", "Content System", "Copywriting", "Film & Production"],
  },
  {
    slug: "brand-experience",
    n: "03",
    name: "Brand Experience",
    line: "Make it live in the real world.",
    items: ["Brand Identity", "Digital Experience", "UX/UI", "Customer Journey", "Service Experience", "Spatial & Physical Experience"],
  },
];

export type ApproachSlug = "creative-unlock" | "stories-embed";

export type Approach = {
  slug: ApproachSlug;
  name: string;
  line: string;
  /** Who it is for, in the founder's words */
  for: string;
  /** The line the approach turns on */
  pivot: string;
  /** Creative Unlock = Possibility · Stories Embed = Coherence */
  equals: string;
};

/** Not two more services — the way ORIONS combines the three for a bigger
 *  problem. The site must never list them alongside the services as peers. */
export const approaches: Approach[] = [
  {
    slug: "creative-unlock",
    name: "Creative Unlock",
    line: "Find another way forward.",
    for: "สำหรับแบรนด์ที่กำลังหา growth ใหม่ audience ใหม่ demand ใหม่ product ใหม่ activation ใหม่ หรือ new S-curve",
    pivot: "What haven't we seen yet?",
    equals: "Possibility",
  },
  {
    slug: "stories-embed",
    name: "Stories Embed",
    line: "Make the story live everywhere.",
    for: "สำหรับแบรนด์ที่มี direction แล้ว แต่ product, channel, communication และ experience ยังไม่รู้สึกเป็นเรื่องเดียวกัน",
    pivot: "One story. Many expressions.",
    equals: "Coherence",
  },
];

export const getApproach = (slug: string) => approaches.find((a) => a.slug === slug);

export const method = {
  steps: [
    { name: "Observe", line: "See what others overlook." },
    { name: "Reframe", line: "Find another way forward." },
    { name: "Shape", line: "Turn meaning into form." },
    { name: "Embed", line: "Make it live everywhere." },
  ],
  close: { line: "Refinement is not polish.", then: "It is precision." },
};
