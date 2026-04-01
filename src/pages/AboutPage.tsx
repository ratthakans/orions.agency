import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
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
  { name: "Ratthakan Suwanphakdee", role: "Founder", image: teamFounder },
  { name: "Khanakhom Kittisakulnam", role: "CEO", image: teamCeo },
  { name: "TBA", role: "CFO · Finance & Operations", image: teamCfo },
];

const teamMembers = [
  { name: "Manrut Rojrattanavichai", role: "Creative Director", image: teamCd },
  { name: "Jaruwatr Bhokhaidhanes", role: "Art Director", image: teamAd },
  { name: "Niti Paladkong", role: "Director", image: teamDirector },
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
        description="ØRIONS is a creative agency in Bangkok specializing in brand strategy, communication design, and film production. Meet our team of 13 creatives."
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
                  WE DO LESS —<br />WITH MORE INTENTION.
                </h2>
                <div className="space-y-6">
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    In a world of constant output, we focus on clarity, direction, and work that holds attention.
                  </p>
                  <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">
                    We combine strategic thinking, considered art direction, and disciplined production to create communication that is clear, precise, and built to last.
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
                  <p className="font-display text-[36px] leading-none text-foreground">13</p>
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
              <span className="text-accent-warm mr-2">✦</span> Why ØRIONS
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Limited projects", desc: "We take on a limited number of projects each year to ensure focus and quality." },
              { title: "Define before we create", desc: "Every piece of work starts with clear direction and intention." },
              { title: "Work that lasts", desc: "We focus on communication that holds attention — not chases it." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border border-border p-8 md:p-10 h-full hover:border-accent-warm/30 transition-colors duration-300">
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

      {/* In-house Production */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="border border-border p-8 md:p-12">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-warm/60 mb-6">
                <span className="text-accent-warm mr-2">✦</span> In-house Production
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground">
                We work with brands focused on experience, design, and long-term brand building. Our in-house production team — Director, DOP, Editor, Post Supervisor — works together from concept to final cut. No handoff between teams. The idea you approve is the idea you get.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="px-4 sm:px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            <AnimatedCounter end={50} suffix="+" label="Projects" />
            <AnimatedCounter end={9} label="Industries" />
            <AnimatedCounter end={13} label="Creatives" />
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
              Let's create something meaningful.
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
