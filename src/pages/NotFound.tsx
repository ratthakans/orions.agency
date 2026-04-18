import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
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
        <p className="label-mono text-grad-soft">404</p>
        <h1 className="mt-6 font-display text-grad text-[48px] md:text-[96px] leading-none">NOT FOUND</h1>
        <p className="mt-6 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-10 inline-block label-mono bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
