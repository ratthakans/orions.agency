import IndustryPageTemplate, { type IndustryPageData } from "@/components/IndustryPageTemplate";
import heroImg from "@/assets/tech-hero.jpg";

const data: IndustryPageData = {
  seo: {
    title: "Tech Creative Layer — Creative Agency for Tech Companies | ØRIONS",
    description: "A creative agency that helps tech companies clarify products, build narrative, and drive real adoption through creative systems.",
    path: "/package/tech",
  },
  hero: {
    image: heroImg,
    imageAlt: "Dark tech workspace with screens",
    label: "Tech Creative Layer",
    headline: "YOUR PRODUCT IS GREAT. YOUR ADOPTION ISN'T.",
    desc: "We help tech products become easier to understand, easier to use, and easier to choose.",
  },
  reality: {
    headline: "Great products don't grow. Because users don't get it.",
    stats: [
      { stat: "70%+", label: "Users leave before understanding the product" },
      { stat: "Low", label: "Conversion from awareness to adoption" },
      { stat: "High", label: "Churn from unclear value proposition" },
    ],
  },
  demandGap: {
    headline: "The problem isn't your product. It's the clarity around it.",
    items: [
      { num: "01", title: "Product Is Too Complex", desc: "Users don't understand it. They leave before they try." },
      { num: "02", title: "Messaging Is Unclear", desc: "No differentiation. Your product sounds like everyone else." },
      { num: "03", title: "Content Doesn't Convert", desc: "Looks good, but doesn't sell. Views without action." },
      { num: "04", title: "Growth Is Slow", desc: "Because users don't 'get it'. Adoption stalls at awareness." },
    ],
  },
  system: {
    headline: "We build adoption through creative.",
    desc: "ORIONS is a demand + adoption system powered by narrative and content. We identify real user pain, then build creative that makes them understand, trust, and adopt.",
    blocks: [
      { num: "01", title: "Insight & Problem Mapping", desc: "We identify real user pain and use cases. User perception audit, conversion bottleneck mapping, and clarity opportunity analysis.", output: "Clarity Audit Report" },
      { num: "02", title: "Narrative Design", desc: "We define what your product means and why it matters. Core value proposition, messaging hierarchy, and competitive differentiation.", output: "Narrative Strategy Deck" },
      { num: "03", title: "Content & Conversation", desc: "We create content that explains, demonstrates, and convinces. Hero explainers, use-case storytelling, and social-first campaigns.", output: "Full Content Suite" },
      { num: "04", title: "Search & Discovery", desc: "We make sure users find you when they need you. SEO strategy, discovery optimization, and community seeding.", output: "Adoption Engine" },
    ],
    engineLabel: "Your Product's Adoption Engine",
  },
  insight: [
    { label: "Insight", headline: "People don't adopt technology. They adopt clarity.", desc: "The best tech companies don't just build better products. They communicate better. Clarity is the competitive advantage most products miss." },
    { label: "What We Do", headline: "The creative layer between your product and your user.", desc: "We are not developers. We are not performance marketers. We are the layer that makes your product easier to understand, easier to explain, and easier to adopt." },
  ],
  segments: {
    headline: "Who we help you reach.",
    items: [
      { title: "Early Adopters", tag: "Tech-savvy", desc: "Willing to try new things. They need to understand value fast or they move on.", metric: "High intent" },
      { title: "Decision Makers", tag: "CTOs, VPs", desc: "Need clarity fast. They evaluate in minutes, not hours.", metric: "High value" },
      { title: "End Users", tag: "Volume driver", desc: "Need to understand in seconds. If it's not obvious, they won't use it.", metric: "Adoption critical" },
      { title: "Evaluators", tag: "Comparing", desc: "Comparing alternatives side by side. Clear messaging wins.", metric: "Conversion critical" },
      { title: "Champions", tag: "Internal advocates", desc: "The people inside companies who sell your product for you. They need clear stories to share.", metric: "Organic growth" },
      { title: "Late Majority", tag: "Need proof", desc: "Need evidence and simplicity. Case studies, results, and clear ROI.", metric: "Scale market" },
    ],
  },
  phases: [
    { num: "01", title: "Insight & Problem Mapping", subtitle: "Find the real gap before spending.", items: ["User perception audit", "Competitor messaging analysis", "Conversion bottleneck mapping", "Stakeholder interviews", "Clarity opportunity report"], deliverable: "Clarity Audit Report", deliverableDesc: "A clear picture of where users drop off, what confuses them, and what to fix first." },
    { num: "02", title: "Narrative Design", subtitle: "Define what your product means.", items: ["Core value proposition", "User story framework", "Messaging hierarchy", "Positioning statement", "Competitive differentiation"], deliverable: "Narrative Strategy Deck", deliverableDesc: "Your product story, messaging, and positioning — clearly defined and ready to deploy." },
    { num: "03", title: "Content & Conversation", subtitle: "Create content that explains and convinces.", items: ["Hero explainer content", "Use-case storytelling", "Social-first video series", "Landing page copy & structure", "Demo & walkthrough assets"], deliverable: "Full Content Suite", deliverableDesc: "Explainers, demos, and campaigns — ready to deploy across every channel." },
    { num: "04", title: "Search & Discovery", subtitle: "Make sure users find you.", items: ["SEO content strategy", "Search intent mapping", "Discovery channel optimization", "Community seeding", "Performance tracking"], deliverable: "Adoption Engine", deliverableDesc: "A system that drives continuous discovery — keeping your product visible when users need it." },
  ],
  phasesHeadline: "Four phases.\nOne adoption system.",
  impact: {
    headline: "Creative = Adoption Engine.",
    items: [
      { result: "Clarity", desc: "Users understand your product — what it does and why it matters." },
      { result: "Understanding", desc: "Content explains, demonstrates, and convinces. Views become action." },
      { result: "Adoption", desc: "Users try, onboard, and stay. Growth accelerates." },
      { result: "Revenue", desc: "Adoption compounds into revenue. Users become advocates." },
    ],
  },
  tiers: [
    { label: "CLARITY AUDIT", scope: "Phase 1", price: "60,000 – 100,000", detail: "Understand your product gaps — user perception, messaging, and conversion analysis", note: "For teams that want clarity before committing" },
    { label: "ADOPTION CAMPAIGN", scope: "Phase 1–3", price: "200,000 – 400,000", detail: "Narrative + content + campaign — everything needed to drive real adoption", note: "For products ready to grow", featured: true },
    { label: "ADOPTION SYSTEM", scope: "Ongoing", price: "100,000 – 180,000", detail: "Continuous improvement — messaging evolution, content updates, conversion optimization", note: "For products serious about long-term growth", isMonthly: true },
  ],
  closing: {
    headline: "If people don't understand your product, they will never use it.",
  },
};

const TechPackagePage = () => <IndustryPageTemplate data={data} />;
export default TechPackagePage;
