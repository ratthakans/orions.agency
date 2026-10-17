// Work-page portfolio. Each category renders one of: `videos`, `albums`,
// `gallery` (drop files in src/assets/work/<cat>/), or `cases` (brand projects
// that link to their /work/:slug detail pages).

import { caseStudies, type CaseStudy } from "./caseStudies";
import type { PictureData } from "@/components/Picture";

export type GalleryImage = { src: PictureData; ar: number };
export type VideoItem = {
  title: string;
  /** YouTube id — or, for a self-hosted clip, a unique key. */
  id: string;
  ar?: number;
  /** Self-hosted clip in public/ (played in place of YouTube) and its cover. */
  src?: string;
  poster?: string;
};
/** A shipped, live digital product/site — links out to the real thing. */
export type SiteItem = {
  name: string;
  /** Client names are displayed in English. */
  /** Public host, shown as a mono meta line (no protocol). */
  domain: string;
  url: string;
  /** "Website" · "Application" · "Website · App" — shown as a mono chip. */
  kind: string;
  /** Category label (mono, uppercase). */
  niche: string;
  /** One-line essence — VÆST-tight, editorial. */
  note: string;
};

/** An event the studio produced — photographed, not linked unless public. */
export type EventItem = {
  title: string;
  /** Format, shown as a mono chip ("Product launch", "Summit & expo"). */
  kind: string;
  image: PictureData;
  url?: string;
};

const W = 21 / 9; // cinematic wide
const R = 9 / 16; // vertical reel

const reels: VideoItem[] = [
  "ou6CDAPuWMg", "z1fjfOqakRo", "gZCsL34i2yA", "_bK18EokLEA", "sez1rX09od0",
  "ohfWT1EsA9A", "EZ4Ledfaw38", "6QDdextE3CM", "4NxMIpbhVs8", "-NcOTtaLboI",
  "8JUMCj1i5xM", "w3bTBNLl8y0", "8FO-2vQqtPA",
].map((id) => ({ title: "Reel", id, ar: R }));

// ZOLZA films — self-hosted (public/work/film, 1920×1080 H.264), so they play
// without YouTube chrome. Add a clip: drop <slug>.mp4 + <slug>.jpg and list it.
const zolzaFilms: VideoItem[] = [
  { slug: "beach", title: "ZOLZA — Beach" },
  { slug: "party", title: "ZOLZA — Party" },
  { slug: "bbq", title: "ZOLZA — BBQ" },
  { slug: "pineapple", title: "ZOLZA — Pineapple" },
  { slug: "football", title: "ZOLZA — Football night" },
].map(({ slug, title }): VideoItem => ({
  title,
  id: `zolza-${slug}`,
  src: `/work/film/zolza-${slug}.mp4`,
  poster: `/work/film/zolza-${slug}.jpg`,
}));

const musicVids: VideoItem[] = [
  { title: "สาวน้อยกลับบ้าน — กวาง จิรพรรณ (Cover)", id: "sCjPTr0CfXc" },
  { title: "พังในพริบตา — PANCAKE", id: "YQb_ueBfplM" },
  { title: "กลับไปก่อนได้ไหม — NUM KALA Feat. URBOYTJ", id: "p4JICbYbDow" },
  { title: "ทางที่ดีคือทางแบบไหน — PANCAKE", id: "ysrayxcXoF8" },
  { title: "วันครบรอบนับยังไง — PANCAKE", id: "GH-hH8PXQ5E" },
  { title: "เดือนดาว — นุ่นนิ่น ชาลิสสา", id: "2VNNdj4UjXY" },
  { title: "อกหักได้ไง — PANCAKE ft. เบลล์ นิภาดา", id: "ey-M7sCsz-o" },
  { title: "จม — NUM KALA", id: "EmitC7dokS0" },
  { title: "พลังวิเศษ — นุ๊ก ธนดล Ft. ป๊ายปาย โอริโอ้", id: "XMUshHa10xI" },
  { title: "เปิดใจปุ๊บ อกหักปั๊บ — กวาง จิรพรรณ", id: "WyDvMegEqBQ" },
  { title: "กอดสุดท้าย — Innertears", id: "LKFAtp_oxf0" },
  { title: "บุษบา — ปิ๋ม ชุติมา (Cover)", id: "YBXpSXAkej4" },
  { title: "ลมฮัก — วี พนมภูไท", id: "n2_rKXXzg8w" },
  { title: "ลืมได้จริงใช่ไหม — NUM KALA Feat. ZOM MARIE", id: "IOJV7hOB-9c" },
  { title: "แม่น้องออนิว — ปิ๋ม ชุติมา (Cover Live)", id: "WFEAPxB47qc" },
];

