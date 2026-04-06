import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailClientPage from "./pages/ProjectDetailClientPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
            <Route path="/work/:slug" element={<PageTransition><ProjectDetailPage /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
            <Route path="/projects/:slug" element={<PageTransition><ProjectDetailClientPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            {/* Redirects for old routes */}
            <Route path="/process" element={<Navigate to="/services" replace />} />
            <Route path="/studio" element={<Navigate to="/about" replace />} />
            <Route path="/package/hospitality" element={<Navigate to="/services" replace />} />
            <Route path="/problem" element={<Navigate to="/" replace />} />
            <Route path="/philosophy" element={<Navigate to="/about" replace />} />
            <Route path="/value" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
