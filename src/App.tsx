import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Tarifs from "./pages/Tarifs";
import LeveeDeFonds from "./pages/services/LeveeDeFonds";
import DroitDesSocietes from "./pages/services/DroitDesSocietes";
import NouvellesTechnologies from "./pages/services/NouvellesTechnologies";
import ProprieteIntellectuelle from "./pages/services/ProprieteIntellectuelle";
import DroitDesContrats from "./pages/services/DroitDesContrats";
import DroitFiscal from "./pages/services/DroitFiscal";
import RGPD from "./pages/services/RGPD";
import DroitSocialTravailParis from "./pages/services/DroitSocialTravailParis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/levee-de-fonds" element={<LeveeDeFonds />} />
                <Route path="/services/droit-des-societes" element={<DroitDesSocietes />} />
                <Route path="/services/nouvelles-technologies" element={<NouvellesTechnologies />} />
                <Route path="/services/propriete-intellectuelle" element={<ProprieteIntellectuelle />} />
                <Route path="/services/droit-des-contrats" element={<DroitDesContrats />} />
                <Route path="/services/droit-fiscal" element={<DroitFiscal />} />
                <Route path="/services/rgpd" element={<RGPD />} />
                <Route path="/services/droit-social-travail" element={<DroitSocialTravailParis />} />
                <Route path="/equipe" element={<Team />} />
                <Route path="/actualites" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route path="/mentions-legales" element={<Legal />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
