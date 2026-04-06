import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Strategy",
    desc: "Define what your brand should say, who it should speak to, and how it should be understood.",
    longDesc: "We start by understanding your brand at its core — what makes it different, what it stands for, and where it needs to go. From there, we build a strategic foundation that guides every creative decision that follows.",
    items: [
      { name: "Brand Positioning & Narrative", detail: "Clarify what your brand stands for and how it should be perceived in the market." },
      { name: "Communication Framework", detail: "Build a structured system for how your brand speaks — across channels, audiences, and contexts." },
      { name: "Campaign Direction", detail: "Define the strategic intent behind campaigns before any creative work begins." },
      { name: "Market & Audience Analysis", detail: "Understand the competitive landscape and identify the audiences that matter most." },
      { name: "Brand Architecture", detail: "Organize sub-brands, product lines, and offerings into a coherent system." },
      { name: "Content & Channel Strategy", detail: "Plan which content goes where — aligning formats, platforms, and timing with business goals." },
    ],
    outcome: "A clear strategic foundation — positioning, narrative, and direction that guides everything else.",
  },
  {
    num: "02",
    title: "Communication Design",
    desc: "Shape strategy into clear ideas, visual direction, and systems people connect with.",
    longDesc: "This is where strategy becomes tangible. We translate brand direction into creative concepts, visual systems, and content structures that communicate with precision and resonance.",
    items: [
      { name: "Campaign Concepts & Creative Direction", detail: "Develop big ideas and set the visual and tonal direction for campaigns." },
      { name: "Messaging & Content Systems", detail: "Create frameworks for consistent, scalable content across all touchpoints." },
      { name: "Touchpoint Structure", detail: "Map out every point of contact between your brand and its audience." },
      { name: "Art Direction", detail: "Set and maintain the visual standards that define your brand's look and feel." },
      { name: "Visual Identity Systems", detail: "Design cohesive identity systems — from typography and color to layout and imagery." },
      { name: "Editorial & Content Strategy", detail: "Plan content calendars, editorial themes, and storytelling approaches." },
    ],
    outcome: "A complete creative system — ideas, visuals, and content structures ready for production.",
  },
  {
    num: "03",
    title: "Film & Production",
    desc: "Execute with attention to detail — from concept to final delivery.",
    longDesc: "We bring everything to life through high-quality production. Whether it's a brand film, a documentary series, or a social content package, we handle concept development through post-production with full creative control.",
    items: [
      { name: "TVC, Commercials & Branded Content", detail: "Full production from script to screen — commercials that communicate brand value." },
      { name: "Documentary-Style Film", detail: "Long-form storytelling that captures real stories, real people, and real emotion." },
      { name: "Photo & Video Production", detail: "Professional shoots for campaigns, lookbooks, social media, and editorial." },
      { name: "Post-Production & Color Grading", detail: "Editing, sound design, color grading, and finishing to cinematic standards." },
      { name: "Motion Graphics & Animation", detail: "Animated content, title sequences, and visual effects for digital and broadcast." },
      { name: "Podcast & Audio Production", detail: "Full podcast production — from concept and scripting to recording and distribution." },
    ],
    outcome: "Finished work delivered to the highest standard — film, photo, and content ready to publish.",
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Services | ØRIONS"
        description="Strategy, communication design, and film production. We define what needs to be said, shape how it should be expressed, and bring it to life."
        path="/services"
        keywords="brand strategy, communication design, film production, creative retainer, art direction bangkok"
      />
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-end px-4 sm:px-6 md:px-12 pt-24 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto w-full">
            <AnimatedSection>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
                Services
              </p>
              <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground">
                WHAT WE<br />
                <span className="text-accent-gradient">DO.</span>
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Overview */}
        <section className="px-4 sm:px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-3 gap-px bg-border">
                {["Define", "Develop", "Produce"].map((step, i) => (
                  <div key={step} className="bg-background p-6 md:p-8 text-center">
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/40 block mb-2">Step {i + 1}</span>
                    <span className="font-display text-[22px] md:text-[28px] tracking-[0.02em] text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Retainer Block */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="border border-accent-warm/30 bg-accent-warm/[0.03] p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="flex-1">
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">Ongoing Partnership</p>
                    <h2 className="font-display text-[32px] md:text-[42px] tracking-[0.02em] text-accent-warm mb-6">
                      RETAINER
                    </h2>
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.9] text-muted-foreground mb-4">
                      We work with a small number of clients on an ongoing basis — providing monthly creative support, campaign planning, creative direction, and production oversight.
                    </p>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground/70 mb-6">
                      Best suited for brands that need continuity, consistency, and a trusted creative partner over the long term.
                    </p>
                  </div>
                  <div className="md:w-72 space-y-4">
                    <div className="border border-accent-warm/20 p-4">
                      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/40 mb-2">Includes</p>
                      <ul className="space-y-2">
                        {[
                          "Monthly creative support",
                          "Campaign planning",
                          "Creative direction",
                          "Production oversight",
                          "Brand consistency review",
                          "Priority scheduling",
                        ].map((item) => (
                          <li key={item} className="font-mono text-[11px] tracking-[0.05em] text-muted-foreground/60 flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent-warm/40 rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Service Stages — Full Detail */}
        <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            {services.map((service, i) => (
              <AnimatedSection key={service.num} delay={i * 0.08}>
                <div className="border-t border-border py-16 md:py-24">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-10">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-accent-warm/40 pt-2">{service.num}</span>
                    <div>
                      <h3 className="font-display text-[36px] md:text-[48px] tracking-[0.02em] text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-foreground/80 mb-4">
                        {service.desc}
                      </p>
                      <p className="font-body text-[14px] md:text-[15px] leading-[1.8] text-muted-foreground max-w-2xl">
                        {service.longDesc}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border ml-0 md:ml-[104px]">
                    {service.items.map((item) => (
                      <div key={item.name} className="bg-background p-6 group hover:bg-accent-warm/[0.02] transition-colors duration-300">
                        <h4 className="font-mono text-[12px] tracking-[0.08em] text-foreground/80 mb-3 group-hover:text-accent-warm transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="font-body text-[13px] leading-[1.7] text-muted-foreground/60">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="ml-0 md:ml-[104px] mt-8 border-l-2 border-accent-warm/20 pl-6">
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/40 mb-2">Outcome</p>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground mb-3">
                      {service.outcome}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm/40 mb-1">Result</p>
                    <p className="font-body text-[14px] leading-[1.7] text-foreground/90">
                      {service.num === "01" ? "People understand your brand faster." : service.num === "02" ? "People remember what you say." : "People feel something about your brand."}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.3}>
              <div className="border-t border-border pt-12">
                <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted-foreground/50 text-center">
                  Our process: Define → Develop → Produce
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 border-t border-border text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              READY TO<br />
              <span className="text-accent-gradient">START?</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              <Link to="/contact" className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">
                Start your first project with ORIONS
              </Link>
              <Link to="/work" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">
                View Work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ServicesPage;
