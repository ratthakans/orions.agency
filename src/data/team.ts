// The people who lead the work. Read by /about and by client pitch pages, so a
// credit is written once and cannot drift between the two.

import founderPortrait from "@/assets/team/founder-portrait.jpg?as=picture";
import directorPortrait from "@/assets/team/director-niti.jpg?as=picture";
import audiQ8 from "@/assets/credits/audi-q8.jpg?as=picture";
import zolza from "@/assets/credits/zolza.jpg?as=picture";
import koetKaeChepTo from "@/assets/credits/koet-kae-chep-to.jpg?as=picture";
import theLastNote from "@/assets/credits/the-last-note.jpg?as=picture";
import type { PictureData } from "@/components/Picture";

export type Credit = {
  title: string;
  /** Client or broadcaster, shown as a mono meta line. */
  client: string;
  /** What the piece is, in a few words. */
  line: string;
  image: PictureData;
  url: string;
};

export type Person = {
  name: string;
  nameTh: string;
  role: string;
  portrait: PictureData;
  /** A short bio in Thai — what they bring, not a list of adjectives. */
  bio: string;
  credits: Credit[];
  /** Where to see more of their work. */
  more?: { label: string; url: string };
};

export const founder: Person = {
  name: "Ratthakans Suwanphakdee",
  nameTh: "รัฐกันต์ สุวรรณภักดี",
  role: "Founder & Creative Director",
  portrait: founderPortrait,
  bio: "ดูแลงานสร้างสรรค์ของ ORIONS ตั้งแต่โจทย์ แนวคิด สารหลัก ไปจนถึงทิศทางภาพ ผ่านงานให้แบรนด์อย่าง Audi Thailand และ ZOLZA รวมถึงแบรนด์ในหลากหลายธุรกิจ ตั้งแต่ยานยนต์ เครื่องดื่ม ไปจนถึงงานบริการและอีเวนต์",
  credits: [
    {
      title: "Audi Q8 TFSI e edition one",
      client: "Audi Thailand",
      line: "Brand film — sport and luxury on a grand scale",
      image: audiQ8,
      url: "https://www.youtube.com/watch?v=_aEZ3MWhjV4",
    },
    {
      title: "ZOLZA — SET ชีวิตให้ FRESH",
      client: "ZOLZA",
      line: "Brand world & website for a sparkling cider vinegar",
      image: zolza,
      url: "https://www.zolzadrink.com",
    },
  ],
  more: { label: "See all work", url: "/work" },
};

export const director: Person = {
  name: "Niti Paladkong",
  nameTh: "นิติ ปลัดกอง",
  role: "Director",
  portrait: directorPortrait,
  bio: "ผู้กำกับซีรีส์ “เกิด/แก่/เจ็บ/โต” และ “ท่วงทำนองที่เลือนหาย” ทาง Thai PBS และผู้ก่อตั้ง Fin-land Studio — เล่าเรื่องชีวิต ความสัมพันธ์ และครอบครัว ผ่านตัวละครที่มีมิติและอารมณ์ที่คนดูเข้าถึงได้จริง",
  credits: [
    {
      title: "เกิด/แก่/เจ็บ/โต",
      client: "Thai PBS · 2025",
      line: "มิตรภาพและการเปิดใจระหว่างคนต่างวัย",
      image: koetKaeChepTo,
      url: "https://www.thaipbs.or.th/program/TheSummerWeMet",
    },
    {
      title: "ท่วงทำนองที่เลือนหาย",
      client: "Thai PBS · 2026",
      line: "ครอบครัวที่ดนตรีเคยผูกไว้ และเคยพรากออกจากกัน",
      image: theLastNote,
      url: "https://www.thaipbs.or.th/program/TheLastNote",
    },
  ],
  more: { label: "krafx.com", url: "https://krafx.com" },
};
