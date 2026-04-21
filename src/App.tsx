import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import RealEstate from "./pages/RealEstate.tsx";
import Technology from "./pages/Technology.tsx";
import Contact from "./pages/Contact.tsx";
import AgentReadiness from "./pages/AgentReadiness.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/real-estate" element={<RealEstate />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/agent-readiness" element={<AgentReadiness />} />
              <Route path="/for-agents" element={<AgentReadiness />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
