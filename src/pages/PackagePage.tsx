import IndustryPageTemplate, { type IndustryPageData } from "@/components/IndustryPageTemplate";
import heroImg from "@/assets/hospitality-hero.jpg";
import detailImg from "@/assets/hospitality-detail.jpg";
import lobbyImg from "@/assets/hospitality-lobby.jpg";
import aerialImg from "@/assets/hospitality-aerial.jpg";

const data: IndustryPageData = {
  seo: {
    title: "Hospitality Creative Layer — Creative Agency for Hotels | ØRIONS",
    description: "A creative layer that helps hotels increase demand and revenue — through narrative, campaigns, and cinematic content that drives real bookings.",
    path: "/package/hospitality",
  },
  hero: {
    image: heroImg,
    imageAlt: "Luxury resort infinity pool at golden hour",
    label: "Hospitality Creative Layer",
    headline: "YOUR HOTEL IS GREAT. YOUR DEMAND ISN'T.",
    desc: "Hotels don't lack rooms — they lack a new reason for people to choose them. We build that reason through creative that drives real bookings.",
  },
  reality: {
    headline: "Revenue plateaus. OTA dependency. Price wars.",
    stats: [
      { stat: "40–65%", label: "Average weekday occupancy" },
      { stat: "High", label: "OTA & promotion dependency" },
      { stat: "60%+", label: "Revenue from existing guests" },
    ],
  },
  breakImage: { src: detailImg, alt: "Luxury hotel interior detail" },
  demandGap: {
    headline: "The problem isn't your hotel. It's the demand around it.",
    items: [
      { num: "01", title: "Empty Weekdays", desc: "30–50% revenue lost every week. Occupancy drops to 40–65% without a compelling reason to visit outside peak times." },
      { num: "02", title: "Price Wars on OTAs", desc: "ADR keeps falling. When there's no narrative that makes people choose you first, the only lever left is price." },
      { num: "03", title: "Invisible Brand", desc: "Guests choose from price — not feeling. Without a clear narrative, your hotel is just another option in a sea of OTA listings." },
      { num: "04", title: "Content Without Desire", desc: "You have content. But it doesn't create desire. People see it and scroll — they don't feel the urge to book." },
    ],
  },
  system: {
    headline: "We don't guess what works. We listen, then build.",
    desc: "Every campaign starts with real data — what travelers are saying, searching, and sharing. Then we turn those insights into creative that moves them to book.",
    blocks: [
      { num: "01", title: "Social Listening & Insight", desc: "We analyze what travelers actually talk about — desires, frustrations, and emerging trends. This gives us topics with real conversation potential.", output: "Insight report with campaign-ready topics" },
      { num: "02", title: "Narrative & Experience Design", desc: "We define what your hotel 'is' — workcation escape, slow living retreat, wellness hideaway. A clear narrative that makes people choose you first.", output: "Narrative direction + experience framework" },
      { num: "03", title: "Conversation Design", desc: "We design how conversations start — content sequences, creator seeding, campaign storytelling. Campaigns that generate talk, not just views.", output: "Launch strategy + conversation playbook" },
      { num: "04", title: "Search & Discovery Layer", desc: "When people are interested, they search. We make sure they find you — through SEO, TikTok search, Google, and content that ranks.", output: "Discovery strategy across platforms" },
    ],
    engineLabel: "Your Hotel's Demand Engine",
  },
  insight: [
    { label: "Insight", headline: "People don't book rooms. They book how it feels.", desc: "Guests buy feelings, lifestyle, and moments they can share. The hotels that win are the ones that tell the experience — not just show the room." },
    { label: "What We Do", headline: "The creative layer your marketing team is missing.", desc: "Your team runs ads, manages OTAs, handles CRM. We add the layer that makes all of it hit harder — sharper positioning, memorable narratives, campaigns that stand out." },
  ],
  segments: {
    headline: "Segments that spend 1.3–2x more than average guests.",
    items: [
      { title: "Workcation / Remote Workers", tag: "Age 25–40", desc: "Flexible workers looking for a place to live and work. They stay longer, spend consistently, and value experience over room size.", metric: "Long stays" },
      { title: "Wellness / Reset", tag: "All ages", desc: "People seeking a mental or physical reset. They pay premium for meaningful escapes — not just rooms.", metric: "High margin" },
      { title: "Couples / Occasion", tag: "High spenders", desc: "Honeymoon, anniversary, special moments. They want experiences and shareable memories — not just a bed.", metric: "High value booking" },
      { title: "Experience Travelers", tag: "Story-driven", desc: "They choose from story, not price. These travelers seek properties with a clear narrative and distinct identity.", metric: "1.5x avg spend" },
      { title: "Corporate Retreats", tag: "B2B segment", desc: "Team offsites, leadership retreats, strategy sessions. They need a venue that inspires and runs smooth.", metric: "High group revenue" },
      { title: "Social & Content Creators", tag: "High UGC", desc: "They create content about experiences. One stay can generate organic reach worth more than paid campaigns.", metric: "Free reach" },
    ],
  },
  secondBreakImage: { src: aerialImg, alt: "Aerial view of tropical resort" },
  phases: [
    { num: "01", title: "Demand & Positioning Audit", subtitle: "Understand the demand gap before you spend.", items: ["Current audience & occupancy analysis", "Content & channel performance review", "Demand gap mapping", "New segment identification", "Positioning opportunity report"], deliverable: "Demand Audit Report", deliverableDesc: "A clear picture of where demand is lost, which segments to target, and how to position your property differently." },
    { num: "02", title: "Demand Strategy", subtitle: "Define the direction before you create.", items: ["Target segment definition", "Key message development", "Campaign architecture", "Channel-to-audience mapping", "Content framework"], deliverable: "Demand Strategy Deck", deliverableDesc: "Your target, message, and campaign direction — clearly defined and ready to execute." },
    { num: "03", title: "Signature Campaign & Hero Film", subtitle: "Turn strategy into something people feel.", items: ["Hero brand film (60–90s)", "Campaign photography", "Social-first video series", "Paid media creative", "On-property content capture"], deliverable: "Full Campaign Suite", deliverableDesc: "Hero film, photography, and creative assets — ready to deploy across every channel." },
    { num: "04", title: "Campaign Continuity System", subtitle: "Keep demand alive after launch.", items: ["Hero content broken into sub-assets", "Brand direction maintenance", "Seasonal content drops", "Performance tracking & optimization", "Seasonal campaign refreshes"], deliverable: "Scalable Demand Engine", deliverableDesc: "A system that keeps demand from dropping — with ongoing content plans and creative direction." },
  ],
  phasesHeadline: "Four phases.\nOne clear direction.",
  impact: {
    headline: "Creative is your demand engine.",
    items: [
      { result: "Narrative", desc: "People understand what makes your hotel different — and why it matters." },
      { result: "Desire", desc: "They feel something. They save, share, and start dreaming about staying." },
      { result: "Discovery", desc: "When they search, they find you — on Google, TikTok, and everywhere that matters." },
      { result: "Revenue", desc: "Desire turns into bookings. Bookings compound into growth." },
    ],
  },
  tiers: [
    { label: "DEMAND AUDIT", scope: "Phase 1", price: "60,000 – 90,000", detail: "Demand gap analysis, new segment identification, positioning direction", note: "For hotels that want clarity before committing" },
    { label: "DEMAND CAMPAIGN", scope: "Phase 1–3", price: "250,000 – 400,000", detail: "Full strategy + campaign + hero film + content set", note: "For hotels ready to launch a new chapter", featured: true },
    { label: "DEMAND GROWTH SYSTEM", scope: "All Four Phases", price: "600,000 – 900,000+", detail: "Complete system — audit, campaign, and 3 months of ongoing support", note: "For hotels serious about long-term growth" },
  ],
  retainer: {
    title: "Campaign Continuity",
    price: "120,000 – 150,000",
    desc: "After 4–8 weeks, campaign momentum fades. The retainer keeps your creative direction alive — ongoing hero content, campaign-to-content breakdowns, and seasonal refreshes that maintain demand.",
    note: "We don't manage ads, run OTAs, or replace your team — we make the assets you invested in keep working.",
  },
  closing: {
    image: lobbyImg,
    headline: "Give people a reason to book your hotel.",
  },
};

const PackagePage = () => <IndustryPageTemplate data={data} />;
export default PackagePage;