const longformVids: VideoItem[] = [
  "UC8ognh_S3s", "1XuM19cfaCs", "ASjm7TKqf-M", "aD13HQnrCks", "OJNCHwRFphE",
  "zbPCb5KxXlA", "Vi9vO40h63s", "5EVXZv1DhE8", "aDLssgzVQiQ", "lVzIbfqhvOo",
  "yhgXP3Hw_hg", "mkCZXrL7D8c", "6mxqnNnXDzc", "4ZKS5f5jxIY", "jERPFy2iE0U",
  "M6FrUJoYpDI",
].map((id) => ({ title: "Long-form", id }));

export type PortCategory = {
  key: string;
  chip: string;
  n: string;
  title: string;
  sub: string;
  /** Brand-project cards that link to their /work/:slug detail pages. */
  cases?: CaseStudy[];
  /** Live sites & apps — link out to the shipped product. */
  sites?: SiteItem[];
  /** Events produced — photo cards, opened in the lightbox. */
  events?: EventItem[];
  gallery?: GalleryImage[];
  videos?: VideoItem[];
  /** Album posts — ordered images + optional layout (no shuffle). */
  albums?: { images: PictureData[]; layout?: "feature" | "row" }[];
  /** Fixed-column grid for videos (e.g. 6) instead of justified rows. */
  cols?: number;
  /** Justified row-height base (px) — bigger = fewer, larger tiles per row. */
  base?: number;
};

// Social album posts — one folder per album; files renamed 01.jpg.. in order.
const socialMods = import.meta.glob("../assets/work/social/*/*.jpg", { eager: true, import: "default", query: "?as=picture" });
const socialBy: Record<string, PictureData[]> = {};
for (const k of Object.keys(socialMods).sort()) {
  const folder = k.split("/social/")[1].split("/")[0];
  (socialBy[folder] ||= []).push(socialMods[k] as PictureData);
}
const SOCIAL: { slug: string; layout?: "feature" | "row" }[] = [
  { slug: "plot-twist" },
  { slug: "horror" },
  { slug: "romance", layout: "feature" },
  { slug: "ons" },
  { slug: "chivarak", layout: "feature" },
  { slug: "analog" },
  { slug: "music-fest" },
  { slug: "kaen-folk" },
  { slug: "recommend", layout: "row" },
];
const socialAlbums = SOCIAL.map((s) => ({ images: socialBy[s.slug], layout: s.layout })).filter((a) => a.images);

// Single creative-ad posts (one image each) — flat folder, shown as a masonry
// wall under the social albums. Drop more *.jpg here to extend.
const socialAdsMods = import.meta.glob("../assets/work/socialads/*.jpg", { eager: true, import: "default", query: "?as=picture" });
const socialAds: GalleryImage[] = Object.keys(socialAdsMods).sort().map((k) => ({ src: socialAdsMods[k] as PictureData, ar: 1 }));

const videoFilm: VideoItem[] = [
  { title: "Analog Craft", id: "ogVp48uPnGw", ar: W },
  { title: "Bangpakong Riverside Country Club", id: "yACp1DuNS2M" },
  { title: "Code Mania", id: "tIphJHcWUNI" },
  { title: "RWS", id: "vjuXICAVBSU", ar: W },
  { title: "International Women's Day", id: "eAmZwUalppo" },
  { title: "Khao Yai Championship 2024", id: "iG9aR2mycDc" },
  { title: "Khao Yai Country Club — Friend's Cup", id: "d7U4H-TRaKQ" },
  { title: "Coffee Meets Bagel", id: "bpbwTIewymk", ar: W },
  { title: "QA Meetup", id: "2wbXppemA1A", ar: W },
  { title: "Thai Milk Crisis", id: "4cpR13MpFKQ" },
  { title: "Jumpbox", id: "OpuOhV6GiZQ" },
  { title: "Coffee Meets Bagel", id: "8OpQsoFi0Xg", ar: W },
  { title: "Playground", id: "ZwlrikoRG4Q" },
  { title: "Selected film", id: "RQSxdTqv3Bk" },
  { title: "ORIONS film", id: "u4r7Szy3uxI" },
  { title: "ORIONS film", id: "_aEZ3MWhjV4" },
  { title: "ORIONS film", id: "oCDAv3Lx1n8" },
];

