
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { useIsMobile } from "./hooks/use-mobile";
import Index from "./pages/Index";
import IndexAlt from "./pages/IndexAlt";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
// import Blog from "./pages/Blog"; // Commented out static blog
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
import BenAdams from "./pages/BenAdams";
import AlwaysWas from "./pages/AlwaysWas";
import LinkInBio from "./pages/LinkInBio";

// Create a cache-optimized query client with proper settings for WordPress API
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Mobile-optimized page transition wrapper component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Scroll to top on page change - but defer on mobile
    if (isMobile) {
      // Use requestAnimationFrame for smoother scrolling on mobile
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, isMobile]);

  // On mobile, use a simpler transition with no animation delay
  const transitionClass = isMobile ? 
    "page-transition mobile-transition" : 
    "page-transition";

  return <div className={transitionClass}>{children}</div>;
};

// Route not found handler component 
const RouteNotFound = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log(`Route not found: ${location.pathname}`);
  }, [location.pathname]);
  
  return <NotFound />;
};

// Wrapping App component in React.StrictMode to help catch potential issues
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
              {/* Changed default blog route to use WordPress version */}
              <Route path="/blog" element={<PageTransition><BlogWithWordPress /></PageTransition>} />
              <Route path="/static-blog" element={<PageTransition><BlogWithWordPress /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/website-carbon" element={<PageTransition><WebsiteCarbon /></PageTransition>} />
              <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
              <Route path="/benadams" element={<PageTransition><BenAdams /></PageTransition>} />
              <Route path="/alwayswas" element={<PageTransition><AlwaysWas /></PageTransition>} />
              {/* Skip PageTransition wrapper for LinkInBio to avoid useEffect issues */}
              <Route path="/link" element={<LinkInBio />} />
              <Route path="/404" element={<PageTransition><NotFound /></PageTransition>} />
              <Route path="*" element={<PageTransition><RouteNotFound /></PageTransition>} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
