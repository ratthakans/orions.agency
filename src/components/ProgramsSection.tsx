import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface ScopeDetail {
  name: string;
  process: string;
  difference: string;
  steps: string[];
}

interface Program {
  title: string;
  subtitle: string;
  scope: ScopeDetail[];
  outcome: string;
}

const programs: Program[] = [
  {
    title: "Marketing & Social Systems",
    subtitle: "Consistent brand presence across digital channels.",
    scope: [
      {
        name: "Content planning and editorial calendar",
        process: "We build a 90-day editorial system that maps content themes to business objectives, audience behavior cycles, and cultural moments. Every piece of content has a strategic reason to exist.",
        difference: "Most agencies deliver a spreadsheet of post ideas. We deliver a content operating system — with pillars, formats, cadence rules, and approval workflows that your team can run independently.",
        steps: ["Business Objective Mapping", "Content Pillar Development", "90-Day Calendar Architecture", "Format & Platform Matrix", "Team Workflow Setup"],
      },
      {
        name: "Social media management",
        process: "We manage social channels as brand experiences, not broadcast channels. Every post, reply, and story is crafted to build a consistent brand personality that audiences recognize and trust.",
        difference: "We don't just schedule posts. We manage brand perception — monitoring conversations, adjusting tone in real-time, and turning every interaction into a brand-building moment.",
        steps: ["Channel Audit & Strategy", "Brand Voice Calibration", "Content Production & Scheduling", "Community Engagement", "Weekly Performance Sync"],
      },
      {
        name: "Short-form content production",
        process: "We produce scroll-stopping short-form content — Reels, TikToks, Shorts — that balances trend awareness with brand consistency. Each piece is designed for platform-native engagement.",
        difference: "We don't chase trends blindly. Every short-form piece connects back to the brand's strategic narrative, ensuring viral potential without brand dilution.",
        steps: ["Trend & Format Research", "Concept Development", "Production & Filming", "Edit & Post-Production", "Platform Optimization"],
      },
      {
        name: "Campaign rollout support",
        process: "We coordinate campaign launches across all digital channels — ensuring consistent messaging, timing, and visual execution. From teaser to peak to sustain, every phase is planned.",
        difference: "We treat rollouts as storytelling arcs, not media schedules. Each phase builds on the last, creating momentum that compounds rather than fades.",
        steps: ["Campaign Timeline Design", "Asset Coordination", "Channel-Specific Adaptation", "Launch Execution", "Real-Time Monitoring & Adjustment"],
      },
      {
        name: "Platform publishing and scheduling",
        process: "We handle the operational side of content distribution — optimal timing, platform-specific formatting, hashtag strategy, and cross-posting logic that maximizes reach without spamming.",
        difference: "We use data-driven scheduling that adapts to your audience's actual behavior patterns, not generic 'best time to post' guides.",
        steps: ["Audience Activity Analysis", "Platform-Specific Formatting", "Scheduling & Automation Setup", "Cross-Platform Coordination", "Distribution Analytics"],
      },
      {
        name: "Community monitoring",
        process: "We monitor brand mentions, comments, DMs, and industry conversations across platforms. Sentiment shifts, competitor moves, and emerging conversations are tracked and reported.",
        difference: "We don't just report numbers. We interpret signals — identifying early warning signs, emerging opportunities, and conversation threads the brand should join or avoid.",
        steps: ["Monitoring Tool Setup", "Keyword & Mention Tracking", "Sentiment Analysis", "Opportunity Identification", "Weekly Intelligence Brief"],
      },
      {
        name: "Monthly performance review",
        process: "We deliver monthly reports that connect content performance to business outcomes — not just vanity metrics. Each review includes strategic recommendations for the next cycle.",
        difference: "Our reviews are strategy sessions, not slide decks. We present what worked, what didn't, and exactly what to change — with specific content and format recommendations.",
        steps: ["Data Collection & Analysis", "KPI Performance Review", "Content Audit & Scoring", "Strategic Recommendations", "Next-Cycle Planning"],
      },
    ],
    outcome: "Consistent digital presence and audience engagement.",
  },
  {
    title: "Creative Direction Program",
    subtitle: "Strategic thinking and creative leadership.",
    scope: [
      {
        name: "Campaign ideation",
        process: "We run structured ideation sessions that start from audience insights and business challenges — generating campaign concepts that are both creatively bold and strategically sound.",
        difference: "Our ideation process is repeatable and insight-driven. We don't wait for inspiration — we engineer it through proven frameworks that consistently produce breakthrough ideas.",
        steps: ["Challenge Framing", "Insight Extraction", "Structured Ideation Workshop", "Concept Development", "Feasibility & Impact Assessment"],
      },
      {
        name: "Creative direction for content",
        process: "We provide ongoing creative direction — from visual style to narrative tone — ensuring every piece of content feels like it belongs to the same brand universe.",
        difference: "We act as an embedded creative director, not a vendor. Our direction covers the 'why' behind every creative decision, building your team's creative judgment over time.",
        steps: ["Brand Visual Language Review", "Creative Brief Development", "Direction & Feedback Sessions", "Quality Assurance", "Style Evolution Tracking"],
      },
      {
        name: "Brand narrative development",
        process: "We craft and refine the brand's ongoing narrative — the evolving story that connects past achievements, present positioning, and future vision into a compelling through-line.",
        difference: "Most agencies write brand stories once. We treat narrative as a living system that grows with the brand, adapting to new markets, products, and cultural contexts.",
        steps: ["Narrative Audit", "Story Architecture Design", "Key Message Development", "Stakeholder Alignment", "Narrative Implementation Guide"],
      },
      {
        name: "Strategic brainstorming sessions",
        process: "We facilitate structured strategy sessions that bring clarity to complex marketing challenges — using proven thinking frameworks to move from problem to solution efficiently.",
        difference: "Our sessions are designed to produce decisions, not just ideas. Every session ends with clear action items, owners, and timelines.",
        steps: ["Pre-Session Research", "Challenge Definition", "Framework-Led Discussion", "Solution Prioritization", "Action Plan Documentation"],
      },
      {
        name: "Content concept development",
        process: "We develop content concepts that work as systems — recurring formats, series structures, and thematic frameworks that make content production scalable and consistent.",
        difference: "We design content concepts for longevity. Each concept includes rules for variation and evolution, preventing creative fatigue while maintaining brand recognition.",
        steps: ["Content Gap Analysis", "Concept Architecture", "Format & Series Design", "Pilot Production", "Performance Criteria Setting"],
      },
      {
        name: "Communication review and guidance",
        process: "We review all outgoing brand communications — from press releases to social posts — ensuring consistency, clarity, and strategic alignment before anything goes public.",
        difference: "We don't just proofread. We evaluate every communication against the brand's strategic positioning, ensuring nothing undermines the narrative you've built.",
        steps: ["Communication Intake", "Strategic Alignment Check", "Tone & Message Review", "Feedback & Revision", "Approval & Release"],
      },
    ],
    outcome: "Continuous creative clarity and stronger communication ideas.",
  },
  {
    title: "Information Intelligence",
    subtitle: "Communication insight and monitoring.",
    scope: [
      {
        name: "Search visibility monitoring",
        process: "We track the brand's search presence across key terms — monitoring rankings, SERP features, and competitor movements to identify opportunities and threats early.",
        difference: "We connect search data to communication strategy. Ranking changes aren't just reported — they're interpreted in the context of your brand narrative and competitive positioning.",
        steps: ["Keyword Universe Definition", "Rank Tracking Setup", "SERP Feature Monitoring", "Competitor Position Tracking", "Monthly Search Intelligence Report"],
      },
      {
        name: "AI search presence",
        process: "We monitor how the brand appears in AI-generated search results — ChatGPT, Gemini, Perplexity — ensuring the brand is accurately represented in the new search paradigm.",
        difference: "Most agencies haven't adapted to AI search. We actively monitor and optimize how AI systems understand and present your brand, staying ahead of this fundamental shift.",
        steps: ["AI Search Audit", "Brand Mention Tracking in AI", "Content Optimization for AI", "Accuracy Monitoring", "AI Search Strategy Updates"],
      },
      {
        name: "Brand mention monitoring",
        process: "We track every mention of the brand across digital channels — news, social media, forums, reviews — providing a complete picture of how the brand is being discussed.",
        difference: "We categorize mentions by sentiment, influence level, and strategic relevance — so you know not just what's being said, but what matters and what requires action.",
        steps: ["Monitoring Infrastructure Setup", "Mention Categorization System", "Influence & Reach Assessment", "Alert & Escalation Protocol", "Monthly Mention Report"],
      },
      {
        name: "Competitor communication analysis",
        process: "We systematically analyze competitor communications — messaging, campaigns, content strategy, digital presence — identifying patterns, gaps, and opportunities for differentiation.",
        difference: "We don't just report what competitors do. We decode their strategy — understanding their positioning logic so you can make smarter strategic decisions.",
        steps: ["Competitor Set Definition", "Communication Audit", "Strategy Pattern Analysis", "Gap & Opportunity Mapping", "Competitive Intelligence Brief"],
      },
      {
        name: "Online sentiment observation",
        process: "We track the emotional tone of conversations around the brand — identifying shifts in public perception before they become crises or opportunities.",
        difference: "We combine automated sentiment tracking with human interpretation. AI catches the volume; our strategists catch the nuance.",
        steps: ["Sentiment Baseline Establishment", "Automated Tracking Setup", "Human Analysis Layer", "Trend & Shift Identification", "Sentiment Health Report"],
      },
      {
        name: "Content performance insights",
        process: "We analyze content performance across all channels — identifying what formats, topics, and approaches drive the most meaningful engagement and business outcomes.",
        difference: "We measure content against business impact, not just engagement metrics. A post that drives one qualified lead is worth more than one with a thousand likes.",
        steps: ["Performance Data Collection", "Cross-Channel Analysis", "Content Scoring Framework", "Insight Extraction", "Optimization Recommendations"],
      },
      {
        name: "Monthly intelligence report",
        process: "We compile all intelligence streams — search, social, sentiment, competitors, content — into a single strategic report with clear recommendations for the next month.",
        difference: "Our reports are decision tools, not data dumps. Every insight comes with a recommended action and expected impact, making the report immediately actionable.",
        steps: ["Data Synthesis", "Cross-Stream Pattern Analysis", "Strategic Interpretation", "Recommendation Development", "Executive Summary & Presentation"],
      },
    ],
    outcome: "Clear understanding of brand visibility and communication performance.",
  },
];

