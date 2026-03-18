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
    <main className="bg-background min-h-screen flex flex-col">
      <SEO
        title="Page Not Found | ØRIONS"
        description="The page you are looking for does not exist. Return to the ØRIONS homepage to explore our services, work, and contact information."
        path={location.pathname}
        noindex
      />
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[30vw] font-bold tracking-tighter text-stroke-lg opacity-[0.04]">
            404
          </span>
        </div>
        <div className="text-center relative z-10">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body mb-6">Page Not Found</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Lost in the noise.
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-display font-medium tracking-wide hover:bg-accent-warm hover:text-accent-warm-foreground transition-colors duration-300"
          >
            Return Home
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
