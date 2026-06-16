// Work-page portfolio — grouped by craft category (mirrors the ORIONS deck).
// Covers are optional: a tile renders a branded placeholder until a real image
// is dropped in (set `cover` to an imported asset to replace it).

export type PortItem = {
  name: string;
  /** Music: artist · or a small sub-label */
  meta?: string;
  /** Photo-set size → shown as a "N รูป" badge and (for masonry) taller tiles */
  count?: number;
  /** External live link (optional) */
  url?: string;
  /** Real cover image (optional; placeholder shown if absent) */
  cover?: string;
};

export type PortLayout = "masonry" | "reels" | "wide" | "events";

export type PortCategory = {
  key: string;
  /** Short label for the filter chip */
  chip: string;
  n: string;
  title: string;
  sub: string;
  layout: PortLayout;
  /** wide layout: show a second artist line */
  music?: boolean;
  items: PortItem[];
};

export const portfolio: PortCategory[] = [
  {
    key: "social",
    chip: "Social & ads",
    n: "01",
    title: "Social posts & creative ads",
    sub: "16 projects",
    layout: "masonry",
    items: [
      { name: "RWS" },
      { name: "Hongmove", count: 6 },
      { name: "Leicester City" },
      { name: "ONS", count: 5 },
      { name: "Audi" },
      { name: "เทศกาลดนตรีที่ไม่มีชื่อ", count: 6 },
      { name: "Bangpakong Riverside", count: 3 },
      { name: "แก่นโฟล์ค", count: 6 },
      { name: "International Women's Day" },
      { name: "Analog Sky Flow", count: 6 },
      { name: "Khao Yai Country Club", count: 3 },
      { name: "Chivarak", count: 4 },
      { name: "B-Healthy", count: 4 },
      { name: "Tevada", count: 4 },
      { name: "SNFX", count: 4 },
      { name: "Playground Live — หอการค้า" },
    ],
  },
  {
    key: "reels",
    chip: "Reels",
    n: "02",
    title: "Reels & short video",
    sub: "11 projects",
    layout: "reels",
    items: [
      { name: "พรรคภูมิใจไทย" },
      { name: "Handverk" },
      { name: "DevCamp" },
      { name: "Tevada Global" },
      { name: "Life of Cars" },
      { name: "Gravity Tones" },
      { name: "พรรคพลวัต" },
      { name: "Chivarak" },
      { name: "พรรคประชาธิปัตย์" },
      { name: "B-Healthy" },
      { name: "Analog Skyflow" },
    ],
  },
  {
    key: "entertainment",
    chip: "Entertainment",
    n: "03",
    title: "Entertainment & long-form",
    sub: "5 projects",
    layout: "wide",
    items: [
      { name: "เถื่อน Travel" },
      { name: "The Upgrade", meta: "Workpoint" },
      { name: "เพลงลำคำเขื่อนแก้ว" },
      { name: "เกิดแก่เจ็บโต" },
      { name: "ท่องทำนองที่เลือนหาย" },
    ],
  },
  {
    key: "music",
    chip: "Music",
    n: "04",
    title: "Music producing & video",
    sub: "15 tracks",
    layout: "wide",
    music: true,
    items: [
      { name: "สาวน้อยกลับบ้าน", meta: "กวาง จิรพรรณ" },
      { name: "พังในพริบตา", meta: "Pancake" },
      { name: "กลับไปก่อนได้ไหม", meta: "Num Kala" },
      { name: "ทางที่ดีคือทางแบบไหน", meta: "Pancake" },
      { name: "วันครบรอบนับยังไง", meta: "Pancake" },
      { name: "เดือนดาว", meta: "นุ่นนิ่น" },
      { name: "อกหักได้ไง ไม่ได้เป็นอะไรกับเขา", meta: "Pancake" },
      { name: "จม", meta: "Num Kala" },
      { name: "พลังวิเศษ", meta: "นุ๊ก ปาย" },
      { name: "เปิดใจปุ๊ป อกหักปั๊ป", meta: "กวาง จิรพรรณ" },
      { name: "กอดสุดท้าย", meta: "Innertears" },
      { name: "บุษบา", meta: "ปิ๋ม ชุติมา" },
      { name: "ลมฮัก", meta: "วี พนมภูไท" },
      { name: "ลืมได้จริงใช่ไหม", meta: "Num Kala" },
      { name: "แม่น้องออนิว", meta: "ปิ๋ม ชุติมา" },
    ],
  },
  {
    key: "branding",
    chip: "Branding",
    n: "05",
    title: "Branding & photoshoot",
    sub: "Royal Thai Air Force · Culture",
    layout: "masonry",
    items: [
      { name: "Royal Thai Air Force", meta: "RTAF", count: 3 },
      { name: "Culture — apparel", meta: "Culture", count: 6 },
      { name: "Culture — portraits", meta: "Culture", count: 4 },
      { name: "Culture — product", meta: "Culture", count: 5 },
    ],
  },
  {
    key: "events",
    chip: "Events",
    n: "06",
    title: "Event & activation",
    sub: "4 projects",
    layout: "events",
    items: [
      { name: "IRA Residences", meta: "Tatler Thailand", count: 6, url: "https://www.tatlerasia.com" },
      { name: "Gent Leaders of Tomorrow", meta: "Tatler Thailand", count: 6, url: "https://www.tatlerasia.com" },
      { name: "Jinro Feelfresh", meta: "Activation" },
      { name: "Enchanted", meta: "Activation" },
    ],
  },
];
