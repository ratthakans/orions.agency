import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const StudioPage = lazy(() => import("./pages/StudioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<Suspense fallback={null}><PageTransition><AboutPage /></PageTransition></Suspense>} />
        <Route path="/services" element={<Suspense fallback={null}><PageTransition><ServicesPage /></PageTransition></Suspense>} />
        <Route path="/work" element={<Suspense fallback={null}><PageTransition><WorkPage /></PageTransition></Suspense>} />
        <Route path="/industries" element={<Suspense fallback={null}><PageTransition><IndustriesPage /></PageTransition></Suspense>} />
        <Route path="/studio" element={<Suspense fallback={null}><PageTransition><StudioPage /></PageTransition></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={null}><PageTransition><ContactPage /></PageTransition></Suspense>} />
        <Route path="*" element={<Suspense fallback={null}><PageTransition><NotFound /></PageTransition></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
