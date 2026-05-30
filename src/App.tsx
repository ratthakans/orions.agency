import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import HealthCheck from "./pages/HealthCheck";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Projects from "./pages/Projects";
import Consulting from "./pages/Consulting";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/manifesto" element={<Navigate to="/about" replace />} />
            <Route path="/approach" element={<Navigate to="/about" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/diagnostic" element={<HealthCheck />} />
            <Route path="/health-check" element={<Navigate to="/diagnostic" replace />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/studio" element={<Projects />} />
            <Route path="/projects" element={<Navigate to="/studio" replace />} />
            <Route path="/ventures" element={<Navigate to="/studio" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
