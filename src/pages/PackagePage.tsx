import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartProjectDialog from "@/components/StartProjectDialog";
import AnimatedSection, { AnimatedChild } from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hospitality-hero.jpg";
import detailImg from "@/assets/hospitality-detail.jpg";
import lobbyImg from "@/assets/hospitality-lobby.jpg";
import aerialImg from "@/assets/hospitality-aerial.jpg";

const phases = [
  {
    num: "01",
    title: "Analysis",
    subtitle: "Understanding before creating.",
    items: ["Brand & property audit", "Competitor landscape mapping", "Target audience profiling", "Channel performance review", "Content gap analysis"],
    deliverable: "Growth Opportunity Brief",
    deliverableDesc: "A strategic document that maps where your hotel stands and where it should go next.",
  },
  {
    num: "02",
    title: "Strategy",
    subtitle: "Defining what makes you unforgettable.",
    items: ["Brand narrative development", "Visual & tonal identity", "Audience-to-channel mapping", "Campaign architecture", "Content calendar framework"],
    deliverable: "Creative Strategy Deck",
    deliverableDesc: "Your hotel's story, audience, and campaign direction — clearly defined.",
  },
  {
    num: "03",
    title: "Campaign & Film",
    subtitle: "Where strategy becomes something people feel.",
    items: ["Hero brand film (60–90s)", "Campaign photography", "Social-first video series", "Paid media creative", "On-property content capture"],
    deliverable: "Full Campaign Suite",
    deliverableDesc: "Films, photography, and creative assets — ready to deploy across every touchpoint.",
  },
  {
    num: "04",
    title: "Content System",
    subtitle: "Growth that doesn't depend on us.",
    items: ["Monthly content production", "Performance tracking & optimization", "Seasonal campaign refreshes", "In-house team training", "Brand guideline documentation"],
    deliverable: "Scalable Content Engine",
    deliverableDesc: "A self-sustaining system your team can run — with ORIONS as strategic advisor.",
  },
];

const tiers = [
  {
    label: "FOUNDATION",
    scope: "Analysis + Strategy",
    price: "120,000",
    detail: "Audit, narrative, positioning, channel plan, creative brief",
    note: "Ideal for hotels starting fresh or repositioning",
  },
  {
    label: "GROWTH",
    scope: "Foundation + Campaign",
    price: "350,000",
    detail: "Everything above + hero film, photography, campaign production",
    note: "For hotels ready to launch a new chapter",
    featured: true,
  },
  {
    label: "FULL SYSTEM",
    scope: "All Four Phases",
    price: "590,000",
    detail: "Complete growth system with ongoing content, performance loop, training",
    note: "For hotels committed to long-term growth",
  },
];

