
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Sustainability from '../components/Sustainability';
import ClientLogos from '../components/ClientLogos';
import RecentProjects from '../components/RecentProjects';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import StatsSection from '@/components/home/StatsSection';
import WebsiteCarbonCTA from '@/components/home/WebsiteCarbonCTA';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinalCTA from '@/components/home/FinalCTA';
import { useDefer } from '@/hooks/useDefer';

const Index = () => {
  // Track if non-critical content should load
  const [shouldLoadNonCritical, setShouldLoadNonCritical] = useState(false);
  
  // Use the optimized defer hook to delay non-critical tasks
  useDefer(() => {
    setShouldLoadNonCritical(true);
  }, 100);

  // Simplified CSS-based animation approach
  useEffect(() => {
    // Only set up animations when non-critical content should load
    if (!shouldLoadNonCritical) return;
    
    // Use IntersectionObserver for efficient animations
    const animateElements = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      // Use single Intersection Observer for all elements to reduce overhead
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '50px' });
      
      animatedElements.forEach(el => observer.observe(el));
      
      return () => observer.disconnect();
    };
    
    // Run animation setup when non-critical content is ready to load
    const animationSetup = setTimeout(animateElements, 100);
    
    return () => clearTimeout(animationSetup);
  }, [shouldLoadNonCritical]);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      <Header />
      
      <main className="flex-grow">
        {/* Main LCP element - optimized hero section always loads immediately */}
        <Hero />
        
        {/* Mobile-optimized progressive loading of non-critical sections */}
        {shouldLoadNonCritical ? (
          <>
            <StatsSection />
            
            <section className="relative bg-gradient-to-b from-gray-50 to-white animate-on-scroll">
              <Services />
            </section>
            
            <section className="relative animate-on-scroll">
              <Sustainability />
            </section>
            
            <WebsiteCarbonCTA />
            <ClientLogos />
            <RecentProjects />
            <TestimonialsSection />
            <FinalCTA />
          </>
        ) : (
          // Lightweight placeholder to maintain layout stability
          <div className="h-96 flex items-center justify-center">
            <div className="animate-pulse w-3/4 h-4 bg-gray-200 rounded"></div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
