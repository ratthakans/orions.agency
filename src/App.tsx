import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import Index from "./pages/Index";
import ProblemPage from "./pages/ProblemPage";
import ServicesPage2 from "./pages/ServicesPage2";
import ProcessPage from "./pages/ProcessPage";
import ValuePage from "./pages/ValuePage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage2 from "./pages/ContactPage2";

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
            <Route path="/problem" element={<PageTransition><ProblemPage /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage2 /></PageTransition>} />
            <Route path="/process" element={<PageTransition><ProcessPage /></PageTransition>} />
            <Route path="/philosophy" element={<PageTransition><PhilosophyPage /></PageTransition>} />
            <Route path="/value" element={<PageTransition><ValuePage /></PageTransition>} />
            <Route path="/clients" element={<PageTransition><ClientsPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage2 /></PageTransition>} />
            <Route path="*" element={<PageTransition><Index /></PageTransition>} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
