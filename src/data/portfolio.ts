// Work-page portfolio — one "board" image per deck page, grouped by category.
// Boards are exported from the ORIONS deck (label strip cropped off).

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
import artdir1 from "@/assets/work/artdir-1.jpg";
import artdir2 from "@/assets/work/artdir-2.jpg";
import photo1 from "@/assets/work/photo-1.jpg";
import photo2 from "@/assets/work/photo-2.jpg";
import events1 from "@/assets/work/events-1.jpg";
import events2 from "@/assets/work/events-2.jpg";
import events3 from "@/assets/work/events-3.jpg";

export type PortCategory = {
  key: string;
  chip: string;
  n: string;
  title: string;
  sub: string;
  boards: string[];
};

export const portfolio: PortCategory[] = [
  { key: "video", chip: "Video", n: "01", title: "Video", sub: "Social & commercial films", boards: [video] },
  { key: "social", chip: "Social", n: "02", title: "Social posts & creative ads", sub: "Campaigns & creative ads", boards: [social1, social2, social3, social4] },
  { key: "reels", chip: "Reels", n: "03", title: "Reels & short video", sub: "Short-form video", boards: [reels1, reels2, reels3] },
  { key: "longform", chip: "Long-form", n: "04", title: "Entertainment & long-form", sub: "Series & documentary", boards: [longform] },
  { key: "music", chip: "Music", n: "05", title: "Music producing & video", sub: "Music videos & production", boards: [music] },
  { key: "artdir", chip: "Art direction", n: "06", title: "Graphic design & art direction", sub: "Key visuals & posters", boards: [artdir1, artdir2] },
  { key: "photo", chip: "Photography", n: "07", title: "Branding & photoshoot", sub: "Brand identity & shoots", boards: [photo1, photo2] },
  { key: "events", chip: "Events", n: "08", title: "Event & activation", sub: "Events & activations", boards: [events1, events2, events3] },
];
