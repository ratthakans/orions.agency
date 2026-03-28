import IndustryPageTemplate, { IndustryPageData } from "@/components/IndustryPageTemplate";

const hospitalityData: IndustryPageData = {
  seo: {
    title: "Hospitality Demand System — ØRIONS",
    description: "We don't help hotels sell rooms. We create new reasons people want to come. Demand discovery, revenue design, and ongoing demand engine for hospitality brands.",
    path: "/package/hospitality",
  },
  hero: {
    image: "",
    imageAlt: "Hospitality demand system",
    label: "Feature Package · Hospitality",
    headline: "HOSPITALITY DEMAND SYSTEM.",
    desc: "We don't help hotels sell rooms. We create new reasons people want to come.",
  },
  reality: {
    headline: "Most hotels are stuck in the same cycle.",
    stats: [
      { stat: "15–25%", label: "Commission lost to OTAs on every booking" },
      { stat: "↑ CPC", label: "Paid ad cost per click increases every year" },
      { stat: "↓ Value", label: "Discounts erode brand value and margin" },
    ],
  },
  demandGap: {
    headline: "You're not controlling demand — you're buying it.",
    items: [
      {
        num: "01",
        title: "OTA Dependency",
        desc: "Most of your bookings come through third-party platforms. You're renting demand instead of owning it.",
      },
      {
        num: "02",
        title: "Price Competition",
        desc: "When the only differentiator is price, everyone loses. You need a reason people choose you regardless of rate.",
      },
      {
        num: "03",
        title: "Content Without Direction",
        desc: "Room tours and amenity lists don't create desire. People book because of stories, not specs.",
      },
    ],
  },
  system: {
    headline: "The ØRIONS Equation — Hospitality",
    desc: "Every piece of work we create is designed through 3 forces — the same framework we use across all industries, adapted for hospitality.",
    blocks: [
      {
        num: "01",
        title: "Nudge",
        desc: "Create small moments of curiosity — \"what's this place about?\" Not selling rooms, but sparking interest. Example: IG reel showing a single resort moment, not a room tour.",
        output: "Stop → Attention",
      },
      {
        num: "02",
        title: "Hook",
        desc: "Once attention is captured, keep them exploring. Landing pages that tell \"why people come here\" not room specs. A moment strong enough to make them click, read, watch to the end.",
        output: "Stay → Engagement",
      },
      {
        num: "03",
        title: "Tension",
        desc: "Create the feeling of \"if I don't go now, I'll miss this.\" Limited experience packages, seasonal narratives, waitlist systems. Turn interest into booking.",
        output: "Book → Conversion",
      },
      {
        num: "04",
        title: "Perception Shift",
        desc: "People don't book hotels because \"the room is nice\" — they book because \"I'll miss this experience if I don't go.\" That's the perception shift we design.",
        output: "Shift → Demand",
      },
    ],
    engineLabel: "Demand Engine",
  },
  insight: [
    {
      label: "Core Insight",
      headline: "You don't sell rooms. You sell reasons to come.",
      desc: "ØRIONS builds your own demand — making guests \"want to come\" without competing on price or relying heavily on OTAs.",
    },
    {
      label: "Our Approach",
      headline: "From \"selling rooms\" to \"creating reasons.\"",
      desc: "Every campaign, every piece of content, every package is designed around one question: what's the reason someone would choose this place over everything else?",
    },
  ],
  segments: {
    headline: "Who this is for.",
    items: [
      {
        title: "Boutique Hotels",
        tag: "Independent",
        desc: "Stand out from OTA noise with a story only you can tell. Create direct booking demand through narrative-driven campaigns.",
        metric: "Direct booking ↑",
      },
      {
        title: "Resort & Wellness",
        tag: "Experience-Led",
        desc: "Reframe from \"spa hotel\" to transformative experience. Package design that increases revenue per guest.",
        metric: "Rev per guest ↑",
      },
      {
        title: "Golf & Lifestyle Hotels",
        tag: "Niche Positioning",
        desc: "Own a specific audience segment with precision positioning. Create weekday demand and exclusive experiences.",
        metric: "Weekday occ. ↑",
      },
    ],
  },
  phasesHeadline: "5 PHASES OF DEMAND.",
  phases: [
    {
      num: "01",
      title: "See Differently",
      subtitle: "Demand Discovery — look at your business from angles you haven't considered. Find new demand, new segments, new reasons people should come here.",
      items: [
        "Business & stakeholder deep-dive session",
        "Data review: occupancy, ADR, RevPAR, channel mix, guest profile",
        "Current marketing & content audit",
        "Competitive landscape scan",
        "Demand mapping: find demand no one else sees",
      ],
      deliverable: "Demand Opportunity Map",
      deliverableDesc: "3–5 narrative directions with revenue potential estimates for each.",
    },
    {
      num: "02",
      title: "Reframe",
      subtitle: "Demand Creation — change how people see your hotel. Build campaign concept, hero story, and content direction that makes people \"want to come\" instead of scrolling past.",
      items: [
        "Campaign concept development",
        "Hero content & visual direction",
        "Conversion flow design",
        "Launch plan & channel strategy",
      ],
      deliverable: "Campaign + Content Direction",
      deliverableDesc: "Full campaign concept with production specs and launch sequence.",
    },
    {
      num: "03",
      title: "Make It Real",
      subtitle: "Revenue Design — design experiences that increase spend per guest. Package design, pricing strategy, upsell systems that make guests spend more while feeling it's worth it.",
      items: [
        "Experience package design",
        "Pricing architecture & strategy",
        "Upsell system design",
        "Experience blueprint",
      ],
      deliverable: "Revenue System",
      deliverableDesc: "Package designs, pricing models, and upsell mechanics ready to implement.",
    },
    {
      num: "04",
      title: "Launch & Activate",
      subtitle: "Production + Activation — produce real assets and launch campaigns. Film, content, website, events — everything needed to create demand.",
      items: [
        "Production (film, photo, motion)",
        "Content suite for all channels",
        "Campaign launch & deployment",
        "Performance tracking setup",
      ],
      deliverable: "Live Campaign",
      deliverableDesc: "All assets produced, campaign live, performance tracking active.",
    },
    {
      num: "05",
      title: "Scale",
      subtitle: "Demand Engine — keep demand growing continuously. Optimize what works, cut what doesn't, create new demand every quarter.",
      items: [
        "Content system & monthly production",
        "Monthly optimization & reporting",
        "Quarterly narrative refresh",
        "New demand exploration each quarter",
      ],
      deliverable: "Ongoing Demand Engine",
      deliverableDesc: "Continuous content, optimization, and quarterly strategy refreshes.",
    },
  ],
  impact: {
    headline: "What this creates for your business.",
    items: [
      {
        result: "Direct Booking ↑",
        desc: "Reduce OTA dependency. More guests book directly because they have a reason to.",
      },
      {
        result: "Revenue / Guest ↑",
        desc: "Experience packages and upsell systems increase spend per booking.",
      },
      {
        result: "Weekday Demand ↑",
        desc: "Narrative-driven campaigns create demand beyond weekends and holidays.",
      },
      {
        result: "Brand Equity ↑",
        desc: "Stop competing on price. Start being chosen for who you are.",
      },
    ],
  },
  tiers: [
    {
      label: "Package 01",
      scope: "Starter",
      price: "600K–900K",
      detail: "Find 1 new demand opportunity and test if it sells. Full Demand Discovery + lite Demand Creation (1 campaign concept + content direction) + first 30 days execution plan.",
      note: "4–6 weeks · 50% upfront, 50% on delivery",
    },
    {
      label: "Package 02 · Recommended",
      scope: "Growth",
      price: "1M–1.5M",
      detail: "Create real demand + increase revenue per booking. Full Discovery + full Campaign (concept + production + launch) + Revenue Design (packages + pricing + upsell) + Launch & Activate.",
      note: "8–12 weeks · 40/30/30 payment",
      featured: true,
    },
    {
      label: "Package 03",
      scope: "Full System",
      price: "1.5M–2.5M+",
      detail: "Build the complete demand system + keep it growing. Everything in Growth + 3 months of Scale (ongoing optimization, content system, quarterly refresh, performance reporting).",
      note: "12–16 weeks · 30/30/20/20 payment",
    },
  ],
  retainer: {
    title: "Demand Engine",
    price: "120K–300K",
    desc: "For hotels that have completed a package or have foundation ready — need demand to keep growing continuously. Includes content strategy, production, optimization, and quarterly narrative refreshes.",
    note: "Minimum 6 months · Cancellation: 60 days notice · 3 tiers: Foundation (120K), Growth (200K), Full Engine (300K)",
  },
  closing: {
    headline: "MOST HOTELS SELL ROOMS. WE HELP YOU SELL REASONS TO COME.",
  },
};

const HospitalityPage = () => <IndustryPageTemplate data={hospitalityData} />;

export default HospitalityPage;
