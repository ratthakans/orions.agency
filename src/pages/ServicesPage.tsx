import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <div className="pt-20">
      <ServicesSection />
      <ProgramsSection />
    </div>
    <Footer />
  </main>
);

export default ServicesPage;
