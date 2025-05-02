
import React, { Suspense, lazy, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import { useDefer } from '@/hooks/useDefer';
import '../styles/alt2.css';

// Import critical path components directly
import HeroSection from '../components/alt2/HeroSection';
import StatsSection from '../components/alt2/StatsSection';

// Lazy load non-critical components
const Services = lazy(() => import('../components/Services'));
const WebsiteCarbonCTA = lazy(() => import('../components/alt2/WebsiteCarbonCTA'));
const TestimonialsSection = lazy(() => import('../components/alt2/TestimonialsSection'));
const FinalCTA = lazy(() => import('../components/alt2/FinalCTA'));
const Sustainability = lazy(() => import('../components/Sustainability'));
const ClientLogos = lazy(() => import('../components/ClientLogos'));
const RecentProjects = lazy(() => import('../components/RecentProjects'));
const BlogPreview = lazy(() => import('../components/BlogPreview'));

const IndexAlt2 = () => {
  // Set page ready state
  useEffect(() => {
    // Mark document as ready for animations
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('page-ready');
    }
  }, []);

  // Set up intersection observer for animations after main content is loaded
  useDefer(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: '100px' 
    });
    
    document.querySelectorAll('.defer-animate').forEach(el => {
      observer.observe(el);
    });
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
        
        {/* Non-critical sections - lazy loaded */}
        <Suspense fallback={<div className="h-40"></div>}>
          <Services />
        </Suspense>
        
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
        
        <Suspense fallback={<div className="h-40"></div>}>
          <div className="defer-animate">
            <TestimonialsSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-40"></div>}>
          <div className="defer-animate">
            <FinalCTA />
          </div>
        </Suspense>
        
        {/* Load BlogPreview last as it makes API calls */}
        <Suspense fallback={<div className="h-40 relative overflow-hidden">
          <div className="container-custom text-center py-10">
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
          </div>
        </div>}>
          <div className="defer-animate" id="blog-section">
            <BlogPreview />
          </div>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default IndexAlt2;
