import workHongmove from "@/assets/hongmove.jpg?as=picture";
import workKhaoyai from "@/assets/golf-hero.jpg?as=picture";
import workKhaoyaiB from "@/assets/golf-clubhouse.jpg?as=picture";
import workKhaoyaiC from "@/assets/golf-lifestyle.jpg?as=picture";
import workRtaf from "@/assets/rtaf.jpg?as=picture";
import workDemocrat from "@/assets/democrat.jpg?as=picture";
import workHeavy from "@/assets/heavy-organizer.jpg?as=picture";
import workHeavyB from "@/assets/concert-crowd.jpg?as=picture";
import workHeavyC from "@/assets/concert-backstage.jpg?as=picture";
import workGcoo from "@/assets/gcoo.jpg?as=picture";
import workMyHotel from "@/assets/work-myhotel.jpg?as=picture";
import workPalawat from "@/assets/work-palawat.jpg?as=picture";
import type { PictureData } from "@/components/Picture";


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
  year: string;
  cover: PictureData;
  gallery: PictureData[];
  /** One-line essence of the engagement */
  summary: string;
  /**
   * §33 patient file. The format is fixed; the weight is not — each case
   * leads with whichever field is the hero. These two turn /work from a
   * portfolio into a record of diagnoses:
   *   symptom — what the client walked in asking for
   *   verdict — what the real problem turned out to be
   */
  symptom: string;
  verdict: string;
  /** Short challenge line (deck "Challenge") */
  challenge: string;
  /** Live site URL — "" if none (card shows no external link) */
  url: string;
  /** The constraint — the hardest part of the brief (เงื่อนไข) */
  constraint: string;
  /** What we did (เราทำ) */
  whatWeDid: string;
  /** What we refused to do — the thing the client wanted that we cut (สิ่งที่ตัดทิ้ง) */
  whatWeKilled: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "democrat-party",
    n: "01",
    act: "01",
    actTitle: "เมื่อการพูดคือโจทย์ที่ยากที่สุด",
    title: "พรรคประชาธิปัตย์",
    domain: "democrat.or.th",
    niche: "Politics",
    year: "2023",
    cover: workDemocrat,
    gallery: [workDemocrat], // real cover only — gallery hidden until real frames exist
    summary: "ทำการเมืองสร้างสรรค์ผ่านกิจกรรม ไม่ใช่การหาเสียง",
    symptom:
      "อยากได้แคมเปญสื่อสารที่ทำให้คนรุ่นใหม่กลับมาสนใจพรรคอีกครั้ง",
    verdict:
      "ปัญหาไม่ใช่ว่าพูดไม่ดังพอ แต่คือทุกประโยคต้องผ่านกรอบกฎหมายเลือกตั้งก่อน — ต้องหาวิธีพูดที่คมพอจะอยู่ในกรอบนั้นได้ ไม่ใช่พูดให้มากขึ้น",
    challenge: "แรงต้านทางการเมือง / ข้อจำกัดของกฎหมายเลือกตั้ง",
    url: "https://democrat.or.th",
    constraint:
      "ทำการเมืองสร้างสรรค์ผ่านกิจกรรม ไม่ใช่การหาเสียง — ใต้กฎหมายเลือกตั้งและแรงต้านทางการเมือง ทุกประโยคมีกรอบ และทุกคำต้องผ่านการพิจารณาว่าเข้าข่ายหรือไม่",
    whatWeDid:
      "คอนเซปต์กิจกรรม + คอนเทนต์ที่สื่อสารจุดยืนโดยไม่เข้าข่ายหาเสียง — refine สารให้คมพอจะลงในกรอบที่กฎหมายอนุญาต โดยไม่สูญเสียพลังของเรื่อง",
    whatWeKilled:
      "สโลแกนที่เข้าใกล้การหาเสียงตรงๆ ตามที่ทีมงานอยากได้ — ตัดทิ้งตั้งแต่ brief แรก เพราะเข้าข่ายผิดกฎหมายเลือกตั้ง แม้จะจำง่ายกว่า",
  },
  {
    slug: "gcoo",
    n: "02",
    act: "02",
    actTitle: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ",
    title: "GCOO",
    domain: "gcoo.io",
    niche: "Mobility",
    year: "2023",
    cover: workGcoo,
    gallery: [workGcoo], // real cover only — gallery hidden until real frames exist
    summary: "เปิดตลาดไทยด้วย localization + payment gateway",
    symptom:
      "อยากเอาแบรนด์จากตลาดแม่มาเปิดในไทย ใช้แคมเปญเดิมที่เคยได้ผลมาแล้ว",
    verdict:
      "ปัญหาไม่ใช่การแปลภาษา แต่คือความเชื่อใจ — คนไทยยังไม่เคยใช้ของแบบนี้ และของที่ 'ย้ายมาทั้งดุ้น' จะถูกอ่านว่าไม่ใช่ของที่นี่",
    challenge: "ข้อกฎหมาย / การดีลสถานที่เพื่อนำรถไปวาง",
    url: "https://gcoo.io",
    constraint:
      "เปิดตลาดไทยด้วย localization + payment gateway — ใต้ข้อกฎหมายและการดีลพื้นที่วางรถจริง ในตลาดที่ผู้ใช้ยังไม่เคยเชื่อใจของแบบนี้มาก่อน",
    whatWeDid:
      "localize แบรนด์ + คอนเทนต์เปิดตลาด + งานสื่อสารหาพาร์ตเนอร์พื้นที่ — refine เรื่องของแบรนด์ต่างชาติให้คนไทยรู้สึกว่าเป็นของที่นี่",
    whatWeKilled:
      "แคมเปญเปิดตัวแบบเดียวกับที่บริษัทแม่เคยใช้ในตลาดอื่น — ตัดทิ้งเพราะคนไทยไม่เชื่อของที่ 'หน้าตาเหมือนย้ายมาทั้งดุ้น' โดยไม่ปรับให้เป็นของที่นี่จริง",
  },
  {
    slug: "my-hotel",
    n: "03",
    act: "02",
    actTitle: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ",
    title: "My Hotel",
    domain: "pzentsmart.com",
    niche: "Hospitality / OTA",
    year: "2024",
    cover: workMyHotel,
    gallery: [workMyHotel],
    summary: "วางตัวเป็น first smart hotel OTA ของไทย",
    symptom:
      "อยากได้เว็บและคอนเทนต์เปิดตัวแพลตฟอร์มจองโรงแรมใหม่",
    verdict:
      "ปัญหาไม่ใช่ช่องทางขาย แต่คือยังไม่มีใครเชื่อถือพอจะเอาห้องมาให้ขาย — ต้องสร้างความน่าเชื่อถือกับผู้ให้บริการก่อนจะมีของให้ขายจริง",
    challenge: "การดีลกับผู้ให้บริการให้เกิดความเชื่อถือ",
    url: "https://pzentsmart.com",
    constraint:
      "วางตัวเป็น first smart hotel OTA ของไทย — ของใหม่ที่ต้องสร้างความเชื่อถือกับผู้ให้บริการก่อนจะมีดีลและมีของให้ขายจริง",
    whatWeDid:
      "วางแบรนด์ + คอนเทนต์เปิดตัว + งานสื่อสารหาพาร์ตเนอร์โรงแรม — สร้างความน่าเชื่อถือให้แพลตฟอร์มใหม่ตั้งแต่วันแรก",
    whatWeKilled:
      "การชูฟีเจอร์เทคโนโลยีเป็นจุดขายหลัก — ตัดทิ้งเพราะโรงแรมไม่ได้อยากรู้ว่าระบบฉลาดแค่ไหน อยากรู้ว่าเชื่อใจได้ไหมมากกว่า",
  },
  {
    slug: "hongmove",
    n: "04",
    act: "02",
    actTitle: "เมื่อต้องเปิดตลาดที่ยังไม่มีใครเชื่อ",
    title: "HONG MOVE",
    domain: "hongmove.co.th",
    niche: "Airport Mobility",
    year: "2025",
    cover: workHongmove,
    gallery: [workHongmove], // real cover only — gallery hidden until real frames exist
    summary: "เปิดตัว taxi VIP EV ใน AOT พร้อมวางระบบความเป็นไปได้",
    symptom:
      "อยากได้สื่อประชาสัมพันธ์เปิดตัวบริการแท็กซี่ VIP EV ในสนามบิน",
    verdict:
      "ปัญหาไม่ใช่ปริมาณสื่อ แต่คือผู้โดยสารหลายภาษาต้องเข้าใจได้ในไม่กี่วินาที — สารต้องสั้นและข้ามกำแพงภาษาได้ ไม่ใช่สวยแต่ต้องแปล",
    challenge: "รองรับหลายภาษา — มาเลย์ · จีน · อาหรับ · ฮินดี",
    url: "https://hongmove.co.th",
    constraint:
      "เปิดตัว taxi VIP EV ใน AOT พร้อมวางระบบความเป็นไปได้ — ผู้ใช้หลากภาษาในบริบทสนามบินที่ทุกคนต้องเข้าใจได้ทันทีในไม่กี่วินาที",
    whatWeDid:
      "งานสื่อสารและคอนเทนต์ 4 ภาษา (มาเลย์ · จีน · อาหรับ · ฮินดี) สำหรับบริบทสนามบิน — refine สารให้สั้น คม และข้ามกำแพงภาษาได้",
    whatWeKilled:
      "มาสคอตและมุกตลกในสื่อประชาสัมพันธ์ ที่ทีมงานเสนอให้ดูเป็นกันเอง — ตัดทิ้งเพราะบริบทสนามบินต้องการความน่าเชื่อถือมากกว่าความน่ารัก",
  },
  {
    slug: "heavy-organizer",
    n: "05",
    act: "03",
    actTitle: "เมื่อต้องเปลี่ยนภาพจำ โดยไม่ทิ้งของเดิม",
    title: "HEAVY ORGANIZER",
    domain: "heavyorganizer.com",
    niche: "Music Festival",
    year: "2024",
    cover: workHeavy,
    gallery: [workHeavy, workHeavyB, workHeavyC],
    summary: "เทศกาลดนตรีสีเขียว carbon ต่ำ ที่ต้องการความร่วมมือจากผู้ร่วมงาน",
    symptom:
      "อยากให้คนมางานรู้ว่าเทศกาลนี้เป็นงานสีเขียว carbon ต่ำ",
    verdict:
      "ปัญหาไม่ใช่การให้ข้อมูล แต่คือความยั่งยืนที่ถูกเล่าแบบสั่งสอนจะบดบังความสนุก — ต้องทำให้คนรู้สึกเป็นเจ้าของ ไม่ใช่ถูกบอกให้ทำ",
    challenge: "สร้างความตระหนักและความร่วมมือจากผู้ร่วมงาน",
    url: "https://heavyorganizer.com",
    constraint:
      "เทศกาลดนตรีสีเขียว carbon ต่ำ — ต้องสร้างความตระหนักและความร่วมมือจากผู้ร่วมงาน โดยไม่ทำให้ความยั่งยืนกลายเป็นเรื่องน่าเบื่อที่บดบังความสนุก",
    whatWeDid:
      "เล่าเรื่องความยั่งยืนให้เป็นส่วนหนึ่งของความสนุก + แคมเปญกระตุ้นการมีส่วนร่วม — ทำให้คนอยากร่วมมือเพราะรู้สึกเป็นเจ้าของ ไม่ใช่เพราะถูกบอกให้ทำ",
    whatWeKilled:
      "ป้ายรณรงค์สิ่งแวดล้อมโทนสั่งสอนที่ทีมอีเวนต์อยากติดทั่วงาน — ตัดทิ้งเพราะมันทำให้คนรู้สึกถูกสอน ไม่ใช่ถูกชวนมาร่วมสนุก",
  },
  {
    slug: "khaoyai-country-club",
    n: "06",
    act: "03",
    actTitle: "เมื่อต้องเปลี่ยนภาพจำ โดยไม่ทิ้งของเดิม",
    title: "เขาใหญ่ คันทรี่คลับ",
    domain: "brc-kycgolf.com",
    niche: "Leisure Golf",
    year: "2024",
    cover: workKhaoyai,
    gallery: [workKhaoyai, workKhaoyaiB, workKhaoyaiC],
    summary: "ปรับมุมมองสู่ leisure golf โดยไม่เสียภาพลักษณ์เดิม",
    symptom:
      "อยากรีแบรนด์สนามให้ดูใหม่ เข้าถึงลูกค้ากลุ่มไลฟ์สไตล์มากขึ้น",
    verdict:
      "ปัญหาไม่ใช่ภาพลักษณ์ แต่คือการบริหารแบบแยกส่วนและการเมืองภายใน — ทุกฝ่ายต้องยอมรับ positioning เดียวกันก่อน ถึงจะสื่อสารออกไปได้",
    challenge: "การเมืองภายในสนาม / การบริหารแบบแยกส่วน",
    url: "https://brc-kycgolf.com",
    constraint:
      "ปรับมุมมองสู่ leisure golf โดยไม่เสียภาพลักษณ์เดิม — ท่ามกลางการเมืองในสนามและการบริหารแบบแยกส่วน ที่ทุกฝ่ายต้องยอมรับร่วมกันก่อนจะสื่อสารออกไปได้",
    whatWeDid:
      "หา positioning ใหม่ที่ทุกฝ่ายยอมรับร่วมกัน ก่อนสื่อสารออกไป — ขยับภาพจำเดิมทีละขั้น โดยไม่ทำให้คนที่รักของเดิมหาย",
    whatWeKilled:
      "แคมเปญที่เอียงไปทางกลุ่มสมาชิกฝ่ายเดียวตามที่บอร์ดบางส่วนต้องการ — ตัดทิ้งเพราะจะยิ่งตอกลิ่มการเมืองภายในที่มีอยู่แล้วให้ลึกขึ้น",
  },
  {
    slug: "royal-thai-air-force",
    n: "07",
    act: "01",
    actTitle: "เมื่อการพูดคือโจทย์ที่ยากที่สุด",
    title: "กองทัพอากาศ",
    domain: "rtaf.mi.th",
    niche: "Government",
    year: "2024",
    cover: workRtaf,
    gallery: [workRtaf], // real cover only — gallery hidden until real frames exist
    summary: "สื่อสารข้อมูลที่ถูกต้องและน่าสนใจในภาวะตึงเครียด",
    symptom:
      "อยากได้คอนเทนต์ที่ตอบโต้ข่าวปลอมได้เร็วและหนักแน่น",
    verdict:
      "ปัญหาไม่ใช่ความเร็วในการตอบ แต่คือยิ่งตอบแรงยิ่งขยายข่าวปลอม — ต้องวางระบบให้พูดได้ทันในกรอบที่เปิดเผยได้ โดยไม่ไปเพิ่มน้ำหนักให้เรื่องที่ไม่จริง",
    challenge: "fake news / ต้องรักษาความลับทางราชการ",
    url: "https://rtaf.mi.th",
    constraint:
      "สื่อสารข้อมูลที่ถูกต้องและน่าสนใจในภาวะตึงเครียด — ท่ามกลางข่าวปลอมและความลับทางราชการ ที่ทั้งต้องเปิดเผยได้และต้องเร็วพอจะทันกระแส",
    whatWeDid:
      "คอนเทนต์ข้อมูลที่ตรวจสอบได้ + แนวทางตอบข่าวผิดแบบเรียลไทม์ในกรอบที่เปิดเผยได้ — วางระบบให้พูดได้ทันโดยไม่หลุดเส้นความมั่นคง",
    whatWeKilled:
      "การตอบโต้ข่าวปลอมแบบดุเดือดที่ทีมสื่อสารภายในอยากใช้ — ตัดทิ้งเพราะยิ่งตอบแรง ยิ่งทำให้เรื่องที่ไม่จริงดูน่าสนใจและน่าเชื่อขึ้น",
  },
  {
    slug: "palawat-party",
    n: "08",
    act: "01",
    actTitle: "เมื่อการพูดคือโจทย์ที่ยากที่สุด",
    title: "พรรคพลวัต",
    domain: "",
    niche: "Politics",
    year: "2023",
    cover: workPalawat,
    gallery: [workPalawat],
    summary: "พรรคใหม่ที่นำเสนอมุมมองทางการเมืองภายใต้เวลาจำกัด",
    symptom:
      "อยากเปิดตัวพรรคใหม่ให้คนรู้จักเร็วที่สุดในเวลาที่มีจำกัด",
    verdict:
      "ปัญหาไม่ใช่การเป็นที่รู้จัก แต่คือถูกจำในฐานะอะไร — พรรคใหม่ที่เรียกความสนใจด้วยการชี้นิ้วใส่คนอื่น จะถูกจำว่าเป็นพรรคที่ด่า ไม่ใช่พรรคที่มีจุดยืน",
    challenge: "ไม่มีฐานเสียงเดิม / ข้อจำกัดของกฎหมายเลือกตั้ง",
    url: "",
    constraint:
      "พรรคใหม่ที่ต้องนำเสนอมุมมองทางการเมืองภายใต้เวลาจำกัด — ไม่มีฐานเสียงเดิม และทุกการสื่อสารอยู่ใต้ข้อจำกัดของกฎหมายเลือกตั้ง",
    whatWeDid:
      "วางจุดยืนและสารหลักให้ชัดในเวลาสั้น + คอนเทนต์แนะนำพรรค — refine เรื่องให้คนจำได้เร็วโดยไม่ข้ามกรอบกฎหมาย",
    whatWeKilled:
      "การเปรียบเทียบตัวเองกับพรรคใหญ่โดยตรงเพื่อเรียกความสนใจ — ตัดทิ้งเพราะพรรคใหม่ที่ชนะด้วยการชี้นิ้วใส่คนอื่น มักถูกจำในฐานะพรรคที่ด่า ไม่ใช่พรรคที่มีจุดยืน",
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
