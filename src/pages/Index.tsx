
import React, { useEffect } from 'react';
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
import DeferredLoad from '@/components/DeferredLoad';

const Index = () => {
  // Add scroll animation observer - defer until after LCP 
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    
    // Use requestIdleCallback to defer setting up animations
    const setupAnimations = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
  
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer?.observe(el));
    };
    
    // Check if requestIdleCallback is available
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleCallback = (window as any).requestIdleCallback || ((cb: Function) => setTimeout(cb, 1));
      idleCallback(() => setupAnimations());
    } else {
      // Fallback to setTimeout
      setTimeout(setupAnimations, 1000);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Home page specific schema data
  const homeSchemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Marzipan Digital",
      "description": "Sustainable Web Design & AI-Driven SEO for Purpose-Driven Brands in Sydney. Creating eco-friendly websites that deliver results.",
      "url": "https://marzipan.com.au",
      "logo": "https://marzipan.com.au/marzipan-logo.webp",
      "image": "https://marzipan.com.au/marzipan-web-design-syd-min.webp",
      "telephone": "+61-2-8005-0403",
      "email": "hello@marzipan.com.au",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22-36 Mountain St",
        "addressLocality": "Ultimo",
        "addressRegion": "NSW",
        "postalCode": "2007",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.880836,
        "longitude": 151.199997
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:30"
      },
      "sameAs": [
        "https://www.instagram.com/marzipanmedia",
        "https://linkedin.com/company/18211194"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design & Affordable SEO" 
        description="Marzipan Digital creates eco-friendly websites and ethical AI-driven SEO strategies for purpose-driven Australian brands. Lower your digital carbon footprint while increasing visibility."
        image="/marzipan-web-design-syd-min.webp"
        keywords="sustainable web design Sydney, eco-friendly websites, ethical SEO, purpose-driven digital marketing, low carbon websites"
        schemaData={homeSchemaData}
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero is the LCP element - load it immediately */}
        <Hero />
        
        {/* Defer components that are not in the initial viewport */}
        <DeferredLoad>
          <StatsSection />
        </DeferredLoad>
        
        <DeferredLoad options={{ waitForLCP: true, delay: 100 }}>
          <section className="relative bg-gradient-to-b from-gray-50 to-white">
            <Services />
          </section>
        </DeferredLoad>
        
        <DeferredLoad options={{ waitForLCP: true, delay: 200 }}>
          <section className="relative">
            <Sustainability />
          </section>
        </DeferredLoad>
        
        <DeferredLoad options={{ waitForLCP: true, delay: 300, waitForIdle: true }}>
          <WebsiteCarbonCTA />
        </DeferredLoad>
        
        <DeferredLoad options={{ waitForLCP: true, delay: 400, waitForIdle: true }}>
          <ClientLogos />
        </DeferredLoad>
        
        <DeferredLoad options={{ waitForLCP: true, delay: 500, waitForIdle: true }}>
          <RecentProjects />
        </DeferredLoad>
        
        <DeferredLoad options={{ waitForLCP: true, delay: 600, waitForIdle: true }}>
          <TestimonialsSection />
        </DeferredLoad>
        
        <DeferredLoad options={{ waitForLCP: true, delay: 700, waitForIdle: true }}>
          <FinalCTA />
        </DeferredLoad>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
