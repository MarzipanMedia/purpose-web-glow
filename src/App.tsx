
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import IndexAlt from "./pages/IndexAlt";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogWithWordPress from "./pages/BlogWithWordPress";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import SustainableWebDesign from "./pages/services/SustainableWebDesign";
import AiSeo from "./pages/services/AiSeo";
import ContentCreation from "./pages/services/ContentCreation";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import DigitalContentCreation from "./pages/services/DigitalContentCreation";
import WebsiteCarbon from "./pages/WebsiteCarbon";
import ProjectDetail from "./components/projects/ProjectDetail";
import Resources from "./pages/Resources";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

// Page transition wrapper component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <div className="page-transition">{children}</div>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PageTransition><Index /></PageTransition>} />
              <Route path="/alt" element={<PageTransition><IndexAlt /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/services/sustainable-web-design" element={<PageTransition><SustainableWebDesign /></PageTransition>} />
              <Route path="/services/ai-seo" element={<PageTransition><AiSeo /></PageTransition>} />
              <Route path="/services/content-creation" element={<PageTransition><ContentCreation /></PageTransition>} />
              <Route path="/services/digital-marketing" element={<PageTransition><DigitalMarketing /></PageTransition>} />
              <Route path="/services/digital-content-creation" element={<PageTransition><DigitalContentCreation /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/projects/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/wordpress-blog" element={<PageTransition><BlogWithWordPress /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/website-carbon" element={<PageTransition><WebsiteCarbon /></PageTransition>} />
              <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
