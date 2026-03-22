import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Index from "./pages/Index";
import ServicesPage2 from "./pages/ServicesPage2";
import ProcessPage from "./pages/ProcessPage";
import ContactPage2 from "./pages/ContactPage2";
import StudioPage from "./pages/StudioPage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
            <Route path="/work/:slug" element={<PageTransition><WorkDetailPage /></PageTransition>} />
            <Route path="/problem" element={<Navigate to="/process" replace />} />
            <Route path="/services" element={<PageTransition><ServicesPage2 /></PageTransition>} />
            <Route path="/process" element={<PageTransition><ProcessPage /></PageTransition>} />
            <Route path="/philosophy" element={<Navigate to="/process" replace />} />
            <Route path="/studio" element={<PageTransition><StudioPage /></PageTransition>} />
            <Route path="/value" element={<Navigate to="/" replace />} />
            <Route path="/clients" element={<PageTransition><ClientsPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage2 /></PageTransition>} />
            <Route path="/industries" element={<Navigate to="/package" replace />} />
            <Route path="*" element={<PageTransition><Index /></PageTransition>} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
