// The single answer to "what does ØRIONS do". Home and /practice both read
// from here, so the offer cannot drift into two versions again.
//
// Copy is the founder's brand book, verbatim — English brand lines, Thai body.
// Do not paraphrase it here; change the brand book first.

export type Discipline = {
  n: string;
  slug: "story" | "direction" | "expression";
  name: string;
  line: string;
  th: string;
  intro?: string;
  capabilities: string[];
};

export const disciplines: Discipline[] = [
  {
    n: "01",
    slug: "story",
    name: "Story",
    line: "Find what matters.",
    th: "ค้นหาเรื่องที่ควรถูกเล่า",
    capabilities: [
      "Brand Strategy",
      "Brand Positioning",
      "Research & Insight",
      "Brand Narrative",
      "Naming",
      "Messaging",
      "Creative Strategy",
      "Communication Platform",
      "Campaign Concept",
    ],
  },
  {
    n: "02",
    slug: "direction",
    name: "Direction",
    line: "Shape how the story should feel.",
    th: "สร้างโลก Creative ที่เหมาะกับเรื่องนั้น",
    intro: "เมื่อรู้แล้วว่าจะเล่าเรื่องอะไร เราสร้างโลกที่เรื่องนั้นควรมีชีวิตอยู่",
    capabilities: [
      "Creative Direction",
      "Brand Identity",
      "Visual Identity",
      "Art Direction",
      "Design System",
      "Campaign Direction",
      "Key Visual",
      "Editorial Direction",
      "Content Direction",
    ],
  },
  {
    n: "03",
    slug: "expression",
    name: "Expression",
    line: "Bring the story into the world.",
    th: "ทำให้เรื่องนั้นมีชีวิตผ่าน Medium ที่เหมาะสม",
    intro: "เปลี่ยน Idea ให้กลายเป็นสิ่งที่ผู้คนสามารถเห็น รู้สึก และมีปฏิสัมพันธ์ด้วย",
    capabilities: [
      "Film",
      "Photography",
      "Commercial Production",
      "Branded Content",
      "Social Content",
      "Campaign Assets",
      "Website",
      "Digital Experience",
      "Brand Experience",
      "Activation",
      "Creative Production",
    ],
  },
];

export type ProcessStep = {
  n: string;
  name: string;
  line: string;
  body: string[];
  list?: string[];
  close?: string;
};

// A genuine sequence — the order is the method — so these carry numbers.
export const process: ProcessStep[] = [
  {
    n: "01",
    name: "Discover",
    line: "Find the stars.",
    body: ["ก่อนจะเชื่อมดาว เราต้องรู้ก่อนว่าดาวดวงไหนสำคัญ"],
    list: ["Brand", "Business", "Audience", "Culture", "Competitor", "Product", "People", "Context"],
    close: "และมองหารายละเอียดที่อาจถูกมองข้าม เพราะบางครั้ง Insight ที่ใหญ่ที่สุด อาจซ่อนอยู่ในสิ่งเล็กที่สุด",
  },
  {
    n: "02",
    name: "Connect",
    line: "Connect the dots.",
    body: [
      "เมื่อได้ข้อมูลแล้ว เราไม่ได้เพียงรวบรวมมัน แต่หาความสัมพันธ์ระหว่างสิ่งต่าง ๆ",
      "อะไรเชื่อมกับอะไร · อะไรคือความขัดแย้งที่น่าสนใจ · อะไรคือความจริงที่คู่แข่งพูดไม่ได้ · อะไรคือพื้นที่ที่แบรนด์สามารถเป็นเจ้าของ",
    ],
    close: "นี่คือจุดที่ข้อมูลเริ่มกลายเป็น Meaning",
  },
  {
    n: "03",
    name: "Shape",
    line: "Shape the story.",
    body: ["เรานำ Insight มาสร้างเป็น"],
    list: ["Narrative", "Positioning", "Big Idea", "Creative Concept", "Campaign Platform", "Visual Direction"],
    close: "จนเกิดเป็นเรื่องหนึ่งเรื่องที่แข็งแรงพอจะรองรับทุก Execution",
  },
  {
    n: "04",
    name: "Refine",
    line: "Remove what doesn't belong.",
    body: [
      "เรากลับมาถามงานซ้ำ ๆ",
      "จำเป็นไหม? · ชัดขึ้นได้ไหม? · ง่ายกว่านี้ได้ไหม? · มีอะไรเกินมาหรือเปล่า? · ทุกอย่างสนับสนุน Idea เดียวกันหรือยัง?",
    ],
    close: "จนเหลือเฉพาะสิ่งที่ควรอยู่",
  },
  {
    n: "05",
    name: "Express",
    line: "Bring it to life.",
    body: ["เมื่อเรื่องชัดแล้ว เราจึงเลือกว่าจะทำให้มันมีชีวิตอย่างไร"],
    list: ["Film", "Identity", "Campaign", "Photography", "Content", "Digital", "Experience"],
    close: "หรืออะไรก็ตามที่เหมาะกับเรื่องนั้นจริง ๆ",
  },
];
