import workHongmove from "@/assets/hongmove.jpg";
import workKhaoyai from "@/assets/golf-hero.jpg";
import workKhaoyaiB from "@/assets/golf-clubhouse.jpg";
import workKhaoyaiC from "@/assets/golf-lifestyle.jpg";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";
import workHeavyB from "@/assets/concert-crowd.jpg";
import workHeavyC from "@/assets/concert-backstage.jpg";
import workGcoo from "@/assets/gcoo.jpg";
import workMyHotel from "@/assets/work-myhotel.jpg";
import workPalawat from "@/assets/work-palawat.jpg";


export type CaseStudy = {
  slug: string;
  n: string;
  /** Act number — 01, 02, 03 */
  act: string;
  /** Act narrative title */
  actTitle: string;
  title: string;
  /** Public domain / handle shown as a meta line */
  domain: string;
  /** Category label */
  niche: string;
  /** Lines applied — "Boutique · Digital" */
  scope: string;
  year: string;
  cover: string;
  gallery: string[];
  /** One-line essence of the engagement */
  summary: string;
  /** Top-level line bucket */
  service: "Digital" | "Boutique" | "Production";
  /** Short challenge line (deck "Challenge") */
  challenge: string;
  /** Live site URL — "" if none (card shows no external link) */
  url: string;
  /** The constraint — the hardest part of the brief (เงื่อนไข) */
  constraint: string;
  /** What we did (เราทำ) */
  whatWeDid: string;
};

