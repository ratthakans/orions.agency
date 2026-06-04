import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

// Below-the-fold routes are split into their own chunks to keep first load small.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Consulting = lazy(() => import("./pages/Consulting"));
const Diagnostic = lazy(() => import("./pages/Diagnostic"));
const Contact = lazy(() => import("./pages/Contact"));
const Journal = lazy(() => import("./pages/Journal"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="min-h-[60vh]" aria-hidden />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legacy paths → fold into the new structure */}
            <Route path="/manifesto" element={<Navigate to="/about" replace />} />
            <Route path="/approach" element={<Navigate to="/about" replace />} />
            <Route path="/pricing" element={<Navigate to="/services" replace />} />
            <Route path="/studio" element={<Navigate to="/work" replace />} />
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/ventures" element={<Navigate to="/work" replace />} />
            <Route path="/health-check" element={<Navigate to="/diagnostic" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