const PackagePage = () => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <SEO
        title="Hospitality Growth System — Creative Partnership for Hotels | ØRIONS"
        description="A strategic creative system for 4–5 star hotels and resorts. From brand narrative to cinematic production — ORIONS helps hotels unlock new markets and drive real bookings."
        path="/package/hospitality"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury resort infinity pool at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28">
          <Link to="/package" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-accent-warm transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> All Packages
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-6"
          >
            Hospitality Growth System
          </motion.p>
          <TextReveal as="h1" className="font-display text-[clamp(40px,7vw,100px)] leading-[0.9] tracking-[0.01em] text-foreground max-w-4xl">
            A CREATIVE SYSTEM BUILT FOR HOSPITALITY
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-[16px] text-muted-foreground max-w-[500px] leading-[1.7] mt-8"
          >
            {t(
              "We help 4–5 star hotels and resorts define their narrative, create cinematic content, and build systems that drive real bookings.",
              "เราช่วยโรงแรมและรีสอร์ทระดับ 4–5 ดาว กำหนดเรื่องราว สร้างคอนเทนต์ระดับภาพยนตร์ และสร้างระบบที่ขับเคลื่อน booking จริง"
            )}
          </motion.p>
        </div>
      </section>

      {/* Problem / Insight */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">The Problem</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground mb-6">
              Beautiful hotels. Empty rooms.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              {t(
                "Most hotels invest in content that looks good but doesn't convert. The result: stunning visuals with no clear strategy, no audience targeting, and no measurable growth.",
                "โรงแรมส่วนใหญ่ลงทุนกับคอนเทนต์ที่ดูดี แต่ไม่เปลี่ยนเป็นยอดจอง ผลลัพธ์คือ visual สวยแต่ไม่มีกลยุทธ์ ไม่มี targeting และไม่มีการเติบโตที่วัดได้"
              )}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">The Insight</p>
            <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.95] text-foreground mb-6">
              Content is not the problem. Strategy is.
            </h2>
            <p className="font-body text-[15px] text-muted-foreground leading-[1.7] max-w-md">
              {t(
                "Travelers don't book hotels. They book the feeling a hotel promises. Without a clear narrative, your content competes on price — not desire.",
                "นักท่องเที่ยวไม่ได้จองโรงแรม พวกเขาจอง 'ความรู้สึก' ที่โรงแรมสัญญา หากไม่มี narrative ที่ชัดเจน คอนเทนต์ของคุณจะแข่งที่ราคา ไม่ใช่ความต้องการ"
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Detail image break */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={detailImg} alt="Luxury hotel interior detail" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* System Overview */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16 md:mb-24">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">System Overview</p>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] leading-[0.95] text-foreground">
              Four phases. One clear direction.
            </h2>
          </AnimatedSection>

          <div className="space-y-20 md:space-y-28">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16" delay={0.1}>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{phase.num}</span>
                  <h3 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] text-foreground mt-2 mb-3">{phase.title}</h3>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mb-6">{phase.subtitle}</p>
                  <div className="border-t border-border pt-5">
                    <ul className="space-y-2.5">
                      {phase.items.map((item) => (
                        <li key={item} className="font-body text-[14px] text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-warm mb-4">Deliverable</p>
                    <h4 className="font-display text-[clamp(24px,3vw,36px)] leading-[0.95] text-foreground mb-4">{phase.deliverable}</h4>
                    <p className="font-body text-[14px] text-muted-foreground leading-[1.7]">{phase.deliverableDesc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aerial image */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={aerialImg} alt="Aerial view of tropical island resort" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment Options */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Investment</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] text-foreground">
              Choose the depth that fits your goals.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <AnimatedChild key={tier.label}>
                <div className={`p-8 md:p-10 h-full flex flex-col justify-between ${tier.featured ? 'bg-foreground text-background' : 'bg-secondary'}`}>
                  <div>
                    <p className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-4 ${tier.featured ? 'text-accent-warm' : 'text-accent-warm'}`}>{tier.label}</p>
                    <h3 className={`font-display text-[24px] leading-[1] mb-2 ${tier.featured ? 'text-background' : 'text-foreground'}`}>{tier.scope}</h3>
                    <p className={`font-display text-[clamp(32px,4vw,48px)] leading-[1] mb-6 ${tier.featured ? 'text-background' : 'text-foreground'}`}>
                      ฿{tier.price}
                    </p>
                    <p className={`font-body text-[14px] leading-[1.7] mb-6 ${tier.featured ? 'text-background/60' : 'text-muted-foreground'}`}>{tier.detail}</p>
                  </div>
                  <p className={`font-body text-[13px] italic ${tier.featured ? 'text-background/40' : 'text-muted-foreground/60'}`}>{tier.note}</p>
                </div>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Why ORIONS */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-warm mb-4">Why ORIONS</p>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] text-foreground max-w-3xl">
              We don't make content. We build systems that grow brands.
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "01", text: "Strategy-first approach — content follows direction" },
              { num: "02", text: "Full production in-house — film, photo, design, digital" },
              { num: "03", text: "Hospitality expertise — we understand the business" },
              { num: "04", text: "Measurable outcomes — not just beautiful work" },
            ].map((r) => (
              <AnimatedChild key={r.num}>
                <span className="font-mono text-[11px] tracking-[0.12em] text-accent-warm">{r.num}</span>
                <p className="font-body text-[14px] text-muted-foreground leading-[1.7] mt-2">{r.text}</p>
              </AnimatedChild>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={lobbyImg} alt="Luxury hotel lobby at dusk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-20">
          <AnimatedSection>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-[0.9] text-foreground max-w-3xl mb-8">
              Let's build something worth remembering.
            </h2>
            <button
              onClick={() => setDialogOpen(true)}
              className="font-mono text-[11px] tracking-[0.12em] uppercase text-background bg-foreground px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
            >
              Start a Project
            </button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default PackagePage;
