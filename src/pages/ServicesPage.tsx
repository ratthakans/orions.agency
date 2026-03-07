import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <main className="bg-background min-h-screen">
    <Helmet>
      <title>Services — ØRIONS Creative Agency</title>
      <meta name="description" content="AI-accelerated creative services. Brand strategy, campaigns, content production, social media, SEO, and retainer plans starting at ฿18,000/month." />
      <link rel="canonical" href="https://orions.agency/services" />
    </Helmet>
    <Navbar />
    <div className="pt-[62px]">
      <ServicesSection />
    </div>
    <Footer />
  </main>
);

export default ServicesPage;
