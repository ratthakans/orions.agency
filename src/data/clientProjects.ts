import siamCollectiveImg from "@/assets/projects/siam-collective.jpg";
import maisonNaraImg from "@/assets/projects/maison-nara.jpg";
import terraStudioImg from "@/assets/projects/terra-studio.jpg";
import kinBangkokImg from "@/assets/projects/kin-bangkok.jpg";
import northwindCapitalImg from "@/assets/projects/northwind-capital.jpg";
import echoFestivalImg from "@/assets/projects/echo-festival.jpg";

export interface ClientProject {
  slug: string;
  title: string;
  client: string;
  type: string;
  year: string;
  tagline: string;
  description: string;
  image: string;
  services: string[];
}

export const clientProjects: ClientProject[] = [
  {
    slug: "siam-collective",
    title: "Siam Collective",
    client: "Siam Collective",
    type: "Branding",
    year: "2025",
    tagline: "A new identity for a cultural lifestyle brand rooted in Bangkok.",
    description: "We repositioned Siam Collective from a generic lifestyle label into a culturally-driven brand with a clear narrative — blending Thai craft heritage with modern urban identity.",
    image: siamCollectiveImg,
    services: ["Brand Strategy", "Visual Identity", "Art Direction"],
  },
  {
    slug: "maison-nara",
    title: "Maison Nara",
    client: "Maison Nara",
    type: "Campaign",
    year: "2025",
    tagline: "A launch campaign that made a new hospitality brand feel inevitable.",
    description: "We developed the launch campaign for Maison Nara — a boutique hotel concept in Chiang Mai. From positioning to film, we built a world people wanted to step into.",
    image: maisonNaraImg,
    services: ["Campaign Direction", "Film Production", "Communication Design"],
  },
  {
    slug: "terra-studio",
    title: "Terra Studio",
    client: "Terra Studio",
    type: "Brand Film",
    year: "2024",
    tagline: "A documentary-style film that captured the soul of a design studio.",
    description: "Terra Studio needed more than a promo video. We created a short documentary that showed how they think, work, and create — turning their process into their strongest selling point.",
    image: terraStudioImg,
    services: ["Documentary Film", "Post-Production", "Content Strategy"],
  },
  {
    slug: "kin-bangkok",
    title: "KIN Bangkok",
    client: "KIN Bangkok",
    type: "Content System",
    year: "2024",
    tagline: "A content system that turned a restaurant into a cultural conversation.",
    description: "We built a complete content framework for KIN — from editorial themes to production cadence — that positioned them beyond food and into culture.",
    image: kinBangkokImg,
    services: ["Content Strategy", "Photo & Video Production", "Art Direction"],
  },
  {
    slug: "northwind-capital",
    title: "Northwind Capital",
    client: "Northwind Capital",
    type: "Branding",
    year: "2024",
    tagline: "Making a finance brand feel human without losing authority.",
    description: "Northwind Capital needed to stand out in a sea of blue-and-grey finance brands. We gave them a brand that felt approachable, modern, and trustworthy — without the corporate clichés.",
    image: northwindCapitalImg,
    services: ["Brand Positioning", "Visual Identity", "Communication Framework"],
  },
  {
    slug: "echo-festival",
    title: "Echo Festival",
    client: "Echo Festival",
    type: "Campaign",
    year: "2024",
    tagline: "A campaign that sold out a first-year festival in three weeks.",
    description: "Echo Festival had no brand equity and no history. We created an identity and launch campaign built on mystery and anticipation — and it worked.",
    image: echoFestivalImg,
    services: ["Brand Identity", "Campaign Direction", "Film & Photo Production"],
  },
];
