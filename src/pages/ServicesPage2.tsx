import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

interface ServiceDetail {
  num: string;
  title: string;
  star?: boolean;
  desc: string;
  whatWeDo: string[];
  outcome: string[];
  painPoints: string[];
  bestFor: string[];
  withoutThis: string;
  whoWeWorkWith: string[];
  timeline: string;
  pricing: string;
  typicalEngagement: string;
  note?: string;
}

const coreServices: ServiceDetail[] = [
  {
    num: "01", title: "Creative Transformation", star: true,
    desc: "We redefine your brand through deep research, story, and positioning.",
    whatWeDo: ["Brand narrative", "Customer and culture research", "Positioning and communication direction"],
    outcome: ["Brand clarity improves 2–3x (teams align faster)", "Conversion improves 15–40%", "New customer segments identified (1–2 new segments)", "CAC reduced by 10–25%"],
    painPoints: ["Growth has slowed down", "Customers don't understand your brand", "Marketing no longer works"],
    bestFor: ["Repositioning", "Entering new markets", "Fixing unclear branding"],
    withoutThis: "Marketing cost keeps increasing. Brand becomes invisible.",
    whoWeWorkWith: ["Founder / CEO", "Marketing leadership", "Strategy teams"],
    timeline: "4–8 weeks", pricing: "Starting at 1,000,000 THB", typicalEngagement: "1,000,000 – 2,500,000 THB",
    note: "This defines your next 1–3 years of growth. Not just your next campaign.",
  },
  {
    num: "02", title: "Signature Campaign", star: true,
    desc: "We create campaigns that generate attention, conversation, and demand.",
    whatWeDo: ["Big idea", "Campaign concept", "Communication system"],
    outcome: ["Awareness increases 2–5x", "Engagement increases 50–200%", "Demand increases 15–35% (leads / bookings)"],
    painPoints: ["Campaigns don't create impact", "Content is ignored", "Marketing cost is increasing"],
    bestFor: ["Product launch", "Seasonal campaign", "Brand relaunch"],
    withoutThis: "You keep spending, but nothing stands out.",
    whoWeWorkWith: ["Marketing", "Communication teams", "Sales"],
    timeline: "3–6 weeks", pricing: "200,000 – 500,000 THB", typicalEngagement: "300,000 – 400,000 THB",
  },
  {
    num: "03", title: "Production",
    desc: "We turn ideas into films, visuals, and campaign assets.",
    whatWeDo: ["Hero film", "Campaign visuals", "Content assets"],
    outcome: ["Watch time improves 30–80%", "Conversion improves 10–25%", "Brand perception improves"],
    painPoints: ["Content feels generic", "Execution is weak", "Brand looks low quality"],
    bestFor: ["Campaign rollout", "Content upgrade", "Brand refresh"],
    withoutThis: "Good ideas fail in execution.",
    whoWeWorkWith: ["Marketing", "Creative teams"],
    timeline: "2–6 weeks", pricing: "100,000 – 300,000+ THB", typicalEngagement: "150,000 – 250,000 THB",
    note: "Location, talent, and props are not included.",
  },
  {
    num: "04", title: "Event / Activation",
    desc: "We create real-world experiences that people remember.",
    whatWeDo: ["Event concept", "Activation design", "Experience flow"],
    outcome: ["Engagement increases 2–4x (vs digital only)", "Conversion increases 20–50%", "Stronger brand recall"],
    painPoints: ["No real engagement", "No memorable moments", "Weak brand connection"],
    bestFor: ["Launch events", "Community building", "Brand experiences"],
    withoutThis: "Your brand stays \"just content\".",
    whoWeWorkWith: ["Marketing", "Sales", "Partnerships"],
    timeline: "4–8 weeks", pricing: "150,000 – 500,000+ THB", typicalEngagement: "250,000 – 400,000 THB",
  },
  {
    num: "05", title: "Digital Experience",
    desc: "We design websites and digital journeys that convert attention into action.",
    whatWeDo: ["Website structure", "Landing pages", "UX storytelling"],
    outcome: ["Conversion increases 20–60%", "Bounce rate decreases 15–30%", "Time on site increases 25–70%"],
    painPoints: ["Users don't convert", "Messaging is unclear", "Funnel is broken"],
    bestFor: ["Campaign landing pages", "Website redesign", "Conversion optimization"],
    withoutThis: "Traffic comes, but doesn't convert.",
    whoWeWorkWith: ["Marketing", "Product / Tech", "Sales"],
    timeline: "3–6 weeks", pricing: "80,000 – 250,000 THB", typicalEngagement: "120,000 – 200,000 THB",
    note: "Development cost is not included.",
  },
  {
    num: "06", title: "Creative Communication", star: true,
    desc: "We design how your brand spreads, gets talked about, and builds trust.",
    whatWeDo: ["Narrative distribution", "Seeding", "Information Operations (IO)"],
    outcome: ["Organic reach increases 2–6x", "Search demand increases 20–80%", "Brand mentions increase 30–100%", "Conversion improves 10–25%"],
    painPoints: ["No organic growth", "Low visibility", "Weak trust"],
    bestFor: ["Scaling campaigns", "Building brand presence", "Increasing trust"],
    withoutThis: "Campaigns fade quickly.",
    whoWeWorkWith: ["Marketing", "Content / Social teams"],
    timeline: "1–3 months+", pricing: "80,000 – 150,000+ THB", typicalEngagement: "100,000 – 140,000 THB",
  },
];

