
import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import { useDefer } from '@/hooks/useDefer';
import '../styles/alt2.css';

// Import critical path components directly
import Services from '../components/Services';
import HeroSection from '../components/alt2/HeroSection';
import StatsSection from '../components/alt2/StatsSection';

// Lazy load non-critical components
const WebsiteCarbonCTA = lazy(() => import('../components/alt2/WebsiteCarbonCTA'));
const TestimonialsSection = lazy(() => import('../components/alt2/TestimonialsSection'));
const FinalCTA = lazy(() => import('../components/alt2/FinalCTA'));
const Sustainability = lazy(() => import('../components/Sustainability'));
const ClientLogos = lazy(() => import('../components/ClientLogos'));
const RecentProjects = lazy(() => import('../components/RecentProjects'));
const BlogPreview = lazy(() => import('../components/BlogPreview'));

const IndexAlt2 = () => {
  // Use defer for animations only after the main content is loaded
  useDefer(() => {
    const animateElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '100px' });
      
      document.querySelectorAll('.defer-animate').forEach(el => {
        observer.observe(el);
      });
      
      // Mark document as having LCP loaded
      document.documentElement.classList.add('lcp-loaded');
    };
    
    animateElements();
  }, 1000); // Delay animations until after LCP

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      <Header />
      
      <main className="flex-grow">
        {/* Critical path - renders immediately */}
        <HeroSection />
        <StatsSection />
        
        {/* Services section - important but not LCP */}
        <Services />
        
        {/* Deferred content that loads after LCP */}
        <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
          <div className="defer-animate">
            <WebsiteCarbonCTA />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
          <div className="defer-animate">
            <Sustainability />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
          <div className="defer-animate">
            <ClientLogos />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
          <div className="defer-animate">
            <RecentProjects />
          </div>
        </Suspense>
        
        {/* Non-critical sections - load last */}
        <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
          <div className="defer-animate">
            <TestimonialsSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
          <div className="defer-animate">
            <FinalCTA />
          </div>
        </Suspense>
        
        {/* Load BlogPreview last as it makes API calls */}
        <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
          <div className="defer-animate">
            <BlogPreview />
          </div>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndexAlt2;
