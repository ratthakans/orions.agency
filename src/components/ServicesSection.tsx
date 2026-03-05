import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface ScopeDetail {
  name: string;
  process: string;
  difference: string;
  steps: string[];
}

interface Service {
  num: string;
  title: string;
  subtitle: string;
  scope: ScopeDetail[];
  outcome: string;
}

const services: Service[] = [
  {
    num: "01",
    title: "Brand Direction",
    subtitle: "Define the brand clearly.",
    scope: [
      { name: "Brand Strategy", process: "We start by understanding the business landscape, audience psychology, and competitive positioning. Through deep-dive workshops and stakeholder interviews, we uncover the brand's core truth — the single most important idea the brand should own.", difference: "Most agencies deliver a brand book. We deliver a strategic compass — a living document that guides every decision, from product naming to campaign tone. Our strategies are built to be actionable, not decorative.", steps: ["Business & Market Analysis", "Stakeholder Interviews", "Brand Truth Discovery Workshop", "Strategic Positioning Document", "Implementation Roadmap"] },
      { name: "Brand Positioning", process: "We map the competitive landscape and identify white space where the brand can credibly claim authority. Through perception audits and audience research, we craft a positioning statement that is both aspirational and defensible.", difference: "We don't just find a 'unique selling point.' We build a positioning ecosystem — connecting the brand's story, audience needs, and market gaps into a cohesive strategic narrative that competitors cannot replicate.", steps: ["Competitive Landscape Mapping", "Audience Perception Audit", "White Space Analysis", "Positioning Statement Crafting", "Validation Testing"] },
      { name: "Rebranding", process: "Rebranding at ØRIONS is not just a visual refresh. We rebuild from the strategic foundation — reassessing why the brand exists, who it serves, and what it stands for — then translate that into every visual, verbal, and experiential touchpoint.", difference: "Most rebrands change the logo. We change the meaning. Every rebrand includes a transition strategy to bring existing audiences along without losing equity, while opening doors to new markets.", steps: ["Brand Equity Audit", "Strategic Reassessment", "New Brand Architecture", "Visual & Verbal Identity System", "Transition & Launch Strategy"] },
      { name: "Messaging & Narrative Development", process: "We develop a messaging hierarchy — from the brand's master narrative down to tactical taglines. Every message is tested against audience understanding, emotional resonance, and strategic alignment.", difference: "We create message architectures, not just headlines. Each level of messaging is designed for a specific audience and context, ensuring the brand speaks consistently whether it's a billboard or a customer service email.", steps: ["Audience Segmentation", "Message Architecture Workshop", "Narrative Writing & Iteration", "Tone of Voice Guidelines", "Message Testing & Refinement"] },
      { name: "Go-to-Market Direction", process: "We work with founding teams and marketing leads to design the communication strategy for market entry — defining channels, timing, narrative, and launch milestones that build momentum rather than just noise.", difference: "We treat GTM as a storytelling exercise, not just a media plan. The launch narrative is crafted to create anticipation, deliver on promises, and sustain interest beyond the initial push.", steps: ["Market Entry Analysis", "Launch Narrative Design", "Channel Strategy", "Milestone Planning", "Post-Launch Optimization Framework"] },
    ],
    outcome: "A clear brand story and communication foundation.",
  },
  {
    num: "02",
    title: "Campaign & Narrative Content",
    subtitle: "Create work people remember.",
    scope: [
      { name: "Campaign Concepts", process: "We develop campaign ideas from strategic briefs — not creative whims. Each concept is built around a central insight about the audience, and is designed to work across multiple formats and channels from day one.", difference: "Our concepts come with built-in scalability. We don't just pitch a hero ad — we deliver an entire campaign ecosystem with narrative arcs, content formats, and extension strategies that keep the campaign alive for months.", steps: ["Strategic Brief Development", "Insight Mining & Audience Research", "Concept Ideation Sessions", "Campaign Architecture Design", "Format & Channel Planning"] },
      { name: "Brand Films & Video", process: "From script to screen, we manage every aspect of brand film production. Our films are narrative-driven — they tell stories that audiences want to watch, not just ads they have to sit through.", difference: "We approach brand films like documentary filmmakers, not advertisers. The result is content that feels authentic, earns attention organically, and has a longer shelf life than traditional advertising.", steps: ["Story Development & Scripting", "Pre-Production Planning", "Production Direction", "Post-Production & Edit", "Distribution Strategy"] },
      { name: "Photography", process: "We art-direct photography that captures the brand's essence — not generic stock imagery. Every shoot is planned around a visual narrative that reinforces the brand positioning.", difference: "Our photography briefs are strategic documents. We define not just what to shoot, but why each image exists in the brand ecosystem and how it will be used across touchpoints.", steps: ["Visual Narrative Planning", "Art Direction & Moodboarding", "Photographer Selection & Briefing", "On-Set Direction", "Post-Processing & Asset Library"] },
      { name: "Editorial Content", process: "We create long-form content that builds authority — thought leadership articles, brand stories, and editorial series that position the brand as a credible voice in its industry.", difference: "We write for influence, not just SEO. Our editorial content is crafted by writers who understand both storytelling craft and strategic communication, resulting in pieces that readers actually share.", steps: ["Topic Strategy & Editorial Calendar", "Research & Interviews", "Writing & Editing", "Visual Content Pairing", "Publishing & Amplification"] },
      { name: "Social Content Series", process: "We design content series with narrative consistency — each post is part of a larger story, not an isolated piece. Series are built around themes that reinforce the brand's key messages.", difference: "We don't do 'social media posts.' We create serialized brand stories designed for social platforms. Each series has a beginning, development, and payoff that keeps audiences coming back.", steps: ["Series Concept Development", "Content Pillar Alignment", "Template & Format Design", "Production & Scheduling", "Performance Analysis & Iteration"] },
      { name: "Founder Storytelling", process: "We extract and shape the founder's personal narrative into a powerful brand asset. Through in-depth interviews and narrative structuring, we turn personal journeys into compelling brand stories.", difference: "We treat founder stories as strategic IP. The narrative is structured to build trust, attract talent, and differentiate the brand in ways that corporate messaging cannot replicate.", steps: ["Deep-Dive Founder Interviews", "Narrative Arc Development", "Story Structuring & Writing", "Multi-Format Adaptation", "Publishing Strategy"] },
    ],
    outcome: "Memorable campaigns and meaningful content.",
  },
  {
    num: "03",
    title: "Digital Experience",
    subtitle: "Build the brand online.",
    scope: [
      { name: "Narrative Websites", process: "We build websites that tell stories — not just display information. Every scroll, transition, and section is designed to guide visitors through a narrative journey that ends with understanding and action.", difference: "Most agencies build websites from templates. We build from story structures. The result is a digital experience that feels like reading a great brand story, not browsing a corporate brochure.", steps: ["Narrative Structure Planning", "Content Strategy & Wireframing", "Visual Design Direction", "Development & Interaction Design", "Performance Optimization & Launch"] },
      { name: "Landing Pages", process: "We design landing pages with a single-minded focus on conversion — every element serves the goal. From headline to CTA, each component is strategically placed and tested.", difference: "We combine conversion science with brand craft. Our landing pages convert at high rates without looking like generic direct-response pages — they maintain brand integrity while driving results.", steps: ["Conversion Goal Definition", "Audience & Intent Mapping", "Persuasion Architecture Design", "Visual Design & Copywriting", "A/B Testing & Optimization"] },
      { name: "UX/UI Direction", process: "We lead UX/UI from a brand perspective — ensuring that every interface decision reinforces the brand's personality, values, and positioning. Design systems are built for consistency and scalability.", difference: "We don't just make things 'user-friendly.' We make them brand-true. Our UX direction ensures that the digital experience feels like the brand, creating consistency across every digital touchpoint.", steps: ["User Research & Journey Mapping", "Brand-Aligned Design Principles", "Interface Design & Prototyping", "Design System Creation", "Usability Testing & Iteration"] },
      { name: "Campaign Microsites", process: "We create focused, immersive digital experiences for campaign launches — standalone sites that maximize impact for specific initiatives with dedicated storytelling and conversion paths.", difference: "Our microsites are campaign amplifiers, not afterthoughts. They're designed to be shared, bookmarked, and revisited — extending the campaign's reach and lifespan beyond traditional media.", steps: ["Campaign Integration Planning", "Immersive Experience Design", "Interactive Content Development", "Launch & Promotion Strategy", "Analytics & Impact Measurement"] },
      { name: "Conversion Architecture", process: "We design the entire digital conversion journey — from first touchpoint to final action. Every page, form, and interaction is mapped to move visitors closer to conversion while maintaining brand experience.", difference: "We see conversion not as a single page, but as an architecture. By mapping the entire decision journey, we eliminate friction points and create pathways that feel natural, not pushy.", steps: ["Conversion Funnel Audit", "User Decision Journey Mapping", "Touchpoint Optimization Design", "Technical Implementation", "Continuous Testing & Refinement"] },
    ],
    outcome: "A strong digital presence that supports brand growth.",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedScope, setSelectedScope] = useState<{ service: Service; scope: ScopeDetail } | null>(null);
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header — same 2-col layout as Careers */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                What We Do
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Core<br />
                <span className="text-accent-gradient">Services</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                These services focus on defining direction and building the key communication assets for the brand.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-0">
          {services.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <div className="border-t border-divider">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 md:py-10 flex items-start md:items-center justify-between text-left group"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="font-display text-sm text-muted-foreground group-hover:text-accent-warm transition-colors duration-300">{s.num}</span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm mt-1">{s.subtitle}</p>
                    </div>
                  </div>
                  <span className={`font-display text-2xl mt-1 md:mt-0 transition-all duration-300 ${openIndex === i ? "text-foreground rotate-45" : "text-muted-foreground group-hover:text-foreground rotate-0"}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-12 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Scope</p>
                          <ul className="space-y-2">
                            {s.scope.map((item) => (
                              <li
                                key={item.name}
                                className="font-body text-sm text-secondary-foreground hover:text-accent-warm cursor-pointer transition-colors duration-300 flex items-center gap-2 group/item"
                                onClick={() => setSelectedScope({ service: s, scope: item })}
                              >
                                <span className="w-0 group-hover/item:w-3 h-px bg-accent-warm transition-all duration-300" />
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Outcome</p>
                          <p className="font-body text-sm text-secondary-foreground leading-relaxed">{s.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-divider" />
        </div>
      </div>

      {/* Scope Detail Dialog */}
      <Dialog open={!!selectedScope} onOpenChange={(open) => !open && setSelectedScope(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-divider">
          {selectedScope && (
            <>
              <DialogHeader>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {selectedScope.service.title}
                </p>
                <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {selectedScope.scope.name}
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground text-sm mt-1">
                  Part of our {selectedScope.service.title.toLowerCase()} services
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                <div>
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Our Process</h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">{selectedScope.scope.process}</p>
                </div>

                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">How We're Different</h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">{selectedScope.scope.difference}</p>
                </div>

                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Key Steps</h4>
                  <div className="space-y-3">
                    {selectedScope.scope.steps.map((step, i) => (
                      <div key={step} className="flex items-center gap-4">
                        <span className="font-display text-xs text-accent-warm w-6 text-right shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-divider" />
                        <span className="font-body text-sm text-foreground">{step}</span>
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

export default ServicesSection;
