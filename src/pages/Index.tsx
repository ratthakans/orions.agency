import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SocialProofStrip from "@/components/SocialProofStrip";
// ImpactSection removed
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import OrionConstellation from "@/components/OrionConstellation";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <main className="bg-background min-h-screen">
      <Helmet>
        <title>ØRIONS — AI-Native Creative Agency | Human Thinking. Machine Speed. | Bangkok</title>
        <meta name="description" content="ØRIONS is an AI-native creative agency in Bangkok. Human thinking, machine speed. We help brands cut through noise with strategic depth and production velocity." />
        <link rel="canonical" href="https://orions.agency/" />
      </Helmet>
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />
      <ProblemSection />
      <SocialProofStrip />
      {/* ImpactSection removed */}
      <ProcessSection />
      <FAQSection />

      {/* CTA Bridge */}
      <section className="py-32 md:py-40 px-6 md:px-12 border-t border-divider text-center relative overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <OrionConstellation size="xl" opacity={0.06} animate={false} className="scale-150" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <span className="font-mono text-[9.5px] tracking-[0.28em] uppercase text-foreground/50 block mb-6">
              {t("Ready when you are", "พร้อมเมื่อคุณพร้อม")}
            </span>
            <h2 className="font-display text-[clamp(56px,8.5vw,130px)] leading-[0.88] tracking-[0.02em] text-foreground mb-6">
              {t(<>Ready to navigate<br />through the <span className="text-accent-gradient">noise?</span></>, <>พร้อมจะนำทางผ่าน<br />ทุก <span className="text-accent-gradient">noise?</span></>)}
            </h2>
            <p className="font-body text-base leading-[1.78] text-muted-foreground max-w-[420px] mx-auto mb-10">
              {t(
                "Tell us about your brand. We'll tell you exactly what it needs — and how fast we can build it.",
                "เล่าให้เราฟังเกี่ยวกับแบรนด์ของคุณ เราจะบอกว่ามันต้องการอะไร — และเราสร้างได้เร็วแค่ไหน"
              )}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-accent-gradient text-white font-mono text-[11px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
              >
                {t("Start a Project →", "เริ่ม Project →")}
              </button>
              <Link
                to="/contact"
                className="text-muted-foreground border-b border-divider font-mono text-[11px] tracking-[0.1em] uppercase px-4 py-3.5 hover:text-foreground hover:border-muted-foreground transition-all duration-300"
              >
                {t("Book a 30-min Call", "นัดคุย 30 นาที")}
              </Link>
            </div>
            <a href="mailto:hello@orions.agency" className="inline-block mt-7 font-mono text-[12px] tracking-[0.08em] text-muted-foreground border-b border-divider pb-0.5 hover:text-foreground transition-colors">
              hello@orions.agency
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
};

export default Index;
