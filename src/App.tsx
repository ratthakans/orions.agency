import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Index from "./pages/Index";
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
            {/* Redirect old routes to homepage sections */}
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/work" element={<Navigate to="/#work" replace />} />
            <Route path="/services" element={<Navigate to="/#services" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            <Route path="/process" element={<Navigate to="/#services" replace />} />
            <Route path="/studio" element={<Navigate to="/#about" replace />} />
            <Route path="/package/hospitality" element={<Navigate to="/#services" replace />} />
            <Route path="/problem" element={<Navigate to="/" replace />} />
            <Route path="/philosophy" element={<Navigate to="/" replace />} />
            <Route path="/value" element={<Navigate to="/" replace />} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
