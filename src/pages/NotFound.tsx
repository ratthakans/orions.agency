import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="bg-background min-h-screen flex flex-col grain-overlay">
      <SEO
        title="Page Not Found | ØRIONS"
        description="The page you are looking for does not exist. Return to the ØRIONS homepage to explore our services, work, and contact information."
        path={location.pathname}
        noindex
      />
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[30vw] font-medium tracking-[0.01em] text-stroke-lg opacity-[0.04]">
            404
          </span>
        </div>
        <div className="text-center relative z-10">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-6">Page Not Found</p>
          <h1 className="font-display text-[clamp(44px,6vw,96px)] leading-[0.9] tracking-[0.01em] text-foreground mb-4">
            Lost in the noise.
          </h1>
          <p className="font-body text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-primary-foreground bg-primary px-8 py-3 hover:bg-accent-warm hover:text-accent-warm-foreground transition-all duration-300"
          >
            Return Home
            <span>→</span>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
