import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

const WorkPage = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <div className="pt-20">
      <WorkSection />
    </div>
    <Footer />
  </main>
);

export default WorkPage;
