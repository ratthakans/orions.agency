import IndustryPageTemplate, { type IndustryPageData } from "@/components/IndustryPageTemplate";
import heroImg from "@/assets/golf-hero.jpg";
import detailImg from "@/assets/golf-detail.jpg";
import lifestyleImg from "@/assets/golf-lifestyle.jpg";
import clubhouseImg from "@/assets/golf-clubhouse.jpg";

const data: IndustryPageData = {
  seo: {
    title: "Golf Creative Layer — Creative Agency for Golf Clubs | ØRIONS",
    description: "A creative layer that helps golf clubs unlock new demand — from positioning and campaigns to cinematic content that drives real revenue.",
    path: "/package/golf",
  },
  hero: {
    image: heroImg,
    imageAlt: "Luxury golf course aerial view at golden hour",
    label: "Golf Creative Layer",
    headline: "YOUR COURSE IS GREAT. YOUR DEMAND ISN'T.",
    desc: "Most golf clubs don't lack quality — they lack a reason compelling enough for new players to choose them. We build that reason through creative.",
  },
  reality: {
    headline: "Revenue plateaus. Same promotions. No new players.",
    stats: [
      { stat: "60–70%", label: "Revenue from existing members" },
      { stat: "40–60%", label: "Average weekday utilization" },
      { stat: "Rising", label: "Average golfer age — year over year" },
    ],
  },
  breakImage: { src: detailImg, alt: "Golf ball on pristine green" },
  demandGap: {
    headline: "The problem isn't your course. It's the demand around it.",
    items: [
      { num: "01", title: "Empty Weekdays", desc: "30–50% utilization means significant revenue left on the table — every single week." },
      { num: "02", title: "Stagnant Member Base", desc: "60–70% of revenue from the same members. Growth is capped when new players can't find a reason to start." },
      { num: "03", title: "Outdated Brand Perception", desc: "The next generation sees golf as lifestyle and identity. If your brand still feels traditional, they go somewhere else." },
      { num: "04", title: "Marketing Without Direction", desc: "You post content, run promotions. But without a narrative, nothing stands out — and nobody remembers you." },
    ],
  },
  system: {
    headline: "We don't guess what works. We listen, then build.",
    desc: "Every campaign starts with real data — what people are saying, searching, and sharing. Then we turn those insights into creative that moves them.",
    blocks: [
      { num: "01", title: "Social Listening & Insight", desc: "We analyze what golfers actually talk about — desires, frustrations, and emerging trends. This gives us topics with real conversation potential.", output: "Insight report with campaign-ready topics" },
      { num: "02", title: "Narrative & Campaign Design", desc: "We craft stories and campaigns people want to share. Not just content — narratives that shift perception and create desire.", output: "Campaign concept + narrative direction" },
      { num: "03", title: "Conversation Design", desc: "We design how conversations start — content drop sequences, influencer seeding, launch timing. Campaigns that generate talk, not just views.", output: "Launch strategy + conversation playbook" },
      { num: "04", title: "Search & Discovery Layer", desc: "When people are interested, they search. We make sure they find you — through keyword strategy, SEO, TikTok search, and content support.", output: "Discovery strategy across platforms" },
    ],
    engineLabel: "Your Brand's Demand Engine",
  },
  insight: [
    { label: "Insight", headline: "Golf is no longer just a sport. It's a lifestyle economy.", desc: "Networking, identity, weekend escape — new players see golf as an experience, not a scorecard. The clubs that win are the ones that sell the feeling." },
    { label: "What We Do", headline: "The creative layer your marketing team is missing.", desc: "Your team runs ads, manages promotions, handles social. We add the layer that makes all of it hit harder — sharper positioning, memorable narratives, campaigns that stand out." },
  ],
  segments: {
    headline: "Segments that spend 1.5–2x more than average golfers.",
    items: [
      { title: "Young Professionals", tag: "Age 28–40", desc: "City-based, seeking weekend escape. They play for relaxation and social connection — not competition.", metric: "1.5x avg spend" },
      { title: "Lifestyle Golfers", tag: "All ages", desc: "Golf is identity. They care about aesthetics, share experiences, and choose courses that look and feel premium.", metric: "High UGC value" },
      { title: "Golf Travelers", tag: "High spenders", desc: "They travel for golf. They want destinations with a story, curated packages, and memorable experiences.", metric: "2x avg spend" },
      { title: "Corporate Groups", tag: "B2B segment", desc: "Team outings, client entertainment, executive retreats. They need a venue that impresses and runs smooth.", metric: "High group revenue" },
      { title: "Women Golfers", tag: "Growing fast", desc: "One of the fastest-growing segments globally. They want inclusive, welcoming environments — not intimidating country clubs.", metric: "Underserved market" },
      { title: "Family & Next-Gen", tag: "Long-term value", desc: "Parents introducing kids to golf. Kid-friendly programs, family packages, and a relaxed atmosphere.", metric: "Lifetime member value" },
    ],
  },
  secondBreakImage: { src: lifestyleImg, alt: "Golfer walking on fairway at sunset" },
  phases: [
    { num: "01", title: "Demand & Positioning Audit", subtitle: "Understand the gap before you spend.", items: ["Current audience & utilization analysis", "Content & channel performance review", "Demand gap mapping", "New segment identification", "Positioning opportunity report"], deliverable: "Demand Audit Report", deliverableDesc: "A clear picture of where demand is lost, which segments to target, and how to position differently." },
    { num: "02", title: "Demand Strategy", subtitle: "Define the direction before you create.", items: ["Target segment definition", "Key message development", "Campaign architecture", "Channel-to-audience mapping", "Content framework"], deliverable: "Demand Strategy Deck", deliverableDesc: "Your target, message, and campaign direction — clearly defined and ready to execute." },
    { num: "03", title: "Signature Campaign & Hero Film", subtitle: "Turn strategy into something people feel.", items: ["Hero brand film (60–90s)", "Campaign photography", "Social-first video series", "Paid media creative", "On-property content capture"], deliverable: "Full Campaign Suite", deliverableDesc: "Hero film, photography, and creative assets — ready to deploy across every channel." },
    { num: "04", title: "Campaign Continuity", subtitle: "Keep demand alive after launch.", items: ["Hero content broken into sub-assets", "Brand direction maintenance", "Moment-based content drops", "Performance tracking & optimization", "Seasonal campaign refreshes"], deliverable: "Scalable Demand Engine", deliverableDesc: "A system that keeps demand from dropping — with ongoing content plans and creative direction." },
  ],
  phasesHeadline: "Four phases.\nOne clear direction.",
  impact: {
    headline: "Creative is your demand engine.",
    items: [
      { result: "Awareness", desc: "People discover your course — and why it's different." },
      { result: "Desire", desc: "They feel something. They save, share, and pay attention." },
      { result: "Booking", desc: "Desire turns into action. They book a round." },
      { result: "Revenue", desc: "One visit becomes many. Revenue compounds." },
    ],
  },
  tiers: [
    { label: "DEMAND AUDIT", scope: "Phase 1", price: "50,000 – 80,000", detail: "Demand gap analysis, new segment identification, positioning direction", note: "For clubs that want clarity before committing" },
    { label: "SIGNATURE CAMPAIGN", scope: "Phase 1–3", price: "200,000 – 350,000", detail: "Full strategy + campaign + hero film + content set", note: "For clubs ready to launch a new chapter", featured: true },
    { label: "DEMAND GROWTH SYSTEM", scope: "All Four Phases", price: "500,000 – 800,000+", detail: "Complete system — audit, campaign, and 3 months of ongoing support", note: "For clubs serious about long-term growth" },
  ],
  retainer: {
    title: "Campaign Continuity",
    price: "80,000 – 120,000",
    desc: "After 4–8 weeks, campaign momentum fades. The retainer keeps your creative direction alive — ongoing hero content, campaign-to-content breakdowns, and seasonal refreshes.",
    note: "We don't manage ads, run admin, or replace your team — we make the assets you invested in keep working.",
  },
  closing: {
    image: clubhouseImg,
    headline: "Give people a reason to play at your course.",
  },
};

const GolfPackagePage = () => <IndustryPageTemplate data={data} />;
export default GolfPackagePage;