// Art direction — real key-visual gallery. Files auto-imported from the folder
// (sorted); add a new file + its aspect ratio (width / height) to extend.
const artdirMods = import.meta.glob("../assets/work/artdir/*.jpg", { eager: true, import: "default", query: "?as=picture" });
const artdirSrcs = Object.keys(artdirMods).sort().map((k) => artdirMods[k] as PictureData);
// artdir-00a/00b are the ACE! posters (1024×1536), sorted ahead of the rest.
const artdirAr = [0.667, 0.667, 0.675, 0.675, 0.675, 0.675, 0.8, 0.8, 0.675, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.008];
const artDirection: GalleryImage[] = artdirSrcs.map((src, i) => ({ src, ar: artdirAr[i] ?? 1 }));

// Photography — real brand photoshoot gallery (masonry, natural aspect).
const photoMods = import.meta.glob("../assets/work/photography/*.jpg", { eager: true, import: "default", query: "?as=picture" });
const photography: GalleryImage[] = Object.keys(photoMods).sort().map((k) => ({ src: photoMods[k] as PictureData, ar: 1 }));

// Events — one photograph per event, in the order a client would read them:
// the largest stages first.
const eventMods = import.meta.glob("../assets/work/event/*.jpg", { eager: true, import: "default", query: "?as=picture" });
const eventImage = (slug: string) => eventMods[`../assets/work/event/${slug}.jpg`] as PictureData;
const events: EventItem[] = [
  { title: "SETA Asia", kind: "Summit & expo", image: eventImage("seta-asia"), url: "https://setaasia.com" },
  { title: "Enchanted Fest", kind: "Large-scale concert", image: eventImage("enchanted-fest") },
  { title: "White Walker by Johnnie Walker", kind: "Product launch", image: eventImage("white-walker") },
  { title: "ELLE MEN × Federbräu", kind: "Brand activation", image: eventImage("elle-men-federbrau") },
  { title: "IKEA Staff Outing", kind: "Large-scale event", image: eventImage("ikea-staff-outing") },
  { title: "Eden Color 8th Celebration", kind: "Anniversary gala", image: eventImage("eden-color-8th") },
  { title: "Homerun Homeroom", kind: "Concert · motion graphics & LED", image: eventImage("homerun-homeroom") },
  { title: "Tatler House Dialogues × IRA Residences", kind: "Exclusive talk", image: eventImage("tatler-ira") },
];

