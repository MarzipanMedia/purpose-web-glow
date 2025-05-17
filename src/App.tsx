
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Index from './pages/Index';
import IndexAlt from './pages/IndexAlt';
import About from './pages/About';
import Services from './pages/Services';
import SustainableWebDesign from './pages/services/SustainableWebDesign';
import AiSeo from './pages/services/AiSeo';
import DigitalMarketing from './pages/services/DigitalMarketing';
import DigitalContentCreation from './pages/services/DigitalContentCreation';
import ContentCreation from './pages/services/ContentCreation';
import Projects from './pages/Projects';
import BlogWithWordPress from './pages/BlogWithWordPress';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import BenAdams from './pages/BenAdams';
import WebsiteCarbon from './pages/WebsiteCarbon';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AlwaysWas from './pages/AlwaysWas';
import NotFound from './pages/NotFound';
import LinkInBio from './pages/LinkInBio';
import { HelmetProvider } from 'react-helmet-async';
import LogoDebug from './components/LogoDebug';
import NoFluffFixItList from './pages/NoFluffFixItList';

function App() {
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    // Function to track the event
    const trackEvent = () => {
      if (!tracked) {
        console.log('Tracking script called');
        // @ts-ignore
        window.dataLayer = window.dataLayer || [];
        // @ts-ignore
        window.dataLayer.push({
          event: 'pageLoad',
          pageTitle: document.title,
          pageURL: window.location.href,
        });
        setTracked(true);
      }
    };

    // Call the tracking function
    trackEvent();

    // Set up the mutation observer
    const observer = new MutationObserver(trackEvent);

    // Start observing the document for changes in title
    observer.observe(document, { subtree: true, childList: true });

    // Clean up the observer on unmount
    return () => observer.disconnect();
  }, [tracked]);

  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="vite-react-theme"
    >
      <HelmetProvider>
        <LogoDebug />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/alt" element={<IndexAlt />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sustainable-web-design" element={<SustainableWebDesign />} />
          <Route path="/services/ai-seo" element={<AiSeo />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/digital-content-creation" element={<DigitalContentCreation />} />
          <Route path="/services/content-creation" element={<ContentCreation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Projects />} />
          <Route path="/blog" element={<BlogWithWordPress />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ben-adams" element={<BenAdams />} />
          <Route path="/website-carbon" element={<WebsiteCarbon />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/alwayswas" element={<AlwaysWas />} />
          <Route path="/link" element={<LinkInBio />} />
          <Route path="/no-fluff-fix-it-list" element={<NoFluffFixItList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
