import Navbar from "@/components/Navbar";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const CareersPage = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <div className="pt-20">
      <CareersSection />
    </div>
    <Footer />
  </main>
);

export default CareersPage;
