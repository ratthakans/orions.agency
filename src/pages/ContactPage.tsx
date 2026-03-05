import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <div className="pt-20">
      <ContactSection />
    </div>
    <Footer />
  </main>
);

export default ContactPage;
