import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import { caseStudies } from "./data/caseStudies";
import { blogPosts } from "./data/blog";

// Pages export a default component; adapt that to react-router's lazy ({ Component }).
type PageModule = { default: React.ComponentType };
const page = (load: () => Promise<PageModule>) => async () => ({ Component: (await load()).default });

const RootLayout = () => (
  <TooltipProvider>
    <Sonner />
    <ScrollToTop />
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<div className="min-h-[60vh]" aria-hidden />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  </TooltipProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", lazy: page(() => import("./pages/About")) },
      { path: "services", lazy: page(() => import("./pages/Services")) },
      { path: "work", lazy: page(() => import("./pages/Work")) },
      {
        path: "work/:slug",
        lazy: page(() => import("./pages/CaseStudy")),
        getStaticPaths: () => caseStudies.map((c) => `work/${c.slug}`),
      },
      { path: "package", lazy: page(() => import("./pages/Package")) },
      { path: "diagnostic", lazy: page(() => import("./pages/Diagnostic")) },
      { path: "blog", lazy: page(() => import("./pages/Blog")) },
      {
        path: "blog/:slug",
        lazy: page(() => import("./pages/BlogPost")),
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },
      { path: "privacy", lazy: page(() => import("./pages/Privacy")) },
      { path: "contact", lazy: page(() => import("./pages/Contact")) },

      // Legacy / shorthand paths → client-side redirects (render null during SSG).
      { path: "pricing", element: <Navigate to="/package" replace /> },
      { path: "manifesto", element: <Navigate to="/about" replace /> },
      { path: "approach", element: <Navigate to="/about" replace /> },
      { path: "studio", element: <Navigate to="/work" replace /> },
      { path: "projects", element: <Navigate to="/work" replace /> },
      { path: "ventures", element: <Navigate to="/work" replace /> },
      { path: "health-check", element: <Navigate to="/contact" replace /> },
      { path: "consulting", element: <Navigate to="/services" replace /> },
      { path: "journal", element: <Navigate to="/blog" replace /> },
      { path: "journal/:slug", element: <Navigate to="/blog" replace /> },

      // Prerendered branded 404 (Vercel serves dist/404.html for unmatched URLs)
      { path: "404", lazy: page(() => import("./pages/NotFound")) },
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
];
