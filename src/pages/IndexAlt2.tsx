import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import { useDefer } from '@/hooks/useDefer';

// Import existing sections
import Services from '../components/Services';
import Sustainability from '../components/Sustainability';
import ClientLogos from '../components/ClientLogos';
import RecentProjects from '../components/RecentProjects';
import BlogPreview from '../components/BlogPreview';

// Import newly created section components
import HeroSection from '../components/alt2/HeroSection';
import StatsSection from '../components/alt2/StatsSection';
import WebsiteCarbonCTA from '../components/alt2/WebsiteCarbonCTA';
import TestimonialsSection from '../components/alt2/TestimonialsSection';
import FinalCTA from '../components/alt2/FinalCTA';

const IndexAlt2 = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  
  // Defer non-critical animations
  useDefer(() => {
    const animatedElements = document.querySelectorAll('.defer-animate');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).classList.add('animate-visible');
      }, index * 100);  // Stagger animations
    });
  }, 100, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      <Header />
      
      <main className="flex-grow" ref={mainRef}>
        {/* Hero Section - optimized for LCP */}
        <HeroSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Services Section */}
        <Services />
        
        {/* Our Approach Section */}
        <Sustainability />
        
        {/* Client Logos Section */}
        <ClientLogos />
        
        {/* Website Carbon CTA */}
        <WebsiteCarbonCTA />
        
        {/* Other sections - deferred loading */}
        <div className="defer-animate">
          <RecentProjects />
        </div>
        
        <div className="defer-animate">
          <BlogPreview />
        </div>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default IndexAlt2;
