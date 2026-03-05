import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

const WorkPage = () => (
  <main className="bg-background min-h-screen">
    <Helmet>
      <title>Work — ØRIONS Creative Agency Portfolio</title>
      <meta name="description" content="Selected projects where ØRIONS helped brands find clarity and create impact through strategy, campaigns, and digital experiences." />
      <link rel="canonical" href="https://orions.agency/work" />
    </Helmet>
    <Navbar />
    <div className="pt-20">
      <WorkSection />
    </div>
    <Footer />
  </main>
);

export default WorkPage;