const ProgramsSection = () => {
  const [selectedScope, setSelectedScope] = useState<{ program: Program; scope: ScopeDetail } | null>(null);

  return (
    <section className="py-32 md:py-44 px-6 md:px-12 bg-elevated">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
            Long-term partnerships
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Ongoing Programs
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mb-20 leading-relaxed">
            These programs help brands maintain consistent communication and long-term digital presence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-divider">
          {programs.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="bg-elevated p-8 md:p-10 h-full flex flex-col">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-8">{p.subtitle}</p>

                <div className="mb-8 flex-1">
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Scope</p>
                  <ul className="space-y-2">
                    {p.scope.map((item) => (
                      <li
                        key={item.name}
                        className="font-body text-sm text-secondary-foreground hover:text-accent-warm cursor-pointer transition-colors duration-300 flex items-center gap-2 group/item"
                        onClick={() => setSelectedScope({ program: p, scope: item })}
                      >
                        <span className="w-0 group-hover/item:w-3 h-px bg-accent-warm transition-all duration-300" />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-divider pt-6">
                  <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Outcome</p>
                  <p className="font-body text-sm text-secondary-foreground leading-relaxed">{p.outcome}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Scope Detail Dialog */}
      <Dialog open={!!selectedScope} onOpenChange={(open) => !open && setSelectedScope(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-divider">
          {selectedScope && (
            <>
              <DialogHeader>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {selectedScope.program.title}
                </p>
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {selectedScope.scope.name}
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground text-sm mt-1">
                  Part of our {selectedScope.program.title.toLowerCase()} program
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                <div>
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Our Process
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedScope.scope.process}
                  </p>
                </div>

                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    How We're Different
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {selectedScope.scope.difference}
                  </p>
                </div>

                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                    Key Steps
                  </h4>
                  <div className="space-y-3">
                    {selectedScope.scope.steps.map((step, i) => (
                      <div key={step} className="flex items-center gap-4">
                        <span className="font-display text-xs text-accent-gradient w-6 text-right shrink-0 text-accent-warm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-divider" />
                        <span className="font-body text-sm text-foreground">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProgramsSection;
