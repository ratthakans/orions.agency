import workHongmove from "@/assets/hongmove.png";
import workKhaoyai from "@/assets/golf-hero.jpg";
import workKhaoyaiB from "@/assets/golf-clubhouse.jpg";
import workKhaoyaiC from "@/assets/golf-lifestyle.jpg";
import workMyHotel from "@/assets/myhotel.png";
import workHotelB from "@/assets/hospitality-hero.jpg";
import workHotelC from "@/assets/hospitality-lobby.jpg";
import workRtaf from "@/assets/rtaf.jpg";
import workDemocrat from "@/assets/democrat.jpg";
import workHeavy from "@/assets/heavy-organizer.jpg";
import workHeavyB from "@/assets/concert-crowd.jpg";
import workHeavyC from "@/assets/concert-backstage.jpg";
import workGcoo from "@/assets/gcoo.jpg";

export type CaseStudy = {
  slug: string;
  n: string;
  title: string;
  niche: string;
  scope: string;
  year: string;
  impact: string;
  impactLabel: string;
  cover: string;
  gallery: string[];
  summary: string;
  brief: string;
  approach: { n: string; title: string; body: string }[];
  metrics: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hongmove",
    n: "01",
    title: "Hongmove",
    niche: "PropTech",
    scope: "Brand · Web · Content",
    year: "2024",
    impact: "+312%",
    impactLabel: "Sign-ups · first month",
    cover: workHongmove,
    gallery: [workHongmove],
    summary: "Launch a new rental platform with a brand and content system clear enough to scale.",
    brief:
      "Hongmove ต้องการเปิดตัวแพลตฟอร์มเช่าที่อยู่อาศัยใหม่ในตลาดที่แออัด — เราออกแบบระบบแบรนด์ เว็บไซต์เปิดตัว และคอนเทนต์ชุดแรกเพื่อสื่อสารจุดต่างได้ตั้งแต่วันแรก",
    approach: [
      { n: "01", title: "Positioning", body: "เริ่มจาก audit แบรนด์คู่แข่ง 12 ราย ตกผลึก positioning หนึ่งประโยคที่ทีมทั้งบริษัทพูดได้ตรงกัน" },
      { n: "02", title: "System", body: "สร้าง brand system + UI kit + content templates เพื่อให้ทุกชิ้นออกตลาดได้เร็วและคงเอกลักษณ์" },
      { n: "03", title: "Launch loop", body: "วาง 6:3:1 content loop เดือนแรก พร้อม dashboard ติดตามผลแบบรายสัปดาห์" },
    ],
    metrics: [
      { value: "+312%", label: "Sign-ups · first month" },
      { value: "2.4×", label: "Organic reach vs benchmark" },
      { value: "18 days", label: "From kickoff to launch" },
    ],
  },
  {
    slug: "khaoyai-country-club",
    n: "02",
    title: "Khaoyai Country Club",
    niche: "Hospitality",
    scope: "Photo · Video · Social",
    year: "2024",
    impact: "+48%",
    impactLabel: "Member enquiries",
    cover: workKhaoyai,
    gallery: [workKhaoyai, workKhaoyaiB, workKhaoyaiC],
    summary: "A lifestyle reframe for a heritage club — quiet, considered, and unmistakably premium.",
    brief:
      "คลับเก่าแก่ที่อยากกลับมาพูดกับสมาชิกรุ่นใหม่ — เราถ่ายภาพและวิดีโอ lifestyle ที่ละเอียดและไม่พยายามขายเกินจริง",
    approach: [
      { n: "01", title: "Tone", body: "เลือกโทนภาพแบบ editorial — แสงธรรมชาติ จังหวะช้า เน้นบรรยากาศมากกว่า facility list" },
      { n: "02", title: "Production", body: "ถ่ายสองวัน ครอบคลุม clubhouse, course, และ lifestyle vignettes" },
      { n: "03", title: "Rollout", body: "ตัด short-form 9 ชิ้น + hero film 60s + asset library สำหรับทีม sales" },
    ],
    metrics: [
      { value: "+48%", label: "Member enquiries" },
      { value: "3.1M", label: "Organic video views" },
      { value: "2 days", label: "On location" },
    ],
  },
  {
    slug: "myhotel",
    n: "03",
    title: "MyHotel",
    niche: "Hospitality",
    scope: "Content · Paid ads",
    year: "2024",
    impact: "−37%",
    impactLabel: "Cost per booking",
    cover: workMyHotel,
    gallery: [workMyHotel, workHotelB, workHotelC],
    summary: "Monthly content tuned against paid performance — lower CPA, higher direct bookings.",
    brief:
      "MyHotel ต้องการลด cost per booking โดยไม่กระทบ direct revenue — เราดูแลคอนเทนต์รายเดือนและ Meta ads แบบ closed-loop",
    approach: [
      { n: "01", title: "Read the data", body: "อ่าน 90 วันย้อนหลังของ ad account แล้วจัดกลุ่ม creative ที่จริงๆ ขับ booking" },
      { n: "02", title: "Refine the loop", body: "ผลิตคอนเทนต์ 10 ชิ้น/เดือน ทดสอบ 3 angle ทุกสัปดาห์" },
      { n: "03", title: "Cut what's noise", body: "ตัด creative ที่ไม่ทำงานทันที — ทุกชิ้นที่อยู่ต่อ ต้องผ่าน CPA target" },
    ],
    metrics: [
      { value: "−37%", label: "Cost per booking" },
      { value: "+22%", label: "Direct bookings" },
      { value: "6 mo", label: "On retainer" },
    ],
  },
  {
    slug: "royal-thai-air-force",
    n: "04",
    title: "Royal Thai Air Force",
    niche: "Government",
    scope: "Film · Production · Post",
    year: "2023",
    impact: "2.1M",
    impactLabel: "Views across channels",
    cover: workRtaf,
    gallery: [workRtaf],
    summary: "An official film, end to end — from concept through final delivery.",
    brief:
      "ผลิตภาพยนตร์เป็นทางการให้กับกองทัพอากาศ — ตั้งแต่ pre-production จนถึง color และ sound delivery",
    approach: [
      { n: "01", title: "Concept", body: "ทำงานร่วมกับทีมประชาสัมพันธ์ ตกผลึกแกนเรื่องในสองสัปดาห์" },
      { n: "02", title: "Production", body: "ถ่ายทำในฐานทัพและภาคสนาม ใช้ทีม core 12 คน" },
      { n: "03", title: "Post", body: "Edit, color, sound — แก้สามรอบและส่งมาสเตอร์ก่อน deadline" },
    ],
    metrics: [
      { value: "2.1M", label: "Total views" },
      { value: "1 film", label: "Hero deliverable" },
      { value: "11 wks", label: "Concept to master" },
    ],
  },
  {
    slug: "democrat-party",
    n: "05",
    title: "Democrat Party",
    niche: "Politics",
    scope: "Campaign · Film · Social",
    year: "2023",
    impact: "12M+",
    impactLabel: "Cross-platform reach",
    cover: workDemocrat,
    gallery: [workDemocrat],
    summary: "National campaign creative with daily turnaround across every platform.",
    brief:
      "แคมเปญระดับชาติที่ต้องการความเร็วและความสม่ำเสมอ — เราดูแล creative output รายวันตลอดช่วงหาเสียง",
    approach: [
      { n: "01", title: "War room", body: "ตั้งทีมเฉพาะกิจ 8 คน ทำงานแบบ news desk รายวัน" },
      { n: "02", title: "Template system", body: "วาง template ที่ทำให้ผลิต 20+ ชิ้น/วัน ได้โดยไม่หลุดแบรนด์" },
      { n: "03", title: "Daily review", body: "Review ผลทุกเช้า ปรับ angle ทุกบ่าย" },
    ],
    metrics: [
      { value: "12M+", label: "Cross-platform reach" },
      { value: "600+", label: "Assets shipped" },
      { value: "60 days", label: "Campaign window" },
    ],
  },
  {
    slug: "heavy-organizer",
    n: "06",
    title: "Heavy Organizer",
    niche: "Events",
    scope: "Brand · Event film · Recap",
    year: "2024",
    impact: "+88%",
    impactLabel: "Next-show conversion",
    cover: workHeavy,
    gallery: [workHeavy, workHeavyB, workHeavyC],
    summary: "Recap films that actually sold the next show.",
    brief:
      "Heavy ต้องการ recap ที่ไม่ใช่แค่ highlight reel — แต่ขายตั๋วโชว์ถัดไปได้จริง",
    approach: [
      { n: "01", title: "Story arc", body: "ตั้ง narrative ก่อนเริ่มถ่าย — ทุก shot ต้องตอบโจทย์เรื่องที่จะเล่า" },
      { n: "02", title: "Live coverage", body: "ทีม 6 คน ครอบคลุม stage + crowd + backstage" },
      { n: "03", title: "48h turnaround", body: "ส่ง recap ภายใน 48 ชม. หลังโชว์จบ — ใช้ momentum ของกระแสจริง" },
    ],
    metrics: [
      { value: "+88%", label: "Next-show conversion" },
      { value: "48h", label: "Recap turnaround" },
      { value: "5 shows", label: "Across the season" },
    ],
  },
  {
    slug: "gcoo",
    n: "07",
    title: "GCOO",
    niche: "Mobility",
    scope: "Brand · Launch campaign",
    year: "2023",
    impact: "+540%",
    impactLabel: "App downloads",
    cover: workGcoo,
    gallery: [workGcoo],
    summary: "Launch campaign for an e-scooter sharing app — brand, OOH, and social.",
    brief:
      "GCOO เข้าตลาดไทยครั้งแรก — เราออกแบบ launch campaign ที่ทำงานบน OOH, social และ in-app พร้อมกัน",
    approach: [
      { n: "01", title: "Local insight", body: "สัมภาษณ์ผู้ใช้ในกรุงเทพและภูเก็ตก่อนเริ่ม creative" },
      { n: "02", title: "Hero campaign", body: "วาง hero film + 6 cut-down + OOH 4 design" },
      { n: "03", title: "Always-on", body: "ส่งต่อให้ทีม in-house พร้อม playbook สำหรับเดือนถัดไป" },
    ],
    metrics: [
      { value: "+540%", label: "App downloads" },
      { value: "9 cities", label: "OOH coverage" },
      { value: "1 quarter", label: "From brief to launch" },
    ],
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