// Digital experience — shipped, live sites & applications. Text-forward cards
// that link out to the real thing (no placeholder screenshots).
const digitalSites: SiteItem[] = [
  {
    name: "Routte",
    domain: "routte.to",
    url: "https://routte.to",
    kind: "Application",
    niche: "Product",
    note: "AI trip planner — เปลี่ยนอารมณ์และเวลาที่มี ให้เป็นวันหนึ่งที่เล่าเป็นเรื่อง.",
  },
  {
    name: "HONG MOVE",
    domain: "hongmove.co.th",
    url: "https://www.hongmove.co.th",
    kind: "Website · App",
    niche: "Airport Mobility",
    note: "แท็กซี่ VIP EV จากสนามบินสู่ปลายทาง — จาก mobility สู่ mixed-use.",
  },
  {
    name: "SETA Asia",
    domain: "setaasia.com",
    url: "https://setaasia.com",
    kind: "Website",
    niche: "Energy Summit",
    note: "เวทีพลังงานยั่งยืนของไทยและเอเชีย — ผู้กำหนดนโยบาย อุตสาหกรรม และนวัตกรรมในที่เดียว.",
  },
  {
    name: "ACE!",
    domain: "acenetwork.now",
    url: "https://www.acenetwork.now",
    kind: "Website",
    niche: "Film Community",
    note: "คนหลังกล้องมีเรื่องให้เล่า — ข่าววงการ คอร์ส ACE! Trains และ meetup ของคนทำหนัง.",
  },
  {
    name: "ZOLZA",
    domain: "zolzadrink.com",
    url: "https://www.zolzadrink.com",
    kind: "Website",
    niche: "Beverage",
    note: "Sparkling cider vinegar — เปรี้ยว ซ่า ดื่มง่าย ในแบบที่ SET ชีวิตให้ FRESH.",
  },
  {
    name: "Siam Elite Consulting",
    domain: "siamelite.consulting",
    url: "https://www.siamelite.consulting",
    kind: "Website",
    niche: "Consulting",
    note: "ที่ปรึกษาวีซ่าและอสังหาฯ ครบวงจรสำหรับชาวต่างชาติในเชียงใหม่.",
  },
  {
    name: "LUMA Academy",
    domain: "luma-academy-kappa.vercel.app",
    url: "https://luma-academy-kappa.vercel.app",
    kind: "Website",
    niche: "EdTech",
    note: "สถาบันเรียนเทรด Forex — หลักสูตรไล่ระดับ จากศูนย์สู่มืออาชีพ.",
  },
  {
    name: "B-Healthy",
    domain: "b-healthy-ten.vercel.app",
    url: "https://b-healthy-ten.vercel.app",
    kind: "Website",
    niche: "Corporate Wellness",
    note: "โปรแกรมสุขภาพองค์กร — ดูแลพนักงานอย่างเป็นการลงทุนระยะยาว.",
  },
  {
    name: "Khao Yai Country Club",
    domain: "brc-kycgolf.com",
    url: "https://brc-kycgolf.com",
    kind: "Website",
    niche: "Leisure Golf",
    note: "สนามกอล์ฟไลฟ์สไตล์ — ปรับภาพจำสู่ leisure golf โดยไม่ทิ้งของเดิม.",
  },
  {
    name: "EFFICIENCY",
    domain: "efficiency.co.th",
    url: "https://www.efficiency.co.th",
    kind: "Website",
    niche: "Engineering",
    note: "สตูดิโอวิศวกรรมโมบายล์ — แอป · ระบบ POS · ซอฟต์แวร์ฝังตัว.",
  },
];

// Eight boards. A long craft taxonomy reads like a production house menu, so
// formats stay merged unless a client would look for them on their own:
// outcomes lead (cases, live products), then the craft that produced them.
//
// Film & Motion is brand film and long-form in one justified wall, with the
// ZOLZA films spread through the brand films rather than stacked together; a
// single `base` keeps widths strictly proportional to aspect, so every row
// lands the same height. Music videos and vertical reels each get a board.
//
// Order is deterministic — no client-side shuffle (SSG-safe).
/** One `extra` after every `every` items of `base`, until `extra` runs out. */
const spread = (base: VideoItem[], extra: VideoItem[], every: number) =>
  base.flatMap((v, i) => {
    const next = extra[Math.floor(i / every)];
    return (i + 1) % every === 0 && next ? [v, next] : [v];
  });
const filmAndMotion: VideoItem[] = [...spread(videoFilm, zolzaFilms, 3), ...longformVids];

export const portfolio: PortCategory[] = [
  { key: "cases", chip: "Selected work", n: "01", title: "Selected work", sub: "Client brand cases", cases: caseStudies },
  { key: "digital", chip: "Digital experience", n: "02", title: "Digital experience", sub: "Live sites & applications", sites: digitalSites },
  { key: "event", chip: "Event", n: "03", title: "Event", sub: "Summits · launches · concerts · galas", events },
  { key: "film", chip: "Film & motion", n: "04", title: "Film & Motion", sub: "Brand film · long-form", videos: filmAndMotion, base: 240 },
  { key: "music", chip: "Music video", n: "05", title: "Music video", sub: "Artists · covers · live", videos: musicVids, base: 240 },
  { key: "reels", chip: "Reels", n: "06", title: "Reels", sub: "Short-form · vertical", videos: reels, cols: 6 },
  { key: "social", chip: "Social", n: "07", title: "Social posts & creative ads", sub: "Album posts & creative ads", albums: socialAlbums, gallery: socialAds },
  { key: "stills", chip: "Art direction & photography", n: "08", title: "Art direction & Photography", sub: "Key visuals · brand identity · shoots", gallery: [...artDirection, ...photography] },
];
