import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <ImpactSection />
    <ServicesSection />
    <ProgramsSection />
    <WorkSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
