import { Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Outlet } from "react-router-dom";
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
  <LazyMotion features={domAnimation}>
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
  </LazyMotion>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", lazy: page(() => import("./pages/About")) },
      { path: "work", lazy: page(() => import("./pages/Work")) },
      {
        path: "work/:slug",
        lazy: page(() => import("./pages/CaseStudy")),
        getStaticPaths: () => caseStudies.map((c) => `work/${c.slug}`),
      },
      { path: "thinking", lazy: page(() => import("./pages/Thinking")) },
      { path: "blog", lazy: page(() => import("./pages/Blog")) },
      {
        path: "blog/:slug",
        lazy: page(() => import("./pages/BlogPost")),
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },
      { path: "privacy", lazy: page(() => import("./pages/Privacy")) },
      { path: "contact", lazy: page(() => import("./pages/Contact")) },

      // (Legacy/shorthand paths — /pricing, /services, /journal, /consulting, … —
      //  are handled as server-side 301s in vercel.json, not client routes.)

      // Prerendered branded 404 (Vercel serves dist/404.html for unmatched URLs)
      { path: "404", lazy: page(() => import("./pages/NotFound")) },
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
];
