
import React, { useEffect } from 'react';
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
import { LocalBusinessSchema } from '@/components/seo/SchemaComponents';
import { Link } from 'react-router-dom';

const Index = () => {
  // Add scroll animation observer
  useEffect(() => {
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

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands. Ensuring your online presence is as powerful as your purpose."
      />
      {/* Add LocalBusinessSchema for homepage */}
      <LocalBusinessSchema />
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <StatsSection />
        <CarbonShowcase />
        
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          <Services />
        </section>
        
        <section className="relative">
          <Sustainability />
        </section>
        
        <WebsiteCarbonCTA />
        <ClientLogos />
        <RecentProjects />
        <BlogPreview />
        <TestimonialsSection />
        <FinalCTA />
        
        {/* Resources Banner */}
        <div className="py-8 bg-marzipan/30">
          <div className="container-custom text-center">
            <h3 className="text-xl font-display font-semibold mb-3">Looking for digital marketing resources?</h3>
            <p className="mb-4">Check out our free guides, tools and templates to help your business grow online.</p>
            <Link 
              to="/resources" 
              className="inline-flex items-center gap-2 bg-brandBlue text-white px-6 py-2 rounded-lg transition-all hover:bg-brandBlue/90"
            >
              Explore Resources <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
