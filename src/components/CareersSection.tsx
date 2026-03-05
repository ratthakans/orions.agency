import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

const jobs = [
  {
    title: "Video Editor",
    type: "Full-time",
    description: "We're looking for a skilled Video Editor to craft compelling visual stories for brands across Southeast Asia. You'll work closely with our creative team to produce brand films, social content, and campaign videos that captivate audiences.",
    responsibilities: [
      "Edit and produce high-quality video content for brand campaigns, social media, and digital platforms",
      "Collaborate with the creative director and strategists to translate briefs into visual narratives",
      "Manage post-production workflow including color grading, sound design, and motion graphics",
      "Stay current with video trends, editing techniques, and platform-specific formats",
      "Ensure all deliverables meet brand guidelines and quality standards",
    ],
    qualifications: [
      "2+ years of professional video editing experience",
      "Proficiency in Adobe Premiere Pro, After Effects, and DaVinci Resolve",
      "Strong storytelling sense and attention to detail",
      "Experience with motion graphics is a plus",
      "Portfolio showcasing previous work required",
    ],
  },
  {
    title: "Graphic Designer",
    type: "Full-time",
    description: "Join our design team to create impactful visual identities, marketing collateral, and digital assets. You'll bring brand strategies to life through thoughtful, beautiful design across multiple touchpoints.",
    responsibilities: [
      "Design brand identities, marketing materials, and digital assets",
      "Create layouts for social media, websites, presentations, and print",
      "Collaborate with strategists and copywriters to develop creative concepts",
      "Maintain design consistency across all brand touchpoints",
      "Prepare production-ready files and manage design asset libraries",
    ],
    qualifications: [
      "2+ years of graphic design experience in agency or in-house setting",
      "Expert proficiency in Figma, Adobe Illustrator, and Photoshop",
      "Strong typography and layout skills",
      "Understanding of brand systems and design thinking",
      "Portfolio demonstrating range and craft required",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    description: "We need a data-driven Digital Marketing Specialist to plan, execute, and optimize campaigns across paid and organic channels. You'll help our clients grow their digital presence with measurable results.",
    responsibilities: [
      "Plan and manage digital advertising campaigns across Meta, Google, TikTok, and LINE",
      "Analyze campaign performance and provide actionable insights and reports",
      "Develop SEO strategies and oversee content optimization",
      "Manage marketing budgets and optimize for ROI",
      "Collaborate with the creative team on ad creatives and landing pages",
    ],
    qualifications: [
      "2+ years of experience in digital marketing or performance marketing",
      "Proficiency with Google Analytics, Meta Business Suite, and Google Ads",
      "Strong analytical skills and data-driven mindset",
      "Experience with SEO tools (Ahrefs, SEMrush) is a plus",
      "Understanding of the Thai digital landscape preferred",
    ],
  },
  {
    title: "Social Media Manager",
    type: "Full-time",
    description: "We're seeking a Social Media Manager to own our clients' social presence from strategy to execution. You'll build communities, drive engagement, and create content calendars that align with brand goals.",
    responsibilities: [
      "Develop and execute social media strategies across Instagram, Facebook, TikTok, X, and LINE",
      "Create, schedule, and publish engaging content aligned with brand voice",
      "Monitor trends, conversations, and competitor activity",
      "Manage community engagement and respond to audience interactions",
      "Track KPIs and deliver monthly performance reports",
    ],
    qualifications: [
      "2+ years managing social media for brands or agencies",
      "Strong copywriting skills in both Thai and English",
      "Experience with social management tools (Hootsuite, Buffer, or similar)",
      "Understanding of social algorithms and content best practices",
      "Creative mindset with a pulse on culture and trends",
    ],
  },
  {
    title: "Creative Strategist",
    type: "Full-time",
    description: "As a Creative Strategist, you'll bridge the gap between insight and execution. You'll develop brand narratives, campaign concepts, and content strategies that resonate with audiences and drive business outcomes.",
    responsibilities: [
      "Develop brand strategies, creative concepts, and campaign narratives",
      "Conduct research and audience analysis to inform creative direction",
      "Write creative briefs and present strategic recommendations to clients",
      "Collaborate with designers, editors, and marketers to bring ideas to life",
      "Identify emerging trends and opportunities for brand storytelling",
    ],
    qualifications: [
      "3+ years in creative strategy, brand planning, or advertising",
      "Exceptional storytelling and presentation skills",
      "Ability to think both creatively and analytically",
      "Experience working with cross-functional creative teams",
      "Strong command of English; Thai proficiency is a plus",
    ],
  },
];

const benefits = [
  { title: "Social Security", desc: "Full social security coverage as required by Thai labor law" },
  { title: "Public Holidays", desc: "All public holidays off as mandated by labor regulations" },
  { title: "Creative Culture", desc: "Work in a collaborative, creative team environment" },
  { title: "Flexible Hours", desc: "Monday – Friday, 10:00 – 19:00 with flexibility built in" },
  { title: "Growth Path", desc: "Clear career progression and skill development opportunities" },
  { title: "Team Activities", desc: "Regular team outings, workshops, and creative retreats" },
];

const CareersSection = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  return (
    <section className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header — matches Careers style */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-4">
                Careers
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Join Our<br />
                <span className="text-accent-gradient">Creative Team</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-body text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                We're always looking for talented, curious people who want to do meaningful creative work. If that sounds like you, we'd love to hear from you.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Work info bar */}
        <AnimatedSection delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider mb-20">
            <div className="bg-background p-6 md:p-8">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Working Hours</p>
              <p className="font-body text-foreground">Monday – Friday, 10:00 – 19:00</p>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Location</p>
              <a href="https://maps.app.goo.gl/w2vrRH9Y4j1NwS9J8" target="_blank" rel="noopener noreferrer" className="font-body text-foreground hover:text-accent-warm transition-colors duration-300">
                TV Burabha, Ram Inthra Expressway →
              </a>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Apply</p>
              <a href="mailto:hello@orions.agency" className="font-body text-foreground hover:text-accent-warm transition-colors duration-300">
                hello@orions.agency →
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Open Positions */}
        <AnimatedSection delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-8">
            Open Positions
          </p>
        </AnimatedSection>

        <div className="border-t border-divider">
          {jobs.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.05}>
              <div
                className="group border-b border-divider py-8 cursor-pointer hover:bg-secondary/50 transition-colors duration-300 px-4 -mx-4"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-accent-gradient font-display text-sm font-bold tracking-wide">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent-warm transition-colors duration-300">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body border border-divider px-3 py-1">
                      {job.type}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-muted-foreground group-hover:text-accent-warm group-hover:translate-x-1 transition-all duration-300">
                      <path d="M4 16L16 4M16 4H6M16 4V14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-3 md:ml-10 max-w-2xl line-clamp-2">
                  {job.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Benefits — NO icons, 6 items */}
        <div className="mt-24">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-8">
              Benefits & Perks
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider border border-divider">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.05}>
                <div className="bg-background p-8 md:p-10">
                  <span className="font-display text-xs text-accent-warm mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-base font-semibold text-foreground mb-2">{b.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.1}>
          <div className="mt-24 text-center">
            <p className="font-body text-muted-foreground text-base mb-6">
              Don't see your role? We're always open to meeting great people.
            </p>
            <a
              href="mailto:hello@orions.agency"
              className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300"
            >
              Send Your Portfolio
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Job Detail Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background border-divider p-0">
          {selectedJob && (
            <div className="p-8 md:p-12">
              <DialogHeader className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {selectedJob.title}
                  </DialogTitle>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body border border-divider px-2 py-0.5">
                    {selectedJob.type}
                  </span>
                </div>
                <DialogDescription className="font-body text-base text-muted-foreground">
                  {selectedJob.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-divider p-4">
                    <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Working Hours</p>
                    <p className="font-body text-sm text-foreground">Mon – Fri, 10:00 – 19:00</p>
                  </div>
                  <div className="border border-divider p-4">
                    <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Location</p>
                    <a href="https://maps.app.goo.gl/w2vrRH9Y4j1NwS9J8" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-accent-warm transition-colors">
                      TV Burabha, Ram Inthra Expressway
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Responsibilities</h4>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-accent-warm font-display text-xs font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-body text-sm text-foreground leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Qualifications</h4>
                  <ul className="space-y-3">
                    {selectedJob.qualifications.map((q, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-accent-warm font-display text-xs font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-body text-sm text-foreground leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-divider pt-8">
                  <h4 className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {benefits.map((b) => (
                      <span key={b.title} className="text-xs tracking-[0.1em] uppercase font-body border border-divider px-3 py-1.5 text-foreground">
                        {b.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-divider pt-8">
                  <a
                    href="mailto:hello@orions.agency"
                    className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300"
                  >
                    Apply Now
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CareersSection;
