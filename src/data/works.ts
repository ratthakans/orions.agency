import workNorthwind from "@/assets/work-northwind.jpg";
import workAtlas from "@/assets/work-atlas.jpg";
import workKoha from "@/assets/work-koha.jpg";
import workLumen from "@/assets/work-lumen.jpg";
import workSera from "@/assets/work-sera.jpg";
import workMuse from "@/assets/work-muse.jpg";
import workOrbit from "@/assets/work-orbit.jpg";
import workField from "@/assets/work-field.jpg";
import workVela from "@/assets/work-vela.jpg";

export interface Work {
  slug: string;
  title: string;
  service: string;
  type: string;
  brief: { en: string; th: string };
  deliverables: string[];
  challenge: string;
  approach: string;
  result: string;
  image: string;
}

export const works: Work[] = [
  {
    slug: "northwind-electric",
    title: "Northwind Electric",
    service: "Film & Production",
    type: "Campaign Film",
    brief: { en: "A cinematic campaign film launching Northwind's entry into the Southeast Asian EV market.", th: "Campaign film ระดับภาพยนตร์สำหรับการเปิดตัว Northwind ในตลาด EV" },
    deliverables: ["Campaign Film", "Director's Cut", "Social Cutdowns", "Behind the Scenes"],
    challenge: "Northwind needed to launch in Southeast Asia — a market already crowded with established EV brands. They had no brand awareness and no emotional connection with the audience.",
    approach: "We created a cinematic campaign film that focused on the feeling of driving electric in Bangkok's streets — not the specs. The film positioned Northwind as a lifestyle brand, not just an EV company.",
    result: "2.3M organic views in the first week. Brand search volume increased 180% in Thailand within 3 months.",
    image: workNorthwind,
  },
  {
    slug: "atlas-property-group",
    title: "Atlas Property Group",
    service: "Film & Production",
    type: "Documentary",
    brief: { en: "A brand documentary capturing the vision behind Atlas's luxury developments.", th: "Brand documentary ถ่ายทอดวิสัยทัศน์เบื้องหลังโครงการ luxury ของ Atlas" },
    deliverables: ["Documentary Film", "Interview Series", "Sizzle Reel", "Photography"],
    challenge: "Atlas was perceived as just another luxury property developer. They needed to differentiate in an oversaturated premium real estate market.",
    approach: "We produced a documentary that told the founder's story — why these buildings exist and who they're built for. It shifted the conversation from square meters to meaning.",
    result: "Pre-sales for the featured development exceeded targets by 40%.",
    image: workAtlas,
  },
  {
    slug: "koha-culture-studio",
    title: "Koha Culture Studio",
    service: "Communication Design",
    type: "Brand Story",
    brief: { en: "A brand story video series exploring contemporary art and community.", th: "ซีรีส์วิดีโอเรื่องราวแบรนด์สำรวจศิลปะร่วมสมัยและชุมชน" },
    deliverables: ["Brand Video", "Artist Profiles", "Event Documentation", "Social Content"],
    challenge: "Koha was a hidden gem in Bangkok's art scene — incredible work but almost invisible to a broader audience.",
    approach: "We created a video series profiling the artists and their processes, making the studio accessible without dumbing it down.",
    result: "Social following grew 300% in 4 months. Three artist profiles went viral.",
    image: workKoha,
  },
  {
    slug: "lumen-health",
    title: "Lumen Health",
    service: "Communication Design",
    type: "Content System",
    brief: { en: "A comprehensive content system for a digital health platform.", th: "ระบบ content ครบวงจรสำหรับแพลตฟอร์มสุขภาพดิจิทัล" },
    deliverables: ["Content Strategy", "Editorial Calendar", "Video Series", "Blog System"],
    challenge: "Lumen had great technology but couldn't communicate its value in a way that resonated with everyday users.",
    approach: "We built a complete content system that translated complex health tech into human stories people actually cared about.",
    result: "User engagement increased 4x. Content now generates 60% of new signups organically.",
    image: workLumen,
  },
  {
    slug: "sera-hospitality",
    title: "Sera Hospitality",
    service: "Film & Production",
    type: "Campaign Film",
    brief: { en: "A campaign film capturing the essence of Sera's luxury hospitality.", th: "Campaign film ถ่ายทอดแก่นแท้ของ luxury hospitality ของ Sera" },
    deliverables: ["Hero Film", "Property Films", "Social Series", "Print Campaign"],
    challenge: "Sera's properties were stunning but their marketing felt generic — indistinguishable from any other luxury hotel brand.",
    approach: "We filmed a hero campaign that focused on the quiet, personal, human moments that make a stay memorable.",
    result: "Direct bookings increased 35%. Won recognition at two regional hospitality marketing awards.",
    image: workSera,
  },
  {
    slug: "muse-education",
    title: "Muse Education",
    service: "Communication Design",
    type: "Brand Story",
    brief: { en: "A brand story film positioning Muse as the future of creative education.", th: "Brand story film วาง positioning ให้ Muse เป็นอนาคตของ creative education" },
    deliverables: ["Brand Film", "Student Stories", "Campus Tour", "Recruitment Video"],
    challenge: "Muse was competing against established universities with bigger budgets and longer reputations.",
    approach: "Instead of competing on prestige, we told the stories of Muse students who were already doing remarkable work.",
    result: "Applications increased 55% year-over-year.",
    image: workMuse,
  },
  {
    slug: "orbit-fintech",
    title: "Orbit Fintech",
    service: "Brand & Communication Strategy",
    type: "Brand Strategy",
    brief: { en: "Complete brand strategy and repositioning for a fintech startup.", th: "Brand strategy และ repositioning ครบวงจรสำหรับ fintech startup" },
    deliverables: ["Positioning", "Narrative", "Communication Framework", "Content Direction"],
    challenge: "Orbit was just another fintech app. Users couldn't tell what made them different.",
    approach: "We repositioned Orbit from 'easy payments' to 'financial freedom for freelancers' — a specific audience with a specific need.",
    result: "35% increase in average deal size. User acquisition cost dropped 40%.",
    image: workOrbit,
  },
  {
    slug: "field-notes-coffee",
    title: "Field Notes Coffee",
    service: "Film & Production",
    type: "Documentary",
    brief: { en: "A documentary following the journey from farm to cup.", th: "สารคดีตามเส้นทางจากไร่ถึงแก้ว" },
    deliverables: ["Documentary", "Origin Series", "Barista Profiles", "Social Content"],
    challenge: "Field Notes had an incredible supply chain story but nobody knew about it.",
    approach: "We followed the coffee from mountain farms in northern Thailand to the cup in Bangkok. Raw, beautiful, honest filmmaking.",
    result: "800K+ views. Wholesale inquiries increased 200%.",
    image: workField,
  },
  {
    slug: "vela-fashion",
    title: "Vela Fashion",
    service: "Brand & Communication Strategy",
    type: "Brand Strategy",
    brief: { en: "A complete brand strategy for Vela's debut collection launch.", th: "Brand strategy ครบวงจรสำหรับการเปิดตัวคอลเลกชันแรกของ Vela" },
    deliverables: ["Positioning", "Campaign Direction", "Key Message", "Launch Strategy"],
    challenge: "Vela was launching with zero brand recognition in a saturated fashion market.",
    approach: "We built everything from scratch — positioning, narrative, campaign direction, and launch strategy centered on 'quiet confidence.'",
    result: "Debut collection sold out in 2 weeks. Featured in 5 major fashion publications.",
    image: workVela,
  },
];

export const serviceFilters = ["All", "Brand & Communication Strategy", "Communication Design", "Film & Production"];