/** The three acts that frame Selected Work. */
export const acts = [
  { n: "01", title: "เมื่อการพูดคือโจทย์ที่ยากที่สุด", lead: "บางองค์กรพูดอะไรก็ได้ บางองค์กรทุกประโยคมีกรอบ — งานคือพูดให้ทรงพลังโดยไม่ข้ามเส้น" },
  { n: "02", title: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ", lead: "ของใหม่ไม่ได้แพ้เพราะไม่ดี แต่แพ้เพราะความเชื่อใจยังไม่มาและกฎยังไม่เอื้อ" },
  { n: "03", title: "เมื่อต้องเปลี่ยนภาพจำ โดยไม่ทิ้งของเดิม", lead: "การ rebrand ที่ยากที่สุดไม่ใช่การเริ่มใหม่ แต่คือการขยับภาพจำเดิมโดยไม่ทำให้คนที่รักของเดิมหาย" },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "democrat-party",
    n: "01",
    act: "01",
    actTitle: "เมื่อการพูดคือโจทย์ที่ยากที่สุด",
    title: "พรรคประชาธิปัตย์",
    domain: "democrat.or.th",
    niche: "Politics",
    scope: "Boutique · Digital",
    year: "2023",
    cover: workDemocrat,
    gallery: [workDemocrat], // real cover only — gallery hidden until real frames exist
    summary: "ทำการเมืองสร้างสรรค์ผ่านกิจกรรม ไม่ใช่การหาเสียง",
    service: "Boutique",
    challenge: "แรงต้านทางการเมือง / ข้อจำกัดของกฎหมายเลือกตั้ง",
    url: "https://democrat.or.th",
    constraint:
      "ทำการเมืองสร้างสรรค์ผ่านกิจกรรม ไม่ใช่การหาเสียง — ใต้กฎหมายเลือกตั้งและแรงต้านทางการเมือง ทุกประโยคมีกรอบ และทุกคำต้องผ่านการพิจารณาว่าเข้าข่ายหรือไม่",
    whatWeDid:
      "คอนเซปต์กิจกรรม + คอนเทนต์ที่สื่อสารจุดยืนโดยไม่เข้าข่ายหาเสียง — refine สารให้คมพอจะลงในกรอบที่กฎหมายอนุญาต โดยไม่สูญเสียพลังของเรื่อง",
  },
  {
    slug: "gcoo",
    n: "02",
    act: "02",
    actTitle: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ",
    title: "GCOO",
    domain: "gcoo.io",
    niche: "Mobility",
    scope: "Boutique · Digital",
    year: "2023",
    cover: workGcoo,
    gallery: [workGcoo], // real cover only — gallery hidden until real frames exist
    summary: "เปิดตลาดไทยด้วย localization + payment gateway",
    service: "Boutique",
    challenge: "ข้อกฎหมาย / การดีลสถานที่เพื่อนำรถไปวาง",
    url: "https://gcoo.io",
    constraint:
      "เปิดตลาดไทยด้วย localization + payment gateway — ใต้ข้อกฎหมายและการดีลพื้นที่วางรถจริง ในตลาดที่ผู้ใช้ยังไม่เคยเชื่อใจของแบบนี้มาก่อน",
    whatWeDid:
      "localize แบรนด์ + คอนเทนต์เปิดตลาด + งานสื่อสารหาพาร์ตเนอร์พื้นที่ — refine เรื่องของแบรนด์ต่างชาติให้คนไทยรู้สึกว่าเป็นของที่นี่",
  },
  {
    slug: "my-hotel",
    n: "03",
    act: "02",
    actTitle: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ",
    title: "My Hotel",
    domain: "pzentsmart.com",
    niche: "Hospitality / OTA",
    scope: "Boutique · Digital",
    year: "2024",
    cover: workMyHotel,
    gallery: [workMyHotel],
    summary: "วางตัวเป็น first smart hotel OTA ของไทย",
    service: "Boutique",
    challenge: "การดีลกับผู้ให้บริการให้เกิดความเชื่อถือ",
    url: "https://pzentsmart.com",
    constraint:
      "วางตัวเป็น first smart hotel OTA ของไทย — ของใหม่ที่ต้องสร้างความเชื่อถือกับผู้ให้บริการก่อนจะมีดีลและมีของให้ขายจริง",
    whatWeDid:
      "วางแบรนด์ + คอนเทนต์เปิดตัว + งานสื่อสารหาพาร์ตเนอร์โรงแรม — สร้างความน่าเชื่อถือให้แพลตฟอร์มใหม่ตั้งแต่วันแรก",
  },
  {
    slug: "hongmove",
    n: "04",
    act: "02",
    actTitle: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ",
    title: "HONG MOVE",
    domain: "hongmove.co.th",
    niche: "Airport Mobility",
    scope: "Boutique · Production",
    year: "2025",
    cover: workHongmove,
    gallery: [workHongmove], // real cover only — gallery hidden until real frames exist
    summary: "เปิดตัว taxi VIP EV ใน AOT พร้อมวางระบบความเป็นไปได้",
    service: "Production",
    challenge: "รองรับหลายภาษา — มาเลย์ · จีน · อาหรับ · ฮินดี",
    url: "https://hongmove.co.th",
    constraint:
      "เปิดตัว taxi VIP EV ใน AOT พร้อมวางระบบความเป็นไปได้ — ผู้ใช้หลากภาษาในบริบทสนามบินที่ทุกคนต้องเข้าใจได้ทันทีในไม่กี่วินาที",
    whatWeDid:
      "งานสื่อสารและคอนเทนต์ 4 ภาษา (มาเลย์ · จีน · อาหรับ · ฮินดี) สำหรับบริบทสนามบิน — refine สารให้สั้น คม และข้ามกำแพงภาษาได้",
  },
  {
    slug: "heavy-organizer",
    n: "05",
    act: "03",
    actTitle: "เมื่อต้องเปลี่ยนภาพจำ โดยไม่ทิ้งของเดิม",
    title: "HEAVY ORGANIZER",
    domain: "heavyorganizer.com",
    niche: "Music Festival",
    scope: "Production · Digital",
    year: "2024",
    cover: workHeavy,
    gallery: [workHeavy, workHeavyB, workHeavyC],
    summary: "เทศกาลดนตรีสีเขียว carbon ต่ำ ที่ต้องการความร่วมมือจากผู้ร่วมงาน",
    service: "Production",
    challenge: "สร้างความตระหนักและความร่วมมือจากผู้ร่วมงาน",
    url: "https://heavyorganizer.com",
    constraint:
      "เทศกาลดนตรีสีเขียว carbon ต่ำ — ต้องสร้างความตระหนักและความร่วมมือจากผู้ร่วมงาน โดยไม่ทำให้ความยั่งยืนกลายเป็นเรื่องน่าเบื่อที่บดบังความสนุก",
    whatWeDid:
      "เล่าเรื่องความยั่งยืนให้เป็นส่วนหนึ่งของความสนุก + แคมเปญกระตุ้นการมีส่วนร่วม — ทำให้คนอยากร่วมมือเพราะรู้สึกเป็นเจ้าของ ไม่ใช่เพราะถูกบอกให้ทำ",
  },
  {
    slug: "khaoyai-country-club",
    n: "06",
    act: "03",
    actTitle: "เมื่อต้องเปลี่ยนภาพจำ โดยไม่ทิ้งของเดิม",
    title: "เขาใหญ่ คันทรี่คลับ",
    domain: "brc-kycgolf.com",
    niche: "Leisure Golf",
    scope: "Boutique · Production",
    year: "2024",
    cover: workKhaoyai,
    gallery: [workKhaoyai, workKhaoyaiB, workKhaoyaiC],
    summary: "ปรับมุมมองสู่ leisure golf โดยไม่เสียภาพลักษณ์เดิม",
    service: "Boutique",
    challenge: "การเมืองภายในสนาม / การบริหารแบบแยกส่วน",
    url: "https://brc-kycgolf.com",
    constraint:
      "ปรับมุมมองสู่ leisure golf โดยไม่เสียภาพลักษณ์เดิม — ท่ามกลางการเมืองในสนามและการบริหารแบบแยกส่วน ที่ทุกฝ่ายต้องยอมรับร่วมกันก่อนจะสื่อสารออกไปได้",
    whatWeDid:
      "หา positioning ใหม่ที่ทุกฝ่ายยอมรับร่วมกัน ก่อนสื่อสารออกไป — ขยับภาพจำเดิมทีละขั้น โดยไม่ทำให้คนที่รักของเดิมหาย",
  },
  {
    slug: "royal-thai-air-force",
    n: "07",
    act: "01",
    actTitle: "เมื่อการพูดคือโจทย์ที่ยากที่สุด",
    title: "กองทัพอากาศ",
    domain: "rtaf.mi.th",
    niche: "Government",
    scope: "Production · Digital",
    year: "2024",
    cover: workRtaf,
    gallery: [workRtaf], // real cover only — gallery hidden until real frames exist
    summary: "สื่อสารข้อมูลที่ถูกต้องและน่าสนใจในภาวะตึงเครียด",
    service: "Production",
    challenge: "fake news / ต้องรักษาความลับทางราชการ",
    url: "https://rtaf.mi.th",
    constraint:
      "สื่อสารข้อมูลที่ถูกต้องและน่าสนใจในภาวะตึงเครียด — ท่ามกลางข่าวปลอมและความลับทางราชการ ที่ทั้งต้องเปิดเผยได้และต้องเร็วพอจะทันกระแส",
    whatWeDid:
      "คอนเทนต์ข้อมูลที่ตรวจสอบได้ + แนวทางตอบข่าวผิดแบบเรียลไทม์ในกรอบที่เปิดเผยได้ — วางระบบให้พูดได้ทันโดยไม่หลุดเส้นความมั่นคง",
  },
  {
    slug: "palawat-party",
    n: "08",
    act: "01",
    actTitle: "เมื่อการพูดคือโจทย์ที่ยากที่สุด",
    title: "พรรคพลวัต",
    domain: "",
    niche: "Politics",
    scope: "Boutique · Digital",
    year: "2023",
    cover: workPalawat,
    gallery: [workPalawat],
    summary: "พรรคใหม่ที่นำเสนอมุมมองทางการเมืองภายใต้เวลาจำกัด",
    service: "Boutique",
    challenge: "ไม่มีฐานเสียงเดิม / ข้อจำกัดของกฎหมายเลือกตั้ง",
    url: "",
    constraint:
      "พรรคใหม่ที่ต้องนำเสนอมุมมองทางการเมืองภายใต้เวลาจำกัด — ไม่มีฐานเสียงเดิม และทุกการสื่อสารอยู่ใต้ข้อจำกัดของกฎหมายเลือกตั้ง",
    whatWeDid:
      "วางจุดยืนและสารหลักให้ชัดในเวลาสั้น + คอนเทนต์แนะนำพรรค — refine เรื่องให้คนจำได้เร็วโดยไม่ข้ามกรอบกฎหมาย",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getAdjacent = (slug: string) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? caseStudies[i - 1] : caseStudies[caseStudies.length - 1],
    next: i < caseStudies.length - 1 ? caseStudies[i + 1] : caseStudies[0],
  };
};
