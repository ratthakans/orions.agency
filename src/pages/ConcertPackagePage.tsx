import IndustryPageTemplate, { type IndustryPageData } from "@/components/IndustryPageTemplate";
import heroImg from "@/assets/concert-hero.jpg";
import crowdImg from "@/assets/concert-crowd.jpg";
import backstageImg from "@/assets/concert-backstage.jpg";

const data: IndustryPageData = {
  seo: {
    title: "Concert Creative Layer — Creative Agency for Live Events | ØRIONS",
    description: "A creative layer that helps concerts and live events sell out faster — through narrative, cultural moments, and demand-driven campaigns.",
    path: "/package/concert",
  },
  hero: {
    image: heroImg,
    imageAlt: "Massive concert venue with dramatic stage lighting",
    label: "Concert Creative Layer",
    headline: "TICKETS DON'T SELL THEMSELVES. STORIES DO.",
    desc: "Concerts don't fail because the artist isn't good enough. They fail because there's no reason compelling enough for people to feel they must be there.",
  },
  reality: {
    headline: "More concerts than ever. Harder to fill every seat.",
    stats: [
      { stat: "High", label: "Market saturation — more events competing for the same audience" },
      { stat: "Low", label: "Attention span — people scroll past your announcement in seconds" },
      { stat: "Rising", label: "Audience expectations — they want moments, not just shows" },
    ],
  },
  breakImage: { src: crowdImg, alt: "Concert crowd with phone lights" },
  demandGap: {
    headline: "The problem isn't the show. It's the demand around it.",
    items: [
      { num: "01", title: "Tickets Don't Sell Out", desc: "Demand isn't strong enough. You end up discounting, giving away, or leaving seats empty." },
      { num: "02", title: "Campaigns Don't Break Through", desc: "Every concert uses the same playbook — poster, teaser, countdown. Nothing stands out." },
      { num: "03", title: "No FOMO", desc: "People see the content but don't feel urgency. There's no emotional reason to buy now." },
      { num: "04", title: "Momentum Dies After Launch", desc: "The announcement gets attention. Then silence. By show day, the hype is gone." },
    ],
  },
  system: {
    headline: "We turn concerts into cultural moments.",
    desc: "Every campaign starts with real cultural insight — what fans are feeling, what's trending, what creates urgency. Then we build creative that makes people say \"I have to be there.\"",
    blocks: [
      { num: "01", title: "Social Listening & Cultural Insight", desc: "We analyze fan culture, emotional triggers, and trending conversations. This gives us the angles that will create real FOMO.", output: "Cultural insight report + campaign angles" },
      { num: "02", title: "Narrative Design", desc: "We define what this concert means — 'the last show,' 'once in a lifetime,' 'the night you can't miss.' A story that makes buying feel urgent.", output: "Concert narrative + emotional positioning" },
      { num: "03", title: "Conversation Design", desc: "We design the content sequence — teaser drops, hints, reveals, countdowns. Timed to build conversations, not just impressions.", output: "Launch sequence + conversation playbook" },
      { num: "04", title: "Search & Discovery Layer", desc: "When people feel the FOMO, they search. We make sure they find your concert — TikTok, YouTube, search, social.", output: "Discovery strategy across platforms" },
    ],
    engineLabel: "Your Ticket Demand Engine",
  },
  insight: [
    { label: "Insight", headline: "People don't buy tickets. They buy moments.", desc: "People don't go to concerts just for the artist. They go for the feeling, the experience, the moment they \"have to be part of.\" Concerts that sell out are the ones that create FOMO." },
    { label: "What We Do", headline: "The creative layer your organizer team is missing.", desc: "Your team handles ticketing, media buying, and PR. We add the layer that makes all of it sell harder — narrative that creates urgency, campaigns that build FOMO, content that makes people feel they can't miss it." },
  ],
  segments: {
    headline: "Core fans buy first. But growth comes from everyone else.",
    items: [
      { title: "Core Fans", tag: "Buy first", desc: "Dedicated followers who buy on announcement day. High engagement, high loyalty — but limited in number.", metric: "Guaranteed base" },
      { title: "Cultural Audience", tag: "Fear of missing out", desc: "Not die-hard fans, but culturally aware. They go because everyone's going — and they don't want to miss it.", metric: "Growth driver" },
      { title: "Social Crowd", tag: "Experience seekers", desc: "They buy for the experience, the photos, the stories. Concerts are lifestyle, not fandom.", metric: "High spend per head" },
      { title: "Group Buyers", tag: "Multiplier effect", desc: "One person convinces five. They need compelling content to share — something that makes their friends say 'I'm in.'", metric: "Revenue multiplier" },
      { title: "Late Deciders", tag: "FOMO converts", desc: "They watch from the sidelines until urgency peaks. The right content at the right time pushes them over the edge.", metric: "Fill the last seats" },
      { title: "Brand Partners", tag: "B2B opportunity", desc: "Sponsors and brands looking for cultural alignment. A stronger narrative means more attractive partnership opportunities.", metric: "Sponsorship value" },
    ],
  },
  secondBreakImage: { src: backstageImg, alt: "Artist silhouette walking towards stage" },
  phases: [
    { num: "01", title: "Demand & Cultural Audit", subtitle: "Understand the audience before you announce.", items: ["Fan culture & sentiment analysis", "Competitive event landscape", "Content & channel review", "Demand potential mapping", "Audience segment identification"], deliverable: "Demand Audit Report", deliverableDesc: "A clear picture of fan sentiment, audience segments, and the cultural angle that will make this concert feel unmissable." },
    { num: "02", title: "Narrative & Campaign Strategy", subtitle: "Define the story before you sell.", items: ["Concert narrative positioning", "Emotional hook development", "Campaign architecture", "Content sequence planning", "Channel strategy"], deliverable: "Campaign Strategy Deck", deliverableDesc: "The narrative, emotional hooks, and full campaign blueprint — ready to execute from announcement to show day." },
    { num: "03", title: "Hero Content & Campaign Launch", subtitle: "Turn strategy into something people feel.", items: ["Cinematic teaser film (30–60s)", "Campaign visual system", "Social-first content series", "Countdown & reveal content", "Paid media creative"], deliverable: "Full Campaign Suite", deliverableDesc: "Teaser films, visual assets, and a complete content sequence designed to build hype from day one." },
    { num: "04", title: "Hype Continuity System", subtitle: "Keep momentum building until show day.", items: ["Content drops on strategic beats", "Conversation & FOMO maintenance", "Peak moment amplification", "Reaction & UGC leverage", "Post-event content capture"], deliverable: "Hype Engine", deliverableDesc: "A system that prevents momentum from dropping — keeping the concert in people's feeds and conversations until tickets are gone." },
  ],
  phasesHeadline: "Four phases.\nOne sell-out system.",
  impact: {
    headline: "Creative is your ticket demand engine.",
    items: [
      { result: "Emotion", desc: "The narrative makes people feel something — urgency, excitement, FOMO." },
      { result: "FOMO", desc: "Conversations build. People start saying 'are you going?' — that's demand." },
      { result: "Purchase", desc: "Interest converts to ticket sales. Urgency drives faster sell-through." },
      { result: "Share", desc: "The experience gets shared. Next event sells even faster." },
    ],
  },
  tiers: [
    { label: "NARRATIVE STARTER", scope: "Phase 1", price: "60,000 – 100,000", detail: "Cultural insight, concert narrative, campaign idea", note: "For organizers who need direction before committing" },
    { label: "DEMAND CAMPAIGN", scope: "Phase 1–3", price: "200,000 – 400,000", detail: "Full narrative + campaign + hero content + content system", note: "For concerts that need to sell out", featured: true },
    { label: "DEMAND SYSTEM", scope: "Retainer", price: "100,000 – 180,000", detail: "Monthly content sequence, narrative evolution, conversation tracking", note: "For multi-show tours or ongoing event series", isMonthly: true },
  ],
  closing: {
    image: heroImg,
    headline: "Make people feel they have to be there.",
  },
};

const ConcertPackagePage = () => <IndustryPageTemplate data={data} />;
export default ConcertPackagePage;
