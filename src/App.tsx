import { lazy, Suspense, useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";

// Below-the-fold routes are split into their own chunks to keep first load small.
// Each import fn is reused for both lazy() and idle prefetch (warms the module cache
// so a nav click renders instantly instead of waiting on a network fetch).
const routes = {
  About: () => import("./pages/About"),
  Services: () => import("./pages/Services"),
  Work: () => import("./pages/Work"),
  CaseStudy: () => import("./pages/CaseStudy"),
  Package: () => import("./pages/Package"),
  Contact: () => import("./pages/Contact"),
  Diagnostic: () => import("./pages/Diagnostic"),
  Privacy: () => import("./pages/Privacy"),
  NotFound: () => import("./pages/NotFound"),
};

const About = lazy(routes.About);
const Services = lazy(routes.Services);
const Work = lazy(routes.Work);
const CaseStudy = lazy(routes.CaseStudy);
const Package = lazy(routes.Package);
const Contact = lazy(routes.Contact);
const Diagnostic = lazy(routes.Diagnostic);
const Privacy = lazy(routes.Privacy);
const NotFound = lazy(routes.NotFound);

/** Warm all route chunks during idle time after first paint → instant navigation. */
const usePrefetchRoutes = () => {
  useEffect(() => {
    // Warm light below-the-fold routes, but skip the heavy Contact chunk
    // (Supabase + zod, ~270 KB) — it loads on demand when a visitor heads there.
    const prefetch = () =>
      Object.entries(routes).forEach(([name, load]) => { if (name !== "Contact") load(); });
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const id = ric ? ric(prefetch) : window.setTimeout(prefetch, 1500);
    return () => {
      const cic = (window as Window & { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback;
      if (ric && cic) cic(id);
      else clearTimeout(id);
    };
  }, []);
};

const App = () => {
  usePrefetchRoutes();
  return (
    <TooltipProvider>
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Layout>
          <ErrorBoundary>
          <Suspense fallback={<div className="min-h-[60vh]" aria-hidden />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/package" element={<Package />} />
            <Route path="/pricing" element={<Navigate to="/package" replace />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legacy paths → fold into the new structure */}
            <Route path="/manifesto" element={<Navigate to="/about" replace />} />
            <Route path="/approach" element={<Navigate to="/about" replace />} />
            <Route path="/studio" element={<Navigate to="/work" replace />} />
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/ventures" element={<Navigate to="/work" replace />} />
            <Route path="/health-check" element={<Navigate to="/contact" replace />} />
            <Route path="/consulting" element={<Navigate to="/services" replace />} />
            <Route path="/journal" element={<Navigate to="/" replace />} />
            <Route path="/journal/:slug" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
