import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

import teamFounder from "@/assets/team-somchai.jpg";
import teamCeo from "@/assets/team-tawan.jpg";
import teamCfo from "@/assets/team-nari.jpg";
import teamCd from "@/assets/team-krit.jpg";
import teamAd from "@/assets/team-pim.jpg";
import teamEditorDop from "@/assets/team-arun.jpg";
import teamEditor from "@/assets/team-dao.jpg";
import teamAe from "@/assets/team-fern.jpg";
import teamPm from "@/assets/team-joy.jpg";
import teamSenior from "@/assets/team-mai.jpg";

import teamDirector from "@/assets/team-director.jpg";
import teamPr from "@/assets/team-pr.jpg";
import teamPostSup from "@/assets/team-post-sup.jpg";

const cLevel = [
  { name: "Founder", role: "Vision & Direction", image: teamFounder },
  { name: "CEO", role: "Business & Growth", image: teamCeo },
  { name: "CFO", role: "Finance & Operations", image: teamCfo },
];

const teamMembers = [
  { name: "Creative Director", role: "Creative Direction", image: teamCd },
  { name: "Art Director", role: "Visual Design", image: teamAd },
  { name: "Director", role: "Film Direction", image: teamDirector },
  { name: "Editor / DOP", role: "Cinematography & Edit", image: teamEditorDop },
  { name: "Editor", role: "Post-production", image: teamEditor },
  { name: "Post Supervisor", role: "Post Workflow", image: teamPostSup },
  { name: "Public Relations", role: "Brand Communications", image: teamPr },
  { name: "Account Executive", role: "Client Relations", image: teamAe },
  { name: "Project Manager", role: "Project Management", image: teamPm },
  { name: "Creative Senior", role: "Creative Strategy", image: teamSenior },
];

const AboutPage = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="About — ØRIONS Creative Agency Bangkok"
        description="ØRIONS is a creative agency in Bangkok that changes how people see brands. Meet our team of 10 creatives."
        path="/about"
      />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-end px-4 sm:px-6 md:px-12 pb-16 md:pb-24 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-8">
              <span className="text-accent-warm mr-2">✦</span> About Us
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="font-display text-[clamp(40px,8vw,110px)] leading-[0.9] tracking-[0.01em] text-foreground">
              WHO WE <span className="text-accent-gradient">ARE.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <AnimatedSection>
              <div>
                <h2 className="font-display text-[clamp(28px,4vw,48px)] leading-[0.95] tracking-[0.01em] text-foreground mb-8">
                  A CREATIVE AGENCY<br />FROM BANGKOK.
                </h2>
                <div className="space-y-6">
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    ØRIONS started with a simple belief: most brands aren't boring — they're just seen the wrong way. We're a team of creatives, strategists, and storytellers who change how people perceive brands.
                  </p>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    Founded in Bangkok, we work at the intersection of strategy and creativity. We don't just make things look good — we make brands mean something to the people who see them.
                  </p>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    From brand transformation to film production, from campaign strategy to original content — everything we do starts with one question: <span className="text-foreground">how should people see this brand?</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="border border-border p-8">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-4">Founded</p>
                  <p className="font-display text-[36px] leading-none text-foreground">2024</p>
                </div>
                <div className="border border-border p-8">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-4">Team Size</p>
                  <p className="font-display text-[36px] leading-none text-foreground">10</p>
                </div>
                <div className="border border-border p-8">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm/60 mb-4">Based In</p>
                  <p className="font-display text-[36px] leading-none text-foreground">Bangkok</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 sm:px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-12">
              <span className="text-accent-warm mr-2">✦</span> What We Stand For
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Ideas First", desc: "Strategy without creativity is a spreadsheet. Creativity without strategy is art. We do both." },
              { title: "Clarity Over Noise", desc: "We don't add more. We cut through. Every project starts with finding the truth, then making it impossible to ignore." },
              { title: "Long-Term Partners", desc: "We don't do one-off projects. We become your creative brain — thinking with you, growing with you." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border border-border p-8 md:p-10 h-full hover:border-accent-warm/20 transition-colors duration-300">
                  <h3 className="font-display text-[24px] md:text-[28px] tracking-[0.02em] text-foreground mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">✦</span> The Team
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[0.9] tracking-[0.01em] text-foreground mb-16">
              13 CREATIVES.<br /><span className="text-accent-gradient">ONE VISION.</span>
            </h2>
          </AnimatedSection>

          {/* C-Level Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
            {cLevel.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group">
                  <div className="aspect-[3/4] bg-foreground/5 border border-border mb-4 overflow-hidden relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.08em] text-foreground mb-1">{member.name}</p>
                  <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted-foreground/50">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group">
                  <div className="aspect-[3/4] bg-foreground/5 border border-border mb-4 overflow-hidden relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.08em] text-foreground mb-1">{member.name}</p>
                  <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted-foreground/50">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 px-4 sm:px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(32px,5vw,72px)] leading-[0.92] tracking-[0.01em] text-foreground mb-6">
              WANT TO WORK<br />WITH US?
            </h2>
            <p className="font-body text-[15px] leading-[1.7] text-muted-foreground max-w-xl mx-auto mb-10">
              We're always looking for brands that want to be seen differently.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-10 py-3.5 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Let's Talk <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
