import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <main className="bg-background min-h-screen">
    <Helmet>
      <title>Services — ØRIONS Creative Agency</title>
      <meta name="description" content="Brand direction, campaign creation, content systems, and digital experience design. Explore ØRIONS' full range of meaning-driven creative services." />
      <link rel="canonical" href="https://orions.agency/services" />
    </Helmet>
    <Navbar />
    <div className="pt-20">
      <ServicesSection />
      <ProgramsSection />
    </div>
    <Footer />
  </main>
);

export default ServicesPage;
