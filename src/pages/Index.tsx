import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import ImpactSection from "@/components/ImpactSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import StickyProjectCTA from "@/components/StickyProjectCTA";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>ØRIONS — Meaning-Driven Creative Agency | Bangkok</title>
        <meta name="description" content="ØRIONS is a meaning-driven creative agency in Bangkok. We help brands cut through noise with strategic positioning, campaigns, content systems, and digital experiences." />
        <link rel="canonical" href="https://orions.agency/" />
      </Helmet>
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />
      <ProblemSection />
      <SocialProofStrip />
      <ImpactSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />

      {/* CTA Bridge */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                  Ready to cut<br />through the noise?
                </p>
                <p className="font-body text-sm text-muted-foreground mt-4">
                  Currently accepting Q2 2026 projects · Join 50+ brands that chose clarity over noise
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setDialogOpen(true)}
                  className="group/btn bg-foreground text-background px-8 py-4 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Start a Project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <Link
                  to="/work"
                  className="border border-divider text-foreground px-8 py-4 text-sm font-display font-medium tracking-wide hover:border-foreground/50 transition-colors duration-300 text-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <StickyProjectCTA onClick={() => setDialogOpen(true)} />
    </main>
  );
};

export default Index;
