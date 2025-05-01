
import React, { useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Sustainability from '../components/Sustainability';
import ClientLogos from '../components/ClientLogos';
import RecentProjects from '../components/RecentProjects';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import StatsSection from '@/components/home/StatsSection';
import WebsiteCarbonCTA from '@/components/home/WebsiteCarbonCTA';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinalCTA from '@/components/home/FinalCTA';
import CarbonShowcase from '@/components/carbon/CarbonShowcase';

const Index = () => {
  // Optimized scroll animation observer that doesn't block rendering
  const setupAnimations = useCallback(() => {
    if (typeof window.requestIdleCallback !== 'undefined') {
      window.requestIdleCallback(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
    
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
    
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));
      }, 100);
    }
  }, []);

  useEffect(() => {
    // Delay animation setup to prioritize content rendering
    setupAnimations();
    
    return () => {
      // Nothing to clean up since we're handling unobserve in the observer itself
    };
  }, [setupAnimations]);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <StatsSection />
        
        {/* Lazy load non-critical sections */}
        <CarbonShowcase />
        
        <section className="relative bg-gradient-to-b from-gray-50 to-white animate-on-scroll">
          <Services />
        </section>
        
        <section className="relative animate-on-scroll">
          <Sustainability />
        </section>
        
        <WebsiteCarbonCTA />
        <ClientLogos />
        <RecentProjects />
        <BlogPreview />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
