import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const CareersPage = () => (
  <main className="bg-background min-h-screen">
    <Helmet>
      <title>Careers — Join ØRIONS Creative Team</title>
      <meta name="description" content="Join ØRIONS in Bangkok. Open positions for Video Editor, Graphic Designer, Digital Marketing, Social Media Manager, and Creative Strategist." />
      <link rel="canonical" href="https://orions.agency/careers" />
    </Helmet>
    <Navbar />
    <div className="pt-20">
      <CareersSection />
    </div>
    <Footer />
  </main>
);

export default CareersPage;
