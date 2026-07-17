// Work-page portfolio. Each category renders one of: `videos`, `albums`,
// `gallery` (drop files in src/assets/work/<cat>/), or `cases` (brand projects
// that link to their /work/:slug detail pages).

import { caseStudies, type CaseStudy } from "./caseStudies";
import type { PictureData } from "@/components/Picture";

export type GalleryImage = { src: PictureData; ar: number };
export type VideoItem = { title: string; id: string; ar?: number };
/** A shipped, live digital product/site — links out to the real thing. */
export type SiteItem = {
  name: string;
  /** Latin display name uses Newsreader serif; Thai names set `th: true`. */
  th?: boolean;
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

const W = 21 / 9; // cinematic wide
const R = 9 / 16; // vertical reel

const reels: VideoItem[] = [
  "ou6CDAPuWMg", "z1fjfOqakRo", "gZCsL34i2yA", "_bK18EokLEA", "sez1rX09od0",
  "ohfWT1EsA9A", "EZ4Ledfaw38", "6QDdextE3CM", "4NxMIpbhVs8", "-NcOTtaLboI",
  "8JUMCj1i5xM", "w3bTBNLl8y0", "8FO-2vQqtPA",
].map((id) => ({ title: "Reel", id, ar: R }));

const musicVids: VideoItem[] = [
  { title: "สาวน้อยกลับบ้าน — กวาง จิรพรรณ", id: "mbbkROvJAJw" },
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
const artdirAr = [0.675, 0.675, 0.675, 0.675, 0.8, 0.8, 0.675, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.008];
const artDirection: GalleryImage[] = artdirSrcs.map((src, i) => ({ src, ar: artdirAr[i] ?? 1 }));

// Photography — real brand photoshoot gallery (masonry, natural aspect).
const photoMods = import.meta.glob("../assets/work/photography/*.jpg", { eager: true, import: "default", query: "?as=picture" });
const photography: GalleryImage[] = Object.keys(photoMods).sort().map((k) => ({ src: photoMods[k] as PictureData, ar: 1 }));

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
    name: "เขาใหญ่ คันทรี่คลับ",
    th: true,
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

// Curated case studies lead (the sales surface); digital experience follows;
// then the craft boards. Order is deterministic — no client-side shuffle (SSG-safe).
export const portfolio: PortCategory[] = [
  { key: "cases", chip: "Selected work", n: "01", title: "Selected work", sub: "Client brand cases", cases: caseStudies },
  { key: "digital", chip: "Digital experience", n: "02", title: "Digital experience", sub: "Live sites & applications", sites: digitalSites },
  { key: "video", chip: "Video & film", n: "03", title: "Video & Film", sub: "Films, commercials & content", videos: videoFilm, cols: 3 },
  { key: "social", chip: "Social", n: "04", title: "Social posts & creative ads", sub: "Album posts & creative ads", albums: socialAlbums, gallery: socialAds },
  { key: "reels", chip: "Reels", n: "05", title: "Reels & short video", sub: "Short-form video", videos: reels, cols: 4 },
  { key: "longform", chip: "Long-form", n: "06", title: "Entertainment & long-form", sub: "Series & documentary", videos: longformVids, cols: 3 },
  { key: "music", chip: "Music", n: "07", title: "Music producing & video", sub: "Music videos & production", videos: musicVids, base: 200 },
  { key: "artdir", chip: "Art direction", n: "08", title: "Art direction", sub: "Key visuals & poster design", gallery: artDirection },
  { key: "photo", chip: "Photography", n: "09", title: "Branding & photoshoot", sub: "Brand identity & shoots", gallery: photography },
];

// Flat pool of work thumbnails for the homepage random showcase — art direction
// + social only (no video/reels/photography). Shuffle + slice on the consumer side.
export const workThumbs: PictureData[] = [
  ...artDirection.map((g) => g.src),
  ...socialAds.map((g) => g.src),
  ...socialAlbums.flatMap((a) => a.images),
];
