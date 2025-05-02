
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
import WebsiteCarbonCTA from '../components/alt2/WebsiteCarbonCTA';
import TestimonialsSection from '../components/alt2/TestimonialsSection';
import FinalCTA from '../components/alt2/FinalCTA';

// Lazy load non-critical components
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
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.defer-animate').forEach(el => {
        observer.observe(el);
      });
    };
    
    animateElements();
  }, 800);

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
        <Suspense fallback={<div className="h-40"></div>}>
          <div className="defer-animate">
            <WebsiteCarbonCTA />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40"></div>}>
          <div className="defer-animate">
            <Sustainability />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40"></div>}>
          <div className="defer-animate">
            <ClientLogos />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40"></div>}>
          <div className="defer-animate">
            <RecentProjects />
          </div>
        </Suspense>
        
        {/* Non-critical sections - load last */}
        <TestimonialsSection />
        <FinalCTA />
        
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
