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

const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

const CareersPage = lazy(() => import("./pages/CareersPage"));
const AIStackPage = lazy(() => import("./pages/AIStackPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/services" element={<Suspense fallback={null}><PageTransition><ServicesPage /></PageTransition></Suspense>} />
        <Route path="/work" element={<Suspense fallback={null}><PageTransition><WorkPage /></PageTransition></Suspense>} />
        <Route path="/about" element={<Suspense fallback={null}><PageTransition><AboutPage /></PageTransition></Suspense>} />
        
        <Route path="/careers" element={<Suspense fallback={null}><PageTransition><CareersPage /></PageTransition></Suspense>} />
        <Route path="/ai-stack" element={<Suspense fallback={null}><PageTransition><AIStackPage /></PageTransition></Suspense>} />
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
