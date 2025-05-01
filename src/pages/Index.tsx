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

const Index = () => {
  // Simplified CSS-based animation approach
  useEffect(() => {
    // Delay loading non-critical animations until after main content is rendered
    const animateElements = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      // Use simple Intersection Observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      animatedElements.forEach(el => observer.observe(el));
    };
    
    // Ensure main content is loaded first before handling animations
    if (document.readyState === 'complete') {
      setTimeout(animateElements, 100); // Small delay to prioritize critical content
    } else {
      window.addEventListener('load', () => setTimeout(animateElements, 100));
    }
    
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      <Header />
      
      <main className="flex-grow">
        {/* Main LCP element - optimized hero section */}
        <Hero />
        
        {/* Other content loads after initial render */}
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
        <BlogPreview />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
