const siamCollectiveImg = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1280&h=800&fit=crop";
const maisonNaraImg = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1280&h=800&fit=crop";
const terraStudioImg = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1280&h=800&fit=crop";
const kinBangkokImg = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1280&h=800&fit=crop";
const northwindCapitalImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=800&fit=crop";
const echoFestivalImg = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1280&h=800&fit=crop";

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
