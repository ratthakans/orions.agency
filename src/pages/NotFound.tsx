import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { track } from "@/lib/analytics";

const NotFound = () => {
  const location = useLocation();

  // Track 404s in analytics instead of spamming console.error.
  useEffect(() => {
    track("404", { path: location.pathname });
  }, [location.pathname]);

  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6">
      <SEO
        title="Page Not Found | ØRIONS"
        description="The page you are looking for does not exist."
        path={location.pathname}
        noindex
      />
      <div className="text-center">
        <p className="index-badge text-muted-foreground">ERROR · 404</p>
        <h1 className="mt-6 font-display text-[64px] md:text-[140px] leading-[0.85] tracking-[-0.04em]">NOT FOUND</h1>
        <p className="mt-6 text-muted-foreground font-thai">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-10 inline-block index-badge bg-cinnabar text-background px-6 py-3 transition-opacity"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