interface Retainer {
  num: string; title: string; star?: boolean; desc: string; outcome: string[]; includes?: string[]; pricing: string;
}

const retainers: Retainer[] = [
  { num: "07", title: "Creative Partnership", star: true, desc: "We act as your ongoing creative partner.", outcome: ["Continuous campaign improvement", "1–3 new ideas per month", "Long-term growth consistency"], pricing: "100,000 – 150,000 THB / month" },
  { num: "08", title: "Content System", desc: "We maintain your content presence and extend campaigns.", outcome: ["Content output increases 3–5x", "Engagement increases 20–60%"], pricing: "60,000 – 120,000 THB / month" },
  { num: "09", title: "Channel Management", desc: "We ensure every channel contributes to growth, not just activity.", includes: ["Social", "SEO", "AEO"], outcome: ["Organic traffic increases 20–80%", "Cost per acquisition decreases 10–30%"], pricing: "40,000 – 80,000 THB / month" },
];

const CoreServiceCard = ({ s }: { s: ServiceDetail }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border group cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between py-8 md:py-12">
        <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/30 shrink-0">{s.num}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-display text-[clamp(18px,3vw,34px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">
                {s.title}
              </h3>
              {s.star && <span className="text-accent-warm text-[10px]">★</span>}
            </div>
            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground max-w-xl">{s.desc}</p>
          </div>
        </div>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-muted-foreground text-xl font-light shrink-0 ml-4">+</motion.span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
            <div className="pb-12 pl-[calc(10px+1rem)] md:pl-[calc(10px+2rem)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label>What we do</Label>
                  <ul className="space-y-2 mt-3">{s.whatWeDo.map((w) => (<li key={w} className="flex items-start gap-2"><span className="text-accent-warm text-[8px] mt-1.5">✦</span><span className="font-body text-[13px] text-foreground/70">{w}</span></li>))}</ul>
                </div>
                <div>
                  <Label>Outcome</Label>
                  <ul className="space-y-2 mt-3">{s.outcome.map((o) => (<li key={o} className="flex items-start gap-2"><span className="text-accent-warm text-[8px] mt-1.5">◆</span><span className="font-body text-[13px] text-foreground/70">{o}</span></li>))}</ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label>Pain points</Label>
                  <ul className="space-y-1.5 mt-3">{s.painPoints.map((p) => (<li key={p} className="font-body text-[13px] text-muted-foreground">— {p}</li>))}</ul>
                </div>
                <div>
                  <Label>Best for</Label>
                  <ul className="space-y-1.5 mt-3">{s.bestFor.map((b) => (<li key={b} className="font-body text-[13px] text-foreground/60">• {b}</li>))}</ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label>Without this</Label>
                  <p className="font-body text-[13px] text-muted-foreground/80 mt-3 italic">{s.withoutThis}</p>
                </div>
                <div>
                  <Label>Who we work with</Label>
                  <div className="flex flex-wrap gap-2 mt-3">{s.whoWeWorkWith.map((w) => (<span key={w} className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground border border-border px-3 py-1">{w}</span>))}</div>
                </div>
              </div>
              <div className="border-t border-border/30 pt-6 flex flex-wrap gap-x-12 gap-y-4 items-start">
                <div><Label>Timeline</Label><p className="font-mono text-[13px] text-foreground/70 mt-2">{s.timeline}</p></div>
                <div><Label>Pricing</Label><p className="font-mono text-[13px] text-accent-warm mt-2">{s.pricing}</p></div>
                <div><Label>Typical engagement</Label><p className="font-mono text-[13px] text-foreground/70 mt-2">{s.typicalEngagement}</p></div>
              </div>
              {s.note && (
                <div className="mt-6 border-l-2 border-accent-warm/30 pl-4">
                  <p className="font-body text-[13px] text-muted-foreground italic">{s.note}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RetainerCard = ({ r }: { r: Retainer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border group cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between py-8 md:py-10">
        <div className="flex items-baseline gap-4 md:gap-8 flex-1 min-w-0">
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/30 shrink-0">{r.num}</span>
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-display text-[clamp(17px,2.8vw,30px)] tracking-[0.02em] text-foreground group-hover:text-accent-warm transition-colors duration-300">{r.title}</h3>
              {r.star && <span className="text-accent-warm text-[10px]">★</span>}
            </div>
            <p className="font-body text-[14px] text-muted-foreground">{r.desc}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-4">
          <span className="font-mono text-[10px] tracking-[0.08em] text-accent-warm/50 hidden md:inline">{r.pricing}</span>
          <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-muted-foreground text-xl font-light">+</motion.span>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="pb-10 pl-[calc(10px+1rem)] md:pl-[calc(10px+2rem)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label>Outcome</Label>
                  <ul className="space-y-2 mt-3">{r.outcome.map((o) => (<li key={o} className="flex items-start gap-2"><span className="text-accent-warm text-[8px] mt-1.5">◆</span><span className="font-body text-[13px] text-foreground/70">{o}</span></li>))}</ul>
                </div>
                {r.includes && (
                  <div>
                    <Label>Includes</Label>
                    <div className="flex flex-wrap gap-2 mt-3">{r.includes.map((inc) => (<span key={inc} className="font-mono text-[10px] tracking-[0.08em] text-muted-foreground border border-border px-3 py-1">{inc}</span>))}</div>
                  </div>
                )}
              </div>
              <div className="mt-4 md:hidden"><Label>Pricing</Label><p className="font-mono text-[13px] text-accent-warm mt-2">{r.pricing}</p></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40">{children}</p>
);

const ServicesPage2 = () => {
  return (
    <main className="bg-background min-h-screen grain-overlay">
      <SEO
        title="Services — ØRIONS"
        description="Creative transformation, campaigns, production, events, digital experience, and creative communication. We focus on what actually drives growth."
        path="/services"
        keywords="creative agency services, brand transformation, campaign, production, event activation, digital experience, creative communication"
      />
      <Navbar />

      <section className="min-h-[55vh] flex items-end px-4 sm:px-6 md:px-12 pb-12 md:pb-20 pt-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
            <span className="text-accent-warm mr-2">✦</span> Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="font-display font-bold text-[clamp(28px,5vw,64px)] leading-[1] tracking-[0.02em] text-foreground mb-6">
            Services.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="font-body text-[15px] md:text-[17px] leading-[1.7] text-muted-foreground max-w-lg">
            We don't offer everything.<br />We focus on what actually drives growth.
          </motion.p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative border border-accent-warm/30 p-8 md:p-12 hover:border-accent-warm/50 transition-colors duration-300">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-warm mb-6">★ Start here</p>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6">If your brand has slowed down, start with:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <span className="font-display text-[15px] md:text-[17px] tracking-[0.02em] text-foreground">Creative Transformation</span>
                <span className="text-muted-foreground/30 hidden sm:inline self-center">—</span>
                <span className="font-body text-[14px] text-muted-foreground self-center">for clarity and direction</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
                <span className="font-display text-[15px] md:text-[17px] tracking-[0.02em] text-foreground">Signature Campaign</span>
                <span className="text-muted-foreground/30 hidden sm:inline self-center">—</span>
                <span className="font-body text-[14px] text-muted-foreground self-center">for immediate impact</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">Core Services</p></AnimatedSection>
          {coreServices.map((s, i) => (<AnimatedSection key={s.num} delay={i * 0.05}><CoreServiceCard s={s} /></AnimatedSection>))}
          <div className="border-t border-border" />
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection><p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-10">Retainer</p></AnimatedSection>
          {retainers.map((r, i) => (<AnimatedSection key={r.num} delay={i * 0.05}><RetainerCard r={r} /></AnimatedSection>))}
          <div className="border-t border-border" />
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 py-20 md:py-32 pb-32 md:pb-48">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6">
              <span className="text-accent-warm mr-2">✦</span> Ready?
            </p>
            <h2 className="font-display text-[clamp(24px,4vw,48px)] leading-[1.05] tracking-[0.02em] text-foreground mb-6">
              Let's build<br /><span className="text-accent-gradient">something worth noticing.</span>
            </h2>
            <div className="flex items-center justify-center gap-8 flex-wrap mt-10">
              <Link to="/contact" className="font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300">Start a project</Link>
              <Link to="/work" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-accent-warm transition-colors duration-300">View our work <span className="group-hover:translate-x-1 transition-transform duration-300">→</span></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage2;
