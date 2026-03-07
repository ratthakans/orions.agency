import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <main className="bg-background min-h-screen">
    <Helmet>
      <title>Contact — ØRIONS Creative Agency</title>
      <meta name="description" content="Get in touch with ØRIONS. Start a project, ask a question, or visit our office in Bangkok." />
      <link rel="canonical" href="https://orions.agency/contact" />
    </Helmet>
    <Navbar />
    <div className="pt-[62px]">
      <ContactSection />
    </div>
    <Footer />
  </main>
);

export default ContactPage;
