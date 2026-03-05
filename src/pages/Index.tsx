import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ImpactSection from "@/components/ImpactSection";
import StartProjectDialog from "@/components/StartProjectDialog";
import Footer from "@/components/Footer";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection onStartProject={() => setDialogOpen(true)} />
      <ProblemSection />
      <ImpactSection />
      <Footer />
      <StartProjectDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </main>
  );
};

export default Index;
