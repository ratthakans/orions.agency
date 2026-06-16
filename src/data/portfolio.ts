// Work-page portfolio. Categories show either:
//  • `boards`  — full-width board images exported from the ORIONS deck, or
//  • `gallery` — real per-image galleries laid out justified (drop files in the
//                matching src/assets/work/<cat>/ folder; add an aspect ratio).

import video from "@/assets/work/video.jpg";
import social1 from "@/assets/work/social-1.jpg";
import social2 from "@/assets/work/social-2.jpg";
import social3 from "@/assets/work/social-3.jpg";
import social4 from "@/assets/work/social-4.jpg";
import reels1 from "@/assets/work/reels-1.jpg";
import reels2 from "@/assets/work/reels-2.jpg";
import reels3 from "@/assets/work/reels-3.jpg";
import longform from "@/assets/work/longform.jpg";
import music from "@/assets/work/music.jpg";
import photo1 from "@/assets/work/photo-1.jpg";
import photo2 from "@/assets/work/photo-2.jpg";
import events1 from "@/assets/work/events-1.jpg";
import events2 from "@/assets/work/events-2.jpg";
import events3 from "@/assets/work/events-3.jpg";

export type GalleryImage = { src: string; ar: number };

export type PortCategory = {
  key: string;
  chip: string;
  n: string;
  title: string;
  sub: string;
  boards?: string[];
  gallery?: GalleryImage[];
};

// Art direction — real key-visual gallery. Files auto-imported from the folder
// (sorted); add a new file + its aspect ratio (width / height) to extend.
const artdirMods = import.meta.glob("../assets/work/artdir/*.jpg", { eager: true, import: "default" });
const artdirSrcs = Object.keys(artdirMods).sort().map((k) => artdirMods[k] as string);
const artdirAr = [0.675, 0.675, 0.675, 0.675, 0.8, 0.8, 0.675, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.008];
const artDirection: GalleryImage[] = artdirSrcs.map((src, i) => ({ src, ar: artdirAr[i] ?? 1 }));

export const portfolio: PortCategory[] = [
  { key: "video", chip: "Video", n: "01", title: "Video", sub: "Social & commercial films", boards: [video] },
  { key: "social", chip: "Social", n: "02", title: "Social posts & creative ads", sub: "Campaigns & creative ads", boards: [social1, social2, social3, social4] },
  { key: "reels", chip: "Reels", n: "03", title: "Reels & short video", sub: "Short-form video", boards: [reels1, reels2, reels3] },
  { key: "longform", chip: "Long-form", n: "04", title: "Entertainment & long-form", sub: "Series & documentary", boards: [longform] },
  { key: "music", chip: "Music", n: "05", title: "Music producing & video", sub: "Music videos & production", boards: [music] },
  { key: "artdir", chip: "Art direction", n: "06", title: "Art direction", sub: "Key visuals & poster design", gallery: artDirection },
  { key: "photo", chip: "Photography", n: "07", title: "Branding & photoshoot", sub: "Brand identity & shoots", boards: [photo1, photo2] },
  { key: "events", chip: "Events", n: "08", title: "Event & activation", sub: "Events & activations", boards: [events1, events2, events3] },
];
